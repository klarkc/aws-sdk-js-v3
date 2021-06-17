import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_json1_1BatchDeleteBuildsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.BatchDeleteBuilds",
        };
        body = JSON.stringify(serializeAws_json1_1BatchDeleteBuildsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1BatchGetBuildBatchesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.BatchGetBuildBatches",
        };
        body = JSON.stringify(serializeAws_json1_1BatchGetBuildBatchesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1BatchGetBuildsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.BatchGetBuilds",
        };
        body = JSON.stringify(serializeAws_json1_1BatchGetBuildsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1BatchGetProjectsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.BatchGetProjects",
        };
        body = JSON.stringify(serializeAws_json1_1BatchGetProjectsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1BatchGetReportGroupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.BatchGetReportGroups",
        };
        body = JSON.stringify(serializeAws_json1_1BatchGetReportGroupsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1BatchGetReportsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.BatchGetReports",
        };
        body = JSON.stringify(serializeAws_json1_1BatchGetReportsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateProjectCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.CreateProject",
        };
        body = JSON.stringify(serializeAws_json1_1CreateProjectInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateReportGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.CreateReportGroup",
        };
        body = JSON.stringify(serializeAws_json1_1CreateReportGroupInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateWebhookCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.CreateWebhook",
        };
        body = JSON.stringify(serializeAws_json1_1CreateWebhookInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteBuildBatchCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.DeleteBuildBatch",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteBuildBatchInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteProjectCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.DeleteProject",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteProjectInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteReportCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.DeleteReport",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteReportInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteReportGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.DeleteReportGroup",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteReportGroupInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteResourcePolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.DeleteResourcePolicy",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteResourcePolicyInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteSourceCredentialsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.DeleteSourceCredentials",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteSourceCredentialsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteWebhookCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.DeleteWebhook",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteWebhookInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeCodeCoveragesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.DescribeCodeCoverages",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeCodeCoveragesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeTestCasesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.DescribeTestCases",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeTestCasesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetReportGroupTrendCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.GetReportGroupTrend",
        };
        body = JSON.stringify(serializeAws_json1_1GetReportGroupTrendInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetResourcePolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.GetResourcePolicy",
        };
        body = JSON.stringify(serializeAws_json1_1GetResourcePolicyInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ImportSourceCredentialsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.ImportSourceCredentials",
        };
        body = JSON.stringify(serializeAws_json1_1ImportSourceCredentialsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1InvalidateProjectCacheCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.InvalidateProjectCache",
        };
        body = JSON.stringify(serializeAws_json1_1InvalidateProjectCacheInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListBuildBatchesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.ListBuildBatches",
        };
        body = JSON.stringify(serializeAws_json1_1ListBuildBatchesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListBuildBatchesForProjectCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.ListBuildBatchesForProject",
        };
        body = JSON.stringify(serializeAws_json1_1ListBuildBatchesForProjectInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListBuildsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.ListBuilds",
        };
        body = JSON.stringify(serializeAws_json1_1ListBuildsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListBuildsForProjectCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.ListBuildsForProject",
        };
        body = JSON.stringify(serializeAws_json1_1ListBuildsForProjectInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListCuratedEnvironmentImagesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.ListCuratedEnvironmentImages",
        };
        body = JSON.stringify(serializeAws_json1_1ListCuratedEnvironmentImagesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListProjectsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.ListProjects",
        };
        body = JSON.stringify(serializeAws_json1_1ListProjectsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListReportGroupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.ListReportGroups",
        };
        body = JSON.stringify(serializeAws_json1_1ListReportGroupsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListReportsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.ListReports",
        };
        body = JSON.stringify(serializeAws_json1_1ListReportsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListReportsForReportGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.ListReportsForReportGroup",
        };
        body = JSON.stringify(serializeAws_json1_1ListReportsForReportGroupInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListSharedProjectsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.ListSharedProjects",
        };
        body = JSON.stringify(serializeAws_json1_1ListSharedProjectsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListSharedReportGroupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.ListSharedReportGroups",
        };
        body = JSON.stringify(serializeAws_json1_1ListSharedReportGroupsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListSourceCredentialsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.ListSourceCredentials",
        };
        body = JSON.stringify(serializeAws_json1_1ListSourceCredentialsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutResourcePolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.PutResourcePolicy",
        };
        body = JSON.stringify(serializeAws_json1_1PutResourcePolicyInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1RetryBuildCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.RetryBuild",
        };
        body = JSON.stringify(serializeAws_json1_1RetryBuildInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1RetryBuildBatchCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.RetryBuildBatch",
        };
        body = JSON.stringify(serializeAws_json1_1RetryBuildBatchInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StartBuildCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.StartBuild",
        };
        body = JSON.stringify(serializeAws_json1_1StartBuildInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StartBuildBatchCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.StartBuildBatch",
        };
        body = JSON.stringify(serializeAws_json1_1StartBuildBatchInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StopBuildCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.StopBuild",
        };
        body = JSON.stringify(serializeAws_json1_1StopBuildInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StopBuildBatchCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.StopBuildBatch",
        };
        body = JSON.stringify(serializeAws_json1_1StopBuildBatchInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateProjectCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.UpdateProject",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateProjectInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateReportGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.UpdateReportGroup",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateReportGroupInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateWebhookCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeBuild_20161006.UpdateWebhook",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateWebhookInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_json1_1BatchDeleteBuildsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1BatchDeleteBuildsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1BatchDeleteBuildsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1BatchDeleteBuildsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1BatchGetBuildBatchesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1BatchGetBuildBatchesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1BatchGetBuildBatchesOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1BatchGetBuildBatchesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1BatchGetBuildsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1BatchGetBuildsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1BatchGetBuildsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1BatchGetBuildsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1BatchGetProjectsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1BatchGetProjectsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1BatchGetProjectsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1BatchGetProjectsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1BatchGetReportGroupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1BatchGetReportGroupsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1BatchGetReportGroupsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1BatchGetReportGroupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1BatchGetReportsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1BatchGetReportsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1BatchGetReportsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1BatchGetReportsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateProjectCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateProjectCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateProjectOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateProjectCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccountLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.codebuild#AccountLimitExceededException": return [3 /*break*/, 2];
                    case "InvalidInputException": return [3 /*break*/, 4];
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 4];
                    case "ResourceAlreadyExistsException": return [3 /*break*/, 6];
                    case "com.amazonaws.codebuild#ResourceAlreadyExistsException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccountLimitExceededExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateReportGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateReportGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateReportGroupOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateReportGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccountLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.codebuild#AccountLimitExceededException": return [3 /*break*/, 2];
                    case "InvalidInputException": return [3 /*break*/, 4];
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 4];
                    case "ResourceAlreadyExistsException": return [3 /*break*/, 6];
                    case "com.amazonaws.codebuild#ResourceAlreadyExistsException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccountLimitExceededExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateWebhookCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateWebhookCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateWebhookOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateWebhookCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 2];
                    case "OAuthProviderException": return [3 /*break*/, 4];
                    case "com.amazonaws.codebuild#OAuthProviderException": return [3 /*break*/, 4];
                    case "ResourceAlreadyExistsException": return [3 /*break*/, 6];
                    case "com.amazonaws.codebuild#ResourceAlreadyExistsException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.codebuild#ResourceNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OAuthProviderExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteBuildBatchCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteBuildBatchCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteBuildBatchOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteBuildBatchCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteProjectCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteProjectCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteProjectOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteProjectCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteReportCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteReportCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteReportOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteReportCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteReportGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteReportGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteReportGroupOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteReportGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteResourcePolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteResourcePolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteResourcePolicyOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteResourcePolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteSourceCredentialsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteSourceCredentialsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteSourceCredentialsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteSourceCredentialsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.codebuild#ResourceNotFoundException": return [3 /*break*/, 4];
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
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteWebhookCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteWebhookCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteWebhookOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteWebhookCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 2];
                    case "OAuthProviderException": return [3 /*break*/, 4];
                    case "com.amazonaws.codebuild#OAuthProviderException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.codebuild#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OAuthProviderExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeCodeCoveragesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeCodeCoveragesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeCodeCoveragesOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeCodeCoveragesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeTestCasesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeTestCasesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeTestCasesOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeTestCasesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.codebuild#ResourceNotFoundException": return [3 /*break*/, 4];
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
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetReportGroupTrendCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetReportGroupTrendCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetReportGroupTrendOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetReportGroupTrendCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.codebuild#ResourceNotFoundException": return [3 /*break*/, 4];
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
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetResourcePolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetResourcePolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetResourcePolicyOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetResourcePolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.codebuild#ResourceNotFoundException": return [3 /*break*/, 4];
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
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ImportSourceCredentialsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ImportSourceCredentialsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ImportSourceCredentialsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ImportSourceCredentialsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccountLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.codebuild#AccountLimitExceededException": return [3 /*break*/, 2];
                    case "InvalidInputException": return [3 /*break*/, 4];
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 4];
                    case "ResourceAlreadyExistsException": return [3 /*break*/, 6];
                    case "com.amazonaws.codebuild#ResourceAlreadyExistsException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccountLimitExceededExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1InvalidateProjectCacheCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1InvalidateProjectCacheCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1InvalidateProjectCacheOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1InvalidateProjectCacheCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.codebuild#ResourceNotFoundException": return [3 /*break*/, 4];
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
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListBuildBatchesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListBuildBatchesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListBuildBatchesOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListBuildBatchesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListBuildBatchesForProjectCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListBuildBatchesForProjectCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListBuildBatchesForProjectOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListBuildBatchesForProjectCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.codebuild#ResourceNotFoundException": return [3 /*break*/, 4];
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
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListBuildsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListBuildsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListBuildsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListBuildsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListBuildsForProjectCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListBuildsForProjectCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListBuildsForProjectOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListBuildsForProjectCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.codebuild#ResourceNotFoundException": return [3 /*break*/, 4];
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
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListCuratedEnvironmentImagesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListCuratedEnvironmentImagesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListCuratedEnvironmentImagesOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListCuratedEnvironmentImagesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_json1_1ListProjectsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListProjectsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListProjectsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListProjectsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListReportGroupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListReportGroupsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListReportGroupsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListReportGroupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListReportsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListReportsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListReportsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListReportsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListReportsForReportGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListReportsForReportGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListReportsForReportGroupOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListReportsForReportGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.codebuild#ResourceNotFoundException": return [3 /*break*/, 4];
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
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListSharedProjectsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListSharedProjectsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListSharedProjectsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListSharedProjectsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListSharedReportGroupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListSharedReportGroupsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListSharedReportGroupsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListSharedReportGroupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListSourceCredentialsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListSourceCredentialsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListSourceCredentialsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListSourceCredentialsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutResourcePolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutResourcePolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1PutResourcePolicyOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1PutResourcePolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.codebuild#ResourceNotFoundException": return [3 /*break*/, 4];
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
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1RetryBuildCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1RetryBuildCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1RetryBuildOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1RetryBuildCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccountLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.codebuild#AccountLimitExceededException": return [3 /*break*/, 2];
                    case "InvalidInputException": return [3 /*break*/, 4];
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.codebuild#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccountLimitExceededExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1RetryBuildBatchCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1RetryBuildBatchCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1RetryBuildBatchOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1RetryBuildBatchCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.codebuild#ResourceNotFoundException": return [3 /*break*/, 4];
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
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1StartBuildCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StartBuildCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1StartBuildOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1StartBuildCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccountLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.codebuild#AccountLimitExceededException": return [3 /*break*/, 2];
                    case "InvalidInputException": return [3 /*break*/, 4];
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.codebuild#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccountLimitExceededExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1StartBuildBatchCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StartBuildBatchCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1StartBuildBatchOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1StartBuildBatchCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.codebuild#ResourceNotFoundException": return [3 /*break*/, 4];
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
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1StopBuildCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StopBuildCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1StopBuildOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1StopBuildCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.codebuild#ResourceNotFoundException": return [3 /*break*/, 4];
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
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1StopBuildBatchCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StopBuildBatchCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1StopBuildBatchOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1StopBuildBatchCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.codebuild#ResourceNotFoundException": return [3 /*break*/, 4];
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
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateProjectCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateProjectCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateProjectOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateProjectCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.codebuild#ResourceNotFoundException": return [3 /*break*/, 4];
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
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateReportGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateReportGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateReportGroupOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateReportGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.codebuild#ResourceNotFoundException": return [3 /*break*/, 4];
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
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateWebhookCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateWebhookCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateWebhookOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateWebhookCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.codebuild#InvalidInputException": return [3 /*break*/, 2];
                    case "OAuthProviderException": return [3 /*break*/, 4];
                    case "com.amazonaws.codebuild#OAuthProviderException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.codebuild#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OAuthProviderExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
var deserializeAws_json1_1AccountLimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1AccountLimitExceededException(body, context);
        contents = __assign({ name: "AccountLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_json1_1OAuthProviderExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1OAuthProviderException(body, context);
        contents = __assign({ name: "OAuthProviderException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ResourceAlreadyExistsException(body, context);
        contents = __assign({ name: "ResourceAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var serializeAws_json1_1BatchDeleteBuildsInput = function (input, context) {
    return __assign({}, (input.ids !== undefined && input.ids !== null && { ids: serializeAws_json1_1BuildIds(input.ids, context) }));
};
var serializeAws_json1_1BatchGetBuildBatchesInput = function (input, context) {
    return __assign({}, (input.ids !== undefined &&
        input.ids !== null && { ids: serializeAws_json1_1BuildBatchIds(input.ids, context) }));
};
var serializeAws_json1_1BatchGetBuildsInput = function (input, context) {
    return __assign({}, (input.ids !== undefined && input.ids !== null && { ids: serializeAws_json1_1BuildIds(input.ids, context) }));
};
var serializeAws_json1_1BatchGetProjectsInput = function (input, context) {
    return __assign({}, (input.names !== undefined &&
        input.names !== null && { names: serializeAws_json1_1ProjectNames(input.names, context) }));
};
var serializeAws_json1_1BatchGetReportGroupsInput = function (input, context) {
    return __assign({}, (input.reportGroupArns !== undefined &&
        input.reportGroupArns !== null && {
        reportGroupArns: serializeAws_json1_1ReportGroupArns(input.reportGroupArns, context),
    }));
};
var serializeAws_json1_1BatchGetReportsInput = function (input, context) {
    return __assign({}, (input.reportArns !== undefined &&
        input.reportArns !== null && { reportArns: serializeAws_json1_1ReportArns(input.reportArns, context) }));
};
var serializeAws_json1_1BatchRestrictions = function (input, context) {
    return __assign(__assign({}, (input.computeTypesAllowed !== undefined &&
        input.computeTypesAllowed !== null && {
        computeTypesAllowed: serializeAws_json1_1ComputeTypesAllowed(input.computeTypesAllowed, context),
    })), (input.maximumBuildsAllowed !== undefined &&
        input.maximumBuildsAllowed !== null && { maximumBuildsAllowed: input.maximumBuildsAllowed }));
};
var serializeAws_json1_1BuildBatchFilter = function (input, context) {
    return __assign({}, (input.status !== undefined && input.status !== null && { status: input.status }));
};
var serializeAws_json1_1BuildBatchIds = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1BuildIds = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1BuildStatusConfig = function (input, context) {
    return __assign(__assign({}, (input.context !== undefined && input.context !== null && { context: input.context })), (input.targetUrl !== undefined && input.targetUrl !== null && { targetUrl: input.targetUrl }));
};
var serializeAws_json1_1CloudWatchLogsConfig = function (input, context) {
    return __assign(__assign(__assign({}, (input.groupName !== undefined && input.groupName !== null && { groupName: input.groupName })), (input.status !== undefined && input.status !== null && { status: input.status })), (input.streamName !== undefined && input.streamName !== null && { streamName: input.streamName }));
};
var serializeAws_json1_1ComputeTypesAllowed = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1CreateProjectInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.artifacts !== undefined &&
        input.artifacts !== null && { artifacts: serializeAws_json1_1ProjectArtifacts(input.artifacts, context) })), (input.badgeEnabled !== undefined && input.badgeEnabled !== null && { badgeEnabled: input.badgeEnabled })), (input.buildBatchConfig !== undefined &&
        input.buildBatchConfig !== null && {
        buildBatchConfig: serializeAws_json1_1ProjectBuildBatchConfig(input.buildBatchConfig, context),
    })), (input.cache !== undefined &&
        input.cache !== null && { cache: serializeAws_json1_1ProjectCache(input.cache, context) })), (input.concurrentBuildLimit !== undefined &&
        input.concurrentBuildLimit !== null && { concurrentBuildLimit: input.concurrentBuildLimit })), (input.description !== undefined && input.description !== null && { description: input.description })), (input.encryptionKey !== undefined && input.encryptionKey !== null && { encryptionKey: input.encryptionKey })), (input.environment !== undefined &&
        input.environment !== null && {
        environment: serializeAws_json1_1ProjectEnvironment(input.environment, context),
    })), (input.fileSystemLocations !== undefined &&
        input.fileSystemLocations !== null && {
        fileSystemLocations: serializeAws_json1_1ProjectFileSystemLocations(input.fileSystemLocations, context),
    })), (input.logsConfig !== undefined &&
        input.logsConfig !== null && { logsConfig: serializeAws_json1_1LogsConfig(input.logsConfig, context) })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.queuedTimeoutInMinutes !== undefined &&
        input.queuedTimeoutInMinutes !== null && { queuedTimeoutInMinutes: input.queuedTimeoutInMinutes })), (input.secondaryArtifacts !== undefined &&
        input.secondaryArtifacts !== null && {
        secondaryArtifacts: serializeAws_json1_1ProjectArtifactsList(input.secondaryArtifacts, context),
    })), (input.secondarySourceVersions !== undefined &&
        input.secondarySourceVersions !== null && {
        secondarySourceVersions: serializeAws_json1_1ProjectSecondarySourceVersions(input.secondarySourceVersions, context),
    })), (input.secondarySources !== undefined &&
        input.secondarySources !== null && {
        secondarySources: serializeAws_json1_1ProjectSources(input.secondarySources, context),
    })), (input.serviceRole !== undefined && input.serviceRole !== null && { serviceRole: input.serviceRole })), (input.source !== undefined &&
        input.source !== null && { source: serializeAws_json1_1ProjectSource(input.source, context) })), (input.sourceVersion !== undefined && input.sourceVersion !== null && { sourceVersion: input.sourceVersion })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) })), (input.timeoutInMinutes !== undefined &&
        input.timeoutInMinutes !== null && { timeoutInMinutes: input.timeoutInMinutes })), (input.vpcConfig !== undefined &&
        input.vpcConfig !== null && { vpcConfig: serializeAws_json1_1VpcConfig(input.vpcConfig, context) }));
};
var serializeAws_json1_1CreateReportGroupInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.exportConfig !== undefined &&
        input.exportConfig !== null && {
        exportConfig: serializeAws_json1_1ReportExportConfig(input.exportConfig, context),
    })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) })), (input.type !== undefined && input.type !== null && { type: input.type }));
};
var serializeAws_json1_1CreateWebhookInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.branchFilter !== undefined && input.branchFilter !== null && { branchFilter: input.branchFilter })), (input.buildType !== undefined && input.buildType !== null && { buildType: input.buildType })), (input.filterGroups !== undefined &&
        input.filterGroups !== null && { filterGroups: serializeAws_json1_1FilterGroups(input.filterGroups, context) })), (input.projectName !== undefined && input.projectName !== null && { projectName: input.projectName }));
};
var serializeAws_json1_1DeleteBuildBatchInput = function (input, context) {
    return __assign({}, (input.id !== undefined && input.id !== null && { id: input.id }));
};
var serializeAws_json1_1DeleteProjectInput = function (input, context) {
    return __assign({}, (input.name !== undefined && input.name !== null && { name: input.name }));
};
var serializeAws_json1_1DeleteReportGroupInput = function (input, context) {
    return __assign(__assign({}, (input.arn !== undefined && input.arn !== null && { arn: input.arn })), (input.deleteReports !== undefined && input.deleteReports !== null && { deleteReports: input.deleteReports }));
};
var serializeAws_json1_1DeleteReportInput = function (input, context) {
    return __assign({}, (input.arn !== undefined && input.arn !== null && { arn: input.arn }));
};
var serializeAws_json1_1DeleteResourcePolicyInput = function (input, context) {
    return __assign({}, (input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }));
};
var serializeAws_json1_1DeleteSourceCredentialsInput = function (input, context) {
    return __assign({}, (input.arn !== undefined && input.arn !== null && { arn: input.arn }));
};
var serializeAws_json1_1DeleteWebhookInput = function (input, context) {
    return __assign({}, (input.projectName !== undefined && input.projectName !== null && { projectName: input.projectName }));
};
var serializeAws_json1_1DescribeCodeCoveragesInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.maxLineCoveragePercentage !== undefined &&
        input.maxLineCoveragePercentage !== null && { maxLineCoveragePercentage: input.maxLineCoveragePercentage })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.minLineCoveragePercentage !== undefined &&
        input.minLineCoveragePercentage !== null && { minLineCoveragePercentage: input.minLineCoveragePercentage })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.reportArn !== undefined && input.reportArn !== null && { reportArn: input.reportArn })), (input.sortBy !== undefined && input.sortBy !== null && { sortBy: input.sortBy })), (input.sortOrder !== undefined && input.sortOrder !== null && { sortOrder: input.sortOrder }));
};
var serializeAws_json1_1DescribeTestCasesInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.filter !== undefined &&
        input.filter !== null && { filter: serializeAws_json1_1TestCaseFilter(input.filter, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.reportArn !== undefined && input.reportArn !== null && { reportArn: input.reportArn }));
};
var serializeAws_json1_1EnvironmentVariable = function (input, context) {
    return __assign(__assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.type !== undefined && input.type !== null && { type: input.type })), (input.value !== undefined && input.value !== null && { value: input.value }));
};
var serializeAws_json1_1EnvironmentVariables = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1EnvironmentVariable(entry, context);
    });
};
var serializeAws_json1_1FilterGroup = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1WebhookFilter(entry, context);
    });
};
var serializeAws_json1_1FilterGroups = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1FilterGroup(entry, context);
    });
};
var serializeAws_json1_1GetReportGroupTrendInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.numOfReports !== undefined && input.numOfReports !== null && { numOfReports: input.numOfReports })), (input.reportGroupArn !== undefined &&
        input.reportGroupArn !== null && { reportGroupArn: input.reportGroupArn })), (input.trendField !== undefined && input.trendField !== null && { trendField: input.trendField }));
};
var serializeAws_json1_1GetResourcePolicyInput = function (input, context) {
    return __assign({}, (input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }));
};
var serializeAws_json1_1GitSubmodulesConfig = function (input, context) {
    return __assign({}, (input.fetchSubmodules !== undefined &&
        input.fetchSubmodules !== null && { fetchSubmodules: input.fetchSubmodules }));
};
var serializeAws_json1_1ImportSourceCredentialsInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.authType !== undefined && input.authType !== null && { authType: input.authType })), (input.serverType !== undefined && input.serverType !== null && { serverType: input.serverType })), (input.shouldOverwrite !== undefined &&
        input.shouldOverwrite !== null && { shouldOverwrite: input.shouldOverwrite })), (input.token !== undefined && input.token !== null && { token: input.token })), (input.username !== undefined && input.username !== null && { username: input.username }));
};
var serializeAws_json1_1InvalidateProjectCacheInput = function (input, context) {
    return __assign({}, (input.projectName !== undefined && input.projectName !== null && { projectName: input.projectName }));
};
var serializeAws_json1_1ListBuildBatchesForProjectInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.filter !== undefined &&
        input.filter !== null && { filter: serializeAws_json1_1BuildBatchFilter(input.filter, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.projectName !== undefined && input.projectName !== null && { projectName: input.projectName })), (input.sortOrder !== undefined && input.sortOrder !== null && { sortOrder: input.sortOrder }));
};
var serializeAws_json1_1ListBuildBatchesInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.filter !== undefined &&
        input.filter !== null && { filter: serializeAws_json1_1BuildBatchFilter(input.filter, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.sortOrder !== undefined && input.sortOrder !== null && { sortOrder: input.sortOrder }));
};
var serializeAws_json1_1ListBuildsForProjectInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.projectName !== undefined && input.projectName !== null && { projectName: input.projectName })), (input.sortOrder !== undefined && input.sortOrder !== null && { sortOrder: input.sortOrder }));
};
var serializeAws_json1_1ListBuildsInput = function (input, context) {
    return __assign(__assign({}, (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.sortOrder !== undefined && input.sortOrder !== null && { sortOrder: input.sortOrder }));
};
var serializeAws_json1_1ListCuratedEnvironmentImagesInput = function (input, context) {
    return {};
};
var serializeAws_json1_1ListProjectsInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.sortBy !== undefined && input.sortBy !== null && { sortBy: input.sortBy })), (input.sortOrder !== undefined && input.sortOrder !== null && { sortOrder: input.sortOrder }));
};
var serializeAws_json1_1ListReportGroupsInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.sortBy !== undefined && input.sortBy !== null && { sortBy: input.sortBy })), (input.sortOrder !== undefined && input.sortOrder !== null && { sortOrder: input.sortOrder }));
};
var serializeAws_json1_1ListReportsForReportGroupInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.filter !== undefined &&
        input.filter !== null && { filter: serializeAws_json1_1ReportFilter(input.filter, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.reportGroupArn !== undefined &&
        input.reportGroupArn !== null && { reportGroupArn: input.reportGroupArn })), (input.sortOrder !== undefined && input.sortOrder !== null && { sortOrder: input.sortOrder }));
};
var serializeAws_json1_1ListReportsInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.filter !== undefined &&
        input.filter !== null && { filter: serializeAws_json1_1ReportFilter(input.filter, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.sortOrder !== undefined && input.sortOrder !== null && { sortOrder: input.sortOrder }));
};
var serializeAws_json1_1ListSharedProjectsInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.sortBy !== undefined && input.sortBy !== null && { sortBy: input.sortBy })), (input.sortOrder !== undefined && input.sortOrder !== null && { sortOrder: input.sortOrder }));
};
var serializeAws_json1_1ListSharedReportGroupsInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.sortBy !== undefined && input.sortBy !== null && { sortBy: input.sortBy })), (input.sortOrder !== undefined && input.sortOrder !== null && { sortOrder: input.sortOrder }));
};
var serializeAws_json1_1ListSourceCredentialsInput = function (input, context) {
    return {};
};
var serializeAws_json1_1LogsConfig = function (input, context) {
    return __assign(__assign({}, (input.cloudWatchLogs !== undefined &&
        input.cloudWatchLogs !== null && {
        cloudWatchLogs: serializeAws_json1_1CloudWatchLogsConfig(input.cloudWatchLogs, context),
    })), (input.s3Logs !== undefined &&
        input.s3Logs !== null && { s3Logs: serializeAws_json1_1S3LogsConfig(input.s3Logs, context) }));
};
var serializeAws_json1_1ProjectArtifacts = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.artifactIdentifier !== undefined &&
        input.artifactIdentifier !== null && { artifactIdentifier: input.artifactIdentifier })), (input.bucketOwnerAccess !== undefined &&
        input.bucketOwnerAccess !== null && { bucketOwnerAccess: input.bucketOwnerAccess })), (input.encryptionDisabled !== undefined &&
        input.encryptionDisabled !== null && { encryptionDisabled: input.encryptionDisabled })), (input.location !== undefined && input.location !== null && { location: input.location })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.namespaceType !== undefined && input.namespaceType !== null && { namespaceType: input.namespaceType })), (input.overrideArtifactName !== undefined &&
        input.overrideArtifactName !== null && { overrideArtifactName: input.overrideArtifactName })), (input.packaging !== undefined && input.packaging !== null && { packaging: input.packaging })), (input.path !== undefined && input.path !== null && { path: input.path })), (input.type !== undefined && input.type !== null && { type: input.type }));
};
var serializeAws_json1_1ProjectArtifactsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ProjectArtifacts(entry, context);
    });
};
var serializeAws_json1_1ProjectBuildBatchConfig = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.combineArtifacts !== undefined &&
        input.combineArtifacts !== null && { combineArtifacts: input.combineArtifacts })), (input.restrictions !== undefined &&
        input.restrictions !== null && {
        restrictions: serializeAws_json1_1BatchRestrictions(input.restrictions, context),
    })), (input.serviceRole !== undefined && input.serviceRole !== null && { serviceRole: input.serviceRole })), (input.timeoutInMins !== undefined && input.timeoutInMins !== null && { timeoutInMins: input.timeoutInMins }));
};
var serializeAws_json1_1ProjectCache = function (input, context) {
    return __assign(__assign(__assign({}, (input.location !== undefined && input.location !== null && { location: input.location })), (input.modes !== undefined &&
        input.modes !== null && { modes: serializeAws_json1_1ProjectCacheModes(input.modes, context) })), (input.type !== undefined && input.type !== null && { type: input.type }));
};
var serializeAws_json1_1ProjectCacheModes = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ProjectEnvironment = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.certificate !== undefined && input.certificate !== null && { certificate: input.certificate })), (input.computeType !== undefined && input.computeType !== null && { computeType: input.computeType })), (input.environmentVariables !== undefined &&
        input.environmentVariables !== null && {
        environmentVariables: serializeAws_json1_1EnvironmentVariables(input.environmentVariables, context),
    })), (input.image !== undefined && input.image !== null && { image: input.image })), (input.imagePullCredentialsType !== undefined &&
        input.imagePullCredentialsType !== null && { imagePullCredentialsType: input.imagePullCredentialsType })), (input.privilegedMode !== undefined &&
        input.privilegedMode !== null && { privilegedMode: input.privilegedMode })), (input.registryCredential !== undefined &&
        input.registryCredential !== null && {
        registryCredential: serializeAws_json1_1RegistryCredential(input.registryCredential, context),
    })), (input.type !== undefined && input.type !== null && { type: input.type }));
};
var serializeAws_json1_1ProjectFileSystemLocation = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.identifier !== undefined && input.identifier !== null && { identifier: input.identifier })), (input.location !== undefined && input.location !== null && { location: input.location })), (input.mountOptions !== undefined && input.mountOptions !== null && { mountOptions: input.mountOptions })), (input.mountPoint !== undefined && input.mountPoint !== null && { mountPoint: input.mountPoint })), (input.type !== undefined && input.type !== null && { type: input.type }));
};
var serializeAws_json1_1ProjectFileSystemLocations = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ProjectFileSystemLocation(entry, context);
    });
};
var serializeAws_json1_1ProjectNames = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ProjectSecondarySourceVersions = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ProjectSourceVersion(entry, context);
    });
};
var serializeAws_json1_1ProjectSource = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.auth !== undefined &&
        input.auth !== null && { auth: serializeAws_json1_1SourceAuth(input.auth, context) })), (input.buildStatusConfig !== undefined &&
        input.buildStatusConfig !== null && {
        buildStatusConfig: serializeAws_json1_1BuildStatusConfig(input.buildStatusConfig, context),
    })), (input.buildspec !== undefined && input.buildspec !== null && { buildspec: input.buildspec })), (input.gitCloneDepth !== undefined && input.gitCloneDepth !== null && { gitCloneDepth: input.gitCloneDepth })), (input.gitSubmodulesConfig !== undefined &&
        input.gitSubmodulesConfig !== null && {
        gitSubmodulesConfig: serializeAws_json1_1GitSubmodulesConfig(input.gitSubmodulesConfig, context),
    })), (input.insecureSsl !== undefined && input.insecureSsl !== null && { insecureSsl: input.insecureSsl })), (input.location !== undefined && input.location !== null && { location: input.location })), (input.reportBuildStatus !== undefined &&
        input.reportBuildStatus !== null && { reportBuildStatus: input.reportBuildStatus })), (input.sourceIdentifier !== undefined &&
        input.sourceIdentifier !== null && { sourceIdentifier: input.sourceIdentifier })), (input.type !== undefined && input.type !== null && { type: input.type }));
};
var serializeAws_json1_1ProjectSources = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ProjectSource(entry, context);
    });
};
var serializeAws_json1_1ProjectSourceVersion = function (input, context) {
    return __assign(__assign({}, (input.sourceIdentifier !== undefined &&
        input.sourceIdentifier !== null && { sourceIdentifier: input.sourceIdentifier })), (input.sourceVersion !== undefined && input.sourceVersion !== null && { sourceVersion: input.sourceVersion }));
};
var serializeAws_json1_1PutResourcePolicyInput = function (input, context) {
    return __assign(__assign({}, (input.policy !== undefined && input.policy !== null && { policy: input.policy })), (input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }));
};
var serializeAws_json1_1RegistryCredential = function (input, context) {
    return __assign(__assign({}, (input.credential !== undefined && input.credential !== null && { credential: input.credential })), (input.credentialProvider !== undefined &&
        input.credentialProvider !== null && { credentialProvider: input.credentialProvider }));
};
var serializeAws_json1_1ReportArns = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ReportExportConfig = function (input, context) {
    return __assign(__assign({}, (input.exportConfigType !== undefined &&
        input.exportConfigType !== null && { exportConfigType: input.exportConfigType })), (input.s3Destination !== undefined &&
        input.s3Destination !== null && {
        s3Destination: serializeAws_json1_1S3ReportExportConfig(input.s3Destination, context),
    }));
};
var serializeAws_json1_1ReportFilter = function (input, context) {
    return __assign({}, (input.status !== undefined && input.status !== null && { status: input.status }));
};
var serializeAws_json1_1ReportGroupArns = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1RetryBuildBatchInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.id !== undefined && input.id !== null && { id: input.id })), (input.idempotencyToken !== undefined &&
        input.idempotencyToken !== null && { idempotencyToken: input.idempotencyToken })), (input.retryType !== undefined && input.retryType !== null && { retryType: input.retryType }));
};
var serializeAws_json1_1RetryBuildInput = function (input, context) {
    return __assign(__assign({}, (input.id !== undefined && input.id !== null && { id: input.id })), (input.idempotencyToken !== undefined &&
        input.idempotencyToken !== null && { idempotencyToken: input.idempotencyToken }));
};
var serializeAws_json1_1S3LogsConfig = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.bucketOwnerAccess !== undefined &&
        input.bucketOwnerAccess !== null && { bucketOwnerAccess: input.bucketOwnerAccess })), (input.encryptionDisabled !== undefined &&
        input.encryptionDisabled !== null && { encryptionDisabled: input.encryptionDisabled })), (input.location !== undefined && input.location !== null && { location: input.location })), (input.status !== undefined && input.status !== null && { status: input.status }));
};
var serializeAws_json1_1S3ReportExportConfig = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.bucket !== undefined && input.bucket !== null && { bucket: input.bucket })), (input.bucketOwner !== undefined && input.bucketOwner !== null && { bucketOwner: input.bucketOwner })), (input.encryptionDisabled !== undefined &&
        input.encryptionDisabled !== null && { encryptionDisabled: input.encryptionDisabled })), (input.encryptionKey !== undefined && input.encryptionKey !== null && { encryptionKey: input.encryptionKey })), (input.packaging !== undefined && input.packaging !== null && { packaging: input.packaging })), (input.path !== undefined && input.path !== null && { path: input.path }));
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
var serializeAws_json1_1SourceAuth = function (input, context) {
    return __assign(__assign({}, (input.resource !== undefined && input.resource !== null && { resource: input.resource })), (input.type !== undefined && input.type !== null && { type: input.type }));
};
var serializeAws_json1_1StartBuildBatchInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.artifactsOverride !== undefined &&
        input.artifactsOverride !== null && {
        artifactsOverride: serializeAws_json1_1ProjectArtifacts(input.artifactsOverride, context),
    })), (input.buildBatchConfigOverride !== undefined &&
        input.buildBatchConfigOverride !== null && {
        buildBatchConfigOverride: serializeAws_json1_1ProjectBuildBatchConfig(input.buildBatchConfigOverride, context),
    })), (input.buildTimeoutInMinutesOverride !== undefined &&
        input.buildTimeoutInMinutesOverride !== null && {
        buildTimeoutInMinutesOverride: input.buildTimeoutInMinutesOverride,
    })), (input.buildspecOverride !== undefined &&
        input.buildspecOverride !== null && { buildspecOverride: input.buildspecOverride })), (input.cacheOverride !== undefined &&
        input.cacheOverride !== null && {
        cacheOverride: serializeAws_json1_1ProjectCache(input.cacheOverride, context),
    })), (input.certificateOverride !== undefined &&
        input.certificateOverride !== null && { certificateOverride: input.certificateOverride })), (input.computeTypeOverride !== undefined &&
        input.computeTypeOverride !== null && { computeTypeOverride: input.computeTypeOverride })), (input.debugSessionEnabled !== undefined &&
        input.debugSessionEnabled !== null && { debugSessionEnabled: input.debugSessionEnabled })), (input.encryptionKeyOverride !== undefined &&
        input.encryptionKeyOverride !== null && { encryptionKeyOverride: input.encryptionKeyOverride })), (input.environmentTypeOverride !== undefined &&
        input.environmentTypeOverride !== null && { environmentTypeOverride: input.environmentTypeOverride })), (input.environmentVariablesOverride !== undefined &&
        input.environmentVariablesOverride !== null && {
        environmentVariablesOverride: serializeAws_json1_1EnvironmentVariables(input.environmentVariablesOverride, context),
    })), (input.gitCloneDepthOverride !== undefined &&
        input.gitCloneDepthOverride !== null && { gitCloneDepthOverride: input.gitCloneDepthOverride })), (input.gitSubmodulesConfigOverride !== undefined &&
        input.gitSubmodulesConfigOverride !== null && {
        gitSubmodulesConfigOverride: serializeAws_json1_1GitSubmodulesConfig(input.gitSubmodulesConfigOverride, context),
    })), (input.idempotencyToken !== undefined &&
        input.idempotencyToken !== null && { idempotencyToken: input.idempotencyToken })), (input.imageOverride !== undefined && input.imageOverride !== null && { imageOverride: input.imageOverride })), (input.imagePullCredentialsTypeOverride !== undefined &&
        input.imagePullCredentialsTypeOverride !== null && {
        imagePullCredentialsTypeOverride: input.imagePullCredentialsTypeOverride,
    })), (input.insecureSslOverride !== undefined &&
        input.insecureSslOverride !== null && { insecureSslOverride: input.insecureSslOverride })), (input.logsConfigOverride !== undefined &&
        input.logsConfigOverride !== null && {
        logsConfigOverride: serializeAws_json1_1LogsConfig(input.logsConfigOverride, context),
    })), (input.privilegedModeOverride !== undefined &&
        input.privilegedModeOverride !== null && { privilegedModeOverride: input.privilegedModeOverride })), (input.projectName !== undefined && input.projectName !== null && { projectName: input.projectName })), (input.queuedTimeoutInMinutesOverride !== undefined &&
        input.queuedTimeoutInMinutesOverride !== null && {
        queuedTimeoutInMinutesOverride: input.queuedTimeoutInMinutesOverride,
    })), (input.registryCredentialOverride !== undefined &&
        input.registryCredentialOverride !== null && {
        registryCredentialOverride: serializeAws_json1_1RegistryCredential(input.registryCredentialOverride, context),
    })), (input.reportBuildBatchStatusOverride !== undefined &&
        input.reportBuildBatchStatusOverride !== null && {
        reportBuildBatchStatusOverride: input.reportBuildBatchStatusOverride,
    })), (input.secondaryArtifactsOverride !== undefined &&
        input.secondaryArtifactsOverride !== null && {
        secondaryArtifactsOverride: serializeAws_json1_1ProjectArtifactsList(input.secondaryArtifactsOverride, context),
    })), (input.secondarySourcesOverride !== undefined &&
        input.secondarySourcesOverride !== null && {
        secondarySourcesOverride: serializeAws_json1_1ProjectSources(input.secondarySourcesOverride, context),
    })), (input.secondarySourcesVersionOverride !== undefined &&
        input.secondarySourcesVersionOverride !== null && {
        secondarySourcesVersionOverride: serializeAws_json1_1ProjectSecondarySourceVersions(input.secondarySourcesVersionOverride, context),
    })), (input.serviceRoleOverride !== undefined &&
        input.serviceRoleOverride !== null && { serviceRoleOverride: input.serviceRoleOverride })), (input.sourceAuthOverride !== undefined &&
        input.sourceAuthOverride !== null && {
        sourceAuthOverride: serializeAws_json1_1SourceAuth(input.sourceAuthOverride, context),
    })), (input.sourceLocationOverride !== undefined &&
        input.sourceLocationOverride !== null && { sourceLocationOverride: input.sourceLocationOverride })), (input.sourceTypeOverride !== undefined &&
        input.sourceTypeOverride !== null && { sourceTypeOverride: input.sourceTypeOverride })), (input.sourceVersion !== undefined && input.sourceVersion !== null && { sourceVersion: input.sourceVersion }));
};
var serializeAws_json1_1StartBuildInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.artifactsOverride !== undefined &&
        input.artifactsOverride !== null && {
        artifactsOverride: serializeAws_json1_1ProjectArtifacts(input.artifactsOverride, context),
    })), (input.buildStatusConfigOverride !== undefined &&
        input.buildStatusConfigOverride !== null && {
        buildStatusConfigOverride: serializeAws_json1_1BuildStatusConfig(input.buildStatusConfigOverride, context),
    })), (input.buildspecOverride !== undefined &&
        input.buildspecOverride !== null && { buildspecOverride: input.buildspecOverride })), (input.cacheOverride !== undefined &&
        input.cacheOverride !== null && {
        cacheOverride: serializeAws_json1_1ProjectCache(input.cacheOverride, context),
    })), (input.certificateOverride !== undefined &&
        input.certificateOverride !== null && { certificateOverride: input.certificateOverride })), (input.computeTypeOverride !== undefined &&
        input.computeTypeOverride !== null && { computeTypeOverride: input.computeTypeOverride })), (input.debugSessionEnabled !== undefined &&
        input.debugSessionEnabled !== null && { debugSessionEnabled: input.debugSessionEnabled })), (input.encryptionKeyOverride !== undefined &&
        input.encryptionKeyOverride !== null && { encryptionKeyOverride: input.encryptionKeyOverride })), (input.environmentTypeOverride !== undefined &&
        input.environmentTypeOverride !== null && { environmentTypeOverride: input.environmentTypeOverride })), (input.environmentVariablesOverride !== undefined &&
        input.environmentVariablesOverride !== null && {
        environmentVariablesOverride: serializeAws_json1_1EnvironmentVariables(input.environmentVariablesOverride, context),
    })), (input.gitCloneDepthOverride !== undefined &&
        input.gitCloneDepthOverride !== null && { gitCloneDepthOverride: input.gitCloneDepthOverride })), (input.gitSubmodulesConfigOverride !== undefined &&
        input.gitSubmodulesConfigOverride !== null && {
        gitSubmodulesConfigOverride: serializeAws_json1_1GitSubmodulesConfig(input.gitSubmodulesConfigOverride, context),
    })), (input.idempotencyToken !== undefined &&
        input.idempotencyToken !== null && { idempotencyToken: input.idempotencyToken })), (input.imageOverride !== undefined && input.imageOverride !== null && { imageOverride: input.imageOverride })), (input.imagePullCredentialsTypeOverride !== undefined &&
        input.imagePullCredentialsTypeOverride !== null && {
        imagePullCredentialsTypeOverride: input.imagePullCredentialsTypeOverride,
    })), (input.insecureSslOverride !== undefined &&
        input.insecureSslOverride !== null && { insecureSslOverride: input.insecureSslOverride })), (input.logsConfigOverride !== undefined &&
        input.logsConfigOverride !== null && {
        logsConfigOverride: serializeAws_json1_1LogsConfig(input.logsConfigOverride, context),
    })), (input.privilegedModeOverride !== undefined &&
        input.privilegedModeOverride !== null && { privilegedModeOverride: input.privilegedModeOverride })), (input.projectName !== undefined && input.projectName !== null && { projectName: input.projectName })), (input.queuedTimeoutInMinutesOverride !== undefined &&
        input.queuedTimeoutInMinutesOverride !== null && {
        queuedTimeoutInMinutesOverride: input.queuedTimeoutInMinutesOverride,
    })), (input.registryCredentialOverride !== undefined &&
        input.registryCredentialOverride !== null && {
        registryCredentialOverride: serializeAws_json1_1RegistryCredential(input.registryCredentialOverride, context),
    })), (input.reportBuildStatusOverride !== undefined &&
        input.reportBuildStatusOverride !== null && { reportBuildStatusOverride: input.reportBuildStatusOverride })), (input.secondaryArtifactsOverride !== undefined &&
        input.secondaryArtifactsOverride !== null && {
        secondaryArtifactsOverride: serializeAws_json1_1ProjectArtifactsList(input.secondaryArtifactsOverride, context),
    })), (input.secondarySourcesOverride !== undefined &&
        input.secondarySourcesOverride !== null && {
        secondarySourcesOverride: serializeAws_json1_1ProjectSources(input.secondarySourcesOverride, context),
    })), (input.secondarySourcesVersionOverride !== undefined &&
        input.secondarySourcesVersionOverride !== null && {
        secondarySourcesVersionOverride: serializeAws_json1_1ProjectSecondarySourceVersions(input.secondarySourcesVersionOverride, context),
    })), (input.serviceRoleOverride !== undefined &&
        input.serviceRoleOverride !== null && { serviceRoleOverride: input.serviceRoleOverride })), (input.sourceAuthOverride !== undefined &&
        input.sourceAuthOverride !== null && {
        sourceAuthOverride: serializeAws_json1_1SourceAuth(input.sourceAuthOverride, context),
    })), (input.sourceLocationOverride !== undefined &&
        input.sourceLocationOverride !== null && { sourceLocationOverride: input.sourceLocationOverride })), (input.sourceTypeOverride !== undefined &&
        input.sourceTypeOverride !== null && { sourceTypeOverride: input.sourceTypeOverride })), (input.sourceVersion !== undefined && input.sourceVersion !== null && { sourceVersion: input.sourceVersion })), (input.timeoutInMinutesOverride !== undefined &&
        input.timeoutInMinutesOverride !== null && { timeoutInMinutesOverride: input.timeoutInMinutesOverride }));
};
var serializeAws_json1_1StopBuildBatchInput = function (input, context) {
    return __assign({}, (input.id !== undefined && input.id !== null && { id: input.id }));
};
var serializeAws_json1_1StopBuildInput = function (input, context) {
    return __assign({}, (input.id !== undefined && input.id !== null && { id: input.id }));
};
var serializeAws_json1_1Subnets = function (input, context) {
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
    return __assign(__assign({}, (input.key !== undefined && input.key !== null && { key: input.key })), (input.value !== undefined && input.value !== null && { value: input.value }));
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
var serializeAws_json1_1TestCaseFilter = function (input, context) {
    return __assign(__assign({}, (input.keyword !== undefined && input.keyword !== null && { keyword: input.keyword })), (input.status !== undefined && input.status !== null && { status: input.status }));
};
var serializeAws_json1_1UpdateProjectInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.artifacts !== undefined &&
        input.artifacts !== null && { artifacts: serializeAws_json1_1ProjectArtifacts(input.artifacts, context) })), (input.badgeEnabled !== undefined && input.badgeEnabled !== null && { badgeEnabled: input.badgeEnabled })), (input.buildBatchConfig !== undefined &&
        input.buildBatchConfig !== null && {
        buildBatchConfig: serializeAws_json1_1ProjectBuildBatchConfig(input.buildBatchConfig, context),
    })), (input.cache !== undefined &&
        input.cache !== null && { cache: serializeAws_json1_1ProjectCache(input.cache, context) })), (input.concurrentBuildLimit !== undefined &&
        input.concurrentBuildLimit !== null && { concurrentBuildLimit: input.concurrentBuildLimit })), (input.description !== undefined && input.description !== null && { description: input.description })), (input.encryptionKey !== undefined && input.encryptionKey !== null && { encryptionKey: input.encryptionKey })), (input.environment !== undefined &&
        input.environment !== null && {
        environment: serializeAws_json1_1ProjectEnvironment(input.environment, context),
    })), (input.fileSystemLocations !== undefined &&
        input.fileSystemLocations !== null && {
        fileSystemLocations: serializeAws_json1_1ProjectFileSystemLocations(input.fileSystemLocations, context),
    })), (input.logsConfig !== undefined &&
        input.logsConfig !== null && { logsConfig: serializeAws_json1_1LogsConfig(input.logsConfig, context) })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.queuedTimeoutInMinutes !== undefined &&
        input.queuedTimeoutInMinutes !== null && { queuedTimeoutInMinutes: input.queuedTimeoutInMinutes })), (input.secondaryArtifacts !== undefined &&
        input.secondaryArtifacts !== null && {
        secondaryArtifacts: serializeAws_json1_1ProjectArtifactsList(input.secondaryArtifacts, context),
    })), (input.secondarySourceVersions !== undefined &&
        input.secondarySourceVersions !== null && {
        secondarySourceVersions: serializeAws_json1_1ProjectSecondarySourceVersions(input.secondarySourceVersions, context),
    })), (input.secondarySources !== undefined &&
        input.secondarySources !== null && {
        secondarySources: serializeAws_json1_1ProjectSources(input.secondarySources, context),
    })), (input.serviceRole !== undefined && input.serviceRole !== null && { serviceRole: input.serviceRole })), (input.source !== undefined &&
        input.source !== null && { source: serializeAws_json1_1ProjectSource(input.source, context) })), (input.sourceVersion !== undefined && input.sourceVersion !== null && { sourceVersion: input.sourceVersion })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) })), (input.timeoutInMinutes !== undefined &&
        input.timeoutInMinutes !== null && { timeoutInMinutes: input.timeoutInMinutes })), (input.vpcConfig !== undefined &&
        input.vpcConfig !== null && { vpcConfig: serializeAws_json1_1VpcConfig(input.vpcConfig, context) }));
};
var serializeAws_json1_1UpdateReportGroupInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.arn !== undefined && input.arn !== null && { arn: input.arn })), (input.exportConfig !== undefined &&
        input.exportConfig !== null && {
        exportConfig: serializeAws_json1_1ReportExportConfig(input.exportConfig, context),
    })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }));
};
var serializeAws_json1_1UpdateWebhookInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.branchFilter !== undefined && input.branchFilter !== null && { branchFilter: input.branchFilter })), (input.buildType !== undefined && input.buildType !== null && { buildType: input.buildType })), (input.filterGroups !== undefined &&
        input.filterGroups !== null && { filterGroups: serializeAws_json1_1FilterGroups(input.filterGroups, context) })), (input.projectName !== undefined && input.projectName !== null && { projectName: input.projectName })), (input.rotateSecret !== undefined && input.rotateSecret !== null && { rotateSecret: input.rotateSecret }));
};
var serializeAws_json1_1VpcConfig = function (input, context) {
    return __assign(__assign(__assign({}, (input.securityGroupIds !== undefined &&
        input.securityGroupIds !== null && {
        securityGroupIds: serializeAws_json1_1SecurityGroupIds(input.securityGroupIds, context),
    })), (input.subnets !== undefined &&
        input.subnets !== null && { subnets: serializeAws_json1_1Subnets(input.subnets, context) })), (input.vpcId !== undefined && input.vpcId !== null && { vpcId: input.vpcId }));
};
var serializeAws_json1_1WebhookFilter = function (input, context) {
    return __assign(__assign(__assign({}, (input.excludeMatchedPattern !== undefined &&
        input.excludeMatchedPattern !== null && { excludeMatchedPattern: input.excludeMatchedPattern })), (input.pattern !== undefined && input.pattern !== null && { pattern: input.pattern })), (input.type !== undefined && input.type !== null && { type: input.type }));
};
var deserializeAws_json1_1AccountLimitExceededException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1BatchDeleteBuildsOutput = function (output, context) {
    return {
        buildsDeleted: output.buildsDeleted !== undefined && output.buildsDeleted !== null
            ? deserializeAws_json1_1BuildIds(output.buildsDeleted, context)
            : undefined,
        buildsNotDeleted: output.buildsNotDeleted !== undefined && output.buildsNotDeleted !== null
            ? deserializeAws_json1_1BuildsNotDeleted(output.buildsNotDeleted, context)
            : undefined,
    };
};
var deserializeAws_json1_1BatchGetBuildBatchesOutput = function (output, context) {
    return {
        buildBatches: output.buildBatches !== undefined && output.buildBatches !== null
            ? deserializeAws_json1_1BuildBatches(output.buildBatches, context)
            : undefined,
        buildBatchesNotFound: output.buildBatchesNotFound !== undefined && output.buildBatchesNotFound !== null
            ? deserializeAws_json1_1BuildBatchIds(output.buildBatchesNotFound, context)
            : undefined,
    };
};
var deserializeAws_json1_1BatchGetBuildsOutput = function (output, context) {
    return {
        builds: output.builds !== undefined && output.builds !== null
            ? deserializeAws_json1_1Builds(output.builds, context)
            : undefined,
        buildsNotFound: output.buildsNotFound !== undefined && output.buildsNotFound !== null
            ? deserializeAws_json1_1BuildIds(output.buildsNotFound, context)
            : undefined,
    };
};
var deserializeAws_json1_1BatchGetProjectsOutput = function (output, context) {
    return {
        projects: output.projects !== undefined && output.projects !== null
            ? deserializeAws_json1_1Projects(output.projects, context)
            : undefined,
        projectsNotFound: output.projectsNotFound !== undefined && output.projectsNotFound !== null
            ? deserializeAws_json1_1ProjectNames(output.projectsNotFound, context)
            : undefined,
    };
};
var deserializeAws_json1_1BatchGetReportGroupsOutput = function (output, context) {
    return {
        reportGroups: output.reportGroups !== undefined && output.reportGroups !== null
            ? deserializeAws_json1_1ReportGroups(output.reportGroups, context)
            : undefined,
        reportGroupsNotFound: output.reportGroupsNotFound !== undefined && output.reportGroupsNotFound !== null
            ? deserializeAws_json1_1ReportGroupArns(output.reportGroupsNotFound, context)
            : undefined,
    };
};
var deserializeAws_json1_1BatchGetReportsOutput = function (output, context) {
    return {
        reports: output.reports !== undefined && output.reports !== null
            ? deserializeAws_json1_1Reports(output.reports, context)
            : undefined,
        reportsNotFound: output.reportsNotFound !== undefined && output.reportsNotFound !== null
            ? deserializeAws_json1_1ReportArns(output.reportsNotFound, context)
            : undefined,
    };
};
var deserializeAws_json1_1BatchRestrictions = function (output, context) {
    return {
        computeTypesAllowed: output.computeTypesAllowed !== undefined && output.computeTypesAllowed !== null
            ? deserializeAws_json1_1ComputeTypesAllowed(output.computeTypesAllowed, context)
            : undefined,
        maximumBuildsAllowed: output.maximumBuildsAllowed !== undefined && output.maximumBuildsAllowed !== null
            ? output.maximumBuildsAllowed
            : undefined,
    };
};
var deserializeAws_json1_1Build = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        artifacts: output.artifacts !== undefined && output.artifacts !== null
            ? deserializeAws_json1_1BuildArtifacts(output.artifacts, context)
            : undefined,
        buildBatchArn: output.buildBatchArn !== undefined && output.buildBatchArn !== null ? output.buildBatchArn : undefined,
        buildComplete: output.buildComplete !== undefined && output.buildComplete !== null ? output.buildComplete : undefined,
        buildNumber: output.buildNumber !== undefined && output.buildNumber !== null ? output.buildNumber : undefined,
        buildStatus: output.buildStatus !== undefined && output.buildStatus !== null ? output.buildStatus : undefined,
        cache: output.cache !== undefined && output.cache !== null
            ? deserializeAws_json1_1ProjectCache(output.cache, context)
            : undefined,
        currentPhase: output.currentPhase !== undefined && output.currentPhase !== null ? output.currentPhase : undefined,
        debugSession: output.debugSession !== undefined && output.debugSession !== null
            ? deserializeAws_json1_1DebugSession(output.debugSession, context)
            : undefined,
        encryptionKey: output.encryptionKey !== undefined && output.encryptionKey !== null ? output.encryptionKey : undefined,
        endTime: output.endTime !== undefined && output.endTime !== null ? new Date(Math.round(output.endTime * 1000)) : undefined,
        environment: output.environment !== undefined && output.environment !== null
            ? deserializeAws_json1_1ProjectEnvironment(output.environment, context)
            : undefined,
        exportedEnvironmentVariables: output.exportedEnvironmentVariables !== undefined && output.exportedEnvironmentVariables !== null
            ? deserializeAws_json1_1ExportedEnvironmentVariables(output.exportedEnvironmentVariables, context)
            : undefined,
        fileSystemLocations: output.fileSystemLocations !== undefined && output.fileSystemLocations !== null
            ? deserializeAws_json1_1ProjectFileSystemLocations(output.fileSystemLocations, context)
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        initiator: output.initiator !== undefined && output.initiator !== null ? output.initiator : undefined,
        logs: output.logs !== undefined && output.logs !== null
            ? deserializeAws_json1_1LogsLocation(output.logs, context)
            : undefined,
        networkInterface: output.networkInterface !== undefined && output.networkInterface !== null
            ? deserializeAws_json1_1NetworkInterface(output.networkInterface, context)
            : undefined,
        phases: output.phases !== undefined && output.phases !== null
            ? deserializeAws_json1_1BuildPhases(output.phases, context)
            : undefined,
        projectName: output.projectName !== undefined && output.projectName !== null ? output.projectName : undefined,
        queuedTimeoutInMinutes: output.queuedTimeoutInMinutes !== undefined && output.queuedTimeoutInMinutes !== null
            ? output.queuedTimeoutInMinutes
            : undefined,
        reportArns: output.reportArns !== undefined && output.reportArns !== null
            ? deserializeAws_json1_1BuildReportArns(output.reportArns, context)
            : undefined,
        resolvedSourceVersion: output.resolvedSourceVersion !== undefined && output.resolvedSourceVersion !== null
            ? output.resolvedSourceVersion
            : undefined,
        secondaryArtifacts: output.secondaryArtifacts !== undefined && output.secondaryArtifacts !== null
            ? deserializeAws_json1_1BuildArtifactsList(output.secondaryArtifacts, context)
            : undefined,
        secondarySourceVersions: output.secondarySourceVersions !== undefined && output.secondarySourceVersions !== null
            ? deserializeAws_json1_1ProjectSecondarySourceVersions(output.secondarySourceVersions, context)
            : undefined,
        secondarySources: output.secondarySources !== undefined && output.secondarySources !== null
            ? deserializeAws_json1_1ProjectSources(output.secondarySources, context)
            : undefined,
        serviceRole: output.serviceRole !== undefined && output.serviceRole !== null ? output.serviceRole : undefined,
        source: output.source !== undefined && output.source !== null
            ? deserializeAws_json1_1ProjectSource(output.source, context)
            : undefined,
        sourceVersion: output.sourceVersion !== undefined && output.sourceVersion !== null ? output.sourceVersion : undefined,
        startTime: output.startTime !== undefined && output.startTime !== null
            ? new Date(Math.round(output.startTime * 1000))
            : undefined,
        timeoutInMinutes: output.timeoutInMinutes !== undefined && output.timeoutInMinutes !== null ? output.timeoutInMinutes : undefined,
        vpcConfig: output.vpcConfig !== undefined && output.vpcConfig !== null
            ? deserializeAws_json1_1VpcConfig(output.vpcConfig, context)
            : undefined,
    };
};
var deserializeAws_json1_1BuildArtifacts = function (output, context) {
    return {
        artifactIdentifier: output.artifactIdentifier !== undefined && output.artifactIdentifier !== null
            ? output.artifactIdentifier
            : undefined,
        bucketOwnerAccess: output.bucketOwnerAccess !== undefined && output.bucketOwnerAccess !== null
            ? output.bucketOwnerAccess
            : undefined,
        encryptionDisabled: output.encryptionDisabled !== undefined && output.encryptionDisabled !== null
            ? output.encryptionDisabled
            : undefined,
        location: output.location !== undefined && output.location !== null ? output.location : undefined,
        md5sum: output.md5sum !== undefined && output.md5sum !== null ? output.md5sum : undefined,
        overrideArtifactName: output.overrideArtifactName !== undefined && output.overrideArtifactName !== null
            ? output.overrideArtifactName
            : undefined,
        sha256sum: output.sha256sum !== undefined && output.sha256sum !== null ? output.sha256sum : undefined,
    };
};
var deserializeAws_json1_1BuildArtifactsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BuildArtifacts(entry, context);
    });
};
var deserializeAws_json1_1BuildBatch = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        artifacts: output.artifacts !== undefined && output.artifacts !== null
            ? deserializeAws_json1_1BuildArtifacts(output.artifacts, context)
            : undefined,
        buildBatchConfig: output.buildBatchConfig !== undefined && output.buildBatchConfig !== null
            ? deserializeAws_json1_1ProjectBuildBatchConfig(output.buildBatchConfig, context)
            : undefined,
        buildBatchNumber: output.buildBatchNumber !== undefined && output.buildBatchNumber !== null ? output.buildBatchNumber : undefined,
        buildBatchStatus: output.buildBatchStatus !== undefined && output.buildBatchStatus !== null ? output.buildBatchStatus : undefined,
        buildGroups: output.buildGroups !== undefined && output.buildGroups !== null
            ? deserializeAws_json1_1BuildGroups(output.buildGroups, context)
            : undefined,
        buildTimeoutInMinutes: output.buildTimeoutInMinutes !== undefined && output.buildTimeoutInMinutes !== null
            ? output.buildTimeoutInMinutes
            : undefined,
        cache: output.cache !== undefined && output.cache !== null
            ? deserializeAws_json1_1ProjectCache(output.cache, context)
            : undefined,
        complete: output.complete !== undefined && output.complete !== null ? output.complete : undefined,
        currentPhase: output.currentPhase !== undefined && output.currentPhase !== null ? output.currentPhase : undefined,
        debugSessionEnabled: output.debugSessionEnabled !== undefined && output.debugSessionEnabled !== null
            ? output.debugSessionEnabled
            : undefined,
        encryptionKey: output.encryptionKey !== undefined && output.encryptionKey !== null ? output.encryptionKey : undefined,
        endTime: output.endTime !== undefined && output.endTime !== null ? new Date(Math.round(output.endTime * 1000)) : undefined,
        environment: output.environment !== undefined && output.environment !== null
            ? deserializeAws_json1_1ProjectEnvironment(output.environment, context)
            : undefined,
        fileSystemLocations: output.fileSystemLocations !== undefined && output.fileSystemLocations !== null
            ? deserializeAws_json1_1ProjectFileSystemLocations(output.fileSystemLocations, context)
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        initiator: output.initiator !== undefined && output.initiator !== null ? output.initiator : undefined,
        logConfig: output.logConfig !== undefined && output.logConfig !== null
            ? deserializeAws_json1_1LogsConfig(output.logConfig, context)
            : undefined,
        phases: output.phases !== undefined && output.phases !== null
            ? deserializeAws_json1_1BuildBatchPhases(output.phases, context)
            : undefined,
        projectName: output.projectName !== undefined && output.projectName !== null ? output.projectName : undefined,
        queuedTimeoutInMinutes: output.queuedTimeoutInMinutes !== undefined && output.queuedTimeoutInMinutes !== null
            ? output.queuedTimeoutInMinutes
            : undefined,
        resolvedSourceVersion: output.resolvedSourceVersion !== undefined && output.resolvedSourceVersion !== null
            ? output.resolvedSourceVersion
            : undefined,
        secondaryArtifacts: output.secondaryArtifacts !== undefined && output.secondaryArtifacts !== null
            ? deserializeAws_json1_1BuildArtifactsList(output.secondaryArtifacts, context)
            : undefined,
        secondarySourceVersions: output.secondarySourceVersions !== undefined && output.secondarySourceVersions !== null
            ? deserializeAws_json1_1ProjectSecondarySourceVersions(output.secondarySourceVersions, context)
            : undefined,
        secondarySources: output.secondarySources !== undefined && output.secondarySources !== null
            ? deserializeAws_json1_1ProjectSources(output.secondarySources, context)
            : undefined,
        serviceRole: output.serviceRole !== undefined && output.serviceRole !== null ? output.serviceRole : undefined,
        source: output.source !== undefined && output.source !== null
            ? deserializeAws_json1_1ProjectSource(output.source, context)
            : undefined,
        sourceVersion: output.sourceVersion !== undefined && output.sourceVersion !== null ? output.sourceVersion : undefined,
        startTime: output.startTime !== undefined && output.startTime !== null
            ? new Date(Math.round(output.startTime * 1000))
            : undefined,
        vpcConfig: output.vpcConfig !== undefined && output.vpcConfig !== null
            ? deserializeAws_json1_1VpcConfig(output.vpcConfig, context)
            : undefined,
    };
};
var deserializeAws_json1_1BuildBatches = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BuildBatch(entry, context);
    });
};
var deserializeAws_json1_1BuildBatchIds = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1BuildBatchPhase = function (output, context) {
    return {
        contexts: output.contexts !== undefined && output.contexts !== null
            ? deserializeAws_json1_1PhaseContexts(output.contexts, context)
            : undefined,
        durationInSeconds: output.durationInSeconds !== undefined && output.durationInSeconds !== null
            ? output.durationInSeconds
            : undefined,
        endTime: output.endTime !== undefined && output.endTime !== null ? new Date(Math.round(output.endTime * 1000)) : undefined,
        phaseStatus: output.phaseStatus !== undefined && output.phaseStatus !== null ? output.phaseStatus : undefined,
        phaseType: output.phaseType !== undefined && output.phaseType !== null ? output.phaseType : undefined,
        startTime: output.startTime !== undefined && output.startTime !== null
            ? new Date(Math.round(output.startTime * 1000))
            : undefined,
    };
};
var deserializeAws_json1_1BuildBatchPhases = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BuildBatchPhase(entry, context);
    });
};
var deserializeAws_json1_1BuildGroup = function (output, context) {
    return {
        currentBuildSummary: output.currentBuildSummary !== undefined && output.currentBuildSummary !== null
            ? deserializeAws_json1_1BuildSummary(output.currentBuildSummary, context)
            : undefined,
        dependsOn: output.dependsOn !== undefined && output.dependsOn !== null
            ? deserializeAws_json1_1Identifiers(output.dependsOn, context)
            : undefined,
        identifier: output.identifier !== undefined && output.identifier !== null ? output.identifier : undefined,
        ignoreFailure: output.ignoreFailure !== undefined && output.ignoreFailure !== null ? output.ignoreFailure : undefined,
        priorBuildSummaryList: output.priorBuildSummaryList !== undefined && output.priorBuildSummaryList !== null
            ? deserializeAws_json1_1BuildSummaries(output.priorBuildSummaryList, context)
            : undefined,
    };
};
var deserializeAws_json1_1BuildGroups = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BuildGroup(entry, context);
    });
};
var deserializeAws_json1_1BuildIds = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1BuildNotDeleted = function (output, context) {
    return {
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        statusCode: output.statusCode !== undefined && output.statusCode !== null ? output.statusCode : undefined,
    };
};
var deserializeAws_json1_1BuildPhase = function (output, context) {
    return {
        contexts: output.contexts !== undefined && output.contexts !== null
            ? deserializeAws_json1_1PhaseContexts(output.contexts, context)
            : undefined,
        durationInSeconds: output.durationInSeconds !== undefined && output.durationInSeconds !== null
            ? output.durationInSeconds
            : undefined,
        endTime: output.endTime !== undefined && output.endTime !== null ? new Date(Math.round(output.endTime * 1000)) : undefined,
        phaseStatus: output.phaseStatus !== undefined && output.phaseStatus !== null ? output.phaseStatus : undefined,
        phaseType: output.phaseType !== undefined && output.phaseType !== null ? output.phaseType : undefined,
        startTime: output.startTime !== undefined && output.startTime !== null
            ? new Date(Math.round(output.startTime * 1000))
            : undefined,
    };
};
var deserializeAws_json1_1BuildPhases = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BuildPhase(entry, context);
    });
};
var deserializeAws_json1_1BuildReportArns = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1Builds = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Build(entry, context);
    });
};
var deserializeAws_json1_1BuildsNotDeleted = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BuildNotDeleted(entry, context);
    });
};
var deserializeAws_json1_1BuildStatusConfig = function (output, context) {
    return {
        context: output.context !== undefined && output.context !== null ? output.context : undefined,
        targetUrl: output.targetUrl !== undefined && output.targetUrl !== null ? output.targetUrl : undefined,
    };
};
var deserializeAws_json1_1BuildSummaries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BuildSummary(entry, context);
    });
};
var deserializeAws_json1_1BuildSummary = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        buildStatus: output.buildStatus !== undefined && output.buildStatus !== null ? output.buildStatus : undefined,
        primaryArtifact: output.primaryArtifact !== undefined && output.primaryArtifact !== null
            ? deserializeAws_json1_1ResolvedArtifact(output.primaryArtifact, context)
            : undefined,
        requestedOn: output.requestedOn !== undefined && output.requestedOn !== null
            ? new Date(Math.round(output.requestedOn * 1000))
            : undefined,
        secondaryArtifacts: output.secondaryArtifacts !== undefined && output.secondaryArtifacts !== null
            ? deserializeAws_json1_1ResolvedSecondaryArtifacts(output.secondaryArtifacts, context)
            : undefined,
    };
};
var deserializeAws_json1_1CloudWatchLogsConfig = function (output, context) {
    return {
        groupName: output.groupName !== undefined && output.groupName !== null ? output.groupName : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        streamName: output.streamName !== undefined && output.streamName !== null ? output.streamName : undefined,
    };
};
var deserializeAws_json1_1CodeCoverage = function (output, context) {
    return {
        branchCoveragePercentage: output.branchCoveragePercentage !== undefined && output.branchCoveragePercentage !== null
            ? output.branchCoveragePercentage
            : undefined,
        branchesCovered: output.branchesCovered !== undefined && output.branchesCovered !== null ? output.branchesCovered : undefined,
        branchesMissed: output.branchesMissed !== undefined && output.branchesMissed !== null ? output.branchesMissed : undefined,
        expired: output.expired !== undefined && output.expired !== null ? new Date(Math.round(output.expired * 1000)) : undefined,
        filePath: output.filePath !== undefined && output.filePath !== null ? output.filePath : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        lineCoveragePercentage: output.lineCoveragePercentage !== undefined && output.lineCoveragePercentage !== null
            ? output.lineCoveragePercentage
            : undefined,
        linesCovered: output.linesCovered !== undefined && output.linesCovered !== null ? output.linesCovered : undefined,
        linesMissed: output.linesMissed !== undefined && output.linesMissed !== null ? output.linesMissed : undefined,
        reportARN: output.reportARN !== undefined && output.reportARN !== null ? output.reportARN : undefined,
    };
};
var deserializeAws_json1_1CodeCoverageReportSummary = function (output, context) {
    return {
        branchCoveragePercentage: output.branchCoveragePercentage !== undefined && output.branchCoveragePercentage !== null
            ? output.branchCoveragePercentage
            : undefined,
        branchesCovered: output.branchesCovered !== undefined && output.branchesCovered !== null ? output.branchesCovered : undefined,
        branchesMissed: output.branchesMissed !== undefined && output.branchesMissed !== null ? output.branchesMissed : undefined,
        lineCoveragePercentage: output.lineCoveragePercentage !== undefined && output.lineCoveragePercentage !== null
            ? output.lineCoveragePercentage
            : undefined,
        linesCovered: output.linesCovered !== undefined && output.linesCovered !== null ? output.linesCovered : undefined,
        linesMissed: output.linesMissed !== undefined && output.linesMissed !== null ? output.linesMissed : undefined,
    };
};
var deserializeAws_json1_1CodeCoverages = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CodeCoverage(entry, context);
    });
};
var deserializeAws_json1_1ComputeTypesAllowed = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1CreateProjectOutput = function (output, context) {
    return {
        project: output.project !== undefined && output.project !== null
            ? deserializeAws_json1_1Project(output.project, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateReportGroupOutput = function (output, context) {
    return {
        reportGroup: output.reportGroup !== undefined && output.reportGroup !== null
            ? deserializeAws_json1_1ReportGroup(output.reportGroup, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateWebhookOutput = function (output, context) {
    return {
        webhook: output.webhook !== undefined && output.webhook !== null
            ? deserializeAws_json1_1Webhook(output.webhook, context)
            : undefined,
    };
};
var deserializeAws_json1_1DebugSession = function (output, context) {
    return {
        sessionEnabled: output.sessionEnabled !== undefined && output.sessionEnabled !== null ? output.sessionEnabled : undefined,
        sessionTarget: output.sessionTarget !== undefined && output.sessionTarget !== null ? output.sessionTarget : undefined,
    };
};
var deserializeAws_json1_1DeleteBuildBatchOutput = function (output, context) {
    return {
        buildsDeleted: output.buildsDeleted !== undefined && output.buildsDeleted !== null
            ? deserializeAws_json1_1BuildIds(output.buildsDeleted, context)
            : undefined,
        buildsNotDeleted: output.buildsNotDeleted !== undefined && output.buildsNotDeleted !== null
            ? deserializeAws_json1_1BuildsNotDeleted(output.buildsNotDeleted, context)
            : undefined,
        statusCode: output.statusCode !== undefined && output.statusCode !== null ? output.statusCode : undefined,
    };
};
var deserializeAws_json1_1DeleteProjectOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeleteReportGroupOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeleteReportOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeleteResourcePolicyOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeleteSourceCredentialsOutput = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    };
};
var deserializeAws_json1_1DeleteWebhookOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1DescribeCodeCoveragesOutput = function (output, context) {
    return {
        codeCoverages: output.codeCoverages !== undefined && output.codeCoverages !== null
            ? deserializeAws_json1_1CodeCoverages(output.codeCoverages, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeTestCasesOutput = function (output, context) {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        testCases: output.testCases !== undefined && output.testCases !== null
            ? deserializeAws_json1_1TestCases(output.testCases, context)
            : undefined,
    };
};
var deserializeAws_json1_1EnvironmentImage = function (output, context) {
    return {
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        versions: output.versions !== undefined && output.versions !== null
            ? deserializeAws_json1_1ImageVersions(output.versions, context)
            : undefined,
    };
};
var deserializeAws_json1_1EnvironmentImages = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EnvironmentImage(entry, context);
    });
};
var deserializeAws_json1_1EnvironmentLanguage = function (output, context) {
    return {
        images: output.images !== undefined && output.images !== null
            ? deserializeAws_json1_1EnvironmentImages(output.images, context)
            : undefined,
        language: output.language !== undefined && output.language !== null ? output.language : undefined,
    };
};
var deserializeAws_json1_1EnvironmentLanguages = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EnvironmentLanguage(entry, context);
    });
};
var deserializeAws_json1_1EnvironmentPlatform = function (output, context) {
    return {
        languages: output.languages !== undefined && output.languages !== null
            ? deserializeAws_json1_1EnvironmentLanguages(output.languages, context)
            : undefined,
        platform: output.platform !== undefined && output.platform !== null ? output.platform : undefined,
    };
};
var deserializeAws_json1_1EnvironmentPlatforms = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EnvironmentPlatform(entry, context);
    });
};
var deserializeAws_json1_1EnvironmentVariable = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
var deserializeAws_json1_1EnvironmentVariables = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EnvironmentVariable(entry, context);
    });
};
var deserializeAws_json1_1ExportedEnvironmentVariable = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
var deserializeAws_json1_1ExportedEnvironmentVariables = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ExportedEnvironmentVariable(entry, context);
    });
};
var deserializeAws_json1_1FilterGroup = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1WebhookFilter(entry, context);
    });
};
var deserializeAws_json1_1FilterGroups = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FilterGroup(entry, context);
    });
};
var deserializeAws_json1_1GetReportGroupTrendOutput = function (output, context) {
    return {
        rawData: output.rawData !== undefined && output.rawData !== null
            ? deserializeAws_json1_1ReportGroupTrendRawDataList(output.rawData, context)
            : undefined,
        stats: output.stats !== undefined && output.stats !== null
            ? deserializeAws_json1_1ReportGroupTrendStats(output.stats, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetResourcePolicyOutput = function (output, context) {
    return {
        policy: output.policy !== undefined && output.policy !== null ? output.policy : undefined,
    };
};
var deserializeAws_json1_1GitSubmodulesConfig = function (output, context) {
    return {
        fetchSubmodules: output.fetchSubmodules !== undefined && output.fetchSubmodules !== null ? output.fetchSubmodules : undefined,
    };
};
var deserializeAws_json1_1Identifiers = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1ImageVersions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1ImportSourceCredentialsOutput = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    };
};
var deserializeAws_json1_1InvalidateProjectCacheOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1InvalidInputException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ListBuildBatchesForProjectOutput = function (output, context) {
    return {
        ids: output.ids !== undefined && output.ids !== null
            ? deserializeAws_json1_1BuildBatchIds(output.ids, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1ListBuildBatchesOutput = function (output, context) {
    return {
        ids: output.ids !== undefined && output.ids !== null
            ? deserializeAws_json1_1BuildBatchIds(output.ids, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1ListBuildsForProjectOutput = function (output, context) {
    return {
        ids: output.ids !== undefined && output.ids !== null ? deserializeAws_json1_1BuildIds(output.ids, context) : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1ListBuildsOutput = function (output, context) {
    return {
        ids: output.ids !== undefined && output.ids !== null ? deserializeAws_json1_1BuildIds(output.ids, context) : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1ListCuratedEnvironmentImagesOutput = function (output, context) {
    return {
        platforms: output.platforms !== undefined && output.platforms !== null
            ? deserializeAws_json1_1EnvironmentPlatforms(output.platforms, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListProjectsOutput = function (output, context) {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        projects: output.projects !== undefined && output.projects !== null
            ? deserializeAws_json1_1ProjectNames(output.projects, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListReportGroupsOutput = function (output, context) {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        reportGroups: output.reportGroups !== undefined && output.reportGroups !== null
            ? deserializeAws_json1_1ReportGroupArns(output.reportGroups, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListReportsForReportGroupOutput = function (output, context) {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        reports: output.reports !== undefined && output.reports !== null
            ? deserializeAws_json1_1ReportArns(output.reports, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListReportsOutput = function (output, context) {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        reports: output.reports !== undefined && output.reports !== null
            ? deserializeAws_json1_1ReportArns(output.reports, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListSharedProjectsOutput = function (output, context) {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        projects: output.projects !== undefined && output.projects !== null
            ? deserializeAws_json1_1ProjectArns(output.projects, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListSharedReportGroupsOutput = function (output, context) {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        reportGroups: output.reportGroups !== undefined && output.reportGroups !== null
            ? deserializeAws_json1_1ReportGroupArns(output.reportGroups, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListSourceCredentialsOutput = function (output, context) {
    return {
        sourceCredentialsInfos: output.sourceCredentialsInfos !== undefined && output.sourceCredentialsInfos !== null
            ? deserializeAws_json1_1SourceCredentialsInfos(output.sourceCredentialsInfos, context)
            : undefined,
    };
};
var deserializeAws_json1_1LogsConfig = function (output, context) {
    return {
        cloudWatchLogs: output.cloudWatchLogs !== undefined && output.cloudWatchLogs !== null
            ? deserializeAws_json1_1CloudWatchLogsConfig(output.cloudWatchLogs, context)
            : undefined,
        s3Logs: output.s3Logs !== undefined && output.s3Logs !== null
            ? deserializeAws_json1_1S3LogsConfig(output.s3Logs, context)
            : undefined,
    };
};
var deserializeAws_json1_1LogsLocation = function (output, context) {
    return {
        cloudWatchLogs: output.cloudWatchLogs !== undefined && output.cloudWatchLogs !== null
            ? deserializeAws_json1_1CloudWatchLogsConfig(output.cloudWatchLogs, context)
            : undefined,
        cloudWatchLogsArn: output.cloudWatchLogsArn !== undefined && output.cloudWatchLogsArn !== null
            ? output.cloudWatchLogsArn
            : undefined,
        deepLink: output.deepLink !== undefined && output.deepLink !== null ? output.deepLink : undefined,
        groupName: output.groupName !== undefined && output.groupName !== null ? output.groupName : undefined,
        s3DeepLink: output.s3DeepLink !== undefined && output.s3DeepLink !== null ? output.s3DeepLink : undefined,
        s3Logs: output.s3Logs !== undefined && output.s3Logs !== null
            ? deserializeAws_json1_1S3LogsConfig(output.s3Logs, context)
            : undefined,
        s3LogsArn: output.s3LogsArn !== undefined && output.s3LogsArn !== null ? output.s3LogsArn : undefined,
        streamName: output.streamName !== undefined && output.streamName !== null ? output.streamName : undefined,
    };
};
var deserializeAws_json1_1NetworkInterface = function (output, context) {
    return {
        networkInterfaceId: output.networkInterfaceId !== undefined && output.networkInterfaceId !== null
            ? output.networkInterfaceId
            : undefined,
        subnetId: output.subnetId !== undefined && output.subnetId !== null ? output.subnetId : undefined,
    };
};
var deserializeAws_json1_1OAuthProviderException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1PhaseContext = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        statusCode: output.statusCode !== undefined && output.statusCode !== null ? output.statusCode : undefined,
    };
};
var deserializeAws_json1_1PhaseContexts = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PhaseContext(entry, context);
    });
};
var deserializeAws_json1_1Project = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        artifacts: output.artifacts !== undefined && output.artifacts !== null
            ? deserializeAws_json1_1ProjectArtifacts(output.artifacts, context)
            : undefined,
        badge: output.badge !== undefined && output.badge !== null
            ? deserializeAws_json1_1ProjectBadge(output.badge, context)
            : undefined,
        buildBatchConfig: output.buildBatchConfig !== undefined && output.buildBatchConfig !== null
            ? deserializeAws_json1_1ProjectBuildBatchConfig(output.buildBatchConfig, context)
            : undefined,
        cache: output.cache !== undefined && output.cache !== null
            ? deserializeAws_json1_1ProjectCache(output.cache, context)
            : undefined,
        concurrentBuildLimit: output.concurrentBuildLimit !== undefined && output.concurrentBuildLimit !== null
            ? output.concurrentBuildLimit
            : undefined,
        created: output.created !== undefined && output.created !== null ? new Date(Math.round(output.created * 1000)) : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        encryptionKey: output.encryptionKey !== undefined && output.encryptionKey !== null ? output.encryptionKey : undefined,
        environment: output.environment !== undefined && output.environment !== null
            ? deserializeAws_json1_1ProjectEnvironment(output.environment, context)
            : undefined,
        fileSystemLocations: output.fileSystemLocations !== undefined && output.fileSystemLocations !== null
            ? deserializeAws_json1_1ProjectFileSystemLocations(output.fileSystemLocations, context)
            : undefined,
        lastModified: output.lastModified !== undefined && output.lastModified !== null
            ? new Date(Math.round(output.lastModified * 1000))
            : undefined,
        logsConfig: output.logsConfig !== undefined && output.logsConfig !== null
            ? deserializeAws_json1_1LogsConfig(output.logsConfig, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        queuedTimeoutInMinutes: output.queuedTimeoutInMinutes !== undefined && output.queuedTimeoutInMinutes !== null
            ? output.queuedTimeoutInMinutes
            : undefined,
        secondaryArtifacts: output.secondaryArtifacts !== undefined && output.secondaryArtifacts !== null
            ? deserializeAws_json1_1ProjectArtifactsList(output.secondaryArtifacts, context)
            : undefined,
        secondarySourceVersions: output.secondarySourceVersions !== undefined && output.secondarySourceVersions !== null
            ? deserializeAws_json1_1ProjectSecondarySourceVersions(output.secondarySourceVersions, context)
            : undefined,
        secondarySources: output.secondarySources !== undefined && output.secondarySources !== null
            ? deserializeAws_json1_1ProjectSources(output.secondarySources, context)
            : undefined,
        serviceRole: output.serviceRole !== undefined && output.serviceRole !== null ? output.serviceRole : undefined,
        source: output.source !== undefined && output.source !== null
            ? deserializeAws_json1_1ProjectSource(output.source, context)
            : undefined,
        sourceVersion: output.sourceVersion !== undefined && output.sourceVersion !== null ? output.sourceVersion : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_1TagList(output.tags, context)
            : undefined,
        timeoutInMinutes: output.timeoutInMinutes !== undefined && output.timeoutInMinutes !== null ? output.timeoutInMinutes : undefined,
        vpcConfig: output.vpcConfig !== undefined && output.vpcConfig !== null
            ? deserializeAws_json1_1VpcConfig(output.vpcConfig, context)
            : undefined,
        webhook: output.webhook !== undefined && output.webhook !== null
            ? deserializeAws_json1_1Webhook(output.webhook, context)
            : undefined,
    };
};
var deserializeAws_json1_1ProjectArns = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1ProjectArtifacts = function (output, context) {
    return {
        artifactIdentifier: output.artifactIdentifier !== undefined && output.artifactIdentifier !== null
            ? output.artifactIdentifier
            : undefined,
        bucketOwnerAccess: output.bucketOwnerAccess !== undefined && output.bucketOwnerAccess !== null
            ? output.bucketOwnerAccess
            : undefined,
        encryptionDisabled: output.encryptionDisabled !== undefined && output.encryptionDisabled !== null
            ? output.encryptionDisabled
            : undefined,
        location: output.location !== undefined && output.location !== null ? output.location : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        namespaceType: output.namespaceType !== undefined && output.namespaceType !== null ? output.namespaceType : undefined,
        overrideArtifactName: output.overrideArtifactName !== undefined && output.overrideArtifactName !== null
            ? output.overrideArtifactName
            : undefined,
        packaging: output.packaging !== undefined && output.packaging !== null ? output.packaging : undefined,
        path: output.path !== undefined && output.path !== null ? output.path : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_json1_1ProjectArtifactsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProjectArtifacts(entry, context);
    });
};
var deserializeAws_json1_1ProjectBadge = function (output, context) {
    return {
        badgeEnabled: output.badgeEnabled !== undefined && output.badgeEnabled !== null ? output.badgeEnabled : undefined,
        badgeRequestUrl: output.badgeRequestUrl !== undefined && output.badgeRequestUrl !== null ? output.badgeRequestUrl : undefined,
    };
};
var deserializeAws_json1_1ProjectBuildBatchConfig = function (output, context) {
    return {
        combineArtifacts: output.combineArtifacts !== undefined && output.combineArtifacts !== null ? output.combineArtifacts : undefined,
        restrictions: output.restrictions !== undefined && output.restrictions !== null
            ? deserializeAws_json1_1BatchRestrictions(output.restrictions, context)
            : undefined,
        serviceRole: output.serviceRole !== undefined && output.serviceRole !== null ? output.serviceRole : undefined,
        timeoutInMins: output.timeoutInMins !== undefined && output.timeoutInMins !== null ? output.timeoutInMins : undefined,
    };
};
var deserializeAws_json1_1ProjectCache = function (output, context) {
    return {
        location: output.location !== undefined && output.location !== null ? output.location : undefined,
        modes: output.modes !== undefined && output.modes !== null
            ? deserializeAws_json1_1ProjectCacheModes(output.modes, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_json1_1ProjectCacheModes = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1ProjectEnvironment = function (output, context) {
    return {
        certificate: output.certificate !== undefined && output.certificate !== null ? output.certificate : undefined,
        computeType: output.computeType !== undefined && output.computeType !== null ? output.computeType : undefined,
        environmentVariables: output.environmentVariables !== undefined && output.environmentVariables !== null
            ? deserializeAws_json1_1EnvironmentVariables(output.environmentVariables, context)
            : undefined,
        image: output.image !== undefined && output.image !== null ? output.image : undefined,
        imagePullCredentialsType: output.imagePullCredentialsType !== undefined && output.imagePullCredentialsType !== null
            ? output.imagePullCredentialsType
            : undefined,
        privilegedMode: output.privilegedMode !== undefined && output.privilegedMode !== null ? output.privilegedMode : undefined,
        registryCredential: output.registryCredential !== undefined && output.registryCredential !== null
            ? deserializeAws_json1_1RegistryCredential(output.registryCredential, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_json1_1ProjectFileSystemLocation = function (output, context) {
    return {
        identifier: output.identifier !== undefined && output.identifier !== null ? output.identifier : undefined,
        location: output.location !== undefined && output.location !== null ? output.location : undefined,
        mountOptions: output.mountOptions !== undefined && output.mountOptions !== null ? output.mountOptions : undefined,
        mountPoint: output.mountPoint !== undefined && output.mountPoint !== null ? output.mountPoint : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_json1_1ProjectFileSystemLocations = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProjectFileSystemLocation(entry, context);
    });
};
var deserializeAws_json1_1ProjectNames = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1Projects = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Project(entry, context);
    });
};
var deserializeAws_json1_1ProjectSecondarySourceVersions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProjectSourceVersion(entry, context);
    });
};
var deserializeAws_json1_1ProjectSource = function (output, context) {
    return {
        auth: output.auth !== undefined && output.auth !== null
            ? deserializeAws_json1_1SourceAuth(output.auth, context)
            : undefined,
        buildStatusConfig: output.buildStatusConfig !== undefined && output.buildStatusConfig !== null
            ? deserializeAws_json1_1BuildStatusConfig(output.buildStatusConfig, context)
            : undefined,
        buildspec: output.buildspec !== undefined && output.buildspec !== null ? output.buildspec : undefined,
        gitCloneDepth: output.gitCloneDepth !== undefined && output.gitCloneDepth !== null ? output.gitCloneDepth : undefined,
        gitSubmodulesConfig: output.gitSubmodulesConfig !== undefined && output.gitSubmodulesConfig !== null
            ? deserializeAws_json1_1GitSubmodulesConfig(output.gitSubmodulesConfig, context)
            : undefined,
        insecureSsl: output.insecureSsl !== undefined && output.insecureSsl !== null ? output.insecureSsl : undefined,
        location: output.location !== undefined && output.location !== null ? output.location : undefined,
        reportBuildStatus: output.reportBuildStatus !== undefined && output.reportBuildStatus !== null
            ? output.reportBuildStatus
            : undefined,
        sourceIdentifier: output.sourceIdentifier !== undefined && output.sourceIdentifier !== null ? output.sourceIdentifier : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_json1_1ProjectSources = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProjectSource(entry, context);
    });
};
var deserializeAws_json1_1ProjectSourceVersion = function (output, context) {
    return {
        sourceIdentifier: output.sourceIdentifier !== undefined && output.sourceIdentifier !== null ? output.sourceIdentifier : undefined,
        sourceVersion: output.sourceVersion !== undefined && output.sourceVersion !== null ? output.sourceVersion : undefined,
    };
};
var deserializeAws_json1_1PutResourcePolicyOutput = function (output, context) {
    return {
        resourceArn: output.resourceArn !== undefined && output.resourceArn !== null ? output.resourceArn : undefined,
    };
};
var deserializeAws_json1_1RegistryCredential = function (output, context) {
    return {
        credential: output.credential !== undefined && output.credential !== null ? output.credential : undefined,
        credentialProvider: output.credentialProvider !== undefined && output.credentialProvider !== null
            ? output.credentialProvider
            : undefined,
    };
};
var deserializeAws_json1_1Report = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        codeCoverageSummary: output.codeCoverageSummary !== undefined && output.codeCoverageSummary !== null
            ? deserializeAws_json1_1CodeCoverageReportSummary(output.codeCoverageSummary, context)
            : undefined,
        created: output.created !== undefined && output.created !== null ? new Date(Math.round(output.created * 1000)) : undefined,
        executionId: output.executionId !== undefined && output.executionId !== null ? output.executionId : undefined,
        expired: output.expired !== undefined && output.expired !== null ? new Date(Math.round(output.expired * 1000)) : undefined,
        exportConfig: output.exportConfig !== undefined && output.exportConfig !== null
            ? deserializeAws_json1_1ReportExportConfig(output.exportConfig, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        reportGroupArn: output.reportGroupArn !== undefined && output.reportGroupArn !== null ? output.reportGroupArn : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        testSummary: output.testSummary !== undefined && output.testSummary !== null
            ? deserializeAws_json1_1TestReportSummary(output.testSummary, context)
            : undefined,
        truncated: output.truncated !== undefined && output.truncated !== null ? output.truncated : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_json1_1ReportArns = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1ReportExportConfig = function (output, context) {
    return {
        exportConfigType: output.exportConfigType !== undefined && output.exportConfigType !== null ? output.exportConfigType : undefined,
        s3Destination: output.s3Destination !== undefined && output.s3Destination !== null
            ? deserializeAws_json1_1S3ReportExportConfig(output.s3Destination, context)
            : undefined,
    };
};
var deserializeAws_json1_1ReportGroup = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        created: output.created !== undefined && output.created !== null ? new Date(Math.round(output.created * 1000)) : undefined,
        exportConfig: output.exportConfig !== undefined && output.exportConfig !== null
            ? deserializeAws_json1_1ReportExportConfig(output.exportConfig, context)
            : undefined,
        lastModified: output.lastModified !== undefined && output.lastModified !== null
            ? new Date(Math.round(output.lastModified * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_1TagList(output.tags, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_json1_1ReportGroupArns = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1ReportGroups = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReportGroup(entry, context);
    });
};
var deserializeAws_json1_1ReportGroupTrendRawDataList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReportWithRawData(entry, context);
    });
};
var deserializeAws_json1_1ReportGroupTrendStats = function (output, context) {
    return {
        average: output.average !== undefined && output.average !== null ? output.average : undefined,
        max: output.max !== undefined && output.max !== null ? output.max : undefined,
        min: output.min !== undefined && output.min !== null ? output.min : undefined,
    };
};
var deserializeAws_json1_1Reports = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Report(entry, context);
    });
};
var deserializeAws_json1_1ReportStatusCounts = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_json1_1ReportWithRawData = function (output, context) {
    return {
        data: output.data !== undefined && output.data !== null ? output.data : undefined,
        reportArn: output.reportArn !== undefined && output.reportArn !== null ? output.reportArn : undefined,
    };
};
var deserializeAws_json1_1ResolvedArtifact = function (output, context) {
    return {
        identifier: output.identifier !== undefined && output.identifier !== null ? output.identifier : undefined,
        location: output.location !== undefined && output.location !== null ? output.location : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_json1_1ResolvedSecondaryArtifacts = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResolvedArtifact(entry, context);
    });
};
var deserializeAws_json1_1ResourceAlreadyExistsException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ResourceNotFoundException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1RetryBuildBatchOutput = function (output, context) {
    return {
        buildBatch: output.buildBatch !== undefined && output.buildBatch !== null
            ? deserializeAws_json1_1BuildBatch(output.buildBatch, context)
            : undefined,
    };
};
var deserializeAws_json1_1RetryBuildOutput = function (output, context) {
    return {
        build: output.build !== undefined && output.build !== null
            ? deserializeAws_json1_1Build(output.build, context)
            : undefined,
    };
};
var deserializeAws_json1_1S3LogsConfig = function (output, context) {
    return {
        bucketOwnerAccess: output.bucketOwnerAccess !== undefined && output.bucketOwnerAccess !== null
            ? output.bucketOwnerAccess
            : undefined,
        encryptionDisabled: output.encryptionDisabled !== undefined && output.encryptionDisabled !== null
            ? output.encryptionDisabled
            : undefined,
        location: output.location !== undefined && output.location !== null ? output.location : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
var deserializeAws_json1_1S3ReportExportConfig = function (output, context) {
    return {
        bucket: output.bucket !== undefined && output.bucket !== null ? output.bucket : undefined,
        bucketOwner: output.bucketOwner !== undefined && output.bucketOwner !== null ? output.bucketOwner : undefined,
        encryptionDisabled: output.encryptionDisabled !== undefined && output.encryptionDisabled !== null
            ? output.encryptionDisabled
            : undefined,
        encryptionKey: output.encryptionKey !== undefined && output.encryptionKey !== null ? output.encryptionKey : undefined,
        packaging: output.packaging !== undefined && output.packaging !== null ? output.packaging : undefined,
        path: output.path !== undefined && output.path !== null ? output.path : undefined,
    };
};
var deserializeAws_json1_1SecurityGroupIds = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1SourceAuth = function (output, context) {
    return {
        resource: output.resource !== undefined && output.resource !== null ? output.resource : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_json1_1SourceCredentialsInfo = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        authType: output.authType !== undefined && output.authType !== null ? output.authType : undefined,
        serverType: output.serverType !== undefined && output.serverType !== null ? output.serverType : undefined,
    };
};
var deserializeAws_json1_1SourceCredentialsInfos = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SourceCredentialsInfo(entry, context);
    });
};
var deserializeAws_json1_1StartBuildBatchOutput = function (output, context) {
    return {
        buildBatch: output.buildBatch !== undefined && output.buildBatch !== null
            ? deserializeAws_json1_1BuildBatch(output.buildBatch, context)
            : undefined,
    };
};
var deserializeAws_json1_1StartBuildOutput = function (output, context) {
    return {
        build: output.build !== undefined && output.build !== null
            ? deserializeAws_json1_1Build(output.build, context)
            : undefined,
    };
};
var deserializeAws_json1_1StopBuildBatchOutput = function (output, context) {
    return {
        buildBatch: output.buildBatch !== undefined && output.buildBatch !== null
            ? deserializeAws_json1_1BuildBatch(output.buildBatch, context)
            : undefined,
    };
};
var deserializeAws_json1_1StopBuildOutput = function (output, context) {
    return {
        build: output.build !== undefined && output.build !== null
            ? deserializeAws_json1_1Build(output.build, context)
            : undefined,
    };
};
var deserializeAws_json1_1Subnets = function (output, context) {
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
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
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
var deserializeAws_json1_1TestCase = function (output, context) {
    return {
        durationInNanoSeconds: output.durationInNanoSeconds !== undefined && output.durationInNanoSeconds !== null
            ? output.durationInNanoSeconds
            : undefined,
        expired: output.expired !== undefined && output.expired !== null ? new Date(Math.round(output.expired * 1000)) : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        prefix: output.prefix !== undefined && output.prefix !== null ? output.prefix : undefined,
        reportArn: output.reportArn !== undefined && output.reportArn !== null ? output.reportArn : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        testRawDataPath: output.testRawDataPath !== undefined && output.testRawDataPath !== null ? output.testRawDataPath : undefined,
    };
};
var deserializeAws_json1_1TestCases = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TestCase(entry, context);
    });
};
var deserializeAws_json1_1TestReportSummary = function (output, context) {
    return {
        durationInNanoSeconds: output.durationInNanoSeconds !== undefined && output.durationInNanoSeconds !== null
            ? output.durationInNanoSeconds
            : undefined,
        statusCounts: output.statusCounts !== undefined && output.statusCounts !== null
            ? deserializeAws_json1_1ReportStatusCounts(output.statusCounts, context)
            : undefined,
        total: output.total !== undefined && output.total !== null ? output.total : undefined,
    };
};
var deserializeAws_json1_1UpdateProjectOutput = function (output, context) {
    return {
        project: output.project !== undefined && output.project !== null
            ? deserializeAws_json1_1Project(output.project, context)
            : undefined,
    };
};
var deserializeAws_json1_1UpdateReportGroupOutput = function (output, context) {
    return {
        reportGroup: output.reportGroup !== undefined && output.reportGroup !== null
            ? deserializeAws_json1_1ReportGroup(output.reportGroup, context)
            : undefined,
    };
};
var deserializeAws_json1_1UpdateWebhookOutput = function (output, context) {
    return {
        webhook: output.webhook !== undefined && output.webhook !== null
            ? deserializeAws_json1_1Webhook(output.webhook, context)
            : undefined,
    };
};
var deserializeAws_json1_1VpcConfig = function (output, context) {
    return {
        securityGroupIds: output.securityGroupIds !== undefined && output.securityGroupIds !== null
            ? deserializeAws_json1_1SecurityGroupIds(output.securityGroupIds, context)
            : undefined,
        subnets: output.subnets !== undefined && output.subnets !== null
            ? deserializeAws_json1_1Subnets(output.subnets, context)
            : undefined,
        vpcId: output.vpcId !== undefined && output.vpcId !== null ? output.vpcId : undefined,
    };
};
var deserializeAws_json1_1Webhook = function (output, context) {
    return {
        branchFilter: output.branchFilter !== undefined && output.branchFilter !== null ? output.branchFilter : undefined,
        buildType: output.buildType !== undefined && output.buildType !== null ? output.buildType : undefined,
        filterGroups: output.filterGroups !== undefined && output.filterGroups !== null
            ? deserializeAws_json1_1FilterGroups(output.filterGroups, context)
            : undefined,
        lastModifiedSecret: output.lastModifiedSecret !== undefined && output.lastModifiedSecret !== null
            ? new Date(Math.round(output.lastModifiedSecret * 1000))
            : undefined,
        payloadUrl: output.payloadUrl !== undefined && output.payloadUrl !== null ? output.payloadUrl : undefined,
        secret: output.secret !== undefined && output.secret !== null ? output.secret : undefined,
        url: output.url !== undefined && output.url !== null ? output.url : undefined,
    };
};
var deserializeAws_json1_1WebhookFilter = function (output, context) {
    return {
        excludeMatchedPattern: output.excludeMatchedPattern !== undefined && output.excludeMatchedPattern !== null
            ? output.excludeMatchedPattern
            : undefined,
        pattern: output.pattern !== undefined && output.pattern !== null ? output.pattern : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
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