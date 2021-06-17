import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_json1_0CountClosedWorkflowExecutionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "SimpleWorkflowService.CountClosedWorkflowExecutions",
        };
        body = JSON.stringify(serializeAws_json1_0CountClosedWorkflowExecutionsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0CountOpenWorkflowExecutionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "SimpleWorkflowService.CountOpenWorkflowExecutions",
        };
        body = JSON.stringify(serializeAws_json1_0CountOpenWorkflowExecutionsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0CountPendingActivityTasksCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "SimpleWorkflowService.CountPendingActivityTasks",
        };
        body = JSON.stringify(serializeAws_json1_0CountPendingActivityTasksInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0CountPendingDecisionTasksCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "SimpleWorkflowService.CountPendingDecisionTasks",
        };
        body = JSON.stringify(serializeAws_json1_0CountPendingDecisionTasksInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0DeprecateActivityTypeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "SimpleWorkflowService.DeprecateActivityType",
        };
        body = JSON.stringify(serializeAws_json1_0DeprecateActivityTypeInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0DeprecateDomainCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "SimpleWorkflowService.DeprecateDomain",
        };
        body = JSON.stringify(serializeAws_json1_0DeprecateDomainInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0DeprecateWorkflowTypeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "SimpleWorkflowService.DeprecateWorkflowType",
        };
        body = JSON.stringify(serializeAws_json1_0DeprecateWorkflowTypeInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0DescribeActivityTypeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "SimpleWorkflowService.DescribeActivityType",
        };
        body = JSON.stringify(serializeAws_json1_0DescribeActivityTypeInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0DescribeDomainCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "SimpleWorkflowService.DescribeDomain",
        };
        body = JSON.stringify(serializeAws_json1_0DescribeDomainInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0DescribeWorkflowExecutionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "SimpleWorkflowService.DescribeWorkflowExecution",
        };
        body = JSON.stringify(serializeAws_json1_0DescribeWorkflowExecutionInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0DescribeWorkflowTypeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "SimpleWorkflowService.DescribeWorkflowType",
        };
        body = JSON.stringify(serializeAws_json1_0DescribeWorkflowTypeInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0GetWorkflowExecutionHistoryCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "SimpleWorkflowService.GetWorkflowExecutionHistory",
        };
        body = JSON.stringify(serializeAws_json1_0GetWorkflowExecutionHistoryInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0ListActivityTypesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "SimpleWorkflowService.ListActivityTypes",
        };
        body = JSON.stringify(serializeAws_json1_0ListActivityTypesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0ListClosedWorkflowExecutionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "SimpleWorkflowService.ListClosedWorkflowExecutions",
        };
        body = JSON.stringify(serializeAws_json1_0ListClosedWorkflowExecutionsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0ListDomainsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "SimpleWorkflowService.ListDomains",
        };
        body = JSON.stringify(serializeAws_json1_0ListDomainsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0ListOpenWorkflowExecutionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "SimpleWorkflowService.ListOpenWorkflowExecutions",
        };
        body = JSON.stringify(serializeAws_json1_0ListOpenWorkflowExecutionsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0ListTagsForResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "SimpleWorkflowService.ListTagsForResource",
        };
        body = JSON.stringify(serializeAws_json1_0ListTagsForResourceInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0ListWorkflowTypesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "SimpleWorkflowService.ListWorkflowTypes",
        };
        body = JSON.stringify(serializeAws_json1_0ListWorkflowTypesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0PollForActivityTaskCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "SimpleWorkflowService.PollForActivityTask",
        };
        body = JSON.stringify(serializeAws_json1_0PollForActivityTaskInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0PollForDecisionTaskCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "SimpleWorkflowService.PollForDecisionTask",
        };
        body = JSON.stringify(serializeAws_json1_0PollForDecisionTaskInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0RecordActivityTaskHeartbeatCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "SimpleWorkflowService.RecordActivityTaskHeartbeat",
        };
        body = JSON.stringify(serializeAws_json1_0RecordActivityTaskHeartbeatInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0RegisterActivityTypeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "SimpleWorkflowService.RegisterActivityType",
        };
        body = JSON.stringify(serializeAws_json1_0RegisterActivityTypeInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0RegisterDomainCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "SimpleWorkflowService.RegisterDomain",
        };
        body = JSON.stringify(serializeAws_json1_0RegisterDomainInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0RegisterWorkflowTypeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "SimpleWorkflowService.RegisterWorkflowType",
        };
        body = JSON.stringify(serializeAws_json1_0RegisterWorkflowTypeInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0RequestCancelWorkflowExecutionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "SimpleWorkflowService.RequestCancelWorkflowExecution",
        };
        body = JSON.stringify(serializeAws_json1_0RequestCancelWorkflowExecutionInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0RespondActivityTaskCanceledCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "SimpleWorkflowService.RespondActivityTaskCanceled",
        };
        body = JSON.stringify(serializeAws_json1_0RespondActivityTaskCanceledInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0RespondActivityTaskCompletedCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "SimpleWorkflowService.RespondActivityTaskCompleted",
        };
        body = JSON.stringify(serializeAws_json1_0RespondActivityTaskCompletedInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0RespondActivityTaskFailedCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "SimpleWorkflowService.RespondActivityTaskFailed",
        };
        body = JSON.stringify(serializeAws_json1_0RespondActivityTaskFailedInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0RespondDecisionTaskCompletedCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "SimpleWorkflowService.RespondDecisionTaskCompleted",
        };
        body = JSON.stringify(serializeAws_json1_0RespondDecisionTaskCompletedInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0SignalWorkflowExecutionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "SimpleWorkflowService.SignalWorkflowExecution",
        };
        body = JSON.stringify(serializeAws_json1_0SignalWorkflowExecutionInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0StartWorkflowExecutionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "SimpleWorkflowService.StartWorkflowExecution",
        };
        body = JSON.stringify(serializeAws_json1_0StartWorkflowExecutionInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0TagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "SimpleWorkflowService.TagResource",
        };
        body = JSON.stringify(serializeAws_json1_0TagResourceInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0TerminateWorkflowExecutionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "SimpleWorkflowService.TerminateWorkflowExecution",
        };
        body = JSON.stringify(serializeAws_json1_0TerminateWorkflowExecutionInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0UndeprecateActivityTypeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "SimpleWorkflowService.UndeprecateActivityType",
        };
        body = JSON.stringify(serializeAws_json1_0UndeprecateActivityTypeInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0UndeprecateDomainCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "SimpleWorkflowService.UndeprecateDomain",
        };
        body = JSON.stringify(serializeAws_json1_0UndeprecateDomainInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0UndeprecateWorkflowTypeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "SimpleWorkflowService.UndeprecateWorkflowType",
        };
        body = JSON.stringify(serializeAws_json1_0UndeprecateWorkflowTypeInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0UntagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "SimpleWorkflowService.UntagResource",
        };
        body = JSON.stringify(serializeAws_json1_0UntagResourceInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_json1_0CountClosedWorkflowExecutionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0CountClosedWorkflowExecutionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0WorkflowExecutionCount(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0CountClosedWorkflowExecutionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.swf#OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "UnknownResourceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.swf#UnknownResourceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0CountOpenWorkflowExecutionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0CountOpenWorkflowExecutionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0WorkflowExecutionCount(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0CountOpenWorkflowExecutionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.swf#OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "UnknownResourceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.swf#UnknownResourceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0CountPendingActivityTasksCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0CountPendingActivityTasksCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0PendingTaskCount(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0CountPendingActivityTasksCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.swf#OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "UnknownResourceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.swf#UnknownResourceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0CountPendingDecisionTasksCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0CountPendingDecisionTasksCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0PendingTaskCount(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0CountPendingDecisionTasksCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.swf#OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "UnknownResourceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.swf#UnknownResourceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0DeprecateActivityTypeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DeprecateActivityTypeCommandError(output, context)];
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
var deserializeAws_json1_0DeprecateActivityTypeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.swf#OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "TypeDeprecatedFault": return [3 /*break*/, 4];
                    case "com.amazonaws.swf#TypeDeprecatedFault": return [3 /*break*/, 4];
                    case "UnknownResourceFault": return [3 /*break*/, 6];
                    case "com.amazonaws.swf#UnknownResourceFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TypeDeprecatedFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0DeprecateDomainCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DeprecateDomainCommandError(output, context)];
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
var deserializeAws_json1_0DeprecateDomainCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DomainDeprecatedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.swf#DomainDeprecatedFault": return [3 /*break*/, 2];
                    case "OperationNotPermittedFault": return [3 /*break*/, 4];
                    case "com.amazonaws.swf#OperationNotPermittedFault": return [3 /*break*/, 4];
                    case "UnknownResourceFault": return [3 /*break*/, 6];
                    case "com.amazonaws.swf#UnknownResourceFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0DomainDeprecatedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0DeprecateWorkflowTypeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DeprecateWorkflowTypeCommandError(output, context)];
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
var deserializeAws_json1_0DeprecateWorkflowTypeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.swf#OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "TypeDeprecatedFault": return [3 /*break*/, 4];
                    case "com.amazonaws.swf#TypeDeprecatedFault": return [3 /*break*/, 4];
                    case "UnknownResourceFault": return [3 /*break*/, 6];
                    case "com.amazonaws.swf#UnknownResourceFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TypeDeprecatedFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0DescribeActivityTypeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DescribeActivityTypeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0ActivityTypeDetail(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0DescribeActivityTypeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.swf#OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "UnknownResourceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.swf#UnknownResourceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0DescribeDomainCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DescribeDomainCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0DomainDetail(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0DescribeDomainCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.swf#OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "UnknownResourceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.swf#UnknownResourceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0DescribeWorkflowExecutionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DescribeWorkflowExecutionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0WorkflowExecutionDetail(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0DescribeWorkflowExecutionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.swf#OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "UnknownResourceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.swf#UnknownResourceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0DescribeWorkflowTypeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DescribeWorkflowTypeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0WorkflowTypeDetail(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0DescribeWorkflowTypeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.swf#OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "UnknownResourceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.swf#UnknownResourceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0GetWorkflowExecutionHistoryCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0GetWorkflowExecutionHistoryCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0History(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0GetWorkflowExecutionHistoryCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.swf#OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "UnknownResourceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.swf#UnknownResourceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0ListActivityTypesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0ListActivityTypesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0ActivityTypeInfos(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0ListActivityTypesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.swf#OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "UnknownResourceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.swf#UnknownResourceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0ListClosedWorkflowExecutionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0ListClosedWorkflowExecutionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0WorkflowExecutionInfos(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0ListClosedWorkflowExecutionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.swf#OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "UnknownResourceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.swf#UnknownResourceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0ListDomainsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0ListDomainsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0DomainInfos(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0ListDomainsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.swf#OperationNotPermittedFault": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0ListOpenWorkflowExecutionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0ListOpenWorkflowExecutionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0WorkflowExecutionInfos(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0ListOpenWorkflowExecutionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.swf#OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "UnknownResourceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.swf#UnknownResourceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)];
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
                    case "LimitExceededFault": return [3 /*break*/, 2];
                    case "com.amazonaws.swf#LimitExceededFault": return [3 /*break*/, 2];
                    case "OperationNotPermittedFault": return [3 /*break*/, 4];
                    case "com.amazonaws.swf#OperationNotPermittedFault": return [3 /*break*/, 4];
                    case "UnknownResourceFault": return [3 /*break*/, 6];
                    case "com.amazonaws.swf#UnknownResourceFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0LimitExceededFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0ListWorkflowTypesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0ListWorkflowTypesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0WorkflowTypeInfos(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0ListWorkflowTypesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.swf#OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "UnknownResourceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.swf#UnknownResourceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0PollForActivityTaskCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0PollForActivityTaskCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0ActivityTask(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0PollForActivityTaskCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "LimitExceededFault": return [3 /*break*/, 2];
                    case "com.amazonaws.swf#LimitExceededFault": return [3 /*break*/, 2];
                    case "OperationNotPermittedFault": return [3 /*break*/, 4];
                    case "com.amazonaws.swf#OperationNotPermittedFault": return [3 /*break*/, 4];
                    case "UnknownResourceFault": return [3 /*break*/, 6];
                    case "com.amazonaws.swf#UnknownResourceFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0LimitExceededFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0PollForDecisionTaskCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0PollForDecisionTaskCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0DecisionTask(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0PollForDecisionTaskCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "LimitExceededFault": return [3 /*break*/, 2];
                    case "com.amazonaws.swf#LimitExceededFault": return [3 /*break*/, 2];
                    case "OperationNotPermittedFault": return [3 /*break*/, 4];
                    case "com.amazonaws.swf#OperationNotPermittedFault": return [3 /*break*/, 4];
                    case "UnknownResourceFault": return [3 /*break*/, 6];
                    case "com.amazonaws.swf#UnknownResourceFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0LimitExceededFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0RecordActivityTaskHeartbeatCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0RecordActivityTaskHeartbeatCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0ActivityTaskStatus(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0RecordActivityTaskHeartbeatCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.swf#OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "UnknownResourceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.swf#UnknownResourceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0RegisterActivityTypeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0RegisterActivityTypeCommandError(output, context)];
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
var deserializeAws_json1_0RegisterActivityTypeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "LimitExceededFault": return [3 /*break*/, 2];
                    case "com.amazonaws.swf#LimitExceededFault": return [3 /*break*/, 2];
                    case "OperationNotPermittedFault": return [3 /*break*/, 4];
                    case "com.amazonaws.swf#OperationNotPermittedFault": return [3 /*break*/, 4];
                    case "TypeAlreadyExistsFault": return [3 /*break*/, 6];
                    case "com.amazonaws.swf#TypeAlreadyExistsFault": return [3 /*break*/, 6];
                    case "UnknownResourceFault": return [3 /*break*/, 8];
                    case "com.amazonaws.swf#UnknownResourceFault": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0LimitExceededFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TypeAlreadyExistsFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0RegisterDomainCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0RegisterDomainCommandError(output, context)];
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
var deserializeAws_json1_0RegisterDomainCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DomainAlreadyExistsFault": return [3 /*break*/, 2];
                    case "com.amazonaws.swf#DomainAlreadyExistsFault": return [3 /*break*/, 2];
                    case "LimitExceededFault": return [3 /*break*/, 4];
                    case "com.amazonaws.swf#LimitExceededFault": return [3 /*break*/, 4];
                    case "OperationNotPermittedFault": return [3 /*break*/, 6];
                    case "com.amazonaws.swf#OperationNotPermittedFault": return [3 /*break*/, 6];
                    case "TooManyTagsFault": return [3 /*break*/, 8];
                    case "com.amazonaws.swf#TooManyTagsFault": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0DomainAlreadyExistsFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0LimitExceededFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TooManyTagsFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0RegisterWorkflowTypeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0RegisterWorkflowTypeCommandError(output, context)];
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
var deserializeAws_json1_0RegisterWorkflowTypeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "LimitExceededFault": return [3 /*break*/, 2];
                    case "com.amazonaws.swf#LimitExceededFault": return [3 /*break*/, 2];
                    case "OperationNotPermittedFault": return [3 /*break*/, 4];
                    case "com.amazonaws.swf#OperationNotPermittedFault": return [3 /*break*/, 4];
                    case "TypeAlreadyExistsFault": return [3 /*break*/, 6];
                    case "com.amazonaws.swf#TypeAlreadyExistsFault": return [3 /*break*/, 6];
                    case "UnknownResourceFault": return [3 /*break*/, 8];
                    case "com.amazonaws.swf#UnknownResourceFault": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0LimitExceededFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TypeAlreadyExistsFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0RequestCancelWorkflowExecutionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0RequestCancelWorkflowExecutionCommandError(output, context)];
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
var deserializeAws_json1_0RequestCancelWorkflowExecutionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.swf#OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "UnknownResourceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.swf#UnknownResourceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0RespondActivityTaskCanceledCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0RespondActivityTaskCanceledCommandError(output, context)];
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
var deserializeAws_json1_0RespondActivityTaskCanceledCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.swf#OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "UnknownResourceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.swf#UnknownResourceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0RespondActivityTaskCompletedCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0RespondActivityTaskCompletedCommandError(output, context)];
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
var deserializeAws_json1_0RespondActivityTaskCompletedCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.swf#OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "UnknownResourceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.swf#UnknownResourceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0RespondActivityTaskFailedCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0RespondActivityTaskFailedCommandError(output, context)];
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
var deserializeAws_json1_0RespondActivityTaskFailedCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.swf#OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "UnknownResourceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.swf#UnknownResourceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0RespondDecisionTaskCompletedCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0RespondDecisionTaskCompletedCommandError(output, context)];
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
var deserializeAws_json1_0RespondDecisionTaskCompletedCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.swf#OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "UnknownResourceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.swf#UnknownResourceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0SignalWorkflowExecutionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0SignalWorkflowExecutionCommandError(output, context)];
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
var deserializeAws_json1_0SignalWorkflowExecutionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.swf#OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "UnknownResourceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.swf#UnknownResourceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0StartWorkflowExecutionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0StartWorkflowExecutionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0Run(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0StartWorkflowExecutionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DefaultUndefinedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.swf#DefaultUndefinedFault": return [3 /*break*/, 2];
                    case "LimitExceededFault": return [3 /*break*/, 4];
                    case "com.amazonaws.swf#LimitExceededFault": return [3 /*break*/, 4];
                    case "OperationNotPermittedFault": return [3 /*break*/, 6];
                    case "com.amazonaws.swf#OperationNotPermittedFault": return [3 /*break*/, 6];
                    case "TypeDeprecatedFault": return [3 /*break*/, 8];
                    case "com.amazonaws.swf#TypeDeprecatedFault": return [3 /*break*/, 8];
                    case "UnknownResourceFault": return [3 /*break*/, 10];
                    case "com.amazonaws.swf#UnknownResourceFault": return [3 /*break*/, 10];
                    case "WorkflowExecutionAlreadyStartedFault": return [3 /*break*/, 12];
                    case "com.amazonaws.swf#WorkflowExecutionAlreadyStartedFault": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0DefaultUndefinedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0LimitExceededFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TypeDeprecatedFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0WorkflowExecutionAlreadyStartedFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0TagResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0TagResourceCommandError(output, context)];
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
var deserializeAws_json1_0TagResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "LimitExceededFault": return [3 /*break*/, 2];
                    case "com.amazonaws.swf#LimitExceededFault": return [3 /*break*/, 2];
                    case "OperationNotPermittedFault": return [3 /*break*/, 4];
                    case "com.amazonaws.swf#OperationNotPermittedFault": return [3 /*break*/, 4];
                    case "TooManyTagsFault": return [3 /*break*/, 6];
                    case "com.amazonaws.swf#TooManyTagsFault": return [3 /*break*/, 6];
                    case "UnknownResourceFault": return [3 /*break*/, 8];
                    case "com.amazonaws.swf#UnknownResourceFault": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0LimitExceededFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TooManyTagsFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0TerminateWorkflowExecutionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0TerminateWorkflowExecutionCommandError(output, context)];
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
var deserializeAws_json1_0TerminateWorkflowExecutionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.swf#OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "UnknownResourceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.swf#UnknownResourceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0UndeprecateActivityTypeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0UndeprecateActivityTypeCommandError(output, context)];
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
var deserializeAws_json1_0UndeprecateActivityTypeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.swf#OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "TypeAlreadyExistsFault": return [3 /*break*/, 4];
                    case "com.amazonaws.swf#TypeAlreadyExistsFault": return [3 /*break*/, 4];
                    case "UnknownResourceFault": return [3 /*break*/, 6];
                    case "com.amazonaws.swf#UnknownResourceFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TypeAlreadyExistsFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0UndeprecateDomainCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0UndeprecateDomainCommandError(output, context)];
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
var deserializeAws_json1_0UndeprecateDomainCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DomainAlreadyExistsFault": return [3 /*break*/, 2];
                    case "com.amazonaws.swf#DomainAlreadyExistsFault": return [3 /*break*/, 2];
                    case "OperationNotPermittedFault": return [3 /*break*/, 4];
                    case "com.amazonaws.swf#OperationNotPermittedFault": return [3 /*break*/, 4];
                    case "UnknownResourceFault": return [3 /*break*/, 6];
                    case "com.amazonaws.swf#UnknownResourceFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0DomainAlreadyExistsFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0UndeprecateWorkflowTypeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0UndeprecateWorkflowTypeCommandError(output, context)];
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
var deserializeAws_json1_0UndeprecateWorkflowTypeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.swf#OperationNotPermittedFault": return [3 /*break*/, 2];
                    case "TypeAlreadyExistsFault": return [3 /*break*/, 4];
                    case "com.amazonaws.swf#TypeAlreadyExistsFault": return [3 /*break*/, 4];
                    case "UnknownResourceFault": return [3 /*break*/, 6];
                    case "com.amazonaws.swf#UnknownResourceFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TypeAlreadyExistsFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)];
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
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0UntagResourceCommandError(output, context)];
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
var deserializeAws_json1_0UntagResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "LimitExceededFault": return [3 /*break*/, 2];
                    case "com.amazonaws.swf#LimitExceededFault": return [3 /*break*/, 2];
                    case "OperationNotPermittedFault": return [3 /*break*/, 4];
                    case "com.amazonaws.swf#OperationNotPermittedFault": return [3 /*break*/, 4];
                    case "UnknownResourceFault": return [3 /*break*/, 6];
                    case "com.amazonaws.swf#UnknownResourceFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0LimitExceededFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)];
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
var deserializeAws_json1_0DefaultUndefinedFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0DefaultUndefinedFault(body, context);
        contents = __assign({ name: "DefaultUndefinedFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0DomainAlreadyExistsFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0DomainAlreadyExistsFault(body, context);
        contents = __assign({ name: "DomainAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0DomainDeprecatedFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0DomainDeprecatedFault(body, context);
        contents = __assign({ name: "DomainDeprecatedFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0LimitExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0LimitExceededFault(body, context);
        contents = __assign({ name: "LimitExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0OperationNotPermittedFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0OperationNotPermittedFault(body, context);
        contents = __assign({ name: "OperationNotPermittedFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0TooManyTagsFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0TooManyTagsFault(body, context);
        contents = __assign({ name: "TooManyTagsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0TypeAlreadyExistsFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0TypeAlreadyExistsFault(body, context);
        contents = __assign({ name: "TypeAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0TypeDeprecatedFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0TypeDeprecatedFault(body, context);
        contents = __assign({ name: "TypeDeprecatedFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0UnknownResourceFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0UnknownResourceFault(body, context);
        contents = __assign({ name: "UnknownResourceFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0WorkflowExecutionAlreadyStartedFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0WorkflowExecutionAlreadyStartedFault(body, context);
        contents = __assign({ name: "WorkflowExecutionAlreadyStartedFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_json1_0ActivityType = function (input, context) {
    return __assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.version !== undefined && input.version !== null && { version: input.version }));
};
var serializeAws_json1_0CancelTimerDecisionAttributes = function (input, context) {
    return __assign({}, (input.timerId !== undefined && input.timerId !== null && { timerId: input.timerId }));
};
var serializeAws_json1_0CancelWorkflowExecutionDecisionAttributes = function (input, context) {
    return __assign({}, (input.details !== undefined && input.details !== null && { details: input.details }));
};
var serializeAws_json1_0CloseStatusFilter = function (input, context) {
    return __assign({}, (input.status !== undefined && input.status !== null && { status: input.status }));
};
var serializeAws_json1_0CompleteWorkflowExecutionDecisionAttributes = function (input, context) {
    return __assign({}, (input.result !== undefined && input.result !== null && { result: input.result }));
};
var serializeAws_json1_0ContinueAsNewWorkflowExecutionDecisionAttributes = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.childPolicy !== undefined && input.childPolicy !== null && { childPolicy: input.childPolicy })), (input.executionStartToCloseTimeout !== undefined &&
        input.executionStartToCloseTimeout !== null && {
        executionStartToCloseTimeout: input.executionStartToCloseTimeout,
    })), (input.input !== undefined && input.input !== null && { input: input.input })), (input.lambdaRole !== undefined && input.lambdaRole !== null && { lambdaRole: input.lambdaRole })), (input.tagList !== undefined &&
        input.tagList !== null && { tagList: serializeAws_json1_0TagList(input.tagList, context) })), (input.taskList !== undefined &&
        input.taskList !== null && { taskList: serializeAws_json1_0TaskList(input.taskList, context) })), (input.taskPriority !== undefined && input.taskPriority !== null && { taskPriority: input.taskPriority })), (input.taskStartToCloseTimeout !== undefined &&
        input.taskStartToCloseTimeout !== null && { taskStartToCloseTimeout: input.taskStartToCloseTimeout })), (input.workflowTypeVersion !== undefined &&
        input.workflowTypeVersion !== null && { workflowTypeVersion: input.workflowTypeVersion }));
};
var serializeAws_json1_0CountClosedWorkflowExecutionsInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.closeStatusFilter !== undefined &&
        input.closeStatusFilter !== null && {
        closeStatusFilter: serializeAws_json1_0CloseStatusFilter(input.closeStatusFilter, context),
    })), (input.closeTimeFilter !== undefined &&
        input.closeTimeFilter !== null && {
        closeTimeFilter: serializeAws_json1_0ExecutionTimeFilter(input.closeTimeFilter, context),
    })), (input.domain !== undefined && input.domain !== null && { domain: input.domain })), (input.executionFilter !== undefined &&
        input.executionFilter !== null && {
        executionFilter: serializeAws_json1_0WorkflowExecutionFilter(input.executionFilter, context),
    })), (input.startTimeFilter !== undefined &&
        input.startTimeFilter !== null && {
        startTimeFilter: serializeAws_json1_0ExecutionTimeFilter(input.startTimeFilter, context),
    })), (input.tagFilter !== undefined &&
        input.tagFilter !== null && { tagFilter: serializeAws_json1_0TagFilter(input.tagFilter, context) })), (input.typeFilter !== undefined &&
        input.typeFilter !== null && { typeFilter: serializeAws_json1_0WorkflowTypeFilter(input.typeFilter, context) }));
};
var serializeAws_json1_0CountOpenWorkflowExecutionsInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.domain !== undefined && input.domain !== null && { domain: input.domain })), (input.executionFilter !== undefined &&
        input.executionFilter !== null && {
        executionFilter: serializeAws_json1_0WorkflowExecutionFilter(input.executionFilter, context),
    })), (input.startTimeFilter !== undefined &&
        input.startTimeFilter !== null && {
        startTimeFilter: serializeAws_json1_0ExecutionTimeFilter(input.startTimeFilter, context),
    })), (input.tagFilter !== undefined &&
        input.tagFilter !== null && { tagFilter: serializeAws_json1_0TagFilter(input.tagFilter, context) })), (input.typeFilter !== undefined &&
        input.typeFilter !== null && { typeFilter: serializeAws_json1_0WorkflowTypeFilter(input.typeFilter, context) }));
};
var serializeAws_json1_0CountPendingActivityTasksInput = function (input, context) {
    return __assign(__assign({}, (input.domain !== undefined && input.domain !== null && { domain: input.domain })), (input.taskList !== undefined &&
        input.taskList !== null && { taskList: serializeAws_json1_0TaskList(input.taskList, context) }));
};
var serializeAws_json1_0CountPendingDecisionTasksInput = function (input, context) {
    return __assign(__assign({}, (input.domain !== undefined && input.domain !== null && { domain: input.domain })), (input.taskList !== undefined &&
        input.taskList !== null && { taskList: serializeAws_json1_0TaskList(input.taskList, context) }));
};
var serializeAws_json1_0Decision = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.cancelTimerDecisionAttributes !== undefined &&
        input.cancelTimerDecisionAttributes !== null && {
        cancelTimerDecisionAttributes: serializeAws_json1_0CancelTimerDecisionAttributes(input.cancelTimerDecisionAttributes, context),
    })), (input.cancelWorkflowExecutionDecisionAttributes !== undefined &&
        input.cancelWorkflowExecutionDecisionAttributes !== null && {
        cancelWorkflowExecutionDecisionAttributes: serializeAws_json1_0CancelWorkflowExecutionDecisionAttributes(input.cancelWorkflowExecutionDecisionAttributes, context),
    })), (input.completeWorkflowExecutionDecisionAttributes !== undefined &&
        input.completeWorkflowExecutionDecisionAttributes !== null && {
        completeWorkflowExecutionDecisionAttributes: serializeAws_json1_0CompleteWorkflowExecutionDecisionAttributes(input.completeWorkflowExecutionDecisionAttributes, context),
    })), (input.continueAsNewWorkflowExecutionDecisionAttributes !== undefined &&
        input.continueAsNewWorkflowExecutionDecisionAttributes !== null && {
        continueAsNewWorkflowExecutionDecisionAttributes: serializeAws_json1_0ContinueAsNewWorkflowExecutionDecisionAttributes(input.continueAsNewWorkflowExecutionDecisionAttributes, context),
    })), (input.decisionType !== undefined && input.decisionType !== null && { decisionType: input.decisionType })), (input.failWorkflowExecutionDecisionAttributes !== undefined &&
        input.failWorkflowExecutionDecisionAttributes !== null && {
        failWorkflowExecutionDecisionAttributes: serializeAws_json1_0FailWorkflowExecutionDecisionAttributes(input.failWorkflowExecutionDecisionAttributes, context),
    })), (input.recordMarkerDecisionAttributes !== undefined &&
        input.recordMarkerDecisionAttributes !== null && {
        recordMarkerDecisionAttributes: serializeAws_json1_0RecordMarkerDecisionAttributes(input.recordMarkerDecisionAttributes, context),
    })), (input.requestCancelActivityTaskDecisionAttributes !== undefined &&
        input.requestCancelActivityTaskDecisionAttributes !== null && {
        requestCancelActivityTaskDecisionAttributes: serializeAws_json1_0RequestCancelActivityTaskDecisionAttributes(input.requestCancelActivityTaskDecisionAttributes, context),
    })), (input.requestCancelExternalWorkflowExecutionDecisionAttributes !== undefined &&
        input.requestCancelExternalWorkflowExecutionDecisionAttributes !== null && {
        requestCancelExternalWorkflowExecutionDecisionAttributes: serializeAws_json1_0RequestCancelExternalWorkflowExecutionDecisionAttributes(input.requestCancelExternalWorkflowExecutionDecisionAttributes, context),
    })), (input.scheduleActivityTaskDecisionAttributes !== undefined &&
        input.scheduleActivityTaskDecisionAttributes !== null && {
        scheduleActivityTaskDecisionAttributes: serializeAws_json1_0ScheduleActivityTaskDecisionAttributes(input.scheduleActivityTaskDecisionAttributes, context),
    })), (input.scheduleLambdaFunctionDecisionAttributes !== undefined &&
        input.scheduleLambdaFunctionDecisionAttributes !== null && {
        scheduleLambdaFunctionDecisionAttributes: serializeAws_json1_0ScheduleLambdaFunctionDecisionAttributes(input.scheduleLambdaFunctionDecisionAttributes, context),
    })), (input.signalExternalWorkflowExecutionDecisionAttributes !== undefined &&
        input.signalExternalWorkflowExecutionDecisionAttributes !== null && {
        signalExternalWorkflowExecutionDecisionAttributes: serializeAws_json1_0SignalExternalWorkflowExecutionDecisionAttributes(input.signalExternalWorkflowExecutionDecisionAttributes, context),
    })), (input.startChildWorkflowExecutionDecisionAttributes !== undefined &&
        input.startChildWorkflowExecutionDecisionAttributes !== null && {
        startChildWorkflowExecutionDecisionAttributes: serializeAws_json1_0StartChildWorkflowExecutionDecisionAttributes(input.startChildWorkflowExecutionDecisionAttributes, context),
    })), (input.startTimerDecisionAttributes !== undefined &&
        input.startTimerDecisionAttributes !== null && {
        startTimerDecisionAttributes: serializeAws_json1_0StartTimerDecisionAttributes(input.startTimerDecisionAttributes, context),
    }));
};
var serializeAws_json1_0DecisionList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0Decision(entry, context);
    });
};
var serializeAws_json1_0DeprecateActivityTypeInput = function (input, context) {
    return __assign(__assign({}, (input.activityType !== undefined &&
        input.activityType !== null && { activityType: serializeAws_json1_0ActivityType(input.activityType, context) })), (input.domain !== undefined && input.domain !== null && { domain: input.domain }));
};
var serializeAws_json1_0DeprecateDomainInput = function (input, context) {
    return __assign({}, (input.name !== undefined && input.name !== null && { name: input.name }));
};
var serializeAws_json1_0DeprecateWorkflowTypeInput = function (input, context) {
    return __assign(__assign({}, (input.domain !== undefined && input.domain !== null && { domain: input.domain })), (input.workflowType !== undefined &&
        input.workflowType !== null && { workflowType: serializeAws_json1_0WorkflowType(input.workflowType, context) }));
};
var serializeAws_json1_0DescribeActivityTypeInput = function (input, context) {
    return __assign(__assign({}, (input.activityType !== undefined &&
        input.activityType !== null && { activityType: serializeAws_json1_0ActivityType(input.activityType, context) })), (input.domain !== undefined && input.domain !== null && { domain: input.domain }));
};
var serializeAws_json1_0DescribeDomainInput = function (input, context) {
    return __assign({}, (input.name !== undefined && input.name !== null && { name: input.name }));
};
var serializeAws_json1_0DescribeWorkflowExecutionInput = function (input, context) {
    return __assign(__assign({}, (input.domain !== undefined && input.domain !== null && { domain: input.domain })), (input.execution !== undefined &&
        input.execution !== null && { execution: serializeAws_json1_0WorkflowExecution(input.execution, context) }));
};
var serializeAws_json1_0DescribeWorkflowTypeInput = function (input, context) {
    return __assign(__assign({}, (input.domain !== undefined && input.domain !== null && { domain: input.domain })), (input.workflowType !== undefined &&
        input.workflowType !== null && { workflowType: serializeAws_json1_0WorkflowType(input.workflowType, context) }));
};
var serializeAws_json1_0ExecutionTimeFilter = function (input, context) {
    return __assign(__assign({}, (input.latestDate !== undefined &&
        input.latestDate !== null && { latestDate: Math.round(input.latestDate.getTime() / 1000) })), (input.oldestDate !== undefined &&
        input.oldestDate !== null && { oldestDate: Math.round(input.oldestDate.getTime() / 1000) }));
};
var serializeAws_json1_0FailWorkflowExecutionDecisionAttributes = function (input, context) {
    return __assign(__assign({}, (input.details !== undefined && input.details !== null && { details: input.details })), (input.reason !== undefined && input.reason !== null && { reason: input.reason }));
};
var serializeAws_json1_0GetWorkflowExecutionHistoryInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.domain !== undefined && input.domain !== null && { domain: input.domain })), (input.execution !== undefined &&
        input.execution !== null && { execution: serializeAws_json1_0WorkflowExecution(input.execution, context) })), (input.maximumPageSize !== undefined &&
        input.maximumPageSize !== null && { maximumPageSize: input.maximumPageSize })), (input.nextPageToken !== undefined && input.nextPageToken !== null && { nextPageToken: input.nextPageToken })), (input.reverseOrder !== undefined && input.reverseOrder !== null && { reverseOrder: input.reverseOrder }));
};
var serializeAws_json1_0ListActivityTypesInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.domain !== undefined && input.domain !== null && { domain: input.domain })), (input.maximumPageSize !== undefined &&
        input.maximumPageSize !== null && { maximumPageSize: input.maximumPageSize })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.nextPageToken !== undefined && input.nextPageToken !== null && { nextPageToken: input.nextPageToken })), (input.registrationStatus !== undefined &&
        input.registrationStatus !== null && { registrationStatus: input.registrationStatus })), (input.reverseOrder !== undefined && input.reverseOrder !== null && { reverseOrder: input.reverseOrder }));
};
var serializeAws_json1_0ListClosedWorkflowExecutionsInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.closeStatusFilter !== undefined &&
        input.closeStatusFilter !== null && {
        closeStatusFilter: serializeAws_json1_0CloseStatusFilter(input.closeStatusFilter, context),
    })), (input.closeTimeFilter !== undefined &&
        input.closeTimeFilter !== null && {
        closeTimeFilter: serializeAws_json1_0ExecutionTimeFilter(input.closeTimeFilter, context),
    })), (input.domain !== undefined && input.domain !== null && { domain: input.domain })), (input.executionFilter !== undefined &&
        input.executionFilter !== null && {
        executionFilter: serializeAws_json1_0WorkflowExecutionFilter(input.executionFilter, context),
    })), (input.maximumPageSize !== undefined &&
        input.maximumPageSize !== null && { maximumPageSize: input.maximumPageSize })), (input.nextPageToken !== undefined && input.nextPageToken !== null && { nextPageToken: input.nextPageToken })), (input.reverseOrder !== undefined && input.reverseOrder !== null && { reverseOrder: input.reverseOrder })), (input.startTimeFilter !== undefined &&
        input.startTimeFilter !== null && {
        startTimeFilter: serializeAws_json1_0ExecutionTimeFilter(input.startTimeFilter, context),
    })), (input.tagFilter !== undefined &&
        input.tagFilter !== null && { tagFilter: serializeAws_json1_0TagFilter(input.tagFilter, context) })), (input.typeFilter !== undefined &&
        input.typeFilter !== null && { typeFilter: serializeAws_json1_0WorkflowTypeFilter(input.typeFilter, context) }));
};
var serializeAws_json1_0ListDomainsInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.maximumPageSize !== undefined &&
        input.maximumPageSize !== null && { maximumPageSize: input.maximumPageSize })), (input.nextPageToken !== undefined && input.nextPageToken !== null && { nextPageToken: input.nextPageToken })), (input.registrationStatus !== undefined &&
        input.registrationStatus !== null && { registrationStatus: input.registrationStatus })), (input.reverseOrder !== undefined && input.reverseOrder !== null && { reverseOrder: input.reverseOrder }));
};
var serializeAws_json1_0ListOpenWorkflowExecutionsInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.domain !== undefined && input.domain !== null && { domain: input.domain })), (input.executionFilter !== undefined &&
        input.executionFilter !== null && {
        executionFilter: serializeAws_json1_0WorkflowExecutionFilter(input.executionFilter, context),
    })), (input.maximumPageSize !== undefined &&
        input.maximumPageSize !== null && { maximumPageSize: input.maximumPageSize })), (input.nextPageToken !== undefined && input.nextPageToken !== null && { nextPageToken: input.nextPageToken })), (input.reverseOrder !== undefined && input.reverseOrder !== null && { reverseOrder: input.reverseOrder })), (input.startTimeFilter !== undefined &&
        input.startTimeFilter !== null && {
        startTimeFilter: serializeAws_json1_0ExecutionTimeFilter(input.startTimeFilter, context),
    })), (input.tagFilter !== undefined &&
        input.tagFilter !== null && { tagFilter: serializeAws_json1_0TagFilter(input.tagFilter, context) })), (input.typeFilter !== undefined &&
        input.typeFilter !== null && { typeFilter: serializeAws_json1_0WorkflowTypeFilter(input.typeFilter, context) }));
};
var serializeAws_json1_0ListTagsForResourceInput = function (input, context) {
    return __assign({}, (input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }));
};
var serializeAws_json1_0ListWorkflowTypesInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.domain !== undefined && input.domain !== null && { domain: input.domain })), (input.maximumPageSize !== undefined &&
        input.maximumPageSize !== null && { maximumPageSize: input.maximumPageSize })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.nextPageToken !== undefined && input.nextPageToken !== null && { nextPageToken: input.nextPageToken })), (input.registrationStatus !== undefined &&
        input.registrationStatus !== null && { registrationStatus: input.registrationStatus })), (input.reverseOrder !== undefined && input.reverseOrder !== null && { reverseOrder: input.reverseOrder }));
};
var serializeAws_json1_0PollForActivityTaskInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.domain !== undefined && input.domain !== null && { domain: input.domain })), (input.identity !== undefined && input.identity !== null && { identity: input.identity })), (input.taskList !== undefined &&
        input.taskList !== null && { taskList: serializeAws_json1_0TaskList(input.taskList, context) }));
};
var serializeAws_json1_0PollForDecisionTaskInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.domain !== undefined && input.domain !== null && { domain: input.domain })), (input.identity !== undefined && input.identity !== null && { identity: input.identity })), (input.maximumPageSize !== undefined &&
        input.maximumPageSize !== null && { maximumPageSize: input.maximumPageSize })), (input.nextPageToken !== undefined && input.nextPageToken !== null && { nextPageToken: input.nextPageToken })), (input.reverseOrder !== undefined && input.reverseOrder !== null && { reverseOrder: input.reverseOrder })), (input.taskList !== undefined &&
        input.taskList !== null && { taskList: serializeAws_json1_0TaskList(input.taskList, context) }));
};
var serializeAws_json1_0RecordActivityTaskHeartbeatInput = function (input, context) {
    return __assign(__assign({}, (input.details !== undefined && input.details !== null && { details: input.details })), (input.taskToken !== undefined && input.taskToken !== null && { taskToken: input.taskToken }));
};
var serializeAws_json1_0RecordMarkerDecisionAttributes = function (input, context) {
    return __assign(__assign({}, (input.details !== undefined && input.details !== null && { details: input.details })), (input.markerName !== undefined && input.markerName !== null && { markerName: input.markerName }));
};
var serializeAws_json1_0RegisterActivityTypeInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.defaultTaskHeartbeatTimeout !== undefined &&
        input.defaultTaskHeartbeatTimeout !== null && { defaultTaskHeartbeatTimeout: input.defaultTaskHeartbeatTimeout })), (input.defaultTaskList !== undefined &&
        input.defaultTaskList !== null && {
        defaultTaskList: serializeAws_json1_0TaskList(input.defaultTaskList, context),
    })), (input.defaultTaskPriority !== undefined &&
        input.defaultTaskPriority !== null && { defaultTaskPriority: input.defaultTaskPriority })), (input.defaultTaskScheduleToCloseTimeout !== undefined &&
        input.defaultTaskScheduleToCloseTimeout !== null && {
        defaultTaskScheduleToCloseTimeout: input.defaultTaskScheduleToCloseTimeout,
    })), (input.defaultTaskScheduleToStartTimeout !== undefined &&
        input.defaultTaskScheduleToStartTimeout !== null && {
        defaultTaskScheduleToStartTimeout: input.defaultTaskScheduleToStartTimeout,
    })), (input.defaultTaskStartToCloseTimeout !== undefined &&
        input.defaultTaskStartToCloseTimeout !== null && {
        defaultTaskStartToCloseTimeout: input.defaultTaskStartToCloseTimeout,
    })), (input.description !== undefined && input.description !== null && { description: input.description })), (input.domain !== undefined && input.domain !== null && { domain: input.domain })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.version !== undefined && input.version !== null && { version: input.version }));
};
var serializeAws_json1_0RegisterDomainInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.description !== undefined && input.description !== null && { description: input.description })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.tags !== undefined &&
        input.tags !== null && { tags: serializeAws_json1_0ResourceTagList(input.tags, context) })), (input.workflowExecutionRetentionPeriodInDays !== undefined &&
        input.workflowExecutionRetentionPeriodInDays !== null && {
        workflowExecutionRetentionPeriodInDays: input.workflowExecutionRetentionPeriodInDays,
    }));
};
var serializeAws_json1_0RegisterWorkflowTypeInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.defaultChildPolicy !== undefined &&
        input.defaultChildPolicy !== null && { defaultChildPolicy: input.defaultChildPolicy })), (input.defaultExecutionStartToCloseTimeout !== undefined &&
        input.defaultExecutionStartToCloseTimeout !== null && {
        defaultExecutionStartToCloseTimeout: input.defaultExecutionStartToCloseTimeout,
    })), (input.defaultLambdaRole !== undefined &&
        input.defaultLambdaRole !== null && { defaultLambdaRole: input.defaultLambdaRole })), (input.defaultTaskList !== undefined &&
        input.defaultTaskList !== null && {
        defaultTaskList: serializeAws_json1_0TaskList(input.defaultTaskList, context),
    })), (input.defaultTaskPriority !== undefined &&
        input.defaultTaskPriority !== null && { defaultTaskPriority: input.defaultTaskPriority })), (input.defaultTaskStartToCloseTimeout !== undefined &&
        input.defaultTaskStartToCloseTimeout !== null && {
        defaultTaskStartToCloseTimeout: input.defaultTaskStartToCloseTimeout,
    })), (input.description !== undefined && input.description !== null && { description: input.description })), (input.domain !== undefined && input.domain !== null && { domain: input.domain })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.version !== undefined && input.version !== null && { version: input.version }));
};
var serializeAws_json1_0RequestCancelActivityTaskDecisionAttributes = function (input, context) {
    return __assign({}, (input.activityId !== undefined && input.activityId !== null && { activityId: input.activityId }));
};
var serializeAws_json1_0RequestCancelExternalWorkflowExecutionDecisionAttributes = function (input, context) {
    return __assign(__assign(__assign({}, (input.control !== undefined && input.control !== null && { control: input.control })), (input.runId !== undefined && input.runId !== null && { runId: input.runId })), (input.workflowId !== undefined && input.workflowId !== null && { workflowId: input.workflowId }));
};
var serializeAws_json1_0RequestCancelWorkflowExecutionInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.domain !== undefined && input.domain !== null && { domain: input.domain })), (input.runId !== undefined && input.runId !== null && { runId: input.runId })), (input.workflowId !== undefined && input.workflowId !== null && { workflowId: input.workflowId }));
};
var serializeAws_json1_0ResourceTag = function (input, context) {
    return __assign(__assign({}, (input.key !== undefined && input.key !== null && { key: input.key })), (input.value !== undefined && input.value !== null && { value: input.value }));
};
var serializeAws_json1_0ResourceTagKeyList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_0ResourceTagList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0ResourceTag(entry, context);
    });
};
var serializeAws_json1_0RespondActivityTaskCanceledInput = function (input, context) {
    return __assign(__assign({}, (input.details !== undefined && input.details !== null && { details: input.details })), (input.taskToken !== undefined && input.taskToken !== null && { taskToken: input.taskToken }));
};
var serializeAws_json1_0RespondActivityTaskCompletedInput = function (input, context) {
    return __assign(__assign({}, (input.result !== undefined && input.result !== null && { result: input.result })), (input.taskToken !== undefined && input.taskToken !== null && { taskToken: input.taskToken }));
};
var serializeAws_json1_0RespondActivityTaskFailedInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.details !== undefined && input.details !== null && { details: input.details })), (input.reason !== undefined && input.reason !== null && { reason: input.reason })), (input.taskToken !== undefined && input.taskToken !== null && { taskToken: input.taskToken }));
};
var serializeAws_json1_0RespondDecisionTaskCompletedInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.decisions !== undefined &&
        input.decisions !== null && { decisions: serializeAws_json1_0DecisionList(input.decisions, context) })), (input.executionContext !== undefined &&
        input.executionContext !== null && { executionContext: input.executionContext })), (input.taskToken !== undefined && input.taskToken !== null && { taskToken: input.taskToken }));
};
var serializeAws_json1_0ScheduleActivityTaskDecisionAttributes = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.activityId !== undefined && input.activityId !== null && { activityId: input.activityId })), (input.activityType !== undefined &&
        input.activityType !== null && { activityType: serializeAws_json1_0ActivityType(input.activityType, context) })), (input.control !== undefined && input.control !== null && { control: input.control })), (input.heartbeatTimeout !== undefined &&
        input.heartbeatTimeout !== null && { heartbeatTimeout: input.heartbeatTimeout })), (input.input !== undefined && input.input !== null && { input: input.input })), (input.scheduleToCloseTimeout !== undefined &&
        input.scheduleToCloseTimeout !== null && { scheduleToCloseTimeout: input.scheduleToCloseTimeout })), (input.scheduleToStartTimeout !== undefined &&
        input.scheduleToStartTimeout !== null && { scheduleToStartTimeout: input.scheduleToStartTimeout })), (input.startToCloseTimeout !== undefined &&
        input.startToCloseTimeout !== null && { startToCloseTimeout: input.startToCloseTimeout })), (input.taskList !== undefined &&
        input.taskList !== null && { taskList: serializeAws_json1_0TaskList(input.taskList, context) })), (input.taskPriority !== undefined && input.taskPriority !== null && { taskPriority: input.taskPriority }));
};
var serializeAws_json1_0ScheduleLambdaFunctionDecisionAttributes = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.control !== undefined && input.control !== null && { control: input.control })), (input.id !== undefined && input.id !== null && { id: input.id })), (input.input !== undefined && input.input !== null && { input: input.input })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.startToCloseTimeout !== undefined &&
        input.startToCloseTimeout !== null && { startToCloseTimeout: input.startToCloseTimeout }));
};
var serializeAws_json1_0SignalExternalWorkflowExecutionDecisionAttributes = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.control !== undefined && input.control !== null && { control: input.control })), (input.input !== undefined && input.input !== null && { input: input.input })), (input.runId !== undefined && input.runId !== null && { runId: input.runId })), (input.signalName !== undefined && input.signalName !== null && { signalName: input.signalName })), (input.workflowId !== undefined && input.workflowId !== null && { workflowId: input.workflowId }));
};
var serializeAws_json1_0SignalWorkflowExecutionInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.domain !== undefined && input.domain !== null && { domain: input.domain })), (input.input !== undefined && input.input !== null && { input: input.input })), (input.runId !== undefined && input.runId !== null && { runId: input.runId })), (input.signalName !== undefined && input.signalName !== null && { signalName: input.signalName })), (input.workflowId !== undefined && input.workflowId !== null && { workflowId: input.workflowId }));
};
var serializeAws_json1_0StartChildWorkflowExecutionDecisionAttributes = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.childPolicy !== undefined && input.childPolicy !== null && { childPolicy: input.childPolicy })), (input.control !== undefined && input.control !== null && { control: input.control })), (input.executionStartToCloseTimeout !== undefined &&
        input.executionStartToCloseTimeout !== null && {
        executionStartToCloseTimeout: input.executionStartToCloseTimeout,
    })), (input.input !== undefined && input.input !== null && { input: input.input })), (input.lambdaRole !== undefined && input.lambdaRole !== null && { lambdaRole: input.lambdaRole })), (input.tagList !== undefined &&
        input.tagList !== null && { tagList: serializeAws_json1_0TagList(input.tagList, context) })), (input.taskList !== undefined &&
        input.taskList !== null && { taskList: serializeAws_json1_0TaskList(input.taskList, context) })), (input.taskPriority !== undefined && input.taskPriority !== null && { taskPriority: input.taskPriority })), (input.taskStartToCloseTimeout !== undefined &&
        input.taskStartToCloseTimeout !== null && { taskStartToCloseTimeout: input.taskStartToCloseTimeout })), (input.workflowId !== undefined && input.workflowId !== null && { workflowId: input.workflowId })), (input.workflowType !== undefined &&
        input.workflowType !== null && { workflowType: serializeAws_json1_0WorkflowType(input.workflowType, context) }));
};
var serializeAws_json1_0StartTimerDecisionAttributes = function (input, context) {
    return __assign(__assign(__assign({}, (input.control !== undefined && input.control !== null && { control: input.control })), (input.startToFireTimeout !== undefined &&
        input.startToFireTimeout !== null && { startToFireTimeout: input.startToFireTimeout })), (input.timerId !== undefined && input.timerId !== null && { timerId: input.timerId }));
};
var serializeAws_json1_0StartWorkflowExecutionInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.childPolicy !== undefined && input.childPolicy !== null && { childPolicy: input.childPolicy })), (input.domain !== undefined && input.domain !== null && { domain: input.domain })), (input.executionStartToCloseTimeout !== undefined &&
        input.executionStartToCloseTimeout !== null && {
        executionStartToCloseTimeout: input.executionStartToCloseTimeout,
    })), (input.input !== undefined && input.input !== null && { input: input.input })), (input.lambdaRole !== undefined && input.lambdaRole !== null && { lambdaRole: input.lambdaRole })), (input.tagList !== undefined &&
        input.tagList !== null && { tagList: serializeAws_json1_0TagList(input.tagList, context) })), (input.taskList !== undefined &&
        input.taskList !== null && { taskList: serializeAws_json1_0TaskList(input.taskList, context) })), (input.taskPriority !== undefined && input.taskPriority !== null && { taskPriority: input.taskPriority })), (input.taskStartToCloseTimeout !== undefined &&
        input.taskStartToCloseTimeout !== null && { taskStartToCloseTimeout: input.taskStartToCloseTimeout })), (input.workflowId !== undefined && input.workflowId !== null && { workflowId: input.workflowId })), (input.workflowType !== undefined &&
        input.workflowType !== null && { workflowType: serializeAws_json1_0WorkflowType(input.workflowType, context) }));
};
var serializeAws_json1_0TagFilter = function (input, context) {
    return __assign({}, (input.tag !== undefined && input.tag !== null && { tag: input.tag }));
};
var serializeAws_json1_0TagList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_0TagResourceInput = function (input, context) {
    return __assign(__assign({}, (input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn })), (input.tags !== undefined &&
        input.tags !== null && { tags: serializeAws_json1_0ResourceTagList(input.tags, context) }));
};
var serializeAws_json1_0TaskList = function (input, context) {
    return __assign({}, (input.name !== undefined && input.name !== null && { name: input.name }));
};
var serializeAws_json1_0TerminateWorkflowExecutionInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.childPolicy !== undefined && input.childPolicy !== null && { childPolicy: input.childPolicy })), (input.details !== undefined && input.details !== null && { details: input.details })), (input.domain !== undefined && input.domain !== null && { domain: input.domain })), (input.reason !== undefined && input.reason !== null && { reason: input.reason })), (input.runId !== undefined && input.runId !== null && { runId: input.runId })), (input.workflowId !== undefined && input.workflowId !== null && { workflowId: input.workflowId }));
};
var serializeAws_json1_0UndeprecateActivityTypeInput = function (input, context) {
    return __assign(__assign({}, (input.activityType !== undefined &&
        input.activityType !== null && { activityType: serializeAws_json1_0ActivityType(input.activityType, context) })), (input.domain !== undefined && input.domain !== null && { domain: input.domain }));
};
var serializeAws_json1_0UndeprecateDomainInput = function (input, context) {
    return __assign({}, (input.name !== undefined && input.name !== null && { name: input.name }));
};
var serializeAws_json1_0UndeprecateWorkflowTypeInput = function (input, context) {
    return __assign(__assign({}, (input.domain !== undefined && input.domain !== null && { domain: input.domain })), (input.workflowType !== undefined &&
        input.workflowType !== null && { workflowType: serializeAws_json1_0WorkflowType(input.workflowType, context) }));
};
var serializeAws_json1_0UntagResourceInput = function (input, context) {
    return __assign(__assign({}, (input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn })), (input.tagKeys !== undefined &&
        input.tagKeys !== null && { tagKeys: serializeAws_json1_0ResourceTagKeyList(input.tagKeys, context) }));
};
var serializeAws_json1_0WorkflowExecution = function (input, context) {
    return __assign(__assign({}, (input.runId !== undefined && input.runId !== null && { runId: input.runId })), (input.workflowId !== undefined && input.workflowId !== null && { workflowId: input.workflowId }));
};
var serializeAws_json1_0WorkflowExecutionFilter = function (input, context) {
    return __assign({}, (input.workflowId !== undefined && input.workflowId !== null && { workflowId: input.workflowId }));
};
var serializeAws_json1_0WorkflowType = function (input, context) {
    return __assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.version !== undefined && input.version !== null && { version: input.version }));
};
var serializeAws_json1_0WorkflowTypeFilter = function (input, context) {
    return __assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.version !== undefined && input.version !== null && { version: input.version }));
};
var deserializeAws_json1_0ActivityTask = function (output, context) {
    return {
        activityId: output.activityId !== undefined && output.activityId !== null ? output.activityId : undefined,
        activityType: output.activityType !== undefined && output.activityType !== null
            ? deserializeAws_json1_0ActivityType(output.activityType, context)
            : undefined,
        input: output.input !== undefined && output.input !== null ? output.input : undefined,
        startedEventId: output.startedEventId !== undefined && output.startedEventId !== null ? output.startedEventId : undefined,
        taskToken: output.taskToken !== undefined && output.taskToken !== null ? output.taskToken : undefined,
        workflowExecution: output.workflowExecution !== undefined && output.workflowExecution !== null
            ? deserializeAws_json1_0WorkflowExecution(output.workflowExecution, context)
            : undefined,
    };
};
var deserializeAws_json1_0ActivityTaskCanceledEventAttributes = function (output, context) {
    return {
        details: output.details !== undefined && output.details !== null ? output.details : undefined,
        latestCancelRequestedEventId: output.latestCancelRequestedEventId !== undefined && output.latestCancelRequestedEventId !== null
            ? output.latestCancelRequestedEventId
            : undefined,
        scheduledEventId: output.scheduledEventId !== undefined && output.scheduledEventId !== null ? output.scheduledEventId : undefined,
        startedEventId: output.startedEventId !== undefined && output.startedEventId !== null ? output.startedEventId : undefined,
    };
};
var deserializeAws_json1_0ActivityTaskCancelRequestedEventAttributes = function (output, context) {
    return {
        activityId: output.activityId !== undefined && output.activityId !== null ? output.activityId : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
    };
};
var deserializeAws_json1_0ActivityTaskCompletedEventAttributes = function (output, context) {
    return {
        result: output.result !== undefined && output.result !== null ? output.result : undefined,
        scheduledEventId: output.scheduledEventId !== undefined && output.scheduledEventId !== null ? output.scheduledEventId : undefined,
        startedEventId: output.startedEventId !== undefined && output.startedEventId !== null ? output.startedEventId : undefined,
    };
};
var deserializeAws_json1_0ActivityTaskFailedEventAttributes = function (output, context) {
    return {
        details: output.details !== undefined && output.details !== null ? output.details : undefined,
        reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
        scheduledEventId: output.scheduledEventId !== undefined && output.scheduledEventId !== null ? output.scheduledEventId : undefined,
        startedEventId: output.startedEventId !== undefined && output.startedEventId !== null ? output.startedEventId : undefined,
    };
};
var deserializeAws_json1_0ActivityTaskScheduledEventAttributes = function (output, context) {
    return {
        activityId: output.activityId !== undefined && output.activityId !== null ? output.activityId : undefined,
        activityType: output.activityType !== undefined && output.activityType !== null
            ? deserializeAws_json1_0ActivityType(output.activityType, context)
            : undefined,
        control: output.control !== undefined && output.control !== null ? output.control : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
        heartbeatTimeout: output.heartbeatTimeout !== undefined && output.heartbeatTimeout !== null ? output.heartbeatTimeout : undefined,
        input: output.input !== undefined && output.input !== null ? output.input : undefined,
        scheduleToCloseTimeout: output.scheduleToCloseTimeout !== undefined && output.scheduleToCloseTimeout !== null
            ? output.scheduleToCloseTimeout
            : undefined,
        scheduleToStartTimeout: output.scheduleToStartTimeout !== undefined && output.scheduleToStartTimeout !== null
            ? output.scheduleToStartTimeout
            : undefined,
        startToCloseTimeout: output.startToCloseTimeout !== undefined && output.startToCloseTimeout !== null
            ? output.startToCloseTimeout
            : undefined,
        taskList: output.taskList !== undefined && output.taskList !== null
            ? deserializeAws_json1_0TaskList(output.taskList, context)
            : undefined,
        taskPriority: output.taskPriority !== undefined && output.taskPriority !== null ? output.taskPriority : undefined,
    };
};
var deserializeAws_json1_0ActivityTaskStartedEventAttributes = function (output, context) {
    return {
        identity: output.identity !== undefined && output.identity !== null ? output.identity : undefined,
        scheduledEventId: output.scheduledEventId !== undefined && output.scheduledEventId !== null ? output.scheduledEventId : undefined,
    };
};
var deserializeAws_json1_0ActivityTaskStatus = function (output, context) {
    return {
        cancelRequested: output.cancelRequested !== undefined && output.cancelRequested !== null ? output.cancelRequested : undefined,
    };
};
var deserializeAws_json1_0ActivityTaskTimedOutEventAttributes = function (output, context) {
    return {
        details: output.details !== undefined && output.details !== null ? output.details : undefined,
        scheduledEventId: output.scheduledEventId !== undefined && output.scheduledEventId !== null ? output.scheduledEventId : undefined,
        startedEventId: output.startedEventId !== undefined && output.startedEventId !== null ? output.startedEventId : undefined,
        timeoutType: output.timeoutType !== undefined && output.timeoutType !== null ? output.timeoutType : undefined,
    };
};
var deserializeAws_json1_0ActivityType = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
var deserializeAws_json1_0ActivityTypeConfiguration = function (output, context) {
    return {
        defaultTaskHeartbeatTimeout: output.defaultTaskHeartbeatTimeout !== undefined && output.defaultTaskHeartbeatTimeout !== null
            ? output.defaultTaskHeartbeatTimeout
            : undefined,
        defaultTaskList: output.defaultTaskList !== undefined && output.defaultTaskList !== null
            ? deserializeAws_json1_0TaskList(output.defaultTaskList, context)
            : undefined,
        defaultTaskPriority: output.defaultTaskPriority !== undefined && output.defaultTaskPriority !== null
            ? output.defaultTaskPriority
            : undefined,
        defaultTaskScheduleToCloseTimeout: output.defaultTaskScheduleToCloseTimeout !== undefined && output.defaultTaskScheduleToCloseTimeout !== null
            ? output.defaultTaskScheduleToCloseTimeout
            : undefined,
        defaultTaskScheduleToStartTimeout: output.defaultTaskScheduleToStartTimeout !== undefined && output.defaultTaskScheduleToStartTimeout !== null
            ? output.defaultTaskScheduleToStartTimeout
            : undefined,
        defaultTaskStartToCloseTimeout: output.defaultTaskStartToCloseTimeout !== undefined && output.defaultTaskStartToCloseTimeout !== null
            ? output.defaultTaskStartToCloseTimeout
            : undefined,
    };
};
var deserializeAws_json1_0ActivityTypeDetail = function (output, context) {
    return {
        configuration: output.configuration !== undefined && output.configuration !== null
            ? deserializeAws_json1_0ActivityTypeConfiguration(output.configuration, context)
            : undefined,
        typeInfo: output.typeInfo !== undefined && output.typeInfo !== null
            ? deserializeAws_json1_0ActivityTypeInfo(output.typeInfo, context)
            : undefined,
    };
};
var deserializeAws_json1_0ActivityTypeInfo = function (output, context) {
    return {
        activityType: output.activityType !== undefined && output.activityType !== null
            ? deserializeAws_json1_0ActivityType(output.activityType, context)
            : undefined,
        creationDate: output.creationDate !== undefined && output.creationDate !== null
            ? new Date(Math.round(output.creationDate * 1000))
            : undefined,
        deprecationDate: output.deprecationDate !== undefined && output.deprecationDate !== null
            ? new Date(Math.round(output.deprecationDate * 1000))
            : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
var deserializeAws_json1_0ActivityTypeInfoList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0ActivityTypeInfo(entry, context);
    });
};
var deserializeAws_json1_0ActivityTypeInfos = function (output, context) {
    return {
        nextPageToken: output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
        typeInfos: output.typeInfos !== undefined && output.typeInfos !== null
            ? deserializeAws_json1_0ActivityTypeInfoList(output.typeInfos, context)
            : undefined,
    };
};
var deserializeAws_json1_0CancelTimerFailedEventAttributes = function (output, context) {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
        timerId: output.timerId !== undefined && output.timerId !== null ? output.timerId : undefined,
    };
};
var deserializeAws_json1_0CancelWorkflowExecutionFailedEventAttributes = function (output, context) {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
    };
};
var deserializeAws_json1_0ChildWorkflowExecutionCanceledEventAttributes = function (output, context) {
    return {
        details: output.details !== undefined && output.details !== null ? output.details : undefined,
        initiatedEventId: output.initiatedEventId !== undefined && output.initiatedEventId !== null ? output.initiatedEventId : undefined,
        startedEventId: output.startedEventId !== undefined && output.startedEventId !== null ? output.startedEventId : undefined,
        workflowExecution: output.workflowExecution !== undefined && output.workflowExecution !== null
            ? deserializeAws_json1_0WorkflowExecution(output.workflowExecution, context)
            : undefined,
        workflowType: output.workflowType !== undefined && output.workflowType !== null
            ? deserializeAws_json1_0WorkflowType(output.workflowType, context)
            : undefined,
    };
};
var deserializeAws_json1_0ChildWorkflowExecutionCompletedEventAttributes = function (output, context) {
    return {
        initiatedEventId: output.initiatedEventId !== undefined && output.initiatedEventId !== null ? output.initiatedEventId : undefined,
        result: output.result !== undefined && output.result !== null ? output.result : undefined,
        startedEventId: output.startedEventId !== undefined && output.startedEventId !== null ? output.startedEventId : undefined,
        workflowExecution: output.workflowExecution !== undefined && output.workflowExecution !== null
            ? deserializeAws_json1_0WorkflowExecution(output.workflowExecution, context)
            : undefined,
        workflowType: output.workflowType !== undefined && output.workflowType !== null
            ? deserializeAws_json1_0WorkflowType(output.workflowType, context)
            : undefined,
    };
};
var deserializeAws_json1_0ChildWorkflowExecutionFailedEventAttributes = function (output, context) {
    return {
        details: output.details !== undefined && output.details !== null ? output.details : undefined,
        initiatedEventId: output.initiatedEventId !== undefined && output.initiatedEventId !== null ? output.initiatedEventId : undefined,
        reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
        startedEventId: output.startedEventId !== undefined && output.startedEventId !== null ? output.startedEventId : undefined,
        workflowExecution: output.workflowExecution !== undefined && output.workflowExecution !== null
            ? deserializeAws_json1_0WorkflowExecution(output.workflowExecution, context)
            : undefined,
        workflowType: output.workflowType !== undefined && output.workflowType !== null
            ? deserializeAws_json1_0WorkflowType(output.workflowType, context)
            : undefined,
    };
};
var deserializeAws_json1_0ChildWorkflowExecutionStartedEventAttributes = function (output, context) {
    return {
        initiatedEventId: output.initiatedEventId !== undefined && output.initiatedEventId !== null ? output.initiatedEventId : undefined,
        workflowExecution: output.workflowExecution !== undefined && output.workflowExecution !== null
            ? deserializeAws_json1_0WorkflowExecution(output.workflowExecution, context)
            : undefined,
        workflowType: output.workflowType !== undefined && output.workflowType !== null
            ? deserializeAws_json1_0WorkflowType(output.workflowType, context)
            : undefined,
    };
};
var deserializeAws_json1_0ChildWorkflowExecutionTerminatedEventAttributes = function (output, context) {
    return {
        initiatedEventId: output.initiatedEventId !== undefined && output.initiatedEventId !== null ? output.initiatedEventId : undefined,
        startedEventId: output.startedEventId !== undefined && output.startedEventId !== null ? output.startedEventId : undefined,
        workflowExecution: output.workflowExecution !== undefined && output.workflowExecution !== null
            ? deserializeAws_json1_0WorkflowExecution(output.workflowExecution, context)
            : undefined,
        workflowType: output.workflowType !== undefined && output.workflowType !== null
            ? deserializeAws_json1_0WorkflowType(output.workflowType, context)
            : undefined,
    };
};
var deserializeAws_json1_0ChildWorkflowExecutionTimedOutEventAttributes = function (output, context) {
    return {
        initiatedEventId: output.initiatedEventId !== undefined && output.initiatedEventId !== null ? output.initiatedEventId : undefined,
        startedEventId: output.startedEventId !== undefined && output.startedEventId !== null ? output.startedEventId : undefined,
        timeoutType: output.timeoutType !== undefined && output.timeoutType !== null ? output.timeoutType : undefined,
        workflowExecution: output.workflowExecution !== undefined && output.workflowExecution !== null
            ? deserializeAws_json1_0WorkflowExecution(output.workflowExecution, context)
            : undefined,
        workflowType: output.workflowType !== undefined && output.workflowType !== null
            ? deserializeAws_json1_0WorkflowType(output.workflowType, context)
            : undefined,
    };
};
var deserializeAws_json1_0CompleteWorkflowExecutionFailedEventAttributes = function (output, context) {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
    };
};
var deserializeAws_json1_0ContinueAsNewWorkflowExecutionFailedEventAttributes = function (output, context) {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
    };
};
var deserializeAws_json1_0DecisionTask = function (output, context) {
    return {
        events: output.events !== undefined && output.events !== null
            ? deserializeAws_json1_0HistoryEventList(output.events, context)
            : undefined,
        nextPageToken: output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
        previousStartedEventId: output.previousStartedEventId !== undefined && output.previousStartedEventId !== null
            ? output.previousStartedEventId
            : undefined,
        startedEventId: output.startedEventId !== undefined && output.startedEventId !== null ? output.startedEventId : undefined,
        taskToken: output.taskToken !== undefined && output.taskToken !== null ? output.taskToken : undefined,
        workflowExecution: output.workflowExecution !== undefined && output.workflowExecution !== null
            ? deserializeAws_json1_0WorkflowExecution(output.workflowExecution, context)
            : undefined,
        workflowType: output.workflowType !== undefined && output.workflowType !== null
            ? deserializeAws_json1_0WorkflowType(output.workflowType, context)
            : undefined,
    };
};
var deserializeAws_json1_0DecisionTaskCompletedEventAttributes = function (output, context) {
    return {
        executionContext: output.executionContext !== undefined && output.executionContext !== null ? output.executionContext : undefined,
        scheduledEventId: output.scheduledEventId !== undefined && output.scheduledEventId !== null ? output.scheduledEventId : undefined,
        startedEventId: output.startedEventId !== undefined && output.startedEventId !== null ? output.startedEventId : undefined,
    };
};
var deserializeAws_json1_0DecisionTaskScheduledEventAttributes = function (output, context) {
    return {
        startToCloseTimeout: output.startToCloseTimeout !== undefined && output.startToCloseTimeout !== null
            ? output.startToCloseTimeout
            : undefined,
        taskList: output.taskList !== undefined && output.taskList !== null
            ? deserializeAws_json1_0TaskList(output.taskList, context)
            : undefined,
        taskPriority: output.taskPriority !== undefined && output.taskPriority !== null ? output.taskPriority : undefined,
    };
};
var deserializeAws_json1_0DecisionTaskStartedEventAttributes = function (output, context) {
    return {
        identity: output.identity !== undefined && output.identity !== null ? output.identity : undefined,
        scheduledEventId: output.scheduledEventId !== undefined && output.scheduledEventId !== null ? output.scheduledEventId : undefined,
    };
};
var deserializeAws_json1_0DecisionTaskTimedOutEventAttributes = function (output, context) {
    return {
        scheduledEventId: output.scheduledEventId !== undefined && output.scheduledEventId !== null ? output.scheduledEventId : undefined,
        startedEventId: output.startedEventId !== undefined && output.startedEventId !== null ? output.startedEventId : undefined,
        timeoutType: output.timeoutType !== undefined && output.timeoutType !== null ? output.timeoutType : undefined,
    };
};
var deserializeAws_json1_0DefaultUndefinedFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0DomainAlreadyExistsFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0DomainConfiguration = function (output, context) {
    return {
        workflowExecutionRetentionPeriodInDays: output.workflowExecutionRetentionPeriodInDays !== undefined &&
            output.workflowExecutionRetentionPeriodInDays !== null
            ? output.workflowExecutionRetentionPeriodInDays
            : undefined,
    };
};
var deserializeAws_json1_0DomainDeprecatedFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0DomainDetail = function (output, context) {
    return {
        configuration: output.configuration !== undefined && output.configuration !== null
            ? deserializeAws_json1_0DomainConfiguration(output.configuration, context)
            : undefined,
        domainInfo: output.domainInfo !== undefined && output.domainInfo !== null
            ? deserializeAws_json1_0DomainInfo(output.domainInfo, context)
            : undefined,
    };
};
var deserializeAws_json1_0DomainInfo = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
var deserializeAws_json1_0DomainInfoList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0DomainInfo(entry, context);
    });
};
var deserializeAws_json1_0DomainInfos = function (output, context) {
    return {
        domainInfos: output.domainInfos !== undefined && output.domainInfos !== null
            ? deserializeAws_json1_0DomainInfoList(output.domainInfos, context)
            : undefined,
        nextPageToken: output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
    };
};
var deserializeAws_json1_0ExternalWorkflowExecutionCancelRequestedEventAttributes = function (output, context) {
    return {
        initiatedEventId: output.initiatedEventId !== undefined && output.initiatedEventId !== null ? output.initiatedEventId : undefined,
        workflowExecution: output.workflowExecution !== undefined && output.workflowExecution !== null
            ? deserializeAws_json1_0WorkflowExecution(output.workflowExecution, context)
            : undefined,
    };
};
var deserializeAws_json1_0ExternalWorkflowExecutionSignaledEventAttributes = function (output, context) {
    return {
        initiatedEventId: output.initiatedEventId !== undefined && output.initiatedEventId !== null ? output.initiatedEventId : undefined,
        workflowExecution: output.workflowExecution !== undefined && output.workflowExecution !== null
            ? deserializeAws_json1_0WorkflowExecution(output.workflowExecution, context)
            : undefined,
    };
};
var deserializeAws_json1_0FailWorkflowExecutionFailedEventAttributes = function (output, context) {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
    };
};
var deserializeAws_json1_0History = function (output, context) {
    return {
        events: output.events !== undefined && output.events !== null
            ? deserializeAws_json1_0HistoryEventList(output.events, context)
            : undefined,
        nextPageToken: output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
    };
};
var deserializeAws_json1_0HistoryEvent = function (output, context) {
    return {
        activityTaskCancelRequestedEventAttributes: output.activityTaskCancelRequestedEventAttributes !== undefined &&
            output.activityTaskCancelRequestedEventAttributes !== null
            ? deserializeAws_json1_0ActivityTaskCancelRequestedEventAttributes(output.activityTaskCancelRequestedEventAttributes, context)
            : undefined,
        activityTaskCanceledEventAttributes: output.activityTaskCanceledEventAttributes !== undefined && output.activityTaskCanceledEventAttributes !== null
            ? deserializeAws_json1_0ActivityTaskCanceledEventAttributes(output.activityTaskCanceledEventAttributes, context)
            : undefined,
        activityTaskCompletedEventAttributes: output.activityTaskCompletedEventAttributes !== undefined && output.activityTaskCompletedEventAttributes !== null
            ? deserializeAws_json1_0ActivityTaskCompletedEventAttributes(output.activityTaskCompletedEventAttributes, context)
            : undefined,
        activityTaskFailedEventAttributes: output.activityTaskFailedEventAttributes !== undefined && output.activityTaskFailedEventAttributes !== null
            ? deserializeAws_json1_0ActivityTaskFailedEventAttributes(output.activityTaskFailedEventAttributes, context)
            : undefined,
        activityTaskScheduledEventAttributes: output.activityTaskScheduledEventAttributes !== undefined && output.activityTaskScheduledEventAttributes !== null
            ? deserializeAws_json1_0ActivityTaskScheduledEventAttributes(output.activityTaskScheduledEventAttributes, context)
            : undefined,
        activityTaskStartedEventAttributes: output.activityTaskStartedEventAttributes !== undefined && output.activityTaskStartedEventAttributes !== null
            ? deserializeAws_json1_0ActivityTaskStartedEventAttributes(output.activityTaskStartedEventAttributes, context)
            : undefined,
        activityTaskTimedOutEventAttributes: output.activityTaskTimedOutEventAttributes !== undefined && output.activityTaskTimedOutEventAttributes !== null
            ? deserializeAws_json1_0ActivityTaskTimedOutEventAttributes(output.activityTaskTimedOutEventAttributes, context)
            : undefined,
        cancelTimerFailedEventAttributes: output.cancelTimerFailedEventAttributes !== undefined && output.cancelTimerFailedEventAttributes !== null
            ? deserializeAws_json1_0CancelTimerFailedEventAttributes(output.cancelTimerFailedEventAttributes, context)
            : undefined,
        cancelWorkflowExecutionFailedEventAttributes: output.cancelWorkflowExecutionFailedEventAttributes !== undefined &&
            output.cancelWorkflowExecutionFailedEventAttributes !== null
            ? deserializeAws_json1_0CancelWorkflowExecutionFailedEventAttributes(output.cancelWorkflowExecutionFailedEventAttributes, context)
            : undefined,
        childWorkflowExecutionCanceledEventAttributes: output.childWorkflowExecutionCanceledEventAttributes !== undefined &&
            output.childWorkflowExecutionCanceledEventAttributes !== null
            ? deserializeAws_json1_0ChildWorkflowExecutionCanceledEventAttributes(output.childWorkflowExecutionCanceledEventAttributes, context)
            : undefined,
        childWorkflowExecutionCompletedEventAttributes: output.childWorkflowExecutionCompletedEventAttributes !== undefined &&
            output.childWorkflowExecutionCompletedEventAttributes !== null
            ? deserializeAws_json1_0ChildWorkflowExecutionCompletedEventAttributes(output.childWorkflowExecutionCompletedEventAttributes, context)
            : undefined,
        childWorkflowExecutionFailedEventAttributes: output.childWorkflowExecutionFailedEventAttributes !== undefined &&
            output.childWorkflowExecutionFailedEventAttributes !== null
            ? deserializeAws_json1_0ChildWorkflowExecutionFailedEventAttributes(output.childWorkflowExecutionFailedEventAttributes, context)
            : undefined,
        childWorkflowExecutionStartedEventAttributes: output.childWorkflowExecutionStartedEventAttributes !== undefined &&
            output.childWorkflowExecutionStartedEventAttributes !== null
            ? deserializeAws_json1_0ChildWorkflowExecutionStartedEventAttributes(output.childWorkflowExecutionStartedEventAttributes, context)
            : undefined,
        childWorkflowExecutionTerminatedEventAttributes: output.childWorkflowExecutionTerminatedEventAttributes !== undefined &&
            output.childWorkflowExecutionTerminatedEventAttributes !== null
            ? deserializeAws_json1_0ChildWorkflowExecutionTerminatedEventAttributes(output.childWorkflowExecutionTerminatedEventAttributes, context)
            : undefined,
        childWorkflowExecutionTimedOutEventAttributes: output.childWorkflowExecutionTimedOutEventAttributes !== undefined &&
            output.childWorkflowExecutionTimedOutEventAttributes !== null
            ? deserializeAws_json1_0ChildWorkflowExecutionTimedOutEventAttributes(output.childWorkflowExecutionTimedOutEventAttributes, context)
            : undefined,
        completeWorkflowExecutionFailedEventAttributes: output.completeWorkflowExecutionFailedEventAttributes !== undefined &&
            output.completeWorkflowExecutionFailedEventAttributes !== null
            ? deserializeAws_json1_0CompleteWorkflowExecutionFailedEventAttributes(output.completeWorkflowExecutionFailedEventAttributes, context)
            : undefined,
        continueAsNewWorkflowExecutionFailedEventAttributes: output.continueAsNewWorkflowExecutionFailedEventAttributes !== undefined &&
            output.continueAsNewWorkflowExecutionFailedEventAttributes !== null
            ? deserializeAws_json1_0ContinueAsNewWorkflowExecutionFailedEventAttributes(output.continueAsNewWorkflowExecutionFailedEventAttributes, context)
            : undefined,
        decisionTaskCompletedEventAttributes: output.decisionTaskCompletedEventAttributes !== undefined && output.decisionTaskCompletedEventAttributes !== null
            ? deserializeAws_json1_0DecisionTaskCompletedEventAttributes(output.decisionTaskCompletedEventAttributes, context)
            : undefined,
        decisionTaskScheduledEventAttributes: output.decisionTaskScheduledEventAttributes !== undefined && output.decisionTaskScheduledEventAttributes !== null
            ? deserializeAws_json1_0DecisionTaskScheduledEventAttributes(output.decisionTaskScheduledEventAttributes, context)
            : undefined,
        decisionTaskStartedEventAttributes: output.decisionTaskStartedEventAttributes !== undefined && output.decisionTaskStartedEventAttributes !== null
            ? deserializeAws_json1_0DecisionTaskStartedEventAttributes(output.decisionTaskStartedEventAttributes, context)
            : undefined,
        decisionTaskTimedOutEventAttributes: output.decisionTaskTimedOutEventAttributes !== undefined && output.decisionTaskTimedOutEventAttributes !== null
            ? deserializeAws_json1_0DecisionTaskTimedOutEventAttributes(output.decisionTaskTimedOutEventAttributes, context)
            : undefined,
        eventId: output.eventId !== undefined && output.eventId !== null ? output.eventId : undefined,
        eventTimestamp: output.eventTimestamp !== undefined && output.eventTimestamp !== null
            ? new Date(Math.round(output.eventTimestamp * 1000))
            : undefined,
        eventType: output.eventType !== undefined && output.eventType !== null ? output.eventType : undefined,
        externalWorkflowExecutionCancelRequestedEventAttributes: output.externalWorkflowExecutionCancelRequestedEventAttributes !== undefined &&
            output.externalWorkflowExecutionCancelRequestedEventAttributes !== null
            ? deserializeAws_json1_0ExternalWorkflowExecutionCancelRequestedEventAttributes(output.externalWorkflowExecutionCancelRequestedEventAttributes, context)
            : undefined,
        externalWorkflowExecutionSignaledEventAttributes: output.externalWorkflowExecutionSignaledEventAttributes !== undefined &&
            output.externalWorkflowExecutionSignaledEventAttributes !== null
            ? deserializeAws_json1_0ExternalWorkflowExecutionSignaledEventAttributes(output.externalWorkflowExecutionSignaledEventAttributes, context)
            : undefined,
        failWorkflowExecutionFailedEventAttributes: output.failWorkflowExecutionFailedEventAttributes !== undefined &&
            output.failWorkflowExecutionFailedEventAttributes !== null
            ? deserializeAws_json1_0FailWorkflowExecutionFailedEventAttributes(output.failWorkflowExecutionFailedEventAttributes, context)
            : undefined,
        lambdaFunctionCompletedEventAttributes: output.lambdaFunctionCompletedEventAttributes !== undefined &&
            output.lambdaFunctionCompletedEventAttributes !== null
            ? deserializeAws_json1_0LambdaFunctionCompletedEventAttributes(output.lambdaFunctionCompletedEventAttributes, context)
            : undefined,
        lambdaFunctionFailedEventAttributes: output.lambdaFunctionFailedEventAttributes !== undefined && output.lambdaFunctionFailedEventAttributes !== null
            ? deserializeAws_json1_0LambdaFunctionFailedEventAttributes(output.lambdaFunctionFailedEventAttributes, context)
            : undefined,
        lambdaFunctionScheduledEventAttributes: output.lambdaFunctionScheduledEventAttributes !== undefined &&
            output.lambdaFunctionScheduledEventAttributes !== null
            ? deserializeAws_json1_0LambdaFunctionScheduledEventAttributes(output.lambdaFunctionScheduledEventAttributes, context)
            : undefined,
        lambdaFunctionStartedEventAttributes: output.lambdaFunctionStartedEventAttributes !== undefined && output.lambdaFunctionStartedEventAttributes !== null
            ? deserializeAws_json1_0LambdaFunctionStartedEventAttributes(output.lambdaFunctionStartedEventAttributes, context)
            : undefined,
        lambdaFunctionTimedOutEventAttributes: output.lambdaFunctionTimedOutEventAttributes !== undefined &&
            output.lambdaFunctionTimedOutEventAttributes !== null
            ? deserializeAws_json1_0LambdaFunctionTimedOutEventAttributes(output.lambdaFunctionTimedOutEventAttributes, context)
            : undefined,
        markerRecordedEventAttributes: output.markerRecordedEventAttributes !== undefined && output.markerRecordedEventAttributes !== null
            ? deserializeAws_json1_0MarkerRecordedEventAttributes(output.markerRecordedEventAttributes, context)
            : undefined,
        recordMarkerFailedEventAttributes: output.recordMarkerFailedEventAttributes !== undefined && output.recordMarkerFailedEventAttributes !== null
            ? deserializeAws_json1_0RecordMarkerFailedEventAttributes(output.recordMarkerFailedEventAttributes, context)
            : undefined,
        requestCancelActivityTaskFailedEventAttributes: output.requestCancelActivityTaskFailedEventAttributes !== undefined &&
            output.requestCancelActivityTaskFailedEventAttributes !== null
            ? deserializeAws_json1_0RequestCancelActivityTaskFailedEventAttributes(output.requestCancelActivityTaskFailedEventAttributes, context)
            : undefined,
        requestCancelExternalWorkflowExecutionFailedEventAttributes: output.requestCancelExternalWorkflowExecutionFailedEventAttributes !== undefined &&
            output.requestCancelExternalWorkflowExecutionFailedEventAttributes !== null
            ? deserializeAws_json1_0RequestCancelExternalWorkflowExecutionFailedEventAttributes(output.requestCancelExternalWorkflowExecutionFailedEventAttributes, context)
            : undefined,
        requestCancelExternalWorkflowExecutionInitiatedEventAttributes: output.requestCancelExternalWorkflowExecutionInitiatedEventAttributes !== undefined &&
            output.requestCancelExternalWorkflowExecutionInitiatedEventAttributes !== null
            ? deserializeAws_json1_0RequestCancelExternalWorkflowExecutionInitiatedEventAttributes(output.requestCancelExternalWorkflowExecutionInitiatedEventAttributes, context)
            : undefined,
        scheduleActivityTaskFailedEventAttributes: output.scheduleActivityTaskFailedEventAttributes !== undefined &&
            output.scheduleActivityTaskFailedEventAttributes !== null
            ? deserializeAws_json1_0ScheduleActivityTaskFailedEventAttributes(output.scheduleActivityTaskFailedEventAttributes, context)
            : undefined,
        scheduleLambdaFunctionFailedEventAttributes: output.scheduleLambdaFunctionFailedEventAttributes !== undefined &&
            output.scheduleLambdaFunctionFailedEventAttributes !== null
            ? deserializeAws_json1_0ScheduleLambdaFunctionFailedEventAttributes(output.scheduleLambdaFunctionFailedEventAttributes, context)
            : undefined,
        signalExternalWorkflowExecutionFailedEventAttributes: output.signalExternalWorkflowExecutionFailedEventAttributes !== undefined &&
            output.signalExternalWorkflowExecutionFailedEventAttributes !== null
            ? deserializeAws_json1_0SignalExternalWorkflowExecutionFailedEventAttributes(output.signalExternalWorkflowExecutionFailedEventAttributes, context)
            : undefined,
        signalExternalWorkflowExecutionInitiatedEventAttributes: output.signalExternalWorkflowExecutionInitiatedEventAttributes !== undefined &&
            output.signalExternalWorkflowExecutionInitiatedEventAttributes !== null
            ? deserializeAws_json1_0SignalExternalWorkflowExecutionInitiatedEventAttributes(output.signalExternalWorkflowExecutionInitiatedEventAttributes, context)
            : undefined,
        startChildWorkflowExecutionFailedEventAttributes: output.startChildWorkflowExecutionFailedEventAttributes !== undefined &&
            output.startChildWorkflowExecutionFailedEventAttributes !== null
            ? deserializeAws_json1_0StartChildWorkflowExecutionFailedEventAttributes(output.startChildWorkflowExecutionFailedEventAttributes, context)
            : undefined,
        startChildWorkflowExecutionInitiatedEventAttributes: output.startChildWorkflowExecutionInitiatedEventAttributes !== undefined &&
            output.startChildWorkflowExecutionInitiatedEventAttributes !== null
            ? deserializeAws_json1_0StartChildWorkflowExecutionInitiatedEventAttributes(output.startChildWorkflowExecutionInitiatedEventAttributes, context)
            : undefined,
        startLambdaFunctionFailedEventAttributes: output.startLambdaFunctionFailedEventAttributes !== undefined &&
            output.startLambdaFunctionFailedEventAttributes !== null
            ? deserializeAws_json1_0StartLambdaFunctionFailedEventAttributes(output.startLambdaFunctionFailedEventAttributes, context)
            : undefined,
        startTimerFailedEventAttributes: output.startTimerFailedEventAttributes !== undefined && output.startTimerFailedEventAttributes !== null
            ? deserializeAws_json1_0StartTimerFailedEventAttributes(output.startTimerFailedEventAttributes, context)
            : undefined,
        timerCanceledEventAttributes: output.timerCanceledEventAttributes !== undefined && output.timerCanceledEventAttributes !== null
            ? deserializeAws_json1_0TimerCanceledEventAttributes(output.timerCanceledEventAttributes, context)
            : undefined,
        timerFiredEventAttributes: output.timerFiredEventAttributes !== undefined && output.timerFiredEventAttributes !== null
            ? deserializeAws_json1_0TimerFiredEventAttributes(output.timerFiredEventAttributes, context)
            : undefined,
        timerStartedEventAttributes: output.timerStartedEventAttributes !== undefined && output.timerStartedEventAttributes !== null
            ? deserializeAws_json1_0TimerStartedEventAttributes(output.timerStartedEventAttributes, context)
            : undefined,
        workflowExecutionCancelRequestedEventAttributes: output.workflowExecutionCancelRequestedEventAttributes !== undefined &&
            output.workflowExecutionCancelRequestedEventAttributes !== null
            ? deserializeAws_json1_0WorkflowExecutionCancelRequestedEventAttributes(output.workflowExecutionCancelRequestedEventAttributes, context)
            : undefined,
        workflowExecutionCanceledEventAttributes: output.workflowExecutionCanceledEventAttributes !== undefined &&
            output.workflowExecutionCanceledEventAttributes !== null
            ? deserializeAws_json1_0WorkflowExecutionCanceledEventAttributes(output.workflowExecutionCanceledEventAttributes, context)
            : undefined,
        workflowExecutionCompletedEventAttributes: output.workflowExecutionCompletedEventAttributes !== undefined &&
            output.workflowExecutionCompletedEventAttributes !== null
            ? deserializeAws_json1_0WorkflowExecutionCompletedEventAttributes(output.workflowExecutionCompletedEventAttributes, context)
            : undefined,
        workflowExecutionContinuedAsNewEventAttributes: output.workflowExecutionContinuedAsNewEventAttributes !== undefined &&
            output.workflowExecutionContinuedAsNewEventAttributes !== null
            ? deserializeAws_json1_0WorkflowExecutionContinuedAsNewEventAttributes(output.workflowExecutionContinuedAsNewEventAttributes, context)
            : undefined,
        workflowExecutionFailedEventAttributes: output.workflowExecutionFailedEventAttributes !== undefined &&
            output.workflowExecutionFailedEventAttributes !== null
            ? deserializeAws_json1_0WorkflowExecutionFailedEventAttributes(output.workflowExecutionFailedEventAttributes, context)
            : undefined,
        workflowExecutionSignaledEventAttributes: output.workflowExecutionSignaledEventAttributes !== undefined &&
            output.workflowExecutionSignaledEventAttributes !== null
            ? deserializeAws_json1_0WorkflowExecutionSignaledEventAttributes(output.workflowExecutionSignaledEventAttributes, context)
            : undefined,
        workflowExecutionStartedEventAttributes: output.workflowExecutionStartedEventAttributes !== undefined &&
            output.workflowExecutionStartedEventAttributes !== null
            ? deserializeAws_json1_0WorkflowExecutionStartedEventAttributes(output.workflowExecutionStartedEventAttributes, context)
            : undefined,
        workflowExecutionTerminatedEventAttributes: output.workflowExecutionTerminatedEventAttributes !== undefined &&
            output.workflowExecutionTerminatedEventAttributes !== null
            ? deserializeAws_json1_0WorkflowExecutionTerminatedEventAttributes(output.workflowExecutionTerminatedEventAttributes, context)
            : undefined,
        workflowExecutionTimedOutEventAttributes: output.workflowExecutionTimedOutEventAttributes !== undefined &&
            output.workflowExecutionTimedOutEventAttributes !== null
            ? deserializeAws_json1_0WorkflowExecutionTimedOutEventAttributes(output.workflowExecutionTimedOutEventAttributes, context)
            : undefined,
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
var deserializeAws_json1_0LambdaFunctionCompletedEventAttributes = function (output, context) {
    return {
        result: output.result !== undefined && output.result !== null ? output.result : undefined,
        scheduledEventId: output.scheduledEventId !== undefined && output.scheduledEventId !== null ? output.scheduledEventId : undefined,
        startedEventId: output.startedEventId !== undefined && output.startedEventId !== null ? output.startedEventId : undefined,
    };
};
var deserializeAws_json1_0LambdaFunctionFailedEventAttributes = function (output, context) {
    return {
        details: output.details !== undefined && output.details !== null ? output.details : undefined,
        reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
        scheduledEventId: output.scheduledEventId !== undefined && output.scheduledEventId !== null ? output.scheduledEventId : undefined,
        startedEventId: output.startedEventId !== undefined && output.startedEventId !== null ? output.startedEventId : undefined,
    };
};
var deserializeAws_json1_0LambdaFunctionScheduledEventAttributes = function (output, context) {
    return {
        control: output.control !== undefined && output.control !== null ? output.control : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        input: output.input !== undefined && output.input !== null ? output.input : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        startToCloseTimeout: output.startToCloseTimeout !== undefined && output.startToCloseTimeout !== null
            ? output.startToCloseTimeout
            : undefined,
    };
};
var deserializeAws_json1_0LambdaFunctionStartedEventAttributes = function (output, context) {
    return {
        scheduledEventId: output.scheduledEventId !== undefined && output.scheduledEventId !== null ? output.scheduledEventId : undefined,
    };
};
var deserializeAws_json1_0LambdaFunctionTimedOutEventAttributes = function (output, context) {
    return {
        scheduledEventId: output.scheduledEventId !== undefined && output.scheduledEventId !== null ? output.scheduledEventId : undefined,
        startedEventId: output.startedEventId !== undefined && output.startedEventId !== null ? output.startedEventId : undefined,
        timeoutType: output.timeoutType !== undefined && output.timeoutType !== null ? output.timeoutType : undefined,
    };
};
var deserializeAws_json1_0LimitExceededFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0ListTagsForResourceOutput = function (output, context) {
    return {
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_0ResourceTagList(output.tags, context)
            : undefined,
    };
};
var deserializeAws_json1_0MarkerRecordedEventAttributes = function (output, context) {
    return {
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
        details: output.details !== undefined && output.details !== null ? output.details : undefined,
        markerName: output.markerName !== undefined && output.markerName !== null ? output.markerName : undefined,
    };
};
var deserializeAws_json1_0OperationNotPermittedFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0PendingTaskCount = function (output, context) {
    return {
        count: output.count !== undefined && output.count !== null ? output.count : undefined,
        truncated: output.truncated !== undefined && output.truncated !== null ? output.truncated : undefined,
    };
};
var deserializeAws_json1_0RecordMarkerFailedEventAttributes = function (output, context) {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
        markerName: output.markerName !== undefined && output.markerName !== null ? output.markerName : undefined,
    };
};
var deserializeAws_json1_0RequestCancelActivityTaskFailedEventAttributes = function (output, context) {
    return {
        activityId: output.activityId !== undefined && output.activityId !== null ? output.activityId : undefined,
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
    };
};
var deserializeAws_json1_0RequestCancelExternalWorkflowExecutionFailedEventAttributes = function (output, context) {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        control: output.control !== undefined && output.control !== null ? output.control : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
        initiatedEventId: output.initiatedEventId !== undefined && output.initiatedEventId !== null ? output.initiatedEventId : undefined,
        runId: output.runId !== undefined && output.runId !== null ? output.runId : undefined,
        workflowId: output.workflowId !== undefined && output.workflowId !== null ? output.workflowId : undefined,
    };
};
var deserializeAws_json1_0RequestCancelExternalWorkflowExecutionInitiatedEventAttributes = function (output, context) {
    return {
        control: output.control !== undefined && output.control !== null ? output.control : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
        runId: output.runId !== undefined && output.runId !== null ? output.runId : undefined,
        workflowId: output.workflowId !== undefined && output.workflowId !== null ? output.workflowId : undefined,
    };
};
var deserializeAws_json1_0ResourceTag = function (output, context) {
    return {
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
var deserializeAws_json1_0ResourceTagList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0ResourceTag(entry, context);
    });
};
var deserializeAws_json1_0Run = function (output, context) {
    return {
        runId: output.runId !== undefined && output.runId !== null ? output.runId : undefined,
    };
};
var deserializeAws_json1_0ScheduleActivityTaskFailedEventAttributes = function (output, context) {
    return {
        activityId: output.activityId !== undefined && output.activityId !== null ? output.activityId : undefined,
        activityType: output.activityType !== undefined && output.activityType !== null
            ? deserializeAws_json1_0ActivityType(output.activityType, context)
            : undefined,
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
    };
};
var deserializeAws_json1_0ScheduleLambdaFunctionFailedEventAttributes = function (output, context) {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
var deserializeAws_json1_0SignalExternalWorkflowExecutionFailedEventAttributes = function (output, context) {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        control: output.control !== undefined && output.control !== null ? output.control : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
        initiatedEventId: output.initiatedEventId !== undefined && output.initiatedEventId !== null ? output.initiatedEventId : undefined,
        runId: output.runId !== undefined && output.runId !== null ? output.runId : undefined,
        workflowId: output.workflowId !== undefined && output.workflowId !== null ? output.workflowId : undefined,
    };
};
var deserializeAws_json1_0SignalExternalWorkflowExecutionInitiatedEventAttributes = function (output, context) {
    return {
        control: output.control !== undefined && output.control !== null ? output.control : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
        input: output.input !== undefined && output.input !== null ? output.input : undefined,
        runId: output.runId !== undefined && output.runId !== null ? output.runId : undefined,
        signalName: output.signalName !== undefined && output.signalName !== null ? output.signalName : undefined,
        workflowId: output.workflowId !== undefined && output.workflowId !== null ? output.workflowId : undefined,
    };
};
var deserializeAws_json1_0StartChildWorkflowExecutionFailedEventAttributes = function (output, context) {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        control: output.control !== undefined && output.control !== null ? output.control : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
        initiatedEventId: output.initiatedEventId !== undefined && output.initiatedEventId !== null ? output.initiatedEventId : undefined,
        workflowId: output.workflowId !== undefined && output.workflowId !== null ? output.workflowId : undefined,
        workflowType: output.workflowType !== undefined && output.workflowType !== null
            ? deserializeAws_json1_0WorkflowType(output.workflowType, context)
            : undefined,
    };
};
var deserializeAws_json1_0StartChildWorkflowExecutionInitiatedEventAttributes = function (output, context) {
    return {
        childPolicy: output.childPolicy !== undefined && output.childPolicy !== null ? output.childPolicy : undefined,
        control: output.control !== undefined && output.control !== null ? output.control : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
        executionStartToCloseTimeout: output.executionStartToCloseTimeout !== undefined && output.executionStartToCloseTimeout !== null
            ? output.executionStartToCloseTimeout
            : undefined,
        input: output.input !== undefined && output.input !== null ? output.input : undefined,
        lambdaRole: output.lambdaRole !== undefined && output.lambdaRole !== null ? output.lambdaRole : undefined,
        tagList: output.tagList !== undefined && output.tagList !== null
            ? deserializeAws_json1_0TagList(output.tagList, context)
            : undefined,
        taskList: output.taskList !== undefined && output.taskList !== null
            ? deserializeAws_json1_0TaskList(output.taskList, context)
            : undefined,
        taskPriority: output.taskPriority !== undefined && output.taskPriority !== null ? output.taskPriority : undefined,
        taskStartToCloseTimeout: output.taskStartToCloseTimeout !== undefined && output.taskStartToCloseTimeout !== null
            ? output.taskStartToCloseTimeout
            : undefined,
        workflowId: output.workflowId !== undefined && output.workflowId !== null ? output.workflowId : undefined,
        workflowType: output.workflowType !== undefined && output.workflowType !== null
            ? deserializeAws_json1_0WorkflowType(output.workflowType, context)
            : undefined,
    };
};
var deserializeAws_json1_0StartLambdaFunctionFailedEventAttributes = function (output, context) {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        scheduledEventId: output.scheduledEventId !== undefined && output.scheduledEventId !== null ? output.scheduledEventId : undefined,
    };
};
var deserializeAws_json1_0StartTimerFailedEventAttributes = function (output, context) {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
        timerId: output.timerId !== undefined && output.timerId !== null ? output.timerId : undefined,
    };
};
var deserializeAws_json1_0TagList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_0TaskList = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
var deserializeAws_json1_0TimerCanceledEventAttributes = function (output, context) {
    return {
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
        startedEventId: output.startedEventId !== undefined && output.startedEventId !== null ? output.startedEventId : undefined,
        timerId: output.timerId !== undefined && output.timerId !== null ? output.timerId : undefined,
    };
};
var deserializeAws_json1_0TimerFiredEventAttributes = function (output, context) {
    return {
        startedEventId: output.startedEventId !== undefined && output.startedEventId !== null ? output.startedEventId : undefined,
        timerId: output.timerId !== undefined && output.timerId !== null ? output.timerId : undefined,
    };
};
var deserializeAws_json1_0TimerStartedEventAttributes = function (output, context) {
    return {
        control: output.control !== undefined && output.control !== null ? output.control : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
        startToFireTimeout: output.startToFireTimeout !== undefined && output.startToFireTimeout !== null
            ? output.startToFireTimeout
            : undefined,
        timerId: output.timerId !== undefined && output.timerId !== null ? output.timerId : undefined,
    };
};
var deserializeAws_json1_0TooManyTagsFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0TypeAlreadyExistsFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0TypeDeprecatedFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0UnknownResourceFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0WorkflowExecution = function (output, context) {
    return {
        runId: output.runId !== undefined && output.runId !== null ? output.runId : undefined,
        workflowId: output.workflowId !== undefined && output.workflowId !== null ? output.workflowId : undefined,
    };
};
var deserializeAws_json1_0WorkflowExecutionAlreadyStartedFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0WorkflowExecutionCanceledEventAttributes = function (output, context) {
    return {
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
        details: output.details !== undefined && output.details !== null ? output.details : undefined,
    };
};
var deserializeAws_json1_0WorkflowExecutionCancelRequestedEventAttributes = function (output, context) {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        externalInitiatedEventId: output.externalInitiatedEventId !== undefined && output.externalInitiatedEventId !== null
            ? output.externalInitiatedEventId
            : undefined,
        externalWorkflowExecution: output.externalWorkflowExecution !== undefined && output.externalWorkflowExecution !== null
            ? deserializeAws_json1_0WorkflowExecution(output.externalWorkflowExecution, context)
            : undefined,
    };
};
var deserializeAws_json1_0WorkflowExecutionCompletedEventAttributes = function (output, context) {
    return {
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
        result: output.result !== undefined && output.result !== null ? output.result : undefined,
    };
};
var deserializeAws_json1_0WorkflowExecutionConfiguration = function (output, context) {
    return {
        childPolicy: output.childPolicy !== undefined && output.childPolicy !== null ? output.childPolicy : undefined,
        executionStartToCloseTimeout: output.executionStartToCloseTimeout !== undefined && output.executionStartToCloseTimeout !== null
            ? output.executionStartToCloseTimeout
            : undefined,
        lambdaRole: output.lambdaRole !== undefined && output.lambdaRole !== null ? output.lambdaRole : undefined,
        taskList: output.taskList !== undefined && output.taskList !== null
            ? deserializeAws_json1_0TaskList(output.taskList, context)
            : undefined,
        taskPriority: output.taskPriority !== undefined && output.taskPriority !== null ? output.taskPriority : undefined,
        taskStartToCloseTimeout: output.taskStartToCloseTimeout !== undefined && output.taskStartToCloseTimeout !== null
            ? output.taskStartToCloseTimeout
            : undefined,
    };
};
var deserializeAws_json1_0WorkflowExecutionContinuedAsNewEventAttributes = function (output, context) {
    return {
        childPolicy: output.childPolicy !== undefined && output.childPolicy !== null ? output.childPolicy : undefined,
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
        executionStartToCloseTimeout: output.executionStartToCloseTimeout !== undefined && output.executionStartToCloseTimeout !== null
            ? output.executionStartToCloseTimeout
            : undefined,
        input: output.input !== undefined && output.input !== null ? output.input : undefined,
        lambdaRole: output.lambdaRole !== undefined && output.lambdaRole !== null ? output.lambdaRole : undefined,
        newExecutionRunId: output.newExecutionRunId !== undefined && output.newExecutionRunId !== null
            ? output.newExecutionRunId
            : undefined,
        tagList: output.tagList !== undefined && output.tagList !== null
            ? deserializeAws_json1_0TagList(output.tagList, context)
            : undefined,
        taskList: output.taskList !== undefined && output.taskList !== null
            ? deserializeAws_json1_0TaskList(output.taskList, context)
            : undefined,
        taskPriority: output.taskPriority !== undefined && output.taskPriority !== null ? output.taskPriority : undefined,
        taskStartToCloseTimeout: output.taskStartToCloseTimeout !== undefined && output.taskStartToCloseTimeout !== null
            ? output.taskStartToCloseTimeout
            : undefined,
        workflowType: output.workflowType !== undefined && output.workflowType !== null
            ? deserializeAws_json1_0WorkflowType(output.workflowType, context)
            : undefined,
    };
};
var deserializeAws_json1_0WorkflowExecutionCount = function (output, context) {
    return {
        count: output.count !== undefined && output.count !== null ? output.count : undefined,
        truncated: output.truncated !== undefined && output.truncated !== null ? output.truncated : undefined,
    };
};
var deserializeAws_json1_0WorkflowExecutionDetail = function (output, context) {
    return {
        executionConfiguration: output.executionConfiguration !== undefined && output.executionConfiguration !== null
            ? deserializeAws_json1_0WorkflowExecutionConfiguration(output.executionConfiguration, context)
            : undefined,
        executionInfo: output.executionInfo !== undefined && output.executionInfo !== null
            ? deserializeAws_json1_0WorkflowExecutionInfo(output.executionInfo, context)
            : undefined,
        latestActivityTaskTimestamp: output.latestActivityTaskTimestamp !== undefined && output.latestActivityTaskTimestamp !== null
            ? new Date(Math.round(output.latestActivityTaskTimestamp * 1000))
            : undefined,
        latestExecutionContext: output.latestExecutionContext !== undefined && output.latestExecutionContext !== null
            ? output.latestExecutionContext
            : undefined,
        openCounts: output.openCounts !== undefined && output.openCounts !== null
            ? deserializeAws_json1_0WorkflowExecutionOpenCounts(output.openCounts, context)
            : undefined,
    };
};
var deserializeAws_json1_0WorkflowExecutionFailedEventAttributes = function (output, context) {
    return {
        decisionTaskCompletedEventId: output.decisionTaskCompletedEventId !== undefined && output.decisionTaskCompletedEventId !== null
            ? output.decisionTaskCompletedEventId
            : undefined,
        details: output.details !== undefined && output.details !== null ? output.details : undefined,
        reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
    };
};
var deserializeAws_json1_0WorkflowExecutionInfo = function (output, context) {
    return {
        cancelRequested: output.cancelRequested !== undefined && output.cancelRequested !== null ? output.cancelRequested : undefined,
        closeStatus: output.closeStatus !== undefined && output.closeStatus !== null ? output.closeStatus : undefined,
        closeTimestamp: output.closeTimestamp !== undefined && output.closeTimestamp !== null
            ? new Date(Math.round(output.closeTimestamp * 1000))
            : undefined,
        execution: output.execution !== undefined && output.execution !== null
            ? deserializeAws_json1_0WorkflowExecution(output.execution, context)
            : undefined,
        executionStatus: output.executionStatus !== undefined && output.executionStatus !== null ? output.executionStatus : undefined,
        parent: output.parent !== undefined && output.parent !== null
            ? deserializeAws_json1_0WorkflowExecution(output.parent, context)
            : undefined,
        startTimestamp: output.startTimestamp !== undefined && output.startTimestamp !== null
            ? new Date(Math.round(output.startTimestamp * 1000))
            : undefined,
        tagList: output.tagList !== undefined && output.tagList !== null
            ? deserializeAws_json1_0TagList(output.tagList, context)
            : undefined,
        workflowType: output.workflowType !== undefined && output.workflowType !== null
            ? deserializeAws_json1_0WorkflowType(output.workflowType, context)
            : undefined,
    };
};
var deserializeAws_json1_0WorkflowExecutionInfoList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0WorkflowExecutionInfo(entry, context);
    });
};
var deserializeAws_json1_0WorkflowExecutionInfos = function (output, context) {
    return {
        executionInfos: output.executionInfos !== undefined && output.executionInfos !== null
            ? deserializeAws_json1_0WorkflowExecutionInfoList(output.executionInfos, context)
            : undefined,
        nextPageToken: output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
    };
};
var deserializeAws_json1_0WorkflowExecutionOpenCounts = function (output, context) {
    return {
        openActivityTasks: output.openActivityTasks !== undefined && output.openActivityTasks !== null
            ? output.openActivityTasks
            : undefined,
        openChildWorkflowExecutions: output.openChildWorkflowExecutions !== undefined && output.openChildWorkflowExecutions !== null
            ? output.openChildWorkflowExecutions
            : undefined,
        openDecisionTasks: output.openDecisionTasks !== undefined && output.openDecisionTasks !== null
            ? output.openDecisionTasks
            : undefined,
        openLambdaFunctions: output.openLambdaFunctions !== undefined && output.openLambdaFunctions !== null
            ? output.openLambdaFunctions
            : undefined,
        openTimers: output.openTimers !== undefined && output.openTimers !== null ? output.openTimers : undefined,
    };
};
var deserializeAws_json1_0WorkflowExecutionSignaledEventAttributes = function (output, context) {
    return {
        externalInitiatedEventId: output.externalInitiatedEventId !== undefined && output.externalInitiatedEventId !== null
            ? output.externalInitiatedEventId
            : undefined,
        externalWorkflowExecution: output.externalWorkflowExecution !== undefined && output.externalWorkflowExecution !== null
            ? deserializeAws_json1_0WorkflowExecution(output.externalWorkflowExecution, context)
            : undefined,
        input: output.input !== undefined && output.input !== null ? output.input : undefined,
        signalName: output.signalName !== undefined && output.signalName !== null ? output.signalName : undefined,
    };
};
var deserializeAws_json1_0WorkflowExecutionStartedEventAttributes = function (output, context) {
    return {
        childPolicy: output.childPolicy !== undefined && output.childPolicy !== null ? output.childPolicy : undefined,
        continuedExecutionRunId: output.continuedExecutionRunId !== undefined && output.continuedExecutionRunId !== null
            ? output.continuedExecutionRunId
            : undefined,
        executionStartToCloseTimeout: output.executionStartToCloseTimeout !== undefined && output.executionStartToCloseTimeout !== null
            ? output.executionStartToCloseTimeout
            : undefined,
        input: output.input !== undefined && output.input !== null ? output.input : undefined,
        lambdaRole: output.lambdaRole !== undefined && output.lambdaRole !== null ? output.lambdaRole : undefined,
        parentInitiatedEventId: output.parentInitiatedEventId !== undefined && output.parentInitiatedEventId !== null
            ? output.parentInitiatedEventId
            : undefined,
        parentWorkflowExecution: output.parentWorkflowExecution !== undefined && output.parentWorkflowExecution !== null
            ? deserializeAws_json1_0WorkflowExecution(output.parentWorkflowExecution, context)
            : undefined,
        tagList: output.tagList !== undefined && output.tagList !== null
            ? deserializeAws_json1_0TagList(output.tagList, context)
            : undefined,
        taskList: output.taskList !== undefined && output.taskList !== null
            ? deserializeAws_json1_0TaskList(output.taskList, context)
            : undefined,
        taskPriority: output.taskPriority !== undefined && output.taskPriority !== null ? output.taskPriority : undefined,
        taskStartToCloseTimeout: output.taskStartToCloseTimeout !== undefined && output.taskStartToCloseTimeout !== null
            ? output.taskStartToCloseTimeout
            : undefined,
        workflowType: output.workflowType !== undefined && output.workflowType !== null
            ? deserializeAws_json1_0WorkflowType(output.workflowType, context)
            : undefined,
    };
};
var deserializeAws_json1_0WorkflowExecutionTerminatedEventAttributes = function (output, context) {
    return {
        cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
        childPolicy: output.childPolicy !== undefined && output.childPolicy !== null ? output.childPolicy : undefined,
        details: output.details !== undefined && output.details !== null ? output.details : undefined,
        reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
    };
};
var deserializeAws_json1_0WorkflowExecutionTimedOutEventAttributes = function (output, context) {
    return {
        childPolicy: output.childPolicy !== undefined && output.childPolicy !== null ? output.childPolicy : undefined,
        timeoutType: output.timeoutType !== undefined && output.timeoutType !== null ? output.timeoutType : undefined,
    };
};
var deserializeAws_json1_0WorkflowType = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
var deserializeAws_json1_0WorkflowTypeConfiguration = function (output, context) {
    return {
        defaultChildPolicy: output.defaultChildPolicy !== undefined && output.defaultChildPolicy !== null
            ? output.defaultChildPolicy
            : undefined,
        defaultExecutionStartToCloseTimeout: output.defaultExecutionStartToCloseTimeout !== undefined && output.defaultExecutionStartToCloseTimeout !== null
            ? output.defaultExecutionStartToCloseTimeout
            : undefined,
        defaultLambdaRole: output.defaultLambdaRole !== undefined && output.defaultLambdaRole !== null
            ? output.defaultLambdaRole
            : undefined,
        defaultTaskList: output.defaultTaskList !== undefined && output.defaultTaskList !== null
            ? deserializeAws_json1_0TaskList(output.defaultTaskList, context)
            : undefined,
        defaultTaskPriority: output.defaultTaskPriority !== undefined && output.defaultTaskPriority !== null
            ? output.defaultTaskPriority
            : undefined,
        defaultTaskStartToCloseTimeout: output.defaultTaskStartToCloseTimeout !== undefined && output.defaultTaskStartToCloseTimeout !== null
            ? output.defaultTaskStartToCloseTimeout
            : undefined,
    };
};
var deserializeAws_json1_0WorkflowTypeDetail = function (output, context) {
    return {
        configuration: output.configuration !== undefined && output.configuration !== null
            ? deserializeAws_json1_0WorkflowTypeConfiguration(output.configuration, context)
            : undefined,
        typeInfo: output.typeInfo !== undefined && output.typeInfo !== null
            ? deserializeAws_json1_0WorkflowTypeInfo(output.typeInfo, context)
            : undefined,
    };
};
var deserializeAws_json1_0WorkflowTypeInfo = function (output, context) {
    return {
        creationDate: output.creationDate !== undefined && output.creationDate !== null
            ? new Date(Math.round(output.creationDate * 1000))
            : undefined,
        deprecationDate: output.deprecationDate !== undefined && output.deprecationDate !== null
            ? new Date(Math.round(output.deprecationDate * 1000))
            : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        workflowType: output.workflowType !== undefined && output.workflowType !== null
            ? deserializeAws_json1_0WorkflowType(output.workflowType, context)
            : undefined,
    };
};
var deserializeAws_json1_0WorkflowTypeInfoList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0WorkflowTypeInfo(entry, context);
    });
};
var deserializeAws_json1_0WorkflowTypeInfos = function (output, context) {
    return {
        nextPageToken: output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
        typeInfos: output.typeInfos !== undefined && output.typeInfos !== null
            ? deserializeAws_json1_0WorkflowTypeInfoList(output.typeInfos, context)
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