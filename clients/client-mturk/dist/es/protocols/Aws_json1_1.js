import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_json1_1AcceptQualificationRequestCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "MTurkRequesterServiceV20170117.AcceptQualificationRequest",
        };
        body = JSON.stringify(serializeAws_json1_1AcceptQualificationRequestRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ApproveAssignmentCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "MTurkRequesterServiceV20170117.ApproveAssignment",
        };
        body = JSON.stringify(serializeAws_json1_1ApproveAssignmentRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AssociateQualificationWithWorkerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "MTurkRequesterServiceV20170117.AssociateQualificationWithWorker",
        };
        body = JSON.stringify(serializeAws_json1_1AssociateQualificationWithWorkerRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateAdditionalAssignmentsForHITCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "MTurkRequesterServiceV20170117.CreateAdditionalAssignmentsForHIT",
        };
        body = JSON.stringify(serializeAws_json1_1CreateAdditionalAssignmentsForHITRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateHITCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "MTurkRequesterServiceV20170117.CreateHIT",
        };
        body = JSON.stringify(serializeAws_json1_1CreateHITRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateHITTypeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "MTurkRequesterServiceV20170117.CreateHITType",
        };
        body = JSON.stringify(serializeAws_json1_1CreateHITTypeRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateHITWithHITTypeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "MTurkRequesterServiceV20170117.CreateHITWithHITType",
        };
        body = JSON.stringify(serializeAws_json1_1CreateHITWithHITTypeRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateQualificationTypeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "MTurkRequesterServiceV20170117.CreateQualificationType",
        };
        body = JSON.stringify(serializeAws_json1_1CreateQualificationTypeRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateWorkerBlockCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "MTurkRequesterServiceV20170117.CreateWorkerBlock",
        };
        body = JSON.stringify(serializeAws_json1_1CreateWorkerBlockRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteHITCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "MTurkRequesterServiceV20170117.DeleteHIT",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteHITRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteQualificationTypeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "MTurkRequesterServiceV20170117.DeleteQualificationType",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteQualificationTypeRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteWorkerBlockCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "MTurkRequesterServiceV20170117.DeleteWorkerBlock",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteWorkerBlockRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DisassociateQualificationFromWorkerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker",
        };
        body = JSON.stringify(serializeAws_json1_1DisassociateQualificationFromWorkerRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetAccountBalanceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "MTurkRequesterServiceV20170117.GetAccountBalance",
        };
        body = JSON.stringify(serializeAws_json1_1GetAccountBalanceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetAssignmentCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "MTurkRequesterServiceV20170117.GetAssignment",
        };
        body = JSON.stringify(serializeAws_json1_1GetAssignmentRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetFileUploadURLCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "MTurkRequesterServiceV20170117.GetFileUploadURL",
        };
        body = JSON.stringify(serializeAws_json1_1GetFileUploadURLRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetHITCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "MTurkRequesterServiceV20170117.GetHIT",
        };
        body = JSON.stringify(serializeAws_json1_1GetHITRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetQualificationScoreCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "MTurkRequesterServiceV20170117.GetQualificationScore",
        };
        body = JSON.stringify(serializeAws_json1_1GetQualificationScoreRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetQualificationTypeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "MTurkRequesterServiceV20170117.GetQualificationType",
        };
        body = JSON.stringify(serializeAws_json1_1GetQualificationTypeRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListAssignmentsForHITCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "MTurkRequesterServiceV20170117.ListAssignmentsForHIT",
        };
        body = JSON.stringify(serializeAws_json1_1ListAssignmentsForHITRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListBonusPaymentsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "MTurkRequesterServiceV20170117.ListBonusPayments",
        };
        body = JSON.stringify(serializeAws_json1_1ListBonusPaymentsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListHITsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "MTurkRequesterServiceV20170117.ListHITs",
        };
        body = JSON.stringify(serializeAws_json1_1ListHITsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListHITsForQualificationTypeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "MTurkRequesterServiceV20170117.ListHITsForQualificationType",
        };
        body = JSON.stringify(serializeAws_json1_1ListHITsForQualificationTypeRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListQualificationRequestsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "MTurkRequesterServiceV20170117.ListQualificationRequests",
        };
        body = JSON.stringify(serializeAws_json1_1ListQualificationRequestsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListQualificationTypesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "MTurkRequesterServiceV20170117.ListQualificationTypes",
        };
        body = JSON.stringify(serializeAws_json1_1ListQualificationTypesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListReviewableHITsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "MTurkRequesterServiceV20170117.ListReviewableHITs",
        };
        body = JSON.stringify(serializeAws_json1_1ListReviewableHITsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListReviewPolicyResultsForHITCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT",
        };
        body = JSON.stringify(serializeAws_json1_1ListReviewPolicyResultsForHITRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListWorkerBlocksCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "MTurkRequesterServiceV20170117.ListWorkerBlocks",
        };
        body = JSON.stringify(serializeAws_json1_1ListWorkerBlocksRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListWorkersWithQualificationTypeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "MTurkRequesterServiceV20170117.ListWorkersWithQualificationType",
        };
        body = JSON.stringify(serializeAws_json1_1ListWorkersWithQualificationTypeRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1NotifyWorkersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "MTurkRequesterServiceV20170117.NotifyWorkers",
        };
        body = JSON.stringify(serializeAws_json1_1NotifyWorkersRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1RejectAssignmentCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "MTurkRequesterServiceV20170117.RejectAssignment",
        };
        body = JSON.stringify(serializeAws_json1_1RejectAssignmentRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1RejectQualificationRequestCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "MTurkRequesterServiceV20170117.RejectQualificationRequest",
        };
        body = JSON.stringify(serializeAws_json1_1RejectQualificationRequestRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1SendBonusCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "MTurkRequesterServiceV20170117.SendBonus",
        };
        body = JSON.stringify(serializeAws_json1_1SendBonusRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1SendTestEventNotificationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "MTurkRequesterServiceV20170117.SendTestEventNotification",
        };
        body = JSON.stringify(serializeAws_json1_1SendTestEventNotificationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateExpirationForHITCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "MTurkRequesterServiceV20170117.UpdateExpirationForHIT",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateExpirationForHITRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateHITReviewStatusCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "MTurkRequesterServiceV20170117.UpdateHITReviewStatus",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateHITReviewStatusRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateHITTypeOfHITCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "MTurkRequesterServiceV20170117.UpdateHITTypeOfHIT",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateHITTypeOfHITRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateNotificationSettingsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "MTurkRequesterServiceV20170117.UpdateNotificationSettings",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateNotificationSettingsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateQualificationTypeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "MTurkRequesterServiceV20170117.UpdateQualificationType",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateQualificationTypeRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_json1_1AcceptQualificationRequestCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AcceptQualificationRequestCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AcceptQualificationRequestResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AcceptQualificationRequestCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "RequestError": return [3 /*break*/, 2];
                    case "com.amazonaws.mturk#RequestError": return [3 /*break*/, 2];
                    case "ServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.mturk#ServiceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ApproveAssignmentCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ApproveAssignmentCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ApproveAssignmentResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ApproveAssignmentCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "RequestError": return [3 /*break*/, 2];
                    case "com.amazonaws.mturk#RequestError": return [3 /*break*/, 2];
                    case "ServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.mturk#ServiceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1AssociateQualificationWithWorkerCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AssociateQualificationWithWorkerCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AssociateQualificationWithWorkerResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AssociateQualificationWithWorkerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "RequestError": return [3 /*break*/, 2];
                    case "com.amazonaws.mturk#RequestError": return [3 /*break*/, 2];
                    case "ServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.mturk#ServiceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateAdditionalAssignmentsForHITCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateAdditionalAssignmentsForHITCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateAdditionalAssignmentsForHITResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateAdditionalAssignmentsForHITCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "RequestError": return [3 /*break*/, 2];
                    case "com.amazonaws.mturk#RequestError": return [3 /*break*/, 2];
                    case "ServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.mturk#ServiceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateHITCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateHITCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateHITResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateHITCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "RequestError": return [3 /*break*/, 2];
                    case "com.amazonaws.mturk#RequestError": return [3 /*break*/, 2];
                    case "ServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.mturk#ServiceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateHITTypeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateHITTypeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateHITTypeResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateHITTypeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "RequestError": return [3 /*break*/, 2];
                    case "com.amazonaws.mturk#RequestError": return [3 /*break*/, 2];
                    case "ServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.mturk#ServiceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateHITWithHITTypeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateHITWithHITTypeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateHITWithHITTypeResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateHITWithHITTypeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "RequestError": return [3 /*break*/, 2];
                    case "com.amazonaws.mturk#RequestError": return [3 /*break*/, 2];
                    case "ServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.mturk#ServiceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateQualificationTypeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateQualificationTypeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateQualificationTypeResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateQualificationTypeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "RequestError": return [3 /*break*/, 2];
                    case "com.amazonaws.mturk#RequestError": return [3 /*break*/, 2];
                    case "ServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.mturk#ServiceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateWorkerBlockCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateWorkerBlockCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateWorkerBlockResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateWorkerBlockCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "RequestError": return [3 /*break*/, 2];
                    case "com.amazonaws.mturk#RequestError": return [3 /*break*/, 2];
                    case "ServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.mturk#ServiceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteHITCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteHITCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteHITResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteHITCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "RequestError": return [3 /*break*/, 2];
                    case "com.amazonaws.mturk#RequestError": return [3 /*break*/, 2];
                    case "ServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.mturk#ServiceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteQualificationTypeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteQualificationTypeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteQualificationTypeResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteQualificationTypeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "RequestError": return [3 /*break*/, 2];
                    case "com.amazonaws.mturk#RequestError": return [3 /*break*/, 2];
                    case "ServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.mturk#ServiceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteWorkerBlockCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteWorkerBlockCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteWorkerBlockResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteWorkerBlockCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "RequestError": return [3 /*break*/, 2];
                    case "com.amazonaws.mturk#RequestError": return [3 /*break*/, 2];
                    case "ServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.mturk#ServiceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DisassociateQualificationFromWorkerCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DisassociateQualificationFromWorkerCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DisassociateQualificationFromWorkerResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DisassociateQualificationFromWorkerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "RequestError": return [3 /*break*/, 2];
                    case "com.amazonaws.mturk#RequestError": return [3 /*break*/, 2];
                    case "ServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.mturk#ServiceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetAccountBalanceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetAccountBalanceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetAccountBalanceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetAccountBalanceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "RequestError": return [3 /*break*/, 2];
                    case "com.amazonaws.mturk#RequestError": return [3 /*break*/, 2];
                    case "ServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.mturk#ServiceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetAssignmentCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetAssignmentCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetAssignmentResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetAssignmentCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "RequestError": return [3 /*break*/, 2];
                    case "com.amazonaws.mturk#RequestError": return [3 /*break*/, 2];
                    case "ServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.mturk#ServiceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetFileUploadURLCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetFileUploadURLCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetFileUploadURLResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetFileUploadURLCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "RequestError": return [3 /*break*/, 2];
                    case "com.amazonaws.mturk#RequestError": return [3 /*break*/, 2];
                    case "ServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.mturk#ServiceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetHITCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetHITCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetHITResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetHITCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "RequestError": return [3 /*break*/, 2];
                    case "com.amazonaws.mturk#RequestError": return [3 /*break*/, 2];
                    case "ServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.mturk#ServiceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetQualificationScoreCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetQualificationScoreCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetQualificationScoreResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetQualificationScoreCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "RequestError": return [3 /*break*/, 2];
                    case "com.amazonaws.mturk#RequestError": return [3 /*break*/, 2];
                    case "ServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.mturk#ServiceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetQualificationTypeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetQualificationTypeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetQualificationTypeResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetQualificationTypeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "RequestError": return [3 /*break*/, 2];
                    case "com.amazonaws.mturk#RequestError": return [3 /*break*/, 2];
                    case "ServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.mturk#ServiceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListAssignmentsForHITCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListAssignmentsForHITCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListAssignmentsForHITResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListAssignmentsForHITCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "RequestError": return [3 /*break*/, 2];
                    case "com.amazonaws.mturk#RequestError": return [3 /*break*/, 2];
                    case "ServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.mturk#ServiceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListBonusPaymentsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListBonusPaymentsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListBonusPaymentsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListBonusPaymentsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "RequestError": return [3 /*break*/, 2];
                    case "com.amazonaws.mturk#RequestError": return [3 /*break*/, 2];
                    case "ServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.mturk#ServiceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListHITsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListHITsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListHITsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListHITsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "RequestError": return [3 /*break*/, 2];
                    case "com.amazonaws.mturk#RequestError": return [3 /*break*/, 2];
                    case "ServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.mturk#ServiceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListHITsForQualificationTypeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListHITsForQualificationTypeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListHITsForQualificationTypeResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListHITsForQualificationTypeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "RequestError": return [3 /*break*/, 2];
                    case "com.amazonaws.mturk#RequestError": return [3 /*break*/, 2];
                    case "ServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.mturk#ServiceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListQualificationRequestsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListQualificationRequestsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListQualificationRequestsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListQualificationRequestsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "RequestError": return [3 /*break*/, 2];
                    case "com.amazonaws.mturk#RequestError": return [3 /*break*/, 2];
                    case "ServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.mturk#ServiceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListQualificationTypesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListQualificationTypesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListQualificationTypesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListQualificationTypesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "RequestError": return [3 /*break*/, 2];
                    case "com.amazonaws.mturk#RequestError": return [3 /*break*/, 2];
                    case "ServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.mturk#ServiceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListReviewableHITsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListReviewableHITsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListReviewableHITsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListReviewableHITsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "RequestError": return [3 /*break*/, 2];
                    case "com.amazonaws.mturk#RequestError": return [3 /*break*/, 2];
                    case "ServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.mturk#ServiceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListReviewPolicyResultsForHITCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListReviewPolicyResultsForHITCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListReviewPolicyResultsForHITResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListReviewPolicyResultsForHITCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "RequestError": return [3 /*break*/, 2];
                    case "com.amazonaws.mturk#RequestError": return [3 /*break*/, 2];
                    case "ServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.mturk#ServiceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListWorkerBlocksCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListWorkerBlocksCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListWorkerBlocksResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListWorkerBlocksCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "RequestError": return [3 /*break*/, 2];
                    case "com.amazonaws.mturk#RequestError": return [3 /*break*/, 2];
                    case "ServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.mturk#ServiceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListWorkersWithQualificationTypeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListWorkersWithQualificationTypeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListWorkersWithQualificationTypeResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListWorkersWithQualificationTypeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "RequestError": return [3 /*break*/, 2];
                    case "com.amazonaws.mturk#RequestError": return [3 /*break*/, 2];
                    case "ServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.mturk#ServiceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1NotifyWorkersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1NotifyWorkersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1NotifyWorkersResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1NotifyWorkersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "RequestError": return [3 /*break*/, 2];
                    case "com.amazonaws.mturk#RequestError": return [3 /*break*/, 2];
                    case "ServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.mturk#ServiceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1RejectAssignmentCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1RejectAssignmentCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1RejectAssignmentResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1RejectAssignmentCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "RequestError": return [3 /*break*/, 2];
                    case "com.amazonaws.mturk#RequestError": return [3 /*break*/, 2];
                    case "ServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.mturk#ServiceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1RejectQualificationRequestCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1RejectQualificationRequestCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1RejectQualificationRequestResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1RejectQualificationRequestCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "RequestError": return [3 /*break*/, 2];
                    case "com.amazonaws.mturk#RequestError": return [3 /*break*/, 2];
                    case "ServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.mturk#ServiceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1SendBonusCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1SendBonusCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1SendBonusResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1SendBonusCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "RequestError": return [3 /*break*/, 2];
                    case "com.amazonaws.mturk#RequestError": return [3 /*break*/, 2];
                    case "ServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.mturk#ServiceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1SendTestEventNotificationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1SendTestEventNotificationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1SendTestEventNotificationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1SendTestEventNotificationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "RequestError": return [3 /*break*/, 2];
                    case "com.amazonaws.mturk#RequestError": return [3 /*break*/, 2];
                    case "ServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.mturk#ServiceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateExpirationForHITCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateExpirationForHITCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateExpirationForHITResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateExpirationForHITCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "RequestError": return [3 /*break*/, 2];
                    case "com.amazonaws.mturk#RequestError": return [3 /*break*/, 2];
                    case "ServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.mturk#ServiceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateHITReviewStatusCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateHITReviewStatusCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateHITReviewStatusResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateHITReviewStatusCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "RequestError": return [3 /*break*/, 2];
                    case "com.amazonaws.mturk#RequestError": return [3 /*break*/, 2];
                    case "ServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.mturk#ServiceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateHITTypeOfHITCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateHITTypeOfHITCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateHITTypeOfHITResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateHITTypeOfHITCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "RequestError": return [3 /*break*/, 2];
                    case "com.amazonaws.mturk#RequestError": return [3 /*break*/, 2];
                    case "ServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.mturk#ServiceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateNotificationSettingsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateNotificationSettingsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateNotificationSettingsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateNotificationSettingsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "RequestError": return [3 /*break*/, 2];
                    case "com.amazonaws.mturk#RequestError": return [3 /*break*/, 2];
                    case "ServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.mturk#ServiceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateQualificationTypeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateQualificationTypeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateQualificationTypeResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateQualificationTypeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "RequestError": return [3 /*break*/, 2];
                    case "com.amazonaws.mturk#RequestError": return [3 /*break*/, 2];
                    case "ServiceFault": return [3 /*break*/, 4];
                    case "com.amazonaws.mturk#ServiceFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RequestErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context)];
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
var deserializeAws_json1_1RequestErrorResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1RequestError(body, context);
        contents = __assign({ name: "RequestError", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ServiceFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ServiceFault(body, context);
        contents = __assign({ name: "ServiceFault", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_json1_1AcceptQualificationRequestRequest = function (input, context) {
    return __assign(__assign({}, (input.IntegerValue !== undefined && input.IntegerValue !== null && { IntegerValue: input.IntegerValue })), (input.QualificationRequestId !== undefined &&
        input.QualificationRequestId !== null && { QualificationRequestId: input.QualificationRequestId }));
};
var serializeAws_json1_1ApproveAssignmentRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.AssignmentId !== undefined && input.AssignmentId !== null && { AssignmentId: input.AssignmentId })), (input.OverrideRejection !== undefined &&
        input.OverrideRejection !== null && { OverrideRejection: input.OverrideRejection })), (input.RequesterFeedback !== undefined &&
        input.RequesterFeedback !== null && { RequesterFeedback: input.RequesterFeedback }));
};
var serializeAws_json1_1AssignmentStatusList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1AssociateQualificationWithWorkerRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.IntegerValue !== undefined && input.IntegerValue !== null && { IntegerValue: input.IntegerValue })), (input.QualificationTypeId !== undefined &&
        input.QualificationTypeId !== null && { QualificationTypeId: input.QualificationTypeId })), (input.SendNotification !== undefined &&
        input.SendNotification !== null && { SendNotification: input.SendNotification })), (input.WorkerId !== undefined && input.WorkerId !== null && { WorkerId: input.WorkerId }));
};
var serializeAws_json1_1CreateAdditionalAssignmentsForHITRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.HITId !== undefined && input.HITId !== null && { HITId: input.HITId })), (input.NumberOfAdditionalAssignments !== undefined &&
        input.NumberOfAdditionalAssignments !== null && {
        NumberOfAdditionalAssignments: input.NumberOfAdditionalAssignments,
    })), (input.UniqueRequestToken !== undefined &&
        input.UniqueRequestToken !== null && { UniqueRequestToken: input.UniqueRequestToken }));
};
var serializeAws_json1_1CreateHITRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AssignmentDurationInSeconds !== undefined &&
        input.AssignmentDurationInSeconds !== null && { AssignmentDurationInSeconds: input.AssignmentDurationInSeconds })), (input.AssignmentReviewPolicy !== undefined &&
        input.AssignmentReviewPolicy !== null && {
        AssignmentReviewPolicy: serializeAws_json1_1ReviewPolicy(input.AssignmentReviewPolicy, context),
    })), (input.AutoApprovalDelayInSeconds !== undefined &&
        input.AutoApprovalDelayInSeconds !== null && { AutoApprovalDelayInSeconds: input.AutoApprovalDelayInSeconds })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.HITLayoutId !== undefined && input.HITLayoutId !== null && { HITLayoutId: input.HITLayoutId })), (input.HITLayoutParameters !== undefined &&
        input.HITLayoutParameters !== null && {
        HITLayoutParameters: serializeAws_json1_1HITLayoutParameterList(input.HITLayoutParameters, context),
    })), (input.HITReviewPolicy !== undefined &&
        input.HITReviewPolicy !== null && {
        HITReviewPolicy: serializeAws_json1_1ReviewPolicy(input.HITReviewPolicy, context),
    })), (input.Keywords !== undefined && input.Keywords !== null && { Keywords: input.Keywords })), (input.LifetimeInSeconds !== undefined &&
        input.LifetimeInSeconds !== null && { LifetimeInSeconds: input.LifetimeInSeconds })), (input.MaxAssignments !== undefined &&
        input.MaxAssignments !== null && { MaxAssignments: input.MaxAssignments })), (input.QualificationRequirements !== undefined &&
        input.QualificationRequirements !== null && {
        QualificationRequirements: serializeAws_json1_1QualificationRequirementList(input.QualificationRequirements, context),
    })), (input.Question !== undefined && input.Question !== null && { Question: input.Question })), (input.RequesterAnnotation !== undefined &&
        input.RequesterAnnotation !== null && { RequesterAnnotation: input.RequesterAnnotation })), (input.Reward !== undefined && input.Reward !== null && { Reward: input.Reward })), (input.Title !== undefined && input.Title !== null && { Title: input.Title })), (input.UniqueRequestToken !== undefined &&
        input.UniqueRequestToken !== null && { UniqueRequestToken: input.UniqueRequestToken }));
};
var serializeAws_json1_1CreateHITTypeRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AssignmentDurationInSeconds !== undefined &&
        input.AssignmentDurationInSeconds !== null && { AssignmentDurationInSeconds: input.AssignmentDurationInSeconds })), (input.AutoApprovalDelayInSeconds !== undefined &&
        input.AutoApprovalDelayInSeconds !== null && { AutoApprovalDelayInSeconds: input.AutoApprovalDelayInSeconds })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.Keywords !== undefined && input.Keywords !== null && { Keywords: input.Keywords })), (input.QualificationRequirements !== undefined &&
        input.QualificationRequirements !== null && {
        QualificationRequirements: serializeAws_json1_1QualificationRequirementList(input.QualificationRequirements, context),
    })), (input.Reward !== undefined && input.Reward !== null && { Reward: input.Reward })), (input.Title !== undefined && input.Title !== null && { Title: input.Title }));
};
var serializeAws_json1_1CreateHITWithHITTypeRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AssignmentReviewPolicy !== undefined &&
        input.AssignmentReviewPolicy !== null && {
        AssignmentReviewPolicy: serializeAws_json1_1ReviewPolicy(input.AssignmentReviewPolicy, context),
    })), (input.HITLayoutId !== undefined && input.HITLayoutId !== null && { HITLayoutId: input.HITLayoutId })), (input.HITLayoutParameters !== undefined &&
        input.HITLayoutParameters !== null && {
        HITLayoutParameters: serializeAws_json1_1HITLayoutParameterList(input.HITLayoutParameters, context),
    })), (input.HITReviewPolicy !== undefined &&
        input.HITReviewPolicy !== null && {
        HITReviewPolicy: serializeAws_json1_1ReviewPolicy(input.HITReviewPolicy, context),
    })), (input.HITTypeId !== undefined && input.HITTypeId !== null && { HITTypeId: input.HITTypeId })), (input.LifetimeInSeconds !== undefined &&
        input.LifetimeInSeconds !== null && { LifetimeInSeconds: input.LifetimeInSeconds })), (input.MaxAssignments !== undefined &&
        input.MaxAssignments !== null && { MaxAssignments: input.MaxAssignments })), (input.Question !== undefined && input.Question !== null && { Question: input.Question })), (input.RequesterAnnotation !== undefined &&
        input.RequesterAnnotation !== null && { RequesterAnnotation: input.RequesterAnnotation })), (input.UniqueRequestToken !== undefined &&
        input.UniqueRequestToken !== null && { UniqueRequestToken: input.UniqueRequestToken }));
};
var serializeAws_json1_1CreateQualificationTypeRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AnswerKey !== undefined && input.AnswerKey !== null && { AnswerKey: input.AnswerKey })), (input.AutoGranted !== undefined && input.AutoGranted !== null && { AutoGranted: input.AutoGranted })), (input.AutoGrantedValue !== undefined &&
        input.AutoGrantedValue !== null && { AutoGrantedValue: input.AutoGrantedValue })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.Keywords !== undefined && input.Keywords !== null && { Keywords: input.Keywords })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.QualificationTypeStatus !== undefined &&
        input.QualificationTypeStatus !== null && { QualificationTypeStatus: input.QualificationTypeStatus })), (input.RetryDelayInSeconds !== undefined &&
        input.RetryDelayInSeconds !== null && { RetryDelayInSeconds: input.RetryDelayInSeconds })), (input.Test !== undefined && input.Test !== null && { Test: input.Test })), (input.TestDurationInSeconds !== undefined &&
        input.TestDurationInSeconds !== null && { TestDurationInSeconds: input.TestDurationInSeconds }));
};
var serializeAws_json1_1CreateWorkerBlockRequest = function (input, context) {
    return __assign(__assign({}, (input.Reason !== undefined && input.Reason !== null && { Reason: input.Reason })), (input.WorkerId !== undefined && input.WorkerId !== null && { WorkerId: input.WorkerId }));
};
var serializeAws_json1_1CustomerIdList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1DeleteHITRequest = function (input, context) {
    return __assign({}, (input.HITId !== undefined && input.HITId !== null && { HITId: input.HITId }));
};
var serializeAws_json1_1DeleteQualificationTypeRequest = function (input, context) {
    return __assign({}, (input.QualificationTypeId !== undefined &&
        input.QualificationTypeId !== null && { QualificationTypeId: input.QualificationTypeId }));
};
var serializeAws_json1_1DeleteWorkerBlockRequest = function (input, context) {
    return __assign(__assign({}, (input.Reason !== undefined && input.Reason !== null && { Reason: input.Reason })), (input.WorkerId !== undefined && input.WorkerId !== null && { WorkerId: input.WorkerId }));
};
var serializeAws_json1_1DisassociateQualificationFromWorkerRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.QualificationTypeId !== undefined &&
        input.QualificationTypeId !== null && { QualificationTypeId: input.QualificationTypeId })), (input.Reason !== undefined && input.Reason !== null && { Reason: input.Reason })), (input.WorkerId !== undefined && input.WorkerId !== null && { WorkerId: input.WorkerId }));
};
var serializeAws_json1_1EventTypeList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1GetAccountBalanceRequest = function (input, context) {
    return {};
};
var serializeAws_json1_1GetAssignmentRequest = function (input, context) {
    return __assign({}, (input.AssignmentId !== undefined && input.AssignmentId !== null && { AssignmentId: input.AssignmentId }));
};
var serializeAws_json1_1GetFileUploadURLRequest = function (input, context) {
    return __assign(__assign({}, (input.AssignmentId !== undefined && input.AssignmentId !== null && { AssignmentId: input.AssignmentId })), (input.QuestionIdentifier !== undefined &&
        input.QuestionIdentifier !== null && { QuestionIdentifier: input.QuestionIdentifier }));
};
var serializeAws_json1_1GetHITRequest = function (input, context) {
    return __assign({}, (input.HITId !== undefined && input.HITId !== null && { HITId: input.HITId }));
};
var serializeAws_json1_1GetQualificationScoreRequest = function (input, context) {
    return __assign(__assign({}, (input.QualificationTypeId !== undefined &&
        input.QualificationTypeId !== null && { QualificationTypeId: input.QualificationTypeId })), (input.WorkerId !== undefined && input.WorkerId !== null && { WorkerId: input.WorkerId }));
};
var serializeAws_json1_1GetQualificationTypeRequest = function (input, context) {
    return __assign({}, (input.QualificationTypeId !== undefined &&
        input.QualificationTypeId !== null && { QualificationTypeId: input.QualificationTypeId }));
};
var serializeAws_json1_1HITLayoutParameter = function (input, context) {
    return __assign(__assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_json1_1HITLayoutParameterList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1HITLayoutParameter(entry, context);
    });
};
var serializeAws_json1_1IntegerList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ListAssignmentsForHITRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AssignmentStatuses !== undefined &&
        input.AssignmentStatuses !== null && {
        AssignmentStatuses: serializeAws_json1_1AssignmentStatusList(input.AssignmentStatuses, context),
    })), (input.HITId !== undefined && input.HITId !== null && { HITId: input.HITId })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1ListBonusPaymentsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AssignmentId !== undefined && input.AssignmentId !== null && { AssignmentId: input.AssignmentId })), (input.HITId !== undefined && input.HITId !== null && { HITId: input.HITId })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1ListHITsForQualificationTypeRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.QualificationTypeId !== undefined &&
        input.QualificationTypeId !== null && { QualificationTypeId: input.QualificationTypeId }));
};
var serializeAws_json1_1ListHITsRequest = function (input, context) {
    return __assign(__assign({}, (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1ListQualificationRequestsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.QualificationTypeId !== undefined &&
        input.QualificationTypeId !== null && { QualificationTypeId: input.QualificationTypeId }));
};
var serializeAws_json1_1ListQualificationTypesRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.MustBeOwnedByCaller !== undefined &&
        input.MustBeOwnedByCaller !== null && { MustBeOwnedByCaller: input.MustBeOwnedByCaller })), (input.MustBeRequestable !== undefined &&
        input.MustBeRequestable !== null && { MustBeRequestable: input.MustBeRequestable })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.Query !== undefined && input.Query !== null && { Query: input.Query }));
};
var serializeAws_json1_1ListReviewableHITsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.HITTypeId !== undefined && input.HITTypeId !== null && { HITTypeId: input.HITTypeId })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.Status !== undefined && input.Status !== null && { Status: input.Status }));
};
var serializeAws_json1_1ListReviewPolicyResultsForHITRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.HITId !== undefined && input.HITId !== null && { HITId: input.HITId })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.PolicyLevels !== undefined &&
        input.PolicyLevels !== null && {
        PolicyLevels: serializeAws_json1_1ReviewPolicyLevelList(input.PolicyLevels, context),
    })), (input.RetrieveActions !== undefined &&
        input.RetrieveActions !== null && { RetrieveActions: input.RetrieveActions })), (input.RetrieveResults !== undefined &&
        input.RetrieveResults !== null && { RetrieveResults: input.RetrieveResults }));
};
var serializeAws_json1_1ListWorkerBlocksRequest = function (input, context) {
    return __assign(__assign({}, (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1ListWorkersWithQualificationTypeRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.QualificationTypeId !== undefined &&
        input.QualificationTypeId !== null && { QualificationTypeId: input.QualificationTypeId })), (input.Status !== undefined && input.Status !== null && { Status: input.Status }));
};
var serializeAws_json1_1Locale = function (input, context) {
    return __assign(__assign({}, (input.Country !== undefined && input.Country !== null && { Country: input.Country })), (input.Subdivision !== undefined && input.Subdivision !== null && { Subdivision: input.Subdivision }));
};
var serializeAws_json1_1LocaleList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Locale(entry, context);
    });
};
var serializeAws_json1_1NotificationSpecification = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Destination !== undefined && input.Destination !== null && { Destination: input.Destination })), (input.EventTypes !== undefined &&
        input.EventTypes !== null && { EventTypes: serializeAws_json1_1EventTypeList(input.EventTypes, context) })), (input.Transport !== undefined && input.Transport !== null && { Transport: input.Transport })), (input.Version !== undefined && input.Version !== null && { Version: input.Version }));
};
var serializeAws_json1_1NotifyWorkersRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.MessageText !== undefined && input.MessageText !== null && { MessageText: input.MessageText })), (input.Subject !== undefined && input.Subject !== null && { Subject: input.Subject })), (input.WorkerIds !== undefined &&
        input.WorkerIds !== null && { WorkerIds: serializeAws_json1_1CustomerIdList(input.WorkerIds, context) }));
};
var serializeAws_json1_1ParameterMapEntry = function (input, context) {
    return __assign(__assign({}, (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.Values !== undefined &&
        input.Values !== null && { Values: serializeAws_json1_1StringList(input.Values, context) }));
};
var serializeAws_json1_1ParameterMapEntryList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ParameterMapEntry(entry, context);
    });
};
var serializeAws_json1_1PolicyParameter = function (input, context) {
    return __assign(__assign(__assign({}, (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.MapEntries !== undefined &&
        input.MapEntries !== null && {
        MapEntries: serializeAws_json1_1ParameterMapEntryList(input.MapEntries, context),
    })), (input.Values !== undefined &&
        input.Values !== null && { Values: serializeAws_json1_1StringList(input.Values, context) }));
};
var serializeAws_json1_1PolicyParameterList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1PolicyParameter(entry, context);
    });
};
var serializeAws_json1_1QualificationRequirement = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.ActionsGuarded !== undefined &&
        input.ActionsGuarded !== null && { ActionsGuarded: input.ActionsGuarded })), (input.Comparator !== undefined && input.Comparator !== null && { Comparator: input.Comparator })), (input.IntegerValues !== undefined &&
        input.IntegerValues !== null && { IntegerValues: serializeAws_json1_1IntegerList(input.IntegerValues, context) })), (input.LocaleValues !== undefined &&
        input.LocaleValues !== null && { LocaleValues: serializeAws_json1_1LocaleList(input.LocaleValues, context) })), (input.QualificationTypeId !== undefined &&
        input.QualificationTypeId !== null && { QualificationTypeId: input.QualificationTypeId })), (input.RequiredToPreview !== undefined &&
        input.RequiredToPreview !== null && { RequiredToPreview: input.RequiredToPreview }));
};
var serializeAws_json1_1QualificationRequirementList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1QualificationRequirement(entry, context);
    });
};
var serializeAws_json1_1RejectAssignmentRequest = function (input, context) {
    return __assign(__assign({}, (input.AssignmentId !== undefined && input.AssignmentId !== null && { AssignmentId: input.AssignmentId })), (input.RequesterFeedback !== undefined &&
        input.RequesterFeedback !== null && { RequesterFeedback: input.RequesterFeedback }));
};
var serializeAws_json1_1RejectQualificationRequestRequest = function (input, context) {
    return __assign(__assign({}, (input.QualificationRequestId !== undefined &&
        input.QualificationRequestId !== null && { QualificationRequestId: input.QualificationRequestId })), (input.Reason !== undefined && input.Reason !== null && { Reason: input.Reason }));
};
var serializeAws_json1_1ReviewPolicy = function (input, context) {
    return __assign(__assign({}, (input.Parameters !== undefined &&
        input.Parameters !== null && { Parameters: serializeAws_json1_1PolicyParameterList(input.Parameters, context) })), (input.PolicyName !== undefined && input.PolicyName !== null && { PolicyName: input.PolicyName }));
};
var serializeAws_json1_1ReviewPolicyLevelList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1SendBonusRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.AssignmentId !== undefined && input.AssignmentId !== null && { AssignmentId: input.AssignmentId })), (input.BonusAmount !== undefined && input.BonusAmount !== null && { BonusAmount: input.BonusAmount })), (input.Reason !== undefined && input.Reason !== null && { Reason: input.Reason })), (input.UniqueRequestToken !== undefined &&
        input.UniqueRequestToken !== null && { UniqueRequestToken: input.UniqueRequestToken })), (input.WorkerId !== undefined && input.WorkerId !== null && { WorkerId: input.WorkerId }));
};
var serializeAws_json1_1SendTestEventNotificationRequest = function (input, context) {
    return __assign(__assign({}, (input.Notification !== undefined &&
        input.Notification !== null && {
        Notification: serializeAws_json1_1NotificationSpecification(input.Notification, context),
    })), (input.TestEventType !== undefined && input.TestEventType !== null && { TestEventType: input.TestEventType }));
};
var serializeAws_json1_1StringList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1UpdateExpirationForHITRequest = function (input, context) {
    return __assign(__assign({}, (input.ExpireAt !== undefined &&
        input.ExpireAt !== null && { ExpireAt: Math.round(input.ExpireAt.getTime() / 1000) })), (input.HITId !== undefined && input.HITId !== null && { HITId: input.HITId }));
};
var serializeAws_json1_1UpdateHITReviewStatusRequest = function (input, context) {
    return __assign(__assign({}, (input.HITId !== undefined && input.HITId !== null && { HITId: input.HITId })), (input.Revert !== undefined && input.Revert !== null && { Revert: input.Revert }));
};
var serializeAws_json1_1UpdateHITTypeOfHITRequest = function (input, context) {
    return __assign(__assign({}, (input.HITId !== undefined && input.HITId !== null && { HITId: input.HITId })), (input.HITTypeId !== undefined && input.HITTypeId !== null && { HITTypeId: input.HITTypeId }));
};
var serializeAws_json1_1UpdateNotificationSettingsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.Active !== undefined && input.Active !== null && { Active: input.Active })), (input.HITTypeId !== undefined && input.HITTypeId !== null && { HITTypeId: input.HITTypeId })), (input.Notification !== undefined &&
        input.Notification !== null && {
        Notification: serializeAws_json1_1NotificationSpecification(input.Notification, context),
    }));
};
var serializeAws_json1_1UpdateQualificationTypeRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AnswerKey !== undefined && input.AnswerKey !== null && { AnswerKey: input.AnswerKey })), (input.AutoGranted !== undefined && input.AutoGranted !== null && { AutoGranted: input.AutoGranted })), (input.AutoGrantedValue !== undefined &&
        input.AutoGrantedValue !== null && { AutoGrantedValue: input.AutoGrantedValue })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.QualificationTypeId !== undefined &&
        input.QualificationTypeId !== null && { QualificationTypeId: input.QualificationTypeId })), (input.QualificationTypeStatus !== undefined &&
        input.QualificationTypeStatus !== null && { QualificationTypeStatus: input.QualificationTypeStatus })), (input.RetryDelayInSeconds !== undefined &&
        input.RetryDelayInSeconds !== null && { RetryDelayInSeconds: input.RetryDelayInSeconds })), (input.Test !== undefined && input.Test !== null && { Test: input.Test })), (input.TestDurationInSeconds !== undefined &&
        input.TestDurationInSeconds !== null && { TestDurationInSeconds: input.TestDurationInSeconds }));
};
var deserializeAws_json1_1AcceptQualificationRequestResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1ApproveAssignmentResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1Assignment = function (output, context) {
    return {
        AcceptTime: output.AcceptTime !== undefined && output.AcceptTime !== null
            ? new Date(Math.round(output.AcceptTime * 1000))
            : undefined,
        Answer: output.Answer !== undefined && output.Answer !== null ? output.Answer : undefined,
        ApprovalTime: output.ApprovalTime !== undefined && output.ApprovalTime !== null
            ? new Date(Math.round(output.ApprovalTime * 1000))
            : undefined,
        AssignmentId: output.AssignmentId !== undefined && output.AssignmentId !== null ? output.AssignmentId : undefined,
        AssignmentStatus: output.AssignmentStatus !== undefined && output.AssignmentStatus !== null ? output.AssignmentStatus : undefined,
        AutoApprovalTime: output.AutoApprovalTime !== undefined && output.AutoApprovalTime !== null
            ? new Date(Math.round(output.AutoApprovalTime * 1000))
            : undefined,
        Deadline: output.Deadline !== undefined && output.Deadline !== null
            ? new Date(Math.round(output.Deadline * 1000))
            : undefined,
        HITId: output.HITId !== undefined && output.HITId !== null ? output.HITId : undefined,
        RejectionTime: output.RejectionTime !== undefined && output.RejectionTime !== null
            ? new Date(Math.round(output.RejectionTime * 1000))
            : undefined,
        RequesterFeedback: output.RequesterFeedback !== undefined && output.RequesterFeedback !== null
            ? output.RequesterFeedback
            : undefined,
        SubmitTime: output.SubmitTime !== undefined && output.SubmitTime !== null
            ? new Date(Math.round(output.SubmitTime * 1000))
            : undefined,
        WorkerId: output.WorkerId !== undefined && output.WorkerId !== null ? output.WorkerId : undefined,
    };
};
var deserializeAws_json1_1AssignmentList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Assignment(entry, context);
    });
};
var deserializeAws_json1_1AssociateQualificationWithWorkerResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1BonusPayment = function (output, context) {
    return {
        AssignmentId: output.AssignmentId !== undefined && output.AssignmentId !== null ? output.AssignmentId : undefined,
        BonusAmount: output.BonusAmount !== undefined && output.BonusAmount !== null ? output.BonusAmount : undefined,
        GrantTime: output.GrantTime !== undefined && output.GrantTime !== null
            ? new Date(Math.round(output.GrantTime * 1000))
            : undefined,
        Reason: output.Reason !== undefined && output.Reason !== null ? output.Reason : undefined,
        WorkerId: output.WorkerId !== undefined && output.WorkerId !== null ? output.WorkerId : undefined,
    };
};
var deserializeAws_json1_1BonusPaymentList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BonusPayment(entry, context);
    });
};
var deserializeAws_json1_1CreateAdditionalAssignmentsForHITResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1CreateHITResponse = function (output, context) {
    return {
        HIT: output.HIT !== undefined && output.HIT !== null ? deserializeAws_json1_1HIT(output.HIT, context) : undefined,
    };
};
var deserializeAws_json1_1CreateHITTypeResponse = function (output, context) {
    return {
        HITTypeId: output.HITTypeId !== undefined && output.HITTypeId !== null ? output.HITTypeId : undefined,
    };
};
var deserializeAws_json1_1CreateHITWithHITTypeResponse = function (output, context) {
    return {
        HIT: output.HIT !== undefined && output.HIT !== null ? deserializeAws_json1_1HIT(output.HIT, context) : undefined,
    };
};
var deserializeAws_json1_1CreateQualificationTypeResponse = function (output, context) {
    return {
        QualificationType: output.QualificationType !== undefined && output.QualificationType !== null
            ? deserializeAws_json1_1QualificationType(output.QualificationType, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateWorkerBlockResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeleteHITResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeleteQualificationTypeResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeleteWorkerBlockResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1DisassociateQualificationFromWorkerResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1GetAccountBalanceResponse = function (output, context) {
    return {
        AvailableBalance: output.AvailableBalance !== undefined && output.AvailableBalance !== null ? output.AvailableBalance : undefined,
        OnHoldBalance: output.OnHoldBalance !== undefined && output.OnHoldBalance !== null ? output.OnHoldBalance : undefined,
    };
};
var deserializeAws_json1_1GetAssignmentResponse = function (output, context) {
    return {
        Assignment: output.Assignment !== undefined && output.Assignment !== null
            ? deserializeAws_json1_1Assignment(output.Assignment, context)
            : undefined,
        HIT: output.HIT !== undefined && output.HIT !== null ? deserializeAws_json1_1HIT(output.HIT, context) : undefined,
    };
};
var deserializeAws_json1_1GetFileUploadURLResponse = function (output, context) {
    return {
        FileUploadURL: output.FileUploadURL !== undefined && output.FileUploadURL !== null ? output.FileUploadURL : undefined,
    };
};
var deserializeAws_json1_1GetHITResponse = function (output, context) {
    return {
        HIT: output.HIT !== undefined && output.HIT !== null ? deserializeAws_json1_1HIT(output.HIT, context) : undefined,
    };
};
var deserializeAws_json1_1GetQualificationScoreResponse = function (output, context) {
    return {
        Qualification: output.Qualification !== undefined && output.Qualification !== null
            ? deserializeAws_json1_1Qualification(output.Qualification, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetQualificationTypeResponse = function (output, context) {
    return {
        QualificationType: output.QualificationType !== undefined && output.QualificationType !== null
            ? deserializeAws_json1_1QualificationType(output.QualificationType, context)
            : undefined,
    };
};
var deserializeAws_json1_1HIT = function (output, context) {
    return {
        AssignmentDurationInSeconds: output.AssignmentDurationInSeconds !== undefined && output.AssignmentDurationInSeconds !== null
            ? output.AssignmentDurationInSeconds
            : undefined,
        AutoApprovalDelayInSeconds: output.AutoApprovalDelayInSeconds !== undefined && output.AutoApprovalDelayInSeconds !== null
            ? output.AutoApprovalDelayInSeconds
            : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Expiration: output.Expiration !== undefined && output.Expiration !== null
            ? new Date(Math.round(output.Expiration * 1000))
            : undefined,
        HITGroupId: output.HITGroupId !== undefined && output.HITGroupId !== null ? output.HITGroupId : undefined,
        HITId: output.HITId !== undefined && output.HITId !== null ? output.HITId : undefined,
        HITLayoutId: output.HITLayoutId !== undefined && output.HITLayoutId !== null ? output.HITLayoutId : undefined,
        HITReviewStatus: output.HITReviewStatus !== undefined && output.HITReviewStatus !== null ? output.HITReviewStatus : undefined,
        HITStatus: output.HITStatus !== undefined && output.HITStatus !== null ? output.HITStatus : undefined,
        HITTypeId: output.HITTypeId !== undefined && output.HITTypeId !== null ? output.HITTypeId : undefined,
        Keywords: output.Keywords !== undefined && output.Keywords !== null ? output.Keywords : undefined,
        MaxAssignments: output.MaxAssignments !== undefined && output.MaxAssignments !== null ? output.MaxAssignments : undefined,
        NumberOfAssignmentsAvailable: output.NumberOfAssignmentsAvailable !== undefined && output.NumberOfAssignmentsAvailable !== null
            ? output.NumberOfAssignmentsAvailable
            : undefined,
        NumberOfAssignmentsCompleted: output.NumberOfAssignmentsCompleted !== undefined && output.NumberOfAssignmentsCompleted !== null
            ? output.NumberOfAssignmentsCompleted
            : undefined,
        NumberOfAssignmentsPending: output.NumberOfAssignmentsPending !== undefined && output.NumberOfAssignmentsPending !== null
            ? output.NumberOfAssignmentsPending
            : undefined,
        QualificationRequirements: output.QualificationRequirements !== undefined && output.QualificationRequirements !== null
            ? deserializeAws_json1_1QualificationRequirementList(output.QualificationRequirements, context)
            : undefined,
        Question: output.Question !== undefined && output.Question !== null ? output.Question : undefined,
        RequesterAnnotation: output.RequesterAnnotation !== undefined && output.RequesterAnnotation !== null
            ? output.RequesterAnnotation
            : undefined,
        Reward: output.Reward !== undefined && output.Reward !== null ? output.Reward : undefined,
        Title: output.Title !== undefined && output.Title !== null ? output.Title : undefined,
    };
};
var deserializeAws_json1_1HITList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1HIT(entry, context);
    });
};
var deserializeAws_json1_1IntegerList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1ListAssignmentsForHITResponse = function (output, context) {
    return {
        Assignments: output.Assignments !== undefined && output.Assignments !== null
            ? deserializeAws_json1_1AssignmentList(output.Assignments, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        NumResults: output.NumResults !== undefined && output.NumResults !== null ? output.NumResults : undefined,
    };
};
var deserializeAws_json1_1ListBonusPaymentsResponse = function (output, context) {
    return {
        BonusPayments: output.BonusPayments !== undefined && output.BonusPayments !== null
            ? deserializeAws_json1_1BonusPaymentList(output.BonusPayments, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        NumResults: output.NumResults !== undefined && output.NumResults !== null ? output.NumResults : undefined,
    };
};
var deserializeAws_json1_1ListHITsForQualificationTypeResponse = function (output, context) {
    return {
        HITs: output.HITs !== undefined && output.HITs !== null
            ? deserializeAws_json1_1HITList(output.HITs, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        NumResults: output.NumResults !== undefined && output.NumResults !== null ? output.NumResults : undefined,
    };
};
var deserializeAws_json1_1ListHITsResponse = function (output, context) {
    return {
        HITs: output.HITs !== undefined && output.HITs !== null
            ? deserializeAws_json1_1HITList(output.HITs, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        NumResults: output.NumResults !== undefined && output.NumResults !== null ? output.NumResults : undefined,
    };
};
var deserializeAws_json1_1ListQualificationRequestsResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        NumResults: output.NumResults !== undefined && output.NumResults !== null ? output.NumResults : undefined,
        QualificationRequests: output.QualificationRequests !== undefined && output.QualificationRequests !== null
            ? deserializeAws_json1_1QualificationRequestList(output.QualificationRequests, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListQualificationTypesResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        NumResults: output.NumResults !== undefined && output.NumResults !== null ? output.NumResults : undefined,
        QualificationTypes: output.QualificationTypes !== undefined && output.QualificationTypes !== null
            ? deserializeAws_json1_1QualificationTypeList(output.QualificationTypes, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListReviewableHITsResponse = function (output, context) {
    return {
        HITs: output.HITs !== undefined && output.HITs !== null
            ? deserializeAws_json1_1HITList(output.HITs, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        NumResults: output.NumResults !== undefined && output.NumResults !== null ? output.NumResults : undefined,
    };
};
var deserializeAws_json1_1ListReviewPolicyResultsForHITResponse = function (output, context) {
    return {
        AssignmentReviewPolicy: output.AssignmentReviewPolicy !== undefined && output.AssignmentReviewPolicy !== null
            ? deserializeAws_json1_1ReviewPolicy(output.AssignmentReviewPolicy, context)
            : undefined,
        AssignmentReviewReport: output.AssignmentReviewReport !== undefined && output.AssignmentReviewReport !== null
            ? deserializeAws_json1_1ReviewReport(output.AssignmentReviewReport, context)
            : undefined,
        HITId: output.HITId !== undefined && output.HITId !== null ? output.HITId : undefined,
        HITReviewPolicy: output.HITReviewPolicy !== undefined && output.HITReviewPolicy !== null
            ? deserializeAws_json1_1ReviewPolicy(output.HITReviewPolicy, context)
            : undefined,
        HITReviewReport: output.HITReviewReport !== undefined && output.HITReviewReport !== null
            ? deserializeAws_json1_1ReviewReport(output.HITReviewReport, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1ListWorkerBlocksResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        NumResults: output.NumResults !== undefined && output.NumResults !== null ? output.NumResults : undefined,
        WorkerBlocks: output.WorkerBlocks !== undefined && output.WorkerBlocks !== null
            ? deserializeAws_json1_1WorkerBlockList(output.WorkerBlocks, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListWorkersWithQualificationTypeResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        NumResults: output.NumResults !== undefined && output.NumResults !== null ? output.NumResults : undefined,
        Qualifications: output.Qualifications !== undefined && output.Qualifications !== null
            ? deserializeAws_json1_1QualificationList(output.Qualifications, context)
            : undefined,
    };
};
var deserializeAws_json1_1Locale = function (output, context) {
    return {
        Country: output.Country !== undefined && output.Country !== null ? output.Country : undefined,
        Subdivision: output.Subdivision !== undefined && output.Subdivision !== null ? output.Subdivision : undefined,
    };
};
var deserializeAws_json1_1LocaleList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Locale(entry, context);
    });
};
var deserializeAws_json1_1NotifyWorkersFailureStatus = function (output, context) {
    return {
        NotifyWorkersFailureCode: output.NotifyWorkersFailureCode !== undefined && output.NotifyWorkersFailureCode !== null
            ? output.NotifyWorkersFailureCode
            : undefined,
        NotifyWorkersFailureMessage: output.NotifyWorkersFailureMessage !== undefined && output.NotifyWorkersFailureMessage !== null
            ? output.NotifyWorkersFailureMessage
            : undefined,
        WorkerId: output.WorkerId !== undefined && output.WorkerId !== null ? output.WorkerId : undefined,
    };
};
var deserializeAws_json1_1NotifyWorkersFailureStatusList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1NotifyWorkersFailureStatus(entry, context);
    });
};
var deserializeAws_json1_1NotifyWorkersResponse = function (output, context) {
    return {
        NotifyWorkersFailureStatuses: output.NotifyWorkersFailureStatuses !== undefined && output.NotifyWorkersFailureStatuses !== null
            ? deserializeAws_json1_1NotifyWorkersFailureStatusList(output.NotifyWorkersFailureStatuses, context)
            : undefined,
    };
};
var deserializeAws_json1_1ParameterMapEntry = function (output, context) {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Values: output.Values !== undefined && output.Values !== null
            ? deserializeAws_json1_1StringList(output.Values, context)
            : undefined,
    };
};
var deserializeAws_json1_1ParameterMapEntryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ParameterMapEntry(entry, context);
    });
};
var deserializeAws_json1_1PolicyParameter = function (output, context) {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        MapEntries: output.MapEntries !== undefined && output.MapEntries !== null
            ? deserializeAws_json1_1ParameterMapEntryList(output.MapEntries, context)
            : undefined,
        Values: output.Values !== undefined && output.Values !== null
            ? deserializeAws_json1_1StringList(output.Values, context)
            : undefined,
    };
};
var deserializeAws_json1_1PolicyParameterList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PolicyParameter(entry, context);
    });
};
var deserializeAws_json1_1Qualification = function (output, context) {
    return {
        GrantTime: output.GrantTime !== undefined && output.GrantTime !== null
            ? new Date(Math.round(output.GrantTime * 1000))
            : undefined,
        IntegerValue: output.IntegerValue !== undefined && output.IntegerValue !== null ? output.IntegerValue : undefined,
        LocaleValue: output.LocaleValue !== undefined && output.LocaleValue !== null
            ? deserializeAws_json1_1Locale(output.LocaleValue, context)
            : undefined,
        QualificationTypeId: output.QualificationTypeId !== undefined && output.QualificationTypeId !== null
            ? output.QualificationTypeId
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        WorkerId: output.WorkerId !== undefined && output.WorkerId !== null ? output.WorkerId : undefined,
    };
};
var deserializeAws_json1_1QualificationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Qualification(entry, context);
    });
};
var deserializeAws_json1_1QualificationRequest = function (output, context) {
    return {
        Answer: output.Answer !== undefined && output.Answer !== null ? output.Answer : undefined,
        QualificationRequestId: output.QualificationRequestId !== undefined && output.QualificationRequestId !== null
            ? output.QualificationRequestId
            : undefined,
        QualificationTypeId: output.QualificationTypeId !== undefined && output.QualificationTypeId !== null
            ? output.QualificationTypeId
            : undefined,
        SubmitTime: output.SubmitTime !== undefined && output.SubmitTime !== null
            ? new Date(Math.round(output.SubmitTime * 1000))
            : undefined,
        Test: output.Test !== undefined && output.Test !== null ? output.Test : undefined,
        WorkerId: output.WorkerId !== undefined && output.WorkerId !== null ? output.WorkerId : undefined,
    };
};
var deserializeAws_json1_1QualificationRequestList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1QualificationRequest(entry, context);
    });
};
var deserializeAws_json1_1QualificationRequirement = function (output, context) {
    return {
        ActionsGuarded: output.ActionsGuarded !== undefined && output.ActionsGuarded !== null ? output.ActionsGuarded : undefined,
        Comparator: output.Comparator !== undefined && output.Comparator !== null ? output.Comparator : undefined,
        IntegerValues: output.IntegerValues !== undefined && output.IntegerValues !== null
            ? deserializeAws_json1_1IntegerList(output.IntegerValues, context)
            : undefined,
        LocaleValues: output.LocaleValues !== undefined && output.LocaleValues !== null
            ? deserializeAws_json1_1LocaleList(output.LocaleValues, context)
            : undefined,
        QualificationTypeId: output.QualificationTypeId !== undefined && output.QualificationTypeId !== null
            ? output.QualificationTypeId
            : undefined,
        RequiredToPreview: output.RequiredToPreview !== undefined && output.RequiredToPreview !== null
            ? output.RequiredToPreview
            : undefined,
    };
};
var deserializeAws_json1_1QualificationRequirementList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1QualificationRequirement(entry, context);
    });
};
var deserializeAws_json1_1QualificationType = function (output, context) {
    return {
        AnswerKey: output.AnswerKey !== undefined && output.AnswerKey !== null ? output.AnswerKey : undefined,
        AutoGranted: output.AutoGranted !== undefined && output.AutoGranted !== null ? output.AutoGranted : undefined,
        AutoGrantedValue: output.AutoGrantedValue !== undefined && output.AutoGrantedValue !== null ? output.AutoGrantedValue : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        IsRequestable: output.IsRequestable !== undefined && output.IsRequestable !== null ? output.IsRequestable : undefined,
        Keywords: output.Keywords !== undefined && output.Keywords !== null ? output.Keywords : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        QualificationTypeId: output.QualificationTypeId !== undefined && output.QualificationTypeId !== null
            ? output.QualificationTypeId
            : undefined,
        QualificationTypeStatus: output.QualificationTypeStatus !== undefined && output.QualificationTypeStatus !== null
            ? output.QualificationTypeStatus
            : undefined,
        RetryDelayInSeconds: output.RetryDelayInSeconds !== undefined && output.RetryDelayInSeconds !== null
            ? output.RetryDelayInSeconds
            : undefined,
        Test: output.Test !== undefined && output.Test !== null ? output.Test : undefined,
        TestDurationInSeconds: output.TestDurationInSeconds !== undefined && output.TestDurationInSeconds !== null
            ? output.TestDurationInSeconds
            : undefined,
    };
};
var deserializeAws_json1_1QualificationTypeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1QualificationType(entry, context);
    });
};
var deserializeAws_json1_1RejectAssignmentResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1RejectQualificationRequestResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1RequestError = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        TurkErrorCode: output.TurkErrorCode !== undefined && output.TurkErrorCode !== null ? output.TurkErrorCode : undefined,
    };
};
var deserializeAws_json1_1ReviewActionDetail = function (output, context) {
    return {
        ActionId: output.ActionId !== undefined && output.ActionId !== null ? output.ActionId : undefined,
        ActionName: output.ActionName !== undefined && output.ActionName !== null ? output.ActionName : undefined,
        CompleteTime: output.CompleteTime !== undefined && output.CompleteTime !== null
            ? new Date(Math.round(output.CompleteTime * 1000))
            : undefined,
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        Result: output.Result !== undefined && output.Result !== null ? output.Result : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        TargetId: output.TargetId !== undefined && output.TargetId !== null ? output.TargetId : undefined,
        TargetType: output.TargetType !== undefined && output.TargetType !== null ? output.TargetType : undefined,
    };
};
var deserializeAws_json1_1ReviewActionDetailList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReviewActionDetail(entry, context);
    });
};
var deserializeAws_json1_1ReviewPolicy = function (output, context) {
    return {
        Parameters: output.Parameters !== undefined && output.Parameters !== null
            ? deserializeAws_json1_1PolicyParameterList(output.Parameters, context)
            : undefined,
        PolicyName: output.PolicyName !== undefined && output.PolicyName !== null ? output.PolicyName : undefined,
    };
};
var deserializeAws_json1_1ReviewReport = function (output, context) {
    return {
        ReviewActions: output.ReviewActions !== undefined && output.ReviewActions !== null
            ? deserializeAws_json1_1ReviewActionDetailList(output.ReviewActions, context)
            : undefined,
        ReviewResults: output.ReviewResults !== undefined && output.ReviewResults !== null
            ? deserializeAws_json1_1ReviewResultDetailList(output.ReviewResults, context)
            : undefined,
    };
};
var deserializeAws_json1_1ReviewResultDetail = function (output, context) {
    return {
        ActionId: output.ActionId !== undefined && output.ActionId !== null ? output.ActionId : undefined,
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        QuestionId: output.QuestionId !== undefined && output.QuestionId !== null ? output.QuestionId : undefined,
        SubjectId: output.SubjectId !== undefined && output.SubjectId !== null ? output.SubjectId : undefined,
        SubjectType: output.SubjectType !== undefined && output.SubjectType !== null ? output.SubjectType : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_json1_1ReviewResultDetailList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReviewResultDetail(entry, context);
    });
};
var deserializeAws_json1_1SendBonusResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1SendTestEventNotificationResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1ServiceFault = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        TurkErrorCode: output.TurkErrorCode !== undefined && output.TurkErrorCode !== null ? output.TurkErrorCode : undefined,
    };
};
var deserializeAws_json1_1StringList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1UpdateExpirationForHITResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1UpdateHITReviewStatusResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1UpdateHITTypeOfHITResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1UpdateNotificationSettingsResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1UpdateQualificationTypeResponse = function (output, context) {
    return {
        QualificationType: output.QualificationType !== undefined && output.QualificationType !== null
            ? deserializeAws_json1_1QualificationType(output.QualificationType, context)
            : undefined,
    };
};
var deserializeAws_json1_1WorkerBlock = function (output, context) {
    return {
        Reason: output.Reason !== undefined && output.Reason !== null ? output.Reason : undefined,
        WorkerId: output.WorkerId !== undefined && output.WorkerId !== null ? output.WorkerId : undefined,
    };
};
var deserializeAws_json1_1WorkerBlockList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1WorkerBlock(entry, context);
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