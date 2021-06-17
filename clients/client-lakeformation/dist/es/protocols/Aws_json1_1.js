import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_json1_1AddLFTagsToResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSLakeFormation.AddLFTagsToResource",
        };
        body = JSON.stringify(serializeAws_json1_1AddLFTagsToResourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1BatchGrantPermissionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSLakeFormation.BatchGrantPermissions",
        };
        body = JSON.stringify(serializeAws_json1_1BatchGrantPermissionsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1BatchRevokePermissionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSLakeFormation.BatchRevokePermissions",
        };
        body = JSON.stringify(serializeAws_json1_1BatchRevokePermissionsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateLFTagCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSLakeFormation.CreateLFTag",
        };
        body = JSON.stringify(serializeAws_json1_1CreateLFTagRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteLFTagCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSLakeFormation.DeleteLFTag",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteLFTagRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeregisterResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSLakeFormation.DeregisterResource",
        };
        body = JSON.stringify(serializeAws_json1_1DeregisterResourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSLakeFormation.DescribeResource",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeResourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetDataLakeSettingsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSLakeFormation.GetDataLakeSettings",
        };
        body = JSON.stringify(serializeAws_json1_1GetDataLakeSettingsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetEffectivePermissionsForPathCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSLakeFormation.GetEffectivePermissionsForPath",
        };
        body = JSON.stringify(serializeAws_json1_1GetEffectivePermissionsForPathRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetLFTagCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSLakeFormation.GetLFTag",
        };
        body = JSON.stringify(serializeAws_json1_1GetLFTagRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetResourceLFTagsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSLakeFormation.GetResourceLFTags",
        };
        body = JSON.stringify(serializeAws_json1_1GetResourceLFTagsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GrantPermissionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSLakeFormation.GrantPermissions",
        };
        body = JSON.stringify(serializeAws_json1_1GrantPermissionsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListLFTagsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSLakeFormation.ListLFTags",
        };
        body = JSON.stringify(serializeAws_json1_1ListLFTagsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListPermissionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSLakeFormation.ListPermissions",
        };
        body = JSON.stringify(serializeAws_json1_1ListPermissionsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListResourcesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSLakeFormation.ListResources",
        };
        body = JSON.stringify(serializeAws_json1_1ListResourcesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutDataLakeSettingsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSLakeFormation.PutDataLakeSettings",
        };
        body = JSON.stringify(serializeAws_json1_1PutDataLakeSettingsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1RegisterResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSLakeFormation.RegisterResource",
        };
        body = JSON.stringify(serializeAws_json1_1RegisterResourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1RemoveLFTagsFromResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSLakeFormation.RemoveLFTagsFromResource",
        };
        body = JSON.stringify(serializeAws_json1_1RemoveLFTagsFromResourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1RevokePermissionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSLakeFormation.RevokePermissions",
        };
        body = JSON.stringify(serializeAws_json1_1RevokePermissionsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1SearchDatabasesByLFTagsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSLakeFormation.SearchDatabasesByLFTags",
        };
        body = JSON.stringify(serializeAws_json1_1SearchDatabasesByLFTagsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1SearchTablesByLFTagsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSLakeFormation.SearchTablesByLFTags",
        };
        body = JSON.stringify(serializeAws_json1_1SearchTablesByLFTagsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateLFTagCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSLakeFormation.UpdateLFTag",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateLFTagRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSLakeFormation.UpdateResource",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateResourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_json1_1AddLFTagsToResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AddLFTagsToResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AddLFTagsToResourceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AddLFTagsToResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.lakeformation#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConcurrentModificationException": return [3 /*break*/, 4];
                    case "com.amazonaws.lakeformation#ConcurrentModificationException": return [3 /*break*/, 4];
                    case "EntityNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.lakeformation#EntityNotFoundException": return [3 /*break*/, 6];
                    case "InternalServiceException": return [3 /*break*/, 8];
                    case "com.amazonaws.lakeformation#InternalServiceException": return [3 /*break*/, 8];
                    case "InvalidInputException": return [3 /*break*/, 10];
                    case "com.amazonaws.lakeformation#InvalidInputException": return [3 /*break*/, 10];
                    case "OperationTimeoutException": return [3 /*break*/, 12];
                    case "com.amazonaws.lakeformation#OperationTimeoutException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1BatchGrantPermissionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1BatchGrantPermissionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1BatchGrantPermissionsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1BatchGrantPermissionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.lakeformation#InvalidInputException": return [3 /*break*/, 2];
                    case "OperationTimeoutException": return [3 /*break*/, 4];
                    case "com.amazonaws.lakeformation#OperationTimeoutException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1BatchRevokePermissionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1BatchRevokePermissionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1BatchRevokePermissionsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1BatchRevokePermissionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.lakeformation#InvalidInputException": return [3 /*break*/, 2];
                    case "OperationTimeoutException": return [3 /*break*/, 4];
                    case "com.amazonaws.lakeformation#OperationTimeoutException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateLFTagCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateLFTagCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateLFTagResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateLFTagCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.lakeformation#AccessDeniedException": return [3 /*break*/, 2];
                    case "EntityNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lakeformation#EntityNotFoundException": return [3 /*break*/, 4];
                    case "InternalServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.lakeformation#InternalServiceException": return [3 /*break*/, 6];
                    case "InvalidInputException": return [3 /*break*/, 8];
                    case "com.amazonaws.lakeformation#InvalidInputException": return [3 /*break*/, 8];
                    case "OperationTimeoutException": return [3 /*break*/, 10];
                    case "com.amazonaws.lakeformation#OperationTimeoutException": return [3 /*break*/, 10];
                    case "ResourceNumberLimitExceededException": return [3 /*break*/, 12];
                    case "com.amazonaws.lakeformation#ResourceNumberLimitExceededException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteLFTagCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteLFTagCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteLFTagResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteLFTagCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.lakeformation#AccessDeniedException": return [3 /*break*/, 2];
                    case "EntityNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lakeformation#EntityNotFoundException": return [3 /*break*/, 4];
                    case "InternalServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.lakeformation#InternalServiceException": return [3 /*break*/, 6];
                    case "InvalidInputException": return [3 /*break*/, 8];
                    case "com.amazonaws.lakeformation#InvalidInputException": return [3 /*break*/, 8];
                    case "OperationTimeoutException": return [3 /*break*/, 10];
                    case "com.amazonaws.lakeformation#OperationTimeoutException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeregisterResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeregisterResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeregisterResourceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeregisterResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "EntityNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.lakeformation#EntityNotFoundException": return [3 /*break*/, 2];
                    case "InternalServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.lakeformation#InternalServiceException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.lakeformation#InvalidInputException": return [3 /*break*/, 6];
                    case "OperationTimeoutException": return [3 /*break*/, 8];
                    case "com.amazonaws.lakeformation#OperationTimeoutException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeResourceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "EntityNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.lakeformation#EntityNotFoundException": return [3 /*break*/, 2];
                    case "InternalServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.lakeformation#InternalServiceException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.lakeformation#InvalidInputException": return [3 /*break*/, 6];
                    case "OperationTimeoutException": return [3 /*break*/, 8];
                    case "com.amazonaws.lakeformation#OperationTimeoutException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetDataLakeSettingsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetDataLakeSettingsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetDataLakeSettingsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetDataLakeSettingsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "EntityNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.lakeformation#EntityNotFoundException": return [3 /*break*/, 2];
                    case "InternalServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.lakeformation#InternalServiceException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.lakeformation#InvalidInputException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetEffectivePermissionsForPathCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetEffectivePermissionsForPathCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetEffectivePermissionsForPathResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetEffectivePermissionsForPathCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "EntityNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.lakeformation#EntityNotFoundException": return [3 /*break*/, 2];
                    case "InternalServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.lakeformation#InternalServiceException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.lakeformation#InvalidInputException": return [3 /*break*/, 6];
                    case "OperationTimeoutException": return [3 /*break*/, 8];
                    case "com.amazonaws.lakeformation#OperationTimeoutException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetLFTagCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetLFTagCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetLFTagResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetLFTagCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.lakeformation#AccessDeniedException": return [3 /*break*/, 2];
                    case "EntityNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lakeformation#EntityNotFoundException": return [3 /*break*/, 4];
                    case "InternalServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.lakeformation#InternalServiceException": return [3 /*break*/, 6];
                    case "InvalidInputException": return [3 /*break*/, 8];
                    case "com.amazonaws.lakeformation#InvalidInputException": return [3 /*break*/, 8];
                    case "OperationTimeoutException": return [3 /*break*/, 10];
                    case "com.amazonaws.lakeformation#OperationTimeoutException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetResourceLFTagsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetResourceLFTagsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetResourceLFTagsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetResourceLFTagsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.lakeformation#AccessDeniedException": return [3 /*break*/, 2];
                    case "EntityNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lakeformation#EntityNotFoundException": return [3 /*break*/, 4];
                    case "GlueEncryptionException": return [3 /*break*/, 6];
                    case "com.amazonaws.lakeformation#GlueEncryptionException": return [3 /*break*/, 6];
                    case "InternalServiceException": return [3 /*break*/, 8];
                    case "com.amazonaws.lakeformation#InternalServiceException": return [3 /*break*/, 8];
                    case "InvalidInputException": return [3 /*break*/, 10];
                    case "com.amazonaws.lakeformation#InvalidInputException": return [3 /*break*/, 10];
                    case "OperationTimeoutException": return [3 /*break*/, 12];
                    case "com.amazonaws.lakeformation#OperationTimeoutException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GrantPermissionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GrantPermissionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GrantPermissionsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GrantPermissionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.lakeformation#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "EntityNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lakeformation#EntityNotFoundException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.lakeformation#InvalidInputException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListLFTagsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListLFTagsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListLFTagsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListLFTagsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "EntityNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.lakeformation#EntityNotFoundException": return [3 /*break*/, 2];
                    case "InternalServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.lakeformation#InternalServiceException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.lakeformation#InvalidInputException": return [3 /*break*/, 6];
                    case "OperationTimeoutException": return [3 /*break*/, 8];
                    case "com.amazonaws.lakeformation#OperationTimeoutException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListPermissionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListPermissionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListPermissionsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListPermissionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.lakeformation#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidInputException": return [3 /*break*/, 4];
                    case "com.amazonaws.lakeformation#InvalidInputException": return [3 /*break*/, 4];
                    case "OperationTimeoutException": return [3 /*break*/, 6];
                    case "com.amazonaws.lakeformation#OperationTimeoutException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListResourcesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListResourcesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListResourcesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListResourcesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.lakeformation#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidInputException": return [3 /*break*/, 4];
                    case "com.amazonaws.lakeformation#InvalidInputException": return [3 /*break*/, 4];
                    case "OperationTimeoutException": return [3 /*break*/, 6];
                    case "com.amazonaws.lakeformation#OperationTimeoutException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutDataLakeSettingsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutDataLakeSettingsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1PutDataLakeSettingsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1PutDataLakeSettingsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.lakeformation#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidInputException": return [3 /*break*/, 4];
                    case "com.amazonaws.lakeformation#InvalidInputException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1RegisterResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1RegisterResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1RegisterResourceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1RegisterResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AlreadyExistsException": return [3 /*break*/, 2];
                    case "com.amazonaws.lakeformation#AlreadyExistsException": return [3 /*break*/, 2];
                    case "InternalServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.lakeformation#InternalServiceException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.lakeformation#InvalidInputException": return [3 /*break*/, 6];
                    case "OperationTimeoutException": return [3 /*break*/, 8];
                    case "com.amazonaws.lakeformation#OperationTimeoutException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1RemoveLFTagsFromResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1RemoveLFTagsFromResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1RemoveLFTagsFromResourceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1RemoveLFTagsFromResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.lakeformation#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConcurrentModificationException": return [3 /*break*/, 4];
                    case "com.amazonaws.lakeformation#ConcurrentModificationException": return [3 /*break*/, 4];
                    case "EntityNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.lakeformation#EntityNotFoundException": return [3 /*break*/, 6];
                    case "GlueEncryptionException": return [3 /*break*/, 8];
                    case "com.amazonaws.lakeformation#GlueEncryptionException": return [3 /*break*/, 8];
                    case "InternalServiceException": return [3 /*break*/, 10];
                    case "com.amazonaws.lakeformation#InternalServiceException": return [3 /*break*/, 10];
                    case "InvalidInputException": return [3 /*break*/, 12];
                    case "com.amazonaws.lakeformation#InvalidInputException": return [3 /*break*/, 12];
                    case "OperationTimeoutException": return [3 /*break*/, 14];
                    case "com.amazonaws.lakeformation#OperationTimeoutException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1RevokePermissionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1RevokePermissionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1RevokePermissionsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1RevokePermissionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.lakeformation#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "EntityNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lakeformation#EntityNotFoundException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.lakeformation#InvalidInputException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1SearchDatabasesByLFTagsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1SearchDatabasesByLFTagsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1SearchDatabasesByLFTagsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1SearchDatabasesByLFTagsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.lakeformation#AccessDeniedException": return [3 /*break*/, 2];
                    case "EntityNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lakeformation#EntityNotFoundException": return [3 /*break*/, 4];
                    case "GlueEncryptionException": return [3 /*break*/, 6];
                    case "com.amazonaws.lakeformation#GlueEncryptionException": return [3 /*break*/, 6];
                    case "InternalServiceException": return [3 /*break*/, 8];
                    case "com.amazonaws.lakeformation#InternalServiceException": return [3 /*break*/, 8];
                    case "InvalidInputException": return [3 /*break*/, 10];
                    case "com.amazonaws.lakeformation#InvalidInputException": return [3 /*break*/, 10];
                    case "OperationTimeoutException": return [3 /*break*/, 12];
                    case "com.amazonaws.lakeformation#OperationTimeoutException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1SearchTablesByLFTagsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1SearchTablesByLFTagsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1SearchTablesByLFTagsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1SearchTablesByLFTagsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.lakeformation#AccessDeniedException": return [3 /*break*/, 2];
                    case "EntityNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lakeformation#EntityNotFoundException": return [3 /*break*/, 4];
                    case "GlueEncryptionException": return [3 /*break*/, 6];
                    case "com.amazonaws.lakeformation#GlueEncryptionException": return [3 /*break*/, 6];
                    case "InternalServiceException": return [3 /*break*/, 8];
                    case "com.amazonaws.lakeformation#InternalServiceException": return [3 /*break*/, 8];
                    case "InvalidInputException": return [3 /*break*/, 10];
                    case "com.amazonaws.lakeformation#InvalidInputException": return [3 /*break*/, 10];
                    case "OperationTimeoutException": return [3 /*break*/, 12];
                    case "com.amazonaws.lakeformation#OperationTimeoutException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateLFTagCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateLFTagCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateLFTagResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateLFTagCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.lakeformation#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConcurrentModificationException": return [3 /*break*/, 4];
                    case "com.amazonaws.lakeformation#ConcurrentModificationException": return [3 /*break*/, 4];
                    case "EntityNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.lakeformation#EntityNotFoundException": return [3 /*break*/, 6];
                    case "InternalServiceException": return [3 /*break*/, 8];
                    case "com.amazonaws.lakeformation#InternalServiceException": return [3 /*break*/, 8];
                    case "InvalidInputException": return [3 /*break*/, 10];
                    case "com.amazonaws.lakeformation#InvalidInputException": return [3 /*break*/, 10];
                    case "OperationTimeoutException": return [3 /*break*/, 12];
                    case "com.amazonaws.lakeformation#OperationTimeoutException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateResourceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "EntityNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.lakeformation#EntityNotFoundException": return [3 /*break*/, 2];
                    case "InternalServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.lakeformation#InternalServiceException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.lakeformation#InvalidInputException": return [3 /*break*/, 6];
                    case "OperationTimeoutException": return [3 /*break*/, 8];
                    case "com.amazonaws.lakeformation#OperationTimeoutException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)];
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
var deserializeAws_json1_1AccessDeniedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1AccessDeniedException(body, context);
        contents = __assign({ name: "AccessDeniedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1AlreadyExistsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1AlreadyExistsException(body, context);
        contents = __assign({ name: "AlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_json1_1EntityNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1EntityNotFoundException(body, context);
        contents = __assign({ name: "EntityNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1GlueEncryptionExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1GlueEncryptionException(body, context);
        contents = __assign({ name: "GlueEncryptionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InternalServiceExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InternalServiceException(body, context);
        contents = __assign({ name: "InternalServiceException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_json1_1OperationTimeoutExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1OperationTimeoutException(body, context);
        contents = __assign({ name: "OperationTimeoutException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ResourceNumberLimitExceededException(body, context);
        contents = __assign({ name: "ResourceNumberLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_json1_1AddLFTagsToResourceRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId })), (input.LFTags !== undefined &&
        input.LFTags !== null && { LFTags: serializeAws_json1_1LFTagsList(input.LFTags, context) })), (input.Resource !== undefined &&
        input.Resource !== null && { Resource: serializeAws_json1_1Resource(input.Resource, context) }));
};
var serializeAws_json1_1BatchGrantPermissionsRequest = function (input, context) {
    return __assign(__assign({}, (input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId })), (input.Entries !== undefined &&
        input.Entries !== null && {
        Entries: serializeAws_json1_1BatchPermissionsRequestEntryList(input.Entries, context),
    }));
};
var serializeAws_json1_1BatchPermissionsRequestEntry = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.Permissions !== undefined &&
        input.Permissions !== null && { Permissions: serializeAws_json1_1PermissionList(input.Permissions, context) })), (input.PermissionsWithGrantOption !== undefined &&
        input.PermissionsWithGrantOption !== null && {
        PermissionsWithGrantOption: serializeAws_json1_1PermissionList(input.PermissionsWithGrantOption, context),
    })), (input.Principal !== undefined &&
        input.Principal !== null && { Principal: serializeAws_json1_1DataLakePrincipal(input.Principal, context) })), (input.Resource !== undefined &&
        input.Resource !== null && { Resource: serializeAws_json1_1Resource(input.Resource, context) }));
};
var serializeAws_json1_1BatchPermissionsRequestEntryList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1BatchPermissionsRequestEntry(entry, context);
    });
};
var serializeAws_json1_1BatchRevokePermissionsRequest = function (input, context) {
    return __assign(__assign({}, (input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId })), (input.Entries !== undefined &&
        input.Entries !== null && {
        Entries: serializeAws_json1_1BatchPermissionsRequestEntryList(input.Entries, context),
    }));
};
var serializeAws_json1_1CatalogResource = function (input, context) {
    return {};
};
var serializeAws_json1_1ColumnNames = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ColumnWildcard = function (input, context) {
    return __assign({}, (input.ExcludedColumnNames !== undefined &&
        input.ExcludedColumnNames !== null && {
        ExcludedColumnNames: serializeAws_json1_1ColumnNames(input.ExcludedColumnNames, context),
    }));
};
var serializeAws_json1_1CreateLFTagRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId })), (input.TagKey !== undefined && input.TagKey !== null && { TagKey: input.TagKey })), (input.TagValues !== undefined &&
        input.TagValues !== null && { TagValues: serializeAws_json1_1TagValueList(input.TagValues, context) }));
};
var serializeAws_json1_1DatabaseResource = function (input, context) {
    return __assign(__assign({}, (input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId })), (input.Name !== undefined && input.Name !== null && { Name: input.Name }));
};
var serializeAws_json1_1DataLakePrincipal = function (input, context) {
    return __assign({}, (input.DataLakePrincipalIdentifier !== undefined &&
        input.DataLakePrincipalIdentifier !== null && { DataLakePrincipalIdentifier: input.DataLakePrincipalIdentifier }));
};
var serializeAws_json1_1DataLakePrincipalList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1DataLakePrincipal(entry, context);
    });
};
var serializeAws_json1_1DataLakeSettings = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.CreateDatabaseDefaultPermissions !== undefined &&
        input.CreateDatabaseDefaultPermissions !== null && {
        CreateDatabaseDefaultPermissions: serializeAws_json1_1PrincipalPermissionsList(input.CreateDatabaseDefaultPermissions, context),
    })), (input.CreateTableDefaultPermissions !== undefined &&
        input.CreateTableDefaultPermissions !== null && {
        CreateTableDefaultPermissions: serializeAws_json1_1PrincipalPermissionsList(input.CreateTableDefaultPermissions, context),
    })), (input.DataLakeAdmins !== undefined &&
        input.DataLakeAdmins !== null && {
        DataLakeAdmins: serializeAws_json1_1DataLakePrincipalList(input.DataLakeAdmins, context),
    })), (input.TrustedResourceOwners !== undefined &&
        input.TrustedResourceOwners !== null && {
        TrustedResourceOwners: serializeAws_json1_1TrustedResourceOwners(input.TrustedResourceOwners, context),
    }));
};
var serializeAws_json1_1DataLocationResource = function (input, context) {
    return __assign(__assign({}, (input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId })), (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }));
};
var serializeAws_json1_1DeleteLFTagRequest = function (input, context) {
    return __assign(__assign({}, (input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId })), (input.TagKey !== undefined && input.TagKey !== null && { TagKey: input.TagKey }));
};
var serializeAws_json1_1DeregisterResourceRequest = function (input, context) {
    return __assign({}, (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }));
};
var serializeAws_json1_1DescribeResourceRequest = function (input, context) {
    return __assign({}, (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }));
};
var serializeAws_json1_1Expression = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1LFTag(entry, context);
    });
};
var serializeAws_json1_1FilterCondition = function (input, context) {
    return __assign(__assign(__assign({}, (input.ComparisonOperator !== undefined &&
        input.ComparisonOperator !== null && { ComparisonOperator: input.ComparisonOperator })), (input.Field !== undefined && input.Field !== null && { Field: input.Field })), (input.StringValueList !== undefined &&
        input.StringValueList !== null && {
        StringValueList: serializeAws_json1_1StringValueList(input.StringValueList, context),
    }));
};
var serializeAws_json1_1FilterConditionList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1FilterCondition(entry, context);
    });
};
var serializeAws_json1_1GetDataLakeSettingsRequest = function (input, context) {
    return __assign({}, (input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }));
};
var serializeAws_json1_1GetEffectivePermissionsForPathRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }));
};
var serializeAws_json1_1GetLFTagRequest = function (input, context) {
    return __assign(__assign({}, (input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId })), (input.TagKey !== undefined && input.TagKey !== null && { TagKey: input.TagKey }));
};
var serializeAws_json1_1GetResourceLFTagsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId })), (input.Resource !== undefined &&
        input.Resource !== null && { Resource: serializeAws_json1_1Resource(input.Resource, context) })), (input.ShowAssignedLFTags !== undefined &&
        input.ShowAssignedLFTags !== null && { ShowAssignedLFTags: input.ShowAssignedLFTags }));
};
var serializeAws_json1_1GrantPermissionsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId })), (input.Permissions !== undefined &&
        input.Permissions !== null && { Permissions: serializeAws_json1_1PermissionList(input.Permissions, context) })), (input.PermissionsWithGrantOption !== undefined &&
        input.PermissionsWithGrantOption !== null && {
        PermissionsWithGrantOption: serializeAws_json1_1PermissionList(input.PermissionsWithGrantOption, context),
    })), (input.Principal !== undefined &&
        input.Principal !== null && { Principal: serializeAws_json1_1DataLakePrincipal(input.Principal, context) })), (input.Resource !== undefined &&
        input.Resource !== null && { Resource: serializeAws_json1_1Resource(input.Resource, context) }));
};
var serializeAws_json1_1LFTag = function (input, context) {
    return __assign(__assign({}, (input.TagKey !== undefined && input.TagKey !== null && { TagKey: input.TagKey })), (input.TagValues !== undefined &&
        input.TagValues !== null && { TagValues: serializeAws_json1_1TagValueList(input.TagValues, context) }));
};
var serializeAws_json1_1LFTagKeyResource = function (input, context) {
    return __assign(__assign(__assign({}, (input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId })), (input.TagKey !== undefined && input.TagKey !== null && { TagKey: input.TagKey })), (input.TagValues !== undefined &&
        input.TagValues !== null && { TagValues: serializeAws_json1_1TagValueList(input.TagValues, context) }));
};
var serializeAws_json1_1LFTagPair = function (input, context) {
    return __assign(__assign(__assign({}, (input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId })), (input.TagKey !== undefined && input.TagKey !== null && { TagKey: input.TagKey })), (input.TagValues !== undefined &&
        input.TagValues !== null && { TagValues: serializeAws_json1_1TagValueList(input.TagValues, context) }));
};
var serializeAws_json1_1LFTagPolicyResource = function (input, context) {
    return __assign(__assign(__assign({}, (input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId })), (input.Expression !== undefined &&
        input.Expression !== null && { Expression: serializeAws_json1_1Expression(input.Expression, context) })), (input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }));
};
var serializeAws_json1_1LFTagsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1LFTagPair(entry, context);
    });
};
var serializeAws_json1_1ListLFTagsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.ResourceShareType !== undefined &&
        input.ResourceShareType !== null && { ResourceShareType: input.ResourceShareType }));
};
var serializeAws_json1_1ListPermissionsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.Principal !== undefined &&
        input.Principal !== null && { Principal: serializeAws_json1_1DataLakePrincipal(input.Principal, context) })), (input.Resource !== undefined &&
        input.Resource !== null && { Resource: serializeAws_json1_1Resource(input.Resource, context) })), (input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }));
};
var serializeAws_json1_1ListResourcesRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.FilterConditionList !== undefined &&
        input.FilterConditionList !== null && {
        FilterConditionList: serializeAws_json1_1FilterConditionList(input.FilterConditionList, context),
    })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1PermissionList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1PrincipalPermissions = function (input, context) {
    return __assign(__assign({}, (input.Permissions !== undefined &&
        input.Permissions !== null && { Permissions: serializeAws_json1_1PermissionList(input.Permissions, context) })), (input.Principal !== undefined &&
        input.Principal !== null && { Principal: serializeAws_json1_1DataLakePrincipal(input.Principal, context) }));
};
var serializeAws_json1_1PrincipalPermissionsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1PrincipalPermissions(entry, context);
    });
};
var serializeAws_json1_1PutDataLakeSettingsRequest = function (input, context) {
    return __assign(__assign({}, (input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId })), (input.DataLakeSettings !== undefined &&
        input.DataLakeSettings !== null && {
        DataLakeSettings: serializeAws_json1_1DataLakeSettings(input.DataLakeSettings, context),
    }));
};
var serializeAws_json1_1RegisterResourceRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn })), (input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn })), (input.UseServiceLinkedRole !== undefined &&
        input.UseServiceLinkedRole !== null && { UseServiceLinkedRole: input.UseServiceLinkedRole }));
};
var serializeAws_json1_1RemoveLFTagsFromResourceRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId })), (input.LFTags !== undefined &&
        input.LFTags !== null && { LFTags: serializeAws_json1_1LFTagsList(input.LFTags, context) })), (input.Resource !== undefined &&
        input.Resource !== null && { Resource: serializeAws_json1_1Resource(input.Resource, context) }));
};
var serializeAws_json1_1Resource = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Catalog !== undefined &&
        input.Catalog !== null && { Catalog: serializeAws_json1_1CatalogResource(input.Catalog, context) })), (input.DataLocation !== undefined &&
        input.DataLocation !== null && {
        DataLocation: serializeAws_json1_1DataLocationResource(input.DataLocation, context),
    })), (input.Database !== undefined &&
        input.Database !== null && { Database: serializeAws_json1_1DatabaseResource(input.Database, context) })), (input.LFTag !== undefined &&
        input.LFTag !== null && { LFTag: serializeAws_json1_1LFTagKeyResource(input.LFTag, context) })), (input.LFTagPolicy !== undefined &&
        input.LFTagPolicy !== null && {
        LFTagPolicy: serializeAws_json1_1LFTagPolicyResource(input.LFTagPolicy, context),
    })), (input.Table !== undefined &&
        input.Table !== null && { Table: serializeAws_json1_1TableResource(input.Table, context) })), (input.TableWithColumns !== undefined &&
        input.TableWithColumns !== null && {
        TableWithColumns: serializeAws_json1_1TableWithColumnsResource(input.TableWithColumns, context),
    }));
};
var serializeAws_json1_1RevokePermissionsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId })), (input.Permissions !== undefined &&
        input.Permissions !== null && { Permissions: serializeAws_json1_1PermissionList(input.Permissions, context) })), (input.PermissionsWithGrantOption !== undefined &&
        input.PermissionsWithGrantOption !== null && {
        PermissionsWithGrantOption: serializeAws_json1_1PermissionList(input.PermissionsWithGrantOption, context),
    })), (input.Principal !== undefined &&
        input.Principal !== null && { Principal: serializeAws_json1_1DataLakePrincipal(input.Principal, context) })), (input.Resource !== undefined &&
        input.Resource !== null && { Resource: serializeAws_json1_1Resource(input.Resource, context) }));
};
var serializeAws_json1_1SearchDatabasesByLFTagsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId })), (input.Expression !== undefined &&
        input.Expression !== null && { Expression: serializeAws_json1_1Expression(input.Expression, context) })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1SearchTablesByLFTagsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId })), (input.Expression !== undefined &&
        input.Expression !== null && { Expression: serializeAws_json1_1Expression(input.Expression, context) })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1StringValueList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1TableResource = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId })), (input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.TableWildcard !== undefined &&
        input.TableWildcard !== null && {
        TableWildcard: serializeAws_json1_1TableWildcard(input.TableWildcard, context),
    }));
};
var serializeAws_json1_1TableWildcard = function (input, context) {
    return {};
};
var serializeAws_json1_1TableWithColumnsResource = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId })), (input.ColumnNames !== undefined &&
        input.ColumnNames !== null && { ColumnNames: serializeAws_json1_1ColumnNames(input.ColumnNames, context) })), (input.ColumnWildcard !== undefined &&
        input.ColumnWildcard !== null && {
        ColumnWildcard: serializeAws_json1_1ColumnWildcard(input.ColumnWildcard, context),
    })), (input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName })), (input.Name !== undefined && input.Name !== null && { Name: input.Name }));
};
var serializeAws_json1_1TagValueList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1TrustedResourceOwners = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1UpdateLFTagRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId })), (input.TagKey !== undefined && input.TagKey !== null && { TagKey: input.TagKey })), (input.TagValuesToAdd !== undefined &&
        input.TagValuesToAdd !== null && {
        TagValuesToAdd: serializeAws_json1_1TagValueList(input.TagValuesToAdd, context),
    })), (input.TagValuesToDelete !== undefined &&
        input.TagValuesToDelete !== null && {
        TagValuesToDelete: serializeAws_json1_1TagValueList(input.TagValuesToDelete, context),
    }));
};
var serializeAws_json1_1UpdateResourceRequest = function (input, context) {
    return __assign(__assign({}, (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn })), (input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }));
};
var deserializeAws_json1_1AccessDeniedException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1AddLFTagsToResourceResponse = function (output, context) {
    return {
        Failures: output.Failures !== undefined && output.Failures !== null
            ? deserializeAws_json1_1LFTagErrors(output.Failures, context)
            : undefined,
    };
};
var deserializeAws_json1_1AlreadyExistsException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1BatchGrantPermissionsResponse = function (output, context) {
    return {
        Failures: output.Failures !== undefined && output.Failures !== null
            ? deserializeAws_json1_1BatchPermissionsFailureList(output.Failures, context)
            : undefined,
    };
};
var deserializeAws_json1_1BatchPermissionsFailureEntry = function (output, context) {
    return {
        Error: output.Error !== undefined && output.Error !== null
            ? deserializeAws_json1_1ErrorDetail(output.Error, context)
            : undefined,
        RequestEntry: output.RequestEntry !== undefined && output.RequestEntry !== null
            ? deserializeAws_json1_1BatchPermissionsRequestEntry(output.RequestEntry, context)
            : undefined,
    };
};
var deserializeAws_json1_1BatchPermissionsFailureList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BatchPermissionsFailureEntry(entry, context);
    });
};
var deserializeAws_json1_1BatchPermissionsRequestEntry = function (output, context) {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Permissions: output.Permissions !== undefined && output.Permissions !== null
            ? deserializeAws_json1_1PermissionList(output.Permissions, context)
            : undefined,
        PermissionsWithGrantOption: output.PermissionsWithGrantOption !== undefined && output.PermissionsWithGrantOption !== null
            ? deserializeAws_json1_1PermissionList(output.PermissionsWithGrantOption, context)
            : undefined,
        Principal: output.Principal !== undefined && output.Principal !== null
            ? deserializeAws_json1_1DataLakePrincipal(output.Principal, context)
            : undefined,
        Resource: output.Resource !== undefined && output.Resource !== null
            ? deserializeAws_json1_1Resource(output.Resource, context)
            : undefined,
    };
};
var deserializeAws_json1_1BatchRevokePermissionsResponse = function (output, context) {
    return {
        Failures: output.Failures !== undefined && output.Failures !== null
            ? deserializeAws_json1_1BatchPermissionsFailureList(output.Failures, context)
            : undefined,
    };
};
var deserializeAws_json1_1CatalogResource = function (output, context) {
    return {};
};
var deserializeAws_json1_1ColumnLFTag = function (output, context) {
    return {
        LFTags: output.LFTags !== undefined && output.LFTags !== null
            ? deserializeAws_json1_1LFTagsList(output.LFTags, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_json1_1ColumnLFTagsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ColumnLFTag(entry, context);
    });
};
var deserializeAws_json1_1ColumnNames = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1ColumnWildcard = function (output, context) {
    return {
        ExcludedColumnNames: output.ExcludedColumnNames !== undefined && output.ExcludedColumnNames !== null
            ? deserializeAws_json1_1ColumnNames(output.ExcludedColumnNames, context)
            : undefined,
    };
};
var deserializeAws_json1_1ConcurrentModificationException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1CreateLFTagResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1DatabaseLFTagsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TaggedDatabase(entry, context);
    });
};
var deserializeAws_json1_1DatabaseResource = function (output, context) {
    return {
        CatalogId: output.CatalogId !== undefined && output.CatalogId !== null ? output.CatalogId : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_json1_1DataLakePrincipal = function (output, context) {
    return {
        DataLakePrincipalIdentifier: output.DataLakePrincipalIdentifier !== undefined && output.DataLakePrincipalIdentifier !== null
            ? output.DataLakePrincipalIdentifier
            : undefined,
    };
};
var deserializeAws_json1_1DataLakePrincipalList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DataLakePrincipal(entry, context);
    });
};
var deserializeAws_json1_1DataLakeSettings = function (output, context) {
    return {
        CreateDatabaseDefaultPermissions: output.CreateDatabaseDefaultPermissions !== undefined && output.CreateDatabaseDefaultPermissions !== null
            ? deserializeAws_json1_1PrincipalPermissionsList(output.CreateDatabaseDefaultPermissions, context)
            : undefined,
        CreateTableDefaultPermissions: output.CreateTableDefaultPermissions !== undefined && output.CreateTableDefaultPermissions !== null
            ? deserializeAws_json1_1PrincipalPermissionsList(output.CreateTableDefaultPermissions, context)
            : undefined,
        DataLakeAdmins: output.DataLakeAdmins !== undefined && output.DataLakeAdmins !== null
            ? deserializeAws_json1_1DataLakePrincipalList(output.DataLakeAdmins, context)
            : undefined,
        TrustedResourceOwners: output.TrustedResourceOwners !== undefined && output.TrustedResourceOwners !== null
            ? deserializeAws_json1_1TrustedResourceOwners(output.TrustedResourceOwners, context)
            : undefined,
    };
};
var deserializeAws_json1_1DataLocationResource = function (output, context) {
    return {
        CatalogId: output.CatalogId !== undefined && output.CatalogId !== null ? output.CatalogId : undefined,
        ResourceArn: output.ResourceArn !== undefined && output.ResourceArn !== null ? output.ResourceArn : undefined,
    };
};
var deserializeAws_json1_1DeleteLFTagResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeregisterResourceResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1DescribeResourceResponse = function (output, context) {
    return {
        ResourceInfo: output.ResourceInfo !== undefined && output.ResourceInfo !== null
            ? deserializeAws_json1_1ResourceInfo(output.ResourceInfo, context)
            : undefined,
    };
};
var deserializeAws_json1_1DetailsMap = function (output, context) {
    return {
        ResourceShare: output.ResourceShare !== undefined && output.ResourceShare !== null
            ? deserializeAws_json1_1ResourceShareList(output.ResourceShare, context)
            : undefined,
    };
};
var deserializeAws_json1_1EntityNotFoundException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1ErrorDetail = function (output, context) {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
    };
};
var deserializeAws_json1_1Expression = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LFTag(entry, context);
    });
};
var deserializeAws_json1_1GetDataLakeSettingsResponse = function (output, context) {
    return {
        DataLakeSettings: output.DataLakeSettings !== undefined && output.DataLakeSettings !== null
            ? deserializeAws_json1_1DataLakeSettings(output.DataLakeSettings, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetEffectivePermissionsForPathResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Permissions: output.Permissions !== undefined && output.Permissions !== null
            ? deserializeAws_json1_1PrincipalResourcePermissionsList(output.Permissions, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetLFTagResponse = function (output, context) {
    return {
        CatalogId: output.CatalogId !== undefined && output.CatalogId !== null ? output.CatalogId : undefined,
        TagKey: output.TagKey !== undefined && output.TagKey !== null ? output.TagKey : undefined,
        TagValues: output.TagValues !== undefined && output.TagValues !== null
            ? deserializeAws_json1_1TagValueList(output.TagValues, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetResourceLFTagsResponse = function (output, context) {
    return {
        LFTagOnDatabase: output.LFTagOnDatabase !== undefined && output.LFTagOnDatabase !== null
            ? deserializeAws_json1_1LFTagsList(output.LFTagOnDatabase, context)
            : undefined,
        LFTagsOnColumns: output.LFTagsOnColumns !== undefined && output.LFTagsOnColumns !== null
            ? deserializeAws_json1_1ColumnLFTagsList(output.LFTagsOnColumns, context)
            : undefined,
        LFTagsOnTable: output.LFTagsOnTable !== undefined && output.LFTagsOnTable !== null
            ? deserializeAws_json1_1LFTagsList(output.LFTagsOnTable, context)
            : undefined,
    };
};
var deserializeAws_json1_1GlueEncryptionException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1GrantPermissionsResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1InternalServiceException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidInputException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1LFTag = function (output, context) {
    return {
        TagKey: output.TagKey !== undefined && output.TagKey !== null ? output.TagKey : undefined,
        TagValues: output.TagValues !== undefined && output.TagValues !== null
            ? deserializeAws_json1_1TagValueList(output.TagValues, context)
            : undefined,
    };
};
var deserializeAws_json1_1LFTagError = function (output, context) {
    return {
        Error: output.Error !== undefined && output.Error !== null
            ? deserializeAws_json1_1ErrorDetail(output.Error, context)
            : undefined,
        LFTag: output.LFTag !== undefined && output.LFTag !== null
            ? deserializeAws_json1_1LFTagPair(output.LFTag, context)
            : undefined,
    };
};
var deserializeAws_json1_1LFTagErrors = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LFTagError(entry, context);
    });
};
var deserializeAws_json1_1LFTagKeyResource = function (output, context) {
    return {
        CatalogId: output.CatalogId !== undefined && output.CatalogId !== null ? output.CatalogId : undefined,
        TagKey: output.TagKey !== undefined && output.TagKey !== null ? output.TagKey : undefined,
        TagValues: output.TagValues !== undefined && output.TagValues !== null
            ? deserializeAws_json1_1TagValueList(output.TagValues, context)
            : undefined,
    };
};
var deserializeAws_json1_1LFTagPair = function (output, context) {
    return {
        CatalogId: output.CatalogId !== undefined && output.CatalogId !== null ? output.CatalogId : undefined,
        TagKey: output.TagKey !== undefined && output.TagKey !== null ? output.TagKey : undefined,
        TagValues: output.TagValues !== undefined && output.TagValues !== null
            ? deserializeAws_json1_1TagValueList(output.TagValues, context)
            : undefined,
    };
};
var deserializeAws_json1_1LFTagPolicyResource = function (output, context) {
    return {
        CatalogId: output.CatalogId !== undefined && output.CatalogId !== null ? output.CatalogId : undefined,
        Expression: output.Expression !== undefined && output.Expression !== null
            ? deserializeAws_json1_1Expression(output.Expression, context)
            : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    };
};
var deserializeAws_json1_1LFTagsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LFTagPair(entry, context);
    });
};
var deserializeAws_json1_1ListLFTagsResponse = function (output, context) {
    return {
        LFTags: output.LFTags !== undefined && output.LFTags !== null
            ? deserializeAws_json1_1LFTagsList(output.LFTags, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1ListPermissionsResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        PrincipalResourcePermissions: output.PrincipalResourcePermissions !== undefined && output.PrincipalResourcePermissions !== null
            ? deserializeAws_json1_1PrincipalResourcePermissionsList(output.PrincipalResourcePermissions, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListResourcesResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        ResourceInfoList: output.ResourceInfoList !== undefined && output.ResourceInfoList !== null
            ? deserializeAws_json1_1ResourceInfoList(output.ResourceInfoList, context)
            : undefined,
    };
};
var deserializeAws_json1_1OperationTimeoutException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1PermissionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1PrincipalPermissions = function (output, context) {
    return {
        Permissions: output.Permissions !== undefined && output.Permissions !== null
            ? deserializeAws_json1_1PermissionList(output.Permissions, context)
            : undefined,
        Principal: output.Principal !== undefined && output.Principal !== null
            ? deserializeAws_json1_1DataLakePrincipal(output.Principal, context)
            : undefined,
    };
};
var deserializeAws_json1_1PrincipalPermissionsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PrincipalPermissions(entry, context);
    });
};
var deserializeAws_json1_1PrincipalResourcePermissions = function (output, context) {
    return {
        AdditionalDetails: output.AdditionalDetails !== undefined && output.AdditionalDetails !== null
            ? deserializeAws_json1_1DetailsMap(output.AdditionalDetails, context)
            : undefined,
        Permissions: output.Permissions !== undefined && output.Permissions !== null
            ? deserializeAws_json1_1PermissionList(output.Permissions, context)
            : undefined,
        PermissionsWithGrantOption: output.PermissionsWithGrantOption !== undefined && output.PermissionsWithGrantOption !== null
            ? deserializeAws_json1_1PermissionList(output.PermissionsWithGrantOption, context)
            : undefined,
        Principal: output.Principal !== undefined && output.Principal !== null
            ? deserializeAws_json1_1DataLakePrincipal(output.Principal, context)
            : undefined,
        Resource: output.Resource !== undefined && output.Resource !== null
            ? deserializeAws_json1_1Resource(output.Resource, context)
            : undefined,
    };
};
var deserializeAws_json1_1PrincipalResourcePermissionsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PrincipalResourcePermissions(entry, context);
    });
};
var deserializeAws_json1_1PutDataLakeSettingsResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1RegisterResourceResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1RemoveLFTagsFromResourceResponse = function (output, context) {
    return {
        Failures: output.Failures !== undefined && output.Failures !== null
            ? deserializeAws_json1_1LFTagErrors(output.Failures, context)
            : undefined,
    };
};
var deserializeAws_json1_1Resource = function (output, context) {
    return {
        Catalog: output.Catalog !== undefined && output.Catalog !== null
            ? deserializeAws_json1_1CatalogResource(output.Catalog, context)
            : undefined,
        DataLocation: output.DataLocation !== undefined && output.DataLocation !== null
            ? deserializeAws_json1_1DataLocationResource(output.DataLocation, context)
            : undefined,
        Database: output.Database !== undefined && output.Database !== null
            ? deserializeAws_json1_1DatabaseResource(output.Database, context)
            : undefined,
        LFTag: output.LFTag !== undefined && output.LFTag !== null
            ? deserializeAws_json1_1LFTagKeyResource(output.LFTag, context)
            : undefined,
        LFTagPolicy: output.LFTagPolicy !== undefined && output.LFTagPolicy !== null
            ? deserializeAws_json1_1LFTagPolicyResource(output.LFTagPolicy, context)
            : undefined,
        Table: output.Table !== undefined && output.Table !== null
            ? deserializeAws_json1_1TableResource(output.Table, context)
            : undefined,
        TableWithColumns: output.TableWithColumns !== undefined && output.TableWithColumns !== null
            ? deserializeAws_json1_1TableWithColumnsResource(output.TableWithColumns, context)
            : undefined,
    };
};
var deserializeAws_json1_1ResourceInfo = function (output, context) {
    return {
        LastModified: output.LastModified !== undefined && output.LastModified !== null
            ? new Date(Math.round(output.LastModified * 1000))
            : undefined,
        ResourceArn: output.ResourceArn !== undefined && output.ResourceArn !== null ? output.ResourceArn : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
    };
};
var deserializeAws_json1_1ResourceInfoList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResourceInfo(entry, context);
    });
};
var deserializeAws_json1_1ResourceNumberLimitExceededException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1ResourceShareList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1RevokePermissionsResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1SearchDatabasesByLFTagsResponse = function (output, context) {
    return {
        DatabaseList: output.DatabaseList !== undefined && output.DatabaseList !== null
            ? deserializeAws_json1_1DatabaseLFTagsList(output.DatabaseList, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1SearchTablesByLFTagsResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        TableList: output.TableList !== undefined && output.TableList !== null
            ? deserializeAws_json1_1TableLFTagsList(output.TableList, context)
            : undefined,
    };
};
var deserializeAws_json1_1TableLFTagsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TaggedTable(entry, context);
    });
};
var deserializeAws_json1_1TableResource = function (output, context) {
    return {
        CatalogId: output.CatalogId !== undefined && output.CatalogId !== null ? output.CatalogId : undefined,
        DatabaseName: output.DatabaseName !== undefined && output.DatabaseName !== null ? output.DatabaseName : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        TableWildcard: output.TableWildcard !== undefined && output.TableWildcard !== null
            ? deserializeAws_json1_1TableWildcard(output.TableWildcard, context)
            : undefined,
    };
};
var deserializeAws_json1_1TableWildcard = function (output, context) {
    return {};
};
var deserializeAws_json1_1TableWithColumnsResource = function (output, context) {
    return {
        CatalogId: output.CatalogId !== undefined && output.CatalogId !== null ? output.CatalogId : undefined,
        ColumnNames: output.ColumnNames !== undefined && output.ColumnNames !== null
            ? deserializeAws_json1_1ColumnNames(output.ColumnNames, context)
            : undefined,
        ColumnWildcard: output.ColumnWildcard !== undefined && output.ColumnWildcard !== null
            ? deserializeAws_json1_1ColumnWildcard(output.ColumnWildcard, context)
            : undefined,
        DatabaseName: output.DatabaseName !== undefined && output.DatabaseName !== null ? output.DatabaseName : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_json1_1TaggedDatabase = function (output, context) {
    return {
        Database: output.Database !== undefined && output.Database !== null
            ? deserializeAws_json1_1DatabaseResource(output.Database, context)
            : undefined,
        LFTags: output.LFTags !== undefined && output.LFTags !== null
            ? deserializeAws_json1_1LFTagsList(output.LFTags, context)
            : undefined,
    };
};
var deserializeAws_json1_1TaggedTable = function (output, context) {
    return {
        LFTagOnDatabase: output.LFTagOnDatabase !== undefined && output.LFTagOnDatabase !== null
            ? deserializeAws_json1_1LFTagsList(output.LFTagOnDatabase, context)
            : undefined,
        LFTagsOnColumns: output.LFTagsOnColumns !== undefined && output.LFTagsOnColumns !== null
            ? deserializeAws_json1_1ColumnLFTagsList(output.LFTagsOnColumns, context)
            : undefined,
        LFTagsOnTable: output.LFTagsOnTable !== undefined && output.LFTagsOnTable !== null
            ? deserializeAws_json1_1LFTagsList(output.LFTagsOnTable, context)
            : undefined,
        Table: output.Table !== undefined && output.Table !== null
            ? deserializeAws_json1_1TableResource(output.Table, context)
            : undefined,
    };
};
var deserializeAws_json1_1TagValueList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1TrustedResourceOwners = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1UpdateLFTagResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1UpdateResourceResponse = function (output, context) {
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