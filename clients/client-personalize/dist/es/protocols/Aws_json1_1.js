import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_json1_1CreateBatchInferenceJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.CreateBatchInferenceJob",
        };
        body = JSON.stringify(serializeAws_json1_1CreateBatchInferenceJobRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateCampaignCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.CreateCampaign",
        };
        body = JSON.stringify(serializeAws_json1_1CreateCampaignRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateDatasetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.CreateDataset",
        };
        body = JSON.stringify(serializeAws_json1_1CreateDatasetRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateDatasetExportJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.CreateDatasetExportJob",
        };
        body = JSON.stringify(serializeAws_json1_1CreateDatasetExportJobRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateDatasetGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.CreateDatasetGroup",
        };
        body = JSON.stringify(serializeAws_json1_1CreateDatasetGroupRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateDatasetImportJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.CreateDatasetImportJob",
        };
        body = JSON.stringify(serializeAws_json1_1CreateDatasetImportJobRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateEventTrackerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.CreateEventTracker",
        };
        body = JSON.stringify(serializeAws_json1_1CreateEventTrackerRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateFilterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.CreateFilter",
        };
        body = JSON.stringify(serializeAws_json1_1CreateFilterRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateSchemaCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.CreateSchema",
        };
        body = JSON.stringify(serializeAws_json1_1CreateSchemaRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateSolutionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.CreateSolution",
        };
        body = JSON.stringify(serializeAws_json1_1CreateSolutionRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateSolutionVersionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.CreateSolutionVersion",
        };
        body = JSON.stringify(serializeAws_json1_1CreateSolutionVersionRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteCampaignCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.DeleteCampaign",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteCampaignRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteDatasetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.DeleteDataset",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteDatasetRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteDatasetGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.DeleteDatasetGroup",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteDatasetGroupRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteEventTrackerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.DeleteEventTracker",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteEventTrackerRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteFilterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.DeleteFilter",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteFilterRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteSchemaCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.DeleteSchema",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteSchemaRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteSolutionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.DeleteSolution",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteSolutionRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeAlgorithmCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.DescribeAlgorithm",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeAlgorithmRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeBatchInferenceJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.DescribeBatchInferenceJob",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeBatchInferenceJobRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeCampaignCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.DescribeCampaign",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeCampaignRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeDatasetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.DescribeDataset",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeDatasetRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeDatasetExportJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.DescribeDatasetExportJob",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeDatasetExportJobRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeDatasetGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.DescribeDatasetGroup",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeDatasetGroupRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeDatasetImportJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.DescribeDatasetImportJob",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeDatasetImportJobRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeEventTrackerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.DescribeEventTracker",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeEventTrackerRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeFeatureTransformationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.DescribeFeatureTransformation",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeFeatureTransformationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeFilterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.DescribeFilter",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeFilterRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeRecipeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.DescribeRecipe",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeRecipeRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeSchemaCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.DescribeSchema",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeSchemaRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeSolutionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.DescribeSolution",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeSolutionRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeSolutionVersionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.DescribeSolutionVersion",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeSolutionVersionRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetSolutionMetricsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.GetSolutionMetrics",
        };
        body = JSON.stringify(serializeAws_json1_1GetSolutionMetricsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListBatchInferenceJobsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.ListBatchInferenceJobs",
        };
        body = JSON.stringify(serializeAws_json1_1ListBatchInferenceJobsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListCampaignsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.ListCampaigns",
        };
        body = JSON.stringify(serializeAws_json1_1ListCampaignsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListDatasetExportJobsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.ListDatasetExportJobs",
        };
        body = JSON.stringify(serializeAws_json1_1ListDatasetExportJobsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListDatasetGroupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.ListDatasetGroups",
        };
        body = JSON.stringify(serializeAws_json1_1ListDatasetGroupsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListDatasetImportJobsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.ListDatasetImportJobs",
        };
        body = JSON.stringify(serializeAws_json1_1ListDatasetImportJobsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListDatasetsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.ListDatasets",
        };
        body = JSON.stringify(serializeAws_json1_1ListDatasetsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListEventTrackersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.ListEventTrackers",
        };
        body = JSON.stringify(serializeAws_json1_1ListEventTrackersRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListFiltersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.ListFilters",
        };
        body = JSON.stringify(serializeAws_json1_1ListFiltersRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListRecipesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.ListRecipes",
        };
        body = JSON.stringify(serializeAws_json1_1ListRecipesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListSchemasCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.ListSchemas",
        };
        body = JSON.stringify(serializeAws_json1_1ListSchemasRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListSolutionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.ListSolutions",
        };
        body = JSON.stringify(serializeAws_json1_1ListSolutionsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListSolutionVersionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.ListSolutionVersions",
        };
        body = JSON.stringify(serializeAws_json1_1ListSolutionVersionsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StopSolutionVersionCreationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.StopSolutionVersionCreation",
        };
        body = JSON.stringify(serializeAws_json1_1StopSolutionVersionCreationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateCampaignCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonPersonalize.UpdateCampaign",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateCampaignRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_json1_1CreateBatchInferenceJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateBatchInferenceJobCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateBatchInferenceJobResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateBatchInferenceJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#LimitExceededException": return [3 /*break*/, 4];
                    case "ResourceAlreadyExistsException": return [3 /*break*/, 6];
                    case "com.amazonaws.personalize#ResourceAlreadyExistsException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.personalize#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.personalize#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateCampaignCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateCampaignCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateCampaignResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateCampaignCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#LimitExceededException": return [3 /*break*/, 4];
                    case "ResourceAlreadyExistsException": return [3 /*break*/, 6];
                    case "com.amazonaws.personalize#ResourceAlreadyExistsException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.personalize#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.personalize#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateDatasetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateDatasetCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateDatasetResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateDatasetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#LimitExceededException": return [3 /*break*/, 4];
                    case "ResourceAlreadyExistsException": return [3 /*break*/, 6];
                    case "com.amazonaws.personalize#ResourceAlreadyExistsException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.personalize#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.personalize#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateDatasetExportJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateDatasetExportJobCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateDatasetExportJobResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateDatasetExportJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#LimitExceededException": return [3 /*break*/, 4];
                    case "ResourceAlreadyExistsException": return [3 /*break*/, 6];
                    case "com.amazonaws.personalize#ResourceAlreadyExistsException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.personalize#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.personalize#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateDatasetGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateDatasetGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateDatasetGroupResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateDatasetGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#LimitExceededException": return [3 /*break*/, 4];
                    case "ResourceAlreadyExistsException": return [3 /*break*/, 6];
                    case "com.amazonaws.personalize#ResourceAlreadyExistsException": return [3 /*break*/, 6];
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
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateDatasetImportJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateDatasetImportJobCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateDatasetImportJobResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateDatasetImportJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#LimitExceededException": return [3 /*break*/, 4];
                    case "ResourceAlreadyExistsException": return [3 /*break*/, 6];
                    case "com.amazonaws.personalize#ResourceAlreadyExistsException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.personalize#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.personalize#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateEventTrackerCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateEventTrackerCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateEventTrackerResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateEventTrackerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#LimitExceededException": return [3 /*break*/, 4];
                    case "ResourceAlreadyExistsException": return [3 /*break*/, 6];
                    case "com.amazonaws.personalize#ResourceAlreadyExistsException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.personalize#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.personalize#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateFilterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateFilterCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateFilterResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateFilterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#LimitExceededException": return [3 /*break*/, 4];
                    case "ResourceAlreadyExistsException": return [3 /*break*/, 6];
                    case "com.amazonaws.personalize#ResourceAlreadyExistsException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.personalize#ResourceNotFoundException": return [3 /*break*/, 8];
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
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateSchemaCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateSchemaCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateSchemaResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateSchemaCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#LimitExceededException": return [3 /*break*/, 4];
                    case "ResourceAlreadyExistsException": return [3 /*break*/, 6];
                    case "com.amazonaws.personalize#ResourceAlreadyExistsException": return [3 /*break*/, 6];
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
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateSolutionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateSolutionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateSolutionResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateSolutionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#LimitExceededException": return [3 /*break*/, 4];
                    case "ResourceAlreadyExistsException": return [3 /*break*/, 6];
                    case "com.amazonaws.personalize#ResourceAlreadyExistsException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.personalize#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.personalize#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateSolutionVersionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateSolutionVersionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateSolutionVersionResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateSolutionVersionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#LimitExceededException": return [3 /*break*/, 4];
                    case "ResourceInUseException": return [3 /*break*/, 6];
                    case "com.amazonaws.personalize#ResourceInUseException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.personalize#ResourceNotFoundException": return [3 /*break*/, 8];
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
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteCampaignCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteCampaignCommandError(output, context)];
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
var deserializeAws_json1_1DeleteCampaignCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "ResourceInUseException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#ResourceInUseException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.personalize#ResourceNotFoundException": return [3 /*break*/, 6];
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
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteDatasetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteDatasetCommandError(output, context)];
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
var deserializeAws_json1_1DeleteDatasetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "ResourceInUseException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#ResourceInUseException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.personalize#ResourceNotFoundException": return [3 /*break*/, 6];
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
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteDatasetGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteDatasetGroupCommandError(output, context)];
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
var deserializeAws_json1_1DeleteDatasetGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "ResourceInUseException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#ResourceInUseException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.personalize#ResourceNotFoundException": return [3 /*break*/, 6];
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
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteEventTrackerCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteEventTrackerCommandError(output, context)];
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
var deserializeAws_json1_1DeleteEventTrackerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "ResourceInUseException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#ResourceInUseException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.personalize#ResourceNotFoundException": return [3 /*break*/, 6];
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
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteFilterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteFilterCommandError(output, context)];
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
var deserializeAws_json1_1DeleteFilterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "ResourceInUseException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#ResourceInUseException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.personalize#ResourceNotFoundException": return [3 /*break*/, 6];
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
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteSchemaCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteSchemaCommandError(output, context)];
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
var deserializeAws_json1_1DeleteSchemaCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "ResourceInUseException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#ResourceInUseException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.personalize#ResourceNotFoundException": return [3 /*break*/, 6];
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
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteSolutionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteSolutionCommandError(output, context)];
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
var deserializeAws_json1_1DeleteSolutionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "ResourceInUseException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#ResourceInUseException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.personalize#ResourceNotFoundException": return [3 /*break*/, 6];
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
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeAlgorithmCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeAlgorithmCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeAlgorithmResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeAlgorithmCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#ResourceNotFoundException": return [3 /*break*/, 4];
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
export var deserializeAws_json1_1DescribeBatchInferenceJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeBatchInferenceJobCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeBatchInferenceJobResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeBatchInferenceJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#ResourceNotFoundException": return [3 /*break*/, 4];
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
export var deserializeAws_json1_1DescribeCampaignCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeCampaignCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeCampaignResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeCampaignCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#ResourceNotFoundException": return [3 /*break*/, 4];
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
export var deserializeAws_json1_1DescribeDatasetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeDatasetCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeDatasetResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeDatasetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#ResourceNotFoundException": return [3 /*break*/, 4];
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
export var deserializeAws_json1_1DescribeDatasetExportJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeDatasetExportJobCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeDatasetExportJobResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeDatasetExportJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#ResourceNotFoundException": return [3 /*break*/, 4];
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
export var deserializeAws_json1_1DescribeDatasetGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeDatasetGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeDatasetGroupResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeDatasetGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#ResourceNotFoundException": return [3 /*break*/, 4];
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
export var deserializeAws_json1_1DescribeDatasetImportJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeDatasetImportJobCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeDatasetImportJobResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeDatasetImportJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#ResourceNotFoundException": return [3 /*break*/, 4];
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
export var deserializeAws_json1_1DescribeEventTrackerCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeEventTrackerCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeEventTrackerResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeEventTrackerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#ResourceNotFoundException": return [3 /*break*/, 4];
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
export var deserializeAws_json1_1DescribeFeatureTransformationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeFeatureTransformationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeFeatureTransformationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeFeatureTransformationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#ResourceNotFoundException": return [3 /*break*/, 4];
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
export var deserializeAws_json1_1DescribeFilterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeFilterCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeFilterResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeFilterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#ResourceNotFoundException": return [3 /*break*/, 4];
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
export var deserializeAws_json1_1DescribeRecipeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeRecipeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeRecipeResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeRecipeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#ResourceNotFoundException": return [3 /*break*/, 4];
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
export var deserializeAws_json1_1DescribeSchemaCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeSchemaCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeSchemaResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeSchemaCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#ResourceNotFoundException": return [3 /*break*/, 4];
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
export var deserializeAws_json1_1DescribeSolutionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeSolutionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeSolutionResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeSolutionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#ResourceNotFoundException": return [3 /*break*/, 4];
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
export var deserializeAws_json1_1DescribeSolutionVersionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeSolutionVersionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeSolutionVersionResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeSolutionVersionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#ResourceNotFoundException": return [3 /*break*/, 4];
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
export var deserializeAws_json1_1GetSolutionMetricsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetSolutionMetricsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetSolutionMetricsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetSolutionMetricsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "ResourceInUseException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#ResourceInUseException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.personalize#ResourceNotFoundException": return [3 /*break*/, 6];
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
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListBatchInferenceJobsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListBatchInferenceJobsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListBatchInferenceJobsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListBatchInferenceJobsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#InvalidNextTokenException": return [3 /*break*/, 4];
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
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListCampaignsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListCampaignsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListCampaignsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListCampaignsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#InvalidNextTokenException": return [3 /*break*/, 4];
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
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListDatasetExportJobsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListDatasetExportJobsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListDatasetExportJobsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListDatasetExportJobsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#InvalidNextTokenException": return [3 /*break*/, 4];
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
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListDatasetGroupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListDatasetGroupsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListDatasetGroupsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListDatasetGroupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidNextTokenException": return [3 /*break*/, 2];
                    case "com.amazonaws.personalize#InvalidNextTokenException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListDatasetImportJobsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListDatasetImportJobsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListDatasetImportJobsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListDatasetImportJobsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#InvalidNextTokenException": return [3 /*break*/, 4];
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
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListDatasetsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListDatasetsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListDatasetsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListDatasetsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#InvalidNextTokenException": return [3 /*break*/, 4];
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
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListEventTrackersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListEventTrackersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListEventTrackersResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListEventTrackersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#InvalidNextTokenException": return [3 /*break*/, 4];
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
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListFiltersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListFiltersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListFiltersResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListFiltersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#InvalidNextTokenException": return [3 /*break*/, 4];
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
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListRecipesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListRecipesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListRecipesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListRecipesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidNextTokenException": return [3 /*break*/, 2];
                    case "com.amazonaws.personalize#InvalidNextTokenException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListSchemasCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListSchemasCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListSchemasResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListSchemasCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidNextTokenException": return [3 /*break*/, 2];
                    case "com.amazonaws.personalize#InvalidNextTokenException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListSolutionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListSolutionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListSolutionsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListSolutionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#InvalidNextTokenException": return [3 /*break*/, 4];
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
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListSolutionVersionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListSolutionVersionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListSolutionVersionsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListSolutionVersionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#InvalidNextTokenException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.personalize#ResourceNotFoundException": return [3 /*break*/, 6];
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
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1StopSolutionVersionCreationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StopSolutionVersionCreationCommandError(output, context)];
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
var deserializeAws_json1_1StopSolutionVersionCreationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "ResourceInUseException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#ResourceInUseException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.personalize#ResourceNotFoundException": return [3 /*break*/, 6];
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
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateCampaignCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateCampaignCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateCampaignResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateCampaignCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.personalize#InvalidInputException": return [3 /*break*/, 2];
                    case "ResourceInUseException": return [3 /*break*/, 4];
                    case "com.amazonaws.personalize#ResourceInUseException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.personalize#ResourceNotFoundException": return [3 /*break*/, 6];
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
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
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
var deserializeAws_json1_1InvalidInputExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidInputException(body, context);
        contents = __assign({ name: "InvalidInputException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidNextTokenExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidNextTokenException(body, context);
        contents = __assign({ name: "InvalidNextTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1LimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1LimitExceededException(body, context);
        contents = __assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var serializeAws_json1_1ArnList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1AutoMLConfig = function (input, context) {
    return __assign(__assign({}, (input.metricName !== undefined && input.metricName !== null && { metricName: input.metricName })), (input.recipeList !== undefined &&
        input.recipeList !== null && { recipeList: serializeAws_json1_1ArnList(input.recipeList, context) }));
};
var serializeAws_json1_1BatchInferenceJobConfig = function (input, context) {
    return __assign({}, (input.itemExplorationConfig !== undefined &&
        input.itemExplorationConfig !== null && {
        itemExplorationConfig: serializeAws_json1_1HyperParameters(input.itemExplorationConfig, context),
    }));
};
var serializeAws_json1_1BatchInferenceJobInput = function (input, context) {
    return __assign({}, (input.s3DataSource !== undefined &&
        input.s3DataSource !== null && { s3DataSource: serializeAws_json1_1S3DataConfig(input.s3DataSource, context) }));
};
var serializeAws_json1_1BatchInferenceJobOutput = function (input, context) {
    return __assign({}, (input.s3DataDestination !== undefined &&
        input.s3DataDestination !== null && {
        s3DataDestination: serializeAws_json1_1S3DataConfig(input.s3DataDestination, context),
    }));
};
var serializeAws_json1_1CampaignConfig = function (input, context) {
    return __assign({}, (input.itemExplorationConfig !== undefined &&
        input.itemExplorationConfig !== null && {
        itemExplorationConfig: serializeAws_json1_1HyperParameters(input.itemExplorationConfig, context),
    }));
};
var serializeAws_json1_1CategoricalHyperParameterRange = function (input, context) {
    return __assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.values !== undefined &&
        input.values !== null && { values: serializeAws_json1_1CategoricalValues(input.values, context) }));
};
var serializeAws_json1_1CategoricalHyperParameterRanges = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1CategoricalHyperParameterRange(entry, context);
    });
};
var serializeAws_json1_1CategoricalValues = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ContinuousHyperParameterRange = function (input, context) {
    return __assign(__assign(__assign({}, (input.maxValue !== undefined && input.maxValue !== null && { maxValue: input.maxValue })), (input.minValue !== undefined && input.minValue !== null && { minValue: input.minValue })), (input.name !== undefined && input.name !== null && { name: input.name }));
};
var serializeAws_json1_1ContinuousHyperParameterRanges = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ContinuousHyperParameterRange(entry, context);
    });
};
var serializeAws_json1_1CreateBatchInferenceJobRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.batchInferenceJobConfig !== undefined &&
        input.batchInferenceJobConfig !== null && {
        batchInferenceJobConfig: serializeAws_json1_1BatchInferenceJobConfig(input.batchInferenceJobConfig, context),
    })), (input.filterArn !== undefined && input.filterArn !== null && { filterArn: input.filterArn })), (input.jobInput !== undefined &&
        input.jobInput !== null && { jobInput: serializeAws_json1_1BatchInferenceJobInput(input.jobInput, context) })), (input.jobName !== undefined && input.jobName !== null && { jobName: input.jobName })), (input.jobOutput !== undefined &&
        input.jobOutput !== null && { jobOutput: serializeAws_json1_1BatchInferenceJobOutput(input.jobOutput, context) })), (input.numResults !== undefined && input.numResults !== null && { numResults: input.numResults })), (input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn })), (input.solutionVersionArn !== undefined &&
        input.solutionVersionArn !== null && { solutionVersionArn: input.solutionVersionArn }));
};
var serializeAws_json1_1CreateCampaignRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.campaignConfig !== undefined &&
        input.campaignConfig !== null && {
        campaignConfig: serializeAws_json1_1CampaignConfig(input.campaignConfig, context),
    })), (input.minProvisionedTPS !== undefined &&
        input.minProvisionedTPS !== null && { minProvisionedTPS: input.minProvisionedTPS })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.solutionVersionArn !== undefined &&
        input.solutionVersionArn !== null && { solutionVersionArn: input.solutionVersionArn }));
};
var serializeAws_json1_1CreateDatasetExportJobRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.datasetArn !== undefined && input.datasetArn !== null && { datasetArn: input.datasetArn })), (input.ingestionMode !== undefined && input.ingestionMode !== null && { ingestionMode: input.ingestionMode })), (input.jobName !== undefined && input.jobName !== null && { jobName: input.jobName })), (input.jobOutput !== undefined &&
        input.jobOutput !== null && { jobOutput: serializeAws_json1_1DatasetExportJobOutput(input.jobOutput, context) })), (input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }));
};
var serializeAws_json1_1CreateDatasetGroupRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.kmsKeyArn !== undefined && input.kmsKeyArn !== null && { kmsKeyArn: input.kmsKeyArn })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }));
};
var serializeAws_json1_1CreateDatasetImportJobRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.dataSource !== undefined &&
        input.dataSource !== null && { dataSource: serializeAws_json1_1DataSource(input.dataSource, context) })), (input.datasetArn !== undefined && input.datasetArn !== null && { datasetArn: input.datasetArn })), (input.jobName !== undefined && input.jobName !== null && { jobName: input.jobName })), (input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }));
};
var serializeAws_json1_1CreateDatasetRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.datasetGroupArn !== undefined &&
        input.datasetGroupArn !== null && { datasetGroupArn: input.datasetGroupArn })), (input.datasetType !== undefined && input.datasetType !== null && { datasetType: input.datasetType })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.schemaArn !== undefined && input.schemaArn !== null && { schemaArn: input.schemaArn }));
};
var serializeAws_json1_1CreateEventTrackerRequest = function (input, context) {
    return __assign(__assign({}, (input.datasetGroupArn !== undefined &&
        input.datasetGroupArn !== null && { datasetGroupArn: input.datasetGroupArn })), (input.name !== undefined && input.name !== null && { name: input.name }));
};
var serializeAws_json1_1CreateFilterRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.datasetGroupArn !== undefined &&
        input.datasetGroupArn !== null && { datasetGroupArn: input.datasetGroupArn })), (input.filterExpression !== undefined &&
        input.filterExpression !== null && { filterExpression: input.filterExpression })), (input.name !== undefined && input.name !== null && { name: input.name }));
};
var serializeAws_json1_1CreateSchemaRequest = function (input, context) {
    return __assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.schema !== undefined && input.schema !== null && { schema: input.schema }));
};
var serializeAws_json1_1CreateSolutionRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.datasetGroupArn !== undefined &&
        input.datasetGroupArn !== null && { datasetGroupArn: input.datasetGroupArn })), (input.eventType !== undefined && input.eventType !== null && { eventType: input.eventType })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.performAutoML !== undefined && input.performAutoML !== null && { performAutoML: input.performAutoML })), (input.performHPO !== undefined && input.performHPO !== null && { performHPO: input.performHPO })), (input.recipeArn !== undefined && input.recipeArn !== null && { recipeArn: input.recipeArn })), (input.solutionConfig !== undefined &&
        input.solutionConfig !== null && {
        solutionConfig: serializeAws_json1_1SolutionConfig(input.solutionConfig, context),
    }));
};
var serializeAws_json1_1CreateSolutionVersionRequest = function (input, context) {
    return __assign(__assign({}, (input.solutionArn !== undefined && input.solutionArn !== null && { solutionArn: input.solutionArn })), (input.trainingMode !== undefined && input.trainingMode !== null && { trainingMode: input.trainingMode }));
};
var serializeAws_json1_1DatasetExportJobOutput = function (input, context) {
    return __assign({}, (input.s3DataDestination !== undefined &&
        input.s3DataDestination !== null && {
        s3DataDestination: serializeAws_json1_1S3DataConfig(input.s3DataDestination, context),
    }));
};
var serializeAws_json1_1DataSource = function (input, context) {
    return __assign({}, (input.dataLocation !== undefined && input.dataLocation !== null && { dataLocation: input.dataLocation }));
};
var serializeAws_json1_1DeleteCampaignRequest = function (input, context) {
    return __assign({}, (input.campaignArn !== undefined && input.campaignArn !== null && { campaignArn: input.campaignArn }));
};
var serializeAws_json1_1DeleteDatasetGroupRequest = function (input, context) {
    return __assign({}, (input.datasetGroupArn !== undefined &&
        input.datasetGroupArn !== null && { datasetGroupArn: input.datasetGroupArn }));
};
var serializeAws_json1_1DeleteDatasetRequest = function (input, context) {
    return __assign({}, (input.datasetArn !== undefined && input.datasetArn !== null && { datasetArn: input.datasetArn }));
};
var serializeAws_json1_1DeleteEventTrackerRequest = function (input, context) {
    return __assign({}, (input.eventTrackerArn !== undefined &&
        input.eventTrackerArn !== null && { eventTrackerArn: input.eventTrackerArn }));
};
var serializeAws_json1_1DeleteFilterRequest = function (input, context) {
    return __assign({}, (input.filterArn !== undefined && input.filterArn !== null && { filterArn: input.filterArn }));
};
var serializeAws_json1_1DeleteSchemaRequest = function (input, context) {
    return __assign({}, (input.schemaArn !== undefined && input.schemaArn !== null && { schemaArn: input.schemaArn }));
};
var serializeAws_json1_1DeleteSolutionRequest = function (input, context) {
    return __assign({}, (input.solutionArn !== undefined && input.solutionArn !== null && { solutionArn: input.solutionArn }));
};
var serializeAws_json1_1DescribeAlgorithmRequest = function (input, context) {
    return __assign({}, (input.algorithmArn !== undefined && input.algorithmArn !== null && { algorithmArn: input.algorithmArn }));
};
var serializeAws_json1_1DescribeBatchInferenceJobRequest = function (input, context) {
    return __assign({}, (input.batchInferenceJobArn !== undefined &&
        input.batchInferenceJobArn !== null && { batchInferenceJobArn: input.batchInferenceJobArn }));
};
var serializeAws_json1_1DescribeCampaignRequest = function (input, context) {
    return __assign({}, (input.campaignArn !== undefined && input.campaignArn !== null && { campaignArn: input.campaignArn }));
};
var serializeAws_json1_1DescribeDatasetExportJobRequest = function (input, context) {
    return __assign({}, (input.datasetExportJobArn !== undefined &&
        input.datasetExportJobArn !== null && { datasetExportJobArn: input.datasetExportJobArn }));
};
var serializeAws_json1_1DescribeDatasetGroupRequest = function (input, context) {
    return __assign({}, (input.datasetGroupArn !== undefined &&
        input.datasetGroupArn !== null && { datasetGroupArn: input.datasetGroupArn }));
};
var serializeAws_json1_1DescribeDatasetImportJobRequest = function (input, context) {
    return __assign({}, (input.datasetImportJobArn !== undefined &&
        input.datasetImportJobArn !== null && { datasetImportJobArn: input.datasetImportJobArn }));
};
var serializeAws_json1_1DescribeDatasetRequest = function (input, context) {
    return __assign({}, (input.datasetArn !== undefined && input.datasetArn !== null && { datasetArn: input.datasetArn }));
};
var serializeAws_json1_1DescribeEventTrackerRequest = function (input, context) {
    return __assign({}, (input.eventTrackerArn !== undefined &&
        input.eventTrackerArn !== null && { eventTrackerArn: input.eventTrackerArn }));
};
var serializeAws_json1_1DescribeFeatureTransformationRequest = function (input, context) {
    return __assign({}, (input.featureTransformationArn !== undefined &&
        input.featureTransformationArn !== null && { featureTransformationArn: input.featureTransformationArn }));
};
var serializeAws_json1_1DescribeFilterRequest = function (input, context) {
    return __assign({}, (input.filterArn !== undefined && input.filterArn !== null && { filterArn: input.filterArn }));
};
var serializeAws_json1_1DescribeRecipeRequest = function (input, context) {
    return __assign({}, (input.recipeArn !== undefined && input.recipeArn !== null && { recipeArn: input.recipeArn }));
};
var serializeAws_json1_1DescribeSchemaRequest = function (input, context) {
    return __assign({}, (input.schemaArn !== undefined && input.schemaArn !== null && { schemaArn: input.schemaArn }));
};
var serializeAws_json1_1DescribeSolutionRequest = function (input, context) {
    return __assign({}, (input.solutionArn !== undefined && input.solutionArn !== null && { solutionArn: input.solutionArn }));
};
var serializeAws_json1_1DescribeSolutionVersionRequest = function (input, context) {
    return __assign({}, (input.solutionVersionArn !== undefined &&
        input.solutionVersionArn !== null && { solutionVersionArn: input.solutionVersionArn }));
};
var serializeAws_json1_1FeatureTransformationParameters = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_json1_1GetSolutionMetricsRequest = function (input, context) {
    return __assign({}, (input.solutionVersionArn !== undefined &&
        input.solutionVersionArn !== null && { solutionVersionArn: input.solutionVersionArn }));
};
var serializeAws_json1_1HPOConfig = function (input, context) {
    return __assign(__assign(__assign({}, (input.algorithmHyperParameterRanges !== undefined &&
        input.algorithmHyperParameterRanges !== null && {
        algorithmHyperParameterRanges: serializeAws_json1_1HyperParameterRanges(input.algorithmHyperParameterRanges, context),
    })), (input.hpoObjective !== undefined &&
        input.hpoObjective !== null && { hpoObjective: serializeAws_json1_1HPOObjective(input.hpoObjective, context) })), (input.hpoResourceConfig !== undefined &&
        input.hpoResourceConfig !== null && {
        hpoResourceConfig: serializeAws_json1_1HPOResourceConfig(input.hpoResourceConfig, context),
    }));
};
var serializeAws_json1_1HPOObjective = function (input, context) {
    return __assign(__assign(__assign({}, (input.metricName !== undefined && input.metricName !== null && { metricName: input.metricName })), (input.metricRegex !== undefined && input.metricRegex !== null && { metricRegex: input.metricRegex })), (input.type !== undefined && input.type !== null && { type: input.type }));
};
var serializeAws_json1_1HPOResourceConfig = function (input, context) {
    return __assign(__assign({}, (input.maxNumberOfTrainingJobs !== undefined &&
        input.maxNumberOfTrainingJobs !== null && { maxNumberOfTrainingJobs: input.maxNumberOfTrainingJobs })), (input.maxParallelTrainingJobs !== undefined &&
        input.maxParallelTrainingJobs !== null && { maxParallelTrainingJobs: input.maxParallelTrainingJobs }));
};
var serializeAws_json1_1HyperParameterRanges = function (input, context) {
    return __assign(__assign(__assign({}, (input.categoricalHyperParameterRanges !== undefined &&
        input.categoricalHyperParameterRanges !== null && {
        categoricalHyperParameterRanges: serializeAws_json1_1CategoricalHyperParameterRanges(input.categoricalHyperParameterRanges, context),
    })), (input.continuousHyperParameterRanges !== undefined &&
        input.continuousHyperParameterRanges !== null && {
        continuousHyperParameterRanges: serializeAws_json1_1ContinuousHyperParameterRanges(input.continuousHyperParameterRanges, context),
    })), (input.integerHyperParameterRanges !== undefined &&
        input.integerHyperParameterRanges !== null && {
        integerHyperParameterRanges: serializeAws_json1_1IntegerHyperParameterRanges(input.integerHyperParameterRanges, context),
    }));
};
var serializeAws_json1_1HyperParameters = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_json1_1IntegerHyperParameterRange = function (input, context) {
    return __assign(__assign(__assign({}, (input.maxValue !== undefined && input.maxValue !== null && { maxValue: input.maxValue })), (input.minValue !== undefined && input.minValue !== null && { minValue: input.minValue })), (input.name !== undefined && input.name !== null && { name: input.name }));
};
var serializeAws_json1_1IntegerHyperParameterRanges = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1IntegerHyperParameterRange(entry, context);
    });
};
var serializeAws_json1_1ListBatchInferenceJobsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.solutionVersionArn !== undefined &&
        input.solutionVersionArn !== null && { solutionVersionArn: input.solutionVersionArn }));
};
var serializeAws_json1_1ListCampaignsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.solutionArn !== undefined && input.solutionArn !== null && { solutionArn: input.solutionArn }));
};
var serializeAws_json1_1ListDatasetExportJobsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.datasetArn !== undefined && input.datasetArn !== null && { datasetArn: input.datasetArn })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }));
};
var serializeAws_json1_1ListDatasetGroupsRequest = function (input, context) {
    return __assign(__assign({}, (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }));
};
var serializeAws_json1_1ListDatasetImportJobsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.datasetArn !== undefined && input.datasetArn !== null && { datasetArn: input.datasetArn })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }));
};
var serializeAws_json1_1ListDatasetsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.datasetGroupArn !== undefined &&
        input.datasetGroupArn !== null && { datasetGroupArn: input.datasetGroupArn })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }));
};
var serializeAws_json1_1ListEventTrackersRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.datasetGroupArn !== undefined &&
        input.datasetGroupArn !== null && { datasetGroupArn: input.datasetGroupArn })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }));
};
var serializeAws_json1_1ListFiltersRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.datasetGroupArn !== undefined &&
        input.datasetGroupArn !== null && { datasetGroupArn: input.datasetGroupArn })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }));
};
var serializeAws_json1_1ListRecipesRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.recipeProvider !== undefined &&
        input.recipeProvider !== null && { recipeProvider: input.recipeProvider }));
};
var serializeAws_json1_1ListSchemasRequest = function (input, context) {
    return __assign(__assign({}, (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }));
};
var serializeAws_json1_1ListSolutionsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.datasetGroupArn !== undefined &&
        input.datasetGroupArn !== null && { datasetGroupArn: input.datasetGroupArn })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }));
};
var serializeAws_json1_1ListSolutionVersionsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.solutionArn !== undefined && input.solutionArn !== null && { solutionArn: input.solutionArn }));
};
var serializeAws_json1_1OptimizationObjective = function (input, context) {
    return __assign(__assign({}, (input.itemAttribute !== undefined && input.itemAttribute !== null && { itemAttribute: input.itemAttribute })), (input.objectiveSensitivity !== undefined &&
        input.objectiveSensitivity !== null && { objectiveSensitivity: input.objectiveSensitivity }));
};
var serializeAws_json1_1S3DataConfig = function (input, context) {
    return __assign(__assign({}, (input.kmsKeyArn !== undefined && input.kmsKeyArn !== null && { kmsKeyArn: input.kmsKeyArn })), (input.path !== undefined && input.path !== null && { path: input.path }));
};
var serializeAws_json1_1SolutionConfig = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.algorithmHyperParameters !== undefined &&
        input.algorithmHyperParameters !== null && {
        algorithmHyperParameters: serializeAws_json1_1HyperParameters(input.algorithmHyperParameters, context),
    })), (input.autoMLConfig !== undefined &&
        input.autoMLConfig !== null && { autoMLConfig: serializeAws_json1_1AutoMLConfig(input.autoMLConfig, context) })), (input.eventValueThreshold !== undefined &&
        input.eventValueThreshold !== null && { eventValueThreshold: input.eventValueThreshold })), (input.featureTransformationParameters !== undefined &&
        input.featureTransformationParameters !== null && {
        featureTransformationParameters: serializeAws_json1_1FeatureTransformationParameters(input.featureTransformationParameters, context),
    })), (input.hpoConfig !== undefined &&
        input.hpoConfig !== null && { hpoConfig: serializeAws_json1_1HPOConfig(input.hpoConfig, context) })), (input.optimizationObjective !== undefined &&
        input.optimizationObjective !== null && {
        optimizationObjective: serializeAws_json1_1OptimizationObjective(input.optimizationObjective, context),
    }));
};
var serializeAws_json1_1StopSolutionVersionCreationRequest = function (input, context) {
    return __assign({}, (input.solutionVersionArn !== undefined &&
        input.solutionVersionArn !== null && { solutionVersionArn: input.solutionVersionArn }));
};
var serializeAws_json1_1UpdateCampaignRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.campaignArn !== undefined && input.campaignArn !== null && { campaignArn: input.campaignArn })), (input.campaignConfig !== undefined &&
        input.campaignConfig !== null && {
        campaignConfig: serializeAws_json1_1CampaignConfig(input.campaignConfig, context),
    })), (input.minProvisionedTPS !== undefined &&
        input.minProvisionedTPS !== null && { minProvisionedTPS: input.minProvisionedTPS })), (input.solutionVersionArn !== undefined &&
        input.solutionVersionArn !== null && { solutionVersionArn: input.solutionVersionArn }));
};
var deserializeAws_json1_1Algorithm = function (output, context) {
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
var deserializeAws_json1_1AlgorithmImage = function (output, context) {
    return {
        dockerURI: output.dockerURI !== undefined && output.dockerURI !== null ? output.dockerURI : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
var deserializeAws_json1_1ArnList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1AutoMLConfig = function (output, context) {
    return {
        metricName: output.metricName !== undefined && output.metricName !== null ? output.metricName : undefined,
        recipeList: output.recipeList !== undefined && output.recipeList !== null
            ? deserializeAws_json1_1ArnList(output.recipeList, context)
            : undefined,
    };
};
var deserializeAws_json1_1AutoMLResult = function (output, context) {
    return {
        bestRecipeArn: output.bestRecipeArn !== undefined && output.bestRecipeArn !== null ? output.bestRecipeArn : undefined,
    };
};
var deserializeAws_json1_1BatchInferenceJob = function (output, context) {
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
var deserializeAws_json1_1BatchInferenceJobConfig = function (output, context) {
    return {
        itemExplorationConfig: output.itemExplorationConfig !== undefined && output.itemExplorationConfig !== null
            ? deserializeAws_json1_1HyperParameters(output.itemExplorationConfig, context)
            : undefined,
    };
};
var deserializeAws_json1_1BatchInferenceJobInput = function (output, context) {
    return {
        s3DataSource: output.s3DataSource !== undefined && output.s3DataSource !== null
            ? deserializeAws_json1_1S3DataConfig(output.s3DataSource, context)
            : undefined,
    };
};
var deserializeAws_json1_1BatchInferenceJobOutput = function (output, context) {
    return {
        s3DataDestination: output.s3DataDestination !== undefined && output.s3DataDestination !== null
            ? deserializeAws_json1_1S3DataConfig(output.s3DataDestination, context)
            : undefined,
    };
};
var deserializeAws_json1_1BatchInferenceJobs = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BatchInferenceJobSummary(entry, context);
    });
};
var deserializeAws_json1_1BatchInferenceJobSummary = function (output, context) {
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
var deserializeAws_json1_1Campaign = function (output, context) {
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
var deserializeAws_json1_1CampaignConfig = function (output, context) {
    return {
        itemExplorationConfig: output.itemExplorationConfig !== undefined && output.itemExplorationConfig !== null
            ? deserializeAws_json1_1HyperParameters(output.itemExplorationConfig, context)
            : undefined,
    };
};
var deserializeAws_json1_1Campaigns = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CampaignSummary(entry, context);
    });
};
var deserializeAws_json1_1CampaignSummary = function (output, context) {
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
var deserializeAws_json1_1CampaignUpdateSummary = function (output, context) {
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
var deserializeAws_json1_1CategoricalHyperParameterRange = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        values: output.values !== undefined && output.values !== null
            ? deserializeAws_json1_1CategoricalValues(output.values, context)
            : undefined,
    };
};
var deserializeAws_json1_1CategoricalHyperParameterRanges = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CategoricalHyperParameterRange(entry, context);
    });
};
var deserializeAws_json1_1CategoricalValues = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1ContinuousHyperParameterRange = function (output, context) {
    return {
        maxValue: output.maxValue !== undefined && output.maxValue !== null ? output.maxValue : undefined,
        minValue: output.minValue !== undefined && output.minValue !== null ? output.minValue : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
var deserializeAws_json1_1ContinuousHyperParameterRanges = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ContinuousHyperParameterRange(entry, context);
    });
};
var deserializeAws_json1_1CreateBatchInferenceJobResponse = function (output, context) {
    return {
        batchInferenceJobArn: output.batchInferenceJobArn !== undefined && output.batchInferenceJobArn !== null
            ? output.batchInferenceJobArn
            : undefined,
    };
};
var deserializeAws_json1_1CreateCampaignResponse = function (output, context) {
    return {
        campaignArn: output.campaignArn !== undefined && output.campaignArn !== null ? output.campaignArn : undefined,
    };
};
var deserializeAws_json1_1CreateDatasetExportJobResponse = function (output, context) {
    return {
        datasetExportJobArn: output.datasetExportJobArn !== undefined && output.datasetExportJobArn !== null
            ? output.datasetExportJobArn
            : undefined,
    };
};
var deserializeAws_json1_1CreateDatasetGroupResponse = function (output, context) {
    return {
        datasetGroupArn: output.datasetGroupArn !== undefined && output.datasetGroupArn !== null ? output.datasetGroupArn : undefined,
    };
};
var deserializeAws_json1_1CreateDatasetImportJobResponse = function (output, context) {
    return {
        datasetImportJobArn: output.datasetImportJobArn !== undefined && output.datasetImportJobArn !== null
            ? output.datasetImportJobArn
            : undefined,
    };
};
var deserializeAws_json1_1CreateDatasetResponse = function (output, context) {
    return {
        datasetArn: output.datasetArn !== undefined && output.datasetArn !== null ? output.datasetArn : undefined,
    };
};
var deserializeAws_json1_1CreateEventTrackerResponse = function (output, context) {
    return {
        eventTrackerArn: output.eventTrackerArn !== undefined && output.eventTrackerArn !== null ? output.eventTrackerArn : undefined,
        trackingId: output.trackingId !== undefined && output.trackingId !== null ? output.trackingId : undefined,
    };
};
var deserializeAws_json1_1CreateFilterResponse = function (output, context) {
    return {
        filterArn: output.filterArn !== undefined && output.filterArn !== null ? output.filterArn : undefined,
    };
};
var deserializeAws_json1_1CreateSchemaResponse = function (output, context) {
    return {
        schemaArn: output.schemaArn !== undefined && output.schemaArn !== null ? output.schemaArn : undefined,
    };
};
var deserializeAws_json1_1CreateSolutionResponse = function (output, context) {
    return {
        solutionArn: output.solutionArn !== undefined && output.solutionArn !== null ? output.solutionArn : undefined,
    };
};
var deserializeAws_json1_1CreateSolutionVersionResponse = function (output, context) {
    return {
        solutionVersionArn: output.solutionVersionArn !== undefined && output.solutionVersionArn !== null
            ? output.solutionVersionArn
            : undefined,
    };
};
var deserializeAws_json1_1Dataset = function (output, context) {
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
var deserializeAws_json1_1DatasetExportJob = function (output, context) {
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
var deserializeAws_json1_1DatasetExportJobOutput = function (output, context) {
    return {
        s3DataDestination: output.s3DataDestination !== undefined && output.s3DataDestination !== null
            ? deserializeAws_json1_1S3DataConfig(output.s3DataDestination, context)
            : undefined,
    };
};
var deserializeAws_json1_1DatasetExportJobs = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DatasetExportJobSummary(entry, context);
    });
};
var deserializeAws_json1_1DatasetExportJobSummary = function (output, context) {
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
var deserializeAws_json1_1DatasetGroup = function (output, context) {
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
var deserializeAws_json1_1DatasetGroups = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DatasetGroupSummary(entry, context);
    });
};
var deserializeAws_json1_1DatasetGroupSummary = function (output, context) {
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
var deserializeAws_json1_1DatasetImportJob = function (output, context) {
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
var deserializeAws_json1_1DatasetImportJobs = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DatasetImportJobSummary(entry, context);
    });
};
var deserializeAws_json1_1DatasetImportJobSummary = function (output, context) {
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
var deserializeAws_json1_1Datasets = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DatasetSummary(entry, context);
    });
};
var deserializeAws_json1_1DatasetSchema = function (output, context) {
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
var deserializeAws_json1_1DatasetSchemaSummary = function (output, context) {
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
var deserializeAws_json1_1DatasetSummary = function (output, context) {
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
var deserializeAws_json1_1DataSource = function (output, context) {
    return {
        dataLocation: output.dataLocation !== undefined && output.dataLocation !== null ? output.dataLocation : undefined,
    };
};
var deserializeAws_json1_1DefaultCategoricalHyperParameterRange = function (output, context) {
    return {
        isTunable: output.isTunable !== undefined && output.isTunable !== null ? output.isTunable : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        values: output.values !== undefined && output.values !== null
            ? deserializeAws_json1_1CategoricalValues(output.values, context)
            : undefined,
    };
};
var deserializeAws_json1_1DefaultCategoricalHyperParameterRanges = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DefaultCategoricalHyperParameterRange(entry, context);
    });
};
var deserializeAws_json1_1DefaultContinuousHyperParameterRange = function (output, context) {
    return {
        isTunable: output.isTunable !== undefined && output.isTunable !== null ? output.isTunable : undefined,
        maxValue: output.maxValue !== undefined && output.maxValue !== null ? output.maxValue : undefined,
        minValue: output.minValue !== undefined && output.minValue !== null ? output.minValue : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
var deserializeAws_json1_1DefaultContinuousHyperParameterRanges = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DefaultContinuousHyperParameterRange(entry, context);
    });
};
var deserializeAws_json1_1DefaultHyperParameterRanges = function (output, context) {
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
var deserializeAws_json1_1DefaultIntegerHyperParameterRange = function (output, context) {
    return {
        isTunable: output.isTunable !== undefined && output.isTunable !== null ? output.isTunable : undefined,
        maxValue: output.maxValue !== undefined && output.maxValue !== null ? output.maxValue : undefined,
        minValue: output.minValue !== undefined && output.minValue !== null ? output.minValue : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
var deserializeAws_json1_1DefaultIntegerHyperParameterRanges = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DefaultIntegerHyperParameterRange(entry, context);
    });
};
var deserializeAws_json1_1DescribeAlgorithmResponse = function (output, context) {
    return {
        algorithm: output.algorithm !== undefined && output.algorithm !== null
            ? deserializeAws_json1_1Algorithm(output.algorithm, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeBatchInferenceJobResponse = function (output, context) {
    return {
        batchInferenceJob: output.batchInferenceJob !== undefined && output.batchInferenceJob !== null
            ? deserializeAws_json1_1BatchInferenceJob(output.batchInferenceJob, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeCampaignResponse = function (output, context) {
    return {
        campaign: output.campaign !== undefined && output.campaign !== null
            ? deserializeAws_json1_1Campaign(output.campaign, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeDatasetExportJobResponse = function (output, context) {
    return {
        datasetExportJob: output.datasetExportJob !== undefined && output.datasetExportJob !== null
            ? deserializeAws_json1_1DatasetExportJob(output.datasetExportJob, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeDatasetGroupResponse = function (output, context) {
    return {
        datasetGroup: output.datasetGroup !== undefined && output.datasetGroup !== null
            ? deserializeAws_json1_1DatasetGroup(output.datasetGroup, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeDatasetImportJobResponse = function (output, context) {
    return {
        datasetImportJob: output.datasetImportJob !== undefined && output.datasetImportJob !== null
            ? deserializeAws_json1_1DatasetImportJob(output.datasetImportJob, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeDatasetResponse = function (output, context) {
    return {
        dataset: output.dataset !== undefined && output.dataset !== null
            ? deserializeAws_json1_1Dataset(output.dataset, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeEventTrackerResponse = function (output, context) {
    return {
        eventTracker: output.eventTracker !== undefined && output.eventTracker !== null
            ? deserializeAws_json1_1EventTracker(output.eventTracker, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeFeatureTransformationResponse = function (output, context) {
    return {
        featureTransformation: output.featureTransformation !== undefined && output.featureTransformation !== null
            ? deserializeAws_json1_1FeatureTransformation(output.featureTransformation, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeFilterResponse = function (output, context) {
    return {
        filter: output.filter !== undefined && output.filter !== null
            ? deserializeAws_json1_1Filter(output.filter, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeRecipeResponse = function (output, context) {
    return {
        recipe: output.recipe !== undefined && output.recipe !== null
            ? deserializeAws_json1_1Recipe(output.recipe, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeSchemaResponse = function (output, context) {
    return {
        schema: output.schema !== undefined && output.schema !== null
            ? deserializeAws_json1_1DatasetSchema(output.schema, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeSolutionResponse = function (output, context) {
    return {
        solution: output.solution !== undefined && output.solution !== null
            ? deserializeAws_json1_1Solution(output.solution, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeSolutionVersionResponse = function (output, context) {
    return {
        solutionVersion: output.solutionVersion !== undefined && output.solutionVersion !== null
            ? deserializeAws_json1_1SolutionVersion(output.solutionVersion, context)
            : undefined,
    };
};
var deserializeAws_json1_1EventTracker = function (output, context) {
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
var deserializeAws_json1_1EventTrackers = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EventTrackerSummary(entry, context);
    });
};
var deserializeAws_json1_1EventTrackerSummary = function (output, context) {
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
var deserializeAws_json1_1FeatureTransformation = function (output, context) {
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
var deserializeAws_json1_1FeatureTransformationParameters = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_json1_1FeaturizationParameters = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_json1_1Filter = function (output, context) {
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
var deserializeAws_json1_1Filters = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FilterSummary(entry, context);
    });
};
var deserializeAws_json1_1FilterSummary = function (output, context) {
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
var deserializeAws_json1_1GetSolutionMetricsResponse = function (output, context) {
    return {
        metrics: output.metrics !== undefined && output.metrics !== null
            ? deserializeAws_json1_1Metrics(output.metrics, context)
            : undefined,
        solutionVersionArn: output.solutionVersionArn !== undefined && output.solutionVersionArn !== null
            ? output.solutionVersionArn
            : undefined,
    };
};
var deserializeAws_json1_1HPOConfig = function (output, context) {
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
var deserializeAws_json1_1HPOObjective = function (output, context) {
    return {
        metricName: output.metricName !== undefined && output.metricName !== null ? output.metricName : undefined,
        metricRegex: output.metricRegex !== undefined && output.metricRegex !== null ? output.metricRegex : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_json1_1HPOResourceConfig = function (output, context) {
    return {
        maxNumberOfTrainingJobs: output.maxNumberOfTrainingJobs !== undefined && output.maxNumberOfTrainingJobs !== null
            ? output.maxNumberOfTrainingJobs
            : undefined,
        maxParallelTrainingJobs: output.maxParallelTrainingJobs !== undefined && output.maxParallelTrainingJobs !== null
            ? output.maxParallelTrainingJobs
            : undefined,
    };
};
var deserializeAws_json1_1HyperParameterRanges = function (output, context) {
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
var deserializeAws_json1_1HyperParameters = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_json1_1IntegerHyperParameterRange = function (output, context) {
    return {
        maxValue: output.maxValue !== undefined && output.maxValue !== null ? output.maxValue : undefined,
        minValue: output.minValue !== undefined && output.minValue !== null ? output.minValue : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
var deserializeAws_json1_1IntegerHyperParameterRanges = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1IntegerHyperParameterRange(entry, context);
    });
};
var deserializeAws_json1_1InvalidInputException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidNextTokenException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1LimitExceededException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ListBatchInferenceJobsResponse = function (output, context) {
    return {
        batchInferenceJobs: output.batchInferenceJobs !== undefined && output.batchInferenceJobs !== null
            ? deserializeAws_json1_1BatchInferenceJobs(output.batchInferenceJobs, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1ListCampaignsResponse = function (output, context) {
    return {
        campaigns: output.campaigns !== undefined && output.campaigns !== null
            ? deserializeAws_json1_1Campaigns(output.campaigns, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1ListDatasetExportJobsResponse = function (output, context) {
    return {
        datasetExportJobs: output.datasetExportJobs !== undefined && output.datasetExportJobs !== null
            ? deserializeAws_json1_1DatasetExportJobs(output.datasetExportJobs, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1ListDatasetGroupsResponse = function (output, context) {
    return {
        datasetGroups: output.datasetGroups !== undefined && output.datasetGroups !== null
            ? deserializeAws_json1_1DatasetGroups(output.datasetGroups, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1ListDatasetImportJobsResponse = function (output, context) {
    return {
        datasetImportJobs: output.datasetImportJobs !== undefined && output.datasetImportJobs !== null
            ? deserializeAws_json1_1DatasetImportJobs(output.datasetImportJobs, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1ListDatasetsResponse = function (output, context) {
    return {
        datasets: output.datasets !== undefined && output.datasets !== null
            ? deserializeAws_json1_1Datasets(output.datasets, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1ListEventTrackersResponse = function (output, context) {
    return {
        eventTrackers: output.eventTrackers !== undefined && output.eventTrackers !== null
            ? deserializeAws_json1_1EventTrackers(output.eventTrackers, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1ListFiltersResponse = function (output, context) {
    return {
        Filters: output.Filters !== undefined && output.Filters !== null
            ? deserializeAws_json1_1Filters(output.Filters, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1ListRecipesResponse = function (output, context) {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        recipes: output.recipes !== undefined && output.recipes !== null
            ? deserializeAws_json1_1Recipes(output.recipes, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListSchemasResponse = function (output, context) {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        schemas: output.schemas !== undefined && output.schemas !== null
            ? deserializeAws_json1_1Schemas(output.schemas, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListSolutionsResponse = function (output, context) {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        solutions: output.solutions !== undefined && output.solutions !== null
            ? deserializeAws_json1_1Solutions(output.solutions, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListSolutionVersionsResponse = function (output, context) {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        solutionVersions: output.solutionVersions !== undefined && output.solutionVersions !== null
            ? deserializeAws_json1_1SolutionVersions(output.solutionVersions, context)
            : undefined,
    };
};
var deserializeAws_json1_1Metrics = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_json1_1OptimizationObjective = function (output, context) {
    return {
        itemAttribute: output.itemAttribute !== undefined && output.itemAttribute !== null ? output.itemAttribute : undefined,
        objectiveSensitivity: output.objectiveSensitivity !== undefined && output.objectiveSensitivity !== null
            ? output.objectiveSensitivity
            : undefined,
    };
};
var deserializeAws_json1_1Recipe = function (output, context) {
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
var deserializeAws_json1_1Recipes = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RecipeSummary(entry, context);
    });
};
var deserializeAws_json1_1RecipeSummary = function (output, context) {
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
var deserializeAws_json1_1ResourceAlreadyExistsException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ResourceConfig = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_json1_1ResourceInUseException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ResourceNotFoundException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1S3DataConfig = function (output, context) {
    return {
        kmsKeyArn: output.kmsKeyArn !== undefined && output.kmsKeyArn !== null ? output.kmsKeyArn : undefined,
        path: output.path !== undefined && output.path !== null ? output.path : undefined,
    };
};
var deserializeAws_json1_1Schemas = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DatasetSchemaSummary(entry, context);
    });
};
var deserializeAws_json1_1Solution = function (output, context) {
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
var deserializeAws_json1_1SolutionConfig = function (output, context) {
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
var deserializeAws_json1_1Solutions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SolutionSummary(entry, context);
    });
};
var deserializeAws_json1_1SolutionSummary = function (output, context) {
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
var deserializeAws_json1_1SolutionVersion = function (output, context) {
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
var deserializeAws_json1_1SolutionVersions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SolutionVersionSummary(entry, context);
    });
};
var deserializeAws_json1_1SolutionVersionSummary = function (output, context) {
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
var deserializeAws_json1_1TunedHPOParams = function (output, context) {
    return {
        algorithmHyperParameters: output.algorithmHyperParameters !== undefined && output.algorithmHyperParameters !== null
            ? deserializeAws_json1_1HyperParameters(output.algorithmHyperParameters, context)
            : undefined,
    };
};
var deserializeAws_json1_1UpdateCampaignResponse = function (output, context) {
    return {
        campaignArn: output.campaignArn !== undefined && output.campaignArn !== null ? output.campaignArn : undefined,
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