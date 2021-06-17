import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { v4 as generateIdempotencyToken } from "uuid";
export var serializeAws_json1_1AcknowledgeJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodePipeline_20150709.AcknowledgeJob",
        };
        body = JSON.stringify(serializeAws_json1_1AcknowledgeJobInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AcknowledgeThirdPartyJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodePipeline_20150709.AcknowledgeThirdPartyJob",
        };
        body = JSON.stringify(serializeAws_json1_1AcknowledgeThirdPartyJobInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateCustomActionTypeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodePipeline_20150709.CreateCustomActionType",
        };
        body = JSON.stringify(serializeAws_json1_1CreateCustomActionTypeInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreatePipelineCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodePipeline_20150709.CreatePipeline",
        };
        body = JSON.stringify(serializeAws_json1_1CreatePipelineInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteCustomActionTypeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodePipeline_20150709.DeleteCustomActionType",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteCustomActionTypeInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeletePipelineCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodePipeline_20150709.DeletePipeline",
        };
        body = JSON.stringify(serializeAws_json1_1DeletePipelineInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteWebhookCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodePipeline_20150709.DeleteWebhook",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteWebhookInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeregisterWebhookWithThirdPartyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodePipeline_20150709.DeregisterWebhookWithThirdParty",
        };
        body = JSON.stringify(serializeAws_json1_1DeregisterWebhookWithThirdPartyInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DisableStageTransitionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodePipeline_20150709.DisableStageTransition",
        };
        body = JSON.stringify(serializeAws_json1_1DisableStageTransitionInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1EnableStageTransitionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodePipeline_20150709.EnableStageTransition",
        };
        body = JSON.stringify(serializeAws_json1_1EnableStageTransitionInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetActionTypeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodePipeline_20150709.GetActionType",
        };
        body = JSON.stringify(serializeAws_json1_1GetActionTypeInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetJobDetailsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodePipeline_20150709.GetJobDetails",
        };
        body = JSON.stringify(serializeAws_json1_1GetJobDetailsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetPipelineCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodePipeline_20150709.GetPipeline",
        };
        body = JSON.stringify(serializeAws_json1_1GetPipelineInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetPipelineExecutionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodePipeline_20150709.GetPipelineExecution",
        };
        body = JSON.stringify(serializeAws_json1_1GetPipelineExecutionInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetPipelineStateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodePipeline_20150709.GetPipelineState",
        };
        body = JSON.stringify(serializeAws_json1_1GetPipelineStateInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetThirdPartyJobDetailsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodePipeline_20150709.GetThirdPartyJobDetails",
        };
        body = JSON.stringify(serializeAws_json1_1GetThirdPartyJobDetailsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListActionExecutionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodePipeline_20150709.ListActionExecutions",
        };
        body = JSON.stringify(serializeAws_json1_1ListActionExecutionsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListActionTypesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodePipeline_20150709.ListActionTypes",
        };
        body = JSON.stringify(serializeAws_json1_1ListActionTypesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListPipelineExecutionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodePipeline_20150709.ListPipelineExecutions",
        };
        body = JSON.stringify(serializeAws_json1_1ListPipelineExecutionsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListPipelinesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodePipeline_20150709.ListPipelines",
        };
        body = JSON.stringify(serializeAws_json1_1ListPipelinesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListTagsForResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodePipeline_20150709.ListTagsForResource",
        };
        body = JSON.stringify(serializeAws_json1_1ListTagsForResourceInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListWebhooksCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodePipeline_20150709.ListWebhooks",
        };
        body = JSON.stringify(serializeAws_json1_1ListWebhooksInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PollForJobsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodePipeline_20150709.PollForJobs",
        };
        body = JSON.stringify(serializeAws_json1_1PollForJobsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PollForThirdPartyJobsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodePipeline_20150709.PollForThirdPartyJobs",
        };
        body = JSON.stringify(serializeAws_json1_1PollForThirdPartyJobsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutActionRevisionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodePipeline_20150709.PutActionRevision",
        };
        body = JSON.stringify(serializeAws_json1_1PutActionRevisionInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutApprovalResultCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodePipeline_20150709.PutApprovalResult",
        };
        body = JSON.stringify(serializeAws_json1_1PutApprovalResultInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutJobFailureResultCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodePipeline_20150709.PutJobFailureResult",
        };
        body = JSON.stringify(serializeAws_json1_1PutJobFailureResultInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutJobSuccessResultCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodePipeline_20150709.PutJobSuccessResult",
        };
        body = JSON.stringify(serializeAws_json1_1PutJobSuccessResultInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutThirdPartyJobFailureResultCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodePipeline_20150709.PutThirdPartyJobFailureResult",
        };
        body = JSON.stringify(serializeAws_json1_1PutThirdPartyJobFailureResultInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutThirdPartyJobSuccessResultCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodePipeline_20150709.PutThirdPartyJobSuccessResult",
        };
        body = JSON.stringify(serializeAws_json1_1PutThirdPartyJobSuccessResultInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutWebhookCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodePipeline_20150709.PutWebhook",
        };
        body = JSON.stringify(serializeAws_json1_1PutWebhookInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1RegisterWebhookWithThirdPartyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodePipeline_20150709.RegisterWebhookWithThirdParty",
        };
        body = JSON.stringify(serializeAws_json1_1RegisterWebhookWithThirdPartyInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1RetryStageExecutionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodePipeline_20150709.RetryStageExecution",
        };
        body = JSON.stringify(serializeAws_json1_1RetryStageExecutionInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StartPipelineExecutionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodePipeline_20150709.StartPipelineExecution",
        };
        body = JSON.stringify(serializeAws_json1_1StartPipelineExecutionInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StopPipelineExecutionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodePipeline_20150709.StopPipelineExecution",
        };
        body = JSON.stringify(serializeAws_json1_1StopPipelineExecutionInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1TagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodePipeline_20150709.TagResource",
        };
        body = JSON.stringify(serializeAws_json1_1TagResourceInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UntagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodePipeline_20150709.UntagResource",
        };
        body = JSON.stringify(serializeAws_json1_1UntagResourceInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateActionTypeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodePipeline_20150709.UpdateActionType",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateActionTypeInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdatePipelineCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodePipeline_20150709.UpdatePipeline",
        };
        body = JSON.stringify(serializeAws_json1_1UpdatePipelineInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_json1_1AcknowledgeJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AcknowledgeJobCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AcknowledgeJobOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AcknowledgeJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidNonceException": return [3 /*break*/, 2];
                    case "com.amazonaws.codepipeline#InvalidNonceException": return [3 /*break*/, 2];
                    case "JobNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.codepipeline#JobNotFoundException": return [3 /*break*/, 4];
                    case "ValidationException": return [3 /*break*/, 6];
                    case "com.amazonaws.codepipeline#ValidationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNonceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1AcknowledgeThirdPartyJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AcknowledgeThirdPartyJobCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AcknowledgeThirdPartyJobOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AcknowledgeThirdPartyJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidClientTokenException": return [3 /*break*/, 2];
                    case "com.amazonaws.codepipeline#InvalidClientTokenException": return [3 /*break*/, 2];
                    case "InvalidNonceException": return [3 /*break*/, 4];
                    case "com.amazonaws.codepipeline#InvalidNonceException": return [3 /*break*/, 4];
                    case "JobNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.codepipeline#JobNotFoundException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.codepipeline#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidClientTokenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNonceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateCustomActionTypeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateCustomActionTypeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateCustomActionTypeOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateCustomActionTypeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.codepipeline#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidTagsException": return [3 /*break*/, 4];
                    case "com.amazonaws.codepipeline#InvalidTagsException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.codepipeline#LimitExceededException": return [3 /*break*/, 6];
                    case "TooManyTagsException": return [3 /*break*/, 8];
                    case "com.amazonaws.codepipeline#TooManyTagsException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.codepipeline#ValidationException": return [3 /*break*/, 10];
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
                return [4 /*yield*/, deserializeAws_json1_1InvalidTagsExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreatePipelineCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreatePipelineCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreatePipelineOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreatePipelineCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.codepipeline#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidActionDeclarationException": return [3 /*break*/, 4];
                    case "com.amazonaws.codepipeline#InvalidActionDeclarationException": return [3 /*break*/, 4];
                    case "InvalidBlockerDeclarationException": return [3 /*break*/, 6];
                    case "com.amazonaws.codepipeline#InvalidBlockerDeclarationException": return [3 /*break*/, 6];
                    case "InvalidStageDeclarationException": return [3 /*break*/, 8];
                    case "com.amazonaws.codepipeline#InvalidStageDeclarationException": return [3 /*break*/, 8];
                    case "InvalidStructureException": return [3 /*break*/, 10];
                    case "com.amazonaws.codepipeline#InvalidStructureException": return [3 /*break*/, 10];
                    case "InvalidTagsException": return [3 /*break*/, 12];
                    case "com.amazonaws.codepipeline#InvalidTagsException": return [3 /*break*/, 12];
                    case "LimitExceededException": return [3 /*break*/, 14];
                    case "com.amazonaws.codepipeline#LimitExceededException": return [3 /*break*/, 14];
                    case "PipelineNameInUseException": return [3 /*break*/, 16];
                    case "com.amazonaws.codepipeline#PipelineNameInUseException": return [3 /*break*/, 16];
                    case "TooManyTagsException": return [3 /*break*/, 18];
                    case "com.amazonaws.codepipeline#TooManyTagsException": return [3 /*break*/, 18];
                    case "ValidationException": return [3 /*break*/, 20];
                    case "com.amazonaws.codepipeline#ValidationException": return [3 /*break*/, 20];
                }
                return [3 /*break*/, 22];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidActionDeclarationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidBlockerDeclarationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidStageDeclarationExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidStructureExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTagsExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PipelineNameInUseExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteCustomActionTypeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteCustomActionTypeCommandError(output, context)];
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
var deserializeAws_json1_1DeleteCustomActionTypeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.codepipeline#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "ValidationException": return [3 /*break*/, 4];
                    case "com.amazonaws.codepipeline#ValidationException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeletePipelineCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeletePipelineCommandError(output, context)];
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
var deserializeAws_json1_1DeletePipelineCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.codepipeline#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "ValidationException": return [3 /*break*/, 4];
                    case "com.amazonaws.codepipeline#ValidationException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteWebhookCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteWebhookCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteWebhookOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteWebhookCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.codepipeline#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "ValidationException": return [3 /*break*/, 4];
                    case "com.amazonaws.codepipeline#ValidationException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeregisterWebhookWithThirdPartyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeregisterWebhookWithThirdPartyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeregisterWebhookWithThirdPartyOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeregisterWebhookWithThirdPartyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ValidationException": return [3 /*break*/, 2];
                    case "com.amazonaws.codepipeline#ValidationException": return [3 /*break*/, 2];
                    case "WebhookNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.codepipeline#WebhookNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WebhookNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DisableStageTransitionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DisableStageTransitionCommandError(output, context)];
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
var deserializeAws_json1_1DisableStageTransitionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "PipelineNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.codepipeline#PipelineNotFoundException": return [3 /*break*/, 2];
                    case "StageNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.codepipeline#StageNotFoundException": return [3 /*break*/, 4];
                    case "ValidationException": return [3 /*break*/, 6];
                    case "com.amazonaws.codepipeline#ValidationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1StageNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1EnableStageTransitionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1EnableStageTransitionCommandError(output, context)];
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
var deserializeAws_json1_1EnableStageTransitionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "PipelineNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.codepipeline#PipelineNotFoundException": return [3 /*break*/, 2];
                    case "StageNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.codepipeline#StageNotFoundException": return [3 /*break*/, 4];
                    case "ValidationException": return [3 /*break*/, 6];
                    case "com.amazonaws.codepipeline#ValidationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1StageNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetActionTypeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetActionTypeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetActionTypeOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetActionTypeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ActionTypeNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.codepipeline#ActionTypeNotFoundException": return [3 /*break*/, 2];
                    case "ValidationException": return [3 /*break*/, 4];
                    case "com.amazonaws.codepipeline#ValidationException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ActionTypeNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetJobDetailsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetJobDetailsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetJobDetailsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetJobDetailsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "JobNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.codepipeline#JobNotFoundException": return [3 /*break*/, 2];
                    case "ValidationException": return [3 /*break*/, 4];
                    case "com.amazonaws.codepipeline#ValidationException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetPipelineCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetPipelineCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetPipelineOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetPipelineCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "PipelineNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.codepipeline#PipelineNotFoundException": return [3 /*break*/, 2];
                    case "PipelineVersionNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.codepipeline#PipelineVersionNotFoundException": return [3 /*break*/, 4];
                    case "ValidationException": return [3 /*break*/, 6];
                    case "com.amazonaws.codepipeline#ValidationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PipelineVersionNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetPipelineExecutionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetPipelineExecutionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetPipelineExecutionOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetPipelineExecutionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "PipelineExecutionNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.codepipeline#PipelineExecutionNotFoundException": return [3 /*break*/, 2];
                    case "PipelineNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.codepipeline#PipelineNotFoundException": return [3 /*break*/, 4];
                    case "ValidationException": return [3 /*break*/, 6];
                    case "com.amazonaws.codepipeline#ValidationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PipelineExecutionNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetPipelineStateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetPipelineStateCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetPipelineStateOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetPipelineStateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "PipelineNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.codepipeline#PipelineNotFoundException": return [3 /*break*/, 2];
                    case "ValidationException": return [3 /*break*/, 4];
                    case "com.amazonaws.codepipeline#ValidationException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetThirdPartyJobDetailsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetThirdPartyJobDetailsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetThirdPartyJobDetailsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetThirdPartyJobDetailsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidClientTokenException": return [3 /*break*/, 2];
                    case "com.amazonaws.codepipeline#InvalidClientTokenException": return [3 /*break*/, 2];
                    case "InvalidJobException": return [3 /*break*/, 4];
                    case "com.amazonaws.codepipeline#InvalidJobException": return [3 /*break*/, 4];
                    case "JobNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.codepipeline#JobNotFoundException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.codepipeline#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidClientTokenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidJobExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListActionExecutionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListActionExecutionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListActionExecutionsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListActionExecutionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidNextTokenException": return [3 /*break*/, 2];
                    case "com.amazonaws.codepipeline#InvalidNextTokenException": return [3 /*break*/, 2];
                    case "PipelineExecutionNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.codepipeline#PipelineExecutionNotFoundException": return [3 /*break*/, 4];
                    case "PipelineNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.codepipeline#PipelineNotFoundException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.codepipeline#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PipelineExecutionNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListActionTypesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListActionTypesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListActionTypesOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListActionTypesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.codepipeline#InvalidNextTokenException": return [3 /*break*/, 2];
                    case "ValidationException": return [3 /*break*/, 4];
                    case "com.amazonaws.codepipeline#ValidationException": return [3 /*break*/, 4];
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
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListPipelineExecutionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListPipelineExecutionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListPipelineExecutionsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListPipelineExecutionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.codepipeline#InvalidNextTokenException": return [3 /*break*/, 2];
                    case "PipelineNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.codepipeline#PipelineNotFoundException": return [3 /*break*/, 4];
                    case "ValidationException": return [3 /*break*/, 6];
                    case "com.amazonaws.codepipeline#ValidationException": return [3 /*break*/, 6];
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
                return [4 /*yield*/, deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListPipelinesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListPipelinesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListPipelinesOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListPipelinesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.codepipeline#InvalidNextTokenException": return [3 /*break*/, 2];
                    case "ValidationException": return [3 /*break*/, 4];
                    case "com.amazonaws.codepipeline#ValidationException": return [3 /*break*/, 4];
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
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
                contents = deserializeAws_json1_1ListTagsForResourceOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListTagsForResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidArnException": return [3 /*break*/, 2];
                    case "com.amazonaws.codepipeline#InvalidArnException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.codepipeline#InvalidNextTokenException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.codepipeline#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.codepipeline#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListWebhooksCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListWebhooksCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListWebhooksOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListWebhooksCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.codepipeline#InvalidNextTokenException": return [3 /*break*/, 2];
                    case "ValidationException": return [3 /*break*/, 4];
                    case "com.amazonaws.codepipeline#ValidationException": return [3 /*break*/, 4];
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
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PollForJobsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PollForJobsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1PollForJobsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1PollForJobsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ActionTypeNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.codepipeline#ActionTypeNotFoundException": return [3 /*break*/, 2];
                    case "ValidationException": return [3 /*break*/, 4];
                    case "com.amazonaws.codepipeline#ValidationException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ActionTypeNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PollForThirdPartyJobsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PollForThirdPartyJobsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1PollForThirdPartyJobsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1PollForThirdPartyJobsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ActionTypeNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.codepipeline#ActionTypeNotFoundException": return [3 /*break*/, 2];
                    case "ValidationException": return [3 /*break*/, 4];
                    case "com.amazonaws.codepipeline#ValidationException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ActionTypeNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutActionRevisionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutActionRevisionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1PutActionRevisionOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1PutActionRevisionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ActionNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.codepipeline#ActionNotFoundException": return [3 /*break*/, 2];
                    case "PipelineNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.codepipeline#PipelineNotFoundException": return [3 /*break*/, 4];
                    case "StageNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.codepipeline#StageNotFoundException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.codepipeline#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ActionNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1StageNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutApprovalResultCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutApprovalResultCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1PutApprovalResultOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1PutApprovalResultCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ActionNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.codepipeline#ActionNotFoundException": return [3 /*break*/, 2];
                    case "ApprovalAlreadyCompletedException": return [3 /*break*/, 4];
                    case "com.amazonaws.codepipeline#ApprovalAlreadyCompletedException": return [3 /*break*/, 4];
                    case "InvalidApprovalTokenException": return [3 /*break*/, 6];
                    case "com.amazonaws.codepipeline#InvalidApprovalTokenException": return [3 /*break*/, 6];
                    case "PipelineNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.codepipeline#PipelineNotFoundException": return [3 /*break*/, 8];
                    case "StageNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.codepipeline#StageNotFoundException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.codepipeline#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ActionNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ApprovalAlreadyCompletedExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidApprovalTokenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1StageNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutJobFailureResultCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutJobFailureResultCommandError(output, context)];
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
var deserializeAws_json1_1PutJobFailureResultCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidJobStateException": return [3 /*break*/, 2];
                    case "com.amazonaws.codepipeline#InvalidJobStateException": return [3 /*break*/, 2];
                    case "JobNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.codepipeline#JobNotFoundException": return [3 /*break*/, 4];
                    case "ValidationException": return [3 /*break*/, 6];
                    case "com.amazonaws.codepipeline#ValidationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutJobSuccessResultCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutJobSuccessResultCommandError(output, context)];
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
var deserializeAws_json1_1PutJobSuccessResultCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidJobStateException": return [3 /*break*/, 2];
                    case "com.amazonaws.codepipeline#InvalidJobStateException": return [3 /*break*/, 2];
                    case "JobNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.codepipeline#JobNotFoundException": return [3 /*break*/, 4];
                    case "OutputVariablesSizeExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.codepipeline#OutputVariablesSizeExceededException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.codepipeline#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OutputVariablesSizeExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutThirdPartyJobFailureResultCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutThirdPartyJobFailureResultCommandError(output, context)];
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
var deserializeAws_json1_1PutThirdPartyJobFailureResultCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidClientTokenException": return [3 /*break*/, 2];
                    case "com.amazonaws.codepipeline#InvalidClientTokenException": return [3 /*break*/, 2];
                    case "InvalidJobStateException": return [3 /*break*/, 4];
                    case "com.amazonaws.codepipeline#InvalidJobStateException": return [3 /*break*/, 4];
                    case "JobNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.codepipeline#JobNotFoundException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.codepipeline#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidClientTokenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutThirdPartyJobSuccessResultCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutThirdPartyJobSuccessResultCommandError(output, context)];
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
var deserializeAws_json1_1PutThirdPartyJobSuccessResultCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidClientTokenException": return [3 /*break*/, 2];
                    case "com.amazonaws.codepipeline#InvalidClientTokenException": return [3 /*break*/, 2];
                    case "InvalidJobStateException": return [3 /*break*/, 4];
                    case "com.amazonaws.codepipeline#InvalidJobStateException": return [3 /*break*/, 4];
                    case "JobNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.codepipeline#JobNotFoundException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.codepipeline#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidClientTokenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutWebhookCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutWebhookCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1PutWebhookOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1PutWebhookCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.codepipeline#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidTagsException": return [3 /*break*/, 4];
                    case "com.amazonaws.codepipeline#InvalidTagsException": return [3 /*break*/, 4];
                    case "InvalidWebhookAuthenticationParametersException": return [3 /*break*/, 6];
                    case "com.amazonaws.codepipeline#InvalidWebhookAuthenticationParametersException": return [3 /*break*/, 6];
                    case "InvalidWebhookFilterPatternException": return [3 /*break*/, 8];
                    case "com.amazonaws.codepipeline#InvalidWebhookFilterPatternException": return [3 /*break*/, 8];
                    case "LimitExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.codepipeline#LimitExceededException": return [3 /*break*/, 10];
                    case "PipelineNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.codepipeline#PipelineNotFoundException": return [3 /*break*/, 12];
                    case "TooManyTagsException": return [3 /*break*/, 14];
                    case "com.amazonaws.codepipeline#TooManyTagsException": return [3 /*break*/, 14];
                    case "ValidationException": return [3 /*break*/, 16];
                    case "com.amazonaws.codepipeline#ValidationException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTagsExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidWebhookAuthenticationParametersExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidWebhookFilterPatternExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1RegisterWebhookWithThirdPartyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1RegisterWebhookWithThirdPartyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1RegisterWebhookWithThirdPartyOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1RegisterWebhookWithThirdPartyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ValidationException": return [3 /*break*/, 2];
                    case "com.amazonaws.codepipeline#ValidationException": return [3 /*break*/, 2];
                    case "WebhookNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.codepipeline#WebhookNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WebhookNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1RetryStageExecutionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1RetryStageExecutionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1RetryStageExecutionOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1RetryStageExecutionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.codepipeline#ConflictException": return [3 /*break*/, 2];
                    case "NotLatestPipelineExecutionException": return [3 /*break*/, 4];
                    case "com.amazonaws.codepipeline#NotLatestPipelineExecutionException": return [3 /*break*/, 4];
                    case "PipelineNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.codepipeline#PipelineNotFoundException": return [3 /*break*/, 6];
                    case "StageNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.codepipeline#StageNotFoundException": return [3 /*break*/, 8];
                    case "StageNotRetryableException": return [3 /*break*/, 10];
                    case "com.amazonaws.codepipeline#StageNotRetryableException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.codepipeline#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotLatestPipelineExecutionExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1StageNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1StageNotRetryableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1StartPipelineExecutionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StartPipelineExecutionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1StartPipelineExecutionOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1StartPipelineExecutionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.codepipeline#ConflictException": return [3 /*break*/, 2];
                    case "PipelineNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.codepipeline#PipelineNotFoundException": return [3 /*break*/, 4];
                    case "ValidationException": return [3 /*break*/, 6];
                    case "com.amazonaws.codepipeline#ValidationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1StopPipelineExecutionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StopPipelineExecutionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1StopPipelineExecutionOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1StopPipelineExecutionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.codepipeline#ConflictException": return [3 /*break*/, 2];
                    case "DuplicatedStopRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.codepipeline#DuplicatedStopRequestException": return [3 /*break*/, 4];
                    case "PipelineExecutionNotStoppableException": return [3 /*break*/, 6];
                    case "com.amazonaws.codepipeline#PipelineExecutionNotStoppableException": return [3 /*break*/, 6];
                    case "PipelineNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.codepipeline#PipelineNotFoundException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.codepipeline#ValidationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DuplicatedStopRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PipelineExecutionNotStoppableExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
                contents = deserializeAws_json1_1TagResourceOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1TagResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.codepipeline#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidArnException": return [3 /*break*/, 4];
                    case "com.amazonaws.codepipeline#InvalidArnException": return [3 /*break*/, 4];
                    case "InvalidTagsException": return [3 /*break*/, 6];
                    case "com.amazonaws.codepipeline#InvalidTagsException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.codepipeline#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyTagsException": return [3 /*break*/, 10];
                    case "com.amazonaws.codepipeline#TooManyTagsException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.codepipeline#ValidationException": return [3 /*break*/, 12];
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
                return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTagsExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
                contents = deserializeAws_json1_1UntagResourceOutput(data, context);
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
                    case "com.amazonaws.codepipeline#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidArnException": return [3 /*break*/, 4];
                    case "com.amazonaws.codepipeline#InvalidArnException": return [3 /*break*/, 4];
                    case "InvalidTagsException": return [3 /*break*/, 6];
                    case "com.amazonaws.codepipeline#InvalidTagsException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.codepipeline#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.codepipeline#ValidationException": return [3 /*break*/, 10];
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
                return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTagsExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateActionTypeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateActionTypeCommandError(output, context)];
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
var deserializeAws_json1_1UpdateActionTypeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ActionTypeNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.codepipeline#ActionTypeNotFoundException": return [3 /*break*/, 2];
                    case "RequestFailedException": return [3 /*break*/, 4];
                    case "com.amazonaws.codepipeline#RequestFailedException": return [3 /*break*/, 4];
                    case "ValidationException": return [3 /*break*/, 6];
                    case "com.amazonaws.codepipeline#ValidationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ActionTypeNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdatePipelineCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdatePipelineCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdatePipelineOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdatePipelineCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidActionDeclarationException": return [3 /*break*/, 2];
                    case "com.amazonaws.codepipeline#InvalidActionDeclarationException": return [3 /*break*/, 2];
                    case "InvalidBlockerDeclarationException": return [3 /*break*/, 4];
                    case "com.amazonaws.codepipeline#InvalidBlockerDeclarationException": return [3 /*break*/, 4];
                    case "InvalidStageDeclarationException": return [3 /*break*/, 6];
                    case "com.amazonaws.codepipeline#InvalidStageDeclarationException": return [3 /*break*/, 6];
                    case "InvalidStructureException": return [3 /*break*/, 8];
                    case "com.amazonaws.codepipeline#InvalidStructureException": return [3 /*break*/, 8];
                    case "LimitExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.codepipeline#LimitExceededException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.codepipeline#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidActionDeclarationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidBlockerDeclarationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidStageDeclarationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidStructureExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
var deserializeAws_json1_1ActionNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ActionNotFoundException(body, context);
        contents = __assign({ name: "ActionNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ActionTypeNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ActionTypeNotFoundException(body, context);
        contents = __assign({ name: "ActionTypeNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ApprovalAlreadyCompletedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ApprovalAlreadyCompletedException(body, context);
        contents = __assign({ name: "ApprovalAlreadyCompletedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_json1_1ConflictExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ConflictException(body, context);
        contents = __assign({ name: "ConflictException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1DuplicatedStopRequestExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1DuplicatedStopRequestException(body, context);
        contents = __assign({ name: "DuplicatedStopRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidActionDeclarationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidActionDeclarationException(body, context);
        contents = __assign({ name: "InvalidActionDeclarationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidApprovalTokenExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidApprovalTokenException(body, context);
        contents = __assign({ name: "InvalidApprovalTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidArnExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidArnException(body, context);
        contents = __assign({ name: "InvalidArnException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidBlockerDeclarationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidBlockerDeclarationException(body, context);
        contents = __assign({ name: "InvalidBlockerDeclarationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidClientTokenExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidClientTokenException(body, context);
        contents = __assign({ name: "InvalidClientTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidJobExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidJobException(body, context);
        contents = __assign({ name: "InvalidJobException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidJobStateExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidJobStateException(body, context);
        contents = __assign({ name: "InvalidJobStateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_json1_1InvalidNonceExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidNonceException(body, context);
        contents = __assign({ name: "InvalidNonceException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidStageDeclarationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidStageDeclarationException(body, context);
        contents = __assign({ name: "InvalidStageDeclarationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidStructureExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidStructureException(body, context);
        contents = __assign({ name: "InvalidStructureException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidTagsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidTagsException(body, context);
        contents = __assign({ name: "InvalidTagsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidWebhookAuthenticationParametersExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidWebhookAuthenticationParametersException(body, context);
        contents = __assign({ name: "InvalidWebhookAuthenticationParametersException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidWebhookFilterPatternExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidWebhookFilterPatternException(body, context);
        contents = __assign({ name: "InvalidWebhookFilterPatternException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1JobNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1JobNotFoundException(body, context);
        contents = __assign({ name: "JobNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_json1_1NotLatestPipelineExecutionExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1NotLatestPipelineExecutionException(body, context);
        contents = __assign({ name: "NotLatestPipelineExecutionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1OutputVariablesSizeExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1OutputVariablesSizeExceededException(body, context);
        contents = __assign({ name: "OutputVariablesSizeExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1PipelineExecutionNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1PipelineExecutionNotFoundException(body, context);
        contents = __assign({ name: "PipelineExecutionNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1PipelineExecutionNotStoppableExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1PipelineExecutionNotStoppableException(body, context);
        contents = __assign({ name: "PipelineExecutionNotStoppableException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1PipelineNameInUseExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1PipelineNameInUseException(body, context);
        contents = __assign({ name: "PipelineNameInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1PipelineNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1PipelineNotFoundException(body, context);
        contents = __assign({ name: "PipelineNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1PipelineVersionNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1PipelineVersionNotFoundException(body, context);
        contents = __assign({ name: "PipelineVersionNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1RequestFailedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1RequestFailedException(body, context);
        contents = __assign({ name: "RequestFailedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_json1_1StageNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1StageNotFoundException(body, context);
        contents = __assign({ name: "StageNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1StageNotRetryableExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1StageNotRetryableException(body, context);
        contents = __assign({ name: "StageNotRetryableException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_json1_1ValidationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ValidationException(body, context);
        contents = __assign({ name: "ValidationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1WebhookNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1WebhookNotFoundException(body, context);
        contents = __assign({ name: "WebhookNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_json1_1AcknowledgeJobInput = function (input, context) {
    return __assign(__assign({}, (input.jobId !== undefined && input.jobId !== null && { jobId: input.jobId })), (input.nonce !== undefined && input.nonce !== null && { nonce: input.nonce }));
};
var serializeAws_json1_1AcknowledgeThirdPartyJobInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.clientToken !== undefined && input.clientToken !== null && { clientToken: input.clientToken })), (input.jobId !== undefined && input.jobId !== null && { jobId: input.jobId })), (input.nonce !== undefined && input.nonce !== null && { nonce: input.nonce }));
};
var serializeAws_json1_1ActionConfigurationMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_json1_1ActionConfigurationProperty = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.description !== undefined && input.description !== null && { description: input.description })), (input.key !== undefined && input.key !== null && { key: input.key })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.queryable !== undefined && input.queryable !== null && { queryable: input.queryable })), (input.required !== undefined && input.required !== null && { required: input.required })), (input.secret !== undefined && input.secret !== null && { secret: input.secret })), (input.type !== undefined && input.type !== null && { type: input.type }));
};
var serializeAws_json1_1ActionConfigurationPropertyList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ActionConfigurationProperty(entry, context);
    });
};
var serializeAws_json1_1ActionDeclaration = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.actionTypeId !== undefined &&
        input.actionTypeId !== null && { actionTypeId: serializeAws_json1_1ActionTypeId(input.actionTypeId, context) })), (input.configuration !== undefined &&
        input.configuration !== null && {
        configuration: serializeAws_json1_1ActionConfigurationMap(input.configuration, context),
    })), (input.inputArtifacts !== undefined &&
        input.inputArtifacts !== null && {
        inputArtifacts: serializeAws_json1_1InputArtifactList(input.inputArtifacts, context),
    })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.namespace !== undefined && input.namespace !== null && { namespace: input.namespace })), (input.outputArtifacts !== undefined &&
        input.outputArtifacts !== null && {
        outputArtifacts: serializeAws_json1_1OutputArtifactList(input.outputArtifacts, context),
    })), (input.region !== undefined && input.region !== null && { region: input.region })), (input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn })), (input.runOrder !== undefined && input.runOrder !== null && { runOrder: input.runOrder }));
};
var serializeAws_json1_1ActionExecutionFilter = function (input, context) {
    return __assign({}, (input.pipelineExecutionId !== undefined &&
        input.pipelineExecutionId !== null && { pipelineExecutionId: input.pipelineExecutionId }));
};
var serializeAws_json1_1ActionRevision = function (input, context) {
    return __assign(__assign(__assign({}, (input.created !== undefined &&
        input.created !== null && { created: Math.round(input.created.getTime() / 1000) })), (input.revisionChangeId !== undefined &&
        input.revisionChangeId !== null && { revisionChangeId: input.revisionChangeId })), (input.revisionId !== undefined && input.revisionId !== null && { revisionId: input.revisionId }));
};
var serializeAws_json1_1ActionTypeArtifactDetails = function (input, context) {
    return __assign(__assign({}, (input.maximumCount !== undefined && input.maximumCount !== null && { maximumCount: input.maximumCount })), (input.minimumCount !== undefined && input.minimumCount !== null && { minimumCount: input.minimumCount }));
};
var serializeAws_json1_1ActionTypeDeclaration = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.description !== undefined && input.description !== null && { description: input.description })), (input.executor !== undefined &&
        input.executor !== null && { executor: serializeAws_json1_1ActionTypeExecutor(input.executor, context) })), (input.id !== undefined &&
        input.id !== null && { id: serializeAws_json1_1ActionTypeIdentifier(input.id, context) })), (input.inputArtifactDetails !== undefined &&
        input.inputArtifactDetails !== null && {
        inputArtifactDetails: serializeAws_json1_1ActionTypeArtifactDetails(input.inputArtifactDetails, context),
    })), (input.outputArtifactDetails !== undefined &&
        input.outputArtifactDetails !== null && {
        outputArtifactDetails: serializeAws_json1_1ActionTypeArtifactDetails(input.outputArtifactDetails, context),
    })), (input.permissions !== undefined &&
        input.permissions !== null && {
        permissions: serializeAws_json1_1ActionTypePermissions(input.permissions, context),
    })), (input.properties !== undefined &&
        input.properties !== null && { properties: serializeAws_json1_1ActionTypeProperties(input.properties, context) })), (input.urls !== undefined &&
        input.urls !== null && { urls: serializeAws_json1_1ActionTypeUrls(input.urls, context) }));
};
var serializeAws_json1_1ActionTypeExecutor = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.configuration !== undefined &&
        input.configuration !== null && {
        configuration: serializeAws_json1_1ExecutorConfiguration(input.configuration, context),
    })), (input.jobTimeout !== undefined && input.jobTimeout !== null && { jobTimeout: input.jobTimeout })), (input.policyStatementsTemplate !== undefined &&
        input.policyStatementsTemplate !== null && { policyStatementsTemplate: input.policyStatementsTemplate })), (input.type !== undefined && input.type !== null && { type: input.type }));
};
var serializeAws_json1_1ActionTypeId = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.category !== undefined && input.category !== null && { category: input.category })), (input.owner !== undefined && input.owner !== null && { owner: input.owner })), (input.provider !== undefined && input.provider !== null && { provider: input.provider })), (input.version !== undefined && input.version !== null && { version: input.version }));
};
var serializeAws_json1_1ActionTypeIdentifier = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.category !== undefined && input.category !== null && { category: input.category })), (input.owner !== undefined && input.owner !== null && { owner: input.owner })), (input.provider !== undefined && input.provider !== null && { provider: input.provider })), (input.version !== undefined && input.version !== null && { version: input.version }));
};
var serializeAws_json1_1ActionTypePermissions = function (input, context) {
    return __assign({}, (input.allowedAccounts !== undefined &&
        input.allowedAccounts !== null && {
        allowedAccounts: serializeAws_json1_1AllowedAccounts(input.allowedAccounts, context),
    }));
};
var serializeAws_json1_1ActionTypeProperties = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ActionTypeProperty(entry, context);
    });
};
var serializeAws_json1_1ActionTypeProperty = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.description !== undefined && input.description !== null && { description: input.description })), (input.key !== undefined && input.key !== null && { key: input.key })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.noEcho !== undefined && input.noEcho !== null && { noEcho: input.noEcho })), (input.optional !== undefined && input.optional !== null && { optional: input.optional })), (input.queryable !== undefined && input.queryable !== null && { queryable: input.queryable }));
};
var serializeAws_json1_1ActionTypeSettings = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.entityUrlTemplate !== undefined &&
        input.entityUrlTemplate !== null && { entityUrlTemplate: input.entityUrlTemplate })), (input.executionUrlTemplate !== undefined &&
        input.executionUrlTemplate !== null && { executionUrlTemplate: input.executionUrlTemplate })), (input.revisionUrlTemplate !== undefined &&
        input.revisionUrlTemplate !== null && { revisionUrlTemplate: input.revisionUrlTemplate })), (input.thirdPartyConfigurationUrl !== undefined &&
        input.thirdPartyConfigurationUrl !== null && { thirdPartyConfigurationUrl: input.thirdPartyConfigurationUrl }));
};
var serializeAws_json1_1ActionTypeUrls = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.configurationUrl !== undefined &&
        input.configurationUrl !== null && { configurationUrl: input.configurationUrl })), (input.entityUrlTemplate !== undefined &&
        input.entityUrlTemplate !== null && { entityUrlTemplate: input.entityUrlTemplate })), (input.executionUrlTemplate !== undefined &&
        input.executionUrlTemplate !== null && { executionUrlTemplate: input.executionUrlTemplate })), (input.revisionUrlTemplate !== undefined &&
        input.revisionUrlTemplate !== null && { revisionUrlTemplate: input.revisionUrlTemplate }));
};
var serializeAws_json1_1AllowedAccounts = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ApprovalResult = function (input, context) {
    return __assign(__assign({}, (input.status !== undefined && input.status !== null && { status: input.status })), (input.summary !== undefined && input.summary !== null && { summary: input.summary }));
};
var serializeAws_json1_1ArtifactDetails = function (input, context) {
    return __assign(__assign({}, (input.maximumCount !== undefined && input.maximumCount !== null && { maximumCount: input.maximumCount })), (input.minimumCount !== undefined && input.minimumCount !== null && { minimumCount: input.minimumCount }));
};
var serializeAws_json1_1ArtifactStore = function (input, context) {
    return __assign(__assign(__assign({}, (input.encryptionKey !== undefined &&
        input.encryptionKey !== null && {
        encryptionKey: serializeAws_json1_1EncryptionKey(input.encryptionKey, context),
    })), (input.location !== undefined && input.location !== null && { location: input.location })), (input.type !== undefined && input.type !== null && { type: input.type }));
};
var serializeAws_json1_1ArtifactStoreMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_json1_1ArtifactStore(value, context), _b));
    }, {});
};
var serializeAws_json1_1BlockerDeclaration = function (input, context) {
    return __assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.type !== undefined && input.type !== null && { type: input.type }));
};
var serializeAws_json1_1CreateCustomActionTypeInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.category !== undefined && input.category !== null && { category: input.category })), (input.configurationProperties !== undefined &&
        input.configurationProperties !== null && {
        configurationProperties: serializeAws_json1_1ActionConfigurationPropertyList(input.configurationProperties, context),
    })), (input.inputArtifactDetails !== undefined &&
        input.inputArtifactDetails !== null && {
        inputArtifactDetails: serializeAws_json1_1ArtifactDetails(input.inputArtifactDetails, context),
    })), (input.outputArtifactDetails !== undefined &&
        input.outputArtifactDetails !== null && {
        outputArtifactDetails: serializeAws_json1_1ArtifactDetails(input.outputArtifactDetails, context),
    })), (input.provider !== undefined && input.provider !== null && { provider: input.provider })), (input.settings !== undefined &&
        input.settings !== null && { settings: serializeAws_json1_1ActionTypeSettings(input.settings, context) })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) })), (input.version !== undefined && input.version !== null && { version: input.version }));
};
var serializeAws_json1_1CreatePipelineInput = function (input, context) {
    return __assign(__assign({}, (input.pipeline !== undefined &&
        input.pipeline !== null && { pipeline: serializeAws_json1_1PipelineDeclaration(input.pipeline, context) })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }));
};
var serializeAws_json1_1CurrentRevision = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.changeIdentifier !== undefined &&
        input.changeIdentifier !== null && { changeIdentifier: input.changeIdentifier })), (input.created !== undefined &&
        input.created !== null && { created: Math.round(input.created.getTime() / 1000) })), (input.revision !== undefined && input.revision !== null && { revision: input.revision })), (input.revisionSummary !== undefined &&
        input.revisionSummary !== null && { revisionSummary: input.revisionSummary }));
};
var serializeAws_json1_1DeleteCustomActionTypeInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.category !== undefined && input.category !== null && { category: input.category })), (input.provider !== undefined && input.provider !== null && { provider: input.provider })), (input.version !== undefined && input.version !== null && { version: input.version }));
};
var serializeAws_json1_1DeletePipelineInput = function (input, context) {
    return __assign({}, (input.name !== undefined && input.name !== null && { name: input.name }));
};
var serializeAws_json1_1DeleteWebhookInput = function (input, context) {
    return __assign({}, (input.name !== undefined && input.name !== null && { name: input.name }));
};
var serializeAws_json1_1DeregisterWebhookWithThirdPartyInput = function (input, context) {
    return __assign({}, (input.webhookName !== undefined && input.webhookName !== null && { webhookName: input.webhookName }));
};
var serializeAws_json1_1DisableStageTransitionInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.pipelineName !== undefined && input.pipelineName !== null && { pipelineName: input.pipelineName })), (input.reason !== undefined && input.reason !== null && { reason: input.reason })), (input.stageName !== undefined && input.stageName !== null && { stageName: input.stageName })), (input.transitionType !== undefined &&
        input.transitionType !== null && { transitionType: input.transitionType }));
};
var serializeAws_json1_1EnableStageTransitionInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.pipelineName !== undefined && input.pipelineName !== null && { pipelineName: input.pipelineName })), (input.stageName !== undefined && input.stageName !== null && { stageName: input.stageName })), (input.transitionType !== undefined &&
        input.transitionType !== null && { transitionType: input.transitionType }));
};
var serializeAws_json1_1EncryptionKey = function (input, context) {
    return __assign(__assign({}, (input.id !== undefined && input.id !== null && { id: input.id })), (input.type !== undefined && input.type !== null && { type: input.type }));
};
var serializeAws_json1_1ExecutionDetails = function (input, context) {
    return __assign(__assign(__assign({}, (input.externalExecutionId !== undefined &&
        input.externalExecutionId !== null && { externalExecutionId: input.externalExecutionId })), (input.percentComplete !== undefined &&
        input.percentComplete !== null && { percentComplete: input.percentComplete })), (input.summary !== undefined && input.summary !== null && { summary: input.summary }));
};
var serializeAws_json1_1ExecutorConfiguration = function (input, context) {
    return __assign(__assign({}, (input.jobWorkerExecutorConfiguration !== undefined &&
        input.jobWorkerExecutorConfiguration !== null && {
        jobWorkerExecutorConfiguration: serializeAws_json1_1JobWorkerExecutorConfiguration(input.jobWorkerExecutorConfiguration, context),
    })), (input.lambdaExecutorConfiguration !== undefined &&
        input.lambdaExecutorConfiguration !== null && {
        lambdaExecutorConfiguration: serializeAws_json1_1LambdaExecutorConfiguration(input.lambdaExecutorConfiguration, context),
    }));
};
var serializeAws_json1_1FailureDetails = function (input, context) {
    return __assign(__assign(__assign({}, (input.externalExecutionId !== undefined &&
        input.externalExecutionId !== null && { externalExecutionId: input.externalExecutionId })), (input.message !== undefined && input.message !== null && { message: input.message })), (input.type !== undefined && input.type !== null && { type: input.type }));
};
var serializeAws_json1_1GetActionTypeInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.category !== undefined && input.category !== null && { category: input.category })), (input.owner !== undefined && input.owner !== null && { owner: input.owner })), (input.provider !== undefined && input.provider !== null && { provider: input.provider })), (input.version !== undefined && input.version !== null && { version: input.version }));
};
var serializeAws_json1_1GetJobDetailsInput = function (input, context) {
    return __assign({}, (input.jobId !== undefined && input.jobId !== null && { jobId: input.jobId }));
};
var serializeAws_json1_1GetPipelineExecutionInput = function (input, context) {
    return __assign(__assign({}, (input.pipelineExecutionId !== undefined &&
        input.pipelineExecutionId !== null && { pipelineExecutionId: input.pipelineExecutionId })), (input.pipelineName !== undefined && input.pipelineName !== null && { pipelineName: input.pipelineName }));
};
var serializeAws_json1_1GetPipelineInput = function (input, context) {
    return __assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.version !== undefined && input.version !== null && { version: input.version }));
};
var serializeAws_json1_1GetPipelineStateInput = function (input, context) {
    return __assign({}, (input.name !== undefined && input.name !== null && { name: input.name }));
};
var serializeAws_json1_1GetThirdPartyJobDetailsInput = function (input, context) {
    return __assign(__assign({}, (input.clientToken !== undefined && input.clientToken !== null && { clientToken: input.clientToken })), (input.jobId !== undefined && input.jobId !== null && { jobId: input.jobId }));
};
var serializeAws_json1_1InputArtifact = function (input, context) {
    return __assign({}, (input.name !== undefined && input.name !== null && { name: input.name }));
};
var serializeAws_json1_1InputArtifactList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1InputArtifact(entry, context);
    });
};
var serializeAws_json1_1JobWorkerExecutorConfiguration = function (input, context) {
    return __assign(__assign({}, (input.pollingAccounts !== undefined &&
        input.pollingAccounts !== null && {
        pollingAccounts: serializeAws_json1_1PollingAccountList(input.pollingAccounts, context),
    })), (input.pollingServicePrincipals !== undefined &&
        input.pollingServicePrincipals !== null && {
        pollingServicePrincipals: serializeAws_json1_1PollingServicePrincipalList(input.pollingServicePrincipals, context),
    }));
};
var serializeAws_json1_1LambdaExecutorConfiguration = function (input, context) {
    return __assign({}, (input.lambdaFunctionArn !== undefined &&
        input.lambdaFunctionArn !== null && { lambdaFunctionArn: input.lambdaFunctionArn }));
};
var serializeAws_json1_1ListActionExecutionsInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.filter !== undefined &&
        input.filter !== null && { filter: serializeAws_json1_1ActionExecutionFilter(input.filter, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.pipelineName !== undefined && input.pipelineName !== null && { pipelineName: input.pipelineName }));
};
var serializeAws_json1_1ListActionTypesInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.actionOwnerFilter !== undefined &&
        input.actionOwnerFilter !== null && { actionOwnerFilter: input.actionOwnerFilter })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.regionFilter !== undefined && input.regionFilter !== null && { regionFilter: input.regionFilter }));
};
var serializeAws_json1_1ListPipelineExecutionsInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.pipelineName !== undefined && input.pipelineName !== null && { pipelineName: input.pipelineName }));
};
var serializeAws_json1_1ListPipelinesInput = function (input, context) {
    return __assign(__assign({}, (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }));
};
var serializeAws_json1_1ListTagsForResourceInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }));
};
var serializeAws_json1_1ListWebhooksInput = function (input, context) {
    return __assign(__assign({}, (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1OutputArtifact = function (input, context) {
    return __assign({}, (input.name !== undefined && input.name !== null && { name: input.name }));
};
var serializeAws_json1_1OutputArtifactList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1OutputArtifact(entry, context);
    });
};
var serializeAws_json1_1OutputVariablesMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_json1_1PipelineDeclaration = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.artifactStore !== undefined &&
        input.artifactStore !== null && {
        artifactStore: serializeAws_json1_1ArtifactStore(input.artifactStore, context),
    })), (input.artifactStores !== undefined &&
        input.artifactStores !== null && {
        artifactStores: serializeAws_json1_1ArtifactStoreMap(input.artifactStores, context),
    })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn })), (input.stages !== undefined &&
        input.stages !== null && { stages: serializeAws_json1_1PipelineStageDeclarationList(input.stages, context) })), (input.version !== undefined && input.version !== null && { version: input.version }));
};
var serializeAws_json1_1PipelineStageDeclarationList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1StageDeclaration(entry, context);
    });
};
var serializeAws_json1_1PollForJobsInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.actionTypeId !== undefined &&
        input.actionTypeId !== null && { actionTypeId: serializeAws_json1_1ActionTypeId(input.actionTypeId, context) })), (input.maxBatchSize !== undefined && input.maxBatchSize !== null && { maxBatchSize: input.maxBatchSize })), (input.queryParam !== undefined &&
        input.queryParam !== null && { queryParam: serializeAws_json1_1QueryParamMap(input.queryParam, context) }));
};
var serializeAws_json1_1PollForThirdPartyJobsInput = function (input, context) {
    return __assign(__assign({}, (input.actionTypeId !== undefined &&
        input.actionTypeId !== null && { actionTypeId: serializeAws_json1_1ActionTypeId(input.actionTypeId, context) })), (input.maxBatchSize !== undefined && input.maxBatchSize !== null && { maxBatchSize: input.maxBatchSize }));
};
var serializeAws_json1_1PollingAccountList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1PollingServicePrincipalList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1PutActionRevisionInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.actionName !== undefined && input.actionName !== null && { actionName: input.actionName })), (input.actionRevision !== undefined &&
        input.actionRevision !== null && {
        actionRevision: serializeAws_json1_1ActionRevision(input.actionRevision, context),
    })), (input.pipelineName !== undefined && input.pipelineName !== null && { pipelineName: input.pipelineName })), (input.stageName !== undefined && input.stageName !== null && { stageName: input.stageName }));
};
var serializeAws_json1_1PutApprovalResultInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.actionName !== undefined && input.actionName !== null && { actionName: input.actionName })), (input.pipelineName !== undefined && input.pipelineName !== null && { pipelineName: input.pipelineName })), (input.result !== undefined &&
        input.result !== null && { result: serializeAws_json1_1ApprovalResult(input.result, context) })), (input.stageName !== undefined && input.stageName !== null && { stageName: input.stageName })), (input.token !== undefined && input.token !== null && { token: input.token }));
};
var serializeAws_json1_1PutJobFailureResultInput = function (input, context) {
    return __assign(__assign({}, (input.failureDetails !== undefined &&
        input.failureDetails !== null && {
        failureDetails: serializeAws_json1_1FailureDetails(input.failureDetails, context),
    })), (input.jobId !== undefined && input.jobId !== null && { jobId: input.jobId }));
};
var serializeAws_json1_1PutJobSuccessResultInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.continuationToken !== undefined &&
        input.continuationToken !== null && { continuationToken: input.continuationToken })), (input.currentRevision !== undefined &&
        input.currentRevision !== null && {
        currentRevision: serializeAws_json1_1CurrentRevision(input.currentRevision, context),
    })), (input.executionDetails !== undefined &&
        input.executionDetails !== null && {
        executionDetails: serializeAws_json1_1ExecutionDetails(input.executionDetails, context),
    })), (input.jobId !== undefined && input.jobId !== null && { jobId: input.jobId })), (input.outputVariables !== undefined &&
        input.outputVariables !== null && {
        outputVariables: serializeAws_json1_1OutputVariablesMap(input.outputVariables, context),
    }));
};
var serializeAws_json1_1PutThirdPartyJobFailureResultInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.clientToken !== undefined && input.clientToken !== null && { clientToken: input.clientToken })), (input.failureDetails !== undefined &&
        input.failureDetails !== null && {
        failureDetails: serializeAws_json1_1FailureDetails(input.failureDetails, context),
    })), (input.jobId !== undefined && input.jobId !== null && { jobId: input.jobId }));
};
var serializeAws_json1_1PutThirdPartyJobSuccessResultInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.clientToken !== undefined && input.clientToken !== null && { clientToken: input.clientToken })), (input.continuationToken !== undefined &&
        input.continuationToken !== null && { continuationToken: input.continuationToken })), (input.currentRevision !== undefined &&
        input.currentRevision !== null && {
        currentRevision: serializeAws_json1_1CurrentRevision(input.currentRevision, context),
    })), (input.executionDetails !== undefined &&
        input.executionDetails !== null && {
        executionDetails: serializeAws_json1_1ExecutionDetails(input.executionDetails, context),
    })), (input.jobId !== undefined && input.jobId !== null && { jobId: input.jobId }));
};
var serializeAws_json1_1PutWebhookInput = function (input, context) {
    return __assign(__assign({}, (input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) })), (input.webhook !== undefined &&
        input.webhook !== null && { webhook: serializeAws_json1_1WebhookDefinition(input.webhook, context) }));
};
var serializeAws_json1_1QueryParamMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_json1_1RegisterWebhookWithThirdPartyInput = function (input, context) {
    return __assign({}, (input.webhookName !== undefined && input.webhookName !== null && { webhookName: input.webhookName }));
};
var serializeAws_json1_1RetryStageExecutionInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.pipelineExecutionId !== undefined &&
        input.pipelineExecutionId !== null && { pipelineExecutionId: input.pipelineExecutionId })), (input.pipelineName !== undefined && input.pipelineName !== null && { pipelineName: input.pipelineName })), (input.retryMode !== undefined && input.retryMode !== null && { retryMode: input.retryMode })), (input.stageName !== undefined && input.stageName !== null && { stageName: input.stageName }));
};
var serializeAws_json1_1StageActionDeclarationList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ActionDeclaration(entry, context);
    });
};
var serializeAws_json1_1StageBlockerDeclarationList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1BlockerDeclaration(entry, context);
    });
};
var serializeAws_json1_1StageDeclaration = function (input, context) {
    return __assign(__assign(__assign({}, (input.actions !== undefined &&
        input.actions !== null && { actions: serializeAws_json1_1StageActionDeclarationList(input.actions, context) })), (input.blockers !== undefined &&
        input.blockers !== null && {
        blockers: serializeAws_json1_1StageBlockerDeclarationList(input.blockers, context),
    })), (input.name !== undefined && input.name !== null && { name: input.name }));
};
var serializeAws_json1_1StartPipelineExecutionInput = function (input, context) {
    var _a;
    return __assign({ clientRequestToken: (_a = input.clientRequestToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken() }, (input.name !== undefined && input.name !== null && { name: input.name }));
};
var serializeAws_json1_1StopPipelineExecutionInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.abandon !== undefined && input.abandon !== null && { abandon: input.abandon })), (input.pipelineExecutionId !== undefined &&
        input.pipelineExecutionId !== null && { pipelineExecutionId: input.pipelineExecutionId })), (input.pipelineName !== undefined && input.pipelineName !== null && { pipelineName: input.pipelineName })), (input.reason !== undefined && input.reason !== null && { reason: input.reason }));
};
var serializeAws_json1_1Tag = function (input, context) {
    return __assign(__assign({}, (input.key !== undefined && input.key !== null && { key: input.key })), (input.value !== undefined && input.value !== null && { value: input.value }));
};
var serializeAws_json1_1TagKeyList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1TagList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
var serializeAws_json1_1TagResourceInput = function (input, context) {
    return __assign(__assign({}, (input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }));
};
var serializeAws_json1_1UntagResourceInput = function (input, context) {
    return __assign(__assign({}, (input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn })), (input.tagKeys !== undefined &&
        input.tagKeys !== null && { tagKeys: serializeAws_json1_1TagKeyList(input.tagKeys, context) }));
};
var serializeAws_json1_1UpdateActionTypeInput = function (input, context) {
    return __assign({}, (input.actionType !== undefined &&
        input.actionType !== null && {
        actionType: serializeAws_json1_1ActionTypeDeclaration(input.actionType, context),
    }));
};
var serializeAws_json1_1UpdatePipelineInput = function (input, context) {
    return __assign({}, (input.pipeline !== undefined &&
        input.pipeline !== null && { pipeline: serializeAws_json1_1PipelineDeclaration(input.pipeline, context) }));
};
var serializeAws_json1_1WebhookAuthConfiguration = function (input, context) {
    return __assign(__assign({}, (input.AllowedIPRange !== undefined &&
        input.AllowedIPRange !== null && { AllowedIPRange: input.AllowedIPRange })), (input.SecretToken !== undefined && input.SecretToken !== null && { SecretToken: input.SecretToken }));
};
var serializeAws_json1_1WebhookDefinition = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.authentication !== undefined &&
        input.authentication !== null && { authentication: input.authentication })), (input.authenticationConfiguration !== undefined &&
        input.authenticationConfiguration !== null && {
        authenticationConfiguration: serializeAws_json1_1WebhookAuthConfiguration(input.authenticationConfiguration, context),
    })), (input.filters !== undefined &&
        input.filters !== null && { filters: serializeAws_json1_1WebhookFilters(input.filters, context) })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.targetAction !== undefined && input.targetAction !== null && { targetAction: input.targetAction })), (input.targetPipeline !== undefined &&
        input.targetPipeline !== null && { targetPipeline: input.targetPipeline }));
};
var serializeAws_json1_1WebhookFilterRule = function (input, context) {
    return __assign(__assign({}, (input.jsonPath !== undefined && input.jsonPath !== null && { jsonPath: input.jsonPath })), (input.matchEquals !== undefined && input.matchEquals !== null && { matchEquals: input.matchEquals }));
};
var serializeAws_json1_1WebhookFilters = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1WebhookFilterRule(entry, context);
    });
};
var deserializeAws_json1_1AcknowledgeJobOutput = function (output, context) {
    return {
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
var deserializeAws_json1_1AcknowledgeThirdPartyJobOutput = function (output, context) {
    return {
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
var deserializeAws_json1_1ActionConfiguration = function (output, context) {
    return {
        configuration: output.configuration !== undefined && output.configuration !== null
            ? deserializeAws_json1_1ActionConfigurationMap(output.configuration, context)
            : undefined,
    };
};
var deserializeAws_json1_1ActionConfigurationMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_json1_1ActionConfigurationProperty = function (output, context) {
    return {
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        queryable: output.queryable !== undefined && output.queryable !== null ? output.queryable : undefined,
        required: output.required !== undefined && output.required !== null ? output.required : undefined,
        secret: output.secret !== undefined && output.secret !== null ? output.secret : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_json1_1ActionConfigurationPropertyList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ActionConfigurationProperty(entry, context);
    });
};
var deserializeAws_json1_1ActionContext = function (output, context) {
    return {
        actionExecutionId: output.actionExecutionId !== undefined && output.actionExecutionId !== null
            ? output.actionExecutionId
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
var deserializeAws_json1_1ActionDeclaration = function (output, context) {
    return {
        actionTypeId: output.actionTypeId !== undefined && output.actionTypeId !== null
            ? deserializeAws_json1_1ActionTypeId(output.actionTypeId, context)
            : undefined,
        configuration: output.configuration !== undefined && output.configuration !== null
            ? deserializeAws_json1_1ActionConfigurationMap(output.configuration, context)
            : undefined,
        inputArtifacts: output.inputArtifacts !== undefined && output.inputArtifacts !== null
            ? deserializeAws_json1_1InputArtifactList(output.inputArtifacts, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        namespace: output.namespace !== undefined && output.namespace !== null ? output.namespace : undefined,
        outputArtifacts: output.outputArtifacts !== undefined && output.outputArtifacts !== null
            ? deserializeAws_json1_1OutputArtifactList(output.outputArtifacts, context)
            : undefined,
        region: output.region !== undefined && output.region !== null ? output.region : undefined,
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
        runOrder: output.runOrder !== undefined && output.runOrder !== null ? output.runOrder : undefined,
    };
};
var deserializeAws_json1_1ActionExecution = function (output, context) {
    return {
        actionExecutionId: output.actionExecutionId !== undefined && output.actionExecutionId !== null
            ? output.actionExecutionId
            : undefined,
        errorDetails: output.errorDetails !== undefined && output.errorDetails !== null
            ? deserializeAws_json1_1ErrorDetails(output.errorDetails, context)
            : undefined,
        externalExecutionId: output.externalExecutionId !== undefined && output.externalExecutionId !== null
            ? output.externalExecutionId
            : undefined,
        externalExecutionUrl: output.externalExecutionUrl !== undefined && output.externalExecutionUrl !== null
            ? output.externalExecutionUrl
            : undefined,
        lastStatusChange: output.lastStatusChange !== undefined && output.lastStatusChange !== null
            ? new Date(Math.round(output.lastStatusChange * 1000))
            : undefined,
        lastUpdatedBy: output.lastUpdatedBy !== undefined && output.lastUpdatedBy !== null ? output.lastUpdatedBy : undefined,
        percentComplete: output.percentComplete !== undefined && output.percentComplete !== null ? output.percentComplete : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        summary: output.summary !== undefined && output.summary !== null ? output.summary : undefined,
        token: output.token !== undefined && output.token !== null ? output.token : undefined,
    };
};
var deserializeAws_json1_1ActionExecutionDetail = function (output, context) {
    return {
        actionExecutionId: output.actionExecutionId !== undefined && output.actionExecutionId !== null
            ? output.actionExecutionId
            : undefined,
        actionName: output.actionName !== undefined && output.actionName !== null ? output.actionName : undefined,
        input: output.input !== undefined && output.input !== null
            ? deserializeAws_json1_1ActionExecutionInput(output.input, context)
            : undefined,
        lastUpdateTime: output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
            ? new Date(Math.round(output.lastUpdateTime * 1000))
            : undefined,
        output: output.output !== undefined && output.output !== null
            ? deserializeAws_json1_1ActionExecutionOutput(output.output, context)
            : undefined,
        pipelineExecutionId: output.pipelineExecutionId !== undefined && output.pipelineExecutionId !== null
            ? output.pipelineExecutionId
            : undefined,
        pipelineVersion: output.pipelineVersion !== undefined && output.pipelineVersion !== null ? output.pipelineVersion : undefined,
        stageName: output.stageName !== undefined && output.stageName !== null ? output.stageName : undefined,
        startTime: output.startTime !== undefined && output.startTime !== null
            ? new Date(Math.round(output.startTime * 1000))
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
var deserializeAws_json1_1ActionExecutionDetailList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ActionExecutionDetail(entry, context);
    });
};
var deserializeAws_json1_1ActionExecutionInput = function (output, context) {
    return {
        actionTypeId: output.actionTypeId !== undefined && output.actionTypeId !== null
            ? deserializeAws_json1_1ActionTypeId(output.actionTypeId, context)
            : undefined,
        configuration: output.configuration !== undefined && output.configuration !== null
            ? deserializeAws_json1_1ActionConfigurationMap(output.configuration, context)
            : undefined,
        inputArtifacts: output.inputArtifacts !== undefined && output.inputArtifacts !== null
            ? deserializeAws_json1_1ArtifactDetailList(output.inputArtifacts, context)
            : undefined,
        namespace: output.namespace !== undefined && output.namespace !== null ? output.namespace : undefined,
        region: output.region !== undefined && output.region !== null ? output.region : undefined,
        resolvedConfiguration: output.resolvedConfiguration !== undefined && output.resolvedConfiguration !== null
            ? deserializeAws_json1_1ResolvedActionConfigurationMap(output.resolvedConfiguration, context)
            : undefined,
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
    };
};
var deserializeAws_json1_1ActionExecutionOutput = function (output, context) {
    return {
        executionResult: output.executionResult !== undefined && output.executionResult !== null
            ? deserializeAws_json1_1ActionExecutionResult(output.executionResult, context)
            : undefined,
        outputArtifacts: output.outputArtifacts !== undefined && output.outputArtifacts !== null
            ? deserializeAws_json1_1ArtifactDetailList(output.outputArtifacts, context)
            : undefined,
        outputVariables: output.outputVariables !== undefined && output.outputVariables !== null
            ? deserializeAws_json1_1OutputVariablesMap(output.outputVariables, context)
            : undefined,
    };
};
var deserializeAws_json1_1ActionExecutionResult = function (output, context) {
    return {
        externalExecutionId: output.externalExecutionId !== undefined && output.externalExecutionId !== null
            ? output.externalExecutionId
            : undefined,
        externalExecutionSummary: output.externalExecutionSummary !== undefined && output.externalExecutionSummary !== null
            ? output.externalExecutionSummary
            : undefined,
        externalExecutionUrl: output.externalExecutionUrl !== undefined && output.externalExecutionUrl !== null
            ? output.externalExecutionUrl
            : undefined,
    };
};
var deserializeAws_json1_1ActionNotFoundException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ActionRevision = function (output, context) {
    return {
        created: output.created !== undefined && output.created !== null ? new Date(Math.round(output.created * 1000)) : undefined,
        revisionChangeId: output.revisionChangeId !== undefined && output.revisionChangeId !== null ? output.revisionChangeId : undefined,
        revisionId: output.revisionId !== undefined && output.revisionId !== null ? output.revisionId : undefined,
    };
};
var deserializeAws_json1_1ActionState = function (output, context) {
    return {
        actionName: output.actionName !== undefined && output.actionName !== null ? output.actionName : undefined,
        currentRevision: output.currentRevision !== undefined && output.currentRevision !== null
            ? deserializeAws_json1_1ActionRevision(output.currentRevision, context)
            : undefined,
        entityUrl: output.entityUrl !== undefined && output.entityUrl !== null ? output.entityUrl : undefined,
        latestExecution: output.latestExecution !== undefined && output.latestExecution !== null
            ? deserializeAws_json1_1ActionExecution(output.latestExecution, context)
            : undefined,
        revisionUrl: output.revisionUrl !== undefined && output.revisionUrl !== null ? output.revisionUrl : undefined,
    };
};
var deserializeAws_json1_1ActionStateList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ActionState(entry, context);
    });
};
var deserializeAws_json1_1ActionType = function (output, context) {
    return {
        actionConfigurationProperties: output.actionConfigurationProperties !== undefined && output.actionConfigurationProperties !== null
            ? deserializeAws_json1_1ActionConfigurationPropertyList(output.actionConfigurationProperties, context)
            : undefined,
        id: output.id !== undefined && output.id !== null
            ? deserializeAws_json1_1ActionTypeId(output.id, context)
            : undefined,
        inputArtifactDetails: output.inputArtifactDetails !== undefined && output.inputArtifactDetails !== null
            ? deserializeAws_json1_1ArtifactDetails(output.inputArtifactDetails, context)
            : undefined,
        outputArtifactDetails: output.outputArtifactDetails !== undefined && output.outputArtifactDetails !== null
            ? deserializeAws_json1_1ArtifactDetails(output.outputArtifactDetails, context)
            : undefined,
        settings: output.settings !== undefined && output.settings !== null
            ? deserializeAws_json1_1ActionTypeSettings(output.settings, context)
            : undefined,
    };
};
var deserializeAws_json1_1ActionTypeArtifactDetails = function (output, context) {
    return {
        maximumCount: output.maximumCount !== undefined && output.maximumCount !== null ? output.maximumCount : undefined,
        minimumCount: output.minimumCount !== undefined && output.minimumCount !== null ? output.minimumCount : undefined,
    };
};
var deserializeAws_json1_1ActionTypeDeclaration = function (output, context) {
    return {
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        executor: output.executor !== undefined && output.executor !== null
            ? deserializeAws_json1_1ActionTypeExecutor(output.executor, context)
            : undefined,
        id: output.id !== undefined && output.id !== null
            ? deserializeAws_json1_1ActionTypeIdentifier(output.id, context)
            : undefined,
        inputArtifactDetails: output.inputArtifactDetails !== undefined && output.inputArtifactDetails !== null
            ? deserializeAws_json1_1ActionTypeArtifactDetails(output.inputArtifactDetails, context)
            : undefined,
        outputArtifactDetails: output.outputArtifactDetails !== undefined && output.outputArtifactDetails !== null
            ? deserializeAws_json1_1ActionTypeArtifactDetails(output.outputArtifactDetails, context)
            : undefined,
        permissions: output.permissions !== undefined && output.permissions !== null
            ? deserializeAws_json1_1ActionTypePermissions(output.permissions, context)
            : undefined,
        properties: output.properties !== undefined && output.properties !== null
            ? deserializeAws_json1_1ActionTypeProperties(output.properties, context)
            : undefined,
        urls: output.urls !== undefined && output.urls !== null
            ? deserializeAws_json1_1ActionTypeUrls(output.urls, context)
            : undefined,
    };
};
var deserializeAws_json1_1ActionTypeExecutor = function (output, context) {
    return {
        configuration: output.configuration !== undefined && output.configuration !== null
            ? deserializeAws_json1_1ExecutorConfiguration(output.configuration, context)
            : undefined,
        jobTimeout: output.jobTimeout !== undefined && output.jobTimeout !== null ? output.jobTimeout : undefined,
        policyStatementsTemplate: output.policyStatementsTemplate !== undefined && output.policyStatementsTemplate !== null
            ? output.policyStatementsTemplate
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_json1_1ActionTypeId = function (output, context) {
    return {
        category: output.category !== undefined && output.category !== null ? output.category : undefined,
        owner: output.owner !== undefined && output.owner !== null ? output.owner : undefined,
        provider: output.provider !== undefined && output.provider !== null ? output.provider : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
var deserializeAws_json1_1ActionTypeIdentifier = function (output, context) {
    return {
        category: output.category !== undefined && output.category !== null ? output.category : undefined,
        owner: output.owner !== undefined && output.owner !== null ? output.owner : undefined,
        provider: output.provider !== undefined && output.provider !== null ? output.provider : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
var deserializeAws_json1_1ActionTypeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ActionType(entry, context);
    });
};
var deserializeAws_json1_1ActionTypeNotFoundException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ActionTypePermissions = function (output, context) {
    return {
        allowedAccounts: output.allowedAccounts !== undefined && output.allowedAccounts !== null
            ? deserializeAws_json1_1AllowedAccounts(output.allowedAccounts, context)
            : undefined,
    };
};
var deserializeAws_json1_1ActionTypeProperties = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ActionTypeProperty(entry, context);
    });
};
var deserializeAws_json1_1ActionTypeProperty = function (output, context) {
    return {
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        noEcho: output.noEcho !== undefined && output.noEcho !== null ? output.noEcho : undefined,
        optional: output.optional !== undefined && output.optional !== null ? output.optional : undefined,
        queryable: output.queryable !== undefined && output.queryable !== null ? output.queryable : undefined,
    };
};
var deserializeAws_json1_1ActionTypeSettings = function (output, context) {
    return {
        entityUrlTemplate: output.entityUrlTemplate !== undefined && output.entityUrlTemplate !== null
            ? output.entityUrlTemplate
            : undefined,
        executionUrlTemplate: output.executionUrlTemplate !== undefined && output.executionUrlTemplate !== null
            ? output.executionUrlTemplate
            : undefined,
        revisionUrlTemplate: output.revisionUrlTemplate !== undefined && output.revisionUrlTemplate !== null
            ? output.revisionUrlTemplate
            : undefined,
        thirdPartyConfigurationUrl: output.thirdPartyConfigurationUrl !== undefined && output.thirdPartyConfigurationUrl !== null
            ? output.thirdPartyConfigurationUrl
            : undefined,
    };
};
var deserializeAws_json1_1ActionTypeUrls = function (output, context) {
    return {
        configurationUrl: output.configurationUrl !== undefined && output.configurationUrl !== null ? output.configurationUrl : undefined,
        entityUrlTemplate: output.entityUrlTemplate !== undefined && output.entityUrlTemplate !== null
            ? output.entityUrlTemplate
            : undefined,
        executionUrlTemplate: output.executionUrlTemplate !== undefined && output.executionUrlTemplate !== null
            ? output.executionUrlTemplate
            : undefined,
        revisionUrlTemplate: output.revisionUrlTemplate !== undefined && output.revisionUrlTemplate !== null
            ? output.revisionUrlTemplate
            : undefined,
    };
};
var deserializeAws_json1_1AllowedAccounts = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1ApprovalAlreadyCompletedException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1Artifact = function (output, context) {
    return {
        location: output.location !== undefined && output.location !== null
            ? deserializeAws_json1_1ArtifactLocation(output.location, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        revision: output.revision !== undefined && output.revision !== null ? output.revision : undefined,
    };
};
var deserializeAws_json1_1ArtifactDetail = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        s3location: output.s3location !== undefined && output.s3location !== null
            ? deserializeAws_json1_1S3Location(output.s3location, context)
            : undefined,
    };
};
var deserializeAws_json1_1ArtifactDetailList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ArtifactDetail(entry, context);
    });
};
var deserializeAws_json1_1ArtifactDetails = function (output, context) {
    return {
        maximumCount: output.maximumCount !== undefined && output.maximumCount !== null ? output.maximumCount : undefined,
        minimumCount: output.minimumCount !== undefined && output.minimumCount !== null ? output.minimumCount : undefined,
    };
};
var deserializeAws_json1_1ArtifactList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Artifact(entry, context);
    });
};
var deserializeAws_json1_1ArtifactLocation = function (output, context) {
    return {
        s3Location: output.s3Location !== undefined && output.s3Location !== null
            ? deserializeAws_json1_1S3ArtifactLocation(output.s3Location, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_json1_1ArtifactRevision = function (output, context) {
    return {
        created: output.created !== undefined && output.created !== null ? new Date(Math.round(output.created * 1000)) : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        revisionChangeIdentifier: output.revisionChangeIdentifier !== undefined && output.revisionChangeIdentifier !== null
            ? output.revisionChangeIdentifier
            : undefined,
        revisionId: output.revisionId !== undefined && output.revisionId !== null ? output.revisionId : undefined,
        revisionSummary: output.revisionSummary !== undefined && output.revisionSummary !== null ? output.revisionSummary : undefined,
        revisionUrl: output.revisionUrl !== undefined && output.revisionUrl !== null ? output.revisionUrl : undefined,
    };
};
var deserializeAws_json1_1ArtifactRevisionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ArtifactRevision(entry, context);
    });
};
var deserializeAws_json1_1ArtifactStore = function (output, context) {
    return {
        encryptionKey: output.encryptionKey !== undefined && output.encryptionKey !== null
            ? deserializeAws_json1_1EncryptionKey(output.encryptionKey, context)
            : undefined,
        location: output.location !== undefined && output.location !== null ? output.location : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_json1_1ArtifactStoreMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_json1_1ArtifactStore(value, context), _b));
    }, {});
};
var deserializeAws_json1_1AWSSessionCredentials = function (output, context) {
    return {
        accessKeyId: output.accessKeyId !== undefined && output.accessKeyId !== null ? output.accessKeyId : undefined,
        secretAccessKey: output.secretAccessKey !== undefined && output.secretAccessKey !== null ? output.secretAccessKey : undefined,
        sessionToken: output.sessionToken !== undefined && output.sessionToken !== null ? output.sessionToken : undefined,
    };
};
var deserializeAws_json1_1BlockerDeclaration = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_json1_1ConcurrentModificationException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ConflictException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1CreateCustomActionTypeOutput = function (output, context) {
    return {
        actionType: output.actionType !== undefined && output.actionType !== null
            ? deserializeAws_json1_1ActionType(output.actionType, context)
            : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_1TagList(output.tags, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreatePipelineOutput = function (output, context) {
    return {
        pipeline: output.pipeline !== undefined && output.pipeline !== null
            ? deserializeAws_json1_1PipelineDeclaration(output.pipeline, context)
            : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_1TagList(output.tags, context)
            : undefined,
    };
};
var deserializeAws_json1_1DeleteWebhookOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeregisterWebhookWithThirdPartyOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1DuplicatedStopRequestException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1EncryptionKey = function (output, context) {
    return {
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_json1_1ErrorDetails = function (output, context) {
    return {
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ExecutionTrigger = function (output, context) {
    return {
        triggerDetail: output.triggerDetail !== undefined && output.triggerDetail !== null ? output.triggerDetail : undefined,
        triggerType: output.triggerType !== undefined && output.triggerType !== null ? output.triggerType : undefined,
    };
};
var deserializeAws_json1_1ExecutorConfiguration = function (output, context) {
    return {
        jobWorkerExecutorConfiguration: output.jobWorkerExecutorConfiguration !== undefined && output.jobWorkerExecutorConfiguration !== null
            ? deserializeAws_json1_1JobWorkerExecutorConfiguration(output.jobWorkerExecutorConfiguration, context)
            : undefined,
        lambdaExecutorConfiguration: output.lambdaExecutorConfiguration !== undefined && output.lambdaExecutorConfiguration !== null
            ? deserializeAws_json1_1LambdaExecutorConfiguration(output.lambdaExecutorConfiguration, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetActionTypeOutput = function (output, context) {
    return {
        actionType: output.actionType !== undefined && output.actionType !== null
            ? deserializeAws_json1_1ActionTypeDeclaration(output.actionType, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetJobDetailsOutput = function (output, context) {
    return {
        jobDetails: output.jobDetails !== undefined && output.jobDetails !== null
            ? deserializeAws_json1_1JobDetails(output.jobDetails, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetPipelineExecutionOutput = function (output, context) {
    return {
        pipelineExecution: output.pipelineExecution !== undefined && output.pipelineExecution !== null
            ? deserializeAws_json1_1PipelineExecution(output.pipelineExecution, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetPipelineOutput = function (output, context) {
    return {
        metadata: output.metadata !== undefined && output.metadata !== null
            ? deserializeAws_json1_1PipelineMetadata(output.metadata, context)
            : undefined,
        pipeline: output.pipeline !== undefined && output.pipeline !== null
            ? deserializeAws_json1_1PipelineDeclaration(output.pipeline, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetPipelineStateOutput = function (output, context) {
    return {
        created: output.created !== undefined && output.created !== null ? new Date(Math.round(output.created * 1000)) : undefined,
        pipelineName: output.pipelineName !== undefined && output.pipelineName !== null ? output.pipelineName : undefined,
        pipelineVersion: output.pipelineVersion !== undefined && output.pipelineVersion !== null ? output.pipelineVersion : undefined,
        stageStates: output.stageStates !== undefined && output.stageStates !== null
            ? deserializeAws_json1_1StageStateList(output.stageStates, context)
            : undefined,
        updated: output.updated !== undefined && output.updated !== null ? new Date(Math.round(output.updated * 1000)) : undefined,
    };
};
var deserializeAws_json1_1GetThirdPartyJobDetailsOutput = function (output, context) {
    return {
        jobDetails: output.jobDetails !== undefined && output.jobDetails !== null
            ? deserializeAws_json1_1ThirdPartyJobDetails(output.jobDetails, context)
            : undefined,
    };
};
var deserializeAws_json1_1InputArtifact = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
var deserializeAws_json1_1InputArtifactList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InputArtifact(entry, context);
    });
};
var deserializeAws_json1_1InvalidActionDeclarationException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidApprovalTokenException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidArnException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidBlockerDeclarationException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidClientTokenException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidJobException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidJobStateException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidNextTokenException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidNonceException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidStageDeclarationException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidStructureException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidTagsException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidWebhookAuthenticationParametersException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidWebhookFilterPatternException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1Job = function (output, context) {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        data: output.data !== undefined && output.data !== null
            ? deserializeAws_json1_1JobData(output.data, context)
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        nonce: output.nonce !== undefined && output.nonce !== null ? output.nonce : undefined,
    };
};
var deserializeAws_json1_1JobData = function (output, context) {
    return {
        actionConfiguration: output.actionConfiguration !== undefined && output.actionConfiguration !== null
            ? deserializeAws_json1_1ActionConfiguration(output.actionConfiguration, context)
            : undefined,
        actionTypeId: output.actionTypeId !== undefined && output.actionTypeId !== null
            ? deserializeAws_json1_1ActionTypeId(output.actionTypeId, context)
            : undefined,
        artifactCredentials: output.artifactCredentials !== undefined && output.artifactCredentials !== null
            ? deserializeAws_json1_1AWSSessionCredentials(output.artifactCredentials, context)
            : undefined,
        continuationToken: output.continuationToken !== undefined && output.continuationToken !== null
            ? output.continuationToken
            : undefined,
        encryptionKey: output.encryptionKey !== undefined && output.encryptionKey !== null
            ? deserializeAws_json1_1EncryptionKey(output.encryptionKey, context)
            : undefined,
        inputArtifacts: output.inputArtifacts !== undefined && output.inputArtifacts !== null
            ? deserializeAws_json1_1ArtifactList(output.inputArtifacts, context)
            : undefined,
        outputArtifacts: output.outputArtifacts !== undefined && output.outputArtifacts !== null
            ? deserializeAws_json1_1ArtifactList(output.outputArtifacts, context)
            : undefined,
        pipelineContext: output.pipelineContext !== undefined && output.pipelineContext !== null
            ? deserializeAws_json1_1PipelineContext(output.pipelineContext, context)
            : undefined,
    };
};
var deserializeAws_json1_1JobDetails = function (output, context) {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        data: output.data !== undefined && output.data !== null
            ? deserializeAws_json1_1JobData(output.data, context)
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
    };
};
var deserializeAws_json1_1JobList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Job(entry, context);
    });
};
var deserializeAws_json1_1JobNotFoundException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1JobWorkerExecutorConfiguration = function (output, context) {
    return {
        pollingAccounts: output.pollingAccounts !== undefined && output.pollingAccounts !== null
            ? deserializeAws_json1_1PollingAccountList(output.pollingAccounts, context)
            : undefined,
        pollingServicePrincipals: output.pollingServicePrincipals !== undefined && output.pollingServicePrincipals !== null
            ? deserializeAws_json1_1PollingServicePrincipalList(output.pollingServicePrincipals, context)
            : undefined,
    };
};
var deserializeAws_json1_1LambdaExecutorConfiguration = function (output, context) {
    return {
        lambdaFunctionArn: output.lambdaFunctionArn !== undefined && output.lambdaFunctionArn !== null
            ? output.lambdaFunctionArn
            : undefined,
    };
};
var deserializeAws_json1_1LimitExceededException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ListActionExecutionsOutput = function (output, context) {
    return {
        actionExecutionDetails: output.actionExecutionDetails !== undefined && output.actionExecutionDetails !== null
            ? deserializeAws_json1_1ActionExecutionDetailList(output.actionExecutionDetails, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1ListActionTypesOutput = function (output, context) {
    return {
        actionTypes: output.actionTypes !== undefined && output.actionTypes !== null
            ? deserializeAws_json1_1ActionTypeList(output.actionTypes, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1ListPipelineExecutionsOutput = function (output, context) {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        pipelineExecutionSummaries: output.pipelineExecutionSummaries !== undefined && output.pipelineExecutionSummaries !== null
            ? deserializeAws_json1_1PipelineExecutionSummaryList(output.pipelineExecutionSummaries, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListPipelinesOutput = function (output, context) {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        pipelines: output.pipelines !== undefined && output.pipelines !== null
            ? deserializeAws_json1_1PipelineList(output.pipelines, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListTagsForResourceOutput = function (output, context) {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_1TagList(output.tags, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListWebhookItem = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        definition: output.definition !== undefined && output.definition !== null
            ? deserializeAws_json1_1WebhookDefinition(output.definition, context)
            : undefined,
        errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
        errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
        lastTriggered: output.lastTriggered !== undefined && output.lastTriggered !== null
            ? new Date(Math.round(output.lastTriggered * 1000))
            : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_1TagList(output.tags, context)
            : undefined,
        url: output.url !== undefined && output.url !== null ? output.url : undefined,
    };
};
var deserializeAws_json1_1ListWebhooksOutput = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        webhooks: output.webhooks !== undefined && output.webhooks !== null
            ? deserializeAws_json1_1WebhookList(output.webhooks, context)
            : undefined,
    };
};
var deserializeAws_json1_1NotLatestPipelineExecutionException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1OutputArtifact = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
var deserializeAws_json1_1OutputArtifactList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OutputArtifact(entry, context);
    });
};
var deserializeAws_json1_1OutputVariablesMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_json1_1OutputVariablesSizeExceededException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1PipelineContext = function (output, context) {
    return {
        action: output.action !== undefined && output.action !== null
            ? deserializeAws_json1_1ActionContext(output.action, context)
            : undefined,
        pipelineArn: output.pipelineArn !== undefined && output.pipelineArn !== null ? output.pipelineArn : undefined,
        pipelineExecutionId: output.pipelineExecutionId !== undefined && output.pipelineExecutionId !== null
            ? output.pipelineExecutionId
            : undefined,
        pipelineName: output.pipelineName !== undefined && output.pipelineName !== null ? output.pipelineName : undefined,
        stage: output.stage !== undefined && output.stage !== null
            ? deserializeAws_json1_1StageContext(output.stage, context)
            : undefined,
    };
};
var deserializeAws_json1_1PipelineDeclaration = function (output, context) {
    return {
        artifactStore: output.artifactStore !== undefined && output.artifactStore !== null
            ? deserializeAws_json1_1ArtifactStore(output.artifactStore, context)
            : undefined,
        artifactStores: output.artifactStores !== undefined && output.artifactStores !== null
            ? deserializeAws_json1_1ArtifactStoreMap(output.artifactStores, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
        stages: output.stages !== undefined && output.stages !== null
            ? deserializeAws_json1_1PipelineStageDeclarationList(output.stages, context)
            : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
var deserializeAws_json1_1PipelineExecution = function (output, context) {
    return {
        artifactRevisions: output.artifactRevisions !== undefined && output.artifactRevisions !== null
            ? deserializeAws_json1_1ArtifactRevisionList(output.artifactRevisions, context)
            : undefined,
        pipelineExecutionId: output.pipelineExecutionId !== undefined && output.pipelineExecutionId !== null
            ? output.pipelineExecutionId
            : undefined,
        pipelineName: output.pipelineName !== undefined && output.pipelineName !== null ? output.pipelineName : undefined,
        pipelineVersion: output.pipelineVersion !== undefined && output.pipelineVersion !== null ? output.pipelineVersion : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        statusSummary: output.statusSummary !== undefined && output.statusSummary !== null ? output.statusSummary : undefined,
    };
};
var deserializeAws_json1_1PipelineExecutionNotFoundException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1PipelineExecutionNotStoppableException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1PipelineExecutionSummary = function (output, context) {
    return {
        lastUpdateTime: output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
            ? new Date(Math.round(output.lastUpdateTime * 1000))
            : undefined,
        pipelineExecutionId: output.pipelineExecutionId !== undefined && output.pipelineExecutionId !== null
            ? output.pipelineExecutionId
            : undefined,
        sourceRevisions: output.sourceRevisions !== undefined && output.sourceRevisions !== null
            ? deserializeAws_json1_1SourceRevisionList(output.sourceRevisions, context)
            : undefined,
        startTime: output.startTime !== undefined && output.startTime !== null
            ? new Date(Math.round(output.startTime * 1000))
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        stopTrigger: output.stopTrigger !== undefined && output.stopTrigger !== null
            ? deserializeAws_json1_1StopExecutionTrigger(output.stopTrigger, context)
            : undefined,
        trigger: output.trigger !== undefined && output.trigger !== null
            ? deserializeAws_json1_1ExecutionTrigger(output.trigger, context)
            : undefined,
    };
};
var deserializeAws_json1_1PipelineExecutionSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PipelineExecutionSummary(entry, context);
    });
};
var deserializeAws_json1_1PipelineList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PipelineSummary(entry, context);
    });
};
var deserializeAws_json1_1PipelineMetadata = function (output, context) {
    return {
        created: output.created !== undefined && output.created !== null ? new Date(Math.round(output.created * 1000)) : undefined,
        pipelineArn: output.pipelineArn !== undefined && output.pipelineArn !== null ? output.pipelineArn : undefined,
        updated: output.updated !== undefined && output.updated !== null ? new Date(Math.round(output.updated * 1000)) : undefined,
    };
};
var deserializeAws_json1_1PipelineNameInUseException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1PipelineNotFoundException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1PipelineStageDeclarationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1StageDeclaration(entry, context);
    });
};
var deserializeAws_json1_1PipelineSummary = function (output, context) {
    return {
        created: output.created !== undefined && output.created !== null ? new Date(Math.round(output.created * 1000)) : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        updated: output.updated !== undefined && output.updated !== null ? new Date(Math.round(output.updated * 1000)) : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
var deserializeAws_json1_1PipelineVersionNotFoundException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1PollForJobsOutput = function (output, context) {
    return {
        jobs: output.jobs !== undefined && output.jobs !== null
            ? deserializeAws_json1_1JobList(output.jobs, context)
            : undefined,
    };
};
var deserializeAws_json1_1PollForThirdPartyJobsOutput = function (output, context) {
    return {
        jobs: output.jobs !== undefined && output.jobs !== null
            ? deserializeAws_json1_1ThirdPartyJobList(output.jobs, context)
            : undefined,
    };
};
var deserializeAws_json1_1PollingAccountList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1PollingServicePrincipalList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1PutActionRevisionOutput = function (output, context) {
    return {
        newRevision: output.newRevision !== undefined && output.newRevision !== null ? output.newRevision : undefined,
        pipelineExecutionId: output.pipelineExecutionId !== undefined && output.pipelineExecutionId !== null
            ? output.pipelineExecutionId
            : undefined,
    };
};
var deserializeAws_json1_1PutApprovalResultOutput = function (output, context) {
    return {
        approvedAt: output.approvedAt !== undefined && output.approvedAt !== null
            ? new Date(Math.round(output.approvedAt * 1000))
            : undefined,
    };
};
var deserializeAws_json1_1PutWebhookOutput = function (output, context) {
    return {
        webhook: output.webhook !== undefined && output.webhook !== null
            ? deserializeAws_json1_1ListWebhookItem(output.webhook, context)
            : undefined,
    };
};
var deserializeAws_json1_1RegisterWebhookWithThirdPartyOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1RequestFailedException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ResolvedActionConfigurationMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_json1_1ResourceNotFoundException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1RetryStageExecutionOutput = function (output, context) {
    return {
        pipelineExecutionId: output.pipelineExecutionId !== undefined && output.pipelineExecutionId !== null
            ? output.pipelineExecutionId
            : undefined,
    };
};
var deserializeAws_json1_1S3ArtifactLocation = function (output, context) {
    return {
        bucketName: output.bucketName !== undefined && output.bucketName !== null ? output.bucketName : undefined,
        objectKey: output.objectKey !== undefined && output.objectKey !== null ? output.objectKey : undefined,
    };
};
var deserializeAws_json1_1S3Location = function (output, context) {
    return {
        bucket: output.bucket !== undefined && output.bucket !== null ? output.bucket : undefined,
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
    };
};
var deserializeAws_json1_1SourceRevision = function (output, context) {
    return {
        actionName: output.actionName !== undefined && output.actionName !== null ? output.actionName : undefined,
        revisionId: output.revisionId !== undefined && output.revisionId !== null ? output.revisionId : undefined,
        revisionSummary: output.revisionSummary !== undefined && output.revisionSummary !== null ? output.revisionSummary : undefined,
        revisionUrl: output.revisionUrl !== undefined && output.revisionUrl !== null ? output.revisionUrl : undefined,
    };
};
var deserializeAws_json1_1SourceRevisionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SourceRevision(entry, context);
    });
};
var deserializeAws_json1_1StageActionDeclarationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ActionDeclaration(entry, context);
    });
};
var deserializeAws_json1_1StageBlockerDeclarationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BlockerDeclaration(entry, context);
    });
};
var deserializeAws_json1_1StageContext = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
var deserializeAws_json1_1StageDeclaration = function (output, context) {
    return {
        actions: output.actions !== undefined && output.actions !== null
            ? deserializeAws_json1_1StageActionDeclarationList(output.actions, context)
            : undefined,
        blockers: output.blockers !== undefined && output.blockers !== null
            ? deserializeAws_json1_1StageBlockerDeclarationList(output.blockers, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
var deserializeAws_json1_1StageExecution = function (output, context) {
    return {
        pipelineExecutionId: output.pipelineExecutionId !== undefined && output.pipelineExecutionId !== null
            ? output.pipelineExecutionId
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
var deserializeAws_json1_1StageNotFoundException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1StageNotRetryableException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1StageState = function (output, context) {
    return {
        actionStates: output.actionStates !== undefined && output.actionStates !== null
            ? deserializeAws_json1_1ActionStateList(output.actionStates, context)
            : undefined,
        inboundExecution: output.inboundExecution !== undefined && output.inboundExecution !== null
            ? deserializeAws_json1_1StageExecution(output.inboundExecution, context)
            : undefined,
        inboundTransitionState: output.inboundTransitionState !== undefined && output.inboundTransitionState !== null
            ? deserializeAws_json1_1TransitionState(output.inboundTransitionState, context)
            : undefined,
        latestExecution: output.latestExecution !== undefined && output.latestExecution !== null
            ? deserializeAws_json1_1StageExecution(output.latestExecution, context)
            : undefined,
        stageName: output.stageName !== undefined && output.stageName !== null ? output.stageName : undefined,
    };
};
var deserializeAws_json1_1StageStateList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1StageState(entry, context);
    });
};
var deserializeAws_json1_1StartPipelineExecutionOutput = function (output, context) {
    return {
        pipelineExecutionId: output.pipelineExecutionId !== undefined && output.pipelineExecutionId !== null
            ? output.pipelineExecutionId
            : undefined,
    };
};
var deserializeAws_json1_1StopExecutionTrigger = function (output, context) {
    return {
        reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
    };
};
var deserializeAws_json1_1StopPipelineExecutionOutput = function (output, context) {
    return {
        pipelineExecutionId: output.pipelineExecutionId !== undefined && output.pipelineExecutionId !== null
            ? output.pipelineExecutionId
            : undefined,
    };
};
var deserializeAws_json1_1Tag = function (output, context) {
    return {
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
var deserializeAws_json1_1TagList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
};
var deserializeAws_json1_1TagResourceOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1ThirdPartyJob = function (output, context) {
    return {
        clientId: output.clientId !== undefined && output.clientId !== null ? output.clientId : undefined,
        jobId: output.jobId !== undefined && output.jobId !== null ? output.jobId : undefined,
    };
};
var deserializeAws_json1_1ThirdPartyJobData = function (output, context) {
    return {
        actionConfiguration: output.actionConfiguration !== undefined && output.actionConfiguration !== null
            ? deserializeAws_json1_1ActionConfiguration(output.actionConfiguration, context)
            : undefined,
        actionTypeId: output.actionTypeId !== undefined && output.actionTypeId !== null
            ? deserializeAws_json1_1ActionTypeId(output.actionTypeId, context)
            : undefined,
        artifactCredentials: output.artifactCredentials !== undefined && output.artifactCredentials !== null
            ? deserializeAws_json1_1AWSSessionCredentials(output.artifactCredentials, context)
            : undefined,
        continuationToken: output.continuationToken !== undefined && output.continuationToken !== null
            ? output.continuationToken
            : undefined,
        encryptionKey: output.encryptionKey !== undefined && output.encryptionKey !== null
            ? deserializeAws_json1_1EncryptionKey(output.encryptionKey, context)
            : undefined,
        inputArtifacts: output.inputArtifacts !== undefined && output.inputArtifacts !== null
            ? deserializeAws_json1_1ArtifactList(output.inputArtifacts, context)
            : undefined,
        outputArtifacts: output.outputArtifacts !== undefined && output.outputArtifacts !== null
            ? deserializeAws_json1_1ArtifactList(output.outputArtifacts, context)
            : undefined,
        pipelineContext: output.pipelineContext !== undefined && output.pipelineContext !== null
            ? deserializeAws_json1_1PipelineContext(output.pipelineContext, context)
            : undefined,
    };
};
var deserializeAws_json1_1ThirdPartyJobDetails = function (output, context) {
    return {
        data: output.data !== undefined && output.data !== null
            ? deserializeAws_json1_1ThirdPartyJobData(output.data, context)
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        nonce: output.nonce !== undefined && output.nonce !== null ? output.nonce : undefined,
    };
};
var deserializeAws_json1_1ThirdPartyJobList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ThirdPartyJob(entry, context);
    });
};
var deserializeAws_json1_1TooManyTagsException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1TransitionState = function (output, context) {
    return {
        disabledReason: output.disabledReason !== undefined && output.disabledReason !== null ? output.disabledReason : undefined,
        enabled: output.enabled !== undefined && output.enabled !== null ? output.enabled : undefined,
        lastChangedAt: output.lastChangedAt !== undefined && output.lastChangedAt !== null
            ? new Date(Math.round(output.lastChangedAt * 1000))
            : undefined,
        lastChangedBy: output.lastChangedBy !== undefined && output.lastChangedBy !== null ? output.lastChangedBy : undefined,
    };
};
var deserializeAws_json1_1UntagResourceOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1UpdatePipelineOutput = function (output, context) {
    return {
        pipeline: output.pipeline !== undefined && output.pipeline !== null
            ? deserializeAws_json1_1PipelineDeclaration(output.pipeline, context)
            : undefined,
    };
};
var deserializeAws_json1_1ValidationException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1WebhookAuthConfiguration = function (output, context) {
    return {
        AllowedIPRange: output.AllowedIPRange !== undefined && output.AllowedIPRange !== null ? output.AllowedIPRange : undefined,
        SecretToken: output.SecretToken !== undefined && output.SecretToken !== null ? output.SecretToken : undefined,
    };
};
var deserializeAws_json1_1WebhookDefinition = function (output, context) {
    return {
        authentication: output.authentication !== undefined && output.authentication !== null ? output.authentication : undefined,
        authenticationConfiguration: output.authenticationConfiguration !== undefined && output.authenticationConfiguration !== null
            ? deserializeAws_json1_1WebhookAuthConfiguration(output.authenticationConfiguration, context)
            : undefined,
        filters: output.filters !== undefined && output.filters !== null
            ? deserializeAws_json1_1WebhookFilters(output.filters, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        targetAction: output.targetAction !== undefined && output.targetAction !== null ? output.targetAction : undefined,
        targetPipeline: output.targetPipeline !== undefined && output.targetPipeline !== null ? output.targetPipeline : undefined,
    };
};
var deserializeAws_json1_1WebhookFilterRule = function (output, context) {
    return {
        jsonPath: output.jsonPath !== undefined && output.jsonPath !== null ? output.jsonPath : undefined,
        matchEquals: output.matchEquals !== undefined && output.matchEquals !== null ? output.matchEquals : undefined,
    };
};
var deserializeAws_json1_1WebhookFilters = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1WebhookFilterRule(entry, context);
    });
};
var deserializeAws_json1_1WebhookList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ListWebhookItem(entry, context);
    });
};
var deserializeAws_json1_1WebhookNotFoundException = function (output, context) {
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