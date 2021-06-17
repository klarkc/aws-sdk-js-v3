import { __assign, __awaiter, __generator, __read } from "tslib";
import { DocumentAttributeValue, } from "../models/models_0";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { v4 as generateIdempotencyToken } from "uuid";
export var serializeAws_json1_1BatchDeleteDocumentCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSKendraFrontendService.BatchDeleteDocument",
        };
        body = JSON.stringify(serializeAws_json1_1BatchDeleteDocumentRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1BatchPutDocumentCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSKendraFrontendService.BatchPutDocument",
        };
        body = JSON.stringify(serializeAws_json1_1BatchPutDocumentRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ClearQuerySuggestionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSKendraFrontendService.ClearQuerySuggestions",
        };
        body = JSON.stringify(serializeAws_json1_1ClearQuerySuggestionsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateDataSourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSKendraFrontendService.CreateDataSource",
        };
        body = JSON.stringify(serializeAws_json1_1CreateDataSourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateFaqCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSKendraFrontendService.CreateFaq",
        };
        body = JSON.stringify(serializeAws_json1_1CreateFaqRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateIndexCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSKendraFrontendService.CreateIndex",
        };
        body = JSON.stringify(serializeAws_json1_1CreateIndexRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateQuerySuggestionsBlockListCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSKendraFrontendService.CreateQuerySuggestionsBlockList",
        };
        body = JSON.stringify(serializeAws_json1_1CreateQuerySuggestionsBlockListRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateThesaurusCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSKendraFrontendService.CreateThesaurus",
        };
        body = JSON.stringify(serializeAws_json1_1CreateThesaurusRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteDataSourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSKendraFrontendService.DeleteDataSource",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteDataSourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteFaqCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSKendraFrontendService.DeleteFaq",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteFaqRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteIndexCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSKendraFrontendService.DeleteIndex",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteIndexRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteQuerySuggestionsBlockListCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSKendraFrontendService.DeleteQuerySuggestionsBlockList",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteQuerySuggestionsBlockListRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteThesaurusCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSKendraFrontendService.DeleteThesaurus",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteThesaurusRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeDataSourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSKendraFrontendService.DescribeDataSource",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeDataSourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeFaqCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSKendraFrontendService.DescribeFaq",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeFaqRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeIndexCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSKendraFrontendService.DescribeIndex",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeIndexRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeQuerySuggestionsBlockListCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSKendraFrontendService.DescribeQuerySuggestionsBlockList",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeQuerySuggestionsBlockListRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeQuerySuggestionsConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSKendraFrontendService.DescribeQuerySuggestionsConfig",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeQuerySuggestionsConfigRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeThesaurusCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSKendraFrontendService.DescribeThesaurus",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeThesaurusRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetQuerySuggestionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSKendraFrontendService.GetQuerySuggestions",
        };
        body = JSON.stringify(serializeAws_json1_1GetQuerySuggestionsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListDataSourcesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSKendraFrontendService.ListDataSources",
        };
        body = JSON.stringify(serializeAws_json1_1ListDataSourcesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListDataSourceSyncJobsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSKendraFrontendService.ListDataSourceSyncJobs",
        };
        body = JSON.stringify(serializeAws_json1_1ListDataSourceSyncJobsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListFaqsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSKendraFrontendService.ListFaqs",
        };
        body = JSON.stringify(serializeAws_json1_1ListFaqsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListIndicesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSKendraFrontendService.ListIndices",
        };
        body = JSON.stringify(serializeAws_json1_1ListIndicesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListQuerySuggestionsBlockListsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSKendraFrontendService.ListQuerySuggestionsBlockLists",
        };
        body = JSON.stringify(serializeAws_json1_1ListQuerySuggestionsBlockListsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListTagsForResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSKendraFrontendService.ListTagsForResource",
        };
        body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListThesauriCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSKendraFrontendService.ListThesauri",
        };
        body = JSON.stringify(serializeAws_json1_1ListThesauriRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1QueryCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSKendraFrontendService.Query",
        };
        body = JSON.stringify(serializeAws_json1_1QueryRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StartDataSourceSyncJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSKendraFrontendService.StartDataSourceSyncJob",
        };
        body = JSON.stringify(serializeAws_json1_1StartDataSourceSyncJobRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StopDataSourceSyncJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSKendraFrontendService.StopDataSourceSyncJob",
        };
        body = JSON.stringify(serializeAws_json1_1StopDataSourceSyncJobRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1SubmitFeedbackCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSKendraFrontendService.SubmitFeedback",
        };
        body = JSON.stringify(serializeAws_json1_1SubmitFeedbackRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1TagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSKendraFrontendService.TagResource",
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
            "x-amz-target": "AWSKendraFrontendService.UntagResource",
        };
        body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateDataSourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSKendraFrontendService.UpdateDataSource",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateDataSourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateIndexCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSKendraFrontendService.UpdateIndex",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateIndexRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateQuerySuggestionsBlockListCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSKendraFrontendService.UpdateQuerySuggestionsBlockList",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateQuerySuggestionsBlockListRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateQuerySuggestionsConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSKendraFrontendService.UpdateQuerySuggestionsConfig",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateQuerySuggestionsConfigRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateThesaurusCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSKendraFrontendService.UpdateThesaurus",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateThesaurusRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_json1_1BatchDeleteDocumentCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1BatchDeleteDocumentCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1BatchDeleteDocumentResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1BatchDeleteDocumentCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.kendra#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.kendra#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.kendra#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kendra#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.kendra#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.kendra#ValidationException": return [3 /*break*/, 12];
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
                return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1BatchPutDocumentCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1BatchPutDocumentCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1BatchPutDocumentResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1BatchPutDocumentCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.kendra#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.kendra#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.kendra#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kendra#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.kendra#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.kendra#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.kendra#ValidationException": return [3 /*break*/, 14];
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
                return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ClearQuerySuggestionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ClearQuerySuggestionsCommandError(output, context)];
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
var deserializeAws_json1_1ClearQuerySuggestionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.kendra#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.kendra#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.kendra#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kendra#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.kendra#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.kendra#ValidationException": return [3 /*break*/, 12];
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
                return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateDataSourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateDataSourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateDataSourceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateDataSourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                _a = [__assign({}, output)];
                _l = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.kendra#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.kendra#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.kendra#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceAlreadyExistException": return [3 /*break*/, 8];
                    case "com.amazonaws.kendra#ResourceAlreadyExistException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.kendra#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 12];
                    case "com.amazonaws.kendra#ServiceQuotaExceededException": return [3 /*break*/, 12];
                    case "ThrottlingException": return [3 /*break*/, 14];
                    case "com.amazonaws.kendra#ThrottlingException": return [3 /*break*/, 14];
                    case "ValidationException": return [3 /*break*/, 16];
                    case "com.amazonaws.kendra#ValidationException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceAlreadyExistExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 18:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _m.label = 19;
            case 19:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateFaqCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateFaqCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateFaqResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateFaqCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.kendra#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.kendra#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.kendra#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kendra#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.kendra#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.kendra#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.kendra#ValidationException": return [3 /*break*/, 14];
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
                return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateIndexCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateIndexCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateIndexResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateIndexCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.kendra#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.kendra#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.kendra#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceAlreadyExistException": return [3 /*break*/, 8];
                    case "com.amazonaws.kendra#ResourceAlreadyExistException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.kendra#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.kendra#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.kendra#ValidationException": return [3 /*break*/, 14];
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
                return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceAlreadyExistExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateQuerySuggestionsBlockListCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateQuerySuggestionsBlockListCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateQuerySuggestionsBlockListResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateQuerySuggestionsBlockListCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.kendra#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.kendra#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.kendra#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kendra#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.kendra#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.kendra#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.kendra#ValidationException": return [3 /*break*/, 14];
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
                return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateThesaurusCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateThesaurusCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateThesaurusResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateThesaurusCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.kendra#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.kendra#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.kendra#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kendra#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.kendra#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.kendra#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.kendra#ValidationException": return [3 /*break*/, 14];
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
                return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteDataSourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteDataSourceCommandError(output, context)];
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
var deserializeAws_json1_1DeleteDataSourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.kendra#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.kendra#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.kendra#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kendra#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.kendra#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.kendra#ValidationException": return [3 /*break*/, 12];
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
                return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteFaqCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteFaqCommandError(output, context)];
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
var deserializeAws_json1_1DeleteFaqCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.kendra#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.kendra#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.kendra#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kendra#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.kendra#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.kendra#ValidationException": return [3 /*break*/, 12];
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
                return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteIndexCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteIndexCommandError(output, context)];
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
var deserializeAws_json1_1DeleteIndexCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.kendra#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.kendra#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.kendra#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kendra#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.kendra#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.kendra#ValidationException": return [3 /*break*/, 12];
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
                return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteQuerySuggestionsBlockListCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteQuerySuggestionsBlockListCommandError(output, context)];
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
var deserializeAws_json1_1DeleteQuerySuggestionsBlockListCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.kendra#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.kendra#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.kendra#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kendra#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.kendra#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.kendra#ValidationException": return [3 /*break*/, 12];
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
                return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteThesaurusCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteThesaurusCommandError(output, context)];
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
var deserializeAws_json1_1DeleteThesaurusCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.kendra#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.kendra#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.kendra#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kendra#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.kendra#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.kendra#ValidationException": return [3 /*break*/, 12];
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
                return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeDataSourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeDataSourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeDataSourceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeDataSourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.kendra#AccessDeniedException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.kendra#InternalServerException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.kendra#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.kendra#ThrottlingException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.kendra#ValidationException": return [3 /*break*/, 10];
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
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeFaqCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeFaqCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeFaqResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeFaqCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.kendra#AccessDeniedException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.kendra#InternalServerException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.kendra#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.kendra#ThrottlingException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.kendra#ValidationException": return [3 /*break*/, 10];
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
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeIndexCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeIndexCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeIndexResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeIndexCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.kendra#AccessDeniedException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.kendra#InternalServerException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.kendra#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.kendra#ThrottlingException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.kendra#ValidationException": return [3 /*break*/, 10];
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
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeQuerySuggestionsBlockListCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeQuerySuggestionsBlockListCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeQuerySuggestionsBlockListResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeQuerySuggestionsBlockListCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.kendra#AccessDeniedException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.kendra#InternalServerException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.kendra#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.kendra#ThrottlingException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.kendra#ValidationException": return [3 /*break*/, 10];
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
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeQuerySuggestionsConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeQuerySuggestionsConfigCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeQuerySuggestionsConfigResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeQuerySuggestionsConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.kendra#AccessDeniedException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.kendra#InternalServerException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.kendra#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.kendra#ThrottlingException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.kendra#ValidationException": return [3 /*break*/, 10];
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
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeThesaurusCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeThesaurusCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeThesaurusResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeThesaurusCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.kendra#AccessDeniedException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.kendra#InternalServerException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.kendra#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.kendra#ThrottlingException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.kendra#ValidationException": return [3 /*break*/, 10];
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
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetQuerySuggestionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetQuerySuggestionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetQuerySuggestionsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetQuerySuggestionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.kendra#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.kendra#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.kendra#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kendra#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.kendra#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.kendra#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.kendra#ValidationException": return [3 /*break*/, 14];
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
                return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListDataSourcesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListDataSourcesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListDataSourcesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListDataSourcesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.kendra#AccessDeniedException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.kendra#InternalServerException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.kendra#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.kendra#ThrottlingException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.kendra#ValidationException": return [3 /*break*/, 10];
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
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListDataSourceSyncJobsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListDataSourceSyncJobsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListDataSourceSyncJobsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListDataSourceSyncJobsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.kendra#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.kendra#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.kendra#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kendra#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.kendra#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.kendra#ValidationException": return [3 /*break*/, 12];
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
                return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListFaqsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListFaqsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListFaqsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListFaqsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.kendra#AccessDeniedException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.kendra#InternalServerException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.kendra#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.kendra#ThrottlingException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.kendra#ValidationException": return [3 /*break*/, 10];
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
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListIndicesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListIndicesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListIndicesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListIndicesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.kendra#AccessDeniedException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.kendra#InternalServerException": return [3 /*break*/, 4];
                    case "ThrottlingException": return [3 /*break*/, 6];
                    case "com.amazonaws.kendra#ThrottlingException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.kendra#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListQuerySuggestionsBlockListsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListQuerySuggestionsBlockListsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListQuerySuggestionsBlockListsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListQuerySuggestionsBlockListsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.kendra#AccessDeniedException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.kendra#InternalServerException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.kendra#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.kendra#ThrottlingException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.kendra#ValidationException": return [3 /*break*/, 10];
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
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.kendra#AccessDeniedException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.kendra#InternalServerException": return [3 /*break*/, 4];
                    case "ResourceUnavailableException": return [3 /*break*/, 6];
                    case "com.amazonaws.kendra#ResourceUnavailableException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.kendra#ThrottlingException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.kendra#ValidationException": return [3 /*break*/, 10];
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
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListThesauriCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListThesauriCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListThesauriResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListThesauriCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.kendra#AccessDeniedException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.kendra#InternalServerException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.kendra#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.kendra#ThrottlingException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.kendra#ValidationException": return [3 /*break*/, 10];
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
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1QueryCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1QueryCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1QueryResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1QueryCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.kendra#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.kendra#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.kendra#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kendra#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.kendra#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.kendra#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.kendra#ValidationException": return [3 /*break*/, 14];
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
                return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1StartDataSourceSyncJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StartDataSourceSyncJobCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1StartDataSourceSyncJobResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1StartDataSourceSyncJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.kendra#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.kendra#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.kendra#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.kendra#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.kendra#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.kendra#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.kendra#ValidationException": return [3 /*break*/, 14];
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
                return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1StopDataSourceSyncJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StopDataSourceSyncJobCommandError(output, context)];
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
var deserializeAws_json1_1StopDataSourceSyncJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.kendra#AccessDeniedException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.kendra#InternalServerException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.kendra#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.kendra#ThrottlingException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.kendra#ValidationException": return [3 /*break*/, 10];
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
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1SubmitFeedbackCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1SubmitFeedbackCommandError(output, context)];
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
var deserializeAws_json1_1SubmitFeedbackCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.kendra#AccessDeniedException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.kendra#InternalServerException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.kendra#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ResourceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.kendra#ResourceUnavailableException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.kendra#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.kendra#ValidationException": return [3 /*break*/, 12];
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
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.kendra#AccessDeniedException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.kendra#InternalServerException": return [3 /*break*/, 4];
                    case "ResourceUnavailableException": return [3 /*break*/, 6];
                    case "com.amazonaws.kendra#ResourceUnavailableException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.kendra#ThrottlingException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.kendra#ValidationException": return [3 /*break*/, 10];
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
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.kendra#AccessDeniedException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.kendra#InternalServerException": return [3 /*break*/, 4];
                    case "ResourceUnavailableException": return [3 /*break*/, 6];
                    case "com.amazonaws.kendra#ResourceUnavailableException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.kendra#ThrottlingException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.kendra#ValidationException": return [3 /*break*/, 10];
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
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateDataSourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateDataSourceCommandError(output, context)];
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
var deserializeAws_json1_1UpdateDataSourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.kendra#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.kendra#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.kendra#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kendra#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.kendra#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.kendra#ValidationException": return [3 /*break*/, 12];
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
                return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateIndexCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateIndexCommandError(output, context)];
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
var deserializeAws_json1_1UpdateIndexCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.kendra#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.kendra#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.kendra#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kendra#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.kendra#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.kendra#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.kendra#ValidationException": return [3 /*break*/, 14];
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
                return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateQuerySuggestionsBlockListCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateQuerySuggestionsBlockListCommandError(output, context)];
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
var deserializeAws_json1_1UpdateQuerySuggestionsBlockListCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.kendra#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.kendra#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.kendra#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kendra#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.kendra#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.kendra#ValidationException": return [3 /*break*/, 12];
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
                return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateQuerySuggestionsConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateQuerySuggestionsConfigCommandError(output, context)];
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
var deserializeAws_json1_1UpdateQuerySuggestionsConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.kendra#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.kendra#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.kendra#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kendra#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.kendra#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.kendra#ValidationException": return [3 /*break*/, 12];
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
                return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateThesaurusCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateThesaurusCommandError(output, context)];
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
var deserializeAws_json1_1UpdateThesaurusCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.kendra#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.kendra#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.kendra#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kendra#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.kendra#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.kendra#ValidationException": return [3 /*break*/, 12];
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
                return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
var deserializeAws_json1_1AccessDeniedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1AccessDeniedException(body, context);
        contents = __assign({ name: "AccessDeniedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ConflictExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ConflictException(body, context);
        contents = __assign({ name: "ConflictException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InternalServerExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InternalServerException(body, context);
        contents = __assign({ name: "InternalServerException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ResourceAlreadyExistExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ResourceAlreadyExistException(body, context);
        contents = __assign({ name: "ResourceAlreadyExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ResourceInUseExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ResourceInUseException(body, context);
        contents = __assign({ name: "ResourceInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_json1_1ResourceUnavailableExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ResourceUnavailableException(body, context);
        contents = __assign({ name: "ResourceUnavailableException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ServiceQuotaExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ServiceQuotaExceededException(body, context);
        contents = __assign({ name: "ServiceQuotaExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ThrottlingExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ThrottlingException(body, context);
        contents = __assign({ name: "ThrottlingException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ValidationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ValidationException(body, context);
        contents = __assign({ name: "ValidationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_json1_1AccessControlListConfiguration = function (input, context) {
    return __assign({}, (input.KeyPath !== undefined && input.KeyPath !== null && { KeyPath: input.KeyPath }));
};
var serializeAws_json1_1AclConfiguration = function (input, context) {
    return __assign({}, (input.AllowedGroupsColumnName !== undefined &&
        input.AllowedGroupsColumnName !== null && { AllowedGroupsColumnName: input.AllowedGroupsColumnName }));
};
var serializeAws_json1_1AttributeFilter = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AndAllFilters !== undefined &&
        input.AndAllFilters !== null && {
        AndAllFilters: serializeAws_json1_1AttributeFilterList(input.AndAllFilters, context),
    })), (input.ContainsAll !== undefined &&
        input.ContainsAll !== null && { ContainsAll: serializeAws_json1_1DocumentAttribute(input.ContainsAll, context) })), (input.ContainsAny !== undefined &&
        input.ContainsAny !== null && { ContainsAny: serializeAws_json1_1DocumentAttribute(input.ContainsAny, context) })), (input.EqualsTo !== undefined &&
        input.EqualsTo !== null && { EqualsTo: serializeAws_json1_1DocumentAttribute(input.EqualsTo, context) })), (input.GreaterThan !== undefined &&
        input.GreaterThan !== null && { GreaterThan: serializeAws_json1_1DocumentAttribute(input.GreaterThan, context) })), (input.GreaterThanOrEquals !== undefined &&
        input.GreaterThanOrEquals !== null && {
        GreaterThanOrEquals: serializeAws_json1_1DocumentAttribute(input.GreaterThanOrEquals, context),
    })), (input.LessThan !== undefined &&
        input.LessThan !== null && { LessThan: serializeAws_json1_1DocumentAttribute(input.LessThan, context) })), (input.LessThanOrEquals !== undefined &&
        input.LessThanOrEquals !== null && {
        LessThanOrEquals: serializeAws_json1_1DocumentAttribute(input.LessThanOrEquals, context),
    })), (input.NotFilter !== undefined &&
        input.NotFilter !== null && { NotFilter: serializeAws_json1_1AttributeFilter(input.NotFilter, context) })), (input.OrAllFilters !== undefined &&
        input.OrAllFilters !== null && {
        OrAllFilters: serializeAws_json1_1AttributeFilterList(input.OrAllFilters, context),
    }));
};
var serializeAws_json1_1AttributeFilterList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1AttributeFilter(entry, context);
    });
};
var serializeAws_json1_1BatchDeleteDocumentRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.DataSourceSyncJobMetricTarget !== undefined &&
        input.DataSourceSyncJobMetricTarget !== null && {
        DataSourceSyncJobMetricTarget: serializeAws_json1_1DataSourceSyncJobMetricTarget(input.DataSourceSyncJobMetricTarget, context),
    })), (input.DocumentIdList !== undefined &&
        input.DocumentIdList !== null && {
        DocumentIdList: serializeAws_json1_1DocumentIdList(input.DocumentIdList, context),
    })), (input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }));
};
var serializeAws_json1_1BatchPutDocumentRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.Documents !== undefined &&
        input.Documents !== null && { Documents: serializeAws_json1_1DocumentList(input.Documents, context) })), (input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId })), (input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }));
};
var serializeAws_json1_1CapacityUnitsConfiguration = function (input, context) {
    return __assign(__assign({}, (input.QueryCapacityUnits !== undefined &&
        input.QueryCapacityUnits !== null && { QueryCapacityUnits: input.QueryCapacityUnits })), (input.StorageCapacityUnits !== undefined &&
        input.StorageCapacityUnits !== null && { StorageCapacityUnits: input.StorageCapacityUnits }));
};
var serializeAws_json1_1ChangeDetectingColumns = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ClearQuerySuggestionsRequest = function (input, context) {
    return __assign({}, (input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }));
};
var serializeAws_json1_1ClickFeedback = function (input, context) {
    return __assign(__assign({}, (input.ClickTime !== undefined &&
        input.ClickTime !== null && { ClickTime: Math.round(input.ClickTime.getTime() / 1000) })), (input.ResultId !== undefined && input.ResultId !== null && { ResultId: input.ResultId }));
};
var serializeAws_json1_1ClickFeedbackList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ClickFeedback(entry, context);
    });
};
var serializeAws_json1_1ColumnConfiguration = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.ChangeDetectingColumns !== undefined &&
        input.ChangeDetectingColumns !== null && {
        ChangeDetectingColumns: serializeAws_json1_1ChangeDetectingColumns(input.ChangeDetectingColumns, context),
    })), (input.DocumentDataColumnName !== undefined &&
        input.DocumentDataColumnName !== null && { DocumentDataColumnName: input.DocumentDataColumnName })), (input.DocumentIdColumnName !== undefined &&
        input.DocumentIdColumnName !== null && { DocumentIdColumnName: input.DocumentIdColumnName })), (input.DocumentTitleColumnName !== undefined &&
        input.DocumentTitleColumnName !== null && { DocumentTitleColumnName: input.DocumentTitleColumnName })), (input.FieldMappings !== undefined &&
        input.FieldMappings !== null && {
        FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }));
};
var serializeAws_json1_1ConfluenceAttachmentConfiguration = function (input, context) {
    return __assign(__assign({}, (input.AttachmentFieldMappings !== undefined &&
        input.AttachmentFieldMappings !== null && {
        AttachmentFieldMappings: serializeAws_json1_1ConfluenceAttachmentFieldMappingsList(input.AttachmentFieldMappings, context),
    })), (input.CrawlAttachments !== undefined &&
        input.CrawlAttachments !== null && { CrawlAttachments: input.CrawlAttachments }));
};
var serializeAws_json1_1ConfluenceAttachmentFieldMappingsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ConfluenceAttachmentToIndexFieldMapping(entry, context);
    });
};
var serializeAws_json1_1ConfluenceAttachmentToIndexFieldMapping = function (input, context) {
    return __assign(__assign(__assign({}, (input.DataSourceFieldName !== undefined &&
        input.DataSourceFieldName !== null && { DataSourceFieldName: input.DataSourceFieldName })), (input.DateFieldFormat !== undefined &&
        input.DateFieldFormat !== null && { DateFieldFormat: input.DateFieldFormat })), (input.IndexFieldName !== undefined &&
        input.IndexFieldName !== null && { IndexFieldName: input.IndexFieldName }));
};
var serializeAws_json1_1ConfluenceBlogConfiguration = function (input, context) {
    return __assign({}, (input.BlogFieldMappings !== undefined &&
        input.BlogFieldMappings !== null && {
        BlogFieldMappings: serializeAws_json1_1ConfluenceBlogFieldMappingsList(input.BlogFieldMappings, context),
    }));
};
var serializeAws_json1_1ConfluenceBlogFieldMappingsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ConfluenceBlogToIndexFieldMapping(entry, context);
    });
};
var serializeAws_json1_1ConfluenceBlogToIndexFieldMapping = function (input, context) {
    return __assign(__assign(__assign({}, (input.DataSourceFieldName !== undefined &&
        input.DataSourceFieldName !== null && { DataSourceFieldName: input.DataSourceFieldName })), (input.DateFieldFormat !== undefined &&
        input.DateFieldFormat !== null && { DateFieldFormat: input.DateFieldFormat })), (input.IndexFieldName !== undefined &&
        input.IndexFieldName !== null && { IndexFieldName: input.IndexFieldName }));
};
var serializeAws_json1_1ConfluenceConfiguration = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AttachmentConfiguration !== undefined &&
        input.AttachmentConfiguration !== null && {
        AttachmentConfiguration: serializeAws_json1_1ConfluenceAttachmentConfiguration(input.AttachmentConfiguration, context),
    })), (input.BlogConfiguration !== undefined &&
        input.BlogConfiguration !== null && {
        BlogConfiguration: serializeAws_json1_1ConfluenceBlogConfiguration(input.BlogConfiguration, context),
    })), (input.ExclusionPatterns !== undefined &&
        input.ExclusionPatterns !== null && {
        ExclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
    })), (input.InclusionPatterns !== undefined &&
        input.InclusionPatterns !== null && {
        InclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
    })), (input.PageConfiguration !== undefined &&
        input.PageConfiguration !== null && {
        PageConfiguration: serializeAws_json1_1ConfluencePageConfiguration(input.PageConfiguration, context),
    })), (input.SecretArn !== undefined && input.SecretArn !== null && { SecretArn: input.SecretArn })), (input.ServerUrl !== undefined && input.ServerUrl !== null && { ServerUrl: input.ServerUrl })), (input.SpaceConfiguration !== undefined &&
        input.SpaceConfiguration !== null && {
        SpaceConfiguration: serializeAws_json1_1ConfluenceSpaceConfiguration(input.SpaceConfiguration, context),
    })), (input.Version !== undefined && input.Version !== null && { Version: input.Version })), (input.VpcConfiguration !== undefined &&
        input.VpcConfiguration !== null && {
        VpcConfiguration: serializeAws_json1_1DataSourceVpcConfiguration(input.VpcConfiguration, context),
    }));
};
var serializeAws_json1_1ConfluencePageConfiguration = function (input, context) {
    return __assign({}, (input.PageFieldMappings !== undefined &&
        input.PageFieldMappings !== null && {
        PageFieldMappings: serializeAws_json1_1ConfluencePageFieldMappingsList(input.PageFieldMappings, context),
    }));
};
var serializeAws_json1_1ConfluencePageFieldMappingsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ConfluencePageToIndexFieldMapping(entry, context);
    });
};
var serializeAws_json1_1ConfluencePageToIndexFieldMapping = function (input, context) {
    return __assign(__assign(__assign({}, (input.DataSourceFieldName !== undefined &&
        input.DataSourceFieldName !== null && { DataSourceFieldName: input.DataSourceFieldName })), (input.DateFieldFormat !== undefined &&
        input.DateFieldFormat !== null && { DateFieldFormat: input.DateFieldFormat })), (input.IndexFieldName !== undefined &&
        input.IndexFieldName !== null && { IndexFieldName: input.IndexFieldName }));
};
var serializeAws_json1_1ConfluenceSpaceConfiguration = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.CrawlArchivedSpaces !== undefined &&
        input.CrawlArchivedSpaces !== null && { CrawlArchivedSpaces: input.CrawlArchivedSpaces })), (input.CrawlPersonalSpaces !== undefined &&
        input.CrawlPersonalSpaces !== null && { CrawlPersonalSpaces: input.CrawlPersonalSpaces })), (input.ExcludeSpaces !== undefined &&
        input.ExcludeSpaces !== null && {
        ExcludeSpaces: serializeAws_json1_1ConfluenceSpaceList(input.ExcludeSpaces, context),
    })), (input.IncludeSpaces !== undefined &&
        input.IncludeSpaces !== null && {
        IncludeSpaces: serializeAws_json1_1ConfluenceSpaceList(input.IncludeSpaces, context),
    })), (input.SpaceFieldMappings !== undefined &&
        input.SpaceFieldMappings !== null && {
        SpaceFieldMappings: serializeAws_json1_1ConfluenceSpaceFieldMappingsList(input.SpaceFieldMappings, context),
    }));
};
var serializeAws_json1_1ConfluenceSpaceFieldMappingsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ConfluenceSpaceToIndexFieldMapping(entry, context);
    });
};
var serializeAws_json1_1ConfluenceSpaceList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ConfluenceSpaceToIndexFieldMapping = function (input, context) {
    return __assign(__assign(__assign({}, (input.DataSourceFieldName !== undefined &&
        input.DataSourceFieldName !== null && { DataSourceFieldName: input.DataSourceFieldName })), (input.DateFieldFormat !== undefined &&
        input.DateFieldFormat !== null && { DateFieldFormat: input.DateFieldFormat })), (input.IndexFieldName !== undefined &&
        input.IndexFieldName !== null && { IndexFieldName: input.IndexFieldName }));
};
var serializeAws_json1_1ConnectionConfiguration = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.DatabaseHost !== undefined && input.DatabaseHost !== null && { DatabaseHost: input.DatabaseHost })), (input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName })), (input.DatabasePort !== undefined && input.DatabasePort !== null && { DatabasePort: input.DatabasePort })), (input.SecretArn !== undefined && input.SecretArn !== null && { SecretArn: input.SecretArn })), (input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }));
};
var serializeAws_json1_1CreateDataSourceRequest = function (input, context) {
    var _a;
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({ ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken() }, (input.Configuration !== undefined &&
        input.Configuration !== null && {
        Configuration: serializeAws_json1_1DataSourceConfiguration(input.Configuration, context),
    })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn })), (input.Schedule !== undefined && input.Schedule !== null && { Schedule: input.Schedule })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) })), (input.Type !== undefined && input.Type !== null && { Type: input.Type }));
};
var serializeAws_json1_1CreateFaqRequest = function (input, context) {
    var _a;
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({ ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken() }, (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.FileFormat !== undefined && input.FileFormat !== null && { FileFormat: input.FileFormat })), (input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn })), (input.S3Path !== undefined &&
        input.S3Path !== null && { S3Path: serializeAws_json1_1S3Path(input.S3Path, context) })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }));
};
var serializeAws_json1_1CreateIndexRequest = function (input, context) {
    var _a;
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({ ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken() }, (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.Edition !== undefined && input.Edition !== null && { Edition: input.Edition })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn })), (input.ServerSideEncryptionConfiguration !== undefined &&
        input.ServerSideEncryptionConfiguration !== null && {
        ServerSideEncryptionConfiguration: serializeAws_json1_1ServerSideEncryptionConfiguration(input.ServerSideEncryptionConfiguration, context),
    })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) })), (input.UserContextPolicy !== undefined &&
        input.UserContextPolicy !== null && { UserContextPolicy: input.UserContextPolicy })), (input.UserTokenConfigurations !== undefined &&
        input.UserTokenConfigurations !== null && {
        UserTokenConfigurations: serializeAws_json1_1UserTokenConfigurationList(input.UserTokenConfigurations, context),
    }));
};
var serializeAws_json1_1CreateQuerySuggestionsBlockListRequest = function (input, context) {
    var _a;
    return __assign(__assign(__assign(__assign(__assign(__assign({ ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken() }, (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn })), (input.SourceS3Path !== undefined &&
        input.SourceS3Path !== null && { SourceS3Path: serializeAws_json1_1S3Path(input.SourceS3Path, context) })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }));
};
var serializeAws_json1_1CreateThesaurusRequest = function (input, context) {
    var _a;
    return __assign(__assign(__assign(__assign(__assign(__assign({ ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken() }, (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn })), (input.SourceS3Path !== undefined &&
        input.SourceS3Path !== null && { SourceS3Path: serializeAws_json1_1S3Path(input.SourceS3Path, context) })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }));
};
var serializeAws_json1_1DatabaseConfiguration = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.AclConfiguration !== undefined &&
        input.AclConfiguration !== null && {
        AclConfiguration: serializeAws_json1_1AclConfiguration(input.AclConfiguration, context),
    })), (input.ColumnConfiguration !== undefined &&
        input.ColumnConfiguration !== null && {
        ColumnConfiguration: serializeAws_json1_1ColumnConfiguration(input.ColumnConfiguration, context),
    })), (input.ConnectionConfiguration !== undefined &&
        input.ConnectionConfiguration !== null && {
        ConnectionConfiguration: serializeAws_json1_1ConnectionConfiguration(input.ConnectionConfiguration, context),
    })), (input.DatabaseEngineType !== undefined &&
        input.DatabaseEngineType !== null && { DatabaseEngineType: input.DatabaseEngineType })), (input.SqlConfiguration !== undefined &&
        input.SqlConfiguration !== null && {
        SqlConfiguration: serializeAws_json1_1SqlConfiguration(input.SqlConfiguration, context),
    })), (input.VpcConfiguration !== undefined &&
        input.VpcConfiguration !== null && {
        VpcConfiguration: serializeAws_json1_1DataSourceVpcConfiguration(input.VpcConfiguration, context),
    }));
};
var serializeAws_json1_1DataSourceConfiguration = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.ConfluenceConfiguration !== undefined &&
        input.ConfluenceConfiguration !== null && {
        ConfluenceConfiguration: serializeAws_json1_1ConfluenceConfiguration(input.ConfluenceConfiguration, context),
    })), (input.DatabaseConfiguration !== undefined &&
        input.DatabaseConfiguration !== null && {
        DatabaseConfiguration: serializeAws_json1_1DatabaseConfiguration(input.DatabaseConfiguration, context),
    })), (input.GoogleDriveConfiguration !== undefined &&
        input.GoogleDriveConfiguration !== null && {
        GoogleDriveConfiguration: serializeAws_json1_1GoogleDriveConfiguration(input.GoogleDriveConfiguration, context),
    })), (input.OneDriveConfiguration !== undefined &&
        input.OneDriveConfiguration !== null && {
        OneDriveConfiguration: serializeAws_json1_1OneDriveConfiguration(input.OneDriveConfiguration, context),
    })), (input.S3Configuration !== undefined &&
        input.S3Configuration !== null && {
        S3Configuration: serializeAws_json1_1S3DataSourceConfiguration(input.S3Configuration, context),
    })), (input.SalesforceConfiguration !== undefined &&
        input.SalesforceConfiguration !== null && {
        SalesforceConfiguration: serializeAws_json1_1SalesforceConfiguration(input.SalesforceConfiguration, context),
    })), (input.ServiceNowConfiguration !== undefined &&
        input.ServiceNowConfiguration !== null && {
        ServiceNowConfiguration: serializeAws_json1_1ServiceNowConfiguration(input.ServiceNowConfiguration, context),
    })), (input.SharePointConfiguration !== undefined &&
        input.SharePointConfiguration !== null && {
        SharePointConfiguration: serializeAws_json1_1SharePointConfiguration(input.SharePointConfiguration, context),
    }));
};
var serializeAws_json1_1DataSourceInclusionsExclusionsStrings = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1DataSourceSyncJobMetricTarget = function (input, context) {
    return __assign(__assign({}, (input.DataSourceId !== undefined && input.DataSourceId !== null && { DataSourceId: input.DataSourceId })), (input.DataSourceSyncJobId !== undefined &&
        input.DataSourceSyncJobId !== null && { DataSourceSyncJobId: input.DataSourceSyncJobId }));
};
var serializeAws_json1_1DataSourceToIndexFieldMapping = function (input, context) {
    return __assign(__assign(__assign({}, (input.DataSourceFieldName !== undefined &&
        input.DataSourceFieldName !== null && { DataSourceFieldName: input.DataSourceFieldName })), (input.DateFieldFormat !== undefined &&
        input.DateFieldFormat !== null && { DateFieldFormat: input.DateFieldFormat })), (input.IndexFieldName !== undefined &&
        input.IndexFieldName !== null && { IndexFieldName: input.IndexFieldName }));
};
var serializeAws_json1_1DataSourceToIndexFieldMappingList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1DataSourceToIndexFieldMapping(entry, context);
    });
};
var serializeAws_json1_1DataSourceVpcConfiguration = function (input, context) {
    return __assign(__assign({}, (input.SecurityGroupIds !== undefined &&
        input.SecurityGroupIds !== null && {
        SecurityGroupIds: serializeAws_json1_1SecurityGroupIdList(input.SecurityGroupIds, context),
    })), (input.SubnetIds !== undefined &&
        input.SubnetIds !== null && { SubnetIds: serializeAws_json1_1SubnetIdList(input.SubnetIds, context) }));
};
var serializeAws_json1_1DeleteDataSourceRequest = function (input, context) {
    return __assign(__assign({}, (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }));
};
var serializeAws_json1_1DeleteFaqRequest = function (input, context) {
    return __assign(__assign({}, (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }));
};
var serializeAws_json1_1DeleteIndexRequest = function (input, context) {
    return __assign({}, (input.Id !== undefined && input.Id !== null && { Id: input.Id }));
};
var serializeAws_json1_1DeleteQuerySuggestionsBlockListRequest = function (input, context) {
    return __assign(__assign({}, (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }));
};
var serializeAws_json1_1DeleteThesaurusRequest = function (input, context) {
    return __assign(__assign({}, (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }));
};
var serializeAws_json1_1DescribeDataSourceRequest = function (input, context) {
    return __assign(__assign({}, (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }));
};
var serializeAws_json1_1DescribeFaqRequest = function (input, context) {
    return __assign(__assign({}, (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }));
};
var serializeAws_json1_1DescribeIndexRequest = function (input, context) {
    return __assign({}, (input.Id !== undefined && input.Id !== null && { Id: input.Id }));
};
var serializeAws_json1_1DescribeQuerySuggestionsBlockListRequest = function (input, context) {
    return __assign(__assign({}, (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }));
};
var serializeAws_json1_1DescribeQuerySuggestionsConfigRequest = function (input, context) {
    return __assign({}, (input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }));
};
var serializeAws_json1_1DescribeThesaurusRequest = function (input, context) {
    return __assign(__assign({}, (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }));
};
var serializeAws_json1_1Document = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AccessControlList !== undefined &&
        input.AccessControlList !== null && {
        AccessControlList: serializeAws_json1_1PrincipalList(input.AccessControlList, context),
    })), (input.Attributes !== undefined &&
        input.Attributes !== null && {
        Attributes: serializeAws_json1_1DocumentAttributeList(input.Attributes, context),
    })), (input.Blob !== undefined && input.Blob !== null && { Blob: context.base64Encoder(input.Blob) })), (input.ContentType !== undefined && input.ContentType !== null && { ContentType: input.ContentType })), (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.S3Path !== undefined &&
        input.S3Path !== null && { S3Path: serializeAws_json1_1S3Path(input.S3Path, context) })), (input.Title !== undefined && input.Title !== null && { Title: input.Title }));
};
var serializeAws_json1_1DocumentAttribute = function (input, context) {
    return __assign(__assign({}, (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.Value !== undefined &&
        input.Value !== null && { Value: serializeAws_json1_1DocumentAttributeValue(input.Value, context) }));
};
var serializeAws_json1_1DocumentAttributeKeyList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1DocumentAttributeList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1DocumentAttribute(entry, context);
    });
};
var serializeAws_json1_1DocumentAttributeStringListValue = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1DocumentAttributeValue = function (input, context) {
    return DocumentAttributeValue.visit(input, {
        DateValue: function (value) { return ({ DateValue: Math.round(value.getTime() / 1000) }); },
        LongValue: function (value) { return ({ LongValue: value }); },
        StringListValue: function (value) { return ({
            StringListValue: serializeAws_json1_1DocumentAttributeStringListValue(value, context),
        }); },
        StringValue: function (value) { return ({ StringValue: value }); },
        _: function (name, value) { return ({ name: value }); },
    });
};
var serializeAws_json1_1DocumentIdList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1DocumentList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Document(entry, context);
    });
};
var serializeAws_json1_1DocumentMetadataConfiguration = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Relevance !== undefined &&
        input.Relevance !== null && { Relevance: serializeAws_json1_1Relevance(input.Relevance, context) })), (input.Search !== undefined &&
        input.Search !== null && { Search: serializeAws_json1_1Search(input.Search, context) })), (input.Type !== undefined && input.Type !== null && { Type: input.Type }));
};
var serializeAws_json1_1DocumentMetadataConfigurationList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1DocumentMetadataConfiguration(entry, context);
    });
};
var serializeAws_json1_1DocumentRelevanceConfiguration = function (input, context) {
    return __assign(__assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Relevance !== undefined &&
        input.Relevance !== null && { Relevance: serializeAws_json1_1Relevance(input.Relevance, context) }));
};
var serializeAws_json1_1DocumentRelevanceOverrideConfigurationList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1DocumentRelevanceConfiguration(entry, context);
    });
};
var serializeAws_json1_1DocumentsMetadataConfiguration = function (input, context) {
    return __assign({}, (input.S3Prefix !== undefined && input.S3Prefix !== null && { S3Prefix: input.S3Prefix }));
};
var serializeAws_json1_1ExcludeMimeTypesList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ExcludeSharedDrivesList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ExcludeUserAccountsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1Facet = function (input, context) {
    return __assign({}, (input.DocumentAttributeKey !== undefined &&
        input.DocumentAttributeKey !== null && { DocumentAttributeKey: input.DocumentAttributeKey }));
};
var serializeAws_json1_1FacetList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Facet(entry, context);
    });
};
var serializeAws_json1_1GetQuerySuggestionsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId })), (input.MaxSuggestionsCount !== undefined &&
        input.MaxSuggestionsCount !== null && { MaxSuggestionsCount: input.MaxSuggestionsCount })), (input.QueryText !== undefined && input.QueryText !== null && { QueryText: input.QueryText }));
};
var serializeAws_json1_1GoogleDriveConfiguration = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.ExcludeMimeTypes !== undefined &&
        input.ExcludeMimeTypes !== null && {
        ExcludeMimeTypes: serializeAws_json1_1ExcludeMimeTypesList(input.ExcludeMimeTypes, context),
    })), (input.ExcludeSharedDrives !== undefined &&
        input.ExcludeSharedDrives !== null && {
        ExcludeSharedDrives: serializeAws_json1_1ExcludeSharedDrivesList(input.ExcludeSharedDrives, context),
    })), (input.ExcludeUserAccounts !== undefined &&
        input.ExcludeUserAccounts !== null && {
        ExcludeUserAccounts: serializeAws_json1_1ExcludeUserAccountsList(input.ExcludeUserAccounts, context),
    })), (input.ExclusionPatterns !== undefined &&
        input.ExclusionPatterns !== null && {
        ExclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
    })), (input.FieldMappings !== undefined &&
        input.FieldMappings !== null && {
        FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    })), (input.InclusionPatterns !== undefined &&
        input.InclusionPatterns !== null && {
        InclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
    })), (input.SecretArn !== undefined && input.SecretArn !== null && { SecretArn: input.SecretArn }));
};
var serializeAws_json1_1JsonTokenTypeConfiguration = function (input, context) {
    return __assign(__assign({}, (input.GroupAttributeField !== undefined &&
        input.GroupAttributeField !== null && { GroupAttributeField: input.GroupAttributeField })), (input.UserNameAttributeField !== undefined &&
        input.UserNameAttributeField !== null && { UserNameAttributeField: input.UserNameAttributeField }));
};
var serializeAws_json1_1JwtTokenTypeConfiguration = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.ClaimRegex !== undefined && input.ClaimRegex !== null && { ClaimRegex: input.ClaimRegex })), (input.GroupAttributeField !== undefined &&
        input.GroupAttributeField !== null && { GroupAttributeField: input.GroupAttributeField })), (input.Issuer !== undefined && input.Issuer !== null && { Issuer: input.Issuer })), (input.KeyLocation !== undefined && input.KeyLocation !== null && { KeyLocation: input.KeyLocation })), (input.SecretManagerArn !== undefined &&
        input.SecretManagerArn !== null && { SecretManagerArn: input.SecretManagerArn })), (input.URL !== undefined && input.URL !== null && { URL: input.URL })), (input.UserNameAttributeField !== undefined &&
        input.UserNameAttributeField !== null && { UserNameAttributeField: input.UserNameAttributeField }));
};
var serializeAws_json1_1ListDataSourcesRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1ListDataSourceSyncJobsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.StartTimeFilter !== undefined &&
        input.StartTimeFilter !== null && {
        StartTimeFilter: serializeAws_json1_1TimeRange(input.StartTimeFilter, context),
    })), (input.StatusFilter !== undefined && input.StatusFilter !== null && { StatusFilter: input.StatusFilter }));
};
var serializeAws_json1_1ListFaqsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1ListIndicesRequest = function (input, context) {
    return __assign(__assign({}, (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1ListQuerySuggestionsBlockListsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1ListTagsForResourceRequest = function (input, context) {
    return __assign({}, (input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }));
};
var serializeAws_json1_1ListThesauriRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1OneDriveConfiguration = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.DisableLocalGroups !== undefined &&
        input.DisableLocalGroups !== null && { DisableLocalGroups: input.DisableLocalGroups })), (input.ExclusionPatterns !== undefined &&
        input.ExclusionPatterns !== null && {
        ExclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
    })), (input.FieldMappings !== undefined &&
        input.FieldMappings !== null && {
        FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    })), (input.InclusionPatterns !== undefined &&
        input.InclusionPatterns !== null && {
        InclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
    })), (input.OneDriveUsers !== undefined &&
        input.OneDriveUsers !== null && {
        OneDriveUsers: serializeAws_json1_1OneDriveUsers(input.OneDriveUsers, context),
    })), (input.SecretArn !== undefined && input.SecretArn !== null && { SecretArn: input.SecretArn })), (input.TenantDomain !== undefined && input.TenantDomain !== null && { TenantDomain: input.TenantDomain }));
};
var serializeAws_json1_1OneDriveUserList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1OneDriveUsers = function (input, context) {
    return __assign(__assign({}, (input.OneDriveUserList !== undefined &&
        input.OneDriveUserList !== null && {
        OneDriveUserList: serializeAws_json1_1OneDriveUserList(input.OneDriveUserList, context),
    })), (input.OneDriveUserS3Path !== undefined &&
        input.OneDriveUserS3Path !== null && {
        OneDriveUserS3Path: serializeAws_json1_1S3Path(input.OneDriveUserS3Path, context),
    }));
};
var serializeAws_json1_1Principal = function (input, context) {
    return __assign(__assign(__assign({}, (input.Access !== undefined && input.Access !== null && { Access: input.Access })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Type !== undefined && input.Type !== null && { Type: input.Type }));
};
var serializeAws_json1_1PrincipalList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Principal(entry, context);
    });
};
var serializeAws_json1_1QueryRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AttributeFilter !== undefined &&
        input.AttributeFilter !== null && {
        AttributeFilter: serializeAws_json1_1AttributeFilter(input.AttributeFilter, context),
    })), (input.DocumentRelevanceOverrideConfigurations !== undefined &&
        input.DocumentRelevanceOverrideConfigurations !== null && {
        DocumentRelevanceOverrideConfigurations: serializeAws_json1_1DocumentRelevanceOverrideConfigurationList(input.DocumentRelevanceOverrideConfigurations, context),
    })), (input.Facets !== undefined &&
        input.Facets !== null && { Facets: serializeAws_json1_1FacetList(input.Facets, context) })), (input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId })), (input.PageNumber !== undefined && input.PageNumber !== null && { PageNumber: input.PageNumber })), (input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize })), (input.QueryResultTypeFilter !== undefined &&
        input.QueryResultTypeFilter !== null && { QueryResultTypeFilter: input.QueryResultTypeFilter })), (input.QueryText !== undefined && input.QueryText !== null && { QueryText: input.QueryText })), (input.RequestedDocumentAttributes !== undefined &&
        input.RequestedDocumentAttributes !== null && {
        RequestedDocumentAttributes: serializeAws_json1_1DocumentAttributeKeyList(input.RequestedDocumentAttributes, context),
    })), (input.SortingConfiguration !== undefined &&
        input.SortingConfiguration !== null && {
        SortingConfiguration: serializeAws_json1_1SortingConfiguration(input.SortingConfiguration, context),
    })), (input.UserContext !== undefined &&
        input.UserContext !== null && { UserContext: serializeAws_json1_1UserContext(input.UserContext, context) })), (input.VisitorId !== undefined && input.VisitorId !== null && { VisitorId: input.VisitorId }));
};
var serializeAws_json1_1Relevance = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.Duration !== undefined && input.Duration !== null && { Duration: input.Duration })), (input.Freshness !== undefined && input.Freshness !== null && { Freshness: input.Freshness })), (input.Importance !== undefined && input.Importance !== null && { Importance: input.Importance })), (input.RankOrder !== undefined && input.RankOrder !== null && { RankOrder: input.RankOrder })), (input.ValueImportanceMap !== undefined &&
        input.ValueImportanceMap !== null && {
        ValueImportanceMap: serializeAws_json1_1ValueImportanceMap(input.ValueImportanceMap, context),
    }));
};
var serializeAws_json1_1RelevanceFeedback = function (input, context) {
    return __assign(__assign({}, (input.RelevanceValue !== undefined &&
        input.RelevanceValue !== null && { RelevanceValue: input.RelevanceValue })), (input.ResultId !== undefined && input.ResultId !== null && { ResultId: input.ResultId }));
};
var serializeAws_json1_1RelevanceFeedbackList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1RelevanceFeedback(entry, context);
    });
};
var serializeAws_json1_1S3DataSourceConfiguration = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.AccessControlListConfiguration !== undefined &&
        input.AccessControlListConfiguration !== null && {
        AccessControlListConfiguration: serializeAws_json1_1AccessControlListConfiguration(input.AccessControlListConfiguration, context),
    })), (input.BucketName !== undefined && input.BucketName !== null && { BucketName: input.BucketName })), (input.DocumentsMetadataConfiguration !== undefined &&
        input.DocumentsMetadataConfiguration !== null && {
        DocumentsMetadataConfiguration: serializeAws_json1_1DocumentsMetadataConfiguration(input.DocumentsMetadataConfiguration, context),
    })), (input.ExclusionPatterns !== undefined &&
        input.ExclusionPatterns !== null && {
        ExclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
    })), (input.InclusionPatterns !== undefined &&
        input.InclusionPatterns !== null && {
        InclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
    })), (input.InclusionPrefixes !== undefined &&
        input.InclusionPrefixes !== null && {
        InclusionPrefixes: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.InclusionPrefixes, context),
    }));
};
var serializeAws_json1_1S3Path = function (input, context) {
    return __assign(__assign({}, (input.Bucket !== undefined && input.Bucket !== null && { Bucket: input.Bucket })), (input.Key !== undefined && input.Key !== null && { Key: input.Key }));
};
var serializeAws_json1_1SalesforceChatterFeedConfiguration = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.DocumentDataFieldName !== undefined &&
        input.DocumentDataFieldName !== null && { DocumentDataFieldName: input.DocumentDataFieldName })), (input.DocumentTitleFieldName !== undefined &&
        input.DocumentTitleFieldName !== null && { DocumentTitleFieldName: input.DocumentTitleFieldName })), (input.FieldMappings !== undefined &&
        input.FieldMappings !== null && {
        FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    })), (input.IncludeFilterTypes !== undefined &&
        input.IncludeFilterTypes !== null && {
        IncludeFilterTypes: serializeAws_json1_1SalesforceChatterFeedIncludeFilterTypes(input.IncludeFilterTypes, context),
    }));
};
var serializeAws_json1_1SalesforceChatterFeedIncludeFilterTypes = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1SalesforceConfiguration = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.ChatterFeedConfiguration !== undefined &&
        input.ChatterFeedConfiguration !== null && {
        ChatterFeedConfiguration: serializeAws_json1_1SalesforceChatterFeedConfiguration(input.ChatterFeedConfiguration, context),
    })), (input.CrawlAttachments !== undefined &&
        input.CrawlAttachments !== null && { CrawlAttachments: input.CrawlAttachments })), (input.ExcludeAttachmentFilePatterns !== undefined &&
        input.ExcludeAttachmentFilePatterns !== null && {
        ExcludeAttachmentFilePatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.ExcludeAttachmentFilePatterns, context),
    })), (input.IncludeAttachmentFilePatterns !== undefined &&
        input.IncludeAttachmentFilePatterns !== null && {
        IncludeAttachmentFilePatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.IncludeAttachmentFilePatterns, context),
    })), (input.KnowledgeArticleConfiguration !== undefined &&
        input.KnowledgeArticleConfiguration !== null && {
        KnowledgeArticleConfiguration: serializeAws_json1_1SalesforceKnowledgeArticleConfiguration(input.KnowledgeArticleConfiguration, context),
    })), (input.SecretArn !== undefined && input.SecretArn !== null && { SecretArn: input.SecretArn })), (input.ServerUrl !== undefined && input.ServerUrl !== null && { ServerUrl: input.ServerUrl })), (input.StandardObjectAttachmentConfiguration !== undefined &&
        input.StandardObjectAttachmentConfiguration !== null && {
        StandardObjectAttachmentConfiguration: serializeAws_json1_1SalesforceStandardObjectAttachmentConfiguration(input.StandardObjectAttachmentConfiguration, context),
    })), (input.StandardObjectConfigurations !== undefined &&
        input.StandardObjectConfigurations !== null && {
        StandardObjectConfigurations: serializeAws_json1_1SalesforceStandardObjectConfigurationList(input.StandardObjectConfigurations, context),
    }));
};
var serializeAws_json1_1SalesforceCustomKnowledgeArticleTypeConfiguration = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.DocumentDataFieldName !== undefined &&
        input.DocumentDataFieldName !== null && { DocumentDataFieldName: input.DocumentDataFieldName })), (input.DocumentTitleFieldName !== undefined &&
        input.DocumentTitleFieldName !== null && { DocumentTitleFieldName: input.DocumentTitleFieldName })), (input.FieldMappings !== undefined &&
        input.FieldMappings !== null && {
        FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    })), (input.Name !== undefined && input.Name !== null && { Name: input.Name }));
};
var serializeAws_json1_1SalesforceCustomKnowledgeArticleTypeConfigurationList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1SalesforceCustomKnowledgeArticleTypeConfiguration(entry, context);
    });
};
var serializeAws_json1_1SalesforceKnowledgeArticleConfiguration = function (input, context) {
    return __assign(__assign(__assign({}, (input.CustomKnowledgeArticleTypeConfigurations !== undefined &&
        input.CustomKnowledgeArticleTypeConfigurations !== null && {
        CustomKnowledgeArticleTypeConfigurations: serializeAws_json1_1SalesforceCustomKnowledgeArticleTypeConfigurationList(input.CustomKnowledgeArticleTypeConfigurations, context),
    })), (input.IncludedStates !== undefined &&
        input.IncludedStates !== null && {
        IncludedStates: serializeAws_json1_1SalesforceKnowledgeArticleStateList(input.IncludedStates, context),
    })), (input.StandardKnowledgeArticleTypeConfiguration !== undefined &&
        input.StandardKnowledgeArticleTypeConfiguration !== null && {
        StandardKnowledgeArticleTypeConfiguration: serializeAws_json1_1SalesforceStandardKnowledgeArticleTypeConfiguration(input.StandardKnowledgeArticleTypeConfiguration, context),
    }));
};
var serializeAws_json1_1SalesforceKnowledgeArticleStateList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1SalesforceStandardKnowledgeArticleTypeConfiguration = function (input, context) {
    return __assign(__assign(__assign({}, (input.DocumentDataFieldName !== undefined &&
        input.DocumentDataFieldName !== null && { DocumentDataFieldName: input.DocumentDataFieldName })), (input.DocumentTitleFieldName !== undefined &&
        input.DocumentTitleFieldName !== null && { DocumentTitleFieldName: input.DocumentTitleFieldName })), (input.FieldMappings !== undefined &&
        input.FieldMappings !== null && {
        FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }));
};
var serializeAws_json1_1SalesforceStandardObjectAttachmentConfiguration = function (input, context) {
    return __assign(__assign({}, (input.DocumentTitleFieldName !== undefined &&
        input.DocumentTitleFieldName !== null && { DocumentTitleFieldName: input.DocumentTitleFieldName })), (input.FieldMappings !== undefined &&
        input.FieldMappings !== null && {
        FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }));
};
var serializeAws_json1_1SalesforceStandardObjectConfiguration = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.DocumentDataFieldName !== undefined &&
        input.DocumentDataFieldName !== null && { DocumentDataFieldName: input.DocumentDataFieldName })), (input.DocumentTitleFieldName !== undefined &&
        input.DocumentTitleFieldName !== null && { DocumentTitleFieldName: input.DocumentTitleFieldName })), (input.FieldMappings !== undefined &&
        input.FieldMappings !== null && {
        FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    })), (input.Name !== undefined && input.Name !== null && { Name: input.Name }));
};
var serializeAws_json1_1SalesforceStandardObjectConfigurationList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1SalesforceStandardObjectConfiguration(entry, context);
    });
};
var serializeAws_json1_1Search = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Displayable !== undefined && input.Displayable !== null && { Displayable: input.Displayable })), (input.Facetable !== undefined && input.Facetable !== null && { Facetable: input.Facetable })), (input.Searchable !== undefined && input.Searchable !== null && { Searchable: input.Searchable })), (input.Sortable !== undefined && input.Sortable !== null && { Sortable: input.Sortable }));
};
var serializeAws_json1_1SecurityGroupIdList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ServerSideEncryptionConfiguration = function (input, context) {
    return __assign({}, (input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }));
};
var serializeAws_json1_1ServiceNowConfiguration = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.AuthenticationType !== undefined &&
        input.AuthenticationType !== null && { AuthenticationType: input.AuthenticationType })), (input.HostUrl !== undefined && input.HostUrl !== null && { HostUrl: input.HostUrl })), (input.KnowledgeArticleConfiguration !== undefined &&
        input.KnowledgeArticleConfiguration !== null && {
        KnowledgeArticleConfiguration: serializeAws_json1_1ServiceNowKnowledgeArticleConfiguration(input.KnowledgeArticleConfiguration, context),
    })), (input.SecretArn !== undefined && input.SecretArn !== null && { SecretArn: input.SecretArn })), (input.ServiceCatalogConfiguration !== undefined &&
        input.ServiceCatalogConfiguration !== null && {
        ServiceCatalogConfiguration: serializeAws_json1_1ServiceNowServiceCatalogConfiguration(input.ServiceCatalogConfiguration, context),
    })), (input.ServiceNowBuildVersion !== undefined &&
        input.ServiceNowBuildVersion !== null && { ServiceNowBuildVersion: input.ServiceNowBuildVersion }));
};
var serializeAws_json1_1ServiceNowKnowledgeArticleConfiguration = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.CrawlAttachments !== undefined &&
        input.CrawlAttachments !== null && { CrawlAttachments: input.CrawlAttachments })), (input.DocumentDataFieldName !== undefined &&
        input.DocumentDataFieldName !== null && { DocumentDataFieldName: input.DocumentDataFieldName })), (input.DocumentTitleFieldName !== undefined &&
        input.DocumentTitleFieldName !== null && { DocumentTitleFieldName: input.DocumentTitleFieldName })), (input.ExcludeAttachmentFilePatterns !== undefined &&
        input.ExcludeAttachmentFilePatterns !== null && {
        ExcludeAttachmentFilePatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.ExcludeAttachmentFilePatterns, context),
    })), (input.FieldMappings !== undefined &&
        input.FieldMappings !== null && {
        FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    })), (input.FilterQuery !== undefined && input.FilterQuery !== null && { FilterQuery: input.FilterQuery })), (input.IncludeAttachmentFilePatterns !== undefined &&
        input.IncludeAttachmentFilePatterns !== null && {
        IncludeAttachmentFilePatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.IncludeAttachmentFilePatterns, context),
    }));
};
var serializeAws_json1_1ServiceNowServiceCatalogConfiguration = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.CrawlAttachments !== undefined &&
        input.CrawlAttachments !== null && { CrawlAttachments: input.CrawlAttachments })), (input.DocumentDataFieldName !== undefined &&
        input.DocumentDataFieldName !== null && { DocumentDataFieldName: input.DocumentDataFieldName })), (input.DocumentTitleFieldName !== undefined &&
        input.DocumentTitleFieldName !== null && { DocumentTitleFieldName: input.DocumentTitleFieldName })), (input.ExcludeAttachmentFilePatterns !== undefined &&
        input.ExcludeAttachmentFilePatterns !== null && {
        ExcludeAttachmentFilePatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.ExcludeAttachmentFilePatterns, context),
    })), (input.FieldMappings !== undefined &&
        input.FieldMappings !== null && {
        FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    })), (input.IncludeAttachmentFilePatterns !== undefined &&
        input.IncludeAttachmentFilePatterns !== null && {
        IncludeAttachmentFilePatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.IncludeAttachmentFilePatterns, context),
    }));
};
var serializeAws_json1_1SharePointConfiguration = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.CrawlAttachments !== undefined &&
        input.CrawlAttachments !== null && { CrawlAttachments: input.CrawlAttachments })), (input.DisableLocalGroups !== undefined &&
        input.DisableLocalGroups !== null && { DisableLocalGroups: input.DisableLocalGroups })), (input.DocumentTitleFieldName !== undefined &&
        input.DocumentTitleFieldName !== null && { DocumentTitleFieldName: input.DocumentTitleFieldName })), (input.ExclusionPatterns !== undefined &&
        input.ExclusionPatterns !== null && {
        ExclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
    })), (input.FieldMappings !== undefined &&
        input.FieldMappings !== null && {
        FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    })), (input.InclusionPatterns !== undefined &&
        input.InclusionPatterns !== null && {
        InclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
    })), (input.SecretArn !== undefined && input.SecretArn !== null && { SecretArn: input.SecretArn })), (input.SharePointVersion !== undefined &&
        input.SharePointVersion !== null && { SharePointVersion: input.SharePointVersion })), (input.Urls !== undefined &&
        input.Urls !== null && { Urls: serializeAws_json1_1SharePointUrlList(input.Urls, context) })), (input.UseChangeLog !== undefined && input.UseChangeLog !== null && { UseChangeLog: input.UseChangeLog })), (input.VpcConfiguration !== undefined &&
        input.VpcConfiguration !== null && {
        VpcConfiguration: serializeAws_json1_1DataSourceVpcConfiguration(input.VpcConfiguration, context),
    }));
};
var serializeAws_json1_1SharePointUrlList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1SortingConfiguration = function (input, context) {
    return __assign(__assign({}, (input.DocumentAttributeKey !== undefined &&
        input.DocumentAttributeKey !== null && { DocumentAttributeKey: input.DocumentAttributeKey })), (input.SortOrder !== undefined && input.SortOrder !== null && { SortOrder: input.SortOrder }));
};
var serializeAws_json1_1SqlConfiguration = function (input, context) {
    return __assign({}, (input.QueryIdentifiersEnclosingOption !== undefined &&
        input.QueryIdentifiersEnclosingOption !== null && {
        QueryIdentifiersEnclosingOption: input.QueryIdentifiersEnclosingOption,
    }));
};
var serializeAws_json1_1StartDataSourceSyncJobRequest = function (input, context) {
    return __assign(__assign({}, (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }));
};
var serializeAws_json1_1StopDataSourceSyncJobRequest = function (input, context) {
    return __assign(__assign({}, (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }));
};
var serializeAws_json1_1SubmitFeedbackRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.ClickFeedbackItems !== undefined &&
        input.ClickFeedbackItems !== null && {
        ClickFeedbackItems: serializeAws_json1_1ClickFeedbackList(input.ClickFeedbackItems, context),
    })), (input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId })), (input.QueryId !== undefined && input.QueryId !== null && { QueryId: input.QueryId })), (input.RelevanceFeedbackItems !== undefined &&
        input.RelevanceFeedbackItems !== null && {
        RelevanceFeedbackItems: serializeAws_json1_1RelevanceFeedbackList(input.RelevanceFeedbackItems, context),
    }));
};
var serializeAws_json1_1SubnetIdList = function (input, context) {
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
    return __assign(__assign({}, (input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }));
};
var serializeAws_json1_1TimeRange = function (input, context) {
    return __assign(__assign({}, (input.EndTime !== undefined &&
        input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) })), (input.StartTime !== undefined &&
        input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }));
};
var serializeAws_json1_1UntagResourceRequest = function (input, context) {
    return __assign(__assign({}, (input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN })), (input.TagKeys !== undefined &&
        input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }));
};
var serializeAws_json1_1UpdateDataSourceRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Configuration !== undefined &&
        input.Configuration !== null && {
        Configuration: serializeAws_json1_1DataSourceConfiguration(input.Configuration, context),
    })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn })), (input.Schedule !== undefined && input.Schedule !== null && { Schedule: input.Schedule }));
};
var serializeAws_json1_1UpdateIndexRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.CapacityUnits !== undefined &&
        input.CapacityUnits !== null && {
        CapacityUnits: serializeAws_json1_1CapacityUnitsConfiguration(input.CapacityUnits, context),
    })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.DocumentMetadataConfigurationUpdates !== undefined &&
        input.DocumentMetadataConfigurationUpdates !== null && {
        DocumentMetadataConfigurationUpdates: serializeAws_json1_1DocumentMetadataConfigurationList(input.DocumentMetadataConfigurationUpdates, context),
    })), (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn })), (input.UserContextPolicy !== undefined &&
        input.UserContextPolicy !== null && { UserContextPolicy: input.UserContextPolicy })), (input.UserTokenConfigurations !== undefined &&
        input.UserTokenConfigurations !== null && {
        UserTokenConfigurations: serializeAws_json1_1UserTokenConfigurationList(input.UserTokenConfigurations, context),
    }));
};
var serializeAws_json1_1UpdateQuerySuggestionsBlockListRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn })), (input.SourceS3Path !== undefined &&
        input.SourceS3Path !== null && { SourceS3Path: serializeAws_json1_1S3Path(input.SourceS3Path, context) }));
};
var serializeAws_json1_1UpdateQuerySuggestionsConfigRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.IncludeQueriesWithoutUserInformation !== undefined &&
        input.IncludeQueriesWithoutUserInformation !== null && {
        IncludeQueriesWithoutUserInformation: input.IncludeQueriesWithoutUserInformation,
    })), (input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId })), (input.MinimumNumberOfQueryingUsers !== undefined &&
        input.MinimumNumberOfQueryingUsers !== null && {
        MinimumNumberOfQueryingUsers: input.MinimumNumberOfQueryingUsers,
    })), (input.MinimumQueryCount !== undefined &&
        input.MinimumQueryCount !== null && { MinimumQueryCount: input.MinimumQueryCount })), (input.Mode !== undefined && input.Mode !== null && { Mode: input.Mode })), (input.QueryLogLookBackWindowInDays !== undefined &&
        input.QueryLogLookBackWindowInDays !== null && {
        QueryLogLookBackWindowInDays: input.QueryLogLookBackWindowInDays,
    }));
};
var serializeAws_json1_1UpdateThesaurusRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn })), (input.SourceS3Path !== undefined &&
        input.SourceS3Path !== null && { SourceS3Path: serializeAws_json1_1S3Path(input.SourceS3Path, context) }));
};
var serializeAws_json1_1UserContext = function (input, context) {
    return __assign({}, (input.Token !== undefined && input.Token !== null && { Token: input.Token }));
};
var serializeAws_json1_1UserTokenConfiguration = function (input, context) {
    return __assign(__assign({}, (input.JsonTokenTypeConfiguration !== undefined &&
        input.JsonTokenTypeConfiguration !== null && {
        JsonTokenTypeConfiguration: serializeAws_json1_1JsonTokenTypeConfiguration(input.JsonTokenTypeConfiguration, context),
    })), (input.JwtTokenTypeConfiguration !== undefined &&
        input.JwtTokenTypeConfiguration !== null && {
        JwtTokenTypeConfiguration: serializeAws_json1_1JwtTokenTypeConfiguration(input.JwtTokenTypeConfiguration, context),
    }));
};
var serializeAws_json1_1UserTokenConfigurationList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1UserTokenConfiguration(entry, context);
    });
};
var serializeAws_json1_1ValueImportanceMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_json1_1AccessControlListConfiguration = function (output, context) {
    return {
        KeyPath: output.KeyPath !== undefined && output.KeyPath !== null ? output.KeyPath : undefined,
    };
};
var deserializeAws_json1_1AccessDeniedException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1AclConfiguration = function (output, context) {
    return {
        AllowedGroupsColumnName: output.AllowedGroupsColumnName !== undefined && output.AllowedGroupsColumnName !== null
            ? output.AllowedGroupsColumnName
            : undefined,
    };
};
var deserializeAws_json1_1AdditionalResultAttribute = function (output, context) {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null
            ? deserializeAws_json1_1AdditionalResultAttributeValue(output.Value, context)
            : undefined,
        ValueType: output.ValueType !== undefined && output.ValueType !== null ? output.ValueType : undefined,
    };
};
var deserializeAws_json1_1AdditionalResultAttributeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AdditionalResultAttribute(entry, context);
    });
};
var deserializeAws_json1_1AdditionalResultAttributeValue = function (output, context) {
    return {
        TextWithHighlightsValue: output.TextWithHighlightsValue !== undefined && output.TextWithHighlightsValue !== null
            ? deserializeAws_json1_1TextWithHighlights(output.TextWithHighlightsValue, context)
            : undefined,
    };
};
var deserializeAws_json1_1BatchDeleteDocumentResponse = function (output, context) {
    return {
        FailedDocuments: output.FailedDocuments !== undefined && output.FailedDocuments !== null
            ? deserializeAws_json1_1BatchDeleteDocumentResponseFailedDocuments(output.FailedDocuments, context)
            : undefined,
    };
};
var deserializeAws_json1_1BatchDeleteDocumentResponseFailedDocument = function (output, context) {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    };
};
var deserializeAws_json1_1BatchDeleteDocumentResponseFailedDocuments = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BatchDeleteDocumentResponseFailedDocument(entry, context);
    });
};
var deserializeAws_json1_1BatchPutDocumentResponse = function (output, context) {
    return {
        FailedDocuments: output.FailedDocuments !== undefined && output.FailedDocuments !== null
            ? deserializeAws_json1_1BatchPutDocumentResponseFailedDocuments(output.FailedDocuments, context)
            : undefined,
    };
};
var deserializeAws_json1_1BatchPutDocumentResponseFailedDocument = function (output, context) {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    };
};
var deserializeAws_json1_1BatchPutDocumentResponseFailedDocuments = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BatchPutDocumentResponseFailedDocument(entry, context);
    });
};
var deserializeAws_json1_1CapacityUnitsConfiguration = function (output, context) {
    return {
        QueryCapacityUnits: output.QueryCapacityUnits !== undefined && output.QueryCapacityUnits !== null
            ? output.QueryCapacityUnits
            : undefined,
        StorageCapacityUnits: output.StorageCapacityUnits !== undefined && output.StorageCapacityUnits !== null
            ? output.StorageCapacityUnits
            : undefined,
    };
};
var deserializeAws_json1_1ChangeDetectingColumns = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1ColumnConfiguration = function (output, context) {
    return {
        ChangeDetectingColumns: output.ChangeDetectingColumns !== undefined && output.ChangeDetectingColumns !== null
            ? deserializeAws_json1_1ChangeDetectingColumns(output.ChangeDetectingColumns, context)
            : undefined,
        DocumentDataColumnName: output.DocumentDataColumnName !== undefined && output.DocumentDataColumnName !== null
            ? output.DocumentDataColumnName
            : undefined,
        DocumentIdColumnName: output.DocumentIdColumnName !== undefined && output.DocumentIdColumnName !== null
            ? output.DocumentIdColumnName
            : undefined,
        DocumentTitleColumnName: output.DocumentTitleColumnName !== undefined && output.DocumentTitleColumnName !== null
            ? output.DocumentTitleColumnName
            : undefined,
        FieldMappings: output.FieldMappings !== undefined && output.FieldMappings !== null
            ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FieldMappings, context)
            : undefined,
    };
};
var deserializeAws_json1_1ConflictException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1ConfluenceAttachmentConfiguration = function (output, context) {
    return {
        AttachmentFieldMappings: output.AttachmentFieldMappings !== undefined && output.AttachmentFieldMappings !== null
            ? deserializeAws_json1_1ConfluenceAttachmentFieldMappingsList(output.AttachmentFieldMappings, context)
            : undefined,
        CrawlAttachments: output.CrawlAttachments !== undefined && output.CrawlAttachments !== null ? output.CrawlAttachments : undefined,
    };
};
var deserializeAws_json1_1ConfluenceAttachmentFieldMappingsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConfluenceAttachmentToIndexFieldMapping(entry, context);
    });
};
var deserializeAws_json1_1ConfluenceAttachmentToIndexFieldMapping = function (output, context) {
    return {
        DataSourceFieldName: output.DataSourceFieldName !== undefined && output.DataSourceFieldName !== null
            ? output.DataSourceFieldName
            : undefined,
        DateFieldFormat: output.DateFieldFormat !== undefined && output.DateFieldFormat !== null ? output.DateFieldFormat : undefined,
        IndexFieldName: output.IndexFieldName !== undefined && output.IndexFieldName !== null ? output.IndexFieldName : undefined,
    };
};
var deserializeAws_json1_1ConfluenceBlogConfiguration = function (output, context) {
    return {
        BlogFieldMappings: output.BlogFieldMappings !== undefined && output.BlogFieldMappings !== null
            ? deserializeAws_json1_1ConfluenceBlogFieldMappingsList(output.BlogFieldMappings, context)
            : undefined,
    };
};
var deserializeAws_json1_1ConfluenceBlogFieldMappingsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConfluenceBlogToIndexFieldMapping(entry, context);
    });
};
var deserializeAws_json1_1ConfluenceBlogToIndexFieldMapping = function (output, context) {
    return {
        DataSourceFieldName: output.DataSourceFieldName !== undefined && output.DataSourceFieldName !== null
            ? output.DataSourceFieldName
            : undefined,
        DateFieldFormat: output.DateFieldFormat !== undefined && output.DateFieldFormat !== null ? output.DateFieldFormat : undefined,
        IndexFieldName: output.IndexFieldName !== undefined && output.IndexFieldName !== null ? output.IndexFieldName : undefined,
    };
};
var deserializeAws_json1_1ConfluenceConfiguration = function (output, context) {
    return {
        AttachmentConfiguration: output.AttachmentConfiguration !== undefined && output.AttachmentConfiguration !== null
            ? deserializeAws_json1_1ConfluenceAttachmentConfiguration(output.AttachmentConfiguration, context)
            : undefined,
        BlogConfiguration: output.BlogConfiguration !== undefined && output.BlogConfiguration !== null
            ? deserializeAws_json1_1ConfluenceBlogConfiguration(output.BlogConfiguration, context)
            : undefined,
        ExclusionPatterns: output.ExclusionPatterns !== undefined && output.ExclusionPatterns !== null
            ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.ExclusionPatterns, context)
            : undefined,
        InclusionPatterns: output.InclusionPatterns !== undefined && output.InclusionPatterns !== null
            ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.InclusionPatterns, context)
            : undefined,
        PageConfiguration: output.PageConfiguration !== undefined && output.PageConfiguration !== null
            ? deserializeAws_json1_1ConfluencePageConfiguration(output.PageConfiguration, context)
            : undefined,
        SecretArn: output.SecretArn !== undefined && output.SecretArn !== null ? output.SecretArn : undefined,
        ServerUrl: output.ServerUrl !== undefined && output.ServerUrl !== null ? output.ServerUrl : undefined,
        SpaceConfiguration: output.SpaceConfiguration !== undefined && output.SpaceConfiguration !== null
            ? deserializeAws_json1_1ConfluenceSpaceConfiguration(output.SpaceConfiguration, context)
            : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
        VpcConfiguration: output.VpcConfiguration !== undefined && output.VpcConfiguration !== null
            ? deserializeAws_json1_1DataSourceVpcConfiguration(output.VpcConfiguration, context)
            : undefined,
    };
};
var deserializeAws_json1_1ConfluencePageConfiguration = function (output, context) {
    return {
        PageFieldMappings: output.PageFieldMappings !== undefined && output.PageFieldMappings !== null
            ? deserializeAws_json1_1ConfluencePageFieldMappingsList(output.PageFieldMappings, context)
            : undefined,
    };
};
var deserializeAws_json1_1ConfluencePageFieldMappingsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConfluencePageToIndexFieldMapping(entry, context);
    });
};
var deserializeAws_json1_1ConfluencePageToIndexFieldMapping = function (output, context) {
    return {
        DataSourceFieldName: output.DataSourceFieldName !== undefined && output.DataSourceFieldName !== null
            ? output.DataSourceFieldName
            : undefined,
        DateFieldFormat: output.DateFieldFormat !== undefined && output.DateFieldFormat !== null ? output.DateFieldFormat : undefined,
        IndexFieldName: output.IndexFieldName !== undefined && output.IndexFieldName !== null ? output.IndexFieldName : undefined,
    };
};
var deserializeAws_json1_1ConfluenceSpaceConfiguration = function (output, context) {
    return {
        CrawlArchivedSpaces: output.CrawlArchivedSpaces !== undefined && output.CrawlArchivedSpaces !== null
            ? output.CrawlArchivedSpaces
            : undefined,
        CrawlPersonalSpaces: output.CrawlPersonalSpaces !== undefined && output.CrawlPersonalSpaces !== null
            ? output.CrawlPersonalSpaces
            : undefined,
        ExcludeSpaces: output.ExcludeSpaces !== undefined && output.ExcludeSpaces !== null
            ? deserializeAws_json1_1ConfluenceSpaceList(output.ExcludeSpaces, context)
            : undefined,
        IncludeSpaces: output.IncludeSpaces !== undefined && output.IncludeSpaces !== null
            ? deserializeAws_json1_1ConfluenceSpaceList(output.IncludeSpaces, context)
            : undefined,
        SpaceFieldMappings: output.SpaceFieldMappings !== undefined && output.SpaceFieldMappings !== null
            ? deserializeAws_json1_1ConfluenceSpaceFieldMappingsList(output.SpaceFieldMappings, context)
            : undefined,
    };
};
var deserializeAws_json1_1ConfluenceSpaceFieldMappingsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConfluenceSpaceToIndexFieldMapping(entry, context);
    });
};
var deserializeAws_json1_1ConfluenceSpaceList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1ConfluenceSpaceToIndexFieldMapping = function (output, context) {
    return {
        DataSourceFieldName: output.DataSourceFieldName !== undefined && output.DataSourceFieldName !== null
            ? output.DataSourceFieldName
            : undefined,
        DateFieldFormat: output.DateFieldFormat !== undefined && output.DateFieldFormat !== null ? output.DateFieldFormat : undefined,
        IndexFieldName: output.IndexFieldName !== undefined && output.IndexFieldName !== null ? output.IndexFieldName : undefined,
    };
};
var deserializeAws_json1_1ConnectionConfiguration = function (output, context) {
    return {
        DatabaseHost: output.DatabaseHost !== undefined && output.DatabaseHost !== null ? output.DatabaseHost : undefined,
        DatabaseName: output.DatabaseName !== undefined && output.DatabaseName !== null ? output.DatabaseName : undefined,
        DatabasePort: output.DatabasePort !== undefined && output.DatabasePort !== null ? output.DatabasePort : undefined,
        SecretArn: output.SecretArn !== undefined && output.SecretArn !== null ? output.SecretArn : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
    };
};
var deserializeAws_json1_1CreateDataSourceResponse = function (output, context) {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    };
};
var deserializeAws_json1_1CreateFaqResponse = function (output, context) {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    };
};
var deserializeAws_json1_1CreateIndexResponse = function (output, context) {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    };
};
var deserializeAws_json1_1CreateQuerySuggestionsBlockListResponse = function (output, context) {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    };
};
var deserializeAws_json1_1CreateThesaurusResponse = function (output, context) {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    };
};
var deserializeAws_json1_1DatabaseConfiguration = function (output, context) {
    return {
        AclConfiguration: output.AclConfiguration !== undefined && output.AclConfiguration !== null
            ? deserializeAws_json1_1AclConfiguration(output.AclConfiguration, context)
            : undefined,
        ColumnConfiguration: output.ColumnConfiguration !== undefined && output.ColumnConfiguration !== null
            ? deserializeAws_json1_1ColumnConfiguration(output.ColumnConfiguration, context)
            : undefined,
        ConnectionConfiguration: output.ConnectionConfiguration !== undefined && output.ConnectionConfiguration !== null
            ? deserializeAws_json1_1ConnectionConfiguration(output.ConnectionConfiguration, context)
            : undefined,
        DatabaseEngineType: output.DatabaseEngineType !== undefined && output.DatabaseEngineType !== null
            ? output.DatabaseEngineType
            : undefined,
        SqlConfiguration: output.SqlConfiguration !== undefined && output.SqlConfiguration !== null
            ? deserializeAws_json1_1SqlConfiguration(output.SqlConfiguration, context)
            : undefined,
        VpcConfiguration: output.VpcConfiguration !== undefined && output.VpcConfiguration !== null
            ? deserializeAws_json1_1DataSourceVpcConfiguration(output.VpcConfiguration, context)
            : undefined,
    };
};
var deserializeAws_json1_1DataSourceConfiguration = function (output, context) {
    return {
        ConfluenceConfiguration: output.ConfluenceConfiguration !== undefined && output.ConfluenceConfiguration !== null
            ? deserializeAws_json1_1ConfluenceConfiguration(output.ConfluenceConfiguration, context)
            : undefined,
        DatabaseConfiguration: output.DatabaseConfiguration !== undefined && output.DatabaseConfiguration !== null
            ? deserializeAws_json1_1DatabaseConfiguration(output.DatabaseConfiguration, context)
            : undefined,
        GoogleDriveConfiguration: output.GoogleDriveConfiguration !== undefined && output.GoogleDriveConfiguration !== null
            ? deserializeAws_json1_1GoogleDriveConfiguration(output.GoogleDriveConfiguration, context)
            : undefined,
        OneDriveConfiguration: output.OneDriveConfiguration !== undefined && output.OneDriveConfiguration !== null
            ? deserializeAws_json1_1OneDriveConfiguration(output.OneDriveConfiguration, context)
            : undefined,
        S3Configuration: output.S3Configuration !== undefined && output.S3Configuration !== null
            ? deserializeAws_json1_1S3DataSourceConfiguration(output.S3Configuration, context)
            : undefined,
        SalesforceConfiguration: output.SalesforceConfiguration !== undefined && output.SalesforceConfiguration !== null
            ? deserializeAws_json1_1SalesforceConfiguration(output.SalesforceConfiguration, context)
            : undefined,
        ServiceNowConfiguration: output.ServiceNowConfiguration !== undefined && output.ServiceNowConfiguration !== null
            ? deserializeAws_json1_1ServiceNowConfiguration(output.ServiceNowConfiguration, context)
            : undefined,
        SharePointConfiguration: output.SharePointConfiguration !== undefined && output.SharePointConfiguration !== null
            ? deserializeAws_json1_1SharePointConfiguration(output.SharePointConfiguration, context)
            : undefined,
    };
};
var deserializeAws_json1_1DataSourceInclusionsExclusionsStrings = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1DataSourceSummary = function (output, context) {
    return {
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null
            ? new Date(Math.round(output.UpdatedAt * 1000))
            : undefined,
    };
};
var deserializeAws_json1_1DataSourceSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DataSourceSummary(entry, context);
    });
};
var deserializeAws_json1_1DataSourceSyncJob = function (output, context) {
    return {
        DataSourceErrorCode: output.DataSourceErrorCode !== undefined && output.DataSourceErrorCode !== null
            ? output.DataSourceErrorCode
            : undefined,
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        ExecutionId: output.ExecutionId !== undefined && output.ExecutionId !== null ? output.ExecutionId : undefined,
        Metrics: output.Metrics !== undefined && output.Metrics !== null
            ? deserializeAws_json1_1DataSourceSyncJobMetrics(output.Metrics, context)
            : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
var deserializeAws_json1_1DataSourceSyncJobHistoryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DataSourceSyncJob(entry, context);
    });
};
var deserializeAws_json1_1DataSourceSyncJobMetrics = function (output, context) {
    return {
        DocumentsAdded: output.DocumentsAdded !== undefined && output.DocumentsAdded !== null ? output.DocumentsAdded : undefined,
        DocumentsDeleted: output.DocumentsDeleted !== undefined && output.DocumentsDeleted !== null ? output.DocumentsDeleted : undefined,
        DocumentsFailed: output.DocumentsFailed !== undefined && output.DocumentsFailed !== null ? output.DocumentsFailed : undefined,
        DocumentsModified: output.DocumentsModified !== undefined && output.DocumentsModified !== null
            ? output.DocumentsModified
            : undefined,
        DocumentsScanned: output.DocumentsScanned !== undefined && output.DocumentsScanned !== null ? output.DocumentsScanned : undefined,
    };
};
var deserializeAws_json1_1DataSourceToIndexFieldMapping = function (output, context) {
    return {
        DataSourceFieldName: output.DataSourceFieldName !== undefined && output.DataSourceFieldName !== null
            ? output.DataSourceFieldName
            : undefined,
        DateFieldFormat: output.DateFieldFormat !== undefined && output.DateFieldFormat !== null ? output.DateFieldFormat : undefined,
        IndexFieldName: output.IndexFieldName !== undefined && output.IndexFieldName !== null ? output.IndexFieldName : undefined,
    };
};
var deserializeAws_json1_1DataSourceToIndexFieldMappingList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DataSourceToIndexFieldMapping(entry, context);
    });
};
var deserializeAws_json1_1DataSourceVpcConfiguration = function (output, context) {
    return {
        SecurityGroupIds: output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
            ? deserializeAws_json1_1SecurityGroupIdList(output.SecurityGroupIds, context)
            : undefined,
        SubnetIds: output.SubnetIds !== undefined && output.SubnetIds !== null
            ? deserializeAws_json1_1SubnetIdList(output.SubnetIds, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeDataSourceResponse = function (output, context) {
    return {
        Configuration: output.Configuration !== undefined && output.Configuration !== null
            ? deserializeAws_json1_1DataSourceConfiguration(output.Configuration, context)
            : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        IndexId: output.IndexId !== undefined && output.IndexId !== null ? output.IndexId : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
        Schedule: output.Schedule !== undefined && output.Schedule !== null ? output.Schedule : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null
            ? new Date(Math.round(output.UpdatedAt * 1000))
            : undefined,
    };
};
var deserializeAws_json1_1DescribeFaqResponse = function (output, context) {
    return {
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        FileFormat: output.FileFormat !== undefined && output.FileFormat !== null ? output.FileFormat : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        IndexId: output.IndexId !== undefined && output.IndexId !== null ? output.IndexId : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
        S3Path: output.S3Path !== undefined && output.S3Path !== null
            ? deserializeAws_json1_1S3Path(output.S3Path, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null
            ? new Date(Math.round(output.UpdatedAt * 1000))
            : undefined,
    };
};
var deserializeAws_json1_1DescribeIndexResponse = function (output, context) {
    return {
        CapacityUnits: output.CapacityUnits !== undefined && output.CapacityUnits !== null
            ? deserializeAws_json1_1CapacityUnitsConfiguration(output.CapacityUnits, context)
            : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        DocumentMetadataConfigurations: output.DocumentMetadataConfigurations !== undefined && output.DocumentMetadataConfigurations !== null
            ? deserializeAws_json1_1DocumentMetadataConfigurationList(output.DocumentMetadataConfigurations, context)
            : undefined,
        Edition: output.Edition !== undefined && output.Edition !== null ? output.Edition : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        IndexStatistics: output.IndexStatistics !== undefined && output.IndexStatistics !== null
            ? deserializeAws_json1_1IndexStatistics(output.IndexStatistics, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
        ServerSideEncryptionConfiguration: output.ServerSideEncryptionConfiguration !== undefined && output.ServerSideEncryptionConfiguration !== null
            ? deserializeAws_json1_1ServerSideEncryptionConfiguration(output.ServerSideEncryptionConfiguration, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null
            ? new Date(Math.round(output.UpdatedAt * 1000))
            : undefined,
        UserContextPolicy: output.UserContextPolicy !== undefined && output.UserContextPolicy !== null
            ? output.UserContextPolicy
            : undefined,
        UserTokenConfigurations: output.UserTokenConfigurations !== undefined && output.UserTokenConfigurations !== null
            ? deserializeAws_json1_1UserTokenConfigurationList(output.UserTokenConfigurations, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeQuerySuggestionsBlockListResponse = function (output, context) {
    return {
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        FileSizeBytes: output.FileSizeBytes !== undefined && output.FileSizeBytes !== null ? output.FileSizeBytes : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        IndexId: output.IndexId !== undefined && output.IndexId !== null ? output.IndexId : undefined,
        ItemCount: output.ItemCount !== undefined && output.ItemCount !== null ? output.ItemCount : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
        SourceS3Path: output.SourceS3Path !== undefined && output.SourceS3Path !== null
            ? deserializeAws_json1_1S3Path(output.SourceS3Path, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null
            ? new Date(Math.round(output.UpdatedAt * 1000))
            : undefined,
    };
};
var deserializeAws_json1_1DescribeQuerySuggestionsConfigResponse = function (output, context) {
    return {
        IncludeQueriesWithoutUserInformation: output.IncludeQueriesWithoutUserInformation !== undefined && output.IncludeQueriesWithoutUserInformation !== null
            ? output.IncludeQueriesWithoutUserInformation
            : undefined,
        LastClearTime: output.LastClearTime !== undefined && output.LastClearTime !== null
            ? new Date(Math.round(output.LastClearTime * 1000))
            : undefined,
        LastSuggestionsBuildTime: output.LastSuggestionsBuildTime !== undefined && output.LastSuggestionsBuildTime !== null
            ? new Date(Math.round(output.LastSuggestionsBuildTime * 1000))
            : undefined,
        MinimumNumberOfQueryingUsers: output.MinimumNumberOfQueryingUsers !== undefined && output.MinimumNumberOfQueryingUsers !== null
            ? output.MinimumNumberOfQueryingUsers
            : undefined,
        MinimumQueryCount: output.MinimumQueryCount !== undefined && output.MinimumQueryCount !== null
            ? output.MinimumQueryCount
            : undefined,
        Mode: output.Mode !== undefined && output.Mode !== null ? output.Mode : undefined,
        QueryLogLookBackWindowInDays: output.QueryLogLookBackWindowInDays !== undefined && output.QueryLogLookBackWindowInDays !== null
            ? output.QueryLogLookBackWindowInDays
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        TotalSuggestionsCount: output.TotalSuggestionsCount !== undefined && output.TotalSuggestionsCount !== null
            ? output.TotalSuggestionsCount
            : undefined,
    };
};
var deserializeAws_json1_1DescribeThesaurusResponse = function (output, context) {
    return {
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        FileSizeBytes: output.FileSizeBytes !== undefined && output.FileSizeBytes !== null ? output.FileSizeBytes : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        IndexId: output.IndexId !== undefined && output.IndexId !== null ? output.IndexId : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
        SourceS3Path: output.SourceS3Path !== undefined && output.SourceS3Path !== null
            ? deserializeAws_json1_1S3Path(output.SourceS3Path, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        SynonymRuleCount: output.SynonymRuleCount !== undefined && output.SynonymRuleCount !== null ? output.SynonymRuleCount : undefined,
        TermCount: output.TermCount !== undefined && output.TermCount !== null ? output.TermCount : undefined,
        UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null
            ? new Date(Math.round(output.UpdatedAt * 1000))
            : undefined,
    };
};
var deserializeAws_json1_1DocumentAttribute = function (output, context) {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null
            ? deserializeAws_json1_1DocumentAttributeValue(output.Value, context)
            : undefined,
    };
};
var deserializeAws_json1_1DocumentAttributeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DocumentAttribute(entry, context);
    });
};
var deserializeAws_json1_1DocumentAttributeStringListValue = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1DocumentAttributeValue = function (output, context) {
    if (output.DateValue !== undefined && output.DateValue !== null) {
        return {
            DateValue: new Date(Math.round(output.DateValue * 1000)),
        };
    }
    if (output.LongValue !== undefined && output.LongValue !== null) {
        return {
            LongValue: output.LongValue,
        };
    }
    if (output.StringListValue !== undefined && output.StringListValue !== null) {
        return {
            StringListValue: deserializeAws_json1_1DocumentAttributeStringListValue(output.StringListValue, context),
        };
    }
    if (output.StringValue !== undefined && output.StringValue !== null) {
        return {
            StringValue: output.StringValue,
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
var deserializeAws_json1_1DocumentAttributeValueCountPair = function (output, context) {
    return {
        Count: output.Count !== undefined && output.Count !== null ? output.Count : undefined,
        DocumentAttributeValue: output.DocumentAttributeValue !== undefined && output.DocumentAttributeValue !== null
            ? deserializeAws_json1_1DocumentAttributeValue(output.DocumentAttributeValue, context)
            : undefined,
    };
};
var deserializeAws_json1_1DocumentAttributeValueCountPairList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DocumentAttributeValueCountPair(entry, context);
    });
};
var deserializeAws_json1_1DocumentMetadataConfiguration = function (output, context) {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Relevance: output.Relevance !== undefined && output.Relevance !== null
            ? deserializeAws_json1_1Relevance(output.Relevance, context)
            : undefined,
        Search: output.Search !== undefined && output.Search !== null
            ? deserializeAws_json1_1Search(output.Search, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
var deserializeAws_json1_1DocumentMetadataConfigurationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DocumentMetadataConfiguration(entry, context);
    });
};
var deserializeAws_json1_1DocumentsMetadataConfiguration = function (output, context) {
    return {
        S3Prefix: output.S3Prefix !== undefined && output.S3Prefix !== null ? output.S3Prefix : undefined,
    };
};
var deserializeAws_json1_1ExcludeMimeTypesList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1ExcludeSharedDrivesList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1ExcludeUserAccountsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1FacetResult = function (output, context) {
    return {
        DocumentAttributeKey: output.DocumentAttributeKey !== undefined && output.DocumentAttributeKey !== null
            ? output.DocumentAttributeKey
            : undefined,
        DocumentAttributeValueCountPairs: output.DocumentAttributeValueCountPairs !== undefined && output.DocumentAttributeValueCountPairs !== null
            ? deserializeAws_json1_1DocumentAttributeValueCountPairList(output.DocumentAttributeValueCountPairs, context)
            : undefined,
        DocumentAttributeValueType: output.DocumentAttributeValueType !== undefined && output.DocumentAttributeValueType !== null
            ? output.DocumentAttributeValueType
            : undefined,
    };
};
var deserializeAws_json1_1FacetResultList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FacetResult(entry, context);
    });
};
var deserializeAws_json1_1FaqStatistics = function (output, context) {
    return {
        IndexedQuestionAnswersCount: output.IndexedQuestionAnswersCount !== undefined && output.IndexedQuestionAnswersCount !== null
            ? output.IndexedQuestionAnswersCount
            : undefined,
    };
};
var deserializeAws_json1_1FaqSummary = function (output, context) {
    return {
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        FileFormat: output.FileFormat !== undefined && output.FileFormat !== null ? output.FileFormat : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null
            ? new Date(Math.round(output.UpdatedAt * 1000))
            : undefined,
    };
};
var deserializeAws_json1_1FaqSummaryItems = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FaqSummary(entry, context);
    });
};
var deserializeAws_json1_1GetQuerySuggestionsResponse = function (output, context) {
    return {
        QuerySuggestionsId: output.QuerySuggestionsId !== undefined && output.QuerySuggestionsId !== null
            ? output.QuerySuggestionsId
            : undefined,
        Suggestions: output.Suggestions !== undefined && output.Suggestions !== null
            ? deserializeAws_json1_1SuggestionList(output.Suggestions, context)
            : undefined,
    };
};
var deserializeAws_json1_1GoogleDriveConfiguration = function (output, context) {
    return {
        ExcludeMimeTypes: output.ExcludeMimeTypes !== undefined && output.ExcludeMimeTypes !== null
            ? deserializeAws_json1_1ExcludeMimeTypesList(output.ExcludeMimeTypes, context)
            : undefined,
        ExcludeSharedDrives: output.ExcludeSharedDrives !== undefined && output.ExcludeSharedDrives !== null
            ? deserializeAws_json1_1ExcludeSharedDrivesList(output.ExcludeSharedDrives, context)
            : undefined,
        ExcludeUserAccounts: output.ExcludeUserAccounts !== undefined && output.ExcludeUserAccounts !== null
            ? deserializeAws_json1_1ExcludeUserAccountsList(output.ExcludeUserAccounts, context)
            : undefined,
        ExclusionPatterns: output.ExclusionPatterns !== undefined && output.ExclusionPatterns !== null
            ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.ExclusionPatterns, context)
            : undefined,
        FieldMappings: output.FieldMappings !== undefined && output.FieldMappings !== null
            ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FieldMappings, context)
            : undefined,
        InclusionPatterns: output.InclusionPatterns !== undefined && output.InclusionPatterns !== null
            ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.InclusionPatterns, context)
            : undefined,
        SecretArn: output.SecretArn !== undefined && output.SecretArn !== null ? output.SecretArn : undefined,
    };
};
var deserializeAws_json1_1Highlight = function (output, context) {
    return {
        BeginOffset: output.BeginOffset !== undefined && output.BeginOffset !== null ? output.BeginOffset : undefined,
        EndOffset: output.EndOffset !== undefined && output.EndOffset !== null ? output.EndOffset : undefined,
        TopAnswer: output.TopAnswer !== undefined && output.TopAnswer !== null ? output.TopAnswer : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
var deserializeAws_json1_1HighlightList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Highlight(entry, context);
    });
};
var deserializeAws_json1_1IndexConfigurationSummary = function (output, context) {
    return {
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        Edition: output.Edition !== undefined && output.Edition !== null ? output.Edition : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null
            ? new Date(Math.round(output.UpdatedAt * 1000))
            : undefined,
    };
};
var deserializeAws_json1_1IndexConfigurationSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1IndexConfigurationSummary(entry, context);
    });
};
var deserializeAws_json1_1IndexStatistics = function (output, context) {
    return {
        FaqStatistics: output.FaqStatistics !== undefined && output.FaqStatistics !== null
            ? deserializeAws_json1_1FaqStatistics(output.FaqStatistics, context)
            : undefined,
        TextDocumentStatistics: output.TextDocumentStatistics !== undefined && output.TextDocumentStatistics !== null
            ? deserializeAws_json1_1TextDocumentStatistics(output.TextDocumentStatistics, context)
            : undefined,
    };
};
var deserializeAws_json1_1InternalServerException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1JsonTokenTypeConfiguration = function (output, context) {
    return {
        GroupAttributeField: output.GroupAttributeField !== undefined && output.GroupAttributeField !== null
            ? output.GroupAttributeField
            : undefined,
        UserNameAttributeField: output.UserNameAttributeField !== undefined && output.UserNameAttributeField !== null
            ? output.UserNameAttributeField
            : undefined,
    };
};
var deserializeAws_json1_1JwtTokenTypeConfiguration = function (output, context) {
    return {
        ClaimRegex: output.ClaimRegex !== undefined && output.ClaimRegex !== null ? output.ClaimRegex : undefined,
        GroupAttributeField: output.GroupAttributeField !== undefined && output.GroupAttributeField !== null
            ? output.GroupAttributeField
            : undefined,
        Issuer: output.Issuer !== undefined && output.Issuer !== null ? output.Issuer : undefined,
        KeyLocation: output.KeyLocation !== undefined && output.KeyLocation !== null ? output.KeyLocation : undefined,
        SecretManagerArn: output.SecretManagerArn !== undefined && output.SecretManagerArn !== null ? output.SecretManagerArn : undefined,
        URL: output.URL !== undefined && output.URL !== null ? output.URL : undefined,
        UserNameAttributeField: output.UserNameAttributeField !== undefined && output.UserNameAttributeField !== null
            ? output.UserNameAttributeField
            : undefined,
    };
};
var deserializeAws_json1_1ListDataSourcesResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        SummaryItems: output.SummaryItems !== undefined && output.SummaryItems !== null
            ? deserializeAws_json1_1DataSourceSummaryList(output.SummaryItems, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListDataSourceSyncJobsResponse = function (output, context) {
    return {
        History: output.History !== undefined && output.History !== null
            ? deserializeAws_json1_1DataSourceSyncJobHistoryList(output.History, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1ListFaqsResponse = function (output, context) {
    return {
        FaqSummaryItems: output.FaqSummaryItems !== undefined && output.FaqSummaryItems !== null
            ? deserializeAws_json1_1FaqSummaryItems(output.FaqSummaryItems, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1ListIndicesResponse = function (output, context) {
    return {
        IndexConfigurationSummaryItems: output.IndexConfigurationSummaryItems !== undefined && output.IndexConfigurationSummaryItems !== null
            ? deserializeAws_json1_1IndexConfigurationSummaryList(output.IndexConfigurationSummaryItems, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1ListQuerySuggestionsBlockListsResponse = function (output, context) {
    return {
        BlockListSummaryItems: output.BlockListSummaryItems !== undefined && output.BlockListSummaryItems !== null
            ? deserializeAws_json1_1QuerySuggestionsBlockListSummaryItems(output.BlockListSummaryItems, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1ListTagsForResourceResponse = function (output, context) {
    return {
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagList(output.Tags, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListThesauriResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        ThesaurusSummaryItems: output.ThesaurusSummaryItems !== undefined && output.ThesaurusSummaryItems !== null
            ? deserializeAws_json1_1ThesaurusSummaryItems(output.ThesaurusSummaryItems, context)
            : undefined,
    };
};
var deserializeAws_json1_1OneDriveConfiguration = function (output, context) {
    return {
        DisableLocalGroups: output.DisableLocalGroups !== undefined && output.DisableLocalGroups !== null
            ? output.DisableLocalGroups
            : undefined,
        ExclusionPatterns: output.ExclusionPatterns !== undefined && output.ExclusionPatterns !== null
            ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.ExclusionPatterns, context)
            : undefined,
        FieldMappings: output.FieldMappings !== undefined && output.FieldMappings !== null
            ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FieldMappings, context)
            : undefined,
        InclusionPatterns: output.InclusionPatterns !== undefined && output.InclusionPatterns !== null
            ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.InclusionPatterns, context)
            : undefined,
        OneDriveUsers: output.OneDriveUsers !== undefined && output.OneDriveUsers !== null
            ? deserializeAws_json1_1OneDriveUsers(output.OneDriveUsers, context)
            : undefined,
        SecretArn: output.SecretArn !== undefined && output.SecretArn !== null ? output.SecretArn : undefined,
        TenantDomain: output.TenantDomain !== undefined && output.TenantDomain !== null ? output.TenantDomain : undefined,
    };
};
var deserializeAws_json1_1OneDriveUserList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1OneDriveUsers = function (output, context) {
    return {
        OneDriveUserList: output.OneDriveUserList !== undefined && output.OneDriveUserList !== null
            ? deserializeAws_json1_1OneDriveUserList(output.OneDriveUserList, context)
            : undefined,
        OneDriveUserS3Path: output.OneDriveUserS3Path !== undefined && output.OneDriveUserS3Path !== null
            ? deserializeAws_json1_1S3Path(output.OneDriveUserS3Path, context)
            : undefined,
    };
};
var deserializeAws_json1_1QueryResult = function (output, context) {
    return {
        FacetResults: output.FacetResults !== undefined && output.FacetResults !== null
            ? deserializeAws_json1_1FacetResultList(output.FacetResults, context)
            : undefined,
        QueryId: output.QueryId !== undefined && output.QueryId !== null ? output.QueryId : undefined,
        ResultItems: output.ResultItems !== undefined && output.ResultItems !== null
            ? deserializeAws_json1_1QueryResultItemList(output.ResultItems, context)
            : undefined,
        TotalNumberOfResults: output.TotalNumberOfResults !== undefined && output.TotalNumberOfResults !== null
            ? output.TotalNumberOfResults
            : undefined,
    };
};
var deserializeAws_json1_1QueryResultItem = function (output, context) {
    return {
        AdditionalAttributes: output.AdditionalAttributes !== undefined && output.AdditionalAttributes !== null
            ? deserializeAws_json1_1AdditionalResultAttributeList(output.AdditionalAttributes, context)
            : undefined,
        DocumentAttributes: output.DocumentAttributes !== undefined && output.DocumentAttributes !== null
            ? deserializeAws_json1_1DocumentAttributeList(output.DocumentAttributes, context)
            : undefined,
        DocumentExcerpt: output.DocumentExcerpt !== undefined && output.DocumentExcerpt !== null
            ? deserializeAws_json1_1TextWithHighlights(output.DocumentExcerpt, context)
            : undefined,
        DocumentId: output.DocumentId !== undefined && output.DocumentId !== null ? output.DocumentId : undefined,
        DocumentTitle: output.DocumentTitle !== undefined && output.DocumentTitle !== null
            ? deserializeAws_json1_1TextWithHighlights(output.DocumentTitle, context)
            : undefined,
        DocumentURI: output.DocumentURI !== undefined && output.DocumentURI !== null ? output.DocumentURI : undefined,
        FeedbackToken: output.FeedbackToken !== undefined && output.FeedbackToken !== null ? output.FeedbackToken : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        ScoreAttributes: output.ScoreAttributes !== undefined && output.ScoreAttributes !== null
            ? deserializeAws_json1_1ScoreAttributes(output.ScoreAttributes, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
var deserializeAws_json1_1QueryResultItemList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1QueryResultItem(entry, context);
    });
};
var deserializeAws_json1_1QuerySuggestionsBlockListSummary = function (output, context) {
    return {
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        ItemCount: output.ItemCount !== undefined && output.ItemCount !== null ? output.ItemCount : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null
            ? new Date(Math.round(output.UpdatedAt * 1000))
            : undefined,
    };
};
var deserializeAws_json1_1QuerySuggestionsBlockListSummaryItems = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1QuerySuggestionsBlockListSummary(entry, context);
    });
};
var deserializeAws_json1_1Relevance = function (output, context) {
    return {
        Duration: output.Duration !== undefined && output.Duration !== null ? output.Duration : undefined,
        Freshness: output.Freshness !== undefined && output.Freshness !== null ? output.Freshness : undefined,
        Importance: output.Importance !== undefined && output.Importance !== null ? output.Importance : undefined,
        RankOrder: output.RankOrder !== undefined && output.RankOrder !== null ? output.RankOrder : undefined,
        ValueImportanceMap: output.ValueImportanceMap !== undefined && output.ValueImportanceMap !== null
            ? deserializeAws_json1_1ValueImportanceMap(output.ValueImportanceMap, context)
            : undefined,
    };
};
var deserializeAws_json1_1ResourceAlreadyExistException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1ResourceInUseException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1ResourceNotFoundException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1ResourceUnavailableException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1S3DataSourceConfiguration = function (output, context) {
    return {
        AccessControlListConfiguration: output.AccessControlListConfiguration !== undefined && output.AccessControlListConfiguration !== null
            ? deserializeAws_json1_1AccessControlListConfiguration(output.AccessControlListConfiguration, context)
            : undefined,
        BucketName: output.BucketName !== undefined && output.BucketName !== null ? output.BucketName : undefined,
        DocumentsMetadataConfiguration: output.DocumentsMetadataConfiguration !== undefined && output.DocumentsMetadataConfiguration !== null
            ? deserializeAws_json1_1DocumentsMetadataConfiguration(output.DocumentsMetadataConfiguration, context)
            : undefined,
        ExclusionPatterns: output.ExclusionPatterns !== undefined && output.ExclusionPatterns !== null
            ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.ExclusionPatterns, context)
            : undefined,
        InclusionPatterns: output.InclusionPatterns !== undefined && output.InclusionPatterns !== null
            ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.InclusionPatterns, context)
            : undefined,
        InclusionPrefixes: output.InclusionPrefixes !== undefined && output.InclusionPrefixes !== null
            ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.InclusionPrefixes, context)
            : undefined,
    };
};
var deserializeAws_json1_1S3Path = function (output, context) {
    return {
        Bucket: output.Bucket !== undefined && output.Bucket !== null ? output.Bucket : undefined,
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    };
};
var deserializeAws_json1_1SalesforceChatterFeedConfiguration = function (output, context) {
    return {
        DocumentDataFieldName: output.DocumentDataFieldName !== undefined && output.DocumentDataFieldName !== null
            ? output.DocumentDataFieldName
            : undefined,
        DocumentTitleFieldName: output.DocumentTitleFieldName !== undefined && output.DocumentTitleFieldName !== null
            ? output.DocumentTitleFieldName
            : undefined,
        FieldMappings: output.FieldMappings !== undefined && output.FieldMappings !== null
            ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FieldMappings, context)
            : undefined,
        IncludeFilterTypes: output.IncludeFilterTypes !== undefined && output.IncludeFilterTypes !== null
            ? deserializeAws_json1_1SalesforceChatterFeedIncludeFilterTypes(output.IncludeFilterTypes, context)
            : undefined,
    };
};
var deserializeAws_json1_1SalesforceChatterFeedIncludeFilterTypes = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1SalesforceConfiguration = function (output, context) {
    return {
        ChatterFeedConfiguration: output.ChatterFeedConfiguration !== undefined && output.ChatterFeedConfiguration !== null
            ? deserializeAws_json1_1SalesforceChatterFeedConfiguration(output.ChatterFeedConfiguration, context)
            : undefined,
        CrawlAttachments: output.CrawlAttachments !== undefined && output.CrawlAttachments !== null ? output.CrawlAttachments : undefined,
        ExcludeAttachmentFilePatterns: output.ExcludeAttachmentFilePatterns !== undefined && output.ExcludeAttachmentFilePatterns !== null
            ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.ExcludeAttachmentFilePatterns, context)
            : undefined,
        IncludeAttachmentFilePatterns: output.IncludeAttachmentFilePatterns !== undefined && output.IncludeAttachmentFilePatterns !== null
            ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.IncludeAttachmentFilePatterns, context)
            : undefined,
        KnowledgeArticleConfiguration: output.KnowledgeArticleConfiguration !== undefined && output.KnowledgeArticleConfiguration !== null
            ? deserializeAws_json1_1SalesforceKnowledgeArticleConfiguration(output.KnowledgeArticleConfiguration, context)
            : undefined,
        SecretArn: output.SecretArn !== undefined && output.SecretArn !== null ? output.SecretArn : undefined,
        ServerUrl: output.ServerUrl !== undefined && output.ServerUrl !== null ? output.ServerUrl : undefined,
        StandardObjectAttachmentConfiguration: output.StandardObjectAttachmentConfiguration !== undefined &&
            output.StandardObjectAttachmentConfiguration !== null
            ? deserializeAws_json1_1SalesforceStandardObjectAttachmentConfiguration(output.StandardObjectAttachmentConfiguration, context)
            : undefined,
        StandardObjectConfigurations: output.StandardObjectConfigurations !== undefined && output.StandardObjectConfigurations !== null
            ? deserializeAws_json1_1SalesforceStandardObjectConfigurationList(output.StandardObjectConfigurations, context)
            : undefined,
    };
};
var deserializeAws_json1_1SalesforceCustomKnowledgeArticleTypeConfiguration = function (output, context) {
    return {
        DocumentDataFieldName: output.DocumentDataFieldName !== undefined && output.DocumentDataFieldName !== null
            ? output.DocumentDataFieldName
            : undefined,
        DocumentTitleFieldName: output.DocumentTitleFieldName !== undefined && output.DocumentTitleFieldName !== null
            ? output.DocumentTitleFieldName
            : undefined,
        FieldMappings: output.FieldMappings !== undefined && output.FieldMappings !== null
            ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FieldMappings, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_json1_1SalesforceCustomKnowledgeArticleTypeConfigurationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SalesforceCustomKnowledgeArticleTypeConfiguration(entry, context);
    });
};
var deserializeAws_json1_1SalesforceKnowledgeArticleConfiguration = function (output, context) {
    return {
        CustomKnowledgeArticleTypeConfigurations: output.CustomKnowledgeArticleTypeConfigurations !== undefined &&
            output.CustomKnowledgeArticleTypeConfigurations !== null
            ? deserializeAws_json1_1SalesforceCustomKnowledgeArticleTypeConfigurationList(output.CustomKnowledgeArticleTypeConfigurations, context)
            : undefined,
        IncludedStates: output.IncludedStates !== undefined && output.IncludedStates !== null
            ? deserializeAws_json1_1SalesforceKnowledgeArticleStateList(output.IncludedStates, context)
            : undefined,
        StandardKnowledgeArticleTypeConfiguration: output.StandardKnowledgeArticleTypeConfiguration !== undefined &&
            output.StandardKnowledgeArticleTypeConfiguration !== null
            ? deserializeAws_json1_1SalesforceStandardKnowledgeArticleTypeConfiguration(output.StandardKnowledgeArticleTypeConfiguration, context)
            : undefined,
    };
};
var deserializeAws_json1_1SalesforceKnowledgeArticleStateList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1SalesforceStandardKnowledgeArticleTypeConfiguration = function (output, context) {
    return {
        DocumentDataFieldName: output.DocumentDataFieldName !== undefined && output.DocumentDataFieldName !== null
            ? output.DocumentDataFieldName
            : undefined,
        DocumentTitleFieldName: output.DocumentTitleFieldName !== undefined && output.DocumentTitleFieldName !== null
            ? output.DocumentTitleFieldName
            : undefined,
        FieldMappings: output.FieldMappings !== undefined && output.FieldMappings !== null
            ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FieldMappings, context)
            : undefined,
    };
};
var deserializeAws_json1_1SalesforceStandardObjectAttachmentConfiguration = function (output, context) {
    return {
        DocumentTitleFieldName: output.DocumentTitleFieldName !== undefined && output.DocumentTitleFieldName !== null
            ? output.DocumentTitleFieldName
            : undefined,
        FieldMappings: output.FieldMappings !== undefined && output.FieldMappings !== null
            ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FieldMappings, context)
            : undefined,
    };
};
var deserializeAws_json1_1SalesforceStandardObjectConfiguration = function (output, context) {
    return {
        DocumentDataFieldName: output.DocumentDataFieldName !== undefined && output.DocumentDataFieldName !== null
            ? output.DocumentDataFieldName
            : undefined,
        DocumentTitleFieldName: output.DocumentTitleFieldName !== undefined && output.DocumentTitleFieldName !== null
            ? output.DocumentTitleFieldName
            : undefined,
        FieldMappings: output.FieldMappings !== undefined && output.FieldMappings !== null
            ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FieldMappings, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_json1_1SalesforceStandardObjectConfigurationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SalesforceStandardObjectConfiguration(entry, context);
    });
};
var deserializeAws_json1_1ScoreAttributes = function (output, context) {
    return {
        ScoreConfidence: output.ScoreConfidence !== undefined && output.ScoreConfidence !== null ? output.ScoreConfidence : undefined,
    };
};
var deserializeAws_json1_1Search = function (output, context) {
    return {
        Displayable: output.Displayable !== undefined && output.Displayable !== null ? output.Displayable : undefined,
        Facetable: output.Facetable !== undefined && output.Facetable !== null ? output.Facetable : undefined,
        Searchable: output.Searchable !== undefined && output.Searchable !== null ? output.Searchable : undefined,
        Sortable: output.Sortable !== undefined && output.Sortable !== null ? output.Sortable : undefined,
    };
};
var deserializeAws_json1_1SecurityGroupIdList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1ServerSideEncryptionConfiguration = function (output, context) {
    return {
        KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
    };
};
var deserializeAws_json1_1ServiceNowConfiguration = function (output, context) {
    return {
        AuthenticationType: output.AuthenticationType !== undefined && output.AuthenticationType !== null
            ? output.AuthenticationType
            : undefined,
        HostUrl: output.HostUrl !== undefined && output.HostUrl !== null ? output.HostUrl : undefined,
        KnowledgeArticleConfiguration: output.KnowledgeArticleConfiguration !== undefined && output.KnowledgeArticleConfiguration !== null
            ? deserializeAws_json1_1ServiceNowKnowledgeArticleConfiguration(output.KnowledgeArticleConfiguration, context)
            : undefined,
        SecretArn: output.SecretArn !== undefined && output.SecretArn !== null ? output.SecretArn : undefined,
        ServiceCatalogConfiguration: output.ServiceCatalogConfiguration !== undefined && output.ServiceCatalogConfiguration !== null
            ? deserializeAws_json1_1ServiceNowServiceCatalogConfiguration(output.ServiceCatalogConfiguration, context)
            : undefined,
        ServiceNowBuildVersion: output.ServiceNowBuildVersion !== undefined && output.ServiceNowBuildVersion !== null
            ? output.ServiceNowBuildVersion
            : undefined,
    };
};
var deserializeAws_json1_1ServiceNowKnowledgeArticleConfiguration = function (output, context) {
    return {
        CrawlAttachments: output.CrawlAttachments !== undefined && output.CrawlAttachments !== null ? output.CrawlAttachments : undefined,
        DocumentDataFieldName: output.DocumentDataFieldName !== undefined && output.DocumentDataFieldName !== null
            ? output.DocumentDataFieldName
            : undefined,
        DocumentTitleFieldName: output.DocumentTitleFieldName !== undefined && output.DocumentTitleFieldName !== null
            ? output.DocumentTitleFieldName
            : undefined,
        ExcludeAttachmentFilePatterns: output.ExcludeAttachmentFilePatterns !== undefined && output.ExcludeAttachmentFilePatterns !== null
            ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.ExcludeAttachmentFilePatterns, context)
            : undefined,
        FieldMappings: output.FieldMappings !== undefined && output.FieldMappings !== null
            ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FieldMappings, context)
            : undefined,
        FilterQuery: output.FilterQuery !== undefined && output.FilterQuery !== null ? output.FilterQuery : undefined,
        IncludeAttachmentFilePatterns: output.IncludeAttachmentFilePatterns !== undefined && output.IncludeAttachmentFilePatterns !== null
            ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.IncludeAttachmentFilePatterns, context)
            : undefined,
    };
};
var deserializeAws_json1_1ServiceNowServiceCatalogConfiguration = function (output, context) {
    return {
        CrawlAttachments: output.CrawlAttachments !== undefined && output.CrawlAttachments !== null ? output.CrawlAttachments : undefined,
        DocumentDataFieldName: output.DocumentDataFieldName !== undefined && output.DocumentDataFieldName !== null
            ? output.DocumentDataFieldName
            : undefined,
        DocumentTitleFieldName: output.DocumentTitleFieldName !== undefined && output.DocumentTitleFieldName !== null
            ? output.DocumentTitleFieldName
            : undefined,
        ExcludeAttachmentFilePatterns: output.ExcludeAttachmentFilePatterns !== undefined && output.ExcludeAttachmentFilePatterns !== null
            ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.ExcludeAttachmentFilePatterns, context)
            : undefined,
        FieldMappings: output.FieldMappings !== undefined && output.FieldMappings !== null
            ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FieldMappings, context)
            : undefined,
        IncludeAttachmentFilePatterns: output.IncludeAttachmentFilePatterns !== undefined && output.IncludeAttachmentFilePatterns !== null
            ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.IncludeAttachmentFilePatterns, context)
            : undefined,
    };
};
var deserializeAws_json1_1ServiceQuotaExceededException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1SharePointConfiguration = function (output, context) {
    return {
        CrawlAttachments: output.CrawlAttachments !== undefined && output.CrawlAttachments !== null ? output.CrawlAttachments : undefined,
        DisableLocalGroups: output.DisableLocalGroups !== undefined && output.DisableLocalGroups !== null
            ? output.DisableLocalGroups
            : undefined,
        DocumentTitleFieldName: output.DocumentTitleFieldName !== undefined && output.DocumentTitleFieldName !== null
            ? output.DocumentTitleFieldName
            : undefined,
        ExclusionPatterns: output.ExclusionPatterns !== undefined && output.ExclusionPatterns !== null
            ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.ExclusionPatterns, context)
            : undefined,
        FieldMappings: output.FieldMappings !== undefined && output.FieldMappings !== null
            ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FieldMappings, context)
            : undefined,
        InclusionPatterns: output.InclusionPatterns !== undefined && output.InclusionPatterns !== null
            ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.InclusionPatterns, context)
            : undefined,
        SecretArn: output.SecretArn !== undefined && output.SecretArn !== null ? output.SecretArn : undefined,
        SharePointVersion: output.SharePointVersion !== undefined && output.SharePointVersion !== null
            ? output.SharePointVersion
            : undefined,
        Urls: output.Urls !== undefined && output.Urls !== null
            ? deserializeAws_json1_1SharePointUrlList(output.Urls, context)
            : undefined,
        UseChangeLog: output.UseChangeLog !== undefined && output.UseChangeLog !== null ? output.UseChangeLog : undefined,
        VpcConfiguration: output.VpcConfiguration !== undefined && output.VpcConfiguration !== null
            ? deserializeAws_json1_1DataSourceVpcConfiguration(output.VpcConfiguration, context)
            : undefined,
    };
};
var deserializeAws_json1_1SharePointUrlList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1SqlConfiguration = function (output, context) {
    return {
        QueryIdentifiersEnclosingOption: output.QueryIdentifiersEnclosingOption !== undefined && output.QueryIdentifiersEnclosingOption !== null
            ? output.QueryIdentifiersEnclosingOption
            : undefined,
    };
};
var deserializeAws_json1_1StartDataSourceSyncJobResponse = function (output, context) {
    return {
        ExecutionId: output.ExecutionId !== undefined && output.ExecutionId !== null ? output.ExecutionId : undefined,
    };
};
var deserializeAws_json1_1SubnetIdList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1Suggestion = function (output, context) {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Value: output.Value !== undefined && output.Value !== null
            ? deserializeAws_json1_1SuggestionValue(output.Value, context)
            : undefined,
    };
};
var deserializeAws_json1_1SuggestionHighlight = function (output, context) {
    return {
        BeginOffset: output.BeginOffset !== undefined && output.BeginOffset !== null ? output.BeginOffset : undefined,
        EndOffset: output.EndOffset !== undefined && output.EndOffset !== null ? output.EndOffset : undefined,
    };
};
var deserializeAws_json1_1SuggestionHighlightList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SuggestionHighlight(entry, context);
    });
};
var deserializeAws_json1_1SuggestionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Suggestion(entry, context);
    });
};
var deserializeAws_json1_1SuggestionTextWithHighlights = function (output, context) {
    return {
        Highlights: output.Highlights !== undefined && output.Highlights !== null
            ? deserializeAws_json1_1SuggestionHighlightList(output.Highlights, context)
            : undefined,
        Text: output.Text !== undefined && output.Text !== null ? output.Text : undefined,
    };
};
var deserializeAws_json1_1SuggestionValue = function (output, context) {
    return {
        Text: output.Text !== undefined && output.Text !== null
            ? deserializeAws_json1_1SuggestionTextWithHighlights(output.Text, context)
            : undefined,
    };
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
var deserializeAws_json1_1TextDocumentStatistics = function (output, context) {
    return {
        IndexedTextBytes: output.IndexedTextBytes !== undefined && output.IndexedTextBytes !== null ? output.IndexedTextBytes : undefined,
        IndexedTextDocumentsCount: output.IndexedTextDocumentsCount !== undefined && output.IndexedTextDocumentsCount !== null
            ? output.IndexedTextDocumentsCount
            : undefined,
    };
};
var deserializeAws_json1_1TextWithHighlights = function (output, context) {
    return {
        Highlights: output.Highlights !== undefined && output.Highlights !== null
            ? deserializeAws_json1_1HighlightList(output.Highlights, context)
            : undefined,
        Text: output.Text !== undefined && output.Text !== null ? output.Text : undefined,
    };
};
var deserializeAws_json1_1ThesaurusSummary = function (output, context) {
    return {
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null
            ? new Date(Math.round(output.UpdatedAt * 1000))
            : undefined,
    };
};
var deserializeAws_json1_1ThesaurusSummaryItems = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ThesaurusSummary(entry, context);
    });
};
var deserializeAws_json1_1ThrottlingException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1UntagResourceResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1UserTokenConfiguration = function (output, context) {
    return {
        JsonTokenTypeConfiguration: output.JsonTokenTypeConfiguration !== undefined && output.JsonTokenTypeConfiguration !== null
            ? deserializeAws_json1_1JsonTokenTypeConfiguration(output.JsonTokenTypeConfiguration, context)
            : undefined,
        JwtTokenTypeConfiguration: output.JwtTokenTypeConfiguration !== undefined && output.JwtTokenTypeConfiguration !== null
            ? deserializeAws_json1_1JwtTokenTypeConfiguration(output.JwtTokenTypeConfiguration, context)
            : undefined,
    };
};
var deserializeAws_json1_1UserTokenConfigurationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1UserTokenConfiguration(entry, context);
    });
};
var deserializeAws_json1_1ValidationException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1ValueImportanceMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
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