"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1CreateDatasetCommand = exports.deserializeAws_json1_1CreateCampaignCommand = exports.deserializeAws_json1_1CreateBatchInferenceJobCommand = exports.serializeAws_json1_1UpdateCampaignCommand = exports.serializeAws_json1_1StopSolutionVersionCreationCommand = exports.serializeAws_json1_1ListSolutionVersionsCommand = exports.serializeAws_json1_1ListSolutionsCommand = exports.serializeAws_json1_1ListSchemasCommand = exports.serializeAws_json1_1ListRecipesCommand = exports.serializeAws_json1_1ListFiltersCommand = exports.serializeAws_json1_1ListEventTrackersCommand = exports.serializeAws_json1_1ListDatasetsCommand = exports.serializeAws_json1_1ListDatasetImportJobsCommand = exports.serializeAws_json1_1ListDatasetGroupsCommand = exports.serializeAws_json1_1ListDatasetExportJobsCommand = exports.serializeAws_json1_1ListCampaignsCommand = exports.serializeAws_json1_1ListBatchInferenceJobsCommand = exports.serializeAws_json1_1GetSolutionMetricsCommand = exports.serializeAws_json1_1DescribeSolutionVersionCommand = exports.serializeAws_json1_1DescribeSolutionCommand = exports.serializeAws_json1_1DescribeSchemaCommand = exports.serializeAws_json1_1DescribeRecipeCommand = exports.serializeAws_json1_1DescribeFilterCommand = exports.serializeAws_json1_1DescribeFeatureTransformationCommand = exports.serializeAws_json1_1DescribeEventTrackerCommand = exports.serializeAws_json1_1DescribeDatasetImportJobCommand = exports.serializeAws_json1_1DescribeDatasetGroupCommand = exports.serializeAws_json1_1DescribeDatasetExportJobCommand = exports.serializeAws_json1_1DescribeDatasetCommand = exports.serializeAws_json1_1DescribeCampaignCommand = exports.serializeAws_json1_1DescribeBatchInferenceJobCommand = exports.serializeAws_json1_1DescribeAlgorithmCommand = exports.serializeAws_json1_1DeleteSolutionCommand = exports.serializeAws_json1_1DeleteSchemaCommand = exports.serializeAws_json1_1DeleteFilterCommand = exports.serializeAws_json1_1DeleteEventTrackerCommand = exports.serializeAws_json1_1DeleteDatasetGroupCommand = exports.serializeAws_json1_1DeleteDatasetCommand = exports.serializeAws_json1_1DeleteCampaignCommand = exports.serializeAws_json1_1CreateSolutionVersionCommand = exports.serializeAws_json1_1CreateSolutionCommand = exports.serializeAws_json1_1CreateSchemaCommand = exports.serializeAws_json1_1CreateFilterCommand = exports.serializeAws_json1_1CreateEventTrackerCommand = exports.serializeAws_json1_1CreateDatasetImportJobCommand = exports.serializeAws_json1_1CreateDatasetGroupCommand = exports.serializeAws_json1_1CreateDatasetExportJobCommand = exports.serializeAws_json1_1CreateDatasetCommand = exports.serializeAws_json1_1CreateCampaignCommand = exports.serializeAws_json1_1CreateBatchInferenceJobCommand = void 0;
exports.deserializeAws_json1_1UpdateCampaignCommand = exports.deserializeAws_json1_1StopSolutionVersionCreationCommand = exports.deserializeAws_json1_1ListSolutionVersionsCommand = exports.deserializeAws_json1_1ListSolutionsCommand = exports.deserializeAws_json1_1ListSchemasCommand = exports.deserializeAws_json1_1ListRecipesCommand = exports.deserializeAws_json1_1ListFiltersCommand = exports.deserializeAws_json1_1ListEventTrackersCommand = exports.deserializeAws_json1_1ListDatasetsCommand = exports.deserializeAws_json1_1ListDatasetImportJobsCommand = exports.deserializeAws_json1_1ListDatasetGroupsCommand = exports.deserializeAws_json1_1ListDatasetExportJobsCommand = exports.deserializeAws_json1_1ListCampaignsCommand = exports.deserializeAws_json1_1ListBatchInferenceJobsCommand = exports.deserializeAws_json1_1GetSolutionMetricsCommand = exports.deserializeAws_json1_1DescribeSolutionVersionCommand = exports.deserializeAws_json1_1DescribeSolutionCommand = exports.deserializeAws_json1_1DescribeSchemaCommand = exports.deserializeAws_json1_1DescribeRecipeCommand = exports.deserializeAws_json1_1DescribeFilterCommand = exports.deserializeAws_json1_1DescribeFeatureTransformationCommand = exports.deserializeAws_json1_1DescribeEventTrackerCommand = exports.deserializeAws_json1_1DescribeDatasetImportJobCommand = exports.deserializeAws_json1_1DescribeDatasetGroupCommand = exports.deserializeAws_json1_1DescribeDatasetExportJobCommand = exports.deserializeAws_json1_1DescribeDatasetCommand = exports.deserializeAws_json1_1DescribeCampaignCommand = exports.deserializeAws_json1_1DescribeBatchInferenceJobCommand = exports.deserializeAws_json1_1DescribeAlgorithmCommand = exports.deserializeAws_json1_1DeleteSolutionCommand = exports.deserializeAws_json1_1DeleteSchemaCommand = exports.deserializeAws_json1_1DeleteFilterCommand = exports.deserializeAws_json1_1DeleteEventTrackerCommand = exports.deserializeAws_json1_1DeleteDatasetGroupCommand = exports.deserializeAws_json1_1DeleteDatasetCommand = exports.deserializeAws_json1_1DeleteCampaignCommand = exports.deserializeAws_json1_1CreateSolutionVersionCommand = exports.deserializeAws_json1_1CreateSolutionCommand = exports.deserializeAws_json1_1CreateSchemaCommand = exports.deserializeAws_json1_1CreateFilterCommand = exports.deserializeAws_json1_1CreateEventTrackerCommand = exports.deserializeAws_json1_1CreateDatasetImportJobCommand = exports.deserializeAws_json1_1CreateDatasetGroupCommand = exports.deserializeAws_json1_1CreateDatasetExportJobCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1CreateBatchInferenceJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.CreateBatchInferenceJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateBatchInferenceJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateBatchInferenceJobCommand = serializeAws_json1_1CreateBatchInferenceJobCommand;
const serializeAws_json1_1CreateCampaignCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.CreateCampaign",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateCampaignRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateCampaignCommand = serializeAws_json1_1CreateCampaignCommand;
const serializeAws_json1_1CreateDatasetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.CreateDataset",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDatasetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateDatasetCommand = serializeAws_json1_1CreateDatasetCommand;
const serializeAws_json1_1CreateDatasetExportJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.CreateDatasetExportJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDatasetExportJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateDatasetExportJobCommand = serializeAws_json1_1CreateDatasetExportJobCommand;
const serializeAws_json1_1CreateDatasetGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.CreateDatasetGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDatasetGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateDatasetGroupCommand = serializeAws_json1_1CreateDatasetGroupCommand;
const serializeAws_json1_1CreateDatasetImportJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.CreateDatasetImportJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDatasetImportJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateDatasetImportJobCommand = serializeAws_json1_1CreateDatasetImportJobCommand;
const serializeAws_json1_1CreateEventTrackerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.CreateEventTracker",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateEventTrackerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateEventTrackerCommand = serializeAws_json1_1CreateEventTrackerCommand;
const serializeAws_json1_1CreateFilterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.CreateFilter",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateFilterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateFilterCommand = serializeAws_json1_1CreateFilterCommand;
const serializeAws_json1_1CreateSchemaCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.CreateSchema",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateSchemaRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateSchemaCommand = serializeAws_json1_1CreateSchemaCommand;
const serializeAws_json1_1CreateSolutionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.CreateSolution",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateSolutionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateSolutionCommand = serializeAws_json1_1CreateSolutionCommand;
const serializeAws_json1_1CreateSolutionVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.CreateSolutionVersion",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateSolutionVersionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateSolutionVersionCommand = serializeAws_json1_1CreateSolutionVersionCommand;
const serializeAws_json1_1DeleteCampaignCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.DeleteCampaign",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteCampaignRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteCampaignCommand = serializeAws_json1_1DeleteCampaignCommand;
const serializeAws_json1_1DeleteDatasetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.DeleteDataset",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDatasetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteDatasetCommand = serializeAws_json1_1DeleteDatasetCommand;
const serializeAws_json1_1DeleteDatasetGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.DeleteDatasetGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDatasetGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteDatasetGroupCommand = serializeAws_json1_1DeleteDatasetGroupCommand;
const serializeAws_json1_1DeleteEventTrackerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.DeleteEventTracker",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteEventTrackerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteEventTrackerCommand = serializeAws_json1_1DeleteEventTrackerCommand;
const serializeAws_json1_1DeleteFilterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.DeleteFilter",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteFilterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteFilterCommand = serializeAws_json1_1DeleteFilterCommand;
const serializeAws_json1_1DeleteSchemaCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.DeleteSchema",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteSchemaRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteSchemaCommand = serializeAws_json1_1DeleteSchemaCommand;
const serializeAws_json1_1DeleteSolutionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.DeleteSolution",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteSolutionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteSolutionCommand = serializeAws_json1_1DeleteSolutionCommand;
const serializeAws_json1_1DescribeAlgorithmCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.DescribeAlgorithm",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAlgorithmRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeAlgorithmCommand = serializeAws_json1_1DescribeAlgorithmCommand;
const serializeAws_json1_1DescribeBatchInferenceJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.DescribeBatchInferenceJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeBatchInferenceJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeBatchInferenceJobCommand = serializeAws_json1_1DescribeBatchInferenceJobCommand;
const serializeAws_json1_1DescribeCampaignCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.DescribeCampaign",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeCampaignRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeCampaignCommand = serializeAws_json1_1DescribeCampaignCommand;
const serializeAws_json1_1DescribeDatasetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.DescribeDataset",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDatasetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeDatasetCommand = serializeAws_json1_1DescribeDatasetCommand;
const serializeAws_json1_1DescribeDatasetExportJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.DescribeDatasetExportJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDatasetExportJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeDatasetExportJobCommand = serializeAws_json1_1DescribeDatasetExportJobCommand;
const serializeAws_json1_1DescribeDatasetGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.DescribeDatasetGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDatasetGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeDatasetGroupCommand = serializeAws_json1_1DescribeDatasetGroupCommand;
const serializeAws_json1_1DescribeDatasetImportJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.DescribeDatasetImportJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDatasetImportJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeDatasetImportJobCommand = serializeAws_json1_1DescribeDatasetImportJobCommand;
const serializeAws_json1_1DescribeEventTrackerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.DescribeEventTracker",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEventTrackerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeEventTrackerCommand = serializeAws_json1_1DescribeEventTrackerCommand;
const serializeAws_json1_1DescribeFeatureTransformationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.DescribeFeatureTransformation",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeFeatureTransformationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeFeatureTransformationCommand = serializeAws_json1_1DescribeFeatureTransformationCommand;
const serializeAws_json1_1DescribeFilterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.DescribeFilter",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeFilterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeFilterCommand = serializeAws_json1_1DescribeFilterCommand;
const serializeAws_json1_1DescribeRecipeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.DescribeRecipe",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeRecipeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeRecipeCommand = serializeAws_json1_1DescribeRecipeCommand;
const serializeAws_json1_1DescribeSchemaCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.DescribeSchema",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeSchemaRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeSchemaCommand = serializeAws_json1_1DescribeSchemaCommand;
const serializeAws_json1_1DescribeSolutionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.DescribeSolution",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeSolutionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeSolutionCommand = serializeAws_json1_1DescribeSolutionCommand;
const serializeAws_json1_1DescribeSolutionVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.DescribeSolutionVersion",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeSolutionVersionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeSolutionVersionCommand = serializeAws_json1_1DescribeSolutionVersionCommand;
const serializeAws_json1_1GetSolutionMetricsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.GetSolutionMetrics",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSolutionMetricsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetSolutionMetricsCommand = serializeAws_json1_1GetSolutionMetricsCommand;
const serializeAws_json1_1ListBatchInferenceJobsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.ListBatchInferenceJobs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListBatchInferenceJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListBatchInferenceJobsCommand = serializeAws_json1_1ListBatchInferenceJobsCommand;
const serializeAws_json1_1ListCampaignsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.ListCampaigns",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListCampaignsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListCampaignsCommand = serializeAws_json1_1ListCampaignsCommand;
const serializeAws_json1_1ListDatasetExportJobsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.ListDatasetExportJobs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDatasetExportJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListDatasetExportJobsCommand = serializeAws_json1_1ListDatasetExportJobsCommand;
const serializeAws_json1_1ListDatasetGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.ListDatasetGroups",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDatasetGroupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListDatasetGroupsCommand = serializeAws_json1_1ListDatasetGroupsCommand;
const serializeAws_json1_1ListDatasetImportJobsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.ListDatasetImportJobs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDatasetImportJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListDatasetImportJobsCommand = serializeAws_json1_1ListDatasetImportJobsCommand;
const serializeAws_json1_1ListDatasetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.ListDatasets",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDatasetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListDatasetsCommand = serializeAws_json1_1ListDatasetsCommand;
const serializeAws_json1_1ListEventTrackersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.ListEventTrackers",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListEventTrackersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListEventTrackersCommand = serializeAws_json1_1ListEventTrackersCommand;
const serializeAws_json1_1ListFiltersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.ListFilters",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListFiltersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListFiltersCommand = serializeAws_json1_1ListFiltersCommand;
const serializeAws_json1_1ListRecipesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.ListRecipes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRecipesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListRecipesCommand = serializeAws_json1_1ListRecipesCommand;
const serializeAws_json1_1ListSchemasCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.ListSchemas",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListSchemasRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListSchemasCommand = serializeAws_json1_1ListSchemasCommand;
const serializeAws_json1_1ListSolutionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.ListSolutions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListSolutionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListSolutionsCommand = serializeAws_json1_1ListSolutionsCommand;
const serializeAws_json1_1ListSolutionVersionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.ListSolutionVersions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListSolutionVersionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListSolutionVersionsCommand = serializeAws_json1_1ListSolutionVersionsCommand;
const serializeAws_json1_1StopSolutionVersionCreationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.StopSolutionVersionCreation",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopSolutionVersionCreationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopSolutionVersionCreationCommand = serializeAws_json1_1StopSolutionVersionCreationCommand;
const serializeAws_json1_1UpdateCampaignCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonPersonalize.UpdateCampaign",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateCampaignRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateCampaignCommand = serializeAws_json1_1UpdateCampaignCommand;
const deserializeAws_json1_1CreateBatchInferenceJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateBatchInferenceJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateBatchInferenceJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateBatchInferenceJobCommand = deserializeAws_json1_1CreateBatchInferenceJobCommand;
const deserializeAws_json1_1CreateBatchInferenceJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.personalize#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.personalize#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.personalize#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.personalize#ResourceNotFoundException":
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
const deserializeAws_json1_1CreateCampaignCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateCampaignCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateCampaignResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateCampaignCommand = deserializeAws_json1_1CreateCampaignCommand;
const deserializeAws_json1_1CreateCampaignCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.personalize#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.personalize#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.personalize#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.personalize#ResourceNotFoundException":
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
const deserializeAws_json1_1CreateDatasetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateDatasetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDatasetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateDatasetCommand = deserializeAws_json1_1CreateDatasetCommand;
const deserializeAws_json1_1CreateDatasetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.personalize#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.personalize#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.personalize#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.personalize#ResourceNotFoundException":
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
const deserializeAws_json1_1CreateDatasetExportJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateDatasetExportJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDatasetExportJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateDatasetExportJobCommand = deserializeAws_json1_1CreateDatasetExportJobCommand;
const deserializeAws_json1_1CreateDatasetExportJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.personalize#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.personalize#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.personalize#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.personalize#ResourceNotFoundException":
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
const deserializeAws_json1_1CreateDatasetGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateDatasetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDatasetGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateDatasetGroupCommand = deserializeAws_json1_1CreateDatasetGroupCommand;
const deserializeAws_json1_1CreateDatasetGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.personalize#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.personalize#ResourceAlreadyExistsException":
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
const deserializeAws_json1_1CreateDatasetImportJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateDatasetImportJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDatasetImportJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateDatasetImportJobCommand = deserializeAws_json1_1CreateDatasetImportJobCommand;
const deserializeAws_json1_1CreateDatasetImportJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.personalize#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.personalize#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.personalize#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.personalize#ResourceNotFoundException":
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
const deserializeAws_json1_1CreateEventTrackerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateEventTrackerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateEventTrackerResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateEventTrackerCommand = deserializeAws_json1_1CreateEventTrackerCommand;
const deserializeAws_json1_1CreateEventTrackerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.personalize#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.personalize#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.personalize#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.personalize#ResourceNotFoundException":
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
const deserializeAws_json1_1CreateFilterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateFilterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateFilterResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateFilterCommand = deserializeAws_json1_1CreateFilterCommand;
const deserializeAws_json1_1CreateFilterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.personalize#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.personalize#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.personalize#ResourceNotFoundException":
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
const deserializeAws_json1_1CreateSchemaCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateSchemaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateSchemaResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateSchemaCommand = deserializeAws_json1_1CreateSchemaCommand;
const deserializeAws_json1_1CreateSchemaCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.personalize#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.personalize#ResourceAlreadyExistsException":
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
const deserializeAws_json1_1CreateSolutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateSolutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateSolutionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateSolutionCommand = deserializeAws_json1_1CreateSolutionCommand;
const deserializeAws_json1_1CreateSolutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.personalize#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.personalize#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.personalize#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.personalize#ResourceNotFoundException":
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
const deserializeAws_json1_1CreateSolutionVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateSolutionVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateSolutionVersionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateSolutionVersionCommand = deserializeAws_json1_1CreateSolutionVersionCommand;
const deserializeAws_json1_1CreateSolutionVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.personalize#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.personalize#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.personalize#ResourceNotFoundException":
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
const deserializeAws_json1_1DeleteCampaignCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteCampaignCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteCampaignCommand = deserializeAws_json1_1DeleteCampaignCommand;
const deserializeAws_json1_1DeleteCampaignCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.personalize#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.personalize#ResourceNotFoundException":
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
const deserializeAws_json1_1DeleteDatasetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteDatasetCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteDatasetCommand = deserializeAws_json1_1DeleteDatasetCommand;
const deserializeAws_json1_1DeleteDatasetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.personalize#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.personalize#ResourceNotFoundException":
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
const deserializeAws_json1_1DeleteDatasetGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteDatasetGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteDatasetGroupCommand = deserializeAws_json1_1DeleteDatasetGroupCommand;
const deserializeAws_json1_1DeleteDatasetGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.personalize#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.personalize#ResourceNotFoundException":
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
const deserializeAws_json1_1DeleteEventTrackerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteEventTrackerCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteEventTrackerCommand = deserializeAws_json1_1DeleteEventTrackerCommand;
const deserializeAws_json1_1DeleteEventTrackerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.personalize#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.personalize#ResourceNotFoundException":
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
const deserializeAws_json1_1DeleteFilterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteFilterCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteFilterCommand = deserializeAws_json1_1DeleteFilterCommand;
const deserializeAws_json1_1DeleteFilterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.personalize#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.personalize#ResourceNotFoundException":
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
const deserializeAws_json1_1DeleteSchemaCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteSchemaCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteSchemaCommand = deserializeAws_json1_1DeleteSchemaCommand;
const deserializeAws_json1_1DeleteSchemaCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.personalize#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.personalize#ResourceNotFoundException":
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
const deserializeAws_json1_1DeleteSolutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteSolutionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteSolutionCommand = deserializeAws_json1_1DeleteSolutionCommand;
const deserializeAws_json1_1DeleteSolutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.personalize#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.personalize#ResourceNotFoundException":
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
const deserializeAws_json1_1DescribeAlgorithmCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeAlgorithmCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAlgorithmResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeAlgorithmCommand = deserializeAws_json1_1DescribeAlgorithmCommand;
const deserializeAws_json1_1DescribeAlgorithmCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.personalize#ResourceNotFoundException":
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
const deserializeAws_json1_1DescribeBatchInferenceJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeBatchInferenceJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeBatchInferenceJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeBatchInferenceJobCommand = deserializeAws_json1_1DescribeBatchInferenceJobCommand;
const deserializeAws_json1_1DescribeBatchInferenceJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.personalize#ResourceNotFoundException":
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
const deserializeAws_json1_1DescribeCampaignCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeCampaignCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeCampaignResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeCampaignCommand = deserializeAws_json1_1DescribeCampaignCommand;
const deserializeAws_json1_1DescribeCampaignCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.personalize#ResourceNotFoundException":
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
const deserializeAws_json1_1DescribeDatasetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeDatasetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDatasetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeDatasetCommand = deserializeAws_json1_1DescribeDatasetCommand;
const deserializeAws_json1_1DescribeDatasetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.personalize#ResourceNotFoundException":
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
const deserializeAws_json1_1DescribeDatasetExportJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeDatasetExportJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDatasetExportJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeDatasetExportJobCommand = deserializeAws_json1_1DescribeDatasetExportJobCommand;
const deserializeAws_json1_1DescribeDatasetExportJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.personalize#ResourceNotFoundException":
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
const deserializeAws_json1_1DescribeDatasetGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeDatasetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDatasetGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeDatasetGroupCommand = deserializeAws_json1_1DescribeDatasetGroupCommand;
const deserializeAws_json1_1DescribeDatasetGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.personalize#ResourceNotFoundException":
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
const deserializeAws_json1_1DescribeDatasetImportJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeDatasetImportJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDatasetImportJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeDatasetImportJobCommand = deserializeAws_json1_1DescribeDatasetImportJobCommand;
const deserializeAws_json1_1DescribeDatasetImportJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.personalize#ResourceNotFoundException":
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
const deserializeAws_json1_1DescribeEventTrackerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeEventTrackerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEventTrackerResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeEventTrackerCommand = deserializeAws_json1_1DescribeEventTrackerCommand;
const deserializeAws_json1_1DescribeEventTrackerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.personalize#ResourceNotFoundException":
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
const deserializeAws_json1_1DescribeFeatureTransformationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeFeatureTransformationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeFeatureTransformationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeFeatureTransformationCommand = deserializeAws_json1_1DescribeFeatureTransformationCommand;
const deserializeAws_json1_1DescribeFeatureTransformationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.personalize#ResourceNotFoundException":
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
const deserializeAws_json1_1DescribeFilterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeFilterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeFilterResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeFilterCommand = deserializeAws_json1_1DescribeFilterCommand;
const deserializeAws_json1_1DescribeFilterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.personalize#ResourceNotFoundException":
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
const deserializeAws_json1_1DescribeRecipeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeRecipeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeRecipeResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeRecipeCommand = deserializeAws_json1_1DescribeRecipeCommand;
const deserializeAws_json1_1DescribeRecipeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.personalize#ResourceNotFoundException":
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
const deserializeAws_json1_1DescribeSchemaCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeSchemaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeSchemaResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeSchemaCommand = deserializeAws_json1_1DescribeSchemaCommand;
const deserializeAws_json1_1DescribeSchemaCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.personalize#ResourceNotFoundException":
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
const deserializeAws_json1_1DescribeSolutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeSolutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeSolutionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeSolutionCommand = deserializeAws_json1_1DescribeSolutionCommand;
const deserializeAws_json1_1DescribeSolutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.personalize#ResourceNotFoundException":
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
const deserializeAws_json1_1DescribeSolutionVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeSolutionVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeSolutionVersionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeSolutionVersionCommand = deserializeAws_json1_1DescribeSolutionVersionCommand;
const deserializeAws_json1_1DescribeSolutionVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.personalize#ResourceNotFoundException":
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
const deserializeAws_json1_1GetSolutionMetricsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetSolutionMetricsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSolutionMetricsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetSolutionMetricsCommand = deserializeAws_json1_1GetSolutionMetricsCommand;
const deserializeAws_json1_1GetSolutionMetricsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.personalize#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.personalize#ResourceNotFoundException":
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
const deserializeAws_json1_1ListBatchInferenceJobsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListBatchInferenceJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListBatchInferenceJobsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListBatchInferenceJobsCommand = deserializeAws_json1_1ListBatchInferenceJobsCommand;
const deserializeAws_json1_1ListBatchInferenceJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.personalize#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListCampaignsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListCampaignsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListCampaignsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListCampaignsCommand = deserializeAws_json1_1ListCampaignsCommand;
const deserializeAws_json1_1ListCampaignsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.personalize#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListDatasetExportJobsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListDatasetExportJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDatasetExportJobsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListDatasetExportJobsCommand = deserializeAws_json1_1ListDatasetExportJobsCommand;
const deserializeAws_json1_1ListDatasetExportJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.personalize#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListDatasetGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListDatasetGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDatasetGroupsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListDatasetGroupsCommand = deserializeAws_json1_1ListDatasetGroupsCommand;
const deserializeAws_json1_1ListDatasetGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.personalize#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListDatasetImportJobsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListDatasetImportJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDatasetImportJobsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListDatasetImportJobsCommand = deserializeAws_json1_1ListDatasetImportJobsCommand;
const deserializeAws_json1_1ListDatasetImportJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.personalize#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListDatasetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListDatasetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDatasetsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListDatasetsCommand = deserializeAws_json1_1ListDatasetsCommand;
const deserializeAws_json1_1ListDatasetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.personalize#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListEventTrackersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListEventTrackersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListEventTrackersResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListEventTrackersCommand = deserializeAws_json1_1ListEventTrackersCommand;
const deserializeAws_json1_1ListEventTrackersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.personalize#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListFiltersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListFiltersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListFiltersResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListFiltersCommand = deserializeAws_json1_1ListFiltersCommand;
const deserializeAws_json1_1ListFiltersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.personalize#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListRecipesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListRecipesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListRecipesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListRecipesCommand = deserializeAws_json1_1ListRecipesCommand;
const deserializeAws_json1_1ListRecipesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.personalize#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListSchemasCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListSchemasCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListSchemasResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListSchemasCommand = deserializeAws_json1_1ListSchemasCommand;
const deserializeAws_json1_1ListSchemasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.personalize#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListSolutionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListSolutionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListSolutionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListSolutionsCommand = deserializeAws_json1_1ListSolutionsCommand;
const deserializeAws_json1_1ListSolutionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.personalize#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListSolutionVersionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListSolutionVersionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListSolutionVersionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListSolutionVersionsCommand = deserializeAws_json1_1ListSolutionVersionsCommand;
const deserializeAws_json1_1ListSolutionVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.personalize#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.personalize#ResourceNotFoundException":
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
const deserializeAws_json1_1StopSolutionVersionCreationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopSolutionVersionCreationCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopSolutionVersionCreationCommand = deserializeAws_json1_1StopSolutionVersionCreationCommand;
const deserializeAws_json1_1StopSolutionVersionCreationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.personalize#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.personalize#ResourceNotFoundException":
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
const deserializeAws_json1_1UpdateCampaignCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateCampaignCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateCampaignResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateCampaignCommand = deserializeAws_json1_1UpdateCampaignCommand;
const deserializeAws_json1_1UpdateCampaignCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalize#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.personalize#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.personalize#ResourceNotFoundException":
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
const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidNextTokenException(body, context);
    const contents = {
        name: "InvalidNextTokenException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = {
        name: "LimitExceededException",
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
const serializeAws_json1_1ArnList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1AutoMLConfig = (input, context) => {
    return {
        ...(input.metricName !== undefined && input.metricName !== null && { metricName: input.metricName }),
        ...(input.recipeList !== undefined &&
            input.recipeList !== null && { recipeList: serializeAws_json1_1ArnList(input.recipeList, context) }),
    };
};
const serializeAws_json1_1BatchInferenceJobConfig = (input, context) => {
    return {
        ...(input.itemExplorationConfig !== undefined &&
            input.itemExplorationConfig !== null && {
            itemExplorationConfig: serializeAws_json1_1HyperParameters(input.itemExplorationConfig, context),
        }),
    };
};
const serializeAws_json1_1BatchInferenceJobInput = (input, context) => {
    return {
        ...(input.s3DataSource !== undefined &&
            input.s3DataSource !== null && { s3DataSource: serializeAws_json1_1S3DataConfig(input.s3DataSource, context) }),
    };
};
const serializeAws_json1_1BatchInferenceJobOutput = (input, context) => {
    return {
        ...(input.s3DataDestination !== undefined &&
            input.s3DataDestination !== null && {
            s3DataDestination: serializeAws_json1_1S3DataConfig(input.s3DataDestination, context),
        }),
    };
};
const serializeAws_json1_1CampaignConfig = (input, context) => {
    return {
        ...(input.itemExplorationConfig !== undefined &&
            input.itemExplorationConfig !== null && {
            itemExplorationConfig: serializeAws_json1_1HyperParameters(input.itemExplorationConfig, context),
        }),
    };
};
const serializeAws_json1_1CategoricalHyperParameterRange = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.values !== undefined &&
            input.values !== null && { values: serializeAws_json1_1CategoricalValues(input.values, context) }),
    };
};
const serializeAws_json1_1CategoricalHyperParameterRanges = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1CategoricalHyperParameterRange(entry, context);
    });
};
const serializeAws_json1_1CategoricalValues = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ContinuousHyperParameterRange = (input, context) => {
    return {
        ...(input.maxValue !== undefined && input.maxValue !== null && { maxValue: input.maxValue }),
        ...(input.minValue !== undefined && input.minValue !== null && { minValue: input.minValue }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
    };
};
const serializeAws_json1_1ContinuousHyperParameterRanges = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ContinuousHyperParameterRange(entry, context);
    });
};
const serializeAws_json1_1CreateBatchInferenceJobRequest = (input, context) => {
    return {
        ...(input.batchInferenceJobConfig !== undefined &&
            input.batchInferenceJobConfig !== null && {
            batchInferenceJobConfig: serializeAws_json1_1BatchInferenceJobConfig(input.batchInferenceJobConfig, context),
        }),
        ...(input.filterArn !== undefined && input.filterArn !== null && { filterArn: input.filterArn }),
        ...(input.jobInput !== undefined &&
            input.jobInput !== null && { jobInput: serializeAws_json1_1BatchInferenceJobInput(input.jobInput, context) }),
        ...(input.jobName !== undefined && input.jobName !== null && { jobName: input.jobName }),
        ...(input.jobOutput !== undefined &&
            input.jobOutput !== null && { jobOutput: serializeAws_json1_1BatchInferenceJobOutput(input.jobOutput, context) }),
        ...(input.numResults !== undefined && input.numResults !== null && { numResults: input.numResults }),
        ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
        ...(input.solutionVersionArn !== undefined &&
            input.solutionVersionArn !== null && { solutionVersionArn: input.solutionVersionArn }),
    };
};
const serializeAws_json1_1CreateCampaignRequest = (input, context) => {
    return {
        ...(input.campaignConfig !== undefined &&
            input.campaignConfig !== null && {
            campaignConfig: serializeAws_json1_1CampaignConfig(input.campaignConfig, context),
        }),
        ...(input.minProvisionedTPS !== undefined &&
            input.minProvisionedTPS !== null && { minProvisionedTPS: input.minProvisionedTPS }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.solutionVersionArn !== undefined &&
            input.solutionVersionArn !== null && { solutionVersionArn: input.solutionVersionArn }),
    };
};
const serializeAws_json1_1CreateDatasetExportJobRequest = (input, context) => {
    return {
        ...(input.datasetArn !== undefined && input.datasetArn !== null && { datasetArn: input.datasetArn }),
        ...(input.ingestionMode !== undefined && input.ingestionMode !== null && { ingestionMode: input.ingestionMode }),
        ...(input.jobName !== undefined && input.jobName !== null && { jobName: input.jobName }),
        ...(input.jobOutput !== undefined &&
            input.jobOutput !== null && { jobOutput: serializeAws_json1_1DatasetExportJobOutput(input.jobOutput, context) }),
        ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
    };
};
const serializeAws_json1_1CreateDatasetGroupRequest = (input, context) => {
    return {
        ...(input.kmsKeyArn !== undefined && input.kmsKeyArn !== null && { kmsKeyArn: input.kmsKeyArn }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
    };
};
const serializeAws_json1_1CreateDatasetImportJobRequest = (input, context) => {
    return {
        ...(input.dataSource !== undefined &&
            input.dataSource !== null && { dataSource: serializeAws_json1_1DataSource(input.dataSource, context) }),
        ...(input.datasetArn !== undefined && input.datasetArn !== null && { datasetArn: input.datasetArn }),
        ...(input.jobName !== undefined && input.jobName !== null && { jobName: input.jobName }),
        ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
    };
};
const serializeAws_json1_1CreateDatasetRequest = (input, context) => {
    return {
        ...(input.datasetGroupArn !== undefined &&
            input.datasetGroupArn !== null && { datasetGroupArn: input.datasetGroupArn }),
        ...(input.datasetType !== undefined && input.datasetType !== null && { datasetType: input.datasetType }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.schemaArn !== undefined && input.schemaArn !== null && { schemaArn: input.schemaArn }),
    };
};
const serializeAws_json1_1CreateEventTrackerRequest = (input, context) => {
    return {
        ...(input.datasetGroupArn !== undefined &&
            input.datasetGroupArn !== null && { datasetGroupArn: input.datasetGroupArn }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
    };
};
const serializeAws_json1_1CreateFilterRequest = (input, context) => {
    return {
        ...(input.datasetGroupArn !== undefined &&
            input.datasetGroupArn !== null && { datasetGroupArn: input.datasetGroupArn }),
        ...(input.filterExpression !== undefined &&
            input.filterExpression !== null && { filterExpression: input.filterExpression }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
    };
};
const serializeAws_json1_1CreateSchemaRequest = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.schema !== undefined && input.schema !== null && { schema: input.schema }),
    };
};
const serializeAws_json1_1CreateSolutionRequest = (input, context) => {
    return {
        ...(input.datasetGroupArn !== undefined &&
            input.datasetGroupArn !== null && { datasetGroupArn: input.datasetGroupArn }),
        ...(input.eventType !== undefined && input.eventType !== null && { eventType: input.eventType }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.performAutoML !== undefined && input.performAutoML !== null && { performAutoML: input.performAutoML }),
        ...(input.performHPO !== undefined && input.performHPO !== null && { performHPO: input.performHPO }),
        ...(input.recipeArn !== undefined && input.recipeArn !== null && { recipeArn: input.recipeArn }),
        ...(input.solutionConfig !== undefined &&
            input.solutionConfig !== null && {
            solutionConfig: serializeAws_json1_1SolutionConfig(input.solutionConfig, context),
        }),
    };
};
const serializeAws_json1_1CreateSolutionVersionRequest = (input, context) => {
    return {
        ...(input.solutionArn !== undefined && input.solutionArn !== null && { solutionArn: input.solutionArn }),
        ...(input.trainingMode !== undefined && input.trainingMode !== null && { trainingMode: input.trainingMode }),
    };
};
const serializeAws_json1_1DatasetExportJobOutput = (input, context) => {
    return {
        ...(input.s3DataDestination !== undefined &&
            input.s3DataDestination !== null && {
            s3DataDestination: serializeAws_json1_1S3DataConfig(input.s3DataDestination, context),
        }),
    };
};
const serializeAws_json1_1DataSource = (input, context) => {
    return {
        ...(input.dataLocation !== undefined && input.dataLocation !== null && { dataLocation: input.dataLocation }),
    };
};
const serializeAws_json1_1DeleteCampaignRequest = (input, context) => {
    return {
        ...(input.campaignArn !== undefined && input.campaignArn !== null && { campaignArn: input.campaignArn }),
    };
};
const serializeAws_json1_1DeleteDatasetGroupRequest = (input, context) => {
    return {
        ...(input.datasetGroupArn !== undefined &&
            input.datasetGroupArn !== null && { datasetGroupArn: input.datasetGroupArn }),
    };
};
const serializeAws_json1_1DeleteDatasetRequest = (input, context) => {
    return {
        ...(input.datasetArn !== undefined && input.datasetArn !== null && { datasetArn: input.datasetArn }),
    };
};
const serializeAws_json1_1DeleteEventTrackerRequest = (input, context) => {
    return {
        ...(input.eventTrackerArn !== undefined &&
            input.eventTrackerArn !== null && { eventTrackerArn: input.eventTrackerArn }),
    };
};
const serializeAws_json1_1DeleteFilterRequest = (input, context) => {
    return {
        ...(input.filterArn !== undefined && input.filterArn !== null && { filterArn: input.filterArn }),
    };
};
const serializeAws_json1_1DeleteSchemaRequest = (input, context) => {
    return {
        ...(input.schemaArn !== undefined && input.schemaArn !== null && { schemaArn: input.schemaArn }),
    };
};
const serializeAws_json1_1DeleteSolutionRequest = (input, context) => {
    return {
        ...(input.solutionArn !== undefined && input.solutionArn !== null && { solutionArn: input.solutionArn }),
    };
};
const serializeAws_json1_1DescribeAlgorithmRequest = (input, context) => {
    return {
        ...(input.algorithmArn !== undefined && input.algorithmArn !== null && { algorithmArn: input.algorithmArn }),
    };
};
const serializeAws_json1_1DescribeBatchInferenceJobRequest = (input, context) => {
    return {
        ...(input.batchInferenceJobArn !== undefined &&
            input.batchInferenceJobArn !== null && { batchInferenceJobArn: input.batchInferenceJobArn }),
    };
};
const serializeAws_json1_1DescribeCampaignRequest = (input, context) => {
    return {
        ...(input.campaignArn !== undefined && input.campaignArn !== null && { campaignArn: input.campaignArn }),
    };
};
const serializeAws_json1_1DescribeDatasetExportJobRequest = (input, context) => {
    return {
        ...(input.datasetExportJobArn !== undefined &&
            input.datasetExportJobArn !== null && { datasetExportJobArn: input.datasetExportJobArn }),
    };
};
const serializeAws_json1_1DescribeDatasetGroupRequest = (input, context) => {
    return {
        ...(input.datasetGroupArn !== undefined &&
            input.datasetGroupArn !== null && { datasetGroupArn: input.datasetGroupArn }),
    };
};
const serializeAws_json1_1DescribeDatasetImportJobRequest = (input, context) => {
    return {
        ...(input.datasetImportJobArn !== undefined &&
            input.datasetImportJobArn !== null && { datasetImportJobArn: input.datasetImportJobArn }),
    };
};
const serializeAws_json1_1DescribeDatasetRequest = (input, context) => {
    return {
        ...(input.datasetArn !== undefined && input.datasetArn !== null && { datasetArn: input.datasetArn }),
    };
};
const serializeAws_json1_1DescribeEventTrackerRequest = (input, context) => {
    return {
        ...(input.eventTrackerArn !== undefined &&
            input.eventTrackerArn !== null && { eventTrackerArn: input.eventTrackerArn }),
    };
};
const serializeAws_json1_1DescribeFeatureTransformationRequest = (input, context) => {
    return {
        ...(input.featureTransformationArn !== undefined &&
            input.featureTransformationArn !== null && { featureTransformationArn: input.featureTransformationArn }),
    };
};
const serializeAws_json1_1DescribeFilterRequest = (input, context) => {
    return {
        ...(input.filterArn !== undefined && input.filterArn !== null && { filterArn: input.filterArn }),
    };
};
const serializeAws_json1_1DescribeRecipeRequest = (input, context) => {
    return {
        ...(input.recipeArn !== undefined && input.recipeArn !== null && { recipeArn: input.recipeArn }),
    };
};
const serializeAws_json1_1DescribeSchemaRequest = (input, context) => {
    return {
        ...(input.schemaArn !== undefined && input.schemaArn !== null && { schemaArn: input.schemaArn }),
    };
};
const serializeAws_json1_1DescribeSolutionRequest = (input, context) => {
    return {
        ...(input.solutionArn !== undefined && input.solutionArn !== null && { solutionArn: input.solutionArn }),
    };
};
const serializeAws_json1_1DescribeSolutionVersionRequest = (input, context) => {
    return {
        ...(input.solutionVersionArn !== undefined &&
            input.solutionVersionArn !== null && { solutionVersionArn: input.solutionVersionArn }),
    };
};
const serializeAws_json1_1FeatureTransformationParameters = (input, context) => {
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
const serializeAws_json1_1GetSolutionMetricsRequest = (input, context) => {
    return {
        ...(input.solutionVersionArn !== undefined &&
            input.solutionVersionArn !== null && { solutionVersionArn: input.solutionVersionArn }),
    };
};
const serializeAws_json1_1HPOConfig = (input, context) => {
    return {
        ...(input.algorithmHyperParameterRanges !== undefined &&
            input.algorithmHyperParameterRanges !== null && {
            algorithmHyperParameterRanges: serializeAws_json1_1HyperParameterRanges(input.algorithmHyperParameterRanges, context),
        }),
        ...(input.hpoObjective !== undefined &&
            input.hpoObjective !== null && { hpoObjective: serializeAws_json1_1HPOObjective(input.hpoObjective, context) }),
        ...(input.hpoResourceConfig !== undefined &&
            input.hpoResourceConfig !== null && {
            hpoResourceConfig: serializeAws_json1_1HPOResourceConfig(input.hpoResourceConfig, context),
        }),
    };
};
const serializeAws_json1_1HPOObjective = (input, context) => {
    return {
        ...(input.metricName !== undefined && input.metricName !== null && { metricName: input.metricName }),
        ...(input.metricRegex !== undefined && input.metricRegex !== null && { metricRegex: input.metricRegex }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_json1_1HPOResourceConfig = (input, context) => {
    return {
        ...(input.maxNumberOfTrainingJobs !== undefined &&
            input.maxNumberOfTrainingJobs !== null && { maxNumberOfTrainingJobs: input.maxNumberOfTrainingJobs }),
        ...(input.maxParallelTrainingJobs !== undefined &&
            input.maxParallelTrainingJobs !== null && { maxParallelTrainingJobs: input.maxParallelTrainingJobs }),
    };
};
const serializeAws_json1_1HyperParameterRanges = (input, context) => {
    return {
        ...(input.categoricalHyperParameterRanges !== undefined &&
            input.categoricalHyperParameterRanges !== null && {
            categoricalHyperParameterRanges: serializeAws_json1_1CategoricalHyperParameterRanges(input.categoricalHyperParameterRanges, context),
        }),
        ...(input.continuousHyperParameterRanges !== undefined &&
            input.continuousHyperParameterRanges !== null && {
            continuousHyperParameterRanges: serializeAws_json1_1ContinuousHyperParameterRanges(input.continuousHyperParameterRanges, context),
        }),
        ...(input.integerHyperParameterRanges !== undefined &&
            input.integerHyperParameterRanges !== null && {
            integerHyperParameterRanges: serializeAws_json1_1IntegerHyperParameterRanges(input.integerHyperParameterRanges, context),
        }),
    };
};
const serializeAws_json1_1HyperParameters = (input, context) => {
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
const serializeAws_json1_1IntegerHyperParameterRange = (input, context) => {
    return {
        ...(input.maxValue !== undefined && input.maxValue !== null && { maxValue: input.maxValue }),
        ...(input.minValue !== undefined && input.minValue !== null && { minValue: input.minValue }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
    };
};
const serializeAws_json1_1IntegerHyperParameterRanges = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1IntegerHyperParameterRange(entry, context);
    });
};
const serializeAws_json1_1ListBatchInferenceJobsRequest = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.solutionVersionArn !== undefined &&
            input.solutionVersionArn !== null && { solutionVersionArn: input.solutionVersionArn }),
    };
};
const serializeAws_json1_1ListCampaignsRequest = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.solutionArn !== undefined && input.solutionArn !== null && { solutionArn: input.solutionArn }),
    };
};
const serializeAws_json1_1ListDatasetExportJobsRequest = (input, context) => {
    return {
        ...(input.datasetArn !== undefined && input.datasetArn !== null && { datasetArn: input.datasetArn }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListDatasetGroupsRequest = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListDatasetImportJobsRequest = (input, context) => {
    return {
        ...(input.datasetArn !== undefined && input.datasetArn !== null && { datasetArn: input.datasetArn }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListDatasetsRequest = (input, context) => {
    return {
        ...(input.datasetGroupArn !== undefined &&
            input.datasetGroupArn !== null && { datasetGroupArn: input.datasetGroupArn }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListEventTrackersRequest = (input, context) => {
    return {
        ...(input.datasetGroupArn !== undefined &&
            input.datasetGroupArn !== null && { datasetGroupArn: input.datasetGroupArn }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListFiltersRequest = (input, context) => {
    return {
        ...(input.datasetGroupArn !== undefined &&
            input.datasetGroupArn !== null && { datasetGroupArn: input.datasetGroupArn }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListRecipesRequest = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.recipeProvider !== undefined &&
            input.recipeProvider !== null && { recipeProvider: input.recipeProvider }),
    };
};
const serializeAws_json1_1ListSchemasRequest = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListSolutionsRequest = (input, context) => {
    return {
        ...(input.datasetGroupArn !== undefined &&
            input.datasetGroupArn !== null && { datasetGroupArn: input.datasetGroupArn }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListSolutionVersionsRequest = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.solutionArn !== undefined && input.solutionArn !== null && { solutionArn: input.solutionArn }),
    };
};
const serializeAws_json1_1OptimizationObjective = (input, context) => {
    return {
        ...(input.itemAttribute !== undefined && input.itemAttribute !== null && { itemAttribute: input.itemAttribute }),
        ...(input.objectiveSensitivity !== undefined &&
            input.objectiveSensitivity !== null && { objectiveSensitivity: input.objectiveSensitivity }),
    };
};
const serializeAws_json1_1S3DataConfig = (input, context) => {
    return {
        ...(input.kmsKeyArn !== undefined && input.kmsKeyArn !== null && { kmsKeyArn: input.kmsKeyArn }),
        ...(input.path !== undefined && input.path !== null && { path: input.path }),
    };
};
const serializeAws_json1_1SolutionConfig = (input, context) => {
    return {
        ...(input.algorithmHyperParameters !== undefined &&
            input.algorithmHyperParameters !== null && {
            algorithmHyperParameters: serializeAws_json1_1HyperParameters(input.algorithmHyperParameters, context),
        }),
        ...(input.autoMLConfig !== undefined &&
            input.autoMLConfig !== null && { autoMLConfig: serializeAws_json1_1AutoMLConfig(input.autoMLConfig, context) }),
        ...(input.eventValueThreshold !== undefined &&
            input.eventValueThreshold !== null && { eventValueThreshold: input.eventValueThreshold }),
        ...(input.featureTransformationParameters !== undefined &&
            input.featureTransformationParameters !== null && {
            featureTransformationParameters: serializeAws_json1_1FeatureTransformationParameters(input.featureTransformationParameters, context),
        }),
        ...(input.hpoConfig !== undefined &&
            input.hpoConfig !== null && { hpoConfig: serializeAws_json1_1HPOConfig(input.hpoConfig, context) }),
        ...(input.optimizationObjective !== undefined &&
            input.optimizationObjective !== null && {
            optimizationObjective: serializeAws_json1_1OptimizationObjective(input.optimizationObjective, context),
        }),
    };
};
const serializeAws_json1_1StopSolutionVersionCreationRequest = (input, context) => {
    return {
        ...(input.solutionVersionArn !== undefined &&
            input.solutionVersionArn !== null && { solutionVersionArn: input.solutionVersionArn }),
    };
};
const serializeAws_json1_1UpdateCampaignRequest = (input, context) => {
    return {
        ...(input.campaignArn !== undefined && input.campaignArn !== null && { campaignArn: input.campaignArn }),
        ...(input.campaignConfig !== undefined &&
            input.campaignConfig !== null && {
            campaignConfig: serializeAws_json1_1CampaignConfig(input.campaignConfig, context),
        }),
        ...(input.minProvisionedTPS !== undefined &&
            input.minProvisionedTPS !== null && { minProvisionedTPS: input.minProvisionedTPS }),
        ...(input.solutionVersionArn !== undefined &&
            input.solutionVersionArn !== null && { solutionVersionArn: input.solutionVersionArn }),
    };
};
const deserializeAws_json1_1Algorithm = (output, context) => {
    return {
        algorithmArn: output.algorithmArn !== undefined && output.algorithmArn !== null ? output.algorithmArn : undefined,
        algorithmImage: output.algorithmImage !== undefined && output.algorithmImage !== null
            ? deserializeAws_json1_1AlgorithmImage(output.algorithmImage, context)
            : undefined,
        creationDateTime: output.creationDateTime !== undefined && output.creationDateTime !== null
            ? new Date(Math.round(output.creationDateTime * 1000))
            : undefined,
        defaultHyperParameterRanges: output.defaultHyperParameterRanges !== undefined && output.defaultHyperParameterRanges !== null
            ? deserializeAws_json1_1DefaultHyperParameterRanges(output.defaultHyperParameterRanges, context)
            : undefined,
        defaultHyperParameters: output.defaultHyperParameters !== undefined && output.defaultHyperParameters !== null
            ? deserializeAws_json1_1HyperParameters(output.defaultHyperParameters, context)
            : undefined,
        defaultResourceConfig: output.defaultResourceConfig !== undefined && output.defaultResourceConfig !== null
            ? deserializeAws_json1_1ResourceConfig(output.defaultResourceConfig, context)
            : undefined,
        lastUpdatedDateTime: output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
            ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
        trainingInputMode: output.trainingInputMode !== undefined && output.trainingInputMode !== null
            ? output.trainingInputMode
            : undefined,
    };
};
const deserializeAws_json1_1AlgorithmImage = (output, context) => {
    return {
        dockerURI: output.dockerURI !== undefined && output.dockerURI !== null ? output.dockerURI : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_json1_1ArnList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1AutoMLConfig = (output, context) => {
    return {
        metricName: output.metricName !== undefined && output.metricName !== null ? output.metricName : undefined,
        recipeList: output.recipeList !== undefined && output.recipeList !== null
            ? deserializeAws_json1_1ArnList(output.recipeList, context)
            : undefined,
    };
};
const deserializeAws_json1_1AutoMLResult = (output, context) => {
    return {
        bestRecipeArn: output.bestRecipeArn !== undefined && output.bestRecipeArn !== null ? output.bestRecipeArn : undefined,
    };
};
const deserializeAws_json1_1BatchInferenceJob = (output, context) => {
    return {
        batchInferenceJobArn: output.batchInferenceJobArn !== undefined && output.batchInferenceJobArn !== null
            ? output.batchInferenceJobArn
            : undefined,
        batchInferenceJobConfig: output.batchInferenceJobConfig !== undefined && output.batchInferenceJobConfig !== null
            ? deserializeAws_json1_1BatchInferenceJobConfig(output.batchInferenceJobConfig, context)
            : undefined,
        creationDateTime: output.creationDateTime !== undefined && output.creationDateTime !== null
            ? new Date(Math.round(output.creationDateTime * 1000))
            : undefined,
        failureReason: output.failureReason !== undefined && output.failureReason !== null ? output.failureReason : undefined,
        filterArn: output.filterArn !== undefined && output.filterArn !== null ? output.filterArn : undefined,
        jobInput: output.jobInput !== undefined && output.jobInput !== null
            ? deserializeAws_json1_1BatchInferenceJobInput(output.jobInput, context)
            : undefined,
        jobName: output.jobName !== undefined && output.jobName !== null ? output.jobName : undefined,
        jobOutput: output.jobOutput !== undefined && output.jobOutput !== null
            ? deserializeAws_json1_1BatchInferenceJobOutput(output.jobOutput, context)
            : undefined,
        lastUpdatedDateTime: output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
            ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
            : undefined,
        numResults: output.numResults !== undefined && output.numResults !== null ? output.numResults : undefined,
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
        solutionVersionArn: output.solutionVersionArn !== undefined && output.solutionVersionArn !== null
            ? output.solutionVersionArn
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1BatchInferenceJobConfig = (output, context) => {
    return {
        itemExplorationConfig: output.itemExplorationConfig !== undefined && output.itemExplorationConfig !== null
            ? deserializeAws_json1_1HyperParameters(output.itemExplorationConfig, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchInferenceJobInput = (output, context) => {
    return {
        s3DataSource: output.s3DataSource !== undefined && output.s3DataSource !== null
            ? deserializeAws_json1_1S3DataConfig(output.s3DataSource, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchInferenceJobOutput = (output, context) => {
    return {
        s3DataDestination: output.s3DataDestination !== undefined && output.s3DataDestination !== null
            ? deserializeAws_json1_1S3DataConfig(output.s3DataDestination, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchInferenceJobs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BatchInferenceJobSummary(entry, context);
    });
};
const deserializeAws_json1_1BatchInferenceJobSummary = (output, context) => {
    return {
        batchInferenceJobArn: output.batchInferenceJobArn !== undefined && output.batchInferenceJobArn !== null
            ? output.batchInferenceJobArn
            : undefined,
        creationDateTime: output.creationDateTime !== undefined && output.creationDateTime !== null
            ? new Date(Math.round(output.creationDateTime * 1000))
            : undefined,
        failureReason: output.failureReason !== undefined && output.failureReason !== null ? output.failureReason : undefined,
        jobName: output.jobName !== undefined && output.jobName !== null ? output.jobName : undefined,
        lastUpdatedDateTime: output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
            ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
            : undefined,
        solutionVersionArn: output.solutionVersionArn !== undefined && output.solutionVersionArn !== null
            ? output.solutionVersionArn
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1Campaign = (output, context) => {
    return {
        campaignArn: output.campaignArn !== undefined && output.campaignArn !== null ? output.campaignArn : undefined,
        campaignConfig: output.campaignConfig !== undefined && output.campaignConfig !== null
            ? deserializeAws_json1_1CampaignConfig(output.campaignConfig, context)
            : undefined,
        creationDateTime: output.creationDateTime !== undefined && output.creationDateTime !== null
            ? new Date(Math.round(output.creationDateTime * 1000))
            : undefined,
        failureReason: output.failureReason !== undefined && output.failureReason !== null ? output.failureReason : undefined,
        lastUpdatedDateTime: output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
            ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
            : undefined,
        latestCampaignUpdate: output.latestCampaignUpdate !== undefined && output.latestCampaignUpdate !== null
            ? deserializeAws_json1_1CampaignUpdateSummary(output.latestCampaignUpdate, context)
            : undefined,
        minProvisionedTPS: output.minProvisionedTPS !== undefined && output.minProvisionedTPS !== null
            ? output.minProvisionedTPS
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        solutionVersionArn: output.solutionVersionArn !== undefined && output.solutionVersionArn !== null
            ? output.solutionVersionArn
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1CampaignConfig = (output, context) => {
    return {
        itemExplorationConfig: output.itemExplorationConfig !== undefined && output.itemExplorationConfig !== null
            ? deserializeAws_json1_1HyperParameters(output.itemExplorationConfig, context)
            : undefined,
    };
};
const deserializeAws_json1_1Campaigns = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CampaignSummary(entry, context);
    });
};
const deserializeAws_json1_1CampaignSummary = (output, context) => {
    return {
        campaignArn: output.campaignArn !== undefined && output.campaignArn !== null ? output.campaignArn : undefined,
        creationDateTime: output.creationDateTime !== undefined && output.creationDateTime !== null
            ? new Date(Math.round(output.creationDateTime * 1000))
            : undefined,
        failureReason: output.failureReason !== undefined && output.failureReason !== null ? output.failureReason : undefined,
        lastUpdatedDateTime: output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
            ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1CampaignUpdateSummary = (output, context) => {
    return {
        campaignConfig: output.campaignConfig !== undefined && output.campaignConfig !== null
            ? deserializeAws_json1_1CampaignConfig(output.campaignConfig, context)
            : undefined,
        creationDateTime: output.creationDateTime !== undefined && output.creationDateTime !== null
            ? new Date(Math.round(output.creationDateTime * 1000))
            : undefined,
        failureReason: output.failureReason !== undefined && output.failureReason !== null ? output.failureReason : undefined,
        lastUpdatedDateTime: output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
            ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
            : undefined,
        minProvisionedTPS: output.minProvisionedTPS !== undefined && output.minProvisionedTPS !== null
            ? output.minProvisionedTPS
            : undefined,
        solutionVersionArn: output.solutionVersionArn !== undefined && output.solutionVersionArn !== null
            ? output.solutionVersionArn
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1CategoricalHyperParameterRange = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        values: output.values !== undefined && output.values !== null
            ? deserializeAws_json1_1CategoricalValues(output.values, context)
            : undefined,
    };
};
const deserializeAws_json1_1CategoricalHyperParameterRanges = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CategoricalHyperParameterRange(entry, context);
    });
};
const deserializeAws_json1_1CategoricalValues = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ContinuousHyperParameterRange = (output, context) => {
    return {
        maxValue: output.maxValue !== undefined && output.maxValue !== null ? output.maxValue : undefined,
        minValue: output.minValue !== undefined && output.minValue !== null ? output.minValue : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_json1_1ContinuousHyperParameterRanges = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ContinuousHyperParameterRange(entry, context);
    });
};
const deserializeAws_json1_1CreateBatchInferenceJobResponse = (output, context) => {
    return {
        batchInferenceJobArn: output.batchInferenceJobArn !== undefined && output.batchInferenceJobArn !== null
            ? output.batchInferenceJobArn
            : undefined,
    };
};
const deserializeAws_json1_1CreateCampaignResponse = (output, context) => {
    return {
        campaignArn: output.campaignArn !== undefined && output.campaignArn !== null ? output.campaignArn : undefined,
    };
};
const deserializeAws_json1_1CreateDatasetExportJobResponse = (output, context) => {
    return {
        datasetExportJobArn: output.datasetExportJobArn !== undefined && output.datasetExportJobArn !== null
            ? output.datasetExportJobArn
            : undefined,
    };
};
const deserializeAws_json1_1CreateDatasetGroupResponse = (output, context) => {
    return {
        datasetGroupArn: output.datasetGroupArn !== undefined && output.datasetGroupArn !== null ? output.datasetGroupArn : undefined,
    };
};
const deserializeAws_json1_1CreateDatasetImportJobResponse = (output, context) => {
    return {
        datasetImportJobArn: output.datasetImportJobArn !== undefined && output.datasetImportJobArn !== null
            ? output.datasetImportJobArn
            : undefined,
    };
};
const deserializeAws_json1_1CreateDatasetResponse = (output, context) => {
    return {
        datasetArn: output.datasetArn !== undefined && output.datasetArn !== null ? output.datasetArn : undefined,
    };
};
const deserializeAws_json1_1CreateEventTrackerResponse = (output, context) => {
    return {
        eventTrackerArn: output.eventTrackerArn !== undefined && output.eventTrackerArn !== null ? output.eventTrackerArn : undefined,
        trackingId: output.trackingId !== undefined && output.trackingId !== null ? output.trackingId : undefined,
    };
};
const deserializeAws_json1_1CreateFilterResponse = (output, context) => {
    return {
        filterArn: output.filterArn !== undefined && output.filterArn !== null ? output.filterArn : undefined,
    };
};
const deserializeAws_json1_1CreateSchemaResponse = (output, context) => {
    return {
        schemaArn: output.schemaArn !== undefined && output.schemaArn !== null ? output.schemaArn : undefined,
    };
};
const deserializeAws_json1_1CreateSolutionResponse = (output, context) => {
    return {
        solutionArn: output.solutionArn !== undefined && output.solutionArn !== null ? output.solutionArn : undefined,
    };
};
const deserializeAws_json1_1CreateSolutionVersionResponse = (output, context) => {
    return {
        solutionVersionArn: output.solutionVersionArn !== undefined && output.solutionVersionArn !== null
            ? output.solutionVersionArn
            : undefined,
    };
};
const deserializeAws_json1_1Dataset = (output, context) => {
    return {
        creationDateTime: output.creationDateTime !== undefined && output.creationDateTime !== null
            ? new Date(Math.round(output.creationDateTime * 1000))
            : undefined,
        datasetArn: output.datasetArn !== undefined && output.datasetArn !== null ? output.datasetArn : undefined,
        datasetGroupArn: output.datasetGroupArn !== undefined && output.datasetGroupArn !== null ? output.datasetGroupArn : undefined,
        datasetType: output.datasetType !== undefined && output.datasetType !== null ? output.datasetType : undefined,
        lastUpdatedDateTime: output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
            ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        schemaArn: output.schemaArn !== undefined && output.schemaArn !== null ? output.schemaArn : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1DatasetExportJob = (output, context) => {
    return {
        creationDateTime: output.creationDateTime !== undefined && output.creationDateTime !== null
            ? new Date(Math.round(output.creationDateTime * 1000))
            : undefined,
        datasetArn: output.datasetArn !== undefined && output.datasetArn !== null ? output.datasetArn : undefined,
        datasetExportJobArn: output.datasetExportJobArn !== undefined && output.datasetExportJobArn !== null
            ? output.datasetExportJobArn
            : undefined,
        failureReason: output.failureReason !== undefined && output.failureReason !== null ? output.failureReason : undefined,
        ingestionMode: output.ingestionMode !== undefined && output.ingestionMode !== null ? output.ingestionMode : undefined,
        jobName: output.jobName !== undefined && output.jobName !== null ? output.jobName : undefined,
        jobOutput: output.jobOutput !== undefined && output.jobOutput !== null
            ? deserializeAws_json1_1DatasetExportJobOutput(output.jobOutput, context)
            : undefined,
        lastUpdatedDateTime: output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
            ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
            : undefined,
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1DatasetExportJobOutput = (output, context) => {
    return {
        s3DataDestination: output.s3DataDestination !== undefined && output.s3DataDestination !== null
            ? deserializeAws_json1_1S3DataConfig(output.s3DataDestination, context)
            : undefined,
    };
};
const deserializeAws_json1_1DatasetExportJobs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DatasetExportJobSummary(entry, context);
    });
};
const deserializeAws_json1_1DatasetExportJobSummary = (output, context) => {
    return {
        creationDateTime: output.creationDateTime !== undefined && output.creationDateTime !== null
            ? new Date(Math.round(output.creationDateTime * 1000))
            : undefined,
        datasetExportJobArn: output.datasetExportJobArn !== undefined && output.datasetExportJobArn !== null
            ? output.datasetExportJobArn
            : undefined,
        failureReason: output.failureReason !== undefined && output.failureReason !== null ? output.failureReason : undefined,
        jobName: output.jobName !== undefined && output.jobName !== null ? output.jobName : undefined,
        lastUpdatedDateTime: output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
            ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1DatasetGroup = (output, context) => {
    return {
        creationDateTime: output.creationDateTime !== undefined && output.creationDateTime !== null
            ? new Date(Math.round(output.creationDateTime * 1000))
            : undefined,
        datasetGroupArn: output.datasetGroupArn !== undefined && output.datasetGroupArn !== null ? output.datasetGroupArn : undefined,
        failureReason: output.failureReason !== undefined && output.failureReason !== null ? output.failureReason : undefined,
        kmsKeyArn: output.kmsKeyArn !== undefined && output.kmsKeyArn !== null ? output.kmsKeyArn : undefined,
        lastUpdatedDateTime: output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
            ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1DatasetGroups = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DatasetGroupSummary(entry, context);
    });
};
const deserializeAws_json1_1DatasetGroupSummary = (output, context) => {
    return {
        creationDateTime: output.creationDateTime !== undefined && output.creationDateTime !== null
            ? new Date(Math.round(output.creationDateTime * 1000))
            : undefined,
        datasetGroupArn: output.datasetGroupArn !== undefined && output.datasetGroupArn !== null ? output.datasetGroupArn : undefined,
        failureReason: output.failureReason !== undefined && output.failureReason !== null ? output.failureReason : undefined,
        lastUpdatedDateTime: output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
            ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1DatasetImportJob = (output, context) => {
    return {
        creationDateTime: output.creationDateTime !== undefined && output.creationDateTime !== null
            ? new Date(Math.round(output.creationDateTime * 1000))
            : undefined,
        dataSource: output.dataSource !== undefined && output.dataSource !== null
            ? deserializeAws_json1_1DataSource(output.dataSource, context)
            : undefined,
        datasetArn: output.datasetArn !== undefined && output.datasetArn !== null ? output.datasetArn : undefined,
        datasetImportJobArn: output.datasetImportJobArn !== undefined && output.datasetImportJobArn !== null
            ? output.datasetImportJobArn
            : undefined,
        failureReason: output.failureReason !== undefined && output.failureReason !== null ? output.failureReason : undefined,
        jobName: output.jobName !== undefined && output.jobName !== null ? output.jobName : undefined,
        lastUpdatedDateTime: output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
            ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
            : undefined,
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1DatasetImportJobs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DatasetImportJobSummary(entry, context);
    });
};
const deserializeAws_json1_1DatasetImportJobSummary = (output, context) => {
    return {
        creationDateTime: output.creationDateTime !== undefined && output.creationDateTime !== null
            ? new Date(Math.round(output.creationDateTime * 1000))
            : undefined,
        datasetImportJobArn: output.datasetImportJobArn !== undefined && output.datasetImportJobArn !== null
            ? output.datasetImportJobArn
            : undefined,
        failureReason: output.failureReason !== undefined && output.failureReason !== null ? output.failureReason : undefined,
        jobName: output.jobName !== undefined && output.jobName !== null ? output.jobName : undefined,
        lastUpdatedDateTime: output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
            ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1Datasets = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DatasetSummary(entry, context);
    });
};
const deserializeAws_json1_1DatasetSchema = (output, context) => {
    return {
        creationDateTime: output.creationDateTime !== undefined && output.creationDateTime !== null
            ? new Date(Math.round(output.creationDateTime * 1000))
            : undefined,
        lastUpdatedDateTime: output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
            ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        schema: output.schema !== undefined && output.schema !== null ? output.schema : undefined,
        schemaArn: output.schemaArn !== undefined && output.schemaArn !== null ? output.schemaArn : undefined,
    };
};
const deserializeAws_json1_1DatasetSchemaSummary = (output, context) => {
    return {
        creationDateTime: output.creationDateTime !== undefined && output.creationDateTime !== null
            ? new Date(Math.round(output.creationDateTime * 1000))
            : undefined,
        lastUpdatedDateTime: output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
            ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        schemaArn: output.schemaArn !== undefined && output.schemaArn !== null ? output.schemaArn : undefined,
    };
};
const deserializeAws_json1_1DatasetSummary = (output, context) => {
    return {
        creationDateTime: output.creationDateTime !== undefined && output.creationDateTime !== null
            ? new Date(Math.round(output.creationDateTime * 1000))
            : undefined,
        datasetArn: output.datasetArn !== undefined && output.datasetArn !== null ? output.datasetArn : undefined,
        datasetType: output.datasetType !== undefined && output.datasetType !== null ? output.datasetType : undefined,
        lastUpdatedDateTime: output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
            ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1DataSource = (output, context) => {
    return {
        dataLocation: output.dataLocation !== undefined && output.dataLocation !== null ? output.dataLocation : undefined,
    };
};
const deserializeAws_json1_1DefaultCategoricalHyperParameterRange = (output, context) => {
    return {
        isTunable: output.isTunable !== undefined && output.isTunable !== null ? output.isTunable : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        values: output.values !== undefined && output.values !== null
            ? deserializeAws_json1_1CategoricalValues(output.values, context)
            : undefined,
    };
};
const deserializeAws_json1_1DefaultCategoricalHyperParameterRanges = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DefaultCategoricalHyperParameterRange(entry, context);
    });
};
const deserializeAws_json1_1DefaultContinuousHyperParameterRange = (output, context) => {
    return {
        isTunable: output.isTunable !== undefined && output.isTunable !== null ? output.isTunable : undefined,
        maxValue: output.maxValue !== undefined && output.maxValue !== null ? output.maxValue : undefined,
        minValue: output.minValue !== undefined && output.minValue !== null ? output.minValue : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_json1_1DefaultContinuousHyperParameterRanges = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DefaultContinuousHyperParameterRange(entry, context);
    });
};
const deserializeAws_json1_1DefaultHyperParameterRanges = (output, context) => {
    return {
        categoricalHyperParameterRanges: output.categoricalHyperParameterRanges !== undefined && output.categoricalHyperParameterRanges !== null
            ? deserializeAws_json1_1DefaultCategoricalHyperParameterRanges(output.categoricalHyperParameterRanges, context)
            : undefined,
        continuousHyperParameterRanges: output.continuousHyperParameterRanges !== undefined && output.continuousHyperParameterRanges !== null
            ? deserializeAws_json1_1DefaultContinuousHyperParameterRanges(output.continuousHyperParameterRanges, context)
            : undefined,
        integerHyperParameterRanges: output.integerHyperParameterRanges !== undefined && output.integerHyperParameterRanges !== null
            ? deserializeAws_json1_1DefaultIntegerHyperParameterRanges(output.integerHyperParameterRanges, context)
            : undefined,
    };
};
const deserializeAws_json1_1DefaultIntegerHyperParameterRange = (output, context) => {
    return {
        isTunable: output.isTunable !== undefined && output.isTunable !== null ? output.isTunable : undefined,
        maxValue: output.maxValue !== undefined && output.maxValue !== null ? output.maxValue : undefined,
        minValue: output.minValue !== undefined && output.minValue !== null ? output.minValue : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_json1_1DefaultIntegerHyperParameterRanges = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DefaultIntegerHyperParameterRange(entry, context);
    });
};
const deserializeAws_json1_1DescribeAlgorithmResponse = (output, context) => {
    return {
        algorithm: output.algorithm !== undefined && output.algorithm !== null
            ? deserializeAws_json1_1Algorithm(output.algorithm, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeBatchInferenceJobResponse = (output, context) => {
    return {
        batchInferenceJob: output.batchInferenceJob !== undefined && output.batchInferenceJob !== null
            ? deserializeAws_json1_1BatchInferenceJob(output.batchInferenceJob, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeCampaignResponse = (output, context) => {
    return {
        campaign: output.campaign !== undefined && output.campaign !== null
            ? deserializeAws_json1_1Campaign(output.campaign, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeDatasetExportJobResponse = (output, context) => {
    return {
        datasetExportJob: output.datasetExportJob !== undefined && output.datasetExportJob !== null
            ? deserializeAws_json1_1DatasetExportJob(output.datasetExportJob, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeDatasetGroupResponse = (output, context) => {
    return {
        datasetGroup: output.datasetGroup !== undefined && output.datasetGroup !== null
            ? deserializeAws_json1_1DatasetGroup(output.datasetGroup, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeDatasetImportJobResponse = (output, context) => {
    return {
        datasetImportJob: output.datasetImportJob !== undefined && output.datasetImportJob !== null
            ? deserializeAws_json1_1DatasetImportJob(output.datasetImportJob, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeDatasetResponse = (output, context) => {
    return {
        dataset: output.dataset !== undefined && output.dataset !== null
            ? deserializeAws_json1_1Dataset(output.dataset, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeEventTrackerResponse = (output, context) => {
    return {
        eventTracker: output.eventTracker !== undefined && output.eventTracker !== null
            ? deserializeAws_json1_1EventTracker(output.eventTracker, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeFeatureTransformationResponse = (output, context) => {
    return {
        featureTransformation: output.featureTransformation !== undefined && output.featureTransformation !== null
            ? deserializeAws_json1_1FeatureTransformation(output.featureTransformation, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeFilterResponse = (output, context) => {
    return {
        filter: output.filter !== undefined && output.filter !== null
            ? deserializeAws_json1_1Filter(output.filter, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeRecipeResponse = (output, context) => {
    return {
        recipe: output.recipe !== undefined && output.recipe !== null
            ? deserializeAws_json1_1Recipe(output.recipe, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeSchemaResponse = (output, context) => {
    return {
        schema: output.schema !== undefined && output.schema !== null
            ? deserializeAws_json1_1DatasetSchema(output.schema, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeSolutionResponse = (output, context) => {
    return {
        solution: output.solution !== undefined && output.solution !== null
            ? deserializeAws_json1_1Solution(output.solution, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeSolutionVersionResponse = (output, context) => {
    return {
        solutionVersion: output.solutionVersion !== undefined && output.solutionVersion !== null
            ? deserializeAws_json1_1SolutionVersion(output.solutionVersion, context)
            : undefined,
    };
};
const deserializeAws_json1_1EventTracker = (output, context) => {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        creationDateTime: output.creationDateTime !== undefined && output.creationDateTime !== null
            ? new Date(Math.round(output.creationDateTime * 1000))
            : undefined,
        datasetGroupArn: output.datasetGroupArn !== undefined && output.datasetGroupArn !== null ? output.datasetGroupArn : undefined,
        eventTrackerArn: output.eventTrackerArn !== undefined && output.eventTrackerArn !== null ? output.eventTrackerArn : undefined,
        lastUpdatedDateTime: output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
            ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        trackingId: output.trackingId !== undefined && output.trackingId !== null ? output.trackingId : undefined,
    };
};
const deserializeAws_json1_1EventTrackers = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EventTrackerSummary(entry, context);
    });
};
const deserializeAws_json1_1EventTrackerSummary = (output, context) => {
    return {
        creationDateTime: output.creationDateTime !== undefined && output.creationDateTime !== null
            ? new Date(Math.round(output.creationDateTime * 1000))
            : undefined,
        eventTrackerArn: output.eventTrackerArn !== undefined && output.eventTrackerArn !== null ? output.eventTrackerArn : undefined,
        lastUpdatedDateTime: output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
            ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1FeatureTransformation = (output, context) => {
    return {
        creationDateTime: output.creationDateTime !== undefined && output.creationDateTime !== null
            ? new Date(Math.round(output.creationDateTime * 1000))
            : undefined,
        defaultParameters: output.defaultParameters !== undefined && output.defaultParameters !== null
            ? deserializeAws_json1_1FeaturizationParameters(output.defaultParameters, context)
            : undefined,
        featureTransformationArn: output.featureTransformationArn !== undefined && output.featureTransformationArn !== null
            ? output.featureTransformationArn
            : undefined,
        lastUpdatedDateTime: output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
            ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1FeatureTransformationParameters = (output, context) => {
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
const deserializeAws_json1_1FeaturizationParameters = (output, context) => {
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
const deserializeAws_json1_1Filter = (output, context) => {
    return {
        creationDateTime: output.creationDateTime !== undefined && output.creationDateTime !== null
            ? new Date(Math.round(output.creationDateTime * 1000))
            : undefined,
        datasetGroupArn: output.datasetGroupArn !== undefined && output.datasetGroupArn !== null ? output.datasetGroupArn : undefined,
        failureReason: output.failureReason !== undefined && output.failureReason !== null ? output.failureReason : undefined,
        filterArn: output.filterArn !== undefined && output.filterArn !== null ? output.filterArn : undefined,
        filterExpression: output.filterExpression !== undefined && output.filterExpression !== null ? output.filterExpression : undefined,
        lastUpdatedDateTime: output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
            ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1Filters = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FilterSummary(entry, context);
    });
};
const deserializeAws_json1_1FilterSummary = (output, context) => {
    return {
        creationDateTime: output.creationDateTime !== undefined && output.creationDateTime !== null
            ? new Date(Math.round(output.creationDateTime * 1000))
            : undefined,
        datasetGroupArn: output.datasetGroupArn !== undefined && output.datasetGroupArn !== null ? output.datasetGroupArn : undefined,
        failureReason: output.failureReason !== undefined && output.failureReason !== null ? output.failureReason : undefined,
        filterArn: output.filterArn !== undefined && output.filterArn !== null ? output.filterArn : undefined,
        lastUpdatedDateTime: output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
            ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1GetSolutionMetricsResponse = (output, context) => {
    return {
        metrics: output.metrics !== undefined && output.metrics !== null
            ? deserializeAws_json1_1Metrics(output.metrics, context)
            : undefined,
        solutionVersionArn: output.solutionVersionArn !== undefined && output.solutionVersionArn !== null
            ? output.solutionVersionArn
            : undefined,
    };
};
const deserializeAws_json1_1HPOConfig = (output, context) => {
    return {
        algorithmHyperParameterRanges: output.algorithmHyperParameterRanges !== undefined && output.algorithmHyperParameterRanges !== null
            ? deserializeAws_json1_1HyperParameterRanges(output.algorithmHyperParameterRanges, context)
            : undefined,
        hpoObjective: output.hpoObjective !== undefined && output.hpoObjective !== null
            ? deserializeAws_json1_1HPOObjective(output.hpoObjective, context)
            : undefined,
        hpoResourceConfig: output.hpoResourceConfig !== undefined && output.hpoResourceConfig !== null
            ? deserializeAws_json1_1HPOResourceConfig(output.hpoResourceConfig, context)
            : undefined,
    };
};
const deserializeAws_json1_1HPOObjective = (output, context) => {
    return {
        metricName: output.metricName !== undefined && output.metricName !== null ? output.metricName : undefined,
        metricRegex: output.metricRegex !== undefined && output.metricRegex !== null ? output.metricRegex : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_json1_1HPOResourceConfig = (output, context) => {
    return {
        maxNumberOfTrainingJobs: output.maxNumberOfTrainingJobs !== undefined && output.maxNumberOfTrainingJobs !== null
            ? output.maxNumberOfTrainingJobs
            : undefined,
        maxParallelTrainingJobs: output.maxParallelTrainingJobs !== undefined && output.maxParallelTrainingJobs !== null
            ? output.maxParallelTrainingJobs
            : undefined,
    };
};
const deserializeAws_json1_1HyperParameterRanges = (output, context) => {
    return {
        categoricalHyperParameterRanges: output.categoricalHyperParameterRanges !== undefined && output.categoricalHyperParameterRanges !== null
            ? deserializeAws_json1_1CategoricalHyperParameterRanges(output.categoricalHyperParameterRanges, context)
            : undefined,
        continuousHyperParameterRanges: output.continuousHyperParameterRanges !== undefined && output.continuousHyperParameterRanges !== null
            ? deserializeAws_json1_1ContinuousHyperParameterRanges(output.continuousHyperParameterRanges, context)
            : undefined,
        integerHyperParameterRanges: output.integerHyperParameterRanges !== undefined && output.integerHyperParameterRanges !== null
            ? deserializeAws_json1_1IntegerHyperParameterRanges(output.integerHyperParameterRanges, context)
            : undefined,
    };
};
const deserializeAws_json1_1HyperParameters = (output, context) => {
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
const deserializeAws_json1_1IntegerHyperParameterRange = (output, context) => {
    return {
        maxValue: output.maxValue !== undefined && output.maxValue !== null ? output.maxValue : undefined,
        minValue: output.minValue !== undefined && output.minValue !== null ? output.minValue : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_json1_1IntegerHyperParameterRanges = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1IntegerHyperParameterRange(entry, context);
    });
};
const deserializeAws_json1_1InvalidInputException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidNextTokenException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ListBatchInferenceJobsResponse = (output, context) => {
    return {
        batchInferenceJobs: output.batchInferenceJobs !== undefined && output.batchInferenceJobs !== null
            ? deserializeAws_json1_1BatchInferenceJobs(output.batchInferenceJobs, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListCampaignsResponse = (output, context) => {
    return {
        campaigns: output.campaigns !== undefined && output.campaigns !== null
            ? deserializeAws_json1_1Campaigns(output.campaigns, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListDatasetExportJobsResponse = (output, context) => {
    return {
        datasetExportJobs: output.datasetExportJobs !== undefined && output.datasetExportJobs !== null
            ? deserializeAws_json1_1DatasetExportJobs(output.datasetExportJobs, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListDatasetGroupsResponse = (output, context) => {
    return {
        datasetGroups: output.datasetGroups !== undefined && output.datasetGroups !== null
            ? deserializeAws_json1_1DatasetGroups(output.datasetGroups, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListDatasetImportJobsResponse = (output, context) => {
    return {
        datasetImportJobs: output.datasetImportJobs !== undefined && output.datasetImportJobs !== null
            ? deserializeAws_json1_1DatasetImportJobs(output.datasetImportJobs, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListDatasetsResponse = (output, context) => {
    return {
        datasets: output.datasets !== undefined && output.datasets !== null
            ? deserializeAws_json1_1Datasets(output.datasets, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListEventTrackersResponse = (output, context) => {
    return {
        eventTrackers: output.eventTrackers !== undefined && output.eventTrackers !== null
            ? deserializeAws_json1_1EventTrackers(output.eventTrackers, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListFiltersResponse = (output, context) => {
    return {
        Filters: output.Filters !== undefined && output.Filters !== null
            ? deserializeAws_json1_1Filters(output.Filters, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListRecipesResponse = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        recipes: output.recipes !== undefined && output.recipes !== null
            ? deserializeAws_json1_1Recipes(output.recipes, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListSchemasResponse = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        schemas: output.schemas !== undefined && output.schemas !== null
            ? deserializeAws_json1_1Schemas(output.schemas, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListSolutionsResponse = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        solutions: output.solutions !== undefined && output.solutions !== null
            ? deserializeAws_json1_1Solutions(output.solutions, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListSolutionVersionsResponse = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        solutionVersions: output.solutionVersions !== undefined && output.solutionVersions !== null
            ? deserializeAws_json1_1SolutionVersions(output.solutionVersions, context)
            : undefined,
    };
};
const deserializeAws_json1_1Metrics = (output, context) => {
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
const deserializeAws_json1_1OptimizationObjective = (output, context) => {
    return {
        itemAttribute: output.itemAttribute !== undefined && output.itemAttribute !== null ? output.itemAttribute : undefined,
        objectiveSensitivity: output.objectiveSensitivity !== undefined && output.objectiveSensitivity !== null
            ? output.objectiveSensitivity
            : undefined,
    };
};
const deserializeAws_json1_1Recipe = (output, context) => {
    return {
        algorithmArn: output.algorithmArn !== undefined && output.algorithmArn !== null ? output.algorithmArn : undefined,
        creationDateTime: output.creationDateTime !== undefined && output.creationDateTime !== null
            ? new Date(Math.round(output.creationDateTime * 1000))
            : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        featureTransformationArn: output.featureTransformationArn !== undefined && output.featureTransformationArn !== null
            ? output.featureTransformationArn
            : undefined,
        lastUpdatedDateTime: output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
            ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        recipeArn: output.recipeArn !== undefined && output.recipeArn !== null ? output.recipeArn : undefined,
        recipeType: output.recipeType !== undefined && output.recipeType !== null ? output.recipeType : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1Recipes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RecipeSummary(entry, context);
    });
};
const deserializeAws_json1_1RecipeSummary = (output, context) => {
    return {
        creationDateTime: output.creationDateTime !== undefined && output.creationDateTime !== null
            ? new Date(Math.round(output.creationDateTime * 1000))
            : undefined,
        lastUpdatedDateTime: output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
            ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        recipeArn: output.recipeArn !== undefined && output.recipeArn !== null ? output.recipeArn : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1ResourceAlreadyExistsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ResourceConfig = (output, context) => {
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
const deserializeAws_json1_1ResourceInUseException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1S3DataConfig = (output, context) => {
    return {
        kmsKeyArn: output.kmsKeyArn !== undefined && output.kmsKeyArn !== null ? output.kmsKeyArn : undefined,
        path: output.path !== undefined && output.path !== null ? output.path : undefined,
    };
};
const deserializeAws_json1_1Schemas = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DatasetSchemaSummary(entry, context);
    });
};
const deserializeAws_json1_1Solution = (output, context) => {
    return {
        autoMLResult: output.autoMLResult !== undefined && output.autoMLResult !== null
            ? deserializeAws_json1_1AutoMLResult(output.autoMLResult, context)
            : undefined,
        creationDateTime: output.creationDateTime !== undefined && output.creationDateTime !== null
            ? new Date(Math.round(output.creationDateTime * 1000))
            : undefined,
        datasetGroupArn: output.datasetGroupArn !== undefined && output.datasetGroupArn !== null ? output.datasetGroupArn : undefined,
        eventType: output.eventType !== undefined && output.eventType !== null ? output.eventType : undefined,
        lastUpdatedDateTime: output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
            ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
            : undefined,
        latestSolutionVersion: output.latestSolutionVersion !== undefined && output.latestSolutionVersion !== null
            ? deserializeAws_json1_1SolutionVersionSummary(output.latestSolutionVersion, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        performAutoML: output.performAutoML !== undefined && output.performAutoML !== null ? output.performAutoML : undefined,
        performHPO: output.performHPO !== undefined && output.performHPO !== null ? output.performHPO : undefined,
        recipeArn: output.recipeArn !== undefined && output.recipeArn !== null ? output.recipeArn : undefined,
        solutionArn: output.solutionArn !== undefined && output.solutionArn !== null ? output.solutionArn : undefined,
        solutionConfig: output.solutionConfig !== undefined && output.solutionConfig !== null
            ? deserializeAws_json1_1SolutionConfig(output.solutionConfig, context)
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1SolutionConfig = (output, context) => {
    return {
        algorithmHyperParameters: output.algorithmHyperParameters !== undefined && output.algorithmHyperParameters !== null
            ? deserializeAws_json1_1HyperParameters(output.algorithmHyperParameters, context)
            : undefined,
        autoMLConfig: output.autoMLConfig !== undefined && output.autoMLConfig !== null
            ? deserializeAws_json1_1AutoMLConfig(output.autoMLConfig, context)
            : undefined,
        eventValueThreshold: output.eventValueThreshold !== undefined && output.eventValueThreshold !== null
            ? output.eventValueThreshold
            : undefined,
        featureTransformationParameters: output.featureTransformationParameters !== undefined && output.featureTransformationParameters !== null
            ? deserializeAws_json1_1FeatureTransformationParameters(output.featureTransformationParameters, context)
            : undefined,
        hpoConfig: output.hpoConfig !== undefined && output.hpoConfig !== null
            ? deserializeAws_json1_1HPOConfig(output.hpoConfig, context)
            : undefined,
        optimizationObjective: output.optimizationObjective !== undefined && output.optimizationObjective !== null
            ? deserializeAws_json1_1OptimizationObjective(output.optimizationObjective, context)
            : undefined,
    };
};
const deserializeAws_json1_1Solutions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SolutionSummary(entry, context);
    });
};
const deserializeAws_json1_1SolutionSummary = (output, context) => {
    return {
        creationDateTime: output.creationDateTime !== undefined && output.creationDateTime !== null
            ? new Date(Math.round(output.creationDateTime * 1000))
            : undefined,
        lastUpdatedDateTime: output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
            ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        solutionArn: output.solutionArn !== undefined && output.solutionArn !== null ? output.solutionArn : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1SolutionVersion = (output, context) => {
    return {
        creationDateTime: output.creationDateTime !== undefined && output.creationDateTime !== null
            ? new Date(Math.round(output.creationDateTime * 1000))
            : undefined,
        datasetGroupArn: output.datasetGroupArn !== undefined && output.datasetGroupArn !== null ? output.datasetGroupArn : undefined,
        eventType: output.eventType !== undefined && output.eventType !== null ? output.eventType : undefined,
        failureReason: output.failureReason !== undefined && output.failureReason !== null ? output.failureReason : undefined,
        lastUpdatedDateTime: output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
            ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
            : undefined,
        performAutoML: output.performAutoML !== undefined && output.performAutoML !== null ? output.performAutoML : undefined,
        performHPO: output.performHPO !== undefined && output.performHPO !== null ? output.performHPO : undefined,
        recipeArn: output.recipeArn !== undefined && output.recipeArn !== null ? output.recipeArn : undefined,
        solutionArn: output.solutionArn !== undefined && output.solutionArn !== null ? output.solutionArn : undefined,
        solutionConfig: output.solutionConfig !== undefined && output.solutionConfig !== null
            ? deserializeAws_json1_1SolutionConfig(output.solutionConfig, context)
            : undefined,
        solutionVersionArn: output.solutionVersionArn !== undefined && output.solutionVersionArn !== null
            ? output.solutionVersionArn
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        trainingHours: output.trainingHours !== undefined && output.trainingHours !== null ? output.trainingHours : undefined,
        trainingMode: output.trainingMode !== undefined && output.trainingMode !== null ? output.trainingMode : undefined,
        tunedHPOParams: output.tunedHPOParams !== undefined && output.tunedHPOParams !== null
            ? deserializeAws_json1_1TunedHPOParams(output.tunedHPOParams, context)
            : undefined,
    };
};
const deserializeAws_json1_1SolutionVersions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SolutionVersionSummary(entry, context);
    });
};
const deserializeAws_json1_1SolutionVersionSummary = (output, context) => {
    return {
        creationDateTime: output.creationDateTime !== undefined && output.creationDateTime !== null
            ? new Date(Math.round(output.creationDateTime * 1000))
            : undefined,
        failureReason: output.failureReason !== undefined && output.failureReason !== null ? output.failureReason : undefined,
        lastUpdatedDateTime: output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
            ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
            : undefined,
        solutionVersionArn: output.solutionVersionArn !== undefined && output.solutionVersionArn !== null
            ? output.solutionVersionArn
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1TunedHPOParams = (output, context) => {
    return {
        algorithmHyperParameters: output.algorithmHyperParameters !== undefined && output.algorithmHyperParameters !== null
            ? deserializeAws_json1_1HyperParameters(output.algorithmHyperParameters, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateCampaignResponse = (output, context) => {
    return {
        campaignArn: output.campaignArn !== undefined && output.campaignArn !== null ? output.campaignArn : undefined,
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