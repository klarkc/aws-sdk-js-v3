"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1GetSavingsPlansCoverageCommand = exports.deserializeAws_json1_1GetRightsizingRecommendationCommand = exports.deserializeAws_json1_1GetReservationUtilizationCommand = exports.deserializeAws_json1_1GetReservationPurchaseRecommendationCommand = exports.deserializeAws_json1_1GetReservationCoverageCommand = exports.deserializeAws_json1_1GetDimensionValuesCommand = exports.deserializeAws_json1_1GetCostForecastCommand = exports.deserializeAws_json1_1GetCostCategoriesCommand = exports.deserializeAws_json1_1GetCostAndUsageWithResourcesCommand = exports.deserializeAws_json1_1GetCostAndUsageCommand = exports.deserializeAws_json1_1GetAnomalySubscriptionsCommand = exports.deserializeAws_json1_1GetAnomalyMonitorsCommand = exports.deserializeAws_json1_1GetAnomaliesCommand = exports.deserializeAws_json1_1DescribeCostCategoryDefinitionCommand = exports.deserializeAws_json1_1DeleteCostCategoryDefinitionCommand = exports.deserializeAws_json1_1DeleteAnomalySubscriptionCommand = exports.deserializeAws_json1_1DeleteAnomalyMonitorCommand = exports.deserializeAws_json1_1CreateCostCategoryDefinitionCommand = exports.deserializeAws_json1_1CreateAnomalySubscriptionCommand = exports.deserializeAws_json1_1CreateAnomalyMonitorCommand = exports.serializeAws_json1_1UpdateCostCategoryDefinitionCommand = exports.serializeAws_json1_1UpdateAnomalySubscriptionCommand = exports.serializeAws_json1_1UpdateAnomalyMonitorCommand = exports.serializeAws_json1_1ProvideAnomalyFeedbackCommand = exports.serializeAws_json1_1ListCostCategoryDefinitionsCommand = exports.serializeAws_json1_1GetUsageForecastCommand = exports.serializeAws_json1_1GetTagsCommand = exports.serializeAws_json1_1GetSavingsPlansUtilizationDetailsCommand = exports.serializeAws_json1_1GetSavingsPlansUtilizationCommand = exports.serializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommand = exports.serializeAws_json1_1GetSavingsPlansCoverageCommand = exports.serializeAws_json1_1GetRightsizingRecommendationCommand = exports.serializeAws_json1_1GetReservationUtilizationCommand = exports.serializeAws_json1_1GetReservationPurchaseRecommendationCommand = exports.serializeAws_json1_1GetReservationCoverageCommand = exports.serializeAws_json1_1GetDimensionValuesCommand = exports.serializeAws_json1_1GetCostForecastCommand = exports.serializeAws_json1_1GetCostCategoriesCommand = exports.serializeAws_json1_1GetCostAndUsageWithResourcesCommand = exports.serializeAws_json1_1GetCostAndUsageCommand = exports.serializeAws_json1_1GetAnomalySubscriptionsCommand = exports.serializeAws_json1_1GetAnomalyMonitorsCommand = exports.serializeAws_json1_1GetAnomaliesCommand = exports.serializeAws_json1_1DescribeCostCategoryDefinitionCommand = exports.serializeAws_json1_1DeleteCostCategoryDefinitionCommand = exports.serializeAws_json1_1DeleteAnomalySubscriptionCommand = exports.serializeAws_json1_1DeleteAnomalyMonitorCommand = exports.serializeAws_json1_1CreateCostCategoryDefinitionCommand = exports.serializeAws_json1_1CreateAnomalySubscriptionCommand = exports.serializeAws_json1_1CreateAnomalyMonitorCommand = void 0;
exports.deserializeAws_json1_1UpdateCostCategoryDefinitionCommand = exports.deserializeAws_json1_1UpdateAnomalySubscriptionCommand = exports.deserializeAws_json1_1UpdateAnomalyMonitorCommand = exports.deserializeAws_json1_1ProvideAnomalyFeedbackCommand = exports.deserializeAws_json1_1ListCostCategoryDefinitionsCommand = exports.deserializeAws_json1_1GetUsageForecastCommand = exports.deserializeAws_json1_1GetTagsCommand = exports.deserializeAws_json1_1GetSavingsPlansUtilizationDetailsCommand = exports.deserializeAws_json1_1GetSavingsPlansUtilizationCommand = exports.deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1CreateAnomalyMonitorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSInsightsIndexService.CreateAnomalyMonitor",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateAnomalyMonitorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateAnomalyMonitorCommand = serializeAws_json1_1CreateAnomalyMonitorCommand;
const serializeAws_json1_1CreateAnomalySubscriptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSInsightsIndexService.CreateAnomalySubscription",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateAnomalySubscriptionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateAnomalySubscriptionCommand = serializeAws_json1_1CreateAnomalySubscriptionCommand;
const serializeAws_json1_1CreateCostCategoryDefinitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSInsightsIndexService.CreateCostCategoryDefinition",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateCostCategoryDefinitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateCostCategoryDefinitionCommand = serializeAws_json1_1CreateCostCategoryDefinitionCommand;
const serializeAws_json1_1DeleteAnomalyMonitorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSInsightsIndexService.DeleteAnomalyMonitor",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAnomalyMonitorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteAnomalyMonitorCommand = serializeAws_json1_1DeleteAnomalyMonitorCommand;
const serializeAws_json1_1DeleteAnomalySubscriptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSInsightsIndexService.DeleteAnomalySubscription",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAnomalySubscriptionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteAnomalySubscriptionCommand = serializeAws_json1_1DeleteAnomalySubscriptionCommand;
const serializeAws_json1_1DeleteCostCategoryDefinitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSInsightsIndexService.DeleteCostCategoryDefinition",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteCostCategoryDefinitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteCostCategoryDefinitionCommand = serializeAws_json1_1DeleteCostCategoryDefinitionCommand;
const serializeAws_json1_1DescribeCostCategoryDefinitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSInsightsIndexService.DescribeCostCategoryDefinition",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeCostCategoryDefinitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeCostCategoryDefinitionCommand = serializeAws_json1_1DescribeCostCategoryDefinitionCommand;
const serializeAws_json1_1GetAnomaliesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSInsightsIndexService.GetAnomalies",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAnomaliesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetAnomaliesCommand = serializeAws_json1_1GetAnomaliesCommand;
const serializeAws_json1_1GetAnomalyMonitorsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSInsightsIndexService.GetAnomalyMonitors",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAnomalyMonitorsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetAnomalyMonitorsCommand = serializeAws_json1_1GetAnomalyMonitorsCommand;
const serializeAws_json1_1GetAnomalySubscriptionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSInsightsIndexService.GetAnomalySubscriptions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAnomalySubscriptionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetAnomalySubscriptionsCommand = serializeAws_json1_1GetAnomalySubscriptionsCommand;
const serializeAws_json1_1GetCostAndUsageCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSInsightsIndexService.GetCostAndUsage",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCostAndUsageRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetCostAndUsageCommand = serializeAws_json1_1GetCostAndUsageCommand;
const serializeAws_json1_1GetCostAndUsageWithResourcesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSInsightsIndexService.GetCostAndUsageWithResources",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCostAndUsageWithResourcesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetCostAndUsageWithResourcesCommand = serializeAws_json1_1GetCostAndUsageWithResourcesCommand;
const serializeAws_json1_1GetCostCategoriesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSInsightsIndexService.GetCostCategories",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCostCategoriesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetCostCategoriesCommand = serializeAws_json1_1GetCostCategoriesCommand;
const serializeAws_json1_1GetCostForecastCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSInsightsIndexService.GetCostForecast",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCostForecastRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetCostForecastCommand = serializeAws_json1_1GetCostForecastCommand;
const serializeAws_json1_1GetDimensionValuesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSInsightsIndexService.GetDimensionValues",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDimensionValuesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDimensionValuesCommand = serializeAws_json1_1GetDimensionValuesCommand;
const serializeAws_json1_1GetReservationCoverageCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSInsightsIndexService.GetReservationCoverage",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetReservationCoverageRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetReservationCoverageCommand = serializeAws_json1_1GetReservationCoverageCommand;
const serializeAws_json1_1GetReservationPurchaseRecommendationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSInsightsIndexService.GetReservationPurchaseRecommendation",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetReservationPurchaseRecommendationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetReservationPurchaseRecommendationCommand = serializeAws_json1_1GetReservationPurchaseRecommendationCommand;
const serializeAws_json1_1GetReservationUtilizationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSInsightsIndexService.GetReservationUtilization",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetReservationUtilizationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetReservationUtilizationCommand = serializeAws_json1_1GetReservationUtilizationCommand;
const serializeAws_json1_1GetRightsizingRecommendationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSInsightsIndexService.GetRightsizingRecommendation",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRightsizingRecommendationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetRightsizingRecommendationCommand = serializeAws_json1_1GetRightsizingRecommendationCommand;
const serializeAws_json1_1GetSavingsPlansCoverageCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSInsightsIndexService.GetSavingsPlansCoverage",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSavingsPlansCoverageRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetSavingsPlansCoverageCommand = serializeAws_json1_1GetSavingsPlansCoverageCommand;
const serializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSavingsPlansPurchaseRecommendationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommand = serializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommand;
const serializeAws_json1_1GetSavingsPlansUtilizationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSInsightsIndexService.GetSavingsPlansUtilization",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSavingsPlansUtilizationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetSavingsPlansUtilizationCommand = serializeAws_json1_1GetSavingsPlansUtilizationCommand;
const serializeAws_json1_1GetSavingsPlansUtilizationDetailsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSInsightsIndexService.GetSavingsPlansUtilizationDetails",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSavingsPlansUtilizationDetailsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetSavingsPlansUtilizationDetailsCommand = serializeAws_json1_1GetSavingsPlansUtilizationDetailsCommand;
const serializeAws_json1_1GetTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSInsightsIndexService.GetTags",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetTagsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetTagsCommand = serializeAws_json1_1GetTagsCommand;
const serializeAws_json1_1GetUsageForecastCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSInsightsIndexService.GetUsageForecast",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetUsageForecastRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetUsageForecastCommand = serializeAws_json1_1GetUsageForecastCommand;
const serializeAws_json1_1ListCostCategoryDefinitionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSInsightsIndexService.ListCostCategoryDefinitions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListCostCategoryDefinitionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListCostCategoryDefinitionsCommand = serializeAws_json1_1ListCostCategoryDefinitionsCommand;
const serializeAws_json1_1ProvideAnomalyFeedbackCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSInsightsIndexService.ProvideAnomalyFeedback",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ProvideAnomalyFeedbackRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ProvideAnomalyFeedbackCommand = serializeAws_json1_1ProvideAnomalyFeedbackCommand;
const serializeAws_json1_1UpdateAnomalyMonitorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSInsightsIndexService.UpdateAnomalyMonitor",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateAnomalyMonitorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateAnomalyMonitorCommand = serializeAws_json1_1UpdateAnomalyMonitorCommand;
const serializeAws_json1_1UpdateAnomalySubscriptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSInsightsIndexService.UpdateAnomalySubscription",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateAnomalySubscriptionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateAnomalySubscriptionCommand = serializeAws_json1_1UpdateAnomalySubscriptionCommand;
const serializeAws_json1_1UpdateCostCategoryDefinitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSInsightsIndexService.UpdateCostCategoryDefinition",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateCostCategoryDefinitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateCostCategoryDefinitionCommand = serializeAws_json1_1UpdateCostCategoryDefinitionCommand;
const deserializeAws_json1_1CreateAnomalyMonitorCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateAnomalyMonitorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateAnomalyMonitorResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateAnomalyMonitorCommand = deserializeAws_json1_1CreateAnomalyMonitorCommand;
const deserializeAws_json1_1CreateAnomalyMonitorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.costexplorer#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateAnomalySubscriptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateAnomalySubscriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateAnomalySubscriptionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateAnomalySubscriptionCommand = deserializeAws_json1_1CreateAnomalySubscriptionCommand;
const deserializeAws_json1_1CreateAnomalySubscriptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.costexplorer#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownMonitorException":
        case "com.amazonaws.costexplorer#UnknownMonitorException":
            response = {
                ...(await deserializeAws_json1_1UnknownMonitorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateCostCategoryDefinitionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateCostCategoryDefinitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateCostCategoryDefinitionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateCostCategoryDefinitionCommand = deserializeAws_json1_1CreateCostCategoryDefinitionCommand;
const deserializeAws_json1_1CreateCostCategoryDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.costexplorer#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.costexplorer#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteAnomalyMonitorCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteAnomalyMonitorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteAnomalyMonitorResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteAnomalyMonitorCommand = deserializeAws_json1_1DeleteAnomalyMonitorCommand;
const deserializeAws_json1_1DeleteAnomalyMonitorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.costexplorer#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownMonitorException":
        case "com.amazonaws.costexplorer#UnknownMonitorException":
            response = {
                ...(await deserializeAws_json1_1UnknownMonitorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteAnomalySubscriptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteAnomalySubscriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteAnomalySubscriptionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteAnomalySubscriptionCommand = deserializeAws_json1_1DeleteAnomalySubscriptionCommand;
const deserializeAws_json1_1DeleteAnomalySubscriptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.costexplorer#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownSubscriptionException":
        case "com.amazonaws.costexplorer#UnknownSubscriptionException":
            response = {
                ...(await deserializeAws_json1_1UnknownSubscriptionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteCostCategoryDefinitionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteCostCategoryDefinitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteCostCategoryDefinitionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteCostCategoryDefinitionCommand = deserializeAws_json1_1DeleteCostCategoryDefinitionCommand;
const deserializeAws_json1_1DeleteCostCategoryDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.costexplorer#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.costexplorer#ResourceNotFoundException":
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
const deserializeAws_json1_1DescribeCostCategoryDefinitionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeCostCategoryDefinitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeCostCategoryDefinitionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeCostCategoryDefinitionCommand = deserializeAws_json1_1DescribeCostCategoryDefinitionCommand;
const deserializeAws_json1_1DescribeCostCategoryDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.costexplorer#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.costexplorer#ResourceNotFoundException":
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
const deserializeAws_json1_1GetAnomaliesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetAnomaliesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAnomaliesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetAnomaliesCommand = deserializeAws_json1_1GetAnomaliesCommand;
const deserializeAws_json1_1GetAnomaliesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.costexplorer#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.costexplorer#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetAnomalyMonitorsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetAnomalyMonitorsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAnomalyMonitorsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetAnomalyMonitorsCommand = deserializeAws_json1_1GetAnomalyMonitorsCommand;
const deserializeAws_json1_1GetAnomalyMonitorsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.costexplorer#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.costexplorer#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownMonitorException":
        case "com.amazonaws.costexplorer#UnknownMonitorException":
            response = {
                ...(await deserializeAws_json1_1UnknownMonitorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetAnomalySubscriptionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetAnomalySubscriptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAnomalySubscriptionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetAnomalySubscriptionsCommand = deserializeAws_json1_1GetAnomalySubscriptionsCommand;
const deserializeAws_json1_1GetAnomalySubscriptionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.costexplorer#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.costexplorer#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownSubscriptionException":
        case "com.amazonaws.costexplorer#UnknownSubscriptionException":
            response = {
                ...(await deserializeAws_json1_1UnknownSubscriptionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetCostAndUsageCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetCostAndUsageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCostAndUsageResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetCostAndUsageCommand = deserializeAws_json1_1GetCostAndUsageCommand;
const deserializeAws_json1_1GetCostAndUsageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BillExpirationException":
        case "com.amazonaws.costexplorer#BillExpirationException":
            response = {
                ...(await deserializeAws_json1_1BillExpirationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DataUnavailableException":
        case "com.amazonaws.costexplorer#DataUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.costexplorer#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.costexplorer#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestChangedException":
        case "com.amazonaws.costexplorer#RequestChangedException":
            response = {
                ...(await deserializeAws_json1_1RequestChangedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetCostAndUsageWithResourcesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetCostAndUsageWithResourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCostAndUsageWithResourcesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetCostAndUsageWithResourcesCommand = deserializeAws_json1_1GetCostAndUsageWithResourcesCommand;
const deserializeAws_json1_1GetCostAndUsageWithResourcesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BillExpirationException":
        case "com.amazonaws.costexplorer#BillExpirationException":
            response = {
                ...(await deserializeAws_json1_1BillExpirationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DataUnavailableException":
        case "com.amazonaws.costexplorer#DataUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.costexplorer#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.costexplorer#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestChangedException":
        case "com.amazonaws.costexplorer#RequestChangedException":
            response = {
                ...(await deserializeAws_json1_1RequestChangedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetCostCategoriesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetCostCategoriesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCostCategoriesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetCostCategoriesCommand = deserializeAws_json1_1GetCostCategoriesCommand;
const deserializeAws_json1_1GetCostCategoriesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BillExpirationException":
        case "com.amazonaws.costexplorer#BillExpirationException":
            response = {
                ...(await deserializeAws_json1_1BillExpirationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DataUnavailableException":
        case "com.amazonaws.costexplorer#DataUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.costexplorer#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.costexplorer#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestChangedException":
        case "com.amazonaws.costexplorer#RequestChangedException":
            response = {
                ...(await deserializeAws_json1_1RequestChangedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetCostForecastCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetCostForecastCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCostForecastResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetCostForecastCommand = deserializeAws_json1_1GetCostForecastCommand;
const deserializeAws_json1_1GetCostForecastCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DataUnavailableException":
        case "com.amazonaws.costexplorer#DataUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.costexplorer#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetDimensionValuesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDimensionValuesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDimensionValuesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDimensionValuesCommand = deserializeAws_json1_1GetDimensionValuesCommand;
const deserializeAws_json1_1GetDimensionValuesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BillExpirationException":
        case "com.amazonaws.costexplorer#BillExpirationException":
            response = {
                ...(await deserializeAws_json1_1BillExpirationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DataUnavailableException":
        case "com.amazonaws.costexplorer#DataUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.costexplorer#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.costexplorer#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestChangedException":
        case "com.amazonaws.costexplorer#RequestChangedException":
            response = {
                ...(await deserializeAws_json1_1RequestChangedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetReservationCoverageCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetReservationCoverageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetReservationCoverageResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetReservationCoverageCommand = deserializeAws_json1_1GetReservationCoverageCommand;
const deserializeAws_json1_1GetReservationCoverageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DataUnavailableException":
        case "com.amazonaws.costexplorer#DataUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.costexplorer#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.costexplorer#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetReservationPurchaseRecommendationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetReservationPurchaseRecommendationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetReservationPurchaseRecommendationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetReservationPurchaseRecommendationCommand = deserializeAws_json1_1GetReservationPurchaseRecommendationCommand;
const deserializeAws_json1_1GetReservationPurchaseRecommendationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DataUnavailableException":
        case "com.amazonaws.costexplorer#DataUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.costexplorer#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.costexplorer#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetReservationUtilizationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetReservationUtilizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetReservationUtilizationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetReservationUtilizationCommand = deserializeAws_json1_1GetReservationUtilizationCommand;
const deserializeAws_json1_1GetReservationUtilizationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DataUnavailableException":
        case "com.amazonaws.costexplorer#DataUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.costexplorer#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.costexplorer#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetRightsizingRecommendationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetRightsizingRecommendationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRightsizingRecommendationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetRightsizingRecommendationCommand = deserializeAws_json1_1GetRightsizingRecommendationCommand;
const deserializeAws_json1_1GetRightsizingRecommendationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.costexplorer#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.costexplorer#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetSavingsPlansCoverageCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetSavingsPlansCoverageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSavingsPlansCoverageResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetSavingsPlansCoverageCommand = deserializeAws_json1_1GetSavingsPlansCoverageCommand;
const deserializeAws_json1_1GetSavingsPlansCoverageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DataUnavailableException":
        case "com.amazonaws.costexplorer#DataUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.costexplorer#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.costexplorer#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommand = deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommand;
const deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.costexplorer#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.costexplorer#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetSavingsPlansUtilizationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetSavingsPlansUtilizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSavingsPlansUtilizationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetSavingsPlansUtilizationCommand = deserializeAws_json1_1GetSavingsPlansUtilizationCommand;
const deserializeAws_json1_1GetSavingsPlansUtilizationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DataUnavailableException":
        case "com.amazonaws.costexplorer#DataUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.costexplorer#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetSavingsPlansUtilizationDetailsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetSavingsPlansUtilizationDetailsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSavingsPlansUtilizationDetailsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetSavingsPlansUtilizationDetailsCommand = deserializeAws_json1_1GetSavingsPlansUtilizationDetailsCommand;
const deserializeAws_json1_1GetSavingsPlansUtilizationDetailsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DataUnavailableException":
        case "com.amazonaws.costexplorer#DataUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.costexplorer#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.costexplorer#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetTagsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetTagsCommand = deserializeAws_json1_1GetTagsCommand;
const deserializeAws_json1_1GetTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BillExpirationException":
        case "com.amazonaws.costexplorer#BillExpirationException":
            response = {
                ...(await deserializeAws_json1_1BillExpirationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DataUnavailableException":
        case "com.amazonaws.costexplorer#DataUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.costexplorer#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.costexplorer#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestChangedException":
        case "com.amazonaws.costexplorer#RequestChangedException":
            response = {
                ...(await deserializeAws_json1_1RequestChangedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetUsageForecastCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetUsageForecastCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetUsageForecastResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetUsageForecastCommand = deserializeAws_json1_1GetUsageForecastCommand;
const deserializeAws_json1_1GetUsageForecastCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DataUnavailableException":
        case "com.amazonaws.costexplorer#DataUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.costexplorer#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnresolvableUsageUnitException":
        case "com.amazonaws.costexplorer#UnresolvableUsageUnitException":
            response = {
                ...(await deserializeAws_json1_1UnresolvableUsageUnitExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListCostCategoryDefinitionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListCostCategoryDefinitionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListCostCategoryDefinitionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListCostCategoryDefinitionsCommand = deserializeAws_json1_1ListCostCategoryDefinitionsCommand;
const deserializeAws_json1_1ListCostCategoryDefinitionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.costexplorer#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ProvideAnomalyFeedbackCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ProvideAnomalyFeedbackCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ProvideAnomalyFeedbackResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ProvideAnomalyFeedbackCommand = deserializeAws_json1_1ProvideAnomalyFeedbackCommand;
const deserializeAws_json1_1ProvideAnomalyFeedbackCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.costexplorer#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateAnomalyMonitorCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateAnomalyMonitorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateAnomalyMonitorResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateAnomalyMonitorCommand = deserializeAws_json1_1UpdateAnomalyMonitorCommand;
const deserializeAws_json1_1UpdateAnomalyMonitorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.costexplorer#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownMonitorException":
        case "com.amazonaws.costexplorer#UnknownMonitorException":
            response = {
                ...(await deserializeAws_json1_1UnknownMonitorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateAnomalySubscriptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateAnomalySubscriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateAnomalySubscriptionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateAnomalySubscriptionCommand = deserializeAws_json1_1UpdateAnomalySubscriptionCommand;
const deserializeAws_json1_1UpdateAnomalySubscriptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.costexplorer#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownMonitorException":
        case "com.amazonaws.costexplorer#UnknownMonitorException":
            response = {
                ...(await deserializeAws_json1_1UnknownMonitorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownSubscriptionException":
        case "com.amazonaws.costexplorer#UnknownSubscriptionException":
            response = {
                ...(await deserializeAws_json1_1UnknownSubscriptionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateCostCategoryDefinitionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateCostCategoryDefinitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateCostCategoryDefinitionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateCostCategoryDefinitionCommand = deserializeAws_json1_1UpdateCostCategoryDefinitionCommand;
const deserializeAws_json1_1UpdateCostCategoryDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.costexplorer#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.costexplorer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.costexplorer#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1BillExpirationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1BillExpirationException(body, context);
    const contents = {
        name: "BillExpirationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DataUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DataUnavailableException(body, context);
    const contents = {
        name: "DataUnavailableException",
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
const deserializeAws_json1_1RequestChangedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RequestChangedException(body, context);
    const contents = {
        name: "RequestChangedException",
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
const deserializeAws_json1_1UnknownMonitorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnknownMonitorException(body, context);
    const contents = {
        name: "UnknownMonitorException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UnknownSubscriptionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnknownSubscriptionException(body, context);
    const contents = {
        name: "UnknownSubscriptionException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UnresolvableUsageUnitExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnresolvableUsageUnitException(body, context);
    const contents = {
        name: "UnresolvableUsageUnitException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1AnomalyDateInterval = (input, context) => {
    return {
        ...(input.EndDate !== undefined && input.EndDate !== null && { EndDate: input.EndDate }),
        ...(input.StartDate !== undefined && input.StartDate !== null && { StartDate: input.StartDate }),
    };
};
const serializeAws_json1_1AnomalyMonitor = (input, context) => {
    return {
        ...(input.CreationDate !== undefined && input.CreationDate !== null && { CreationDate: input.CreationDate }),
        ...(input.DimensionalValueCount !== undefined &&
            input.DimensionalValueCount !== null && { DimensionalValueCount: input.DimensionalValueCount }),
        ...(input.LastEvaluatedDate !== undefined &&
            input.LastEvaluatedDate !== null && { LastEvaluatedDate: input.LastEvaluatedDate }),
        ...(input.LastUpdatedDate !== undefined &&
            input.LastUpdatedDate !== null && { LastUpdatedDate: input.LastUpdatedDate }),
        ...(input.MonitorArn !== undefined && input.MonitorArn !== null && { MonitorArn: input.MonitorArn }),
        ...(input.MonitorDimension !== undefined &&
            input.MonitorDimension !== null && { MonitorDimension: input.MonitorDimension }),
        ...(input.MonitorName !== undefined && input.MonitorName !== null && { MonitorName: input.MonitorName }),
        ...(input.MonitorSpecification !== undefined &&
            input.MonitorSpecification !== null && {
            MonitorSpecification: serializeAws_json1_1Expression(input.MonitorSpecification, context),
        }),
        ...(input.MonitorType !== undefined && input.MonitorType !== null && { MonitorType: input.MonitorType }),
    };
};
const serializeAws_json1_1AnomalySubscription = (input, context) => {
    return {
        ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
        ...(input.Frequency !== undefined && input.Frequency !== null && { Frequency: input.Frequency }),
        ...(input.MonitorArnList !== undefined &&
            input.MonitorArnList !== null && {
            MonitorArnList: serializeAws_json1_1MonitorArnList(input.MonitorArnList, context),
        }),
        ...(input.Subscribers !== undefined &&
            input.Subscribers !== null && { Subscribers: serializeAws_json1_1Subscribers(input.Subscribers, context) }),
        ...(input.SubscriptionArn !== undefined &&
            input.SubscriptionArn !== null && { SubscriptionArn: input.SubscriptionArn }),
        ...(input.SubscriptionName !== undefined &&
            input.SubscriptionName !== null && { SubscriptionName: input.SubscriptionName }),
        ...(input.Threshold !== undefined && input.Threshold !== null && { Threshold: input.Threshold }),
    };
};
const serializeAws_json1_1CostCategoryInheritedValueDimension = (input, context) => {
    return {
        ...(input.DimensionKey !== undefined && input.DimensionKey !== null && { DimensionKey: input.DimensionKey }),
        ...(input.DimensionName !== undefined && input.DimensionName !== null && { DimensionName: input.DimensionName }),
    };
};
const serializeAws_json1_1CostCategoryRule = (input, context) => {
    return {
        ...(input.InheritedValue !== undefined &&
            input.InheritedValue !== null && {
            InheritedValue: serializeAws_json1_1CostCategoryInheritedValueDimension(input.InheritedValue, context),
        }),
        ...(input.Rule !== undefined &&
            input.Rule !== null && { Rule: serializeAws_json1_1Expression(input.Rule, context) }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1CostCategoryRulesList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1CostCategoryRule(entry, context);
    });
};
const serializeAws_json1_1CostCategoryValues = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.MatchOptions !== undefined &&
            input.MatchOptions !== null && { MatchOptions: serializeAws_json1_1MatchOptions(input.MatchOptions, context) }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1Values(input.Values, context) }),
    };
};
const serializeAws_json1_1CreateAnomalyMonitorRequest = (input, context) => {
    return {
        ...(input.AnomalyMonitor !== undefined &&
            input.AnomalyMonitor !== null && {
            AnomalyMonitor: serializeAws_json1_1AnomalyMonitor(input.AnomalyMonitor, context),
        }),
    };
};
const serializeAws_json1_1CreateAnomalySubscriptionRequest = (input, context) => {
    return {
        ...(input.AnomalySubscription !== undefined &&
            input.AnomalySubscription !== null && {
            AnomalySubscription: serializeAws_json1_1AnomalySubscription(input.AnomalySubscription, context),
        }),
    };
};
const serializeAws_json1_1CreateCostCategoryDefinitionRequest = (input, context) => {
    return {
        ...(input.DefaultValue !== undefined && input.DefaultValue !== null && { DefaultValue: input.DefaultValue }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.RuleVersion !== undefined && input.RuleVersion !== null && { RuleVersion: input.RuleVersion }),
        ...(input.Rules !== undefined &&
            input.Rules !== null && { Rules: serializeAws_json1_1CostCategoryRulesList(input.Rules, context) }),
    };
};
const serializeAws_json1_1DateInterval = (input, context) => {
    return {
        ...(input.End !== undefined && input.End !== null && { End: input.End }),
        ...(input.Start !== undefined && input.Start !== null && { Start: input.Start }),
    };
};
const serializeAws_json1_1DeleteAnomalyMonitorRequest = (input, context) => {
    return {
        ...(input.MonitorArn !== undefined && input.MonitorArn !== null && { MonitorArn: input.MonitorArn }),
    };
};
const serializeAws_json1_1DeleteAnomalySubscriptionRequest = (input, context) => {
    return {
        ...(input.SubscriptionArn !== undefined &&
            input.SubscriptionArn !== null && { SubscriptionArn: input.SubscriptionArn }),
    };
};
const serializeAws_json1_1DeleteCostCategoryDefinitionRequest = (input, context) => {
    return {
        ...(input.CostCategoryArn !== undefined &&
            input.CostCategoryArn !== null && { CostCategoryArn: input.CostCategoryArn }),
    };
};
const serializeAws_json1_1DescribeCostCategoryDefinitionRequest = (input, context) => {
    return {
        ...(input.CostCategoryArn !== undefined &&
            input.CostCategoryArn !== null && { CostCategoryArn: input.CostCategoryArn }),
        ...(input.EffectiveOn !== undefined && input.EffectiveOn !== null && { EffectiveOn: input.EffectiveOn }),
    };
};
const serializeAws_json1_1DimensionValues = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.MatchOptions !== undefined &&
            input.MatchOptions !== null && { MatchOptions: serializeAws_json1_1MatchOptions(input.MatchOptions, context) }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1Values(input.Values, context) }),
    };
};
const serializeAws_json1_1EC2Specification = (input, context) => {
    return {
        ...(input.OfferingClass !== undefined && input.OfferingClass !== null && { OfferingClass: input.OfferingClass }),
    };
};
const serializeAws_json1_1Expression = (input, context) => {
    return {
        ...(input.And !== undefined && input.And !== null && { And: serializeAws_json1_1Expressions(input.And, context) }),
        ...(input.CostCategories !== undefined &&
            input.CostCategories !== null && {
            CostCategories: serializeAws_json1_1CostCategoryValues(input.CostCategories, context),
        }),
        ...(input.Dimensions !== undefined &&
            input.Dimensions !== null && { Dimensions: serializeAws_json1_1DimensionValues(input.Dimensions, context) }),
        ...(input.Not !== undefined && input.Not !== null && { Not: serializeAws_json1_1Expression(input.Not, context) }),
        ...(input.Or !== undefined && input.Or !== null && { Or: serializeAws_json1_1Expressions(input.Or, context) }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_json1_1TagValues(input.Tags, context) }),
    };
};
const serializeAws_json1_1Expressions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Expression(entry, context);
    });
};
const serializeAws_json1_1GetAnomaliesRequest = (input, context) => {
    return {
        ...(input.DateInterval !== undefined &&
            input.DateInterval !== null && {
            DateInterval: serializeAws_json1_1AnomalyDateInterval(input.DateInterval, context),
        }),
        ...(input.Feedback !== undefined && input.Feedback !== null && { Feedback: input.Feedback }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.MonitorArn !== undefined && input.MonitorArn !== null && { MonitorArn: input.MonitorArn }),
        ...(input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken }),
        ...(input.TotalImpact !== undefined &&
            input.TotalImpact !== null && { TotalImpact: serializeAws_json1_1TotalImpactFilter(input.TotalImpact, context) }),
    };
};
const serializeAws_json1_1GetAnomalyMonitorsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.MonitorArnList !== undefined &&
            input.MonitorArnList !== null && { MonitorArnList: serializeAws_json1_1Values(input.MonitorArnList, context) }),
        ...(input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken }),
    };
};
const serializeAws_json1_1GetAnomalySubscriptionsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.MonitorArn !== undefined && input.MonitorArn !== null && { MonitorArn: input.MonitorArn }),
        ...(input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken }),
        ...(input.SubscriptionArnList !== undefined &&
            input.SubscriptionArnList !== null && {
            SubscriptionArnList: serializeAws_json1_1Values(input.SubscriptionArnList, context),
        }),
    };
};
const serializeAws_json1_1GetCostAndUsageRequest = (input, context) => {
    return {
        ...(input.Filter !== undefined &&
            input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
        ...(input.Granularity !== undefined && input.Granularity !== null && { Granularity: input.Granularity }),
        ...(input.GroupBy !== undefined &&
            input.GroupBy !== null && { GroupBy: serializeAws_json1_1GroupDefinitions(input.GroupBy, context) }),
        ...(input.Metrics !== undefined &&
            input.Metrics !== null && { Metrics: serializeAws_json1_1MetricNames(input.Metrics, context) }),
        ...(input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken }),
        ...(input.TimePeriod !== undefined &&
            input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }),
    };
};
const serializeAws_json1_1GetCostAndUsageWithResourcesRequest = (input, context) => {
    return {
        ...(input.Filter !== undefined &&
            input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
        ...(input.Granularity !== undefined && input.Granularity !== null && { Granularity: input.Granularity }),
        ...(input.GroupBy !== undefined &&
            input.GroupBy !== null && { GroupBy: serializeAws_json1_1GroupDefinitions(input.GroupBy, context) }),
        ...(input.Metrics !== undefined &&
            input.Metrics !== null && { Metrics: serializeAws_json1_1MetricNames(input.Metrics, context) }),
        ...(input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken }),
        ...(input.TimePeriod !== undefined &&
            input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }),
    };
};
const serializeAws_json1_1GetCostCategoriesRequest = (input, context) => {
    return {
        ...(input.CostCategoryName !== undefined &&
            input.CostCategoryName !== null && { CostCategoryName: input.CostCategoryName }),
        ...(input.Filter !== undefined &&
            input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken }),
        ...(input.SearchString !== undefined && input.SearchString !== null && { SearchString: input.SearchString }),
        ...(input.SortBy !== undefined &&
            input.SortBy !== null && { SortBy: serializeAws_json1_1SortDefinitions(input.SortBy, context) }),
        ...(input.TimePeriod !== undefined &&
            input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }),
    };
};
const serializeAws_json1_1GetCostForecastRequest = (input, context) => {
    return {
        ...(input.Filter !== undefined &&
            input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
        ...(input.Granularity !== undefined && input.Granularity !== null && { Granularity: input.Granularity }),
        ...(input.Metric !== undefined && input.Metric !== null && { Metric: input.Metric }),
        ...(input.PredictionIntervalLevel !== undefined &&
            input.PredictionIntervalLevel !== null && { PredictionIntervalLevel: input.PredictionIntervalLevel }),
        ...(input.TimePeriod !== undefined &&
            input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }),
    };
};
const serializeAws_json1_1GetDimensionValuesRequest = (input, context) => {
    return {
        ...(input.Context !== undefined && input.Context !== null && { Context: input.Context }),
        ...(input.Dimension !== undefined && input.Dimension !== null && { Dimension: input.Dimension }),
        ...(input.Filter !== undefined &&
            input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken }),
        ...(input.SearchString !== undefined && input.SearchString !== null && { SearchString: input.SearchString }),
        ...(input.SortBy !== undefined &&
            input.SortBy !== null && { SortBy: serializeAws_json1_1SortDefinitions(input.SortBy, context) }),
        ...(input.TimePeriod !== undefined &&
            input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }),
    };
};
const serializeAws_json1_1GetReservationCoverageRequest = (input, context) => {
    return {
        ...(input.Filter !== undefined &&
            input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
        ...(input.Granularity !== undefined && input.Granularity !== null && { Granularity: input.Granularity }),
        ...(input.GroupBy !== undefined &&
            input.GroupBy !== null && { GroupBy: serializeAws_json1_1GroupDefinitions(input.GroupBy, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.Metrics !== undefined &&
            input.Metrics !== null && { Metrics: serializeAws_json1_1MetricNames(input.Metrics, context) }),
        ...(input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken }),
        ...(input.SortBy !== undefined &&
            input.SortBy !== null && { SortBy: serializeAws_json1_1SortDefinition(input.SortBy, context) }),
        ...(input.TimePeriod !== undefined &&
            input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }),
    };
};
const serializeAws_json1_1GetReservationPurchaseRecommendationRequest = (input, context) => {
    return {
        ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
        ...(input.AccountScope !== undefined && input.AccountScope !== null && { AccountScope: input.AccountScope }),
        ...(input.Filter !== undefined &&
            input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
        ...(input.LookbackPeriodInDays !== undefined &&
            input.LookbackPeriodInDays !== null && { LookbackPeriodInDays: input.LookbackPeriodInDays }),
        ...(input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken }),
        ...(input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize }),
        ...(input.PaymentOption !== undefined && input.PaymentOption !== null && { PaymentOption: input.PaymentOption }),
        ...(input.Service !== undefined && input.Service !== null && { Service: input.Service }),
        ...(input.ServiceSpecification !== undefined &&
            input.ServiceSpecification !== null && {
            ServiceSpecification: serializeAws_json1_1ServiceSpecification(input.ServiceSpecification, context),
        }),
        ...(input.TermInYears !== undefined && input.TermInYears !== null && { TermInYears: input.TermInYears }),
    };
};
const serializeAws_json1_1GetReservationUtilizationRequest = (input, context) => {
    return {
        ...(input.Filter !== undefined &&
            input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
        ...(input.Granularity !== undefined && input.Granularity !== null && { Granularity: input.Granularity }),
        ...(input.GroupBy !== undefined &&
            input.GroupBy !== null && { GroupBy: serializeAws_json1_1GroupDefinitions(input.GroupBy, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken }),
        ...(input.SortBy !== undefined &&
            input.SortBy !== null && { SortBy: serializeAws_json1_1SortDefinition(input.SortBy, context) }),
        ...(input.TimePeriod !== undefined &&
            input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }),
    };
};
const serializeAws_json1_1GetRightsizingRecommendationRequest = (input, context) => {
    return {
        ...(input.Configuration !== undefined &&
            input.Configuration !== null && {
            Configuration: serializeAws_json1_1RightsizingRecommendationConfiguration(input.Configuration, context),
        }),
        ...(input.Filter !== undefined &&
            input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
        ...(input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken }),
        ...(input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize }),
        ...(input.Service !== undefined && input.Service !== null && { Service: input.Service }),
    };
};
const serializeAws_json1_1GetSavingsPlansCoverageRequest = (input, context) => {
    return {
        ...(input.Filter !== undefined &&
            input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
        ...(input.Granularity !== undefined && input.Granularity !== null && { Granularity: input.Granularity }),
        ...(input.GroupBy !== undefined &&
            input.GroupBy !== null && { GroupBy: serializeAws_json1_1GroupDefinitions(input.GroupBy, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.Metrics !== undefined &&
            input.Metrics !== null && { Metrics: serializeAws_json1_1MetricNames(input.Metrics, context) }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.SortBy !== undefined &&
            input.SortBy !== null && { SortBy: serializeAws_json1_1SortDefinition(input.SortBy, context) }),
        ...(input.TimePeriod !== undefined &&
            input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }),
    };
};
const serializeAws_json1_1GetSavingsPlansPurchaseRecommendationRequest = (input, context) => {
    return {
        ...(input.AccountScope !== undefined && input.AccountScope !== null && { AccountScope: input.AccountScope }),
        ...(input.Filter !== undefined &&
            input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
        ...(input.LookbackPeriodInDays !== undefined &&
            input.LookbackPeriodInDays !== null && { LookbackPeriodInDays: input.LookbackPeriodInDays }),
        ...(input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken }),
        ...(input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize }),
        ...(input.PaymentOption !== undefined && input.PaymentOption !== null && { PaymentOption: input.PaymentOption }),
        ...(input.SavingsPlansType !== undefined &&
            input.SavingsPlansType !== null && { SavingsPlansType: input.SavingsPlansType }),
        ...(input.TermInYears !== undefined && input.TermInYears !== null && { TermInYears: input.TermInYears }),
    };
};
const serializeAws_json1_1GetSavingsPlansUtilizationDetailsRequest = (input, context) => {
    return {
        ...(input.DataType !== undefined &&
            input.DataType !== null && { DataType: serializeAws_json1_1SavingsPlansDataTypes(input.DataType, context) }),
        ...(input.Filter !== undefined &&
            input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.SortBy !== undefined &&
            input.SortBy !== null && { SortBy: serializeAws_json1_1SortDefinition(input.SortBy, context) }),
        ...(input.TimePeriod !== undefined &&
            input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }),
    };
};
const serializeAws_json1_1GetSavingsPlansUtilizationRequest = (input, context) => {
    return {
        ...(input.Filter !== undefined &&
            input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
        ...(input.Granularity !== undefined && input.Granularity !== null && { Granularity: input.Granularity }),
        ...(input.SortBy !== undefined &&
            input.SortBy !== null && { SortBy: serializeAws_json1_1SortDefinition(input.SortBy, context) }),
        ...(input.TimePeriod !== undefined &&
            input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }),
    };
};
const serializeAws_json1_1GetTagsRequest = (input, context) => {
    return {
        ...(input.Filter !== undefined &&
            input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken }),
        ...(input.SearchString !== undefined && input.SearchString !== null && { SearchString: input.SearchString }),
        ...(input.SortBy !== undefined &&
            input.SortBy !== null && { SortBy: serializeAws_json1_1SortDefinitions(input.SortBy, context) }),
        ...(input.TagKey !== undefined && input.TagKey !== null && { TagKey: input.TagKey }),
        ...(input.TimePeriod !== undefined &&
            input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }),
    };
};
const serializeAws_json1_1GetUsageForecastRequest = (input, context) => {
    return {
        ...(input.Filter !== undefined &&
            input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
        ...(input.Granularity !== undefined && input.Granularity !== null && { Granularity: input.Granularity }),
        ...(input.Metric !== undefined && input.Metric !== null && { Metric: input.Metric }),
        ...(input.PredictionIntervalLevel !== undefined &&
            input.PredictionIntervalLevel !== null && { PredictionIntervalLevel: input.PredictionIntervalLevel }),
        ...(input.TimePeriod !== undefined &&
            input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }),
    };
};
const serializeAws_json1_1GroupDefinition = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1GroupDefinitions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1GroupDefinition(entry, context);
    });
};
const serializeAws_json1_1ListCostCategoryDefinitionsRequest = (input, context) => {
    return {
        ...(input.EffectiveOn !== undefined && input.EffectiveOn !== null && { EffectiveOn: input.EffectiveOn }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1MatchOptions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1MetricNames = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1MonitorArnList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ProvideAnomalyFeedbackRequest = (input, context) => {
    return {
        ...(input.AnomalyId !== undefined && input.AnomalyId !== null && { AnomalyId: input.AnomalyId }),
        ...(input.Feedback !== undefined && input.Feedback !== null && { Feedback: input.Feedback }),
    };
};
const serializeAws_json1_1RightsizingRecommendationConfiguration = (input, context) => {
    return {
        ...(input.BenefitsConsidered !== undefined &&
            input.BenefitsConsidered !== null && { BenefitsConsidered: input.BenefitsConsidered }),
        ...(input.RecommendationTarget !== undefined &&
            input.RecommendationTarget !== null && { RecommendationTarget: input.RecommendationTarget }),
    };
};
const serializeAws_json1_1SavingsPlansDataTypes = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ServiceSpecification = (input, context) => {
    return {
        ...(input.EC2Specification !== undefined &&
            input.EC2Specification !== null && {
            EC2Specification: serializeAws_json1_1EC2Specification(input.EC2Specification, context),
        }),
    };
};
const serializeAws_json1_1SortDefinition = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.SortOrder !== undefined && input.SortOrder !== null && { SortOrder: input.SortOrder }),
    };
};
const serializeAws_json1_1SortDefinitions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1SortDefinition(entry, context);
    });
};
const serializeAws_json1_1Subscriber = (input, context) => {
    return {
        ...(input.Address !== undefined && input.Address !== null && { Address: input.Address }),
        ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1Subscribers = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Subscriber(entry, context);
    });
};
const serializeAws_json1_1TagValues = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.MatchOptions !== undefined &&
            input.MatchOptions !== null && { MatchOptions: serializeAws_json1_1MatchOptions(input.MatchOptions, context) }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1Values(input.Values, context) }),
    };
};
const serializeAws_json1_1TotalImpactFilter = (input, context) => {
    return {
        ...(input.EndValue !== undefined && input.EndValue !== null && { EndValue: input.EndValue }),
        ...(input.NumericOperator !== undefined &&
            input.NumericOperator !== null && { NumericOperator: input.NumericOperator }),
        ...(input.StartValue !== undefined && input.StartValue !== null && { StartValue: input.StartValue }),
    };
};
const serializeAws_json1_1UpdateAnomalyMonitorRequest = (input, context) => {
    return {
        ...(input.MonitorArn !== undefined && input.MonitorArn !== null && { MonitorArn: input.MonitorArn }),
        ...(input.MonitorName !== undefined && input.MonitorName !== null && { MonitorName: input.MonitorName }),
    };
};
const serializeAws_json1_1UpdateAnomalySubscriptionRequest = (input, context) => {
    return {
        ...(input.Frequency !== undefined && input.Frequency !== null && { Frequency: input.Frequency }),
        ...(input.MonitorArnList !== undefined &&
            input.MonitorArnList !== null && {
            MonitorArnList: serializeAws_json1_1MonitorArnList(input.MonitorArnList, context),
        }),
        ...(input.Subscribers !== undefined &&
            input.Subscribers !== null && { Subscribers: serializeAws_json1_1Subscribers(input.Subscribers, context) }),
        ...(input.SubscriptionArn !== undefined &&
            input.SubscriptionArn !== null && { SubscriptionArn: input.SubscriptionArn }),
        ...(input.SubscriptionName !== undefined &&
            input.SubscriptionName !== null && { SubscriptionName: input.SubscriptionName }),
        ...(input.Threshold !== undefined && input.Threshold !== null && { Threshold: input.Threshold }),
    };
};
const serializeAws_json1_1UpdateCostCategoryDefinitionRequest = (input, context) => {
    return {
        ...(input.CostCategoryArn !== undefined &&
            input.CostCategoryArn !== null && { CostCategoryArn: input.CostCategoryArn }),
        ...(input.DefaultValue !== undefined && input.DefaultValue !== null && { DefaultValue: input.DefaultValue }),
        ...(input.RuleVersion !== undefined && input.RuleVersion !== null && { RuleVersion: input.RuleVersion }),
        ...(input.Rules !== undefined &&
            input.Rules !== null && { Rules: serializeAws_json1_1CostCategoryRulesList(input.Rules, context) }),
    };
};
const serializeAws_json1_1Values = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1Anomalies = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Anomaly(entry, context);
    });
};
const deserializeAws_json1_1Anomaly = (output, context) => {
    return {
        AnomalyEndDate: output.AnomalyEndDate !== undefined && output.AnomalyEndDate !== null ? output.AnomalyEndDate : undefined,
        AnomalyId: output.AnomalyId !== undefined && output.AnomalyId !== null ? output.AnomalyId : undefined,
        AnomalyScore: output.AnomalyScore !== undefined && output.AnomalyScore !== null
            ? deserializeAws_json1_1AnomalyScore(output.AnomalyScore, context)
            : undefined,
        AnomalyStartDate: output.AnomalyStartDate !== undefined && output.AnomalyStartDate !== null ? output.AnomalyStartDate : undefined,
        DimensionValue: output.DimensionValue !== undefined && output.DimensionValue !== null ? output.DimensionValue : undefined,
        Feedback: output.Feedback !== undefined && output.Feedback !== null ? output.Feedback : undefined,
        Impact: output.Impact !== undefined && output.Impact !== null
            ? deserializeAws_json1_1Impact(output.Impact, context)
            : undefined,
        MonitorArn: output.MonitorArn !== undefined && output.MonitorArn !== null ? output.MonitorArn : undefined,
        RootCauses: output.RootCauses !== undefined && output.RootCauses !== null
            ? deserializeAws_json1_1RootCauses(output.RootCauses, context)
            : undefined,
    };
};
const deserializeAws_json1_1AnomalyMonitor = (output, context) => {
    return {
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
        DimensionalValueCount: output.DimensionalValueCount !== undefined && output.DimensionalValueCount !== null
            ? output.DimensionalValueCount
            : undefined,
        LastEvaluatedDate: output.LastEvaluatedDate !== undefined && output.LastEvaluatedDate !== null
            ? output.LastEvaluatedDate
            : undefined,
        LastUpdatedDate: output.LastUpdatedDate !== undefined && output.LastUpdatedDate !== null ? output.LastUpdatedDate : undefined,
        MonitorArn: output.MonitorArn !== undefined && output.MonitorArn !== null ? output.MonitorArn : undefined,
        MonitorDimension: output.MonitorDimension !== undefined && output.MonitorDimension !== null ? output.MonitorDimension : undefined,
        MonitorName: output.MonitorName !== undefined && output.MonitorName !== null ? output.MonitorName : undefined,
        MonitorSpecification: output.MonitorSpecification !== undefined && output.MonitorSpecification !== null
            ? deserializeAws_json1_1Expression(output.MonitorSpecification, context)
            : undefined,
        MonitorType: output.MonitorType !== undefined && output.MonitorType !== null ? output.MonitorType : undefined,
    };
};
const deserializeAws_json1_1AnomalyMonitors = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AnomalyMonitor(entry, context);
    });
};
const deserializeAws_json1_1AnomalyScore = (output, context) => {
    return {
        CurrentScore: output.CurrentScore !== undefined && output.CurrentScore !== null ? output.CurrentScore : undefined,
        MaxScore: output.MaxScore !== undefined && output.MaxScore !== null ? output.MaxScore : undefined,
    };
};
const deserializeAws_json1_1AnomalySubscription = (output, context) => {
    return {
        AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
        Frequency: output.Frequency !== undefined && output.Frequency !== null ? output.Frequency : undefined,
        MonitorArnList: output.MonitorArnList !== undefined && output.MonitorArnList !== null
            ? deserializeAws_json1_1MonitorArnList(output.MonitorArnList, context)
            : undefined,
        Subscribers: output.Subscribers !== undefined && output.Subscribers !== null
            ? deserializeAws_json1_1Subscribers(output.Subscribers, context)
            : undefined,
        SubscriptionArn: output.SubscriptionArn !== undefined && output.SubscriptionArn !== null ? output.SubscriptionArn : undefined,
        SubscriptionName: output.SubscriptionName !== undefined && output.SubscriptionName !== null ? output.SubscriptionName : undefined,
        Threshold: output.Threshold !== undefined && output.Threshold !== null ? output.Threshold : undefined,
    };
};
const deserializeAws_json1_1AnomalySubscriptions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AnomalySubscription(entry, context);
    });
};
const deserializeAws_json1_1Attributes = (output, context) => {
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
const deserializeAws_json1_1BillExpirationException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1CostCategory = (output, context) => {
    return {
        CostCategoryArn: output.CostCategoryArn !== undefined && output.CostCategoryArn !== null ? output.CostCategoryArn : undefined,
        DefaultValue: output.DefaultValue !== undefined && output.DefaultValue !== null ? output.DefaultValue : undefined,
        EffectiveEnd: output.EffectiveEnd !== undefined && output.EffectiveEnd !== null ? output.EffectiveEnd : undefined,
        EffectiveStart: output.EffectiveStart !== undefined && output.EffectiveStart !== null ? output.EffectiveStart : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        ProcessingStatus: output.ProcessingStatus !== undefined && output.ProcessingStatus !== null
            ? deserializeAws_json1_1CostCategoryProcessingStatusList(output.ProcessingStatus, context)
            : undefined,
        RuleVersion: output.RuleVersion !== undefined && output.RuleVersion !== null ? output.RuleVersion : undefined,
        Rules: output.Rules !== undefined && output.Rules !== null
            ? deserializeAws_json1_1CostCategoryRulesList(output.Rules, context)
            : undefined,
    };
};
const deserializeAws_json1_1CostCategoryInheritedValueDimension = (output, context) => {
    return {
        DimensionKey: output.DimensionKey !== undefined && output.DimensionKey !== null ? output.DimensionKey : undefined,
        DimensionName: output.DimensionName !== undefined && output.DimensionName !== null ? output.DimensionName : undefined,
    };
};
const deserializeAws_json1_1CostCategoryNamesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1CostCategoryProcessingStatus = (output, context) => {
    return {
        Component: output.Component !== undefined && output.Component !== null ? output.Component : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1CostCategoryProcessingStatusList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CostCategoryProcessingStatus(entry, context);
    });
};
const deserializeAws_json1_1CostCategoryReference = (output, context) => {
    return {
        CostCategoryArn: output.CostCategoryArn !== undefined && output.CostCategoryArn !== null ? output.CostCategoryArn : undefined,
        DefaultValue: output.DefaultValue !== undefined && output.DefaultValue !== null ? output.DefaultValue : undefined,
        EffectiveEnd: output.EffectiveEnd !== undefined && output.EffectiveEnd !== null ? output.EffectiveEnd : undefined,
        EffectiveStart: output.EffectiveStart !== undefined && output.EffectiveStart !== null ? output.EffectiveStart : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        NumberOfRules: output.NumberOfRules !== undefined && output.NumberOfRules !== null ? output.NumberOfRules : undefined,
        ProcessingStatus: output.ProcessingStatus !== undefined && output.ProcessingStatus !== null
            ? deserializeAws_json1_1CostCategoryProcessingStatusList(output.ProcessingStatus, context)
            : undefined,
        Values: output.Values !== undefined && output.Values !== null
            ? deserializeAws_json1_1CostCategoryValuesList(output.Values, context)
            : undefined,
    };
};
const deserializeAws_json1_1CostCategoryReferencesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CostCategoryReference(entry, context);
    });
};
const deserializeAws_json1_1CostCategoryRule = (output, context) => {
    return {
        InheritedValue: output.InheritedValue !== undefined && output.InheritedValue !== null
            ? deserializeAws_json1_1CostCategoryInheritedValueDimension(output.InheritedValue, context)
            : undefined,
        Rule: output.Rule !== undefined && output.Rule !== null
            ? deserializeAws_json1_1Expression(output.Rule, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1CostCategoryRulesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CostCategoryRule(entry, context);
    });
};
const deserializeAws_json1_1CostCategoryValues = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        MatchOptions: output.MatchOptions !== undefined && output.MatchOptions !== null
            ? deserializeAws_json1_1MatchOptions(output.MatchOptions, context)
            : undefined,
        Values: output.Values !== undefined && output.Values !== null
            ? deserializeAws_json1_1Values(output.Values, context)
            : undefined,
    };
};
const deserializeAws_json1_1CostCategoryValuesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1Coverage = (output, context) => {
    return {
        CoverageCost: output.CoverageCost !== undefined && output.CoverageCost !== null
            ? deserializeAws_json1_1CoverageCost(output.CoverageCost, context)
            : undefined,
        CoverageHours: output.CoverageHours !== undefined && output.CoverageHours !== null
            ? deserializeAws_json1_1CoverageHours(output.CoverageHours, context)
            : undefined,
        CoverageNormalizedUnits: output.CoverageNormalizedUnits !== undefined && output.CoverageNormalizedUnits !== null
            ? deserializeAws_json1_1CoverageNormalizedUnits(output.CoverageNormalizedUnits, context)
            : undefined,
    };
};
const deserializeAws_json1_1CoverageByTime = (output, context) => {
    return {
        Groups: output.Groups !== undefined && output.Groups !== null
            ? deserializeAws_json1_1ReservationCoverageGroups(output.Groups, context)
            : undefined,
        TimePeriod: output.TimePeriod !== undefined && output.TimePeriod !== null
            ? deserializeAws_json1_1DateInterval(output.TimePeriod, context)
            : undefined,
        Total: output.Total !== undefined && output.Total !== null
            ? deserializeAws_json1_1Coverage(output.Total, context)
            : undefined,
    };
};
const deserializeAws_json1_1CoverageCost = (output, context) => {
    return {
        OnDemandCost: output.OnDemandCost !== undefined && output.OnDemandCost !== null ? output.OnDemandCost : undefined,
    };
};
const deserializeAws_json1_1CoverageHours = (output, context) => {
    return {
        CoverageHoursPercentage: output.CoverageHoursPercentage !== undefined && output.CoverageHoursPercentage !== null
            ? output.CoverageHoursPercentage
            : undefined,
        OnDemandHours: output.OnDemandHours !== undefined && output.OnDemandHours !== null ? output.OnDemandHours : undefined,
        ReservedHours: output.ReservedHours !== undefined && output.ReservedHours !== null ? output.ReservedHours : undefined,
        TotalRunningHours: output.TotalRunningHours !== undefined && output.TotalRunningHours !== null
            ? output.TotalRunningHours
            : undefined,
    };
};
const deserializeAws_json1_1CoverageNormalizedUnits = (output, context) => {
    return {
        CoverageNormalizedUnitsPercentage: output.CoverageNormalizedUnitsPercentage !== undefined && output.CoverageNormalizedUnitsPercentage !== null
            ? output.CoverageNormalizedUnitsPercentage
            : undefined,
        OnDemandNormalizedUnits: output.OnDemandNormalizedUnits !== undefined && output.OnDemandNormalizedUnits !== null
            ? output.OnDemandNormalizedUnits
            : undefined,
        ReservedNormalizedUnits: output.ReservedNormalizedUnits !== undefined && output.ReservedNormalizedUnits !== null
            ? output.ReservedNormalizedUnits
            : undefined,
        TotalRunningNormalizedUnits: output.TotalRunningNormalizedUnits !== undefined && output.TotalRunningNormalizedUnits !== null
            ? output.TotalRunningNormalizedUnits
            : undefined,
    };
};
const deserializeAws_json1_1CoveragesByTime = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CoverageByTime(entry, context);
    });
};
const deserializeAws_json1_1CreateAnomalyMonitorResponse = (output, context) => {
    return {
        MonitorArn: output.MonitorArn !== undefined && output.MonitorArn !== null ? output.MonitorArn : undefined,
    };
};
const deserializeAws_json1_1CreateAnomalySubscriptionResponse = (output, context) => {
    return {
        SubscriptionArn: output.SubscriptionArn !== undefined && output.SubscriptionArn !== null ? output.SubscriptionArn : undefined,
    };
};
const deserializeAws_json1_1CreateCostCategoryDefinitionResponse = (output, context) => {
    return {
        CostCategoryArn: output.CostCategoryArn !== undefined && output.CostCategoryArn !== null ? output.CostCategoryArn : undefined,
        EffectiveStart: output.EffectiveStart !== undefined && output.EffectiveStart !== null ? output.EffectiveStart : undefined,
    };
};
const deserializeAws_json1_1CurrentInstance = (output, context) => {
    return {
        CurrencyCode: output.CurrencyCode !== undefined && output.CurrencyCode !== null ? output.CurrencyCode : undefined,
        InstanceName: output.InstanceName !== undefined && output.InstanceName !== null ? output.InstanceName : undefined,
        MonthlyCost: output.MonthlyCost !== undefined && output.MonthlyCost !== null ? output.MonthlyCost : undefined,
        OnDemandHoursInLookbackPeriod: output.OnDemandHoursInLookbackPeriod !== undefined && output.OnDemandHoursInLookbackPeriod !== null
            ? output.OnDemandHoursInLookbackPeriod
            : undefined,
        ReservationCoveredHoursInLookbackPeriod: output.ReservationCoveredHoursInLookbackPeriod !== undefined &&
            output.ReservationCoveredHoursInLookbackPeriod !== null
            ? output.ReservationCoveredHoursInLookbackPeriod
            : undefined,
        ResourceDetails: output.ResourceDetails !== undefined && output.ResourceDetails !== null
            ? deserializeAws_json1_1ResourceDetails(output.ResourceDetails, context)
            : undefined,
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
        ResourceUtilization: output.ResourceUtilization !== undefined && output.ResourceUtilization !== null
            ? deserializeAws_json1_1ResourceUtilization(output.ResourceUtilization, context)
            : undefined,
        SavingsPlansCoveredHoursInLookbackPeriod: output.SavingsPlansCoveredHoursInLookbackPeriod !== undefined &&
            output.SavingsPlansCoveredHoursInLookbackPeriod !== null
            ? output.SavingsPlansCoveredHoursInLookbackPeriod
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagValuesList(output.Tags, context)
            : undefined,
        TotalRunningHoursInLookbackPeriod: output.TotalRunningHoursInLookbackPeriod !== undefined && output.TotalRunningHoursInLookbackPeriod !== null
            ? output.TotalRunningHoursInLookbackPeriod
            : undefined,
    };
};
const deserializeAws_json1_1DataUnavailableException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1DateInterval = (output, context) => {
    return {
        End: output.End !== undefined && output.End !== null ? output.End : undefined,
        Start: output.Start !== undefined && output.Start !== null ? output.Start : undefined,
    };
};
const deserializeAws_json1_1DeleteAnomalyMonitorResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteAnomalySubscriptionResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteCostCategoryDefinitionResponse = (output, context) => {
    return {
        CostCategoryArn: output.CostCategoryArn !== undefined && output.CostCategoryArn !== null ? output.CostCategoryArn : undefined,
        EffectiveEnd: output.EffectiveEnd !== undefined && output.EffectiveEnd !== null ? output.EffectiveEnd : undefined,
    };
};
const deserializeAws_json1_1DescribeCostCategoryDefinitionResponse = (output, context) => {
    return {
        CostCategory: output.CostCategory !== undefined && output.CostCategory !== null
            ? deserializeAws_json1_1CostCategory(output.CostCategory, context)
            : undefined,
    };
};
const deserializeAws_json1_1DimensionValues = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        MatchOptions: output.MatchOptions !== undefined && output.MatchOptions !== null
            ? deserializeAws_json1_1MatchOptions(output.MatchOptions, context)
            : undefined,
        Values: output.Values !== undefined && output.Values !== null
            ? deserializeAws_json1_1Values(output.Values, context)
            : undefined,
    };
};
const deserializeAws_json1_1DimensionValuesWithAttributes = (output, context) => {
    return {
        Attributes: output.Attributes !== undefined && output.Attributes !== null
            ? deserializeAws_json1_1Attributes(output.Attributes, context)
            : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1DimensionValuesWithAttributesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DimensionValuesWithAttributes(entry, context);
    });
};
const deserializeAws_json1_1DiskResourceUtilization = (output, context) => {
    return {
        DiskReadBytesPerSecond: output.DiskReadBytesPerSecond !== undefined && output.DiskReadBytesPerSecond !== null
            ? output.DiskReadBytesPerSecond
            : undefined,
        DiskReadOpsPerSecond: output.DiskReadOpsPerSecond !== undefined && output.DiskReadOpsPerSecond !== null
            ? output.DiskReadOpsPerSecond
            : undefined,
        DiskWriteBytesPerSecond: output.DiskWriteBytesPerSecond !== undefined && output.DiskWriteBytesPerSecond !== null
            ? output.DiskWriteBytesPerSecond
            : undefined,
        DiskWriteOpsPerSecond: output.DiskWriteOpsPerSecond !== undefined && output.DiskWriteOpsPerSecond !== null
            ? output.DiskWriteOpsPerSecond
            : undefined,
    };
};
const deserializeAws_json1_1EBSResourceUtilization = (output, context) => {
    return {
        EbsReadBytesPerSecond: output.EbsReadBytesPerSecond !== undefined && output.EbsReadBytesPerSecond !== null
            ? output.EbsReadBytesPerSecond
            : undefined,
        EbsReadOpsPerSecond: output.EbsReadOpsPerSecond !== undefined && output.EbsReadOpsPerSecond !== null
            ? output.EbsReadOpsPerSecond
            : undefined,
        EbsWriteBytesPerSecond: output.EbsWriteBytesPerSecond !== undefined && output.EbsWriteBytesPerSecond !== null
            ? output.EbsWriteBytesPerSecond
            : undefined,
        EbsWriteOpsPerSecond: output.EbsWriteOpsPerSecond !== undefined && output.EbsWriteOpsPerSecond !== null
            ? output.EbsWriteOpsPerSecond
            : undefined,
    };
};
const deserializeAws_json1_1EC2InstanceDetails = (output, context) => {
    return {
        AvailabilityZone: output.AvailabilityZone !== undefined && output.AvailabilityZone !== null ? output.AvailabilityZone : undefined,
        CurrentGeneration: output.CurrentGeneration !== undefined && output.CurrentGeneration !== null
            ? output.CurrentGeneration
            : undefined,
        Family: output.Family !== undefined && output.Family !== null ? output.Family : undefined,
        InstanceType: output.InstanceType !== undefined && output.InstanceType !== null ? output.InstanceType : undefined,
        Platform: output.Platform !== undefined && output.Platform !== null ? output.Platform : undefined,
        Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
        SizeFlexEligible: output.SizeFlexEligible !== undefined && output.SizeFlexEligible !== null ? output.SizeFlexEligible : undefined,
        Tenancy: output.Tenancy !== undefined && output.Tenancy !== null ? output.Tenancy : undefined,
    };
};
const deserializeAws_json1_1EC2ResourceDetails = (output, context) => {
    return {
        HourlyOnDemandRate: output.HourlyOnDemandRate !== undefined && output.HourlyOnDemandRate !== null
            ? output.HourlyOnDemandRate
            : undefined,
        InstanceType: output.InstanceType !== undefined && output.InstanceType !== null ? output.InstanceType : undefined,
        Memory: output.Memory !== undefined && output.Memory !== null ? output.Memory : undefined,
        NetworkPerformance: output.NetworkPerformance !== undefined && output.NetworkPerformance !== null
            ? output.NetworkPerformance
            : undefined,
        Platform: output.Platform !== undefined && output.Platform !== null ? output.Platform : undefined,
        Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
        Sku: output.Sku !== undefined && output.Sku !== null ? output.Sku : undefined,
        Storage: output.Storage !== undefined && output.Storage !== null ? output.Storage : undefined,
        Vcpu: output.Vcpu !== undefined && output.Vcpu !== null ? output.Vcpu : undefined,
    };
};
const deserializeAws_json1_1EC2ResourceUtilization = (output, context) => {
    return {
        DiskResourceUtilization: output.DiskResourceUtilization !== undefined && output.DiskResourceUtilization !== null
            ? deserializeAws_json1_1DiskResourceUtilization(output.DiskResourceUtilization, context)
            : undefined,
        EBSResourceUtilization: output.EBSResourceUtilization !== undefined && output.EBSResourceUtilization !== null
            ? deserializeAws_json1_1EBSResourceUtilization(output.EBSResourceUtilization, context)
            : undefined,
        MaxCpuUtilizationPercentage: output.MaxCpuUtilizationPercentage !== undefined && output.MaxCpuUtilizationPercentage !== null
            ? output.MaxCpuUtilizationPercentage
            : undefined,
        MaxMemoryUtilizationPercentage: output.MaxMemoryUtilizationPercentage !== undefined && output.MaxMemoryUtilizationPercentage !== null
            ? output.MaxMemoryUtilizationPercentage
            : undefined,
        MaxStorageUtilizationPercentage: output.MaxStorageUtilizationPercentage !== undefined && output.MaxStorageUtilizationPercentage !== null
            ? output.MaxStorageUtilizationPercentage
            : undefined,
        NetworkResourceUtilization: output.NetworkResourceUtilization !== undefined && output.NetworkResourceUtilization !== null
            ? deserializeAws_json1_1NetworkResourceUtilization(output.NetworkResourceUtilization, context)
            : undefined,
    };
};
const deserializeAws_json1_1EC2Specification = (output, context) => {
    return {
        OfferingClass: output.OfferingClass !== undefined && output.OfferingClass !== null ? output.OfferingClass : undefined,
    };
};
const deserializeAws_json1_1ElastiCacheInstanceDetails = (output, context) => {
    return {
        CurrentGeneration: output.CurrentGeneration !== undefined && output.CurrentGeneration !== null
            ? output.CurrentGeneration
            : undefined,
        Family: output.Family !== undefined && output.Family !== null ? output.Family : undefined,
        NodeType: output.NodeType !== undefined && output.NodeType !== null ? output.NodeType : undefined,
        ProductDescription: output.ProductDescription !== undefined && output.ProductDescription !== null
            ? output.ProductDescription
            : undefined,
        Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
        SizeFlexEligible: output.SizeFlexEligible !== undefined && output.SizeFlexEligible !== null ? output.SizeFlexEligible : undefined,
    };
};
const deserializeAws_json1_1ESInstanceDetails = (output, context) => {
    return {
        CurrentGeneration: output.CurrentGeneration !== undefined && output.CurrentGeneration !== null
            ? output.CurrentGeneration
            : undefined,
        InstanceClass: output.InstanceClass !== undefined && output.InstanceClass !== null ? output.InstanceClass : undefined,
        InstanceSize: output.InstanceSize !== undefined && output.InstanceSize !== null ? output.InstanceSize : undefined,
        Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
        SizeFlexEligible: output.SizeFlexEligible !== undefined && output.SizeFlexEligible !== null ? output.SizeFlexEligible : undefined,
    };
};
const deserializeAws_json1_1Expression = (output, context) => {
    return {
        And: output.And !== undefined && output.And !== null
            ? deserializeAws_json1_1Expressions(output.And, context)
            : undefined,
        CostCategories: output.CostCategories !== undefined && output.CostCategories !== null
            ? deserializeAws_json1_1CostCategoryValues(output.CostCategories, context)
            : undefined,
        Dimensions: output.Dimensions !== undefined && output.Dimensions !== null
            ? deserializeAws_json1_1DimensionValues(output.Dimensions, context)
            : undefined,
        Not: output.Not !== undefined && output.Not !== null
            ? deserializeAws_json1_1Expression(output.Not, context)
            : undefined,
        Or: output.Or !== undefined && output.Or !== null ? deserializeAws_json1_1Expressions(output.Or, context) : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagValues(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1Expressions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Expression(entry, context);
    });
};
const deserializeAws_json1_1FindingReasonCodes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ForecastResult = (output, context) => {
    return {
        MeanValue: output.MeanValue !== undefined && output.MeanValue !== null ? output.MeanValue : undefined,
        PredictionIntervalLowerBound: output.PredictionIntervalLowerBound !== undefined && output.PredictionIntervalLowerBound !== null
            ? output.PredictionIntervalLowerBound
            : undefined,
        PredictionIntervalUpperBound: output.PredictionIntervalUpperBound !== undefined && output.PredictionIntervalUpperBound !== null
            ? output.PredictionIntervalUpperBound
            : undefined,
        TimePeriod: output.TimePeriod !== undefined && output.TimePeriod !== null
            ? deserializeAws_json1_1DateInterval(output.TimePeriod, context)
            : undefined,
    };
};
const deserializeAws_json1_1ForecastResultsByTime = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ForecastResult(entry, context);
    });
};
const deserializeAws_json1_1GetAnomaliesResponse = (output, context) => {
    return {
        Anomalies: output.Anomalies !== undefined && output.Anomalies !== null
            ? deserializeAws_json1_1Anomalies(output.Anomalies, context)
            : undefined,
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
    };
};
const deserializeAws_json1_1GetAnomalyMonitorsResponse = (output, context) => {
    return {
        AnomalyMonitors: output.AnomalyMonitors !== undefined && output.AnomalyMonitors !== null
            ? deserializeAws_json1_1AnomalyMonitors(output.AnomalyMonitors, context)
            : undefined,
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
    };
};
const deserializeAws_json1_1GetAnomalySubscriptionsResponse = (output, context) => {
    return {
        AnomalySubscriptions: output.AnomalySubscriptions !== undefined && output.AnomalySubscriptions !== null
            ? deserializeAws_json1_1AnomalySubscriptions(output.AnomalySubscriptions, context)
            : undefined,
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
    };
};
const deserializeAws_json1_1GetCostAndUsageResponse = (output, context) => {
    return {
        DimensionValueAttributes: output.DimensionValueAttributes !== undefined && output.DimensionValueAttributes !== null
            ? deserializeAws_json1_1DimensionValuesWithAttributesList(output.DimensionValueAttributes, context)
            : undefined,
        GroupDefinitions: output.GroupDefinitions !== undefined && output.GroupDefinitions !== null
            ? deserializeAws_json1_1GroupDefinitions(output.GroupDefinitions, context)
            : undefined,
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        ResultsByTime: output.ResultsByTime !== undefined && output.ResultsByTime !== null
            ? deserializeAws_json1_1ResultsByTime(output.ResultsByTime, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetCostAndUsageWithResourcesResponse = (output, context) => {
    return {
        DimensionValueAttributes: output.DimensionValueAttributes !== undefined && output.DimensionValueAttributes !== null
            ? deserializeAws_json1_1DimensionValuesWithAttributesList(output.DimensionValueAttributes, context)
            : undefined,
        GroupDefinitions: output.GroupDefinitions !== undefined && output.GroupDefinitions !== null
            ? deserializeAws_json1_1GroupDefinitions(output.GroupDefinitions, context)
            : undefined,
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        ResultsByTime: output.ResultsByTime !== undefined && output.ResultsByTime !== null
            ? deserializeAws_json1_1ResultsByTime(output.ResultsByTime, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetCostCategoriesResponse = (output, context) => {
    return {
        CostCategoryNames: output.CostCategoryNames !== undefined && output.CostCategoryNames !== null
            ? deserializeAws_json1_1CostCategoryNamesList(output.CostCategoryNames, context)
            : undefined,
        CostCategoryValues: output.CostCategoryValues !== undefined && output.CostCategoryValues !== null
            ? deserializeAws_json1_1CostCategoryValuesList(output.CostCategoryValues, context)
            : undefined,
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        ReturnSize: output.ReturnSize !== undefined && output.ReturnSize !== null ? output.ReturnSize : undefined,
        TotalSize: output.TotalSize !== undefined && output.TotalSize !== null ? output.TotalSize : undefined,
    };
};
const deserializeAws_json1_1GetCostForecastResponse = (output, context) => {
    return {
        ForecastResultsByTime: output.ForecastResultsByTime !== undefined && output.ForecastResultsByTime !== null
            ? deserializeAws_json1_1ForecastResultsByTime(output.ForecastResultsByTime, context)
            : undefined,
        Total: output.Total !== undefined && output.Total !== null
            ? deserializeAws_json1_1MetricValue(output.Total, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetDimensionValuesResponse = (output, context) => {
    return {
        DimensionValues: output.DimensionValues !== undefined && output.DimensionValues !== null
            ? deserializeAws_json1_1DimensionValuesWithAttributesList(output.DimensionValues, context)
            : undefined,
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        ReturnSize: output.ReturnSize !== undefined && output.ReturnSize !== null ? output.ReturnSize : undefined,
        TotalSize: output.TotalSize !== undefined && output.TotalSize !== null ? output.TotalSize : undefined,
    };
};
const deserializeAws_json1_1GetReservationCoverageResponse = (output, context) => {
    return {
        CoveragesByTime: output.CoveragesByTime !== undefined && output.CoveragesByTime !== null
            ? deserializeAws_json1_1CoveragesByTime(output.CoveragesByTime, context)
            : undefined,
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        Total: output.Total !== undefined && output.Total !== null
            ? deserializeAws_json1_1Coverage(output.Total, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetReservationPurchaseRecommendationResponse = (output, context) => {
    return {
        Metadata: output.Metadata !== undefined && output.Metadata !== null
            ? deserializeAws_json1_1ReservationPurchaseRecommendationMetadata(output.Metadata, context)
            : undefined,
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        Recommendations: output.Recommendations !== undefined && output.Recommendations !== null
            ? deserializeAws_json1_1ReservationPurchaseRecommendations(output.Recommendations, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetReservationUtilizationResponse = (output, context) => {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        Total: output.Total !== undefined && output.Total !== null
            ? deserializeAws_json1_1ReservationAggregates(output.Total, context)
            : undefined,
        UtilizationsByTime: output.UtilizationsByTime !== undefined && output.UtilizationsByTime !== null
            ? deserializeAws_json1_1UtilizationsByTime(output.UtilizationsByTime, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetRightsizingRecommendationResponse = (output, context) => {
    return {
        Configuration: output.Configuration !== undefined && output.Configuration !== null
            ? deserializeAws_json1_1RightsizingRecommendationConfiguration(output.Configuration, context)
            : undefined,
        Metadata: output.Metadata !== undefined && output.Metadata !== null
            ? deserializeAws_json1_1RightsizingRecommendationMetadata(output.Metadata, context)
            : undefined,
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        RightsizingRecommendations: output.RightsizingRecommendations !== undefined && output.RightsizingRecommendations !== null
            ? deserializeAws_json1_1RightsizingRecommendationList(output.RightsizingRecommendations, context)
            : undefined,
        Summary: output.Summary !== undefined && output.Summary !== null
            ? deserializeAws_json1_1RightsizingRecommendationSummary(output.Summary, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetSavingsPlansCoverageResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        SavingsPlansCoverages: output.SavingsPlansCoverages !== undefined && output.SavingsPlansCoverages !== null
            ? deserializeAws_json1_1SavingsPlansCoverages(output.SavingsPlansCoverages, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationResponse = (output, context) => {
    return {
        Metadata: output.Metadata !== undefined && output.Metadata !== null
            ? deserializeAws_json1_1SavingsPlansPurchaseRecommendationMetadata(output.Metadata, context)
            : undefined,
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        SavingsPlansPurchaseRecommendation: output.SavingsPlansPurchaseRecommendation !== undefined && output.SavingsPlansPurchaseRecommendation !== null
            ? deserializeAws_json1_1SavingsPlansPurchaseRecommendation(output.SavingsPlansPurchaseRecommendation, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetSavingsPlansUtilizationDetailsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        SavingsPlansUtilizationDetails: output.SavingsPlansUtilizationDetails !== undefined && output.SavingsPlansUtilizationDetails !== null
            ? deserializeAws_json1_1SavingsPlansUtilizationDetails(output.SavingsPlansUtilizationDetails, context)
            : undefined,
        TimePeriod: output.TimePeriod !== undefined && output.TimePeriod !== null
            ? deserializeAws_json1_1DateInterval(output.TimePeriod, context)
            : undefined,
        Total: output.Total !== undefined && output.Total !== null
            ? deserializeAws_json1_1SavingsPlansUtilizationAggregates(output.Total, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetSavingsPlansUtilizationResponse = (output, context) => {
    return {
        SavingsPlansUtilizationsByTime: output.SavingsPlansUtilizationsByTime !== undefined && output.SavingsPlansUtilizationsByTime !== null
            ? deserializeAws_json1_1SavingsPlansUtilizationsByTime(output.SavingsPlansUtilizationsByTime, context)
            : undefined,
        Total: output.Total !== undefined && output.Total !== null
            ? deserializeAws_json1_1SavingsPlansUtilizationAggregates(output.Total, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetTagsResponse = (output, context) => {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        ReturnSize: output.ReturnSize !== undefined && output.ReturnSize !== null ? output.ReturnSize : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagList(output.Tags, context)
            : undefined,
        TotalSize: output.TotalSize !== undefined && output.TotalSize !== null ? output.TotalSize : undefined,
    };
};
const deserializeAws_json1_1GetUsageForecastResponse = (output, context) => {
    return {
        ForecastResultsByTime: output.ForecastResultsByTime !== undefined && output.ForecastResultsByTime !== null
            ? deserializeAws_json1_1ForecastResultsByTime(output.ForecastResultsByTime, context)
            : undefined,
        Total: output.Total !== undefined && output.Total !== null
            ? deserializeAws_json1_1MetricValue(output.Total, context)
            : undefined,
    };
};
const deserializeAws_json1_1Group = (output, context) => {
    return {
        Keys: output.Keys !== undefined && output.Keys !== null ? deserializeAws_json1_1Keys(output.Keys, context) : undefined,
        Metrics: output.Metrics !== undefined && output.Metrics !== null
            ? deserializeAws_json1_1Metrics(output.Metrics, context)
            : undefined,
    };
};
const deserializeAws_json1_1GroupDefinition = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1GroupDefinitions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1GroupDefinition(entry, context);
    });
};
const deserializeAws_json1_1Groups = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Group(entry, context);
    });
};
const deserializeAws_json1_1Impact = (output, context) => {
    return {
        MaxImpact: output.MaxImpact !== undefined && output.MaxImpact !== null ? output.MaxImpact : undefined,
        TotalImpact: output.TotalImpact !== undefined && output.TotalImpact !== null ? output.TotalImpact : undefined,
    };
};
const deserializeAws_json1_1InstanceDetails = (output, context) => {
    return {
        EC2InstanceDetails: output.EC2InstanceDetails !== undefined && output.EC2InstanceDetails !== null
            ? deserializeAws_json1_1EC2InstanceDetails(output.EC2InstanceDetails, context)
            : undefined,
        ESInstanceDetails: output.ESInstanceDetails !== undefined && output.ESInstanceDetails !== null
            ? deserializeAws_json1_1ESInstanceDetails(output.ESInstanceDetails, context)
            : undefined,
        ElastiCacheInstanceDetails: output.ElastiCacheInstanceDetails !== undefined && output.ElastiCacheInstanceDetails !== null
            ? deserializeAws_json1_1ElastiCacheInstanceDetails(output.ElastiCacheInstanceDetails, context)
            : undefined,
        RDSInstanceDetails: output.RDSInstanceDetails !== undefined && output.RDSInstanceDetails !== null
            ? deserializeAws_json1_1RDSInstanceDetails(output.RDSInstanceDetails, context)
            : undefined,
        RedshiftInstanceDetails: output.RedshiftInstanceDetails !== undefined && output.RedshiftInstanceDetails !== null
            ? deserializeAws_json1_1RedshiftInstanceDetails(output.RedshiftInstanceDetails, context)
            : undefined,
    };
};
const deserializeAws_json1_1InvalidNextTokenException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1Keys = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ListCostCategoryDefinitionsResponse = (output, context) => {
    return {
        CostCategoryReferences: output.CostCategoryReferences !== undefined && output.CostCategoryReferences !== null
            ? deserializeAws_json1_1CostCategoryReferencesList(output.CostCategoryReferences, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1MatchOptions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1Metrics = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_1MetricValue(value, context),
        };
    }, {});
};
const deserializeAws_json1_1MetricValue = (output, context) => {
    return {
        Amount: output.Amount !== undefined && output.Amount !== null ? output.Amount : undefined,
        Unit: output.Unit !== undefined && output.Unit !== null ? output.Unit : undefined,
    };
};
const deserializeAws_json1_1ModifyRecommendationDetail = (output, context) => {
    return {
        TargetInstances: output.TargetInstances !== undefined && output.TargetInstances !== null
            ? deserializeAws_json1_1TargetInstancesList(output.TargetInstances, context)
            : undefined,
    };
};
const deserializeAws_json1_1MonitorArnList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1NetworkResourceUtilization = (output, context) => {
    return {
        NetworkInBytesPerSecond: output.NetworkInBytesPerSecond !== undefined && output.NetworkInBytesPerSecond !== null
            ? output.NetworkInBytesPerSecond
            : undefined,
        NetworkOutBytesPerSecond: output.NetworkOutBytesPerSecond !== undefined && output.NetworkOutBytesPerSecond !== null
            ? output.NetworkOutBytesPerSecond
            : undefined,
        NetworkPacketsInPerSecond: output.NetworkPacketsInPerSecond !== undefined && output.NetworkPacketsInPerSecond !== null
            ? output.NetworkPacketsInPerSecond
            : undefined,
        NetworkPacketsOutPerSecond: output.NetworkPacketsOutPerSecond !== undefined && output.NetworkPacketsOutPerSecond !== null
            ? output.NetworkPacketsOutPerSecond
            : undefined,
    };
};
const deserializeAws_json1_1PlatformDifferences = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ProvideAnomalyFeedbackResponse = (output, context) => {
    return {
        AnomalyId: output.AnomalyId !== undefined && output.AnomalyId !== null ? output.AnomalyId : undefined,
    };
};
const deserializeAws_json1_1RDSInstanceDetails = (output, context) => {
    return {
        CurrentGeneration: output.CurrentGeneration !== undefined && output.CurrentGeneration !== null
            ? output.CurrentGeneration
            : undefined,
        DatabaseEdition: output.DatabaseEdition !== undefined && output.DatabaseEdition !== null ? output.DatabaseEdition : undefined,
        DatabaseEngine: output.DatabaseEngine !== undefined && output.DatabaseEngine !== null ? output.DatabaseEngine : undefined,
        DeploymentOption: output.DeploymentOption !== undefined && output.DeploymentOption !== null ? output.DeploymentOption : undefined,
        Family: output.Family !== undefined && output.Family !== null ? output.Family : undefined,
        InstanceType: output.InstanceType !== undefined && output.InstanceType !== null ? output.InstanceType : undefined,
        LicenseModel: output.LicenseModel !== undefined && output.LicenseModel !== null ? output.LicenseModel : undefined,
        Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
        SizeFlexEligible: output.SizeFlexEligible !== undefined && output.SizeFlexEligible !== null ? output.SizeFlexEligible : undefined,
    };
};
const deserializeAws_json1_1RedshiftInstanceDetails = (output, context) => {
    return {
        CurrentGeneration: output.CurrentGeneration !== undefined && output.CurrentGeneration !== null
            ? output.CurrentGeneration
            : undefined,
        Family: output.Family !== undefined && output.Family !== null ? output.Family : undefined,
        NodeType: output.NodeType !== undefined && output.NodeType !== null ? output.NodeType : undefined,
        Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
        SizeFlexEligible: output.SizeFlexEligible !== undefined && output.SizeFlexEligible !== null ? output.SizeFlexEligible : undefined,
    };
};
const deserializeAws_json1_1RequestChangedException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ReservationAggregates = (output, context) => {
    return {
        AmortizedRecurringFee: output.AmortizedRecurringFee !== undefined && output.AmortizedRecurringFee !== null
            ? output.AmortizedRecurringFee
            : undefined,
        AmortizedUpfrontFee: output.AmortizedUpfrontFee !== undefined && output.AmortizedUpfrontFee !== null
            ? output.AmortizedUpfrontFee
            : undefined,
        NetRISavings: output.NetRISavings !== undefined && output.NetRISavings !== null ? output.NetRISavings : undefined,
        OnDemandCostOfRIHoursUsed: output.OnDemandCostOfRIHoursUsed !== undefined && output.OnDemandCostOfRIHoursUsed !== null
            ? output.OnDemandCostOfRIHoursUsed
            : undefined,
        PurchasedHours: output.PurchasedHours !== undefined && output.PurchasedHours !== null ? output.PurchasedHours : undefined,
        PurchasedUnits: output.PurchasedUnits !== undefined && output.PurchasedUnits !== null ? output.PurchasedUnits : undefined,
        RICostForUnusedHours: output.RICostForUnusedHours !== undefined && output.RICostForUnusedHours !== null
            ? output.RICostForUnusedHours
            : undefined,
        RealizedSavings: output.RealizedSavings !== undefined && output.RealizedSavings !== null ? output.RealizedSavings : undefined,
        TotalActualHours: output.TotalActualHours !== undefined && output.TotalActualHours !== null ? output.TotalActualHours : undefined,
        TotalActualUnits: output.TotalActualUnits !== undefined && output.TotalActualUnits !== null ? output.TotalActualUnits : undefined,
        TotalAmortizedFee: output.TotalAmortizedFee !== undefined && output.TotalAmortizedFee !== null
            ? output.TotalAmortizedFee
            : undefined,
        TotalPotentialRISavings: output.TotalPotentialRISavings !== undefined && output.TotalPotentialRISavings !== null
            ? output.TotalPotentialRISavings
            : undefined,
        UnrealizedSavings: output.UnrealizedSavings !== undefined && output.UnrealizedSavings !== null
            ? output.UnrealizedSavings
            : undefined,
        UnusedHours: output.UnusedHours !== undefined && output.UnusedHours !== null ? output.UnusedHours : undefined,
        UnusedUnits: output.UnusedUnits !== undefined && output.UnusedUnits !== null ? output.UnusedUnits : undefined,
        UtilizationPercentage: output.UtilizationPercentage !== undefined && output.UtilizationPercentage !== null
            ? output.UtilizationPercentage
            : undefined,
        UtilizationPercentageInUnits: output.UtilizationPercentageInUnits !== undefined && output.UtilizationPercentageInUnits !== null
            ? output.UtilizationPercentageInUnits
            : undefined,
    };
};
const deserializeAws_json1_1ReservationCoverageGroup = (output, context) => {
    return {
        Attributes: output.Attributes !== undefined && output.Attributes !== null
            ? deserializeAws_json1_1Attributes(output.Attributes, context)
            : undefined,
        Coverage: output.Coverage !== undefined && output.Coverage !== null
            ? deserializeAws_json1_1Coverage(output.Coverage, context)
            : undefined,
    };
};
const deserializeAws_json1_1ReservationCoverageGroups = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReservationCoverageGroup(entry, context);
    });
};
const deserializeAws_json1_1ReservationPurchaseRecommendation = (output, context) => {
    return {
        AccountScope: output.AccountScope !== undefined && output.AccountScope !== null ? output.AccountScope : undefined,
        LookbackPeriodInDays: output.LookbackPeriodInDays !== undefined && output.LookbackPeriodInDays !== null
            ? output.LookbackPeriodInDays
            : undefined,
        PaymentOption: output.PaymentOption !== undefined && output.PaymentOption !== null ? output.PaymentOption : undefined,
        RecommendationDetails: output.RecommendationDetails !== undefined && output.RecommendationDetails !== null
            ? deserializeAws_json1_1ReservationPurchaseRecommendationDetails(output.RecommendationDetails, context)
            : undefined,
        RecommendationSummary: output.RecommendationSummary !== undefined && output.RecommendationSummary !== null
            ? deserializeAws_json1_1ReservationPurchaseRecommendationSummary(output.RecommendationSummary, context)
            : undefined,
        ServiceSpecification: output.ServiceSpecification !== undefined && output.ServiceSpecification !== null
            ? deserializeAws_json1_1ServiceSpecification(output.ServiceSpecification, context)
            : undefined,
        TermInYears: output.TermInYears !== undefined && output.TermInYears !== null ? output.TermInYears : undefined,
    };
};
const deserializeAws_json1_1ReservationPurchaseRecommendationDetail = (output, context) => {
    return {
        AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
        AverageNormalizedUnitsUsedPerHour: output.AverageNormalizedUnitsUsedPerHour !== undefined && output.AverageNormalizedUnitsUsedPerHour !== null
            ? output.AverageNormalizedUnitsUsedPerHour
            : undefined,
        AverageNumberOfInstancesUsedPerHour: output.AverageNumberOfInstancesUsedPerHour !== undefined && output.AverageNumberOfInstancesUsedPerHour !== null
            ? output.AverageNumberOfInstancesUsedPerHour
            : undefined,
        AverageUtilization: output.AverageUtilization !== undefined && output.AverageUtilization !== null
            ? output.AverageUtilization
            : undefined,
        CurrencyCode: output.CurrencyCode !== undefined && output.CurrencyCode !== null ? output.CurrencyCode : undefined,
        EstimatedBreakEvenInMonths: output.EstimatedBreakEvenInMonths !== undefined && output.EstimatedBreakEvenInMonths !== null
            ? output.EstimatedBreakEvenInMonths
            : undefined,
        EstimatedMonthlyOnDemandCost: output.EstimatedMonthlyOnDemandCost !== undefined && output.EstimatedMonthlyOnDemandCost !== null
            ? output.EstimatedMonthlyOnDemandCost
            : undefined,
        EstimatedMonthlySavingsAmount: output.EstimatedMonthlySavingsAmount !== undefined && output.EstimatedMonthlySavingsAmount !== null
            ? output.EstimatedMonthlySavingsAmount
            : undefined,
        EstimatedMonthlySavingsPercentage: output.EstimatedMonthlySavingsPercentage !== undefined && output.EstimatedMonthlySavingsPercentage !== null
            ? output.EstimatedMonthlySavingsPercentage
            : undefined,
        EstimatedReservationCostForLookbackPeriod: output.EstimatedReservationCostForLookbackPeriod !== undefined &&
            output.EstimatedReservationCostForLookbackPeriod !== null
            ? output.EstimatedReservationCostForLookbackPeriod
            : undefined,
        InstanceDetails: output.InstanceDetails !== undefined && output.InstanceDetails !== null
            ? deserializeAws_json1_1InstanceDetails(output.InstanceDetails, context)
            : undefined,
        MaximumNormalizedUnitsUsedPerHour: output.MaximumNormalizedUnitsUsedPerHour !== undefined && output.MaximumNormalizedUnitsUsedPerHour !== null
            ? output.MaximumNormalizedUnitsUsedPerHour
            : undefined,
        MaximumNumberOfInstancesUsedPerHour: output.MaximumNumberOfInstancesUsedPerHour !== undefined && output.MaximumNumberOfInstancesUsedPerHour !== null
            ? output.MaximumNumberOfInstancesUsedPerHour
            : undefined,
        MinimumNormalizedUnitsUsedPerHour: output.MinimumNormalizedUnitsUsedPerHour !== undefined && output.MinimumNormalizedUnitsUsedPerHour !== null
            ? output.MinimumNormalizedUnitsUsedPerHour
            : undefined,
        MinimumNumberOfInstancesUsedPerHour: output.MinimumNumberOfInstancesUsedPerHour !== undefined && output.MinimumNumberOfInstancesUsedPerHour !== null
            ? output.MinimumNumberOfInstancesUsedPerHour
            : undefined,
        RecommendedNormalizedUnitsToPurchase: output.RecommendedNormalizedUnitsToPurchase !== undefined && output.RecommendedNormalizedUnitsToPurchase !== null
            ? output.RecommendedNormalizedUnitsToPurchase
            : undefined,
        RecommendedNumberOfInstancesToPurchase: output.RecommendedNumberOfInstancesToPurchase !== undefined &&
            output.RecommendedNumberOfInstancesToPurchase !== null
            ? output.RecommendedNumberOfInstancesToPurchase
            : undefined,
        RecurringStandardMonthlyCost: output.RecurringStandardMonthlyCost !== undefined && output.RecurringStandardMonthlyCost !== null
            ? output.RecurringStandardMonthlyCost
            : undefined,
        UpfrontCost: output.UpfrontCost !== undefined && output.UpfrontCost !== null ? output.UpfrontCost : undefined,
    };
};
const deserializeAws_json1_1ReservationPurchaseRecommendationDetails = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReservationPurchaseRecommendationDetail(entry, context);
    });
};
const deserializeAws_json1_1ReservationPurchaseRecommendationMetadata = (output, context) => {
    return {
        GenerationTimestamp: output.GenerationTimestamp !== undefined && output.GenerationTimestamp !== null
            ? output.GenerationTimestamp
            : undefined,
        RecommendationId: output.RecommendationId !== undefined && output.RecommendationId !== null ? output.RecommendationId : undefined,
    };
};
const deserializeAws_json1_1ReservationPurchaseRecommendations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReservationPurchaseRecommendation(entry, context);
    });
};
const deserializeAws_json1_1ReservationPurchaseRecommendationSummary = (output, context) => {
    return {
        CurrencyCode: output.CurrencyCode !== undefined && output.CurrencyCode !== null ? output.CurrencyCode : undefined,
        TotalEstimatedMonthlySavingsAmount: output.TotalEstimatedMonthlySavingsAmount !== undefined && output.TotalEstimatedMonthlySavingsAmount !== null
            ? output.TotalEstimatedMonthlySavingsAmount
            : undefined,
        TotalEstimatedMonthlySavingsPercentage: output.TotalEstimatedMonthlySavingsPercentage !== undefined &&
            output.TotalEstimatedMonthlySavingsPercentage !== null
            ? output.TotalEstimatedMonthlySavingsPercentage
            : undefined,
    };
};
const deserializeAws_json1_1ReservationUtilizationGroup = (output, context) => {
    return {
        Attributes: output.Attributes !== undefined && output.Attributes !== null
            ? deserializeAws_json1_1Attributes(output.Attributes, context)
            : undefined,
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Utilization: output.Utilization !== undefined && output.Utilization !== null
            ? deserializeAws_json1_1ReservationAggregates(output.Utilization, context)
            : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1ReservationUtilizationGroups = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReservationUtilizationGroup(entry, context);
    });
};
const deserializeAws_json1_1ResourceDetails = (output, context) => {
    return {
        EC2ResourceDetails: output.EC2ResourceDetails !== undefined && output.EC2ResourceDetails !== null
            ? deserializeAws_json1_1EC2ResourceDetails(output.EC2ResourceDetails, context)
            : undefined,
    };
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ResourceUtilization = (output, context) => {
    return {
        EC2ResourceUtilization: output.EC2ResourceUtilization !== undefined && output.EC2ResourceUtilization !== null
            ? deserializeAws_json1_1EC2ResourceUtilization(output.EC2ResourceUtilization, context)
            : undefined,
    };
};
const deserializeAws_json1_1ResultByTime = (output, context) => {
    return {
        Estimated: output.Estimated !== undefined && output.Estimated !== null ? output.Estimated : undefined,
        Groups: output.Groups !== undefined && output.Groups !== null
            ? deserializeAws_json1_1Groups(output.Groups, context)
            : undefined,
        TimePeriod: output.TimePeriod !== undefined && output.TimePeriod !== null
            ? deserializeAws_json1_1DateInterval(output.TimePeriod, context)
            : undefined,
        Total: output.Total !== undefined && output.Total !== null
            ? deserializeAws_json1_1Metrics(output.Total, context)
            : undefined,
    };
};
const deserializeAws_json1_1ResultsByTime = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResultByTime(entry, context);
    });
};
const deserializeAws_json1_1RightsizingRecommendation = (output, context) => {
    return {
        AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
        CurrentInstance: output.CurrentInstance !== undefined && output.CurrentInstance !== null
            ? deserializeAws_json1_1CurrentInstance(output.CurrentInstance, context)
            : undefined,
        FindingReasonCodes: output.FindingReasonCodes !== undefined && output.FindingReasonCodes !== null
            ? deserializeAws_json1_1FindingReasonCodes(output.FindingReasonCodes, context)
            : undefined,
        ModifyRecommendationDetail: output.ModifyRecommendationDetail !== undefined && output.ModifyRecommendationDetail !== null
            ? deserializeAws_json1_1ModifyRecommendationDetail(output.ModifyRecommendationDetail, context)
            : undefined,
        RightsizingType: output.RightsizingType !== undefined && output.RightsizingType !== null ? output.RightsizingType : undefined,
        TerminateRecommendationDetail: output.TerminateRecommendationDetail !== undefined && output.TerminateRecommendationDetail !== null
            ? deserializeAws_json1_1TerminateRecommendationDetail(output.TerminateRecommendationDetail, context)
            : undefined,
    };
};
const deserializeAws_json1_1RightsizingRecommendationConfiguration = (output, context) => {
    return {
        BenefitsConsidered: output.BenefitsConsidered !== undefined && output.BenefitsConsidered !== null
            ? output.BenefitsConsidered
            : undefined,
        RecommendationTarget: output.RecommendationTarget !== undefined && output.RecommendationTarget !== null
            ? output.RecommendationTarget
            : undefined,
    };
};
const deserializeAws_json1_1RightsizingRecommendationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RightsizingRecommendation(entry, context);
    });
};
const deserializeAws_json1_1RightsizingRecommendationMetadata = (output, context) => {
    return {
        AdditionalMetadata: output.AdditionalMetadata !== undefined && output.AdditionalMetadata !== null
            ? output.AdditionalMetadata
            : undefined,
        GenerationTimestamp: output.GenerationTimestamp !== undefined && output.GenerationTimestamp !== null
            ? output.GenerationTimestamp
            : undefined,
        LookbackPeriodInDays: output.LookbackPeriodInDays !== undefined && output.LookbackPeriodInDays !== null
            ? output.LookbackPeriodInDays
            : undefined,
        RecommendationId: output.RecommendationId !== undefined && output.RecommendationId !== null ? output.RecommendationId : undefined,
    };
};
const deserializeAws_json1_1RightsizingRecommendationSummary = (output, context) => {
    return {
        EstimatedTotalMonthlySavingsAmount: output.EstimatedTotalMonthlySavingsAmount !== undefined && output.EstimatedTotalMonthlySavingsAmount !== null
            ? output.EstimatedTotalMonthlySavingsAmount
            : undefined,
        SavingsCurrencyCode: output.SavingsCurrencyCode !== undefined && output.SavingsCurrencyCode !== null
            ? output.SavingsCurrencyCode
            : undefined,
        SavingsPercentage: output.SavingsPercentage !== undefined && output.SavingsPercentage !== null
            ? output.SavingsPercentage
            : undefined,
        TotalRecommendationCount: output.TotalRecommendationCount !== undefined && output.TotalRecommendationCount !== null
            ? output.TotalRecommendationCount
            : undefined,
    };
};
const deserializeAws_json1_1RootCause = (output, context) => {
    return {
        LinkedAccount: output.LinkedAccount !== undefined && output.LinkedAccount !== null ? output.LinkedAccount : undefined,
        Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
        Service: output.Service !== undefined && output.Service !== null ? output.Service : undefined,
        UsageType: output.UsageType !== undefined && output.UsageType !== null ? output.UsageType : undefined,
    };
};
const deserializeAws_json1_1RootCauses = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RootCause(entry, context);
    });
};
const deserializeAws_json1_1SavingsPlansAmortizedCommitment = (output, context) => {
    return {
        AmortizedRecurringCommitment: output.AmortizedRecurringCommitment !== undefined && output.AmortizedRecurringCommitment !== null
            ? output.AmortizedRecurringCommitment
            : undefined,
        AmortizedUpfrontCommitment: output.AmortizedUpfrontCommitment !== undefined && output.AmortizedUpfrontCommitment !== null
            ? output.AmortizedUpfrontCommitment
            : undefined,
        TotalAmortizedCommitment: output.TotalAmortizedCommitment !== undefined && output.TotalAmortizedCommitment !== null
            ? output.TotalAmortizedCommitment
            : undefined,
    };
};
const deserializeAws_json1_1SavingsPlansCoverage = (output, context) => {
    return {
        Attributes: output.Attributes !== undefined && output.Attributes !== null
            ? deserializeAws_json1_1Attributes(output.Attributes, context)
            : undefined,
        Coverage: output.Coverage !== undefined && output.Coverage !== null
            ? deserializeAws_json1_1SavingsPlansCoverageData(output.Coverage, context)
            : undefined,
        TimePeriod: output.TimePeriod !== undefined && output.TimePeriod !== null
            ? deserializeAws_json1_1DateInterval(output.TimePeriod, context)
            : undefined,
    };
};
const deserializeAws_json1_1SavingsPlansCoverageData = (output, context) => {
    return {
        CoveragePercentage: output.CoveragePercentage !== undefined && output.CoveragePercentage !== null
            ? output.CoveragePercentage
            : undefined,
        OnDemandCost: output.OnDemandCost !== undefined && output.OnDemandCost !== null ? output.OnDemandCost : undefined,
        SpendCoveredBySavingsPlans: output.SpendCoveredBySavingsPlans !== undefined && output.SpendCoveredBySavingsPlans !== null
            ? output.SpendCoveredBySavingsPlans
            : undefined,
        TotalCost: output.TotalCost !== undefined && output.TotalCost !== null ? output.TotalCost : undefined,
    };
};
const deserializeAws_json1_1SavingsPlansCoverages = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SavingsPlansCoverage(entry, context);
    });
};
const deserializeAws_json1_1SavingsPlansDetails = (output, context) => {
    return {
        InstanceFamily: output.InstanceFamily !== undefined && output.InstanceFamily !== null ? output.InstanceFamily : undefined,
        OfferingId: output.OfferingId !== undefined && output.OfferingId !== null ? output.OfferingId : undefined,
        Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
    };
};
const deserializeAws_json1_1SavingsPlansPurchaseRecommendation = (output, context) => {
    return {
        AccountScope: output.AccountScope !== undefined && output.AccountScope !== null ? output.AccountScope : undefined,
        LookbackPeriodInDays: output.LookbackPeriodInDays !== undefined && output.LookbackPeriodInDays !== null
            ? output.LookbackPeriodInDays
            : undefined,
        PaymentOption: output.PaymentOption !== undefined && output.PaymentOption !== null ? output.PaymentOption : undefined,
        SavingsPlansPurchaseRecommendationDetails: output.SavingsPlansPurchaseRecommendationDetails !== undefined &&
            output.SavingsPlansPurchaseRecommendationDetails !== null
            ? deserializeAws_json1_1SavingsPlansPurchaseRecommendationDetailList(output.SavingsPlansPurchaseRecommendationDetails, context)
            : undefined,
        SavingsPlansPurchaseRecommendationSummary: output.SavingsPlansPurchaseRecommendationSummary !== undefined &&
            output.SavingsPlansPurchaseRecommendationSummary !== null
            ? deserializeAws_json1_1SavingsPlansPurchaseRecommendationSummary(output.SavingsPlansPurchaseRecommendationSummary, context)
            : undefined,
        SavingsPlansType: output.SavingsPlansType !== undefined && output.SavingsPlansType !== null ? output.SavingsPlansType : undefined,
        TermInYears: output.TermInYears !== undefined && output.TermInYears !== null ? output.TermInYears : undefined,
    };
};
const deserializeAws_json1_1SavingsPlansPurchaseRecommendationDetail = (output, context) => {
    return {
        AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
        CurrencyCode: output.CurrencyCode !== undefined && output.CurrencyCode !== null ? output.CurrencyCode : undefined,
        CurrentAverageHourlyOnDemandSpend: output.CurrentAverageHourlyOnDemandSpend !== undefined && output.CurrentAverageHourlyOnDemandSpend !== null
            ? output.CurrentAverageHourlyOnDemandSpend
            : undefined,
        CurrentMaximumHourlyOnDemandSpend: output.CurrentMaximumHourlyOnDemandSpend !== undefined && output.CurrentMaximumHourlyOnDemandSpend !== null
            ? output.CurrentMaximumHourlyOnDemandSpend
            : undefined,
        CurrentMinimumHourlyOnDemandSpend: output.CurrentMinimumHourlyOnDemandSpend !== undefined && output.CurrentMinimumHourlyOnDemandSpend !== null
            ? output.CurrentMinimumHourlyOnDemandSpend
            : undefined,
        EstimatedAverageUtilization: output.EstimatedAverageUtilization !== undefined && output.EstimatedAverageUtilization !== null
            ? output.EstimatedAverageUtilization
            : undefined,
        EstimatedMonthlySavingsAmount: output.EstimatedMonthlySavingsAmount !== undefined && output.EstimatedMonthlySavingsAmount !== null
            ? output.EstimatedMonthlySavingsAmount
            : undefined,
        EstimatedOnDemandCost: output.EstimatedOnDemandCost !== undefined && output.EstimatedOnDemandCost !== null
            ? output.EstimatedOnDemandCost
            : undefined,
        EstimatedOnDemandCostWithCurrentCommitment: output.EstimatedOnDemandCostWithCurrentCommitment !== undefined &&
            output.EstimatedOnDemandCostWithCurrentCommitment !== null
            ? output.EstimatedOnDemandCostWithCurrentCommitment
            : undefined,
        EstimatedROI: output.EstimatedROI !== undefined && output.EstimatedROI !== null ? output.EstimatedROI : undefined,
        EstimatedSPCost: output.EstimatedSPCost !== undefined && output.EstimatedSPCost !== null ? output.EstimatedSPCost : undefined,
        EstimatedSavingsAmount: output.EstimatedSavingsAmount !== undefined && output.EstimatedSavingsAmount !== null
            ? output.EstimatedSavingsAmount
            : undefined,
        EstimatedSavingsPercentage: output.EstimatedSavingsPercentage !== undefined && output.EstimatedSavingsPercentage !== null
            ? output.EstimatedSavingsPercentage
            : undefined,
        HourlyCommitmentToPurchase: output.HourlyCommitmentToPurchase !== undefined && output.HourlyCommitmentToPurchase !== null
            ? output.HourlyCommitmentToPurchase
            : undefined,
        SavingsPlansDetails: output.SavingsPlansDetails !== undefined && output.SavingsPlansDetails !== null
            ? deserializeAws_json1_1SavingsPlansDetails(output.SavingsPlansDetails, context)
            : undefined,
        UpfrontCost: output.UpfrontCost !== undefined && output.UpfrontCost !== null ? output.UpfrontCost : undefined,
    };
};
const deserializeAws_json1_1SavingsPlansPurchaseRecommendationDetailList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SavingsPlansPurchaseRecommendationDetail(entry, context);
    });
};
const deserializeAws_json1_1SavingsPlansPurchaseRecommendationMetadata = (output, context) => {
    return {
        AdditionalMetadata: output.AdditionalMetadata !== undefined && output.AdditionalMetadata !== null
            ? output.AdditionalMetadata
            : undefined,
        GenerationTimestamp: output.GenerationTimestamp !== undefined && output.GenerationTimestamp !== null
            ? output.GenerationTimestamp
            : undefined,
        RecommendationId: output.RecommendationId !== undefined && output.RecommendationId !== null ? output.RecommendationId : undefined,
    };
};
const deserializeAws_json1_1SavingsPlansPurchaseRecommendationSummary = (output, context) => {
    return {
        CurrencyCode: output.CurrencyCode !== undefined && output.CurrencyCode !== null ? output.CurrencyCode : undefined,
        CurrentOnDemandSpend: output.CurrentOnDemandSpend !== undefined && output.CurrentOnDemandSpend !== null
            ? output.CurrentOnDemandSpend
            : undefined,
        DailyCommitmentToPurchase: output.DailyCommitmentToPurchase !== undefined && output.DailyCommitmentToPurchase !== null
            ? output.DailyCommitmentToPurchase
            : undefined,
        EstimatedMonthlySavingsAmount: output.EstimatedMonthlySavingsAmount !== undefined && output.EstimatedMonthlySavingsAmount !== null
            ? output.EstimatedMonthlySavingsAmount
            : undefined,
        EstimatedOnDemandCostWithCurrentCommitment: output.EstimatedOnDemandCostWithCurrentCommitment !== undefined &&
            output.EstimatedOnDemandCostWithCurrentCommitment !== null
            ? output.EstimatedOnDemandCostWithCurrentCommitment
            : undefined,
        EstimatedROI: output.EstimatedROI !== undefined && output.EstimatedROI !== null ? output.EstimatedROI : undefined,
        EstimatedSavingsAmount: output.EstimatedSavingsAmount !== undefined && output.EstimatedSavingsAmount !== null
            ? output.EstimatedSavingsAmount
            : undefined,
        EstimatedSavingsPercentage: output.EstimatedSavingsPercentage !== undefined && output.EstimatedSavingsPercentage !== null
            ? output.EstimatedSavingsPercentage
            : undefined,
        EstimatedTotalCost: output.EstimatedTotalCost !== undefined && output.EstimatedTotalCost !== null
            ? output.EstimatedTotalCost
            : undefined,
        HourlyCommitmentToPurchase: output.HourlyCommitmentToPurchase !== undefined && output.HourlyCommitmentToPurchase !== null
            ? output.HourlyCommitmentToPurchase
            : undefined,
        TotalRecommendationCount: output.TotalRecommendationCount !== undefined && output.TotalRecommendationCount !== null
            ? output.TotalRecommendationCount
            : undefined,
    };
};
const deserializeAws_json1_1SavingsPlansSavings = (output, context) => {
    return {
        NetSavings: output.NetSavings !== undefined && output.NetSavings !== null ? output.NetSavings : undefined,
        OnDemandCostEquivalent: output.OnDemandCostEquivalent !== undefined && output.OnDemandCostEquivalent !== null
            ? output.OnDemandCostEquivalent
            : undefined,
    };
};
const deserializeAws_json1_1SavingsPlansUtilization = (output, context) => {
    return {
        TotalCommitment: output.TotalCommitment !== undefined && output.TotalCommitment !== null ? output.TotalCommitment : undefined,
        UnusedCommitment: output.UnusedCommitment !== undefined && output.UnusedCommitment !== null ? output.UnusedCommitment : undefined,
        UsedCommitment: output.UsedCommitment !== undefined && output.UsedCommitment !== null ? output.UsedCommitment : undefined,
        UtilizationPercentage: output.UtilizationPercentage !== undefined && output.UtilizationPercentage !== null
            ? output.UtilizationPercentage
            : undefined,
    };
};
const deserializeAws_json1_1SavingsPlansUtilizationAggregates = (output, context) => {
    return {
        AmortizedCommitment: output.AmortizedCommitment !== undefined && output.AmortizedCommitment !== null
            ? deserializeAws_json1_1SavingsPlansAmortizedCommitment(output.AmortizedCommitment, context)
            : undefined,
        Savings: output.Savings !== undefined && output.Savings !== null
            ? deserializeAws_json1_1SavingsPlansSavings(output.Savings, context)
            : undefined,
        Utilization: output.Utilization !== undefined && output.Utilization !== null
            ? deserializeAws_json1_1SavingsPlansUtilization(output.Utilization, context)
            : undefined,
    };
};
const deserializeAws_json1_1SavingsPlansUtilizationByTime = (output, context) => {
    return {
        AmortizedCommitment: output.AmortizedCommitment !== undefined && output.AmortizedCommitment !== null
            ? deserializeAws_json1_1SavingsPlansAmortizedCommitment(output.AmortizedCommitment, context)
            : undefined,
        Savings: output.Savings !== undefined && output.Savings !== null
            ? deserializeAws_json1_1SavingsPlansSavings(output.Savings, context)
            : undefined,
        TimePeriod: output.TimePeriod !== undefined && output.TimePeriod !== null
            ? deserializeAws_json1_1DateInterval(output.TimePeriod, context)
            : undefined,
        Utilization: output.Utilization !== undefined && output.Utilization !== null
            ? deserializeAws_json1_1SavingsPlansUtilization(output.Utilization, context)
            : undefined,
    };
};
const deserializeAws_json1_1SavingsPlansUtilizationDetail = (output, context) => {
    return {
        AmortizedCommitment: output.AmortizedCommitment !== undefined && output.AmortizedCommitment !== null
            ? deserializeAws_json1_1SavingsPlansAmortizedCommitment(output.AmortizedCommitment, context)
            : undefined,
        Attributes: output.Attributes !== undefined && output.Attributes !== null
            ? deserializeAws_json1_1Attributes(output.Attributes, context)
            : undefined,
        Savings: output.Savings !== undefined && output.Savings !== null
            ? deserializeAws_json1_1SavingsPlansSavings(output.Savings, context)
            : undefined,
        SavingsPlanArn: output.SavingsPlanArn !== undefined && output.SavingsPlanArn !== null ? output.SavingsPlanArn : undefined,
        Utilization: output.Utilization !== undefined && output.Utilization !== null
            ? deserializeAws_json1_1SavingsPlansUtilization(output.Utilization, context)
            : undefined,
    };
};
const deserializeAws_json1_1SavingsPlansUtilizationDetails = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SavingsPlansUtilizationDetail(entry, context);
    });
};
const deserializeAws_json1_1SavingsPlansUtilizationsByTime = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SavingsPlansUtilizationByTime(entry, context);
    });
};
const deserializeAws_json1_1ServiceQuotaExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ServiceSpecification = (output, context) => {
    return {
        EC2Specification: output.EC2Specification !== undefined && output.EC2Specification !== null
            ? deserializeAws_json1_1EC2Specification(output.EC2Specification, context)
            : undefined,
    };
};
const deserializeAws_json1_1Subscriber = (output, context) => {
    return {
        Address: output.Address !== undefined && output.Address !== null ? output.Address : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1Subscribers = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Subscriber(entry, context);
    });
};
const deserializeAws_json1_1TagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1TagValues = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        MatchOptions: output.MatchOptions !== undefined && output.MatchOptions !== null
            ? deserializeAws_json1_1MatchOptions(output.MatchOptions, context)
            : undefined,
        Values: output.Values !== undefined && output.Values !== null
            ? deserializeAws_json1_1Values(output.Values, context)
            : undefined,
    };
};
const deserializeAws_json1_1TagValuesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TagValues(entry, context);
    });
};
const deserializeAws_json1_1TargetInstance = (output, context) => {
    return {
        CurrencyCode: output.CurrencyCode !== undefined && output.CurrencyCode !== null ? output.CurrencyCode : undefined,
        DefaultTargetInstance: output.DefaultTargetInstance !== undefined && output.DefaultTargetInstance !== null
            ? output.DefaultTargetInstance
            : undefined,
        EstimatedMonthlyCost: output.EstimatedMonthlyCost !== undefined && output.EstimatedMonthlyCost !== null
            ? output.EstimatedMonthlyCost
            : undefined,
        EstimatedMonthlySavings: output.EstimatedMonthlySavings !== undefined && output.EstimatedMonthlySavings !== null
            ? output.EstimatedMonthlySavings
            : undefined,
        ExpectedResourceUtilization: output.ExpectedResourceUtilization !== undefined && output.ExpectedResourceUtilization !== null
            ? deserializeAws_json1_1ResourceUtilization(output.ExpectedResourceUtilization, context)
            : undefined,
        PlatformDifferences: output.PlatformDifferences !== undefined && output.PlatformDifferences !== null
            ? deserializeAws_json1_1PlatformDifferences(output.PlatformDifferences, context)
            : undefined,
        ResourceDetails: output.ResourceDetails !== undefined && output.ResourceDetails !== null
            ? deserializeAws_json1_1ResourceDetails(output.ResourceDetails, context)
            : undefined,
    };
};
const deserializeAws_json1_1TargetInstancesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TargetInstance(entry, context);
    });
};
const deserializeAws_json1_1TerminateRecommendationDetail = (output, context) => {
    return {
        CurrencyCode: output.CurrencyCode !== undefined && output.CurrencyCode !== null ? output.CurrencyCode : undefined,
        EstimatedMonthlySavings: output.EstimatedMonthlySavings !== undefined && output.EstimatedMonthlySavings !== null
            ? output.EstimatedMonthlySavings
            : undefined,
    };
};
const deserializeAws_json1_1UnknownMonitorException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1UnknownSubscriptionException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1UnresolvableUsageUnitException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1UpdateAnomalyMonitorResponse = (output, context) => {
    return {
        MonitorArn: output.MonitorArn !== undefined && output.MonitorArn !== null ? output.MonitorArn : undefined,
    };
};
const deserializeAws_json1_1UpdateAnomalySubscriptionResponse = (output, context) => {
    return {
        SubscriptionArn: output.SubscriptionArn !== undefined && output.SubscriptionArn !== null ? output.SubscriptionArn : undefined,
    };
};
const deserializeAws_json1_1UpdateCostCategoryDefinitionResponse = (output, context) => {
    return {
        CostCategoryArn: output.CostCategoryArn !== undefined && output.CostCategoryArn !== null ? output.CostCategoryArn : undefined,
        EffectiveStart: output.EffectiveStart !== undefined && output.EffectiveStart !== null ? output.EffectiveStart : undefined,
    };
};
const deserializeAws_json1_1UtilizationByTime = (output, context) => {
    return {
        Groups: output.Groups !== undefined && output.Groups !== null
            ? deserializeAws_json1_1ReservationUtilizationGroups(output.Groups, context)
            : undefined,
        TimePeriod: output.TimePeriod !== undefined && output.TimePeriod !== null
            ? deserializeAws_json1_1DateInterval(output.TimePeriod, context)
            : undefined,
        Total: output.Total !== undefined && output.Total !== null
            ? deserializeAws_json1_1ReservationAggregates(output.Total, context)
            : undefined,
    };
};
const deserializeAws_json1_1UtilizationsByTime = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1UtilizationByTime(entry, context);
    });
};
const deserializeAws_json1_1Values = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
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