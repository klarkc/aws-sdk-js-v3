import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_json1_0DescribeStreamCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDBStreams_20120810.DescribeStream",
        };
        body = JSON.stringify(serializeAws_json1_0DescribeStreamInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0GetRecordsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDBStreams_20120810.GetRecords",
        };
        body = JSON.stringify(serializeAws_json1_0GetRecordsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0GetShardIteratorCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDBStreams_20120810.GetShardIterator",
        };
        body = JSON.stringify(serializeAws_json1_0GetShardIteratorInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0ListStreamsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDBStreams_20120810.ListStreams",
        };
        body = JSON.stringify(serializeAws_json1_0ListStreamsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_json1_0DescribeStreamCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DescribeStreamCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0DescribeStreamOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0DescribeStreamCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodbstreams#InternalServerError": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodbstreams#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0GetRecordsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0GetRecordsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0GetRecordsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0GetRecordsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ExpiredIteratorException": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodbstreams#ExpiredIteratorException": return [3 /*break*/, 2];
                    case "InternalServerError": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodbstreams#InternalServerError": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodbstreams#LimitExceededException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.dynamodbstreams#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TrimmedDataAccessException": return [3 /*break*/, 10];
                    case "com.amazonaws.dynamodbstreams#TrimmedDataAccessException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ExpiredIteratorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TrimmedDataAccessExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0GetShardIteratorCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0GetShardIteratorCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0GetShardIteratorOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0GetShardIteratorCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodbstreams#InternalServerError": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodbstreams#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "TrimmedDataAccessException": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodbstreams#TrimmedDataAccessException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TrimmedDataAccessExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0ListStreamsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0ListStreamsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0ListStreamsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0ListStreamsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodbstreams#InternalServerError": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodbstreams#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
var deserializeAws_json1_0ExpiredIteratorExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0ExpiredIteratorException(body, context);
        contents = __assign({ name: "ExpiredIteratorException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0InternalServerErrorResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0InternalServerError(body, context);
        contents = __assign({ name: "InternalServerError", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_json1_0ResourceNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0ResourceNotFoundException(body, context);
        contents = __assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0TrimmedDataAccessExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0TrimmedDataAccessException(body, context);
        contents = __assign({ name: "TrimmedDataAccessException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_json1_0DescribeStreamInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.ExclusiveStartShardId !== undefined &&
        input.ExclusiveStartShardId !== null && { ExclusiveStartShardId: input.ExclusiveStartShardId })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.StreamArn !== undefined && input.StreamArn !== null && { StreamArn: input.StreamArn }));
};
var serializeAws_json1_0GetRecordsInput = function (input, context) {
    return __assign(__assign({}, (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.ShardIterator !== undefined && input.ShardIterator !== null && { ShardIterator: input.ShardIterator }));
};
var serializeAws_json1_0GetShardIteratorInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.SequenceNumber !== undefined &&
        input.SequenceNumber !== null && { SequenceNumber: input.SequenceNumber })), (input.ShardId !== undefined && input.ShardId !== null && { ShardId: input.ShardId })), (input.ShardIteratorType !== undefined &&
        input.ShardIteratorType !== null && { ShardIteratorType: input.ShardIteratorType })), (input.StreamArn !== undefined && input.StreamArn !== null && { StreamArn: input.StreamArn }));
};
var serializeAws_json1_0ListStreamsInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.ExclusiveStartStreamArn !== undefined &&
        input.ExclusiveStartStreamArn !== null && { ExclusiveStartStreamArn: input.ExclusiveStartStreamArn })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }));
};
var deserializeAws_json1_0AttributeMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_json1_0AttributeValue(value, context), _b));
    }, {});
};
var deserializeAws_json1_0AttributeValue = function (output, context) {
    if (output.B !== undefined && output.B !== null) {
        return {
            B: context.base64Decoder(output.B),
        };
    }
    if (output.BOOL !== undefined && output.BOOL !== null) {
        return {
            BOOL: output.BOOL,
        };
    }
    if (output.BS !== undefined && output.BS !== null) {
        return {
            BS: deserializeAws_json1_0BinarySetAttributeValue(output.BS, context),
        };
    }
    if (output.L !== undefined && output.L !== null) {
        return {
            L: deserializeAws_json1_0ListAttributeValue(output.L, context),
        };
    }
    if (output.M !== undefined && output.M !== null) {
        return {
            M: deserializeAws_json1_0MapAttributeValue(output.M, context),
        };
    }
    if (output.N !== undefined && output.N !== null) {
        return {
            N: output.N,
        };
    }
    if (output.NS !== undefined && output.NS !== null) {
        return {
            NS: deserializeAws_json1_0NumberSetAttributeValue(output.NS, context),
        };
    }
    if (output.NULL !== undefined && output.NULL !== null) {
        return {
            NULL: output.NULL,
        };
    }
    if (output.S !== undefined && output.S !== null) {
        return {
            S: output.S,
        };
    }
    if (output.SS !== undefined && output.SS !== null) {
        return {
            SS: deserializeAws_json1_0StringSetAttributeValue(output.SS, context),
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
var deserializeAws_json1_0BinarySetAttributeValue = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return context.base64Decoder(entry);
    });
};
var deserializeAws_json1_0DescribeStreamOutput = function (output, context) {
    return {
        StreamDescription: output.StreamDescription !== undefined && output.StreamDescription !== null
            ? deserializeAws_json1_0StreamDescription(output.StreamDescription, context)
            : undefined,
    };
};
var deserializeAws_json1_0ExpiredIteratorException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0GetRecordsOutput = function (output, context) {
    return {
        NextShardIterator: output.NextShardIterator !== undefined && output.NextShardIterator !== null
            ? output.NextShardIterator
            : undefined,
        Records: output.Records !== undefined && output.Records !== null
            ? deserializeAws_json1_0RecordList(output.Records, context)
            : undefined,
    };
};
var deserializeAws_json1_0GetShardIteratorOutput = function (output, context) {
    return {
        ShardIterator: output.ShardIterator !== undefined && output.ShardIterator !== null ? output.ShardIterator : undefined,
    };
};
var deserializeAws_json1_0Identity = function (output, context) {
    return {
        PrincipalId: output.PrincipalId !== undefined && output.PrincipalId !== null ? output.PrincipalId : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
var deserializeAws_json1_0InternalServerError = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0KeySchema = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0KeySchemaElement(entry, context);
    });
};
var deserializeAws_json1_0KeySchemaElement = function (output, context) {
    return {
        AttributeName: output.AttributeName !== undefined && output.AttributeName !== null ? output.AttributeName : undefined,
        KeyType: output.KeyType !== undefined && output.KeyType !== null ? output.KeyType : undefined,
    };
};
var deserializeAws_json1_0LimitExceededException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0ListAttributeValue = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0AttributeValue(entry, context);
    });
};
var deserializeAws_json1_0ListStreamsOutput = function (output, context) {
    return {
        LastEvaluatedStreamArn: output.LastEvaluatedStreamArn !== undefined && output.LastEvaluatedStreamArn !== null
            ? output.LastEvaluatedStreamArn
            : undefined,
        Streams: output.Streams !== undefined && output.Streams !== null
            ? deserializeAws_json1_0StreamList(output.Streams, context)
            : undefined,
    };
};
var deserializeAws_json1_0MapAttributeValue = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_json1_0AttributeValue(value, context), _b));
    }, {});
};
var deserializeAws_json1_0NumberSetAttributeValue = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_0_Record = function (output, context) {
    return {
        awsRegion: output.awsRegion !== undefined && output.awsRegion !== null ? output.awsRegion : undefined,
        dynamodb: output.dynamodb !== undefined && output.dynamodb !== null
            ? deserializeAws_json1_0StreamRecord(output.dynamodb, context)
            : undefined,
        eventID: output.eventID !== undefined && output.eventID !== null ? output.eventID : undefined,
        eventName: output.eventName !== undefined && output.eventName !== null ? output.eventName : undefined,
        eventSource: output.eventSource !== undefined && output.eventSource !== null ? output.eventSource : undefined,
        eventVersion: output.eventVersion !== undefined && output.eventVersion !== null ? output.eventVersion : undefined,
        userIdentity: output.userIdentity !== undefined && output.userIdentity !== null
            ? deserializeAws_json1_0Identity(output.userIdentity, context)
            : undefined,
    };
};
var deserializeAws_json1_0RecordList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0_Record(entry, context);
    });
};
var deserializeAws_json1_0ResourceNotFoundException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0SequenceNumberRange = function (output, context) {
    return {
        EndingSequenceNumber: output.EndingSequenceNumber !== undefined && output.EndingSequenceNumber !== null
            ? output.EndingSequenceNumber
            : undefined,
        StartingSequenceNumber: output.StartingSequenceNumber !== undefined && output.StartingSequenceNumber !== null
            ? output.StartingSequenceNumber
            : undefined,
    };
};
var deserializeAws_json1_0Shard = function (output, context) {
    return {
        ParentShardId: output.ParentShardId !== undefined && output.ParentShardId !== null ? output.ParentShardId : undefined,
        SequenceNumberRange: output.SequenceNumberRange !== undefined && output.SequenceNumberRange !== null
            ? deserializeAws_json1_0SequenceNumberRange(output.SequenceNumberRange, context)
            : undefined,
        ShardId: output.ShardId !== undefined && output.ShardId !== null ? output.ShardId : undefined,
    };
};
var deserializeAws_json1_0ShardDescriptionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0Shard(entry, context);
    });
};
var deserializeAws_json1_0_Stream = function (output, context) {
    return {
        StreamArn: output.StreamArn !== undefined && output.StreamArn !== null ? output.StreamArn : undefined,
        StreamLabel: output.StreamLabel !== undefined && output.StreamLabel !== null ? output.StreamLabel : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
    };
};
var deserializeAws_json1_0StreamDescription = function (output, context) {
    return {
        CreationRequestDateTime: output.CreationRequestDateTime !== undefined && output.CreationRequestDateTime !== null
            ? new Date(Math.round(output.CreationRequestDateTime * 1000))
            : undefined,
        KeySchema: output.KeySchema !== undefined && output.KeySchema !== null
            ? deserializeAws_json1_0KeySchema(output.KeySchema, context)
            : undefined,
        LastEvaluatedShardId: output.LastEvaluatedShardId !== undefined && output.LastEvaluatedShardId !== null
            ? output.LastEvaluatedShardId
            : undefined,
        Shards: output.Shards !== undefined && output.Shards !== null
            ? deserializeAws_json1_0ShardDescriptionList(output.Shards, context)
            : undefined,
        StreamArn: output.StreamArn !== undefined && output.StreamArn !== null ? output.StreamArn : undefined,
        StreamLabel: output.StreamLabel !== undefined && output.StreamLabel !== null ? output.StreamLabel : undefined,
        StreamStatus: output.StreamStatus !== undefined && output.StreamStatus !== null ? output.StreamStatus : undefined,
        StreamViewType: output.StreamViewType !== undefined && output.StreamViewType !== null ? output.StreamViewType : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
    };
};
var deserializeAws_json1_0StreamList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0_Stream(entry, context);
    });
};
var deserializeAws_json1_0StreamRecord = function (output, context) {
    return {
        ApproximateCreationDateTime: output.ApproximateCreationDateTime !== undefined && output.ApproximateCreationDateTime !== null
            ? new Date(Math.round(output.ApproximateCreationDateTime * 1000))
            : undefined,
        Keys: output.Keys !== undefined && output.Keys !== null
            ? deserializeAws_json1_0AttributeMap(output.Keys, context)
            : undefined,
        NewImage: output.NewImage !== undefined && output.NewImage !== null
            ? deserializeAws_json1_0AttributeMap(output.NewImage, context)
            : undefined,
        OldImage: output.OldImage !== undefined && output.OldImage !== null
            ? deserializeAws_json1_0AttributeMap(output.OldImage, context)
            : undefined,
        SequenceNumber: output.SequenceNumber !== undefined && output.SequenceNumber !== null ? output.SequenceNumber : undefined,
        SizeBytes: output.SizeBytes !== undefined && output.SizeBytes !== null ? output.SizeBytes : undefined,
        StreamViewType: output.StreamViewType !== undefined && output.StreamViewType !== null ? output.StreamViewType : undefined,
    };
};
var deserializeAws_json1_0StringSetAttributeValue = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_0TrimmedDataAccessException = function (output, context) {
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
//# sourceMappingURL=Aws_json1_0.js.map