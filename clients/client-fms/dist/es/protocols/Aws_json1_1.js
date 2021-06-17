import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_json1_1AssociateAdminAccountCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSFMS_20180101.AssociateAdminAccount",
        };
        body = JSON.stringify(serializeAws_json1_1AssociateAdminAccountRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteAppsListCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSFMS_20180101.DeleteAppsList",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteAppsListRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteNotificationChannelCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSFMS_20180101.DeleteNotificationChannel",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteNotificationChannelRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeletePolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSFMS_20180101.DeletePolicy",
        };
        body = JSON.stringify(serializeAws_json1_1DeletePolicyRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteProtocolsListCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSFMS_20180101.DeleteProtocolsList",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteProtocolsListRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DisassociateAdminAccountCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSFMS_20180101.DisassociateAdminAccount",
        };
        body = JSON.stringify(serializeAws_json1_1DisassociateAdminAccountRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetAdminAccountCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSFMS_20180101.GetAdminAccount",
        };
        body = JSON.stringify(serializeAws_json1_1GetAdminAccountRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetAppsListCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSFMS_20180101.GetAppsList",
        };
        body = JSON.stringify(serializeAws_json1_1GetAppsListRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetComplianceDetailCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSFMS_20180101.GetComplianceDetail",
        };
        body = JSON.stringify(serializeAws_json1_1GetComplianceDetailRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetNotificationChannelCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSFMS_20180101.GetNotificationChannel",
        };
        body = JSON.stringify(serializeAws_json1_1GetNotificationChannelRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSFMS_20180101.GetPolicy",
        };
        body = JSON.stringify(serializeAws_json1_1GetPolicyRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetProtectionStatusCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSFMS_20180101.GetProtectionStatus",
        };
        body = JSON.stringify(serializeAws_json1_1GetProtectionStatusRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetProtocolsListCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSFMS_20180101.GetProtocolsList",
        };
        body = JSON.stringify(serializeAws_json1_1GetProtocolsListRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetViolationDetailsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSFMS_20180101.GetViolationDetails",
        };
        body = JSON.stringify(serializeAws_json1_1GetViolationDetailsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListAppsListsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSFMS_20180101.ListAppsLists",
        };
        body = JSON.stringify(serializeAws_json1_1ListAppsListsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListComplianceStatusCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSFMS_20180101.ListComplianceStatus",
        };
        body = JSON.stringify(serializeAws_json1_1ListComplianceStatusRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListMemberAccountsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSFMS_20180101.ListMemberAccounts",
        };
        body = JSON.stringify(serializeAws_json1_1ListMemberAccountsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListPoliciesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSFMS_20180101.ListPolicies",
        };
        body = JSON.stringify(serializeAws_json1_1ListPoliciesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListProtocolsListsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSFMS_20180101.ListProtocolsLists",
        };
        body = JSON.stringify(serializeAws_json1_1ListProtocolsListsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListTagsForResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSFMS_20180101.ListTagsForResource",
        };
        body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutAppsListCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSFMS_20180101.PutAppsList",
        };
        body = JSON.stringify(serializeAws_json1_1PutAppsListRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutNotificationChannelCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSFMS_20180101.PutNotificationChannel",
        };
        body = JSON.stringify(serializeAws_json1_1PutNotificationChannelRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSFMS_20180101.PutPolicy",
        };
        body = JSON.stringify(serializeAws_json1_1PutPolicyRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutProtocolsListCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSFMS_20180101.PutProtocolsList",
        };
        body = JSON.stringify(serializeAws_json1_1PutProtocolsListRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1TagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSFMS_20180101.TagResource",
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
            "x-amz-target": "AWSFMS_20180101.UntagResource",
        };
        body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_json1_1AssociateAdminAccountCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AssociateAdminAccountCommandError(output, context)];
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
var deserializeAws_json1_1AssociateAdminAccountCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.fms#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidInputException": return [3 /*break*/, 4];
                    case "com.amazonaws.fms#InvalidInputException": return [3 /*break*/, 4];
                    case "InvalidOperationException": return [3 /*break*/, 6];
                    case "com.amazonaws.fms#InvalidOperationException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.fms#ResourceNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteAppsListCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteAppsListCommandError(output, context)];
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
var deserializeAws_json1_1DeleteAppsListCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.fms#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.fms#InvalidOperationException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.fms#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteNotificationChannelCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteNotificationChannelCommandError(output, context)];
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
var deserializeAws_json1_1DeleteNotificationChannelCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.fms#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.fms#InvalidOperationException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.fms#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeletePolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeletePolicyCommandError(output, context)];
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
var deserializeAws_json1_1DeletePolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.fms#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidInputException": return [3 /*break*/, 4];
                    case "com.amazonaws.fms#InvalidInputException": return [3 /*break*/, 4];
                    case "InvalidOperationException": return [3 /*break*/, 6];
                    case "com.amazonaws.fms#InvalidOperationException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.fms#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.fms#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteProtocolsListCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteProtocolsListCommandError(output, context)];
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
var deserializeAws_json1_1DeleteProtocolsListCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.fms#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.fms#InvalidOperationException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.fms#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DisassociateAdminAccountCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DisassociateAdminAccountCommandError(output, context)];
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
var deserializeAws_json1_1DisassociateAdminAccountCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.fms#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.fms#InvalidOperationException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.fms#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetAdminAccountCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetAdminAccountCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetAdminAccountResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetAdminAccountCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.fms#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.fms#InvalidOperationException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.fms#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetAppsListCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetAppsListCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetAppsListResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetAppsListCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.fms#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.fms#InvalidOperationException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.fms#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetComplianceDetailCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetComplianceDetailCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetComplianceDetailResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetComplianceDetailCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.fms#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidInputException": return [3 /*break*/, 4];
                    case "com.amazonaws.fms#InvalidInputException": return [3 /*break*/, 4];
                    case "InvalidOperationException": return [3 /*break*/, 6];
                    case "com.amazonaws.fms#InvalidOperationException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.fms#ResourceNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetNotificationChannelCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetNotificationChannelCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetNotificationChannelResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetNotificationChannelCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.fms#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.fms#InvalidOperationException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.fms#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetPolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetPolicyResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.fms#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.fms#InvalidOperationException": return [3 /*break*/, 4];
                    case "InvalidTypeException": return [3 /*break*/, 6];
                    case "com.amazonaws.fms#InvalidTypeException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.fms#ResourceNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTypeExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetProtectionStatusCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetProtectionStatusCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetProtectionStatusResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetProtectionStatusCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.fms#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidInputException": return [3 /*break*/, 4];
                    case "com.amazonaws.fms#InvalidInputException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.fms#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetProtocolsListCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetProtocolsListCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetProtocolsListResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetProtocolsListCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.fms#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.fms#InvalidOperationException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.fms#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetViolationDetailsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetViolationDetailsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetViolationDetailsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetViolationDetailsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.fms#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidInputException": return [3 /*break*/, 4];
                    case "com.amazonaws.fms#InvalidInputException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.fms#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListAppsListsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListAppsListsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListAppsListsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListAppsListsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.fms#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.fms#InvalidOperationException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.fms#LimitExceededException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.fms#ResourceNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListComplianceStatusCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListComplianceStatusCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListComplianceStatusResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListComplianceStatusCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.fms#InternalErrorException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.fms#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListMemberAccountsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListMemberAccountsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListMemberAccountsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListMemberAccountsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.fms#InternalErrorException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.fms#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListPoliciesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListPoliciesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListPoliciesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListPoliciesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.fms#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.fms#InvalidOperationException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.fms#LimitExceededException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.fms#ResourceNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListProtocolsListsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListProtocolsListsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListProtocolsListsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListProtocolsListsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.fms#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.fms#InvalidOperationException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.fms#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)];
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
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.fms#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidInputException": return [3 /*break*/, 4];
                    case "com.amazonaws.fms#InvalidInputException": return [3 /*break*/, 4];
                    case "InvalidOperationException": return [3 /*break*/, 6];
                    case "com.amazonaws.fms#InvalidOperationException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.fms#ResourceNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutAppsListCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutAppsListCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1PutAppsListResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1PutAppsListCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.fms#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidInputException": return [3 /*break*/, 4];
                    case "com.amazonaws.fms#InvalidInputException": return [3 /*break*/, 4];
                    case "InvalidOperationException": return [3 /*break*/, 6];
                    case "com.amazonaws.fms#InvalidOperationException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.fms#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.fms#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutNotificationChannelCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutNotificationChannelCommandError(output, context)];
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
var deserializeAws_json1_1PutNotificationChannelCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.fms#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.fms#InvalidOperationException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.fms#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutPolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1PutPolicyResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1PutPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.fms#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidInputException": return [3 /*break*/, 4];
                    case "com.amazonaws.fms#InvalidInputException": return [3 /*break*/, 4];
                    case "InvalidOperationException": return [3 /*break*/, 6];
                    case "com.amazonaws.fms#InvalidOperationException": return [3 /*break*/, 6];
                    case "InvalidTypeException": return [3 /*break*/, 8];
                    case "com.amazonaws.fms#InvalidTypeException": return [3 /*break*/, 8];
                    case "LimitExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.fms#LimitExceededException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.fms#ResourceNotFoundException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTypeExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutProtocolsListCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutProtocolsListCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1PutProtocolsListResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1PutProtocolsListCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.fms#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidInputException": return [3 /*break*/, 4];
                    case "com.amazonaws.fms#InvalidInputException": return [3 /*break*/, 4];
                    case "InvalidOperationException": return [3 /*break*/, 6];
                    case "com.amazonaws.fms#InvalidOperationException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.fms#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.fms#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)];
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
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.fms#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidInputException": return [3 /*break*/, 4];
                    case "com.amazonaws.fms#InvalidInputException": return [3 /*break*/, 4];
                    case "InvalidOperationException": return [3 /*break*/, 6];
                    case "com.amazonaws.fms#InvalidOperationException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.fms#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.fms#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)];
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
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.fms#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidInputException": return [3 /*break*/, 4];
                    case "com.amazonaws.fms#InvalidInputException": return [3 /*break*/, 4];
                    case "InvalidOperationException": return [3 /*break*/, 6];
                    case "com.amazonaws.fms#InvalidOperationException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.fms#ResourceNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
var deserializeAws_json1_1InternalErrorExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InternalErrorException(body, context);
        contents = __assign({ name: "InternalErrorException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidInputExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidInputException(body, context);
        contents = __assign({ name: "InvalidInputException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidOperationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidOperationException(body, context);
        contents = __assign({ name: "InvalidOperationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidTypeExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidTypeException(body, context);
        contents = __assign({ name: "InvalidTypeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_json1_1ResourceNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
        contents = __assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_json1_1App = function (input, context) {
    return __assign(__assign(__assign({}, (input.AppName !== undefined && input.AppName !== null && { AppName: input.AppName })), (input.Port !== undefined && input.Port !== null && { Port: input.Port })), (input.Protocol !== undefined && input.Protocol !== null && { Protocol: input.Protocol }));
};
var serializeAws_json1_1AppsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1App(entry, context);
    });
};
var serializeAws_json1_1AppsListData = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AppsList !== undefined &&
        input.AppsList !== null && { AppsList: serializeAws_json1_1AppsList(input.AppsList, context) })), (input.CreateTime !== undefined &&
        input.CreateTime !== null && { CreateTime: Math.round(input.CreateTime.getTime() / 1000) })), (input.LastUpdateTime !== undefined &&
        input.LastUpdateTime !== null && { LastUpdateTime: Math.round(input.LastUpdateTime.getTime() / 1000) })), (input.ListId !== undefined && input.ListId !== null && { ListId: input.ListId })), (input.ListName !== undefined && input.ListName !== null && { ListName: input.ListName })), (input.ListUpdateToken !== undefined &&
        input.ListUpdateToken !== null && { ListUpdateToken: input.ListUpdateToken })), (input.PreviousAppsList !== undefined &&
        input.PreviousAppsList !== null && {
        PreviousAppsList: serializeAws_json1_1PreviousAppsList(input.PreviousAppsList, context),
    }));
};
var serializeAws_json1_1AssociateAdminAccountRequest = function (input, context) {
    return __assign({}, (input.AdminAccount !== undefined && input.AdminAccount !== null && { AdminAccount: input.AdminAccount }));
};
var serializeAws_json1_1CustomerPolicyScopeIdList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1CustomerPolicyScopeMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_json1_1CustomerPolicyScopeIdList(value, context), _b));
    }, {});
};
var serializeAws_json1_1DeleteAppsListRequest = function (input, context) {
    return __assign({}, (input.ListId !== undefined && input.ListId !== null && { ListId: input.ListId }));
};
var serializeAws_json1_1DeleteNotificationChannelRequest = function (input, context) {
    return {};
};
var serializeAws_json1_1DeletePolicyRequest = function (input, context) {
    return __assign(__assign({}, (input.DeleteAllPolicyResources !== undefined &&
        input.DeleteAllPolicyResources !== null && { DeleteAllPolicyResources: input.DeleteAllPolicyResources })), (input.PolicyId !== undefined && input.PolicyId !== null && { PolicyId: input.PolicyId }));
};
var serializeAws_json1_1DeleteProtocolsListRequest = function (input, context) {
    return __assign({}, (input.ListId !== undefined && input.ListId !== null && { ListId: input.ListId }));
};
var serializeAws_json1_1DisassociateAdminAccountRequest = function (input, context) {
    return {};
};
var serializeAws_json1_1GetAdminAccountRequest = function (input, context) {
    return {};
};
var serializeAws_json1_1GetAppsListRequest = function (input, context) {
    return __assign(__assign({}, (input.DefaultList !== undefined && input.DefaultList !== null && { DefaultList: input.DefaultList })), (input.ListId !== undefined && input.ListId !== null && { ListId: input.ListId }));
};
var serializeAws_json1_1GetComplianceDetailRequest = function (input, context) {
    return __assign(__assign({}, (input.MemberAccount !== undefined && input.MemberAccount !== null && { MemberAccount: input.MemberAccount })), (input.PolicyId !== undefined && input.PolicyId !== null && { PolicyId: input.PolicyId }));
};
var serializeAws_json1_1GetNotificationChannelRequest = function (input, context) {
    return {};
};
var serializeAws_json1_1GetPolicyRequest = function (input, context) {
    return __assign({}, (input.PolicyId !== undefined && input.PolicyId !== null && { PolicyId: input.PolicyId }));
};
var serializeAws_json1_1GetProtectionStatusRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.EndTime !== undefined &&
        input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.MemberAccountId !== undefined &&
        input.MemberAccountId !== null && { MemberAccountId: input.MemberAccountId })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.PolicyId !== undefined && input.PolicyId !== null && { PolicyId: input.PolicyId })), (input.StartTime !== undefined &&
        input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }));
};
var serializeAws_json1_1GetProtocolsListRequest = function (input, context) {
    return __assign(__assign({}, (input.DefaultList !== undefined && input.DefaultList !== null && { DefaultList: input.DefaultList })), (input.ListId !== undefined && input.ListId !== null && { ListId: input.ListId }));
};
var serializeAws_json1_1GetViolationDetailsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.MemberAccount !== undefined && input.MemberAccount !== null && { MemberAccount: input.MemberAccount })), (input.PolicyId !== undefined && input.PolicyId !== null && { PolicyId: input.PolicyId })), (input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId })), (input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }));
};
var serializeAws_json1_1ListAppsListsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.DefaultLists !== undefined && input.DefaultLists !== null && { DefaultLists: input.DefaultLists })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1ListComplianceStatusRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.PolicyId !== undefined && input.PolicyId !== null && { PolicyId: input.PolicyId }));
};
var serializeAws_json1_1ListMemberAccountsRequest = function (input, context) {
    return __assign(__assign({}, (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1ListPoliciesRequest = function (input, context) {
    return __assign(__assign({}, (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1ListProtocolsListsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.DefaultLists !== undefined && input.DefaultLists !== null && { DefaultLists: input.DefaultLists })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1ListTagsForResourceRequest = function (input, context) {
    return __assign({}, (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }));
};
var serializeAws_json1_1Policy = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.ExcludeMap !== undefined &&
        input.ExcludeMap !== null && {
        ExcludeMap: serializeAws_json1_1CustomerPolicyScopeMap(input.ExcludeMap, context),
    })), (input.ExcludeResourceTags !== undefined &&
        input.ExcludeResourceTags !== null && { ExcludeResourceTags: input.ExcludeResourceTags })), (input.IncludeMap !== undefined &&
        input.IncludeMap !== null && {
        IncludeMap: serializeAws_json1_1CustomerPolicyScopeMap(input.IncludeMap, context),
    })), (input.PolicyId !== undefined && input.PolicyId !== null && { PolicyId: input.PolicyId })), (input.PolicyName !== undefined && input.PolicyName !== null && { PolicyName: input.PolicyName })), (input.PolicyUpdateToken !== undefined &&
        input.PolicyUpdateToken !== null && { PolicyUpdateToken: input.PolicyUpdateToken })), (input.RemediationEnabled !== undefined &&
        input.RemediationEnabled !== null && { RemediationEnabled: input.RemediationEnabled })), (input.ResourceTags !== undefined &&
        input.ResourceTags !== null && { ResourceTags: serializeAws_json1_1ResourceTags(input.ResourceTags, context) })), (input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType })), (input.ResourceTypeList !== undefined &&
        input.ResourceTypeList !== null && {
        ResourceTypeList: serializeAws_json1_1ResourceTypeList(input.ResourceTypeList, context),
    })), (input.SecurityServicePolicyData !== undefined &&
        input.SecurityServicePolicyData !== null && {
        SecurityServicePolicyData: serializeAws_json1_1SecurityServicePolicyData(input.SecurityServicePolicyData, context),
    }));
};
var serializeAws_json1_1PreviousAppsList = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_json1_1AppsList(value, context), _b));
    }, {});
};
var serializeAws_json1_1PreviousProtocolsList = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_json1_1ProtocolsList(value, context), _b));
    }, {});
};
var serializeAws_json1_1ProtocolsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ProtocolsListData = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.CreateTime !== undefined &&
        input.CreateTime !== null && { CreateTime: Math.round(input.CreateTime.getTime() / 1000) })), (input.LastUpdateTime !== undefined &&
        input.LastUpdateTime !== null && { LastUpdateTime: Math.round(input.LastUpdateTime.getTime() / 1000) })), (input.ListId !== undefined && input.ListId !== null && { ListId: input.ListId })), (input.ListName !== undefined && input.ListName !== null && { ListName: input.ListName })), (input.ListUpdateToken !== undefined &&
        input.ListUpdateToken !== null && { ListUpdateToken: input.ListUpdateToken })), (input.PreviousProtocolsList !== undefined &&
        input.PreviousProtocolsList !== null && {
        PreviousProtocolsList: serializeAws_json1_1PreviousProtocolsList(input.PreviousProtocolsList, context),
    })), (input.ProtocolsList !== undefined &&
        input.ProtocolsList !== null && {
        ProtocolsList: serializeAws_json1_1ProtocolsList(input.ProtocolsList, context),
    }));
};
var serializeAws_json1_1PutAppsListRequest = function (input, context) {
    return __assign(__assign({}, (input.AppsList !== undefined &&
        input.AppsList !== null && { AppsList: serializeAws_json1_1AppsListData(input.AppsList, context) })), (input.TagList !== undefined &&
        input.TagList !== null && { TagList: serializeAws_json1_1TagList(input.TagList, context) }));
};
var serializeAws_json1_1PutNotificationChannelRequest = function (input, context) {
    return __assign(__assign({}, (input.SnsRoleName !== undefined && input.SnsRoleName !== null && { SnsRoleName: input.SnsRoleName })), (input.SnsTopicArn !== undefined && input.SnsTopicArn !== null && { SnsTopicArn: input.SnsTopicArn }));
};
var serializeAws_json1_1PutPolicyRequest = function (input, context) {
    return __assign(__assign({}, (input.Policy !== undefined &&
        input.Policy !== null && { Policy: serializeAws_json1_1Policy(input.Policy, context) })), (input.TagList !== undefined &&
        input.TagList !== null && { TagList: serializeAws_json1_1TagList(input.TagList, context) }));
};
var serializeAws_json1_1PutProtocolsListRequest = function (input, context) {
    return __assign(__assign({}, (input.ProtocolsList !== undefined &&
        input.ProtocolsList !== null && {
        ProtocolsList: serializeAws_json1_1ProtocolsListData(input.ProtocolsList, context),
    })), (input.TagList !== undefined &&
        input.TagList !== null && { TagList: serializeAws_json1_1TagList(input.TagList, context) }));
};
var serializeAws_json1_1ResourceTag = function (input, context) {
    return __assign(__assign({}, (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_json1_1ResourceTags = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ResourceTag(entry, context);
    });
};
var serializeAws_json1_1ResourceTypeList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1SecurityServicePolicyData = function (input, context) {
    return __assign(__assign({}, (input.ManagedServiceData !== undefined &&
        input.ManagedServiceData !== null && { ManagedServiceData: input.ManagedServiceData })), (input.Type !== undefined && input.Type !== null && { Type: input.Type }));
};
var serializeAws_json1_1Tag = function (input, context) {
    return __assign(__assign({}, (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
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
var serializeAws_json1_1TagResourceRequest = function (input, context) {
    return __assign(__assign({}, (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn })), (input.TagList !== undefined &&
        input.TagList !== null && { TagList: serializeAws_json1_1TagList(input.TagList, context) }));
};
var serializeAws_json1_1UntagResourceRequest = function (input, context) {
    return __assign(__assign({}, (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn })), (input.TagKeys !== undefined &&
        input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }));
};
var deserializeAws_json1_1App = function (output, context) {
    return {
        AppName: output.AppName !== undefined && output.AppName !== null ? output.AppName : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
        Protocol: output.Protocol !== undefined && output.Protocol !== null ? output.Protocol : undefined,
    };
};
var deserializeAws_json1_1AppsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1App(entry, context);
    });
};
var deserializeAws_json1_1AppsListData = function (output, context) {
    return {
        AppsList: output.AppsList !== undefined && output.AppsList !== null
            ? deserializeAws_json1_1AppsList(output.AppsList, context)
            : undefined,
        CreateTime: output.CreateTime !== undefined && output.CreateTime !== null
            ? new Date(Math.round(output.CreateTime * 1000))
            : undefined,
        LastUpdateTime: output.LastUpdateTime !== undefined && output.LastUpdateTime !== null
            ? new Date(Math.round(output.LastUpdateTime * 1000))
            : undefined,
        ListId: output.ListId !== undefined && output.ListId !== null ? output.ListId : undefined,
        ListName: output.ListName !== undefined && output.ListName !== null ? output.ListName : undefined,
        ListUpdateToken: output.ListUpdateToken !== undefined && output.ListUpdateToken !== null ? output.ListUpdateToken : undefined,
        PreviousAppsList: output.PreviousAppsList !== undefined && output.PreviousAppsList !== null
            ? deserializeAws_json1_1PreviousAppsList(output.PreviousAppsList, context)
            : undefined,
    };
};
var deserializeAws_json1_1AppsListDataSummary = function (output, context) {
    return {
        AppsList: output.AppsList !== undefined && output.AppsList !== null
            ? deserializeAws_json1_1AppsList(output.AppsList, context)
            : undefined,
        ListArn: output.ListArn !== undefined && output.ListArn !== null ? output.ListArn : undefined,
        ListId: output.ListId !== undefined && output.ListId !== null ? output.ListId : undefined,
        ListName: output.ListName !== undefined && output.ListName !== null ? output.ListName : undefined,
    };
};
var deserializeAws_json1_1AppsListsData = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AppsListDataSummary(entry, context);
    });
};
var deserializeAws_json1_1AwsEc2InstanceViolation = function (output, context) {
    return {
        AwsEc2NetworkInterfaceViolations: output.AwsEc2NetworkInterfaceViolations !== undefined && output.AwsEc2NetworkInterfaceViolations !== null
            ? deserializeAws_json1_1AwsEc2NetworkInterfaceViolations(output.AwsEc2NetworkInterfaceViolations, context)
            : undefined,
        ViolationTarget: output.ViolationTarget !== undefined && output.ViolationTarget !== null ? output.ViolationTarget : undefined,
    };
};
var deserializeAws_json1_1AwsEc2NetworkInterfaceViolation = function (output, context) {
    return {
        ViolatingSecurityGroups: output.ViolatingSecurityGroups !== undefined && output.ViolatingSecurityGroups !== null
            ? deserializeAws_json1_1ResourceIdList(output.ViolatingSecurityGroups, context)
            : undefined,
        ViolationTarget: output.ViolationTarget !== undefined && output.ViolationTarget !== null ? output.ViolationTarget : undefined,
    };
};
var deserializeAws_json1_1AwsEc2NetworkInterfaceViolations = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AwsEc2NetworkInterfaceViolation(entry, context);
    });
};
var deserializeAws_json1_1AwsVPCSecurityGroupViolation = function (output, context) {
    return {
        PartialMatches: output.PartialMatches !== undefined && output.PartialMatches !== null
            ? deserializeAws_json1_1PartialMatches(output.PartialMatches, context)
            : undefined,
        PossibleSecurityGroupRemediationActions: output.PossibleSecurityGroupRemediationActions !== undefined &&
            output.PossibleSecurityGroupRemediationActions !== null
            ? deserializeAws_json1_1SecurityGroupRemediationActions(output.PossibleSecurityGroupRemediationActions, context)
            : undefined,
        ViolationTarget: output.ViolationTarget !== undefined && output.ViolationTarget !== null ? output.ViolationTarget : undefined,
        ViolationTargetDescription: output.ViolationTargetDescription !== undefined && output.ViolationTargetDescription !== null
            ? output.ViolationTargetDescription
            : undefined,
    };
};
var deserializeAws_json1_1ComplianceViolator = function (output, context) {
    return {
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
        ViolationReason: output.ViolationReason !== undefined && output.ViolationReason !== null ? output.ViolationReason : undefined,
    };
};
var deserializeAws_json1_1ComplianceViolators = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ComplianceViolator(entry, context);
    });
};
var deserializeAws_json1_1CustomerPolicyScopeIdList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1CustomerPolicyScopeMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_json1_1CustomerPolicyScopeIdList(value, context), _b));
    }, {});
};
var deserializeAws_json1_1DnsDuplicateRuleGroupViolation = function (output, context) {
    return {
        ViolationTarget: output.ViolationTarget !== undefined && output.ViolationTarget !== null ? output.ViolationTarget : undefined,
        ViolationTargetDescription: output.ViolationTargetDescription !== undefined && output.ViolationTargetDescription !== null
            ? output.ViolationTargetDescription
            : undefined,
    };
};
var deserializeAws_json1_1DnsRuleGroupLimitExceededViolation = function (output, context) {
    return {
        NumberOfRuleGroupsAlreadyAssociated: output.NumberOfRuleGroupsAlreadyAssociated !== undefined && output.NumberOfRuleGroupsAlreadyAssociated !== null
            ? output.NumberOfRuleGroupsAlreadyAssociated
            : undefined,
        ViolationTarget: output.ViolationTarget !== undefined && output.ViolationTarget !== null ? output.ViolationTarget : undefined,
        ViolationTargetDescription: output.ViolationTargetDescription !== undefined && output.ViolationTargetDescription !== null
            ? output.ViolationTargetDescription
            : undefined,
    };
};
var deserializeAws_json1_1DnsRuleGroupPriorities = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1DnsRuleGroupPriorityConflictViolation = function (output, context) {
    return {
        ConflictingPolicyId: output.ConflictingPolicyId !== undefined && output.ConflictingPolicyId !== null
            ? output.ConflictingPolicyId
            : undefined,
        ConflictingPriority: output.ConflictingPriority !== undefined && output.ConflictingPriority !== null
            ? output.ConflictingPriority
            : undefined,
        UnavailablePriorities: output.UnavailablePriorities !== undefined && output.UnavailablePriorities !== null
            ? deserializeAws_json1_1DnsRuleGroupPriorities(output.UnavailablePriorities, context)
            : undefined,
        ViolationTarget: output.ViolationTarget !== undefined && output.ViolationTarget !== null ? output.ViolationTarget : undefined,
        ViolationTargetDescription: output.ViolationTargetDescription !== undefined && output.ViolationTargetDescription !== null
            ? output.ViolationTargetDescription
            : undefined,
    };
};
var deserializeAws_json1_1EvaluationResult = function (output, context) {
    return {
        ComplianceStatus: output.ComplianceStatus !== undefined && output.ComplianceStatus !== null ? output.ComplianceStatus : undefined,
        EvaluationLimitExceeded: output.EvaluationLimitExceeded !== undefined && output.EvaluationLimitExceeded !== null
            ? output.EvaluationLimitExceeded
            : undefined,
        ViolatorCount: output.ViolatorCount !== undefined && output.ViolatorCount !== null ? output.ViolatorCount : undefined,
    };
};
var deserializeAws_json1_1EvaluationResults = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EvaluationResult(entry, context);
    });
};
var deserializeAws_json1_1GetAdminAccountResponse = function (output, context) {
    return {
        AdminAccount: output.AdminAccount !== undefined && output.AdminAccount !== null ? output.AdminAccount : undefined,
        RoleStatus: output.RoleStatus !== undefined && output.RoleStatus !== null ? output.RoleStatus : undefined,
    };
};
var deserializeAws_json1_1GetAppsListResponse = function (output, context) {
    return {
        AppsList: output.AppsList !== undefined && output.AppsList !== null
            ? deserializeAws_json1_1AppsListData(output.AppsList, context)
            : undefined,
        AppsListArn: output.AppsListArn !== undefined && output.AppsListArn !== null ? output.AppsListArn : undefined,
    };
};
var deserializeAws_json1_1GetComplianceDetailResponse = function (output, context) {
    return {
        PolicyComplianceDetail: output.PolicyComplianceDetail !== undefined && output.PolicyComplianceDetail !== null
            ? deserializeAws_json1_1PolicyComplianceDetail(output.PolicyComplianceDetail, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetNotificationChannelResponse = function (output, context) {
    return {
        SnsRoleName: output.SnsRoleName !== undefined && output.SnsRoleName !== null ? output.SnsRoleName : undefined,
        SnsTopicArn: output.SnsTopicArn !== undefined && output.SnsTopicArn !== null ? output.SnsTopicArn : undefined,
    };
};
var deserializeAws_json1_1GetPolicyResponse = function (output, context) {
    return {
        Policy: output.Policy !== undefined && output.Policy !== null
            ? deserializeAws_json1_1Policy(output.Policy, context)
            : undefined,
        PolicyArn: output.PolicyArn !== undefined && output.PolicyArn !== null ? output.PolicyArn : undefined,
    };
};
var deserializeAws_json1_1GetProtectionStatusResponse = function (output, context) {
    return {
        AdminAccountId: output.AdminAccountId !== undefined && output.AdminAccountId !== null ? output.AdminAccountId : undefined,
        Data: output.Data !== undefined && output.Data !== null ? output.Data : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        ServiceType: output.ServiceType !== undefined && output.ServiceType !== null ? output.ServiceType : undefined,
    };
};
var deserializeAws_json1_1GetProtocolsListResponse = function (output, context) {
    return {
        ProtocolsList: output.ProtocolsList !== undefined && output.ProtocolsList !== null
            ? deserializeAws_json1_1ProtocolsListData(output.ProtocolsList, context)
            : undefined,
        ProtocolsListArn: output.ProtocolsListArn !== undefined && output.ProtocolsListArn !== null ? output.ProtocolsListArn : undefined,
    };
};
var deserializeAws_json1_1GetViolationDetailsResponse = function (output, context) {
    return {
        ViolationDetail: output.ViolationDetail !== undefined && output.ViolationDetail !== null
            ? deserializeAws_json1_1ViolationDetail(output.ViolationDetail, context)
            : undefined,
    };
};
var deserializeAws_json1_1InternalErrorException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidInputException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidOperationException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidTypeException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1IssueInfoMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_json1_1LimitExceededException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1ListAppsListsResponse = function (output, context) {
    return {
        AppsLists: output.AppsLists !== undefined && output.AppsLists !== null
            ? deserializeAws_json1_1AppsListsData(output.AppsLists, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1ListComplianceStatusResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        PolicyComplianceStatusList: output.PolicyComplianceStatusList !== undefined && output.PolicyComplianceStatusList !== null
            ? deserializeAws_json1_1PolicyComplianceStatusList(output.PolicyComplianceStatusList, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListMemberAccountsResponse = function (output, context) {
    return {
        MemberAccounts: output.MemberAccounts !== undefined && output.MemberAccounts !== null
            ? deserializeAws_json1_1MemberAccounts(output.MemberAccounts, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1ListPoliciesResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        PolicyList: output.PolicyList !== undefined && output.PolicyList !== null
            ? deserializeAws_json1_1PolicySummaryList(output.PolicyList, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListProtocolsListsResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        ProtocolsLists: output.ProtocolsLists !== undefined && output.ProtocolsLists !== null
            ? deserializeAws_json1_1ProtocolsListsData(output.ProtocolsLists, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListTagsForResourceResponse = function (output, context) {
    return {
        TagList: output.TagList !== undefined && output.TagList !== null
            ? deserializeAws_json1_1TagList(output.TagList, context)
            : undefined,
    };
};
var deserializeAws_json1_1MemberAccounts = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1NetworkFirewallActionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1NetworkFirewallMissingExpectedRTViolation = function (output, context) {
    return {
        AvailabilityZone: output.AvailabilityZone !== undefined && output.AvailabilityZone !== null ? output.AvailabilityZone : undefined,
        CurrentRouteTable: output.CurrentRouteTable !== undefined && output.CurrentRouteTable !== null
            ? output.CurrentRouteTable
            : undefined,
        ExpectedRouteTable: output.ExpectedRouteTable !== undefined && output.ExpectedRouteTable !== null
            ? output.ExpectedRouteTable
            : undefined,
        VPC: output.VPC !== undefined && output.VPC !== null ? output.VPC : undefined,
        ViolationTarget: output.ViolationTarget !== undefined && output.ViolationTarget !== null ? output.ViolationTarget : undefined,
    };
};
var deserializeAws_json1_1NetworkFirewallMissingFirewallViolation = function (output, context) {
    return {
        AvailabilityZone: output.AvailabilityZone !== undefined && output.AvailabilityZone !== null ? output.AvailabilityZone : undefined,
        TargetViolationReason: output.TargetViolationReason !== undefined && output.TargetViolationReason !== null
            ? output.TargetViolationReason
            : undefined,
        VPC: output.VPC !== undefined && output.VPC !== null ? output.VPC : undefined,
        ViolationTarget: output.ViolationTarget !== undefined && output.ViolationTarget !== null ? output.ViolationTarget : undefined,
    };
};
var deserializeAws_json1_1NetworkFirewallMissingSubnetViolation = function (output, context) {
    return {
        AvailabilityZone: output.AvailabilityZone !== undefined && output.AvailabilityZone !== null ? output.AvailabilityZone : undefined,
        TargetViolationReason: output.TargetViolationReason !== undefined && output.TargetViolationReason !== null
            ? output.TargetViolationReason
            : undefined,
        VPC: output.VPC !== undefined && output.VPC !== null ? output.VPC : undefined,
        ViolationTarget: output.ViolationTarget !== undefined && output.ViolationTarget !== null ? output.ViolationTarget : undefined,
    };
};
var deserializeAws_json1_1NetworkFirewallPolicyDescription = function (output, context) {
    return {
        StatefulRuleGroups: output.StatefulRuleGroups !== undefined && output.StatefulRuleGroups !== null
            ? deserializeAws_json1_1StatefulRuleGroupList(output.StatefulRuleGroups, context)
            : undefined,
        StatelessCustomActions: output.StatelessCustomActions !== undefined && output.StatelessCustomActions !== null
            ? deserializeAws_json1_1NetworkFirewallActionList(output.StatelessCustomActions, context)
            : undefined,
        StatelessDefaultActions: output.StatelessDefaultActions !== undefined && output.StatelessDefaultActions !== null
            ? deserializeAws_json1_1NetworkFirewallActionList(output.StatelessDefaultActions, context)
            : undefined,
        StatelessFragmentDefaultActions: output.StatelessFragmentDefaultActions !== undefined && output.StatelessFragmentDefaultActions !== null
            ? deserializeAws_json1_1NetworkFirewallActionList(output.StatelessFragmentDefaultActions, context)
            : undefined,
        StatelessRuleGroups: output.StatelessRuleGroups !== undefined && output.StatelessRuleGroups !== null
            ? deserializeAws_json1_1StatelessRuleGroupList(output.StatelessRuleGroups, context)
            : undefined,
    };
};
var deserializeAws_json1_1NetworkFirewallPolicyModifiedViolation = function (output, context) {
    return {
        CurrentPolicyDescription: output.CurrentPolicyDescription !== undefined && output.CurrentPolicyDescription !== null
            ? deserializeAws_json1_1NetworkFirewallPolicyDescription(output.CurrentPolicyDescription, context)
            : undefined,
        ExpectedPolicyDescription: output.ExpectedPolicyDescription !== undefined && output.ExpectedPolicyDescription !== null
            ? deserializeAws_json1_1NetworkFirewallPolicyDescription(output.ExpectedPolicyDescription, context)
            : undefined,
        ViolationTarget: output.ViolationTarget !== undefined && output.ViolationTarget !== null ? output.ViolationTarget : undefined,
    };
};
var deserializeAws_json1_1PartialMatch = function (output, context) {
    return {
        Reference: output.Reference !== undefined && output.Reference !== null ? output.Reference : undefined,
        TargetViolationReasons: output.TargetViolationReasons !== undefined && output.TargetViolationReasons !== null
            ? deserializeAws_json1_1TargetViolationReasons(output.TargetViolationReasons, context)
            : undefined,
    };
};
var deserializeAws_json1_1PartialMatches = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PartialMatch(entry, context);
    });
};
var deserializeAws_json1_1Policy = function (output, context) {
    return {
        ExcludeMap: output.ExcludeMap !== undefined && output.ExcludeMap !== null
            ? deserializeAws_json1_1CustomerPolicyScopeMap(output.ExcludeMap, context)
            : undefined,
        ExcludeResourceTags: output.ExcludeResourceTags !== undefined && output.ExcludeResourceTags !== null
            ? output.ExcludeResourceTags
            : undefined,
        IncludeMap: output.IncludeMap !== undefined && output.IncludeMap !== null
            ? deserializeAws_json1_1CustomerPolicyScopeMap(output.IncludeMap, context)
            : undefined,
        PolicyId: output.PolicyId !== undefined && output.PolicyId !== null ? output.PolicyId : undefined,
        PolicyName: output.PolicyName !== undefined && output.PolicyName !== null ? output.PolicyName : undefined,
        PolicyUpdateToken: output.PolicyUpdateToken !== undefined && output.PolicyUpdateToken !== null
            ? output.PolicyUpdateToken
            : undefined,
        RemediationEnabled: output.RemediationEnabled !== undefined && output.RemediationEnabled !== null
            ? output.RemediationEnabled
            : undefined,
        ResourceTags: output.ResourceTags !== undefined && output.ResourceTags !== null
            ? deserializeAws_json1_1ResourceTags(output.ResourceTags, context)
            : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
        ResourceTypeList: output.ResourceTypeList !== undefined && output.ResourceTypeList !== null
            ? deserializeAws_json1_1ResourceTypeList(output.ResourceTypeList, context)
            : undefined,
        SecurityServicePolicyData: output.SecurityServicePolicyData !== undefined && output.SecurityServicePolicyData !== null
            ? deserializeAws_json1_1SecurityServicePolicyData(output.SecurityServicePolicyData, context)
            : undefined,
    };
};
var deserializeAws_json1_1PolicyComplianceDetail = function (output, context) {
    return {
        EvaluationLimitExceeded: output.EvaluationLimitExceeded !== undefined && output.EvaluationLimitExceeded !== null
            ? output.EvaluationLimitExceeded
            : undefined,
        ExpiredAt: output.ExpiredAt !== undefined && output.ExpiredAt !== null
            ? new Date(Math.round(output.ExpiredAt * 1000))
            : undefined,
        IssueInfoMap: output.IssueInfoMap !== undefined && output.IssueInfoMap !== null
            ? deserializeAws_json1_1IssueInfoMap(output.IssueInfoMap, context)
            : undefined,
        MemberAccount: output.MemberAccount !== undefined && output.MemberAccount !== null ? output.MemberAccount : undefined,
        PolicyId: output.PolicyId !== undefined && output.PolicyId !== null ? output.PolicyId : undefined,
        PolicyOwner: output.PolicyOwner !== undefined && output.PolicyOwner !== null ? output.PolicyOwner : undefined,
        Violators: output.Violators !== undefined && output.Violators !== null
            ? deserializeAws_json1_1ComplianceViolators(output.Violators, context)
            : undefined,
    };
};
var deserializeAws_json1_1PolicyComplianceStatus = function (output, context) {
    return {
        EvaluationResults: output.EvaluationResults !== undefined && output.EvaluationResults !== null
            ? deserializeAws_json1_1EvaluationResults(output.EvaluationResults, context)
            : undefined,
        IssueInfoMap: output.IssueInfoMap !== undefined && output.IssueInfoMap !== null
            ? deserializeAws_json1_1IssueInfoMap(output.IssueInfoMap, context)
            : undefined,
        LastUpdated: output.LastUpdated !== undefined && output.LastUpdated !== null
            ? new Date(Math.round(output.LastUpdated * 1000))
            : undefined,
        MemberAccount: output.MemberAccount !== undefined && output.MemberAccount !== null ? output.MemberAccount : undefined,
        PolicyId: output.PolicyId !== undefined && output.PolicyId !== null ? output.PolicyId : undefined,
        PolicyName: output.PolicyName !== undefined && output.PolicyName !== null ? output.PolicyName : undefined,
        PolicyOwner: output.PolicyOwner !== undefined && output.PolicyOwner !== null ? output.PolicyOwner : undefined,
    };
};
var deserializeAws_json1_1PolicyComplianceStatusList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PolicyComplianceStatus(entry, context);
    });
};
var deserializeAws_json1_1PolicySummary = function (output, context) {
    return {
        PolicyArn: output.PolicyArn !== undefined && output.PolicyArn !== null ? output.PolicyArn : undefined,
        PolicyId: output.PolicyId !== undefined && output.PolicyId !== null ? output.PolicyId : undefined,
        PolicyName: output.PolicyName !== undefined && output.PolicyName !== null ? output.PolicyName : undefined,
        RemediationEnabled: output.RemediationEnabled !== undefined && output.RemediationEnabled !== null
            ? output.RemediationEnabled
            : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
        SecurityServiceType: output.SecurityServiceType !== undefined && output.SecurityServiceType !== null
            ? output.SecurityServiceType
            : undefined,
    };
};
var deserializeAws_json1_1PolicySummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PolicySummary(entry, context);
    });
};
var deserializeAws_json1_1PreviousAppsList = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_json1_1AppsList(value, context), _b));
    }, {});
};
var deserializeAws_json1_1PreviousProtocolsList = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_json1_1ProtocolsList(value, context), _b));
    }, {});
};
var deserializeAws_json1_1ProtocolsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1ProtocolsListData = function (output, context) {
    return {
        CreateTime: output.CreateTime !== undefined && output.CreateTime !== null
            ? new Date(Math.round(output.CreateTime * 1000))
            : undefined,
        LastUpdateTime: output.LastUpdateTime !== undefined && output.LastUpdateTime !== null
            ? new Date(Math.round(output.LastUpdateTime * 1000))
            : undefined,
        ListId: output.ListId !== undefined && output.ListId !== null ? output.ListId : undefined,
        ListName: output.ListName !== undefined && output.ListName !== null ? output.ListName : undefined,
        ListUpdateToken: output.ListUpdateToken !== undefined && output.ListUpdateToken !== null ? output.ListUpdateToken : undefined,
        PreviousProtocolsList: output.PreviousProtocolsList !== undefined && output.PreviousProtocolsList !== null
            ? deserializeAws_json1_1PreviousProtocolsList(output.PreviousProtocolsList, context)
            : undefined,
        ProtocolsList: output.ProtocolsList !== undefined && output.ProtocolsList !== null
            ? deserializeAws_json1_1ProtocolsList(output.ProtocolsList, context)
            : undefined,
    };
};
var deserializeAws_json1_1ProtocolsListDataSummary = function (output, context) {
    return {
        ListArn: output.ListArn !== undefined && output.ListArn !== null ? output.ListArn : undefined,
        ListId: output.ListId !== undefined && output.ListId !== null ? output.ListId : undefined,
        ListName: output.ListName !== undefined && output.ListName !== null ? output.ListName : undefined,
        ProtocolsList: output.ProtocolsList !== undefined && output.ProtocolsList !== null
            ? deserializeAws_json1_1ProtocolsList(output.ProtocolsList, context)
            : undefined,
    };
};
var deserializeAws_json1_1ProtocolsListsData = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProtocolsListDataSummary(entry, context);
    });
};
var deserializeAws_json1_1PutAppsListResponse = function (output, context) {
    return {
        AppsList: output.AppsList !== undefined && output.AppsList !== null
            ? deserializeAws_json1_1AppsListData(output.AppsList, context)
            : undefined,
        AppsListArn: output.AppsListArn !== undefined && output.AppsListArn !== null ? output.AppsListArn : undefined,
    };
};
var deserializeAws_json1_1PutPolicyResponse = function (output, context) {
    return {
        Policy: output.Policy !== undefined && output.Policy !== null
            ? deserializeAws_json1_1Policy(output.Policy, context)
            : undefined,
        PolicyArn: output.PolicyArn !== undefined && output.PolicyArn !== null ? output.PolicyArn : undefined,
    };
};
var deserializeAws_json1_1PutProtocolsListResponse = function (output, context) {
    return {
        ProtocolsList: output.ProtocolsList !== undefined && output.ProtocolsList !== null
            ? deserializeAws_json1_1ProtocolsListData(output.ProtocolsList, context)
            : undefined,
        ProtocolsListArn: output.ProtocolsListArn !== undefined && output.ProtocolsListArn !== null ? output.ProtocolsListArn : undefined,
    };
};
var deserializeAws_json1_1ResourceIdList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1ResourceNotFoundException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1ResourceTag = function (output, context) {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_json1_1ResourceTags = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResourceTag(entry, context);
    });
};
var deserializeAws_json1_1ResourceTypeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1ResourceViolation = function (output, context) {
    return {
        AwsEc2InstanceViolation: output.AwsEc2InstanceViolation !== undefined && output.AwsEc2InstanceViolation !== null
            ? deserializeAws_json1_1AwsEc2InstanceViolation(output.AwsEc2InstanceViolation, context)
            : undefined,
        AwsEc2NetworkInterfaceViolation: output.AwsEc2NetworkInterfaceViolation !== undefined && output.AwsEc2NetworkInterfaceViolation !== null
            ? deserializeAws_json1_1AwsEc2NetworkInterfaceViolation(output.AwsEc2NetworkInterfaceViolation, context)
            : undefined,
        AwsVPCSecurityGroupViolation: output.AwsVPCSecurityGroupViolation !== undefined && output.AwsVPCSecurityGroupViolation !== null
            ? deserializeAws_json1_1AwsVPCSecurityGroupViolation(output.AwsVPCSecurityGroupViolation, context)
            : undefined,
        DnsDuplicateRuleGroupViolation: output.DnsDuplicateRuleGroupViolation !== undefined && output.DnsDuplicateRuleGroupViolation !== null
            ? deserializeAws_json1_1DnsDuplicateRuleGroupViolation(output.DnsDuplicateRuleGroupViolation, context)
            : undefined,
        DnsRuleGroupLimitExceededViolation: output.DnsRuleGroupLimitExceededViolation !== undefined && output.DnsRuleGroupLimitExceededViolation !== null
            ? deserializeAws_json1_1DnsRuleGroupLimitExceededViolation(output.DnsRuleGroupLimitExceededViolation, context)
            : undefined,
        DnsRuleGroupPriorityConflictViolation: output.DnsRuleGroupPriorityConflictViolation !== undefined &&
            output.DnsRuleGroupPriorityConflictViolation !== null
            ? deserializeAws_json1_1DnsRuleGroupPriorityConflictViolation(output.DnsRuleGroupPriorityConflictViolation, context)
            : undefined,
        NetworkFirewallMissingExpectedRTViolation: output.NetworkFirewallMissingExpectedRTViolation !== undefined &&
            output.NetworkFirewallMissingExpectedRTViolation !== null
            ? deserializeAws_json1_1NetworkFirewallMissingExpectedRTViolation(output.NetworkFirewallMissingExpectedRTViolation, context)
            : undefined,
        NetworkFirewallMissingFirewallViolation: output.NetworkFirewallMissingFirewallViolation !== undefined &&
            output.NetworkFirewallMissingFirewallViolation !== null
            ? deserializeAws_json1_1NetworkFirewallMissingFirewallViolation(output.NetworkFirewallMissingFirewallViolation, context)
            : undefined,
        NetworkFirewallMissingSubnetViolation: output.NetworkFirewallMissingSubnetViolation !== undefined &&
            output.NetworkFirewallMissingSubnetViolation !== null
            ? deserializeAws_json1_1NetworkFirewallMissingSubnetViolation(output.NetworkFirewallMissingSubnetViolation, context)
            : undefined,
        NetworkFirewallPolicyModifiedViolation: output.NetworkFirewallPolicyModifiedViolation !== undefined &&
            output.NetworkFirewallPolicyModifiedViolation !== null
            ? deserializeAws_json1_1NetworkFirewallPolicyModifiedViolation(output.NetworkFirewallPolicyModifiedViolation, context)
            : undefined,
    };
};
var deserializeAws_json1_1ResourceViolations = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResourceViolation(entry, context);
    });
};
var deserializeAws_json1_1SecurityGroupRemediationAction = function (output, context) {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        IsDefaultAction: output.IsDefaultAction !== undefined && output.IsDefaultAction !== null ? output.IsDefaultAction : undefined,
        RemediationActionType: output.RemediationActionType !== undefined && output.RemediationActionType !== null
            ? output.RemediationActionType
            : undefined,
        RemediationResult: output.RemediationResult !== undefined && output.RemediationResult !== null
            ? deserializeAws_json1_1SecurityGroupRuleDescription(output.RemediationResult, context)
            : undefined,
    };
};
var deserializeAws_json1_1SecurityGroupRemediationActions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SecurityGroupRemediationAction(entry, context);
    });
};
var deserializeAws_json1_1SecurityGroupRuleDescription = function (output, context) {
    return {
        FromPort: output.FromPort !== undefined && output.FromPort !== null ? output.FromPort : undefined,
        IPV4Range: output.IPV4Range !== undefined && output.IPV4Range !== null ? output.IPV4Range : undefined,
        IPV6Range: output.IPV6Range !== undefined && output.IPV6Range !== null ? output.IPV6Range : undefined,
        PrefixListId: output.PrefixListId !== undefined && output.PrefixListId !== null ? output.PrefixListId : undefined,
        Protocol: output.Protocol !== undefined && output.Protocol !== null ? output.Protocol : undefined,
        ToPort: output.ToPort !== undefined && output.ToPort !== null ? output.ToPort : undefined,
    };
};
var deserializeAws_json1_1SecurityServicePolicyData = function (output, context) {
    return {
        ManagedServiceData: output.ManagedServiceData !== undefined && output.ManagedServiceData !== null
            ? output.ManagedServiceData
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
var deserializeAws_json1_1StatefulRuleGroup = function (output, context) {
    return {
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
        RuleGroupName: output.RuleGroupName !== undefined && output.RuleGroupName !== null ? output.RuleGroupName : undefined,
    };
};
var deserializeAws_json1_1StatefulRuleGroupList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1StatefulRuleGroup(entry, context);
    });
};
var deserializeAws_json1_1StatelessRuleGroup = function (output, context) {
    return {
        Priority: output.Priority !== undefined && output.Priority !== null ? output.Priority : undefined,
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
        RuleGroupName: output.RuleGroupName !== undefined && output.RuleGroupName !== null ? output.RuleGroupName : undefined,
    };
};
var deserializeAws_json1_1StatelessRuleGroupList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1StatelessRuleGroup(entry, context);
    });
};
var deserializeAws_json1_1Tag = function (output, context) {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
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
var deserializeAws_json1_1TagResourceResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1TargetViolationReasons = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1UntagResourceResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1ViolationDetail = function (output, context) {
    return {
        MemberAccount: output.MemberAccount !== undefined && output.MemberAccount !== null ? output.MemberAccount : undefined,
        PolicyId: output.PolicyId !== undefined && output.PolicyId !== null ? output.PolicyId : undefined,
        ResourceDescription: output.ResourceDescription !== undefined && output.ResourceDescription !== null
            ? output.ResourceDescription
            : undefined,
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
        ResourceTags: output.ResourceTags !== undefined && output.ResourceTags !== null
            ? deserializeAws_json1_1TagList(output.ResourceTags, context)
            : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
        ResourceViolations: output.ResourceViolations !== undefined && output.ResourceViolations !== null
            ? deserializeAws_json1_1ResourceViolations(output.ResourceViolations, context)
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
//# sourceMappingURL=Aws_json1_1.js.map