"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1DeleteQuerySuggestionsBlockListCommand = exports.deserializeAws_json1_1DeleteIndexCommand = exports.deserializeAws_json1_1DeleteFaqCommand = exports.deserializeAws_json1_1DeleteDataSourceCommand = exports.deserializeAws_json1_1CreateThesaurusCommand = exports.deserializeAws_json1_1CreateQuerySuggestionsBlockListCommand = exports.deserializeAws_json1_1CreateIndexCommand = exports.deserializeAws_json1_1CreateFaqCommand = exports.deserializeAws_json1_1CreateDataSourceCommand = exports.deserializeAws_json1_1ClearQuerySuggestionsCommand = exports.deserializeAws_json1_1BatchPutDocumentCommand = exports.deserializeAws_json1_1BatchDeleteDocumentCommand = exports.serializeAws_json1_1UpdateThesaurusCommand = exports.serializeAws_json1_1UpdateQuerySuggestionsConfigCommand = exports.serializeAws_json1_1UpdateQuerySuggestionsBlockListCommand = exports.serializeAws_json1_1UpdateIndexCommand = exports.serializeAws_json1_1UpdateDataSourceCommand = exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1SubmitFeedbackCommand = exports.serializeAws_json1_1StopDataSourceSyncJobCommand = exports.serializeAws_json1_1StartDataSourceSyncJobCommand = exports.serializeAws_json1_1QueryCommand = exports.serializeAws_json1_1ListThesauriCommand = exports.serializeAws_json1_1ListTagsForResourceCommand = exports.serializeAws_json1_1ListQuerySuggestionsBlockListsCommand = exports.serializeAws_json1_1ListIndicesCommand = exports.serializeAws_json1_1ListFaqsCommand = exports.serializeAws_json1_1ListDataSourceSyncJobsCommand = exports.serializeAws_json1_1ListDataSourcesCommand = exports.serializeAws_json1_1GetQuerySuggestionsCommand = exports.serializeAws_json1_1DescribeThesaurusCommand = exports.serializeAws_json1_1DescribeQuerySuggestionsConfigCommand = exports.serializeAws_json1_1DescribeQuerySuggestionsBlockListCommand = exports.serializeAws_json1_1DescribeIndexCommand = exports.serializeAws_json1_1DescribeFaqCommand = exports.serializeAws_json1_1DescribeDataSourceCommand = exports.serializeAws_json1_1DeleteThesaurusCommand = exports.serializeAws_json1_1DeleteQuerySuggestionsBlockListCommand = exports.serializeAws_json1_1DeleteIndexCommand = exports.serializeAws_json1_1DeleteFaqCommand = exports.serializeAws_json1_1DeleteDataSourceCommand = exports.serializeAws_json1_1CreateThesaurusCommand = exports.serializeAws_json1_1CreateQuerySuggestionsBlockListCommand = exports.serializeAws_json1_1CreateIndexCommand = exports.serializeAws_json1_1CreateFaqCommand = exports.serializeAws_json1_1CreateDataSourceCommand = exports.serializeAws_json1_1ClearQuerySuggestionsCommand = exports.serializeAws_json1_1BatchPutDocumentCommand = exports.serializeAws_json1_1BatchDeleteDocumentCommand = void 0;
exports.deserializeAws_json1_1UpdateThesaurusCommand = exports.deserializeAws_json1_1UpdateQuerySuggestionsConfigCommand = exports.deserializeAws_json1_1UpdateQuerySuggestionsBlockListCommand = exports.deserializeAws_json1_1UpdateIndexCommand = exports.deserializeAws_json1_1UpdateDataSourceCommand = exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1TagResourceCommand = exports.deserializeAws_json1_1SubmitFeedbackCommand = exports.deserializeAws_json1_1StopDataSourceSyncJobCommand = exports.deserializeAws_json1_1StartDataSourceSyncJobCommand = exports.deserializeAws_json1_1QueryCommand = exports.deserializeAws_json1_1ListThesauriCommand = exports.deserializeAws_json1_1ListTagsForResourceCommand = exports.deserializeAws_json1_1ListQuerySuggestionsBlockListsCommand = exports.deserializeAws_json1_1ListIndicesCommand = exports.deserializeAws_json1_1ListFaqsCommand = exports.deserializeAws_json1_1ListDataSourceSyncJobsCommand = exports.deserializeAws_json1_1ListDataSourcesCommand = exports.deserializeAws_json1_1GetQuerySuggestionsCommand = exports.deserializeAws_json1_1DescribeThesaurusCommand = exports.deserializeAws_json1_1DescribeQuerySuggestionsConfigCommand = exports.deserializeAws_json1_1DescribeQuerySuggestionsBlockListCommand = exports.deserializeAws_json1_1DescribeIndexCommand = exports.deserializeAws_json1_1DescribeFaqCommand = exports.deserializeAws_json1_1DescribeDataSourceCommand = exports.deserializeAws_json1_1DeleteThesaurusCommand = void 0;
const models_0_1 = require("../models/models_0");
const protocol_http_1 = require("@aws-sdk/protocol-http");
const uuid_1 = require("uuid");
const serializeAws_json1_1BatchDeleteDocumentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSKendraFrontendService.BatchDeleteDocument",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchDeleteDocumentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchDeleteDocumentCommand = serializeAws_json1_1BatchDeleteDocumentCommand;
const serializeAws_json1_1BatchPutDocumentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSKendraFrontendService.BatchPutDocument",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchPutDocumentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchPutDocumentCommand = serializeAws_json1_1BatchPutDocumentCommand;
const serializeAws_json1_1ClearQuerySuggestionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSKendraFrontendService.ClearQuerySuggestions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ClearQuerySuggestionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ClearQuerySuggestionsCommand = serializeAws_json1_1ClearQuerySuggestionsCommand;
const serializeAws_json1_1CreateDataSourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSKendraFrontendService.CreateDataSource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDataSourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateDataSourceCommand = serializeAws_json1_1CreateDataSourceCommand;
const serializeAws_json1_1CreateFaqCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSKendraFrontendService.CreateFaq",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateFaqRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateFaqCommand = serializeAws_json1_1CreateFaqCommand;
const serializeAws_json1_1CreateIndexCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSKendraFrontendService.CreateIndex",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateIndexRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateIndexCommand = serializeAws_json1_1CreateIndexCommand;
const serializeAws_json1_1CreateQuerySuggestionsBlockListCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSKendraFrontendService.CreateQuerySuggestionsBlockList",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateQuerySuggestionsBlockListRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateQuerySuggestionsBlockListCommand = serializeAws_json1_1CreateQuerySuggestionsBlockListCommand;
const serializeAws_json1_1CreateThesaurusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSKendraFrontendService.CreateThesaurus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateThesaurusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateThesaurusCommand = serializeAws_json1_1CreateThesaurusCommand;
const serializeAws_json1_1DeleteDataSourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSKendraFrontendService.DeleteDataSource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDataSourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteDataSourceCommand = serializeAws_json1_1DeleteDataSourceCommand;
const serializeAws_json1_1DeleteFaqCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSKendraFrontendService.DeleteFaq",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteFaqRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteFaqCommand = serializeAws_json1_1DeleteFaqCommand;
const serializeAws_json1_1DeleteIndexCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSKendraFrontendService.DeleteIndex",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteIndexRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteIndexCommand = serializeAws_json1_1DeleteIndexCommand;
const serializeAws_json1_1DeleteQuerySuggestionsBlockListCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSKendraFrontendService.DeleteQuerySuggestionsBlockList",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteQuerySuggestionsBlockListRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteQuerySuggestionsBlockListCommand = serializeAws_json1_1DeleteQuerySuggestionsBlockListCommand;
const serializeAws_json1_1DeleteThesaurusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSKendraFrontendService.DeleteThesaurus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteThesaurusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteThesaurusCommand = serializeAws_json1_1DeleteThesaurusCommand;
const serializeAws_json1_1DescribeDataSourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSKendraFrontendService.DescribeDataSource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDataSourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeDataSourceCommand = serializeAws_json1_1DescribeDataSourceCommand;
const serializeAws_json1_1DescribeFaqCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSKendraFrontendService.DescribeFaq",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeFaqRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeFaqCommand = serializeAws_json1_1DescribeFaqCommand;
const serializeAws_json1_1DescribeIndexCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSKendraFrontendService.DescribeIndex",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeIndexRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeIndexCommand = serializeAws_json1_1DescribeIndexCommand;
const serializeAws_json1_1DescribeQuerySuggestionsBlockListCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSKendraFrontendService.DescribeQuerySuggestionsBlockList",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeQuerySuggestionsBlockListRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeQuerySuggestionsBlockListCommand = serializeAws_json1_1DescribeQuerySuggestionsBlockListCommand;
const serializeAws_json1_1DescribeQuerySuggestionsConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSKendraFrontendService.DescribeQuerySuggestionsConfig",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeQuerySuggestionsConfigRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeQuerySuggestionsConfigCommand = serializeAws_json1_1DescribeQuerySuggestionsConfigCommand;
const serializeAws_json1_1DescribeThesaurusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSKendraFrontendService.DescribeThesaurus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeThesaurusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeThesaurusCommand = serializeAws_json1_1DescribeThesaurusCommand;
const serializeAws_json1_1GetQuerySuggestionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSKendraFrontendService.GetQuerySuggestions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetQuerySuggestionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetQuerySuggestionsCommand = serializeAws_json1_1GetQuerySuggestionsCommand;
const serializeAws_json1_1ListDataSourcesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSKendraFrontendService.ListDataSources",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDataSourcesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListDataSourcesCommand = serializeAws_json1_1ListDataSourcesCommand;
const serializeAws_json1_1ListDataSourceSyncJobsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSKendraFrontendService.ListDataSourceSyncJobs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDataSourceSyncJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListDataSourceSyncJobsCommand = serializeAws_json1_1ListDataSourceSyncJobsCommand;
const serializeAws_json1_1ListFaqsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSKendraFrontendService.ListFaqs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListFaqsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListFaqsCommand = serializeAws_json1_1ListFaqsCommand;
const serializeAws_json1_1ListIndicesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSKendraFrontendService.ListIndices",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListIndicesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListIndicesCommand = serializeAws_json1_1ListIndicesCommand;
const serializeAws_json1_1ListQuerySuggestionsBlockListsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSKendraFrontendService.ListQuerySuggestionsBlockLists",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListQuerySuggestionsBlockListsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListQuerySuggestionsBlockListsCommand = serializeAws_json1_1ListQuerySuggestionsBlockListsCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSKendraFrontendService.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1ListThesauriCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSKendraFrontendService.ListThesauri",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListThesauriRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListThesauriCommand = serializeAws_json1_1ListThesauriCommand;
const serializeAws_json1_1QueryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSKendraFrontendService.Query",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1QueryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1QueryCommand = serializeAws_json1_1QueryCommand;
const serializeAws_json1_1StartDataSourceSyncJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSKendraFrontendService.StartDataSourceSyncJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartDataSourceSyncJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartDataSourceSyncJobCommand = serializeAws_json1_1StartDataSourceSyncJobCommand;
const serializeAws_json1_1StopDataSourceSyncJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSKendraFrontendService.StopDataSourceSyncJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopDataSourceSyncJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopDataSourceSyncJobCommand = serializeAws_json1_1StopDataSourceSyncJobCommand;
const serializeAws_json1_1SubmitFeedbackCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSKendraFrontendService.SubmitFeedback",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SubmitFeedbackRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SubmitFeedbackCommand = serializeAws_json1_1SubmitFeedbackCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSKendraFrontendService.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSKendraFrontendService.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UpdateDataSourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSKendraFrontendService.UpdateDataSource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDataSourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateDataSourceCommand = serializeAws_json1_1UpdateDataSourceCommand;
const serializeAws_json1_1UpdateIndexCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSKendraFrontendService.UpdateIndex",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateIndexRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateIndexCommand = serializeAws_json1_1UpdateIndexCommand;
const serializeAws_json1_1UpdateQuerySuggestionsBlockListCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSKendraFrontendService.UpdateQuerySuggestionsBlockList",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateQuerySuggestionsBlockListRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateQuerySuggestionsBlockListCommand = serializeAws_json1_1UpdateQuerySuggestionsBlockListCommand;
const serializeAws_json1_1UpdateQuerySuggestionsConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSKendraFrontendService.UpdateQuerySuggestionsConfig",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateQuerySuggestionsConfigRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateQuerySuggestionsConfigCommand = serializeAws_json1_1UpdateQuerySuggestionsConfigCommand;
const serializeAws_json1_1UpdateThesaurusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSKendraFrontendService.UpdateThesaurus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateThesaurusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateThesaurusCommand = serializeAws_json1_1UpdateThesaurusCommand;
const deserializeAws_json1_1BatchDeleteDocumentCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchDeleteDocumentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchDeleteDocumentResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchDeleteDocumentCommand = deserializeAws_json1_1BatchDeleteDocumentCommand;
const deserializeAws_json1_1BatchDeleteDocumentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.kendra#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1BatchPutDocumentCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchPutDocumentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchPutDocumentResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchPutDocumentCommand = deserializeAws_json1_1BatchPutDocumentCommand;
const deserializeAws_json1_1BatchPutDocumentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.kendra#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.kendra#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ClearQuerySuggestionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ClearQuerySuggestionsCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ClearQuerySuggestionsCommand = deserializeAws_json1_1ClearQuerySuggestionsCommand;
const deserializeAws_json1_1ClearQuerySuggestionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.kendra#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateDataSourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateDataSourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDataSourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateDataSourceCommand = deserializeAws_json1_1CreateDataSourceCommand;
const deserializeAws_json1_1CreateDataSourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.kendra#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistException":
        case "com.amazonaws.kendra#ResourceAlreadyExistException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.kendra#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateFaqCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateFaqCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateFaqResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateFaqCommand = deserializeAws_json1_1CreateFaqCommand;
const deserializeAws_json1_1CreateFaqCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.kendra#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.kendra#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateIndexCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateIndexCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateIndexResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateIndexCommand = deserializeAws_json1_1CreateIndexCommand;
const deserializeAws_json1_1CreateIndexCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.kendra#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistException":
        case "com.amazonaws.kendra#ResourceAlreadyExistException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.kendra#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateQuerySuggestionsBlockListCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateQuerySuggestionsBlockListCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateQuerySuggestionsBlockListResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateQuerySuggestionsBlockListCommand = deserializeAws_json1_1CreateQuerySuggestionsBlockListCommand;
const deserializeAws_json1_1CreateQuerySuggestionsBlockListCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.kendra#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.kendra#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateThesaurusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateThesaurusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateThesaurusResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateThesaurusCommand = deserializeAws_json1_1CreateThesaurusCommand;
const deserializeAws_json1_1CreateThesaurusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.kendra#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.kendra#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteDataSourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteDataSourceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteDataSourceCommand = deserializeAws_json1_1DeleteDataSourceCommand;
const deserializeAws_json1_1DeleteDataSourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.kendra#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteFaqCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteFaqCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteFaqCommand = deserializeAws_json1_1DeleteFaqCommand;
const deserializeAws_json1_1DeleteFaqCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.kendra#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteIndexCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteIndexCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteIndexCommand = deserializeAws_json1_1DeleteIndexCommand;
const deserializeAws_json1_1DeleteIndexCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.kendra#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteQuerySuggestionsBlockListCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteQuerySuggestionsBlockListCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteQuerySuggestionsBlockListCommand = deserializeAws_json1_1DeleteQuerySuggestionsBlockListCommand;
const deserializeAws_json1_1DeleteQuerySuggestionsBlockListCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.kendra#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteThesaurusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteThesaurusCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteThesaurusCommand = deserializeAws_json1_1DeleteThesaurusCommand;
const deserializeAws_json1_1DeleteThesaurusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.kendra#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeDataSourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeDataSourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDataSourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeDataSourceCommand = deserializeAws_json1_1DescribeDataSourceCommand;
const deserializeAws_json1_1DescribeDataSourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeFaqCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeFaqCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeFaqResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeFaqCommand = deserializeAws_json1_1DescribeFaqCommand;
const deserializeAws_json1_1DescribeFaqCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeIndexCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeIndexCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeIndexResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeIndexCommand = deserializeAws_json1_1DescribeIndexCommand;
const deserializeAws_json1_1DescribeIndexCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeQuerySuggestionsBlockListCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeQuerySuggestionsBlockListCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeQuerySuggestionsBlockListResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeQuerySuggestionsBlockListCommand = deserializeAws_json1_1DescribeQuerySuggestionsBlockListCommand;
const deserializeAws_json1_1DescribeQuerySuggestionsBlockListCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeQuerySuggestionsConfigCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeQuerySuggestionsConfigCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeQuerySuggestionsConfigResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeQuerySuggestionsConfigCommand = deserializeAws_json1_1DescribeQuerySuggestionsConfigCommand;
const deserializeAws_json1_1DescribeQuerySuggestionsConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeThesaurusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeThesaurusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeThesaurusResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeThesaurusCommand = deserializeAws_json1_1DescribeThesaurusCommand;
const deserializeAws_json1_1DescribeThesaurusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetQuerySuggestionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetQuerySuggestionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetQuerySuggestionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetQuerySuggestionsCommand = deserializeAws_json1_1GetQuerySuggestionsCommand;
const deserializeAws_json1_1GetQuerySuggestionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.kendra#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.kendra#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListDataSourcesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListDataSourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDataSourcesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListDataSourcesCommand = deserializeAws_json1_1ListDataSourcesCommand;
const deserializeAws_json1_1ListDataSourcesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListDataSourceSyncJobsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListDataSourceSyncJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDataSourceSyncJobsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListDataSourceSyncJobsCommand = deserializeAws_json1_1ListDataSourceSyncJobsCommand;
const deserializeAws_json1_1ListDataSourceSyncJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.kendra#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListFaqsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListFaqsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListFaqsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListFaqsCommand = deserializeAws_json1_1ListFaqsCommand;
const deserializeAws_json1_1ListFaqsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListIndicesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListIndicesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListIndicesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListIndicesCommand = deserializeAws_json1_1ListIndicesCommand;
const deserializeAws_json1_1ListIndicesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListQuerySuggestionsBlockListsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListQuerySuggestionsBlockListsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListQuerySuggestionsBlockListsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListQuerySuggestionsBlockListsCommand = deserializeAws_json1_1ListQuerySuggestionsBlockListsCommand;
const deserializeAws_json1_1ListQuerySuggestionsBlockListsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTagsForResourceCommand = deserializeAws_json1_1ListTagsForResourceCommand;
const deserializeAws_json1_1ListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.kendra#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListThesauriCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListThesauriCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListThesauriResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListThesauriCommand = deserializeAws_json1_1ListThesauriCommand;
const deserializeAws_json1_1ListThesauriCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1QueryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1QueryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1QueryResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1QueryCommand = deserializeAws_json1_1QueryCommand;
const deserializeAws_json1_1QueryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.kendra#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.kendra#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1StartDataSourceSyncJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartDataSourceSyncJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartDataSourceSyncJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartDataSourceSyncJobCommand = deserializeAws_json1_1StartDataSourceSyncJobCommand;
const deserializeAws_json1_1StartDataSourceSyncJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.kendra#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kendra#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1StopDataSourceSyncJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopDataSourceSyncJobCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopDataSourceSyncJobCommand = deserializeAws_json1_1StopDataSourceSyncJobCommand;
const deserializeAws_json1_1StopDataSourceSyncJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1SubmitFeedbackCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SubmitFeedbackCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SubmitFeedbackCommand = deserializeAws_json1_1SubmitFeedbackCommand;
const deserializeAws_json1_1SubmitFeedbackCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.kendra#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1TagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1TagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TagResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1TagResourceCommand = deserializeAws_json1_1TagResourceCommand;
const deserializeAws_json1_1TagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.kendra#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UntagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UntagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UntagResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UntagResourceCommand = deserializeAws_json1_1UntagResourceCommand;
const deserializeAws_json1_1UntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.kendra#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateDataSourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateDataSourceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateDataSourceCommand = deserializeAws_json1_1UpdateDataSourceCommand;
const deserializeAws_json1_1UpdateDataSourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.kendra#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateIndexCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateIndexCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateIndexCommand = deserializeAws_json1_1UpdateIndexCommand;
const deserializeAws_json1_1UpdateIndexCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.kendra#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.kendra#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateQuerySuggestionsBlockListCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateQuerySuggestionsBlockListCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateQuerySuggestionsBlockListCommand = deserializeAws_json1_1UpdateQuerySuggestionsBlockListCommand;
const deserializeAws_json1_1UpdateQuerySuggestionsBlockListCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.kendra#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateQuerySuggestionsConfigCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateQuerySuggestionsConfigCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateQuerySuggestionsConfigCommand = deserializeAws_json1_1UpdateQuerySuggestionsConfigCommand;
const deserializeAws_json1_1UpdateQuerySuggestionsConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.kendra#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateThesaurusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateThesaurusCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateThesaurusCommand = deserializeAws_json1_1UpdateThesaurusCommand;
const deserializeAws_json1_1UpdateThesaurusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.kendra#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AccessDeniedException(body, context);
    const contents = {
        name: "AccessDeniedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ConflictExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConflictException(body, context);
    const contents = {
        name: "ConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServerException(body, context);
    const contents = {
        name: "InternalServerException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceAlreadyExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceAlreadyExistException(body, context);
    const contents = {
        name: "ResourceAlreadyExistException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceInUseException(body, context);
    const contents = {
        name: "ResourceInUseException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceUnavailableException(body, context);
    const contents = {
        name: "ResourceUnavailableException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ServiceQuotaExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceQuotaExceededException(body, context);
    const contents = {
        name: "ServiceQuotaExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ThrottlingException(body, context);
    const contents = {
        name: "ThrottlingException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ValidationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ValidationException(body, context);
    const contents = {
        name: "ValidationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1AccessControlListConfiguration = (input, context) => {
    return {
        ...(input.KeyPath !== undefined && input.KeyPath !== null && { KeyPath: input.KeyPath }),
    };
};
const serializeAws_json1_1AclConfiguration = (input, context) => {
    return {
        ...(input.AllowedGroupsColumnName !== undefined &&
            input.AllowedGroupsColumnName !== null && { AllowedGroupsColumnName: input.AllowedGroupsColumnName }),
    };
};
const serializeAws_json1_1AttributeFilter = (input, context) => {
    return {
        ...(input.AndAllFilters !== undefined &&
            input.AndAllFilters !== null && {
            AndAllFilters: serializeAws_json1_1AttributeFilterList(input.AndAllFilters, context),
        }),
        ...(input.ContainsAll !== undefined &&
            input.ContainsAll !== null && { ContainsAll: serializeAws_json1_1DocumentAttribute(input.ContainsAll, context) }),
        ...(input.ContainsAny !== undefined &&
            input.ContainsAny !== null && { ContainsAny: serializeAws_json1_1DocumentAttribute(input.ContainsAny, context) }),
        ...(input.EqualsTo !== undefined &&
            input.EqualsTo !== null && { EqualsTo: serializeAws_json1_1DocumentAttribute(input.EqualsTo, context) }),
        ...(input.GreaterThan !== undefined &&
            input.GreaterThan !== null && { GreaterThan: serializeAws_json1_1DocumentAttribute(input.GreaterThan, context) }),
        ...(input.GreaterThanOrEquals !== undefined &&
            input.GreaterThanOrEquals !== null && {
            GreaterThanOrEquals: serializeAws_json1_1DocumentAttribute(input.GreaterThanOrEquals, context),
        }),
        ...(input.LessThan !== undefined &&
            input.LessThan !== null && { LessThan: serializeAws_json1_1DocumentAttribute(input.LessThan, context) }),
        ...(input.LessThanOrEquals !== undefined &&
            input.LessThanOrEquals !== null && {
            LessThanOrEquals: serializeAws_json1_1DocumentAttribute(input.LessThanOrEquals, context),
        }),
        ...(input.NotFilter !== undefined &&
            input.NotFilter !== null && { NotFilter: serializeAws_json1_1AttributeFilter(input.NotFilter, context) }),
        ...(input.OrAllFilters !== undefined &&
            input.OrAllFilters !== null && {
            OrAllFilters: serializeAws_json1_1AttributeFilterList(input.OrAllFilters, context),
        }),
    };
};
const serializeAws_json1_1AttributeFilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1AttributeFilter(entry, context);
    });
};
const serializeAws_json1_1BatchDeleteDocumentRequest = (input, context) => {
    return {
        ...(input.DataSourceSyncJobMetricTarget !== undefined &&
            input.DataSourceSyncJobMetricTarget !== null && {
            DataSourceSyncJobMetricTarget: serializeAws_json1_1DataSourceSyncJobMetricTarget(input.DataSourceSyncJobMetricTarget, context),
        }),
        ...(input.DocumentIdList !== undefined &&
            input.DocumentIdList !== null && {
            DocumentIdList: serializeAws_json1_1DocumentIdList(input.DocumentIdList, context),
        }),
        ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
    };
};
const serializeAws_json1_1BatchPutDocumentRequest = (input, context) => {
    return {
        ...(input.Documents !== undefined &&
            input.Documents !== null && { Documents: serializeAws_json1_1DocumentList(input.Documents, context) }),
        ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    };
};
const serializeAws_json1_1CapacityUnitsConfiguration = (input, context) => {
    return {
        ...(input.QueryCapacityUnits !== undefined &&
            input.QueryCapacityUnits !== null && { QueryCapacityUnits: input.QueryCapacityUnits }),
        ...(input.StorageCapacityUnits !== undefined &&
            input.StorageCapacityUnits !== null && { StorageCapacityUnits: input.StorageCapacityUnits }),
    };
};
const serializeAws_json1_1ChangeDetectingColumns = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ClearQuerySuggestionsRequest = (input, context) => {
    return {
        ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
    };
};
const serializeAws_json1_1ClickFeedback = (input, context) => {
    return {
        ...(input.ClickTime !== undefined &&
            input.ClickTime !== null && { ClickTime: Math.round(input.ClickTime.getTime() / 1000) }),
        ...(input.ResultId !== undefined && input.ResultId !== null && { ResultId: input.ResultId }),
    };
};
const serializeAws_json1_1ClickFeedbackList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ClickFeedback(entry, context);
    });
};
const serializeAws_json1_1ColumnConfiguration = (input, context) => {
    return {
        ...(input.ChangeDetectingColumns !== undefined &&
            input.ChangeDetectingColumns !== null && {
            ChangeDetectingColumns: serializeAws_json1_1ChangeDetectingColumns(input.ChangeDetectingColumns, context),
        }),
        ...(input.DocumentDataColumnName !== undefined &&
            input.DocumentDataColumnName !== null && { DocumentDataColumnName: input.DocumentDataColumnName }),
        ...(input.DocumentIdColumnName !== undefined &&
            input.DocumentIdColumnName !== null && { DocumentIdColumnName: input.DocumentIdColumnName }),
        ...(input.DocumentTitleColumnName !== undefined &&
            input.DocumentTitleColumnName !== null && { DocumentTitleColumnName: input.DocumentTitleColumnName }),
        ...(input.FieldMappings !== undefined &&
            input.FieldMappings !== null && {
            FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
        }),
    };
};
const serializeAws_json1_1ConfluenceAttachmentConfiguration = (input, context) => {
    return {
        ...(input.AttachmentFieldMappings !== undefined &&
            input.AttachmentFieldMappings !== null && {
            AttachmentFieldMappings: serializeAws_json1_1ConfluenceAttachmentFieldMappingsList(input.AttachmentFieldMappings, context),
        }),
        ...(input.CrawlAttachments !== undefined &&
            input.CrawlAttachments !== null && { CrawlAttachments: input.CrawlAttachments }),
    };
};
const serializeAws_json1_1ConfluenceAttachmentFieldMappingsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ConfluenceAttachmentToIndexFieldMapping(entry, context);
    });
};
const serializeAws_json1_1ConfluenceAttachmentToIndexFieldMapping = (input, context) => {
    return {
        ...(input.DataSourceFieldName !== undefined &&
            input.DataSourceFieldName !== null && { DataSourceFieldName: input.DataSourceFieldName }),
        ...(input.DateFieldFormat !== undefined &&
            input.DateFieldFormat !== null && { DateFieldFormat: input.DateFieldFormat }),
        ...(input.IndexFieldName !== undefined &&
            input.IndexFieldName !== null && { IndexFieldName: input.IndexFieldName }),
    };
};
const serializeAws_json1_1ConfluenceBlogConfiguration = (input, context) => {
    return {
        ...(input.BlogFieldMappings !== undefined &&
            input.BlogFieldMappings !== null && {
            BlogFieldMappings: serializeAws_json1_1ConfluenceBlogFieldMappingsList(input.BlogFieldMappings, context),
        }),
    };
};
const serializeAws_json1_1ConfluenceBlogFieldMappingsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ConfluenceBlogToIndexFieldMapping(entry, context);
    });
};
const serializeAws_json1_1ConfluenceBlogToIndexFieldMapping = (input, context) => {
    return {
        ...(input.DataSourceFieldName !== undefined &&
            input.DataSourceFieldName !== null && { DataSourceFieldName: input.DataSourceFieldName }),
        ...(input.DateFieldFormat !== undefined &&
            input.DateFieldFormat !== null && { DateFieldFormat: input.DateFieldFormat }),
        ...(input.IndexFieldName !== undefined &&
            input.IndexFieldName !== null && { IndexFieldName: input.IndexFieldName }),
    };
};
const serializeAws_json1_1ConfluenceConfiguration = (input, context) => {
    return {
        ...(input.AttachmentConfiguration !== undefined &&
            input.AttachmentConfiguration !== null && {
            AttachmentConfiguration: serializeAws_json1_1ConfluenceAttachmentConfiguration(input.AttachmentConfiguration, context),
        }),
        ...(input.BlogConfiguration !== undefined &&
            input.BlogConfiguration !== null && {
            BlogConfiguration: serializeAws_json1_1ConfluenceBlogConfiguration(input.BlogConfiguration, context),
        }),
        ...(input.ExclusionPatterns !== undefined &&
            input.ExclusionPatterns !== null && {
            ExclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
        }),
        ...(input.InclusionPatterns !== undefined &&
            input.InclusionPatterns !== null && {
            InclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
        }),
        ...(input.PageConfiguration !== undefined &&
            input.PageConfiguration !== null && {
            PageConfiguration: serializeAws_json1_1ConfluencePageConfiguration(input.PageConfiguration, context),
        }),
        ...(input.SecretArn !== undefined && input.SecretArn !== null && { SecretArn: input.SecretArn }),
        ...(input.ServerUrl !== undefined && input.ServerUrl !== null && { ServerUrl: input.ServerUrl }),
        ...(input.SpaceConfiguration !== undefined &&
            input.SpaceConfiguration !== null && {
            SpaceConfiguration: serializeAws_json1_1ConfluenceSpaceConfiguration(input.SpaceConfiguration, context),
        }),
        ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
        ...(input.VpcConfiguration !== undefined &&
            input.VpcConfiguration !== null && {
            VpcConfiguration: serializeAws_json1_1DataSourceVpcConfiguration(input.VpcConfiguration, context),
        }),
    };
};
const serializeAws_json1_1ConfluencePageConfiguration = (input, context) => {
    return {
        ...(input.PageFieldMappings !== undefined &&
            input.PageFieldMappings !== null && {
            PageFieldMappings: serializeAws_json1_1ConfluencePageFieldMappingsList(input.PageFieldMappings, context),
        }),
    };
};
const serializeAws_json1_1ConfluencePageFieldMappingsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ConfluencePageToIndexFieldMapping(entry, context);
    });
};
const serializeAws_json1_1ConfluencePageToIndexFieldMapping = (input, context) => {
    return {
        ...(input.DataSourceFieldName !== undefined &&
            input.DataSourceFieldName !== null && { DataSourceFieldName: input.DataSourceFieldName }),
        ...(input.DateFieldFormat !== undefined &&
            input.DateFieldFormat !== null && { DateFieldFormat: input.DateFieldFormat }),
        ...(input.IndexFieldName !== undefined &&
            input.IndexFieldName !== null && { IndexFieldName: input.IndexFieldName }),
    };
};
const serializeAws_json1_1ConfluenceSpaceConfiguration = (input, context) => {
    return {
        ...(input.CrawlArchivedSpaces !== undefined &&
            input.CrawlArchivedSpaces !== null && { CrawlArchivedSpaces: input.CrawlArchivedSpaces }),
        ...(input.CrawlPersonalSpaces !== undefined &&
            input.CrawlPersonalSpaces !== null && { CrawlPersonalSpaces: input.CrawlPersonalSpaces }),
        ...(input.ExcludeSpaces !== undefined &&
            input.ExcludeSpaces !== null && {
            ExcludeSpaces: serializeAws_json1_1ConfluenceSpaceList(input.ExcludeSpaces, context),
        }),
        ...(input.IncludeSpaces !== undefined &&
            input.IncludeSpaces !== null && {
            IncludeSpaces: serializeAws_json1_1ConfluenceSpaceList(input.IncludeSpaces, context),
        }),
        ...(input.SpaceFieldMappings !== undefined &&
            input.SpaceFieldMappings !== null && {
            SpaceFieldMappings: serializeAws_json1_1ConfluenceSpaceFieldMappingsList(input.SpaceFieldMappings, context),
        }),
    };
};
const serializeAws_json1_1ConfluenceSpaceFieldMappingsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ConfluenceSpaceToIndexFieldMapping(entry, context);
    });
};
const serializeAws_json1_1ConfluenceSpaceList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ConfluenceSpaceToIndexFieldMapping = (input, context) => {
    return {
        ...(input.DataSourceFieldName !== undefined &&
            input.DataSourceFieldName !== null && { DataSourceFieldName: input.DataSourceFieldName }),
        ...(input.DateFieldFormat !== undefined &&
            input.DateFieldFormat !== null && { DateFieldFormat: input.DateFieldFormat }),
        ...(input.IndexFieldName !== undefined &&
            input.IndexFieldName !== null && { IndexFieldName: input.IndexFieldName }),
    };
};
const serializeAws_json1_1ConnectionConfiguration = (input, context) => {
    return {
        ...(input.DatabaseHost !== undefined && input.DatabaseHost !== null && { DatabaseHost: input.DatabaseHost }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.DatabasePort !== undefined && input.DatabasePort !== null && { DatabasePort: input.DatabasePort }),
        ...(input.SecretArn !== undefined && input.SecretArn !== null && { SecretArn: input.SecretArn }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_1CreateDataSourceRequest = (input, context) => {
    var _a;
    return {
        ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Configuration !== undefined &&
            input.Configuration !== null && {
            Configuration: serializeAws_json1_1DataSourceConfiguration(input.Configuration, context),
        }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
        ...(input.Schedule !== undefined && input.Schedule !== null && { Schedule: input.Schedule }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1CreateFaqRequest = (input, context) => {
    var _a;
    return {
        ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.FileFormat !== undefined && input.FileFormat !== null && { FileFormat: input.FileFormat }),
        ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
        ...(input.S3Path !== undefined &&
            input.S3Path !== null && { S3Path: serializeAws_json1_1S3Path(input.S3Path, context) }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateIndexRequest = (input, context) => {
    var _a;
    return {
        ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Edition !== undefined && input.Edition !== null && { Edition: input.Edition }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
        ...(input.ServerSideEncryptionConfiguration !== undefined &&
            input.ServerSideEncryptionConfiguration !== null && {
            ServerSideEncryptionConfiguration: serializeAws_json1_1ServerSideEncryptionConfiguration(input.ServerSideEncryptionConfiguration, context),
        }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
        ...(input.UserContextPolicy !== undefined &&
            input.UserContextPolicy !== null && { UserContextPolicy: input.UserContextPolicy }),
        ...(input.UserTokenConfigurations !== undefined &&
            input.UserTokenConfigurations !== null && {
            UserTokenConfigurations: serializeAws_json1_1UserTokenConfigurationList(input.UserTokenConfigurations, context),
        }),
    };
};
const serializeAws_json1_1CreateQuerySuggestionsBlockListRequest = (input, context) => {
    var _a;
    return {
        ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
        ...(input.SourceS3Path !== undefined &&
            input.SourceS3Path !== null && { SourceS3Path: serializeAws_json1_1S3Path(input.SourceS3Path, context) }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateThesaurusRequest = (input, context) => {
    var _a;
    return {
        ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
        ...(input.SourceS3Path !== undefined &&
            input.SourceS3Path !== null && { SourceS3Path: serializeAws_json1_1S3Path(input.SourceS3Path, context) }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1DatabaseConfiguration = (input, context) => {
    return {
        ...(input.AclConfiguration !== undefined &&
            input.AclConfiguration !== null && {
            AclConfiguration: serializeAws_json1_1AclConfiguration(input.AclConfiguration, context),
        }),
        ...(input.ColumnConfiguration !== undefined &&
            input.ColumnConfiguration !== null && {
            ColumnConfiguration: serializeAws_json1_1ColumnConfiguration(input.ColumnConfiguration, context),
        }),
        ...(input.ConnectionConfiguration !== undefined &&
            input.ConnectionConfiguration !== null && {
            ConnectionConfiguration: serializeAws_json1_1ConnectionConfiguration(input.ConnectionConfiguration, context),
        }),
        ...(input.DatabaseEngineType !== undefined &&
            input.DatabaseEngineType !== null && { DatabaseEngineType: input.DatabaseEngineType }),
        ...(input.SqlConfiguration !== undefined &&
            input.SqlConfiguration !== null && {
            SqlConfiguration: serializeAws_json1_1SqlConfiguration(input.SqlConfiguration, context),
        }),
        ...(input.VpcConfiguration !== undefined &&
            input.VpcConfiguration !== null && {
            VpcConfiguration: serializeAws_json1_1DataSourceVpcConfiguration(input.VpcConfiguration, context),
        }),
    };
};
const serializeAws_json1_1DataSourceConfiguration = (input, context) => {
    return {
        ...(input.ConfluenceConfiguration !== undefined &&
            input.ConfluenceConfiguration !== null && {
            ConfluenceConfiguration: serializeAws_json1_1ConfluenceConfiguration(input.ConfluenceConfiguration, context),
        }),
        ...(input.DatabaseConfiguration !== undefined &&
            input.DatabaseConfiguration !== null && {
            DatabaseConfiguration: serializeAws_json1_1DatabaseConfiguration(input.DatabaseConfiguration, context),
        }),
        ...(input.GoogleDriveConfiguration !== undefined &&
            input.GoogleDriveConfiguration !== null && {
            GoogleDriveConfiguration: serializeAws_json1_1GoogleDriveConfiguration(input.GoogleDriveConfiguration, context),
        }),
        ...(input.OneDriveConfiguration !== undefined &&
            input.OneDriveConfiguration !== null && {
            OneDriveConfiguration: serializeAws_json1_1OneDriveConfiguration(input.OneDriveConfiguration, context),
        }),
        ...(input.S3Configuration !== undefined &&
            input.S3Configuration !== null && {
            S3Configuration: serializeAws_json1_1S3DataSourceConfiguration(input.S3Configuration, context),
        }),
        ...(input.SalesforceConfiguration !== undefined &&
            input.SalesforceConfiguration !== null && {
            SalesforceConfiguration: serializeAws_json1_1SalesforceConfiguration(input.SalesforceConfiguration, context),
        }),
        ...(input.ServiceNowConfiguration !== undefined &&
            input.ServiceNowConfiguration !== null && {
            ServiceNowConfiguration: serializeAws_json1_1ServiceNowConfiguration(input.ServiceNowConfiguration, context),
        }),
        ...(input.SharePointConfiguration !== undefined &&
            input.SharePointConfiguration !== null && {
            SharePointConfiguration: serializeAws_json1_1SharePointConfiguration(input.SharePointConfiguration, context),
        }),
    };
};
const serializeAws_json1_1DataSourceInclusionsExclusionsStrings = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1DataSourceSyncJobMetricTarget = (input, context) => {
    return {
        ...(input.DataSourceId !== undefined && input.DataSourceId !== null && { DataSourceId: input.DataSourceId }),
        ...(input.DataSourceSyncJobId !== undefined &&
            input.DataSourceSyncJobId !== null && { DataSourceSyncJobId: input.DataSourceSyncJobId }),
    };
};
const serializeAws_json1_1DataSourceToIndexFieldMapping = (input, context) => {
    return {
        ...(input.DataSourceFieldName !== undefined &&
            input.DataSourceFieldName !== null && { DataSourceFieldName: input.DataSourceFieldName }),
        ...(input.DateFieldFormat !== undefined &&
            input.DateFieldFormat !== null && { DateFieldFormat: input.DateFieldFormat }),
        ...(input.IndexFieldName !== undefined &&
            input.IndexFieldName !== null && { IndexFieldName: input.IndexFieldName }),
    };
};
const serializeAws_json1_1DataSourceToIndexFieldMappingList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1DataSourceToIndexFieldMapping(entry, context);
    });
};
const serializeAws_json1_1DataSourceVpcConfiguration = (input, context) => {
    return {
        ...(input.SecurityGroupIds !== undefined &&
            input.SecurityGroupIds !== null && {
            SecurityGroupIds: serializeAws_json1_1SecurityGroupIdList(input.SecurityGroupIds, context),
        }),
        ...(input.SubnetIds !== undefined &&
            input.SubnetIds !== null && { SubnetIds: serializeAws_json1_1SubnetIdList(input.SubnetIds, context) }),
    };
};
const serializeAws_json1_1DeleteDataSourceRequest = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
    };
};
const serializeAws_json1_1DeleteFaqRequest = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
    };
};
const serializeAws_json1_1DeleteIndexRequest = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    };
};
const serializeAws_json1_1DeleteQuerySuggestionsBlockListRequest = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
    };
};
const serializeAws_json1_1DeleteThesaurusRequest = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
    };
};
const serializeAws_json1_1DescribeDataSourceRequest = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
    };
};
const serializeAws_json1_1DescribeFaqRequest = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
    };
};
const serializeAws_json1_1DescribeIndexRequest = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    };
};
const serializeAws_json1_1DescribeQuerySuggestionsBlockListRequest = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
    };
};
const serializeAws_json1_1DescribeQuerySuggestionsConfigRequest = (input, context) => {
    return {
        ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
    };
};
const serializeAws_json1_1DescribeThesaurusRequest = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
    };
};
const serializeAws_json1_1Document = (input, context) => {
    return {
        ...(input.AccessControlList !== undefined &&
            input.AccessControlList !== null && {
            AccessControlList: serializeAws_json1_1PrincipalList(input.AccessControlList, context),
        }),
        ...(input.Attributes !== undefined &&
            input.Attributes !== null && {
            Attributes: serializeAws_json1_1DocumentAttributeList(input.Attributes, context),
        }),
        ...(input.Blob !== undefined && input.Blob !== null && { Blob: context.base64Encoder(input.Blob) }),
        ...(input.ContentType !== undefined && input.ContentType !== null && { ContentType: input.ContentType }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.S3Path !== undefined &&
            input.S3Path !== null && { S3Path: serializeAws_json1_1S3Path(input.S3Path, context) }),
        ...(input.Title !== undefined && input.Title !== null && { Title: input.Title }),
    };
};
const serializeAws_json1_1DocumentAttribute = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined &&
            input.Value !== null && { Value: serializeAws_json1_1DocumentAttributeValue(input.Value, context) }),
    };
};
const serializeAws_json1_1DocumentAttributeKeyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1DocumentAttributeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1DocumentAttribute(entry, context);
    });
};
const serializeAws_json1_1DocumentAttributeStringListValue = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1DocumentAttributeValue = (input, context) => {
    return models_0_1.DocumentAttributeValue.visit(input, {
        DateValue: (value) => ({ DateValue: Math.round(value.getTime() / 1000) }),
        LongValue: (value) => ({ LongValue: value }),
        StringListValue: (value) => ({
            StringListValue: serializeAws_json1_1DocumentAttributeStringListValue(value, context),
        }),
        StringValue: (value) => ({ StringValue: value }),
        _: (name, value) => ({ name: value }),
    });
};
const serializeAws_json1_1DocumentIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1DocumentList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Document(entry, context);
    });
};
const serializeAws_json1_1DocumentMetadataConfiguration = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Relevance !== undefined &&
            input.Relevance !== null && { Relevance: serializeAws_json1_1Relevance(input.Relevance, context) }),
        ...(input.Search !== undefined &&
            input.Search !== null && { Search: serializeAws_json1_1Search(input.Search, context) }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1DocumentMetadataConfigurationList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1DocumentMetadataConfiguration(entry, context);
    });
};
const serializeAws_json1_1DocumentRelevanceConfiguration = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Relevance !== undefined &&
            input.Relevance !== null && { Relevance: serializeAws_json1_1Relevance(input.Relevance, context) }),
    };
};
const serializeAws_json1_1DocumentRelevanceOverrideConfigurationList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1DocumentRelevanceConfiguration(entry, context);
    });
};
const serializeAws_json1_1DocumentsMetadataConfiguration = (input, context) => {
    return {
        ...(input.S3Prefix !== undefined && input.S3Prefix !== null && { S3Prefix: input.S3Prefix }),
    };
};
const serializeAws_json1_1ExcludeMimeTypesList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ExcludeSharedDrivesList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ExcludeUserAccountsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1Facet = (input, context) => {
    return {
        ...(input.DocumentAttributeKey !== undefined &&
            input.DocumentAttributeKey !== null && { DocumentAttributeKey: input.DocumentAttributeKey }),
    };
};
const serializeAws_json1_1FacetList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Facet(entry, context);
    });
};
const serializeAws_json1_1GetQuerySuggestionsRequest = (input, context) => {
    return {
        ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
        ...(input.MaxSuggestionsCount !== undefined &&
            input.MaxSuggestionsCount !== null && { MaxSuggestionsCount: input.MaxSuggestionsCount }),
        ...(input.QueryText !== undefined && input.QueryText !== null && { QueryText: input.QueryText }),
    };
};
const serializeAws_json1_1GoogleDriveConfiguration = (input, context) => {
    return {
        ...(input.ExcludeMimeTypes !== undefined &&
            input.ExcludeMimeTypes !== null && {
            ExcludeMimeTypes: serializeAws_json1_1ExcludeMimeTypesList(input.ExcludeMimeTypes, context),
        }),
        ...(input.ExcludeSharedDrives !== undefined &&
            input.ExcludeSharedDrives !== null && {
            ExcludeSharedDrives: serializeAws_json1_1ExcludeSharedDrivesList(input.ExcludeSharedDrives, context),
        }),
        ...(input.ExcludeUserAccounts !== undefined &&
            input.ExcludeUserAccounts !== null && {
            ExcludeUserAccounts: serializeAws_json1_1ExcludeUserAccountsList(input.ExcludeUserAccounts, context),
        }),
        ...(input.ExclusionPatterns !== undefined &&
            input.ExclusionPatterns !== null && {
            ExclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
        }),
        ...(input.FieldMappings !== undefined &&
            input.FieldMappings !== null && {
            FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
        }),
        ...(input.InclusionPatterns !== undefined &&
            input.InclusionPatterns !== null && {
            InclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
        }),
        ...(input.SecretArn !== undefined && input.SecretArn !== null && { SecretArn: input.SecretArn }),
    };
};
const serializeAws_json1_1JsonTokenTypeConfiguration = (input, context) => {
    return {
        ...(input.GroupAttributeField !== undefined &&
            input.GroupAttributeField !== null && { GroupAttributeField: input.GroupAttributeField }),
        ...(input.UserNameAttributeField !== undefined &&
            input.UserNameAttributeField !== null && { UserNameAttributeField: input.UserNameAttributeField }),
    };
};
const serializeAws_json1_1JwtTokenTypeConfiguration = (input, context) => {
    return {
        ...(input.ClaimRegex !== undefined && input.ClaimRegex !== null && { ClaimRegex: input.ClaimRegex }),
        ...(input.GroupAttributeField !== undefined &&
            input.GroupAttributeField !== null && { GroupAttributeField: input.GroupAttributeField }),
        ...(input.Issuer !== undefined && input.Issuer !== null && { Issuer: input.Issuer }),
        ...(input.KeyLocation !== undefined && input.KeyLocation !== null && { KeyLocation: input.KeyLocation }),
        ...(input.SecretManagerArn !== undefined &&
            input.SecretManagerArn !== null && { SecretManagerArn: input.SecretManagerArn }),
        ...(input.URL !== undefined && input.URL !== null && { URL: input.URL }),
        ...(input.UserNameAttributeField !== undefined &&
            input.UserNameAttributeField !== null && { UserNameAttributeField: input.UserNameAttributeField }),
    };
};
const serializeAws_json1_1ListDataSourcesRequest = (input, context) => {
    return {
        ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListDataSourceSyncJobsRequest = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.StartTimeFilter !== undefined &&
            input.StartTimeFilter !== null && {
            StartTimeFilter: serializeAws_json1_1TimeRange(input.StartTimeFilter, context),
        }),
        ...(input.StatusFilter !== undefined && input.StatusFilter !== null && { StatusFilter: input.StatusFilter }),
    };
};
const serializeAws_json1_1ListFaqsRequest = (input, context) => {
    return {
        ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListIndicesRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListQuerySuggestionsBlockListsRequest = (input, context) => {
    return {
        ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    };
};
const serializeAws_json1_1ListThesauriRequest = (input, context) => {
    return {
        ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1OneDriveConfiguration = (input, context) => {
    return {
        ...(input.DisableLocalGroups !== undefined &&
            input.DisableLocalGroups !== null && { DisableLocalGroups: input.DisableLocalGroups }),
        ...(input.ExclusionPatterns !== undefined &&
            input.ExclusionPatterns !== null && {
            ExclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
        }),
        ...(input.FieldMappings !== undefined &&
            input.FieldMappings !== null && {
            FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
        }),
        ...(input.InclusionPatterns !== undefined &&
            input.InclusionPatterns !== null && {
            InclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
        }),
        ...(input.OneDriveUsers !== undefined &&
            input.OneDriveUsers !== null && {
            OneDriveUsers: serializeAws_json1_1OneDriveUsers(input.OneDriveUsers, context),
        }),
        ...(input.SecretArn !== undefined && input.SecretArn !== null && { SecretArn: input.SecretArn }),
        ...(input.TenantDomain !== undefined && input.TenantDomain !== null && { TenantDomain: input.TenantDomain }),
    };
};
const serializeAws_json1_1OneDriveUserList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1OneDriveUsers = (input, context) => {
    return {
        ...(input.OneDriveUserList !== undefined &&
            input.OneDriveUserList !== null && {
            OneDriveUserList: serializeAws_json1_1OneDriveUserList(input.OneDriveUserList, context),
        }),
        ...(input.OneDriveUserS3Path !== undefined &&
            input.OneDriveUserS3Path !== null && {
            OneDriveUserS3Path: serializeAws_json1_1S3Path(input.OneDriveUserS3Path, context),
        }),
    };
};
const serializeAws_json1_1Principal = (input, context) => {
    return {
        ...(input.Access !== undefined && input.Access !== null && { Access: input.Access }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1PrincipalList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Principal(entry, context);
    });
};
const serializeAws_json1_1QueryRequest = (input, context) => {
    return {
        ...(input.AttributeFilter !== undefined &&
            input.AttributeFilter !== null && {
            AttributeFilter: serializeAws_json1_1AttributeFilter(input.AttributeFilter, context),
        }),
        ...(input.DocumentRelevanceOverrideConfigurations !== undefined &&
            input.DocumentRelevanceOverrideConfigurations !== null && {
            DocumentRelevanceOverrideConfigurations: serializeAws_json1_1DocumentRelevanceOverrideConfigurationList(input.DocumentRelevanceOverrideConfigurations, context),
        }),
        ...(input.Facets !== undefined &&
            input.Facets !== null && { Facets: serializeAws_json1_1FacetList(input.Facets, context) }),
        ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
        ...(input.PageNumber !== undefined && input.PageNumber !== null && { PageNumber: input.PageNumber }),
        ...(input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize }),
        ...(input.QueryResultTypeFilter !== undefined &&
            input.QueryResultTypeFilter !== null && { QueryResultTypeFilter: input.QueryResultTypeFilter }),
        ...(input.QueryText !== undefined && input.QueryText !== null && { QueryText: input.QueryText }),
        ...(input.RequestedDocumentAttributes !== undefined &&
            input.RequestedDocumentAttributes !== null && {
            RequestedDocumentAttributes: serializeAws_json1_1DocumentAttributeKeyList(input.RequestedDocumentAttributes, context),
        }),
        ...(input.SortingConfiguration !== undefined &&
            input.SortingConfiguration !== null && {
            SortingConfiguration: serializeAws_json1_1SortingConfiguration(input.SortingConfiguration, context),
        }),
        ...(input.UserContext !== undefined &&
            input.UserContext !== null && { UserContext: serializeAws_json1_1UserContext(input.UserContext, context) }),
        ...(input.VisitorId !== undefined && input.VisitorId !== null && { VisitorId: input.VisitorId }),
    };
};
const serializeAws_json1_1Relevance = (input, context) => {
    return {
        ...(input.Duration !== undefined && input.Duration !== null && { Duration: input.Duration }),
        ...(input.Freshness !== undefined && input.Freshness !== null && { Freshness: input.Freshness }),
        ...(input.Importance !== undefined && input.Importance !== null && { Importance: input.Importance }),
        ...(input.RankOrder !== undefined && input.RankOrder !== null && { RankOrder: input.RankOrder }),
        ...(input.ValueImportanceMap !== undefined &&
            input.ValueImportanceMap !== null && {
            ValueImportanceMap: serializeAws_json1_1ValueImportanceMap(input.ValueImportanceMap, context),
        }),
    };
};
const serializeAws_json1_1RelevanceFeedback = (input, context) => {
    return {
        ...(input.RelevanceValue !== undefined &&
            input.RelevanceValue !== null && { RelevanceValue: input.RelevanceValue }),
        ...(input.ResultId !== undefined && input.ResultId !== null && { ResultId: input.ResultId }),
    };
};
const serializeAws_json1_1RelevanceFeedbackList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1RelevanceFeedback(entry, context);
    });
};
const serializeAws_json1_1S3DataSourceConfiguration = (input, context) => {
    return {
        ...(input.AccessControlListConfiguration !== undefined &&
            input.AccessControlListConfiguration !== null && {
            AccessControlListConfiguration: serializeAws_json1_1AccessControlListConfiguration(input.AccessControlListConfiguration, context),
        }),
        ...(input.BucketName !== undefined && input.BucketName !== null && { BucketName: input.BucketName }),
        ...(input.DocumentsMetadataConfiguration !== undefined &&
            input.DocumentsMetadataConfiguration !== null && {
            DocumentsMetadataConfiguration: serializeAws_json1_1DocumentsMetadataConfiguration(input.DocumentsMetadataConfiguration, context),
        }),
        ...(input.ExclusionPatterns !== undefined &&
            input.ExclusionPatterns !== null && {
            ExclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
        }),
        ...(input.InclusionPatterns !== undefined &&
            input.InclusionPatterns !== null && {
            InclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
        }),
        ...(input.InclusionPrefixes !== undefined &&
            input.InclusionPrefixes !== null && {
            InclusionPrefixes: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.InclusionPrefixes, context),
        }),
    };
};
const serializeAws_json1_1S3Path = (input, context) => {
    return {
        ...(input.Bucket !== undefined && input.Bucket !== null && { Bucket: input.Bucket }),
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    };
};
const serializeAws_json1_1SalesforceChatterFeedConfiguration = (input, context) => {
    return {
        ...(input.DocumentDataFieldName !== undefined &&
            input.DocumentDataFieldName !== null && { DocumentDataFieldName: input.DocumentDataFieldName }),
        ...(input.DocumentTitleFieldName !== undefined &&
            input.DocumentTitleFieldName !== null && { DocumentTitleFieldName: input.DocumentTitleFieldName }),
        ...(input.FieldMappings !== undefined &&
            input.FieldMappings !== null && {
            FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
        }),
        ...(input.IncludeFilterTypes !== undefined &&
            input.IncludeFilterTypes !== null && {
            IncludeFilterTypes: serializeAws_json1_1SalesforceChatterFeedIncludeFilterTypes(input.IncludeFilterTypes, context),
        }),
    };
};
const serializeAws_json1_1SalesforceChatterFeedIncludeFilterTypes = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1SalesforceConfiguration = (input, context) => {
    return {
        ...(input.ChatterFeedConfiguration !== undefined &&
            input.ChatterFeedConfiguration !== null && {
            ChatterFeedConfiguration: serializeAws_json1_1SalesforceChatterFeedConfiguration(input.ChatterFeedConfiguration, context),
        }),
        ...(input.CrawlAttachments !== undefined &&
            input.CrawlAttachments !== null && { CrawlAttachments: input.CrawlAttachments }),
        ...(input.ExcludeAttachmentFilePatterns !== undefined &&
            input.ExcludeAttachmentFilePatterns !== null && {
            ExcludeAttachmentFilePatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.ExcludeAttachmentFilePatterns, context),
        }),
        ...(input.IncludeAttachmentFilePatterns !== undefined &&
            input.IncludeAttachmentFilePatterns !== null && {
            IncludeAttachmentFilePatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.IncludeAttachmentFilePatterns, context),
        }),
        ...(input.KnowledgeArticleConfiguration !== undefined &&
            input.KnowledgeArticleConfiguration !== null && {
            KnowledgeArticleConfiguration: serializeAws_json1_1SalesforceKnowledgeArticleConfiguration(input.KnowledgeArticleConfiguration, context),
        }),
        ...(input.SecretArn !== undefined && input.SecretArn !== null && { SecretArn: input.SecretArn }),
        ...(input.ServerUrl !== undefined && input.ServerUrl !== null && { ServerUrl: input.ServerUrl }),
        ...(input.StandardObjectAttachmentConfiguration !== undefined &&
            input.StandardObjectAttachmentConfiguration !== null && {
            StandardObjectAttachmentConfiguration: serializeAws_json1_1SalesforceStandardObjectAttachmentConfiguration(input.StandardObjectAttachmentConfiguration, context),
        }),
        ...(input.StandardObjectConfigurations !== undefined &&
            input.StandardObjectConfigurations !== null && {
            StandardObjectConfigurations: serializeAws_json1_1SalesforceStandardObjectConfigurationList(input.StandardObjectConfigurations, context),
        }),
    };
};
const serializeAws_json1_1SalesforceCustomKnowledgeArticleTypeConfiguration = (input, context) => {
    return {
        ...(input.DocumentDataFieldName !== undefined &&
            input.DocumentDataFieldName !== null && { DocumentDataFieldName: input.DocumentDataFieldName }),
        ...(input.DocumentTitleFieldName !== undefined &&
            input.DocumentTitleFieldName !== null && { DocumentTitleFieldName: input.DocumentTitleFieldName }),
        ...(input.FieldMappings !== undefined &&
            input.FieldMappings !== null && {
            FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1SalesforceCustomKnowledgeArticleTypeConfigurationList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1SalesforceCustomKnowledgeArticleTypeConfiguration(entry, context);
    });
};
const serializeAws_json1_1SalesforceKnowledgeArticleConfiguration = (input, context) => {
    return {
        ...(input.CustomKnowledgeArticleTypeConfigurations !== undefined &&
            input.CustomKnowledgeArticleTypeConfigurations !== null && {
            CustomKnowledgeArticleTypeConfigurations: serializeAws_json1_1SalesforceCustomKnowledgeArticleTypeConfigurationList(input.CustomKnowledgeArticleTypeConfigurations, context),
        }),
        ...(input.IncludedStates !== undefined &&
            input.IncludedStates !== null && {
            IncludedStates: serializeAws_json1_1SalesforceKnowledgeArticleStateList(input.IncludedStates, context),
        }),
        ...(input.StandardKnowledgeArticleTypeConfiguration !== undefined &&
            input.StandardKnowledgeArticleTypeConfiguration !== null && {
            StandardKnowledgeArticleTypeConfiguration: serializeAws_json1_1SalesforceStandardKnowledgeArticleTypeConfiguration(input.StandardKnowledgeArticleTypeConfiguration, context),
        }),
    };
};
const serializeAws_json1_1SalesforceKnowledgeArticleStateList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1SalesforceStandardKnowledgeArticleTypeConfiguration = (input, context) => {
    return {
        ...(input.DocumentDataFieldName !== undefined &&
            input.DocumentDataFieldName !== null && { DocumentDataFieldName: input.DocumentDataFieldName }),
        ...(input.DocumentTitleFieldName !== undefined &&
            input.DocumentTitleFieldName !== null && { DocumentTitleFieldName: input.DocumentTitleFieldName }),
        ...(input.FieldMappings !== undefined &&
            input.FieldMappings !== null && {
            FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
        }),
    };
};
const serializeAws_json1_1SalesforceStandardObjectAttachmentConfiguration = (input, context) => {
    return {
        ...(input.DocumentTitleFieldName !== undefined &&
            input.DocumentTitleFieldName !== null && { DocumentTitleFieldName: input.DocumentTitleFieldName }),
        ...(input.FieldMappings !== undefined &&
            input.FieldMappings !== null && {
            FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
        }),
    };
};
const serializeAws_json1_1SalesforceStandardObjectConfiguration = (input, context) => {
    return {
        ...(input.DocumentDataFieldName !== undefined &&
            input.DocumentDataFieldName !== null && { DocumentDataFieldName: input.DocumentDataFieldName }),
        ...(input.DocumentTitleFieldName !== undefined &&
            input.DocumentTitleFieldName !== null && { DocumentTitleFieldName: input.DocumentTitleFieldName }),
        ...(input.FieldMappings !== undefined &&
            input.FieldMappings !== null && {
            FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1SalesforceStandardObjectConfigurationList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1SalesforceStandardObjectConfiguration(entry, context);
    });
};
const serializeAws_json1_1Search = (input, context) => {
    return {
        ...(input.Displayable !== undefined && input.Displayable !== null && { Displayable: input.Displayable }),
        ...(input.Facetable !== undefined && input.Facetable !== null && { Facetable: input.Facetable }),
        ...(input.Searchable !== undefined && input.Searchable !== null && { Searchable: input.Searchable }),
        ...(input.Sortable !== undefined && input.Sortable !== null && { Sortable: input.Sortable }),
    };
};
const serializeAws_json1_1SecurityGroupIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ServerSideEncryptionConfiguration = (input, context) => {
    return {
        ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
    };
};
const serializeAws_json1_1ServiceNowConfiguration = (input, context) => {
    return {
        ...(input.AuthenticationType !== undefined &&
            input.AuthenticationType !== null && { AuthenticationType: input.AuthenticationType }),
        ...(input.HostUrl !== undefined && input.HostUrl !== null && { HostUrl: input.HostUrl }),
        ...(input.KnowledgeArticleConfiguration !== undefined &&
            input.KnowledgeArticleConfiguration !== null && {
            KnowledgeArticleConfiguration: serializeAws_json1_1ServiceNowKnowledgeArticleConfiguration(input.KnowledgeArticleConfiguration, context),
        }),
        ...(input.SecretArn !== undefined && input.SecretArn !== null && { SecretArn: input.SecretArn }),
        ...(input.ServiceCatalogConfiguration !== undefined &&
            input.ServiceCatalogConfiguration !== null && {
            ServiceCatalogConfiguration: serializeAws_json1_1ServiceNowServiceCatalogConfiguration(input.ServiceCatalogConfiguration, context),
        }),
        ...(input.ServiceNowBuildVersion !== undefined &&
            input.ServiceNowBuildVersion !== null && { ServiceNowBuildVersion: input.ServiceNowBuildVersion }),
    };
};
const serializeAws_json1_1ServiceNowKnowledgeArticleConfiguration = (input, context) => {
    return {
        ...(input.CrawlAttachments !== undefined &&
            input.CrawlAttachments !== null && { CrawlAttachments: input.CrawlAttachments }),
        ...(input.DocumentDataFieldName !== undefined &&
            input.DocumentDataFieldName !== null && { DocumentDataFieldName: input.DocumentDataFieldName }),
        ...(input.DocumentTitleFieldName !== undefined &&
            input.DocumentTitleFieldName !== null && { DocumentTitleFieldName: input.DocumentTitleFieldName }),
        ...(input.ExcludeAttachmentFilePatterns !== undefined &&
            input.ExcludeAttachmentFilePatterns !== null && {
            ExcludeAttachmentFilePatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.ExcludeAttachmentFilePatterns, context),
        }),
        ...(input.FieldMappings !== undefined &&
            input.FieldMappings !== null && {
            FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
        }),
        ...(input.FilterQuery !== undefined && input.FilterQuery !== null && { FilterQuery: input.FilterQuery }),
        ...(input.IncludeAttachmentFilePatterns !== undefined &&
            input.IncludeAttachmentFilePatterns !== null && {
            IncludeAttachmentFilePatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.IncludeAttachmentFilePatterns, context),
        }),
    };
};
const serializeAws_json1_1ServiceNowServiceCatalogConfiguration = (input, context) => {
    return {
        ...(input.CrawlAttachments !== undefined &&
            input.CrawlAttachments !== null && { CrawlAttachments: input.CrawlAttachments }),
        ...(input.DocumentDataFieldName !== undefined &&
            input.DocumentDataFieldName !== null && { DocumentDataFieldName: input.DocumentDataFieldName }),
        ...(input.DocumentTitleFieldName !== undefined &&
            input.DocumentTitleFieldName !== null && { DocumentTitleFieldName: input.DocumentTitleFieldName }),
        ...(input.ExcludeAttachmentFilePatterns !== undefined &&
            input.ExcludeAttachmentFilePatterns !== null && {
            ExcludeAttachmentFilePatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.ExcludeAttachmentFilePatterns, context),
        }),
        ...(input.FieldMappings !== undefined &&
            input.FieldMappings !== null && {
            FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
        }),
        ...(input.IncludeAttachmentFilePatterns !== undefined &&
            input.IncludeAttachmentFilePatterns !== null && {
            IncludeAttachmentFilePatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.IncludeAttachmentFilePatterns, context),
        }),
    };
};
const serializeAws_json1_1SharePointConfiguration = (input, context) => {
    return {
        ...(input.CrawlAttachments !== undefined &&
            input.CrawlAttachments !== null && { CrawlAttachments: input.CrawlAttachments }),
        ...(input.DisableLocalGroups !== undefined &&
            input.DisableLocalGroups !== null && { DisableLocalGroups: input.DisableLocalGroups }),
        ...(input.DocumentTitleFieldName !== undefined &&
            input.DocumentTitleFieldName !== null && { DocumentTitleFieldName: input.DocumentTitleFieldName }),
        ...(input.ExclusionPatterns !== undefined &&
            input.ExclusionPatterns !== null && {
            ExclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
        }),
        ...(input.FieldMappings !== undefined &&
            input.FieldMappings !== null && {
            FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
        }),
        ...(input.InclusionPatterns !== undefined &&
            input.InclusionPatterns !== null && {
            InclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
        }),
        ...(input.SecretArn !== undefined && input.SecretArn !== null && { SecretArn: input.SecretArn }),
        ...(input.SharePointVersion !== undefined &&
            input.SharePointVersion !== null && { SharePointVersion: input.SharePointVersion }),
        ...(input.Urls !== undefined &&
            input.Urls !== null && { Urls: serializeAws_json1_1SharePointUrlList(input.Urls, context) }),
        ...(input.UseChangeLog !== undefined && input.UseChangeLog !== null && { UseChangeLog: input.UseChangeLog }),
        ...(input.VpcConfiguration !== undefined &&
            input.VpcConfiguration !== null && {
            VpcConfiguration: serializeAws_json1_1DataSourceVpcConfiguration(input.VpcConfiguration, context),
        }),
    };
};
const serializeAws_json1_1SharePointUrlList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1SortingConfiguration = (input, context) => {
    return {
        ...(input.DocumentAttributeKey !== undefined &&
            input.DocumentAttributeKey !== null && { DocumentAttributeKey: input.DocumentAttributeKey }),
        ...(input.SortOrder !== undefined && input.SortOrder !== null && { SortOrder: input.SortOrder }),
    };
};
const serializeAws_json1_1SqlConfiguration = (input, context) => {
    return {
        ...(input.QueryIdentifiersEnclosingOption !== undefined &&
            input.QueryIdentifiersEnclosingOption !== null && {
            QueryIdentifiersEnclosingOption: input.QueryIdentifiersEnclosingOption,
        }),
    };
};
const serializeAws_json1_1StartDataSourceSyncJobRequest = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
    };
};
const serializeAws_json1_1StopDataSourceSyncJobRequest = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
    };
};
const serializeAws_json1_1SubmitFeedbackRequest = (input, context) => {
    return {
        ...(input.ClickFeedbackItems !== undefined &&
            input.ClickFeedbackItems !== null && {
            ClickFeedbackItems: serializeAws_json1_1ClickFeedbackList(input.ClickFeedbackItems, context),
        }),
        ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
        ...(input.QueryId !== undefined && input.QueryId !== null && { QueryId: input.QueryId }),
        ...(input.RelevanceFeedbackItems !== undefined &&
            input.RelevanceFeedbackItems !== null && {
            RelevanceFeedbackItems: serializeAws_json1_1RelevanceFeedbackList(input.RelevanceFeedbackItems, context),
        }),
    };
};
const serializeAws_json1_1SubnetIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1Tag = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1TagKeyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1TagList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1TimeRange = (input, context) => {
    return {
        ...(input.EndTime !== undefined &&
            input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
        ...(input.StartTime !== undefined &&
            input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
    };
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
    };
};
const serializeAws_json1_1UpdateDataSourceRequest = (input, context) => {
    return {
        ...(input.Configuration !== undefined &&
            input.Configuration !== null && {
            Configuration: serializeAws_json1_1DataSourceConfiguration(input.Configuration, context),
        }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
        ...(input.Schedule !== undefined && input.Schedule !== null && { Schedule: input.Schedule }),
    };
};
const serializeAws_json1_1UpdateIndexRequest = (input, context) => {
    return {
        ...(input.CapacityUnits !== undefined &&
            input.CapacityUnits !== null && {
            CapacityUnits: serializeAws_json1_1CapacityUnitsConfiguration(input.CapacityUnits, context),
        }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.DocumentMetadataConfigurationUpdates !== undefined &&
            input.DocumentMetadataConfigurationUpdates !== null && {
            DocumentMetadataConfigurationUpdates: serializeAws_json1_1DocumentMetadataConfigurationList(input.DocumentMetadataConfigurationUpdates, context),
        }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
        ...(input.UserContextPolicy !== undefined &&
            input.UserContextPolicy !== null && { UserContextPolicy: input.UserContextPolicy }),
        ...(input.UserTokenConfigurations !== undefined &&
            input.UserTokenConfigurations !== null && {
            UserTokenConfigurations: serializeAws_json1_1UserTokenConfigurationList(input.UserTokenConfigurations, context),
        }),
    };
};
const serializeAws_json1_1UpdateQuerySuggestionsBlockListRequest = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
        ...(input.SourceS3Path !== undefined &&
            input.SourceS3Path !== null && { SourceS3Path: serializeAws_json1_1S3Path(input.SourceS3Path, context) }),
    };
};
const serializeAws_json1_1UpdateQuerySuggestionsConfigRequest = (input, context) => {
    return {
        ...(input.IncludeQueriesWithoutUserInformation !== undefined &&
            input.IncludeQueriesWithoutUserInformation !== null && {
            IncludeQueriesWithoutUserInformation: input.IncludeQueriesWithoutUserInformation,
        }),
        ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
        ...(input.MinimumNumberOfQueryingUsers !== undefined &&
            input.MinimumNumberOfQueryingUsers !== null && {
            MinimumNumberOfQueryingUsers: input.MinimumNumberOfQueryingUsers,
        }),
        ...(input.MinimumQueryCount !== undefined &&
            input.MinimumQueryCount !== null && { MinimumQueryCount: input.MinimumQueryCount }),
        ...(input.Mode !== undefined && input.Mode !== null && { Mode: input.Mode }),
        ...(input.QueryLogLookBackWindowInDays !== undefined &&
            input.QueryLogLookBackWindowInDays !== null && {
            QueryLogLookBackWindowInDays: input.QueryLogLookBackWindowInDays,
        }),
    };
};
const serializeAws_json1_1UpdateThesaurusRequest = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
        ...(input.SourceS3Path !== undefined &&
            input.SourceS3Path !== null && { SourceS3Path: serializeAws_json1_1S3Path(input.SourceS3Path, context) }),
    };
};
const serializeAws_json1_1UserContext = (input, context) => {
    return {
        ...(input.Token !== undefined && input.Token !== null && { Token: input.Token }),
    };
};
const serializeAws_json1_1UserTokenConfiguration = (input, context) => {
    return {
        ...(input.JsonTokenTypeConfiguration !== undefined &&
            input.JsonTokenTypeConfiguration !== null && {
            JsonTokenTypeConfiguration: serializeAws_json1_1JsonTokenTypeConfiguration(input.JsonTokenTypeConfiguration, context),
        }),
        ...(input.JwtTokenTypeConfiguration !== undefined &&
            input.JwtTokenTypeConfiguration !== null && {
            JwtTokenTypeConfiguration: serializeAws_json1_1JwtTokenTypeConfiguration(input.JwtTokenTypeConfiguration, context),
        }),
    };
};
const serializeAws_json1_1UserTokenConfigurationList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1UserTokenConfiguration(entry, context);
    });
};
const serializeAws_json1_1ValueImportanceMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeAws_json1_1AccessControlListConfiguration = (output, context) => {
    return {
        KeyPath: output.KeyPath !== undefined && output.KeyPath !== null ? output.KeyPath : undefined,
    };
};
const deserializeAws_json1_1AccessDeniedException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1AclConfiguration = (output, context) => {
    return {
        AllowedGroupsColumnName: output.AllowedGroupsColumnName !== undefined && output.AllowedGroupsColumnName !== null
            ? output.AllowedGroupsColumnName
            : undefined,
    };
};
const deserializeAws_json1_1AdditionalResultAttribute = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null
            ? deserializeAws_json1_1AdditionalResultAttributeValue(output.Value, context)
            : undefined,
        ValueType: output.ValueType !== undefined && output.ValueType !== null ? output.ValueType : undefined,
    };
};
const deserializeAws_json1_1AdditionalResultAttributeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AdditionalResultAttribute(entry, context);
    });
};
const deserializeAws_json1_1AdditionalResultAttributeValue = (output, context) => {
    return {
        TextWithHighlightsValue: output.TextWithHighlightsValue !== undefined && output.TextWithHighlightsValue !== null
            ? deserializeAws_json1_1TextWithHighlights(output.TextWithHighlightsValue, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchDeleteDocumentResponse = (output, context) => {
    return {
        FailedDocuments: output.FailedDocuments !== undefined && output.FailedDocuments !== null
            ? deserializeAws_json1_1BatchDeleteDocumentResponseFailedDocuments(output.FailedDocuments, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchDeleteDocumentResponseFailedDocument = (output, context) => {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    };
};
const deserializeAws_json1_1BatchDeleteDocumentResponseFailedDocuments = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BatchDeleteDocumentResponseFailedDocument(entry, context);
    });
};
const deserializeAws_json1_1BatchPutDocumentResponse = (output, context) => {
    return {
        FailedDocuments: output.FailedDocuments !== undefined && output.FailedDocuments !== null
            ? deserializeAws_json1_1BatchPutDocumentResponseFailedDocuments(output.FailedDocuments, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchPutDocumentResponseFailedDocument = (output, context) => {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    };
};
const deserializeAws_json1_1BatchPutDocumentResponseFailedDocuments = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BatchPutDocumentResponseFailedDocument(entry, context);
    });
};
const deserializeAws_json1_1CapacityUnitsConfiguration = (output, context) => {
    return {
        QueryCapacityUnits: output.QueryCapacityUnits !== undefined && output.QueryCapacityUnits !== null
            ? output.QueryCapacityUnits
            : undefined,
        StorageCapacityUnits: output.StorageCapacityUnits !== undefined && output.StorageCapacityUnits !== null
            ? output.StorageCapacityUnits
            : undefined,
    };
};
const deserializeAws_json1_1ChangeDetectingColumns = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ColumnConfiguration = (output, context) => {
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
const deserializeAws_json1_1ConflictException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ConfluenceAttachmentConfiguration = (output, context) => {
    return {
        AttachmentFieldMappings: output.AttachmentFieldMappings !== undefined && output.AttachmentFieldMappings !== null
            ? deserializeAws_json1_1ConfluenceAttachmentFieldMappingsList(output.AttachmentFieldMappings, context)
            : undefined,
        CrawlAttachments: output.CrawlAttachments !== undefined && output.CrawlAttachments !== null ? output.CrawlAttachments : undefined,
    };
};
const deserializeAws_json1_1ConfluenceAttachmentFieldMappingsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConfluenceAttachmentToIndexFieldMapping(entry, context);
    });
};
const deserializeAws_json1_1ConfluenceAttachmentToIndexFieldMapping = (output, context) => {
    return {
        DataSourceFieldName: output.DataSourceFieldName !== undefined && output.DataSourceFieldName !== null
            ? output.DataSourceFieldName
            : undefined,
        DateFieldFormat: output.DateFieldFormat !== undefined && output.DateFieldFormat !== null ? output.DateFieldFormat : undefined,
        IndexFieldName: output.IndexFieldName !== undefined && output.IndexFieldName !== null ? output.IndexFieldName : undefined,
    };
};
const deserializeAws_json1_1ConfluenceBlogConfiguration = (output, context) => {
    return {
        BlogFieldMappings: output.BlogFieldMappings !== undefined && output.BlogFieldMappings !== null
            ? deserializeAws_json1_1ConfluenceBlogFieldMappingsList(output.BlogFieldMappings, context)
            : undefined,
    };
};
const deserializeAws_json1_1ConfluenceBlogFieldMappingsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConfluenceBlogToIndexFieldMapping(entry, context);
    });
};
const deserializeAws_json1_1ConfluenceBlogToIndexFieldMapping = (output, context) => {
    return {
        DataSourceFieldName: output.DataSourceFieldName !== undefined && output.DataSourceFieldName !== null
            ? output.DataSourceFieldName
            : undefined,
        DateFieldFormat: output.DateFieldFormat !== undefined && output.DateFieldFormat !== null ? output.DateFieldFormat : undefined,
        IndexFieldName: output.IndexFieldName !== undefined && output.IndexFieldName !== null ? output.IndexFieldName : undefined,
    };
};
const deserializeAws_json1_1ConfluenceConfiguration = (output, context) => {
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
const deserializeAws_json1_1ConfluencePageConfiguration = (output, context) => {
    return {
        PageFieldMappings: output.PageFieldMappings !== undefined && output.PageFieldMappings !== null
            ? deserializeAws_json1_1ConfluencePageFieldMappingsList(output.PageFieldMappings, context)
            : undefined,
    };
};
const deserializeAws_json1_1ConfluencePageFieldMappingsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConfluencePageToIndexFieldMapping(entry, context);
    });
};
const deserializeAws_json1_1ConfluencePageToIndexFieldMapping = (output, context) => {
    return {
        DataSourceFieldName: output.DataSourceFieldName !== undefined && output.DataSourceFieldName !== null
            ? output.DataSourceFieldName
            : undefined,
        DateFieldFormat: output.DateFieldFormat !== undefined && output.DateFieldFormat !== null ? output.DateFieldFormat : undefined,
        IndexFieldName: output.IndexFieldName !== undefined && output.IndexFieldName !== null ? output.IndexFieldName : undefined,
    };
};
const deserializeAws_json1_1ConfluenceSpaceConfiguration = (output, context) => {
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
const deserializeAws_json1_1ConfluenceSpaceFieldMappingsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConfluenceSpaceToIndexFieldMapping(entry, context);
    });
};
const deserializeAws_json1_1ConfluenceSpaceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ConfluenceSpaceToIndexFieldMapping = (output, context) => {
    return {
        DataSourceFieldName: output.DataSourceFieldName !== undefined && output.DataSourceFieldName !== null
            ? output.DataSourceFieldName
            : undefined,
        DateFieldFormat: output.DateFieldFormat !== undefined && output.DateFieldFormat !== null ? output.DateFieldFormat : undefined,
        IndexFieldName: output.IndexFieldName !== undefined && output.IndexFieldName !== null ? output.IndexFieldName : undefined,
    };
};
const deserializeAws_json1_1ConnectionConfiguration = (output, context) => {
    return {
        DatabaseHost: output.DatabaseHost !== undefined && output.DatabaseHost !== null ? output.DatabaseHost : undefined,
        DatabaseName: output.DatabaseName !== undefined && output.DatabaseName !== null ? output.DatabaseName : undefined,
        DatabasePort: output.DatabasePort !== undefined && output.DatabasePort !== null ? output.DatabasePort : undefined,
        SecretArn: output.SecretArn !== undefined && output.SecretArn !== null ? output.SecretArn : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
    };
};
const deserializeAws_json1_1CreateDataSourceResponse = (output, context) => {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    };
};
const deserializeAws_json1_1CreateFaqResponse = (output, context) => {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    };
};
const deserializeAws_json1_1CreateIndexResponse = (output, context) => {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    };
};
const deserializeAws_json1_1CreateQuerySuggestionsBlockListResponse = (output, context) => {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    };
};
const deserializeAws_json1_1CreateThesaurusResponse = (output, context) => {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    };
};
const deserializeAws_json1_1DatabaseConfiguration = (output, context) => {
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
const deserializeAws_json1_1DataSourceConfiguration = (output, context) => {
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
const deserializeAws_json1_1DataSourceInclusionsExclusionsStrings = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1DataSourceSummary = (output, context) => {
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
const deserializeAws_json1_1DataSourceSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DataSourceSummary(entry, context);
    });
};
const deserializeAws_json1_1DataSourceSyncJob = (output, context) => {
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
const deserializeAws_json1_1DataSourceSyncJobHistoryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DataSourceSyncJob(entry, context);
    });
};
const deserializeAws_json1_1DataSourceSyncJobMetrics = (output, context) => {
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
const deserializeAws_json1_1DataSourceToIndexFieldMapping = (output, context) => {
    return {
        DataSourceFieldName: output.DataSourceFieldName !== undefined && output.DataSourceFieldName !== null
            ? output.DataSourceFieldName
            : undefined,
        DateFieldFormat: output.DateFieldFormat !== undefined && output.DateFieldFormat !== null ? output.DateFieldFormat : undefined,
        IndexFieldName: output.IndexFieldName !== undefined && output.IndexFieldName !== null ? output.IndexFieldName : undefined,
    };
};
const deserializeAws_json1_1DataSourceToIndexFieldMappingList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DataSourceToIndexFieldMapping(entry, context);
    });
};
const deserializeAws_json1_1DataSourceVpcConfiguration = (output, context) => {
    return {
        SecurityGroupIds: output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
            ? deserializeAws_json1_1SecurityGroupIdList(output.SecurityGroupIds, context)
            : undefined,
        SubnetIds: output.SubnetIds !== undefined && output.SubnetIds !== null
            ? deserializeAws_json1_1SubnetIdList(output.SubnetIds, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeDataSourceResponse = (output, context) => {
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
const deserializeAws_json1_1DescribeFaqResponse = (output, context) => {
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
const deserializeAws_json1_1DescribeIndexResponse = (output, context) => {
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
const deserializeAws_json1_1DescribeQuerySuggestionsBlockListResponse = (output, context) => {
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
const deserializeAws_json1_1DescribeQuerySuggestionsConfigResponse = (output, context) => {
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
const deserializeAws_json1_1DescribeThesaurusResponse = (output, context) => {
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
const deserializeAws_json1_1DocumentAttribute = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null
            ? deserializeAws_json1_1DocumentAttributeValue(output.Value, context)
            : undefined,
    };
};
const deserializeAws_json1_1DocumentAttributeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DocumentAttribute(entry, context);
    });
};
const deserializeAws_json1_1DocumentAttributeStringListValue = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1DocumentAttributeValue = (output, context) => {
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
const deserializeAws_json1_1DocumentAttributeValueCountPair = (output, context) => {
    return {
        Count: output.Count !== undefined && output.Count !== null ? output.Count : undefined,
        DocumentAttributeValue: output.DocumentAttributeValue !== undefined && output.DocumentAttributeValue !== null
            ? deserializeAws_json1_1DocumentAttributeValue(output.DocumentAttributeValue, context)
            : undefined,
    };
};
const deserializeAws_json1_1DocumentAttributeValueCountPairList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DocumentAttributeValueCountPair(entry, context);
    });
};
const deserializeAws_json1_1DocumentMetadataConfiguration = (output, context) => {
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
const deserializeAws_json1_1DocumentMetadataConfigurationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DocumentMetadataConfiguration(entry, context);
    });
};
const deserializeAws_json1_1DocumentsMetadataConfiguration = (output, context) => {
    return {
        S3Prefix: output.S3Prefix !== undefined && output.S3Prefix !== null ? output.S3Prefix : undefined,
    };
};
const deserializeAws_json1_1ExcludeMimeTypesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ExcludeSharedDrivesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ExcludeUserAccountsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1FacetResult = (output, context) => {
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
const deserializeAws_json1_1FacetResultList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FacetResult(entry, context);
    });
};
const deserializeAws_json1_1FaqStatistics = (output, context) => {
    return {
        IndexedQuestionAnswersCount: output.IndexedQuestionAnswersCount !== undefined && output.IndexedQuestionAnswersCount !== null
            ? output.IndexedQuestionAnswersCount
            : undefined,
    };
};
const deserializeAws_json1_1FaqSummary = (output, context) => {
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
const deserializeAws_json1_1FaqSummaryItems = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FaqSummary(entry, context);
    });
};
const deserializeAws_json1_1GetQuerySuggestionsResponse = (output, context) => {
    return {
        QuerySuggestionsId: output.QuerySuggestionsId !== undefined && output.QuerySuggestionsId !== null
            ? output.QuerySuggestionsId
            : undefined,
        Suggestions: output.Suggestions !== undefined && output.Suggestions !== null
            ? deserializeAws_json1_1SuggestionList(output.Suggestions, context)
            : undefined,
    };
};
const deserializeAws_json1_1GoogleDriveConfiguration = (output, context) => {
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
const deserializeAws_json1_1Highlight = (output, context) => {
    return {
        BeginOffset: output.BeginOffset !== undefined && output.BeginOffset !== null ? output.BeginOffset : undefined,
        EndOffset: output.EndOffset !== undefined && output.EndOffset !== null ? output.EndOffset : undefined,
        TopAnswer: output.TopAnswer !== undefined && output.TopAnswer !== null ? output.TopAnswer : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1HighlightList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Highlight(entry, context);
    });
};
const deserializeAws_json1_1IndexConfigurationSummary = (output, context) => {
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
const deserializeAws_json1_1IndexConfigurationSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1IndexConfigurationSummary(entry, context);
    });
};
const deserializeAws_json1_1IndexStatistics = (output, context) => {
    return {
        FaqStatistics: output.FaqStatistics !== undefined && output.FaqStatistics !== null
            ? deserializeAws_json1_1FaqStatistics(output.FaqStatistics, context)
            : undefined,
        TextDocumentStatistics: output.TextDocumentStatistics !== undefined && output.TextDocumentStatistics !== null
            ? deserializeAws_json1_1TextDocumentStatistics(output.TextDocumentStatistics, context)
            : undefined,
    };
};
const deserializeAws_json1_1InternalServerException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1JsonTokenTypeConfiguration = (output, context) => {
    return {
        GroupAttributeField: output.GroupAttributeField !== undefined && output.GroupAttributeField !== null
            ? output.GroupAttributeField
            : undefined,
        UserNameAttributeField: output.UserNameAttributeField !== undefined && output.UserNameAttributeField !== null
            ? output.UserNameAttributeField
            : undefined,
    };
};
const deserializeAws_json1_1JwtTokenTypeConfiguration = (output, context) => {
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
const deserializeAws_json1_1ListDataSourcesResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        SummaryItems: output.SummaryItems !== undefined && output.SummaryItems !== null
            ? deserializeAws_json1_1DataSourceSummaryList(output.SummaryItems, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListDataSourceSyncJobsResponse = (output, context) => {
    return {
        History: output.History !== undefined && output.History !== null
            ? deserializeAws_json1_1DataSourceSyncJobHistoryList(output.History, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListFaqsResponse = (output, context) => {
    return {
        FaqSummaryItems: output.FaqSummaryItems !== undefined && output.FaqSummaryItems !== null
            ? deserializeAws_json1_1FaqSummaryItems(output.FaqSummaryItems, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListIndicesResponse = (output, context) => {
    return {
        IndexConfigurationSummaryItems: output.IndexConfigurationSummaryItems !== undefined && output.IndexConfigurationSummaryItems !== null
            ? deserializeAws_json1_1IndexConfigurationSummaryList(output.IndexConfigurationSummaryItems, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListQuerySuggestionsBlockListsResponse = (output, context) => {
    return {
        BlockListSummaryItems: output.BlockListSummaryItems !== undefined && output.BlockListSummaryItems !== null
            ? deserializeAws_json1_1QuerySuggestionsBlockListSummaryItems(output.BlockListSummaryItems, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    return {
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagList(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListThesauriResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        ThesaurusSummaryItems: output.ThesaurusSummaryItems !== undefined && output.ThesaurusSummaryItems !== null
            ? deserializeAws_json1_1ThesaurusSummaryItems(output.ThesaurusSummaryItems, context)
            : undefined,
    };
};
const deserializeAws_json1_1OneDriveConfiguration = (output, context) => {
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
const deserializeAws_json1_1OneDriveUserList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1OneDriveUsers = (output, context) => {
    return {
        OneDriveUserList: output.OneDriveUserList !== undefined && output.OneDriveUserList !== null
            ? deserializeAws_json1_1OneDriveUserList(output.OneDriveUserList, context)
            : undefined,
        OneDriveUserS3Path: output.OneDriveUserS3Path !== undefined && output.OneDriveUserS3Path !== null
            ? deserializeAws_json1_1S3Path(output.OneDriveUserS3Path, context)
            : undefined,
    };
};
const deserializeAws_json1_1QueryResult = (output, context) => {
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
const deserializeAws_json1_1QueryResultItem = (output, context) => {
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
const deserializeAws_json1_1QueryResultItemList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1QueryResultItem(entry, context);
    });
};
const deserializeAws_json1_1QuerySuggestionsBlockListSummary = (output, context) => {
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
const deserializeAws_json1_1QuerySuggestionsBlockListSummaryItems = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1QuerySuggestionsBlockListSummary(entry, context);
    });
};
const deserializeAws_json1_1Relevance = (output, context) => {
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
const deserializeAws_json1_1ResourceAlreadyExistException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ResourceInUseException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ResourceUnavailableException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1S3DataSourceConfiguration = (output, context) => {
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
const deserializeAws_json1_1S3Path = (output, context) => {
    return {
        Bucket: output.Bucket !== undefined && output.Bucket !== null ? output.Bucket : undefined,
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    };
};
const deserializeAws_json1_1SalesforceChatterFeedConfiguration = (output, context) => {
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
const deserializeAws_json1_1SalesforceChatterFeedIncludeFilterTypes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1SalesforceConfiguration = (output, context) => {
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
const deserializeAws_json1_1SalesforceCustomKnowledgeArticleTypeConfiguration = (output, context) => {
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
const deserializeAws_json1_1SalesforceCustomKnowledgeArticleTypeConfigurationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SalesforceCustomKnowledgeArticleTypeConfiguration(entry, context);
    });
};
const deserializeAws_json1_1SalesforceKnowledgeArticleConfiguration = (output, context) => {
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
const deserializeAws_json1_1SalesforceKnowledgeArticleStateList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1SalesforceStandardKnowledgeArticleTypeConfiguration = (output, context) => {
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
const deserializeAws_json1_1SalesforceStandardObjectAttachmentConfiguration = (output, context) => {
    return {
        DocumentTitleFieldName: output.DocumentTitleFieldName !== undefined && output.DocumentTitleFieldName !== null
            ? output.DocumentTitleFieldName
            : undefined,
        FieldMappings: output.FieldMappings !== undefined && output.FieldMappings !== null
            ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FieldMappings, context)
            : undefined,
    };
};
const deserializeAws_json1_1SalesforceStandardObjectConfiguration = (output, context) => {
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
const deserializeAws_json1_1SalesforceStandardObjectConfigurationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SalesforceStandardObjectConfiguration(entry, context);
    });
};
const deserializeAws_json1_1ScoreAttributes = (output, context) => {
    return {
        ScoreConfidence: output.ScoreConfidence !== undefined && output.ScoreConfidence !== null ? output.ScoreConfidence : undefined,
    };
};
const deserializeAws_json1_1Search = (output, context) => {
    return {
        Displayable: output.Displayable !== undefined && output.Displayable !== null ? output.Displayable : undefined,
        Facetable: output.Facetable !== undefined && output.Facetable !== null ? output.Facetable : undefined,
        Searchable: output.Searchable !== undefined && output.Searchable !== null ? output.Searchable : undefined,
        Sortable: output.Sortable !== undefined && output.Sortable !== null ? output.Sortable : undefined,
    };
};
const deserializeAws_json1_1SecurityGroupIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ServerSideEncryptionConfiguration = (output, context) => {
    return {
        KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
    };
};
const deserializeAws_json1_1ServiceNowConfiguration = (output, context) => {
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
const deserializeAws_json1_1ServiceNowKnowledgeArticleConfiguration = (output, context) => {
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
const deserializeAws_json1_1ServiceNowServiceCatalogConfiguration = (output, context) => {
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
const deserializeAws_json1_1ServiceQuotaExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1SharePointConfiguration = (output, context) => {
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
const deserializeAws_json1_1SharePointUrlList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1SqlConfiguration = (output, context) => {
    return {
        QueryIdentifiersEnclosingOption: output.QueryIdentifiersEnclosingOption !== undefined && output.QueryIdentifiersEnclosingOption !== null
            ? output.QueryIdentifiersEnclosingOption
            : undefined,
    };
};
const deserializeAws_json1_1StartDataSourceSyncJobResponse = (output, context) => {
    return {
        ExecutionId: output.ExecutionId !== undefined && output.ExecutionId !== null ? output.ExecutionId : undefined,
    };
};
const deserializeAws_json1_1SubnetIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1Suggestion = (output, context) => {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Value: output.Value !== undefined && output.Value !== null
            ? deserializeAws_json1_1SuggestionValue(output.Value, context)
            : undefined,
    };
};
const deserializeAws_json1_1SuggestionHighlight = (output, context) => {
    return {
        BeginOffset: output.BeginOffset !== undefined && output.BeginOffset !== null ? output.BeginOffset : undefined,
        EndOffset: output.EndOffset !== undefined && output.EndOffset !== null ? output.EndOffset : undefined,
    };
};
const deserializeAws_json1_1SuggestionHighlightList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SuggestionHighlight(entry, context);
    });
};
const deserializeAws_json1_1SuggestionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Suggestion(entry, context);
    });
};
const deserializeAws_json1_1SuggestionTextWithHighlights = (output, context) => {
    return {
        Highlights: output.Highlights !== undefined && output.Highlights !== null
            ? deserializeAws_json1_1SuggestionHighlightList(output.Highlights, context)
            : undefined,
        Text: output.Text !== undefined && output.Text !== null ? output.Text : undefined,
    };
};
const deserializeAws_json1_1SuggestionValue = (output, context) => {
    return {
        Text: output.Text !== undefined && output.Text !== null
            ? deserializeAws_json1_1SuggestionTextWithHighlights(output.Text, context)
            : undefined,
    };
};
const deserializeAws_json1_1Tag = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1TagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
};
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1TextDocumentStatistics = (output, context) => {
    return {
        IndexedTextBytes: output.IndexedTextBytes !== undefined && output.IndexedTextBytes !== null ? output.IndexedTextBytes : undefined,
        IndexedTextDocumentsCount: output.IndexedTextDocumentsCount !== undefined && output.IndexedTextDocumentsCount !== null
            ? output.IndexedTextDocumentsCount
            : undefined,
    };
};
const deserializeAws_json1_1TextWithHighlights = (output, context) => {
    return {
        Highlights: output.Highlights !== undefined && output.Highlights !== null
            ? deserializeAws_json1_1HighlightList(output.Highlights, context)
            : undefined,
        Text: output.Text !== undefined && output.Text !== null ? output.Text : undefined,
    };
};
const deserializeAws_json1_1ThesaurusSummary = (output, context) => {
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
const deserializeAws_json1_1ThesaurusSummaryItems = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ThesaurusSummary(entry, context);
    });
};
const deserializeAws_json1_1ThrottlingException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UserTokenConfiguration = (output, context) => {
    return {
        JsonTokenTypeConfiguration: output.JsonTokenTypeConfiguration !== undefined && output.JsonTokenTypeConfiguration !== null
            ? deserializeAws_json1_1JsonTokenTypeConfiguration(output.JsonTokenTypeConfiguration, context)
            : undefined,
        JwtTokenTypeConfiguration: output.JwtTokenTypeConfiguration !== undefined && output.JwtTokenTypeConfiguration !== null
            ? deserializeAws_json1_1JwtTokenTypeConfiguration(output.JwtTokenTypeConfiguration, context)
            : undefined,
    };
};
const deserializeAws_json1_1UserTokenConfigurationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1UserTokenConfiguration(entry, context);
    });
};
const deserializeAws_json1_1ValidationException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ValueImportanceMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeMetadata = (output) => {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port } = await context.endpoint();
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path,
        headers,
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new protocol_http_1.HttpRequest(contents);
};
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
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