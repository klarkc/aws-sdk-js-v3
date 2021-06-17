"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1BatchGetReportsCommand = exports.deserializeAws_json1_1BatchGetReportGroupsCommand = exports.deserializeAws_json1_1BatchGetProjectsCommand = exports.deserializeAws_json1_1BatchGetBuildsCommand = exports.deserializeAws_json1_1BatchGetBuildBatchesCommand = exports.deserializeAws_json1_1BatchDeleteBuildsCommand = exports.serializeAws_json1_1UpdateWebhookCommand = exports.serializeAws_json1_1UpdateReportGroupCommand = exports.serializeAws_json1_1UpdateProjectCommand = exports.serializeAws_json1_1StopBuildBatchCommand = exports.serializeAws_json1_1StopBuildCommand = exports.serializeAws_json1_1StartBuildBatchCommand = exports.serializeAws_json1_1StartBuildCommand = exports.serializeAws_json1_1RetryBuildBatchCommand = exports.serializeAws_json1_1RetryBuildCommand = exports.serializeAws_json1_1PutResourcePolicyCommand = exports.serializeAws_json1_1ListSourceCredentialsCommand = exports.serializeAws_json1_1ListSharedReportGroupsCommand = exports.serializeAws_json1_1ListSharedProjectsCommand = exports.serializeAws_json1_1ListReportsForReportGroupCommand = exports.serializeAws_json1_1ListReportsCommand = exports.serializeAws_json1_1ListReportGroupsCommand = exports.serializeAws_json1_1ListProjectsCommand = exports.serializeAws_json1_1ListCuratedEnvironmentImagesCommand = exports.serializeAws_json1_1ListBuildsForProjectCommand = exports.serializeAws_json1_1ListBuildsCommand = exports.serializeAws_json1_1ListBuildBatchesForProjectCommand = exports.serializeAws_json1_1ListBuildBatchesCommand = exports.serializeAws_json1_1InvalidateProjectCacheCommand = exports.serializeAws_json1_1ImportSourceCredentialsCommand = exports.serializeAws_json1_1GetResourcePolicyCommand = exports.serializeAws_json1_1GetReportGroupTrendCommand = exports.serializeAws_json1_1DescribeTestCasesCommand = exports.serializeAws_json1_1DescribeCodeCoveragesCommand = exports.serializeAws_json1_1DeleteWebhookCommand = exports.serializeAws_json1_1DeleteSourceCredentialsCommand = exports.serializeAws_json1_1DeleteResourcePolicyCommand = exports.serializeAws_json1_1DeleteReportGroupCommand = exports.serializeAws_json1_1DeleteReportCommand = exports.serializeAws_json1_1DeleteProjectCommand = exports.serializeAws_json1_1DeleteBuildBatchCommand = exports.serializeAws_json1_1CreateWebhookCommand = exports.serializeAws_json1_1CreateReportGroupCommand = exports.serializeAws_json1_1CreateProjectCommand = exports.serializeAws_json1_1BatchGetReportsCommand = exports.serializeAws_json1_1BatchGetReportGroupsCommand = exports.serializeAws_json1_1BatchGetProjectsCommand = exports.serializeAws_json1_1BatchGetBuildsCommand = exports.serializeAws_json1_1BatchGetBuildBatchesCommand = exports.serializeAws_json1_1BatchDeleteBuildsCommand = void 0;
exports.deserializeAws_json1_1UpdateWebhookCommand = exports.deserializeAws_json1_1UpdateReportGroupCommand = exports.deserializeAws_json1_1UpdateProjectCommand = exports.deserializeAws_json1_1StopBuildBatchCommand = exports.deserializeAws_json1_1StopBuildCommand = exports.deserializeAws_json1_1StartBuildBatchCommand = exports.deserializeAws_json1_1StartBuildCommand = exports.deserializeAws_json1_1RetryBuildBatchCommand = exports.deserializeAws_json1_1RetryBuildCommand = exports.deserializeAws_json1_1PutResourcePolicyCommand = exports.deserializeAws_json1_1ListSourceCredentialsCommand = exports.deserializeAws_json1_1ListSharedReportGroupsCommand = exports.deserializeAws_json1_1ListSharedProjectsCommand = exports.deserializeAws_json1_1ListReportsForReportGroupCommand = exports.deserializeAws_json1_1ListReportsCommand = exports.deserializeAws_json1_1ListReportGroupsCommand = exports.deserializeAws_json1_1ListProjectsCommand = exports.deserializeAws_json1_1ListCuratedEnvironmentImagesCommand = exports.deserializeAws_json1_1ListBuildsForProjectCommand = exports.deserializeAws_json1_1ListBuildsCommand = exports.deserializeAws_json1_1ListBuildBatchesForProjectCommand = exports.deserializeAws_json1_1ListBuildBatchesCommand = exports.deserializeAws_json1_1InvalidateProjectCacheCommand = exports.deserializeAws_json1_1ImportSourceCredentialsCommand = exports.deserializeAws_json1_1GetResourcePolicyCommand = exports.deserializeAws_json1_1GetReportGroupTrendCommand = exports.deserializeAws_json1_1DescribeTestCasesCommand = exports.deserializeAws_json1_1DescribeCodeCoveragesCommand = exports.deserializeAws_json1_1DeleteWebhookCommand = exports.deserializeAws_json1_1DeleteSourceCredentialsCommand = exports.deserializeAws_json1_1DeleteResourcePolicyCommand = exports.deserializeAws_json1_1DeleteReportGroupCommand = exports.deserializeAws_json1_1DeleteReportCommand = exports.deserializeAws_json1_1DeleteProjectCommand = exports.deserializeAws_json1_1DeleteBuildBatchCommand = exports.deserializeAws_json1_1CreateWebhookCommand = exports.deserializeAws_json1_1CreateReportGroupCommand = exports.deserializeAws_json1_1CreateProjectCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1BatchDeleteBuildsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.BatchDeleteBuilds",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchDeleteBuildsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchDeleteBuildsCommand = serializeAws_json1_1BatchDeleteBuildsCommand;
const serializeAws_json1_1BatchGetBuildBatchesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.BatchGetBuildBatches",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetBuildBatchesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchGetBuildBatchesCommand = serializeAws_json1_1BatchGetBuildBatchesCommand;
const serializeAws_json1_1BatchGetBuildsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.BatchGetBuilds",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetBuildsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchGetBuildsCommand = serializeAws_json1_1BatchGetBuildsCommand;
const serializeAws_json1_1BatchGetProjectsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.BatchGetProjects",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetProjectsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchGetProjectsCommand = serializeAws_json1_1BatchGetProjectsCommand;
const serializeAws_json1_1BatchGetReportGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.BatchGetReportGroups",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetReportGroupsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchGetReportGroupsCommand = serializeAws_json1_1BatchGetReportGroupsCommand;
const serializeAws_json1_1BatchGetReportsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.BatchGetReports",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetReportsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchGetReportsCommand = serializeAws_json1_1BatchGetReportsCommand;
const serializeAws_json1_1CreateProjectCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.CreateProject",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateProjectInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateProjectCommand = serializeAws_json1_1CreateProjectCommand;
const serializeAws_json1_1CreateReportGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.CreateReportGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateReportGroupInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateReportGroupCommand = serializeAws_json1_1CreateReportGroupCommand;
const serializeAws_json1_1CreateWebhookCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.CreateWebhook",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateWebhookInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateWebhookCommand = serializeAws_json1_1CreateWebhookCommand;
const serializeAws_json1_1DeleteBuildBatchCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.DeleteBuildBatch",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteBuildBatchInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteBuildBatchCommand = serializeAws_json1_1DeleteBuildBatchCommand;
const serializeAws_json1_1DeleteProjectCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.DeleteProject",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteProjectInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteProjectCommand = serializeAws_json1_1DeleteProjectCommand;
const serializeAws_json1_1DeleteReportCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.DeleteReport",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteReportInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteReportCommand = serializeAws_json1_1DeleteReportCommand;
const serializeAws_json1_1DeleteReportGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.DeleteReportGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteReportGroupInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteReportGroupCommand = serializeAws_json1_1DeleteReportGroupCommand;
const serializeAws_json1_1DeleteResourcePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.DeleteResourcePolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteResourcePolicyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteResourcePolicyCommand = serializeAws_json1_1DeleteResourcePolicyCommand;
const serializeAws_json1_1DeleteSourceCredentialsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.DeleteSourceCredentials",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteSourceCredentialsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteSourceCredentialsCommand = serializeAws_json1_1DeleteSourceCredentialsCommand;
const serializeAws_json1_1DeleteWebhookCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.DeleteWebhook",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteWebhookInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteWebhookCommand = serializeAws_json1_1DeleteWebhookCommand;
const serializeAws_json1_1DescribeCodeCoveragesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.DescribeCodeCoverages",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeCodeCoveragesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeCodeCoveragesCommand = serializeAws_json1_1DescribeCodeCoveragesCommand;
const serializeAws_json1_1DescribeTestCasesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.DescribeTestCases",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTestCasesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeTestCasesCommand = serializeAws_json1_1DescribeTestCasesCommand;
const serializeAws_json1_1GetReportGroupTrendCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.GetReportGroupTrend",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetReportGroupTrendInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetReportGroupTrendCommand = serializeAws_json1_1GetReportGroupTrendCommand;
const serializeAws_json1_1GetResourcePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.GetResourcePolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetResourcePolicyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetResourcePolicyCommand = serializeAws_json1_1GetResourcePolicyCommand;
const serializeAws_json1_1ImportSourceCredentialsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.ImportSourceCredentials",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ImportSourceCredentialsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ImportSourceCredentialsCommand = serializeAws_json1_1ImportSourceCredentialsCommand;
const serializeAws_json1_1InvalidateProjectCacheCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.InvalidateProjectCache",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1InvalidateProjectCacheInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1InvalidateProjectCacheCommand = serializeAws_json1_1InvalidateProjectCacheCommand;
const serializeAws_json1_1ListBuildBatchesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.ListBuildBatches",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListBuildBatchesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListBuildBatchesCommand = serializeAws_json1_1ListBuildBatchesCommand;
const serializeAws_json1_1ListBuildBatchesForProjectCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.ListBuildBatchesForProject",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListBuildBatchesForProjectInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListBuildBatchesForProjectCommand = serializeAws_json1_1ListBuildBatchesForProjectCommand;
const serializeAws_json1_1ListBuildsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.ListBuilds",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListBuildsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListBuildsCommand = serializeAws_json1_1ListBuildsCommand;
const serializeAws_json1_1ListBuildsForProjectCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.ListBuildsForProject",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListBuildsForProjectInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListBuildsForProjectCommand = serializeAws_json1_1ListBuildsForProjectCommand;
const serializeAws_json1_1ListCuratedEnvironmentImagesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.ListCuratedEnvironmentImages",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListCuratedEnvironmentImagesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListCuratedEnvironmentImagesCommand = serializeAws_json1_1ListCuratedEnvironmentImagesCommand;
const serializeAws_json1_1ListProjectsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.ListProjects",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListProjectsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListProjectsCommand = serializeAws_json1_1ListProjectsCommand;
const serializeAws_json1_1ListReportGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.ListReportGroups",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListReportGroupsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListReportGroupsCommand = serializeAws_json1_1ListReportGroupsCommand;
const serializeAws_json1_1ListReportsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.ListReports",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListReportsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListReportsCommand = serializeAws_json1_1ListReportsCommand;
const serializeAws_json1_1ListReportsForReportGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.ListReportsForReportGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListReportsForReportGroupInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListReportsForReportGroupCommand = serializeAws_json1_1ListReportsForReportGroupCommand;
const serializeAws_json1_1ListSharedProjectsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.ListSharedProjects",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListSharedProjectsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListSharedProjectsCommand = serializeAws_json1_1ListSharedProjectsCommand;
const serializeAws_json1_1ListSharedReportGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.ListSharedReportGroups",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListSharedReportGroupsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListSharedReportGroupsCommand = serializeAws_json1_1ListSharedReportGroupsCommand;
const serializeAws_json1_1ListSourceCredentialsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.ListSourceCredentials",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListSourceCredentialsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListSourceCredentialsCommand = serializeAws_json1_1ListSourceCredentialsCommand;
const serializeAws_json1_1PutResourcePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.PutResourcePolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutResourcePolicyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutResourcePolicyCommand = serializeAws_json1_1PutResourcePolicyCommand;
const serializeAws_json1_1RetryBuildCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.RetryBuild",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RetryBuildInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RetryBuildCommand = serializeAws_json1_1RetryBuildCommand;
const serializeAws_json1_1RetryBuildBatchCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.RetryBuildBatch",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RetryBuildBatchInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RetryBuildBatchCommand = serializeAws_json1_1RetryBuildBatchCommand;
const serializeAws_json1_1StartBuildCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.StartBuild",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartBuildInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartBuildCommand = serializeAws_json1_1StartBuildCommand;
const serializeAws_json1_1StartBuildBatchCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.StartBuildBatch",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartBuildBatchInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartBuildBatchCommand = serializeAws_json1_1StartBuildBatchCommand;
const serializeAws_json1_1StopBuildCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.StopBuild",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopBuildInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopBuildCommand = serializeAws_json1_1StopBuildCommand;
const serializeAws_json1_1StopBuildBatchCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.StopBuildBatch",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopBuildBatchInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopBuildBatchCommand = serializeAws_json1_1StopBuildBatchCommand;
const serializeAws_json1_1UpdateProjectCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.UpdateProject",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateProjectInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateProjectCommand = serializeAws_json1_1UpdateProjectCommand;
const serializeAws_json1_1UpdateReportGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.UpdateReportGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateReportGroupInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateReportGroupCommand = serializeAws_json1_1UpdateReportGroupCommand;
const serializeAws_json1_1UpdateWebhookCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeBuild_20161006.UpdateWebhook",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateWebhookInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateWebhookCommand = serializeAws_json1_1UpdateWebhookCommand;
const deserializeAws_json1_1BatchDeleteBuildsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchDeleteBuildsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchDeleteBuildsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchDeleteBuildsCommand = deserializeAws_json1_1BatchDeleteBuildsCommand;
const deserializeAws_json1_1BatchDeleteBuildsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1BatchGetBuildBatchesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchGetBuildBatchesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetBuildBatchesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchGetBuildBatchesCommand = deserializeAws_json1_1BatchGetBuildBatchesCommand;
const deserializeAws_json1_1BatchGetBuildBatchesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1BatchGetBuildsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchGetBuildsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetBuildsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchGetBuildsCommand = deserializeAws_json1_1BatchGetBuildsCommand;
const deserializeAws_json1_1BatchGetBuildsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1BatchGetProjectsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchGetProjectsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetProjectsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchGetProjectsCommand = deserializeAws_json1_1BatchGetProjectsCommand;
const deserializeAws_json1_1BatchGetProjectsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1BatchGetReportGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchGetReportGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetReportGroupsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchGetReportGroupsCommand = deserializeAws_json1_1BatchGetReportGroupsCommand;
const deserializeAws_json1_1BatchGetReportGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1BatchGetReportsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchGetReportsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetReportsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchGetReportsCommand = deserializeAws_json1_1BatchGetReportsCommand;
const deserializeAws_json1_1BatchGetReportsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateProjectCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateProjectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateProjectOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateProjectCommand = deserializeAws_json1_1CreateProjectCommand;
const deserializeAws_json1_1CreateProjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccountLimitExceededException":
        case "com.amazonaws.codebuild#AccountLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1AccountLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.codebuild#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateReportGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateReportGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateReportGroupOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateReportGroupCommand = deserializeAws_json1_1CreateReportGroupCommand;
const deserializeAws_json1_1CreateReportGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccountLimitExceededException":
        case "com.amazonaws.codebuild#AccountLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1AccountLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.codebuild#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateWebhookCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateWebhookCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateWebhookOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateWebhookCommand = deserializeAws_json1_1CreateWebhookCommand;
const deserializeAws_json1_1CreateWebhookCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OAuthProviderException":
        case "com.amazonaws.codebuild#OAuthProviderException":
            response = {
                ...(await deserializeAws_json1_1OAuthProviderExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.codebuild#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codebuild#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteBuildBatchCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteBuildBatchCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteBuildBatchOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteBuildBatchCommand = deserializeAws_json1_1DeleteBuildBatchCommand;
const deserializeAws_json1_1DeleteBuildBatchCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteProjectCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteProjectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteProjectOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteProjectCommand = deserializeAws_json1_1DeleteProjectCommand;
const deserializeAws_json1_1DeleteProjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteReportCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteReportCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteReportOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteReportCommand = deserializeAws_json1_1DeleteReportCommand;
const deserializeAws_json1_1DeleteReportCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteReportGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteReportGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteReportGroupOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteReportGroupCommand = deserializeAws_json1_1DeleteReportGroupCommand;
const deserializeAws_json1_1DeleteReportGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteResourcePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteResourcePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteResourcePolicyOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteResourcePolicyCommand = deserializeAws_json1_1DeleteResourcePolicyCommand;
const deserializeAws_json1_1DeleteResourcePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteSourceCredentialsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteSourceCredentialsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteSourceCredentialsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteSourceCredentialsCommand = deserializeAws_json1_1DeleteSourceCredentialsCommand;
const deserializeAws_json1_1DeleteSourceCredentialsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codebuild#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteWebhookCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteWebhookCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteWebhookOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteWebhookCommand = deserializeAws_json1_1DeleteWebhookCommand;
const deserializeAws_json1_1DeleteWebhookCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OAuthProviderException":
        case "com.amazonaws.codebuild#OAuthProviderException":
            response = {
                ...(await deserializeAws_json1_1OAuthProviderExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codebuild#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeCodeCoveragesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeCodeCoveragesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeCodeCoveragesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeCodeCoveragesCommand = deserializeAws_json1_1DescribeCodeCoveragesCommand;
const deserializeAws_json1_1DescribeCodeCoveragesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeTestCasesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeTestCasesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTestCasesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeTestCasesCommand = deserializeAws_json1_1DescribeTestCasesCommand;
const deserializeAws_json1_1DescribeTestCasesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codebuild#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetReportGroupTrendCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetReportGroupTrendCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetReportGroupTrendOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetReportGroupTrendCommand = deserializeAws_json1_1GetReportGroupTrendCommand;
const deserializeAws_json1_1GetReportGroupTrendCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codebuild#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetResourcePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetResourcePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetResourcePolicyOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetResourcePolicyCommand = deserializeAws_json1_1GetResourcePolicyCommand;
const deserializeAws_json1_1GetResourcePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codebuild#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ImportSourceCredentialsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ImportSourceCredentialsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ImportSourceCredentialsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ImportSourceCredentialsCommand = deserializeAws_json1_1ImportSourceCredentialsCommand;
const deserializeAws_json1_1ImportSourceCredentialsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccountLimitExceededException":
        case "com.amazonaws.codebuild#AccountLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1AccountLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.codebuild#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1InvalidateProjectCacheCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1InvalidateProjectCacheCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1InvalidateProjectCacheOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1InvalidateProjectCacheCommand = deserializeAws_json1_1InvalidateProjectCacheCommand;
const deserializeAws_json1_1InvalidateProjectCacheCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codebuild#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListBuildBatchesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListBuildBatchesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListBuildBatchesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListBuildBatchesCommand = deserializeAws_json1_1ListBuildBatchesCommand;
const deserializeAws_json1_1ListBuildBatchesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListBuildBatchesForProjectCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListBuildBatchesForProjectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListBuildBatchesForProjectOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListBuildBatchesForProjectCommand = deserializeAws_json1_1ListBuildBatchesForProjectCommand;
const deserializeAws_json1_1ListBuildBatchesForProjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codebuild#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListBuildsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListBuildsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListBuildsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListBuildsCommand = deserializeAws_json1_1ListBuildsCommand;
const deserializeAws_json1_1ListBuildsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListBuildsForProjectCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListBuildsForProjectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListBuildsForProjectOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListBuildsForProjectCommand = deserializeAws_json1_1ListBuildsForProjectCommand;
const deserializeAws_json1_1ListBuildsForProjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codebuild#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListCuratedEnvironmentImagesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListCuratedEnvironmentImagesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListCuratedEnvironmentImagesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListCuratedEnvironmentImagesCommand = deserializeAws_json1_1ListCuratedEnvironmentImagesCommand;
const deserializeAws_json1_1ListCuratedEnvironmentImagesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_json1_1ListProjectsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListProjectsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListProjectsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListProjectsCommand = deserializeAws_json1_1ListProjectsCommand;
const deserializeAws_json1_1ListProjectsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListReportGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListReportGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListReportGroupsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListReportGroupsCommand = deserializeAws_json1_1ListReportGroupsCommand;
const deserializeAws_json1_1ListReportGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListReportsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListReportsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListReportsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListReportsCommand = deserializeAws_json1_1ListReportsCommand;
const deserializeAws_json1_1ListReportsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListReportsForReportGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListReportsForReportGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListReportsForReportGroupOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListReportsForReportGroupCommand = deserializeAws_json1_1ListReportsForReportGroupCommand;
const deserializeAws_json1_1ListReportsForReportGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codebuild#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListSharedProjectsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListSharedProjectsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListSharedProjectsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListSharedProjectsCommand = deserializeAws_json1_1ListSharedProjectsCommand;
const deserializeAws_json1_1ListSharedProjectsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListSharedReportGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListSharedReportGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListSharedReportGroupsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListSharedReportGroupsCommand = deserializeAws_json1_1ListSharedReportGroupsCommand;
const deserializeAws_json1_1ListSharedReportGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListSourceCredentialsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListSourceCredentialsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListSourceCredentialsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListSourceCredentialsCommand = deserializeAws_json1_1ListSourceCredentialsCommand;
const deserializeAws_json1_1ListSourceCredentialsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PutResourcePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutResourcePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutResourcePolicyOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutResourcePolicyCommand = deserializeAws_json1_1PutResourcePolicyCommand;
const deserializeAws_json1_1PutResourcePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codebuild#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RetryBuildCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RetryBuildCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RetryBuildOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RetryBuildCommand = deserializeAws_json1_1RetryBuildCommand;
const deserializeAws_json1_1RetryBuildCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccountLimitExceededException":
        case "com.amazonaws.codebuild#AccountLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1AccountLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codebuild#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RetryBuildBatchCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RetryBuildBatchCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RetryBuildBatchOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RetryBuildBatchCommand = deserializeAws_json1_1RetryBuildBatchCommand;
const deserializeAws_json1_1RetryBuildBatchCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codebuild#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartBuildCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartBuildCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartBuildOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartBuildCommand = deserializeAws_json1_1StartBuildCommand;
const deserializeAws_json1_1StartBuildCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccountLimitExceededException":
        case "com.amazonaws.codebuild#AccountLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1AccountLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codebuild#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartBuildBatchCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartBuildBatchCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartBuildBatchOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartBuildBatchCommand = deserializeAws_json1_1StartBuildBatchCommand;
const deserializeAws_json1_1StartBuildBatchCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codebuild#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StopBuildCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopBuildCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopBuildOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopBuildCommand = deserializeAws_json1_1StopBuildCommand;
const deserializeAws_json1_1StopBuildCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codebuild#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StopBuildBatchCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopBuildBatchCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopBuildBatchOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopBuildBatchCommand = deserializeAws_json1_1StopBuildBatchCommand;
const deserializeAws_json1_1StopBuildBatchCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codebuild#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateProjectCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateProjectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateProjectOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateProjectCommand = deserializeAws_json1_1UpdateProjectCommand;
const deserializeAws_json1_1UpdateProjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codebuild#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateReportGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateReportGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateReportGroupOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateReportGroupCommand = deserializeAws_json1_1UpdateReportGroupCommand;
const deserializeAws_json1_1UpdateReportGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codebuild#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateWebhookCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateWebhookCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateWebhookOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateWebhookCommand = deserializeAws_json1_1UpdateWebhookCommand;
const deserializeAws_json1_1UpdateWebhookCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.codebuild#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OAuthProviderException":
        case "com.amazonaws.codebuild#OAuthProviderException":
            response = {
                ...(await deserializeAws_json1_1OAuthProviderExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codebuild#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AccountLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AccountLimitExceededException(body, context);
    const contents = {
        name: "AccountLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidInputExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInputException(body, context);
    const contents = {
        name: "InvalidInputException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OAuthProviderExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OAuthProviderException(body, context);
    const contents = {
        name: "OAuthProviderException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceAlreadyExistsException(body, context);
    const contents = {
        name: "ResourceAlreadyExistsException",
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
const serializeAws_json1_1BatchDeleteBuildsInput = (input, context) => {
    return {
        ...(input.ids !== undefined && input.ids !== null && { ids: serializeAws_json1_1BuildIds(input.ids, context) }),
    };
};
const serializeAws_json1_1BatchGetBuildBatchesInput = (input, context) => {
    return {
        ...(input.ids !== undefined &&
            input.ids !== null && { ids: serializeAws_json1_1BuildBatchIds(input.ids, context) }),
    };
};
const serializeAws_json1_1BatchGetBuildsInput = (input, context) => {
    return {
        ...(input.ids !== undefined && input.ids !== null && { ids: serializeAws_json1_1BuildIds(input.ids, context) }),
    };
};
const serializeAws_json1_1BatchGetProjectsInput = (input, context) => {
    return {
        ...(input.names !== undefined &&
            input.names !== null && { names: serializeAws_json1_1ProjectNames(input.names, context) }),
    };
};
const serializeAws_json1_1BatchGetReportGroupsInput = (input, context) => {
    return {
        ...(input.reportGroupArns !== undefined &&
            input.reportGroupArns !== null && {
            reportGroupArns: serializeAws_json1_1ReportGroupArns(input.reportGroupArns, context),
        }),
    };
};
const serializeAws_json1_1BatchGetReportsInput = (input, context) => {
    return {
        ...(input.reportArns !== undefined &&
            input.reportArns !== null && { reportArns: serializeAws_json1_1ReportArns(input.reportArns, context) }),
    };
};
const serializeAws_json1_1BatchRestrictions = (input, context) => {
    return {
        ...(input.computeTypesAllowed !== undefined &&
            input.computeTypesAllowed !== null && {
            computeTypesAllowed: serializeAws_json1_1ComputeTypesAllowed(input.computeTypesAllowed, context),
        }),
        ...(input.maximumBuildsAllowed !== undefined &&
            input.maximumBuildsAllowed !== null && { maximumBuildsAllowed: input.maximumBuildsAllowed }),
    };
};
const serializeAws_json1_1BuildBatchFilter = (input, context) => {
    return {
        ...(input.status !== undefined && input.status !== null && { status: input.status }),
    };
};
const serializeAws_json1_1BuildBatchIds = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1BuildIds = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1BuildStatusConfig = (input, context) => {
    return {
        ...(input.context !== undefined && input.context !== null && { context: input.context }),
        ...(input.targetUrl !== undefined && input.targetUrl !== null && { targetUrl: input.targetUrl }),
    };
};
const serializeAws_json1_1CloudWatchLogsConfig = (input, context) => {
    return {
        ...(input.groupName !== undefined && input.groupName !== null && { groupName: input.groupName }),
        ...(input.status !== undefined && input.status !== null && { status: input.status }),
        ...(input.streamName !== undefined && input.streamName !== null && { streamName: input.streamName }),
    };
};
const serializeAws_json1_1ComputeTypesAllowed = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1CreateProjectInput = (input, context) => {
    return {
        ...(input.artifacts !== undefined &&
            input.artifacts !== null && { artifacts: serializeAws_json1_1ProjectArtifacts(input.artifacts, context) }),
        ...(input.badgeEnabled !== undefined && input.badgeEnabled !== null && { badgeEnabled: input.badgeEnabled }),
        ...(input.buildBatchConfig !== undefined &&
            input.buildBatchConfig !== null && {
            buildBatchConfig: serializeAws_json1_1ProjectBuildBatchConfig(input.buildBatchConfig, context),
        }),
        ...(input.cache !== undefined &&
            input.cache !== null && { cache: serializeAws_json1_1ProjectCache(input.cache, context) }),
        ...(input.concurrentBuildLimit !== undefined &&
            input.concurrentBuildLimit !== null && { concurrentBuildLimit: input.concurrentBuildLimit }),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.encryptionKey !== undefined && input.encryptionKey !== null && { encryptionKey: input.encryptionKey }),
        ...(input.environment !== undefined &&
            input.environment !== null && {
            environment: serializeAws_json1_1ProjectEnvironment(input.environment, context),
        }),
        ...(input.fileSystemLocations !== undefined &&
            input.fileSystemLocations !== null && {
            fileSystemLocations: serializeAws_json1_1ProjectFileSystemLocations(input.fileSystemLocations, context),
        }),
        ...(input.logsConfig !== undefined &&
            input.logsConfig !== null && { logsConfig: serializeAws_json1_1LogsConfig(input.logsConfig, context) }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.queuedTimeoutInMinutes !== undefined &&
            input.queuedTimeoutInMinutes !== null && { queuedTimeoutInMinutes: input.queuedTimeoutInMinutes }),
        ...(input.secondaryArtifacts !== undefined &&
            input.secondaryArtifacts !== null && {
            secondaryArtifacts: serializeAws_json1_1ProjectArtifactsList(input.secondaryArtifacts, context),
        }),
        ...(input.secondarySourceVersions !== undefined &&
            input.secondarySourceVersions !== null && {
            secondarySourceVersions: serializeAws_json1_1ProjectSecondarySourceVersions(input.secondarySourceVersions, context),
        }),
        ...(input.secondarySources !== undefined &&
            input.secondarySources !== null && {
            secondarySources: serializeAws_json1_1ProjectSources(input.secondarySources, context),
        }),
        ...(input.serviceRole !== undefined && input.serviceRole !== null && { serviceRole: input.serviceRole }),
        ...(input.source !== undefined &&
            input.source !== null && { source: serializeAws_json1_1ProjectSource(input.source, context) }),
        ...(input.sourceVersion !== undefined && input.sourceVersion !== null && { sourceVersion: input.sourceVersion }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
        ...(input.timeoutInMinutes !== undefined &&
            input.timeoutInMinutes !== null && { timeoutInMinutes: input.timeoutInMinutes }),
        ...(input.vpcConfig !== undefined &&
            input.vpcConfig !== null && { vpcConfig: serializeAws_json1_1VpcConfig(input.vpcConfig, context) }),
    };
};
const serializeAws_json1_1CreateReportGroupInput = (input, context) => {
    return {
        ...(input.exportConfig !== undefined &&
            input.exportConfig !== null && {
            exportConfig: serializeAws_json1_1ReportExportConfig(input.exportConfig, context),
        }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_json1_1CreateWebhookInput = (input, context) => {
    return {
        ...(input.branchFilter !== undefined && input.branchFilter !== null && { branchFilter: input.branchFilter }),
        ...(input.buildType !== undefined && input.buildType !== null && { buildType: input.buildType }),
        ...(input.filterGroups !== undefined &&
            input.filterGroups !== null && { filterGroups: serializeAws_json1_1FilterGroups(input.filterGroups, context) }),
        ...(input.projectName !== undefined && input.projectName !== null && { projectName: input.projectName }),
    };
};
const serializeAws_json1_1DeleteBuildBatchInput = (input, context) => {
    return {
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
    };
};
const serializeAws_json1_1DeleteProjectInput = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
    };
};
const serializeAws_json1_1DeleteReportGroupInput = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
        ...(input.deleteReports !== undefined && input.deleteReports !== null && { deleteReports: input.deleteReports }),
    };
};
const serializeAws_json1_1DeleteReportInput = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    };
};
const serializeAws_json1_1DeleteResourcePolicyInput = (input, context) => {
    return {
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
    };
};
const serializeAws_json1_1DeleteSourceCredentialsInput = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    };
};
const serializeAws_json1_1DeleteWebhookInput = (input, context) => {
    return {
        ...(input.projectName !== undefined && input.projectName !== null && { projectName: input.projectName }),
    };
};
const serializeAws_json1_1DescribeCodeCoveragesInput = (input, context) => {
    return {
        ...(input.maxLineCoveragePercentage !== undefined &&
            input.maxLineCoveragePercentage !== null && { maxLineCoveragePercentage: input.maxLineCoveragePercentage }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.minLineCoveragePercentage !== undefined &&
            input.minLineCoveragePercentage !== null && { minLineCoveragePercentage: input.minLineCoveragePercentage }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.reportArn !== undefined && input.reportArn !== null && { reportArn: input.reportArn }),
        ...(input.sortBy !== undefined && input.sortBy !== null && { sortBy: input.sortBy }),
        ...(input.sortOrder !== undefined && input.sortOrder !== null && { sortOrder: input.sortOrder }),
    };
};
const serializeAws_json1_1DescribeTestCasesInput = (input, context) => {
    return {
        ...(input.filter !== undefined &&
            input.filter !== null && { filter: serializeAws_json1_1TestCaseFilter(input.filter, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.reportArn !== undefined && input.reportArn !== null && { reportArn: input.reportArn }),
    };
};
const serializeAws_json1_1EnvironmentVariable = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_json1_1EnvironmentVariables = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1EnvironmentVariable(entry, context);
    });
};
const serializeAws_json1_1FilterGroup = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1WebhookFilter(entry, context);
    });
};
const serializeAws_json1_1FilterGroups = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1FilterGroup(entry, context);
    });
};
const serializeAws_json1_1GetReportGroupTrendInput = (input, context) => {
    return {
        ...(input.numOfReports !== undefined && input.numOfReports !== null && { numOfReports: input.numOfReports }),
        ...(input.reportGroupArn !== undefined &&
            input.reportGroupArn !== null && { reportGroupArn: input.reportGroupArn }),
        ...(input.trendField !== undefined && input.trendField !== null && { trendField: input.trendField }),
    };
};
const serializeAws_json1_1GetResourcePolicyInput = (input, context) => {
    return {
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
    };
};
const serializeAws_json1_1GitSubmodulesConfig = (input, context) => {
    return {
        ...(input.fetchSubmodules !== undefined &&
            input.fetchSubmodules !== null && { fetchSubmodules: input.fetchSubmodules }),
    };
};
const serializeAws_json1_1ImportSourceCredentialsInput = (input, context) => {
    return {
        ...(input.authType !== undefined && input.authType !== null && { authType: input.authType }),
        ...(input.serverType !== undefined && input.serverType !== null && { serverType: input.serverType }),
        ...(input.shouldOverwrite !== undefined &&
            input.shouldOverwrite !== null && { shouldOverwrite: input.shouldOverwrite }),
        ...(input.token !== undefined && input.token !== null && { token: input.token }),
        ...(input.username !== undefined && input.username !== null && { username: input.username }),
    };
};
const serializeAws_json1_1InvalidateProjectCacheInput = (input, context) => {
    return {
        ...(input.projectName !== undefined && input.projectName !== null && { projectName: input.projectName }),
    };
};
const serializeAws_json1_1ListBuildBatchesForProjectInput = (input, context) => {
    return {
        ...(input.filter !== undefined &&
            input.filter !== null && { filter: serializeAws_json1_1BuildBatchFilter(input.filter, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.projectName !== undefined && input.projectName !== null && { projectName: input.projectName }),
        ...(input.sortOrder !== undefined && input.sortOrder !== null && { sortOrder: input.sortOrder }),
    };
};
const serializeAws_json1_1ListBuildBatchesInput = (input, context) => {
    return {
        ...(input.filter !== undefined &&
            input.filter !== null && { filter: serializeAws_json1_1BuildBatchFilter(input.filter, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.sortOrder !== undefined && input.sortOrder !== null && { sortOrder: input.sortOrder }),
    };
};
const serializeAws_json1_1ListBuildsForProjectInput = (input, context) => {
    return {
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.projectName !== undefined && input.projectName !== null && { projectName: input.projectName }),
        ...(input.sortOrder !== undefined && input.sortOrder !== null && { sortOrder: input.sortOrder }),
    };
};
const serializeAws_json1_1ListBuildsInput = (input, context) => {
    return {
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.sortOrder !== undefined && input.sortOrder !== null && { sortOrder: input.sortOrder }),
    };
};
const serializeAws_json1_1ListCuratedEnvironmentImagesInput = (input, context) => {
    return {};
};
const serializeAws_json1_1ListProjectsInput = (input, context) => {
    return {
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.sortBy !== undefined && input.sortBy !== null && { sortBy: input.sortBy }),
        ...(input.sortOrder !== undefined && input.sortOrder !== null && { sortOrder: input.sortOrder }),
    };
};
const serializeAws_json1_1ListReportGroupsInput = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.sortBy !== undefined && input.sortBy !== null && { sortBy: input.sortBy }),
        ...(input.sortOrder !== undefined && input.sortOrder !== null && { sortOrder: input.sortOrder }),
    };
};
const serializeAws_json1_1ListReportsForReportGroupInput = (input, context) => {
    return {
        ...(input.filter !== undefined &&
            input.filter !== null && { filter: serializeAws_json1_1ReportFilter(input.filter, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.reportGroupArn !== undefined &&
            input.reportGroupArn !== null && { reportGroupArn: input.reportGroupArn }),
        ...(input.sortOrder !== undefined && input.sortOrder !== null && { sortOrder: input.sortOrder }),
    };
};
const serializeAws_json1_1ListReportsInput = (input, context) => {
    return {
        ...(input.filter !== undefined &&
            input.filter !== null && { filter: serializeAws_json1_1ReportFilter(input.filter, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.sortOrder !== undefined && input.sortOrder !== null && { sortOrder: input.sortOrder }),
    };
};
const serializeAws_json1_1ListSharedProjectsInput = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.sortBy !== undefined && input.sortBy !== null && { sortBy: input.sortBy }),
        ...(input.sortOrder !== undefined && input.sortOrder !== null && { sortOrder: input.sortOrder }),
    };
};
const serializeAws_json1_1ListSharedReportGroupsInput = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.sortBy !== undefined && input.sortBy !== null && { sortBy: input.sortBy }),
        ...(input.sortOrder !== undefined && input.sortOrder !== null && { sortOrder: input.sortOrder }),
    };
};
const serializeAws_json1_1ListSourceCredentialsInput = (input, context) => {
    return {};
};
const serializeAws_json1_1LogsConfig = (input, context) => {
    return {
        ...(input.cloudWatchLogs !== undefined &&
            input.cloudWatchLogs !== null && {
            cloudWatchLogs: serializeAws_json1_1CloudWatchLogsConfig(input.cloudWatchLogs, context),
        }),
        ...(input.s3Logs !== undefined &&
            input.s3Logs !== null && { s3Logs: serializeAws_json1_1S3LogsConfig(input.s3Logs, context) }),
    };
};
const serializeAws_json1_1ProjectArtifacts = (input, context) => {
    return {
        ...(input.artifactIdentifier !== undefined &&
            input.artifactIdentifier !== null && { artifactIdentifier: input.artifactIdentifier }),
        ...(input.bucketOwnerAccess !== undefined &&
            input.bucketOwnerAccess !== null && { bucketOwnerAccess: input.bucketOwnerAccess }),
        ...(input.encryptionDisabled !== undefined &&
            input.encryptionDisabled !== null && { encryptionDisabled: input.encryptionDisabled }),
        ...(input.location !== undefined && input.location !== null && { location: input.location }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.namespaceType !== undefined && input.namespaceType !== null && { namespaceType: input.namespaceType }),
        ...(input.overrideArtifactName !== undefined &&
            input.overrideArtifactName !== null && { overrideArtifactName: input.overrideArtifactName }),
        ...(input.packaging !== undefined && input.packaging !== null && { packaging: input.packaging }),
        ...(input.path !== undefined && input.path !== null && { path: input.path }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_json1_1ProjectArtifactsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ProjectArtifacts(entry, context);
    });
};
const serializeAws_json1_1ProjectBuildBatchConfig = (input, context) => {
    return {
        ...(input.combineArtifacts !== undefined &&
            input.combineArtifacts !== null && { combineArtifacts: input.combineArtifacts }),
        ...(input.restrictions !== undefined &&
            input.restrictions !== null && {
            restrictions: serializeAws_json1_1BatchRestrictions(input.restrictions, context),
        }),
        ...(input.serviceRole !== undefined && input.serviceRole !== null && { serviceRole: input.serviceRole }),
        ...(input.timeoutInMins !== undefined && input.timeoutInMins !== null && { timeoutInMins: input.timeoutInMins }),
    };
};
const serializeAws_json1_1ProjectCache = (input, context) => {
    return {
        ...(input.location !== undefined && input.location !== null && { location: input.location }),
        ...(input.modes !== undefined &&
            input.modes !== null && { modes: serializeAws_json1_1ProjectCacheModes(input.modes, context) }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_json1_1ProjectCacheModes = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ProjectEnvironment = (input, context) => {
    return {
        ...(input.certificate !== undefined && input.certificate !== null && { certificate: input.certificate }),
        ...(input.computeType !== undefined && input.computeType !== null && { computeType: input.computeType }),
        ...(input.environmentVariables !== undefined &&
            input.environmentVariables !== null && {
            environmentVariables: serializeAws_json1_1EnvironmentVariables(input.environmentVariables, context),
        }),
        ...(input.image !== undefined && input.image !== null && { image: input.image }),
        ...(input.imagePullCredentialsType !== undefined &&
            input.imagePullCredentialsType !== null && { imagePullCredentialsType: input.imagePullCredentialsType }),
        ...(input.privilegedMode !== undefined &&
            input.privilegedMode !== null && { privilegedMode: input.privilegedMode }),
        ...(input.registryCredential !== undefined &&
            input.registryCredential !== null && {
            registryCredential: serializeAws_json1_1RegistryCredential(input.registryCredential, context),
        }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_json1_1ProjectFileSystemLocation = (input, context) => {
    return {
        ...(input.identifier !== undefined && input.identifier !== null && { identifier: input.identifier }),
        ...(input.location !== undefined && input.location !== null && { location: input.location }),
        ...(input.mountOptions !== undefined && input.mountOptions !== null && { mountOptions: input.mountOptions }),
        ...(input.mountPoint !== undefined && input.mountPoint !== null && { mountPoint: input.mountPoint }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_json1_1ProjectFileSystemLocations = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ProjectFileSystemLocation(entry, context);
    });
};
const serializeAws_json1_1ProjectNames = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ProjectSecondarySourceVersions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ProjectSourceVersion(entry, context);
    });
};
const serializeAws_json1_1ProjectSource = (input, context) => {
    return {
        ...(input.auth !== undefined &&
            input.auth !== null && { auth: serializeAws_json1_1SourceAuth(input.auth, context) }),
        ...(input.buildStatusConfig !== undefined &&
            input.buildStatusConfig !== null && {
            buildStatusConfig: serializeAws_json1_1BuildStatusConfig(input.buildStatusConfig, context),
        }),
        ...(input.buildspec !== undefined && input.buildspec !== null && { buildspec: input.buildspec }),
        ...(input.gitCloneDepth !== undefined && input.gitCloneDepth !== null && { gitCloneDepth: input.gitCloneDepth }),
        ...(input.gitSubmodulesConfig !== undefined &&
            input.gitSubmodulesConfig !== null && {
            gitSubmodulesConfig: serializeAws_json1_1GitSubmodulesConfig(input.gitSubmodulesConfig, context),
        }),
        ...(input.insecureSsl !== undefined && input.insecureSsl !== null && { insecureSsl: input.insecureSsl }),
        ...(input.location !== undefined && input.location !== null && { location: input.location }),
        ...(input.reportBuildStatus !== undefined &&
            input.reportBuildStatus !== null && { reportBuildStatus: input.reportBuildStatus }),
        ...(input.sourceIdentifier !== undefined &&
            input.sourceIdentifier !== null && { sourceIdentifier: input.sourceIdentifier }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_json1_1ProjectSources = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ProjectSource(entry, context);
    });
};
const serializeAws_json1_1ProjectSourceVersion = (input, context) => {
    return {
        ...(input.sourceIdentifier !== undefined &&
            input.sourceIdentifier !== null && { sourceIdentifier: input.sourceIdentifier }),
        ...(input.sourceVersion !== undefined && input.sourceVersion !== null && { sourceVersion: input.sourceVersion }),
    };
};
const serializeAws_json1_1PutResourcePolicyInput = (input, context) => {
    return {
        ...(input.policy !== undefined && input.policy !== null && { policy: input.policy }),
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
    };
};
const serializeAws_json1_1RegistryCredential = (input, context) => {
    return {
        ...(input.credential !== undefined && input.credential !== null && { credential: input.credential }),
        ...(input.credentialProvider !== undefined &&
            input.credentialProvider !== null && { credentialProvider: input.credentialProvider }),
    };
};
const serializeAws_json1_1ReportArns = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ReportExportConfig = (input, context) => {
    return {
        ...(input.exportConfigType !== undefined &&
            input.exportConfigType !== null && { exportConfigType: input.exportConfigType }),
        ...(input.s3Destination !== undefined &&
            input.s3Destination !== null && {
            s3Destination: serializeAws_json1_1S3ReportExportConfig(input.s3Destination, context),
        }),
    };
};
const serializeAws_json1_1ReportFilter = (input, context) => {
    return {
        ...(input.status !== undefined && input.status !== null && { status: input.status }),
    };
};
const serializeAws_json1_1ReportGroupArns = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1RetryBuildBatchInput = (input, context) => {
    return {
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
        ...(input.idempotencyToken !== undefined &&
            input.idempotencyToken !== null && { idempotencyToken: input.idempotencyToken }),
        ...(input.retryType !== undefined && input.retryType !== null && { retryType: input.retryType }),
    };
};
const serializeAws_json1_1RetryBuildInput = (input, context) => {
    return {
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
        ...(input.idempotencyToken !== undefined &&
            input.idempotencyToken !== null && { idempotencyToken: input.idempotencyToken }),
    };
};
const serializeAws_json1_1S3LogsConfig = (input, context) => {
    return {
        ...(input.bucketOwnerAccess !== undefined &&
            input.bucketOwnerAccess !== null && { bucketOwnerAccess: input.bucketOwnerAccess }),
        ...(input.encryptionDisabled !== undefined &&
            input.encryptionDisabled !== null && { encryptionDisabled: input.encryptionDisabled }),
        ...(input.location !== undefined && input.location !== null && { location: input.location }),
        ...(input.status !== undefined && input.status !== null && { status: input.status }),
    };
};
const serializeAws_json1_1S3ReportExportConfig = (input, context) => {
    return {
        ...(input.bucket !== undefined && input.bucket !== null && { bucket: input.bucket }),
        ...(input.bucketOwner !== undefined && input.bucketOwner !== null && { bucketOwner: input.bucketOwner }),
        ...(input.encryptionDisabled !== undefined &&
            input.encryptionDisabled !== null && { encryptionDisabled: input.encryptionDisabled }),
        ...(input.encryptionKey !== undefined && input.encryptionKey !== null && { encryptionKey: input.encryptionKey }),
        ...(input.packaging !== undefined && input.packaging !== null && { packaging: input.packaging }),
        ...(input.path !== undefined && input.path !== null && { path: input.path }),
    };
};
const serializeAws_json1_1SecurityGroupIds = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1SourceAuth = (input, context) => {
    return {
        ...(input.resource !== undefined && input.resource !== null && { resource: input.resource }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_json1_1StartBuildBatchInput = (input, context) => {
    return {
        ...(input.artifactsOverride !== undefined &&
            input.artifactsOverride !== null && {
            artifactsOverride: serializeAws_json1_1ProjectArtifacts(input.artifactsOverride, context),
        }),
        ...(input.buildBatchConfigOverride !== undefined &&
            input.buildBatchConfigOverride !== null && {
            buildBatchConfigOverride: serializeAws_json1_1ProjectBuildBatchConfig(input.buildBatchConfigOverride, context),
        }),
        ...(input.buildTimeoutInMinutesOverride !== undefined &&
            input.buildTimeoutInMinutesOverride !== null && {
            buildTimeoutInMinutesOverride: input.buildTimeoutInMinutesOverride,
        }),
        ...(input.buildspecOverride !== undefined &&
            input.buildspecOverride !== null && { buildspecOverride: input.buildspecOverride }),
        ...(input.cacheOverride !== undefined &&
            input.cacheOverride !== null && {
            cacheOverride: serializeAws_json1_1ProjectCache(input.cacheOverride, context),
        }),
        ...(input.certificateOverride !== undefined &&
            input.certificateOverride !== null && { certificateOverride: input.certificateOverride }),
        ...(input.computeTypeOverride !== undefined &&
            input.computeTypeOverride !== null && { computeTypeOverride: input.computeTypeOverride }),
        ...(input.debugSessionEnabled !== undefined &&
            input.debugSessionEnabled !== null && { debugSessionEnabled: input.debugSessionEnabled }),
        ...(input.encryptionKeyOverride !== undefined &&
            input.encryptionKeyOverride !== null && { encryptionKeyOverride: input.encryptionKeyOverride }),
        ...(input.environmentTypeOverride !== undefined &&
            input.environmentTypeOverride !== null && { environmentTypeOverride: input.environmentTypeOverride }),
        ...(input.environmentVariablesOverride !== undefined &&
            input.environmentVariablesOverride !== null && {
            environmentVariablesOverride: serializeAws_json1_1EnvironmentVariables(input.environmentVariablesOverride, context),
        }),
        ...(input.gitCloneDepthOverride !== undefined &&
            input.gitCloneDepthOverride !== null && { gitCloneDepthOverride: input.gitCloneDepthOverride }),
        ...(input.gitSubmodulesConfigOverride !== undefined &&
            input.gitSubmodulesConfigOverride !== null && {
            gitSubmodulesConfigOverride: serializeAws_json1_1GitSubmodulesConfig(input.gitSubmodulesConfigOverride, context),
        }),
        ...(input.idempotencyToken !== undefined &&
            input.idempotencyToken !== null && { idempotencyToken: input.idempotencyToken }),
        ...(input.imageOverride !== undefined && input.imageOverride !== null && { imageOverride: input.imageOverride }),
        ...(input.imagePullCredentialsTypeOverride !== undefined &&
            input.imagePullCredentialsTypeOverride !== null && {
            imagePullCredentialsTypeOverride: input.imagePullCredentialsTypeOverride,
        }),
        ...(input.insecureSslOverride !== undefined &&
            input.insecureSslOverride !== null && { insecureSslOverride: input.insecureSslOverride }),
        ...(input.logsConfigOverride !== undefined &&
            input.logsConfigOverride !== null && {
            logsConfigOverride: serializeAws_json1_1LogsConfig(input.logsConfigOverride, context),
        }),
        ...(input.privilegedModeOverride !== undefined &&
            input.privilegedModeOverride !== null && { privilegedModeOverride: input.privilegedModeOverride }),
        ...(input.projectName !== undefined && input.projectName !== null && { projectName: input.projectName }),
        ...(input.queuedTimeoutInMinutesOverride !== undefined &&
            input.queuedTimeoutInMinutesOverride !== null && {
            queuedTimeoutInMinutesOverride: input.queuedTimeoutInMinutesOverride,
        }),
        ...(input.registryCredentialOverride !== undefined &&
            input.registryCredentialOverride !== null && {
            registryCredentialOverride: serializeAws_json1_1RegistryCredential(input.registryCredentialOverride, context),
        }),
        ...(input.reportBuildBatchStatusOverride !== undefined &&
            input.reportBuildBatchStatusOverride !== null && {
            reportBuildBatchStatusOverride: input.reportBuildBatchStatusOverride,
        }),
        ...(input.secondaryArtifactsOverride !== undefined &&
            input.secondaryArtifactsOverride !== null && {
            secondaryArtifactsOverride: serializeAws_json1_1ProjectArtifactsList(input.secondaryArtifactsOverride, context),
        }),
        ...(input.secondarySourcesOverride !== undefined &&
            input.secondarySourcesOverride !== null && {
            secondarySourcesOverride: serializeAws_json1_1ProjectSources(input.secondarySourcesOverride, context),
        }),
        ...(input.secondarySourcesVersionOverride !== undefined &&
            input.secondarySourcesVersionOverride !== null && {
            secondarySourcesVersionOverride: serializeAws_json1_1ProjectSecondarySourceVersions(input.secondarySourcesVersionOverride, context),
        }),
        ...(input.serviceRoleOverride !== undefined &&
            input.serviceRoleOverride !== null && { serviceRoleOverride: input.serviceRoleOverride }),
        ...(input.sourceAuthOverride !== undefined &&
            input.sourceAuthOverride !== null && {
            sourceAuthOverride: serializeAws_json1_1SourceAuth(input.sourceAuthOverride, context),
        }),
        ...(input.sourceLocationOverride !== undefined &&
            input.sourceLocationOverride !== null && { sourceLocationOverride: input.sourceLocationOverride }),
        ...(input.sourceTypeOverride !== undefined &&
            input.sourceTypeOverride !== null && { sourceTypeOverride: input.sourceTypeOverride }),
        ...(input.sourceVersion !== undefined && input.sourceVersion !== null && { sourceVersion: input.sourceVersion }),
    };
};
const serializeAws_json1_1StartBuildInput = (input, context) => {
    return {
        ...(input.artifactsOverride !== undefined &&
            input.artifactsOverride !== null && {
            artifactsOverride: serializeAws_json1_1ProjectArtifacts(input.artifactsOverride, context),
        }),
        ...(input.buildStatusConfigOverride !== undefined &&
            input.buildStatusConfigOverride !== null && {
            buildStatusConfigOverride: serializeAws_json1_1BuildStatusConfig(input.buildStatusConfigOverride, context),
        }),
        ...(input.buildspecOverride !== undefined &&
            input.buildspecOverride !== null && { buildspecOverride: input.buildspecOverride }),
        ...(input.cacheOverride !== undefined &&
            input.cacheOverride !== null && {
            cacheOverride: serializeAws_json1_1ProjectCache(input.cacheOverride, context),
        }),
        ...(input.certificateOverride !== undefined &&
            input.certificateOverride !== null && { certificateOverride: input.certificateOverride }),
        ...(input.computeTypeOverride !== undefined &&
            input.computeTypeOverride !== null && { computeTypeOverride: input.computeTypeOverride }),
        ...(input.debugSessionEnabled !== undefined &&
            input.debugSessionEnabled !== null && { debugSessionEnabled: input.debugSessionEnabled }),
        ...(input.encryptionKeyOverride !== undefined &&
            input.encryptionKeyOverride !== null && { encryptionKeyOverride: input.encryptionKeyOverride }),
        ...(input.environmentTypeOverride !== undefined &&
            input.environmentTypeOverride !== null && { environmentTypeOverride: input.environmentTypeOverride }),
        ...(input.environmentVariablesOverride !== undefined &&
            input.environmentVariablesOverride !== null && {
            environmentVariablesOverride: serializeAws_json1_1EnvironmentVariables(input.environmentVariablesOverride, context),
        }),
        ...(input.gitCloneDepthOverride !== undefined &&
            input.gitCloneDepthOverride !== null && { gitCloneDepthOverride: input.gitCloneDepthOverride }),
        ...(input.gitSubmodulesConfigOverride !== undefined &&
            input.gitSubmodulesConfigOverride !== null && {
            gitSubmodulesConfigOverride: serializeAws_json1_1GitSubmodulesConfig(input.gitSubmodulesConfigOverride, context),
        }),
        ...(input.idempotencyToken !== undefined &&
            input.idempotencyToken !== null && { idempotencyToken: input.idempotencyToken }),
        ...(input.imageOverride !== undefined && input.imageOverride !== null && { imageOverride: input.imageOverride }),
        ...(input.imagePullCredentialsTypeOverride !== undefined &&
            input.imagePullCredentialsTypeOverride !== null && {
            imagePullCredentialsTypeOverride: input.imagePullCredentialsTypeOverride,
        }),
        ...(input.insecureSslOverride !== undefined &&
            input.insecureSslOverride !== null && { insecureSslOverride: input.insecureSslOverride }),
        ...(input.logsConfigOverride !== undefined &&
            input.logsConfigOverride !== null && {
            logsConfigOverride: serializeAws_json1_1LogsConfig(input.logsConfigOverride, context),
        }),
        ...(input.privilegedModeOverride !== undefined &&
            input.privilegedModeOverride !== null && { privilegedModeOverride: input.privilegedModeOverride }),
        ...(input.projectName !== undefined && input.projectName !== null && { projectName: input.projectName }),
        ...(input.queuedTimeoutInMinutesOverride !== undefined &&
            input.queuedTimeoutInMinutesOverride !== null && {
            queuedTimeoutInMinutesOverride: input.queuedTimeoutInMinutesOverride,
        }),
        ...(input.registryCredentialOverride !== undefined &&
            input.registryCredentialOverride !== null && {
            registryCredentialOverride: serializeAws_json1_1RegistryCredential(input.registryCredentialOverride, context),
        }),
        ...(input.reportBuildStatusOverride !== undefined &&
            input.reportBuildStatusOverride !== null && { reportBuildStatusOverride: input.reportBuildStatusOverride }),
        ...(input.secondaryArtifactsOverride !== undefined &&
            input.secondaryArtifactsOverride !== null && {
            secondaryArtifactsOverride: serializeAws_json1_1ProjectArtifactsList(input.secondaryArtifactsOverride, context),
        }),
        ...(input.secondarySourcesOverride !== undefined &&
            input.secondarySourcesOverride !== null && {
            secondarySourcesOverride: serializeAws_json1_1ProjectSources(input.secondarySourcesOverride, context),
        }),
        ...(input.secondarySourcesVersionOverride !== undefined &&
            input.secondarySourcesVersionOverride !== null && {
            secondarySourcesVersionOverride: serializeAws_json1_1ProjectSecondarySourceVersions(input.secondarySourcesVersionOverride, context),
        }),
        ...(input.serviceRoleOverride !== undefined &&
            input.serviceRoleOverride !== null && { serviceRoleOverride: input.serviceRoleOverride }),
        ...(input.sourceAuthOverride !== undefined &&
            input.sourceAuthOverride !== null && {
            sourceAuthOverride: serializeAws_json1_1SourceAuth(input.sourceAuthOverride, context),
        }),
        ...(input.sourceLocationOverride !== undefined &&
            input.sourceLocationOverride !== null && { sourceLocationOverride: input.sourceLocationOverride }),
        ...(input.sourceTypeOverride !== undefined &&
            input.sourceTypeOverride !== null && { sourceTypeOverride: input.sourceTypeOverride }),
        ...(input.sourceVersion !== undefined && input.sourceVersion !== null && { sourceVersion: input.sourceVersion }),
        ...(input.timeoutInMinutesOverride !== undefined &&
            input.timeoutInMinutesOverride !== null && { timeoutInMinutesOverride: input.timeoutInMinutesOverride }),
    };
};
const serializeAws_json1_1StopBuildBatchInput = (input, context) => {
    return {
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
    };
};
const serializeAws_json1_1StopBuildInput = (input, context) => {
    return {
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
    };
};
const serializeAws_json1_1Subnets = (input, context) => {
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
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
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
const serializeAws_json1_1TestCaseFilter = (input, context) => {
    return {
        ...(input.keyword !== undefined && input.keyword !== null && { keyword: input.keyword }),
        ...(input.status !== undefined && input.status !== null && { status: input.status }),
    };
};
const serializeAws_json1_1UpdateProjectInput = (input, context) => {
    return {
        ...(input.artifacts !== undefined &&
            input.artifacts !== null && { artifacts: serializeAws_json1_1ProjectArtifacts(input.artifacts, context) }),
        ...(input.badgeEnabled !== undefined && input.badgeEnabled !== null && { badgeEnabled: input.badgeEnabled }),
        ...(input.buildBatchConfig !== undefined &&
            input.buildBatchConfig !== null && {
            buildBatchConfig: serializeAws_json1_1ProjectBuildBatchConfig(input.buildBatchConfig, context),
        }),
        ...(input.cache !== undefined &&
            input.cache !== null && { cache: serializeAws_json1_1ProjectCache(input.cache, context) }),
        ...(input.concurrentBuildLimit !== undefined &&
            input.concurrentBuildLimit !== null && { concurrentBuildLimit: input.concurrentBuildLimit }),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.encryptionKey !== undefined && input.encryptionKey !== null && { encryptionKey: input.encryptionKey }),
        ...(input.environment !== undefined &&
            input.environment !== null && {
            environment: serializeAws_json1_1ProjectEnvironment(input.environment, context),
        }),
        ...(input.fileSystemLocations !== undefined &&
            input.fileSystemLocations !== null && {
            fileSystemLocations: serializeAws_json1_1ProjectFileSystemLocations(input.fileSystemLocations, context),
        }),
        ...(input.logsConfig !== undefined &&
            input.logsConfig !== null && { logsConfig: serializeAws_json1_1LogsConfig(input.logsConfig, context) }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.queuedTimeoutInMinutes !== undefined &&
            input.queuedTimeoutInMinutes !== null && { queuedTimeoutInMinutes: input.queuedTimeoutInMinutes }),
        ...(input.secondaryArtifacts !== undefined &&
            input.secondaryArtifacts !== null && {
            secondaryArtifacts: serializeAws_json1_1ProjectArtifactsList(input.secondaryArtifacts, context),
        }),
        ...(input.secondarySourceVersions !== undefined &&
            input.secondarySourceVersions !== null && {
            secondarySourceVersions: serializeAws_json1_1ProjectSecondarySourceVersions(input.secondarySourceVersions, context),
        }),
        ...(input.secondarySources !== undefined &&
            input.secondarySources !== null && {
            secondarySources: serializeAws_json1_1ProjectSources(input.secondarySources, context),
        }),
        ...(input.serviceRole !== undefined && input.serviceRole !== null && { serviceRole: input.serviceRole }),
        ...(input.source !== undefined &&
            input.source !== null && { source: serializeAws_json1_1ProjectSource(input.source, context) }),
        ...(input.sourceVersion !== undefined && input.sourceVersion !== null && { sourceVersion: input.sourceVersion }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
        ...(input.timeoutInMinutes !== undefined &&
            input.timeoutInMinutes !== null && { timeoutInMinutes: input.timeoutInMinutes }),
        ...(input.vpcConfig !== undefined &&
            input.vpcConfig !== null && { vpcConfig: serializeAws_json1_1VpcConfig(input.vpcConfig, context) }),
    };
};
const serializeAws_json1_1UpdateReportGroupInput = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
        ...(input.exportConfig !== undefined &&
            input.exportConfig !== null && {
            exportConfig: serializeAws_json1_1ReportExportConfig(input.exportConfig, context),
        }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    };
};
const serializeAws_json1_1UpdateWebhookInput = (input, context) => {
    return {
        ...(input.branchFilter !== undefined && input.branchFilter !== null && { branchFilter: input.branchFilter }),
        ...(input.buildType !== undefined && input.buildType !== null && { buildType: input.buildType }),
        ...(input.filterGroups !== undefined &&
            input.filterGroups !== null && { filterGroups: serializeAws_json1_1FilterGroups(input.filterGroups, context) }),
        ...(input.projectName !== undefined && input.projectName !== null && { projectName: input.projectName }),
        ...(input.rotateSecret !== undefined && input.rotateSecret !== null && { rotateSecret: input.rotateSecret }),
    };
};
const serializeAws_json1_1VpcConfig = (input, context) => {
    return {
        ...(input.securityGroupIds !== undefined &&
            input.securityGroupIds !== null && {
            securityGroupIds: serializeAws_json1_1SecurityGroupIds(input.securityGroupIds, context),
        }),
        ...(input.subnets !== undefined &&
            input.subnets !== null && { subnets: serializeAws_json1_1Subnets(input.subnets, context) }),
        ...(input.vpcId !== undefined && input.vpcId !== null && { vpcId: input.vpcId }),
    };
};
const serializeAws_json1_1WebhookFilter = (input, context) => {
    return {
        ...(input.excludeMatchedPattern !== undefined &&
            input.excludeMatchedPattern !== null && { excludeMatchedPattern: input.excludeMatchedPattern }),
        ...(input.pattern !== undefined && input.pattern !== null && { pattern: input.pattern }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const deserializeAws_json1_1AccountLimitExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1BatchDeleteBuildsOutput = (output, context) => {
    return {
        buildsDeleted: output.buildsDeleted !== undefined && output.buildsDeleted !== null
            ? deserializeAws_json1_1BuildIds(output.buildsDeleted, context)
            : undefined,
        buildsNotDeleted: output.buildsNotDeleted !== undefined && output.buildsNotDeleted !== null
            ? deserializeAws_json1_1BuildsNotDeleted(output.buildsNotDeleted, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchGetBuildBatchesOutput = (output, context) => {
    return {
        buildBatches: output.buildBatches !== undefined && output.buildBatches !== null
            ? deserializeAws_json1_1BuildBatches(output.buildBatches, context)
            : undefined,
        buildBatchesNotFound: output.buildBatchesNotFound !== undefined && output.buildBatchesNotFound !== null
            ? deserializeAws_json1_1BuildBatchIds(output.buildBatchesNotFound, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchGetBuildsOutput = (output, context) => {
    return {
        builds: output.builds !== undefined && output.builds !== null
            ? deserializeAws_json1_1Builds(output.builds, context)
            : undefined,
        buildsNotFound: output.buildsNotFound !== undefined && output.buildsNotFound !== null
            ? deserializeAws_json1_1BuildIds(output.buildsNotFound, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchGetProjectsOutput = (output, context) => {
    return {
        projects: output.projects !== undefined && output.projects !== null
            ? deserializeAws_json1_1Projects(output.projects, context)
            : undefined,
        projectsNotFound: output.projectsNotFound !== undefined && output.projectsNotFound !== null
            ? deserializeAws_json1_1ProjectNames(output.projectsNotFound, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchGetReportGroupsOutput = (output, context) => {
    return {
        reportGroups: output.reportGroups !== undefined && output.reportGroups !== null
            ? deserializeAws_json1_1ReportGroups(output.reportGroups, context)
            : undefined,
        reportGroupsNotFound: output.reportGroupsNotFound !== undefined && output.reportGroupsNotFound !== null
            ? deserializeAws_json1_1ReportGroupArns(output.reportGroupsNotFound, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchGetReportsOutput = (output, context) => {
    return {
        reports: output.reports !== undefined && output.reports !== null
            ? deserializeAws_json1_1Reports(output.reports, context)
            : undefined,
        reportsNotFound: output.reportsNotFound !== undefined && output.reportsNotFound !== null
            ? deserializeAws_json1_1ReportArns(output.reportsNotFound, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchRestrictions = (output, context) => {
    return {
        computeTypesAllowed: output.computeTypesAllowed !== undefined && output.computeTypesAllowed !== null
            ? deserializeAws_json1_1ComputeTypesAllowed(output.computeTypesAllowed, context)
            : undefined,
        maximumBuildsAllowed: output.maximumBuildsAllowed !== undefined && output.maximumBuildsAllowed !== null
            ? output.maximumBuildsAllowed
            : undefined,
    };
};
const deserializeAws_json1_1Build = (output, context) => {
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
const deserializeAws_json1_1BuildArtifacts = (output, context) => {
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
const deserializeAws_json1_1BuildArtifactsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BuildArtifacts(entry, context);
    });
};
const deserializeAws_json1_1BuildBatch = (output, context) => {
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
const deserializeAws_json1_1BuildBatches = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BuildBatch(entry, context);
    });
};
const deserializeAws_json1_1BuildBatchIds = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1BuildBatchPhase = (output, context) => {
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
const deserializeAws_json1_1BuildBatchPhases = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BuildBatchPhase(entry, context);
    });
};
const deserializeAws_json1_1BuildGroup = (output, context) => {
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
const deserializeAws_json1_1BuildGroups = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BuildGroup(entry, context);
    });
};
const deserializeAws_json1_1BuildIds = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1BuildNotDeleted = (output, context) => {
    return {
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        statusCode: output.statusCode !== undefined && output.statusCode !== null ? output.statusCode : undefined,
    };
};
const deserializeAws_json1_1BuildPhase = (output, context) => {
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
const deserializeAws_json1_1BuildPhases = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BuildPhase(entry, context);
    });
};
const deserializeAws_json1_1BuildReportArns = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1Builds = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Build(entry, context);
    });
};
const deserializeAws_json1_1BuildsNotDeleted = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BuildNotDeleted(entry, context);
    });
};
const deserializeAws_json1_1BuildStatusConfig = (output, context) => {
    return {
        context: output.context !== undefined && output.context !== null ? output.context : undefined,
        targetUrl: output.targetUrl !== undefined && output.targetUrl !== null ? output.targetUrl : undefined,
    };
};
const deserializeAws_json1_1BuildSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BuildSummary(entry, context);
    });
};
const deserializeAws_json1_1BuildSummary = (output, context) => {
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
const deserializeAws_json1_1CloudWatchLogsConfig = (output, context) => {
    return {
        groupName: output.groupName !== undefined && output.groupName !== null ? output.groupName : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        streamName: output.streamName !== undefined && output.streamName !== null ? output.streamName : undefined,
    };
};
const deserializeAws_json1_1CodeCoverage = (output, context) => {
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
const deserializeAws_json1_1CodeCoverageReportSummary = (output, context) => {
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
const deserializeAws_json1_1CodeCoverages = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CodeCoverage(entry, context);
    });
};
const deserializeAws_json1_1ComputeTypesAllowed = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1CreateProjectOutput = (output, context) => {
    return {
        project: output.project !== undefined && output.project !== null
            ? deserializeAws_json1_1Project(output.project, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateReportGroupOutput = (output, context) => {
    return {
        reportGroup: output.reportGroup !== undefined && output.reportGroup !== null
            ? deserializeAws_json1_1ReportGroup(output.reportGroup, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateWebhookOutput = (output, context) => {
    return {
        webhook: output.webhook !== undefined && output.webhook !== null
            ? deserializeAws_json1_1Webhook(output.webhook, context)
            : undefined,
    };
};
const deserializeAws_json1_1DebugSession = (output, context) => {
    return {
        sessionEnabled: output.sessionEnabled !== undefined && output.sessionEnabled !== null ? output.sessionEnabled : undefined,
        sessionTarget: output.sessionTarget !== undefined && output.sessionTarget !== null ? output.sessionTarget : undefined,
    };
};
const deserializeAws_json1_1DeleteBuildBatchOutput = (output, context) => {
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
const deserializeAws_json1_1DeleteProjectOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteReportGroupOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteReportOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteResourcePolicyOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteSourceCredentialsOutput = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    };
};
const deserializeAws_json1_1DeleteWebhookOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1DescribeCodeCoveragesOutput = (output, context) => {
    return {
        codeCoverages: output.codeCoverages !== undefined && output.codeCoverages !== null
            ? deserializeAws_json1_1CodeCoverages(output.codeCoverages, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeTestCasesOutput = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        testCases: output.testCases !== undefined && output.testCases !== null
            ? deserializeAws_json1_1TestCases(output.testCases, context)
            : undefined,
    };
};
const deserializeAws_json1_1EnvironmentImage = (output, context) => {
    return {
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        versions: output.versions !== undefined && output.versions !== null
            ? deserializeAws_json1_1ImageVersions(output.versions, context)
            : undefined,
    };
};
const deserializeAws_json1_1EnvironmentImages = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EnvironmentImage(entry, context);
    });
};
const deserializeAws_json1_1EnvironmentLanguage = (output, context) => {
    return {
        images: output.images !== undefined && output.images !== null
            ? deserializeAws_json1_1EnvironmentImages(output.images, context)
            : undefined,
        language: output.language !== undefined && output.language !== null ? output.language : undefined,
    };
};
const deserializeAws_json1_1EnvironmentLanguages = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EnvironmentLanguage(entry, context);
    });
};
const deserializeAws_json1_1EnvironmentPlatform = (output, context) => {
    return {
        languages: output.languages !== undefined && output.languages !== null
            ? deserializeAws_json1_1EnvironmentLanguages(output.languages, context)
            : undefined,
        platform: output.platform !== undefined && output.platform !== null ? output.platform : undefined,
    };
};
const deserializeAws_json1_1EnvironmentPlatforms = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EnvironmentPlatform(entry, context);
    });
};
const deserializeAws_json1_1EnvironmentVariable = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_json1_1EnvironmentVariables = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EnvironmentVariable(entry, context);
    });
};
const deserializeAws_json1_1ExportedEnvironmentVariable = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_json1_1ExportedEnvironmentVariables = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ExportedEnvironmentVariable(entry, context);
    });
};
const deserializeAws_json1_1FilterGroup = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1WebhookFilter(entry, context);
    });
};
const deserializeAws_json1_1FilterGroups = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FilterGroup(entry, context);
    });
};
const deserializeAws_json1_1GetReportGroupTrendOutput = (output, context) => {
    return {
        rawData: output.rawData !== undefined && output.rawData !== null
            ? deserializeAws_json1_1ReportGroupTrendRawDataList(output.rawData, context)
            : undefined,
        stats: output.stats !== undefined && output.stats !== null
            ? deserializeAws_json1_1ReportGroupTrendStats(output.stats, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetResourcePolicyOutput = (output, context) => {
    return {
        policy: output.policy !== undefined && output.policy !== null ? output.policy : undefined,
    };
};
const deserializeAws_json1_1GitSubmodulesConfig = (output, context) => {
    return {
        fetchSubmodules: output.fetchSubmodules !== undefined && output.fetchSubmodules !== null ? output.fetchSubmodules : undefined,
    };
};
const deserializeAws_json1_1Identifiers = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ImageVersions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ImportSourceCredentialsOutput = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    };
};
const deserializeAws_json1_1InvalidateProjectCacheOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1InvalidInputException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ListBuildBatchesForProjectOutput = (output, context) => {
    return {
        ids: output.ids !== undefined && output.ids !== null
            ? deserializeAws_json1_1BuildBatchIds(output.ids, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListBuildBatchesOutput = (output, context) => {
    return {
        ids: output.ids !== undefined && output.ids !== null
            ? deserializeAws_json1_1BuildBatchIds(output.ids, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListBuildsForProjectOutput = (output, context) => {
    return {
        ids: output.ids !== undefined && output.ids !== null ? deserializeAws_json1_1BuildIds(output.ids, context) : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListBuildsOutput = (output, context) => {
    return {
        ids: output.ids !== undefined && output.ids !== null ? deserializeAws_json1_1BuildIds(output.ids, context) : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListCuratedEnvironmentImagesOutput = (output, context) => {
    return {
        platforms: output.platforms !== undefined && output.platforms !== null
            ? deserializeAws_json1_1EnvironmentPlatforms(output.platforms, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListProjectsOutput = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        projects: output.projects !== undefined && output.projects !== null
            ? deserializeAws_json1_1ProjectNames(output.projects, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListReportGroupsOutput = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        reportGroups: output.reportGroups !== undefined && output.reportGroups !== null
            ? deserializeAws_json1_1ReportGroupArns(output.reportGroups, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListReportsForReportGroupOutput = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        reports: output.reports !== undefined && output.reports !== null
            ? deserializeAws_json1_1ReportArns(output.reports, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListReportsOutput = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        reports: output.reports !== undefined && output.reports !== null
            ? deserializeAws_json1_1ReportArns(output.reports, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListSharedProjectsOutput = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        projects: output.projects !== undefined && output.projects !== null
            ? deserializeAws_json1_1ProjectArns(output.projects, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListSharedReportGroupsOutput = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        reportGroups: output.reportGroups !== undefined && output.reportGroups !== null
            ? deserializeAws_json1_1ReportGroupArns(output.reportGroups, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListSourceCredentialsOutput = (output, context) => {
    return {
        sourceCredentialsInfos: output.sourceCredentialsInfos !== undefined && output.sourceCredentialsInfos !== null
            ? deserializeAws_json1_1SourceCredentialsInfos(output.sourceCredentialsInfos, context)
            : undefined,
    };
};
const deserializeAws_json1_1LogsConfig = (output, context) => {
    return {
        cloudWatchLogs: output.cloudWatchLogs !== undefined && output.cloudWatchLogs !== null
            ? deserializeAws_json1_1CloudWatchLogsConfig(output.cloudWatchLogs, context)
            : undefined,
        s3Logs: output.s3Logs !== undefined && output.s3Logs !== null
            ? deserializeAws_json1_1S3LogsConfig(output.s3Logs, context)
            : undefined,
    };
};
const deserializeAws_json1_1LogsLocation = (output, context) => {
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
const deserializeAws_json1_1NetworkInterface = (output, context) => {
    return {
        networkInterfaceId: output.networkInterfaceId !== undefined && output.networkInterfaceId !== null
            ? output.networkInterfaceId
            : undefined,
        subnetId: output.subnetId !== undefined && output.subnetId !== null ? output.subnetId : undefined,
    };
};
const deserializeAws_json1_1OAuthProviderException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1PhaseContext = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        statusCode: output.statusCode !== undefined && output.statusCode !== null ? output.statusCode : undefined,
    };
};
const deserializeAws_json1_1PhaseContexts = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PhaseContext(entry, context);
    });
};
const deserializeAws_json1_1Project = (output, context) => {
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
const deserializeAws_json1_1ProjectArns = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ProjectArtifacts = (output, context) => {
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
const deserializeAws_json1_1ProjectArtifactsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProjectArtifacts(entry, context);
    });
};
const deserializeAws_json1_1ProjectBadge = (output, context) => {
    return {
        badgeEnabled: output.badgeEnabled !== undefined && output.badgeEnabled !== null ? output.badgeEnabled : undefined,
        badgeRequestUrl: output.badgeRequestUrl !== undefined && output.badgeRequestUrl !== null ? output.badgeRequestUrl : undefined,
    };
};
const deserializeAws_json1_1ProjectBuildBatchConfig = (output, context) => {
    return {
        combineArtifacts: output.combineArtifacts !== undefined && output.combineArtifacts !== null ? output.combineArtifacts : undefined,
        restrictions: output.restrictions !== undefined && output.restrictions !== null
            ? deserializeAws_json1_1BatchRestrictions(output.restrictions, context)
            : undefined,
        serviceRole: output.serviceRole !== undefined && output.serviceRole !== null ? output.serviceRole : undefined,
        timeoutInMins: output.timeoutInMins !== undefined && output.timeoutInMins !== null ? output.timeoutInMins : undefined,
    };
};
const deserializeAws_json1_1ProjectCache = (output, context) => {
    return {
        location: output.location !== undefined && output.location !== null ? output.location : undefined,
        modes: output.modes !== undefined && output.modes !== null
            ? deserializeAws_json1_1ProjectCacheModes(output.modes, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_json1_1ProjectCacheModes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ProjectEnvironment = (output, context) => {
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
const deserializeAws_json1_1ProjectFileSystemLocation = (output, context) => {
    return {
        identifier: output.identifier !== undefined && output.identifier !== null ? output.identifier : undefined,
        location: output.location !== undefined && output.location !== null ? output.location : undefined,
        mountOptions: output.mountOptions !== undefined && output.mountOptions !== null ? output.mountOptions : undefined,
        mountPoint: output.mountPoint !== undefined && output.mountPoint !== null ? output.mountPoint : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_json1_1ProjectFileSystemLocations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProjectFileSystemLocation(entry, context);
    });
};
const deserializeAws_json1_1ProjectNames = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1Projects = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Project(entry, context);
    });
};
const deserializeAws_json1_1ProjectSecondarySourceVersions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProjectSourceVersion(entry, context);
    });
};
const deserializeAws_json1_1ProjectSource = (output, context) => {
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
const deserializeAws_json1_1ProjectSources = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProjectSource(entry, context);
    });
};
const deserializeAws_json1_1ProjectSourceVersion = (output, context) => {
    return {
        sourceIdentifier: output.sourceIdentifier !== undefined && output.sourceIdentifier !== null ? output.sourceIdentifier : undefined,
        sourceVersion: output.sourceVersion !== undefined && output.sourceVersion !== null ? output.sourceVersion : undefined,
    };
};
const deserializeAws_json1_1PutResourcePolicyOutput = (output, context) => {
    return {
        resourceArn: output.resourceArn !== undefined && output.resourceArn !== null ? output.resourceArn : undefined,
    };
};
const deserializeAws_json1_1RegistryCredential = (output, context) => {
    return {
        credential: output.credential !== undefined && output.credential !== null ? output.credential : undefined,
        credentialProvider: output.credentialProvider !== undefined && output.credentialProvider !== null
            ? output.credentialProvider
            : undefined,
    };
};
const deserializeAws_json1_1Report = (output, context) => {
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
const deserializeAws_json1_1ReportArns = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ReportExportConfig = (output, context) => {
    return {
        exportConfigType: output.exportConfigType !== undefined && output.exportConfigType !== null ? output.exportConfigType : undefined,
        s3Destination: output.s3Destination !== undefined && output.s3Destination !== null
            ? deserializeAws_json1_1S3ReportExportConfig(output.s3Destination, context)
            : undefined,
    };
};
const deserializeAws_json1_1ReportGroup = (output, context) => {
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
const deserializeAws_json1_1ReportGroupArns = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ReportGroups = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReportGroup(entry, context);
    });
};
const deserializeAws_json1_1ReportGroupTrendRawDataList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReportWithRawData(entry, context);
    });
};
const deserializeAws_json1_1ReportGroupTrendStats = (output, context) => {
    return {
        average: output.average !== undefined && output.average !== null ? output.average : undefined,
        max: output.max !== undefined && output.max !== null ? output.max : undefined,
        min: output.min !== undefined && output.min !== null ? output.min : undefined,
    };
};
const deserializeAws_json1_1Reports = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Report(entry, context);
    });
};
const deserializeAws_json1_1ReportStatusCounts = (output, context) => {
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
const deserializeAws_json1_1ReportWithRawData = (output, context) => {
    return {
        data: output.data !== undefined && output.data !== null ? output.data : undefined,
        reportArn: output.reportArn !== undefined && output.reportArn !== null ? output.reportArn : undefined,
    };
};
const deserializeAws_json1_1ResolvedArtifact = (output, context) => {
    return {
        identifier: output.identifier !== undefined && output.identifier !== null ? output.identifier : undefined,
        location: output.location !== undefined && output.location !== null ? output.location : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_json1_1ResolvedSecondaryArtifacts = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResolvedArtifact(entry, context);
    });
};
const deserializeAws_json1_1ResourceAlreadyExistsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1RetryBuildBatchOutput = (output, context) => {
    return {
        buildBatch: output.buildBatch !== undefined && output.buildBatch !== null
            ? deserializeAws_json1_1BuildBatch(output.buildBatch, context)
            : undefined,
    };
};
const deserializeAws_json1_1RetryBuildOutput = (output, context) => {
    return {
        build: output.build !== undefined && output.build !== null
            ? deserializeAws_json1_1Build(output.build, context)
            : undefined,
    };
};
const deserializeAws_json1_1S3LogsConfig = (output, context) => {
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
const deserializeAws_json1_1S3ReportExportConfig = (output, context) => {
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
const deserializeAws_json1_1SecurityGroupIds = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1SourceAuth = (output, context) => {
    return {
        resource: output.resource !== undefined && output.resource !== null ? output.resource : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_json1_1SourceCredentialsInfo = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        authType: output.authType !== undefined && output.authType !== null ? output.authType : undefined,
        serverType: output.serverType !== undefined && output.serverType !== null ? output.serverType : undefined,
    };
};
const deserializeAws_json1_1SourceCredentialsInfos = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SourceCredentialsInfo(entry, context);
    });
};
const deserializeAws_json1_1StartBuildBatchOutput = (output, context) => {
    return {
        buildBatch: output.buildBatch !== undefined && output.buildBatch !== null
            ? deserializeAws_json1_1BuildBatch(output.buildBatch, context)
            : undefined,
    };
};
const deserializeAws_json1_1StartBuildOutput = (output, context) => {
    return {
        build: output.build !== undefined && output.build !== null
            ? deserializeAws_json1_1Build(output.build, context)
            : undefined,
    };
};
const deserializeAws_json1_1StopBuildBatchOutput = (output, context) => {
    return {
        buildBatch: output.buildBatch !== undefined && output.buildBatch !== null
            ? deserializeAws_json1_1BuildBatch(output.buildBatch, context)
            : undefined,
    };
};
const deserializeAws_json1_1StopBuildOutput = (output, context) => {
    return {
        build: output.build !== undefined && output.build !== null
            ? deserializeAws_json1_1Build(output.build, context)
            : undefined,
    };
};
const deserializeAws_json1_1Subnets = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1Tag = (output, context) => {
    return {
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
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
const deserializeAws_json1_1TestCase = (output, context) => {
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
const deserializeAws_json1_1TestCases = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TestCase(entry, context);
    });
};
const deserializeAws_json1_1TestReportSummary = (output, context) => {
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
const deserializeAws_json1_1UpdateProjectOutput = (output, context) => {
    return {
        project: output.project !== undefined && output.project !== null
            ? deserializeAws_json1_1Project(output.project, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateReportGroupOutput = (output, context) => {
    return {
        reportGroup: output.reportGroup !== undefined && output.reportGroup !== null
            ? deserializeAws_json1_1ReportGroup(output.reportGroup, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateWebhookOutput = (output, context) => {
    return {
        webhook: output.webhook !== undefined && output.webhook !== null
            ? deserializeAws_json1_1Webhook(output.webhook, context)
            : undefined,
    };
};
const deserializeAws_json1_1VpcConfig = (output, context) => {
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
const deserializeAws_json1_1Webhook = (output, context) => {
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
const deserializeAws_json1_1WebhookFilter = (output, context) => {
    return {
        excludeMatchedPattern: output.excludeMatchedPattern !== undefined && output.excludeMatchedPattern !== null
            ? output.excludeMatchedPattern
            : undefined,
        pattern: output.pattern !== undefined && output.pattern !== null ? output.pattern : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
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