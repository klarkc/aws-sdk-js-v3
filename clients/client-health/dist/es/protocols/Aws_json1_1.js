import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_json1_1DescribeAffectedAccountsForOrganizationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSHealth_20160804.DescribeAffectedAccountsForOrganization",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeAffectedAccountsForOrganizationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeAffectedEntitiesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSHealth_20160804.DescribeAffectedEntities",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeAffectedEntitiesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSHealth_20160804.DescribeAffectedEntitiesForOrganization",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeAffectedEntitiesForOrganizationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeEntityAggregatesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSHealth_20160804.DescribeEntityAggregates",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeEntityAggregatesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeEventAggregatesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSHealth_20160804.DescribeEventAggregates",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeEventAggregatesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeEventDetailsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSHealth_20160804.DescribeEventDetails",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeEventDetailsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeEventDetailsForOrganizationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSHealth_20160804.DescribeEventDetailsForOrganization",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeEventDetailsForOrganizationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeEventsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSHealth_20160804.DescribeEvents",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeEventsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeEventsForOrganizationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSHealth_20160804.DescribeEventsForOrganization",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeEventsForOrganizationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeEventTypesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSHealth_20160804.DescribeEventTypes",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeEventTypesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSHealth_20160804.DescribeHealthServiceStatusForOrganization",
        };
        body = "{}";
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DisableHealthServiceAccessForOrganizationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSHealth_20160804.DisableHealthServiceAccessForOrganization",
        };
        body = "{}";
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1EnableHealthServiceAccessForOrganizationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSHealth_20160804.EnableHealthServiceAccessForOrganization",
        };
        body = "{}";
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_json1_1DescribeAffectedAccountsForOrganizationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeAffectedAccountsForOrganizationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeAffectedAccountsForOrganizationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeAffectedAccountsForOrganizationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidPaginationToken": return [3 /*break*/, 2];
                    case "com.amazonaws.health#InvalidPaginationToken": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidPaginationTokenResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeAffectedEntitiesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeAffectedEntitiesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeAffectedEntitiesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeAffectedEntitiesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidPaginationToken": return [3 /*break*/, 2];
                    case "com.amazonaws.health#InvalidPaginationToken": return [3 /*break*/, 2];
                    case "UnsupportedLocale": return [3 /*break*/, 4];
                    case "com.amazonaws.health#UnsupportedLocale": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidPaginationTokenResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedLocaleResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidPaginationToken": return [3 /*break*/, 2];
                    case "com.amazonaws.health#InvalidPaginationToken": return [3 /*break*/, 2];
                    case "UnsupportedLocale": return [3 /*break*/, 4];
                    case "com.amazonaws.health#UnsupportedLocale": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidPaginationTokenResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedLocaleResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeEntityAggregatesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeEntityAggregatesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeEntityAggregatesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeEntityAggregatesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.code || parsedBody.Code || errorCode;
                        response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeEventAggregatesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeEventAggregatesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeEventAggregatesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeEventAggregatesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidPaginationToken": return [3 /*break*/, 2];
                    case "com.amazonaws.health#InvalidPaginationToken": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidPaginationTokenResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeEventDetailsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeEventDetailsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeEventDetailsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeEventDetailsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "UnsupportedLocale": return [3 /*break*/, 2];
                    case "com.amazonaws.health#UnsupportedLocale": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedLocaleResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeEventDetailsForOrganizationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeEventDetailsForOrganizationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeEventDetailsForOrganizationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeEventDetailsForOrganizationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "UnsupportedLocale": return [3 /*break*/, 2];
                    case "com.amazonaws.health#UnsupportedLocale": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedLocaleResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeEventsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeEventsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeEventsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeEventsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidPaginationToken": return [3 /*break*/, 2];
                    case "com.amazonaws.health#InvalidPaginationToken": return [3 /*break*/, 2];
                    case "UnsupportedLocale": return [3 /*break*/, 4];
                    case "com.amazonaws.health#UnsupportedLocale": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidPaginationTokenResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedLocaleResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeEventsForOrganizationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeEventsForOrganizationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeEventsForOrganizationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeEventsForOrganizationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidPaginationToken": return [3 /*break*/, 2];
                    case "com.amazonaws.health#InvalidPaginationToken": return [3 /*break*/, 2];
                    case "UnsupportedLocale": return [3 /*break*/, 4];
                    case "com.amazonaws.health#UnsupportedLocale": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidPaginationTokenResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedLocaleResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeEventTypesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeEventTypesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeEventTypesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeEventTypesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidPaginationToken": return [3 /*break*/, 2];
                    case "com.amazonaws.health#InvalidPaginationToken": return [3 /*break*/, 2];
                    case "UnsupportedLocale": return [3 /*break*/, 4];
                    case "com.amazonaws.health#UnsupportedLocale": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidPaginationTokenResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedLocaleResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.code || parsedBody.Code || errorCode;
                        response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DisableHealthServiceAccessForOrganizationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DisableHealthServiceAccessForOrganizationCommandError(output, context)];
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
var deserializeAws_json1_1DisableHealthServiceAccessForOrganizationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.health#ConcurrentModificationException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1EnableHealthServiceAccessForOrganizationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1EnableHealthServiceAccessForOrganizationCommandError(output, context)];
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
var deserializeAws_json1_1EnableHealthServiceAccessForOrganizationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.health#ConcurrentModificationException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
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
var deserializeAws_json1_1ConcurrentModificationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ConcurrentModificationException(body, context);
        contents = __assign({ name: "ConcurrentModificationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidPaginationTokenResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidPaginationToken(body, context);
        contents = __assign({ name: "InvalidPaginationToken", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1UnsupportedLocaleResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1UnsupportedLocale(body, context);
        contents = __assign({ name: "UnsupportedLocale", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_json1_1availabilityZones = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1awsAccountIdsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1DateTimeRange = function (input, context) {
    return __assign(__assign({}, (input.from !== undefined && input.from !== null && { from: Math.round(input.from.getTime() / 1000) })), (input.to !== undefined && input.to !== null && { to: Math.round(input.to.getTime() / 1000) }));
};
var serializeAws_json1_1dateTimeRangeList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1DateTimeRange(entry, context);
    });
};
var serializeAws_json1_1DescribeAffectedAccountsForOrganizationRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.eventArn !== undefined && input.eventArn !== null && { eventArn: input.eventArn })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }));
};
var serializeAws_json1_1DescribeAffectedEntitiesForOrganizationRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.locale !== undefined && input.locale !== null && { locale: input.locale })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.organizationEntityFilters !== undefined &&
        input.organizationEntityFilters !== null && {
        organizationEntityFilters: serializeAws_json1_1OrganizationEntityFiltersList(input.organizationEntityFilters, context),
    }));
};
var serializeAws_json1_1DescribeAffectedEntitiesRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.filter !== undefined &&
        input.filter !== null && { filter: serializeAws_json1_1EntityFilter(input.filter, context) })), (input.locale !== undefined && input.locale !== null && { locale: input.locale })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }));
};
var serializeAws_json1_1DescribeEntityAggregatesRequest = function (input, context) {
    return __assign({}, (input.eventArns !== undefined &&
        input.eventArns !== null && { eventArns: serializeAws_json1_1EventArnsList(input.eventArns, context) }));
};
var serializeAws_json1_1DescribeEventAggregatesRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.aggregateField !== undefined &&
        input.aggregateField !== null && { aggregateField: input.aggregateField })), (input.filter !== undefined &&
        input.filter !== null && { filter: serializeAws_json1_1EventFilter(input.filter, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }));
};
var serializeAws_json1_1DescribeEventDetailsForOrganizationRequest = function (input, context) {
    return __assign(__assign({}, (input.locale !== undefined && input.locale !== null && { locale: input.locale })), (input.organizationEventDetailFilters !== undefined &&
        input.organizationEventDetailFilters !== null && {
        organizationEventDetailFilters: serializeAws_json1_1OrganizationEventDetailFiltersList(input.organizationEventDetailFilters, context),
    }));
};
var serializeAws_json1_1DescribeEventDetailsRequest = function (input, context) {
    return __assign(__assign({}, (input.eventArns !== undefined &&
        input.eventArns !== null && { eventArns: serializeAws_json1_1eventArnList(input.eventArns, context) })), (input.locale !== undefined && input.locale !== null && { locale: input.locale }));
};
var serializeAws_json1_1DescribeEventsForOrganizationRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.filter !== undefined &&
        input.filter !== null && { filter: serializeAws_json1_1OrganizationEventFilter(input.filter, context) })), (input.locale !== undefined && input.locale !== null && { locale: input.locale })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }));
};
var serializeAws_json1_1DescribeEventsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.filter !== undefined &&
        input.filter !== null && { filter: serializeAws_json1_1EventFilter(input.filter, context) })), (input.locale !== undefined && input.locale !== null && { locale: input.locale })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }));
};
var serializeAws_json1_1DescribeEventTypesRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.filter !== undefined &&
        input.filter !== null && { filter: serializeAws_json1_1EventTypeFilter(input.filter, context) })), (input.locale !== undefined && input.locale !== null && { locale: input.locale })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }));
};
var serializeAws_json1_1entityArnList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1EntityFilter = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.entityArns !== undefined &&
        input.entityArns !== null && { entityArns: serializeAws_json1_1entityArnList(input.entityArns, context) })), (input.entityValues !== undefined &&
        input.entityValues !== null && {
        entityValues: serializeAws_json1_1entityValueList(input.entityValues, context),
    })), (input.eventArns !== undefined &&
        input.eventArns !== null && { eventArns: serializeAws_json1_1eventArnList(input.eventArns, context) })), (input.lastUpdatedTimes !== undefined &&
        input.lastUpdatedTimes !== null && {
        lastUpdatedTimes: serializeAws_json1_1dateTimeRangeList(input.lastUpdatedTimes, context),
    })), (input.statusCodes !== undefined &&
        input.statusCodes !== null && {
        statusCodes: serializeAws_json1_1entityStatusCodeList(input.statusCodes, context),
    })), (input.tags !== undefined &&
        input.tags !== null && { tags: serializeAws_json1_1tagFilter(input.tags, context) }));
};
var serializeAws_json1_1entityStatusCodeList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1entityValueList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1EventAccountFilter = function (input, context) {
    return __assign(__assign({}, (input.awsAccountId !== undefined && input.awsAccountId !== null && { awsAccountId: input.awsAccountId })), (input.eventArn !== undefined && input.eventArn !== null && { eventArn: input.eventArn }));
};
var serializeAws_json1_1eventArnList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1EventArnsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1EventFilter = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.availabilityZones !== undefined &&
        input.availabilityZones !== null && {
        availabilityZones: serializeAws_json1_1availabilityZones(input.availabilityZones, context),
    })), (input.endTimes !== undefined &&
        input.endTimes !== null && { endTimes: serializeAws_json1_1dateTimeRangeList(input.endTimes, context) })), (input.entityArns !== undefined &&
        input.entityArns !== null && { entityArns: serializeAws_json1_1entityArnList(input.entityArns, context) })), (input.entityValues !== undefined &&
        input.entityValues !== null && {
        entityValues: serializeAws_json1_1entityValueList(input.entityValues, context),
    })), (input.eventArns !== undefined &&
        input.eventArns !== null && { eventArns: serializeAws_json1_1eventArnList(input.eventArns, context) })), (input.eventStatusCodes !== undefined &&
        input.eventStatusCodes !== null && {
        eventStatusCodes: serializeAws_json1_1eventStatusCodeList(input.eventStatusCodes, context),
    })), (input.eventTypeCategories !== undefined &&
        input.eventTypeCategories !== null && {
        eventTypeCategories: serializeAws_json1_1eventTypeCategoryList2(input.eventTypeCategories, context),
    })), (input.eventTypeCodes !== undefined &&
        input.eventTypeCodes !== null && {
        eventTypeCodes: serializeAws_json1_1eventTypeList2(input.eventTypeCodes, context),
    })), (input.lastUpdatedTimes !== undefined &&
        input.lastUpdatedTimes !== null && {
        lastUpdatedTimes: serializeAws_json1_1dateTimeRangeList(input.lastUpdatedTimes, context),
    })), (input.regions !== undefined &&
        input.regions !== null && { regions: serializeAws_json1_1regionList(input.regions, context) })), (input.services !== undefined &&
        input.services !== null && { services: serializeAws_json1_1serviceList(input.services, context) })), (input.startTimes !== undefined &&
        input.startTimes !== null && { startTimes: serializeAws_json1_1dateTimeRangeList(input.startTimes, context) })), (input.tags !== undefined &&
        input.tags !== null && { tags: serializeAws_json1_1tagFilter(input.tags, context) }));
};
var serializeAws_json1_1eventStatusCodeList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1EventTypeCategoryList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1eventTypeCategoryList2 = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1EventTypeCodeList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1EventTypeFilter = function (input, context) {
    return __assign(__assign(__assign({}, (input.eventTypeCategories !== undefined &&
        input.eventTypeCategories !== null && {
        eventTypeCategories: serializeAws_json1_1EventTypeCategoryList(input.eventTypeCategories, context),
    })), (input.eventTypeCodes !== undefined &&
        input.eventTypeCodes !== null && {
        eventTypeCodes: serializeAws_json1_1EventTypeCodeList(input.eventTypeCodes, context),
    })), (input.services !== undefined &&
        input.services !== null && { services: serializeAws_json1_1serviceList(input.services, context) }));
};
var serializeAws_json1_1eventTypeList2 = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1OrganizationEntityFiltersList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1EventAccountFilter(entry, context);
    });
};
var serializeAws_json1_1OrganizationEventDetailFiltersList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1EventAccountFilter(entry, context);
    });
};
var serializeAws_json1_1OrganizationEventFilter = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.awsAccountIds !== undefined &&
        input.awsAccountIds !== null && {
        awsAccountIds: serializeAws_json1_1awsAccountIdsList(input.awsAccountIds, context),
    })), (input.endTime !== undefined &&
        input.endTime !== null && { endTime: serializeAws_json1_1DateTimeRange(input.endTime, context) })), (input.entityArns !== undefined &&
        input.entityArns !== null && { entityArns: serializeAws_json1_1entityArnList(input.entityArns, context) })), (input.entityValues !== undefined &&
        input.entityValues !== null && {
        entityValues: serializeAws_json1_1entityValueList(input.entityValues, context),
    })), (input.eventStatusCodes !== undefined &&
        input.eventStatusCodes !== null && {
        eventStatusCodes: serializeAws_json1_1eventStatusCodeList(input.eventStatusCodes, context),
    })), (input.eventTypeCategories !== undefined &&
        input.eventTypeCategories !== null && {
        eventTypeCategories: serializeAws_json1_1eventTypeCategoryList2(input.eventTypeCategories, context),
    })), (input.eventTypeCodes !== undefined &&
        input.eventTypeCodes !== null && {
        eventTypeCodes: serializeAws_json1_1eventTypeList2(input.eventTypeCodes, context),
    })), (input.lastUpdatedTime !== undefined &&
        input.lastUpdatedTime !== null && {
        lastUpdatedTime: serializeAws_json1_1DateTimeRange(input.lastUpdatedTime, context),
    })), (input.regions !== undefined &&
        input.regions !== null && { regions: serializeAws_json1_1regionList(input.regions, context) })), (input.services !== undefined &&
        input.services !== null && { services: serializeAws_json1_1serviceList(input.services, context) })), (input.startTime !== undefined &&
        input.startTime !== null && { startTime: serializeAws_json1_1DateTimeRange(input.startTime, context) }));
};
var serializeAws_json1_1regionList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1serviceList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1tagFilter = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1tagSet(entry, context);
    });
};
var serializeAws_json1_1tagSet = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_json1_1affectedAccountsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1AffectedEntity = function (output, context) {
    return {
        awsAccountId: output.awsAccountId !== undefined && output.awsAccountId !== null ? output.awsAccountId : undefined,
        entityArn: output.entityArn !== undefined && output.entityArn !== null ? output.entityArn : undefined,
        entityUrl: output.entityUrl !== undefined && output.entityUrl !== null ? output.entityUrl : undefined,
        entityValue: output.entityValue !== undefined && output.entityValue !== null ? output.entityValue : undefined,
        eventArn: output.eventArn !== undefined && output.eventArn !== null ? output.eventArn : undefined,
        lastUpdatedTime: output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null
            ? new Date(Math.round(output.lastUpdatedTime * 1000))
            : undefined,
        statusCode: output.statusCode !== undefined && output.statusCode !== null ? output.statusCode : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_1tagSet(output.tags, context)
            : undefined,
    };
};
var deserializeAws_json1_1ConcurrentModificationException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1DescribeAffectedAccountsForOrganizationResponse = function (output, context) {
    return {
        affectedAccounts: output.affectedAccounts !== undefined && output.affectedAccounts !== null
            ? deserializeAws_json1_1affectedAccountsList(output.affectedAccounts, context)
            : undefined,
        eventScopeCode: output.eventScopeCode !== undefined && output.eventScopeCode !== null ? output.eventScopeCode : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationFailedSet = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OrganizationAffectedEntitiesErrorItem(entry, context);
    });
};
var deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationResponse = function (output, context) {
    return {
        entities: output.entities !== undefined && output.entities !== null
            ? deserializeAws_json1_1EntityList(output.entities, context)
            : undefined,
        failedSet: output.failedSet !== undefined && output.failedSet !== null
            ? deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationFailedSet(output.failedSet, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeAffectedEntitiesResponse = function (output, context) {
    return {
        entities: output.entities !== undefined && output.entities !== null
            ? deserializeAws_json1_1EntityList(output.entities, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeEntityAggregatesResponse = function (output, context) {
    return {
        entityAggregates: output.entityAggregates !== undefined && output.entityAggregates !== null
            ? deserializeAws_json1_1EntityAggregateList(output.entityAggregates, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeEventAggregatesResponse = function (output, context) {
    return {
        eventAggregates: output.eventAggregates !== undefined && output.eventAggregates !== null
            ? deserializeAws_json1_1EventAggregateList(output.eventAggregates, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeEventDetailsFailedSet = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EventDetailsErrorItem(entry, context);
    });
};
var deserializeAws_json1_1DescribeEventDetailsForOrganizationFailedSet = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OrganizationEventDetailsErrorItem(entry, context);
    });
};
var deserializeAws_json1_1DescribeEventDetailsForOrganizationResponse = function (output, context) {
    return {
        failedSet: output.failedSet !== undefined && output.failedSet !== null
            ? deserializeAws_json1_1DescribeEventDetailsForOrganizationFailedSet(output.failedSet, context)
            : undefined,
        successfulSet: output.successfulSet !== undefined && output.successfulSet !== null
            ? deserializeAws_json1_1DescribeEventDetailsForOrganizationSuccessfulSet(output.successfulSet, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeEventDetailsForOrganizationSuccessfulSet = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OrganizationEventDetails(entry, context);
    });
};
var deserializeAws_json1_1DescribeEventDetailsResponse = function (output, context) {
    return {
        failedSet: output.failedSet !== undefined && output.failedSet !== null
            ? deserializeAws_json1_1DescribeEventDetailsFailedSet(output.failedSet, context)
            : undefined,
        successfulSet: output.successfulSet !== undefined && output.successfulSet !== null
            ? deserializeAws_json1_1DescribeEventDetailsSuccessfulSet(output.successfulSet, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeEventDetailsSuccessfulSet = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EventDetails(entry, context);
    });
};
var deserializeAws_json1_1DescribeEventsForOrganizationResponse = function (output, context) {
    return {
        events: output.events !== undefined && output.events !== null
            ? deserializeAws_json1_1OrganizationEventList(output.events, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeEventsResponse = function (output, context) {
    return {
        events: output.events !== undefined && output.events !== null
            ? deserializeAws_json1_1EventList(output.events, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeEventTypesResponse = function (output, context) {
    return {
        eventTypes: output.eventTypes !== undefined && output.eventTypes !== null
            ? deserializeAws_json1_1EventTypeList(output.eventTypes, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationResponse = function (output, context) {
    return {
        healthServiceAccessStatusForOrganization: output.healthServiceAccessStatusForOrganization !== undefined &&
            output.healthServiceAccessStatusForOrganization !== null
            ? output.healthServiceAccessStatusForOrganization
            : undefined,
    };
};
var deserializeAws_json1_1EntityAggregate = function (output, context) {
    return {
        count: output.count !== undefined && output.count !== null ? output.count : undefined,
        eventArn: output.eventArn !== undefined && output.eventArn !== null ? output.eventArn : undefined,
    };
};
var deserializeAws_json1_1EntityAggregateList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EntityAggregate(entry, context);
    });
};
var deserializeAws_json1_1EntityList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AffectedEntity(entry, context);
    });
};
var deserializeAws_json1_1Event = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        availabilityZone: output.availabilityZone !== undefined && output.availabilityZone !== null ? output.availabilityZone : undefined,
        endTime: output.endTime !== undefined && output.endTime !== null ? new Date(Math.round(output.endTime * 1000)) : undefined,
        eventScopeCode: output.eventScopeCode !== undefined && output.eventScopeCode !== null ? output.eventScopeCode : undefined,
        eventTypeCategory: output.eventTypeCategory !== undefined && output.eventTypeCategory !== null
            ? output.eventTypeCategory
            : undefined,
        eventTypeCode: output.eventTypeCode !== undefined && output.eventTypeCode !== null ? output.eventTypeCode : undefined,
        lastUpdatedTime: output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null
            ? new Date(Math.round(output.lastUpdatedTime * 1000))
            : undefined,
        region: output.region !== undefined && output.region !== null ? output.region : undefined,
        service: output.service !== undefined && output.service !== null ? output.service : undefined,
        startTime: output.startTime !== undefined && output.startTime !== null
            ? new Date(Math.round(output.startTime * 1000))
            : undefined,
        statusCode: output.statusCode !== undefined && output.statusCode !== null ? output.statusCode : undefined,
    };
};
var deserializeAws_json1_1EventAggregate = function (output, context) {
    return {
        aggregateValue: output.aggregateValue !== undefined && output.aggregateValue !== null ? output.aggregateValue : undefined,
        count: output.count !== undefined && output.count !== null ? output.count : undefined,
    };
};
var deserializeAws_json1_1EventAggregateList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EventAggregate(entry, context);
    });
};
var deserializeAws_json1_1EventDescription = function (output, context) {
    return {
        latestDescription: output.latestDescription !== undefined && output.latestDescription !== null
            ? output.latestDescription
            : undefined,
    };
};
var deserializeAws_json1_1EventDetails = function (output, context) {
    return {
        event: output.event !== undefined && output.event !== null
            ? deserializeAws_json1_1Event(output.event, context)
            : undefined,
        eventDescription: output.eventDescription !== undefined && output.eventDescription !== null
            ? deserializeAws_json1_1EventDescription(output.eventDescription, context)
            : undefined,
        eventMetadata: output.eventMetadata !== undefined && output.eventMetadata !== null
            ? deserializeAws_json1_1eventMetadata(output.eventMetadata, context)
            : undefined,
    };
};
var deserializeAws_json1_1EventDetailsErrorItem = function (output, context) {
    return {
        errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
        errorName: output.errorName !== undefined && output.errorName !== null ? output.errorName : undefined,
        eventArn: output.eventArn !== undefined && output.eventArn !== null ? output.eventArn : undefined,
    };
};
var deserializeAws_json1_1EventList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Event(entry, context);
    });
};
var deserializeAws_json1_1eventMetadata = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_json1_1EventType = function (output, context) {
    return {
        category: output.category !== undefined && output.category !== null ? output.category : undefined,
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        service: output.service !== undefined && output.service !== null ? output.service : undefined,
    };
};
var deserializeAws_json1_1EventTypeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EventType(entry, context);
    });
};
var deserializeAws_json1_1InvalidPaginationToken = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1OrganizationAffectedEntitiesErrorItem = function (output, context) {
    return {
        awsAccountId: output.awsAccountId !== undefined && output.awsAccountId !== null ? output.awsAccountId : undefined,
        errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
        errorName: output.errorName !== undefined && output.errorName !== null ? output.errorName : undefined,
        eventArn: output.eventArn !== undefined && output.eventArn !== null ? output.eventArn : undefined,
    };
};
var deserializeAws_json1_1OrganizationEvent = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        endTime: output.endTime !== undefined && output.endTime !== null ? new Date(Math.round(output.endTime * 1000)) : undefined,
        eventScopeCode: output.eventScopeCode !== undefined && output.eventScopeCode !== null ? output.eventScopeCode : undefined,
        eventTypeCategory: output.eventTypeCategory !== undefined && output.eventTypeCategory !== null
            ? output.eventTypeCategory
            : undefined,
        eventTypeCode: output.eventTypeCode !== undefined && output.eventTypeCode !== null ? output.eventTypeCode : undefined,
        lastUpdatedTime: output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null
            ? new Date(Math.round(output.lastUpdatedTime * 1000))
            : undefined,
        region: output.region !== undefined && output.region !== null ? output.region : undefined,
        service: output.service !== undefined && output.service !== null ? output.service : undefined,
        startTime: output.startTime !== undefined && output.startTime !== null
            ? new Date(Math.round(output.startTime * 1000))
            : undefined,
        statusCode: output.statusCode !== undefined && output.statusCode !== null ? output.statusCode : undefined,
    };
};
var deserializeAws_json1_1OrganizationEventDetails = function (output, context) {
    return {
        awsAccountId: output.awsAccountId !== undefined && output.awsAccountId !== null ? output.awsAccountId : undefined,
        event: output.event !== undefined && output.event !== null
            ? deserializeAws_json1_1Event(output.event, context)
            : undefined,
        eventDescription: output.eventDescription !== undefined && output.eventDescription !== null
            ? deserializeAws_json1_1EventDescription(output.eventDescription, context)
            : undefined,
        eventMetadata: output.eventMetadata !== undefined && output.eventMetadata !== null
            ? deserializeAws_json1_1eventMetadata(output.eventMetadata, context)
            : undefined,
    };
};
var deserializeAws_json1_1OrganizationEventDetailsErrorItem = function (output, context) {
    return {
        awsAccountId: output.awsAccountId !== undefined && output.awsAccountId !== null ? output.awsAccountId : undefined,
        errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
        errorName: output.errorName !== undefined && output.errorName !== null ? output.errorName : undefined,
        eventArn: output.eventArn !== undefined && output.eventArn !== null ? output.eventArn : undefined,
    };
};
var deserializeAws_json1_1OrganizationEventList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OrganizationEvent(entry, context);
    });
};
var deserializeAws_json1_1tagSet = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_json1_1UnsupportedLocale = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
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