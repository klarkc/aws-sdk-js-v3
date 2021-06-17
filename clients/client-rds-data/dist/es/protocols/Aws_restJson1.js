import { __assign, __awaiter, __generator } from "tslib";
import { ArrayValue, Field, } from "../models/models_0";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_restJson1BatchExecuteStatementCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/BatchExecute";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.database !== undefined && input.database !== null && { database: input.database })), (input.parameterSets !== undefined &&
                    input.parameterSets !== null && {
                    parameterSets: serializeAws_restJson1SqlParameterSets(input.parameterSets, context),
                })), (input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn })), (input.schema !== undefined && input.schema !== null && { schema: input.schema })), (input.secretArn !== undefined && input.secretArn !== null && { secretArn: input.secretArn })), (input.sql !== undefined && input.sql !== null && { sql: input.sql })), (input.transactionId !== undefined && input.transactionId !== null && { transactionId: input.transactionId })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1BeginTransactionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/BeginTransaction";
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.database !== undefined && input.database !== null && { database: input.database })), (input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn })), (input.schema !== undefined && input.schema !== null && { schema: input.schema })), (input.secretArn !== undefined && input.secretArn !== null && { secretArn: input.secretArn })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1CommitTransactionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/CommitTransaction";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn })), (input.secretArn !== undefined && input.secretArn !== null && { secretArn: input.secretArn })), (input.transactionId !== undefined && input.transactionId !== null && { transactionId: input.transactionId })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ExecuteSqlCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/ExecuteSql";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign({}, (input.awsSecretStoreArn !== undefined &&
                    input.awsSecretStoreArn !== null && { awsSecretStoreArn: input.awsSecretStoreArn })), (input.database !== undefined && input.database !== null && { database: input.database })), (input.dbClusterOrInstanceArn !== undefined &&
                    input.dbClusterOrInstanceArn !== null && { dbClusterOrInstanceArn: input.dbClusterOrInstanceArn })), (input.schema !== undefined && input.schema !== null && { schema: input.schema })), (input.sqlStatements !== undefined && input.sqlStatements !== null && { sqlStatements: input.sqlStatements })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ExecuteStatementCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/Execute";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.continueAfterTimeout !== undefined &&
                    input.continueAfterTimeout !== null && { continueAfterTimeout: input.continueAfterTimeout })), (input.database !== undefined && input.database !== null && { database: input.database })), (input.includeResultMetadata !== undefined &&
                    input.includeResultMetadata !== null && { includeResultMetadata: input.includeResultMetadata })), (input.parameters !== undefined &&
                    input.parameters !== null && { parameters: serializeAws_restJson1SqlParametersList(input.parameters, context) })), (input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn })), (input.resultSetOptions !== undefined &&
                    input.resultSetOptions !== null && {
                    resultSetOptions: serializeAws_restJson1ResultSetOptions(input.resultSetOptions, context),
                })), (input.schema !== undefined && input.schema !== null && { schema: input.schema })), (input.secretArn !== undefined && input.secretArn !== null && { secretArn: input.secretArn })), (input.sql !== undefined && input.sql !== null && { sql: input.sql })), (input.transactionId !== undefined && input.transactionId !== null && { transactionId: input.transactionId })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1RollbackTransactionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/RollbackTransaction";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn })), (input.secretArn !== undefined && input.secretArn !== null && { secretArn: input.secretArn })), (input.transactionId !== undefined && input.transactionId !== null && { transactionId: input.transactionId })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var deserializeAws_restJson1BatchExecuteStatementCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1BatchExecuteStatementCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    updateResults: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.updateResults !== undefined && data.updateResults !== null) {
                    contents.updateResults = deserializeAws_restJson1UpdateResults(data.updateResults, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1BatchExecuteStatementCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.rdsdata#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.rdsdata#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.rdsdata#InternalServerErrorException": return [3 /*break*/, 6];
                    case "ServiceUnavailableError": return [3 /*break*/, 8];
                    case "com.amazonaws.rdsdata#ServiceUnavailableError": return [3 /*break*/, 8];
                    case "StatementTimeoutException": return [3 /*break*/, 10];
                    case "com.amazonaws.rdsdata#StatementTimeoutException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableErrorResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1StatementTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1BeginTransactionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1BeginTransactionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    transactionId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.transactionId !== undefined && data.transactionId !== null) {
                    contents.transactionId = data.transactionId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1BeginTransactionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.rdsdata#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.rdsdata#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.rdsdata#InternalServerErrorException": return [3 /*break*/, 6];
                    case "ServiceUnavailableError": return [3 /*break*/, 8];
                    case "com.amazonaws.rdsdata#ServiceUnavailableError": return [3 /*break*/, 8];
                    case "StatementTimeoutException": return [3 /*break*/, 10];
                    case "com.amazonaws.rdsdata#StatementTimeoutException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableErrorResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1StatementTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CommitTransactionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CommitTransactionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    transactionStatus: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.transactionStatus !== undefined && data.transactionStatus !== null) {
                    contents.transactionStatus = data.transactionStatus;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CommitTransactionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.rdsdata#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.rdsdata#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.rdsdata#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.rdsdata#NotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableError": return [3 /*break*/, 10];
                    case "com.amazonaws.rdsdata#ServiceUnavailableError": return [3 /*break*/, 10];
                    case "StatementTimeoutException": return [3 /*break*/, 12];
                    case "com.amazonaws.rdsdata#StatementTimeoutException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableErrorResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1StatementTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ExecuteSqlCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ExecuteSqlCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    sqlStatementResults: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.sqlStatementResults !== undefined && data.sqlStatementResults !== null) {
                    contents.sqlStatementResults = deserializeAws_restJson1SqlStatementResults(data.sqlStatementResults, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ExecuteSqlCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.rdsdata#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.rdsdata#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.rdsdata#InternalServerErrorException": return [3 /*break*/, 6];
                    case "ServiceUnavailableError": return [3 /*break*/, 8];
                    case "com.amazonaws.rdsdata#ServiceUnavailableError": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableErrorResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ExecuteStatementCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ExecuteStatementCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    columnMetadata: undefined,
                    generatedFields: undefined,
                    numberOfRecordsUpdated: undefined,
                    records: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.columnMetadata !== undefined && data.columnMetadata !== null) {
                    contents.columnMetadata = deserializeAws_restJson1Metadata(data.columnMetadata, context);
                }
                if (data.generatedFields !== undefined && data.generatedFields !== null) {
                    contents.generatedFields = deserializeAws_restJson1FieldList(data.generatedFields, context);
                }
                if (data.numberOfRecordsUpdated !== undefined && data.numberOfRecordsUpdated !== null) {
                    contents.numberOfRecordsUpdated = data.numberOfRecordsUpdated;
                }
                if (data.records !== undefined && data.records !== null) {
                    contents.records = deserializeAws_restJson1SqlRecords(data.records, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ExecuteStatementCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.rdsdata#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.rdsdata#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.rdsdata#InternalServerErrorException": return [3 /*break*/, 6];
                    case "ServiceUnavailableError": return [3 /*break*/, 8];
                    case "com.amazonaws.rdsdata#ServiceUnavailableError": return [3 /*break*/, 8];
                    case "StatementTimeoutException": return [3 /*break*/, 10];
                    case "com.amazonaws.rdsdata#StatementTimeoutException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableErrorResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1StatementTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1RollbackTransactionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1RollbackTransactionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    transactionStatus: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.transactionStatus !== undefined && data.transactionStatus !== null) {
                    contents.transactionStatus = data.transactionStatus;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1RollbackTransactionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.rdsdata#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.rdsdata#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.rdsdata#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.rdsdata#NotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableError": return [3 /*break*/, 10];
                    case "com.amazonaws.rdsdata#ServiceUnavailableError": return [3 /*break*/, 10];
                    case "StatementTimeoutException": return [3 /*break*/, 12];
                    case "com.amazonaws.rdsdata#StatementTimeoutException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableErrorResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1StatementTimeoutExceptionResponse(parsedOutput, context)];
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
var deserializeAws_restJson1BadRequestExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "BadRequestException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1ForbiddenExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ForbiddenException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1InternalServerErrorExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InternalServerErrorException",
            $fault: "server",
            $metadata: deserializeMetadata(parsedOutput),
        };
        data = parsedOutput.body;
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1NotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "NotFoundException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1ServiceUnavailableErrorResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ServiceUnavailableError",
            $fault: "server",
            $metadata: deserializeMetadata(parsedOutput),
        };
        data = parsedOutput.body;
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1StatementTimeoutExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "StatementTimeoutException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            dbConnectionId: undefined,
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.dbConnectionId !== undefined && data.dbConnectionId !== null) {
            contents.dbConnectionId = data.dbConnectionId;
        }
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_restJson1ArrayOfArray = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1ArrayValue(entry, context);
    });
};
var serializeAws_restJson1ArrayValue = function (input, context) {
    return ArrayValue.visit(input, {
        arrayValues: function (value) { return ({ arrayValues: serializeAws_restJson1ArrayOfArray(value, context) }); },
        booleanValues: function (value) { return ({ booleanValues: serializeAws_restJson1BooleanArray(value, context) }); },
        doubleValues: function (value) { return ({ doubleValues: serializeAws_restJson1DoubleArray(value, context) }); },
        longValues: function (value) { return ({ longValues: serializeAws_restJson1LongArray(value, context) }); },
        stringValues: function (value) { return ({ stringValues: serializeAws_restJson1StringArray(value, context) }); },
        _: function (name, value) { return ({ name: value }); },
    });
};
var serializeAws_restJson1BooleanArray = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1DoubleArray = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1Field = function (input, context) {
    return Field.visit(input, {
        arrayValue: function (value) { return ({ arrayValue: serializeAws_restJson1ArrayValue(value, context) }); },
        blobValue: function (value) { return ({ blobValue: context.base64Encoder(value) }); },
        booleanValue: function (value) { return ({ booleanValue: value }); },
        doubleValue: function (value) { return ({ doubleValue: value }); },
        isNull: function (value) { return ({ isNull: value }); },
        longValue: function (value) { return ({ longValue: value }); },
        stringValue: function (value) { return ({ stringValue: value }); },
        _: function (name, value) { return ({ name: value }); },
    });
};
var serializeAws_restJson1LongArray = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1ResultSetOptions = function (input, context) {
    return __assign({}, (input.decimalReturnType !== undefined &&
        input.decimalReturnType !== null && { decimalReturnType: input.decimalReturnType }));
};
var serializeAws_restJson1SqlParameter = function (input, context) {
    return __assign(__assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.typeHint !== undefined && input.typeHint !== null && { typeHint: input.typeHint })), (input.value !== undefined &&
        input.value !== null && { value: serializeAws_restJson1Field(input.value, context) }));
};
var serializeAws_restJson1SqlParameterSets = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SqlParametersList(entry, context);
    });
};
var serializeAws_restJson1SqlParametersList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SqlParameter(entry, context);
    });
};
var serializeAws_restJson1StringArray = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1ArrayOfArray = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ArrayValue(entry, context);
    });
};
var deserializeAws_restJson1ArrayValue = function (output, context) {
    if (output.arrayValues !== undefined && output.arrayValues !== null) {
        return {
            arrayValues: deserializeAws_restJson1ArrayOfArray(output.arrayValues, context),
        };
    }
    if (output.booleanValues !== undefined && output.booleanValues !== null) {
        return {
            booleanValues: deserializeAws_restJson1BooleanArray(output.booleanValues, context),
        };
    }
    if (output.doubleValues !== undefined && output.doubleValues !== null) {
        return {
            doubleValues: deserializeAws_restJson1DoubleArray(output.doubleValues, context),
        };
    }
    if (output.longValues !== undefined && output.longValues !== null) {
        return {
            longValues: deserializeAws_restJson1LongArray(output.longValues, context),
        };
    }
    if (output.stringValues !== undefined && output.stringValues !== null) {
        return {
            stringValues: deserializeAws_restJson1StringArray(output.stringValues, context),
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
var deserializeAws_restJson1ArrayValueList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Value(entry, context);
    });
};
var deserializeAws_restJson1BooleanArray = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1ColumnMetadata = function (output, context) {
    return {
        arrayBaseColumnType: output.arrayBaseColumnType !== undefined && output.arrayBaseColumnType !== null
            ? output.arrayBaseColumnType
            : undefined,
        isAutoIncrement: output.isAutoIncrement !== undefined && output.isAutoIncrement !== null ? output.isAutoIncrement : undefined,
        isCaseSensitive: output.isCaseSensitive !== undefined && output.isCaseSensitive !== null ? output.isCaseSensitive : undefined,
        isCurrency: output.isCurrency !== undefined && output.isCurrency !== null ? output.isCurrency : undefined,
        isSigned: output.isSigned !== undefined && output.isSigned !== null ? output.isSigned : undefined,
        label: output.label !== undefined && output.label !== null ? output.label : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        nullable: output.nullable !== undefined && output.nullable !== null ? output.nullable : undefined,
        precision: output.precision !== undefined && output.precision !== null ? output.precision : undefined,
        scale: output.scale !== undefined && output.scale !== null ? output.scale : undefined,
        schemaName: output.schemaName !== undefined && output.schemaName !== null ? output.schemaName : undefined,
        tableName: output.tableName !== undefined && output.tableName !== null ? output.tableName : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
        typeName: output.typeName !== undefined && output.typeName !== null ? output.typeName : undefined,
    };
};
var deserializeAws_restJson1DoubleArray = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1Field = function (output, context) {
    if (output.arrayValue !== undefined && output.arrayValue !== null) {
        return {
            arrayValue: deserializeAws_restJson1ArrayValue(output.arrayValue, context),
        };
    }
    if (output.blobValue !== undefined && output.blobValue !== null) {
        return {
            blobValue: context.base64Decoder(output.blobValue),
        };
    }
    if (output.booleanValue !== undefined && output.booleanValue !== null) {
        return {
            booleanValue: output.booleanValue,
        };
    }
    if (output.doubleValue !== undefined && output.doubleValue !== null) {
        return {
            doubleValue: output.doubleValue,
        };
    }
    if (output.isNull !== undefined && output.isNull !== null) {
        return {
            isNull: output.isNull,
        };
    }
    if (output.longValue !== undefined && output.longValue !== null) {
        return {
            longValue: output.longValue,
        };
    }
    if (output.stringValue !== undefined && output.stringValue !== null) {
        return {
            stringValue: output.stringValue,
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
var deserializeAws_restJson1FieldList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Field(entry, context);
    });
};
var deserializeAws_restJson1LongArray = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1Metadata = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ColumnMetadata(entry, context);
    });
};
var deserializeAws_restJson1_Record = function (output, context) {
    return {
        values: output.values !== undefined && output.values !== null
            ? deserializeAws_restJson1Row(output.values, context)
            : undefined,
    };
};
var deserializeAws_restJson1Records = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1_Record(entry, context);
    });
};
var deserializeAws_restJson1ResultFrame = function (output, context) {
    return {
        records: output.records !== undefined && output.records !== null
            ? deserializeAws_restJson1Records(output.records, context)
            : undefined,
        resultSetMetadata: output.resultSetMetadata !== undefined && output.resultSetMetadata !== null
            ? deserializeAws_restJson1ResultSetMetadata(output.resultSetMetadata, context)
            : undefined,
    };
};
var deserializeAws_restJson1ResultSetMetadata = function (output, context) {
    return {
        columnCount: output.columnCount !== undefined && output.columnCount !== null ? output.columnCount : undefined,
        columnMetadata: output.columnMetadata !== undefined && output.columnMetadata !== null
            ? deserializeAws_restJson1Metadata(output.columnMetadata, context)
            : undefined,
    };
};
var deserializeAws_restJson1Row = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Value(entry, context);
    });
};
var deserializeAws_restJson1SqlRecords = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1FieldList(entry, context);
    });
};
var deserializeAws_restJson1SqlStatementResult = function (output, context) {
    return {
        numberOfRecordsUpdated: output.numberOfRecordsUpdated !== undefined && output.numberOfRecordsUpdated !== null
            ? output.numberOfRecordsUpdated
            : undefined,
        resultFrame: output.resultFrame !== undefined && output.resultFrame !== null
            ? deserializeAws_restJson1ResultFrame(output.resultFrame, context)
            : undefined,
    };
};
var deserializeAws_restJson1SqlStatementResults = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SqlStatementResult(entry, context);
    });
};
var deserializeAws_restJson1StringArray = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1StructValue = function (output, context) {
    return {
        attributes: output.attributes !== undefined && output.attributes !== null
            ? deserializeAws_restJson1ArrayValueList(output.attributes, context)
            : undefined,
    };
};
var deserializeAws_restJson1UpdateResult = function (output, context) {
    return {
        generatedFields: output.generatedFields !== undefined && output.generatedFields !== null
            ? deserializeAws_restJson1FieldList(output.generatedFields, context)
            : undefined,
    };
};
var deserializeAws_restJson1UpdateResults = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UpdateResult(entry, context);
    });
};
var deserializeAws_restJson1Value = function (output, context) {
    if (output.arrayValues !== undefined && output.arrayValues !== null) {
        return {
            arrayValues: deserializeAws_restJson1ArrayValueList(output.arrayValues, context),
        };
    }
    if (output.bigIntValue !== undefined && output.bigIntValue !== null) {
        return {
            bigIntValue: output.bigIntValue,
        };
    }
    if (output.bitValue !== undefined && output.bitValue !== null) {
        return {
            bitValue: output.bitValue,
        };
    }
    if (output.blobValue !== undefined && output.blobValue !== null) {
        return {
            blobValue: context.base64Decoder(output.blobValue),
        };
    }
    if (output.doubleValue !== undefined && output.doubleValue !== null) {
        return {
            doubleValue: output.doubleValue,
        };
    }
    if (output.intValue !== undefined && output.intValue !== null) {
        return {
            intValue: output.intValue,
        };
    }
    if (output.isNull !== undefined && output.isNull !== null) {
        return {
            isNull: output.isNull,
        };
    }
    if (output.realValue !== undefined && output.realValue !== null) {
        return {
            realValue: output.realValue,
        };
    }
    if (output.stringValue !== undefined && output.stringValue !== null) {
        return {
            stringValue: output.stringValue,
        };
    }
    if (output.structValue !== undefined && output.structValue !== null) {
        return {
            structValue: deserializeAws_restJson1StructValue(output.structValue, context),
        };
    }
    return { $unknown: Object.entries(output)[0] };
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
var isSerializableHeaderValue = function (value) {
    return value !== undefined &&
        value !== null &&
        value !== "" &&
        (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
        (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
};
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
//# sourceMappingURL=Aws_restJson1.js.map