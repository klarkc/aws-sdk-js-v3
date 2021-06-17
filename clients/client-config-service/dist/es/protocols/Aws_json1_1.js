import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_json1_1BatchGetAggregateResourceConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.BatchGetAggregateResourceConfig",
        };
        body = JSON.stringify(serializeAws_json1_1BatchGetAggregateResourceConfigRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1BatchGetResourceConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.BatchGetResourceConfig",
        };
        body = JSON.stringify(serializeAws_json1_1BatchGetResourceConfigRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteAggregationAuthorizationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DeleteAggregationAuthorization",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteAggregationAuthorizationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteConfigRuleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DeleteConfigRule",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteConfigRuleRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteConfigurationAggregatorCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DeleteConfigurationAggregator",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteConfigurationAggregatorRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteConfigurationRecorderCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DeleteConfigurationRecorder",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteConfigurationRecorderRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteConformancePackCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DeleteConformancePack",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteConformancePackRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteDeliveryChannelCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DeleteDeliveryChannel",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteDeliveryChannelRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteEvaluationResultsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DeleteEvaluationResults",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteEvaluationResultsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteOrganizationConfigRuleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DeleteOrganizationConfigRule",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteOrganizationConfigRuleRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteOrganizationConformancePackCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DeleteOrganizationConformancePack",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteOrganizationConformancePackRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeletePendingAggregationRequestCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DeletePendingAggregationRequest",
        };
        body = JSON.stringify(serializeAws_json1_1DeletePendingAggregationRequestRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteRemediationConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DeleteRemediationConfiguration",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteRemediationConfigurationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteRemediationExceptionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DeleteRemediationExceptions",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteRemediationExceptionsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteResourceConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DeleteResourceConfig",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteResourceConfigRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteRetentionConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DeleteRetentionConfiguration",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteRetentionConfigurationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteStoredQueryCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DeleteStoredQuery",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteStoredQueryRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeliverConfigSnapshotCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DeliverConfigSnapshot",
        };
        body = JSON.stringify(serializeAws_json1_1DeliverConfigSnapshotRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeAggregateComplianceByConfigRulesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DescribeAggregateComplianceByConfigRules",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeAggregateComplianceByConfigRulesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeAggregateComplianceByConformancePacksCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DescribeAggregateComplianceByConformancePacks",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeAggregateComplianceByConformancePacksRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeAggregationAuthorizationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DescribeAggregationAuthorizations",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeAggregationAuthorizationsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeComplianceByConfigRuleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DescribeComplianceByConfigRule",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeComplianceByConfigRuleRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeComplianceByResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DescribeComplianceByResource",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeComplianceByResourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeConfigRuleEvaluationStatusCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DescribeConfigRuleEvaluationStatus",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeConfigRuleEvaluationStatusRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeConfigRulesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DescribeConfigRules",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeConfigRulesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeConfigurationAggregatorsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DescribeConfigurationAggregators",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeConfigurationAggregatorsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeConfigurationRecordersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DescribeConfigurationRecorders",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeConfigurationRecordersRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeConfigurationRecorderStatusCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DescribeConfigurationRecorderStatus",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeConfigurationRecorderStatusRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeConformancePackComplianceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DescribeConformancePackCompliance",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeConformancePackComplianceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeConformancePacksCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DescribeConformancePacks",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeConformancePacksRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeConformancePackStatusCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DescribeConformancePackStatus",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeConformancePackStatusRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeDeliveryChannelsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DescribeDeliveryChannels",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeDeliveryChannelsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeDeliveryChannelStatusCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DescribeDeliveryChannelStatus",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeDeliveryChannelStatusRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeOrganizationConfigRulesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DescribeOrganizationConfigRules",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeOrganizationConfigRulesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DescribeOrganizationConfigRuleStatuses",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeOrganizationConfigRuleStatusesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeOrganizationConformancePacksCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DescribeOrganizationConformancePacks",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeOrganizationConformancePacksRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeOrganizationConformancePackStatusesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DescribeOrganizationConformancePackStatuses",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeOrganizationConformancePackStatusesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribePendingAggregationRequestsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DescribePendingAggregationRequests",
        };
        body = JSON.stringify(serializeAws_json1_1DescribePendingAggregationRequestsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeRemediationConfigurationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DescribeRemediationConfigurations",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeRemediationConfigurationsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeRemediationExceptionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DescribeRemediationExceptions",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeRemediationExceptionsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeRemediationExecutionStatusCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DescribeRemediationExecutionStatus",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeRemediationExecutionStatusRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeRetentionConfigurationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.DescribeRetentionConfigurations",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeRetentionConfigurationsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.GetAggregateComplianceDetailsByConfigRule",
        };
        body = JSON.stringify(serializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetAggregateConfigRuleComplianceSummaryCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.GetAggregateConfigRuleComplianceSummary",
        };
        body = JSON.stringify(serializeAws_json1_1GetAggregateConfigRuleComplianceSummaryRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetAggregateConformancePackComplianceSummaryCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.GetAggregateConformancePackComplianceSummary",
        };
        body = JSON.stringify(serializeAws_json1_1GetAggregateConformancePackComplianceSummaryRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetAggregateDiscoveredResourceCountsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.GetAggregateDiscoveredResourceCounts",
        };
        body = JSON.stringify(serializeAws_json1_1GetAggregateDiscoveredResourceCountsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetAggregateResourceConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.GetAggregateResourceConfig",
        };
        body = JSON.stringify(serializeAws_json1_1GetAggregateResourceConfigRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetComplianceDetailsByConfigRuleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.GetComplianceDetailsByConfigRule",
        };
        body = JSON.stringify(serializeAws_json1_1GetComplianceDetailsByConfigRuleRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetComplianceDetailsByResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.GetComplianceDetailsByResource",
        };
        body = JSON.stringify(serializeAws_json1_1GetComplianceDetailsByResourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetComplianceSummaryByConfigRuleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.GetComplianceSummaryByConfigRule",
        };
        body = "{}";
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetComplianceSummaryByResourceTypeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.GetComplianceSummaryByResourceType",
        };
        body = JSON.stringify(serializeAws_json1_1GetComplianceSummaryByResourceTypeRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetConformancePackComplianceDetailsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.GetConformancePackComplianceDetails",
        };
        body = JSON.stringify(serializeAws_json1_1GetConformancePackComplianceDetailsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetConformancePackComplianceSummaryCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.GetConformancePackComplianceSummary",
        };
        body = JSON.stringify(serializeAws_json1_1GetConformancePackComplianceSummaryRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetDiscoveredResourceCountsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.GetDiscoveredResourceCounts",
        };
        body = JSON.stringify(serializeAws_json1_1GetDiscoveredResourceCountsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetOrganizationConfigRuleDetailedStatusCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.GetOrganizationConfigRuleDetailedStatus",
        };
        body = JSON.stringify(serializeAws_json1_1GetOrganizationConfigRuleDetailedStatusRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.GetOrganizationConformancePackDetailedStatus",
        };
        body = JSON.stringify(serializeAws_json1_1GetOrganizationConformancePackDetailedStatusRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetResourceConfigHistoryCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.GetResourceConfigHistory",
        };
        body = JSON.stringify(serializeAws_json1_1GetResourceConfigHistoryRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetStoredQueryCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.GetStoredQuery",
        };
        body = JSON.stringify(serializeAws_json1_1GetStoredQueryRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListAggregateDiscoveredResourcesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.ListAggregateDiscoveredResources",
        };
        body = JSON.stringify(serializeAws_json1_1ListAggregateDiscoveredResourcesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListDiscoveredResourcesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.ListDiscoveredResources",
        };
        body = JSON.stringify(serializeAws_json1_1ListDiscoveredResourcesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListStoredQueriesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.ListStoredQueries",
        };
        body = JSON.stringify(serializeAws_json1_1ListStoredQueriesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListTagsForResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.ListTagsForResource",
        };
        body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutAggregationAuthorizationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.PutAggregationAuthorization",
        };
        body = JSON.stringify(serializeAws_json1_1PutAggregationAuthorizationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutConfigRuleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.PutConfigRule",
        };
        body = JSON.stringify(serializeAws_json1_1PutConfigRuleRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutConfigurationAggregatorCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.PutConfigurationAggregator",
        };
        body = JSON.stringify(serializeAws_json1_1PutConfigurationAggregatorRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutConfigurationRecorderCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.PutConfigurationRecorder",
        };
        body = JSON.stringify(serializeAws_json1_1PutConfigurationRecorderRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutConformancePackCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.PutConformancePack",
        };
        body = JSON.stringify(serializeAws_json1_1PutConformancePackRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutDeliveryChannelCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.PutDeliveryChannel",
        };
        body = JSON.stringify(serializeAws_json1_1PutDeliveryChannelRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutEvaluationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.PutEvaluations",
        };
        body = JSON.stringify(serializeAws_json1_1PutEvaluationsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutExternalEvaluationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.PutExternalEvaluation",
        };
        body = JSON.stringify(serializeAws_json1_1PutExternalEvaluationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutOrganizationConfigRuleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.PutOrganizationConfigRule",
        };
        body = JSON.stringify(serializeAws_json1_1PutOrganizationConfigRuleRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutOrganizationConformancePackCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.PutOrganizationConformancePack",
        };
        body = JSON.stringify(serializeAws_json1_1PutOrganizationConformancePackRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutRemediationConfigurationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.PutRemediationConfigurations",
        };
        body = JSON.stringify(serializeAws_json1_1PutRemediationConfigurationsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutRemediationExceptionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.PutRemediationExceptions",
        };
        body = JSON.stringify(serializeAws_json1_1PutRemediationExceptionsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutResourceConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.PutResourceConfig",
        };
        body = JSON.stringify(serializeAws_json1_1PutResourceConfigRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutRetentionConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.PutRetentionConfiguration",
        };
        body = JSON.stringify(serializeAws_json1_1PutRetentionConfigurationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutStoredQueryCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.PutStoredQuery",
        };
        body = JSON.stringify(serializeAws_json1_1PutStoredQueryRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1SelectAggregateResourceConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.SelectAggregateResourceConfig",
        };
        body = JSON.stringify(serializeAws_json1_1SelectAggregateResourceConfigRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1SelectResourceConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.SelectResourceConfig",
        };
        body = JSON.stringify(serializeAws_json1_1SelectResourceConfigRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StartConfigRulesEvaluationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.StartConfigRulesEvaluation",
        };
        body = JSON.stringify(serializeAws_json1_1StartConfigRulesEvaluationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StartConfigurationRecorderCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.StartConfigurationRecorder",
        };
        body = JSON.stringify(serializeAws_json1_1StartConfigurationRecorderRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StartRemediationExecutionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.StartRemediationExecution",
        };
        body = JSON.stringify(serializeAws_json1_1StartRemediationExecutionRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StopConfigurationRecorderCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.StopConfigurationRecorder",
        };
        body = JSON.stringify(serializeAws_json1_1StopConfigurationRecorderRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1TagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "StarlingDoveService.TagResource",
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
            "x-amz-target": "StarlingDoveService.UntagResource",
        };
        body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_json1_1BatchGetAggregateResourceConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1BatchGetAggregateResourceConfigCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1BatchGetAggregateResourceConfigResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1BatchGetAggregateResourceConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "NoSuchConfigurationAggregatorException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException": return [3 /*break*/, 2];
                    case "ValidationException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#ValidationException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1BatchGetResourceConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1BatchGetResourceConfigCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1BatchGetResourceConfigResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1BatchGetResourceConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "NoAvailableConfigurationRecorderException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#NoAvailableConfigurationRecorderException": return [3 /*break*/, 2];
                    case "ValidationException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#ValidationException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoAvailableConfigurationRecorderExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteAggregationAuthorizationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteAggregationAuthorizationCommandError(output, context)];
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
var deserializeAws_json1_1DeleteAggregationAuthorizationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidParameterValueException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteConfigRuleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteConfigRuleCommandError(output, context)];
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
var deserializeAws_json1_1DeleteConfigRuleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "NoSuchConfigRuleException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#NoSuchConfigRuleException": return [3 /*break*/, 2];
                    case "ResourceInUseException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#ResourceInUseException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchConfigRuleExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteConfigurationAggregatorCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteConfigurationAggregatorCommandError(output, context)];
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
var deserializeAws_json1_1DeleteConfigurationAggregatorCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "NoSuchConfigurationAggregatorException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteConfigurationRecorderCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteConfigurationRecorderCommandError(output, context)];
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
var deserializeAws_json1_1DeleteConfigurationRecorderCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "NoSuchConfigurationRecorderException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#NoSuchConfigurationRecorderException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchConfigurationRecorderExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteConformancePackCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteConformancePackCommandError(output, context)];
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
var deserializeAws_json1_1DeleteConformancePackCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "NoSuchConformancePackException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#NoSuchConformancePackException": return [3 /*break*/, 2];
                    case "ResourceInUseException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#ResourceInUseException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchConformancePackExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteDeliveryChannelCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteDeliveryChannelCommandError(output, context)];
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
var deserializeAws_json1_1DeleteDeliveryChannelCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "LastDeliveryChannelDeleteFailedException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#LastDeliveryChannelDeleteFailedException": return [3 /*break*/, 2];
                    case "NoSuchDeliveryChannelException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#NoSuchDeliveryChannelException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LastDeliveryChannelDeleteFailedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchDeliveryChannelExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteEvaluationResultsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteEvaluationResultsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteEvaluationResultsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteEvaluationResultsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "NoSuchConfigRuleException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#NoSuchConfigRuleException": return [3 /*break*/, 2];
                    case "ResourceInUseException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#ResourceInUseException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchConfigRuleExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteOrganizationConfigRuleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteOrganizationConfigRuleCommandError(output, context)];
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
var deserializeAws_json1_1DeleteOrganizationConfigRuleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "NoSuchOrganizationConfigRuleException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#NoSuchOrganizationConfigRuleException": return [3 /*break*/, 2];
                    case "OrganizationAccessDeniedException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#OrganizationAccessDeniedException": return [3 /*break*/, 4];
                    case "ResourceInUseException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#ResourceInUseException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchOrganizationConfigRuleExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteOrganizationConformancePackCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteOrganizationConformancePackCommandError(output, context)];
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
var deserializeAws_json1_1DeleteOrganizationConformancePackCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "NoSuchOrganizationConformancePackException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#NoSuchOrganizationConformancePackException": return [3 /*break*/, 2];
                    case "OrganizationAccessDeniedException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#OrganizationAccessDeniedException": return [3 /*break*/, 4];
                    case "ResourceInUseException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#ResourceInUseException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchOrganizationConformancePackExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeletePendingAggregationRequestCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeletePendingAggregationRequestCommandError(output, context)];
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
var deserializeAws_json1_1DeletePendingAggregationRequestCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidParameterValueException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteRemediationConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteRemediationConfigurationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteRemediationConfigurationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteRemediationConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InsufficientPermissionsException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InsufficientPermissionsException": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidParameterValueException": return [3 /*break*/, 4];
                    case "NoSuchRemediationConfigurationException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#NoSuchRemediationConfigurationException": return [3 /*break*/, 6];
                    case "RemediationInProgressException": return [3 /*break*/, 8];
                    case "com.amazonaws.configservice#RemediationInProgressException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchRemediationConfigurationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RemediationInProgressExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteRemediationExceptionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteRemediationExceptionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteRemediationExceptionsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteRemediationExceptionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "NoSuchRemediationExceptionException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#NoSuchRemediationExceptionException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchRemediationExceptionExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteResourceConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteResourceConfigCommandError(output, context)];
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
var deserializeAws_json1_1DeleteResourceConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "NoRunningConfigurationRecorderException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#NoRunningConfigurationRecorderException": return [3 /*break*/, 2];
                    case "ValidationException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#ValidationException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoRunningConfigurationRecorderExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteRetentionConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteRetentionConfigurationCommandError(output, context)];
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
var deserializeAws_json1_1DeleteRetentionConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "NoSuchRetentionConfigurationException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#NoSuchRetentionConfigurationException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchRetentionConfigurationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteStoredQueryCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteStoredQueryCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteStoredQueryResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteStoredQueryCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ResourceNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#ResourceNotFoundException": return [3 /*break*/, 2];
                    case "ValidationException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#ValidationException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeliverConfigSnapshotCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeliverConfigSnapshotCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeliverConfigSnapshotResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeliverConfigSnapshotCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "NoAvailableConfigurationRecorderException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#NoAvailableConfigurationRecorderException": return [3 /*break*/, 2];
                    case "NoRunningConfigurationRecorderException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#NoRunningConfigurationRecorderException": return [3 /*break*/, 4];
                    case "NoSuchDeliveryChannelException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#NoSuchDeliveryChannelException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoAvailableConfigurationRecorderExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoRunningConfigurationRecorderExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchDeliveryChannelExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeAggregateComplianceByConfigRulesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeAggregateComplianceByConfigRulesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeAggregateComplianceByConfigRulesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeAggregateComplianceByConfigRulesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidLimitException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidLimitException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidNextTokenException": return [3 /*break*/, 4];
                    case "NoSuchConfigurationAggregatorException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.configservice#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeAggregateComplianceByConformancePacksCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeAggregateComplianceByConformancePacksCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeAggregateComplianceByConformancePacksResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeAggregateComplianceByConformancePacksCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidLimitException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidLimitException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidNextTokenException": return [3 /*break*/, 4];
                    case "NoSuchConfigurationAggregatorException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.configservice#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeAggregationAuthorizationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeAggregationAuthorizationsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeAggregationAuthorizationsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeAggregationAuthorizationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidLimitException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidLimitException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidNextTokenException": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#InvalidParameterValueException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeComplianceByConfigRuleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeComplianceByConfigRuleCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeComplianceByConfigRuleResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeComplianceByConfigRuleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidNextTokenException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidNextTokenException": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidParameterValueException": return [3 /*break*/, 4];
                    case "NoSuchConfigRuleException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#NoSuchConfigRuleException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchConfigRuleExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeComplianceByResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeComplianceByResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeComplianceByResourceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeComplianceByResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidNextTokenException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidNextTokenException": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidParameterValueException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeConfigRuleEvaluationStatusCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeConfigRuleEvaluationStatusCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeConfigRuleEvaluationStatusResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeConfigRuleEvaluationStatusCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidNextTokenException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidNextTokenException": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidParameterValueException": return [3 /*break*/, 4];
                    case "NoSuchConfigRuleException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#NoSuchConfigRuleException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchConfigRuleExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeConfigRulesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeConfigRulesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeConfigRulesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeConfigRulesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidNextTokenException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidNextTokenException": return [3 /*break*/, 2];
                    case "NoSuchConfigRuleException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#NoSuchConfigRuleException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchConfigRuleExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeConfigurationAggregatorsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeConfigurationAggregatorsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeConfigurationAggregatorsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeConfigurationAggregatorsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidLimitException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidLimitException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidNextTokenException": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#InvalidParameterValueException": return [3 /*break*/, 6];
                    case "NoSuchConfigurationAggregatorException": return [3 /*break*/, 8];
                    case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidLimitException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidLimitException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidNextTokenException": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#InvalidParameterValueException": return [3 /*break*/, 6];
                    case "NoSuchConfigurationAggregatorException": return [3 /*break*/, 8];
                    case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeConfigurationRecordersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeConfigurationRecordersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeConfigurationRecordersResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeConfigurationRecordersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "NoSuchConfigurationRecorderException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#NoSuchConfigurationRecorderException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchConfigurationRecorderExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeConfigurationRecorderStatusCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeConfigurationRecorderStatusCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeConfigurationRecorderStatusResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeConfigurationRecorderStatusCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "NoSuchConfigurationRecorderException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#NoSuchConfigurationRecorderException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchConfigurationRecorderExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeConformancePackComplianceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeConformancePackComplianceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeConformancePackComplianceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeConformancePackComplianceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidLimitException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidLimitException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidNextTokenException": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#InvalidParameterValueException": return [3 /*break*/, 6];
                    case "NoSuchConfigRuleInConformancePackException": return [3 /*break*/, 8];
                    case "com.amazonaws.configservice#NoSuchConfigRuleInConformancePackException": return [3 /*break*/, 8];
                    case "NoSuchConformancePackException": return [3 /*break*/, 10];
                    case "com.amazonaws.configservice#NoSuchConformancePackException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchConfigRuleInConformancePackExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchConformancePackExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeConformancePacksCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeConformancePacksCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeConformancePacksResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeConformancePacksCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidLimitException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidLimitException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidNextTokenException": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#InvalidParameterValueException": return [3 /*break*/, 6];
                    case "NoSuchConformancePackException": return [3 /*break*/, 8];
                    case "com.amazonaws.configservice#NoSuchConformancePackException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchConformancePackExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeConformancePackStatusCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeConformancePackStatusCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeConformancePackStatusResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeConformancePackStatusCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidLimitException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidLimitException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidNextTokenException": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#InvalidParameterValueException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeDeliveryChannelsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeDeliveryChannelsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeDeliveryChannelsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeDeliveryChannelsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "NoSuchDeliveryChannelException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#NoSuchDeliveryChannelException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchDeliveryChannelExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeDeliveryChannelStatusCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeDeliveryChannelStatusCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeDeliveryChannelStatusResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeDeliveryChannelStatusCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "NoSuchDeliveryChannelException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#NoSuchDeliveryChannelException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchDeliveryChannelExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeOrganizationConfigRulesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeOrganizationConfigRulesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeOrganizationConfigRulesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeOrganizationConfigRulesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidLimitException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidLimitException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidNextTokenException": return [3 /*break*/, 4];
                    case "NoSuchOrganizationConfigRuleException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#NoSuchOrganizationConfigRuleException": return [3 /*break*/, 6];
                    case "OrganizationAccessDeniedException": return [3 /*break*/, 8];
                    case "com.amazonaws.configservice#OrganizationAccessDeniedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchOrganizationConfigRuleExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeOrganizationConfigRuleStatusesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidLimitException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidLimitException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidNextTokenException": return [3 /*break*/, 4];
                    case "NoSuchOrganizationConfigRuleException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#NoSuchOrganizationConfigRuleException": return [3 /*break*/, 6];
                    case "OrganizationAccessDeniedException": return [3 /*break*/, 8];
                    case "com.amazonaws.configservice#OrganizationAccessDeniedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchOrganizationConfigRuleExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeOrganizationConformancePacksCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeOrganizationConformancePacksCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeOrganizationConformancePacksResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeOrganizationConformancePacksCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidLimitException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidLimitException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidNextTokenException": return [3 /*break*/, 4];
                    case "NoSuchOrganizationConformancePackException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#NoSuchOrganizationConformancePackException": return [3 /*break*/, 6];
                    case "OrganizationAccessDeniedException": return [3 /*break*/, 8];
                    case "com.amazonaws.configservice#OrganizationAccessDeniedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchOrganizationConformancePackExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeOrganizationConformancePackStatusesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeOrganizationConformancePackStatusesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeOrganizationConformancePackStatusesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeOrganizationConformancePackStatusesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidLimitException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidLimitException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidNextTokenException": return [3 /*break*/, 4];
                    case "NoSuchOrganizationConformancePackException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#NoSuchOrganizationConformancePackException": return [3 /*break*/, 6];
                    case "OrganizationAccessDeniedException": return [3 /*break*/, 8];
                    case "com.amazonaws.configservice#OrganizationAccessDeniedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchOrganizationConformancePackExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribePendingAggregationRequestsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribePendingAggregationRequestsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribePendingAggregationRequestsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribePendingAggregationRequestsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidLimitException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidLimitException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidNextTokenException": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#InvalidParameterValueException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeRemediationConfigurationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeRemediationConfigurationsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeRemediationConfigurationsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeRemediationConfigurationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_json1_1DescribeRemediationExceptionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeRemediationExceptionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeRemediationExceptionsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeRemediationExceptionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidNextTokenException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidNextTokenException": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidParameterValueException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeRemediationExecutionStatusCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeRemediationExecutionStatusCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeRemediationExecutionStatusResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeRemediationExecutionStatusCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidNextTokenException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidNextTokenException": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidParameterValueException": return [3 /*break*/, 4];
                    case "NoSuchRemediationConfigurationException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#NoSuchRemediationConfigurationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchRemediationConfigurationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeRetentionConfigurationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeRetentionConfigurationsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeRetentionConfigurationsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeRetentionConfigurationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidNextTokenException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidNextTokenException": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidParameterValueException": return [3 /*break*/, 4];
                    case "NoSuchRetentionConfigurationException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#NoSuchRetentionConfigurationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchRetentionConfigurationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidLimitException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidLimitException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidNextTokenException": return [3 /*break*/, 4];
                    case "NoSuchConfigurationAggregatorException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.configservice#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetAggregateConfigRuleComplianceSummaryCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetAggregateConfigRuleComplianceSummaryCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetAggregateConfigRuleComplianceSummaryResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetAggregateConfigRuleComplianceSummaryCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidLimitException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidLimitException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidNextTokenException": return [3 /*break*/, 4];
                    case "NoSuchConfigurationAggregatorException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.configservice#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetAggregateConformancePackComplianceSummaryCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetAggregateConformancePackComplianceSummaryCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetAggregateConformancePackComplianceSummaryResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetAggregateConformancePackComplianceSummaryCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidLimitException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidLimitException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidNextTokenException": return [3 /*break*/, 4];
                    case "NoSuchConfigurationAggregatorException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.configservice#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetAggregateDiscoveredResourceCountsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetAggregateDiscoveredResourceCountsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetAggregateDiscoveredResourceCountsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetAggregateDiscoveredResourceCountsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidLimitException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidLimitException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidNextTokenException": return [3 /*break*/, 4];
                    case "NoSuchConfigurationAggregatorException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.configservice#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetAggregateResourceConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetAggregateResourceConfigCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetAggregateResourceConfigResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetAggregateResourceConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "NoSuchConfigurationAggregatorException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException": return [3 /*break*/, 2];
                    case "OversizedConfigurationItemException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#OversizedConfigurationItemException": return [3 /*break*/, 4];
                    case "ResourceNotDiscoveredException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#ResourceNotDiscoveredException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.configservice#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OversizedConfigurationItemExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotDiscoveredExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetComplianceDetailsByConfigRuleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetComplianceDetailsByConfigRuleCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetComplianceDetailsByConfigRuleResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetComplianceDetailsByConfigRuleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidNextTokenException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidNextTokenException": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidParameterValueException": return [3 /*break*/, 4];
                    case "NoSuchConfigRuleException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#NoSuchConfigRuleException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchConfigRuleExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetComplianceDetailsByResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetComplianceDetailsByResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetComplianceDetailsByResourceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetComplianceDetailsByResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidParameterValueException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetComplianceSummaryByConfigRuleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetComplianceSummaryByConfigRuleCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetComplianceSummaryByConfigRuleResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetComplianceSummaryByConfigRuleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_json1_1GetComplianceSummaryByResourceTypeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetComplianceSummaryByResourceTypeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetComplianceSummaryByResourceTypeResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetComplianceSummaryByResourceTypeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidParameterValueException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetConformancePackComplianceDetailsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetConformancePackComplianceDetailsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetConformancePackComplianceDetailsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetConformancePackComplianceDetailsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidLimitException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidLimitException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidNextTokenException": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#InvalidParameterValueException": return [3 /*break*/, 6];
                    case "NoSuchConfigRuleInConformancePackException": return [3 /*break*/, 8];
                    case "com.amazonaws.configservice#NoSuchConfigRuleInConformancePackException": return [3 /*break*/, 8];
                    case "NoSuchConformancePackException": return [3 /*break*/, 10];
                    case "com.amazonaws.configservice#NoSuchConformancePackException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchConfigRuleInConformancePackExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchConformancePackExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetConformancePackComplianceSummaryCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetConformancePackComplianceSummaryCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetConformancePackComplianceSummaryResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetConformancePackComplianceSummaryCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidLimitException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidLimitException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidNextTokenException": return [3 /*break*/, 4];
                    case "NoSuchConformancePackException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#NoSuchConformancePackException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_json1_1NoSuchConformancePackExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetDiscoveredResourceCountsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetDiscoveredResourceCountsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetDiscoveredResourceCountsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetDiscoveredResourceCountsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidLimitException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidLimitException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidNextTokenException": return [3 /*break*/, 4];
                    case "ValidationException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#ValidationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetOrganizationConfigRuleDetailedStatusCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetOrganizationConfigRuleDetailedStatusCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetOrganizationConfigRuleDetailedStatusResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetOrganizationConfigRuleDetailedStatusCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidLimitException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidLimitException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidNextTokenException": return [3 /*break*/, 4];
                    case "NoSuchOrganizationConfigRuleException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#NoSuchOrganizationConfigRuleException": return [3 /*break*/, 6];
                    case "OrganizationAccessDeniedException": return [3 /*break*/, 8];
                    case "com.amazonaws.configservice#OrganizationAccessDeniedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchOrganizationConfigRuleExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetOrganizationConformancePackDetailedStatusResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidLimitException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidLimitException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidNextTokenException": return [3 /*break*/, 4];
                    case "NoSuchOrganizationConformancePackException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#NoSuchOrganizationConformancePackException": return [3 /*break*/, 6];
                    case "OrganizationAccessDeniedException": return [3 /*break*/, 8];
                    case "com.amazonaws.configservice#OrganizationAccessDeniedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchOrganizationConformancePackExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetResourceConfigHistoryCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetResourceConfigHistoryCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetResourceConfigHistoryResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetResourceConfigHistoryCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidLimitException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidLimitException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidNextTokenException": return [3 /*break*/, 4];
                    case "InvalidTimeRangeException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#InvalidTimeRangeException": return [3 /*break*/, 6];
                    case "NoAvailableConfigurationRecorderException": return [3 /*break*/, 8];
                    case "com.amazonaws.configservice#NoAvailableConfigurationRecorderException": return [3 /*break*/, 8];
                    case "ResourceNotDiscoveredException": return [3 /*break*/, 10];
                    case "com.amazonaws.configservice#ResourceNotDiscoveredException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.configservice#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTimeRangeExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoAvailableConfigurationRecorderExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotDiscoveredExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetStoredQueryCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetStoredQueryCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetStoredQueryResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetStoredQueryCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ResourceNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#ResourceNotFoundException": return [3 /*break*/, 2];
                    case "ValidationException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#ValidationException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListAggregateDiscoveredResourcesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListAggregateDiscoveredResourcesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListAggregateDiscoveredResourcesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListAggregateDiscoveredResourcesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidLimitException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidLimitException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidNextTokenException": return [3 /*break*/, 4];
                    case "NoSuchConfigurationAggregatorException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.configservice#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListDiscoveredResourcesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListDiscoveredResourcesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListDiscoveredResourcesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListDiscoveredResourcesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidLimitException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidLimitException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidNextTokenException": return [3 /*break*/, 4];
                    case "NoAvailableConfigurationRecorderException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#NoAvailableConfigurationRecorderException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.configservice#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoAvailableConfigurationRecorderExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListStoredQueriesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListStoredQueriesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListStoredQueriesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListStoredQueriesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidNextTokenException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidNextTokenException": return [3 /*break*/, 2];
                    case "ValidationException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#ValidationException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
                    case "InvalidLimitException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidLimitException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidNextTokenException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.configservice#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutAggregationAuthorizationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutAggregationAuthorizationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1PutAggregationAuthorizationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1PutAggregationAuthorizationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidParameterValueException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutConfigRuleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutConfigRuleCommandError(output, context)];
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
var deserializeAws_json1_1PutConfigRuleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InsufficientPermissionsException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InsufficientPermissionsException": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidParameterValueException": return [3 /*break*/, 4];
                    case "MaxNumberOfConfigRulesExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#MaxNumberOfConfigRulesExceededException": return [3 /*break*/, 6];
                    case "NoAvailableConfigurationRecorderException": return [3 /*break*/, 8];
                    case "com.amazonaws.configservice#NoAvailableConfigurationRecorderException": return [3 /*break*/, 8];
                    case "ResourceInUseException": return [3 /*break*/, 10];
                    case "com.amazonaws.configservice#ResourceInUseException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MaxNumberOfConfigRulesExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoAvailableConfigurationRecorderExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutConfigurationAggregatorCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutConfigurationAggregatorCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1PutConfigurationAggregatorResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1PutConfigurationAggregatorCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "InvalidRoleException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidRoleException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#LimitExceededException": return [3 /*break*/, 6];
                    case "NoAvailableOrganizationException": return [3 /*break*/, 8];
                    case "com.amazonaws.configservice#NoAvailableOrganizationException": return [3 /*break*/, 8];
                    case "OrganizationAccessDeniedException": return [3 /*break*/, 10];
                    case "com.amazonaws.configservice#OrganizationAccessDeniedException": return [3 /*break*/, 10];
                    case "OrganizationAllFeaturesNotEnabledException": return [3 /*break*/, 12];
                    case "com.amazonaws.configservice#OrganizationAllFeaturesNotEnabledException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoAvailableOrganizationExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OrganizationAllFeaturesNotEnabledExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutConfigurationRecorderCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutConfigurationRecorderCommandError(output, context)];
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
var deserializeAws_json1_1PutConfigurationRecorderCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidConfigurationRecorderNameException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidConfigurationRecorderNameException": return [3 /*break*/, 2];
                    case "InvalidRecordingGroupException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidRecordingGroupException": return [3 /*break*/, 4];
                    case "InvalidRoleException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#InvalidRoleException": return [3 /*break*/, 6];
                    case "MaxNumberOfConfigurationRecordersExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.configservice#MaxNumberOfConfigurationRecordersExceededException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidConfigurationRecorderNameExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRecordingGroupExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MaxNumberOfConfigurationRecordersExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutConformancePackCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutConformancePackCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1PutConformancePackResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1PutConformancePackCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConformancePackTemplateValidationException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#ConformancePackTemplateValidationException": return [3 /*break*/, 2];
                    case "InsufficientPermissionsException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InsufficientPermissionsException": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#InvalidParameterValueException": return [3 /*break*/, 6];
                    case "MaxNumberOfConformancePacksExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.configservice#MaxNumberOfConformancePacksExceededException": return [3 /*break*/, 8];
                    case "ResourceInUseException": return [3 /*break*/, 10];
                    case "com.amazonaws.configservice#ResourceInUseException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConformancePackTemplateValidationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MaxNumberOfConformancePacksExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutDeliveryChannelCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutDeliveryChannelCommandError(output, context)];
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
var deserializeAws_json1_1PutDeliveryChannelCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InsufficientDeliveryPolicyException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InsufficientDeliveryPolicyException": return [3 /*break*/, 2];
                    case "InvalidDeliveryChannelNameException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidDeliveryChannelNameException": return [3 /*break*/, 4];
                    case "InvalidS3KeyPrefixException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#InvalidS3KeyPrefixException": return [3 /*break*/, 6];
                    case "InvalidS3KmsKeyArnException": return [3 /*break*/, 8];
                    case "com.amazonaws.configservice#InvalidS3KmsKeyArnException": return [3 /*break*/, 8];
                    case "InvalidSNSTopicARNException": return [3 /*break*/, 10];
                    case "com.amazonaws.configservice#InvalidSNSTopicARNException": return [3 /*break*/, 10];
                    case "MaxNumberOfDeliveryChannelsExceededException": return [3 /*break*/, 12];
                    case "com.amazonaws.configservice#MaxNumberOfDeliveryChannelsExceededException": return [3 /*break*/, 12];
                    case "NoAvailableConfigurationRecorderException": return [3 /*break*/, 14];
                    case "com.amazonaws.configservice#NoAvailableConfigurationRecorderException": return [3 /*break*/, 14];
                    case "NoSuchBucketException": return [3 /*break*/, 16];
                    case "com.amazonaws.configservice#NoSuchBucketException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InsufficientDeliveryPolicyExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidDeliveryChannelNameExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidS3KeyPrefixExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidS3KmsKeyArnExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSNSTopicARNExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MaxNumberOfDeliveryChannelsExceededExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoAvailableConfigurationRecorderExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchBucketExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutEvaluationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutEvaluationsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1PutEvaluationsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1PutEvaluationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "InvalidResultTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidResultTokenException": return [3 /*break*/, 4];
                    case "NoSuchConfigRuleException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#NoSuchConfigRuleException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResultTokenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchConfigRuleExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutExternalEvaluationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutExternalEvaluationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1PutExternalEvaluationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1PutExternalEvaluationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "NoSuchConfigRuleException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#NoSuchConfigRuleException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchConfigRuleExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutOrganizationConfigRuleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutOrganizationConfigRuleCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1PutOrganizationConfigRuleResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1PutOrganizationConfigRuleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InsufficientPermissionsException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InsufficientPermissionsException": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidParameterValueException": return [3 /*break*/, 4];
                    case "MaxNumberOfOrganizationConfigRulesExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#MaxNumberOfOrganizationConfigRulesExceededException": return [3 /*break*/, 6];
                    case "NoAvailableOrganizationException": return [3 /*break*/, 8];
                    case "com.amazonaws.configservice#NoAvailableOrganizationException": return [3 /*break*/, 8];
                    case "OrganizationAccessDeniedException": return [3 /*break*/, 10];
                    case "com.amazonaws.configservice#OrganizationAccessDeniedException": return [3 /*break*/, 10];
                    case "OrganizationAllFeaturesNotEnabledException": return [3 /*break*/, 12];
                    case "com.amazonaws.configservice#OrganizationAllFeaturesNotEnabledException": return [3 /*break*/, 12];
                    case "ResourceInUseException": return [3 /*break*/, 14];
                    case "com.amazonaws.configservice#ResourceInUseException": return [3 /*break*/, 14];
                    case "ValidationException": return [3 /*break*/, 16];
                    case "com.amazonaws.configservice#ValidationException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MaxNumberOfOrganizationConfigRulesExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoAvailableOrganizationExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OrganizationAllFeaturesNotEnabledExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutOrganizationConformancePackCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutOrganizationConformancePackCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1PutOrganizationConformancePackResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1PutOrganizationConformancePackCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InsufficientPermissionsException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InsufficientPermissionsException": return [3 /*break*/, 2];
                    case "MaxNumberOfOrganizationConformancePacksExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#MaxNumberOfOrganizationConformancePacksExceededException": return [3 /*break*/, 4];
                    case "NoAvailableOrganizationException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#NoAvailableOrganizationException": return [3 /*break*/, 6];
                    case "OrganizationAccessDeniedException": return [3 /*break*/, 8];
                    case "com.amazonaws.configservice#OrganizationAccessDeniedException": return [3 /*break*/, 8];
                    case "OrganizationAllFeaturesNotEnabledException": return [3 /*break*/, 10];
                    case "com.amazonaws.configservice#OrganizationAllFeaturesNotEnabledException": return [3 /*break*/, 10];
                    case "OrganizationConformancePackTemplateValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.configservice#OrganizationConformancePackTemplateValidationException": return [3 /*break*/, 12];
                    case "ResourceInUseException": return [3 /*break*/, 14];
                    case "com.amazonaws.configservice#ResourceInUseException": return [3 /*break*/, 14];
                    case "ValidationException": return [3 /*break*/, 16];
                    case "com.amazonaws.configservice#ValidationException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MaxNumberOfOrganizationConformancePacksExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoAvailableOrganizationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OrganizationAllFeaturesNotEnabledExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OrganizationConformancePackTemplateValidationExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutRemediationConfigurationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutRemediationConfigurationsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1PutRemediationConfigurationsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1PutRemediationConfigurationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InsufficientPermissionsException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InsufficientPermissionsException": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidParameterValueException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutRemediationExceptionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutRemediationExceptionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1PutRemediationExceptionsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1PutRemediationExceptionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InsufficientPermissionsException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InsufficientPermissionsException": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidParameterValueException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutResourceConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutResourceConfigCommandError(output, context)];
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
var deserializeAws_json1_1PutResourceConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InsufficientPermissionsException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InsufficientPermissionsException": return [3 /*break*/, 2];
                    case "MaxActiveResourcesExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#MaxActiveResourcesExceededException": return [3 /*break*/, 4];
                    case "NoRunningConfigurationRecorderException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#NoRunningConfigurationRecorderException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.configservice#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MaxActiveResourcesExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoRunningConfigurationRecorderExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutRetentionConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutRetentionConfigurationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1PutRetentionConfigurationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1PutRetentionConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "MaxNumberOfRetentionConfigurationsExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#MaxNumberOfRetentionConfigurationsExceededException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MaxNumberOfRetentionConfigurationsExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutStoredQueryCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutStoredQueryCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1PutStoredQueryResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1PutStoredQueryCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ResourceConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#ResourceConcurrentModificationException": return [3 /*break*/, 2];
                    case "TooManyTagsException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#TooManyTagsException": return [3 /*break*/, 4];
                    case "ValidationException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#ValidationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1SelectAggregateResourceConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1SelectAggregateResourceConfigCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1SelectAggregateResourceConfigResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1SelectAggregateResourceConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidExpressionException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidExpressionException": return [3 /*break*/, 2];
                    case "InvalidLimitException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidLimitException": return [3 /*break*/, 4];
                    case "InvalidNextTokenException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#InvalidNextTokenException": return [3 /*break*/, 6];
                    case "NoSuchConfigurationAggregatorException": return [3 /*break*/, 8];
                    case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidExpressionExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1SelectResourceConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1SelectResourceConfigCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1SelectResourceConfigResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1SelectResourceConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidExpressionException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidExpressionException": return [3 /*break*/, 2];
                    case "InvalidLimitException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidLimitException": return [3 /*break*/, 4];
                    case "InvalidNextTokenException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#InvalidNextTokenException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidExpressionExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1StartConfigRulesEvaluationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StartConfigRulesEvaluationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1StartConfigRulesEvaluationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1StartConfigRulesEvaluationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#LimitExceededException": return [3 /*break*/, 4];
                    case "NoSuchConfigRuleException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#NoSuchConfigRuleException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.configservice#ResourceInUseException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_json1_1NoSuchConfigRuleExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1StartConfigurationRecorderCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StartConfigurationRecorderCommandError(output, context)];
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
var deserializeAws_json1_1StartConfigurationRecorderCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "NoAvailableDeliveryChannelException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#NoAvailableDeliveryChannelException": return [3 /*break*/, 2];
                    case "NoSuchConfigurationRecorderException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#NoSuchConfigurationRecorderException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoAvailableDeliveryChannelExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchConfigurationRecorderExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1StartRemediationExecutionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StartRemediationExecutionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1StartRemediationExecutionResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1StartRemediationExecutionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InsufficientPermissionsException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#InsufficientPermissionsException": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#InvalidParameterValueException": return [3 /*break*/, 4];
                    case "NoSuchRemediationConfigurationException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#NoSuchRemediationConfigurationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchRemediationConfigurationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1StopConfigurationRecorderCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StopConfigurationRecorderCommandError(output, context)];
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
var deserializeAws_json1_1StopConfigurationRecorderCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "NoSuchConfigurationRecorderException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#NoSuchConfigurationRecorderException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoSuchConfigurationRecorderExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1TagResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1TagResourceCommandError(output, context)];
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
var deserializeAws_json1_1TagResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ResourceNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#ResourceNotFoundException": return [3 /*break*/, 2];
                    case "TooManyTagsException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#TooManyTagsException": return [3 /*break*/, 4];
                    case "ValidationException": return [3 /*break*/, 6];
                    case "com.amazonaws.configservice#ValidationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UntagResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UntagResourceCommandError(output, context)];
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
var deserializeAws_json1_1UntagResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ResourceNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.configservice#ResourceNotFoundException": return [3 /*break*/, 2];
                    case "ValidationException": return [3 /*break*/, 4];
                    case "com.amazonaws.configservice#ValidationException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
var deserializeAws_json1_1ConformancePackTemplateValidationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ConformancePackTemplateValidationException(body, context);
        contents = __assign({ name: "ConformancePackTemplateValidationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InsufficientDeliveryPolicyExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InsufficientDeliveryPolicyException(body, context);
        contents = __assign({ name: "InsufficientDeliveryPolicyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InsufficientPermissionsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InsufficientPermissionsException(body, context);
        contents = __assign({ name: "InsufficientPermissionsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidConfigurationRecorderNameExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidConfigurationRecorderNameException(body, context);
        contents = __assign({ name: "InvalidConfigurationRecorderNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidDeliveryChannelNameExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidDeliveryChannelNameException(body, context);
        contents = __assign({ name: "InvalidDeliveryChannelNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidExpressionExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidExpressionException(body, context);
        contents = __assign({ name: "InvalidExpressionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidLimitExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidLimitException(body, context);
        contents = __assign({ name: "InvalidLimitException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_json1_1InvalidParameterValueExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidParameterValueException(body, context);
        contents = __assign({ name: "InvalidParameterValueException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidRecordingGroupExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidRecordingGroupException(body, context);
        contents = __assign({ name: "InvalidRecordingGroupException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidResultTokenExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidResultTokenException(body, context);
        contents = __assign({ name: "InvalidResultTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidRoleExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidRoleException(body, context);
        contents = __assign({ name: "InvalidRoleException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidS3KeyPrefixExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidS3KeyPrefixException(body, context);
        contents = __assign({ name: "InvalidS3KeyPrefixException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidS3KmsKeyArnExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidS3KmsKeyArnException(body, context);
        contents = __assign({ name: "InvalidS3KmsKeyArnException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidSNSTopicARNExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidSNSTopicARNException(body, context);
        contents = __assign({ name: "InvalidSNSTopicARNException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidTimeRangeExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidTimeRangeException(body, context);
        contents = __assign({ name: "InvalidTimeRangeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1LastDeliveryChannelDeleteFailedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1LastDeliveryChannelDeleteFailedException(body, context);
        contents = __assign({ name: "LastDeliveryChannelDeleteFailedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_json1_1MaxActiveResourcesExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1MaxActiveResourcesExceededException(body, context);
        contents = __assign({ name: "MaxActiveResourcesExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1MaxNumberOfConfigRulesExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1MaxNumberOfConfigRulesExceededException(body, context);
        contents = __assign({ name: "MaxNumberOfConfigRulesExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1MaxNumberOfConfigurationRecordersExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1MaxNumberOfConfigurationRecordersExceededException(body, context);
        contents = __assign({ name: "MaxNumberOfConfigurationRecordersExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1MaxNumberOfConformancePacksExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1MaxNumberOfConformancePacksExceededException(body, context);
        contents = __assign({ name: "MaxNumberOfConformancePacksExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1MaxNumberOfDeliveryChannelsExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1MaxNumberOfDeliveryChannelsExceededException(body, context);
        contents = __assign({ name: "MaxNumberOfDeliveryChannelsExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1MaxNumberOfOrganizationConfigRulesExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1MaxNumberOfOrganizationConfigRulesExceededException(body, context);
        contents = __assign({ name: "MaxNumberOfOrganizationConfigRulesExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1MaxNumberOfOrganizationConformancePacksExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1MaxNumberOfOrganizationConformancePacksExceededException(body, context);
        contents = __assign({ name: "MaxNumberOfOrganizationConformancePacksExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1MaxNumberOfRetentionConfigurationsExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1MaxNumberOfRetentionConfigurationsExceededException(body, context);
        contents = __assign({ name: "MaxNumberOfRetentionConfigurationsExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1NoAvailableConfigurationRecorderExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1NoAvailableConfigurationRecorderException(body, context);
        contents = __assign({ name: "NoAvailableConfigurationRecorderException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1NoAvailableDeliveryChannelExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1NoAvailableDeliveryChannelException(body, context);
        contents = __assign({ name: "NoAvailableDeliveryChannelException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1NoAvailableOrganizationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1NoAvailableOrganizationException(body, context);
        contents = __assign({ name: "NoAvailableOrganizationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1NoRunningConfigurationRecorderExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1NoRunningConfigurationRecorderException(body, context);
        contents = __assign({ name: "NoRunningConfigurationRecorderException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1NoSuchBucketExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1NoSuchBucketException(body, context);
        contents = __assign({ name: "NoSuchBucketException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1NoSuchConfigRuleExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1NoSuchConfigRuleException(body, context);
        contents = __assign({ name: "NoSuchConfigRuleException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1NoSuchConfigRuleInConformancePackExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1NoSuchConfigRuleInConformancePackException(body, context);
        contents = __assign({ name: "NoSuchConfigRuleInConformancePackException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1NoSuchConfigurationAggregatorException(body, context);
        contents = __assign({ name: "NoSuchConfigurationAggregatorException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1NoSuchConfigurationRecorderExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1NoSuchConfigurationRecorderException(body, context);
        contents = __assign({ name: "NoSuchConfigurationRecorderException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1NoSuchConformancePackExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1NoSuchConformancePackException(body, context);
        contents = __assign({ name: "NoSuchConformancePackException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1NoSuchDeliveryChannelExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1NoSuchDeliveryChannelException(body, context);
        contents = __assign({ name: "NoSuchDeliveryChannelException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1NoSuchOrganizationConfigRuleExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1NoSuchOrganizationConfigRuleException(body, context);
        contents = __assign({ name: "NoSuchOrganizationConfigRuleException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1NoSuchOrganizationConformancePackExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1NoSuchOrganizationConformancePackException(body, context);
        contents = __assign({ name: "NoSuchOrganizationConformancePackException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1NoSuchRemediationConfigurationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1NoSuchRemediationConfigurationException(body, context);
        contents = __assign({ name: "NoSuchRemediationConfigurationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1NoSuchRemediationExceptionExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1NoSuchRemediationExceptionException(body, context);
        contents = __assign({ name: "NoSuchRemediationExceptionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1NoSuchRetentionConfigurationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1NoSuchRetentionConfigurationException(body, context);
        contents = __assign({ name: "NoSuchRetentionConfigurationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1OrganizationAccessDeniedException(body, context);
        contents = __assign({ name: "OrganizationAccessDeniedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1OrganizationAllFeaturesNotEnabledExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1OrganizationAllFeaturesNotEnabledException(body, context);
        contents = __assign({ name: "OrganizationAllFeaturesNotEnabledException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1OrganizationConformancePackTemplateValidationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1OrganizationConformancePackTemplateValidationException(body, context);
        contents = __assign({ name: "OrganizationConformancePackTemplateValidationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1OversizedConfigurationItemExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1OversizedConfigurationItemException(body, context);
        contents = __assign({ name: "OversizedConfigurationItemException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1RemediationInProgressExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1RemediationInProgressException(body, context);
        contents = __assign({ name: "RemediationInProgressException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ResourceConcurrentModificationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ResourceConcurrentModificationException(body, context);
        contents = __assign({ name: "ResourceConcurrentModificationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_json1_1ResourceNotDiscoveredExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ResourceNotDiscoveredException(body, context);
        contents = __assign({ name: "ResourceNotDiscoveredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_json1_1TooManyTagsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1TooManyTagsException(body, context);
        contents = __assign({ name: "TooManyTagsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var serializeAws_json1_1AccountAggregationSource = function (input, context) {
    return __assign(__assign(__assign({}, (input.AccountIds !== undefined &&
        input.AccountIds !== null && {
        AccountIds: serializeAws_json1_1AccountAggregationSourceAccountList(input.AccountIds, context),
    })), (input.AllAwsRegions !== undefined && input.AllAwsRegions !== null && { AllAwsRegions: input.AllAwsRegions })), (input.AwsRegions !== undefined &&
        input.AwsRegions !== null && { AwsRegions: serializeAws_json1_1AggregatorRegionList(input.AwsRegions, context) }));
};
var serializeAws_json1_1AccountAggregationSourceAccountList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1AccountAggregationSourceList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1AccountAggregationSource(entry, context);
    });
};
var serializeAws_json1_1AggregateConformancePackComplianceFilters = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId })), (input.AwsRegion !== undefined && input.AwsRegion !== null && { AwsRegion: input.AwsRegion })), (input.ComplianceType !== undefined &&
        input.ComplianceType !== null && { ComplianceType: input.ComplianceType })), (input.ConformancePackName !== undefined &&
        input.ConformancePackName !== null && { ConformancePackName: input.ConformancePackName }));
};
var serializeAws_json1_1AggregateConformancePackComplianceSummaryFilters = function (input, context) {
    return __assign(__assign({}, (input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId })), (input.AwsRegion !== undefined && input.AwsRegion !== null && { AwsRegion: input.AwsRegion }));
};
var serializeAws_json1_1AggregatedSourceStatusTypeList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1AggregateResourceIdentifier = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId })), (input.ResourceName !== undefined && input.ResourceName !== null && { ResourceName: input.ResourceName })), (input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType })), (input.SourceAccountId !== undefined &&
        input.SourceAccountId !== null && { SourceAccountId: input.SourceAccountId })), (input.SourceRegion !== undefined && input.SourceRegion !== null && { SourceRegion: input.SourceRegion }));
};
var serializeAws_json1_1AggregatorRegionList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1BatchGetAggregateResourceConfigRequest = function (input, context) {
    return __assign(__assign({}, (input.ConfigurationAggregatorName !== undefined &&
        input.ConfigurationAggregatorName !== null && { ConfigurationAggregatorName: input.ConfigurationAggregatorName })), (input.ResourceIdentifiers !== undefined &&
        input.ResourceIdentifiers !== null && {
        ResourceIdentifiers: serializeAws_json1_1ResourceIdentifiersList(input.ResourceIdentifiers, context),
    }));
};
var serializeAws_json1_1BatchGetResourceConfigRequest = function (input, context) {
    return __assign({}, (input.resourceKeys !== undefined &&
        input.resourceKeys !== null && { resourceKeys: serializeAws_json1_1ResourceKeys(input.resourceKeys, context) }));
};
var serializeAws_json1_1ComplianceResourceTypes = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ComplianceTypes = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ConfigRule = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.ConfigRuleArn !== undefined && input.ConfigRuleArn !== null && { ConfigRuleArn: input.ConfigRuleArn })), (input.ConfigRuleId !== undefined && input.ConfigRuleId !== null && { ConfigRuleId: input.ConfigRuleId })), (input.ConfigRuleName !== undefined &&
        input.ConfigRuleName !== null && { ConfigRuleName: input.ConfigRuleName })), (input.ConfigRuleState !== undefined &&
        input.ConfigRuleState !== null && { ConfigRuleState: input.ConfigRuleState })), (input.CreatedBy !== undefined && input.CreatedBy !== null && { CreatedBy: input.CreatedBy })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.InputParameters !== undefined &&
        input.InputParameters !== null && { InputParameters: input.InputParameters })), (input.MaximumExecutionFrequency !== undefined &&
        input.MaximumExecutionFrequency !== null && { MaximumExecutionFrequency: input.MaximumExecutionFrequency })), (input.Scope !== undefined &&
        input.Scope !== null && { Scope: serializeAws_json1_1Scope(input.Scope, context) })), (input.Source !== undefined &&
        input.Source !== null && { Source: serializeAws_json1_1Source(input.Source, context) }));
};
var serializeAws_json1_1ConfigRuleComplianceFilters = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId })), (input.AwsRegion !== undefined && input.AwsRegion !== null && { AwsRegion: input.AwsRegion })), (input.ComplianceType !== undefined &&
        input.ComplianceType !== null && { ComplianceType: input.ComplianceType })), (input.ConfigRuleName !== undefined &&
        input.ConfigRuleName !== null && { ConfigRuleName: input.ConfigRuleName }));
};
var serializeAws_json1_1ConfigRuleComplianceSummaryFilters = function (input, context) {
    return __assign(__assign({}, (input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId })), (input.AwsRegion !== undefined && input.AwsRegion !== null && { AwsRegion: input.AwsRegion }));
};
var serializeAws_json1_1ConfigRuleNames = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ConfigSnapshotDeliveryProperties = function (input, context) {
    return __assign({}, (input.deliveryFrequency !== undefined &&
        input.deliveryFrequency !== null && { deliveryFrequency: input.deliveryFrequency }));
};
var serializeAws_json1_1ConfigurationAggregatorNameList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ConfigurationRecorder = function (input, context) {
    return __assign(__assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.recordingGroup !== undefined &&
        input.recordingGroup !== null && {
        recordingGroup: serializeAws_json1_1RecordingGroup(input.recordingGroup, context),
    })), (input.roleARN !== undefined && input.roleARN !== null && { roleARN: input.roleARN }));
};
var serializeAws_json1_1ConfigurationRecorderNameList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ConformancePackComplianceFilters = function (input, context) {
    return __assign(__assign({}, (input.ComplianceType !== undefined &&
        input.ComplianceType !== null && { ComplianceType: input.ComplianceType })), (input.ConfigRuleNames !== undefined &&
        input.ConfigRuleNames !== null && {
        ConfigRuleNames: serializeAws_json1_1ConformancePackConfigRuleNames(input.ConfigRuleNames, context),
    }));
};
var serializeAws_json1_1ConformancePackComplianceResourceIds = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ConformancePackConfigRuleNames = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ConformancePackEvaluationFilters = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.ComplianceType !== undefined &&
        input.ComplianceType !== null && { ComplianceType: input.ComplianceType })), (input.ConfigRuleNames !== undefined &&
        input.ConfigRuleNames !== null && {
        ConfigRuleNames: serializeAws_json1_1ConformancePackConfigRuleNames(input.ConfigRuleNames, context),
    })), (input.ResourceIds !== undefined &&
        input.ResourceIds !== null && {
        ResourceIds: serializeAws_json1_1ConformancePackComplianceResourceIds(input.ResourceIds, context),
    })), (input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }));
};
var serializeAws_json1_1ConformancePackInputParameter = function (input, context) {
    return __assign(__assign({}, (input.ParameterName !== undefined && input.ParameterName !== null && { ParameterName: input.ParameterName })), (input.ParameterValue !== undefined &&
        input.ParameterValue !== null && { ParameterValue: input.ParameterValue }));
};
var serializeAws_json1_1ConformancePackInputParameters = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ConformancePackInputParameter(entry, context);
    });
};
var serializeAws_json1_1ConformancePackNamesList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ConformancePackNamesToSummarizeList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1DeleteAggregationAuthorizationRequest = function (input, context) {
    return __assign(__assign({}, (input.AuthorizedAccountId !== undefined &&
        input.AuthorizedAccountId !== null && { AuthorizedAccountId: input.AuthorizedAccountId })), (input.AuthorizedAwsRegion !== undefined &&
        input.AuthorizedAwsRegion !== null && { AuthorizedAwsRegion: input.AuthorizedAwsRegion }));
};
var serializeAws_json1_1DeleteConfigRuleRequest = function (input, context) {
    return __assign({}, (input.ConfigRuleName !== undefined &&
        input.ConfigRuleName !== null && { ConfigRuleName: input.ConfigRuleName }));
};
var serializeAws_json1_1DeleteConfigurationAggregatorRequest = function (input, context) {
    return __assign({}, (input.ConfigurationAggregatorName !== undefined &&
        input.ConfigurationAggregatorName !== null && { ConfigurationAggregatorName: input.ConfigurationAggregatorName }));
};
var serializeAws_json1_1DeleteConfigurationRecorderRequest = function (input, context) {
    return __assign({}, (input.ConfigurationRecorderName !== undefined &&
        input.ConfigurationRecorderName !== null && { ConfigurationRecorderName: input.ConfigurationRecorderName }));
};
var serializeAws_json1_1DeleteConformancePackRequest = function (input, context) {
    return __assign({}, (input.ConformancePackName !== undefined &&
        input.ConformancePackName !== null && { ConformancePackName: input.ConformancePackName }));
};
var serializeAws_json1_1DeleteDeliveryChannelRequest = function (input, context) {
    return __assign({}, (input.DeliveryChannelName !== undefined &&
        input.DeliveryChannelName !== null && { DeliveryChannelName: input.DeliveryChannelName }));
};
var serializeAws_json1_1DeleteEvaluationResultsRequest = function (input, context) {
    return __assign({}, (input.ConfigRuleName !== undefined &&
        input.ConfigRuleName !== null && { ConfigRuleName: input.ConfigRuleName }));
};
var serializeAws_json1_1DeleteOrganizationConfigRuleRequest = function (input, context) {
    return __assign({}, (input.OrganizationConfigRuleName !== undefined &&
        input.OrganizationConfigRuleName !== null && { OrganizationConfigRuleName: input.OrganizationConfigRuleName }));
};
var serializeAws_json1_1DeleteOrganizationConformancePackRequest = function (input, context) {
    return __assign({}, (input.OrganizationConformancePackName !== undefined &&
        input.OrganizationConformancePackName !== null && {
        OrganizationConformancePackName: input.OrganizationConformancePackName,
    }));
};
var serializeAws_json1_1DeletePendingAggregationRequestRequest = function (input, context) {
    return __assign(__assign({}, (input.RequesterAccountId !== undefined &&
        input.RequesterAccountId !== null && { RequesterAccountId: input.RequesterAccountId })), (input.RequesterAwsRegion !== undefined &&
        input.RequesterAwsRegion !== null && { RequesterAwsRegion: input.RequesterAwsRegion }));
};
var serializeAws_json1_1DeleteRemediationConfigurationRequest = function (input, context) {
    return __assign(__assign({}, (input.ConfigRuleName !== undefined &&
        input.ConfigRuleName !== null && { ConfigRuleName: input.ConfigRuleName })), (input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }));
};
var serializeAws_json1_1DeleteRemediationExceptionsRequest = function (input, context) {
    return __assign(__assign({}, (input.ConfigRuleName !== undefined &&
        input.ConfigRuleName !== null && { ConfigRuleName: input.ConfigRuleName })), (input.ResourceKeys !== undefined &&
        input.ResourceKeys !== null && {
        ResourceKeys: serializeAws_json1_1RemediationExceptionResourceKeys(input.ResourceKeys, context),
    }));
};
var serializeAws_json1_1DeleteResourceConfigRequest = function (input, context) {
    return __assign(__assign({}, (input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId })), (input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }));
};
var serializeAws_json1_1DeleteRetentionConfigurationRequest = function (input, context) {
    return __assign({}, (input.RetentionConfigurationName !== undefined &&
        input.RetentionConfigurationName !== null && { RetentionConfigurationName: input.RetentionConfigurationName }));
};
var serializeAws_json1_1DeleteStoredQueryRequest = function (input, context) {
    return __assign({}, (input.QueryName !== undefined && input.QueryName !== null && { QueryName: input.QueryName }));
};
var serializeAws_json1_1DeliverConfigSnapshotRequest = function (input, context) {
    return __assign({}, (input.deliveryChannelName !== undefined &&
        input.deliveryChannelName !== null && { deliveryChannelName: input.deliveryChannelName }));
};
var serializeAws_json1_1DeliveryChannel = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.configSnapshotDeliveryProperties !== undefined &&
        input.configSnapshotDeliveryProperties !== null && {
        configSnapshotDeliveryProperties: serializeAws_json1_1ConfigSnapshotDeliveryProperties(input.configSnapshotDeliveryProperties, context),
    })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.s3BucketName !== undefined && input.s3BucketName !== null && { s3BucketName: input.s3BucketName })), (input.s3KeyPrefix !== undefined && input.s3KeyPrefix !== null && { s3KeyPrefix: input.s3KeyPrefix })), (input.s3KmsKeyArn !== undefined && input.s3KmsKeyArn !== null && { s3KmsKeyArn: input.s3KmsKeyArn })), (input.snsTopicARN !== undefined && input.snsTopicARN !== null && { snsTopicARN: input.snsTopicARN }));
};
var serializeAws_json1_1DeliveryChannelNameList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1DescribeAggregateComplianceByConfigRulesRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.ConfigurationAggregatorName !== undefined &&
        input.ConfigurationAggregatorName !== null && { ConfigurationAggregatorName: input.ConfigurationAggregatorName })), (input.Filters !== undefined &&
        input.Filters !== null && { Filters: serializeAws_json1_1ConfigRuleComplianceFilters(input.Filters, context) })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1DescribeAggregateComplianceByConformancePacksRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.ConfigurationAggregatorName !== undefined &&
        input.ConfigurationAggregatorName !== null && { ConfigurationAggregatorName: input.ConfigurationAggregatorName })), (input.Filters !== undefined &&
        input.Filters !== null && {
        Filters: serializeAws_json1_1AggregateConformancePackComplianceFilters(input.Filters, context),
    })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1DescribeAggregationAuthorizationsRequest = function (input, context) {
    return __assign(__assign({}, (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1DescribeComplianceByConfigRuleRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.ComplianceTypes !== undefined &&
        input.ComplianceTypes !== null && {
        ComplianceTypes: serializeAws_json1_1ComplianceTypes(input.ComplianceTypes, context),
    })), (input.ConfigRuleNames !== undefined &&
        input.ConfigRuleNames !== null && {
        ConfigRuleNames: serializeAws_json1_1ConfigRuleNames(input.ConfigRuleNames, context),
    })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1DescribeComplianceByResourceRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.ComplianceTypes !== undefined &&
        input.ComplianceTypes !== null && {
        ComplianceTypes: serializeAws_json1_1ComplianceTypes(input.ComplianceTypes, context),
    })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId })), (input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }));
};
var serializeAws_json1_1DescribeConfigRuleEvaluationStatusRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.ConfigRuleNames !== undefined &&
        input.ConfigRuleNames !== null && {
        ConfigRuleNames: serializeAws_json1_1ConfigRuleNames(input.ConfigRuleNames, context),
    })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1DescribeConfigRulesRequest = function (input, context) {
    return __assign(__assign({}, (input.ConfigRuleNames !== undefined &&
        input.ConfigRuleNames !== null && {
        ConfigRuleNames: serializeAws_json1_1ConfigRuleNames(input.ConfigRuleNames, context),
    })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.ConfigurationAggregatorName !== undefined &&
        input.ConfigurationAggregatorName !== null && { ConfigurationAggregatorName: input.ConfigurationAggregatorName })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.UpdateStatus !== undefined &&
        input.UpdateStatus !== null && {
        UpdateStatus: serializeAws_json1_1AggregatedSourceStatusTypeList(input.UpdateStatus, context),
    }));
};
var serializeAws_json1_1DescribeConfigurationAggregatorsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.ConfigurationAggregatorNames !== undefined &&
        input.ConfigurationAggregatorNames !== null && {
        ConfigurationAggregatorNames: serializeAws_json1_1ConfigurationAggregatorNameList(input.ConfigurationAggregatorNames, context),
    })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1DescribeConfigurationRecordersRequest = function (input, context) {
    return __assign({}, (input.ConfigurationRecorderNames !== undefined &&
        input.ConfigurationRecorderNames !== null && {
        ConfigurationRecorderNames: serializeAws_json1_1ConfigurationRecorderNameList(input.ConfigurationRecorderNames, context),
    }));
};
var serializeAws_json1_1DescribeConfigurationRecorderStatusRequest = function (input, context) {
    return __assign({}, (input.ConfigurationRecorderNames !== undefined &&
        input.ConfigurationRecorderNames !== null && {
        ConfigurationRecorderNames: serializeAws_json1_1ConfigurationRecorderNameList(input.ConfigurationRecorderNames, context),
    }));
};
var serializeAws_json1_1DescribeConformancePackComplianceRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.ConformancePackName !== undefined &&
        input.ConformancePackName !== null && { ConformancePackName: input.ConformancePackName })), (input.Filters !== undefined &&
        input.Filters !== null && {
        Filters: serializeAws_json1_1ConformancePackComplianceFilters(input.Filters, context),
    })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1DescribeConformancePacksRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.ConformancePackNames !== undefined &&
        input.ConformancePackNames !== null && {
        ConformancePackNames: serializeAws_json1_1ConformancePackNamesList(input.ConformancePackNames, context),
    })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1DescribeConformancePackStatusRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.ConformancePackNames !== undefined &&
        input.ConformancePackNames !== null && {
        ConformancePackNames: serializeAws_json1_1ConformancePackNamesList(input.ConformancePackNames, context),
    })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1DescribeDeliveryChannelsRequest = function (input, context) {
    return __assign({}, (input.DeliveryChannelNames !== undefined &&
        input.DeliveryChannelNames !== null && {
        DeliveryChannelNames: serializeAws_json1_1DeliveryChannelNameList(input.DeliveryChannelNames, context),
    }));
};
var serializeAws_json1_1DescribeDeliveryChannelStatusRequest = function (input, context) {
    return __assign({}, (input.DeliveryChannelNames !== undefined &&
        input.DeliveryChannelNames !== null && {
        DeliveryChannelNames: serializeAws_json1_1DeliveryChannelNameList(input.DeliveryChannelNames, context),
    }));
};
var serializeAws_json1_1DescribeOrganizationConfigRulesRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.OrganizationConfigRuleNames !== undefined &&
        input.OrganizationConfigRuleNames !== null && {
        OrganizationConfigRuleNames: serializeAws_json1_1OrganizationConfigRuleNames(input.OrganizationConfigRuleNames, context),
    }));
};
var serializeAws_json1_1DescribeOrganizationConfigRuleStatusesRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.OrganizationConfigRuleNames !== undefined &&
        input.OrganizationConfigRuleNames !== null && {
        OrganizationConfigRuleNames: serializeAws_json1_1OrganizationConfigRuleNames(input.OrganizationConfigRuleNames, context),
    }));
};
var serializeAws_json1_1DescribeOrganizationConformancePacksRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.OrganizationConformancePackNames !== undefined &&
        input.OrganizationConformancePackNames !== null && {
        OrganizationConformancePackNames: serializeAws_json1_1OrganizationConformancePackNames(input.OrganizationConformancePackNames, context),
    }));
};
var serializeAws_json1_1DescribeOrganizationConformancePackStatusesRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.OrganizationConformancePackNames !== undefined &&
        input.OrganizationConformancePackNames !== null && {
        OrganizationConformancePackNames: serializeAws_json1_1OrganizationConformancePackNames(input.OrganizationConformancePackNames, context),
    }));
};
var serializeAws_json1_1DescribePendingAggregationRequestsRequest = function (input, context) {
    return __assign(__assign({}, (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1DescribeRemediationConfigurationsRequest = function (input, context) {
    return __assign({}, (input.ConfigRuleNames !== undefined &&
        input.ConfigRuleNames !== null && {
        ConfigRuleNames: serializeAws_json1_1ConfigRuleNames(input.ConfigRuleNames, context),
    }));
};
var serializeAws_json1_1DescribeRemediationExceptionsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.ConfigRuleName !== undefined &&
        input.ConfigRuleName !== null && { ConfigRuleName: input.ConfigRuleName })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.ResourceKeys !== undefined &&
        input.ResourceKeys !== null && {
        ResourceKeys: serializeAws_json1_1RemediationExceptionResourceKeys(input.ResourceKeys, context),
    }));
};
var serializeAws_json1_1DescribeRemediationExecutionStatusRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.ConfigRuleName !== undefined &&
        input.ConfigRuleName !== null && { ConfigRuleName: input.ConfigRuleName })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.ResourceKeys !== undefined &&
        input.ResourceKeys !== null && { ResourceKeys: serializeAws_json1_1ResourceKeys(input.ResourceKeys, context) }));
};
var serializeAws_json1_1DescribeRetentionConfigurationsRequest = function (input, context) {
    return __assign(__assign({}, (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.RetentionConfigurationNames !== undefined &&
        input.RetentionConfigurationNames !== null && {
        RetentionConfigurationNames: serializeAws_json1_1RetentionConfigurationNameList(input.RetentionConfigurationNames, context),
    }));
};
var serializeAws_json1_1Evaluation = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.Annotation !== undefined && input.Annotation !== null && { Annotation: input.Annotation })), (input.ComplianceResourceId !== undefined &&
        input.ComplianceResourceId !== null && { ComplianceResourceId: input.ComplianceResourceId })), (input.ComplianceResourceType !== undefined &&
        input.ComplianceResourceType !== null && { ComplianceResourceType: input.ComplianceResourceType })), (input.ComplianceType !== undefined &&
        input.ComplianceType !== null && { ComplianceType: input.ComplianceType })), (input.OrderingTimestamp !== undefined &&
        input.OrderingTimestamp !== null && { OrderingTimestamp: Math.round(input.OrderingTimestamp.getTime() / 1000) }));
};
var serializeAws_json1_1Evaluations = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Evaluation(entry, context);
    });
};
var serializeAws_json1_1ExcludedAccounts = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ExecutionControls = function (input, context) {
    return __assign({}, (input.SsmControls !== undefined &&
        input.SsmControls !== null && { SsmControls: serializeAws_json1_1SsmControls(input.SsmControls, context) }));
};
var serializeAws_json1_1ExternalEvaluation = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.Annotation !== undefined && input.Annotation !== null && { Annotation: input.Annotation })), (input.ComplianceResourceId !== undefined &&
        input.ComplianceResourceId !== null && { ComplianceResourceId: input.ComplianceResourceId })), (input.ComplianceResourceType !== undefined &&
        input.ComplianceResourceType !== null && { ComplianceResourceType: input.ComplianceResourceType })), (input.ComplianceType !== undefined &&
        input.ComplianceType !== null && { ComplianceType: input.ComplianceType })), (input.OrderingTimestamp !== undefined &&
        input.OrderingTimestamp !== null && { OrderingTimestamp: Math.round(input.OrderingTimestamp.getTime() / 1000) }));
};
var serializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId })), (input.AwsRegion !== undefined && input.AwsRegion !== null && { AwsRegion: input.AwsRegion })), (input.ComplianceType !== undefined &&
        input.ComplianceType !== null && { ComplianceType: input.ComplianceType })), (input.ConfigRuleName !== undefined &&
        input.ConfigRuleName !== null && { ConfigRuleName: input.ConfigRuleName })), (input.ConfigurationAggregatorName !== undefined &&
        input.ConfigurationAggregatorName !== null && { ConfigurationAggregatorName: input.ConfigurationAggregatorName })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1GetAggregateConfigRuleComplianceSummaryRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.ConfigurationAggregatorName !== undefined &&
        input.ConfigurationAggregatorName !== null && { ConfigurationAggregatorName: input.ConfigurationAggregatorName })), (input.Filters !== undefined &&
        input.Filters !== null && {
        Filters: serializeAws_json1_1ConfigRuleComplianceSummaryFilters(input.Filters, context),
    })), (input.GroupByKey !== undefined && input.GroupByKey !== null && { GroupByKey: input.GroupByKey })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1GetAggregateConformancePackComplianceSummaryRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.ConfigurationAggregatorName !== undefined &&
        input.ConfigurationAggregatorName !== null && { ConfigurationAggregatorName: input.ConfigurationAggregatorName })), (input.Filters !== undefined &&
        input.Filters !== null && {
        Filters: serializeAws_json1_1AggregateConformancePackComplianceSummaryFilters(input.Filters, context),
    })), (input.GroupByKey !== undefined && input.GroupByKey !== null && { GroupByKey: input.GroupByKey })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1GetAggregateDiscoveredResourceCountsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.ConfigurationAggregatorName !== undefined &&
        input.ConfigurationAggregatorName !== null && { ConfigurationAggregatorName: input.ConfigurationAggregatorName })), (input.Filters !== undefined &&
        input.Filters !== null && { Filters: serializeAws_json1_1ResourceCountFilters(input.Filters, context) })), (input.GroupByKey !== undefined && input.GroupByKey !== null && { GroupByKey: input.GroupByKey })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1GetAggregateResourceConfigRequest = function (input, context) {
    return __assign(__assign({}, (input.ConfigurationAggregatorName !== undefined &&
        input.ConfigurationAggregatorName !== null && { ConfigurationAggregatorName: input.ConfigurationAggregatorName })), (input.ResourceIdentifier !== undefined &&
        input.ResourceIdentifier !== null && {
        ResourceIdentifier: serializeAws_json1_1AggregateResourceIdentifier(input.ResourceIdentifier, context),
    }));
};
var serializeAws_json1_1GetComplianceDetailsByConfigRuleRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.ComplianceTypes !== undefined &&
        input.ComplianceTypes !== null && {
        ComplianceTypes: serializeAws_json1_1ComplianceTypes(input.ComplianceTypes, context),
    })), (input.ConfigRuleName !== undefined &&
        input.ConfigRuleName !== null && { ConfigRuleName: input.ConfigRuleName })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1GetComplianceDetailsByResourceRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.ComplianceTypes !== undefined &&
        input.ComplianceTypes !== null && {
        ComplianceTypes: serializeAws_json1_1ComplianceTypes(input.ComplianceTypes, context),
    })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId })), (input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }));
};
var serializeAws_json1_1GetComplianceSummaryByResourceTypeRequest = function (input, context) {
    return __assign({}, (input.ResourceTypes !== undefined &&
        input.ResourceTypes !== null && {
        ResourceTypes: serializeAws_json1_1ResourceTypes(input.ResourceTypes, context),
    }));
};
var serializeAws_json1_1GetConformancePackComplianceDetailsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.ConformancePackName !== undefined &&
        input.ConformancePackName !== null && { ConformancePackName: input.ConformancePackName })), (input.Filters !== undefined &&
        input.Filters !== null && {
        Filters: serializeAws_json1_1ConformancePackEvaluationFilters(input.Filters, context),
    })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1GetConformancePackComplianceSummaryRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.ConformancePackNames !== undefined &&
        input.ConformancePackNames !== null && {
        ConformancePackNames: serializeAws_json1_1ConformancePackNamesToSummarizeList(input.ConformancePackNames, context),
    })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1GetDiscoveredResourceCountsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.limit !== undefined && input.limit !== null && { limit: input.limit })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.resourceTypes !== undefined &&
        input.resourceTypes !== null && {
        resourceTypes: serializeAws_json1_1ResourceTypes(input.resourceTypes, context),
    }));
};
var serializeAws_json1_1GetOrganizationConfigRuleDetailedStatusRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Filters !== undefined &&
        input.Filters !== null && { Filters: serializeAws_json1_1StatusDetailFilters(input.Filters, context) })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.OrganizationConfigRuleName !== undefined &&
        input.OrganizationConfigRuleName !== null && { OrganizationConfigRuleName: input.OrganizationConfigRuleName }));
};
var serializeAws_json1_1GetOrganizationConformancePackDetailedStatusRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Filters !== undefined &&
        input.Filters !== null && {
        Filters: serializeAws_json1_1OrganizationResourceDetailedStatusFilters(input.Filters, context),
    })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.OrganizationConformancePackName !== undefined &&
        input.OrganizationConformancePackName !== null && {
        OrganizationConformancePackName: input.OrganizationConformancePackName,
    }));
};
var serializeAws_json1_1GetResourceConfigHistoryRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.chronologicalOrder !== undefined &&
        input.chronologicalOrder !== null && { chronologicalOrder: input.chronologicalOrder })), (input.earlierTime !== undefined &&
        input.earlierTime !== null && { earlierTime: Math.round(input.earlierTime.getTime() / 1000) })), (input.laterTime !== undefined &&
        input.laterTime !== null && { laterTime: Math.round(input.laterTime.getTime() / 1000) })), (input.limit !== undefined && input.limit !== null && { limit: input.limit })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.resourceId !== undefined && input.resourceId !== null && { resourceId: input.resourceId })), (input.resourceType !== undefined && input.resourceType !== null && { resourceType: input.resourceType }));
};
var serializeAws_json1_1GetStoredQueryRequest = function (input, context) {
    return __assign({}, (input.QueryName !== undefined && input.QueryName !== null && { QueryName: input.QueryName }));
};
var serializeAws_json1_1ListAggregateDiscoveredResourcesRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.ConfigurationAggregatorName !== undefined &&
        input.ConfigurationAggregatorName !== null && { ConfigurationAggregatorName: input.ConfigurationAggregatorName })), (input.Filters !== undefined &&
        input.Filters !== null && { Filters: serializeAws_json1_1ResourceFilters(input.Filters, context) })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }));
};
var serializeAws_json1_1ListDiscoveredResourcesRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.includeDeletedResources !== undefined &&
        input.includeDeletedResources !== null && { includeDeletedResources: input.includeDeletedResources })), (input.limit !== undefined && input.limit !== null && { limit: input.limit })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.resourceIds !== undefined &&
        input.resourceIds !== null && { resourceIds: serializeAws_json1_1ResourceIdList(input.resourceIds, context) })), (input.resourceName !== undefined && input.resourceName !== null && { resourceName: input.resourceName })), (input.resourceType !== undefined && input.resourceType !== null && { resourceType: input.resourceType }));
};
var serializeAws_json1_1ListStoredQueriesRequest = function (input, context) {
    return __assign(__assign({}, (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1ListTagsForResourceRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }));
};
var serializeAws_json1_1OrganizationAggregationSource = function (input, context) {
    return __assign(__assign(__assign({}, (input.AllAwsRegions !== undefined && input.AllAwsRegions !== null && { AllAwsRegions: input.AllAwsRegions })), (input.AwsRegions !== undefined &&
        input.AwsRegions !== null && { AwsRegions: serializeAws_json1_1AggregatorRegionList(input.AwsRegions, context) })), (input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }));
};
var serializeAws_json1_1OrganizationConfigRuleNames = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1OrganizationConfigRuleTriggerTypes = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1OrganizationConformancePackNames = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1OrganizationCustomRuleMetadata = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.InputParameters !== undefined &&
        input.InputParameters !== null && { InputParameters: input.InputParameters })), (input.LambdaFunctionArn !== undefined &&
        input.LambdaFunctionArn !== null && { LambdaFunctionArn: input.LambdaFunctionArn })), (input.MaximumExecutionFrequency !== undefined &&
        input.MaximumExecutionFrequency !== null && { MaximumExecutionFrequency: input.MaximumExecutionFrequency })), (input.OrganizationConfigRuleTriggerTypes !== undefined &&
        input.OrganizationConfigRuleTriggerTypes !== null && {
        OrganizationConfigRuleTriggerTypes: serializeAws_json1_1OrganizationConfigRuleTriggerTypes(input.OrganizationConfigRuleTriggerTypes, context),
    })), (input.ResourceIdScope !== undefined &&
        input.ResourceIdScope !== null && { ResourceIdScope: input.ResourceIdScope })), (input.ResourceTypesScope !== undefined &&
        input.ResourceTypesScope !== null && {
        ResourceTypesScope: serializeAws_json1_1ResourceTypesScope(input.ResourceTypesScope, context),
    })), (input.TagKeyScope !== undefined && input.TagKeyScope !== null && { TagKeyScope: input.TagKeyScope })), (input.TagValueScope !== undefined && input.TagValueScope !== null && { TagValueScope: input.TagValueScope }));
};
var serializeAws_json1_1OrganizationManagedRuleMetadata = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.InputParameters !== undefined &&
        input.InputParameters !== null && { InputParameters: input.InputParameters })), (input.MaximumExecutionFrequency !== undefined &&
        input.MaximumExecutionFrequency !== null && { MaximumExecutionFrequency: input.MaximumExecutionFrequency })), (input.ResourceIdScope !== undefined &&
        input.ResourceIdScope !== null && { ResourceIdScope: input.ResourceIdScope })), (input.ResourceTypesScope !== undefined &&
        input.ResourceTypesScope !== null && {
        ResourceTypesScope: serializeAws_json1_1ResourceTypesScope(input.ResourceTypesScope, context),
    })), (input.RuleIdentifier !== undefined &&
        input.RuleIdentifier !== null && { RuleIdentifier: input.RuleIdentifier })), (input.TagKeyScope !== undefined && input.TagKeyScope !== null && { TagKeyScope: input.TagKeyScope })), (input.TagValueScope !== undefined && input.TagValueScope !== null && { TagValueScope: input.TagValueScope }));
};
var serializeAws_json1_1OrganizationResourceDetailedStatusFilters = function (input, context) {
    return __assign(__assign({}, (input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId })), (input.Status !== undefined && input.Status !== null && { Status: input.Status }));
};
var serializeAws_json1_1PutAggregationAuthorizationRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.AuthorizedAccountId !== undefined &&
        input.AuthorizedAccountId !== null && { AuthorizedAccountId: input.AuthorizedAccountId })), (input.AuthorizedAwsRegion !== undefined &&
        input.AuthorizedAwsRegion !== null && { AuthorizedAwsRegion: input.AuthorizedAwsRegion })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagsList(input.Tags, context) }));
};
var serializeAws_json1_1PutConfigRuleRequest = function (input, context) {
    return __assign(__assign({}, (input.ConfigRule !== undefined &&
        input.ConfigRule !== null && { ConfigRule: serializeAws_json1_1ConfigRule(input.ConfigRule, context) })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagsList(input.Tags, context) }));
};
var serializeAws_json1_1PutConfigurationAggregatorRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AccountAggregationSources !== undefined &&
        input.AccountAggregationSources !== null && {
        AccountAggregationSources: serializeAws_json1_1AccountAggregationSourceList(input.AccountAggregationSources, context),
    })), (input.ConfigurationAggregatorName !== undefined &&
        input.ConfigurationAggregatorName !== null && { ConfigurationAggregatorName: input.ConfigurationAggregatorName })), (input.OrganizationAggregationSource !== undefined &&
        input.OrganizationAggregationSource !== null && {
        OrganizationAggregationSource: serializeAws_json1_1OrganizationAggregationSource(input.OrganizationAggregationSource, context),
    })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagsList(input.Tags, context) }));
};
var serializeAws_json1_1PutConfigurationRecorderRequest = function (input, context) {
    return __assign({}, (input.ConfigurationRecorder !== undefined &&
        input.ConfigurationRecorder !== null && {
        ConfigurationRecorder: serializeAws_json1_1ConfigurationRecorder(input.ConfigurationRecorder, context),
    }));
};
var serializeAws_json1_1PutConformancePackRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.ConformancePackInputParameters !== undefined &&
        input.ConformancePackInputParameters !== null && {
        ConformancePackInputParameters: serializeAws_json1_1ConformancePackInputParameters(input.ConformancePackInputParameters, context),
    })), (input.ConformancePackName !== undefined &&
        input.ConformancePackName !== null && { ConformancePackName: input.ConformancePackName })), (input.DeliveryS3Bucket !== undefined &&
        input.DeliveryS3Bucket !== null && { DeliveryS3Bucket: input.DeliveryS3Bucket })), (input.DeliveryS3KeyPrefix !== undefined &&
        input.DeliveryS3KeyPrefix !== null && { DeliveryS3KeyPrefix: input.DeliveryS3KeyPrefix })), (input.TemplateBody !== undefined && input.TemplateBody !== null && { TemplateBody: input.TemplateBody })), (input.TemplateS3Uri !== undefined && input.TemplateS3Uri !== null && { TemplateS3Uri: input.TemplateS3Uri }));
};
var serializeAws_json1_1PutDeliveryChannelRequest = function (input, context) {
    return __assign({}, (input.DeliveryChannel !== undefined &&
        input.DeliveryChannel !== null && {
        DeliveryChannel: serializeAws_json1_1DeliveryChannel(input.DeliveryChannel, context),
    }));
};
var serializeAws_json1_1PutEvaluationsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.Evaluations !== undefined &&
        input.Evaluations !== null && { Evaluations: serializeAws_json1_1Evaluations(input.Evaluations, context) })), (input.ResultToken !== undefined && input.ResultToken !== null && { ResultToken: input.ResultToken })), (input.TestMode !== undefined && input.TestMode !== null && { TestMode: input.TestMode }));
};
var serializeAws_json1_1PutExternalEvaluationRequest = function (input, context) {
    return __assign(__assign({}, (input.ConfigRuleName !== undefined &&
        input.ConfigRuleName !== null && { ConfigRuleName: input.ConfigRuleName })), (input.ExternalEvaluation !== undefined &&
        input.ExternalEvaluation !== null && {
        ExternalEvaluation: serializeAws_json1_1ExternalEvaluation(input.ExternalEvaluation, context),
    }));
};
var serializeAws_json1_1PutOrganizationConfigRuleRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.ExcludedAccounts !== undefined &&
        input.ExcludedAccounts !== null && {
        ExcludedAccounts: serializeAws_json1_1ExcludedAccounts(input.ExcludedAccounts, context),
    })), (input.OrganizationConfigRuleName !== undefined &&
        input.OrganizationConfigRuleName !== null && { OrganizationConfigRuleName: input.OrganizationConfigRuleName })), (input.OrganizationCustomRuleMetadata !== undefined &&
        input.OrganizationCustomRuleMetadata !== null && {
        OrganizationCustomRuleMetadata: serializeAws_json1_1OrganizationCustomRuleMetadata(input.OrganizationCustomRuleMetadata, context),
    })), (input.OrganizationManagedRuleMetadata !== undefined &&
        input.OrganizationManagedRuleMetadata !== null && {
        OrganizationManagedRuleMetadata: serializeAws_json1_1OrganizationManagedRuleMetadata(input.OrganizationManagedRuleMetadata, context),
    }));
};
var serializeAws_json1_1PutOrganizationConformancePackRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.ConformancePackInputParameters !== undefined &&
        input.ConformancePackInputParameters !== null && {
        ConformancePackInputParameters: serializeAws_json1_1ConformancePackInputParameters(input.ConformancePackInputParameters, context),
    })), (input.DeliveryS3Bucket !== undefined &&
        input.DeliveryS3Bucket !== null && { DeliveryS3Bucket: input.DeliveryS3Bucket })), (input.DeliveryS3KeyPrefix !== undefined &&
        input.DeliveryS3KeyPrefix !== null && { DeliveryS3KeyPrefix: input.DeliveryS3KeyPrefix })), (input.ExcludedAccounts !== undefined &&
        input.ExcludedAccounts !== null && {
        ExcludedAccounts: serializeAws_json1_1ExcludedAccounts(input.ExcludedAccounts, context),
    })), (input.OrganizationConformancePackName !== undefined &&
        input.OrganizationConformancePackName !== null && {
        OrganizationConformancePackName: input.OrganizationConformancePackName,
    })), (input.TemplateBody !== undefined && input.TemplateBody !== null && { TemplateBody: input.TemplateBody })), (input.TemplateS3Uri !== undefined && input.TemplateS3Uri !== null && { TemplateS3Uri: input.TemplateS3Uri }));
};
var serializeAws_json1_1PutRemediationConfigurationsRequest = function (input, context) {
    return __assign({}, (input.RemediationConfigurations !== undefined &&
        input.RemediationConfigurations !== null && {
        RemediationConfigurations: serializeAws_json1_1RemediationConfigurations(input.RemediationConfigurations, context),
    }));
};
var serializeAws_json1_1PutRemediationExceptionsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.ConfigRuleName !== undefined &&
        input.ConfigRuleName !== null && { ConfigRuleName: input.ConfigRuleName })), (input.ExpirationTime !== undefined &&
        input.ExpirationTime !== null && { ExpirationTime: Math.round(input.ExpirationTime.getTime() / 1000) })), (input.Message !== undefined && input.Message !== null && { Message: input.Message })), (input.ResourceKeys !== undefined &&
        input.ResourceKeys !== null && {
        ResourceKeys: serializeAws_json1_1RemediationExceptionResourceKeys(input.ResourceKeys, context),
    }));
};
var serializeAws_json1_1PutResourceConfigRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.Configuration !== undefined && input.Configuration !== null && { Configuration: input.Configuration })), (input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId })), (input.ResourceName !== undefined && input.ResourceName !== null && { ResourceName: input.ResourceName })), (input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType })), (input.SchemaVersionId !== undefined &&
        input.SchemaVersionId !== null && { SchemaVersionId: input.SchemaVersionId })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }));
};
var serializeAws_json1_1PutRetentionConfigurationRequest = function (input, context) {
    return __assign({}, (input.RetentionPeriodInDays !== undefined &&
        input.RetentionPeriodInDays !== null && { RetentionPeriodInDays: input.RetentionPeriodInDays }));
};
var serializeAws_json1_1PutStoredQueryRequest = function (input, context) {
    return __assign(__assign({}, (input.StoredQuery !== undefined &&
        input.StoredQuery !== null && { StoredQuery: serializeAws_json1_1StoredQuery(input.StoredQuery, context) })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagsList(input.Tags, context) }));
};
var serializeAws_json1_1RecordingGroup = function (input, context) {
    return __assign(__assign(__assign({}, (input.allSupported !== undefined && input.allSupported !== null && { allSupported: input.allSupported })), (input.includeGlobalResourceTypes !== undefined &&
        input.includeGlobalResourceTypes !== null && { includeGlobalResourceTypes: input.includeGlobalResourceTypes })), (input.resourceTypes !== undefined &&
        input.resourceTypes !== null && {
        resourceTypes: serializeAws_json1_1ResourceTypeList(input.resourceTypes, context),
    }));
};
var serializeAws_json1_1ReevaluateConfigRuleNames = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1RemediationConfiguration = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn })), (input.Automatic !== undefined && input.Automatic !== null && { Automatic: input.Automatic })), (input.ConfigRuleName !== undefined &&
        input.ConfigRuleName !== null && { ConfigRuleName: input.ConfigRuleName })), (input.CreatedByService !== undefined &&
        input.CreatedByService !== null && { CreatedByService: input.CreatedByService })), (input.ExecutionControls !== undefined &&
        input.ExecutionControls !== null && {
        ExecutionControls: serializeAws_json1_1ExecutionControls(input.ExecutionControls, context),
    })), (input.MaximumAutomaticAttempts !== undefined &&
        input.MaximumAutomaticAttempts !== null && { MaximumAutomaticAttempts: input.MaximumAutomaticAttempts })), (input.Parameters !== undefined &&
        input.Parameters !== null && {
        Parameters: serializeAws_json1_1RemediationParameters(input.Parameters, context),
    })), (input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType })), (input.RetryAttemptSeconds !== undefined &&
        input.RetryAttemptSeconds !== null && { RetryAttemptSeconds: input.RetryAttemptSeconds })), (input.TargetId !== undefined && input.TargetId !== null && { TargetId: input.TargetId })), (input.TargetType !== undefined && input.TargetType !== null && { TargetType: input.TargetType })), (input.TargetVersion !== undefined && input.TargetVersion !== null && { TargetVersion: input.TargetVersion }));
};
var serializeAws_json1_1RemediationConfigurations = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1RemediationConfiguration(entry, context);
    });
};
var serializeAws_json1_1RemediationExceptionResourceKey = function (input, context) {
    return __assign(__assign({}, (input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId })), (input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }));
};
var serializeAws_json1_1RemediationExceptionResourceKeys = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1RemediationExceptionResourceKey(entry, context);
    });
};
var serializeAws_json1_1RemediationParameters = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_json1_1RemediationParameterValue(value, context), _b));
    }, {});
};
var serializeAws_json1_1RemediationParameterValue = function (input, context) {
    return __assign(__assign({}, (input.ResourceValue !== undefined &&
        input.ResourceValue !== null && {
        ResourceValue: serializeAws_json1_1ResourceValue(input.ResourceValue, context),
    })), (input.StaticValue !== undefined &&
        input.StaticValue !== null && { StaticValue: serializeAws_json1_1StaticValue(input.StaticValue, context) }));
};
var serializeAws_json1_1ResourceCountFilters = function (input, context) {
    return __assign(__assign(__assign({}, (input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId })), (input.Region !== undefined && input.Region !== null && { Region: input.Region })), (input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }));
};
var serializeAws_json1_1ResourceFilters = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId })), (input.Region !== undefined && input.Region !== null && { Region: input.Region })), (input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId })), (input.ResourceName !== undefined && input.ResourceName !== null && { ResourceName: input.ResourceName }));
};
var serializeAws_json1_1ResourceIdentifiersList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1AggregateResourceIdentifier(entry, context);
    });
};
var serializeAws_json1_1ResourceIdList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ResourceKey = function (input, context) {
    return __assign(__assign({}, (input.resourceId !== undefined && input.resourceId !== null && { resourceId: input.resourceId })), (input.resourceType !== undefined && input.resourceType !== null && { resourceType: input.resourceType }));
};
var serializeAws_json1_1ResourceKeys = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ResourceKey(entry, context);
    });
};
var serializeAws_json1_1ResourceTypeList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ResourceTypes = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ResourceTypesScope = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ResourceValue = function (input, context) {
    return __assign({}, (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_json1_1RetentionConfigurationNameList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1Scope = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.ComplianceResourceId !== undefined &&
        input.ComplianceResourceId !== null && { ComplianceResourceId: input.ComplianceResourceId })), (input.ComplianceResourceTypes !== undefined &&
        input.ComplianceResourceTypes !== null && {
        ComplianceResourceTypes: serializeAws_json1_1ComplianceResourceTypes(input.ComplianceResourceTypes, context),
    })), (input.TagKey !== undefined && input.TagKey !== null && { TagKey: input.TagKey })), (input.TagValue !== undefined && input.TagValue !== null && { TagValue: input.TagValue }));
};
var serializeAws_json1_1SelectAggregateResourceConfigRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.ConfigurationAggregatorName !== undefined &&
        input.ConfigurationAggregatorName !== null && { ConfigurationAggregatorName: input.ConfigurationAggregatorName })), (input.Expression !== undefined && input.Expression !== null && { Expression: input.Expression })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1SelectResourceConfigRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.Expression !== undefined && input.Expression !== null && { Expression: input.Expression })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1Source = function (input, context) {
    return __assign(__assign(__assign({}, (input.Owner !== undefined && input.Owner !== null && { Owner: input.Owner })), (input.SourceDetails !== undefined &&
        input.SourceDetails !== null && {
        SourceDetails: serializeAws_json1_1SourceDetails(input.SourceDetails, context),
    })), (input.SourceIdentifier !== undefined &&
        input.SourceIdentifier !== null && { SourceIdentifier: input.SourceIdentifier }));
};
var serializeAws_json1_1SourceDetail = function (input, context) {
    return __assign(__assign(__assign({}, (input.EventSource !== undefined && input.EventSource !== null && { EventSource: input.EventSource })), (input.MaximumExecutionFrequency !== undefined &&
        input.MaximumExecutionFrequency !== null && { MaximumExecutionFrequency: input.MaximumExecutionFrequency })), (input.MessageType !== undefined && input.MessageType !== null && { MessageType: input.MessageType }));
};
var serializeAws_json1_1SourceDetails = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1SourceDetail(entry, context);
    });
};
var serializeAws_json1_1SsmControls = function (input, context) {
    return __assign(__assign({}, (input.ConcurrentExecutionRatePercentage !== undefined &&
        input.ConcurrentExecutionRatePercentage !== null && {
        ConcurrentExecutionRatePercentage: input.ConcurrentExecutionRatePercentage,
    })), (input.ErrorPercentage !== undefined &&
        input.ErrorPercentage !== null && { ErrorPercentage: input.ErrorPercentage }));
};
var serializeAws_json1_1StartConfigRulesEvaluationRequest = function (input, context) {
    return __assign({}, (input.ConfigRuleNames !== undefined &&
        input.ConfigRuleNames !== null && {
        ConfigRuleNames: serializeAws_json1_1ReevaluateConfigRuleNames(input.ConfigRuleNames, context),
    }));
};
var serializeAws_json1_1StartConfigurationRecorderRequest = function (input, context) {
    return __assign({}, (input.ConfigurationRecorderName !== undefined &&
        input.ConfigurationRecorderName !== null && { ConfigurationRecorderName: input.ConfigurationRecorderName }));
};
var serializeAws_json1_1StartRemediationExecutionRequest = function (input, context) {
    return __assign(__assign({}, (input.ConfigRuleName !== undefined &&
        input.ConfigRuleName !== null && { ConfigRuleName: input.ConfigRuleName })), (input.ResourceKeys !== undefined &&
        input.ResourceKeys !== null && { ResourceKeys: serializeAws_json1_1ResourceKeys(input.ResourceKeys, context) }));
};
var serializeAws_json1_1StaticParameterValues = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1StaticValue = function (input, context) {
    return __assign({}, (input.Values !== undefined &&
        input.Values !== null && { Values: serializeAws_json1_1StaticParameterValues(input.Values, context) }));
};
var serializeAws_json1_1StatusDetailFilters = function (input, context) {
    return __assign(__assign({}, (input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId })), (input.MemberAccountRuleStatus !== undefined &&
        input.MemberAccountRuleStatus !== null && { MemberAccountRuleStatus: input.MemberAccountRuleStatus }));
};
var serializeAws_json1_1StopConfigurationRecorderRequest = function (input, context) {
    return __assign({}, (input.ConfigurationRecorderName !== undefined &&
        input.ConfigurationRecorderName !== null && { ConfigurationRecorderName: input.ConfigurationRecorderName }));
};
var serializeAws_json1_1StoredQuery = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.Expression !== undefined && input.Expression !== null && { Expression: input.Expression })), (input.QueryArn !== undefined && input.QueryArn !== null && { QueryArn: input.QueryArn })), (input.QueryId !== undefined && input.QueryId !== null && { QueryId: input.QueryId })), (input.QueryName !== undefined && input.QueryName !== null && { QueryName: input.QueryName }));
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
    return __assign(__assign({}, (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }));
};
var serializeAws_json1_1Tags = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_json1_1TagsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
var serializeAws_json1_1UntagResourceRequest = function (input, context) {
    return __assign(__assign({}, (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn })), (input.TagKeys !== undefined &&
        input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }));
};
var deserializeAws_json1_1AccountAggregationSource = function (output, context) {
    return {
        AccountIds: output.AccountIds !== undefined && output.AccountIds !== null
            ? deserializeAws_json1_1AccountAggregationSourceAccountList(output.AccountIds, context)
            : undefined,
        AllAwsRegions: output.AllAwsRegions !== undefined && output.AllAwsRegions !== null ? output.AllAwsRegions : undefined,
        AwsRegions: output.AwsRegions !== undefined && output.AwsRegions !== null
            ? deserializeAws_json1_1AggregatorRegionList(output.AwsRegions, context)
            : undefined,
    };
};
var deserializeAws_json1_1AccountAggregationSourceAccountList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1AccountAggregationSourceList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AccountAggregationSource(entry, context);
    });
};
var deserializeAws_json1_1AggregateComplianceByConfigRule = function (output, context) {
    return {
        AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
        AwsRegion: output.AwsRegion !== undefined && output.AwsRegion !== null ? output.AwsRegion : undefined,
        Compliance: output.Compliance !== undefined && output.Compliance !== null
            ? deserializeAws_json1_1Compliance(output.Compliance, context)
            : undefined,
        ConfigRuleName: output.ConfigRuleName !== undefined && output.ConfigRuleName !== null ? output.ConfigRuleName : undefined,
    };
};
var deserializeAws_json1_1AggregateComplianceByConfigRuleList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AggregateComplianceByConfigRule(entry, context);
    });
};
var deserializeAws_json1_1AggregateComplianceByConformancePack = function (output, context) {
    return {
        AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
        AwsRegion: output.AwsRegion !== undefined && output.AwsRegion !== null ? output.AwsRegion : undefined,
        Compliance: output.Compliance !== undefined && output.Compliance !== null
            ? deserializeAws_json1_1AggregateConformancePackCompliance(output.Compliance, context)
            : undefined,
        ConformancePackName: output.ConformancePackName !== undefined && output.ConformancePackName !== null
            ? output.ConformancePackName
            : undefined,
    };
};
var deserializeAws_json1_1AggregateComplianceByConformancePackList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AggregateComplianceByConformancePack(entry, context);
    });
};
var deserializeAws_json1_1AggregateComplianceCount = function (output, context) {
    return {
        ComplianceSummary: output.ComplianceSummary !== undefined && output.ComplianceSummary !== null
            ? deserializeAws_json1_1ComplianceSummary(output.ComplianceSummary, context)
            : undefined,
        GroupName: output.GroupName !== undefined && output.GroupName !== null ? output.GroupName : undefined,
    };
};
var deserializeAws_json1_1AggregateComplianceCountList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AggregateComplianceCount(entry, context);
    });
};
var deserializeAws_json1_1AggregateConformancePackCompliance = function (output, context) {
    return {
        ComplianceType: output.ComplianceType !== undefined && output.ComplianceType !== null ? output.ComplianceType : undefined,
        CompliantRuleCount: output.CompliantRuleCount !== undefined && output.CompliantRuleCount !== null
            ? output.CompliantRuleCount
            : undefined,
        NonCompliantRuleCount: output.NonCompliantRuleCount !== undefined && output.NonCompliantRuleCount !== null
            ? output.NonCompliantRuleCount
            : undefined,
        TotalRuleCount: output.TotalRuleCount !== undefined && output.TotalRuleCount !== null ? output.TotalRuleCount : undefined,
    };
};
var deserializeAws_json1_1AggregateConformancePackComplianceCount = function (output, context) {
    return {
        CompliantConformancePackCount: output.CompliantConformancePackCount !== undefined && output.CompliantConformancePackCount !== null
            ? output.CompliantConformancePackCount
            : undefined,
        NonCompliantConformancePackCount: output.NonCompliantConformancePackCount !== undefined && output.NonCompliantConformancePackCount !== null
            ? output.NonCompliantConformancePackCount
            : undefined,
    };
};
var deserializeAws_json1_1AggregateConformancePackComplianceSummary = function (output, context) {
    return {
        ComplianceSummary: output.ComplianceSummary !== undefined && output.ComplianceSummary !== null
            ? deserializeAws_json1_1AggregateConformancePackComplianceCount(output.ComplianceSummary, context)
            : undefined,
        GroupName: output.GroupName !== undefined && output.GroupName !== null ? output.GroupName : undefined,
    };
};
var deserializeAws_json1_1AggregateConformancePackComplianceSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AggregateConformancePackComplianceSummary(entry, context);
    });
};
var deserializeAws_json1_1AggregatedSourceStatus = function (output, context) {
    return {
        AwsRegion: output.AwsRegion !== undefined && output.AwsRegion !== null ? output.AwsRegion : undefined,
        LastErrorCode: output.LastErrorCode !== undefined && output.LastErrorCode !== null ? output.LastErrorCode : undefined,
        LastErrorMessage: output.LastErrorMessage !== undefined && output.LastErrorMessage !== null ? output.LastErrorMessage : undefined,
        LastUpdateStatus: output.LastUpdateStatus !== undefined && output.LastUpdateStatus !== null ? output.LastUpdateStatus : undefined,
        LastUpdateTime: output.LastUpdateTime !== undefined && output.LastUpdateTime !== null
            ? new Date(Math.round(output.LastUpdateTime * 1000))
            : undefined,
        SourceId: output.SourceId !== undefined && output.SourceId !== null ? output.SourceId : undefined,
        SourceType: output.SourceType !== undefined && output.SourceType !== null ? output.SourceType : undefined,
    };
};
var deserializeAws_json1_1AggregatedSourceStatusList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AggregatedSourceStatus(entry, context);
    });
};
var deserializeAws_json1_1AggregateEvaluationResult = function (output, context) {
    return {
        AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
        Annotation: output.Annotation !== undefined && output.Annotation !== null ? output.Annotation : undefined,
        AwsRegion: output.AwsRegion !== undefined && output.AwsRegion !== null ? output.AwsRegion : undefined,
        ComplianceType: output.ComplianceType !== undefined && output.ComplianceType !== null ? output.ComplianceType : undefined,
        ConfigRuleInvokedTime: output.ConfigRuleInvokedTime !== undefined && output.ConfigRuleInvokedTime !== null
            ? new Date(Math.round(output.ConfigRuleInvokedTime * 1000))
            : undefined,
        EvaluationResultIdentifier: output.EvaluationResultIdentifier !== undefined && output.EvaluationResultIdentifier !== null
            ? deserializeAws_json1_1EvaluationResultIdentifier(output.EvaluationResultIdentifier, context)
            : undefined,
        ResultRecordedTime: output.ResultRecordedTime !== undefined && output.ResultRecordedTime !== null
            ? new Date(Math.round(output.ResultRecordedTime * 1000))
            : undefined,
    };
};
var deserializeAws_json1_1AggregateEvaluationResultList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AggregateEvaluationResult(entry, context);
    });
};
var deserializeAws_json1_1AggregateResourceIdentifier = function (output, context) {
    return {
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
        ResourceName: output.ResourceName !== undefined && output.ResourceName !== null ? output.ResourceName : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
        SourceAccountId: output.SourceAccountId !== undefined && output.SourceAccountId !== null ? output.SourceAccountId : undefined,
        SourceRegion: output.SourceRegion !== undefined && output.SourceRegion !== null ? output.SourceRegion : undefined,
    };
};
var deserializeAws_json1_1AggregationAuthorization = function (output, context) {
    return {
        AggregationAuthorizationArn: output.AggregationAuthorizationArn !== undefined && output.AggregationAuthorizationArn !== null
            ? output.AggregationAuthorizationArn
            : undefined,
        AuthorizedAccountId: output.AuthorizedAccountId !== undefined && output.AuthorizedAccountId !== null
            ? output.AuthorizedAccountId
            : undefined,
        AuthorizedAwsRegion: output.AuthorizedAwsRegion !== undefined && output.AuthorizedAwsRegion !== null
            ? output.AuthorizedAwsRegion
            : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
    };
};
var deserializeAws_json1_1AggregationAuthorizationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AggregationAuthorization(entry, context);
    });
};
var deserializeAws_json1_1AggregatorRegionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1BaseConfigurationItem = function (output, context) {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        availabilityZone: output.availabilityZone !== undefined && output.availabilityZone !== null ? output.availabilityZone : undefined,
        awsRegion: output.awsRegion !== undefined && output.awsRegion !== null ? output.awsRegion : undefined,
        configuration: output.configuration !== undefined && output.configuration !== null ? output.configuration : undefined,
        configurationItemCaptureTime: output.configurationItemCaptureTime !== undefined && output.configurationItemCaptureTime !== null
            ? new Date(Math.round(output.configurationItemCaptureTime * 1000))
            : undefined,
        configurationItemStatus: output.configurationItemStatus !== undefined && output.configurationItemStatus !== null
            ? output.configurationItemStatus
            : undefined,
        configurationStateId: output.configurationStateId !== undefined && output.configurationStateId !== null
            ? output.configurationStateId
            : undefined,
        resourceCreationTime: output.resourceCreationTime !== undefined && output.resourceCreationTime !== null
            ? new Date(Math.round(output.resourceCreationTime * 1000))
            : undefined,
        resourceId: output.resourceId !== undefined && output.resourceId !== null ? output.resourceId : undefined,
        resourceName: output.resourceName !== undefined && output.resourceName !== null ? output.resourceName : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
        supplementaryConfiguration: output.supplementaryConfiguration !== undefined && output.supplementaryConfiguration !== null
            ? deserializeAws_json1_1SupplementaryConfiguration(output.supplementaryConfiguration, context)
            : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
var deserializeAws_json1_1BaseConfigurationItems = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BaseConfigurationItem(entry, context);
    });
};
var deserializeAws_json1_1BatchGetAggregateResourceConfigResponse = function (output, context) {
    return {
        BaseConfigurationItems: output.BaseConfigurationItems !== undefined && output.BaseConfigurationItems !== null
            ? deserializeAws_json1_1BaseConfigurationItems(output.BaseConfigurationItems, context)
            : undefined,
        UnprocessedResourceIdentifiers: output.UnprocessedResourceIdentifiers !== undefined && output.UnprocessedResourceIdentifiers !== null
            ? deserializeAws_json1_1UnprocessedResourceIdentifierList(output.UnprocessedResourceIdentifiers, context)
            : undefined,
    };
};
var deserializeAws_json1_1BatchGetResourceConfigResponse = function (output, context) {
    return {
        baseConfigurationItems: output.baseConfigurationItems !== undefined && output.baseConfigurationItems !== null
            ? deserializeAws_json1_1BaseConfigurationItems(output.baseConfigurationItems, context)
            : undefined,
        unprocessedResourceKeys: output.unprocessedResourceKeys !== undefined && output.unprocessedResourceKeys !== null
            ? deserializeAws_json1_1ResourceKeys(output.unprocessedResourceKeys, context)
            : undefined,
    };
};
var deserializeAws_json1_1Compliance = function (output, context) {
    return {
        ComplianceContributorCount: output.ComplianceContributorCount !== undefined && output.ComplianceContributorCount !== null
            ? deserializeAws_json1_1ComplianceContributorCount(output.ComplianceContributorCount, context)
            : undefined,
        ComplianceType: output.ComplianceType !== undefined && output.ComplianceType !== null ? output.ComplianceType : undefined,
    };
};
var deserializeAws_json1_1ComplianceByConfigRule = function (output, context) {
    return {
        Compliance: output.Compliance !== undefined && output.Compliance !== null
            ? deserializeAws_json1_1Compliance(output.Compliance, context)
            : undefined,
        ConfigRuleName: output.ConfigRuleName !== undefined && output.ConfigRuleName !== null ? output.ConfigRuleName : undefined,
    };
};
var deserializeAws_json1_1ComplianceByConfigRules = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ComplianceByConfigRule(entry, context);
    });
};
var deserializeAws_json1_1ComplianceByResource = function (output, context) {
    return {
        Compliance: output.Compliance !== undefined && output.Compliance !== null
            ? deserializeAws_json1_1Compliance(output.Compliance, context)
            : undefined,
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    };
};
var deserializeAws_json1_1ComplianceByResources = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ComplianceByResource(entry, context);
    });
};
var deserializeAws_json1_1ComplianceContributorCount = function (output, context) {
    return {
        CapExceeded: output.CapExceeded !== undefined && output.CapExceeded !== null ? output.CapExceeded : undefined,
        CappedCount: output.CappedCount !== undefined && output.CappedCount !== null ? output.CappedCount : undefined,
    };
};
var deserializeAws_json1_1ComplianceResourceTypes = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1ComplianceSummariesByResourceType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ComplianceSummaryByResourceType(entry, context);
    });
};
var deserializeAws_json1_1ComplianceSummary = function (output, context) {
    return {
        ComplianceSummaryTimestamp: output.ComplianceSummaryTimestamp !== undefined && output.ComplianceSummaryTimestamp !== null
            ? new Date(Math.round(output.ComplianceSummaryTimestamp * 1000))
            : undefined,
        CompliantResourceCount: output.CompliantResourceCount !== undefined && output.CompliantResourceCount !== null
            ? deserializeAws_json1_1ComplianceContributorCount(output.CompliantResourceCount, context)
            : undefined,
        NonCompliantResourceCount: output.NonCompliantResourceCount !== undefined && output.NonCompliantResourceCount !== null
            ? deserializeAws_json1_1ComplianceContributorCount(output.NonCompliantResourceCount, context)
            : undefined,
    };
};
var deserializeAws_json1_1ComplianceSummaryByResourceType = function (output, context) {
    return {
        ComplianceSummary: output.ComplianceSummary !== undefined && output.ComplianceSummary !== null
            ? deserializeAws_json1_1ComplianceSummary(output.ComplianceSummary, context)
            : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    };
};
var deserializeAws_json1_1ConfigExportDeliveryInfo = function (output, context) {
    return {
        lastAttemptTime: output.lastAttemptTime !== undefined && output.lastAttemptTime !== null
            ? new Date(Math.round(output.lastAttemptTime * 1000))
            : undefined,
        lastErrorCode: output.lastErrorCode !== undefined && output.lastErrorCode !== null ? output.lastErrorCode : undefined,
        lastErrorMessage: output.lastErrorMessage !== undefined && output.lastErrorMessage !== null ? output.lastErrorMessage : undefined,
        lastStatus: output.lastStatus !== undefined && output.lastStatus !== null ? output.lastStatus : undefined,
        lastSuccessfulTime: output.lastSuccessfulTime !== undefined && output.lastSuccessfulTime !== null
            ? new Date(Math.round(output.lastSuccessfulTime * 1000))
            : undefined,
        nextDeliveryTime: output.nextDeliveryTime !== undefined && output.nextDeliveryTime !== null
            ? new Date(Math.round(output.nextDeliveryTime * 1000))
            : undefined,
    };
};
var deserializeAws_json1_1ConfigRule = function (output, context) {
    return {
        ConfigRuleArn: output.ConfigRuleArn !== undefined && output.ConfigRuleArn !== null ? output.ConfigRuleArn : undefined,
        ConfigRuleId: output.ConfigRuleId !== undefined && output.ConfigRuleId !== null ? output.ConfigRuleId : undefined,
        ConfigRuleName: output.ConfigRuleName !== undefined && output.ConfigRuleName !== null ? output.ConfigRuleName : undefined,
        ConfigRuleState: output.ConfigRuleState !== undefined && output.ConfigRuleState !== null ? output.ConfigRuleState : undefined,
        CreatedBy: output.CreatedBy !== undefined && output.CreatedBy !== null ? output.CreatedBy : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        InputParameters: output.InputParameters !== undefined && output.InputParameters !== null ? output.InputParameters : undefined,
        MaximumExecutionFrequency: output.MaximumExecutionFrequency !== undefined && output.MaximumExecutionFrequency !== null
            ? output.MaximumExecutionFrequency
            : undefined,
        Scope: output.Scope !== undefined && output.Scope !== null
            ? deserializeAws_json1_1Scope(output.Scope, context)
            : undefined,
        Source: output.Source !== undefined && output.Source !== null
            ? deserializeAws_json1_1Source(output.Source, context)
            : undefined,
    };
};
var deserializeAws_json1_1ConfigRuleEvaluationStatus = function (output, context) {
    return {
        ConfigRuleArn: output.ConfigRuleArn !== undefined && output.ConfigRuleArn !== null ? output.ConfigRuleArn : undefined,
        ConfigRuleId: output.ConfigRuleId !== undefined && output.ConfigRuleId !== null ? output.ConfigRuleId : undefined,
        ConfigRuleName: output.ConfigRuleName !== undefined && output.ConfigRuleName !== null ? output.ConfigRuleName : undefined,
        FirstActivatedTime: output.FirstActivatedTime !== undefined && output.FirstActivatedTime !== null
            ? new Date(Math.round(output.FirstActivatedTime * 1000))
            : undefined,
        FirstEvaluationStarted: output.FirstEvaluationStarted !== undefined && output.FirstEvaluationStarted !== null
            ? output.FirstEvaluationStarted
            : undefined,
        LastDeactivatedTime: output.LastDeactivatedTime !== undefined && output.LastDeactivatedTime !== null
            ? new Date(Math.round(output.LastDeactivatedTime * 1000))
            : undefined,
        LastErrorCode: output.LastErrorCode !== undefined && output.LastErrorCode !== null ? output.LastErrorCode : undefined,
        LastErrorMessage: output.LastErrorMessage !== undefined && output.LastErrorMessage !== null ? output.LastErrorMessage : undefined,
        LastFailedEvaluationTime: output.LastFailedEvaluationTime !== undefined && output.LastFailedEvaluationTime !== null
            ? new Date(Math.round(output.LastFailedEvaluationTime * 1000))
            : undefined,
        LastFailedInvocationTime: output.LastFailedInvocationTime !== undefined && output.LastFailedInvocationTime !== null
            ? new Date(Math.round(output.LastFailedInvocationTime * 1000))
            : undefined,
        LastSuccessfulEvaluationTime: output.LastSuccessfulEvaluationTime !== undefined && output.LastSuccessfulEvaluationTime !== null
            ? new Date(Math.round(output.LastSuccessfulEvaluationTime * 1000))
            : undefined,
        LastSuccessfulInvocationTime: output.LastSuccessfulInvocationTime !== undefined && output.LastSuccessfulInvocationTime !== null
            ? new Date(Math.round(output.LastSuccessfulInvocationTime * 1000))
            : undefined,
    };
};
var deserializeAws_json1_1ConfigRuleEvaluationStatusList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConfigRuleEvaluationStatus(entry, context);
    });
};
var deserializeAws_json1_1ConfigRules = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConfigRule(entry, context);
    });
};
var deserializeAws_json1_1ConfigSnapshotDeliveryProperties = function (output, context) {
    return {
        deliveryFrequency: output.deliveryFrequency !== undefined && output.deliveryFrequency !== null
            ? output.deliveryFrequency
            : undefined,
    };
};
var deserializeAws_json1_1ConfigStreamDeliveryInfo = function (output, context) {
    return {
        lastErrorCode: output.lastErrorCode !== undefined && output.lastErrorCode !== null ? output.lastErrorCode : undefined,
        lastErrorMessage: output.lastErrorMessage !== undefined && output.lastErrorMessage !== null ? output.lastErrorMessage : undefined,
        lastStatus: output.lastStatus !== undefined && output.lastStatus !== null ? output.lastStatus : undefined,
        lastStatusChangeTime: output.lastStatusChangeTime !== undefined && output.lastStatusChangeTime !== null
            ? new Date(Math.round(output.lastStatusChangeTime * 1000))
            : undefined,
    };
};
var deserializeAws_json1_1ConfigurationAggregator = function (output, context) {
    return {
        AccountAggregationSources: output.AccountAggregationSources !== undefined && output.AccountAggregationSources !== null
            ? deserializeAws_json1_1AccountAggregationSourceList(output.AccountAggregationSources, context)
            : undefined,
        ConfigurationAggregatorArn: output.ConfigurationAggregatorArn !== undefined && output.ConfigurationAggregatorArn !== null
            ? output.ConfigurationAggregatorArn
            : undefined,
        ConfigurationAggregatorName: output.ConfigurationAggregatorName !== undefined && output.ConfigurationAggregatorName !== null
            ? output.ConfigurationAggregatorName
            : undefined,
        CreatedBy: output.CreatedBy !== undefined && output.CreatedBy !== null ? output.CreatedBy : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        LastUpdatedTime: output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
            ? new Date(Math.round(output.LastUpdatedTime * 1000))
            : undefined,
        OrganizationAggregationSource: output.OrganizationAggregationSource !== undefined && output.OrganizationAggregationSource !== null
            ? deserializeAws_json1_1OrganizationAggregationSource(output.OrganizationAggregationSource, context)
            : undefined,
    };
};
var deserializeAws_json1_1ConfigurationAggregatorList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConfigurationAggregator(entry, context);
    });
};
var deserializeAws_json1_1ConfigurationItem = function (output, context) {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        availabilityZone: output.availabilityZone !== undefined && output.availabilityZone !== null ? output.availabilityZone : undefined,
        awsRegion: output.awsRegion !== undefined && output.awsRegion !== null ? output.awsRegion : undefined,
        configuration: output.configuration !== undefined && output.configuration !== null ? output.configuration : undefined,
        configurationItemCaptureTime: output.configurationItemCaptureTime !== undefined && output.configurationItemCaptureTime !== null
            ? new Date(Math.round(output.configurationItemCaptureTime * 1000))
            : undefined,
        configurationItemMD5Hash: output.configurationItemMD5Hash !== undefined && output.configurationItemMD5Hash !== null
            ? output.configurationItemMD5Hash
            : undefined,
        configurationItemStatus: output.configurationItemStatus !== undefined && output.configurationItemStatus !== null
            ? output.configurationItemStatus
            : undefined,
        configurationStateId: output.configurationStateId !== undefined && output.configurationStateId !== null
            ? output.configurationStateId
            : undefined,
        relatedEvents: output.relatedEvents !== undefined && output.relatedEvents !== null
            ? deserializeAws_json1_1RelatedEventList(output.relatedEvents, context)
            : undefined,
        relationships: output.relationships !== undefined && output.relationships !== null
            ? deserializeAws_json1_1RelationshipList(output.relationships, context)
            : undefined,
        resourceCreationTime: output.resourceCreationTime !== undefined && output.resourceCreationTime !== null
            ? new Date(Math.round(output.resourceCreationTime * 1000))
            : undefined,
        resourceId: output.resourceId !== undefined && output.resourceId !== null ? output.resourceId : undefined,
        resourceName: output.resourceName !== undefined && output.resourceName !== null ? output.resourceName : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
        supplementaryConfiguration: output.supplementaryConfiguration !== undefined && output.supplementaryConfiguration !== null
            ? deserializeAws_json1_1SupplementaryConfiguration(output.supplementaryConfiguration, context)
            : undefined,
        tags: output.tags !== undefined && output.tags !== null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
var deserializeAws_json1_1ConfigurationItemList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConfigurationItem(entry, context);
    });
};
var deserializeAws_json1_1ConfigurationRecorder = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        recordingGroup: output.recordingGroup !== undefined && output.recordingGroup !== null
            ? deserializeAws_json1_1RecordingGroup(output.recordingGroup, context)
            : undefined,
        roleARN: output.roleARN !== undefined && output.roleARN !== null ? output.roleARN : undefined,
    };
};
var deserializeAws_json1_1ConfigurationRecorderList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConfigurationRecorder(entry, context);
    });
};
var deserializeAws_json1_1ConfigurationRecorderStatus = function (output, context) {
    return {
        lastErrorCode: output.lastErrorCode !== undefined && output.lastErrorCode !== null ? output.lastErrorCode : undefined,
        lastErrorMessage: output.lastErrorMessage !== undefined && output.lastErrorMessage !== null ? output.lastErrorMessage : undefined,
        lastStartTime: output.lastStartTime !== undefined && output.lastStartTime !== null
            ? new Date(Math.round(output.lastStartTime * 1000))
            : undefined,
        lastStatus: output.lastStatus !== undefined && output.lastStatus !== null ? output.lastStatus : undefined,
        lastStatusChangeTime: output.lastStatusChangeTime !== undefined && output.lastStatusChangeTime !== null
            ? new Date(Math.round(output.lastStatusChangeTime * 1000))
            : undefined,
        lastStopTime: output.lastStopTime !== undefined && output.lastStopTime !== null
            ? new Date(Math.round(output.lastStopTime * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        recording: output.recording !== undefined && output.recording !== null ? output.recording : undefined,
    };
};
var deserializeAws_json1_1ConfigurationRecorderStatusList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConfigurationRecorderStatus(entry, context);
    });
};
var deserializeAws_json1_1ConformancePackComplianceSummary = function (output, context) {
    return {
        ConformancePackComplianceStatus: output.ConformancePackComplianceStatus !== undefined && output.ConformancePackComplianceStatus !== null
            ? output.ConformancePackComplianceStatus
            : undefined,
        ConformancePackName: output.ConformancePackName !== undefined && output.ConformancePackName !== null
            ? output.ConformancePackName
            : undefined,
    };
};
var deserializeAws_json1_1ConformancePackComplianceSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConformancePackComplianceSummary(entry, context);
    });
};
var deserializeAws_json1_1ConformancePackDetail = function (output, context) {
    return {
        ConformancePackArn: output.ConformancePackArn !== undefined && output.ConformancePackArn !== null
            ? output.ConformancePackArn
            : undefined,
        ConformancePackId: output.ConformancePackId !== undefined && output.ConformancePackId !== null
            ? output.ConformancePackId
            : undefined,
        ConformancePackInputParameters: output.ConformancePackInputParameters !== undefined && output.ConformancePackInputParameters !== null
            ? deserializeAws_json1_1ConformancePackInputParameters(output.ConformancePackInputParameters, context)
            : undefined,
        ConformancePackName: output.ConformancePackName !== undefined && output.ConformancePackName !== null
            ? output.ConformancePackName
            : undefined,
        CreatedBy: output.CreatedBy !== undefined && output.CreatedBy !== null ? output.CreatedBy : undefined,
        DeliveryS3Bucket: output.DeliveryS3Bucket !== undefined && output.DeliveryS3Bucket !== null ? output.DeliveryS3Bucket : undefined,
        DeliveryS3KeyPrefix: output.DeliveryS3KeyPrefix !== undefined && output.DeliveryS3KeyPrefix !== null
            ? output.DeliveryS3KeyPrefix
            : undefined,
        LastUpdateRequestedTime: output.LastUpdateRequestedTime !== undefined && output.LastUpdateRequestedTime !== null
            ? new Date(Math.round(output.LastUpdateRequestedTime * 1000))
            : undefined,
    };
};
var deserializeAws_json1_1ConformancePackDetailList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConformancePackDetail(entry, context);
    });
};
var deserializeAws_json1_1ConformancePackEvaluationResult = function (output, context) {
    return {
        Annotation: output.Annotation !== undefined && output.Annotation !== null ? output.Annotation : undefined,
        ComplianceType: output.ComplianceType !== undefined && output.ComplianceType !== null ? output.ComplianceType : undefined,
        ConfigRuleInvokedTime: output.ConfigRuleInvokedTime !== undefined && output.ConfigRuleInvokedTime !== null
            ? new Date(Math.round(output.ConfigRuleInvokedTime * 1000))
            : undefined,
        EvaluationResultIdentifier: output.EvaluationResultIdentifier !== undefined && output.EvaluationResultIdentifier !== null
            ? deserializeAws_json1_1EvaluationResultIdentifier(output.EvaluationResultIdentifier, context)
            : undefined,
        ResultRecordedTime: output.ResultRecordedTime !== undefined && output.ResultRecordedTime !== null
            ? new Date(Math.round(output.ResultRecordedTime * 1000))
            : undefined,
    };
};
var deserializeAws_json1_1ConformancePackInputParameter = function (output, context) {
    return {
        ParameterName: output.ParameterName !== undefined && output.ParameterName !== null ? output.ParameterName : undefined,
        ParameterValue: output.ParameterValue !== undefined && output.ParameterValue !== null ? output.ParameterValue : undefined,
    };
};
var deserializeAws_json1_1ConformancePackInputParameters = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConformancePackInputParameter(entry, context);
    });
};
var deserializeAws_json1_1ConformancePackRuleCompliance = function (output, context) {
    return {
        ComplianceType: output.ComplianceType !== undefined && output.ComplianceType !== null ? output.ComplianceType : undefined,
        ConfigRuleName: output.ConfigRuleName !== undefined && output.ConfigRuleName !== null ? output.ConfigRuleName : undefined,
        Controls: output.Controls !== undefined && output.Controls !== null
            ? deserializeAws_json1_1ControlsList(output.Controls, context)
            : undefined,
    };
};
var deserializeAws_json1_1ConformancePackRuleComplianceList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConformancePackRuleCompliance(entry, context);
    });
};
var deserializeAws_json1_1ConformancePackRuleEvaluationResultsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConformancePackEvaluationResult(entry, context);
    });
};
var deserializeAws_json1_1ConformancePackStatusDetail = function (output, context) {
    return {
        ConformancePackArn: output.ConformancePackArn !== undefined && output.ConformancePackArn !== null
            ? output.ConformancePackArn
            : undefined,
        ConformancePackId: output.ConformancePackId !== undefined && output.ConformancePackId !== null
            ? output.ConformancePackId
            : undefined,
        ConformancePackName: output.ConformancePackName !== undefined && output.ConformancePackName !== null
            ? output.ConformancePackName
            : undefined,
        ConformancePackState: output.ConformancePackState !== undefined && output.ConformancePackState !== null
            ? output.ConformancePackState
            : undefined,
        ConformancePackStatusReason: output.ConformancePackStatusReason !== undefined && output.ConformancePackStatusReason !== null
            ? output.ConformancePackStatusReason
            : undefined,
        LastUpdateCompletedTime: output.LastUpdateCompletedTime !== undefined && output.LastUpdateCompletedTime !== null
            ? new Date(Math.round(output.LastUpdateCompletedTime * 1000))
            : undefined,
        LastUpdateRequestedTime: output.LastUpdateRequestedTime !== undefined && output.LastUpdateRequestedTime !== null
            ? new Date(Math.round(output.LastUpdateRequestedTime * 1000))
            : undefined,
        StackArn: output.StackArn !== undefined && output.StackArn !== null ? output.StackArn : undefined,
    };
};
var deserializeAws_json1_1ConformancePackStatusDetailsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConformancePackStatusDetail(entry, context);
    });
};
var deserializeAws_json1_1ConformancePackTemplateValidationException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ControlsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1DeleteEvaluationResultsResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeleteRemediationConfigurationResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeleteRemediationExceptionsResponse = function (output, context) {
    return {
        FailedBatches: output.FailedBatches !== undefined && output.FailedBatches !== null
            ? deserializeAws_json1_1FailedDeleteRemediationExceptionsBatches(output.FailedBatches, context)
            : undefined,
    };
};
var deserializeAws_json1_1DeleteStoredQueryResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeliverConfigSnapshotResponse = function (output, context) {
    return {
        configSnapshotId: output.configSnapshotId !== undefined && output.configSnapshotId !== null ? output.configSnapshotId : undefined,
    };
};
var deserializeAws_json1_1DeliveryChannel = function (output, context) {
    return {
        configSnapshotDeliveryProperties: output.configSnapshotDeliveryProperties !== undefined && output.configSnapshotDeliveryProperties !== null
            ? deserializeAws_json1_1ConfigSnapshotDeliveryProperties(output.configSnapshotDeliveryProperties, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        s3BucketName: output.s3BucketName !== undefined && output.s3BucketName !== null ? output.s3BucketName : undefined,
        s3KeyPrefix: output.s3KeyPrefix !== undefined && output.s3KeyPrefix !== null ? output.s3KeyPrefix : undefined,
        s3KmsKeyArn: output.s3KmsKeyArn !== undefined && output.s3KmsKeyArn !== null ? output.s3KmsKeyArn : undefined,
        snsTopicARN: output.snsTopicARN !== undefined && output.snsTopicARN !== null ? output.snsTopicARN : undefined,
    };
};
var deserializeAws_json1_1DeliveryChannelList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DeliveryChannel(entry, context);
    });
};
var deserializeAws_json1_1DeliveryChannelStatus = function (output, context) {
    return {
        configHistoryDeliveryInfo: output.configHistoryDeliveryInfo !== undefined && output.configHistoryDeliveryInfo !== null
            ? deserializeAws_json1_1ConfigExportDeliveryInfo(output.configHistoryDeliveryInfo, context)
            : undefined,
        configSnapshotDeliveryInfo: output.configSnapshotDeliveryInfo !== undefined && output.configSnapshotDeliveryInfo !== null
            ? deserializeAws_json1_1ConfigExportDeliveryInfo(output.configSnapshotDeliveryInfo, context)
            : undefined,
        configStreamDeliveryInfo: output.configStreamDeliveryInfo !== undefined && output.configStreamDeliveryInfo !== null
            ? deserializeAws_json1_1ConfigStreamDeliveryInfo(output.configStreamDeliveryInfo, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
var deserializeAws_json1_1DeliveryChannelStatusList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DeliveryChannelStatus(entry, context);
    });
};
var deserializeAws_json1_1DescribeAggregateComplianceByConfigRulesResponse = function (output, context) {
    return {
        AggregateComplianceByConfigRules: output.AggregateComplianceByConfigRules !== undefined && output.AggregateComplianceByConfigRules !== null
            ? deserializeAws_json1_1AggregateComplianceByConfigRuleList(output.AggregateComplianceByConfigRules, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeAggregateComplianceByConformancePacksResponse = function (output, context) {
    return {
        AggregateComplianceByConformancePacks: output.AggregateComplianceByConformancePacks !== undefined &&
            output.AggregateComplianceByConformancePacks !== null
            ? deserializeAws_json1_1AggregateComplianceByConformancePackList(output.AggregateComplianceByConformancePacks, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeAggregationAuthorizationsResponse = function (output, context) {
    return {
        AggregationAuthorizations: output.AggregationAuthorizations !== undefined && output.AggregationAuthorizations !== null
            ? deserializeAws_json1_1AggregationAuthorizationList(output.AggregationAuthorizations, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeComplianceByConfigRuleResponse = function (output, context) {
    return {
        ComplianceByConfigRules: output.ComplianceByConfigRules !== undefined && output.ComplianceByConfigRules !== null
            ? deserializeAws_json1_1ComplianceByConfigRules(output.ComplianceByConfigRules, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeComplianceByResourceResponse = function (output, context) {
    return {
        ComplianceByResources: output.ComplianceByResources !== undefined && output.ComplianceByResources !== null
            ? deserializeAws_json1_1ComplianceByResources(output.ComplianceByResources, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeConfigRuleEvaluationStatusResponse = function (output, context) {
    return {
        ConfigRulesEvaluationStatus: output.ConfigRulesEvaluationStatus !== undefined && output.ConfigRulesEvaluationStatus !== null
            ? deserializeAws_json1_1ConfigRuleEvaluationStatusList(output.ConfigRulesEvaluationStatus, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeConfigRulesResponse = function (output, context) {
    return {
        ConfigRules: output.ConfigRules !== undefined && output.ConfigRules !== null
            ? deserializeAws_json1_1ConfigRules(output.ConfigRules, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusResponse = function (output, context) {
    return {
        AggregatedSourceStatusList: output.AggregatedSourceStatusList !== undefined && output.AggregatedSourceStatusList !== null
            ? deserializeAws_json1_1AggregatedSourceStatusList(output.AggregatedSourceStatusList, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeConfigurationAggregatorsResponse = function (output, context) {
    return {
        ConfigurationAggregators: output.ConfigurationAggregators !== undefined && output.ConfigurationAggregators !== null
            ? deserializeAws_json1_1ConfigurationAggregatorList(output.ConfigurationAggregators, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeConfigurationRecordersResponse = function (output, context) {
    return {
        ConfigurationRecorders: output.ConfigurationRecorders !== undefined && output.ConfigurationRecorders !== null
            ? deserializeAws_json1_1ConfigurationRecorderList(output.ConfigurationRecorders, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeConfigurationRecorderStatusResponse = function (output, context) {
    return {
        ConfigurationRecordersStatus: output.ConfigurationRecordersStatus !== undefined && output.ConfigurationRecordersStatus !== null
            ? deserializeAws_json1_1ConfigurationRecorderStatusList(output.ConfigurationRecordersStatus, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeConformancePackComplianceResponse = function (output, context) {
    return {
        ConformancePackName: output.ConformancePackName !== undefined && output.ConformancePackName !== null
            ? output.ConformancePackName
            : undefined,
        ConformancePackRuleComplianceList: output.ConformancePackRuleComplianceList !== undefined && output.ConformancePackRuleComplianceList !== null
            ? deserializeAws_json1_1ConformancePackRuleComplianceList(output.ConformancePackRuleComplianceList, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeConformancePacksResponse = function (output, context) {
    return {
        ConformancePackDetails: output.ConformancePackDetails !== undefined && output.ConformancePackDetails !== null
            ? deserializeAws_json1_1ConformancePackDetailList(output.ConformancePackDetails, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeConformancePackStatusResponse = function (output, context) {
    return {
        ConformancePackStatusDetails: output.ConformancePackStatusDetails !== undefined && output.ConformancePackStatusDetails !== null
            ? deserializeAws_json1_1ConformancePackStatusDetailsList(output.ConformancePackStatusDetails, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeDeliveryChannelsResponse = function (output, context) {
    return {
        DeliveryChannels: output.DeliveryChannels !== undefined && output.DeliveryChannels !== null
            ? deserializeAws_json1_1DeliveryChannelList(output.DeliveryChannels, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeDeliveryChannelStatusResponse = function (output, context) {
    return {
        DeliveryChannelsStatus: output.DeliveryChannelsStatus !== undefined && output.DeliveryChannelsStatus !== null
            ? deserializeAws_json1_1DeliveryChannelStatusList(output.DeliveryChannelsStatus, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeOrganizationConfigRulesResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        OrganizationConfigRules: output.OrganizationConfigRules !== undefined && output.OrganizationConfigRules !== null
            ? deserializeAws_json1_1OrganizationConfigRules(output.OrganizationConfigRules, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeOrganizationConfigRuleStatusesResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        OrganizationConfigRuleStatuses: output.OrganizationConfigRuleStatuses !== undefined && output.OrganizationConfigRuleStatuses !== null
            ? deserializeAws_json1_1OrganizationConfigRuleStatuses(output.OrganizationConfigRuleStatuses, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeOrganizationConformancePacksResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        OrganizationConformancePacks: output.OrganizationConformancePacks !== undefined && output.OrganizationConformancePacks !== null
            ? deserializeAws_json1_1OrganizationConformancePacks(output.OrganizationConformancePacks, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeOrganizationConformancePackStatusesResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        OrganizationConformancePackStatuses: output.OrganizationConformancePackStatuses !== undefined && output.OrganizationConformancePackStatuses !== null
            ? deserializeAws_json1_1OrganizationConformancePackStatuses(output.OrganizationConformancePackStatuses, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribePendingAggregationRequestsResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        PendingAggregationRequests: output.PendingAggregationRequests !== undefined && output.PendingAggregationRequests !== null
            ? deserializeAws_json1_1PendingAggregationRequestList(output.PendingAggregationRequests, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeRemediationConfigurationsResponse = function (output, context) {
    return {
        RemediationConfigurations: output.RemediationConfigurations !== undefined && output.RemediationConfigurations !== null
            ? deserializeAws_json1_1RemediationConfigurations(output.RemediationConfigurations, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeRemediationExceptionsResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        RemediationExceptions: output.RemediationExceptions !== undefined && output.RemediationExceptions !== null
            ? deserializeAws_json1_1RemediationExceptions(output.RemediationExceptions, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeRemediationExecutionStatusResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        RemediationExecutionStatuses: output.RemediationExecutionStatuses !== undefined && output.RemediationExecutionStatuses !== null
            ? deserializeAws_json1_1RemediationExecutionStatuses(output.RemediationExecutionStatuses, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeRetentionConfigurationsResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        RetentionConfigurations: output.RetentionConfigurations !== undefined && output.RetentionConfigurations !== null
            ? deserializeAws_json1_1RetentionConfigurationList(output.RetentionConfigurations, context)
            : undefined,
    };
};
var deserializeAws_json1_1DiscoveredResourceIdentifierList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AggregateResourceIdentifier(entry, context);
    });
};
var deserializeAws_json1_1Evaluation = function (output, context) {
    return {
        Annotation: output.Annotation !== undefined && output.Annotation !== null ? output.Annotation : undefined,
        ComplianceResourceId: output.ComplianceResourceId !== undefined && output.ComplianceResourceId !== null
            ? output.ComplianceResourceId
            : undefined,
        ComplianceResourceType: output.ComplianceResourceType !== undefined && output.ComplianceResourceType !== null
            ? output.ComplianceResourceType
            : undefined,
        ComplianceType: output.ComplianceType !== undefined && output.ComplianceType !== null ? output.ComplianceType : undefined,
        OrderingTimestamp: output.OrderingTimestamp !== undefined && output.OrderingTimestamp !== null
            ? new Date(Math.round(output.OrderingTimestamp * 1000))
            : undefined,
    };
};
var deserializeAws_json1_1EvaluationResult = function (output, context) {
    return {
        Annotation: output.Annotation !== undefined && output.Annotation !== null ? output.Annotation : undefined,
        ComplianceType: output.ComplianceType !== undefined && output.ComplianceType !== null ? output.ComplianceType : undefined,
        ConfigRuleInvokedTime: output.ConfigRuleInvokedTime !== undefined && output.ConfigRuleInvokedTime !== null
            ? new Date(Math.round(output.ConfigRuleInvokedTime * 1000))
            : undefined,
        EvaluationResultIdentifier: output.EvaluationResultIdentifier !== undefined && output.EvaluationResultIdentifier !== null
            ? deserializeAws_json1_1EvaluationResultIdentifier(output.EvaluationResultIdentifier, context)
            : undefined,
        ResultRecordedTime: output.ResultRecordedTime !== undefined && output.ResultRecordedTime !== null
            ? new Date(Math.round(output.ResultRecordedTime * 1000))
            : undefined,
        ResultToken: output.ResultToken !== undefined && output.ResultToken !== null ? output.ResultToken : undefined,
    };
};
var deserializeAws_json1_1EvaluationResultIdentifier = function (output, context) {
    return {
        EvaluationResultQualifier: output.EvaluationResultQualifier !== undefined && output.EvaluationResultQualifier !== null
            ? deserializeAws_json1_1EvaluationResultQualifier(output.EvaluationResultQualifier, context)
            : undefined,
        OrderingTimestamp: output.OrderingTimestamp !== undefined && output.OrderingTimestamp !== null
            ? new Date(Math.round(output.OrderingTimestamp * 1000))
            : undefined,
    };
};
var deserializeAws_json1_1EvaluationResultQualifier = function (output, context) {
    return {
        ConfigRuleName: output.ConfigRuleName !== undefined && output.ConfigRuleName !== null ? output.ConfigRuleName : undefined,
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    };
};
var deserializeAws_json1_1EvaluationResults = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EvaluationResult(entry, context);
    });
};
var deserializeAws_json1_1Evaluations = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Evaluation(entry, context);
    });
};
var deserializeAws_json1_1ExcludedAccounts = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1ExecutionControls = function (output, context) {
    return {
        SsmControls: output.SsmControls !== undefined && output.SsmControls !== null
            ? deserializeAws_json1_1SsmControls(output.SsmControls, context)
            : undefined,
    };
};
var deserializeAws_json1_1FailedDeleteRemediationExceptionsBatch = function (output, context) {
    return {
        FailedItems: output.FailedItems !== undefined && output.FailedItems !== null
            ? deserializeAws_json1_1RemediationExceptionResourceKeys(output.FailedItems, context)
            : undefined,
        FailureMessage: output.FailureMessage !== undefined && output.FailureMessage !== null ? output.FailureMessage : undefined,
    };
};
var deserializeAws_json1_1FailedDeleteRemediationExceptionsBatches = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FailedDeleteRemediationExceptionsBatch(entry, context);
    });
};
var deserializeAws_json1_1FailedRemediationBatch = function (output, context) {
    return {
        FailedItems: output.FailedItems !== undefined && output.FailedItems !== null
            ? deserializeAws_json1_1RemediationConfigurations(output.FailedItems, context)
            : undefined,
        FailureMessage: output.FailureMessage !== undefined && output.FailureMessage !== null ? output.FailureMessage : undefined,
    };
};
var deserializeAws_json1_1FailedRemediationBatches = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FailedRemediationBatch(entry, context);
    });
};
var deserializeAws_json1_1FailedRemediationExceptionBatch = function (output, context) {
    return {
        FailedItems: output.FailedItems !== undefined && output.FailedItems !== null
            ? deserializeAws_json1_1RemediationExceptions(output.FailedItems, context)
            : undefined,
        FailureMessage: output.FailureMessage !== undefined && output.FailureMessage !== null ? output.FailureMessage : undefined,
    };
};
var deserializeAws_json1_1FailedRemediationExceptionBatches = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FailedRemediationExceptionBatch(entry, context);
    });
};
var deserializeAws_json1_1FieldInfo = function (output, context) {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_json1_1FieldInfoList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FieldInfo(entry, context);
    });
};
var deserializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleResponse = function (output, context) {
    return {
        AggregateEvaluationResults: output.AggregateEvaluationResults !== undefined && output.AggregateEvaluationResults !== null
            ? deserializeAws_json1_1AggregateEvaluationResultList(output.AggregateEvaluationResults, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1GetAggregateConfigRuleComplianceSummaryResponse = function (output, context) {
    return {
        AggregateComplianceCounts: output.AggregateComplianceCounts !== undefined && output.AggregateComplianceCounts !== null
            ? deserializeAws_json1_1AggregateComplianceCountList(output.AggregateComplianceCounts, context)
            : undefined,
        GroupByKey: output.GroupByKey !== undefined && output.GroupByKey !== null ? output.GroupByKey : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1GetAggregateConformancePackComplianceSummaryResponse = function (output, context) {
    return {
        AggregateConformancePackComplianceSummaries: output.AggregateConformancePackComplianceSummaries !== undefined &&
            output.AggregateConformancePackComplianceSummaries !== null
            ? deserializeAws_json1_1AggregateConformancePackComplianceSummaryList(output.AggregateConformancePackComplianceSummaries, context)
            : undefined,
        GroupByKey: output.GroupByKey !== undefined && output.GroupByKey !== null ? output.GroupByKey : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1GetAggregateDiscoveredResourceCountsResponse = function (output, context) {
    return {
        GroupByKey: output.GroupByKey !== undefined && output.GroupByKey !== null ? output.GroupByKey : undefined,
        GroupedResourceCounts: output.GroupedResourceCounts !== undefined && output.GroupedResourceCounts !== null
            ? deserializeAws_json1_1GroupedResourceCountList(output.GroupedResourceCounts, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        TotalDiscoveredResources: output.TotalDiscoveredResources !== undefined && output.TotalDiscoveredResources !== null
            ? output.TotalDiscoveredResources
            : undefined,
    };
};
var deserializeAws_json1_1GetAggregateResourceConfigResponse = function (output, context) {
    return {
        ConfigurationItem: output.ConfigurationItem !== undefined && output.ConfigurationItem !== null
            ? deserializeAws_json1_1ConfigurationItem(output.ConfigurationItem, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetComplianceDetailsByConfigRuleResponse = function (output, context) {
    return {
        EvaluationResults: output.EvaluationResults !== undefined && output.EvaluationResults !== null
            ? deserializeAws_json1_1EvaluationResults(output.EvaluationResults, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1GetComplianceDetailsByResourceResponse = function (output, context) {
    return {
        EvaluationResults: output.EvaluationResults !== undefined && output.EvaluationResults !== null
            ? deserializeAws_json1_1EvaluationResults(output.EvaluationResults, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1GetComplianceSummaryByConfigRuleResponse = function (output, context) {
    return {
        ComplianceSummary: output.ComplianceSummary !== undefined && output.ComplianceSummary !== null
            ? deserializeAws_json1_1ComplianceSummary(output.ComplianceSummary, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetComplianceSummaryByResourceTypeResponse = function (output, context) {
    return {
        ComplianceSummariesByResourceType: output.ComplianceSummariesByResourceType !== undefined && output.ComplianceSummariesByResourceType !== null
            ? deserializeAws_json1_1ComplianceSummariesByResourceType(output.ComplianceSummariesByResourceType, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetConformancePackComplianceDetailsResponse = function (output, context) {
    return {
        ConformancePackName: output.ConformancePackName !== undefined && output.ConformancePackName !== null
            ? output.ConformancePackName
            : undefined,
        ConformancePackRuleEvaluationResults: output.ConformancePackRuleEvaluationResults !== undefined && output.ConformancePackRuleEvaluationResults !== null
            ? deserializeAws_json1_1ConformancePackRuleEvaluationResultsList(output.ConformancePackRuleEvaluationResults, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1GetConformancePackComplianceSummaryResponse = function (output, context) {
    return {
        ConformancePackComplianceSummaryList: output.ConformancePackComplianceSummaryList !== undefined && output.ConformancePackComplianceSummaryList !== null
            ? deserializeAws_json1_1ConformancePackComplianceSummaryList(output.ConformancePackComplianceSummaryList, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1GetDiscoveredResourceCountsResponse = function (output, context) {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        resourceCounts: output.resourceCounts !== undefined && output.resourceCounts !== null
            ? deserializeAws_json1_1ResourceCounts(output.resourceCounts, context)
            : undefined,
        totalDiscoveredResources: output.totalDiscoveredResources !== undefined && output.totalDiscoveredResources !== null
            ? output.totalDiscoveredResources
            : undefined,
    };
};
var deserializeAws_json1_1GetOrganizationConfigRuleDetailedStatusResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        OrganizationConfigRuleDetailedStatus: output.OrganizationConfigRuleDetailedStatus !== undefined && output.OrganizationConfigRuleDetailedStatus !== null
            ? deserializeAws_json1_1OrganizationConfigRuleDetailedStatus(output.OrganizationConfigRuleDetailedStatus, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetOrganizationConformancePackDetailedStatusResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        OrganizationConformancePackDetailedStatuses: output.OrganizationConformancePackDetailedStatuses !== undefined &&
            output.OrganizationConformancePackDetailedStatuses !== null
            ? deserializeAws_json1_1OrganizationConformancePackDetailedStatuses(output.OrganizationConformancePackDetailedStatuses, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetResourceConfigHistoryResponse = function (output, context) {
    return {
        configurationItems: output.configurationItems !== undefined && output.configurationItems !== null
            ? deserializeAws_json1_1ConfigurationItemList(output.configurationItems, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1GetStoredQueryResponse = function (output, context) {
    return {
        StoredQuery: output.StoredQuery !== undefined && output.StoredQuery !== null
            ? deserializeAws_json1_1StoredQuery(output.StoredQuery, context)
            : undefined,
    };
};
var deserializeAws_json1_1GroupedResourceCount = function (output, context) {
    return {
        GroupName: output.GroupName !== undefined && output.GroupName !== null ? output.GroupName : undefined,
        ResourceCount: output.ResourceCount !== undefined && output.ResourceCount !== null ? output.ResourceCount : undefined,
    };
};
var deserializeAws_json1_1GroupedResourceCountList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1GroupedResourceCount(entry, context);
    });
};
var deserializeAws_json1_1InsufficientDeliveryPolicyException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InsufficientPermissionsException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidConfigurationRecorderNameException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidDeliveryChannelNameException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidExpressionException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidLimitException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidNextTokenException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidParameterValueException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidRecordingGroupException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidResultTokenException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidRoleException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidS3KeyPrefixException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidS3KmsKeyArnException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidSNSTopicARNException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidTimeRangeException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1LastDeliveryChannelDeleteFailedException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1LimitExceededException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ListAggregateDiscoveredResourcesResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        ResourceIdentifiers: output.ResourceIdentifiers !== undefined && output.ResourceIdentifiers !== null
            ? deserializeAws_json1_1DiscoveredResourceIdentifierList(output.ResourceIdentifiers, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListDiscoveredResourcesResponse = function (output, context) {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        resourceIdentifiers: output.resourceIdentifiers !== undefined && output.resourceIdentifiers !== null
            ? deserializeAws_json1_1ResourceIdentifierList(output.resourceIdentifiers, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListStoredQueriesResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        StoredQueryMetadata: output.StoredQueryMetadata !== undefined && output.StoredQueryMetadata !== null
            ? deserializeAws_json1_1StoredQueryMetadataList(output.StoredQueryMetadata, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListTagsForResourceResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagList(output.Tags, context)
            : undefined,
    };
};
var deserializeAws_json1_1MaxActiveResourcesExceededException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1MaxNumberOfConfigRulesExceededException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1MaxNumberOfConfigurationRecordersExceededException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1MaxNumberOfConformancePacksExceededException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1MaxNumberOfDeliveryChannelsExceededException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1MaxNumberOfOrganizationConfigRulesExceededException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1MaxNumberOfOrganizationConformancePacksExceededException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1MaxNumberOfRetentionConfigurationsExceededException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1MemberAccountStatus = function (output, context) {
    return {
        AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
        ConfigRuleName: output.ConfigRuleName !== undefined && output.ConfigRuleName !== null ? output.ConfigRuleName : undefined,
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        LastUpdateTime: output.LastUpdateTime !== undefined && output.LastUpdateTime !== null
            ? new Date(Math.round(output.LastUpdateTime * 1000))
            : undefined,
        MemberAccountRuleStatus: output.MemberAccountRuleStatus !== undefined && output.MemberAccountRuleStatus !== null
            ? output.MemberAccountRuleStatus
            : undefined,
    };
};
var deserializeAws_json1_1NoAvailableConfigurationRecorderException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1NoAvailableDeliveryChannelException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1NoAvailableOrganizationException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1NoRunningConfigurationRecorderException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1NoSuchBucketException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1NoSuchConfigRuleException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1NoSuchConfigRuleInConformancePackException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1NoSuchConfigurationAggregatorException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1NoSuchConfigurationRecorderException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1NoSuchConformancePackException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1NoSuchDeliveryChannelException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1NoSuchOrganizationConfigRuleException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1NoSuchOrganizationConformancePackException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1NoSuchRemediationConfigurationException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1NoSuchRemediationExceptionException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1NoSuchRetentionConfigurationException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1OrganizationAccessDeniedException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1OrganizationAggregationSource = function (output, context) {
    return {
        AllAwsRegions: output.AllAwsRegions !== undefined && output.AllAwsRegions !== null ? output.AllAwsRegions : undefined,
        AwsRegions: output.AwsRegions !== undefined && output.AwsRegions !== null
            ? deserializeAws_json1_1AggregatorRegionList(output.AwsRegions, context)
            : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
    };
};
var deserializeAws_json1_1OrganizationAllFeaturesNotEnabledException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1OrganizationConfigRule = function (output, context) {
    return {
        ExcludedAccounts: output.ExcludedAccounts !== undefined && output.ExcludedAccounts !== null
            ? deserializeAws_json1_1ExcludedAccounts(output.ExcludedAccounts, context)
            : undefined,
        LastUpdateTime: output.LastUpdateTime !== undefined && output.LastUpdateTime !== null
            ? new Date(Math.round(output.LastUpdateTime * 1000))
            : undefined,
        OrganizationConfigRuleArn: output.OrganizationConfigRuleArn !== undefined && output.OrganizationConfigRuleArn !== null
            ? output.OrganizationConfigRuleArn
            : undefined,
        OrganizationConfigRuleName: output.OrganizationConfigRuleName !== undefined && output.OrganizationConfigRuleName !== null
            ? output.OrganizationConfigRuleName
            : undefined,
        OrganizationCustomRuleMetadata: output.OrganizationCustomRuleMetadata !== undefined && output.OrganizationCustomRuleMetadata !== null
            ? deserializeAws_json1_1OrganizationCustomRuleMetadata(output.OrganizationCustomRuleMetadata, context)
            : undefined,
        OrganizationManagedRuleMetadata: output.OrganizationManagedRuleMetadata !== undefined && output.OrganizationManagedRuleMetadata !== null
            ? deserializeAws_json1_1OrganizationManagedRuleMetadata(output.OrganizationManagedRuleMetadata, context)
            : undefined,
    };
};
var deserializeAws_json1_1OrganizationConfigRuleDetailedStatus = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MemberAccountStatus(entry, context);
    });
};
var deserializeAws_json1_1OrganizationConfigRules = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OrganizationConfigRule(entry, context);
    });
};
var deserializeAws_json1_1OrganizationConfigRuleStatus = function (output, context) {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        LastUpdateTime: output.LastUpdateTime !== undefined && output.LastUpdateTime !== null
            ? new Date(Math.round(output.LastUpdateTime * 1000))
            : undefined,
        OrganizationConfigRuleName: output.OrganizationConfigRuleName !== undefined && output.OrganizationConfigRuleName !== null
            ? output.OrganizationConfigRuleName
            : undefined,
        OrganizationRuleStatus: output.OrganizationRuleStatus !== undefined && output.OrganizationRuleStatus !== null
            ? output.OrganizationRuleStatus
            : undefined,
    };
};
var deserializeAws_json1_1OrganizationConfigRuleStatuses = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OrganizationConfigRuleStatus(entry, context);
    });
};
var deserializeAws_json1_1OrganizationConfigRuleTriggerTypes = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1OrganizationConformancePack = function (output, context) {
    return {
        ConformancePackInputParameters: output.ConformancePackInputParameters !== undefined && output.ConformancePackInputParameters !== null
            ? deserializeAws_json1_1ConformancePackInputParameters(output.ConformancePackInputParameters, context)
            : undefined,
        DeliveryS3Bucket: output.DeliveryS3Bucket !== undefined && output.DeliveryS3Bucket !== null ? output.DeliveryS3Bucket : undefined,
        DeliveryS3KeyPrefix: output.DeliveryS3KeyPrefix !== undefined && output.DeliveryS3KeyPrefix !== null
            ? output.DeliveryS3KeyPrefix
            : undefined,
        ExcludedAccounts: output.ExcludedAccounts !== undefined && output.ExcludedAccounts !== null
            ? deserializeAws_json1_1ExcludedAccounts(output.ExcludedAccounts, context)
            : undefined,
        LastUpdateTime: output.LastUpdateTime !== undefined && output.LastUpdateTime !== null
            ? new Date(Math.round(output.LastUpdateTime * 1000))
            : undefined,
        OrganizationConformancePackArn: output.OrganizationConformancePackArn !== undefined && output.OrganizationConformancePackArn !== null
            ? output.OrganizationConformancePackArn
            : undefined,
        OrganizationConformancePackName: output.OrganizationConformancePackName !== undefined && output.OrganizationConformancePackName !== null
            ? output.OrganizationConformancePackName
            : undefined,
    };
};
var deserializeAws_json1_1OrganizationConformancePackDetailedStatus = function (output, context) {
    return {
        AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
        ConformancePackName: output.ConformancePackName !== undefined && output.ConformancePackName !== null
            ? output.ConformancePackName
            : undefined,
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        LastUpdateTime: output.LastUpdateTime !== undefined && output.LastUpdateTime !== null
            ? new Date(Math.round(output.LastUpdateTime * 1000))
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
var deserializeAws_json1_1OrganizationConformancePackDetailedStatuses = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OrganizationConformancePackDetailedStatus(entry, context);
    });
};
var deserializeAws_json1_1OrganizationConformancePacks = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OrganizationConformancePack(entry, context);
    });
};
var deserializeAws_json1_1OrganizationConformancePackStatus = function (output, context) {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        LastUpdateTime: output.LastUpdateTime !== undefined && output.LastUpdateTime !== null
            ? new Date(Math.round(output.LastUpdateTime * 1000))
            : undefined,
        OrganizationConformancePackName: output.OrganizationConformancePackName !== undefined && output.OrganizationConformancePackName !== null
            ? output.OrganizationConformancePackName
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
var deserializeAws_json1_1OrganizationConformancePackStatuses = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OrganizationConformancePackStatus(entry, context);
    });
};
var deserializeAws_json1_1OrganizationConformancePackTemplateValidationException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1OrganizationCustomRuleMetadata = function (output, context) {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        InputParameters: output.InputParameters !== undefined && output.InputParameters !== null ? output.InputParameters : undefined,
        LambdaFunctionArn: output.LambdaFunctionArn !== undefined && output.LambdaFunctionArn !== null
            ? output.LambdaFunctionArn
            : undefined,
        MaximumExecutionFrequency: output.MaximumExecutionFrequency !== undefined && output.MaximumExecutionFrequency !== null
            ? output.MaximumExecutionFrequency
            : undefined,
        OrganizationConfigRuleTriggerTypes: output.OrganizationConfigRuleTriggerTypes !== undefined && output.OrganizationConfigRuleTriggerTypes !== null
            ? deserializeAws_json1_1OrganizationConfigRuleTriggerTypes(output.OrganizationConfigRuleTriggerTypes, context)
            : undefined,
        ResourceIdScope: output.ResourceIdScope !== undefined && output.ResourceIdScope !== null ? output.ResourceIdScope : undefined,
        ResourceTypesScope: output.ResourceTypesScope !== undefined && output.ResourceTypesScope !== null
            ? deserializeAws_json1_1ResourceTypesScope(output.ResourceTypesScope, context)
            : undefined,
        TagKeyScope: output.TagKeyScope !== undefined && output.TagKeyScope !== null ? output.TagKeyScope : undefined,
        TagValueScope: output.TagValueScope !== undefined && output.TagValueScope !== null ? output.TagValueScope : undefined,
    };
};
var deserializeAws_json1_1OrganizationManagedRuleMetadata = function (output, context) {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        InputParameters: output.InputParameters !== undefined && output.InputParameters !== null ? output.InputParameters : undefined,
        MaximumExecutionFrequency: output.MaximumExecutionFrequency !== undefined && output.MaximumExecutionFrequency !== null
            ? output.MaximumExecutionFrequency
            : undefined,
        ResourceIdScope: output.ResourceIdScope !== undefined && output.ResourceIdScope !== null ? output.ResourceIdScope : undefined,
        ResourceTypesScope: output.ResourceTypesScope !== undefined && output.ResourceTypesScope !== null
            ? deserializeAws_json1_1ResourceTypesScope(output.ResourceTypesScope, context)
            : undefined,
        RuleIdentifier: output.RuleIdentifier !== undefined && output.RuleIdentifier !== null ? output.RuleIdentifier : undefined,
        TagKeyScope: output.TagKeyScope !== undefined && output.TagKeyScope !== null ? output.TagKeyScope : undefined,
        TagValueScope: output.TagValueScope !== undefined && output.TagValueScope !== null ? output.TagValueScope : undefined,
    };
};
var deserializeAws_json1_1OversizedConfigurationItemException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1PendingAggregationRequest = function (output, context) {
    return {
        RequesterAccountId: output.RequesterAccountId !== undefined && output.RequesterAccountId !== null
            ? output.RequesterAccountId
            : undefined,
        RequesterAwsRegion: output.RequesterAwsRegion !== undefined && output.RequesterAwsRegion !== null
            ? output.RequesterAwsRegion
            : undefined,
    };
};
var deserializeAws_json1_1PendingAggregationRequestList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PendingAggregationRequest(entry, context);
    });
};
var deserializeAws_json1_1PutAggregationAuthorizationResponse = function (output, context) {
    return {
        AggregationAuthorization: output.AggregationAuthorization !== undefined && output.AggregationAuthorization !== null
            ? deserializeAws_json1_1AggregationAuthorization(output.AggregationAuthorization, context)
            : undefined,
    };
};
var deserializeAws_json1_1PutConfigurationAggregatorResponse = function (output, context) {
    return {
        ConfigurationAggregator: output.ConfigurationAggregator !== undefined && output.ConfigurationAggregator !== null
            ? deserializeAws_json1_1ConfigurationAggregator(output.ConfigurationAggregator, context)
            : undefined,
    };
};
var deserializeAws_json1_1PutConformancePackResponse = function (output, context) {
    return {
        ConformancePackArn: output.ConformancePackArn !== undefined && output.ConformancePackArn !== null
            ? output.ConformancePackArn
            : undefined,
    };
};
var deserializeAws_json1_1PutEvaluationsResponse = function (output, context) {
    return {
        FailedEvaluations: output.FailedEvaluations !== undefined && output.FailedEvaluations !== null
            ? deserializeAws_json1_1Evaluations(output.FailedEvaluations, context)
            : undefined,
    };
};
var deserializeAws_json1_1PutExternalEvaluationResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1PutOrganizationConfigRuleResponse = function (output, context) {
    return {
        OrganizationConfigRuleArn: output.OrganizationConfigRuleArn !== undefined && output.OrganizationConfigRuleArn !== null
            ? output.OrganizationConfigRuleArn
            : undefined,
    };
};
var deserializeAws_json1_1PutOrganizationConformancePackResponse = function (output, context) {
    return {
        OrganizationConformancePackArn: output.OrganizationConformancePackArn !== undefined && output.OrganizationConformancePackArn !== null
            ? output.OrganizationConformancePackArn
            : undefined,
    };
};
var deserializeAws_json1_1PutRemediationConfigurationsResponse = function (output, context) {
    return {
        FailedBatches: output.FailedBatches !== undefined && output.FailedBatches !== null
            ? deserializeAws_json1_1FailedRemediationBatches(output.FailedBatches, context)
            : undefined,
    };
};
var deserializeAws_json1_1PutRemediationExceptionsResponse = function (output, context) {
    return {
        FailedBatches: output.FailedBatches !== undefined && output.FailedBatches !== null
            ? deserializeAws_json1_1FailedRemediationExceptionBatches(output.FailedBatches, context)
            : undefined,
    };
};
var deserializeAws_json1_1PutRetentionConfigurationResponse = function (output, context) {
    return {
        RetentionConfiguration: output.RetentionConfiguration !== undefined && output.RetentionConfiguration !== null
            ? deserializeAws_json1_1RetentionConfiguration(output.RetentionConfiguration, context)
            : undefined,
    };
};
var deserializeAws_json1_1PutStoredQueryResponse = function (output, context) {
    return {
        QueryArn: output.QueryArn !== undefined && output.QueryArn !== null ? output.QueryArn : undefined,
    };
};
var deserializeAws_json1_1QueryInfo = function (output, context) {
    return {
        SelectFields: output.SelectFields !== undefined && output.SelectFields !== null
            ? deserializeAws_json1_1FieldInfoList(output.SelectFields, context)
            : undefined,
    };
};
var deserializeAws_json1_1RecordingGroup = function (output, context) {
    return {
        allSupported: output.allSupported !== undefined && output.allSupported !== null ? output.allSupported : undefined,
        includeGlobalResourceTypes: output.includeGlobalResourceTypes !== undefined && output.includeGlobalResourceTypes !== null
            ? output.includeGlobalResourceTypes
            : undefined,
        resourceTypes: output.resourceTypes !== undefined && output.resourceTypes !== null
            ? deserializeAws_json1_1ResourceTypeList(output.resourceTypes, context)
            : undefined,
    };
};
var deserializeAws_json1_1RelatedEventList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1Relationship = function (output, context) {
    return {
        relationshipName: output.relationshipName !== undefined && output.relationshipName !== null ? output.relationshipName : undefined,
        resourceId: output.resourceId !== undefined && output.resourceId !== null ? output.resourceId : undefined,
        resourceName: output.resourceName !== undefined && output.resourceName !== null ? output.resourceName : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    };
};
var deserializeAws_json1_1RelationshipList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Relationship(entry, context);
    });
};
var deserializeAws_json1_1RemediationConfiguration = function (output, context) {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Automatic: output.Automatic !== undefined && output.Automatic !== null ? output.Automatic : undefined,
        ConfigRuleName: output.ConfigRuleName !== undefined && output.ConfigRuleName !== null ? output.ConfigRuleName : undefined,
        CreatedByService: output.CreatedByService !== undefined && output.CreatedByService !== null ? output.CreatedByService : undefined,
        ExecutionControls: output.ExecutionControls !== undefined && output.ExecutionControls !== null
            ? deserializeAws_json1_1ExecutionControls(output.ExecutionControls, context)
            : undefined,
        MaximumAutomaticAttempts: output.MaximumAutomaticAttempts !== undefined && output.MaximumAutomaticAttempts !== null
            ? output.MaximumAutomaticAttempts
            : undefined,
        Parameters: output.Parameters !== undefined && output.Parameters !== null
            ? deserializeAws_json1_1RemediationParameters(output.Parameters, context)
            : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
        RetryAttemptSeconds: output.RetryAttemptSeconds !== undefined && output.RetryAttemptSeconds !== null
            ? output.RetryAttemptSeconds
            : undefined,
        TargetId: output.TargetId !== undefined && output.TargetId !== null ? output.TargetId : undefined,
        TargetType: output.TargetType !== undefined && output.TargetType !== null ? output.TargetType : undefined,
        TargetVersion: output.TargetVersion !== undefined && output.TargetVersion !== null ? output.TargetVersion : undefined,
    };
};
var deserializeAws_json1_1RemediationConfigurations = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RemediationConfiguration(entry, context);
    });
};
var deserializeAws_json1_1RemediationException = function (output, context) {
    return {
        ConfigRuleName: output.ConfigRuleName !== undefined && output.ConfigRuleName !== null ? output.ConfigRuleName : undefined,
        ExpirationTime: output.ExpirationTime !== undefined && output.ExpirationTime !== null
            ? new Date(Math.round(output.ExpirationTime * 1000))
            : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    };
};
var deserializeAws_json1_1RemediationExceptionResourceKey = function (output, context) {
    return {
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    };
};
var deserializeAws_json1_1RemediationExceptionResourceKeys = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RemediationExceptionResourceKey(entry, context);
    });
};
var deserializeAws_json1_1RemediationExceptions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RemediationException(entry, context);
    });
};
var deserializeAws_json1_1RemediationExecutionStatus = function (output, context) {
    return {
        InvocationTime: output.InvocationTime !== undefined && output.InvocationTime !== null
            ? new Date(Math.round(output.InvocationTime * 1000))
            : undefined,
        LastUpdatedTime: output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
            ? new Date(Math.round(output.LastUpdatedTime * 1000))
            : undefined,
        ResourceKey: output.ResourceKey !== undefined && output.ResourceKey !== null
            ? deserializeAws_json1_1ResourceKey(output.ResourceKey, context)
            : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        StepDetails: output.StepDetails !== undefined && output.StepDetails !== null
            ? deserializeAws_json1_1RemediationExecutionSteps(output.StepDetails, context)
            : undefined,
    };
};
var deserializeAws_json1_1RemediationExecutionStatuses = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RemediationExecutionStatus(entry, context);
    });
};
var deserializeAws_json1_1RemediationExecutionStep = function (output, context) {
    return {
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        StopTime: output.StopTime !== undefined && output.StopTime !== null
            ? new Date(Math.round(output.StopTime * 1000))
            : undefined,
    };
};
var deserializeAws_json1_1RemediationExecutionSteps = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RemediationExecutionStep(entry, context);
    });
};
var deserializeAws_json1_1RemediationInProgressException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1RemediationParameters = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_json1_1RemediationParameterValue(value, context), _b));
    }, {});
};
var deserializeAws_json1_1RemediationParameterValue = function (output, context) {
    return {
        ResourceValue: output.ResourceValue !== undefined && output.ResourceValue !== null
            ? deserializeAws_json1_1ResourceValue(output.ResourceValue, context)
            : undefined,
        StaticValue: output.StaticValue !== undefined && output.StaticValue !== null
            ? deserializeAws_json1_1StaticValue(output.StaticValue, context)
            : undefined,
    };
};
var deserializeAws_json1_1ResourceConcurrentModificationException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ResourceCount = function (output, context) {
    return {
        count: output.count !== undefined && output.count !== null ? output.count : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    };
};
var deserializeAws_json1_1ResourceCounts = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResourceCount(entry, context);
    });
};
var deserializeAws_json1_1ResourceIdentifier = function (output, context) {
    return {
        resourceDeletionTime: output.resourceDeletionTime !== undefined && output.resourceDeletionTime !== null
            ? new Date(Math.round(output.resourceDeletionTime * 1000))
            : undefined,
        resourceId: output.resourceId !== undefined && output.resourceId !== null ? output.resourceId : undefined,
        resourceName: output.resourceName !== undefined && output.resourceName !== null ? output.resourceName : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    };
};
var deserializeAws_json1_1ResourceIdentifierList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResourceIdentifier(entry, context);
    });
};
var deserializeAws_json1_1ResourceInUseException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ResourceKey = function (output, context) {
    return {
        resourceId: output.resourceId !== undefined && output.resourceId !== null ? output.resourceId : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    };
};
var deserializeAws_json1_1ResourceKeys = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResourceKey(entry, context);
    });
};
var deserializeAws_json1_1ResourceNotDiscoveredException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ResourceNotFoundException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ResourceTypeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1ResourceTypesScope = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1ResourceValue = function (output, context) {
    return {
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_json1_1Results = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1RetentionConfiguration = function (output, context) {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        RetentionPeriodInDays: output.RetentionPeriodInDays !== undefined && output.RetentionPeriodInDays !== null
            ? output.RetentionPeriodInDays
            : undefined,
    };
};
var deserializeAws_json1_1RetentionConfigurationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RetentionConfiguration(entry, context);
    });
};
var deserializeAws_json1_1Scope = function (output, context) {
    return {
        ComplianceResourceId: output.ComplianceResourceId !== undefined && output.ComplianceResourceId !== null
            ? output.ComplianceResourceId
            : undefined,
        ComplianceResourceTypes: output.ComplianceResourceTypes !== undefined && output.ComplianceResourceTypes !== null
            ? deserializeAws_json1_1ComplianceResourceTypes(output.ComplianceResourceTypes, context)
            : undefined,
        TagKey: output.TagKey !== undefined && output.TagKey !== null ? output.TagKey : undefined,
        TagValue: output.TagValue !== undefined && output.TagValue !== null ? output.TagValue : undefined,
    };
};
var deserializeAws_json1_1SelectAggregateResourceConfigResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        QueryInfo: output.QueryInfo !== undefined && output.QueryInfo !== null
            ? deserializeAws_json1_1QueryInfo(output.QueryInfo, context)
            : undefined,
        Results: output.Results !== undefined && output.Results !== null
            ? deserializeAws_json1_1Results(output.Results, context)
            : undefined,
    };
};
var deserializeAws_json1_1SelectResourceConfigResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        QueryInfo: output.QueryInfo !== undefined && output.QueryInfo !== null
            ? deserializeAws_json1_1QueryInfo(output.QueryInfo, context)
            : undefined,
        Results: output.Results !== undefined && output.Results !== null
            ? deserializeAws_json1_1Results(output.Results, context)
            : undefined,
    };
};
var deserializeAws_json1_1Source = function (output, context) {
    return {
        Owner: output.Owner !== undefined && output.Owner !== null ? output.Owner : undefined,
        SourceDetails: output.SourceDetails !== undefined && output.SourceDetails !== null
            ? deserializeAws_json1_1SourceDetails(output.SourceDetails, context)
            : undefined,
        SourceIdentifier: output.SourceIdentifier !== undefined && output.SourceIdentifier !== null ? output.SourceIdentifier : undefined,
    };
};
var deserializeAws_json1_1SourceDetail = function (output, context) {
    return {
        EventSource: output.EventSource !== undefined && output.EventSource !== null ? output.EventSource : undefined,
        MaximumExecutionFrequency: output.MaximumExecutionFrequency !== undefined && output.MaximumExecutionFrequency !== null
            ? output.MaximumExecutionFrequency
            : undefined,
        MessageType: output.MessageType !== undefined && output.MessageType !== null ? output.MessageType : undefined,
    };
};
var deserializeAws_json1_1SourceDetails = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SourceDetail(entry, context);
    });
};
var deserializeAws_json1_1SsmControls = function (output, context) {
    return {
        ConcurrentExecutionRatePercentage: output.ConcurrentExecutionRatePercentage !== undefined && output.ConcurrentExecutionRatePercentage !== null
            ? output.ConcurrentExecutionRatePercentage
            : undefined,
        ErrorPercentage: output.ErrorPercentage !== undefined && output.ErrorPercentage !== null ? output.ErrorPercentage : undefined,
    };
};
var deserializeAws_json1_1StartConfigRulesEvaluationResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1StartRemediationExecutionResponse = function (output, context) {
    return {
        FailedItems: output.FailedItems !== undefined && output.FailedItems !== null
            ? deserializeAws_json1_1ResourceKeys(output.FailedItems, context)
            : undefined,
        FailureMessage: output.FailureMessage !== undefined && output.FailureMessage !== null ? output.FailureMessage : undefined,
    };
};
var deserializeAws_json1_1StaticParameterValues = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1StaticValue = function (output, context) {
    return {
        Values: output.Values !== undefined && output.Values !== null
            ? deserializeAws_json1_1StaticParameterValues(output.Values, context)
            : undefined,
    };
};
var deserializeAws_json1_1StoredQuery = function (output, context) {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Expression: output.Expression !== undefined && output.Expression !== null ? output.Expression : undefined,
        QueryArn: output.QueryArn !== undefined && output.QueryArn !== null ? output.QueryArn : undefined,
        QueryId: output.QueryId !== undefined && output.QueryId !== null ? output.QueryId : undefined,
        QueryName: output.QueryName !== undefined && output.QueryName !== null ? output.QueryName : undefined,
    };
};
var deserializeAws_json1_1StoredQueryMetadata = function (output, context) {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        QueryArn: output.QueryArn !== undefined && output.QueryArn !== null ? output.QueryArn : undefined,
        QueryId: output.QueryId !== undefined && output.QueryId !== null ? output.QueryId : undefined,
        QueryName: output.QueryName !== undefined && output.QueryName !== null ? output.QueryName : undefined,
    };
};
var deserializeAws_json1_1StoredQueryMetadataList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1StoredQueryMetadata(entry, context);
    });
};
var deserializeAws_json1_1SupplementaryConfiguration = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
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
var deserializeAws_json1_1Tags = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_json1_1TooManyTagsException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1UnprocessedResourceIdentifierList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AggregateResourceIdentifier(entry, context);
    });
};
var deserializeAws_json1_1ValidationException = function (output, context) {
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
//# sourceMappingURL=Aws_json1_1.js.map