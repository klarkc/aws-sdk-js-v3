import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_restJson1SearchCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-01-01/search";
                query = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({ format: "sdk", pretty: "true" }, (input.cursor !== undefined && { cursor: input.cursor })), (input.expr !== undefined && { expr: input.expr })), (input.facet !== undefined && { facet: input.facet })), (input.filterQuery !== undefined && { fq: input.filterQuery })), (input.highlight !== undefined && { highlight: input.highlight })), (input.partial !== undefined && { partial: input.partial.toString() })), (input.query !== undefined && { q: input.query })), (input.queryOptions !== undefined && { "q.options": input.queryOptions })), (input.queryParser !== undefined && { "q.parser": input.queryParser })), (input.return !== undefined && { return: input.return })), (input.size !== undefined && { size: input.size.toString() })), (input.sort !== undefined && { sort: input.sort })), (input.start !== undefined && { start: input.start.toString() })), (input.stats !== undefined && { stats: input.stats }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1SuggestCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2013-01-01/suggest";
                query = __assign(__assign(__assign({ format: "sdk", pretty: "true" }, (input.query !== undefined && { q: input.query })), (input.suggester !== undefined && { suggester: input.suggester })), (input.size !== undefined && { size: input.size.toString() }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UploadDocumentsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({ "content-type": "application/octet-stream" }, (isSerializableHeaderValue(input.contentType) && { "content-type": input.contentType }));
                resolvedPath = "/2013-01-01/documents/batch";
                query = {
                    format: "sdk",
                };
                if (input.documents !== undefined) {
                    body = input.documents;
                }
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
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var deserializeAws_restJson1SearchCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1SearchCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    facets: undefined,
                    hits: undefined,
                    stats: undefined,
                    status: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.facets !== undefined && data.facets !== null) {
                    contents.facets = deserializeAws_restJson1Facets(data.facets, context);
                }
                if (data.hits !== undefined && data.hits !== null) {
                    contents.hits = deserializeAws_restJson1Hits(data.hits, context);
                }
                if (data.stats !== undefined && data.stats !== null) {
                    contents.stats = deserializeAws_restJson1Stats(data.stats, context);
                }
                if (data.status !== undefined && data.status !== null) {
                    contents.status = deserializeAws_restJson1SearchStatus(data.status, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1SearchCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "SearchException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudsearchdomain#SearchException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1SearchExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1SuggestCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1SuggestCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    status: undefined,
                    suggest: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.status !== undefined && data.status !== null) {
                    contents.status = deserializeAws_restJson1SuggestStatus(data.status, context);
                }
                if (data.suggest !== undefined && data.suggest !== null) {
                    contents.suggest = deserializeAws_restJson1SuggestModel(data.suggest, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1SuggestCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "SearchException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudsearchdomain#SearchException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1SearchExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UploadDocumentsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UploadDocumentsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    adds: undefined,
                    deletes: undefined,
                    status: undefined,
                    warnings: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.adds !== undefined && data.adds !== null) {
                    contents.adds = data.adds;
                }
                if (data.deletes !== undefined && data.deletes !== null) {
                    contents.deletes = data.deletes;
                }
                if (data.status !== undefined && data.status !== null) {
                    contents.status = data.status;
                }
                if (data.warnings !== undefined && data.warnings !== null) {
                    contents.warnings = deserializeAws_restJson1DocumentServiceWarnings(data.warnings, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UploadDocumentsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DocumentServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudsearchdomain#DocumentServiceException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1DocumentServiceExceptionResponse(parsedOutput, context)];
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
var deserializeAws_restJson1DocumentServiceExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "DocumentServiceException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
            status: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        if (data.status !== undefined && data.status !== null) {
            contents.status = data.status;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1SearchExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "SearchException",
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
var deserializeAws_restJson1Bucket = function (output, context) {
    return {
        count: output.count !== undefined && output.count !== null ? output.count : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
var deserializeAws_restJson1BucketInfo = function (output, context) {
    return {
        buckets: output.buckets !== undefined && output.buckets !== null
            ? deserializeAws_restJson1BucketList(output.buckets, context)
            : undefined,
    };
};
var deserializeAws_restJson1BucketList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Bucket(entry, context);
    });
};
var deserializeAws_restJson1DocumentServiceWarning = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_restJson1DocumentServiceWarnings = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DocumentServiceWarning(entry, context);
    });
};
var deserializeAws_restJson1Exprs = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_restJson1Facets = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_restJson1BucketInfo(value, context), _b));
    }, {});
};
var deserializeAws_restJson1Fields = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_restJson1FieldValue(value, context), _b));
    }, {});
};
var deserializeAws_restJson1FieldStats = function (output, context) {
    return {
        count: output.count !== undefined && output.count !== null ? output.count : undefined,
        max: output.max !== undefined && output.max !== null ? output.max : undefined,
        mean: output.mean !== undefined && output.mean !== null ? output.mean : undefined,
        min: output.min !== undefined && output.min !== null ? output.min : undefined,
        missing: output.missing !== undefined && output.missing !== null ? output.missing : undefined,
        stddev: output.stddev !== undefined && output.stddev !== null ? output.stddev : undefined,
        sum: output.sum !== undefined && output.sum !== null ? output.sum : undefined,
        sumOfSquares: output.sumOfSquares !== undefined && output.sumOfSquares !== null ? output.sumOfSquares : undefined,
    };
};
var deserializeAws_restJson1FieldValue = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1Highlights = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_restJson1Hit = function (output, context) {
    return {
        exprs: output.exprs !== undefined && output.exprs !== null
            ? deserializeAws_restJson1Exprs(output.exprs, context)
            : undefined,
        fields: output.fields !== undefined && output.fields !== null
            ? deserializeAws_restJson1Fields(output.fields, context)
            : undefined,
        highlights: output.highlights !== undefined && output.highlights !== null
            ? deserializeAws_restJson1Highlights(output.highlights, context)
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
    };
};
var deserializeAws_restJson1HitList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Hit(entry, context);
    });
};
var deserializeAws_restJson1Hits = function (output, context) {
    return {
        cursor: output.cursor !== undefined && output.cursor !== null ? output.cursor : undefined,
        found: output.found !== undefined && output.found !== null ? output.found : undefined,
        hit: output.hit !== undefined && output.hit !== null
            ? deserializeAws_restJson1HitList(output.hit, context)
            : undefined,
        start: output.start !== undefined && output.start !== null ? output.start : undefined,
    };
};
var deserializeAws_restJson1SearchStatus = function (output, context) {
    return {
        rid: output.rid !== undefined && output.rid !== null ? output.rid : undefined,
        timems: output.timems !== undefined && output.timems !== null ? output.timems : undefined,
    };
};
var deserializeAws_restJson1Stats = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_restJson1FieldStats(value, context), _b));
    }, {});
};
var deserializeAws_restJson1SuggestionMatch = function (output, context) {
    return {
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        score: output.score !== undefined && output.score !== null ? output.score : undefined,
        suggestion: output.suggestion !== undefined && output.suggestion !== null ? output.suggestion : undefined,
    };
};
var deserializeAws_restJson1Suggestions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SuggestionMatch(entry, context);
    });
};
var deserializeAws_restJson1SuggestModel = function (output, context) {
    return {
        found: output.found !== undefined && output.found !== null ? output.found : undefined,
        query: output.query !== undefined && output.query !== null ? output.query : undefined,
        suggestions: output.suggestions !== undefined && output.suggestions !== null
            ? deserializeAws_restJson1Suggestions(output.suggestions, context)
            : undefined,
    };
};
var deserializeAws_restJson1SuggestStatus = function (output, context) {
    return {
        rid: output.rid !== undefined && output.rid !== null ? output.rid : undefined,
        timems: output.timems !== undefined && output.timems !== null ? output.timems : undefined,
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