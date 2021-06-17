import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_json1_0SendCommandCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "QLDBSession.SendCommand",
        };
        body = JSON.stringify(serializeAws_json1_0SendCommandRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_json1_0SendCommandCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0SendCommandCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0SendCommandResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0SendCommandCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.qldbsession#BadRequestException": return [3 /*break*/, 2];
                    case "CapacityExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.qldbsession#CapacityExceededException": return [3 /*break*/, 4];
                    case "InvalidSessionException": return [3 /*break*/, 6];
                    case "com.amazonaws.qldbsession#InvalidSessionException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.qldbsession#LimitExceededException": return [3 /*break*/, 8];
                    case "OccConflictException": return [3 /*break*/, 10];
                    case "com.amazonaws.qldbsession#OccConflictException": return [3 /*break*/, 10];
                    case "RateExceededException": return [3 /*break*/, 12];
                    case "com.amazonaws.qldbsession#RateExceededException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0CapacityExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidSessionExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0OccConflictExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0RateExceededExceptionResponse(parsedOutput, context)];
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
var deserializeAws_json1_0BadRequestExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0BadRequestException(body, context);
        contents = __assign({ name: "BadRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0CapacityExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0CapacityExceededException(body, context);
        contents = __assign({ name: "CapacityExceededException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0InvalidSessionExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0InvalidSessionException(body, context);
        contents = __assign({ name: "InvalidSessionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0LimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0LimitExceededException(body, context);
        contents = __assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0OccConflictExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0OccConflictException(body, context);
        contents = __assign({ name: "OccConflictException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0RateExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0RateExceededException(body, context);
        contents = __assign({ name: "RateExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_json1_0AbortTransactionRequest = function (input, context) {
    return {};
};
var serializeAws_json1_0CommitTransactionRequest = function (input, context) {
    return __assign(__assign({}, (input.CommitDigest !== undefined &&
        input.CommitDigest !== null && { CommitDigest: context.base64Encoder(input.CommitDigest) })), (input.TransactionId !== undefined && input.TransactionId !== null && { TransactionId: input.TransactionId }));
};
var serializeAws_json1_0EndSessionRequest = function (input, context) {
    return {};
};
var serializeAws_json1_0ExecuteStatementRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.Parameters !== undefined &&
        input.Parameters !== null && { Parameters: serializeAws_json1_0StatementParameters(input.Parameters, context) })), (input.Statement !== undefined && input.Statement !== null && { Statement: input.Statement })), (input.TransactionId !== undefined && input.TransactionId !== null && { TransactionId: input.TransactionId }));
};
var serializeAws_json1_0FetchPageRequest = function (input, context) {
    return __assign(__assign({}, (input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken })), (input.TransactionId !== undefined && input.TransactionId !== null && { TransactionId: input.TransactionId }));
};
var serializeAws_json1_0SendCommandRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AbortTransaction !== undefined &&
        input.AbortTransaction !== null && {
        AbortTransaction: serializeAws_json1_0AbortTransactionRequest(input.AbortTransaction, context),
    })), (input.CommitTransaction !== undefined &&
        input.CommitTransaction !== null && {
        CommitTransaction: serializeAws_json1_0CommitTransactionRequest(input.CommitTransaction, context),
    })), (input.EndSession !== undefined &&
        input.EndSession !== null && { EndSession: serializeAws_json1_0EndSessionRequest(input.EndSession, context) })), (input.ExecuteStatement !== undefined &&
        input.ExecuteStatement !== null && {
        ExecuteStatement: serializeAws_json1_0ExecuteStatementRequest(input.ExecuteStatement, context),
    })), (input.FetchPage !== undefined &&
        input.FetchPage !== null && { FetchPage: serializeAws_json1_0FetchPageRequest(input.FetchPage, context) })), (input.SessionToken !== undefined && input.SessionToken !== null && { SessionToken: input.SessionToken })), (input.StartSession !== undefined &&
        input.StartSession !== null && {
        StartSession: serializeAws_json1_0StartSessionRequest(input.StartSession, context),
    })), (input.StartTransaction !== undefined &&
        input.StartTransaction !== null && {
        StartTransaction: serializeAws_json1_0StartTransactionRequest(input.StartTransaction, context),
    }));
};
var serializeAws_json1_0StartSessionRequest = function (input, context) {
    return __assign({}, (input.LedgerName !== undefined && input.LedgerName !== null && { LedgerName: input.LedgerName }));
};
var serializeAws_json1_0StartTransactionRequest = function (input, context) {
    return {};
};
var serializeAws_json1_0StatementParameters = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0ValueHolder(entry, context);
    });
};
var serializeAws_json1_0ValueHolder = function (input, context) {
    return __assign(__assign({}, (input.IonBinary !== undefined &&
        input.IonBinary !== null && { IonBinary: context.base64Encoder(input.IonBinary) })), (input.IonText !== undefined && input.IonText !== null && { IonText: input.IonText }));
};
var deserializeAws_json1_0AbortTransactionResult = function (output, context) {
    return {
        TimingInformation: output.TimingInformation !== undefined && output.TimingInformation !== null
            ? deserializeAws_json1_0TimingInformation(output.TimingInformation, context)
            : undefined,
    };
};
var deserializeAws_json1_0BadRequestException = function (output, context) {
    return {
        Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_0CapacityExceededException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_0CommitTransactionResult = function (output, context) {
    return {
        CommitDigest: output.CommitDigest !== undefined && output.CommitDigest !== null
            ? context.base64Decoder(output.CommitDigest)
            : undefined,
        ConsumedIOs: output.ConsumedIOs !== undefined && output.ConsumedIOs !== null
            ? deserializeAws_json1_0IOUsage(output.ConsumedIOs, context)
            : undefined,
        TimingInformation: output.TimingInformation !== undefined && output.TimingInformation !== null
            ? deserializeAws_json1_0TimingInformation(output.TimingInformation, context)
            : undefined,
        TransactionId: output.TransactionId !== undefined && output.TransactionId !== null ? output.TransactionId : undefined,
    };
};
var deserializeAws_json1_0EndSessionResult = function (output, context) {
    return {
        TimingInformation: output.TimingInformation !== undefined && output.TimingInformation !== null
            ? deserializeAws_json1_0TimingInformation(output.TimingInformation, context)
            : undefined,
    };
};
var deserializeAws_json1_0ExecuteStatementResult = function (output, context) {
    return {
        ConsumedIOs: output.ConsumedIOs !== undefined && output.ConsumedIOs !== null
            ? deserializeAws_json1_0IOUsage(output.ConsumedIOs, context)
            : undefined,
        FirstPage: output.FirstPage !== undefined && output.FirstPage !== null
            ? deserializeAws_json1_0Page(output.FirstPage, context)
            : undefined,
        TimingInformation: output.TimingInformation !== undefined && output.TimingInformation !== null
            ? deserializeAws_json1_0TimingInformation(output.TimingInformation, context)
            : undefined,
    };
};
var deserializeAws_json1_0FetchPageResult = function (output, context) {
    return {
        ConsumedIOs: output.ConsumedIOs !== undefined && output.ConsumedIOs !== null
            ? deserializeAws_json1_0IOUsage(output.ConsumedIOs, context)
            : undefined,
        Page: output.Page !== undefined && output.Page !== null ? deserializeAws_json1_0Page(output.Page, context) : undefined,
        TimingInformation: output.TimingInformation !== undefined && output.TimingInformation !== null
            ? deserializeAws_json1_0TimingInformation(output.TimingInformation, context)
            : undefined,
    };
};
var deserializeAws_json1_0InvalidSessionException = function (output, context) {
    return {
        Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_0IOUsage = function (output, context) {
    return {
        ReadIOs: output.ReadIOs !== undefined && output.ReadIOs !== null ? output.ReadIOs : undefined,
        WriteIOs: output.WriteIOs !== undefined && output.WriteIOs !== null ? output.WriteIOs : undefined,
    };
};
var deserializeAws_json1_0LimitExceededException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_0OccConflictException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_0Page = function (output, context) {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        Values: output.Values !== undefined && output.Values !== null
            ? deserializeAws_json1_0ValueHolders(output.Values, context)
            : undefined,
    };
};
var deserializeAws_json1_0RateExceededException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_0SendCommandResult = function (output, context) {
    return {
        AbortTransaction: output.AbortTransaction !== undefined && output.AbortTransaction !== null
            ? deserializeAws_json1_0AbortTransactionResult(output.AbortTransaction, context)
            : undefined,
        CommitTransaction: output.CommitTransaction !== undefined && output.CommitTransaction !== null
            ? deserializeAws_json1_0CommitTransactionResult(output.CommitTransaction, context)
            : undefined,
        EndSession: output.EndSession !== undefined && output.EndSession !== null
            ? deserializeAws_json1_0EndSessionResult(output.EndSession, context)
            : undefined,
        ExecuteStatement: output.ExecuteStatement !== undefined && output.ExecuteStatement !== null
            ? deserializeAws_json1_0ExecuteStatementResult(output.ExecuteStatement, context)
            : undefined,
        FetchPage: output.FetchPage !== undefined && output.FetchPage !== null
            ? deserializeAws_json1_0FetchPageResult(output.FetchPage, context)
            : undefined,
        StartSession: output.StartSession !== undefined && output.StartSession !== null
            ? deserializeAws_json1_0StartSessionResult(output.StartSession, context)
            : undefined,
        StartTransaction: output.StartTransaction !== undefined && output.StartTransaction !== null
            ? deserializeAws_json1_0StartTransactionResult(output.StartTransaction, context)
            : undefined,
    };
};
var deserializeAws_json1_0StartSessionResult = function (output, context) {
    return {
        SessionToken: output.SessionToken !== undefined && output.SessionToken !== null ? output.SessionToken : undefined,
        TimingInformation: output.TimingInformation !== undefined && output.TimingInformation !== null
            ? deserializeAws_json1_0TimingInformation(output.TimingInformation, context)
            : undefined,
    };
};
var deserializeAws_json1_0StartTransactionResult = function (output, context) {
    return {
        TimingInformation: output.TimingInformation !== undefined && output.TimingInformation !== null
            ? deserializeAws_json1_0TimingInformation(output.TimingInformation, context)
            : undefined,
        TransactionId: output.TransactionId !== undefined && output.TransactionId !== null ? output.TransactionId : undefined,
    };
};
var deserializeAws_json1_0TimingInformation = function (output, context) {
    return {
        ProcessingTimeMilliseconds: output.ProcessingTimeMilliseconds !== undefined && output.ProcessingTimeMilliseconds !== null
            ? output.ProcessingTimeMilliseconds
            : undefined,
    };
};
var deserializeAws_json1_0ValueHolder = function (output, context) {
    return {
        IonBinary: output.IonBinary !== undefined && output.IonBinary !== null ? context.base64Decoder(output.IonBinary) : undefined,
        IonText: output.IonText !== undefined && output.IonText !== null ? output.IonText : undefined,
    };
};
var deserializeAws_json1_0ValueHolders = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0ValueHolder(entry, context);
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
//# sourceMappingURL=Aws_json1_0.js.map