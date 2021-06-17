import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_json1_1AddAttachmentsToSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSSupport_20130415.AddAttachmentsToSet",
        };
        body = JSON.stringify(serializeAws_json1_1AddAttachmentsToSetRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AddCommunicationToCaseCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSSupport_20130415.AddCommunicationToCase",
        };
        body = JSON.stringify(serializeAws_json1_1AddCommunicationToCaseRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateCaseCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSSupport_20130415.CreateCase",
        };
        body = JSON.stringify(serializeAws_json1_1CreateCaseRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeAttachmentCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSSupport_20130415.DescribeAttachment",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeAttachmentRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeCasesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSSupport_20130415.DescribeCases",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeCasesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeCommunicationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSSupport_20130415.DescribeCommunications",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeCommunicationsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeServicesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSSupport_20130415.DescribeServices",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeServicesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeSeverityLevelsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSSupport_20130415.DescribeSeverityLevels",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeSeverityLevelsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeTrustedAdvisorCheckResultCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSSupport_20130415.DescribeTrustedAdvisorCheckResult",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeTrustedAdvisorCheckResultRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeTrustedAdvisorChecksCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSSupport_20130415.DescribeTrustedAdvisorChecks",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeTrustedAdvisorChecksRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeTrustedAdvisorCheckSummariesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1RefreshTrustedAdvisorCheckCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSSupport_20130415.RefreshTrustedAdvisorCheck",
        };
        body = JSON.stringify(serializeAws_json1_1RefreshTrustedAdvisorCheckRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ResolveCaseCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSSupport_20130415.ResolveCase",
        };
        body = JSON.stringify(serializeAws_json1_1ResolveCaseRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_json1_1AddAttachmentsToSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AddAttachmentsToSetCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AddAttachmentsToSetResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AddAttachmentsToSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AttachmentLimitExceeded": return [3 /*break*/, 2];
                    case "com.amazonaws.support#AttachmentLimitExceeded": return [3 /*break*/, 2];
                    case "AttachmentSetExpired": return [3 /*break*/, 4];
                    case "com.amazonaws.support#AttachmentSetExpired": return [3 /*break*/, 4];
                    case "AttachmentSetIdNotFound": return [3 /*break*/, 6];
                    case "com.amazonaws.support#AttachmentSetIdNotFound": return [3 /*break*/, 6];
                    case "AttachmentSetSizeLimitExceeded": return [3 /*break*/, 8];
                    case "com.amazonaws.support#AttachmentSetSizeLimitExceeded": return [3 /*break*/, 8];
                    case "InternalServerError": return [3 /*break*/, 10];
                    case "com.amazonaws.support#InternalServerError": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AttachmentLimitExceededResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AttachmentSetExpiredResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AttachmentSetIdNotFoundResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AttachmentSetSizeLimitExceededResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1AddCommunicationToCaseCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AddCommunicationToCaseCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AddCommunicationToCaseResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AddCommunicationToCaseCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AttachmentSetExpired": return [3 /*break*/, 2];
                    case "com.amazonaws.support#AttachmentSetExpired": return [3 /*break*/, 2];
                    case "AttachmentSetIdNotFound": return [3 /*break*/, 4];
                    case "com.amazonaws.support#AttachmentSetIdNotFound": return [3 /*break*/, 4];
                    case "CaseIdNotFound": return [3 /*break*/, 6];
                    case "com.amazonaws.support#CaseIdNotFound": return [3 /*break*/, 6];
                    case "InternalServerError": return [3 /*break*/, 8];
                    case "com.amazonaws.support#InternalServerError": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AttachmentSetExpiredResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AttachmentSetIdNotFoundResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CaseIdNotFoundResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateCaseCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateCaseCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateCaseResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateCaseCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AttachmentSetExpired": return [3 /*break*/, 2];
                    case "com.amazonaws.support#AttachmentSetExpired": return [3 /*break*/, 2];
                    case "AttachmentSetIdNotFound": return [3 /*break*/, 4];
                    case "com.amazonaws.support#AttachmentSetIdNotFound": return [3 /*break*/, 4];
                    case "CaseCreationLimitExceeded": return [3 /*break*/, 6];
                    case "com.amazonaws.support#CaseCreationLimitExceeded": return [3 /*break*/, 6];
                    case "InternalServerError": return [3 /*break*/, 8];
                    case "com.amazonaws.support#InternalServerError": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AttachmentSetExpiredResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AttachmentSetIdNotFoundResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CaseCreationLimitExceededResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeAttachmentCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeAttachmentCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeAttachmentResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeAttachmentCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AttachmentIdNotFound": return [3 /*break*/, 2];
                    case "com.amazonaws.support#AttachmentIdNotFound": return [3 /*break*/, 2];
                    case "DescribeAttachmentLimitExceeded": return [3 /*break*/, 4];
                    case "com.amazonaws.support#DescribeAttachmentLimitExceeded": return [3 /*break*/, 4];
                    case "InternalServerError": return [3 /*break*/, 6];
                    case "com.amazonaws.support#InternalServerError": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AttachmentIdNotFoundResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DescribeAttachmentLimitExceededResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeCasesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeCasesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeCasesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeCasesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CaseIdNotFound": return [3 /*break*/, 2];
                    case "com.amazonaws.support#CaseIdNotFound": return [3 /*break*/, 2];
                    case "InternalServerError": return [3 /*break*/, 4];
                    case "com.amazonaws.support#InternalServerError": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CaseIdNotFoundResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeCommunicationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeCommunicationsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeCommunicationsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeCommunicationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CaseIdNotFound": return [3 /*break*/, 2];
                    case "com.amazonaws.support#CaseIdNotFound": return [3 /*break*/, 2];
                    case "InternalServerError": return [3 /*break*/, 4];
                    case "com.amazonaws.support#InternalServerError": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CaseIdNotFoundResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeServicesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeServicesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeServicesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeServicesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.support#InternalServerError": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeSeverityLevelsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeSeverityLevelsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeSeverityLevelsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeSeverityLevelsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.support#InternalServerError": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.support#InternalServerError": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeTrustedAdvisorCheckResultCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeTrustedAdvisorCheckResultCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeTrustedAdvisorCheckResultResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeTrustedAdvisorCheckResultCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.support#InternalServerError": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeTrustedAdvisorChecksCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeTrustedAdvisorChecksCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeTrustedAdvisorChecksResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeTrustedAdvisorChecksCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.support#InternalServerError": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeTrustedAdvisorCheckSummariesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.support#InternalServerError": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1RefreshTrustedAdvisorCheckCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1RefreshTrustedAdvisorCheckCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1RefreshTrustedAdvisorCheckResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1RefreshTrustedAdvisorCheckCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.support#InternalServerError": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ResolveCaseCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ResolveCaseCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ResolveCaseResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ResolveCaseCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CaseIdNotFound": return [3 /*break*/, 2];
                    case "com.amazonaws.support#CaseIdNotFound": return [3 /*break*/, 2];
                    case "InternalServerError": return [3 /*break*/, 4];
                    case "com.amazonaws.support#InternalServerError": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CaseIdNotFoundResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
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
var deserializeAws_json1_1AttachmentIdNotFoundResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1AttachmentIdNotFound(body, context);
        contents = __assign({ name: "AttachmentIdNotFound", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1AttachmentLimitExceededResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1AttachmentLimitExceeded(body, context);
        contents = __assign({ name: "AttachmentLimitExceeded", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1AttachmentSetExpiredResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1AttachmentSetExpired(body, context);
        contents = __assign({ name: "AttachmentSetExpired", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1AttachmentSetIdNotFoundResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1AttachmentSetIdNotFound(body, context);
        contents = __assign({ name: "AttachmentSetIdNotFound", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1AttachmentSetSizeLimitExceededResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1AttachmentSetSizeLimitExceeded(body, context);
        contents = __assign({ name: "AttachmentSetSizeLimitExceeded", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1CaseCreationLimitExceededResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1CaseCreationLimitExceeded(body, context);
        contents = __assign({ name: "CaseCreationLimitExceeded", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1CaseIdNotFoundResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1CaseIdNotFound(body, context);
        contents = __assign({ name: "CaseIdNotFound", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1DescribeAttachmentLimitExceededResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1DescribeAttachmentLimitExceeded(body, context);
        contents = __assign({ name: "DescribeAttachmentLimitExceeded", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InternalServerErrorResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InternalServerError(body, context);
        contents = __assign({ name: "InternalServerError", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_json1_1AddAttachmentsToSetRequest = function (input, context) {
    return __assign(__assign({}, (input.attachmentSetId !== undefined &&
        input.attachmentSetId !== null && { attachmentSetId: input.attachmentSetId })), (input.attachments !== undefined &&
        input.attachments !== null && { attachments: serializeAws_json1_1Attachments(input.attachments, context) }));
};
var serializeAws_json1_1AddCommunicationToCaseRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.attachmentSetId !== undefined &&
        input.attachmentSetId !== null && { attachmentSetId: input.attachmentSetId })), (input.caseId !== undefined && input.caseId !== null && { caseId: input.caseId })), (input.ccEmailAddresses !== undefined &&
        input.ccEmailAddresses !== null && {
        ccEmailAddresses: serializeAws_json1_1CcEmailAddressList(input.ccEmailAddresses, context),
    })), (input.communicationBody !== undefined &&
        input.communicationBody !== null && { communicationBody: input.communicationBody }));
};
var serializeAws_json1_1Attachment = function (input, context) {
    return __assign(__assign({}, (input.data !== undefined && input.data !== null && { data: context.base64Encoder(input.data) })), (input.fileName !== undefined && input.fileName !== null && { fileName: input.fileName }));
};
var serializeAws_json1_1Attachments = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Attachment(entry, context);
    });
};
var serializeAws_json1_1CaseIdList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1CcEmailAddressList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1CreateCaseRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.attachmentSetId !== undefined &&
        input.attachmentSetId !== null && { attachmentSetId: input.attachmentSetId })), (input.categoryCode !== undefined && input.categoryCode !== null && { categoryCode: input.categoryCode })), (input.ccEmailAddresses !== undefined &&
        input.ccEmailAddresses !== null && {
        ccEmailAddresses: serializeAws_json1_1CcEmailAddressList(input.ccEmailAddresses, context),
    })), (input.communicationBody !== undefined &&
        input.communicationBody !== null && { communicationBody: input.communicationBody })), (input.issueType !== undefined && input.issueType !== null && { issueType: input.issueType })), (input.language !== undefined && input.language !== null && { language: input.language })), (input.serviceCode !== undefined && input.serviceCode !== null && { serviceCode: input.serviceCode })), (input.severityCode !== undefined && input.severityCode !== null && { severityCode: input.severityCode })), (input.subject !== undefined && input.subject !== null && { subject: input.subject }));
};
var serializeAws_json1_1DescribeAttachmentRequest = function (input, context) {
    return __assign({}, (input.attachmentId !== undefined && input.attachmentId !== null && { attachmentId: input.attachmentId }));
};
var serializeAws_json1_1DescribeCasesRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.afterTime !== undefined && input.afterTime !== null && { afterTime: input.afterTime })), (input.beforeTime !== undefined && input.beforeTime !== null && { beforeTime: input.beforeTime })), (input.caseIdList !== undefined &&
        input.caseIdList !== null && { caseIdList: serializeAws_json1_1CaseIdList(input.caseIdList, context) })), (input.displayId !== undefined && input.displayId !== null && { displayId: input.displayId })), (input.includeCommunications !== undefined &&
        input.includeCommunications !== null && { includeCommunications: input.includeCommunications })), (input.includeResolvedCases !== undefined &&
        input.includeResolvedCases !== null && { includeResolvedCases: input.includeResolvedCases })), (input.language !== undefined && input.language !== null && { language: input.language })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }));
};
var serializeAws_json1_1DescribeCommunicationsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.afterTime !== undefined && input.afterTime !== null && { afterTime: input.afterTime })), (input.beforeTime !== undefined && input.beforeTime !== null && { beforeTime: input.beforeTime })), (input.caseId !== undefined && input.caseId !== null && { caseId: input.caseId })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }));
};
var serializeAws_json1_1DescribeServicesRequest = function (input, context) {
    return __assign(__assign({}, (input.language !== undefined && input.language !== null && { language: input.language })), (input.serviceCodeList !== undefined &&
        input.serviceCodeList !== null && {
        serviceCodeList: serializeAws_json1_1ServiceCodeList(input.serviceCodeList, context),
    }));
};
var serializeAws_json1_1DescribeSeverityLevelsRequest = function (input, context) {
    return __assign({}, (input.language !== undefined && input.language !== null && { language: input.language }));
};
var serializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesRequest = function (input, context) {
    return __assign({}, (input.checkIds !== undefined &&
        input.checkIds !== null && { checkIds: serializeAws_json1_1StringList(input.checkIds, context) }));
};
var serializeAws_json1_1DescribeTrustedAdvisorCheckResultRequest = function (input, context) {
    return __assign(__assign({}, (input.checkId !== undefined && input.checkId !== null && { checkId: input.checkId })), (input.language !== undefined && input.language !== null && { language: input.language }));
};
var serializeAws_json1_1DescribeTrustedAdvisorChecksRequest = function (input, context) {
    return __assign({}, (input.language !== undefined && input.language !== null && { language: input.language }));
};
var serializeAws_json1_1DescribeTrustedAdvisorCheckSummariesRequest = function (input, context) {
    return __assign({}, (input.checkIds !== undefined &&
        input.checkIds !== null && { checkIds: serializeAws_json1_1StringList(input.checkIds, context) }));
};
var serializeAws_json1_1RefreshTrustedAdvisorCheckRequest = function (input, context) {
    return __assign({}, (input.checkId !== undefined && input.checkId !== null && { checkId: input.checkId }));
};
var serializeAws_json1_1ResolveCaseRequest = function (input, context) {
    return __assign({}, (input.caseId !== undefined && input.caseId !== null && { caseId: input.caseId }));
};
var serializeAws_json1_1ServiceCodeList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
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
var deserializeAws_json1_1AddAttachmentsToSetResponse = function (output, context) {
    return {
        attachmentSetId: output.attachmentSetId !== undefined && output.attachmentSetId !== null ? output.attachmentSetId : undefined,
        expiryTime: output.expiryTime !== undefined && output.expiryTime !== null ? output.expiryTime : undefined,
    };
};
var deserializeAws_json1_1AddCommunicationToCaseResponse = function (output, context) {
    return {
        result: output.result !== undefined && output.result !== null ? output.result : undefined,
    };
};
var deserializeAws_json1_1Attachment = function (output, context) {
    return {
        data: output.data !== undefined && output.data !== null ? context.base64Decoder(output.data) : undefined,
        fileName: output.fileName !== undefined && output.fileName !== null ? output.fileName : undefined,
    };
};
var deserializeAws_json1_1AttachmentDetails = function (output, context) {
    return {
        attachmentId: output.attachmentId !== undefined && output.attachmentId !== null ? output.attachmentId : undefined,
        fileName: output.fileName !== undefined && output.fileName !== null ? output.fileName : undefined,
    };
};
var deserializeAws_json1_1AttachmentIdNotFound = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1AttachmentLimitExceeded = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1AttachmentSet = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AttachmentDetails(entry, context);
    });
};
var deserializeAws_json1_1AttachmentSetExpired = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1AttachmentSetIdNotFound = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1AttachmentSetSizeLimitExceeded = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1CaseCreationLimitExceeded = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1CaseDetails = function (output, context) {
    return {
        caseId: output.caseId !== undefined && output.caseId !== null ? output.caseId : undefined,
        categoryCode: output.categoryCode !== undefined && output.categoryCode !== null ? output.categoryCode : undefined,
        ccEmailAddresses: output.ccEmailAddresses !== undefined && output.ccEmailAddresses !== null
            ? deserializeAws_json1_1CcEmailAddressList(output.ccEmailAddresses, context)
            : undefined,
        displayId: output.displayId !== undefined && output.displayId !== null ? output.displayId : undefined,
        language: output.language !== undefined && output.language !== null ? output.language : undefined,
        recentCommunications: output.recentCommunications !== undefined && output.recentCommunications !== null
            ? deserializeAws_json1_1RecentCaseCommunications(output.recentCommunications, context)
            : undefined,
        serviceCode: output.serviceCode !== undefined && output.serviceCode !== null ? output.serviceCode : undefined,
        severityCode: output.severityCode !== undefined && output.severityCode !== null ? output.severityCode : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        subject: output.subject !== undefined && output.subject !== null ? output.subject : undefined,
        submittedBy: output.submittedBy !== undefined && output.submittedBy !== null ? output.submittedBy : undefined,
        timeCreated: output.timeCreated !== undefined && output.timeCreated !== null ? output.timeCreated : undefined,
    };
};
var deserializeAws_json1_1CaseIdNotFound = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1CaseList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CaseDetails(entry, context);
    });
};
var deserializeAws_json1_1Category = function (output, context) {
    return {
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
var deserializeAws_json1_1CategoryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Category(entry, context);
    });
};
var deserializeAws_json1_1CcEmailAddressList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1Communication = function (output, context) {
    return {
        attachmentSet: output.attachmentSet !== undefined && output.attachmentSet !== null
            ? deserializeAws_json1_1AttachmentSet(output.attachmentSet, context)
            : undefined,
        body: output.body !== undefined && output.body !== null ? output.body : undefined,
        caseId: output.caseId !== undefined && output.caseId !== null ? output.caseId : undefined,
        submittedBy: output.submittedBy !== undefined && output.submittedBy !== null ? output.submittedBy : undefined,
        timeCreated: output.timeCreated !== undefined && output.timeCreated !== null ? output.timeCreated : undefined,
    };
};
var deserializeAws_json1_1CommunicationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Communication(entry, context);
    });
};
var deserializeAws_json1_1CreateCaseResponse = function (output, context) {
    return {
        caseId: output.caseId !== undefined && output.caseId !== null ? output.caseId : undefined,
    };
};
var deserializeAws_json1_1DescribeAttachmentLimitExceeded = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1DescribeAttachmentResponse = function (output, context) {
    return {
        attachment: output.attachment !== undefined && output.attachment !== null
            ? deserializeAws_json1_1Attachment(output.attachment, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeCasesResponse = function (output, context) {
    return {
        cases: output.cases !== undefined && output.cases !== null
            ? deserializeAws_json1_1CaseList(output.cases, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeCommunicationsResponse = function (output, context) {
    return {
        communications: output.communications !== undefined && output.communications !== null
            ? deserializeAws_json1_1CommunicationList(output.communications, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeServicesResponse = function (output, context) {
    return {
        services: output.services !== undefined && output.services !== null
            ? deserializeAws_json1_1ServiceList(output.services, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeSeverityLevelsResponse = function (output, context) {
    return {
        severityLevels: output.severityLevels !== undefined && output.severityLevels !== null
            ? deserializeAws_json1_1SeverityLevelsList(output.severityLevels, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesResponse = function (output, context) {
    return {
        statuses: output.statuses !== undefined && output.statuses !== null
            ? deserializeAws_json1_1TrustedAdvisorCheckRefreshStatusList(output.statuses, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeTrustedAdvisorCheckResultResponse = function (output, context) {
    return {
        result: output.result !== undefined && output.result !== null
            ? deserializeAws_json1_1TrustedAdvisorCheckResult(output.result, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeTrustedAdvisorChecksResponse = function (output, context) {
    return {
        checks: output.checks !== undefined && output.checks !== null
            ? deserializeAws_json1_1TrustedAdvisorCheckList(output.checks, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeTrustedAdvisorCheckSummariesResponse = function (output, context) {
    return {
        summaries: output.summaries !== undefined && output.summaries !== null
            ? deserializeAws_json1_1TrustedAdvisorCheckSummaryList(output.summaries, context)
            : undefined,
    };
};
var deserializeAws_json1_1InternalServerError = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1RecentCaseCommunications = function (output, context) {
    return {
        communications: output.communications !== undefined && output.communications !== null
            ? deserializeAws_json1_1CommunicationList(output.communications, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1RefreshTrustedAdvisorCheckResponse = function (output, context) {
    return {
        status: output.status !== undefined && output.status !== null
            ? deserializeAws_json1_1TrustedAdvisorCheckRefreshStatus(output.status, context)
            : undefined,
    };
};
var deserializeAws_json1_1ResolveCaseResponse = function (output, context) {
    return {
        finalCaseStatus: output.finalCaseStatus !== undefined && output.finalCaseStatus !== null ? output.finalCaseStatus : undefined,
        initialCaseStatus: output.initialCaseStatus !== undefined && output.initialCaseStatus !== null
            ? output.initialCaseStatus
            : undefined,
    };
};
var deserializeAws_json1_1Service = function (output, context) {
    return {
        categories: output.categories !== undefined && output.categories !== null
            ? deserializeAws_json1_1CategoryList(output.categories, context)
            : undefined,
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
var deserializeAws_json1_1ServiceList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Service(entry, context);
    });
};
var deserializeAws_json1_1SeverityLevel = function (output, context) {
    return {
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
var deserializeAws_json1_1SeverityLevelsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SeverityLevel(entry, context);
    });
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
var deserializeAws_json1_1TrustedAdvisorCategorySpecificSummary = function (output, context) {
    return {
        costOptimizing: output.costOptimizing !== undefined && output.costOptimizing !== null
            ? deserializeAws_json1_1TrustedAdvisorCostOptimizingSummary(output.costOptimizing, context)
            : undefined,
    };
};
var deserializeAws_json1_1TrustedAdvisorCheckDescription = function (output, context) {
    return {
        category: output.category !== undefined && output.category !== null ? output.category : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        metadata: output.metadata !== undefined && output.metadata !== null
            ? deserializeAws_json1_1StringList(output.metadata, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
var deserializeAws_json1_1TrustedAdvisorCheckList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TrustedAdvisorCheckDescription(entry, context);
    });
};
var deserializeAws_json1_1TrustedAdvisorCheckRefreshStatus = function (output, context) {
    return {
        checkId: output.checkId !== undefined && output.checkId !== null ? output.checkId : undefined,
        millisUntilNextRefreshable: output.millisUntilNextRefreshable !== undefined && output.millisUntilNextRefreshable !== null
            ? output.millisUntilNextRefreshable
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
var deserializeAws_json1_1TrustedAdvisorCheckRefreshStatusList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TrustedAdvisorCheckRefreshStatus(entry, context);
    });
};
var deserializeAws_json1_1TrustedAdvisorCheckResult = function (output, context) {
    return {
        categorySpecificSummary: output.categorySpecificSummary !== undefined && output.categorySpecificSummary !== null
            ? deserializeAws_json1_1TrustedAdvisorCategorySpecificSummary(output.categorySpecificSummary, context)
            : undefined,
        checkId: output.checkId !== undefined && output.checkId !== null ? output.checkId : undefined,
        flaggedResources: output.flaggedResources !== undefined && output.flaggedResources !== null
            ? deserializeAws_json1_1TrustedAdvisorResourceDetailList(output.flaggedResources, context)
            : undefined,
        resourcesSummary: output.resourcesSummary !== undefined && output.resourcesSummary !== null
            ? deserializeAws_json1_1TrustedAdvisorResourcesSummary(output.resourcesSummary, context)
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        timestamp: output.timestamp !== undefined && output.timestamp !== null ? output.timestamp : undefined,
    };
};
var deserializeAws_json1_1TrustedAdvisorCheckSummary = function (output, context) {
    return {
        categorySpecificSummary: output.categorySpecificSummary !== undefined && output.categorySpecificSummary !== null
            ? deserializeAws_json1_1TrustedAdvisorCategorySpecificSummary(output.categorySpecificSummary, context)
            : undefined,
        checkId: output.checkId !== undefined && output.checkId !== null ? output.checkId : undefined,
        hasFlaggedResources: output.hasFlaggedResources !== undefined && output.hasFlaggedResources !== null
            ? output.hasFlaggedResources
            : undefined,
        resourcesSummary: output.resourcesSummary !== undefined && output.resourcesSummary !== null
            ? deserializeAws_json1_1TrustedAdvisorResourcesSummary(output.resourcesSummary, context)
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        timestamp: output.timestamp !== undefined && output.timestamp !== null ? output.timestamp : undefined,
    };
};
var deserializeAws_json1_1TrustedAdvisorCheckSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TrustedAdvisorCheckSummary(entry, context);
    });
};
var deserializeAws_json1_1TrustedAdvisorCostOptimizingSummary = function (output, context) {
    return {
        estimatedMonthlySavings: output.estimatedMonthlySavings !== undefined && output.estimatedMonthlySavings !== null
            ? output.estimatedMonthlySavings
            : undefined,
        estimatedPercentMonthlySavings: output.estimatedPercentMonthlySavings !== undefined && output.estimatedPercentMonthlySavings !== null
            ? output.estimatedPercentMonthlySavings
            : undefined,
    };
};
var deserializeAws_json1_1TrustedAdvisorResourceDetail = function (output, context) {
    return {
        isSuppressed: output.isSuppressed !== undefined && output.isSuppressed !== null ? output.isSuppressed : undefined,
        metadata: output.metadata !== undefined && output.metadata !== null
            ? deserializeAws_json1_1StringList(output.metadata, context)
            : undefined,
        region: output.region !== undefined && output.region !== null ? output.region : undefined,
        resourceId: output.resourceId !== undefined && output.resourceId !== null ? output.resourceId : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
var deserializeAws_json1_1TrustedAdvisorResourceDetailList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TrustedAdvisorResourceDetail(entry, context);
    });
};
var deserializeAws_json1_1TrustedAdvisorResourcesSummary = function (output, context) {
    return {
        resourcesFlagged: output.resourcesFlagged !== undefined && output.resourcesFlagged !== null ? output.resourcesFlagged : undefined,
        resourcesIgnored: output.resourcesIgnored !== undefined && output.resourcesIgnored !== null ? output.resourcesIgnored : undefined,
        resourcesProcessed: output.resourcesProcessed !== undefined && output.resourcesProcessed !== null
            ? output.resourcesProcessed
            : undefined,
        resourcesSuppressed: output.resourcesSuppressed !== undefined && output.resourcesSuppressed !== null
            ? output.resourcesSuppressed
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