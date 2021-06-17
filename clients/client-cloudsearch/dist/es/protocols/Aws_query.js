import { __assign, __awaiter, __generator, __read, __values } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, getArrayIfSingleItem as __getArrayIfSingleItem, getValueFromTextNode as __getValueFromTextNode, } from "@aws-sdk/smithy-client";
import { decodeHTML } from "entities";
import { parse as xmlParse } from "fast-xml-parser";
export var serializeAws_queryBuildSuggestersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryBuildSuggestersRequest(input, context)), { Action: "BuildSuggesters", Version: "2013-01-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateDomainCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateDomainRequest(input, context)), { Action: "CreateDomain", Version: "2013-01-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDefineAnalysisSchemeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDefineAnalysisSchemeRequest(input, context)), { Action: "DefineAnalysisScheme", Version: "2013-01-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDefineExpressionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDefineExpressionRequest(input, context)), { Action: "DefineExpression", Version: "2013-01-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDefineIndexFieldCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDefineIndexFieldRequest(input, context)), { Action: "DefineIndexField", Version: "2013-01-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDefineSuggesterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDefineSuggesterRequest(input, context)), { Action: "DefineSuggester", Version: "2013-01-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteAnalysisSchemeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteAnalysisSchemeRequest(input, context)), { Action: "DeleteAnalysisScheme", Version: "2013-01-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteDomainCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteDomainRequest(input, context)), { Action: "DeleteDomain", Version: "2013-01-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteExpressionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteExpressionRequest(input, context)), { Action: "DeleteExpression", Version: "2013-01-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteIndexFieldCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteIndexFieldRequest(input, context)), { Action: "DeleteIndexField", Version: "2013-01-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteSuggesterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteSuggesterRequest(input, context)), { Action: "DeleteSuggester", Version: "2013-01-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeAnalysisSchemesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeAnalysisSchemesRequest(input, context)), { Action: "DescribeAnalysisSchemes", Version: "2013-01-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeAvailabilityOptionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeAvailabilityOptionsRequest(input, context)), { Action: "DescribeAvailabilityOptions", Version: "2013-01-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeDomainEndpointOptionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeDomainEndpointOptionsRequest(input, context)), { Action: "DescribeDomainEndpointOptions", Version: "2013-01-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeDomainsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeDomainsRequest(input, context)), { Action: "DescribeDomains", Version: "2013-01-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeExpressionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeExpressionsRequest(input, context)), { Action: "DescribeExpressions", Version: "2013-01-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeIndexFieldsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeIndexFieldsRequest(input, context)), { Action: "DescribeIndexFields", Version: "2013-01-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeScalingParametersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeScalingParametersRequest(input, context)), { Action: "DescribeScalingParameters", Version: "2013-01-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeServiceAccessPoliciesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeServiceAccessPoliciesRequest(input, context)), { Action: "DescribeServiceAccessPolicies", Version: "2013-01-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeSuggestersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeSuggestersRequest(input, context)), { Action: "DescribeSuggesters", Version: "2013-01-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryIndexDocumentsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryIndexDocumentsRequest(input, context)), { Action: "IndexDocuments", Version: "2013-01-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListDomainNamesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString({
            Action: "ListDomainNames",
            Version: "2013-01-01",
        });
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUpdateAvailabilityOptionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUpdateAvailabilityOptionsRequest(input, context)), { Action: "UpdateAvailabilityOptions", Version: "2013-01-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUpdateDomainEndpointOptionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUpdateDomainEndpointOptionsRequest(input, context)), { Action: "UpdateDomainEndpointOptions", Version: "2013-01-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUpdateScalingParametersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUpdateScalingParametersRequest(input, context)), { Action: "UpdateScalingParameters", Version: "2013-01-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUpdateServiceAccessPoliciesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUpdateServiceAccessPoliciesRequest(input, context)), { Action: "UpdateServiceAccessPolicies", Version: "2013-01-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_queryBuildSuggestersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryBuildSuggestersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryBuildSuggestersResponse(data.BuildSuggestersResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryBuildSuggestersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudsearch#BaseException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudsearch#InternalException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudsearch#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryBaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateDomainCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateDomainCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateDomainResponse(data.CreateDomainResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateDomainCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudsearch#BaseException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudsearch#InternalException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudsearch#LimitExceededException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryBaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDefineAnalysisSchemeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDefineAnalysisSchemeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDefineAnalysisSchemeResponse(data.DefineAnalysisSchemeResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDefineAnalysisSchemeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudsearch#BaseException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudsearch#InternalException": return [3 /*break*/, 4];
                    case "InvalidTypeException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudsearch#InvalidTypeException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.cloudsearch#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.cloudsearch#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryBaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDefineExpressionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDefineExpressionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDefineExpressionResponse(data.DefineExpressionResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDefineExpressionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudsearch#BaseException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudsearch#InternalException": return [3 /*break*/, 4];
                    case "InvalidTypeException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudsearch#InvalidTypeException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.cloudsearch#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.cloudsearch#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryBaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDefineIndexFieldCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDefineIndexFieldCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDefineIndexFieldResponse(data.DefineIndexFieldResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDefineIndexFieldCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudsearch#BaseException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudsearch#InternalException": return [3 /*break*/, 4];
                    case "InvalidTypeException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudsearch#InvalidTypeException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.cloudsearch#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.cloudsearch#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryBaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDefineSuggesterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDefineSuggesterCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDefineSuggesterResponse(data.DefineSuggesterResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDefineSuggesterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudsearch#BaseException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudsearch#InternalException": return [3 /*break*/, 4];
                    case "InvalidTypeException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudsearch#InvalidTypeException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.cloudsearch#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.cloudsearch#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryBaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteAnalysisSchemeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteAnalysisSchemeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDeleteAnalysisSchemeResponse(data.DeleteAnalysisSchemeResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteAnalysisSchemeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudsearch#BaseException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudsearch#InternalException": return [3 /*break*/, 4];
                    case "InvalidTypeException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudsearch#InvalidTypeException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cloudsearch#ResourceNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryBaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteDomainCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteDomainCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDeleteDomainResponse(data.DeleteDomainResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteDomainCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudsearch#BaseException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudsearch#InternalException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryBaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteExpressionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteExpressionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDeleteExpressionResponse(data.DeleteExpressionResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteExpressionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudsearch#BaseException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudsearch#InternalException": return [3 /*break*/, 4];
                    case "InvalidTypeException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudsearch#InvalidTypeException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cloudsearch#ResourceNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryBaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteIndexFieldCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteIndexFieldCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDeleteIndexFieldResponse(data.DeleteIndexFieldResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteIndexFieldCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudsearch#BaseException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudsearch#InternalException": return [3 /*break*/, 4];
                    case "InvalidTypeException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudsearch#InvalidTypeException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cloudsearch#ResourceNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryBaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteSuggesterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteSuggesterCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDeleteSuggesterResponse(data.DeleteSuggesterResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteSuggesterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudsearch#BaseException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudsearch#InternalException": return [3 /*break*/, 4];
                    case "InvalidTypeException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudsearch#InvalidTypeException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cloudsearch#ResourceNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryBaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeAnalysisSchemesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeAnalysisSchemesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeAnalysisSchemesResponse(data.DescribeAnalysisSchemesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeAnalysisSchemesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudsearch#BaseException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudsearch#InternalException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudsearch#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryBaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeAvailabilityOptionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeAvailabilityOptionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeAvailabilityOptionsResponse(data.DescribeAvailabilityOptionsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeAvailabilityOptionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudsearch#BaseException": return [3 /*break*/, 2];
                    case "DisabledOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudsearch#DisabledOperationException": return [3 /*break*/, 4];
                    case "InternalException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudsearch#InternalException": return [3 /*break*/, 6];
                    case "InvalidTypeException": return [3 /*break*/, 8];
                    case "com.amazonaws.cloudsearch#InvalidTypeException": return [3 /*break*/, 8];
                    case "LimitExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.cloudsearch#LimitExceededException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.cloudsearch#ResourceNotFoundException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryBaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryDisabledOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeDomainEndpointOptionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeDomainEndpointOptionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeDomainEndpointOptionsResponse(data.DescribeDomainEndpointOptionsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeDomainEndpointOptionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudsearch#BaseException": return [3 /*break*/, 2];
                    case "DisabledOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudsearch#DisabledOperationException": return [3 /*break*/, 4];
                    case "InternalException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudsearch#InternalException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.cloudsearch#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.cloudsearch#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryBaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryDisabledOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeDomainsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeDomainsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeDomainsResponse(data.DescribeDomainsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeDomainsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudsearch#BaseException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudsearch#InternalException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryBaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeExpressionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeExpressionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeExpressionsResponse(data.DescribeExpressionsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeExpressionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudsearch#BaseException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudsearch#InternalException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudsearch#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryBaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeIndexFieldsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeIndexFieldsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeIndexFieldsResponse(data.DescribeIndexFieldsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeIndexFieldsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudsearch#BaseException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudsearch#InternalException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudsearch#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryBaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeScalingParametersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeScalingParametersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeScalingParametersResponse(data.DescribeScalingParametersResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeScalingParametersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudsearch#BaseException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudsearch#InternalException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudsearch#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryBaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeServiceAccessPoliciesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeServiceAccessPoliciesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeServiceAccessPoliciesResponse(data.DescribeServiceAccessPoliciesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeServiceAccessPoliciesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudsearch#BaseException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudsearch#InternalException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudsearch#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryBaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeSuggestersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeSuggestersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeSuggestersResponse(data.DescribeSuggestersResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeSuggestersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudsearch#BaseException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudsearch#InternalException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudsearch#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryBaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryIndexDocumentsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryIndexDocumentsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryIndexDocumentsResponse(data.IndexDocumentsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryIndexDocumentsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudsearch#BaseException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudsearch#InternalException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudsearch#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryBaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListDomainNamesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListDomainNamesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListDomainNamesResponse(data.ListDomainNamesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListDomainNamesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudsearch#BaseException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryBaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUpdateAvailabilityOptionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUpdateAvailabilityOptionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryUpdateAvailabilityOptionsResponse(data.UpdateAvailabilityOptionsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryUpdateAvailabilityOptionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudsearch#BaseException": return [3 /*break*/, 2];
                    case "DisabledOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudsearch#DisabledOperationException": return [3 /*break*/, 4];
                    case "InternalException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudsearch#InternalException": return [3 /*break*/, 6];
                    case "InvalidTypeException": return [3 /*break*/, 8];
                    case "com.amazonaws.cloudsearch#InvalidTypeException": return [3 /*break*/, 8];
                    case "LimitExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.cloudsearch#LimitExceededException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.cloudsearch#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.cloudsearch#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryBaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryDisabledOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUpdateDomainEndpointOptionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUpdateDomainEndpointOptionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryUpdateDomainEndpointOptionsResponse(data.UpdateDomainEndpointOptionsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryUpdateDomainEndpointOptionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudsearch#BaseException": return [3 /*break*/, 2];
                    case "DisabledOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudsearch#DisabledOperationException": return [3 /*break*/, 4];
                    case "InternalException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudsearch#InternalException": return [3 /*break*/, 6];
                    case "InvalidTypeException": return [3 /*break*/, 8];
                    case "com.amazonaws.cloudsearch#InvalidTypeException": return [3 /*break*/, 8];
                    case "LimitExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.cloudsearch#LimitExceededException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.cloudsearch#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.cloudsearch#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryBaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryDisabledOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUpdateScalingParametersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUpdateScalingParametersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryUpdateScalingParametersResponse(data.UpdateScalingParametersResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryUpdateScalingParametersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudsearch#BaseException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudsearch#InternalException": return [3 /*break*/, 4];
                    case "InvalidTypeException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudsearch#InvalidTypeException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.cloudsearch#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.cloudsearch#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryBaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUpdateServiceAccessPoliciesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUpdateServiceAccessPoliciesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryUpdateServiceAccessPoliciesResponse(data.UpdateServiceAccessPoliciesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryUpdateServiceAccessPoliciesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudsearch#BaseException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudsearch#InternalException": return [3 /*break*/, 4];
                    case "InvalidTypeException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudsearch#InvalidTypeException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.cloudsearch#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.cloudsearch#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryBaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInternalExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_queryBaseExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryBaseException(body.Error, context);
        contents = __assign({ name: "BaseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDisabledOperationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDisabledOperationException(body.Error, context);
        contents = __assign({ name: "DisabledOperationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInternalExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInternalException(body.Error, context);
        contents = __assign({ name: "InternalException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidTypeExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidTypeException(body.Error, context);
        contents = __assign({ name: "InvalidTypeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryLimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryLimitExceededException(body.Error, context);
        contents = __assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryResourceNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryResourceNotFoundException(body.Error, context);
        contents = __assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryValidationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryValidationException(body.Error, context);
        contents = __assign({ name: "ValidationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_queryAnalysisOptions = function (input, context) {
    var entries = {};
    if (input.Synonyms !== undefined && input.Synonyms !== null) {
        entries["Synonyms"] = input.Synonyms;
    }
    if (input.Stopwords !== undefined && input.Stopwords !== null) {
        entries["Stopwords"] = input.Stopwords;
    }
    if (input.StemmingDictionary !== undefined && input.StemmingDictionary !== null) {
        entries["StemmingDictionary"] = input.StemmingDictionary;
    }
    if (input.JapaneseTokenizationDictionary !== undefined && input.JapaneseTokenizationDictionary !== null) {
        entries["JapaneseTokenizationDictionary"] = input.JapaneseTokenizationDictionary;
    }
    if (input.AlgorithmicStemming !== undefined && input.AlgorithmicStemming !== null) {
        entries["AlgorithmicStemming"] = input.AlgorithmicStemming;
    }
    return entries;
};
var serializeAws_queryAnalysisScheme = function (input, context) {
    var entries = {};
    if (input.AnalysisSchemeName !== undefined && input.AnalysisSchemeName !== null) {
        entries["AnalysisSchemeName"] = input.AnalysisSchemeName;
    }
    if (input.AnalysisSchemeLanguage !== undefined && input.AnalysisSchemeLanguage !== null) {
        entries["AnalysisSchemeLanguage"] = input.AnalysisSchemeLanguage;
    }
    if (input.AnalysisOptions !== undefined && input.AnalysisOptions !== null) {
        var memberEntries = serializeAws_queryAnalysisOptions(input.AnalysisOptions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "AnalysisOptions." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryBuildSuggestersRequest = function (input, context) {
    var entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    return entries;
};
var serializeAws_queryCreateDomainRequest = function (input, context) {
    var entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    return entries;
};
var serializeAws_queryDateArrayOptions = function (input, context) {
    var entries = {};
    if (input.DefaultValue !== undefined && input.DefaultValue !== null) {
        entries["DefaultValue"] = input.DefaultValue;
    }
    if (input.SourceFields !== undefined && input.SourceFields !== null) {
        entries["SourceFields"] = input.SourceFields;
    }
    if (input.FacetEnabled !== undefined && input.FacetEnabled !== null) {
        entries["FacetEnabled"] = input.FacetEnabled;
    }
    if (input.SearchEnabled !== undefined && input.SearchEnabled !== null) {
        entries["SearchEnabled"] = input.SearchEnabled;
    }
    if (input.ReturnEnabled !== undefined && input.ReturnEnabled !== null) {
        entries["ReturnEnabled"] = input.ReturnEnabled;
    }
    return entries;
};
var serializeAws_queryDateOptions = function (input, context) {
    var entries = {};
    if (input.DefaultValue !== undefined && input.DefaultValue !== null) {
        entries["DefaultValue"] = input.DefaultValue;
    }
    if (input.SourceField !== undefined && input.SourceField !== null) {
        entries["SourceField"] = input.SourceField;
    }
    if (input.FacetEnabled !== undefined && input.FacetEnabled !== null) {
        entries["FacetEnabled"] = input.FacetEnabled;
    }
    if (input.SearchEnabled !== undefined && input.SearchEnabled !== null) {
        entries["SearchEnabled"] = input.SearchEnabled;
    }
    if (input.ReturnEnabled !== undefined && input.ReturnEnabled !== null) {
        entries["ReturnEnabled"] = input.ReturnEnabled;
    }
    if (input.SortEnabled !== undefined && input.SortEnabled !== null) {
        entries["SortEnabled"] = input.SortEnabled;
    }
    return entries;
};
var serializeAws_queryDefineAnalysisSchemeRequest = function (input, context) {
    var entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.AnalysisScheme !== undefined && input.AnalysisScheme !== null) {
        var memberEntries = serializeAws_queryAnalysisScheme(input.AnalysisScheme, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "AnalysisScheme." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDefineExpressionRequest = function (input, context) {
    var entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.Expression !== undefined && input.Expression !== null) {
        var memberEntries = serializeAws_queryExpression(input.Expression, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Expression." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDefineIndexFieldRequest = function (input, context) {
    var entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.IndexField !== undefined && input.IndexField !== null) {
        var memberEntries = serializeAws_queryIndexField(input.IndexField, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "IndexField." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDefineSuggesterRequest = function (input, context) {
    var entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.Suggester !== undefined && input.Suggester !== null) {
        var memberEntries = serializeAws_querySuggester(input.Suggester, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Suggester." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDeleteAnalysisSchemeRequest = function (input, context) {
    var entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.AnalysisSchemeName !== undefined && input.AnalysisSchemeName !== null) {
        entries["AnalysisSchemeName"] = input.AnalysisSchemeName;
    }
    return entries;
};
var serializeAws_queryDeleteDomainRequest = function (input, context) {
    var entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    return entries;
};
var serializeAws_queryDeleteExpressionRequest = function (input, context) {
    var entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.ExpressionName !== undefined && input.ExpressionName !== null) {
        entries["ExpressionName"] = input.ExpressionName;
    }
    return entries;
};
var serializeAws_queryDeleteIndexFieldRequest = function (input, context) {
    var entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.IndexFieldName !== undefined && input.IndexFieldName !== null) {
        entries["IndexFieldName"] = input.IndexFieldName;
    }
    return entries;
};
var serializeAws_queryDeleteSuggesterRequest = function (input, context) {
    var entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.SuggesterName !== undefined && input.SuggesterName !== null) {
        entries["SuggesterName"] = input.SuggesterName;
    }
    return entries;
};
var serializeAws_queryDescribeAnalysisSchemesRequest = function (input, context) {
    var entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.AnalysisSchemeNames !== undefined && input.AnalysisSchemeNames !== null) {
        var memberEntries = serializeAws_queryStandardNameList(input.AnalysisSchemeNames, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "AnalysisSchemeNames." + key;
            entries[loc] = value;
        });
    }
    if (input.Deployed !== undefined && input.Deployed !== null) {
        entries["Deployed"] = input.Deployed;
    }
    return entries;
};
var serializeAws_queryDescribeAvailabilityOptionsRequest = function (input, context) {
    var entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.Deployed !== undefined && input.Deployed !== null) {
        entries["Deployed"] = input.Deployed;
    }
    return entries;
};
var serializeAws_queryDescribeDomainEndpointOptionsRequest = function (input, context) {
    var entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.Deployed !== undefined && input.Deployed !== null) {
        entries["Deployed"] = input.Deployed;
    }
    return entries;
};
var serializeAws_queryDescribeDomainsRequest = function (input, context) {
    var entries = {};
    if (input.DomainNames !== undefined && input.DomainNames !== null) {
        var memberEntries = serializeAws_queryDomainNameList(input.DomainNames, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "DomainNames." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDescribeExpressionsRequest = function (input, context) {
    var entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.ExpressionNames !== undefined && input.ExpressionNames !== null) {
        var memberEntries = serializeAws_queryStandardNameList(input.ExpressionNames, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ExpressionNames." + key;
            entries[loc] = value;
        });
    }
    if (input.Deployed !== undefined && input.Deployed !== null) {
        entries["Deployed"] = input.Deployed;
    }
    return entries;
};
var serializeAws_queryDescribeIndexFieldsRequest = function (input, context) {
    var entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.FieldNames !== undefined && input.FieldNames !== null) {
        var memberEntries = serializeAws_queryDynamicFieldNameList(input.FieldNames, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "FieldNames." + key;
            entries[loc] = value;
        });
    }
    if (input.Deployed !== undefined && input.Deployed !== null) {
        entries["Deployed"] = input.Deployed;
    }
    return entries;
};
var serializeAws_queryDescribeScalingParametersRequest = function (input, context) {
    var entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    return entries;
};
var serializeAws_queryDescribeServiceAccessPoliciesRequest = function (input, context) {
    var entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.Deployed !== undefined && input.Deployed !== null) {
        entries["Deployed"] = input.Deployed;
    }
    return entries;
};
var serializeAws_queryDescribeSuggestersRequest = function (input, context) {
    var entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.SuggesterNames !== undefined && input.SuggesterNames !== null) {
        var memberEntries = serializeAws_queryStandardNameList(input.SuggesterNames, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "SuggesterNames." + key;
            entries[loc] = value;
        });
    }
    if (input.Deployed !== undefined && input.Deployed !== null) {
        entries["Deployed"] = input.Deployed;
    }
    return entries;
};
var serializeAws_queryDocumentSuggesterOptions = function (input, context) {
    var entries = {};
    if (input.SourceField !== undefined && input.SourceField !== null) {
        entries["SourceField"] = input.SourceField;
    }
    if (input.FuzzyMatching !== undefined && input.FuzzyMatching !== null) {
        entries["FuzzyMatching"] = input.FuzzyMatching;
    }
    if (input.SortExpression !== undefined && input.SortExpression !== null) {
        entries["SortExpression"] = input.SortExpression;
    }
    return entries;
};
var serializeAws_queryDomainEndpointOptions = function (input, context) {
    var entries = {};
    if (input.EnforceHTTPS !== undefined && input.EnforceHTTPS !== null) {
        entries["EnforceHTTPS"] = input.EnforceHTTPS;
    }
    if (input.TLSSecurityPolicy !== undefined && input.TLSSecurityPolicy !== null) {
        entries["TLSSecurityPolicy"] = input.TLSSecurityPolicy;
    }
    return entries;
};
var serializeAws_queryDomainNameList = function (input, context) {
    var e_1, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_1 = __values(input), input_1_1 = input_1.next(); !input_1_1.done; input_1_1 = input_1.next()) {
            var entry = input_1_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (input_1_1 && !input_1_1.done && (_a = input_1.return)) _a.call(input_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return entries;
};
var serializeAws_queryDoubleArrayOptions = function (input, context) {
    var entries = {};
    if (input.DefaultValue !== undefined && input.DefaultValue !== null) {
        entries["DefaultValue"] = input.DefaultValue;
    }
    if (input.SourceFields !== undefined && input.SourceFields !== null) {
        entries["SourceFields"] = input.SourceFields;
    }
    if (input.FacetEnabled !== undefined && input.FacetEnabled !== null) {
        entries["FacetEnabled"] = input.FacetEnabled;
    }
    if (input.SearchEnabled !== undefined && input.SearchEnabled !== null) {
        entries["SearchEnabled"] = input.SearchEnabled;
    }
    if (input.ReturnEnabled !== undefined && input.ReturnEnabled !== null) {
        entries["ReturnEnabled"] = input.ReturnEnabled;
    }
    return entries;
};
var serializeAws_queryDoubleOptions = function (input, context) {
    var entries = {};
    if (input.DefaultValue !== undefined && input.DefaultValue !== null) {
        entries["DefaultValue"] = input.DefaultValue;
    }
    if (input.SourceField !== undefined && input.SourceField !== null) {
        entries["SourceField"] = input.SourceField;
    }
    if (input.FacetEnabled !== undefined && input.FacetEnabled !== null) {
        entries["FacetEnabled"] = input.FacetEnabled;
    }
    if (input.SearchEnabled !== undefined && input.SearchEnabled !== null) {
        entries["SearchEnabled"] = input.SearchEnabled;
    }
    if (input.ReturnEnabled !== undefined && input.ReturnEnabled !== null) {
        entries["ReturnEnabled"] = input.ReturnEnabled;
    }
    if (input.SortEnabled !== undefined && input.SortEnabled !== null) {
        entries["SortEnabled"] = input.SortEnabled;
    }
    return entries;
};
var serializeAws_queryDynamicFieldNameList = function (input, context) {
    var e_2, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_2 = __values(input), input_2_1 = input_2.next(); !input_2_1.done; input_2_1 = input_2.next()) {
            var entry = input_2_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (input_2_1 && !input_2_1.done && (_a = input_2.return)) _a.call(input_2);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return entries;
};
var serializeAws_queryExpression = function (input, context) {
    var entries = {};
    if (input.ExpressionName !== undefined && input.ExpressionName !== null) {
        entries["ExpressionName"] = input.ExpressionName;
    }
    if (input.ExpressionValue !== undefined && input.ExpressionValue !== null) {
        entries["ExpressionValue"] = input.ExpressionValue;
    }
    return entries;
};
var serializeAws_queryIndexDocumentsRequest = function (input, context) {
    var entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    return entries;
};
var serializeAws_queryIndexField = function (input, context) {
    var entries = {};
    if (input.IndexFieldName !== undefined && input.IndexFieldName !== null) {
        entries["IndexFieldName"] = input.IndexFieldName;
    }
    if (input.IndexFieldType !== undefined && input.IndexFieldType !== null) {
        entries["IndexFieldType"] = input.IndexFieldType;
    }
    if (input.IntOptions !== undefined && input.IntOptions !== null) {
        var memberEntries = serializeAws_queryIntOptions(input.IntOptions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "IntOptions." + key;
            entries[loc] = value;
        });
    }
    if (input.DoubleOptions !== undefined && input.DoubleOptions !== null) {
        var memberEntries = serializeAws_queryDoubleOptions(input.DoubleOptions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "DoubleOptions." + key;
            entries[loc] = value;
        });
    }
    if (input.LiteralOptions !== undefined && input.LiteralOptions !== null) {
        var memberEntries = serializeAws_queryLiteralOptions(input.LiteralOptions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "LiteralOptions." + key;
            entries[loc] = value;
        });
    }
    if (input.TextOptions !== undefined && input.TextOptions !== null) {
        var memberEntries = serializeAws_queryTextOptions(input.TextOptions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TextOptions." + key;
            entries[loc] = value;
        });
    }
    if (input.DateOptions !== undefined && input.DateOptions !== null) {
        var memberEntries = serializeAws_queryDateOptions(input.DateOptions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "DateOptions." + key;
            entries[loc] = value;
        });
    }
    if (input.LatLonOptions !== undefined && input.LatLonOptions !== null) {
        var memberEntries = serializeAws_queryLatLonOptions(input.LatLonOptions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "LatLonOptions." + key;
            entries[loc] = value;
        });
    }
    if (input.IntArrayOptions !== undefined && input.IntArrayOptions !== null) {
        var memberEntries = serializeAws_queryIntArrayOptions(input.IntArrayOptions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "IntArrayOptions." + key;
            entries[loc] = value;
        });
    }
    if (input.DoubleArrayOptions !== undefined && input.DoubleArrayOptions !== null) {
        var memberEntries = serializeAws_queryDoubleArrayOptions(input.DoubleArrayOptions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "DoubleArrayOptions." + key;
            entries[loc] = value;
        });
    }
    if (input.LiteralArrayOptions !== undefined && input.LiteralArrayOptions !== null) {
        var memberEntries = serializeAws_queryLiteralArrayOptions(input.LiteralArrayOptions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "LiteralArrayOptions." + key;
            entries[loc] = value;
        });
    }
    if (input.TextArrayOptions !== undefined && input.TextArrayOptions !== null) {
        var memberEntries = serializeAws_queryTextArrayOptions(input.TextArrayOptions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TextArrayOptions." + key;
            entries[loc] = value;
        });
    }
    if (input.DateArrayOptions !== undefined && input.DateArrayOptions !== null) {
        var memberEntries = serializeAws_queryDateArrayOptions(input.DateArrayOptions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "DateArrayOptions." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryIntArrayOptions = function (input, context) {
    var entries = {};
    if (input.DefaultValue !== undefined && input.DefaultValue !== null) {
        entries["DefaultValue"] = input.DefaultValue;
    }
    if (input.SourceFields !== undefined && input.SourceFields !== null) {
        entries["SourceFields"] = input.SourceFields;
    }
    if (input.FacetEnabled !== undefined && input.FacetEnabled !== null) {
        entries["FacetEnabled"] = input.FacetEnabled;
    }
    if (input.SearchEnabled !== undefined && input.SearchEnabled !== null) {
        entries["SearchEnabled"] = input.SearchEnabled;
    }
    if (input.ReturnEnabled !== undefined && input.ReturnEnabled !== null) {
        entries["ReturnEnabled"] = input.ReturnEnabled;
    }
    return entries;
};
var serializeAws_queryIntOptions = function (input, context) {
    var entries = {};
    if (input.DefaultValue !== undefined && input.DefaultValue !== null) {
        entries["DefaultValue"] = input.DefaultValue;
    }
    if (input.SourceField !== undefined && input.SourceField !== null) {
        entries["SourceField"] = input.SourceField;
    }
    if (input.FacetEnabled !== undefined && input.FacetEnabled !== null) {
        entries["FacetEnabled"] = input.FacetEnabled;
    }
    if (input.SearchEnabled !== undefined && input.SearchEnabled !== null) {
        entries["SearchEnabled"] = input.SearchEnabled;
    }
    if (input.ReturnEnabled !== undefined && input.ReturnEnabled !== null) {
        entries["ReturnEnabled"] = input.ReturnEnabled;
    }
    if (input.SortEnabled !== undefined && input.SortEnabled !== null) {
        entries["SortEnabled"] = input.SortEnabled;
    }
    return entries;
};
var serializeAws_queryLatLonOptions = function (input, context) {
    var entries = {};
    if (input.DefaultValue !== undefined && input.DefaultValue !== null) {
        entries["DefaultValue"] = input.DefaultValue;
    }
    if (input.SourceField !== undefined && input.SourceField !== null) {
        entries["SourceField"] = input.SourceField;
    }
    if (input.FacetEnabled !== undefined && input.FacetEnabled !== null) {
        entries["FacetEnabled"] = input.FacetEnabled;
    }
    if (input.SearchEnabled !== undefined && input.SearchEnabled !== null) {
        entries["SearchEnabled"] = input.SearchEnabled;
    }
    if (input.ReturnEnabled !== undefined && input.ReturnEnabled !== null) {
        entries["ReturnEnabled"] = input.ReturnEnabled;
    }
    if (input.SortEnabled !== undefined && input.SortEnabled !== null) {
        entries["SortEnabled"] = input.SortEnabled;
    }
    return entries;
};
var serializeAws_queryLiteralArrayOptions = function (input, context) {
    var entries = {};
    if (input.DefaultValue !== undefined && input.DefaultValue !== null) {
        entries["DefaultValue"] = input.DefaultValue;
    }
    if (input.SourceFields !== undefined && input.SourceFields !== null) {
        entries["SourceFields"] = input.SourceFields;
    }
    if (input.FacetEnabled !== undefined && input.FacetEnabled !== null) {
        entries["FacetEnabled"] = input.FacetEnabled;
    }
    if (input.SearchEnabled !== undefined && input.SearchEnabled !== null) {
        entries["SearchEnabled"] = input.SearchEnabled;
    }
    if (input.ReturnEnabled !== undefined && input.ReturnEnabled !== null) {
        entries["ReturnEnabled"] = input.ReturnEnabled;
    }
    return entries;
};
var serializeAws_queryLiteralOptions = function (input, context) {
    var entries = {};
    if (input.DefaultValue !== undefined && input.DefaultValue !== null) {
        entries["DefaultValue"] = input.DefaultValue;
    }
    if (input.SourceField !== undefined && input.SourceField !== null) {
        entries["SourceField"] = input.SourceField;
    }
    if (input.FacetEnabled !== undefined && input.FacetEnabled !== null) {
        entries["FacetEnabled"] = input.FacetEnabled;
    }
    if (input.SearchEnabled !== undefined && input.SearchEnabled !== null) {
        entries["SearchEnabled"] = input.SearchEnabled;
    }
    if (input.ReturnEnabled !== undefined && input.ReturnEnabled !== null) {
        entries["ReturnEnabled"] = input.ReturnEnabled;
    }
    if (input.SortEnabled !== undefined && input.SortEnabled !== null) {
        entries["SortEnabled"] = input.SortEnabled;
    }
    return entries;
};
var serializeAws_queryScalingParameters = function (input, context) {
    var entries = {};
    if (input.DesiredInstanceType !== undefined && input.DesiredInstanceType !== null) {
        entries["DesiredInstanceType"] = input.DesiredInstanceType;
    }
    if (input.DesiredReplicationCount !== undefined && input.DesiredReplicationCount !== null) {
        entries["DesiredReplicationCount"] = input.DesiredReplicationCount;
    }
    if (input.DesiredPartitionCount !== undefined && input.DesiredPartitionCount !== null) {
        entries["DesiredPartitionCount"] = input.DesiredPartitionCount;
    }
    return entries;
};
var serializeAws_queryStandardNameList = function (input, context) {
    var e_3, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_3 = __values(input), input_3_1 = input_3.next(); !input_3_1.done; input_3_1 = input_3.next()) {
            var entry = input_3_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (input_3_1 && !input_3_1.done && (_a = input_3.return)) _a.call(input_3);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return entries;
};
var serializeAws_querySuggester = function (input, context) {
    var entries = {};
    if (input.SuggesterName !== undefined && input.SuggesterName !== null) {
        entries["SuggesterName"] = input.SuggesterName;
    }
    if (input.DocumentSuggesterOptions !== undefined && input.DocumentSuggesterOptions !== null) {
        var memberEntries = serializeAws_queryDocumentSuggesterOptions(input.DocumentSuggesterOptions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "DocumentSuggesterOptions." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryTextArrayOptions = function (input, context) {
    var entries = {};
    if (input.DefaultValue !== undefined && input.DefaultValue !== null) {
        entries["DefaultValue"] = input.DefaultValue;
    }
    if (input.SourceFields !== undefined && input.SourceFields !== null) {
        entries["SourceFields"] = input.SourceFields;
    }
    if (input.ReturnEnabled !== undefined && input.ReturnEnabled !== null) {
        entries["ReturnEnabled"] = input.ReturnEnabled;
    }
    if (input.HighlightEnabled !== undefined && input.HighlightEnabled !== null) {
        entries["HighlightEnabled"] = input.HighlightEnabled;
    }
    if (input.AnalysisScheme !== undefined && input.AnalysisScheme !== null) {
        entries["AnalysisScheme"] = input.AnalysisScheme;
    }
    return entries;
};
var serializeAws_queryTextOptions = function (input, context) {
    var entries = {};
    if (input.DefaultValue !== undefined && input.DefaultValue !== null) {
        entries["DefaultValue"] = input.DefaultValue;
    }
    if (input.SourceField !== undefined && input.SourceField !== null) {
        entries["SourceField"] = input.SourceField;
    }
    if (input.ReturnEnabled !== undefined && input.ReturnEnabled !== null) {
        entries["ReturnEnabled"] = input.ReturnEnabled;
    }
    if (input.SortEnabled !== undefined && input.SortEnabled !== null) {
        entries["SortEnabled"] = input.SortEnabled;
    }
    if (input.HighlightEnabled !== undefined && input.HighlightEnabled !== null) {
        entries["HighlightEnabled"] = input.HighlightEnabled;
    }
    if (input.AnalysisScheme !== undefined && input.AnalysisScheme !== null) {
        entries["AnalysisScheme"] = input.AnalysisScheme;
    }
    return entries;
};
var serializeAws_queryUpdateAvailabilityOptionsRequest = function (input, context) {
    var entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.MultiAZ !== undefined && input.MultiAZ !== null) {
        entries["MultiAZ"] = input.MultiAZ;
    }
    return entries;
};
var serializeAws_queryUpdateDomainEndpointOptionsRequest = function (input, context) {
    var entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.DomainEndpointOptions !== undefined && input.DomainEndpointOptions !== null) {
        var memberEntries = serializeAws_queryDomainEndpointOptions(input.DomainEndpointOptions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "DomainEndpointOptions." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryUpdateScalingParametersRequest = function (input, context) {
    var entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.ScalingParameters !== undefined && input.ScalingParameters !== null) {
        var memberEntries = serializeAws_queryScalingParameters(input.ScalingParameters, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ScalingParameters." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryUpdateServiceAccessPoliciesRequest = function (input, context) {
    var entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.AccessPolicies !== undefined && input.AccessPolicies !== null) {
        entries["AccessPolicies"] = input.AccessPolicies;
    }
    return entries;
};
var deserializeAws_queryAccessPoliciesStatus = function (output, context) {
    var contents = {
        Options: undefined,
        Status: undefined,
    };
    if (output["Options"] !== undefined) {
        contents.Options = output["Options"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = deserializeAws_queryOptionStatus(output["Status"], context);
    }
    return contents;
};
var deserializeAws_queryAnalysisOptions = function (output, context) {
    var contents = {
        Synonyms: undefined,
        Stopwords: undefined,
        StemmingDictionary: undefined,
        JapaneseTokenizationDictionary: undefined,
        AlgorithmicStemming: undefined,
    };
    if (output["Synonyms"] !== undefined) {
        contents.Synonyms = output["Synonyms"];
    }
    if (output["Stopwords"] !== undefined) {
        contents.Stopwords = output["Stopwords"];
    }
    if (output["StemmingDictionary"] !== undefined) {
        contents.StemmingDictionary = output["StemmingDictionary"];
    }
    if (output["JapaneseTokenizationDictionary"] !== undefined) {
        contents.JapaneseTokenizationDictionary = output["JapaneseTokenizationDictionary"];
    }
    if (output["AlgorithmicStemming"] !== undefined) {
        contents.AlgorithmicStemming = output["AlgorithmicStemming"];
    }
    return contents;
};
var deserializeAws_queryAnalysisScheme = function (output, context) {
    var contents = {
        AnalysisSchemeName: undefined,
        AnalysisSchemeLanguage: undefined,
        AnalysisOptions: undefined,
    };
    if (output["AnalysisSchemeName"] !== undefined) {
        contents.AnalysisSchemeName = output["AnalysisSchemeName"];
    }
    if (output["AnalysisSchemeLanguage"] !== undefined) {
        contents.AnalysisSchemeLanguage = output["AnalysisSchemeLanguage"];
    }
    if (output["AnalysisOptions"] !== undefined) {
        contents.AnalysisOptions = deserializeAws_queryAnalysisOptions(output["AnalysisOptions"], context);
    }
    return contents;
};
var deserializeAws_queryAnalysisSchemeStatus = function (output, context) {
    var contents = {
        Options: undefined,
        Status: undefined,
    };
    if (output["Options"] !== undefined) {
        contents.Options = deserializeAws_queryAnalysisScheme(output["Options"], context);
    }
    if (output["Status"] !== undefined) {
        contents.Status = deserializeAws_queryOptionStatus(output["Status"], context);
    }
    return contents;
};
var deserializeAws_queryAnalysisSchemeStatusList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryAnalysisSchemeStatus(entry, context);
    });
};
var deserializeAws_queryAvailabilityOptionsStatus = function (output, context) {
    var contents = {
        Options: undefined,
        Status: undefined,
    };
    if (output["Options"] !== undefined) {
        contents.Options = output["Options"] == "true";
    }
    if (output["Status"] !== undefined) {
        contents.Status = deserializeAws_queryOptionStatus(output["Status"], context);
    }
    return contents;
};
var deserializeAws_queryBaseException = function (output, context) {
    var contents = {
        Code: undefined,
        Message: undefined,
    };
    if (output["Code"] !== undefined) {
        contents.Code = output["Code"];
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryBuildSuggestersResponse = function (output, context) {
    var contents = {
        FieldNames: undefined,
    };
    if (output.FieldNames === "") {
        contents.FieldNames = [];
    }
    if (output["FieldNames"] !== undefined && output["FieldNames"]["member"] !== undefined) {
        contents.FieldNames = deserializeAws_queryFieldNameList(__getArrayIfSingleItem(output["FieldNames"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryCreateDomainResponse = function (output, context) {
    var contents = {
        DomainStatus: undefined,
    };
    if (output["DomainStatus"] !== undefined) {
        contents.DomainStatus = deserializeAws_queryDomainStatus(output["DomainStatus"], context);
    }
    return contents;
};
var deserializeAws_queryDateArrayOptions = function (output, context) {
    var contents = {
        DefaultValue: undefined,
        SourceFields: undefined,
        FacetEnabled: undefined,
        SearchEnabled: undefined,
        ReturnEnabled: undefined,
    };
    if (output["DefaultValue"] !== undefined) {
        contents.DefaultValue = output["DefaultValue"];
    }
    if (output["SourceFields"] !== undefined) {
        contents.SourceFields = output["SourceFields"];
    }
    if (output["FacetEnabled"] !== undefined) {
        contents.FacetEnabled = output["FacetEnabled"] == "true";
    }
    if (output["SearchEnabled"] !== undefined) {
        contents.SearchEnabled = output["SearchEnabled"] == "true";
    }
    if (output["ReturnEnabled"] !== undefined) {
        contents.ReturnEnabled = output["ReturnEnabled"] == "true";
    }
    return contents;
};
var deserializeAws_queryDateOptions = function (output, context) {
    var contents = {
        DefaultValue: undefined,
        SourceField: undefined,
        FacetEnabled: undefined,
        SearchEnabled: undefined,
        ReturnEnabled: undefined,
        SortEnabled: undefined,
    };
    if (output["DefaultValue"] !== undefined) {
        contents.DefaultValue = output["DefaultValue"];
    }
    if (output["SourceField"] !== undefined) {
        contents.SourceField = output["SourceField"];
    }
    if (output["FacetEnabled"] !== undefined) {
        contents.FacetEnabled = output["FacetEnabled"] == "true";
    }
    if (output["SearchEnabled"] !== undefined) {
        contents.SearchEnabled = output["SearchEnabled"] == "true";
    }
    if (output["ReturnEnabled"] !== undefined) {
        contents.ReturnEnabled = output["ReturnEnabled"] == "true";
    }
    if (output["SortEnabled"] !== undefined) {
        contents.SortEnabled = output["SortEnabled"] == "true";
    }
    return contents;
};
var deserializeAws_queryDefineAnalysisSchemeResponse = function (output, context) {
    var contents = {
        AnalysisScheme: undefined,
    };
    if (output["AnalysisScheme"] !== undefined) {
        contents.AnalysisScheme = deserializeAws_queryAnalysisSchemeStatus(output["AnalysisScheme"], context);
    }
    return contents;
};
var deserializeAws_queryDefineExpressionResponse = function (output, context) {
    var contents = {
        Expression: undefined,
    };
    if (output["Expression"] !== undefined) {
        contents.Expression = deserializeAws_queryExpressionStatus(output["Expression"], context);
    }
    return contents;
};
var deserializeAws_queryDefineIndexFieldResponse = function (output, context) {
    var contents = {
        IndexField: undefined,
    };
    if (output["IndexField"] !== undefined) {
        contents.IndexField = deserializeAws_queryIndexFieldStatus(output["IndexField"], context);
    }
    return contents;
};
var deserializeAws_queryDefineSuggesterResponse = function (output, context) {
    var contents = {
        Suggester: undefined,
    };
    if (output["Suggester"] !== undefined) {
        contents.Suggester = deserializeAws_querySuggesterStatus(output["Suggester"], context);
    }
    return contents;
};
var deserializeAws_queryDeleteAnalysisSchemeResponse = function (output, context) {
    var contents = {
        AnalysisScheme: undefined,
    };
    if (output["AnalysisScheme"] !== undefined) {
        contents.AnalysisScheme = deserializeAws_queryAnalysisSchemeStatus(output["AnalysisScheme"], context);
    }
    return contents;
};
var deserializeAws_queryDeleteDomainResponse = function (output, context) {
    var contents = {
        DomainStatus: undefined,
    };
    if (output["DomainStatus"] !== undefined) {
        contents.DomainStatus = deserializeAws_queryDomainStatus(output["DomainStatus"], context);
    }
    return contents;
};
var deserializeAws_queryDeleteExpressionResponse = function (output, context) {
    var contents = {
        Expression: undefined,
    };
    if (output["Expression"] !== undefined) {
        contents.Expression = deserializeAws_queryExpressionStatus(output["Expression"], context);
    }
    return contents;
};
var deserializeAws_queryDeleteIndexFieldResponse = function (output, context) {
    var contents = {
        IndexField: undefined,
    };
    if (output["IndexField"] !== undefined) {
        contents.IndexField = deserializeAws_queryIndexFieldStatus(output["IndexField"], context);
    }
    return contents;
};
var deserializeAws_queryDeleteSuggesterResponse = function (output, context) {
    var contents = {
        Suggester: undefined,
    };
    if (output["Suggester"] !== undefined) {
        contents.Suggester = deserializeAws_querySuggesterStatus(output["Suggester"], context);
    }
    return contents;
};
var deserializeAws_queryDescribeAnalysisSchemesResponse = function (output, context) {
    var contents = {
        AnalysisSchemes: undefined,
    };
    if (output.AnalysisSchemes === "") {
        contents.AnalysisSchemes = [];
    }
    if (output["AnalysisSchemes"] !== undefined && output["AnalysisSchemes"]["member"] !== undefined) {
        contents.AnalysisSchemes = deserializeAws_queryAnalysisSchemeStatusList(__getArrayIfSingleItem(output["AnalysisSchemes"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryDescribeAvailabilityOptionsResponse = function (output, context) {
    var contents = {
        AvailabilityOptions: undefined,
    };
    if (output["AvailabilityOptions"] !== undefined) {
        contents.AvailabilityOptions = deserializeAws_queryAvailabilityOptionsStatus(output["AvailabilityOptions"], context);
    }
    return contents;
};
var deserializeAws_queryDescribeDomainEndpointOptionsResponse = function (output, context) {
    var contents = {
        DomainEndpointOptions: undefined,
    };
    if (output["DomainEndpointOptions"] !== undefined) {
        contents.DomainEndpointOptions = deserializeAws_queryDomainEndpointOptionsStatus(output["DomainEndpointOptions"], context);
    }
    return contents;
};
var deserializeAws_queryDescribeDomainsResponse = function (output, context) {
    var contents = {
        DomainStatusList: undefined,
    };
    if (output.DomainStatusList === "") {
        contents.DomainStatusList = [];
    }
    if (output["DomainStatusList"] !== undefined && output["DomainStatusList"]["member"] !== undefined) {
        contents.DomainStatusList = deserializeAws_queryDomainStatusList(__getArrayIfSingleItem(output["DomainStatusList"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryDescribeExpressionsResponse = function (output, context) {
    var contents = {
        Expressions: undefined,
    };
    if (output.Expressions === "") {
        contents.Expressions = [];
    }
    if (output["Expressions"] !== undefined && output["Expressions"]["member"] !== undefined) {
        contents.Expressions = deserializeAws_queryExpressionStatusList(__getArrayIfSingleItem(output["Expressions"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryDescribeIndexFieldsResponse = function (output, context) {
    var contents = {
        IndexFields: undefined,
    };
    if (output.IndexFields === "") {
        contents.IndexFields = [];
    }
    if (output["IndexFields"] !== undefined && output["IndexFields"]["member"] !== undefined) {
        contents.IndexFields = deserializeAws_queryIndexFieldStatusList(__getArrayIfSingleItem(output["IndexFields"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryDescribeScalingParametersResponse = function (output, context) {
    var contents = {
        ScalingParameters: undefined,
    };
    if (output["ScalingParameters"] !== undefined) {
        contents.ScalingParameters = deserializeAws_queryScalingParametersStatus(output["ScalingParameters"], context);
    }
    return contents;
};
var deserializeAws_queryDescribeServiceAccessPoliciesResponse = function (output, context) {
    var contents = {
        AccessPolicies: undefined,
    };
    if (output["AccessPolicies"] !== undefined) {
        contents.AccessPolicies = deserializeAws_queryAccessPoliciesStatus(output["AccessPolicies"], context);
    }
    return contents;
};
var deserializeAws_queryDescribeSuggestersResponse = function (output, context) {
    var contents = {
        Suggesters: undefined,
    };
    if (output.Suggesters === "") {
        contents.Suggesters = [];
    }
    if (output["Suggesters"] !== undefined && output["Suggesters"]["member"] !== undefined) {
        contents.Suggesters = deserializeAws_querySuggesterStatusList(__getArrayIfSingleItem(output["Suggesters"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryDisabledOperationException = function (output, context) {
    var contents = {
        Code: undefined,
        Message: undefined,
    };
    if (output["Code"] !== undefined) {
        contents.Code = output["Code"];
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryDocumentSuggesterOptions = function (output, context) {
    var contents = {
        SourceField: undefined,
        FuzzyMatching: undefined,
        SortExpression: undefined,
    };
    if (output["SourceField"] !== undefined) {
        contents.SourceField = output["SourceField"];
    }
    if (output["FuzzyMatching"] !== undefined) {
        contents.FuzzyMatching = output["FuzzyMatching"];
    }
    if (output["SortExpression"] !== undefined) {
        contents.SortExpression = output["SortExpression"];
    }
    return contents;
};
var deserializeAws_queryDomainEndpointOptions = function (output, context) {
    var contents = {
        EnforceHTTPS: undefined,
        TLSSecurityPolicy: undefined,
    };
    if (output["EnforceHTTPS"] !== undefined) {
        contents.EnforceHTTPS = output["EnforceHTTPS"] == "true";
    }
    if (output["TLSSecurityPolicy"] !== undefined) {
        contents.TLSSecurityPolicy = output["TLSSecurityPolicy"];
    }
    return contents;
};
var deserializeAws_queryDomainEndpointOptionsStatus = function (output, context) {
    var contents = {
        Options: undefined,
        Status: undefined,
    };
    if (output["Options"] !== undefined) {
        contents.Options = deserializeAws_queryDomainEndpointOptions(output["Options"], context);
    }
    if (output["Status"] !== undefined) {
        contents.Status = deserializeAws_queryOptionStatus(output["Status"], context);
    }
    return contents;
};
var deserializeAws_queryDomainNameMap = function (output, context) {
    return output.reduce(function (acc, pair) {
        var _a;
        if (pair["value"] === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_a = {}, _a[pair["key"]] = pair["value"], _a));
    }, {});
};
var deserializeAws_queryDomainStatus = function (output, context) {
    var contents = {
        DomainId: undefined,
        DomainName: undefined,
        ARN: undefined,
        Created: undefined,
        Deleted: undefined,
        DocService: undefined,
        SearchService: undefined,
        RequiresIndexDocuments: undefined,
        Processing: undefined,
        SearchInstanceType: undefined,
        SearchPartitionCount: undefined,
        SearchInstanceCount: undefined,
        Limits: undefined,
    };
    if (output["DomainId"] !== undefined) {
        contents.DomainId = output["DomainId"];
    }
    if (output["DomainName"] !== undefined) {
        contents.DomainName = output["DomainName"];
    }
    if (output["ARN"] !== undefined) {
        contents.ARN = output["ARN"];
    }
    if (output["Created"] !== undefined) {
        contents.Created = output["Created"] == "true";
    }
    if (output["Deleted"] !== undefined) {
        contents.Deleted = output["Deleted"] == "true";
    }
    if (output["DocService"] !== undefined) {
        contents.DocService = deserializeAws_queryServiceEndpoint(output["DocService"], context);
    }
    if (output["SearchService"] !== undefined) {
        contents.SearchService = deserializeAws_queryServiceEndpoint(output["SearchService"], context);
    }
    if (output["RequiresIndexDocuments"] !== undefined) {
        contents.RequiresIndexDocuments = output["RequiresIndexDocuments"] == "true";
    }
    if (output["Processing"] !== undefined) {
        contents.Processing = output["Processing"] == "true";
    }
    if (output["SearchInstanceType"] !== undefined) {
        contents.SearchInstanceType = output["SearchInstanceType"];
    }
    if (output["SearchPartitionCount"] !== undefined) {
        contents.SearchPartitionCount = parseInt(output["SearchPartitionCount"]);
    }
    if (output["SearchInstanceCount"] !== undefined) {
        contents.SearchInstanceCount = parseInt(output["SearchInstanceCount"]);
    }
    if (output["Limits"] !== undefined) {
        contents.Limits = deserializeAws_queryLimits(output["Limits"], context);
    }
    return contents;
};
var deserializeAws_queryDomainStatusList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDomainStatus(entry, context);
    });
};
var deserializeAws_queryDoubleArrayOptions = function (output, context) {
    var contents = {
        DefaultValue: undefined,
        SourceFields: undefined,
        FacetEnabled: undefined,
        SearchEnabled: undefined,
        ReturnEnabled: undefined,
    };
    if (output["DefaultValue"] !== undefined) {
        contents.DefaultValue = parseFloat(output["DefaultValue"]);
    }
    if (output["SourceFields"] !== undefined) {
        contents.SourceFields = output["SourceFields"];
    }
    if (output["FacetEnabled"] !== undefined) {
        contents.FacetEnabled = output["FacetEnabled"] == "true";
    }
    if (output["SearchEnabled"] !== undefined) {
        contents.SearchEnabled = output["SearchEnabled"] == "true";
    }
    if (output["ReturnEnabled"] !== undefined) {
        contents.ReturnEnabled = output["ReturnEnabled"] == "true";
    }
    return contents;
};
var deserializeAws_queryDoubleOptions = function (output, context) {
    var contents = {
        DefaultValue: undefined,
        SourceField: undefined,
        FacetEnabled: undefined,
        SearchEnabled: undefined,
        ReturnEnabled: undefined,
        SortEnabled: undefined,
    };
    if (output["DefaultValue"] !== undefined) {
        contents.DefaultValue = parseFloat(output["DefaultValue"]);
    }
    if (output["SourceField"] !== undefined) {
        contents.SourceField = output["SourceField"];
    }
    if (output["FacetEnabled"] !== undefined) {
        contents.FacetEnabled = output["FacetEnabled"] == "true";
    }
    if (output["SearchEnabled"] !== undefined) {
        contents.SearchEnabled = output["SearchEnabled"] == "true";
    }
    if (output["ReturnEnabled"] !== undefined) {
        contents.ReturnEnabled = output["ReturnEnabled"] == "true";
    }
    if (output["SortEnabled"] !== undefined) {
        contents.SortEnabled = output["SortEnabled"] == "true";
    }
    return contents;
};
var deserializeAws_queryExpression = function (output, context) {
    var contents = {
        ExpressionName: undefined,
        ExpressionValue: undefined,
    };
    if (output["ExpressionName"] !== undefined) {
        contents.ExpressionName = output["ExpressionName"];
    }
    if (output["ExpressionValue"] !== undefined) {
        contents.ExpressionValue = output["ExpressionValue"];
    }
    return contents;
};
var deserializeAws_queryExpressionStatus = function (output, context) {
    var contents = {
        Options: undefined,
        Status: undefined,
    };
    if (output["Options"] !== undefined) {
        contents.Options = deserializeAws_queryExpression(output["Options"], context);
    }
    if (output["Status"] !== undefined) {
        contents.Status = deserializeAws_queryOptionStatus(output["Status"], context);
    }
    return contents;
};
var deserializeAws_queryExpressionStatusList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryExpressionStatus(entry, context);
    });
};
var deserializeAws_queryFieldNameList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryIndexDocumentsResponse = function (output, context) {
    var contents = {
        FieldNames: undefined,
    };
    if (output.FieldNames === "") {
        contents.FieldNames = [];
    }
    if (output["FieldNames"] !== undefined && output["FieldNames"]["member"] !== undefined) {
        contents.FieldNames = deserializeAws_queryFieldNameList(__getArrayIfSingleItem(output["FieldNames"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryIndexField = function (output, context) {
    var contents = {
        IndexFieldName: undefined,
        IndexFieldType: undefined,
        IntOptions: undefined,
        DoubleOptions: undefined,
        LiteralOptions: undefined,
        TextOptions: undefined,
        DateOptions: undefined,
        LatLonOptions: undefined,
        IntArrayOptions: undefined,
        DoubleArrayOptions: undefined,
        LiteralArrayOptions: undefined,
        TextArrayOptions: undefined,
        DateArrayOptions: undefined,
    };
    if (output["IndexFieldName"] !== undefined) {
        contents.IndexFieldName = output["IndexFieldName"];
    }
    if (output["IndexFieldType"] !== undefined) {
        contents.IndexFieldType = output["IndexFieldType"];
    }
    if (output["IntOptions"] !== undefined) {
        contents.IntOptions = deserializeAws_queryIntOptions(output["IntOptions"], context);
    }
    if (output["DoubleOptions"] !== undefined) {
        contents.DoubleOptions = deserializeAws_queryDoubleOptions(output["DoubleOptions"], context);
    }
    if (output["LiteralOptions"] !== undefined) {
        contents.LiteralOptions = deserializeAws_queryLiteralOptions(output["LiteralOptions"], context);
    }
    if (output["TextOptions"] !== undefined) {
        contents.TextOptions = deserializeAws_queryTextOptions(output["TextOptions"], context);
    }
    if (output["DateOptions"] !== undefined) {
        contents.DateOptions = deserializeAws_queryDateOptions(output["DateOptions"], context);
    }
    if (output["LatLonOptions"] !== undefined) {
        contents.LatLonOptions = deserializeAws_queryLatLonOptions(output["LatLonOptions"], context);
    }
    if (output["IntArrayOptions"] !== undefined) {
        contents.IntArrayOptions = deserializeAws_queryIntArrayOptions(output["IntArrayOptions"], context);
    }
    if (output["DoubleArrayOptions"] !== undefined) {
        contents.DoubleArrayOptions = deserializeAws_queryDoubleArrayOptions(output["DoubleArrayOptions"], context);
    }
    if (output["LiteralArrayOptions"] !== undefined) {
        contents.LiteralArrayOptions = deserializeAws_queryLiteralArrayOptions(output["LiteralArrayOptions"], context);
    }
    if (output["TextArrayOptions"] !== undefined) {
        contents.TextArrayOptions = deserializeAws_queryTextArrayOptions(output["TextArrayOptions"], context);
    }
    if (output["DateArrayOptions"] !== undefined) {
        contents.DateArrayOptions = deserializeAws_queryDateArrayOptions(output["DateArrayOptions"], context);
    }
    return contents;
};
var deserializeAws_queryIndexFieldStatus = function (output, context) {
    var contents = {
        Options: undefined,
        Status: undefined,
    };
    if (output["Options"] !== undefined) {
        contents.Options = deserializeAws_queryIndexField(output["Options"], context);
    }
    if (output["Status"] !== undefined) {
        contents.Status = deserializeAws_queryOptionStatus(output["Status"], context);
    }
    return contents;
};
var deserializeAws_queryIndexFieldStatusList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryIndexFieldStatus(entry, context);
    });
};
var deserializeAws_queryIntArrayOptions = function (output, context) {
    var contents = {
        DefaultValue: undefined,
        SourceFields: undefined,
        FacetEnabled: undefined,
        SearchEnabled: undefined,
        ReturnEnabled: undefined,
    };
    if (output["DefaultValue"] !== undefined) {
        contents.DefaultValue = parseInt(output["DefaultValue"]);
    }
    if (output["SourceFields"] !== undefined) {
        contents.SourceFields = output["SourceFields"];
    }
    if (output["FacetEnabled"] !== undefined) {
        contents.FacetEnabled = output["FacetEnabled"] == "true";
    }
    if (output["SearchEnabled"] !== undefined) {
        contents.SearchEnabled = output["SearchEnabled"] == "true";
    }
    if (output["ReturnEnabled"] !== undefined) {
        contents.ReturnEnabled = output["ReturnEnabled"] == "true";
    }
    return contents;
};
var deserializeAws_queryInternalException = function (output, context) {
    var contents = {
        Code: undefined,
        Message: undefined,
    };
    if (output["Code"] !== undefined) {
        contents.Code = output["Code"];
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryIntOptions = function (output, context) {
    var contents = {
        DefaultValue: undefined,
        SourceField: undefined,
        FacetEnabled: undefined,
        SearchEnabled: undefined,
        ReturnEnabled: undefined,
        SortEnabled: undefined,
    };
    if (output["DefaultValue"] !== undefined) {
        contents.DefaultValue = parseInt(output["DefaultValue"]);
    }
    if (output["SourceField"] !== undefined) {
        contents.SourceField = output["SourceField"];
    }
    if (output["FacetEnabled"] !== undefined) {
        contents.FacetEnabled = output["FacetEnabled"] == "true";
    }
    if (output["SearchEnabled"] !== undefined) {
        contents.SearchEnabled = output["SearchEnabled"] == "true";
    }
    if (output["ReturnEnabled"] !== undefined) {
        contents.ReturnEnabled = output["ReturnEnabled"] == "true";
    }
    if (output["SortEnabled"] !== undefined) {
        contents.SortEnabled = output["SortEnabled"] == "true";
    }
    return contents;
};
var deserializeAws_queryInvalidTypeException = function (output, context) {
    var contents = {
        Code: undefined,
        Message: undefined,
    };
    if (output["Code"] !== undefined) {
        contents.Code = output["Code"];
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryLatLonOptions = function (output, context) {
    var contents = {
        DefaultValue: undefined,
        SourceField: undefined,
        FacetEnabled: undefined,
        SearchEnabled: undefined,
        ReturnEnabled: undefined,
        SortEnabled: undefined,
    };
    if (output["DefaultValue"] !== undefined) {
        contents.DefaultValue = output["DefaultValue"];
    }
    if (output["SourceField"] !== undefined) {
        contents.SourceField = output["SourceField"];
    }
    if (output["FacetEnabled"] !== undefined) {
        contents.FacetEnabled = output["FacetEnabled"] == "true";
    }
    if (output["SearchEnabled"] !== undefined) {
        contents.SearchEnabled = output["SearchEnabled"] == "true";
    }
    if (output["ReturnEnabled"] !== undefined) {
        contents.ReturnEnabled = output["ReturnEnabled"] == "true";
    }
    if (output["SortEnabled"] !== undefined) {
        contents.SortEnabled = output["SortEnabled"] == "true";
    }
    return contents;
};
var deserializeAws_queryLimitExceededException = function (output, context) {
    var contents = {
        Code: undefined,
        Message: undefined,
    };
    if (output["Code"] !== undefined) {
        contents.Code = output["Code"];
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryLimits = function (output, context) {
    var contents = {
        MaximumReplicationCount: undefined,
        MaximumPartitionCount: undefined,
    };
    if (output["MaximumReplicationCount"] !== undefined) {
        contents.MaximumReplicationCount = parseInt(output["MaximumReplicationCount"]);
    }
    if (output["MaximumPartitionCount"] !== undefined) {
        contents.MaximumPartitionCount = parseInt(output["MaximumPartitionCount"]);
    }
    return contents;
};
var deserializeAws_queryListDomainNamesResponse = function (output, context) {
    var contents = {
        DomainNames: undefined,
    };
    if (output.DomainNames === "") {
        contents.DomainNames = {};
    }
    if (output["DomainNames"] !== undefined && output["DomainNames"]["entry"] !== undefined) {
        contents.DomainNames = deserializeAws_queryDomainNameMap(__getArrayIfSingleItem(output["DomainNames"]["entry"]), context);
    }
    return contents;
};
var deserializeAws_queryLiteralArrayOptions = function (output, context) {
    var contents = {
        DefaultValue: undefined,
        SourceFields: undefined,
        FacetEnabled: undefined,
        SearchEnabled: undefined,
        ReturnEnabled: undefined,
    };
    if (output["DefaultValue"] !== undefined) {
        contents.DefaultValue = output["DefaultValue"];
    }
    if (output["SourceFields"] !== undefined) {
        contents.SourceFields = output["SourceFields"];
    }
    if (output["FacetEnabled"] !== undefined) {
        contents.FacetEnabled = output["FacetEnabled"] == "true";
    }
    if (output["SearchEnabled"] !== undefined) {
        contents.SearchEnabled = output["SearchEnabled"] == "true";
    }
    if (output["ReturnEnabled"] !== undefined) {
        contents.ReturnEnabled = output["ReturnEnabled"] == "true";
    }
    return contents;
};
var deserializeAws_queryLiteralOptions = function (output, context) {
    var contents = {
        DefaultValue: undefined,
        SourceField: undefined,
        FacetEnabled: undefined,
        SearchEnabled: undefined,
        ReturnEnabled: undefined,
        SortEnabled: undefined,
    };
    if (output["DefaultValue"] !== undefined) {
        contents.DefaultValue = output["DefaultValue"];
    }
    if (output["SourceField"] !== undefined) {
        contents.SourceField = output["SourceField"];
    }
    if (output["FacetEnabled"] !== undefined) {
        contents.FacetEnabled = output["FacetEnabled"] == "true";
    }
    if (output["SearchEnabled"] !== undefined) {
        contents.SearchEnabled = output["SearchEnabled"] == "true";
    }
    if (output["ReturnEnabled"] !== undefined) {
        contents.ReturnEnabled = output["ReturnEnabled"] == "true";
    }
    if (output["SortEnabled"] !== undefined) {
        contents.SortEnabled = output["SortEnabled"] == "true";
    }
    return contents;
};
var deserializeAws_queryOptionStatus = function (output, context) {
    var contents = {
        CreationDate: undefined,
        UpdateDate: undefined,
        UpdateVersion: undefined,
        State: undefined,
        PendingDeletion: undefined,
    };
    if (output["CreationDate"] !== undefined) {
        contents.CreationDate = new Date(output["CreationDate"]);
    }
    if (output["UpdateDate"] !== undefined) {
        contents.UpdateDate = new Date(output["UpdateDate"]);
    }
    if (output["UpdateVersion"] !== undefined) {
        contents.UpdateVersion = parseInt(output["UpdateVersion"]);
    }
    if (output["State"] !== undefined) {
        contents.State = output["State"];
    }
    if (output["PendingDeletion"] !== undefined) {
        contents.PendingDeletion = output["PendingDeletion"] == "true";
    }
    return contents;
};
var deserializeAws_queryResourceNotFoundException = function (output, context) {
    var contents = {
        Code: undefined,
        Message: undefined,
    };
    if (output["Code"] !== undefined) {
        contents.Code = output["Code"];
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryScalingParameters = function (output, context) {
    var contents = {
        DesiredInstanceType: undefined,
        DesiredReplicationCount: undefined,
        DesiredPartitionCount: undefined,
    };
    if (output["DesiredInstanceType"] !== undefined) {
        contents.DesiredInstanceType = output["DesiredInstanceType"];
    }
    if (output["DesiredReplicationCount"] !== undefined) {
        contents.DesiredReplicationCount = parseInt(output["DesiredReplicationCount"]);
    }
    if (output["DesiredPartitionCount"] !== undefined) {
        contents.DesiredPartitionCount = parseInt(output["DesiredPartitionCount"]);
    }
    return contents;
};
var deserializeAws_queryScalingParametersStatus = function (output, context) {
    var contents = {
        Options: undefined,
        Status: undefined,
    };
    if (output["Options"] !== undefined) {
        contents.Options = deserializeAws_queryScalingParameters(output["Options"], context);
    }
    if (output["Status"] !== undefined) {
        contents.Status = deserializeAws_queryOptionStatus(output["Status"], context);
    }
    return contents;
};
var deserializeAws_queryServiceEndpoint = function (output, context) {
    var contents = {
        Endpoint: undefined,
    };
    if (output["Endpoint"] !== undefined) {
        contents.Endpoint = output["Endpoint"];
    }
    return contents;
};
var deserializeAws_querySuggester = function (output, context) {
    var contents = {
        SuggesterName: undefined,
        DocumentSuggesterOptions: undefined,
    };
    if (output["SuggesterName"] !== undefined) {
        contents.SuggesterName = output["SuggesterName"];
    }
    if (output["DocumentSuggesterOptions"] !== undefined) {
        contents.DocumentSuggesterOptions = deserializeAws_queryDocumentSuggesterOptions(output["DocumentSuggesterOptions"], context);
    }
    return contents;
};
var deserializeAws_querySuggesterStatus = function (output, context) {
    var contents = {
        Options: undefined,
        Status: undefined,
    };
    if (output["Options"] !== undefined) {
        contents.Options = deserializeAws_querySuggester(output["Options"], context);
    }
    if (output["Status"] !== undefined) {
        contents.Status = deserializeAws_queryOptionStatus(output["Status"], context);
    }
    return contents;
};
var deserializeAws_querySuggesterStatusList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_querySuggesterStatus(entry, context);
    });
};
var deserializeAws_queryTextArrayOptions = function (output, context) {
    var contents = {
        DefaultValue: undefined,
        SourceFields: undefined,
        ReturnEnabled: undefined,
        HighlightEnabled: undefined,
        AnalysisScheme: undefined,
    };
    if (output["DefaultValue"] !== undefined) {
        contents.DefaultValue = output["DefaultValue"];
    }
    if (output["SourceFields"] !== undefined) {
        contents.SourceFields = output["SourceFields"];
    }
    if (output["ReturnEnabled"] !== undefined) {
        contents.ReturnEnabled = output["ReturnEnabled"] == "true";
    }
    if (output["HighlightEnabled"] !== undefined) {
        contents.HighlightEnabled = output["HighlightEnabled"] == "true";
    }
    if (output["AnalysisScheme"] !== undefined) {
        contents.AnalysisScheme = output["AnalysisScheme"];
    }
    return contents;
};
var deserializeAws_queryTextOptions = function (output, context) {
    var contents = {
        DefaultValue: undefined,
        SourceField: undefined,
        ReturnEnabled: undefined,
        SortEnabled: undefined,
        HighlightEnabled: undefined,
        AnalysisScheme: undefined,
    };
    if (output["DefaultValue"] !== undefined) {
        contents.DefaultValue = output["DefaultValue"];
    }
    if (output["SourceField"] !== undefined) {
        contents.SourceField = output["SourceField"];
    }
    if (output["ReturnEnabled"] !== undefined) {
        contents.ReturnEnabled = output["ReturnEnabled"] == "true";
    }
    if (output["SortEnabled"] !== undefined) {
        contents.SortEnabled = output["SortEnabled"] == "true";
    }
    if (output["HighlightEnabled"] !== undefined) {
        contents.HighlightEnabled = output["HighlightEnabled"] == "true";
    }
    if (output["AnalysisScheme"] !== undefined) {
        contents.AnalysisScheme = output["AnalysisScheme"];
    }
    return contents;
};
var deserializeAws_queryUpdateAvailabilityOptionsResponse = function (output, context) {
    var contents = {
        AvailabilityOptions: undefined,
    };
    if (output["AvailabilityOptions"] !== undefined) {
        contents.AvailabilityOptions = deserializeAws_queryAvailabilityOptionsStatus(output["AvailabilityOptions"], context);
    }
    return contents;
};
var deserializeAws_queryUpdateDomainEndpointOptionsResponse = function (output, context) {
    var contents = {
        DomainEndpointOptions: undefined,
    };
    if (output["DomainEndpointOptions"] !== undefined) {
        contents.DomainEndpointOptions = deserializeAws_queryDomainEndpointOptionsStatus(output["DomainEndpointOptions"], context);
    }
    return contents;
};
var deserializeAws_queryUpdateScalingParametersResponse = function (output, context) {
    var contents = {
        ScalingParameters: undefined,
    };
    if (output["ScalingParameters"] !== undefined) {
        contents.ScalingParameters = deserializeAws_queryScalingParametersStatus(output["ScalingParameters"], context);
    }
    return contents;
};
var deserializeAws_queryUpdateServiceAccessPoliciesResponse = function (output, context) {
    var contents = {
        AccessPolicies: undefined,
    };
    if (output["AccessPolicies"] !== undefined) {
        contents.AccessPolicies = deserializeAws_queryAccessPoliciesStatus(output["AccessPolicies"], context);
    }
    return contents;
};
var deserializeAws_queryValidationException = function (output, context) {
    var contents = {
        Code: undefined,
        Message: undefined,
    };
    if (output["Code"] !== undefined) {
        contents.Code = output["Code"];
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
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
            var parsedObj = xmlParse(encoded, {
                attributeNamePrefix: "",
                ignoreAttributes: false,
                parseNodeValue: false,
                trimValues: false,
                tagValueProcessor: function (val, tagName) { return (val.trim() === "" ? "" : decodeHTML(val)); },
            });
            var textNodeName = "#text";
            var key = Object.keys(parsedObj)[0];
            var parsedObjToReturn = parsedObj[key];
            if (parsedObjToReturn[textNodeName]) {
                parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
                delete parsedObjToReturn[textNodeName];
            }
            return __getValueFromTextNode(parsedObjToReturn);
        }
        return {};
    });
};
var buildFormUrlencodedString = function (formEntries) {
    return Object.entries(formEntries)
        .map(function (_a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        return __extendedEncodeURIComponent(key) + "=" + __extendedEncodeURIComponent(value);
    })
        .join("&");
};
var loadQueryErrorCode = function (output, data) {
    if (data.Error.Code !== undefined) {
        return data.Error.Code;
    }
    if (output.statusCode == 404) {
        return "NotFound";
    }
    return "";
};
//# sourceMappingURL=Aws_query.js.map