import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { v4 as generateIdempotencyToken } from "uuid";
export var serializeAws_json1_1AssociateFileSystemAliasesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSSimbaAPIService_v20180301.AssociateFileSystemAliases",
        };
        body = JSON.stringify(serializeAws_json1_1AssociateFileSystemAliasesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CancelDataRepositoryTaskCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSSimbaAPIService_v20180301.CancelDataRepositoryTask",
        };
        body = JSON.stringify(serializeAws_json1_1CancelDataRepositoryTaskRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CopyBackupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSSimbaAPIService_v20180301.CopyBackup",
        };
        body = JSON.stringify(serializeAws_json1_1CopyBackupRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateBackupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSSimbaAPIService_v20180301.CreateBackup",
        };
        body = JSON.stringify(serializeAws_json1_1CreateBackupRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateDataRepositoryTaskCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSSimbaAPIService_v20180301.CreateDataRepositoryTask",
        };
        body = JSON.stringify(serializeAws_json1_1CreateDataRepositoryTaskRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateFileSystemCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSSimbaAPIService_v20180301.CreateFileSystem",
        };
        body = JSON.stringify(serializeAws_json1_1CreateFileSystemRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateFileSystemFromBackupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup",
        };
        body = JSON.stringify(serializeAws_json1_1CreateFileSystemFromBackupRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteBackupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSSimbaAPIService_v20180301.DeleteBackup",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteBackupRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteFileSystemCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSSimbaAPIService_v20180301.DeleteFileSystem",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteFileSystemRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeBackupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSSimbaAPIService_v20180301.DescribeBackups",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeBackupsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeDataRepositoryTasksCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeDataRepositoryTasksRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeFileSystemAliasesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSSimbaAPIService_v20180301.DescribeFileSystemAliases",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeFileSystemAliasesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeFileSystemsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSSimbaAPIService_v20180301.DescribeFileSystems",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeFileSystemsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DisassociateFileSystemAliasesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSSimbaAPIService_v20180301.DisassociateFileSystemAliases",
        };
        body = JSON.stringify(serializeAws_json1_1DisassociateFileSystemAliasesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListTagsForResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSSimbaAPIService_v20180301.ListTagsForResource",
        };
        body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1TagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSSimbaAPIService_v20180301.TagResource",
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
            "x-amz-target": "AWSSimbaAPIService_v20180301.UntagResource",
        };
        body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateFileSystemCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSSimbaAPIService_v20180301.UpdateFileSystem",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateFileSystemRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_json1_1AssociateFileSystemAliasesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AssociateFileSystemAliasesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AssociateFileSystemAliasesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AssociateFileSystemAliasesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequest": return [3 /*break*/, 2];
                    case "com.amazonaws.fsx#BadRequest": return [3 /*break*/, 2];
                    case "FileSystemNotFound": return [3 /*break*/, 4];
                    case "com.amazonaws.fsx#FileSystemNotFound": return [3 /*break*/, 4];
                    case "InternalServerError": return [3 /*break*/, 6];
                    case "com.amazonaws.fsx#InternalServerError": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1BadRequestResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CancelDataRepositoryTaskCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CancelDataRepositoryTaskCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CancelDataRepositoryTaskResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CancelDataRepositoryTaskCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequest": return [3 /*break*/, 2];
                    case "com.amazonaws.fsx#BadRequest": return [3 /*break*/, 2];
                    case "DataRepositoryTaskEnded": return [3 /*break*/, 4];
                    case "com.amazonaws.fsx#DataRepositoryTaskEnded": return [3 /*break*/, 4];
                    case "DataRepositoryTaskNotFound": return [3 /*break*/, 6];
                    case "com.amazonaws.fsx#DataRepositoryTaskNotFound": return [3 /*break*/, 6];
                    case "InternalServerError": return [3 /*break*/, 8];
                    case "com.amazonaws.fsx#InternalServerError": return [3 /*break*/, 8];
                    case "UnsupportedOperation": return [3 /*break*/, 10];
                    case "com.amazonaws.fsx#UnsupportedOperation": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1BadRequestResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DataRepositoryTaskEndedResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DataRepositoryTaskNotFoundResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CopyBackupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CopyBackupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CopyBackupResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CopyBackupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, parsedBody, message;
    var _p;
    return __generator(this, function (_q) {
        switch (_q.label) {
            case 0:
                _a = [__assign({}, output)];
                _p = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_p.body = _q.sent(), _p)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BackupNotFound": return [3 /*break*/, 2];
                    case "com.amazonaws.fsx#BackupNotFound": return [3 /*break*/, 2];
                    case "BadRequest": return [3 /*break*/, 4];
                    case "com.amazonaws.fsx#BadRequest": return [3 /*break*/, 4];
                    case "IncompatibleParameterError": return [3 /*break*/, 6];
                    case "com.amazonaws.fsx#IncompatibleParameterError": return [3 /*break*/, 6];
                    case "IncompatibleRegionForMultiAZ": return [3 /*break*/, 8];
                    case "com.amazonaws.fsx#IncompatibleRegionForMultiAZ": return [3 /*break*/, 8];
                    case "InternalServerError": return [3 /*break*/, 10];
                    case "com.amazonaws.fsx#InternalServerError": return [3 /*break*/, 10];
                    case "InvalidDestinationKmsKey": return [3 /*break*/, 12];
                    case "com.amazonaws.fsx#InvalidDestinationKmsKey": return [3 /*break*/, 12];
                    case "InvalidRegion": return [3 /*break*/, 14];
                    case "com.amazonaws.fsx#InvalidRegion": return [3 /*break*/, 14];
                    case "InvalidSourceKmsKey": return [3 /*break*/, 16];
                    case "com.amazonaws.fsx#InvalidSourceKmsKey": return [3 /*break*/, 16];
                    case "ServiceLimitExceeded": return [3 /*break*/, 18];
                    case "com.amazonaws.fsx#ServiceLimitExceeded": return [3 /*break*/, 18];
                    case "SourceBackupUnavailable": return [3 /*break*/, 20];
                    case "com.amazonaws.fsx#SourceBackupUnavailable": return [3 /*break*/, 20];
                    case "UnsupportedOperation": return [3 /*break*/, 22];
                    case "com.amazonaws.fsx#UnsupportedOperation": return [3 /*break*/, 22];
                }
                return [3 /*break*/, 24];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1BackupNotFoundResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1BadRequestResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1IncompatibleRegionForMultiAZResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidDestinationKmsKeyResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRegionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSourceKmsKeyResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1SourceBackupUnavailableResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 24:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _q.label = 25;
            case 25:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateBackupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateBackupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateBackupResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateBackupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BackupInProgress": return [3 /*break*/, 2];
                    case "com.amazonaws.fsx#BackupInProgress": return [3 /*break*/, 2];
                    case "BadRequest": return [3 /*break*/, 4];
                    case "com.amazonaws.fsx#BadRequest": return [3 /*break*/, 4];
                    case "FileSystemNotFound": return [3 /*break*/, 6];
                    case "com.amazonaws.fsx#FileSystemNotFound": return [3 /*break*/, 6];
                    case "IncompatibleParameterError": return [3 /*break*/, 8];
                    case "com.amazonaws.fsx#IncompatibleParameterError": return [3 /*break*/, 8];
                    case "InternalServerError": return [3 /*break*/, 10];
                    case "com.amazonaws.fsx#InternalServerError": return [3 /*break*/, 10];
                    case "ServiceLimitExceeded": return [3 /*break*/, 12];
                    case "com.amazonaws.fsx#ServiceLimitExceeded": return [3 /*break*/, 12];
                    case "UnsupportedOperation": return [3 /*break*/, 14];
                    case "com.amazonaws.fsx#UnsupportedOperation": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1BackupInProgressResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1BadRequestResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateDataRepositoryTaskCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateDataRepositoryTaskCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateDataRepositoryTaskResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateDataRepositoryTaskCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequest": return [3 /*break*/, 2];
                    case "com.amazonaws.fsx#BadRequest": return [3 /*break*/, 2];
                    case "DataRepositoryTaskExecuting": return [3 /*break*/, 4];
                    case "com.amazonaws.fsx#DataRepositoryTaskExecuting": return [3 /*break*/, 4];
                    case "FileSystemNotFound": return [3 /*break*/, 6];
                    case "com.amazonaws.fsx#FileSystemNotFound": return [3 /*break*/, 6];
                    case "IncompatibleParameterError": return [3 /*break*/, 8];
                    case "com.amazonaws.fsx#IncompatibleParameterError": return [3 /*break*/, 8];
                    case "InternalServerError": return [3 /*break*/, 10];
                    case "com.amazonaws.fsx#InternalServerError": return [3 /*break*/, 10];
                    case "ServiceLimitExceeded": return [3 /*break*/, 12];
                    case "com.amazonaws.fsx#ServiceLimitExceeded": return [3 /*break*/, 12];
                    case "UnsupportedOperation": return [3 /*break*/, 14];
                    case "com.amazonaws.fsx#UnsupportedOperation": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1BadRequestResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DataRepositoryTaskExecutingResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateFileSystemCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateFileSystemCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateFileSystemResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateFileSystemCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ActiveDirectoryError": return [3 /*break*/, 2];
                    case "com.amazonaws.fsx#ActiveDirectoryError": return [3 /*break*/, 2];
                    case "BadRequest": return [3 /*break*/, 4];
                    case "com.amazonaws.fsx#BadRequest": return [3 /*break*/, 4];
                    case "IncompatibleParameterError": return [3 /*break*/, 6];
                    case "com.amazonaws.fsx#IncompatibleParameterError": return [3 /*break*/, 6];
                    case "InternalServerError": return [3 /*break*/, 8];
                    case "com.amazonaws.fsx#InternalServerError": return [3 /*break*/, 8];
                    case "InvalidExportPath": return [3 /*break*/, 10];
                    case "com.amazonaws.fsx#InvalidExportPath": return [3 /*break*/, 10];
                    case "InvalidImportPath": return [3 /*break*/, 12];
                    case "com.amazonaws.fsx#InvalidImportPath": return [3 /*break*/, 12];
                    case "InvalidNetworkSettings": return [3 /*break*/, 14];
                    case "com.amazonaws.fsx#InvalidNetworkSettings": return [3 /*break*/, 14];
                    case "InvalidPerUnitStorageThroughput": return [3 /*break*/, 16];
                    case "com.amazonaws.fsx#InvalidPerUnitStorageThroughput": return [3 /*break*/, 16];
                    case "MissingFileSystemConfiguration": return [3 /*break*/, 18];
                    case "com.amazonaws.fsx#MissingFileSystemConfiguration": return [3 /*break*/, 18];
                    case "ServiceLimitExceeded": return [3 /*break*/, 20];
                    case "com.amazonaws.fsx#ServiceLimitExceeded": return [3 /*break*/, 20];
                }
                return [3 /*break*/, 22];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ActiveDirectoryErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1BadRequestResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidExportPathResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidImportPathResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNetworkSettingsResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidPerUnitStorageThroughputResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MissingFileSystemConfigurationResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateFileSystemFromBackupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateFileSystemFromBackupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateFileSystemFromBackupResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateFileSystemFromBackupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator(this, function (_o) {
        switch (_o.label) {
            case 0:
                _a = [__assign({}, output)];
                _m = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_m.body = _o.sent(), _m)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ActiveDirectoryError": return [3 /*break*/, 2];
                    case "com.amazonaws.fsx#ActiveDirectoryError": return [3 /*break*/, 2];
                    case "BackupNotFound": return [3 /*break*/, 4];
                    case "com.amazonaws.fsx#BackupNotFound": return [3 /*break*/, 4];
                    case "BadRequest": return [3 /*break*/, 6];
                    case "com.amazonaws.fsx#BadRequest": return [3 /*break*/, 6];
                    case "IncompatibleParameterError": return [3 /*break*/, 8];
                    case "com.amazonaws.fsx#IncompatibleParameterError": return [3 /*break*/, 8];
                    case "InternalServerError": return [3 /*break*/, 10];
                    case "com.amazonaws.fsx#InternalServerError": return [3 /*break*/, 10];
                    case "InvalidNetworkSettings": return [3 /*break*/, 12];
                    case "com.amazonaws.fsx#InvalidNetworkSettings": return [3 /*break*/, 12];
                    case "InvalidPerUnitStorageThroughput": return [3 /*break*/, 14];
                    case "com.amazonaws.fsx#InvalidPerUnitStorageThroughput": return [3 /*break*/, 14];
                    case "MissingFileSystemConfiguration": return [3 /*break*/, 16];
                    case "com.amazonaws.fsx#MissingFileSystemConfiguration": return [3 /*break*/, 16];
                    case "ServiceLimitExceeded": return [3 /*break*/, 18];
                    case "com.amazonaws.fsx#ServiceLimitExceeded": return [3 /*break*/, 18];
                }
                return [3 /*break*/, 20];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ActiveDirectoryErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1BackupNotFoundResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1BadRequestResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNetworkSettingsResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidPerUnitStorageThroughputResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MissingFileSystemConfigurationResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 20:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _o.label = 21;
            case 21:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteBackupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteBackupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteBackupResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteBackupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BackupBeingCopied": return [3 /*break*/, 2];
                    case "com.amazonaws.fsx#BackupBeingCopied": return [3 /*break*/, 2];
                    case "BackupInProgress": return [3 /*break*/, 4];
                    case "com.amazonaws.fsx#BackupInProgress": return [3 /*break*/, 4];
                    case "BackupNotFound": return [3 /*break*/, 6];
                    case "com.amazonaws.fsx#BackupNotFound": return [3 /*break*/, 6];
                    case "BackupRestoring": return [3 /*break*/, 8];
                    case "com.amazonaws.fsx#BackupRestoring": return [3 /*break*/, 8];
                    case "BadRequest": return [3 /*break*/, 10];
                    case "com.amazonaws.fsx#BadRequest": return [3 /*break*/, 10];
                    case "IncompatibleParameterError": return [3 /*break*/, 12];
                    case "com.amazonaws.fsx#IncompatibleParameterError": return [3 /*break*/, 12];
                    case "InternalServerError": return [3 /*break*/, 14];
                    case "com.amazonaws.fsx#InternalServerError": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1BackupBeingCopiedResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1BackupInProgressResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1BackupNotFoundResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1BackupRestoringResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1BadRequestResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteFileSystemCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteFileSystemCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteFileSystemResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteFileSystemCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequest": return [3 /*break*/, 2];
                    case "com.amazonaws.fsx#BadRequest": return [3 /*break*/, 2];
                    case "FileSystemNotFound": return [3 /*break*/, 4];
                    case "com.amazonaws.fsx#FileSystemNotFound": return [3 /*break*/, 4];
                    case "IncompatibleParameterError": return [3 /*break*/, 6];
                    case "com.amazonaws.fsx#IncompatibleParameterError": return [3 /*break*/, 6];
                    case "InternalServerError": return [3 /*break*/, 8];
                    case "com.amazonaws.fsx#InternalServerError": return [3 /*break*/, 8];
                    case "ServiceLimitExceeded": return [3 /*break*/, 10];
                    case "com.amazonaws.fsx#ServiceLimitExceeded": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1BadRequestResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeBackupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeBackupsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeBackupsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeBackupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BackupNotFound": return [3 /*break*/, 2];
                    case "com.amazonaws.fsx#BackupNotFound": return [3 /*break*/, 2];
                    case "BadRequest": return [3 /*break*/, 4];
                    case "com.amazonaws.fsx#BadRequest": return [3 /*break*/, 4];
                    case "FileSystemNotFound": return [3 /*break*/, 6];
                    case "com.amazonaws.fsx#FileSystemNotFound": return [3 /*break*/, 6];
                    case "InternalServerError": return [3 /*break*/, 8];
                    case "com.amazonaws.fsx#InternalServerError": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1BackupNotFoundResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1BadRequestResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeDataRepositoryTasksCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeDataRepositoryTasksCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeDataRepositoryTasksResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeDataRepositoryTasksCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequest": return [3 /*break*/, 2];
                    case "com.amazonaws.fsx#BadRequest": return [3 /*break*/, 2];
                    case "DataRepositoryTaskNotFound": return [3 /*break*/, 4];
                    case "com.amazonaws.fsx#DataRepositoryTaskNotFound": return [3 /*break*/, 4];
                    case "FileSystemNotFound": return [3 /*break*/, 6];
                    case "com.amazonaws.fsx#FileSystemNotFound": return [3 /*break*/, 6];
                    case "InternalServerError": return [3 /*break*/, 8];
                    case "com.amazonaws.fsx#InternalServerError": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1BadRequestResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DataRepositoryTaskNotFoundResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeFileSystemAliasesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeFileSystemAliasesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeFileSystemAliasesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeFileSystemAliasesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequest": return [3 /*break*/, 2];
                    case "com.amazonaws.fsx#BadRequest": return [3 /*break*/, 2];
                    case "FileSystemNotFound": return [3 /*break*/, 4];
                    case "com.amazonaws.fsx#FileSystemNotFound": return [3 /*break*/, 4];
                    case "InternalServerError": return [3 /*break*/, 6];
                    case "com.amazonaws.fsx#InternalServerError": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1BadRequestResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeFileSystemsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeFileSystemsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeFileSystemsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeFileSystemsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequest": return [3 /*break*/, 2];
                    case "com.amazonaws.fsx#BadRequest": return [3 /*break*/, 2];
                    case "FileSystemNotFound": return [3 /*break*/, 4];
                    case "com.amazonaws.fsx#FileSystemNotFound": return [3 /*break*/, 4];
                    case "InternalServerError": return [3 /*break*/, 6];
                    case "com.amazonaws.fsx#InternalServerError": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1BadRequestResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DisassociateFileSystemAliasesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DisassociateFileSystemAliasesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DisassociateFileSystemAliasesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DisassociateFileSystemAliasesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequest": return [3 /*break*/, 2];
                    case "com.amazonaws.fsx#BadRequest": return [3 /*break*/, 2];
                    case "FileSystemNotFound": return [3 /*break*/, 4];
                    case "com.amazonaws.fsx#FileSystemNotFound": return [3 /*break*/, 4];
                    case "InternalServerError": return [3 /*break*/, 6];
                    case "com.amazonaws.fsx#InternalServerError": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1BadRequestResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context)];
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
                    case "BadRequest": return [3 /*break*/, 2];
                    case "com.amazonaws.fsx#BadRequest": return [3 /*break*/, 2];
                    case "InternalServerError": return [3 /*break*/, 4];
                    case "com.amazonaws.fsx#InternalServerError": return [3 /*break*/, 4];
                    case "NotServiceResourceError": return [3 /*break*/, 6];
                    case "com.amazonaws.fsx#NotServiceResourceError": return [3 /*break*/, 6];
                    case "ResourceDoesNotSupportTagging": return [3 /*break*/, 8];
                    case "com.amazonaws.fsx#ResourceDoesNotSupportTagging": return [3 /*break*/, 8];
                    case "ResourceNotFound": return [3 /*break*/, 10];
                    case "com.amazonaws.fsx#ResourceNotFound": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1BadRequestResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotServiceResourceErrorResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceDoesNotSupportTaggingResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context)];
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
                    case "BadRequest": return [3 /*break*/, 2];
                    case "com.amazonaws.fsx#BadRequest": return [3 /*break*/, 2];
                    case "InternalServerError": return [3 /*break*/, 4];
                    case "com.amazonaws.fsx#InternalServerError": return [3 /*break*/, 4];
                    case "NotServiceResourceError": return [3 /*break*/, 6];
                    case "com.amazonaws.fsx#NotServiceResourceError": return [3 /*break*/, 6];
                    case "ResourceDoesNotSupportTagging": return [3 /*break*/, 8];
                    case "com.amazonaws.fsx#ResourceDoesNotSupportTagging": return [3 /*break*/, 8];
                    case "ResourceNotFound": return [3 /*break*/, 10];
                    case "com.amazonaws.fsx#ResourceNotFound": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1BadRequestResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotServiceResourceErrorResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceDoesNotSupportTaggingResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context)];
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
                    case "BadRequest": return [3 /*break*/, 2];
                    case "com.amazonaws.fsx#BadRequest": return [3 /*break*/, 2];
                    case "InternalServerError": return [3 /*break*/, 4];
                    case "com.amazonaws.fsx#InternalServerError": return [3 /*break*/, 4];
                    case "NotServiceResourceError": return [3 /*break*/, 6];
                    case "com.amazonaws.fsx#NotServiceResourceError": return [3 /*break*/, 6];
                    case "ResourceDoesNotSupportTagging": return [3 /*break*/, 8];
                    case "com.amazonaws.fsx#ResourceDoesNotSupportTagging": return [3 /*break*/, 8];
                    case "ResourceNotFound": return [3 /*break*/, 10];
                    case "com.amazonaws.fsx#ResourceNotFound": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1BadRequestResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotServiceResourceErrorResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceDoesNotSupportTaggingResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateFileSystemCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateFileSystemCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateFileSystemResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateFileSystemCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequest": return [3 /*break*/, 2];
                    case "com.amazonaws.fsx#BadRequest": return [3 /*break*/, 2];
                    case "FileSystemNotFound": return [3 /*break*/, 4];
                    case "com.amazonaws.fsx#FileSystemNotFound": return [3 /*break*/, 4];
                    case "IncompatibleParameterError": return [3 /*break*/, 6];
                    case "com.amazonaws.fsx#IncompatibleParameterError": return [3 /*break*/, 6];
                    case "InternalServerError": return [3 /*break*/, 8];
                    case "com.amazonaws.fsx#InternalServerError": return [3 /*break*/, 8];
                    case "MissingFileSystemConfiguration": return [3 /*break*/, 10];
                    case "com.amazonaws.fsx#MissingFileSystemConfiguration": return [3 /*break*/, 10];
                    case "ServiceLimitExceeded": return [3 /*break*/, 12];
                    case "com.amazonaws.fsx#ServiceLimitExceeded": return [3 /*break*/, 12];
                    case "UnsupportedOperation": return [3 /*break*/, 14];
                    case "com.amazonaws.fsx#UnsupportedOperation": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1BadRequestResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MissingFileSystemConfigurationResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationResponse(parsedOutput, context)];
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
var deserializeAws_json1_1ActiveDirectoryErrorResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ActiveDirectoryError(body, context);
        contents = __assign({ name: "ActiveDirectoryError", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1BackupBeingCopiedResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1BackupBeingCopied(body, context);
        contents = __assign({ name: "BackupBeingCopied", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1BackupInProgressResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1BackupInProgress(body, context);
        contents = __assign({ name: "BackupInProgress", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1BackupNotFoundResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1BackupNotFound(body, context);
        contents = __assign({ name: "BackupNotFound", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1BackupRestoringResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1BackupRestoring(body, context);
        contents = __assign({ name: "BackupRestoring", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1BadRequestResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1BadRequest(body, context);
        contents = __assign({ name: "BadRequest", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1DataRepositoryTaskEndedResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1DataRepositoryTaskEnded(body, context);
        contents = __assign({ name: "DataRepositoryTaskEnded", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1DataRepositoryTaskExecutingResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1DataRepositoryTaskExecuting(body, context);
        contents = __assign({ name: "DataRepositoryTaskExecuting", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1DataRepositoryTaskNotFoundResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1DataRepositoryTaskNotFound(body, context);
        contents = __assign({ name: "DataRepositoryTaskNotFound", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1FileSystemNotFoundResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1FileSystemNotFound(body, context);
        contents = __assign({ name: "FileSystemNotFound", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1IncompatibleParameterErrorResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1IncompatibleParameterError(body, context);
        contents = __assign({ name: "IncompatibleParameterError", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1IncompatibleRegionForMultiAZResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1IncompatibleRegionForMultiAZ(body, context);
        contents = __assign({ name: "IncompatibleRegionForMultiAZ", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_json1_1InvalidDestinationKmsKeyResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidDestinationKmsKey(body, context);
        contents = __assign({ name: "InvalidDestinationKmsKey", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidExportPathResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidExportPath(body, context);
        contents = __assign({ name: "InvalidExportPath", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidImportPathResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidImportPath(body, context);
        contents = __assign({ name: "InvalidImportPath", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidNetworkSettingsResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidNetworkSettings(body, context);
        contents = __assign({ name: "InvalidNetworkSettings", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidPerUnitStorageThroughputResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidPerUnitStorageThroughput(body, context);
        contents = __assign({ name: "InvalidPerUnitStorageThroughput", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidRegionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidRegion(body, context);
        contents = __assign({ name: "InvalidRegion", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidSourceKmsKeyResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidSourceKmsKey(body, context);
        contents = __assign({ name: "InvalidSourceKmsKey", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1MissingFileSystemConfigurationResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1MissingFileSystemConfiguration(body, context);
        contents = __assign({ name: "MissingFileSystemConfiguration", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1NotServiceResourceErrorResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1NotServiceResourceError(body, context);
        contents = __assign({ name: "NotServiceResourceError", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ResourceDoesNotSupportTaggingResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ResourceDoesNotSupportTagging(body, context);
        contents = __assign({ name: "ResourceDoesNotSupportTagging", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ResourceNotFoundResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ResourceNotFound(body, context);
        contents = __assign({ name: "ResourceNotFound", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ServiceLimitExceededResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ServiceLimitExceeded(body, context);
        contents = __assign({ name: "ServiceLimitExceeded", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1SourceBackupUnavailableResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1SourceBackupUnavailable(body, context);
        contents = __assign({ name: "SourceBackupUnavailable", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1UnsupportedOperationResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1UnsupportedOperation(body, context);
        contents = __assign({ name: "UnsupportedOperation", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_json1_1AlternateDNSNames = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1AssociateFileSystemAliasesRequest = function (input, context) {
    var _a;
    return __assign(__assign(__assign({}, (input.Aliases !== undefined &&
        input.Aliases !== null && { Aliases: serializeAws_json1_1AlternateDNSNames(input.Aliases, context) })), { ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken() }), (input.FileSystemId !== undefined && input.FileSystemId !== null && { FileSystemId: input.FileSystemId }));
};
var serializeAws_json1_1BackupIds = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1CancelDataRepositoryTaskRequest = function (input, context) {
    return __assign({}, (input.TaskId !== undefined && input.TaskId !== null && { TaskId: input.TaskId }));
};
var serializeAws_json1_1CompletionReport = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled })), (input.Format !== undefined && input.Format !== null && { Format: input.Format })), (input.Path !== undefined && input.Path !== null && { Path: input.Path })), (input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }));
};
var serializeAws_json1_1CopyBackupRequest = function (input, context) {
    var _a;
    return __assign(__assign(__assign(__assign(__assign({ ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken() }, (input.CopyTags !== undefined && input.CopyTags !== null && { CopyTags: input.CopyTags })), (input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId })), (input.SourceBackupId !== undefined &&
        input.SourceBackupId !== null && { SourceBackupId: input.SourceBackupId })), (input.SourceRegion !== undefined && input.SourceRegion !== null && { SourceRegion: input.SourceRegion })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }));
};
var serializeAws_json1_1CreateBackupRequest = function (input, context) {
    var _a;
    return __assign(__assign({ ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken() }, (input.FileSystemId !== undefined && input.FileSystemId !== null && { FileSystemId: input.FileSystemId })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }));
};
var serializeAws_json1_1CreateDataRepositoryTaskRequest = function (input, context) {
    var _a;
    return __assign(__assign(__assign(__assign(__assign({ ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken() }, (input.FileSystemId !== undefined && input.FileSystemId !== null && { FileSystemId: input.FileSystemId })), (input.Paths !== undefined &&
        input.Paths !== null && { Paths: serializeAws_json1_1DataRepositoryTaskPaths(input.Paths, context) })), (input.Report !== undefined &&
        input.Report !== null && { Report: serializeAws_json1_1CompletionReport(input.Report, context) })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) })), (input.Type !== undefined && input.Type !== null && { Type: input.Type }));
};
var serializeAws_json1_1CreateFileSystemFromBackupRequest = function (input, context) {
    var _a;
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.BackupId !== undefined && input.BackupId !== null && { BackupId: input.BackupId })), { ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken() }), (input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId })), (input.LustreConfiguration !== undefined &&
        input.LustreConfiguration !== null && {
        LustreConfiguration: serializeAws_json1_1CreateFileSystemLustreConfiguration(input.LustreConfiguration, context),
    })), (input.SecurityGroupIds !== undefined &&
        input.SecurityGroupIds !== null && {
        SecurityGroupIds: serializeAws_json1_1SecurityGroupIds(input.SecurityGroupIds, context),
    })), (input.StorageType !== undefined && input.StorageType !== null && { StorageType: input.StorageType })), (input.SubnetIds !== undefined &&
        input.SubnetIds !== null && { SubnetIds: serializeAws_json1_1SubnetIds(input.SubnetIds, context) })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) })), (input.WindowsConfiguration !== undefined &&
        input.WindowsConfiguration !== null && {
        WindowsConfiguration: serializeAws_json1_1CreateFileSystemWindowsConfiguration(input.WindowsConfiguration, context),
    }));
};
var serializeAws_json1_1CreateFileSystemLustreConfiguration = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AutoImportPolicy !== undefined &&
        input.AutoImportPolicy !== null && { AutoImportPolicy: input.AutoImportPolicy })), (input.AutomaticBackupRetentionDays !== undefined &&
        input.AutomaticBackupRetentionDays !== null && {
        AutomaticBackupRetentionDays: input.AutomaticBackupRetentionDays,
    })), (input.CopyTagsToBackups !== undefined &&
        input.CopyTagsToBackups !== null && { CopyTagsToBackups: input.CopyTagsToBackups })), (input.DailyAutomaticBackupStartTime !== undefined &&
        input.DailyAutomaticBackupStartTime !== null && {
        DailyAutomaticBackupStartTime: input.DailyAutomaticBackupStartTime,
    })), (input.DataCompressionType !== undefined &&
        input.DataCompressionType !== null && { DataCompressionType: input.DataCompressionType })), (input.DeploymentType !== undefined &&
        input.DeploymentType !== null && { DeploymentType: input.DeploymentType })), (input.DriveCacheType !== undefined &&
        input.DriveCacheType !== null && { DriveCacheType: input.DriveCacheType })), (input.ExportPath !== undefined && input.ExportPath !== null && { ExportPath: input.ExportPath })), (input.ImportPath !== undefined && input.ImportPath !== null && { ImportPath: input.ImportPath })), (input.ImportedFileChunkSize !== undefined &&
        input.ImportedFileChunkSize !== null && { ImportedFileChunkSize: input.ImportedFileChunkSize })), (input.PerUnitStorageThroughput !== undefined &&
        input.PerUnitStorageThroughput !== null && { PerUnitStorageThroughput: input.PerUnitStorageThroughput })), (input.WeeklyMaintenanceStartTime !== undefined &&
        input.WeeklyMaintenanceStartTime !== null && { WeeklyMaintenanceStartTime: input.WeeklyMaintenanceStartTime }));
};
var serializeAws_json1_1CreateFileSystemRequest = function (input, context) {
    var _a;
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({ ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken() }, (input.FileSystemType !== undefined &&
        input.FileSystemType !== null && { FileSystemType: input.FileSystemType })), (input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId })), (input.LustreConfiguration !== undefined &&
        input.LustreConfiguration !== null && {
        LustreConfiguration: serializeAws_json1_1CreateFileSystemLustreConfiguration(input.LustreConfiguration, context),
    })), (input.SecurityGroupIds !== undefined &&
        input.SecurityGroupIds !== null && {
        SecurityGroupIds: serializeAws_json1_1SecurityGroupIds(input.SecurityGroupIds, context),
    })), (input.StorageCapacity !== undefined &&
        input.StorageCapacity !== null && { StorageCapacity: input.StorageCapacity })), (input.StorageType !== undefined && input.StorageType !== null && { StorageType: input.StorageType })), (input.SubnetIds !== undefined &&
        input.SubnetIds !== null && { SubnetIds: serializeAws_json1_1SubnetIds(input.SubnetIds, context) })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) })), (input.WindowsConfiguration !== undefined &&
        input.WindowsConfiguration !== null && {
        WindowsConfiguration: serializeAws_json1_1CreateFileSystemWindowsConfiguration(input.WindowsConfiguration, context),
    }));
};
var serializeAws_json1_1CreateFileSystemWindowsConfiguration = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.ActiveDirectoryId !== undefined &&
        input.ActiveDirectoryId !== null && { ActiveDirectoryId: input.ActiveDirectoryId })), (input.Aliases !== undefined &&
        input.Aliases !== null && { Aliases: serializeAws_json1_1AlternateDNSNames(input.Aliases, context) })), (input.AutomaticBackupRetentionDays !== undefined &&
        input.AutomaticBackupRetentionDays !== null && {
        AutomaticBackupRetentionDays: input.AutomaticBackupRetentionDays,
    })), (input.CopyTagsToBackups !== undefined &&
        input.CopyTagsToBackups !== null && { CopyTagsToBackups: input.CopyTagsToBackups })), (input.DailyAutomaticBackupStartTime !== undefined &&
        input.DailyAutomaticBackupStartTime !== null && {
        DailyAutomaticBackupStartTime: input.DailyAutomaticBackupStartTime,
    })), (input.DeploymentType !== undefined &&
        input.DeploymentType !== null && { DeploymentType: input.DeploymentType })), (input.PreferredSubnetId !== undefined &&
        input.PreferredSubnetId !== null && { PreferredSubnetId: input.PreferredSubnetId })), (input.SelfManagedActiveDirectoryConfiguration !== undefined &&
        input.SelfManagedActiveDirectoryConfiguration !== null && {
        SelfManagedActiveDirectoryConfiguration: serializeAws_json1_1SelfManagedActiveDirectoryConfiguration(input.SelfManagedActiveDirectoryConfiguration, context),
    })), (input.ThroughputCapacity !== undefined &&
        input.ThroughputCapacity !== null && { ThroughputCapacity: input.ThroughputCapacity })), (input.WeeklyMaintenanceStartTime !== undefined &&
        input.WeeklyMaintenanceStartTime !== null && { WeeklyMaintenanceStartTime: input.WeeklyMaintenanceStartTime }));
};
var serializeAws_json1_1DataRepositoryTaskFilter = function (input, context) {
    return __assign(__assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Values !== undefined &&
        input.Values !== null && { Values: serializeAws_json1_1DataRepositoryTaskFilterValues(input.Values, context) }));
};
var serializeAws_json1_1DataRepositoryTaskFilters = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1DataRepositoryTaskFilter(entry, context);
    });
};
var serializeAws_json1_1DataRepositoryTaskFilterValues = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1DataRepositoryTaskPaths = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1DeleteBackupRequest = function (input, context) {
    var _a;
    return __assign(__assign({}, (input.BackupId !== undefined && input.BackupId !== null && { BackupId: input.BackupId })), { ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken() });
};
var serializeAws_json1_1DeleteFileSystemLustreConfiguration = function (input, context) {
    return __assign(__assign({}, (input.FinalBackupTags !== undefined &&
        input.FinalBackupTags !== null && { FinalBackupTags: serializeAws_json1_1Tags(input.FinalBackupTags, context) })), (input.SkipFinalBackup !== undefined &&
        input.SkipFinalBackup !== null && { SkipFinalBackup: input.SkipFinalBackup }));
};
var serializeAws_json1_1DeleteFileSystemRequest = function (input, context) {
    var _a;
    return __assign(__assign(__assign({ ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken() }, (input.FileSystemId !== undefined && input.FileSystemId !== null && { FileSystemId: input.FileSystemId })), (input.LustreConfiguration !== undefined &&
        input.LustreConfiguration !== null && {
        LustreConfiguration: serializeAws_json1_1DeleteFileSystemLustreConfiguration(input.LustreConfiguration, context),
    })), (input.WindowsConfiguration !== undefined &&
        input.WindowsConfiguration !== null && {
        WindowsConfiguration: serializeAws_json1_1DeleteFileSystemWindowsConfiguration(input.WindowsConfiguration, context),
    }));
};
var serializeAws_json1_1DeleteFileSystemWindowsConfiguration = function (input, context) {
    return __assign(__assign({}, (input.FinalBackupTags !== undefined &&
        input.FinalBackupTags !== null && { FinalBackupTags: serializeAws_json1_1Tags(input.FinalBackupTags, context) })), (input.SkipFinalBackup !== undefined &&
        input.SkipFinalBackup !== null && { SkipFinalBackup: input.SkipFinalBackup }));
};
var serializeAws_json1_1DescribeBackupsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.BackupIds !== undefined &&
        input.BackupIds !== null && { BackupIds: serializeAws_json1_1BackupIds(input.BackupIds, context) })), (input.Filters !== undefined &&
        input.Filters !== null && { Filters: serializeAws_json1_1Filters(input.Filters, context) })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1DescribeDataRepositoryTasksRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Filters !== undefined &&
        input.Filters !== null && { Filters: serializeAws_json1_1DataRepositoryTaskFilters(input.Filters, context) })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.TaskIds !== undefined &&
        input.TaskIds !== null && { TaskIds: serializeAws_json1_1TaskIds(input.TaskIds, context) }));
};
var serializeAws_json1_1DescribeFileSystemAliasesRequest = function (input, context) {
    var _a;
    return __assign(__assign(__assign({ ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken() }, (input.FileSystemId !== undefined && input.FileSystemId !== null && { FileSystemId: input.FileSystemId })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1DescribeFileSystemsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.FileSystemIds !== undefined &&
        input.FileSystemIds !== null && {
        FileSystemIds: serializeAws_json1_1FileSystemIds(input.FileSystemIds, context),
    })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1DisassociateFileSystemAliasesRequest = function (input, context) {
    var _a;
    return __assign(__assign(__assign({}, (input.Aliases !== undefined &&
        input.Aliases !== null && { Aliases: serializeAws_json1_1AlternateDNSNames(input.Aliases, context) })), { ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken() }), (input.FileSystemId !== undefined && input.FileSystemId !== null && { FileSystemId: input.FileSystemId }));
};
var serializeAws_json1_1DnsIps = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1FileSystemIds = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1Filter = function (input, context) {
    return __assign(__assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Values !== undefined &&
        input.Values !== null && { Values: serializeAws_json1_1FilterValues(input.Values, context) }));
};
var serializeAws_json1_1Filters = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Filter(entry, context);
    });
};
var serializeAws_json1_1FilterValues = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ListTagsForResourceRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }));
};
var serializeAws_json1_1SecurityGroupIds = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1SelfManagedActiveDirectoryConfiguration = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.DnsIps !== undefined &&
        input.DnsIps !== null && { DnsIps: serializeAws_json1_1DnsIps(input.DnsIps, context) })), (input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName })), (input.FileSystemAdministratorsGroup !== undefined &&
        input.FileSystemAdministratorsGroup !== null && {
        FileSystemAdministratorsGroup: input.FileSystemAdministratorsGroup,
    })), (input.OrganizationalUnitDistinguishedName !== undefined &&
        input.OrganizationalUnitDistinguishedName !== null && {
        OrganizationalUnitDistinguishedName: input.OrganizationalUnitDistinguishedName,
    })), (input.Password !== undefined && input.Password !== null && { Password: input.Password })), (input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }));
};
var serializeAws_json1_1SelfManagedActiveDirectoryConfigurationUpdates = function (input, context) {
    return __assign(__assign(__assign({}, (input.DnsIps !== undefined &&
        input.DnsIps !== null && { DnsIps: serializeAws_json1_1DnsIps(input.DnsIps, context) })), (input.Password !== undefined && input.Password !== null && { Password: input.Password })), (input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }));
};
var serializeAws_json1_1SubnetIds = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1Tag = function (input, context) {
    return __assign(__assign({}, (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_json1_1TagKeys = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1TagResourceRequest = function (input, context) {
    return __assign(__assign({}, (input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }));
};
var serializeAws_json1_1Tags = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
var serializeAws_json1_1TaskIds = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1UntagResourceRequest = function (input, context) {
    return __assign(__assign({}, (input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN })), (input.TagKeys !== undefined &&
        input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeys(input.TagKeys, context) }));
};
var serializeAws_json1_1UpdateFileSystemLustreConfiguration = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.AutoImportPolicy !== undefined &&
        input.AutoImportPolicy !== null && { AutoImportPolicy: input.AutoImportPolicy })), (input.AutomaticBackupRetentionDays !== undefined &&
        input.AutomaticBackupRetentionDays !== null && {
        AutomaticBackupRetentionDays: input.AutomaticBackupRetentionDays,
    })), (input.DailyAutomaticBackupStartTime !== undefined &&
        input.DailyAutomaticBackupStartTime !== null && {
        DailyAutomaticBackupStartTime: input.DailyAutomaticBackupStartTime,
    })), (input.DataCompressionType !== undefined &&
        input.DataCompressionType !== null && { DataCompressionType: input.DataCompressionType })), (input.WeeklyMaintenanceStartTime !== undefined &&
        input.WeeklyMaintenanceStartTime !== null && { WeeklyMaintenanceStartTime: input.WeeklyMaintenanceStartTime }));
};
var serializeAws_json1_1UpdateFileSystemRequest = function (input, context) {
    var _a;
    return __assign(__assign(__assign(__assign({ ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken() }, (input.FileSystemId !== undefined && input.FileSystemId !== null && { FileSystemId: input.FileSystemId })), (input.LustreConfiguration !== undefined &&
        input.LustreConfiguration !== null && {
        LustreConfiguration: serializeAws_json1_1UpdateFileSystemLustreConfiguration(input.LustreConfiguration, context),
    })), (input.StorageCapacity !== undefined &&
        input.StorageCapacity !== null && { StorageCapacity: input.StorageCapacity })), (input.WindowsConfiguration !== undefined &&
        input.WindowsConfiguration !== null && {
        WindowsConfiguration: serializeAws_json1_1UpdateFileSystemWindowsConfiguration(input.WindowsConfiguration, context),
    }));
};
var serializeAws_json1_1UpdateFileSystemWindowsConfiguration = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.AutomaticBackupRetentionDays !== undefined &&
        input.AutomaticBackupRetentionDays !== null && {
        AutomaticBackupRetentionDays: input.AutomaticBackupRetentionDays,
    })), (input.DailyAutomaticBackupStartTime !== undefined &&
        input.DailyAutomaticBackupStartTime !== null && {
        DailyAutomaticBackupStartTime: input.DailyAutomaticBackupStartTime,
    })), (input.SelfManagedActiveDirectoryConfiguration !== undefined &&
        input.SelfManagedActiveDirectoryConfiguration !== null && {
        SelfManagedActiveDirectoryConfiguration: serializeAws_json1_1SelfManagedActiveDirectoryConfigurationUpdates(input.SelfManagedActiveDirectoryConfiguration, context),
    })), (input.ThroughputCapacity !== undefined &&
        input.ThroughputCapacity !== null && { ThroughputCapacity: input.ThroughputCapacity })), (input.WeeklyMaintenanceStartTime !== undefined &&
        input.WeeklyMaintenanceStartTime !== null && { WeeklyMaintenanceStartTime: input.WeeklyMaintenanceStartTime }));
};
var deserializeAws_json1_1ActiveDirectoryBackupAttributes = function (output, context) {
    return {
        ActiveDirectoryId: output.ActiveDirectoryId !== undefined && output.ActiveDirectoryId !== null
            ? output.ActiveDirectoryId
            : undefined,
        DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
        ResourceARN: output.ResourceARN !== undefined && output.ResourceARN !== null ? output.ResourceARN : undefined,
    };
};
var deserializeAws_json1_1ActiveDirectoryError = function (output, context) {
    return {
        ActiveDirectoryId: output.ActiveDirectoryId !== undefined && output.ActiveDirectoryId !== null
            ? output.ActiveDirectoryId
            : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
var deserializeAws_json1_1AdministrativeAction = function (output, context) {
    return {
        AdministrativeActionType: output.AdministrativeActionType !== undefined && output.AdministrativeActionType !== null
            ? output.AdministrativeActionType
            : undefined,
        FailureDetails: output.FailureDetails !== undefined && output.FailureDetails !== null
            ? deserializeAws_json1_1AdministrativeActionFailureDetails(output.FailureDetails, context)
            : undefined,
        ProgressPercent: output.ProgressPercent !== undefined && output.ProgressPercent !== null ? output.ProgressPercent : undefined,
        RequestTime: output.RequestTime !== undefined && output.RequestTime !== null
            ? new Date(Math.round(output.RequestTime * 1000))
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        TargetFileSystemValues: output.TargetFileSystemValues !== undefined && output.TargetFileSystemValues !== null
            ? deserializeAws_json1_1FileSystem(output.TargetFileSystemValues, context)
            : undefined,
    };
};
var deserializeAws_json1_1AdministrativeActionFailureDetails = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1AdministrativeActions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AdministrativeAction(entry, context);
    });
};
var deserializeAws_json1_1Alias = function (output, context) {
    return {
        Lifecycle: output.Lifecycle !== undefined && output.Lifecycle !== null ? output.Lifecycle : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_json1_1Aliases = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Alias(entry, context);
    });
};
var deserializeAws_json1_1AssociateFileSystemAliasesResponse = function (output, context) {
    return {
        Aliases: output.Aliases !== undefined && output.Aliases !== null
            ? deserializeAws_json1_1Aliases(output.Aliases, context)
            : undefined,
    };
};
var deserializeAws_json1_1Backup = function (output, context) {
    return {
        BackupId: output.BackupId !== undefined && output.BackupId !== null ? output.BackupId : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        DirectoryInformation: output.DirectoryInformation !== undefined && output.DirectoryInformation !== null
            ? deserializeAws_json1_1ActiveDirectoryBackupAttributes(output.DirectoryInformation, context)
            : undefined,
        FailureDetails: output.FailureDetails !== undefined && output.FailureDetails !== null
            ? deserializeAws_json1_1BackupFailureDetails(output.FailureDetails, context)
            : undefined,
        FileSystem: output.FileSystem !== undefined && output.FileSystem !== null
            ? deserializeAws_json1_1FileSystem(output.FileSystem, context)
            : undefined,
        KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
        Lifecycle: output.Lifecycle !== undefined && output.Lifecycle !== null ? output.Lifecycle : undefined,
        OwnerId: output.OwnerId !== undefined && output.OwnerId !== null ? output.OwnerId : undefined,
        ProgressPercent: output.ProgressPercent !== undefined && output.ProgressPercent !== null ? output.ProgressPercent : undefined,
        ResourceARN: output.ResourceARN !== undefined && output.ResourceARN !== null ? output.ResourceARN : undefined,
        SourceBackupId: output.SourceBackupId !== undefined && output.SourceBackupId !== null ? output.SourceBackupId : undefined,
        SourceBackupRegion: output.SourceBackupRegion !== undefined && output.SourceBackupRegion !== null
            ? output.SourceBackupRegion
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
var deserializeAws_json1_1BackupBeingCopied = function (output, context) {
    return {
        BackupId: output.BackupId !== undefined && output.BackupId !== null ? output.BackupId : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1BackupFailureDetails = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1BackupInProgress = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1BackupNotFound = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1BackupRestoring = function (output, context) {
    return {
        FileSystemId: output.FileSystemId !== undefined && output.FileSystemId !== null ? output.FileSystemId : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1Backups = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Backup(entry, context);
    });
};
var deserializeAws_json1_1BadRequest = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1CancelDataRepositoryTaskResponse = function (output, context) {
    return {
        Lifecycle: output.Lifecycle !== undefined && output.Lifecycle !== null ? output.Lifecycle : undefined,
        TaskId: output.TaskId !== undefined && output.TaskId !== null ? output.TaskId : undefined,
    };
};
var deserializeAws_json1_1CompletionReport = function (output, context) {
    return {
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
        Format: output.Format !== undefined && output.Format !== null ? output.Format : undefined,
        Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
        Scope: output.Scope !== undefined && output.Scope !== null ? output.Scope : undefined,
    };
};
var deserializeAws_json1_1CopyBackupResponse = function (output, context) {
    return {
        Backup: output.Backup !== undefined && output.Backup !== null
            ? deserializeAws_json1_1Backup(output.Backup, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateBackupResponse = function (output, context) {
    return {
        Backup: output.Backup !== undefined && output.Backup !== null
            ? deserializeAws_json1_1Backup(output.Backup, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateDataRepositoryTaskResponse = function (output, context) {
    return {
        DataRepositoryTask: output.DataRepositoryTask !== undefined && output.DataRepositoryTask !== null
            ? deserializeAws_json1_1DataRepositoryTask(output.DataRepositoryTask, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateFileSystemFromBackupResponse = function (output, context) {
    return {
        FileSystem: output.FileSystem !== undefined && output.FileSystem !== null
            ? deserializeAws_json1_1FileSystem(output.FileSystem, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateFileSystemResponse = function (output, context) {
    return {
        FileSystem: output.FileSystem !== undefined && output.FileSystem !== null
            ? deserializeAws_json1_1FileSystem(output.FileSystem, context)
            : undefined,
    };
};
var deserializeAws_json1_1DataRepositoryConfiguration = function (output, context) {
    return {
        AutoImportPolicy: output.AutoImportPolicy !== undefined && output.AutoImportPolicy !== null ? output.AutoImportPolicy : undefined,
        ExportPath: output.ExportPath !== undefined && output.ExportPath !== null ? output.ExportPath : undefined,
        FailureDetails: output.FailureDetails !== undefined && output.FailureDetails !== null
            ? deserializeAws_json1_1DataRepositoryFailureDetails(output.FailureDetails, context)
            : undefined,
        ImportPath: output.ImportPath !== undefined && output.ImportPath !== null ? output.ImportPath : undefined,
        ImportedFileChunkSize: output.ImportedFileChunkSize !== undefined && output.ImportedFileChunkSize !== null
            ? output.ImportedFileChunkSize
            : undefined,
        Lifecycle: output.Lifecycle !== undefined && output.Lifecycle !== null ? output.Lifecycle : undefined,
    };
};
var deserializeAws_json1_1DataRepositoryFailureDetails = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1DataRepositoryTask = function (output, context) {
    return {
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
        FailureDetails: output.FailureDetails !== undefined && output.FailureDetails !== null
            ? deserializeAws_json1_1DataRepositoryTaskFailureDetails(output.FailureDetails, context)
            : undefined,
        FileSystemId: output.FileSystemId !== undefined && output.FileSystemId !== null ? output.FileSystemId : undefined,
        Lifecycle: output.Lifecycle !== undefined && output.Lifecycle !== null ? output.Lifecycle : undefined,
        Paths: output.Paths !== undefined && output.Paths !== null
            ? deserializeAws_json1_1DataRepositoryTaskPaths(output.Paths, context)
            : undefined,
        Report: output.Report !== undefined && output.Report !== null
            ? deserializeAws_json1_1CompletionReport(output.Report, context)
            : undefined,
        ResourceARN: output.ResourceARN !== undefined && output.ResourceARN !== null ? output.ResourceARN : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_json1_1DataRepositoryTaskStatus(output.Status, context)
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
        TaskId: output.TaskId !== undefined && output.TaskId !== null ? output.TaskId : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
var deserializeAws_json1_1DataRepositoryTaskEnded = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1DataRepositoryTaskExecuting = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1DataRepositoryTaskFailureDetails = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1DataRepositoryTaskNotFound = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1DataRepositoryTaskPaths = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1DataRepositoryTasks = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DataRepositoryTask(entry, context);
    });
};
var deserializeAws_json1_1DataRepositoryTaskStatus = function (output, context) {
    return {
        FailedCount: output.FailedCount !== undefined && output.FailedCount !== null ? output.FailedCount : undefined,
        LastUpdatedTime: output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
            ? new Date(Math.round(output.LastUpdatedTime * 1000))
            : undefined,
        SucceededCount: output.SucceededCount !== undefined && output.SucceededCount !== null ? output.SucceededCount : undefined,
        TotalCount: output.TotalCount !== undefined && output.TotalCount !== null ? output.TotalCount : undefined,
    };
};
var deserializeAws_json1_1DeleteBackupResponse = function (output, context) {
    return {
        BackupId: output.BackupId !== undefined && output.BackupId !== null ? output.BackupId : undefined,
        Lifecycle: output.Lifecycle !== undefined && output.Lifecycle !== null ? output.Lifecycle : undefined,
    };
};
var deserializeAws_json1_1DeleteFileSystemLustreResponse = function (output, context) {
    return {
        FinalBackupId: output.FinalBackupId !== undefined && output.FinalBackupId !== null ? output.FinalBackupId : undefined,
        FinalBackupTags: output.FinalBackupTags !== undefined && output.FinalBackupTags !== null
            ? deserializeAws_json1_1Tags(output.FinalBackupTags, context)
            : undefined,
    };
};
var deserializeAws_json1_1DeleteFileSystemResponse = function (output, context) {
    return {
        FileSystemId: output.FileSystemId !== undefined && output.FileSystemId !== null ? output.FileSystemId : undefined,
        Lifecycle: output.Lifecycle !== undefined && output.Lifecycle !== null ? output.Lifecycle : undefined,
        LustreResponse: output.LustreResponse !== undefined && output.LustreResponse !== null
            ? deserializeAws_json1_1DeleteFileSystemLustreResponse(output.LustreResponse, context)
            : undefined,
        WindowsResponse: output.WindowsResponse !== undefined && output.WindowsResponse !== null
            ? deserializeAws_json1_1DeleteFileSystemWindowsResponse(output.WindowsResponse, context)
            : undefined,
    };
};
var deserializeAws_json1_1DeleteFileSystemWindowsResponse = function (output, context) {
    return {
        FinalBackupId: output.FinalBackupId !== undefined && output.FinalBackupId !== null ? output.FinalBackupId : undefined,
        FinalBackupTags: output.FinalBackupTags !== undefined && output.FinalBackupTags !== null
            ? deserializeAws_json1_1Tags(output.FinalBackupTags, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeBackupsResponse = function (output, context) {
    return {
        Backups: output.Backups !== undefined && output.Backups !== null
            ? deserializeAws_json1_1Backups(output.Backups, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeDataRepositoryTasksResponse = function (output, context) {
    return {
        DataRepositoryTasks: output.DataRepositoryTasks !== undefined && output.DataRepositoryTasks !== null
            ? deserializeAws_json1_1DataRepositoryTasks(output.DataRepositoryTasks, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeFileSystemAliasesResponse = function (output, context) {
    return {
        Aliases: output.Aliases !== undefined && output.Aliases !== null
            ? deserializeAws_json1_1Aliases(output.Aliases, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeFileSystemsResponse = function (output, context) {
    return {
        FileSystems: output.FileSystems !== undefined && output.FileSystems !== null
            ? deserializeAws_json1_1FileSystems(output.FileSystems, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1DisassociateFileSystemAliasesResponse = function (output, context) {
    return {
        Aliases: output.Aliases !== undefined && output.Aliases !== null
            ? deserializeAws_json1_1Aliases(output.Aliases, context)
            : undefined,
    };
};
var deserializeAws_json1_1DnsIps = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1FileSystem = function (output, context) {
    return {
        AdministrativeActions: output.AdministrativeActions !== undefined && output.AdministrativeActions !== null
            ? deserializeAws_json1_1AdministrativeActions(output.AdministrativeActions, context)
            : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        DNSName: output.DNSName !== undefined && output.DNSName !== null ? output.DNSName : undefined,
        FailureDetails: output.FailureDetails !== undefined && output.FailureDetails !== null
            ? deserializeAws_json1_1FileSystemFailureDetails(output.FailureDetails, context)
            : undefined,
        FileSystemId: output.FileSystemId !== undefined && output.FileSystemId !== null ? output.FileSystemId : undefined,
        FileSystemType: output.FileSystemType !== undefined && output.FileSystemType !== null ? output.FileSystemType : undefined,
        KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
        Lifecycle: output.Lifecycle !== undefined && output.Lifecycle !== null ? output.Lifecycle : undefined,
        LustreConfiguration: output.LustreConfiguration !== undefined && output.LustreConfiguration !== null
            ? deserializeAws_json1_1LustreFileSystemConfiguration(output.LustreConfiguration, context)
            : undefined,
        NetworkInterfaceIds: output.NetworkInterfaceIds !== undefined && output.NetworkInterfaceIds !== null
            ? deserializeAws_json1_1NetworkInterfaceIds(output.NetworkInterfaceIds, context)
            : undefined,
        OwnerId: output.OwnerId !== undefined && output.OwnerId !== null ? output.OwnerId : undefined,
        ResourceARN: output.ResourceARN !== undefined && output.ResourceARN !== null ? output.ResourceARN : undefined,
        StorageCapacity: output.StorageCapacity !== undefined && output.StorageCapacity !== null ? output.StorageCapacity : undefined,
        StorageType: output.StorageType !== undefined && output.StorageType !== null ? output.StorageType : undefined,
        SubnetIds: output.SubnetIds !== undefined && output.SubnetIds !== null
            ? deserializeAws_json1_1SubnetIds(output.SubnetIds, context)
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
        VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
        WindowsConfiguration: output.WindowsConfiguration !== undefined && output.WindowsConfiguration !== null
            ? deserializeAws_json1_1WindowsFileSystemConfiguration(output.WindowsConfiguration, context)
            : undefined,
    };
};
var deserializeAws_json1_1FileSystemFailureDetails = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1FileSystemMaintenanceOperations = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1FileSystemNotFound = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1FileSystems = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FileSystem(entry, context);
    });
};
var deserializeAws_json1_1IncompatibleParameterError = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Parameter: output.Parameter !== undefined && output.Parameter !== null ? output.Parameter : undefined,
    };
};
var deserializeAws_json1_1IncompatibleRegionForMultiAZ = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InternalServerError = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidDestinationKmsKey = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidExportPath = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidImportPath = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidNetworkSettings = function (output, context) {
    return {
        InvalidSecurityGroupId: output.InvalidSecurityGroupId !== undefined && output.InvalidSecurityGroupId !== null
            ? output.InvalidSecurityGroupId
            : undefined,
        InvalidSubnetId: output.InvalidSubnetId !== undefined && output.InvalidSubnetId !== null ? output.InvalidSubnetId : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidPerUnitStorageThroughput = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidRegion = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidSourceKmsKey = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1ListTagsForResourceResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    };
};
var deserializeAws_json1_1LustreFileSystemConfiguration = function (output, context) {
    return {
        AutomaticBackupRetentionDays: output.AutomaticBackupRetentionDays !== undefined && output.AutomaticBackupRetentionDays !== null
            ? output.AutomaticBackupRetentionDays
            : undefined,
        CopyTagsToBackups: output.CopyTagsToBackups !== undefined && output.CopyTagsToBackups !== null
            ? output.CopyTagsToBackups
            : undefined,
        DailyAutomaticBackupStartTime: output.DailyAutomaticBackupStartTime !== undefined && output.DailyAutomaticBackupStartTime !== null
            ? output.DailyAutomaticBackupStartTime
            : undefined,
        DataCompressionType: output.DataCompressionType !== undefined && output.DataCompressionType !== null
            ? output.DataCompressionType
            : undefined,
        DataRepositoryConfiguration: output.DataRepositoryConfiguration !== undefined && output.DataRepositoryConfiguration !== null
            ? deserializeAws_json1_1DataRepositoryConfiguration(output.DataRepositoryConfiguration, context)
            : undefined,
        DeploymentType: output.DeploymentType !== undefined && output.DeploymentType !== null ? output.DeploymentType : undefined,
        DriveCacheType: output.DriveCacheType !== undefined && output.DriveCacheType !== null ? output.DriveCacheType : undefined,
        MountName: output.MountName !== undefined && output.MountName !== null ? output.MountName : undefined,
        PerUnitStorageThroughput: output.PerUnitStorageThroughput !== undefined && output.PerUnitStorageThroughput !== null
            ? output.PerUnitStorageThroughput
            : undefined,
        WeeklyMaintenanceStartTime: output.WeeklyMaintenanceStartTime !== undefined && output.WeeklyMaintenanceStartTime !== null
            ? output.WeeklyMaintenanceStartTime
            : undefined,
    };
};
var deserializeAws_json1_1MissingFileSystemConfiguration = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1NetworkInterfaceIds = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1NotServiceResourceError = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        ResourceARN: output.ResourceARN !== undefined && output.ResourceARN !== null ? output.ResourceARN : undefined,
    };
};
var deserializeAws_json1_1ResourceDoesNotSupportTagging = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        ResourceARN: output.ResourceARN !== undefined && output.ResourceARN !== null ? output.ResourceARN : undefined,
    };
};
var deserializeAws_json1_1ResourceNotFound = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        ResourceARN: output.ResourceARN !== undefined && output.ResourceARN !== null ? output.ResourceARN : undefined,
    };
};
var deserializeAws_json1_1SelfManagedActiveDirectoryAttributes = function (output, context) {
    return {
        DnsIps: output.DnsIps !== undefined && output.DnsIps !== null
            ? deserializeAws_json1_1DnsIps(output.DnsIps, context)
            : undefined,
        DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
        FileSystemAdministratorsGroup: output.FileSystemAdministratorsGroup !== undefined && output.FileSystemAdministratorsGroup !== null
            ? output.FileSystemAdministratorsGroup
            : undefined,
        OrganizationalUnitDistinguishedName: output.OrganizationalUnitDistinguishedName !== undefined && output.OrganizationalUnitDistinguishedName !== null
            ? output.OrganizationalUnitDistinguishedName
            : undefined,
        UserName: output.UserName !== undefined && output.UserName !== null ? output.UserName : undefined,
    };
};
var deserializeAws_json1_1ServiceLimitExceeded = function (output, context) {
    return {
        Limit: output.Limit !== undefined && output.Limit !== null ? output.Limit : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1SourceBackupUnavailable = function (output, context) {
    return {
        BackupId: output.BackupId !== undefined && output.BackupId !== null ? output.BackupId : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1SubnetIds = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1Tag = function (output, context) {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_json1_1TagResourceResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1Tags = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
};
var deserializeAws_json1_1UnsupportedOperation = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1UntagResourceResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1UpdateFileSystemResponse = function (output, context) {
    return {
        FileSystem: output.FileSystem !== undefined && output.FileSystem !== null
            ? deserializeAws_json1_1FileSystem(output.FileSystem, context)
            : undefined,
    };
};
var deserializeAws_json1_1WindowsFileSystemConfiguration = function (output, context) {
    return {
        ActiveDirectoryId: output.ActiveDirectoryId !== undefined && output.ActiveDirectoryId !== null
            ? output.ActiveDirectoryId
            : undefined,
        Aliases: output.Aliases !== undefined && output.Aliases !== null
            ? deserializeAws_json1_1Aliases(output.Aliases, context)
            : undefined,
        AutomaticBackupRetentionDays: output.AutomaticBackupRetentionDays !== undefined && output.AutomaticBackupRetentionDays !== null
            ? output.AutomaticBackupRetentionDays
            : undefined,
        CopyTagsToBackups: output.CopyTagsToBackups !== undefined && output.CopyTagsToBackups !== null
            ? output.CopyTagsToBackups
            : undefined,
        DailyAutomaticBackupStartTime: output.DailyAutomaticBackupStartTime !== undefined && output.DailyAutomaticBackupStartTime !== null
            ? output.DailyAutomaticBackupStartTime
            : undefined,
        DeploymentType: output.DeploymentType !== undefined && output.DeploymentType !== null ? output.DeploymentType : undefined,
        MaintenanceOperationsInProgress: output.MaintenanceOperationsInProgress !== undefined && output.MaintenanceOperationsInProgress !== null
            ? deserializeAws_json1_1FileSystemMaintenanceOperations(output.MaintenanceOperationsInProgress, context)
            : undefined,
        PreferredFileServerIp: output.PreferredFileServerIp !== undefined && output.PreferredFileServerIp !== null
            ? output.PreferredFileServerIp
            : undefined,
        PreferredSubnetId: output.PreferredSubnetId !== undefined && output.PreferredSubnetId !== null
            ? output.PreferredSubnetId
            : undefined,
        RemoteAdministrationEndpoint: output.RemoteAdministrationEndpoint !== undefined && output.RemoteAdministrationEndpoint !== null
            ? output.RemoteAdministrationEndpoint
            : undefined,
        SelfManagedActiveDirectoryConfiguration: output.SelfManagedActiveDirectoryConfiguration !== undefined &&
            output.SelfManagedActiveDirectoryConfiguration !== null
            ? deserializeAws_json1_1SelfManagedActiveDirectoryAttributes(output.SelfManagedActiveDirectoryConfiguration, context)
            : undefined,
        ThroughputCapacity: output.ThroughputCapacity !== undefined && output.ThroughputCapacity !== null
            ? output.ThroughputCapacity
            : undefined,
        WeeklyMaintenanceStartTime: output.WeeklyMaintenanceStartTime !== undefined && output.WeeklyMaintenanceStartTime !== null
            ? output.WeeklyMaintenanceStartTime
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