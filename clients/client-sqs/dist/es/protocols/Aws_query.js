import { __assign, __awaiter, __generator, __read, __values } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, getArrayIfSingleItem as __getArrayIfSingleItem, getValueFromTextNode as __getValueFromTextNode, } from "@aws-sdk/smithy-client";
import { decodeHTML } from "entities";
import { parse as xmlParse } from "fast-xml-parser";
export var serializeAws_queryAddPermissionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryAddPermissionRequest(input, context)), { Action: "AddPermission", Version: "2012-11-05" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryChangeMessageVisibilityCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryChangeMessageVisibilityRequest(input, context)), { Action: "ChangeMessageVisibility", Version: "2012-11-05" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryChangeMessageVisibilityBatchCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryChangeMessageVisibilityBatchRequest(input, context)), { Action: "ChangeMessageVisibilityBatch", Version: "2012-11-05" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateQueueCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateQueueRequest(input, context)), { Action: "CreateQueue", Version: "2012-11-05" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteMessageCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteMessageRequest(input, context)), { Action: "DeleteMessage", Version: "2012-11-05" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteMessageBatchCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteMessageBatchRequest(input, context)), { Action: "DeleteMessageBatch", Version: "2012-11-05" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteQueueCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteQueueRequest(input, context)), { Action: "DeleteQueue", Version: "2012-11-05" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetQueueAttributesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGetQueueAttributesRequest(input, context)), { Action: "GetQueueAttributes", Version: "2012-11-05" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetQueueUrlCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGetQueueUrlRequest(input, context)), { Action: "GetQueueUrl", Version: "2012-11-05" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListDeadLetterSourceQueuesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListDeadLetterSourceQueuesRequest(input, context)), { Action: "ListDeadLetterSourceQueues", Version: "2012-11-05" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListQueuesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListQueuesRequest(input, context)), { Action: "ListQueues", Version: "2012-11-05" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListQueueTagsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListQueueTagsRequest(input, context)), { Action: "ListQueueTags", Version: "2012-11-05" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryPurgeQueueCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryPurgeQueueRequest(input, context)), { Action: "PurgeQueue", Version: "2012-11-05" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryReceiveMessageCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryReceiveMessageRequest(input, context)), { Action: "ReceiveMessage", Version: "2012-11-05" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryRemovePermissionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryRemovePermissionRequest(input, context)), { Action: "RemovePermission", Version: "2012-11-05" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_querySendMessageCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_querySendMessageRequest(input, context)), { Action: "SendMessage", Version: "2012-11-05" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_querySendMessageBatchCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_querySendMessageBatchRequest(input, context)), { Action: "SendMessageBatch", Version: "2012-11-05" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_querySetQueueAttributesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_querySetQueueAttributesRequest(input, context)), { Action: "SetQueueAttributes", Version: "2012-11-05" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryTagQueueCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryTagQueueRequest(input, context)), { Action: "TagQueue", Version: "2012-11-05" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUntagQueueCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUntagQueueRequest(input, context)), { Action: "UntagQueue", Version: "2012-11-05" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_queryAddPermissionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryAddPermissionCommandError(output, context)];
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
var deserializeAws_queryAddPermissionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "OverLimit": return [3 /*break*/, 2];
                    case "com.amazonaws.sqs#OverLimit": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryOverLimitResponse(parsedOutput, context)];
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
export var deserializeAws_queryChangeMessageVisibilityCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryChangeMessageVisibilityCommandError(output, context)];
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
var deserializeAws_queryChangeMessageVisibilityCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "MessageNotInflight": return [3 /*break*/, 2];
                    case "com.amazonaws.sqs#MessageNotInflight": return [3 /*break*/, 2];
                    case "ReceiptHandleIsInvalid": return [3 /*break*/, 4];
                    case "com.amazonaws.sqs#ReceiptHandleIsInvalid": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryMessageNotInflightResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryReceiptHandleIsInvalidResponse(parsedOutput, context)];
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
export var deserializeAws_queryChangeMessageVisibilityBatchCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryChangeMessageVisibilityBatchCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryChangeMessageVisibilityBatchResult(data.ChangeMessageVisibilityBatchResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryChangeMessageVisibilityBatchCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BatchEntryIdsNotDistinct": return [3 /*break*/, 2];
                    case "com.amazonaws.sqs#BatchEntryIdsNotDistinct": return [3 /*break*/, 2];
                    case "EmptyBatchRequest": return [3 /*break*/, 4];
                    case "com.amazonaws.sqs#EmptyBatchRequest": return [3 /*break*/, 4];
                    case "InvalidBatchEntryId": return [3 /*break*/, 6];
                    case "com.amazonaws.sqs#InvalidBatchEntryId": return [3 /*break*/, 6];
                    case "TooManyEntriesInBatchRequest": return [3 /*break*/, 8];
                    case "com.amazonaws.sqs#TooManyEntriesInBatchRequest": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryBatchEntryIdsNotDistinctResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryEmptyBatchRequestResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidBatchEntryIdResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyEntriesInBatchRequestResponse(parsedOutput, context)];
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
export var deserializeAws_queryCreateQueueCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateQueueCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateQueueResult(data.CreateQueueResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateQueueCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "QueueDeletedRecently": return [3 /*break*/, 2];
                    case "com.amazonaws.sqs#QueueDeletedRecently": return [3 /*break*/, 2];
                    case "QueueNameExists": return [3 /*break*/, 4];
                    case "com.amazonaws.sqs#QueueNameExists": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryQueueDeletedRecentlyResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryQueueNameExistsResponse(parsedOutput, context)];
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
export var deserializeAws_queryDeleteMessageCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteMessageCommandError(output, context)];
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
var deserializeAws_queryDeleteMessageCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidIdFormat": return [3 /*break*/, 2];
                    case "com.amazonaws.sqs#InvalidIdFormat": return [3 /*break*/, 2];
                    case "ReceiptHandleIsInvalid": return [3 /*break*/, 4];
                    case "com.amazonaws.sqs#ReceiptHandleIsInvalid": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidIdFormatResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryReceiptHandleIsInvalidResponse(parsedOutput, context)];
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
export var deserializeAws_queryDeleteMessageBatchCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteMessageBatchCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDeleteMessageBatchResult(data.DeleteMessageBatchResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteMessageBatchCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BatchEntryIdsNotDistinct": return [3 /*break*/, 2];
                    case "com.amazonaws.sqs#BatchEntryIdsNotDistinct": return [3 /*break*/, 2];
                    case "EmptyBatchRequest": return [3 /*break*/, 4];
                    case "com.amazonaws.sqs#EmptyBatchRequest": return [3 /*break*/, 4];
                    case "InvalidBatchEntryId": return [3 /*break*/, 6];
                    case "com.amazonaws.sqs#InvalidBatchEntryId": return [3 /*break*/, 6];
                    case "TooManyEntriesInBatchRequest": return [3 /*break*/, 8];
                    case "com.amazonaws.sqs#TooManyEntriesInBatchRequest": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryBatchEntryIdsNotDistinctResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryEmptyBatchRequestResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidBatchEntryIdResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyEntriesInBatchRequestResponse(parsedOutput, context)];
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
export var deserializeAws_queryDeleteQueueCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteQueueCommandError(output, context)];
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
var deserializeAws_queryDeleteQueueCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_queryGetQueueAttributesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetQueueAttributesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetQueueAttributesResult(data.GetQueueAttributesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetQueueAttributesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidAttributeName": return [3 /*break*/, 2];
                    case "com.amazonaws.sqs#InvalidAttributeName": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidAttributeNameResponse(parsedOutput, context)];
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
export var deserializeAws_queryGetQueueUrlCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetQueueUrlCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetQueueUrlResult(data.GetQueueUrlResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetQueueUrlCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "QueueDoesNotExist": return [3 /*break*/, 2];
                    case "com.amazonaws.sqs#QueueDoesNotExist": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryQueueDoesNotExistResponse(parsedOutput, context)];
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
export var deserializeAws_queryListDeadLetterSourceQueuesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListDeadLetterSourceQueuesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListDeadLetterSourceQueuesResult(data.ListDeadLetterSourceQueuesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListDeadLetterSourceQueuesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "QueueDoesNotExist": return [3 /*break*/, 2];
                    case "com.amazonaws.sqs#QueueDoesNotExist": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryQueueDoesNotExistResponse(parsedOutput, context)];
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
export var deserializeAws_queryListQueuesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListQueuesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListQueuesResult(data.ListQueuesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListQueuesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_queryListQueueTagsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListQueueTagsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListQueueTagsResult(data.ListQueueTagsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListQueueTagsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_queryPurgeQueueCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryPurgeQueueCommandError(output, context)];
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
var deserializeAws_queryPurgeQueueCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "PurgeQueueInProgress": return [3 /*break*/, 2];
                    case "com.amazonaws.sqs#PurgeQueueInProgress": return [3 /*break*/, 2];
                    case "QueueDoesNotExist": return [3 /*break*/, 4];
                    case "com.amazonaws.sqs#QueueDoesNotExist": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryPurgeQueueInProgressResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryQueueDoesNotExistResponse(parsedOutput, context)];
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
export var deserializeAws_queryReceiveMessageCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryReceiveMessageCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryReceiveMessageResult(data.ReceiveMessageResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryReceiveMessageCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "OverLimit": return [3 /*break*/, 2];
                    case "com.amazonaws.sqs#OverLimit": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryOverLimitResponse(parsedOutput, context)];
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
export var deserializeAws_queryRemovePermissionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryRemovePermissionCommandError(output, context)];
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
var deserializeAws_queryRemovePermissionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_querySendMessageCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_querySendMessageCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_querySendMessageResult(data.SendMessageResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_querySendMessageCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidMessageContents": return [3 /*break*/, 2];
                    case "com.amazonaws.sqs#InvalidMessageContents": return [3 /*break*/, 2];
                    case "UnsupportedOperation": return [3 /*break*/, 4];
                    case "com.amazonaws.sqs#UnsupportedOperation": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidMessageContentsResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryUnsupportedOperationResponse(parsedOutput, context)];
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
export var deserializeAws_querySendMessageBatchCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_querySendMessageBatchCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_querySendMessageBatchResult(data.SendMessageBatchResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_querySendMessageBatchCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BatchEntryIdsNotDistinct": return [3 /*break*/, 2];
                    case "com.amazonaws.sqs#BatchEntryIdsNotDistinct": return [3 /*break*/, 2];
                    case "BatchRequestTooLong": return [3 /*break*/, 4];
                    case "com.amazonaws.sqs#BatchRequestTooLong": return [3 /*break*/, 4];
                    case "EmptyBatchRequest": return [3 /*break*/, 6];
                    case "com.amazonaws.sqs#EmptyBatchRequest": return [3 /*break*/, 6];
                    case "InvalidBatchEntryId": return [3 /*break*/, 8];
                    case "com.amazonaws.sqs#InvalidBatchEntryId": return [3 /*break*/, 8];
                    case "TooManyEntriesInBatchRequest": return [3 /*break*/, 10];
                    case "com.amazonaws.sqs#TooManyEntriesInBatchRequest": return [3 /*break*/, 10];
                    case "UnsupportedOperation": return [3 /*break*/, 12];
                    case "com.amazonaws.sqs#UnsupportedOperation": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryBatchEntryIdsNotDistinctResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryBatchRequestTooLongResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryEmptyBatchRequestResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidBatchEntryIdResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyEntriesInBatchRequestResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryUnsupportedOperationResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_querySetQueueAttributesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_querySetQueueAttributesCommandError(output, context)];
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
var deserializeAws_querySetQueueAttributesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidAttributeName": return [3 /*break*/, 2];
                    case "com.amazonaws.sqs#InvalidAttributeName": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidAttributeNameResponse(parsedOutput, context)];
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
export var deserializeAws_queryTagQueueCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryTagQueueCommandError(output, context)];
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
var deserializeAws_queryTagQueueCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_queryUntagQueueCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUntagQueueCommandError(output, context)];
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
var deserializeAws_queryUntagQueueCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
var deserializeAws_queryBatchEntryIdsNotDistinctResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryBatchEntryIdsNotDistinct(body.Error, context);
        contents = __assign({ name: "BatchEntryIdsNotDistinct", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryBatchRequestTooLongResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryBatchRequestTooLong(body.Error, context);
        contents = __assign({ name: "BatchRequestTooLong", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryEmptyBatchRequestResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryEmptyBatchRequest(body.Error, context);
        contents = __assign({ name: "EmptyBatchRequest", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidAttributeNameResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidAttributeName(body.Error, context);
        contents = __assign({ name: "InvalidAttributeName", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidBatchEntryIdResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidBatchEntryId(body.Error, context);
        contents = __assign({ name: "InvalidBatchEntryId", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidIdFormatResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidIdFormat(body.Error, context);
        contents = __assign({ name: "InvalidIdFormat", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidMessageContentsResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidMessageContents(body.Error, context);
        contents = __assign({ name: "InvalidMessageContents", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryMessageNotInflightResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryMessageNotInflight(body.Error, context);
        contents = __assign({ name: "MessageNotInflight", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryOverLimitResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryOverLimit(body.Error, context);
        contents = __assign({ name: "OverLimit", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryPurgeQueueInProgressResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryPurgeQueueInProgress(body.Error, context);
        contents = __assign({ name: "PurgeQueueInProgress", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryQueueDeletedRecentlyResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryQueueDeletedRecently(body.Error, context);
        contents = __assign({ name: "QueueDeletedRecently", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryQueueDoesNotExistResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryQueueDoesNotExist(body.Error, context);
        contents = __assign({ name: "QueueDoesNotExist", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryQueueNameExistsResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryQueueNameExists(body.Error, context);
        contents = __assign({ name: "QueueNameExists", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryReceiptHandleIsInvalidResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryReceiptHandleIsInvalid(body.Error, context);
        contents = __assign({ name: "ReceiptHandleIsInvalid", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryTooManyEntriesInBatchRequestResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryTooManyEntriesInBatchRequest(body.Error, context);
        contents = __assign({ name: "TooManyEntriesInBatchRequest", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryUnsupportedOperationResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryUnsupportedOperation(body.Error, context);
        contents = __assign({ name: "UnsupportedOperation", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_queryActionNameList = function (input, context) {
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
var serializeAws_queryAddPermissionRequest = function (input, context) {
    var entries = {};
    if (input.QueueUrl !== undefined && input.QueueUrl !== null) {
        entries["QueueUrl"] = input.QueueUrl;
    }
    if (input.Label !== undefined && input.Label !== null) {
        entries["Label"] = input.Label;
    }
    if (input.AWSAccountIds !== undefined && input.AWSAccountIds !== null) {
        var memberEntries = serializeAws_queryAWSAccountIdList(input.AWSAccountIds, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "AWSAccountId." + key.substring(key.indexOf(".") + 1);
            entries[loc] = value;
        });
    }
    if (input.Actions !== undefined && input.Actions !== null) {
        var memberEntries = serializeAws_queryActionNameList(input.Actions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ActionName." + key.substring(key.indexOf(".") + 1);
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryAttributeNameList = function (input, context) {
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
var serializeAws_queryAWSAccountIdList = function (input, context) {
    var e_3, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_3 = __values(input), input_3_1 = input_3.next(); !input_3_1.done; input_3_1 = input_3.next()) {
            var entry = input_3_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
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
var serializeAws_queryBinaryList = function (input, context) {
    var e_4, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_4 = __values(input), input_4_1 = input_4.next(); !input_4_1.done; input_4_1 = input_4.next()) {
            var entry = input_4_1.value;
            if (entry === null) {
                continue;
            }
            entries["BinaryListValue." + counter] = context.base64Encoder(entry);
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
var serializeAws_queryChangeMessageVisibilityBatchRequest = function (input, context) {
    var entries = {};
    if (input.QueueUrl !== undefined && input.QueueUrl !== null) {
        entries["QueueUrl"] = input.QueueUrl;
    }
    if (input.Entries !== undefined && input.Entries !== null) {
        var memberEntries = serializeAws_queryChangeMessageVisibilityBatchRequestEntryList(input.Entries, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ChangeMessageVisibilityBatchRequestEntry." + key.substring(key.indexOf(".") + 1);
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryChangeMessageVisibilityBatchRequestEntry = function (input, context) {
    var entries = {};
    if (input.Id !== undefined && input.Id !== null) {
        entries["Id"] = input.Id;
    }
    if (input.ReceiptHandle !== undefined && input.ReceiptHandle !== null) {
        entries["ReceiptHandle"] = input.ReceiptHandle;
    }
    if (input.VisibilityTimeout !== undefined && input.VisibilityTimeout !== null) {
        entries["VisibilityTimeout"] = input.VisibilityTimeout;
    }
    return entries;
};
var serializeAws_queryChangeMessageVisibilityBatchRequestEntryList = function (input, context) {
    var e_5, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_5 = __values(input), input_5_1 = input_5.next(); !input_5_1.done; input_5_1 = input_5.next()) {
            var entry = input_5_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryChangeMessageVisibilityBatchRequestEntry(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["member." + counter + "." + key] = value;
            });
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
var serializeAws_queryChangeMessageVisibilityRequest = function (input, context) {
    var entries = {};
    if (input.QueueUrl !== undefined && input.QueueUrl !== null) {
        entries["QueueUrl"] = input.QueueUrl;
    }
    if (input.ReceiptHandle !== undefined && input.ReceiptHandle !== null) {
        entries["ReceiptHandle"] = input.ReceiptHandle;
    }
    if (input.VisibilityTimeout !== undefined && input.VisibilityTimeout !== null) {
        entries["VisibilityTimeout"] = input.VisibilityTimeout;
    }
    return entries;
};
var serializeAws_queryCreateQueueRequest = function (input, context) {
    var entries = {};
    if (input.QueueName !== undefined && input.QueueName !== null) {
        entries["QueueName"] = input.QueueName;
    }
    if (input.tags !== undefined && input.tags !== null) {
        var memberEntries = serializeAws_queryTagMap(input.tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tag." + key.substring(key.indexOf(".") + 1);
            entries[loc] = value;
        });
    }
    if (input.Attributes !== undefined && input.Attributes !== null) {
        var memberEntries = serializeAws_queryQueueAttributeMap(input.Attributes, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Attribute." + key.substring(key.indexOf(".") + 1);
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDeleteMessageBatchRequest = function (input, context) {
    var entries = {};
    if (input.QueueUrl !== undefined && input.QueueUrl !== null) {
        entries["QueueUrl"] = input.QueueUrl;
    }
    if (input.Entries !== undefined && input.Entries !== null) {
        var memberEntries = serializeAws_queryDeleteMessageBatchRequestEntryList(input.Entries, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "DeleteMessageBatchRequestEntry." + key.substring(key.indexOf(".") + 1);
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDeleteMessageBatchRequestEntry = function (input, context) {
    var entries = {};
    if (input.Id !== undefined && input.Id !== null) {
        entries["Id"] = input.Id;
    }
    if (input.ReceiptHandle !== undefined && input.ReceiptHandle !== null) {
        entries["ReceiptHandle"] = input.ReceiptHandle;
    }
    return entries;
};
var serializeAws_queryDeleteMessageBatchRequestEntryList = function (input, context) {
    var e_6, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_6 = __values(input), input_6_1 = input_6.next(); !input_6_1.done; input_6_1 = input_6.next()) {
            var entry = input_6_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryDeleteMessageBatchRequestEntry(entry, context);
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
var serializeAws_queryDeleteMessageRequest = function (input, context) {
    var entries = {};
    if (input.QueueUrl !== undefined && input.QueueUrl !== null) {
        entries["QueueUrl"] = input.QueueUrl;
    }
    if (input.ReceiptHandle !== undefined && input.ReceiptHandle !== null) {
        entries["ReceiptHandle"] = input.ReceiptHandle;
    }
    return entries;
};
var serializeAws_queryDeleteQueueRequest = function (input, context) {
    var entries = {};
    if (input.QueueUrl !== undefined && input.QueueUrl !== null) {
        entries["QueueUrl"] = input.QueueUrl;
    }
    return entries;
};
var serializeAws_queryGetQueueAttributesRequest = function (input, context) {
    var entries = {};
    if (input.QueueUrl !== undefined && input.QueueUrl !== null) {
        entries["QueueUrl"] = input.QueueUrl;
    }
    if (input.AttributeNames !== undefined && input.AttributeNames !== null) {
        var memberEntries = serializeAws_queryAttributeNameList(input.AttributeNames, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "AttributeName." + key.substring(key.indexOf(".") + 1);
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryGetQueueUrlRequest = function (input, context) {
    var entries = {};
    if (input.QueueName !== undefined && input.QueueName !== null) {
        entries["QueueName"] = input.QueueName;
    }
    if (input.QueueOwnerAWSAccountId !== undefined && input.QueueOwnerAWSAccountId !== null) {
        entries["QueueOwnerAWSAccountId"] = input.QueueOwnerAWSAccountId;
    }
    return entries;
};
var serializeAws_queryListDeadLetterSourceQueuesRequest = function (input, context) {
    var entries = {};
    if (input.QueueUrl !== undefined && input.QueueUrl !== null) {
        entries["QueueUrl"] = input.QueueUrl;
    }
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.MaxResults !== undefined && input.MaxResults !== null) {
        entries["MaxResults"] = input.MaxResults;
    }
    return entries;
};
var serializeAws_queryListQueuesRequest = function (input, context) {
    var entries = {};
    if (input.QueueNamePrefix !== undefined && input.QueueNamePrefix !== null) {
        entries["QueueNamePrefix"] = input.QueueNamePrefix;
    }
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.MaxResults !== undefined && input.MaxResults !== null) {
        entries["MaxResults"] = input.MaxResults;
    }
    return entries;
};
var serializeAws_queryListQueueTagsRequest = function (input, context) {
    var entries = {};
    if (input.QueueUrl !== undefined && input.QueueUrl !== null) {
        entries["QueueUrl"] = input.QueueUrl;
    }
    return entries;
};
var serializeAws_queryMessageAttributeNameList = function (input, context) {
    var e_7, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_7 = __values(input), input_7_1 = input_7.next(); !input_7_1.done; input_7_1 = input_7.next()) {
            var entry = input_7_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
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
var serializeAws_queryMessageAttributeValue = function (input, context) {
    var entries = {};
    if (input.StringValue !== undefined && input.StringValue !== null) {
        entries["StringValue"] = input.StringValue;
    }
    if (input.BinaryValue !== undefined && input.BinaryValue !== null) {
        entries["BinaryValue"] = context.base64Encoder(input.BinaryValue);
    }
    if (input.StringListValues !== undefined && input.StringListValues !== null) {
        var memberEntries = serializeAws_queryStringList(input.StringListValues, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "StringListValue." + key.substring(key.indexOf(".") + 1);
            entries[loc] = value;
        });
    }
    if (input.BinaryListValues !== undefined && input.BinaryListValues !== null) {
        var memberEntries = serializeAws_queryBinaryList(input.BinaryListValues, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "BinaryListValue." + key.substring(key.indexOf(".") + 1);
            entries[loc] = value;
        });
    }
    if (input.DataType !== undefined && input.DataType !== null) {
        entries["DataType"] = input.DataType;
    }
    return entries;
};
var serializeAws_queryMessageBodyAttributeMap = function (input, context) {
    var entries = {};
    var counter = 1;
    Object.keys(input)
        .filter(function (key) { return input[key] != null; })
        .forEach(function (key) {
        entries["entry." + counter + ".Name"] = key;
        var memberEntries = serializeAws_queryMessageAttributeValue(input[key], context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            entries["entry." + counter + ".Value." + key] = value;
        });
        counter++;
    });
    return entries;
};
var serializeAws_queryMessageBodySystemAttributeMap = function (input, context) {
    var entries = {};
    var counter = 1;
    Object.keys(input)
        .filter(function (key) { return input[key] != null; })
        .forEach(function (key) {
        entries["entry." + counter + ".Name"] = key;
        var memberEntries = serializeAws_queryMessageSystemAttributeValue(input[key], context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            entries["entry." + counter + ".Value." + key] = value;
        });
        counter++;
    });
    return entries;
};
var serializeAws_queryMessageSystemAttributeValue = function (input, context) {
    var entries = {};
    if (input.StringValue !== undefined && input.StringValue !== null) {
        entries["StringValue"] = input.StringValue;
    }
    if (input.BinaryValue !== undefined && input.BinaryValue !== null) {
        entries["BinaryValue"] = context.base64Encoder(input.BinaryValue);
    }
    if (input.StringListValues !== undefined && input.StringListValues !== null) {
        var memberEntries = serializeAws_queryStringList(input.StringListValues, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "StringListValue." + key.substring(key.indexOf(".") + 1);
            entries[loc] = value;
        });
    }
    if (input.BinaryListValues !== undefined && input.BinaryListValues !== null) {
        var memberEntries = serializeAws_queryBinaryList(input.BinaryListValues, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "BinaryListValue." + key.substring(key.indexOf(".") + 1);
            entries[loc] = value;
        });
    }
    if (input.DataType !== undefined && input.DataType !== null) {
        entries["DataType"] = input.DataType;
    }
    return entries;
};
var serializeAws_queryPurgeQueueRequest = function (input, context) {
    var entries = {};
    if (input.QueueUrl !== undefined && input.QueueUrl !== null) {
        entries["QueueUrl"] = input.QueueUrl;
    }
    return entries;
};
var serializeAws_queryQueueAttributeMap = function (input, context) {
    var entries = {};
    var counter = 1;
    Object.keys(input)
        .filter(function (key) { return input[key] != null; })
        .forEach(function (key) {
        entries["entry." + counter + ".Name"] = key;
        entries["entry." + counter + ".Value"] = input[key];
        counter++;
    });
    return entries;
};
var serializeAws_queryReceiveMessageRequest = function (input, context) {
    var entries = {};
    if (input.QueueUrl !== undefined && input.QueueUrl !== null) {
        entries["QueueUrl"] = input.QueueUrl;
    }
    if (input.AttributeNames !== undefined && input.AttributeNames !== null) {
        var memberEntries = serializeAws_queryAttributeNameList(input.AttributeNames, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "AttributeName." + key.substring(key.indexOf(".") + 1);
            entries[loc] = value;
        });
    }
    if (input.MessageAttributeNames !== undefined && input.MessageAttributeNames !== null) {
        var memberEntries = serializeAws_queryMessageAttributeNameList(input.MessageAttributeNames, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "MessageAttributeName." + key.substring(key.indexOf(".") + 1);
            entries[loc] = value;
        });
    }
    if (input.MaxNumberOfMessages !== undefined && input.MaxNumberOfMessages !== null) {
        entries["MaxNumberOfMessages"] = input.MaxNumberOfMessages;
    }
    if (input.VisibilityTimeout !== undefined && input.VisibilityTimeout !== null) {
        entries["VisibilityTimeout"] = input.VisibilityTimeout;
    }
    if (input.WaitTimeSeconds !== undefined && input.WaitTimeSeconds !== null) {
        entries["WaitTimeSeconds"] = input.WaitTimeSeconds;
    }
    if (input.ReceiveRequestAttemptId !== undefined && input.ReceiveRequestAttemptId !== null) {
        entries["ReceiveRequestAttemptId"] = input.ReceiveRequestAttemptId;
    }
    return entries;
};
var serializeAws_queryRemovePermissionRequest = function (input, context) {
    var entries = {};
    if (input.QueueUrl !== undefined && input.QueueUrl !== null) {
        entries["QueueUrl"] = input.QueueUrl;
    }
    if (input.Label !== undefined && input.Label !== null) {
        entries["Label"] = input.Label;
    }
    return entries;
};
var serializeAws_querySendMessageBatchRequest = function (input, context) {
    var entries = {};
    if (input.QueueUrl !== undefined && input.QueueUrl !== null) {
        entries["QueueUrl"] = input.QueueUrl;
    }
    if (input.Entries !== undefined && input.Entries !== null) {
        var memberEntries = serializeAws_querySendMessageBatchRequestEntryList(input.Entries, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "SendMessageBatchRequestEntry." + key.substring(key.indexOf(".") + 1);
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_querySendMessageBatchRequestEntry = function (input, context) {
    var entries = {};
    if (input.Id !== undefined && input.Id !== null) {
        entries["Id"] = input.Id;
    }
    if (input.MessageBody !== undefined && input.MessageBody !== null) {
        entries["MessageBody"] = input.MessageBody;
    }
    if (input.DelaySeconds !== undefined && input.DelaySeconds !== null) {
        entries["DelaySeconds"] = input.DelaySeconds;
    }
    if (input.MessageAttributes !== undefined && input.MessageAttributes !== null) {
        var memberEntries = serializeAws_queryMessageBodyAttributeMap(input.MessageAttributes, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "MessageAttribute." + key.substring(key.indexOf(".") + 1);
            entries[loc] = value;
        });
    }
    if (input.MessageSystemAttributes !== undefined && input.MessageSystemAttributes !== null) {
        var memberEntries = serializeAws_queryMessageBodySystemAttributeMap(input.MessageSystemAttributes, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "MessageSystemAttribute." + key.substring(key.indexOf(".") + 1);
            entries[loc] = value;
        });
    }
    if (input.MessageDeduplicationId !== undefined && input.MessageDeduplicationId !== null) {
        entries["MessageDeduplicationId"] = input.MessageDeduplicationId;
    }
    if (input.MessageGroupId !== undefined && input.MessageGroupId !== null) {
        entries["MessageGroupId"] = input.MessageGroupId;
    }
    return entries;
};
var serializeAws_querySendMessageBatchRequestEntryList = function (input, context) {
    var e_8, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_8 = __values(input), input_8_1 = input_8.next(); !input_8_1.done; input_8_1 = input_8.next()) {
            var entry = input_8_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_querySendMessageBatchRequestEntry(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["member." + counter + "." + key] = value;
            });
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
var serializeAws_querySendMessageRequest = function (input, context) {
    var entries = {};
    if (input.QueueUrl !== undefined && input.QueueUrl !== null) {
        entries["QueueUrl"] = input.QueueUrl;
    }
    if (input.MessageBody !== undefined && input.MessageBody !== null) {
        entries["MessageBody"] = input.MessageBody;
    }
    if (input.DelaySeconds !== undefined && input.DelaySeconds !== null) {
        entries["DelaySeconds"] = input.DelaySeconds;
    }
    if (input.MessageAttributes !== undefined && input.MessageAttributes !== null) {
        var memberEntries = serializeAws_queryMessageBodyAttributeMap(input.MessageAttributes, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "MessageAttribute." + key.substring(key.indexOf(".") + 1);
            entries[loc] = value;
        });
    }
    if (input.MessageSystemAttributes !== undefined && input.MessageSystemAttributes !== null) {
        var memberEntries = serializeAws_queryMessageBodySystemAttributeMap(input.MessageSystemAttributes, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "MessageSystemAttribute." + key.substring(key.indexOf(".") + 1);
            entries[loc] = value;
        });
    }
    if (input.MessageDeduplicationId !== undefined && input.MessageDeduplicationId !== null) {
        entries["MessageDeduplicationId"] = input.MessageDeduplicationId;
    }
    if (input.MessageGroupId !== undefined && input.MessageGroupId !== null) {
        entries["MessageGroupId"] = input.MessageGroupId;
    }
    return entries;
};
var serializeAws_querySetQueueAttributesRequest = function (input, context) {
    var entries = {};
    if (input.QueueUrl !== undefined && input.QueueUrl !== null) {
        entries["QueueUrl"] = input.QueueUrl;
    }
    if (input.Attributes !== undefined && input.Attributes !== null) {
        var memberEntries = serializeAws_queryQueueAttributeMap(input.Attributes, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Attribute." + key.substring(key.indexOf(".") + 1);
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryStringList = function (input, context) {
    var e_9, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_9 = __values(input), input_9_1 = input_9.next(); !input_9_1.done; input_9_1 = input_9.next()) {
            var entry = input_9_1.value;
            if (entry === null) {
                continue;
            }
            entries["StringListValue." + counter] = entry;
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
var serializeAws_queryTagKeyList = function (input, context) {
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
var serializeAws_queryTagMap = function (input, context) {
    var entries = {};
    var counter = 1;
    Object.keys(input)
        .filter(function (key) { return input[key] != null; })
        .forEach(function (key) {
        entries["entry." + counter + ".Key"] = key;
        entries["entry." + counter + ".Value"] = input[key];
        counter++;
    });
    return entries;
};
var serializeAws_queryTagQueueRequest = function (input, context) {
    var entries = {};
    if (input.QueueUrl !== undefined && input.QueueUrl !== null) {
        entries["QueueUrl"] = input.QueueUrl;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_queryTagMap(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tag." + key.substring(key.indexOf(".") + 1);
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryUntagQueueRequest = function (input, context) {
    var entries = {};
    if (input.QueueUrl !== undefined && input.QueueUrl !== null) {
        entries["QueueUrl"] = input.QueueUrl;
    }
    if (input.TagKeys !== undefined && input.TagKeys !== null) {
        var memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TagKey." + key.substring(key.indexOf(".") + 1);
            entries[loc] = value;
        });
    }
    return entries;
};
var deserializeAws_queryBatchEntryIdsNotDistinct = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryBatchRequestTooLong = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryBatchResultErrorEntry = function (output, context) {
    var contents = {
        Id: undefined,
        SenderFault: undefined,
        Code: undefined,
        Message: undefined,
    };
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["SenderFault"] !== undefined) {
        contents.SenderFault = output["SenderFault"] == "true";
    }
    if (output["Code"] !== undefined) {
        contents.Code = output["Code"];
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryBatchResultErrorEntryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryBatchResultErrorEntry(entry, context);
    });
};
var deserializeAws_queryBinaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return context.base64Decoder(entry);
    });
};
var deserializeAws_queryChangeMessageVisibilityBatchResult = function (output, context) {
    var contents = {
        Successful: undefined,
        Failed: undefined,
    };
    if (output.ChangeMessageVisibilityBatchResultEntry === "") {
        contents.Successful = [];
    }
    if (output["ChangeMessageVisibilityBatchResultEntry"] !== undefined) {
        contents.Successful = deserializeAws_queryChangeMessageVisibilityBatchResultEntryList(__getArrayIfSingleItem(output["ChangeMessageVisibilityBatchResultEntry"]), context);
    }
    if (output.BatchResultErrorEntry === "") {
        contents.Failed = [];
    }
    if (output["BatchResultErrorEntry"] !== undefined) {
        contents.Failed = deserializeAws_queryBatchResultErrorEntryList(__getArrayIfSingleItem(output["BatchResultErrorEntry"]), context);
    }
    return contents;
};
var deserializeAws_queryChangeMessageVisibilityBatchResultEntry = function (output, context) {
    var contents = {
        Id: undefined,
    };
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    return contents;
};
var deserializeAws_queryChangeMessageVisibilityBatchResultEntryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryChangeMessageVisibilityBatchResultEntry(entry, context);
    });
};
var deserializeAws_queryCreateQueueResult = function (output, context) {
    var contents = {
        QueueUrl: undefined,
    };
    if (output["QueueUrl"] !== undefined) {
        contents.QueueUrl = output["QueueUrl"];
    }
    return contents;
};
var deserializeAws_queryDeleteMessageBatchResult = function (output, context) {
    var contents = {
        Successful: undefined,
        Failed: undefined,
    };
    if (output.DeleteMessageBatchResultEntry === "") {
        contents.Successful = [];
    }
    if (output["DeleteMessageBatchResultEntry"] !== undefined) {
        contents.Successful = deserializeAws_queryDeleteMessageBatchResultEntryList(__getArrayIfSingleItem(output["DeleteMessageBatchResultEntry"]), context);
    }
    if (output.BatchResultErrorEntry === "") {
        contents.Failed = [];
    }
    if (output["BatchResultErrorEntry"] !== undefined) {
        contents.Failed = deserializeAws_queryBatchResultErrorEntryList(__getArrayIfSingleItem(output["BatchResultErrorEntry"]), context);
    }
    return contents;
};
var deserializeAws_queryDeleteMessageBatchResultEntry = function (output, context) {
    var contents = {
        Id: undefined,
    };
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    return contents;
};
var deserializeAws_queryDeleteMessageBatchResultEntryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDeleteMessageBatchResultEntry(entry, context);
    });
};
var deserializeAws_queryEmptyBatchRequest = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryGetQueueAttributesResult = function (output, context) {
    var contents = {
        Attributes: undefined,
    };
    if (output.Attribute === "") {
        contents.Attributes = {};
    }
    if (output["Attribute"] !== undefined) {
        contents.Attributes = deserializeAws_queryQueueAttributeMap(__getArrayIfSingleItem(output["Attribute"]), context);
    }
    return contents;
};
var deserializeAws_queryGetQueueUrlResult = function (output, context) {
    var contents = {
        QueueUrl: undefined,
    };
    if (output["QueueUrl"] !== undefined) {
        contents.QueueUrl = output["QueueUrl"];
    }
    return contents;
};
var deserializeAws_queryInvalidAttributeName = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryInvalidBatchEntryId = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryInvalidIdFormat = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryInvalidMessageContents = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryListDeadLetterSourceQueuesResult = function (output, context) {
    var contents = {
        queueUrls: undefined,
        NextToken: undefined,
    };
    if (output.QueueUrl === "") {
        contents.queueUrls = [];
    }
    if (output["QueueUrl"] !== undefined) {
        contents.queueUrls = deserializeAws_queryQueueUrlList(__getArrayIfSingleItem(output["QueueUrl"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
var deserializeAws_queryListQueuesResult = function (output, context) {
    var contents = {
        NextToken: undefined,
        QueueUrls: undefined,
    };
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    if (output.QueueUrl === "") {
        contents.QueueUrls = [];
    }
    if (output["QueueUrl"] !== undefined) {
        contents.QueueUrls = deserializeAws_queryQueueUrlList(__getArrayIfSingleItem(output["QueueUrl"]), context);
    }
    return contents;
};
var deserializeAws_queryListQueueTagsResult = function (output, context) {
    var contents = {
        Tags: undefined,
    };
    if (output.Tag === "") {
        contents.Tags = {};
    }
    if (output["Tag"] !== undefined) {
        contents.Tags = deserializeAws_queryTagMap(__getArrayIfSingleItem(output["Tag"]), context);
    }
    return contents;
};
var deserializeAws_queryMessage = function (output, context) {
    var contents = {
        MessageId: undefined,
        ReceiptHandle: undefined,
        MD5OfBody: undefined,
        Body: undefined,
        Attributes: undefined,
        MD5OfMessageAttributes: undefined,
        MessageAttributes: undefined,
    };
    if (output["MessageId"] !== undefined) {
        contents.MessageId = output["MessageId"];
    }
    if (output["ReceiptHandle"] !== undefined) {
        contents.ReceiptHandle = output["ReceiptHandle"];
    }
    if (output["MD5OfBody"] !== undefined) {
        contents.MD5OfBody = output["MD5OfBody"];
    }
    if (output["Body"] !== undefined) {
        contents.Body = output["Body"];
    }
    if (output.Attribute === "") {
        contents.Attributes = {};
    }
    if (output["Attribute"] !== undefined) {
        contents.Attributes = deserializeAws_queryMessageSystemAttributeMap(__getArrayIfSingleItem(output["Attribute"]), context);
    }
    if (output["MD5OfMessageAttributes"] !== undefined) {
        contents.MD5OfMessageAttributes = output["MD5OfMessageAttributes"];
    }
    if (output.MessageAttribute === "") {
        contents.MessageAttributes = {};
    }
    if (output["MessageAttribute"] !== undefined) {
        contents.MessageAttributes = deserializeAws_queryMessageBodyAttributeMap(__getArrayIfSingleItem(output["MessageAttribute"]), context);
    }
    return contents;
};
var deserializeAws_queryMessageAttributeValue = function (output, context) {
    var contents = {
        StringValue: undefined,
        BinaryValue: undefined,
        StringListValues: undefined,
        BinaryListValues: undefined,
        DataType: undefined,
    };
    if (output["StringValue"] !== undefined) {
        contents.StringValue = output["StringValue"];
    }
    if (output["BinaryValue"] !== undefined) {
        contents.BinaryValue = context.base64Decoder(output["BinaryValue"]);
    }
    if (output.StringListValue === "") {
        contents.StringListValues = [];
    }
    if (output["StringListValue"] !== undefined) {
        contents.StringListValues = deserializeAws_queryStringList(__getArrayIfSingleItem(output["StringListValue"]), context);
    }
    if (output.BinaryListValue === "") {
        contents.BinaryListValues = [];
    }
    if (output["BinaryListValue"] !== undefined) {
        contents.BinaryListValues = deserializeAws_queryBinaryList(__getArrayIfSingleItem(output["BinaryListValue"]), context);
    }
    if (output["DataType"] !== undefined) {
        contents.DataType = output["DataType"];
    }
    return contents;
};
var deserializeAws_queryMessageBodyAttributeMap = function (output, context) {
    return output.reduce(function (acc, pair) {
        var _a;
        if (pair["Value"] === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_a = {}, _a[pair["Name"]] = deserializeAws_queryMessageAttributeValue(pair["Value"], context), _a));
    }, {});
};
var deserializeAws_queryMessageList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryMessage(entry, context);
    });
};
var deserializeAws_queryMessageNotInflight = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryMessageSystemAttributeMap = function (output, context) {
    return output.reduce(function (acc, pair) {
        var _a;
        if (pair["Value"] === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_a = {}, _a[pair["Name"]] = pair["Value"], _a));
    }, {});
};
var deserializeAws_queryOverLimit = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryPurgeQueueInProgress = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryQueueAttributeMap = function (output, context) {
    return output.reduce(function (acc, pair) {
        var _a;
        if (pair["Value"] === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_a = {}, _a[pair["Name"]] = pair["Value"], _a));
    }, {});
};
var deserializeAws_queryQueueDeletedRecently = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryQueueDoesNotExist = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryQueueNameExists = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryQueueUrlList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryReceiptHandleIsInvalid = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryReceiveMessageResult = function (output, context) {
    var contents = {
        Messages: undefined,
    };
    if (output.Message === "") {
        contents.Messages = [];
    }
    if (output["Message"] !== undefined) {
        contents.Messages = deserializeAws_queryMessageList(__getArrayIfSingleItem(output["Message"]), context);
    }
    return contents;
};
var deserializeAws_querySendMessageBatchResult = function (output, context) {
    var contents = {
        Successful: undefined,
        Failed: undefined,
    };
    if (output.SendMessageBatchResultEntry === "") {
        contents.Successful = [];
    }
    if (output["SendMessageBatchResultEntry"] !== undefined) {
        contents.Successful = deserializeAws_querySendMessageBatchResultEntryList(__getArrayIfSingleItem(output["SendMessageBatchResultEntry"]), context);
    }
    if (output.BatchResultErrorEntry === "") {
        contents.Failed = [];
    }
    if (output["BatchResultErrorEntry"] !== undefined) {
        contents.Failed = deserializeAws_queryBatchResultErrorEntryList(__getArrayIfSingleItem(output["BatchResultErrorEntry"]), context);
    }
    return contents;
};
var deserializeAws_querySendMessageBatchResultEntry = function (output, context) {
    var contents = {
        Id: undefined,
        MessageId: undefined,
        MD5OfMessageBody: undefined,
        MD5OfMessageAttributes: undefined,
        MD5OfMessageSystemAttributes: undefined,
        SequenceNumber: undefined,
    };
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["MessageId"] !== undefined) {
        contents.MessageId = output["MessageId"];
    }
    if (output["MD5OfMessageBody"] !== undefined) {
        contents.MD5OfMessageBody = output["MD5OfMessageBody"];
    }
    if (output["MD5OfMessageAttributes"] !== undefined) {
        contents.MD5OfMessageAttributes = output["MD5OfMessageAttributes"];
    }
    if (output["MD5OfMessageSystemAttributes"] !== undefined) {
        contents.MD5OfMessageSystemAttributes = output["MD5OfMessageSystemAttributes"];
    }
    if (output["SequenceNumber"] !== undefined) {
        contents.SequenceNumber = output["SequenceNumber"];
    }
    return contents;
};
var deserializeAws_querySendMessageBatchResultEntryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_querySendMessageBatchResultEntry(entry, context);
    });
};
var deserializeAws_querySendMessageResult = function (output, context) {
    var contents = {
        MD5OfMessageBody: undefined,
        MD5OfMessageAttributes: undefined,
        MD5OfMessageSystemAttributes: undefined,
        MessageId: undefined,
        SequenceNumber: undefined,
    };
    if (output["MD5OfMessageBody"] !== undefined) {
        contents.MD5OfMessageBody = output["MD5OfMessageBody"];
    }
    if (output["MD5OfMessageAttributes"] !== undefined) {
        contents.MD5OfMessageAttributes = output["MD5OfMessageAttributes"];
    }
    if (output["MD5OfMessageSystemAttributes"] !== undefined) {
        contents.MD5OfMessageSystemAttributes = output["MD5OfMessageSystemAttributes"];
    }
    if (output["MessageId"] !== undefined) {
        contents.MessageId = output["MessageId"];
    }
    if (output["SequenceNumber"] !== undefined) {
        contents.SequenceNumber = output["SequenceNumber"];
    }
    return contents;
};
var deserializeAws_queryStringList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryTagMap = function (output, context) {
    return output.reduce(function (acc, pair) {
        var _a;
        if (pair["Value"] === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_a = {}, _a[pair["Key"]] = pair["Value"], _a));
    }, {});
};
var deserializeAws_queryTooManyEntriesInBatchRequest = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryUnsupportedOperation = function (output, context) {
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