"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_json1_1GetComplianceDetailsByResourceCommand = exports.serializeAws_json1_1GetComplianceDetailsByConfigRuleCommand = exports.serializeAws_json1_1GetAggregateResourceConfigCommand = exports.serializeAws_json1_1GetAggregateDiscoveredResourceCountsCommand = exports.serializeAws_json1_1GetAggregateConformancePackComplianceSummaryCommand = exports.serializeAws_json1_1GetAggregateConfigRuleComplianceSummaryCommand = exports.serializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleCommand = exports.serializeAws_json1_1DescribeRetentionConfigurationsCommand = exports.serializeAws_json1_1DescribeRemediationExecutionStatusCommand = exports.serializeAws_json1_1DescribeRemediationExceptionsCommand = exports.serializeAws_json1_1DescribeRemediationConfigurationsCommand = exports.serializeAws_json1_1DescribePendingAggregationRequestsCommand = exports.serializeAws_json1_1DescribeOrganizationConformancePackStatusesCommand = exports.serializeAws_json1_1DescribeOrganizationConformancePacksCommand = exports.serializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommand = exports.serializeAws_json1_1DescribeOrganizationConfigRulesCommand = exports.serializeAws_json1_1DescribeDeliveryChannelStatusCommand = exports.serializeAws_json1_1DescribeDeliveryChannelsCommand = exports.serializeAws_json1_1DescribeConformancePackStatusCommand = exports.serializeAws_json1_1DescribeConformancePacksCommand = exports.serializeAws_json1_1DescribeConformancePackComplianceCommand = exports.serializeAws_json1_1DescribeConfigurationRecorderStatusCommand = exports.serializeAws_json1_1DescribeConfigurationRecordersCommand = exports.serializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusCommand = exports.serializeAws_json1_1DescribeConfigurationAggregatorsCommand = exports.serializeAws_json1_1DescribeConfigRulesCommand = exports.serializeAws_json1_1DescribeConfigRuleEvaluationStatusCommand = exports.serializeAws_json1_1DescribeComplianceByResourceCommand = exports.serializeAws_json1_1DescribeComplianceByConfigRuleCommand = exports.serializeAws_json1_1DescribeAggregationAuthorizationsCommand = exports.serializeAws_json1_1DescribeAggregateComplianceByConformancePacksCommand = exports.serializeAws_json1_1DescribeAggregateComplianceByConfigRulesCommand = exports.serializeAws_json1_1DeliverConfigSnapshotCommand = exports.serializeAws_json1_1DeleteStoredQueryCommand = exports.serializeAws_json1_1DeleteRetentionConfigurationCommand = exports.serializeAws_json1_1DeleteResourceConfigCommand = exports.serializeAws_json1_1DeleteRemediationExceptionsCommand = exports.serializeAws_json1_1DeleteRemediationConfigurationCommand = exports.serializeAws_json1_1DeletePendingAggregationRequestCommand = exports.serializeAws_json1_1DeleteOrganizationConformancePackCommand = exports.serializeAws_json1_1DeleteOrganizationConfigRuleCommand = exports.serializeAws_json1_1DeleteEvaluationResultsCommand = exports.serializeAws_json1_1DeleteDeliveryChannelCommand = exports.serializeAws_json1_1DeleteConformancePackCommand = exports.serializeAws_json1_1DeleteConfigurationRecorderCommand = exports.serializeAws_json1_1DeleteConfigurationAggregatorCommand = exports.serializeAws_json1_1DeleteConfigRuleCommand = exports.serializeAws_json1_1DeleteAggregationAuthorizationCommand = exports.serializeAws_json1_1BatchGetResourceConfigCommand = exports.serializeAws_json1_1BatchGetAggregateResourceConfigCommand = void 0;
exports.deserializeAws_json1_1DeleteRemediationExceptionsCommand = exports.deserializeAws_json1_1DeleteRemediationConfigurationCommand = exports.deserializeAws_json1_1DeletePendingAggregationRequestCommand = exports.deserializeAws_json1_1DeleteOrganizationConformancePackCommand = exports.deserializeAws_json1_1DeleteOrganizationConfigRuleCommand = exports.deserializeAws_json1_1DeleteEvaluationResultsCommand = exports.deserializeAws_json1_1DeleteDeliveryChannelCommand = exports.deserializeAws_json1_1DeleteConformancePackCommand = exports.deserializeAws_json1_1DeleteConfigurationRecorderCommand = exports.deserializeAws_json1_1DeleteConfigurationAggregatorCommand = exports.deserializeAws_json1_1DeleteConfigRuleCommand = exports.deserializeAws_json1_1DeleteAggregationAuthorizationCommand = exports.deserializeAws_json1_1BatchGetResourceConfigCommand = exports.deserializeAws_json1_1BatchGetAggregateResourceConfigCommand = exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1StopConfigurationRecorderCommand = exports.serializeAws_json1_1StartRemediationExecutionCommand = exports.serializeAws_json1_1StartConfigurationRecorderCommand = exports.serializeAws_json1_1StartConfigRulesEvaluationCommand = exports.serializeAws_json1_1SelectResourceConfigCommand = exports.serializeAws_json1_1SelectAggregateResourceConfigCommand = exports.serializeAws_json1_1PutStoredQueryCommand = exports.serializeAws_json1_1PutRetentionConfigurationCommand = exports.serializeAws_json1_1PutResourceConfigCommand = exports.serializeAws_json1_1PutRemediationExceptionsCommand = exports.serializeAws_json1_1PutRemediationConfigurationsCommand = exports.serializeAws_json1_1PutOrganizationConformancePackCommand = exports.serializeAws_json1_1PutOrganizationConfigRuleCommand = exports.serializeAws_json1_1PutExternalEvaluationCommand = exports.serializeAws_json1_1PutEvaluationsCommand = exports.serializeAws_json1_1PutDeliveryChannelCommand = exports.serializeAws_json1_1PutConformancePackCommand = exports.serializeAws_json1_1PutConfigurationRecorderCommand = exports.serializeAws_json1_1PutConfigurationAggregatorCommand = exports.serializeAws_json1_1PutConfigRuleCommand = exports.serializeAws_json1_1PutAggregationAuthorizationCommand = exports.serializeAws_json1_1ListTagsForResourceCommand = exports.serializeAws_json1_1ListStoredQueriesCommand = exports.serializeAws_json1_1ListDiscoveredResourcesCommand = exports.serializeAws_json1_1ListAggregateDiscoveredResourcesCommand = exports.serializeAws_json1_1GetStoredQueryCommand = exports.serializeAws_json1_1GetResourceConfigHistoryCommand = exports.serializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommand = exports.serializeAws_json1_1GetOrganizationConfigRuleDetailedStatusCommand = exports.serializeAws_json1_1GetDiscoveredResourceCountsCommand = exports.serializeAws_json1_1GetConformancePackComplianceSummaryCommand = exports.serializeAws_json1_1GetConformancePackComplianceDetailsCommand = exports.serializeAws_json1_1GetComplianceSummaryByResourceTypeCommand = exports.serializeAws_json1_1GetComplianceSummaryByConfigRuleCommand = void 0;
exports.deserializeAws_json1_1PutAggregationAuthorizationCommand = exports.deserializeAws_json1_1ListTagsForResourceCommand = exports.deserializeAws_json1_1ListStoredQueriesCommand = exports.deserializeAws_json1_1ListDiscoveredResourcesCommand = exports.deserializeAws_json1_1ListAggregateDiscoveredResourcesCommand = exports.deserializeAws_json1_1GetStoredQueryCommand = exports.deserializeAws_json1_1GetResourceConfigHistoryCommand = exports.deserializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommand = exports.deserializeAws_json1_1GetOrganizationConfigRuleDetailedStatusCommand = exports.deserializeAws_json1_1GetDiscoveredResourceCountsCommand = exports.deserializeAws_json1_1GetConformancePackComplianceSummaryCommand = exports.deserializeAws_json1_1GetConformancePackComplianceDetailsCommand = exports.deserializeAws_json1_1GetComplianceSummaryByResourceTypeCommand = exports.deserializeAws_json1_1GetComplianceSummaryByConfigRuleCommand = exports.deserializeAws_json1_1GetComplianceDetailsByResourceCommand = exports.deserializeAws_json1_1GetComplianceDetailsByConfigRuleCommand = exports.deserializeAws_json1_1GetAggregateResourceConfigCommand = exports.deserializeAws_json1_1GetAggregateDiscoveredResourceCountsCommand = exports.deserializeAws_json1_1GetAggregateConformancePackComplianceSummaryCommand = exports.deserializeAws_json1_1GetAggregateConfigRuleComplianceSummaryCommand = exports.deserializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleCommand = exports.deserializeAws_json1_1DescribeRetentionConfigurationsCommand = exports.deserializeAws_json1_1DescribeRemediationExecutionStatusCommand = exports.deserializeAws_json1_1DescribeRemediationExceptionsCommand = exports.deserializeAws_json1_1DescribeRemediationConfigurationsCommand = exports.deserializeAws_json1_1DescribePendingAggregationRequestsCommand = exports.deserializeAws_json1_1DescribeOrganizationConformancePackStatusesCommand = exports.deserializeAws_json1_1DescribeOrganizationConformancePacksCommand = exports.deserializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommand = exports.deserializeAws_json1_1DescribeOrganizationConfigRulesCommand = exports.deserializeAws_json1_1DescribeDeliveryChannelStatusCommand = exports.deserializeAws_json1_1DescribeDeliveryChannelsCommand = exports.deserializeAws_json1_1DescribeConformancePackStatusCommand = exports.deserializeAws_json1_1DescribeConformancePacksCommand = exports.deserializeAws_json1_1DescribeConformancePackComplianceCommand = exports.deserializeAws_json1_1DescribeConfigurationRecorderStatusCommand = exports.deserializeAws_json1_1DescribeConfigurationRecordersCommand = exports.deserializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusCommand = exports.deserializeAws_json1_1DescribeConfigurationAggregatorsCommand = exports.deserializeAws_json1_1DescribeConfigRulesCommand = exports.deserializeAws_json1_1DescribeConfigRuleEvaluationStatusCommand = exports.deserializeAws_json1_1DescribeComplianceByResourceCommand = exports.deserializeAws_json1_1DescribeComplianceByConfigRuleCommand = exports.deserializeAws_json1_1DescribeAggregationAuthorizationsCommand = exports.deserializeAws_json1_1DescribeAggregateComplianceByConformancePacksCommand = exports.deserializeAws_json1_1DescribeAggregateComplianceByConfigRulesCommand = exports.deserializeAws_json1_1DeliverConfigSnapshotCommand = exports.deserializeAws_json1_1DeleteStoredQueryCommand = exports.deserializeAws_json1_1DeleteRetentionConfigurationCommand = exports.deserializeAws_json1_1DeleteResourceConfigCommand = void 0;
exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1TagResourceCommand = exports.deserializeAws_json1_1StopConfigurationRecorderCommand = exports.deserializeAws_json1_1StartRemediationExecutionCommand = exports.deserializeAws_json1_1StartConfigurationRecorderCommand = exports.deserializeAws_json1_1StartConfigRulesEvaluationCommand = exports.deserializeAws_json1_1SelectResourceConfigCommand = exports.deserializeAws_json1_1SelectAggregateResourceConfigCommand = exports.deserializeAws_json1_1PutStoredQueryCommand = exports.deserializeAws_json1_1PutRetentionConfigurationCommand = exports.deserializeAws_json1_1PutResourceConfigCommand = exports.deserializeAws_json1_1PutRemediationExceptionsCommand = exports.deserializeAws_json1_1PutRemediationConfigurationsCommand = exports.deserializeAws_json1_1PutOrganizationConformancePackCommand = exports.deserializeAws_json1_1PutOrganizationConfigRuleCommand = exports.deserializeAws_json1_1PutExternalEvaluationCommand = exports.deserializeAws_json1_1PutEvaluationsCommand = exports.deserializeAws_json1_1PutDeliveryChannelCommand = exports.deserializeAws_json1_1PutConformancePackCommand = exports.deserializeAws_json1_1PutConfigurationRecorderCommand = exports.deserializeAws_json1_1PutConfigurationAggregatorCommand = exports.deserializeAws_json1_1PutConfigRuleCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1BatchGetAggregateResourceConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.BatchGetAggregateResourceConfig",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetAggregateResourceConfigRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchGetAggregateResourceConfigCommand = serializeAws_json1_1BatchGetAggregateResourceConfigCommand;
const serializeAws_json1_1BatchGetResourceConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.BatchGetResourceConfig",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetResourceConfigRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchGetResourceConfigCommand = serializeAws_json1_1BatchGetResourceConfigCommand;
const serializeAws_json1_1DeleteAggregationAuthorizationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DeleteAggregationAuthorization",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAggregationAuthorizationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteAggregationAuthorizationCommand = serializeAws_json1_1DeleteAggregationAuthorizationCommand;
const serializeAws_json1_1DeleteConfigRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DeleteConfigRule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteConfigRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteConfigRuleCommand = serializeAws_json1_1DeleteConfigRuleCommand;
const serializeAws_json1_1DeleteConfigurationAggregatorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DeleteConfigurationAggregator",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteConfigurationAggregatorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteConfigurationAggregatorCommand = serializeAws_json1_1DeleteConfigurationAggregatorCommand;
const serializeAws_json1_1DeleteConfigurationRecorderCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DeleteConfigurationRecorder",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteConfigurationRecorderRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteConfigurationRecorderCommand = serializeAws_json1_1DeleteConfigurationRecorderCommand;
const serializeAws_json1_1DeleteConformancePackCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DeleteConformancePack",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteConformancePackRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteConformancePackCommand = serializeAws_json1_1DeleteConformancePackCommand;
const serializeAws_json1_1DeleteDeliveryChannelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DeleteDeliveryChannel",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDeliveryChannelRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteDeliveryChannelCommand = serializeAws_json1_1DeleteDeliveryChannelCommand;
const serializeAws_json1_1DeleteEvaluationResultsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DeleteEvaluationResults",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteEvaluationResultsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteEvaluationResultsCommand = serializeAws_json1_1DeleteEvaluationResultsCommand;
const serializeAws_json1_1DeleteOrganizationConfigRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DeleteOrganizationConfigRule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteOrganizationConfigRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteOrganizationConfigRuleCommand = serializeAws_json1_1DeleteOrganizationConfigRuleCommand;
const serializeAws_json1_1DeleteOrganizationConformancePackCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DeleteOrganizationConformancePack",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteOrganizationConformancePackRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteOrganizationConformancePackCommand = serializeAws_json1_1DeleteOrganizationConformancePackCommand;
const serializeAws_json1_1DeletePendingAggregationRequestCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DeletePendingAggregationRequest",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeletePendingAggregationRequestRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeletePendingAggregationRequestCommand = serializeAws_json1_1DeletePendingAggregationRequestCommand;
const serializeAws_json1_1DeleteRemediationConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DeleteRemediationConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRemediationConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteRemediationConfigurationCommand = serializeAws_json1_1DeleteRemediationConfigurationCommand;
const serializeAws_json1_1DeleteRemediationExceptionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DeleteRemediationExceptions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRemediationExceptionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteRemediationExceptionsCommand = serializeAws_json1_1DeleteRemediationExceptionsCommand;
const serializeAws_json1_1DeleteResourceConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DeleteResourceConfig",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteResourceConfigRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteResourceConfigCommand = serializeAws_json1_1DeleteResourceConfigCommand;
const serializeAws_json1_1DeleteRetentionConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DeleteRetentionConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRetentionConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteRetentionConfigurationCommand = serializeAws_json1_1DeleteRetentionConfigurationCommand;
const serializeAws_json1_1DeleteStoredQueryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DeleteStoredQuery",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteStoredQueryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteStoredQueryCommand = serializeAws_json1_1DeleteStoredQueryCommand;
const serializeAws_json1_1DeliverConfigSnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DeliverConfigSnapshot",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeliverConfigSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeliverConfigSnapshotCommand = serializeAws_json1_1DeliverConfigSnapshotCommand;
const serializeAws_json1_1DescribeAggregateComplianceByConfigRulesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DescribeAggregateComplianceByConfigRules",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAggregateComplianceByConfigRulesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeAggregateComplianceByConfigRulesCommand = serializeAws_json1_1DescribeAggregateComplianceByConfigRulesCommand;
const serializeAws_json1_1DescribeAggregateComplianceByConformancePacksCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DescribeAggregateComplianceByConformancePacks",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAggregateComplianceByConformancePacksRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeAggregateComplianceByConformancePacksCommand = serializeAws_json1_1DescribeAggregateComplianceByConformancePacksCommand;
const serializeAws_json1_1DescribeAggregationAuthorizationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DescribeAggregationAuthorizations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAggregationAuthorizationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeAggregationAuthorizationsCommand = serializeAws_json1_1DescribeAggregationAuthorizationsCommand;
const serializeAws_json1_1DescribeComplianceByConfigRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DescribeComplianceByConfigRule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeComplianceByConfigRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeComplianceByConfigRuleCommand = serializeAws_json1_1DescribeComplianceByConfigRuleCommand;
const serializeAws_json1_1DescribeComplianceByResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DescribeComplianceByResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeComplianceByResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeComplianceByResourceCommand = serializeAws_json1_1DescribeComplianceByResourceCommand;
const serializeAws_json1_1DescribeConfigRuleEvaluationStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DescribeConfigRuleEvaluationStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeConfigRuleEvaluationStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeConfigRuleEvaluationStatusCommand = serializeAws_json1_1DescribeConfigRuleEvaluationStatusCommand;
const serializeAws_json1_1DescribeConfigRulesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DescribeConfigRules",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeConfigRulesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeConfigRulesCommand = serializeAws_json1_1DescribeConfigRulesCommand;
const serializeAws_json1_1DescribeConfigurationAggregatorsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DescribeConfigurationAggregators",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeConfigurationAggregatorsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeConfigurationAggregatorsCommand = serializeAws_json1_1DescribeConfigurationAggregatorsCommand;
const serializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusCommand = serializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusCommand;
const serializeAws_json1_1DescribeConfigurationRecordersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DescribeConfigurationRecorders",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeConfigurationRecordersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeConfigurationRecordersCommand = serializeAws_json1_1DescribeConfigurationRecordersCommand;
const serializeAws_json1_1DescribeConfigurationRecorderStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DescribeConfigurationRecorderStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeConfigurationRecorderStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeConfigurationRecorderStatusCommand = serializeAws_json1_1DescribeConfigurationRecorderStatusCommand;
const serializeAws_json1_1DescribeConformancePackComplianceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DescribeConformancePackCompliance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeConformancePackComplianceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeConformancePackComplianceCommand = serializeAws_json1_1DescribeConformancePackComplianceCommand;
const serializeAws_json1_1DescribeConformancePacksCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DescribeConformancePacks",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeConformancePacksRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeConformancePacksCommand = serializeAws_json1_1DescribeConformancePacksCommand;
const serializeAws_json1_1DescribeConformancePackStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DescribeConformancePackStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeConformancePackStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeConformancePackStatusCommand = serializeAws_json1_1DescribeConformancePackStatusCommand;
const serializeAws_json1_1DescribeDeliveryChannelsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DescribeDeliveryChannels",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDeliveryChannelsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeDeliveryChannelsCommand = serializeAws_json1_1DescribeDeliveryChannelsCommand;
const serializeAws_json1_1DescribeDeliveryChannelStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DescribeDeliveryChannelStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDeliveryChannelStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeDeliveryChannelStatusCommand = serializeAws_json1_1DescribeDeliveryChannelStatusCommand;
const serializeAws_json1_1DescribeOrganizationConfigRulesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DescribeOrganizationConfigRules",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeOrganizationConfigRulesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeOrganizationConfigRulesCommand = serializeAws_json1_1DescribeOrganizationConfigRulesCommand;
const serializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DescribeOrganizationConfigRuleStatuses",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeOrganizationConfigRuleStatusesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommand = serializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommand;
const serializeAws_json1_1DescribeOrganizationConformancePacksCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DescribeOrganizationConformancePacks",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeOrganizationConformancePacksRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeOrganizationConformancePacksCommand = serializeAws_json1_1DescribeOrganizationConformancePacksCommand;
const serializeAws_json1_1DescribeOrganizationConformancePackStatusesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DescribeOrganizationConformancePackStatuses",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeOrganizationConformancePackStatusesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeOrganizationConformancePackStatusesCommand = serializeAws_json1_1DescribeOrganizationConformancePackStatusesCommand;
const serializeAws_json1_1DescribePendingAggregationRequestsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DescribePendingAggregationRequests",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribePendingAggregationRequestsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribePendingAggregationRequestsCommand = serializeAws_json1_1DescribePendingAggregationRequestsCommand;
const serializeAws_json1_1DescribeRemediationConfigurationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DescribeRemediationConfigurations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeRemediationConfigurationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeRemediationConfigurationsCommand = serializeAws_json1_1DescribeRemediationConfigurationsCommand;
const serializeAws_json1_1DescribeRemediationExceptionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DescribeRemediationExceptions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeRemediationExceptionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeRemediationExceptionsCommand = serializeAws_json1_1DescribeRemediationExceptionsCommand;
const serializeAws_json1_1DescribeRemediationExecutionStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DescribeRemediationExecutionStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeRemediationExecutionStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeRemediationExecutionStatusCommand = serializeAws_json1_1DescribeRemediationExecutionStatusCommand;
const serializeAws_json1_1DescribeRetentionConfigurationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.DescribeRetentionConfigurations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeRetentionConfigurationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeRetentionConfigurationsCommand = serializeAws_json1_1DescribeRetentionConfigurationsCommand;
const serializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.GetAggregateComplianceDetailsByConfigRule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleCommand = serializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleCommand;
const serializeAws_json1_1GetAggregateConfigRuleComplianceSummaryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.GetAggregateConfigRuleComplianceSummary",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAggregateConfigRuleComplianceSummaryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetAggregateConfigRuleComplianceSummaryCommand = serializeAws_json1_1GetAggregateConfigRuleComplianceSummaryCommand;
const serializeAws_json1_1GetAggregateConformancePackComplianceSummaryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.GetAggregateConformancePackComplianceSummary",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAggregateConformancePackComplianceSummaryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetAggregateConformancePackComplianceSummaryCommand = serializeAws_json1_1GetAggregateConformancePackComplianceSummaryCommand;
const serializeAws_json1_1GetAggregateDiscoveredResourceCountsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.GetAggregateDiscoveredResourceCounts",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAggregateDiscoveredResourceCountsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetAggregateDiscoveredResourceCountsCommand = serializeAws_json1_1GetAggregateDiscoveredResourceCountsCommand;
const serializeAws_json1_1GetAggregateResourceConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.GetAggregateResourceConfig",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAggregateResourceConfigRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetAggregateResourceConfigCommand = serializeAws_json1_1GetAggregateResourceConfigCommand;
const serializeAws_json1_1GetComplianceDetailsByConfigRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.GetComplianceDetailsByConfigRule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetComplianceDetailsByConfigRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetComplianceDetailsByConfigRuleCommand = serializeAws_json1_1GetComplianceDetailsByConfigRuleCommand;
const serializeAws_json1_1GetComplianceDetailsByResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.GetComplianceDetailsByResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetComplianceDetailsByResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetComplianceDetailsByResourceCommand = serializeAws_json1_1GetComplianceDetailsByResourceCommand;
const serializeAws_json1_1GetComplianceSummaryByConfigRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.GetComplianceSummaryByConfigRule",
    };
    const body = "{}";
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetComplianceSummaryByConfigRuleCommand = serializeAws_json1_1GetComplianceSummaryByConfigRuleCommand;
const serializeAws_json1_1GetComplianceSummaryByResourceTypeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.GetComplianceSummaryByResourceType",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetComplianceSummaryByResourceTypeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetComplianceSummaryByResourceTypeCommand = serializeAws_json1_1GetComplianceSummaryByResourceTypeCommand;
const serializeAws_json1_1GetConformancePackComplianceDetailsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.GetConformancePackComplianceDetails",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetConformancePackComplianceDetailsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetConformancePackComplianceDetailsCommand = serializeAws_json1_1GetConformancePackComplianceDetailsCommand;
const serializeAws_json1_1GetConformancePackComplianceSummaryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.GetConformancePackComplianceSummary",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetConformancePackComplianceSummaryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetConformancePackComplianceSummaryCommand = serializeAws_json1_1GetConformancePackComplianceSummaryCommand;
const serializeAws_json1_1GetDiscoveredResourceCountsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.GetDiscoveredResourceCounts",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDiscoveredResourceCountsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDiscoveredResourceCountsCommand = serializeAws_json1_1GetDiscoveredResourceCountsCommand;
const serializeAws_json1_1GetOrganizationConfigRuleDetailedStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.GetOrganizationConfigRuleDetailedStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetOrganizationConfigRuleDetailedStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetOrganizationConfigRuleDetailedStatusCommand = serializeAws_json1_1GetOrganizationConfigRuleDetailedStatusCommand;
const serializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.GetOrganizationConformancePackDetailedStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetOrganizationConformancePackDetailedStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommand = serializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommand;
const serializeAws_json1_1GetResourceConfigHistoryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.GetResourceConfigHistory",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetResourceConfigHistoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetResourceConfigHistoryCommand = serializeAws_json1_1GetResourceConfigHistoryCommand;
const serializeAws_json1_1GetStoredQueryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.GetStoredQuery",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetStoredQueryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetStoredQueryCommand = serializeAws_json1_1GetStoredQueryCommand;
const serializeAws_json1_1ListAggregateDiscoveredResourcesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.ListAggregateDiscoveredResources",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAggregateDiscoveredResourcesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListAggregateDiscoveredResourcesCommand = serializeAws_json1_1ListAggregateDiscoveredResourcesCommand;
const serializeAws_json1_1ListDiscoveredResourcesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.ListDiscoveredResources",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDiscoveredResourcesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListDiscoveredResourcesCommand = serializeAws_json1_1ListDiscoveredResourcesCommand;
const serializeAws_json1_1ListStoredQueriesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.ListStoredQueries",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListStoredQueriesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListStoredQueriesCommand = serializeAws_json1_1ListStoredQueriesCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1PutAggregationAuthorizationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.PutAggregationAuthorization",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutAggregationAuthorizationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutAggregationAuthorizationCommand = serializeAws_json1_1PutAggregationAuthorizationCommand;
const serializeAws_json1_1PutConfigRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.PutConfigRule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutConfigRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutConfigRuleCommand = serializeAws_json1_1PutConfigRuleCommand;
const serializeAws_json1_1PutConfigurationAggregatorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.PutConfigurationAggregator",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutConfigurationAggregatorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutConfigurationAggregatorCommand = serializeAws_json1_1PutConfigurationAggregatorCommand;
const serializeAws_json1_1PutConfigurationRecorderCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.PutConfigurationRecorder",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutConfigurationRecorderRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutConfigurationRecorderCommand = serializeAws_json1_1PutConfigurationRecorderCommand;
const serializeAws_json1_1PutConformancePackCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.PutConformancePack",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutConformancePackRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutConformancePackCommand = serializeAws_json1_1PutConformancePackCommand;
const serializeAws_json1_1PutDeliveryChannelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.PutDeliveryChannel",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutDeliveryChannelRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutDeliveryChannelCommand = serializeAws_json1_1PutDeliveryChannelCommand;
const serializeAws_json1_1PutEvaluationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.PutEvaluations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutEvaluationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutEvaluationsCommand = serializeAws_json1_1PutEvaluationsCommand;
const serializeAws_json1_1PutExternalEvaluationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.PutExternalEvaluation",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutExternalEvaluationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutExternalEvaluationCommand = serializeAws_json1_1PutExternalEvaluationCommand;
const serializeAws_json1_1PutOrganizationConfigRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.PutOrganizationConfigRule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutOrganizationConfigRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutOrganizationConfigRuleCommand = serializeAws_json1_1PutOrganizationConfigRuleCommand;
const serializeAws_json1_1PutOrganizationConformancePackCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.PutOrganizationConformancePack",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutOrganizationConformancePackRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutOrganizationConformancePackCommand = serializeAws_json1_1PutOrganizationConformancePackCommand;
const serializeAws_json1_1PutRemediationConfigurationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.PutRemediationConfigurations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutRemediationConfigurationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutRemediationConfigurationsCommand = serializeAws_json1_1PutRemediationConfigurationsCommand;
const serializeAws_json1_1PutRemediationExceptionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.PutRemediationExceptions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutRemediationExceptionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutRemediationExceptionsCommand = serializeAws_json1_1PutRemediationExceptionsCommand;
const serializeAws_json1_1PutResourceConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.PutResourceConfig",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutResourceConfigRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutResourceConfigCommand = serializeAws_json1_1PutResourceConfigCommand;
const serializeAws_json1_1PutRetentionConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.PutRetentionConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutRetentionConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutRetentionConfigurationCommand = serializeAws_json1_1PutRetentionConfigurationCommand;
const serializeAws_json1_1PutStoredQueryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.PutStoredQuery",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutStoredQueryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutStoredQueryCommand = serializeAws_json1_1PutStoredQueryCommand;
const serializeAws_json1_1SelectAggregateResourceConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.SelectAggregateResourceConfig",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SelectAggregateResourceConfigRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SelectAggregateResourceConfigCommand = serializeAws_json1_1SelectAggregateResourceConfigCommand;
const serializeAws_json1_1SelectResourceConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.SelectResourceConfig",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SelectResourceConfigRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SelectResourceConfigCommand = serializeAws_json1_1SelectResourceConfigCommand;
const serializeAws_json1_1StartConfigRulesEvaluationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.StartConfigRulesEvaluation",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartConfigRulesEvaluationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartConfigRulesEvaluationCommand = serializeAws_json1_1StartConfigRulesEvaluationCommand;
const serializeAws_json1_1StartConfigurationRecorderCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.StartConfigurationRecorder",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartConfigurationRecorderRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartConfigurationRecorderCommand = serializeAws_json1_1StartConfigurationRecorderCommand;
const serializeAws_json1_1StartRemediationExecutionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.StartRemediationExecution",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartRemediationExecutionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartRemediationExecutionCommand = serializeAws_json1_1StartRemediationExecutionCommand;
const serializeAws_json1_1StopConfigurationRecorderCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.StopConfigurationRecorder",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopConfigurationRecorderRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopConfigurationRecorderCommand = serializeAws_json1_1StopConfigurationRecorderCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "StarlingDoveService.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const deserializeAws_json1_1BatchGetAggregateResourceConfigCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchGetAggregateResourceConfigCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetAggregateResourceConfigResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchGetAggregateResourceConfigCommand = deserializeAws_json1_1BatchGetAggregateResourceConfigCommand;
const deserializeAws_json1_1BatchGetAggregateResourceConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchConfigurationAggregatorException":
        case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException":
            response = {
                ...(await deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.configservice#ValidationException":
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
const deserializeAws_json1_1BatchGetResourceConfigCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchGetResourceConfigCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetResourceConfigResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchGetResourceConfigCommand = deserializeAws_json1_1BatchGetResourceConfigCommand;
const deserializeAws_json1_1BatchGetResourceConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoAvailableConfigurationRecorderException":
        case "com.amazonaws.configservice#NoAvailableConfigurationRecorderException":
            response = {
                ...(await deserializeAws_json1_1NoAvailableConfigurationRecorderExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.configservice#ValidationException":
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
const deserializeAws_json1_1DeleteAggregationAuthorizationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteAggregationAuthorizationCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteAggregationAuthorizationCommand = deserializeAws_json1_1DeleteAggregationAuthorizationCommand;
const deserializeAws_json1_1DeleteAggregationAuthorizationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.configservice#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteConfigRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteConfigRuleCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteConfigRuleCommand = deserializeAws_json1_1DeleteConfigRuleCommand;
const deserializeAws_json1_1DeleteConfigRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchConfigRuleException":
        case "com.amazonaws.configservice#NoSuchConfigRuleException":
            response = {
                ...(await deserializeAws_json1_1NoSuchConfigRuleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.configservice#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteConfigurationAggregatorCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteConfigurationAggregatorCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteConfigurationAggregatorCommand = deserializeAws_json1_1DeleteConfigurationAggregatorCommand;
const deserializeAws_json1_1DeleteConfigurationAggregatorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchConfigurationAggregatorException":
        case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException":
            response = {
                ...(await deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteConfigurationRecorderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteConfigurationRecorderCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteConfigurationRecorderCommand = deserializeAws_json1_1DeleteConfigurationRecorderCommand;
const deserializeAws_json1_1DeleteConfigurationRecorderCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchConfigurationRecorderException":
        case "com.amazonaws.configservice#NoSuchConfigurationRecorderException":
            response = {
                ...(await deserializeAws_json1_1NoSuchConfigurationRecorderExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteConformancePackCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteConformancePackCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteConformancePackCommand = deserializeAws_json1_1DeleteConformancePackCommand;
const deserializeAws_json1_1DeleteConformancePackCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchConformancePackException":
        case "com.amazonaws.configservice#NoSuchConformancePackException":
            response = {
                ...(await deserializeAws_json1_1NoSuchConformancePackExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.configservice#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteDeliveryChannelCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteDeliveryChannelCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteDeliveryChannelCommand = deserializeAws_json1_1DeleteDeliveryChannelCommand;
const deserializeAws_json1_1DeleteDeliveryChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LastDeliveryChannelDeleteFailedException":
        case "com.amazonaws.configservice#LastDeliveryChannelDeleteFailedException":
            response = {
                ...(await deserializeAws_json1_1LastDeliveryChannelDeleteFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchDeliveryChannelException":
        case "com.amazonaws.configservice#NoSuchDeliveryChannelException":
            response = {
                ...(await deserializeAws_json1_1NoSuchDeliveryChannelExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteEvaluationResultsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteEvaluationResultsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteEvaluationResultsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteEvaluationResultsCommand = deserializeAws_json1_1DeleteEvaluationResultsCommand;
const deserializeAws_json1_1DeleteEvaluationResultsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchConfigRuleException":
        case "com.amazonaws.configservice#NoSuchConfigRuleException":
            response = {
                ...(await deserializeAws_json1_1NoSuchConfigRuleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.configservice#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteOrganizationConfigRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteOrganizationConfigRuleCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteOrganizationConfigRuleCommand = deserializeAws_json1_1DeleteOrganizationConfigRuleCommand;
const deserializeAws_json1_1DeleteOrganizationConfigRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchOrganizationConfigRuleException":
        case "com.amazonaws.configservice#NoSuchOrganizationConfigRuleException":
            response = {
                ...(await deserializeAws_json1_1NoSuchOrganizationConfigRuleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationAccessDeniedException":
        case "com.amazonaws.configservice#OrganizationAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.configservice#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteOrganizationConformancePackCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteOrganizationConformancePackCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteOrganizationConformancePackCommand = deserializeAws_json1_1DeleteOrganizationConformancePackCommand;
const deserializeAws_json1_1DeleteOrganizationConformancePackCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchOrganizationConformancePackException":
        case "com.amazonaws.configservice#NoSuchOrganizationConformancePackException":
            response = {
                ...(await deserializeAws_json1_1NoSuchOrganizationConformancePackExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationAccessDeniedException":
        case "com.amazonaws.configservice#OrganizationAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.configservice#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeletePendingAggregationRequestCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeletePendingAggregationRequestCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeletePendingAggregationRequestCommand = deserializeAws_json1_1DeletePendingAggregationRequestCommand;
const deserializeAws_json1_1DeletePendingAggregationRequestCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.configservice#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteRemediationConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteRemediationConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteRemediationConfigurationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteRemediationConfigurationCommand = deserializeAws_json1_1DeleteRemediationConfigurationCommand;
const deserializeAws_json1_1DeleteRemediationConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPermissionsException":
        case "com.amazonaws.configservice#InsufficientPermissionsException":
            response = {
                ...(await deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.configservice#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchRemediationConfigurationException":
        case "com.amazonaws.configservice#NoSuchRemediationConfigurationException":
            response = {
                ...(await deserializeAws_json1_1NoSuchRemediationConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RemediationInProgressException":
        case "com.amazonaws.configservice#RemediationInProgressException":
            response = {
                ...(await deserializeAws_json1_1RemediationInProgressExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteRemediationExceptionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteRemediationExceptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteRemediationExceptionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteRemediationExceptionsCommand = deserializeAws_json1_1DeleteRemediationExceptionsCommand;
const deserializeAws_json1_1DeleteRemediationExceptionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchRemediationExceptionException":
        case "com.amazonaws.configservice#NoSuchRemediationExceptionException":
            response = {
                ...(await deserializeAws_json1_1NoSuchRemediationExceptionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteResourceConfigCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteResourceConfigCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteResourceConfigCommand = deserializeAws_json1_1DeleteResourceConfigCommand;
const deserializeAws_json1_1DeleteResourceConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoRunningConfigurationRecorderException":
        case "com.amazonaws.configservice#NoRunningConfigurationRecorderException":
            response = {
                ...(await deserializeAws_json1_1NoRunningConfigurationRecorderExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.configservice#ValidationException":
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
const deserializeAws_json1_1DeleteRetentionConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteRetentionConfigurationCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteRetentionConfigurationCommand = deserializeAws_json1_1DeleteRetentionConfigurationCommand;
const deserializeAws_json1_1DeleteRetentionConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.configservice#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchRetentionConfigurationException":
        case "com.amazonaws.configservice#NoSuchRetentionConfigurationException":
            response = {
                ...(await deserializeAws_json1_1NoSuchRetentionConfigurationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteStoredQueryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteStoredQueryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteStoredQueryResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteStoredQueryCommand = deserializeAws_json1_1DeleteStoredQueryCommand;
const deserializeAws_json1_1DeleteStoredQueryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.configservice#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.configservice#ValidationException":
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
const deserializeAws_json1_1DeliverConfigSnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeliverConfigSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeliverConfigSnapshotResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeliverConfigSnapshotCommand = deserializeAws_json1_1DeliverConfigSnapshotCommand;
const deserializeAws_json1_1DeliverConfigSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoAvailableConfigurationRecorderException":
        case "com.amazonaws.configservice#NoAvailableConfigurationRecorderException":
            response = {
                ...(await deserializeAws_json1_1NoAvailableConfigurationRecorderExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoRunningConfigurationRecorderException":
        case "com.amazonaws.configservice#NoRunningConfigurationRecorderException":
            response = {
                ...(await deserializeAws_json1_1NoRunningConfigurationRecorderExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchDeliveryChannelException":
        case "com.amazonaws.configservice#NoSuchDeliveryChannelException":
            response = {
                ...(await deserializeAws_json1_1NoSuchDeliveryChannelExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeAggregateComplianceByConfigRulesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeAggregateComplianceByConfigRulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAggregateComplianceByConfigRulesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeAggregateComplianceByConfigRulesCommand = deserializeAws_json1_1DescribeAggregateComplianceByConfigRulesCommand;
const deserializeAws_json1_1DescribeAggregateComplianceByConfigRulesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.configservice#InvalidLimitException":
            response = {
                ...(await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.configservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchConfigurationAggregatorException":
        case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException":
            response = {
                ...(await deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.configservice#ValidationException":
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
const deserializeAws_json1_1DescribeAggregateComplianceByConformancePacksCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeAggregateComplianceByConformancePacksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAggregateComplianceByConformancePacksResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeAggregateComplianceByConformancePacksCommand = deserializeAws_json1_1DescribeAggregateComplianceByConformancePacksCommand;
const deserializeAws_json1_1DescribeAggregateComplianceByConformancePacksCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.configservice#InvalidLimitException":
            response = {
                ...(await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.configservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchConfigurationAggregatorException":
        case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException":
            response = {
                ...(await deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.configservice#ValidationException":
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
const deserializeAws_json1_1DescribeAggregationAuthorizationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeAggregationAuthorizationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAggregationAuthorizationsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeAggregationAuthorizationsCommand = deserializeAws_json1_1DescribeAggregationAuthorizationsCommand;
const deserializeAws_json1_1DescribeAggregationAuthorizationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.configservice#InvalidLimitException":
            response = {
                ...(await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.configservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.configservice#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeComplianceByConfigRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeComplianceByConfigRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeComplianceByConfigRuleResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeComplianceByConfigRuleCommand = deserializeAws_json1_1DescribeComplianceByConfigRuleCommand;
const deserializeAws_json1_1DescribeComplianceByConfigRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.configservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.configservice#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchConfigRuleException":
        case "com.amazonaws.configservice#NoSuchConfigRuleException":
            response = {
                ...(await deserializeAws_json1_1NoSuchConfigRuleExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeComplianceByResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeComplianceByResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeComplianceByResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeComplianceByResourceCommand = deserializeAws_json1_1DescribeComplianceByResourceCommand;
const deserializeAws_json1_1DescribeComplianceByResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.configservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.configservice#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeConfigRuleEvaluationStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeConfigRuleEvaluationStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeConfigRuleEvaluationStatusResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeConfigRuleEvaluationStatusCommand = deserializeAws_json1_1DescribeConfigRuleEvaluationStatusCommand;
const deserializeAws_json1_1DescribeConfigRuleEvaluationStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.configservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.configservice#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchConfigRuleException":
        case "com.amazonaws.configservice#NoSuchConfigRuleException":
            response = {
                ...(await deserializeAws_json1_1NoSuchConfigRuleExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeConfigRulesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeConfigRulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeConfigRulesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeConfigRulesCommand = deserializeAws_json1_1DescribeConfigRulesCommand;
const deserializeAws_json1_1DescribeConfigRulesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.configservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchConfigRuleException":
        case "com.amazonaws.configservice#NoSuchConfigRuleException":
            response = {
                ...(await deserializeAws_json1_1NoSuchConfigRuleExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeConfigurationAggregatorsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeConfigurationAggregatorsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeConfigurationAggregatorsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeConfigurationAggregatorsCommand = deserializeAws_json1_1DescribeConfigurationAggregatorsCommand;
const deserializeAws_json1_1DescribeConfigurationAggregatorsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.configservice#InvalidLimitException":
            response = {
                ...(await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.configservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.configservice#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchConfigurationAggregatorException":
        case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException":
            response = {
                ...(await deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusCommand = deserializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusCommand;
const deserializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.configservice#InvalidLimitException":
            response = {
                ...(await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.configservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.configservice#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchConfigurationAggregatorException":
        case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException":
            response = {
                ...(await deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeConfigurationRecordersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeConfigurationRecordersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeConfigurationRecordersResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeConfigurationRecordersCommand = deserializeAws_json1_1DescribeConfigurationRecordersCommand;
const deserializeAws_json1_1DescribeConfigurationRecordersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchConfigurationRecorderException":
        case "com.amazonaws.configservice#NoSuchConfigurationRecorderException":
            response = {
                ...(await deserializeAws_json1_1NoSuchConfigurationRecorderExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeConfigurationRecorderStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeConfigurationRecorderStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeConfigurationRecorderStatusResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeConfigurationRecorderStatusCommand = deserializeAws_json1_1DescribeConfigurationRecorderStatusCommand;
const deserializeAws_json1_1DescribeConfigurationRecorderStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchConfigurationRecorderException":
        case "com.amazonaws.configservice#NoSuchConfigurationRecorderException":
            response = {
                ...(await deserializeAws_json1_1NoSuchConfigurationRecorderExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeConformancePackComplianceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeConformancePackComplianceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeConformancePackComplianceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeConformancePackComplianceCommand = deserializeAws_json1_1DescribeConformancePackComplianceCommand;
const deserializeAws_json1_1DescribeConformancePackComplianceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.configservice#InvalidLimitException":
            response = {
                ...(await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.configservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.configservice#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchConfigRuleInConformancePackException":
        case "com.amazonaws.configservice#NoSuchConfigRuleInConformancePackException":
            response = {
                ...(await deserializeAws_json1_1NoSuchConfigRuleInConformancePackExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchConformancePackException":
        case "com.amazonaws.configservice#NoSuchConformancePackException":
            response = {
                ...(await deserializeAws_json1_1NoSuchConformancePackExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeConformancePacksCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeConformancePacksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeConformancePacksResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeConformancePacksCommand = deserializeAws_json1_1DescribeConformancePacksCommand;
const deserializeAws_json1_1DescribeConformancePacksCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.configservice#InvalidLimitException":
            response = {
                ...(await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.configservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.configservice#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchConformancePackException":
        case "com.amazonaws.configservice#NoSuchConformancePackException":
            response = {
                ...(await deserializeAws_json1_1NoSuchConformancePackExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeConformancePackStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeConformancePackStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeConformancePackStatusResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeConformancePackStatusCommand = deserializeAws_json1_1DescribeConformancePackStatusCommand;
const deserializeAws_json1_1DescribeConformancePackStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.configservice#InvalidLimitException":
            response = {
                ...(await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.configservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.configservice#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeDeliveryChannelsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeDeliveryChannelsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDeliveryChannelsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeDeliveryChannelsCommand = deserializeAws_json1_1DescribeDeliveryChannelsCommand;
const deserializeAws_json1_1DescribeDeliveryChannelsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchDeliveryChannelException":
        case "com.amazonaws.configservice#NoSuchDeliveryChannelException":
            response = {
                ...(await deserializeAws_json1_1NoSuchDeliveryChannelExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeDeliveryChannelStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeDeliveryChannelStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDeliveryChannelStatusResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeDeliveryChannelStatusCommand = deserializeAws_json1_1DescribeDeliveryChannelStatusCommand;
const deserializeAws_json1_1DescribeDeliveryChannelStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchDeliveryChannelException":
        case "com.amazonaws.configservice#NoSuchDeliveryChannelException":
            response = {
                ...(await deserializeAws_json1_1NoSuchDeliveryChannelExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeOrganizationConfigRulesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeOrganizationConfigRulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeOrganizationConfigRulesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeOrganizationConfigRulesCommand = deserializeAws_json1_1DescribeOrganizationConfigRulesCommand;
const deserializeAws_json1_1DescribeOrganizationConfigRulesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.configservice#InvalidLimitException":
            response = {
                ...(await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.configservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchOrganizationConfigRuleException":
        case "com.amazonaws.configservice#NoSuchOrganizationConfigRuleException":
            response = {
                ...(await deserializeAws_json1_1NoSuchOrganizationConfigRuleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationAccessDeniedException":
        case "com.amazonaws.configservice#OrganizationAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeOrganizationConfigRuleStatusesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommand = deserializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommand;
const deserializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.configservice#InvalidLimitException":
            response = {
                ...(await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.configservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchOrganizationConfigRuleException":
        case "com.amazonaws.configservice#NoSuchOrganizationConfigRuleException":
            response = {
                ...(await deserializeAws_json1_1NoSuchOrganizationConfigRuleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationAccessDeniedException":
        case "com.amazonaws.configservice#OrganizationAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeOrganizationConformancePacksCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeOrganizationConformancePacksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeOrganizationConformancePacksResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeOrganizationConformancePacksCommand = deserializeAws_json1_1DescribeOrganizationConformancePacksCommand;
const deserializeAws_json1_1DescribeOrganizationConformancePacksCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.configservice#InvalidLimitException":
            response = {
                ...(await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.configservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchOrganizationConformancePackException":
        case "com.amazonaws.configservice#NoSuchOrganizationConformancePackException":
            response = {
                ...(await deserializeAws_json1_1NoSuchOrganizationConformancePackExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationAccessDeniedException":
        case "com.amazonaws.configservice#OrganizationAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeOrganizationConformancePackStatusesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeOrganizationConformancePackStatusesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeOrganizationConformancePackStatusesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeOrganizationConformancePackStatusesCommand = deserializeAws_json1_1DescribeOrganizationConformancePackStatusesCommand;
const deserializeAws_json1_1DescribeOrganizationConformancePackStatusesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.configservice#InvalidLimitException":
            response = {
                ...(await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.configservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchOrganizationConformancePackException":
        case "com.amazonaws.configservice#NoSuchOrganizationConformancePackException":
            response = {
                ...(await deserializeAws_json1_1NoSuchOrganizationConformancePackExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationAccessDeniedException":
        case "com.amazonaws.configservice#OrganizationAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribePendingAggregationRequestsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribePendingAggregationRequestsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribePendingAggregationRequestsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribePendingAggregationRequestsCommand = deserializeAws_json1_1DescribePendingAggregationRequestsCommand;
const deserializeAws_json1_1DescribePendingAggregationRequestsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.configservice#InvalidLimitException":
            response = {
                ...(await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.configservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.configservice#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeRemediationConfigurationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeRemediationConfigurationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeRemediationConfigurationsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeRemediationConfigurationsCommand = deserializeAws_json1_1DescribeRemediationConfigurationsCommand;
const deserializeAws_json1_1DescribeRemediationConfigurationsCommandError = async (output, context) => {
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
const deserializeAws_json1_1DescribeRemediationExceptionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeRemediationExceptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeRemediationExceptionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeRemediationExceptionsCommand = deserializeAws_json1_1DescribeRemediationExceptionsCommand;
const deserializeAws_json1_1DescribeRemediationExceptionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.configservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.configservice#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeRemediationExecutionStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeRemediationExecutionStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeRemediationExecutionStatusResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeRemediationExecutionStatusCommand = deserializeAws_json1_1DescribeRemediationExecutionStatusCommand;
const deserializeAws_json1_1DescribeRemediationExecutionStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.configservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.configservice#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchRemediationConfigurationException":
        case "com.amazonaws.configservice#NoSuchRemediationConfigurationException":
            response = {
                ...(await deserializeAws_json1_1NoSuchRemediationConfigurationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeRetentionConfigurationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeRetentionConfigurationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeRetentionConfigurationsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeRetentionConfigurationsCommand = deserializeAws_json1_1DescribeRetentionConfigurationsCommand;
const deserializeAws_json1_1DescribeRetentionConfigurationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.configservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.configservice#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchRetentionConfigurationException":
        case "com.amazonaws.configservice#NoSuchRetentionConfigurationException":
            response = {
                ...(await deserializeAws_json1_1NoSuchRetentionConfigurationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleCommand = deserializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleCommand;
const deserializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.configservice#InvalidLimitException":
            response = {
                ...(await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.configservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchConfigurationAggregatorException":
        case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException":
            response = {
                ...(await deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.configservice#ValidationException":
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
const deserializeAws_json1_1GetAggregateConfigRuleComplianceSummaryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetAggregateConfigRuleComplianceSummaryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAggregateConfigRuleComplianceSummaryResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetAggregateConfigRuleComplianceSummaryCommand = deserializeAws_json1_1GetAggregateConfigRuleComplianceSummaryCommand;
const deserializeAws_json1_1GetAggregateConfigRuleComplianceSummaryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.configservice#InvalidLimitException":
            response = {
                ...(await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.configservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchConfigurationAggregatorException":
        case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException":
            response = {
                ...(await deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.configservice#ValidationException":
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
const deserializeAws_json1_1GetAggregateConformancePackComplianceSummaryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetAggregateConformancePackComplianceSummaryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAggregateConformancePackComplianceSummaryResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetAggregateConformancePackComplianceSummaryCommand = deserializeAws_json1_1GetAggregateConformancePackComplianceSummaryCommand;
const deserializeAws_json1_1GetAggregateConformancePackComplianceSummaryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.configservice#InvalidLimitException":
            response = {
                ...(await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.configservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchConfigurationAggregatorException":
        case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException":
            response = {
                ...(await deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.configservice#ValidationException":
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
const deserializeAws_json1_1GetAggregateDiscoveredResourceCountsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetAggregateDiscoveredResourceCountsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAggregateDiscoveredResourceCountsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetAggregateDiscoveredResourceCountsCommand = deserializeAws_json1_1GetAggregateDiscoveredResourceCountsCommand;
const deserializeAws_json1_1GetAggregateDiscoveredResourceCountsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.configservice#InvalidLimitException":
            response = {
                ...(await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.configservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchConfigurationAggregatorException":
        case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException":
            response = {
                ...(await deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.configservice#ValidationException":
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
const deserializeAws_json1_1GetAggregateResourceConfigCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetAggregateResourceConfigCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAggregateResourceConfigResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetAggregateResourceConfigCommand = deserializeAws_json1_1GetAggregateResourceConfigCommand;
const deserializeAws_json1_1GetAggregateResourceConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchConfigurationAggregatorException":
        case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException":
            response = {
                ...(await deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OversizedConfigurationItemException":
        case "com.amazonaws.configservice#OversizedConfigurationItemException":
            response = {
                ...(await deserializeAws_json1_1OversizedConfigurationItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotDiscoveredException":
        case "com.amazonaws.configservice#ResourceNotDiscoveredException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotDiscoveredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.configservice#ValidationException":
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
const deserializeAws_json1_1GetComplianceDetailsByConfigRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetComplianceDetailsByConfigRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetComplianceDetailsByConfigRuleResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetComplianceDetailsByConfigRuleCommand = deserializeAws_json1_1GetComplianceDetailsByConfigRuleCommand;
const deserializeAws_json1_1GetComplianceDetailsByConfigRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.configservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.configservice#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchConfigRuleException":
        case "com.amazonaws.configservice#NoSuchConfigRuleException":
            response = {
                ...(await deserializeAws_json1_1NoSuchConfigRuleExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetComplianceDetailsByResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetComplianceDetailsByResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetComplianceDetailsByResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetComplianceDetailsByResourceCommand = deserializeAws_json1_1GetComplianceDetailsByResourceCommand;
const deserializeAws_json1_1GetComplianceDetailsByResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.configservice#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetComplianceSummaryByConfigRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetComplianceSummaryByConfigRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetComplianceSummaryByConfigRuleResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetComplianceSummaryByConfigRuleCommand = deserializeAws_json1_1GetComplianceSummaryByConfigRuleCommand;
const deserializeAws_json1_1GetComplianceSummaryByConfigRuleCommandError = async (output, context) => {
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
const deserializeAws_json1_1GetComplianceSummaryByResourceTypeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetComplianceSummaryByResourceTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetComplianceSummaryByResourceTypeResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetComplianceSummaryByResourceTypeCommand = deserializeAws_json1_1GetComplianceSummaryByResourceTypeCommand;
const deserializeAws_json1_1GetComplianceSummaryByResourceTypeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.configservice#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetConformancePackComplianceDetailsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetConformancePackComplianceDetailsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetConformancePackComplianceDetailsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetConformancePackComplianceDetailsCommand = deserializeAws_json1_1GetConformancePackComplianceDetailsCommand;
const deserializeAws_json1_1GetConformancePackComplianceDetailsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.configservice#InvalidLimitException":
            response = {
                ...(await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.configservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.configservice#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchConfigRuleInConformancePackException":
        case "com.amazonaws.configservice#NoSuchConfigRuleInConformancePackException":
            response = {
                ...(await deserializeAws_json1_1NoSuchConfigRuleInConformancePackExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchConformancePackException":
        case "com.amazonaws.configservice#NoSuchConformancePackException":
            response = {
                ...(await deserializeAws_json1_1NoSuchConformancePackExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetConformancePackComplianceSummaryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetConformancePackComplianceSummaryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetConformancePackComplianceSummaryResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetConformancePackComplianceSummaryCommand = deserializeAws_json1_1GetConformancePackComplianceSummaryCommand;
const deserializeAws_json1_1GetConformancePackComplianceSummaryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.configservice#InvalidLimitException":
            response = {
                ...(await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.configservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchConformancePackException":
        case "com.amazonaws.configservice#NoSuchConformancePackException":
            response = {
                ...(await deserializeAws_json1_1NoSuchConformancePackExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetDiscoveredResourceCountsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDiscoveredResourceCountsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDiscoveredResourceCountsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDiscoveredResourceCountsCommand = deserializeAws_json1_1GetDiscoveredResourceCountsCommand;
const deserializeAws_json1_1GetDiscoveredResourceCountsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.configservice#InvalidLimitException":
            response = {
                ...(await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.configservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.configservice#ValidationException":
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
const deserializeAws_json1_1GetOrganizationConfigRuleDetailedStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetOrganizationConfigRuleDetailedStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetOrganizationConfigRuleDetailedStatusResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetOrganizationConfigRuleDetailedStatusCommand = deserializeAws_json1_1GetOrganizationConfigRuleDetailedStatusCommand;
const deserializeAws_json1_1GetOrganizationConfigRuleDetailedStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.configservice#InvalidLimitException":
            response = {
                ...(await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.configservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchOrganizationConfigRuleException":
        case "com.amazonaws.configservice#NoSuchOrganizationConfigRuleException":
            response = {
                ...(await deserializeAws_json1_1NoSuchOrganizationConfigRuleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationAccessDeniedException":
        case "com.amazonaws.configservice#OrganizationAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetOrganizationConformancePackDetailedStatusResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommand = deserializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommand;
const deserializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.configservice#InvalidLimitException":
            response = {
                ...(await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.configservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchOrganizationConformancePackException":
        case "com.amazonaws.configservice#NoSuchOrganizationConformancePackException":
            response = {
                ...(await deserializeAws_json1_1NoSuchOrganizationConformancePackExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationAccessDeniedException":
        case "com.amazonaws.configservice#OrganizationAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetResourceConfigHistoryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetResourceConfigHistoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetResourceConfigHistoryResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetResourceConfigHistoryCommand = deserializeAws_json1_1GetResourceConfigHistoryCommand;
const deserializeAws_json1_1GetResourceConfigHistoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.configservice#InvalidLimitException":
            response = {
                ...(await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.configservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTimeRangeException":
        case "com.amazonaws.configservice#InvalidTimeRangeException":
            response = {
                ...(await deserializeAws_json1_1InvalidTimeRangeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoAvailableConfigurationRecorderException":
        case "com.amazonaws.configservice#NoAvailableConfigurationRecorderException":
            response = {
                ...(await deserializeAws_json1_1NoAvailableConfigurationRecorderExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotDiscoveredException":
        case "com.amazonaws.configservice#ResourceNotDiscoveredException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotDiscoveredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.configservice#ValidationException":
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
const deserializeAws_json1_1GetStoredQueryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetStoredQueryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetStoredQueryResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetStoredQueryCommand = deserializeAws_json1_1GetStoredQueryCommand;
const deserializeAws_json1_1GetStoredQueryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.configservice#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.configservice#ValidationException":
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
const deserializeAws_json1_1ListAggregateDiscoveredResourcesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListAggregateDiscoveredResourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAggregateDiscoveredResourcesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListAggregateDiscoveredResourcesCommand = deserializeAws_json1_1ListAggregateDiscoveredResourcesCommand;
const deserializeAws_json1_1ListAggregateDiscoveredResourcesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.configservice#InvalidLimitException":
            response = {
                ...(await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.configservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchConfigurationAggregatorException":
        case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException":
            response = {
                ...(await deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.configservice#ValidationException":
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
const deserializeAws_json1_1ListDiscoveredResourcesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListDiscoveredResourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDiscoveredResourcesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListDiscoveredResourcesCommand = deserializeAws_json1_1ListDiscoveredResourcesCommand;
const deserializeAws_json1_1ListDiscoveredResourcesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidLimitException":
        case "com.amazonaws.configservice#InvalidLimitException":
            response = {
                ...(await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.configservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoAvailableConfigurationRecorderException":
        case "com.amazonaws.configservice#NoAvailableConfigurationRecorderException":
            response = {
                ...(await deserializeAws_json1_1NoAvailableConfigurationRecorderExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.configservice#ValidationException":
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
const deserializeAws_json1_1ListStoredQueriesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListStoredQueriesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListStoredQueriesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListStoredQueriesCommand = deserializeAws_json1_1ListStoredQueriesCommand;
const deserializeAws_json1_1ListStoredQueriesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.configservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.configservice#ValidationException":
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
        case "InvalidLimitException":
        case "com.amazonaws.configservice#InvalidLimitException":
            response = {
                ...(await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.configservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.configservice#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.configservice#ValidationException":
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
const deserializeAws_json1_1PutAggregationAuthorizationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutAggregationAuthorizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutAggregationAuthorizationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutAggregationAuthorizationCommand = deserializeAws_json1_1PutAggregationAuthorizationCommand;
const deserializeAws_json1_1PutAggregationAuthorizationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.configservice#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PutConfigRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutConfigRuleCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutConfigRuleCommand = deserializeAws_json1_1PutConfigRuleCommand;
const deserializeAws_json1_1PutConfigRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPermissionsException":
        case "com.amazonaws.configservice#InsufficientPermissionsException":
            response = {
                ...(await deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.configservice#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaxNumberOfConfigRulesExceededException":
        case "com.amazonaws.configservice#MaxNumberOfConfigRulesExceededException":
            response = {
                ...(await deserializeAws_json1_1MaxNumberOfConfigRulesExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoAvailableConfigurationRecorderException":
        case "com.amazonaws.configservice#NoAvailableConfigurationRecorderException":
            response = {
                ...(await deserializeAws_json1_1NoAvailableConfigurationRecorderExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.configservice#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PutConfigurationAggregatorCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutConfigurationAggregatorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutConfigurationAggregatorResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutConfigurationAggregatorCommand = deserializeAws_json1_1PutConfigurationAggregatorCommand;
const deserializeAws_json1_1PutConfigurationAggregatorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.configservice#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRoleException":
        case "com.amazonaws.configservice#InvalidRoleException":
            response = {
                ...(await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.configservice#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoAvailableOrganizationException":
        case "com.amazonaws.configservice#NoAvailableOrganizationException":
            response = {
                ...(await deserializeAws_json1_1NoAvailableOrganizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationAccessDeniedException":
        case "com.amazonaws.configservice#OrganizationAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationAllFeaturesNotEnabledException":
        case "com.amazonaws.configservice#OrganizationAllFeaturesNotEnabledException":
            response = {
                ...(await deserializeAws_json1_1OrganizationAllFeaturesNotEnabledExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PutConfigurationRecorderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutConfigurationRecorderCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutConfigurationRecorderCommand = deserializeAws_json1_1PutConfigurationRecorderCommand;
const deserializeAws_json1_1PutConfigurationRecorderCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidConfigurationRecorderNameException":
        case "com.amazonaws.configservice#InvalidConfigurationRecorderNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidConfigurationRecorderNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRecordingGroupException":
        case "com.amazonaws.configservice#InvalidRecordingGroupException":
            response = {
                ...(await deserializeAws_json1_1InvalidRecordingGroupExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRoleException":
        case "com.amazonaws.configservice#InvalidRoleException":
            response = {
                ...(await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaxNumberOfConfigurationRecordersExceededException":
        case "com.amazonaws.configservice#MaxNumberOfConfigurationRecordersExceededException":
            response = {
                ...(await deserializeAws_json1_1MaxNumberOfConfigurationRecordersExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PutConformancePackCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutConformancePackCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutConformancePackResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutConformancePackCommand = deserializeAws_json1_1PutConformancePackCommand;
const deserializeAws_json1_1PutConformancePackCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConformancePackTemplateValidationException":
        case "com.amazonaws.configservice#ConformancePackTemplateValidationException":
            response = {
                ...(await deserializeAws_json1_1ConformancePackTemplateValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientPermissionsException":
        case "com.amazonaws.configservice#InsufficientPermissionsException":
            response = {
                ...(await deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.configservice#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaxNumberOfConformancePacksExceededException":
        case "com.amazonaws.configservice#MaxNumberOfConformancePacksExceededException":
            response = {
                ...(await deserializeAws_json1_1MaxNumberOfConformancePacksExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.configservice#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PutDeliveryChannelCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutDeliveryChannelCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutDeliveryChannelCommand = deserializeAws_json1_1PutDeliveryChannelCommand;
const deserializeAws_json1_1PutDeliveryChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientDeliveryPolicyException":
        case "com.amazonaws.configservice#InsufficientDeliveryPolicyException":
            response = {
                ...(await deserializeAws_json1_1InsufficientDeliveryPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeliveryChannelNameException":
        case "com.amazonaws.configservice#InvalidDeliveryChannelNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidDeliveryChannelNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidS3KeyPrefixException":
        case "com.amazonaws.configservice#InvalidS3KeyPrefixException":
            response = {
                ...(await deserializeAws_json1_1InvalidS3KeyPrefixExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidS3KmsKeyArnException":
        case "com.amazonaws.configservice#InvalidS3KmsKeyArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidS3KmsKeyArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSNSTopicARNException":
        case "com.amazonaws.configservice#InvalidSNSTopicARNException":
            response = {
                ...(await deserializeAws_json1_1InvalidSNSTopicARNExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaxNumberOfDeliveryChannelsExceededException":
        case "com.amazonaws.configservice#MaxNumberOfDeliveryChannelsExceededException":
            response = {
                ...(await deserializeAws_json1_1MaxNumberOfDeliveryChannelsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoAvailableConfigurationRecorderException":
        case "com.amazonaws.configservice#NoAvailableConfigurationRecorderException":
            response = {
                ...(await deserializeAws_json1_1NoAvailableConfigurationRecorderExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchBucketException":
        case "com.amazonaws.configservice#NoSuchBucketException":
            response = {
                ...(await deserializeAws_json1_1NoSuchBucketExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PutEvaluationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutEvaluationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutEvaluationsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutEvaluationsCommand = deserializeAws_json1_1PutEvaluationsCommand;
const deserializeAws_json1_1PutEvaluationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.configservice#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResultTokenException":
        case "com.amazonaws.configservice#InvalidResultTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidResultTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchConfigRuleException":
        case "com.amazonaws.configservice#NoSuchConfigRuleException":
            response = {
                ...(await deserializeAws_json1_1NoSuchConfigRuleExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PutExternalEvaluationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutExternalEvaluationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutExternalEvaluationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutExternalEvaluationCommand = deserializeAws_json1_1PutExternalEvaluationCommand;
const deserializeAws_json1_1PutExternalEvaluationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.configservice#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchConfigRuleException":
        case "com.amazonaws.configservice#NoSuchConfigRuleException":
            response = {
                ...(await deserializeAws_json1_1NoSuchConfigRuleExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PutOrganizationConfigRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutOrganizationConfigRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutOrganizationConfigRuleResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutOrganizationConfigRuleCommand = deserializeAws_json1_1PutOrganizationConfigRuleCommand;
const deserializeAws_json1_1PutOrganizationConfigRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPermissionsException":
        case "com.amazonaws.configservice#InsufficientPermissionsException":
            response = {
                ...(await deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.configservice#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaxNumberOfOrganizationConfigRulesExceededException":
        case "com.amazonaws.configservice#MaxNumberOfOrganizationConfigRulesExceededException":
            response = {
                ...(await deserializeAws_json1_1MaxNumberOfOrganizationConfigRulesExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoAvailableOrganizationException":
        case "com.amazonaws.configservice#NoAvailableOrganizationException":
            response = {
                ...(await deserializeAws_json1_1NoAvailableOrganizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationAccessDeniedException":
        case "com.amazonaws.configservice#OrganizationAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationAllFeaturesNotEnabledException":
        case "com.amazonaws.configservice#OrganizationAllFeaturesNotEnabledException":
            response = {
                ...(await deserializeAws_json1_1OrganizationAllFeaturesNotEnabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.configservice#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.configservice#ValidationException":
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
const deserializeAws_json1_1PutOrganizationConformancePackCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutOrganizationConformancePackCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutOrganizationConformancePackResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutOrganizationConformancePackCommand = deserializeAws_json1_1PutOrganizationConformancePackCommand;
const deserializeAws_json1_1PutOrganizationConformancePackCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPermissionsException":
        case "com.amazonaws.configservice#InsufficientPermissionsException":
            response = {
                ...(await deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaxNumberOfOrganizationConformancePacksExceededException":
        case "com.amazonaws.configservice#MaxNumberOfOrganizationConformancePacksExceededException":
            response = {
                ...(await deserializeAws_json1_1MaxNumberOfOrganizationConformancePacksExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoAvailableOrganizationException":
        case "com.amazonaws.configservice#NoAvailableOrganizationException":
            response = {
                ...(await deserializeAws_json1_1NoAvailableOrganizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationAccessDeniedException":
        case "com.amazonaws.configservice#OrganizationAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationAllFeaturesNotEnabledException":
        case "com.amazonaws.configservice#OrganizationAllFeaturesNotEnabledException":
            response = {
                ...(await deserializeAws_json1_1OrganizationAllFeaturesNotEnabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationConformancePackTemplateValidationException":
        case "com.amazonaws.configservice#OrganizationConformancePackTemplateValidationException":
            response = {
                ...(await deserializeAws_json1_1OrganizationConformancePackTemplateValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.configservice#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.configservice#ValidationException":
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
const deserializeAws_json1_1PutRemediationConfigurationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutRemediationConfigurationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutRemediationConfigurationsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutRemediationConfigurationsCommand = deserializeAws_json1_1PutRemediationConfigurationsCommand;
const deserializeAws_json1_1PutRemediationConfigurationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPermissionsException":
        case "com.amazonaws.configservice#InsufficientPermissionsException":
            response = {
                ...(await deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.configservice#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PutRemediationExceptionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutRemediationExceptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutRemediationExceptionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutRemediationExceptionsCommand = deserializeAws_json1_1PutRemediationExceptionsCommand;
const deserializeAws_json1_1PutRemediationExceptionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPermissionsException":
        case "com.amazonaws.configservice#InsufficientPermissionsException":
            response = {
                ...(await deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.configservice#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PutResourceConfigCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutResourceConfigCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutResourceConfigCommand = deserializeAws_json1_1PutResourceConfigCommand;
const deserializeAws_json1_1PutResourceConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPermissionsException":
        case "com.amazonaws.configservice#InsufficientPermissionsException":
            response = {
                ...(await deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaxActiveResourcesExceededException":
        case "com.amazonaws.configservice#MaxActiveResourcesExceededException":
            response = {
                ...(await deserializeAws_json1_1MaxActiveResourcesExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoRunningConfigurationRecorderException":
        case "com.amazonaws.configservice#NoRunningConfigurationRecorderException":
            response = {
                ...(await deserializeAws_json1_1NoRunningConfigurationRecorderExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.configservice#ValidationException":
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
const deserializeAws_json1_1PutRetentionConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutRetentionConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutRetentionConfigurationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutRetentionConfigurationCommand = deserializeAws_json1_1PutRetentionConfigurationCommand;
const deserializeAws_json1_1PutRetentionConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.configservice#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaxNumberOfRetentionConfigurationsExceededException":
        case "com.amazonaws.configservice#MaxNumberOfRetentionConfigurationsExceededException":
            response = {
                ...(await deserializeAws_json1_1MaxNumberOfRetentionConfigurationsExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PutStoredQueryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutStoredQueryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutStoredQueryResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutStoredQueryCommand = deserializeAws_json1_1PutStoredQueryCommand;
const deserializeAws_json1_1PutStoredQueryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceConcurrentModificationException":
        case "com.amazonaws.configservice#ResourceConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ResourceConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.configservice#TooManyTagsException":
            response = {
                ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.configservice#ValidationException":
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
const deserializeAws_json1_1SelectAggregateResourceConfigCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SelectAggregateResourceConfigCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SelectAggregateResourceConfigResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SelectAggregateResourceConfigCommand = deserializeAws_json1_1SelectAggregateResourceConfigCommand;
const deserializeAws_json1_1SelectAggregateResourceConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidExpressionException":
        case "com.amazonaws.configservice#InvalidExpressionException":
            response = {
                ...(await deserializeAws_json1_1InvalidExpressionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidLimitException":
        case "com.amazonaws.configservice#InvalidLimitException":
            response = {
                ...(await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.configservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchConfigurationAggregatorException":
        case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException":
            response = {
                ...(await deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1SelectResourceConfigCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SelectResourceConfigCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SelectResourceConfigResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SelectResourceConfigCommand = deserializeAws_json1_1SelectResourceConfigCommand;
const deserializeAws_json1_1SelectResourceConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidExpressionException":
        case "com.amazonaws.configservice#InvalidExpressionException":
            response = {
                ...(await deserializeAws_json1_1InvalidExpressionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidLimitException":
        case "com.amazonaws.configservice#InvalidLimitException":
            response = {
                ...(await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.configservice#InvalidNextTokenException":
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
const deserializeAws_json1_1StartConfigRulesEvaluationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartConfigRulesEvaluationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartConfigRulesEvaluationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartConfigRulesEvaluationCommand = deserializeAws_json1_1StartConfigRulesEvaluationCommand;
const deserializeAws_json1_1StartConfigRulesEvaluationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.configservice#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.configservice#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchConfigRuleException":
        case "com.amazonaws.configservice#NoSuchConfigRuleException":
            response = {
                ...(await deserializeAws_json1_1NoSuchConfigRuleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.configservice#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartConfigurationRecorderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartConfigurationRecorderCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartConfigurationRecorderCommand = deserializeAws_json1_1StartConfigurationRecorderCommand;
const deserializeAws_json1_1StartConfigurationRecorderCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoAvailableDeliveryChannelException":
        case "com.amazonaws.configservice#NoAvailableDeliveryChannelException":
            response = {
                ...(await deserializeAws_json1_1NoAvailableDeliveryChannelExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchConfigurationRecorderException":
        case "com.amazonaws.configservice#NoSuchConfigurationRecorderException":
            response = {
                ...(await deserializeAws_json1_1NoSuchConfigurationRecorderExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartRemediationExecutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartRemediationExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartRemediationExecutionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartRemediationExecutionCommand = deserializeAws_json1_1StartRemediationExecutionCommand;
const deserializeAws_json1_1StartRemediationExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPermissionsException":
        case "com.amazonaws.configservice#InsufficientPermissionsException":
            response = {
                ...(await deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.configservice#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchRemediationConfigurationException":
        case "com.amazonaws.configservice#NoSuchRemediationConfigurationException":
            response = {
                ...(await deserializeAws_json1_1NoSuchRemediationConfigurationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StopConfigurationRecorderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopConfigurationRecorderCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopConfigurationRecorderCommand = deserializeAws_json1_1StopConfigurationRecorderCommand;
const deserializeAws_json1_1StopConfigurationRecorderCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchConfigurationRecorderException":
        case "com.amazonaws.configservice#NoSuchConfigurationRecorderException":
            response = {
                ...(await deserializeAws_json1_1NoSuchConfigurationRecorderExceptionResponse(parsedOutput, context)),
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
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
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
        case "ResourceNotFoundException":
        case "com.amazonaws.configservice#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.configservice#TooManyTagsException":
            response = {
                ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.configservice#ValidationException":
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
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
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
        case "ResourceNotFoundException":
        case "com.amazonaws.configservice#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.configservice#ValidationException":
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
const deserializeAws_json1_1ConformancePackTemplateValidationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConformancePackTemplateValidationException(body, context);
    const contents = {
        name: "ConformancePackTemplateValidationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InsufficientDeliveryPolicyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InsufficientDeliveryPolicyException(body, context);
    const contents = {
        name: "InsufficientDeliveryPolicyException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InsufficientPermissionsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InsufficientPermissionsException(body, context);
    const contents = {
        name: "InsufficientPermissionsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidConfigurationRecorderNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidConfigurationRecorderNameException(body, context);
    const contents = {
        name: "InvalidConfigurationRecorderNameException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidDeliveryChannelNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDeliveryChannelNameException(body, context);
    const contents = {
        name: "InvalidDeliveryChannelNameException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidExpressionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidExpressionException(body, context);
    const contents = {
        name: "InvalidExpressionException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidLimitExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidLimitException(body, context);
    const contents = {
        name: "InvalidLimitException",
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
const deserializeAws_json1_1InvalidParameterValueExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterValueException(body, context);
    const contents = {
        name: "InvalidParameterValueException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidRecordingGroupExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRecordingGroupException(body, context);
    const contents = {
        name: "InvalidRecordingGroupException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidResultTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidResultTokenException(body, context);
    const contents = {
        name: "InvalidResultTokenException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidRoleExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRoleException(body, context);
    const contents = {
        name: "InvalidRoleException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidS3KeyPrefixExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidS3KeyPrefixException(body, context);
    const contents = {
        name: "InvalidS3KeyPrefixException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidS3KmsKeyArnExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidS3KmsKeyArnException(body, context);
    const contents = {
        name: "InvalidS3KmsKeyArnException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidSNSTopicARNExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidSNSTopicARNException(body, context);
    const contents = {
        name: "InvalidSNSTopicARNException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidTimeRangeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTimeRangeException(body, context);
    const contents = {
        name: "InvalidTimeRangeException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1LastDeliveryChannelDeleteFailedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LastDeliveryChannelDeleteFailedException(body, context);
    const contents = {
        name: "LastDeliveryChannelDeleteFailedException",
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
const deserializeAws_json1_1MaxActiveResourcesExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MaxActiveResourcesExceededException(body, context);
    const contents = {
        name: "MaxActiveResourcesExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1MaxNumberOfConfigRulesExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MaxNumberOfConfigRulesExceededException(body, context);
    const contents = {
        name: "MaxNumberOfConfigRulesExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1MaxNumberOfConfigurationRecordersExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MaxNumberOfConfigurationRecordersExceededException(body, context);
    const contents = {
        name: "MaxNumberOfConfigurationRecordersExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1MaxNumberOfConformancePacksExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MaxNumberOfConformancePacksExceededException(body, context);
    const contents = {
        name: "MaxNumberOfConformancePacksExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1MaxNumberOfDeliveryChannelsExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MaxNumberOfDeliveryChannelsExceededException(body, context);
    const contents = {
        name: "MaxNumberOfDeliveryChannelsExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1MaxNumberOfOrganizationConfigRulesExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MaxNumberOfOrganizationConfigRulesExceededException(body, context);
    const contents = {
        name: "MaxNumberOfOrganizationConfigRulesExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1MaxNumberOfOrganizationConformancePacksExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MaxNumberOfOrganizationConformancePacksExceededException(body, context);
    const contents = {
        name: "MaxNumberOfOrganizationConformancePacksExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1MaxNumberOfRetentionConfigurationsExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MaxNumberOfRetentionConfigurationsExceededException(body, context);
    const contents = {
        name: "MaxNumberOfRetentionConfigurationsExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NoAvailableConfigurationRecorderExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoAvailableConfigurationRecorderException(body, context);
    const contents = {
        name: "NoAvailableConfigurationRecorderException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NoAvailableDeliveryChannelExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoAvailableDeliveryChannelException(body, context);
    const contents = {
        name: "NoAvailableDeliveryChannelException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NoAvailableOrganizationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoAvailableOrganizationException(body, context);
    const contents = {
        name: "NoAvailableOrganizationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NoRunningConfigurationRecorderExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoRunningConfigurationRecorderException(body, context);
    const contents = {
        name: "NoRunningConfigurationRecorderException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NoSuchBucketExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoSuchBucketException(body, context);
    const contents = {
        name: "NoSuchBucketException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NoSuchConfigRuleExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoSuchConfigRuleException(body, context);
    const contents = {
        name: "NoSuchConfigRuleException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NoSuchConfigRuleInConformancePackExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoSuchConfigRuleInConformancePackException(body, context);
    const contents = {
        name: "NoSuchConfigRuleInConformancePackException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoSuchConfigurationAggregatorException(body, context);
    const contents = {
        name: "NoSuchConfigurationAggregatorException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NoSuchConfigurationRecorderExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoSuchConfigurationRecorderException(body, context);
    const contents = {
        name: "NoSuchConfigurationRecorderException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NoSuchConformancePackExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoSuchConformancePackException(body, context);
    const contents = {
        name: "NoSuchConformancePackException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NoSuchDeliveryChannelExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoSuchDeliveryChannelException(body, context);
    const contents = {
        name: "NoSuchDeliveryChannelException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NoSuchOrganizationConfigRuleExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoSuchOrganizationConfigRuleException(body, context);
    const contents = {
        name: "NoSuchOrganizationConfigRuleException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NoSuchOrganizationConformancePackExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoSuchOrganizationConformancePackException(body, context);
    const contents = {
        name: "NoSuchOrganizationConformancePackException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NoSuchRemediationConfigurationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoSuchRemediationConfigurationException(body, context);
    const contents = {
        name: "NoSuchRemediationConfigurationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NoSuchRemediationExceptionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoSuchRemediationExceptionException(body, context);
    const contents = {
        name: "NoSuchRemediationExceptionException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NoSuchRetentionConfigurationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoSuchRetentionConfigurationException(body, context);
    const contents = {
        name: "NoSuchRetentionConfigurationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OrganizationAccessDeniedException(body, context);
    const contents = {
        name: "OrganizationAccessDeniedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OrganizationAllFeaturesNotEnabledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OrganizationAllFeaturesNotEnabledException(body, context);
    const contents = {
        name: "OrganizationAllFeaturesNotEnabledException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OrganizationConformancePackTemplateValidationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OrganizationConformancePackTemplateValidationException(body, context);
    const contents = {
        name: "OrganizationConformancePackTemplateValidationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OversizedConfigurationItemExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OversizedConfigurationItemException(body, context);
    const contents = {
        name: "OversizedConfigurationItemException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1RemediationInProgressExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RemediationInProgressException(body, context);
    const contents = {
        name: "RemediationInProgressException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceConcurrentModificationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceConcurrentModificationException(body, context);
    const contents = {
        name: "ResourceConcurrentModificationException",
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
const deserializeAws_json1_1ResourceNotDiscoveredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotDiscoveredException(body, context);
    const contents = {
        name: "ResourceNotDiscoveredException",
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
const deserializeAws_json1_1TooManyTagsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyTagsException(body, context);
    const contents = {
        name: "TooManyTagsException",
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
const serializeAws_json1_1AccountAggregationSource = (input, context) => {
    return {
        ...(input.AccountIds !== undefined &&
            input.AccountIds !== null && {
            AccountIds: serializeAws_json1_1AccountAggregationSourceAccountList(input.AccountIds, context),
        }),
        ...(input.AllAwsRegions !== undefined && input.AllAwsRegions !== null && { AllAwsRegions: input.AllAwsRegions }),
        ...(input.AwsRegions !== undefined &&
            input.AwsRegions !== null && { AwsRegions: serializeAws_json1_1AggregatorRegionList(input.AwsRegions, context) }),
    };
};
const serializeAws_json1_1AccountAggregationSourceAccountList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1AccountAggregationSourceList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1AccountAggregationSource(entry, context);
    });
};
const serializeAws_json1_1AggregateConformancePackComplianceFilters = (input, context) => {
    return {
        ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
        ...(input.AwsRegion !== undefined && input.AwsRegion !== null && { AwsRegion: input.AwsRegion }),
        ...(input.ComplianceType !== undefined &&
            input.ComplianceType !== null && { ComplianceType: input.ComplianceType }),
        ...(input.ConformancePackName !== undefined &&
            input.ConformancePackName !== null && { ConformancePackName: input.ConformancePackName }),
    };
};
const serializeAws_json1_1AggregateConformancePackComplianceSummaryFilters = (input, context) => {
    return {
        ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
        ...(input.AwsRegion !== undefined && input.AwsRegion !== null && { AwsRegion: input.AwsRegion }),
    };
};
const serializeAws_json1_1AggregatedSourceStatusTypeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1AggregateResourceIdentifier = (input, context) => {
    return {
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
        ...(input.ResourceName !== undefined && input.ResourceName !== null && { ResourceName: input.ResourceName }),
        ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
        ...(input.SourceAccountId !== undefined &&
            input.SourceAccountId !== null && { SourceAccountId: input.SourceAccountId }),
        ...(input.SourceRegion !== undefined && input.SourceRegion !== null && { SourceRegion: input.SourceRegion }),
    };
};
const serializeAws_json1_1AggregatorRegionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1BatchGetAggregateResourceConfigRequest = (input, context) => {
    return {
        ...(input.ConfigurationAggregatorName !== undefined &&
            input.ConfigurationAggregatorName !== null && { ConfigurationAggregatorName: input.ConfigurationAggregatorName }),
        ...(input.ResourceIdentifiers !== undefined &&
            input.ResourceIdentifiers !== null && {
            ResourceIdentifiers: serializeAws_json1_1ResourceIdentifiersList(input.ResourceIdentifiers, context),
        }),
    };
};
const serializeAws_json1_1BatchGetResourceConfigRequest = (input, context) => {
    return {
        ...(input.resourceKeys !== undefined &&
            input.resourceKeys !== null && { resourceKeys: serializeAws_json1_1ResourceKeys(input.resourceKeys, context) }),
    };
};
const serializeAws_json1_1ComplianceResourceTypes = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ComplianceTypes = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ConfigRule = (input, context) => {
    return {
        ...(input.ConfigRuleArn !== undefined && input.ConfigRuleArn !== null && { ConfigRuleArn: input.ConfigRuleArn }),
        ...(input.ConfigRuleId !== undefined && input.ConfigRuleId !== null && { ConfigRuleId: input.ConfigRuleId }),
        ...(input.ConfigRuleName !== undefined &&
            input.ConfigRuleName !== null && { ConfigRuleName: input.ConfigRuleName }),
        ...(input.ConfigRuleState !== undefined &&
            input.ConfigRuleState !== null && { ConfigRuleState: input.ConfigRuleState }),
        ...(input.CreatedBy !== undefined && input.CreatedBy !== null && { CreatedBy: input.CreatedBy }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.InputParameters !== undefined &&
            input.InputParameters !== null && { InputParameters: input.InputParameters }),
        ...(input.MaximumExecutionFrequency !== undefined &&
            input.MaximumExecutionFrequency !== null && { MaximumExecutionFrequency: input.MaximumExecutionFrequency }),
        ...(input.Scope !== undefined &&
            input.Scope !== null && { Scope: serializeAws_json1_1Scope(input.Scope, context) }),
        ...(input.Source !== undefined &&
            input.Source !== null && { Source: serializeAws_json1_1Source(input.Source, context) }),
    };
};
const serializeAws_json1_1ConfigRuleComplianceFilters = (input, context) => {
    return {
        ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
        ...(input.AwsRegion !== undefined && input.AwsRegion !== null && { AwsRegion: input.AwsRegion }),
        ...(input.ComplianceType !== undefined &&
            input.ComplianceType !== null && { ComplianceType: input.ComplianceType }),
        ...(input.ConfigRuleName !== undefined &&
            input.ConfigRuleName !== null && { ConfigRuleName: input.ConfigRuleName }),
    };
};
const serializeAws_json1_1ConfigRuleComplianceSummaryFilters = (input, context) => {
    return {
        ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
        ...(input.AwsRegion !== undefined && input.AwsRegion !== null && { AwsRegion: input.AwsRegion }),
    };
};
const serializeAws_json1_1ConfigRuleNames = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ConfigSnapshotDeliveryProperties = (input, context) => {
    return {
        ...(input.deliveryFrequency !== undefined &&
            input.deliveryFrequency !== null && { deliveryFrequency: input.deliveryFrequency }),
    };
};
const serializeAws_json1_1ConfigurationAggregatorNameList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ConfigurationRecorder = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.recordingGroup !== undefined &&
            input.recordingGroup !== null && {
            recordingGroup: serializeAws_json1_1RecordingGroup(input.recordingGroup, context),
        }),
        ...(input.roleARN !== undefined && input.roleARN !== null && { roleARN: input.roleARN }),
    };
};
const serializeAws_json1_1ConfigurationRecorderNameList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ConformancePackComplianceFilters = (input, context) => {
    return {
        ...(input.ComplianceType !== undefined &&
            input.ComplianceType !== null && { ComplianceType: input.ComplianceType }),
        ...(input.ConfigRuleNames !== undefined &&
            input.ConfigRuleNames !== null && {
            ConfigRuleNames: serializeAws_json1_1ConformancePackConfigRuleNames(input.ConfigRuleNames, context),
        }),
    };
};
const serializeAws_json1_1ConformancePackComplianceResourceIds = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ConformancePackConfigRuleNames = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ConformancePackEvaluationFilters = (input, context) => {
    return {
        ...(input.ComplianceType !== undefined &&
            input.ComplianceType !== null && { ComplianceType: input.ComplianceType }),
        ...(input.ConfigRuleNames !== undefined &&
            input.ConfigRuleNames !== null && {
            ConfigRuleNames: serializeAws_json1_1ConformancePackConfigRuleNames(input.ConfigRuleNames, context),
        }),
        ...(input.ResourceIds !== undefined &&
            input.ResourceIds !== null && {
            ResourceIds: serializeAws_json1_1ConformancePackComplianceResourceIds(input.ResourceIds, context),
        }),
        ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
    };
};
const serializeAws_json1_1ConformancePackInputParameter = (input, context) => {
    return {
        ...(input.ParameterName !== undefined && input.ParameterName !== null && { ParameterName: input.ParameterName }),
        ...(input.ParameterValue !== undefined &&
            input.ParameterValue !== null && { ParameterValue: input.ParameterValue }),
    };
};
const serializeAws_json1_1ConformancePackInputParameters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ConformancePackInputParameter(entry, context);
    });
};
const serializeAws_json1_1ConformancePackNamesList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ConformancePackNamesToSummarizeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1DeleteAggregationAuthorizationRequest = (input, context) => {
    return {
        ...(input.AuthorizedAccountId !== undefined &&
            input.AuthorizedAccountId !== null && { AuthorizedAccountId: input.AuthorizedAccountId }),
        ...(input.AuthorizedAwsRegion !== undefined &&
            input.AuthorizedAwsRegion !== null && { AuthorizedAwsRegion: input.AuthorizedAwsRegion }),
    };
};
const serializeAws_json1_1DeleteConfigRuleRequest = (input, context) => {
    return {
        ...(input.ConfigRuleName !== undefined &&
            input.ConfigRuleName !== null && { ConfigRuleName: input.ConfigRuleName }),
    };
};
const serializeAws_json1_1DeleteConfigurationAggregatorRequest = (input, context) => {
    return {
        ...(input.ConfigurationAggregatorName !== undefined &&
            input.ConfigurationAggregatorName !== null && { ConfigurationAggregatorName: input.ConfigurationAggregatorName }),
    };
};
const serializeAws_json1_1DeleteConfigurationRecorderRequest = (input, context) => {
    return {
        ...(input.ConfigurationRecorderName !== undefined &&
            input.ConfigurationRecorderName !== null && { ConfigurationRecorderName: input.ConfigurationRecorderName }),
    };
};
const serializeAws_json1_1DeleteConformancePackRequest = (input, context) => {
    return {
        ...(input.ConformancePackName !== undefined &&
            input.ConformancePackName !== null && { ConformancePackName: input.ConformancePackName }),
    };
};
const serializeAws_json1_1DeleteDeliveryChannelRequest = (input, context) => {
    return {
        ...(input.DeliveryChannelName !== undefined &&
            input.DeliveryChannelName !== null && { DeliveryChannelName: input.DeliveryChannelName }),
    };
};
const serializeAws_json1_1DeleteEvaluationResultsRequest = (input, context) => {
    return {
        ...(input.ConfigRuleName !== undefined &&
            input.ConfigRuleName !== null && { ConfigRuleName: input.ConfigRuleName }),
    };
};
const serializeAws_json1_1DeleteOrganizationConfigRuleRequest = (input, context) => {
    return {
        ...(input.OrganizationConfigRuleName !== undefined &&
            input.OrganizationConfigRuleName !== null && { OrganizationConfigRuleName: input.OrganizationConfigRuleName }),
    };
};
const serializeAws_json1_1DeleteOrganizationConformancePackRequest = (input, context) => {
    return {
        ...(input.OrganizationConformancePackName !== undefined &&
            input.OrganizationConformancePackName !== null && {
            OrganizationConformancePackName: input.OrganizationConformancePackName,
        }),
    };
};
const serializeAws_json1_1DeletePendingAggregationRequestRequest = (input, context) => {
    return {
        ...(input.RequesterAccountId !== undefined &&
            input.RequesterAccountId !== null && { RequesterAccountId: input.RequesterAccountId }),
        ...(input.RequesterAwsRegion !== undefined &&
            input.RequesterAwsRegion !== null && { RequesterAwsRegion: input.RequesterAwsRegion }),
    };
};
const serializeAws_json1_1DeleteRemediationConfigurationRequest = (input, context) => {
    return {
        ...(input.ConfigRuleName !== undefined &&
            input.ConfigRuleName !== null && { ConfigRuleName: input.ConfigRuleName }),
        ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
    };
};
const serializeAws_json1_1DeleteRemediationExceptionsRequest = (input, context) => {
    return {
        ...(input.ConfigRuleName !== undefined &&
            input.ConfigRuleName !== null && { ConfigRuleName: input.ConfigRuleName }),
        ...(input.ResourceKeys !== undefined &&
            input.ResourceKeys !== null && {
            ResourceKeys: serializeAws_json1_1RemediationExceptionResourceKeys(input.ResourceKeys, context),
        }),
    };
};
const serializeAws_json1_1DeleteResourceConfigRequest = (input, context) => {
    return {
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
        ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
    };
};
const serializeAws_json1_1DeleteRetentionConfigurationRequest = (input, context) => {
    return {
        ...(input.RetentionConfigurationName !== undefined &&
            input.RetentionConfigurationName !== null && { RetentionConfigurationName: input.RetentionConfigurationName }),
    };
};
const serializeAws_json1_1DeleteStoredQueryRequest = (input, context) => {
    return {
        ...(input.QueryName !== undefined && input.QueryName !== null && { QueryName: input.QueryName }),
    };
};
const serializeAws_json1_1DeliverConfigSnapshotRequest = (input, context) => {
    return {
        ...(input.deliveryChannelName !== undefined &&
            input.deliveryChannelName !== null && { deliveryChannelName: input.deliveryChannelName }),
    };
};
const serializeAws_json1_1DeliveryChannel = (input, context) => {
    return {
        ...(input.configSnapshotDeliveryProperties !== undefined &&
            input.configSnapshotDeliveryProperties !== null && {
            configSnapshotDeliveryProperties: serializeAws_json1_1ConfigSnapshotDeliveryProperties(input.configSnapshotDeliveryProperties, context),
        }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.s3BucketName !== undefined && input.s3BucketName !== null && { s3BucketName: input.s3BucketName }),
        ...(input.s3KeyPrefix !== undefined && input.s3KeyPrefix !== null && { s3KeyPrefix: input.s3KeyPrefix }),
        ...(input.s3KmsKeyArn !== undefined && input.s3KmsKeyArn !== null && { s3KmsKeyArn: input.s3KmsKeyArn }),
        ...(input.snsTopicARN !== undefined && input.snsTopicARN !== null && { snsTopicARN: input.snsTopicARN }),
    };
};
const serializeAws_json1_1DeliveryChannelNameList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1DescribeAggregateComplianceByConfigRulesRequest = (input, context) => {
    return {
        ...(input.ConfigurationAggregatorName !== undefined &&
            input.ConfigurationAggregatorName !== null && { ConfigurationAggregatorName: input.ConfigurationAggregatorName }),
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1ConfigRuleComplianceFilters(input.Filters, context) }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeAggregateComplianceByConformancePacksRequest = (input, context) => {
    return {
        ...(input.ConfigurationAggregatorName !== undefined &&
            input.ConfigurationAggregatorName !== null && { ConfigurationAggregatorName: input.ConfigurationAggregatorName }),
        ...(input.Filters !== undefined &&
            input.Filters !== null && {
            Filters: serializeAws_json1_1AggregateConformancePackComplianceFilters(input.Filters, context),
        }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeAggregationAuthorizationsRequest = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeComplianceByConfigRuleRequest = (input, context) => {
    return {
        ...(input.ComplianceTypes !== undefined &&
            input.ComplianceTypes !== null && {
            ComplianceTypes: serializeAws_json1_1ComplianceTypes(input.ComplianceTypes, context),
        }),
        ...(input.ConfigRuleNames !== undefined &&
            input.ConfigRuleNames !== null && {
            ConfigRuleNames: serializeAws_json1_1ConfigRuleNames(input.ConfigRuleNames, context),
        }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeComplianceByResourceRequest = (input, context) => {
    return {
        ...(input.ComplianceTypes !== undefined &&
            input.ComplianceTypes !== null && {
            ComplianceTypes: serializeAws_json1_1ComplianceTypes(input.ComplianceTypes, context),
        }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
        ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
    };
};
const serializeAws_json1_1DescribeConfigRuleEvaluationStatusRequest = (input, context) => {
    return {
        ...(input.ConfigRuleNames !== undefined &&
            input.ConfigRuleNames !== null && {
            ConfigRuleNames: serializeAws_json1_1ConfigRuleNames(input.ConfigRuleNames, context),
        }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeConfigRulesRequest = (input, context) => {
    return {
        ...(input.ConfigRuleNames !== undefined &&
            input.ConfigRuleNames !== null && {
            ConfigRuleNames: serializeAws_json1_1ConfigRuleNames(input.ConfigRuleNames, context),
        }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusRequest = (input, context) => {
    return {
        ...(input.ConfigurationAggregatorName !== undefined &&
            input.ConfigurationAggregatorName !== null && { ConfigurationAggregatorName: input.ConfigurationAggregatorName }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.UpdateStatus !== undefined &&
            input.UpdateStatus !== null && {
            UpdateStatus: serializeAws_json1_1AggregatedSourceStatusTypeList(input.UpdateStatus, context),
        }),
    };
};
const serializeAws_json1_1DescribeConfigurationAggregatorsRequest = (input, context) => {
    return {
        ...(input.ConfigurationAggregatorNames !== undefined &&
            input.ConfigurationAggregatorNames !== null && {
            ConfigurationAggregatorNames: serializeAws_json1_1ConfigurationAggregatorNameList(input.ConfigurationAggregatorNames, context),
        }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeConfigurationRecordersRequest = (input, context) => {
    return {
        ...(input.ConfigurationRecorderNames !== undefined &&
            input.ConfigurationRecorderNames !== null && {
            ConfigurationRecorderNames: serializeAws_json1_1ConfigurationRecorderNameList(input.ConfigurationRecorderNames, context),
        }),
    };
};
const serializeAws_json1_1DescribeConfigurationRecorderStatusRequest = (input, context) => {
    return {
        ...(input.ConfigurationRecorderNames !== undefined &&
            input.ConfigurationRecorderNames !== null && {
            ConfigurationRecorderNames: serializeAws_json1_1ConfigurationRecorderNameList(input.ConfigurationRecorderNames, context),
        }),
    };
};
const serializeAws_json1_1DescribeConformancePackComplianceRequest = (input, context) => {
    return {
        ...(input.ConformancePackName !== undefined &&
            input.ConformancePackName !== null && { ConformancePackName: input.ConformancePackName }),
        ...(input.Filters !== undefined &&
            input.Filters !== null && {
            Filters: serializeAws_json1_1ConformancePackComplianceFilters(input.Filters, context),
        }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeConformancePacksRequest = (input, context) => {
    return {
        ...(input.ConformancePackNames !== undefined &&
            input.ConformancePackNames !== null && {
            ConformancePackNames: serializeAws_json1_1ConformancePackNamesList(input.ConformancePackNames, context),
        }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeConformancePackStatusRequest = (input, context) => {
    return {
        ...(input.ConformancePackNames !== undefined &&
            input.ConformancePackNames !== null && {
            ConformancePackNames: serializeAws_json1_1ConformancePackNamesList(input.ConformancePackNames, context),
        }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeDeliveryChannelsRequest = (input, context) => {
    return {
        ...(input.DeliveryChannelNames !== undefined &&
            input.DeliveryChannelNames !== null && {
            DeliveryChannelNames: serializeAws_json1_1DeliveryChannelNameList(input.DeliveryChannelNames, context),
        }),
    };
};
const serializeAws_json1_1DescribeDeliveryChannelStatusRequest = (input, context) => {
    return {
        ...(input.DeliveryChannelNames !== undefined &&
            input.DeliveryChannelNames !== null && {
            DeliveryChannelNames: serializeAws_json1_1DeliveryChannelNameList(input.DeliveryChannelNames, context),
        }),
    };
};
const serializeAws_json1_1DescribeOrganizationConfigRulesRequest = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.OrganizationConfigRuleNames !== undefined &&
            input.OrganizationConfigRuleNames !== null && {
            OrganizationConfigRuleNames: serializeAws_json1_1OrganizationConfigRuleNames(input.OrganizationConfigRuleNames, context),
        }),
    };
};
const serializeAws_json1_1DescribeOrganizationConfigRuleStatusesRequest = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.OrganizationConfigRuleNames !== undefined &&
            input.OrganizationConfigRuleNames !== null && {
            OrganizationConfigRuleNames: serializeAws_json1_1OrganizationConfigRuleNames(input.OrganizationConfigRuleNames, context),
        }),
    };
};
const serializeAws_json1_1DescribeOrganizationConformancePacksRequest = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.OrganizationConformancePackNames !== undefined &&
            input.OrganizationConformancePackNames !== null && {
            OrganizationConformancePackNames: serializeAws_json1_1OrganizationConformancePackNames(input.OrganizationConformancePackNames, context),
        }),
    };
};
const serializeAws_json1_1DescribeOrganizationConformancePackStatusesRequest = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.OrganizationConformancePackNames !== undefined &&
            input.OrganizationConformancePackNames !== null && {
            OrganizationConformancePackNames: serializeAws_json1_1OrganizationConformancePackNames(input.OrganizationConformancePackNames, context),
        }),
    };
};
const serializeAws_json1_1DescribePendingAggregationRequestsRequest = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeRemediationConfigurationsRequest = (input, context) => {
    return {
        ...(input.ConfigRuleNames !== undefined &&
            input.ConfigRuleNames !== null && {
            ConfigRuleNames: serializeAws_json1_1ConfigRuleNames(input.ConfigRuleNames, context),
        }),
    };
};
const serializeAws_json1_1DescribeRemediationExceptionsRequest = (input, context) => {
    return {
        ...(input.ConfigRuleName !== undefined &&
            input.ConfigRuleName !== null && { ConfigRuleName: input.ConfigRuleName }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ResourceKeys !== undefined &&
            input.ResourceKeys !== null && {
            ResourceKeys: serializeAws_json1_1RemediationExceptionResourceKeys(input.ResourceKeys, context),
        }),
    };
};
const serializeAws_json1_1DescribeRemediationExecutionStatusRequest = (input, context) => {
    return {
        ...(input.ConfigRuleName !== undefined &&
            input.ConfigRuleName !== null && { ConfigRuleName: input.ConfigRuleName }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ResourceKeys !== undefined &&
            input.ResourceKeys !== null && { ResourceKeys: serializeAws_json1_1ResourceKeys(input.ResourceKeys, context) }),
    };
};
const serializeAws_json1_1DescribeRetentionConfigurationsRequest = (input, context) => {
    return {
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.RetentionConfigurationNames !== undefined &&
            input.RetentionConfigurationNames !== null && {
            RetentionConfigurationNames: serializeAws_json1_1RetentionConfigurationNameList(input.RetentionConfigurationNames, context),
        }),
    };
};
const serializeAws_json1_1Evaluation = (input, context) => {
    return {
        ...(input.Annotation !== undefined && input.Annotation !== null && { Annotation: input.Annotation }),
        ...(input.ComplianceResourceId !== undefined &&
            input.ComplianceResourceId !== null && { ComplianceResourceId: input.ComplianceResourceId }),
        ...(input.ComplianceResourceType !== undefined &&
            input.ComplianceResourceType !== null && { ComplianceResourceType: input.ComplianceResourceType }),
        ...(input.ComplianceType !== undefined &&
            input.ComplianceType !== null && { ComplianceType: input.ComplianceType }),
        ...(input.OrderingTimestamp !== undefined &&
            input.OrderingTimestamp !== null && { OrderingTimestamp: Math.round(input.OrderingTimestamp.getTime() / 1000) }),
    };
};
const serializeAws_json1_1Evaluations = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Evaluation(entry, context);
    });
};
const serializeAws_json1_1ExcludedAccounts = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ExecutionControls = (input, context) => {
    return {
        ...(input.SsmControls !== undefined &&
            input.SsmControls !== null && { SsmControls: serializeAws_json1_1SsmControls(input.SsmControls, context) }),
    };
};
const serializeAws_json1_1ExternalEvaluation = (input, context) => {
    return {
        ...(input.Annotation !== undefined && input.Annotation !== null && { Annotation: input.Annotation }),
        ...(input.ComplianceResourceId !== undefined &&
            input.ComplianceResourceId !== null && { ComplianceResourceId: input.ComplianceResourceId }),
        ...(input.ComplianceResourceType !== undefined &&
            input.ComplianceResourceType !== null && { ComplianceResourceType: input.ComplianceResourceType }),
        ...(input.ComplianceType !== undefined &&
            input.ComplianceType !== null && { ComplianceType: input.ComplianceType }),
        ...(input.OrderingTimestamp !== undefined &&
            input.OrderingTimestamp !== null && { OrderingTimestamp: Math.round(input.OrderingTimestamp.getTime() / 1000) }),
    };
};
const serializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleRequest = (input, context) => {
    return {
        ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
        ...(input.AwsRegion !== undefined && input.AwsRegion !== null && { AwsRegion: input.AwsRegion }),
        ...(input.ComplianceType !== undefined &&
            input.ComplianceType !== null && { ComplianceType: input.ComplianceType }),
        ...(input.ConfigRuleName !== undefined &&
            input.ConfigRuleName !== null && { ConfigRuleName: input.ConfigRuleName }),
        ...(input.ConfigurationAggregatorName !== undefined &&
            input.ConfigurationAggregatorName !== null && { ConfigurationAggregatorName: input.ConfigurationAggregatorName }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1GetAggregateConfigRuleComplianceSummaryRequest = (input, context) => {
    return {
        ...(input.ConfigurationAggregatorName !== undefined &&
            input.ConfigurationAggregatorName !== null && { ConfigurationAggregatorName: input.ConfigurationAggregatorName }),
        ...(input.Filters !== undefined &&
            input.Filters !== null && {
            Filters: serializeAws_json1_1ConfigRuleComplianceSummaryFilters(input.Filters, context),
        }),
        ...(input.GroupByKey !== undefined && input.GroupByKey !== null && { GroupByKey: input.GroupByKey }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1GetAggregateConformancePackComplianceSummaryRequest = (input, context) => {
    return {
        ...(input.ConfigurationAggregatorName !== undefined &&
            input.ConfigurationAggregatorName !== null && { ConfigurationAggregatorName: input.ConfigurationAggregatorName }),
        ...(input.Filters !== undefined &&
            input.Filters !== null && {
            Filters: serializeAws_json1_1AggregateConformancePackComplianceSummaryFilters(input.Filters, context),
        }),
        ...(input.GroupByKey !== undefined && input.GroupByKey !== null && { GroupByKey: input.GroupByKey }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1GetAggregateDiscoveredResourceCountsRequest = (input, context) => {
    return {
        ...(input.ConfigurationAggregatorName !== undefined &&
            input.ConfigurationAggregatorName !== null && { ConfigurationAggregatorName: input.ConfigurationAggregatorName }),
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1ResourceCountFilters(input.Filters, context) }),
        ...(input.GroupByKey !== undefined && input.GroupByKey !== null && { GroupByKey: input.GroupByKey }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1GetAggregateResourceConfigRequest = (input, context) => {
    return {
        ...(input.ConfigurationAggregatorName !== undefined &&
            input.ConfigurationAggregatorName !== null && { ConfigurationAggregatorName: input.ConfigurationAggregatorName }),
        ...(input.ResourceIdentifier !== undefined &&
            input.ResourceIdentifier !== null && {
            ResourceIdentifier: serializeAws_json1_1AggregateResourceIdentifier(input.ResourceIdentifier, context),
        }),
    };
};
const serializeAws_json1_1GetComplianceDetailsByConfigRuleRequest = (input, context) => {
    return {
        ...(input.ComplianceTypes !== undefined &&
            input.ComplianceTypes !== null && {
            ComplianceTypes: serializeAws_json1_1ComplianceTypes(input.ComplianceTypes, context),
        }),
        ...(input.ConfigRuleName !== undefined &&
            input.ConfigRuleName !== null && { ConfigRuleName: input.ConfigRuleName }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1GetComplianceDetailsByResourceRequest = (input, context) => {
    return {
        ...(input.ComplianceTypes !== undefined &&
            input.ComplianceTypes !== null && {
            ComplianceTypes: serializeAws_json1_1ComplianceTypes(input.ComplianceTypes, context),
        }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
        ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
    };
};
const serializeAws_json1_1GetComplianceSummaryByResourceTypeRequest = (input, context) => {
    return {
        ...(input.ResourceTypes !== undefined &&
            input.ResourceTypes !== null && {
            ResourceTypes: serializeAws_json1_1ResourceTypes(input.ResourceTypes, context),
        }),
    };
};
const serializeAws_json1_1GetConformancePackComplianceDetailsRequest = (input, context) => {
    return {
        ...(input.ConformancePackName !== undefined &&
            input.ConformancePackName !== null && { ConformancePackName: input.ConformancePackName }),
        ...(input.Filters !== undefined &&
            input.Filters !== null && {
            Filters: serializeAws_json1_1ConformancePackEvaluationFilters(input.Filters, context),
        }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1GetConformancePackComplianceSummaryRequest = (input, context) => {
    return {
        ...(input.ConformancePackNames !== undefined &&
            input.ConformancePackNames !== null && {
            ConformancePackNames: serializeAws_json1_1ConformancePackNamesToSummarizeList(input.ConformancePackNames, context),
        }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1GetDiscoveredResourceCountsRequest = (input, context) => {
    return {
        ...(input.limit !== undefined && input.limit !== null && { limit: input.limit }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.resourceTypes !== undefined &&
            input.resourceTypes !== null && {
            resourceTypes: serializeAws_json1_1ResourceTypes(input.resourceTypes, context),
        }),
    };
};
const serializeAws_json1_1GetOrganizationConfigRuleDetailedStatusRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1StatusDetailFilters(input.Filters, context) }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.OrganizationConfigRuleName !== undefined &&
            input.OrganizationConfigRuleName !== null && { OrganizationConfigRuleName: input.OrganizationConfigRuleName }),
    };
};
const serializeAws_json1_1GetOrganizationConformancePackDetailedStatusRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && {
            Filters: serializeAws_json1_1OrganizationResourceDetailedStatusFilters(input.Filters, context),
        }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.OrganizationConformancePackName !== undefined &&
            input.OrganizationConformancePackName !== null && {
            OrganizationConformancePackName: input.OrganizationConformancePackName,
        }),
    };
};
const serializeAws_json1_1GetResourceConfigHistoryRequest = (input, context) => {
    return {
        ...(input.chronologicalOrder !== undefined &&
            input.chronologicalOrder !== null && { chronologicalOrder: input.chronologicalOrder }),
        ...(input.earlierTime !== undefined &&
            input.earlierTime !== null && { earlierTime: Math.round(input.earlierTime.getTime() / 1000) }),
        ...(input.laterTime !== undefined &&
            input.laterTime !== null && { laterTime: Math.round(input.laterTime.getTime() / 1000) }),
        ...(input.limit !== undefined && input.limit !== null && { limit: input.limit }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.resourceId !== undefined && input.resourceId !== null && { resourceId: input.resourceId }),
        ...(input.resourceType !== undefined && input.resourceType !== null && { resourceType: input.resourceType }),
    };
};
const serializeAws_json1_1GetStoredQueryRequest = (input, context) => {
    return {
        ...(input.QueryName !== undefined && input.QueryName !== null && { QueryName: input.QueryName }),
    };
};
const serializeAws_json1_1ListAggregateDiscoveredResourcesRequest = (input, context) => {
    return {
        ...(input.ConfigurationAggregatorName !== undefined &&
            input.ConfigurationAggregatorName !== null && { ConfigurationAggregatorName: input.ConfigurationAggregatorName }),
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1ResourceFilters(input.Filters, context) }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
    };
};
const serializeAws_json1_1ListDiscoveredResourcesRequest = (input, context) => {
    return {
        ...(input.includeDeletedResources !== undefined &&
            input.includeDeletedResources !== null && { includeDeletedResources: input.includeDeletedResources }),
        ...(input.limit !== undefined && input.limit !== null && { limit: input.limit }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.resourceIds !== undefined &&
            input.resourceIds !== null && { resourceIds: serializeAws_json1_1ResourceIdList(input.resourceIds, context) }),
        ...(input.resourceName !== undefined && input.resourceName !== null && { resourceName: input.resourceName }),
        ...(input.resourceType !== undefined && input.resourceType !== null && { resourceType: input.resourceType }),
    };
};
const serializeAws_json1_1ListStoredQueriesRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_1OrganizationAggregationSource = (input, context) => {
    return {
        ...(input.AllAwsRegions !== undefined && input.AllAwsRegions !== null && { AllAwsRegions: input.AllAwsRegions }),
        ...(input.AwsRegions !== undefined &&
            input.AwsRegions !== null && { AwsRegions: serializeAws_json1_1AggregatorRegionList(input.AwsRegions, context) }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    };
};
const serializeAws_json1_1OrganizationConfigRuleNames = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1OrganizationConfigRuleTriggerTypes = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1OrganizationConformancePackNames = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1OrganizationCustomRuleMetadata = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.InputParameters !== undefined &&
            input.InputParameters !== null && { InputParameters: input.InputParameters }),
        ...(input.LambdaFunctionArn !== undefined &&
            input.LambdaFunctionArn !== null && { LambdaFunctionArn: input.LambdaFunctionArn }),
        ...(input.MaximumExecutionFrequency !== undefined &&
            input.MaximumExecutionFrequency !== null && { MaximumExecutionFrequency: input.MaximumExecutionFrequency }),
        ...(input.OrganizationConfigRuleTriggerTypes !== undefined &&
            input.OrganizationConfigRuleTriggerTypes !== null && {
            OrganizationConfigRuleTriggerTypes: serializeAws_json1_1OrganizationConfigRuleTriggerTypes(input.OrganizationConfigRuleTriggerTypes, context),
        }),
        ...(input.ResourceIdScope !== undefined &&
            input.ResourceIdScope !== null && { ResourceIdScope: input.ResourceIdScope }),
        ...(input.ResourceTypesScope !== undefined &&
            input.ResourceTypesScope !== null && {
            ResourceTypesScope: serializeAws_json1_1ResourceTypesScope(input.ResourceTypesScope, context),
        }),
        ...(input.TagKeyScope !== undefined && input.TagKeyScope !== null && { TagKeyScope: input.TagKeyScope }),
        ...(input.TagValueScope !== undefined && input.TagValueScope !== null && { TagValueScope: input.TagValueScope }),
    };
};
const serializeAws_json1_1OrganizationManagedRuleMetadata = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.InputParameters !== undefined &&
            input.InputParameters !== null && { InputParameters: input.InputParameters }),
        ...(input.MaximumExecutionFrequency !== undefined &&
            input.MaximumExecutionFrequency !== null && { MaximumExecutionFrequency: input.MaximumExecutionFrequency }),
        ...(input.ResourceIdScope !== undefined &&
            input.ResourceIdScope !== null && { ResourceIdScope: input.ResourceIdScope }),
        ...(input.ResourceTypesScope !== undefined &&
            input.ResourceTypesScope !== null && {
            ResourceTypesScope: serializeAws_json1_1ResourceTypesScope(input.ResourceTypesScope, context),
        }),
        ...(input.RuleIdentifier !== undefined &&
            input.RuleIdentifier !== null && { RuleIdentifier: input.RuleIdentifier }),
        ...(input.TagKeyScope !== undefined && input.TagKeyScope !== null && { TagKeyScope: input.TagKeyScope }),
        ...(input.TagValueScope !== undefined && input.TagValueScope !== null && { TagValueScope: input.TagValueScope }),
    };
};
const serializeAws_json1_1OrganizationResourceDetailedStatusFilters = (input, context) => {
    return {
        ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
        ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
    };
};
const serializeAws_json1_1PutAggregationAuthorizationRequest = (input, context) => {
    return {
        ...(input.AuthorizedAccountId !== undefined &&
            input.AuthorizedAccountId !== null && { AuthorizedAccountId: input.AuthorizedAccountId }),
        ...(input.AuthorizedAwsRegion !== undefined &&
            input.AuthorizedAwsRegion !== null && { AuthorizedAwsRegion: input.AuthorizedAwsRegion }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagsList(input.Tags, context) }),
    };
};
const serializeAws_json1_1PutConfigRuleRequest = (input, context) => {
    return {
        ...(input.ConfigRule !== undefined &&
            input.ConfigRule !== null && { ConfigRule: serializeAws_json1_1ConfigRule(input.ConfigRule, context) }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagsList(input.Tags, context) }),
    };
};
const serializeAws_json1_1PutConfigurationAggregatorRequest = (input, context) => {
    return {
        ...(input.AccountAggregationSources !== undefined &&
            input.AccountAggregationSources !== null && {
            AccountAggregationSources: serializeAws_json1_1AccountAggregationSourceList(input.AccountAggregationSources, context),
        }),
        ...(input.ConfigurationAggregatorName !== undefined &&
            input.ConfigurationAggregatorName !== null && { ConfigurationAggregatorName: input.ConfigurationAggregatorName }),
        ...(input.OrganizationAggregationSource !== undefined &&
            input.OrganizationAggregationSource !== null && {
            OrganizationAggregationSource: serializeAws_json1_1OrganizationAggregationSource(input.OrganizationAggregationSource, context),
        }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagsList(input.Tags, context) }),
    };
};
const serializeAws_json1_1PutConfigurationRecorderRequest = (input, context) => {
    return {
        ...(input.ConfigurationRecorder !== undefined &&
            input.ConfigurationRecorder !== null && {
            ConfigurationRecorder: serializeAws_json1_1ConfigurationRecorder(input.ConfigurationRecorder, context),
        }),
    };
};
const serializeAws_json1_1PutConformancePackRequest = (input, context) => {
    return {
        ...(input.ConformancePackInputParameters !== undefined &&
            input.ConformancePackInputParameters !== null && {
            ConformancePackInputParameters: serializeAws_json1_1ConformancePackInputParameters(input.ConformancePackInputParameters, context),
        }),
        ...(input.ConformancePackName !== undefined &&
            input.ConformancePackName !== null && { ConformancePackName: input.ConformancePackName }),
        ...(input.DeliveryS3Bucket !== undefined &&
            input.DeliveryS3Bucket !== null && { DeliveryS3Bucket: input.DeliveryS3Bucket }),
        ...(input.DeliveryS3KeyPrefix !== undefined &&
            input.DeliveryS3KeyPrefix !== null && { DeliveryS3KeyPrefix: input.DeliveryS3KeyPrefix }),
        ...(input.TemplateBody !== undefined && input.TemplateBody !== null && { TemplateBody: input.TemplateBody }),
        ...(input.TemplateS3Uri !== undefined && input.TemplateS3Uri !== null && { TemplateS3Uri: input.TemplateS3Uri }),
    };
};
const serializeAws_json1_1PutDeliveryChannelRequest = (input, context) => {
    return {
        ...(input.DeliveryChannel !== undefined &&
            input.DeliveryChannel !== null && {
            DeliveryChannel: serializeAws_json1_1DeliveryChannel(input.DeliveryChannel, context),
        }),
    };
};
const serializeAws_json1_1PutEvaluationsRequest = (input, context) => {
    return {
        ...(input.Evaluations !== undefined &&
            input.Evaluations !== null && { Evaluations: serializeAws_json1_1Evaluations(input.Evaluations, context) }),
        ...(input.ResultToken !== undefined && input.ResultToken !== null && { ResultToken: input.ResultToken }),
        ...(input.TestMode !== undefined && input.TestMode !== null && { TestMode: input.TestMode }),
    };
};
const serializeAws_json1_1PutExternalEvaluationRequest = (input, context) => {
    return {
        ...(input.ConfigRuleName !== undefined &&
            input.ConfigRuleName !== null && { ConfigRuleName: input.ConfigRuleName }),
        ...(input.ExternalEvaluation !== undefined &&
            input.ExternalEvaluation !== null && {
            ExternalEvaluation: serializeAws_json1_1ExternalEvaluation(input.ExternalEvaluation, context),
        }),
    };
};
const serializeAws_json1_1PutOrganizationConfigRuleRequest = (input, context) => {
    return {
        ...(input.ExcludedAccounts !== undefined &&
            input.ExcludedAccounts !== null && {
            ExcludedAccounts: serializeAws_json1_1ExcludedAccounts(input.ExcludedAccounts, context),
        }),
        ...(input.OrganizationConfigRuleName !== undefined &&
            input.OrganizationConfigRuleName !== null && { OrganizationConfigRuleName: input.OrganizationConfigRuleName }),
        ...(input.OrganizationCustomRuleMetadata !== undefined &&
            input.OrganizationCustomRuleMetadata !== null && {
            OrganizationCustomRuleMetadata: serializeAws_json1_1OrganizationCustomRuleMetadata(input.OrganizationCustomRuleMetadata, context),
        }),
        ...(input.OrganizationManagedRuleMetadata !== undefined &&
            input.OrganizationManagedRuleMetadata !== null && {
            OrganizationManagedRuleMetadata: serializeAws_json1_1OrganizationManagedRuleMetadata(input.OrganizationManagedRuleMetadata, context),
        }),
    };
};
const serializeAws_json1_1PutOrganizationConformancePackRequest = (input, context) => {
    return {
        ...(input.ConformancePackInputParameters !== undefined &&
            input.ConformancePackInputParameters !== null && {
            ConformancePackInputParameters: serializeAws_json1_1ConformancePackInputParameters(input.ConformancePackInputParameters, context),
        }),
        ...(input.DeliveryS3Bucket !== undefined &&
            input.DeliveryS3Bucket !== null && { DeliveryS3Bucket: input.DeliveryS3Bucket }),
        ...(input.DeliveryS3KeyPrefix !== undefined &&
            input.DeliveryS3KeyPrefix !== null && { DeliveryS3KeyPrefix: input.DeliveryS3KeyPrefix }),
        ...(input.ExcludedAccounts !== undefined &&
            input.ExcludedAccounts !== null && {
            ExcludedAccounts: serializeAws_json1_1ExcludedAccounts(input.ExcludedAccounts, context),
        }),
        ...(input.OrganizationConformancePackName !== undefined &&
            input.OrganizationConformancePackName !== null && {
            OrganizationConformancePackName: input.OrganizationConformancePackName,
        }),
        ...(input.TemplateBody !== undefined && input.TemplateBody !== null && { TemplateBody: input.TemplateBody }),
        ...(input.TemplateS3Uri !== undefined && input.TemplateS3Uri !== null && { TemplateS3Uri: input.TemplateS3Uri }),
    };
};
const serializeAws_json1_1PutRemediationConfigurationsRequest = (input, context) => {
    return {
        ...(input.RemediationConfigurations !== undefined &&
            input.RemediationConfigurations !== null && {
            RemediationConfigurations: serializeAws_json1_1RemediationConfigurations(input.RemediationConfigurations, context),
        }),
    };
};
const serializeAws_json1_1PutRemediationExceptionsRequest = (input, context) => {
    return {
        ...(input.ConfigRuleName !== undefined &&
            input.ConfigRuleName !== null && { ConfigRuleName: input.ConfigRuleName }),
        ...(input.ExpirationTime !== undefined &&
            input.ExpirationTime !== null && { ExpirationTime: Math.round(input.ExpirationTime.getTime() / 1000) }),
        ...(input.Message !== undefined && input.Message !== null && { Message: input.Message }),
        ...(input.ResourceKeys !== undefined &&
            input.ResourceKeys !== null && {
            ResourceKeys: serializeAws_json1_1RemediationExceptionResourceKeys(input.ResourceKeys, context),
        }),
    };
};
const serializeAws_json1_1PutResourceConfigRequest = (input, context) => {
    return {
        ...(input.Configuration !== undefined && input.Configuration !== null && { Configuration: input.Configuration }),
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
        ...(input.ResourceName !== undefined && input.ResourceName !== null && { ResourceName: input.ResourceName }),
        ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
        ...(input.SchemaVersionId !== undefined &&
            input.SchemaVersionId !== null && { SchemaVersionId: input.SchemaVersionId }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    };
};
const serializeAws_json1_1PutRetentionConfigurationRequest = (input, context) => {
    return {
        ...(input.RetentionPeriodInDays !== undefined &&
            input.RetentionPeriodInDays !== null && { RetentionPeriodInDays: input.RetentionPeriodInDays }),
    };
};
const serializeAws_json1_1PutStoredQueryRequest = (input, context) => {
    return {
        ...(input.StoredQuery !== undefined &&
            input.StoredQuery !== null && { StoredQuery: serializeAws_json1_1StoredQuery(input.StoredQuery, context) }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagsList(input.Tags, context) }),
    };
};
const serializeAws_json1_1RecordingGroup = (input, context) => {
    return {
        ...(input.allSupported !== undefined && input.allSupported !== null && { allSupported: input.allSupported }),
        ...(input.includeGlobalResourceTypes !== undefined &&
            input.includeGlobalResourceTypes !== null && { includeGlobalResourceTypes: input.includeGlobalResourceTypes }),
        ...(input.resourceTypes !== undefined &&
            input.resourceTypes !== null && {
            resourceTypes: serializeAws_json1_1ResourceTypeList(input.resourceTypes, context),
        }),
    };
};
const serializeAws_json1_1ReevaluateConfigRuleNames = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1RemediationConfiguration = (input, context) => {
    return {
        ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
        ...(input.Automatic !== undefined && input.Automatic !== null && { Automatic: input.Automatic }),
        ...(input.ConfigRuleName !== undefined &&
            input.ConfigRuleName !== null && { ConfigRuleName: input.ConfigRuleName }),
        ...(input.CreatedByService !== undefined &&
            input.CreatedByService !== null && { CreatedByService: input.CreatedByService }),
        ...(input.ExecutionControls !== undefined &&
            input.ExecutionControls !== null && {
            ExecutionControls: serializeAws_json1_1ExecutionControls(input.ExecutionControls, context),
        }),
        ...(input.MaximumAutomaticAttempts !== undefined &&
            input.MaximumAutomaticAttempts !== null && { MaximumAutomaticAttempts: input.MaximumAutomaticAttempts }),
        ...(input.Parameters !== undefined &&
            input.Parameters !== null && {
            Parameters: serializeAws_json1_1RemediationParameters(input.Parameters, context),
        }),
        ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
        ...(input.RetryAttemptSeconds !== undefined &&
            input.RetryAttemptSeconds !== null && { RetryAttemptSeconds: input.RetryAttemptSeconds }),
        ...(input.TargetId !== undefined && input.TargetId !== null && { TargetId: input.TargetId }),
        ...(input.TargetType !== undefined && input.TargetType !== null && { TargetType: input.TargetType }),
        ...(input.TargetVersion !== undefined && input.TargetVersion !== null && { TargetVersion: input.TargetVersion }),
    };
};
const serializeAws_json1_1RemediationConfigurations = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1RemediationConfiguration(entry, context);
    });
};
const serializeAws_json1_1RemediationExceptionResourceKey = (input, context) => {
    return {
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
        ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
    };
};
const serializeAws_json1_1RemediationExceptionResourceKeys = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1RemediationExceptionResourceKey(entry, context);
    });
};
const serializeAws_json1_1RemediationParameters = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_json1_1RemediationParameterValue(value, context),
        };
    }, {});
};
const serializeAws_json1_1RemediationParameterValue = (input, context) => {
    return {
        ...(input.ResourceValue !== undefined &&
            input.ResourceValue !== null && {
            ResourceValue: serializeAws_json1_1ResourceValue(input.ResourceValue, context),
        }),
        ...(input.StaticValue !== undefined &&
            input.StaticValue !== null && { StaticValue: serializeAws_json1_1StaticValue(input.StaticValue, context) }),
    };
};
const serializeAws_json1_1ResourceCountFilters = (input, context) => {
    return {
        ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
        ...(input.Region !== undefined && input.Region !== null && { Region: input.Region }),
        ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
    };
};
const serializeAws_json1_1ResourceFilters = (input, context) => {
    return {
        ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
        ...(input.Region !== undefined && input.Region !== null && { Region: input.Region }),
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
        ...(input.ResourceName !== undefined && input.ResourceName !== null && { ResourceName: input.ResourceName }),
    };
};
const serializeAws_json1_1ResourceIdentifiersList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1AggregateResourceIdentifier(entry, context);
    });
};
const serializeAws_json1_1ResourceIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ResourceKey = (input, context) => {
    return {
        ...(input.resourceId !== undefined && input.resourceId !== null && { resourceId: input.resourceId }),
        ...(input.resourceType !== undefined && input.resourceType !== null && { resourceType: input.resourceType }),
    };
};
const serializeAws_json1_1ResourceKeys = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ResourceKey(entry, context);
    });
};
const serializeAws_json1_1ResourceTypeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ResourceTypes = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ResourceTypesScope = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ResourceValue = (input, context) => {
    return {
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1RetentionConfigurationNameList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1Scope = (input, context) => {
    return {
        ...(input.ComplianceResourceId !== undefined &&
            input.ComplianceResourceId !== null && { ComplianceResourceId: input.ComplianceResourceId }),
        ...(input.ComplianceResourceTypes !== undefined &&
            input.ComplianceResourceTypes !== null && {
            ComplianceResourceTypes: serializeAws_json1_1ComplianceResourceTypes(input.ComplianceResourceTypes, context),
        }),
        ...(input.TagKey !== undefined && input.TagKey !== null && { TagKey: input.TagKey }),
        ...(input.TagValue !== undefined && input.TagValue !== null && { TagValue: input.TagValue }),
    };
};
const serializeAws_json1_1SelectAggregateResourceConfigRequest = (input, context) => {
    return {
        ...(input.ConfigurationAggregatorName !== undefined &&
            input.ConfigurationAggregatorName !== null && { ConfigurationAggregatorName: input.ConfigurationAggregatorName }),
        ...(input.Expression !== undefined && input.Expression !== null && { Expression: input.Expression }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1SelectResourceConfigRequest = (input, context) => {
    return {
        ...(input.Expression !== undefined && input.Expression !== null && { Expression: input.Expression }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1Source = (input, context) => {
    return {
        ...(input.Owner !== undefined && input.Owner !== null && { Owner: input.Owner }),
        ...(input.SourceDetails !== undefined &&
            input.SourceDetails !== null && {
            SourceDetails: serializeAws_json1_1SourceDetails(input.SourceDetails, context),
        }),
        ...(input.SourceIdentifier !== undefined &&
            input.SourceIdentifier !== null && { SourceIdentifier: input.SourceIdentifier }),
    };
};
const serializeAws_json1_1SourceDetail = (input, context) => {
    return {
        ...(input.EventSource !== undefined && input.EventSource !== null && { EventSource: input.EventSource }),
        ...(input.MaximumExecutionFrequency !== undefined &&
            input.MaximumExecutionFrequency !== null && { MaximumExecutionFrequency: input.MaximumExecutionFrequency }),
        ...(input.MessageType !== undefined && input.MessageType !== null && { MessageType: input.MessageType }),
    };
};
const serializeAws_json1_1SourceDetails = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1SourceDetail(entry, context);
    });
};
const serializeAws_json1_1SsmControls = (input, context) => {
    return {
        ...(input.ConcurrentExecutionRatePercentage !== undefined &&
            input.ConcurrentExecutionRatePercentage !== null && {
            ConcurrentExecutionRatePercentage: input.ConcurrentExecutionRatePercentage,
        }),
        ...(input.ErrorPercentage !== undefined &&
            input.ErrorPercentage !== null && { ErrorPercentage: input.ErrorPercentage }),
    };
};
const serializeAws_json1_1StartConfigRulesEvaluationRequest = (input, context) => {
    return {
        ...(input.ConfigRuleNames !== undefined &&
            input.ConfigRuleNames !== null && {
            ConfigRuleNames: serializeAws_json1_1ReevaluateConfigRuleNames(input.ConfigRuleNames, context),
        }),
    };
};
const serializeAws_json1_1StartConfigurationRecorderRequest = (input, context) => {
    return {
        ...(input.ConfigurationRecorderName !== undefined &&
            input.ConfigurationRecorderName !== null && { ConfigurationRecorderName: input.ConfigurationRecorderName }),
    };
};
const serializeAws_json1_1StartRemediationExecutionRequest = (input, context) => {
    return {
        ...(input.ConfigRuleName !== undefined &&
            input.ConfigRuleName !== null && { ConfigRuleName: input.ConfigRuleName }),
        ...(input.ResourceKeys !== undefined &&
            input.ResourceKeys !== null && { ResourceKeys: serializeAws_json1_1ResourceKeys(input.ResourceKeys, context) }),
    };
};
const serializeAws_json1_1StaticParameterValues = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1StaticValue = (input, context) => {
    return {
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1StaticParameterValues(input.Values, context) }),
    };
};
const serializeAws_json1_1StatusDetailFilters = (input, context) => {
    return {
        ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
        ...(input.MemberAccountRuleStatus !== undefined &&
            input.MemberAccountRuleStatus !== null && { MemberAccountRuleStatus: input.MemberAccountRuleStatus }),
    };
};
const serializeAws_json1_1StopConfigurationRecorderRequest = (input, context) => {
    return {
        ...(input.ConfigurationRecorderName !== undefined &&
            input.ConfigurationRecorderName !== null && { ConfigurationRecorderName: input.ConfigurationRecorderName }),
    };
};
const serializeAws_json1_1StoredQuery = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Expression !== undefined && input.Expression !== null && { Expression: input.Expression }),
        ...(input.QueryArn !== undefined && input.QueryArn !== null && { QueryArn: input.QueryArn }),
        ...(input.QueryId !== undefined && input.QueryId !== null && { QueryId: input.QueryId }),
        ...(input.QueryName !== undefined && input.QueryName !== null && { QueryName: input.QueryName }),
    };
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
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1Tags = (input, context) => {
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
const serializeAws_json1_1TagsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
    };
};
const deserializeAws_json1_1AccountAggregationSource = (output, context) => {
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
const deserializeAws_json1_1AccountAggregationSourceAccountList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1AccountAggregationSourceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AccountAggregationSource(entry, context);
    });
};
const deserializeAws_json1_1AggregateComplianceByConfigRule = (output, context) => {
    return {
        AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
        AwsRegion: output.AwsRegion !== undefined && output.AwsRegion !== null ? output.AwsRegion : undefined,
        Compliance: output.Compliance !== undefined && output.Compliance !== null
            ? deserializeAws_json1_1Compliance(output.Compliance, context)
            : undefined,
        ConfigRuleName: output.ConfigRuleName !== undefined && output.ConfigRuleName !== null ? output.ConfigRuleName : undefined,
    };
};
const deserializeAws_json1_1AggregateComplianceByConfigRuleList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AggregateComplianceByConfigRule(entry, context);
    });
};
const deserializeAws_json1_1AggregateComplianceByConformancePack = (output, context) => {
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
const deserializeAws_json1_1AggregateComplianceByConformancePackList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AggregateComplianceByConformancePack(entry, context);
    });
};
const deserializeAws_json1_1AggregateComplianceCount = (output, context) => {
    return {
        ComplianceSummary: output.ComplianceSummary !== undefined && output.ComplianceSummary !== null
            ? deserializeAws_json1_1ComplianceSummary(output.ComplianceSummary, context)
            : undefined,
        GroupName: output.GroupName !== undefined && output.GroupName !== null ? output.GroupName : undefined,
    };
};
const deserializeAws_json1_1AggregateComplianceCountList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AggregateComplianceCount(entry, context);
    });
};
const deserializeAws_json1_1AggregateConformancePackCompliance = (output, context) => {
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
const deserializeAws_json1_1AggregateConformancePackComplianceCount = (output, context) => {
    return {
        CompliantConformancePackCount: output.CompliantConformancePackCount !== undefined && output.CompliantConformancePackCount !== null
            ? output.CompliantConformancePackCount
            : undefined,
        NonCompliantConformancePackCount: output.NonCompliantConformancePackCount !== undefined && output.NonCompliantConformancePackCount !== null
            ? output.NonCompliantConformancePackCount
            : undefined,
    };
};
const deserializeAws_json1_1AggregateConformancePackComplianceSummary = (output, context) => {
    return {
        ComplianceSummary: output.ComplianceSummary !== undefined && output.ComplianceSummary !== null
            ? deserializeAws_json1_1AggregateConformancePackComplianceCount(output.ComplianceSummary, context)
            : undefined,
        GroupName: output.GroupName !== undefined && output.GroupName !== null ? output.GroupName : undefined,
    };
};
const deserializeAws_json1_1AggregateConformancePackComplianceSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AggregateConformancePackComplianceSummary(entry, context);
    });
};
const deserializeAws_json1_1AggregatedSourceStatus = (output, context) => {
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
const deserializeAws_json1_1AggregatedSourceStatusList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AggregatedSourceStatus(entry, context);
    });
};
const deserializeAws_json1_1AggregateEvaluationResult = (output, context) => {
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
const deserializeAws_json1_1AggregateEvaluationResultList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AggregateEvaluationResult(entry, context);
    });
};
const deserializeAws_json1_1AggregateResourceIdentifier = (output, context) => {
    return {
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
        ResourceName: output.ResourceName !== undefined && output.ResourceName !== null ? output.ResourceName : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
        SourceAccountId: output.SourceAccountId !== undefined && output.SourceAccountId !== null ? output.SourceAccountId : undefined,
        SourceRegion: output.SourceRegion !== undefined && output.SourceRegion !== null ? output.SourceRegion : undefined,
    };
};
const deserializeAws_json1_1AggregationAuthorization = (output, context) => {
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
const deserializeAws_json1_1AggregationAuthorizationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AggregationAuthorization(entry, context);
    });
};
const deserializeAws_json1_1AggregatorRegionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1BaseConfigurationItem = (output, context) => {
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
const deserializeAws_json1_1BaseConfigurationItems = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BaseConfigurationItem(entry, context);
    });
};
const deserializeAws_json1_1BatchGetAggregateResourceConfigResponse = (output, context) => {
    return {
        BaseConfigurationItems: output.BaseConfigurationItems !== undefined && output.BaseConfigurationItems !== null
            ? deserializeAws_json1_1BaseConfigurationItems(output.BaseConfigurationItems, context)
            : undefined,
        UnprocessedResourceIdentifiers: output.UnprocessedResourceIdentifiers !== undefined && output.UnprocessedResourceIdentifiers !== null
            ? deserializeAws_json1_1UnprocessedResourceIdentifierList(output.UnprocessedResourceIdentifiers, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchGetResourceConfigResponse = (output, context) => {
    return {
        baseConfigurationItems: output.baseConfigurationItems !== undefined && output.baseConfigurationItems !== null
            ? deserializeAws_json1_1BaseConfigurationItems(output.baseConfigurationItems, context)
            : undefined,
        unprocessedResourceKeys: output.unprocessedResourceKeys !== undefined && output.unprocessedResourceKeys !== null
            ? deserializeAws_json1_1ResourceKeys(output.unprocessedResourceKeys, context)
            : undefined,
    };
};
const deserializeAws_json1_1Compliance = (output, context) => {
    return {
        ComplianceContributorCount: output.ComplianceContributorCount !== undefined && output.ComplianceContributorCount !== null
            ? deserializeAws_json1_1ComplianceContributorCount(output.ComplianceContributorCount, context)
            : undefined,
        ComplianceType: output.ComplianceType !== undefined && output.ComplianceType !== null ? output.ComplianceType : undefined,
    };
};
const deserializeAws_json1_1ComplianceByConfigRule = (output, context) => {
    return {
        Compliance: output.Compliance !== undefined && output.Compliance !== null
            ? deserializeAws_json1_1Compliance(output.Compliance, context)
            : undefined,
        ConfigRuleName: output.ConfigRuleName !== undefined && output.ConfigRuleName !== null ? output.ConfigRuleName : undefined,
    };
};
const deserializeAws_json1_1ComplianceByConfigRules = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ComplianceByConfigRule(entry, context);
    });
};
const deserializeAws_json1_1ComplianceByResource = (output, context) => {
    return {
        Compliance: output.Compliance !== undefined && output.Compliance !== null
            ? deserializeAws_json1_1Compliance(output.Compliance, context)
            : undefined,
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    };
};
const deserializeAws_json1_1ComplianceByResources = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ComplianceByResource(entry, context);
    });
};
const deserializeAws_json1_1ComplianceContributorCount = (output, context) => {
    return {
        CapExceeded: output.CapExceeded !== undefined && output.CapExceeded !== null ? output.CapExceeded : undefined,
        CappedCount: output.CappedCount !== undefined && output.CappedCount !== null ? output.CappedCount : undefined,
    };
};
const deserializeAws_json1_1ComplianceResourceTypes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ComplianceSummariesByResourceType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ComplianceSummaryByResourceType(entry, context);
    });
};
const deserializeAws_json1_1ComplianceSummary = (output, context) => {
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
const deserializeAws_json1_1ComplianceSummaryByResourceType = (output, context) => {
    return {
        ComplianceSummary: output.ComplianceSummary !== undefined && output.ComplianceSummary !== null
            ? deserializeAws_json1_1ComplianceSummary(output.ComplianceSummary, context)
            : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    };
};
const deserializeAws_json1_1ConfigExportDeliveryInfo = (output, context) => {
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
const deserializeAws_json1_1ConfigRule = (output, context) => {
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
const deserializeAws_json1_1ConfigRuleEvaluationStatus = (output, context) => {
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
const deserializeAws_json1_1ConfigRuleEvaluationStatusList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConfigRuleEvaluationStatus(entry, context);
    });
};
const deserializeAws_json1_1ConfigRules = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConfigRule(entry, context);
    });
};
const deserializeAws_json1_1ConfigSnapshotDeliveryProperties = (output, context) => {
    return {
        deliveryFrequency: output.deliveryFrequency !== undefined && output.deliveryFrequency !== null
            ? output.deliveryFrequency
            : undefined,
    };
};
const deserializeAws_json1_1ConfigStreamDeliveryInfo = (output, context) => {
    return {
        lastErrorCode: output.lastErrorCode !== undefined && output.lastErrorCode !== null ? output.lastErrorCode : undefined,
        lastErrorMessage: output.lastErrorMessage !== undefined && output.lastErrorMessage !== null ? output.lastErrorMessage : undefined,
        lastStatus: output.lastStatus !== undefined && output.lastStatus !== null ? output.lastStatus : undefined,
        lastStatusChangeTime: output.lastStatusChangeTime !== undefined && output.lastStatusChangeTime !== null
            ? new Date(Math.round(output.lastStatusChangeTime * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1ConfigurationAggregator = (output, context) => {
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
const deserializeAws_json1_1ConfigurationAggregatorList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConfigurationAggregator(entry, context);
    });
};
const deserializeAws_json1_1ConfigurationItem = (output, context) => {
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
const deserializeAws_json1_1ConfigurationItemList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConfigurationItem(entry, context);
    });
};
const deserializeAws_json1_1ConfigurationRecorder = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        recordingGroup: output.recordingGroup !== undefined && output.recordingGroup !== null
            ? deserializeAws_json1_1RecordingGroup(output.recordingGroup, context)
            : undefined,
        roleARN: output.roleARN !== undefined && output.roleARN !== null ? output.roleARN : undefined,
    };
};
const deserializeAws_json1_1ConfigurationRecorderList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConfigurationRecorder(entry, context);
    });
};
const deserializeAws_json1_1ConfigurationRecorderStatus = (output, context) => {
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
const deserializeAws_json1_1ConfigurationRecorderStatusList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConfigurationRecorderStatus(entry, context);
    });
};
const deserializeAws_json1_1ConformancePackComplianceSummary = (output, context) => {
    return {
        ConformancePackComplianceStatus: output.ConformancePackComplianceStatus !== undefined && output.ConformancePackComplianceStatus !== null
            ? output.ConformancePackComplianceStatus
            : undefined,
        ConformancePackName: output.ConformancePackName !== undefined && output.ConformancePackName !== null
            ? output.ConformancePackName
            : undefined,
    };
};
const deserializeAws_json1_1ConformancePackComplianceSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConformancePackComplianceSummary(entry, context);
    });
};
const deserializeAws_json1_1ConformancePackDetail = (output, context) => {
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
const deserializeAws_json1_1ConformancePackDetailList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConformancePackDetail(entry, context);
    });
};
const deserializeAws_json1_1ConformancePackEvaluationResult = (output, context) => {
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
const deserializeAws_json1_1ConformancePackInputParameter = (output, context) => {
    return {
        ParameterName: output.ParameterName !== undefined && output.ParameterName !== null ? output.ParameterName : undefined,
        ParameterValue: output.ParameterValue !== undefined && output.ParameterValue !== null ? output.ParameterValue : undefined,
    };
};
const deserializeAws_json1_1ConformancePackInputParameters = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConformancePackInputParameter(entry, context);
    });
};
const deserializeAws_json1_1ConformancePackRuleCompliance = (output, context) => {
    return {
        ComplianceType: output.ComplianceType !== undefined && output.ComplianceType !== null ? output.ComplianceType : undefined,
        ConfigRuleName: output.ConfigRuleName !== undefined && output.ConfigRuleName !== null ? output.ConfigRuleName : undefined,
        Controls: output.Controls !== undefined && output.Controls !== null
            ? deserializeAws_json1_1ControlsList(output.Controls, context)
            : undefined,
    };
};
const deserializeAws_json1_1ConformancePackRuleComplianceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConformancePackRuleCompliance(entry, context);
    });
};
const deserializeAws_json1_1ConformancePackRuleEvaluationResultsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConformancePackEvaluationResult(entry, context);
    });
};
const deserializeAws_json1_1ConformancePackStatusDetail = (output, context) => {
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
const deserializeAws_json1_1ConformancePackStatusDetailsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConformancePackStatusDetail(entry, context);
    });
};
const deserializeAws_json1_1ConformancePackTemplateValidationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ControlsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1DeleteEvaluationResultsResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteRemediationConfigurationResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteRemediationExceptionsResponse = (output, context) => {
    return {
        FailedBatches: output.FailedBatches !== undefined && output.FailedBatches !== null
            ? deserializeAws_json1_1FailedDeleteRemediationExceptionsBatches(output.FailedBatches, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteStoredQueryResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeliverConfigSnapshotResponse = (output, context) => {
    return {
        configSnapshotId: output.configSnapshotId !== undefined && output.configSnapshotId !== null ? output.configSnapshotId : undefined,
    };
};
const deserializeAws_json1_1DeliveryChannel = (output, context) => {
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
const deserializeAws_json1_1DeliveryChannelList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DeliveryChannel(entry, context);
    });
};
const deserializeAws_json1_1DeliveryChannelStatus = (output, context) => {
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
const deserializeAws_json1_1DeliveryChannelStatusList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DeliveryChannelStatus(entry, context);
    });
};
const deserializeAws_json1_1DescribeAggregateComplianceByConfigRulesResponse = (output, context) => {
    return {
        AggregateComplianceByConfigRules: output.AggregateComplianceByConfigRules !== undefined && output.AggregateComplianceByConfigRules !== null
            ? deserializeAws_json1_1AggregateComplianceByConfigRuleList(output.AggregateComplianceByConfigRules, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeAggregateComplianceByConformancePacksResponse = (output, context) => {
    return {
        AggregateComplianceByConformancePacks: output.AggregateComplianceByConformancePacks !== undefined &&
            output.AggregateComplianceByConformancePacks !== null
            ? deserializeAws_json1_1AggregateComplianceByConformancePackList(output.AggregateComplianceByConformancePacks, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeAggregationAuthorizationsResponse = (output, context) => {
    return {
        AggregationAuthorizations: output.AggregationAuthorizations !== undefined && output.AggregationAuthorizations !== null
            ? deserializeAws_json1_1AggregationAuthorizationList(output.AggregationAuthorizations, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeComplianceByConfigRuleResponse = (output, context) => {
    return {
        ComplianceByConfigRules: output.ComplianceByConfigRules !== undefined && output.ComplianceByConfigRules !== null
            ? deserializeAws_json1_1ComplianceByConfigRules(output.ComplianceByConfigRules, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeComplianceByResourceResponse = (output, context) => {
    return {
        ComplianceByResources: output.ComplianceByResources !== undefined && output.ComplianceByResources !== null
            ? deserializeAws_json1_1ComplianceByResources(output.ComplianceByResources, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeConfigRuleEvaluationStatusResponse = (output, context) => {
    return {
        ConfigRulesEvaluationStatus: output.ConfigRulesEvaluationStatus !== undefined && output.ConfigRulesEvaluationStatus !== null
            ? deserializeAws_json1_1ConfigRuleEvaluationStatusList(output.ConfigRulesEvaluationStatus, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeConfigRulesResponse = (output, context) => {
    return {
        ConfigRules: output.ConfigRules !== undefined && output.ConfigRules !== null
            ? deserializeAws_json1_1ConfigRules(output.ConfigRules, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusResponse = (output, context) => {
    return {
        AggregatedSourceStatusList: output.AggregatedSourceStatusList !== undefined && output.AggregatedSourceStatusList !== null
            ? deserializeAws_json1_1AggregatedSourceStatusList(output.AggregatedSourceStatusList, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeConfigurationAggregatorsResponse = (output, context) => {
    return {
        ConfigurationAggregators: output.ConfigurationAggregators !== undefined && output.ConfigurationAggregators !== null
            ? deserializeAws_json1_1ConfigurationAggregatorList(output.ConfigurationAggregators, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeConfigurationRecordersResponse = (output, context) => {
    return {
        ConfigurationRecorders: output.ConfigurationRecorders !== undefined && output.ConfigurationRecorders !== null
            ? deserializeAws_json1_1ConfigurationRecorderList(output.ConfigurationRecorders, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeConfigurationRecorderStatusResponse = (output, context) => {
    return {
        ConfigurationRecordersStatus: output.ConfigurationRecordersStatus !== undefined && output.ConfigurationRecordersStatus !== null
            ? deserializeAws_json1_1ConfigurationRecorderStatusList(output.ConfigurationRecordersStatus, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeConformancePackComplianceResponse = (output, context) => {
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
const deserializeAws_json1_1DescribeConformancePacksResponse = (output, context) => {
    return {
        ConformancePackDetails: output.ConformancePackDetails !== undefined && output.ConformancePackDetails !== null
            ? deserializeAws_json1_1ConformancePackDetailList(output.ConformancePackDetails, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeConformancePackStatusResponse = (output, context) => {
    return {
        ConformancePackStatusDetails: output.ConformancePackStatusDetails !== undefined && output.ConformancePackStatusDetails !== null
            ? deserializeAws_json1_1ConformancePackStatusDetailsList(output.ConformancePackStatusDetails, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeDeliveryChannelsResponse = (output, context) => {
    return {
        DeliveryChannels: output.DeliveryChannels !== undefined && output.DeliveryChannels !== null
            ? deserializeAws_json1_1DeliveryChannelList(output.DeliveryChannels, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeDeliveryChannelStatusResponse = (output, context) => {
    return {
        DeliveryChannelsStatus: output.DeliveryChannelsStatus !== undefined && output.DeliveryChannelsStatus !== null
            ? deserializeAws_json1_1DeliveryChannelStatusList(output.DeliveryChannelsStatus, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeOrganizationConfigRulesResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        OrganizationConfigRules: output.OrganizationConfigRules !== undefined && output.OrganizationConfigRules !== null
            ? deserializeAws_json1_1OrganizationConfigRules(output.OrganizationConfigRules, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeOrganizationConfigRuleStatusesResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        OrganizationConfigRuleStatuses: output.OrganizationConfigRuleStatuses !== undefined && output.OrganizationConfigRuleStatuses !== null
            ? deserializeAws_json1_1OrganizationConfigRuleStatuses(output.OrganizationConfigRuleStatuses, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeOrganizationConformancePacksResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        OrganizationConformancePacks: output.OrganizationConformancePacks !== undefined && output.OrganizationConformancePacks !== null
            ? deserializeAws_json1_1OrganizationConformancePacks(output.OrganizationConformancePacks, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeOrganizationConformancePackStatusesResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        OrganizationConformancePackStatuses: output.OrganizationConformancePackStatuses !== undefined && output.OrganizationConformancePackStatuses !== null
            ? deserializeAws_json1_1OrganizationConformancePackStatuses(output.OrganizationConformancePackStatuses, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribePendingAggregationRequestsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        PendingAggregationRequests: output.PendingAggregationRequests !== undefined && output.PendingAggregationRequests !== null
            ? deserializeAws_json1_1PendingAggregationRequestList(output.PendingAggregationRequests, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeRemediationConfigurationsResponse = (output, context) => {
    return {
        RemediationConfigurations: output.RemediationConfigurations !== undefined && output.RemediationConfigurations !== null
            ? deserializeAws_json1_1RemediationConfigurations(output.RemediationConfigurations, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeRemediationExceptionsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        RemediationExceptions: output.RemediationExceptions !== undefined && output.RemediationExceptions !== null
            ? deserializeAws_json1_1RemediationExceptions(output.RemediationExceptions, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeRemediationExecutionStatusResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        RemediationExecutionStatuses: output.RemediationExecutionStatuses !== undefined && output.RemediationExecutionStatuses !== null
            ? deserializeAws_json1_1RemediationExecutionStatuses(output.RemediationExecutionStatuses, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeRetentionConfigurationsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        RetentionConfigurations: output.RetentionConfigurations !== undefined && output.RetentionConfigurations !== null
            ? deserializeAws_json1_1RetentionConfigurationList(output.RetentionConfigurations, context)
            : undefined,
    };
};
const deserializeAws_json1_1DiscoveredResourceIdentifierList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AggregateResourceIdentifier(entry, context);
    });
};
const deserializeAws_json1_1Evaluation = (output, context) => {
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
const deserializeAws_json1_1EvaluationResult = (output, context) => {
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
const deserializeAws_json1_1EvaluationResultIdentifier = (output, context) => {
    return {
        EvaluationResultQualifier: output.EvaluationResultQualifier !== undefined && output.EvaluationResultQualifier !== null
            ? deserializeAws_json1_1EvaluationResultQualifier(output.EvaluationResultQualifier, context)
            : undefined,
        OrderingTimestamp: output.OrderingTimestamp !== undefined && output.OrderingTimestamp !== null
            ? new Date(Math.round(output.OrderingTimestamp * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1EvaluationResultQualifier = (output, context) => {
    return {
        ConfigRuleName: output.ConfigRuleName !== undefined && output.ConfigRuleName !== null ? output.ConfigRuleName : undefined,
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    };
};
const deserializeAws_json1_1EvaluationResults = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EvaluationResult(entry, context);
    });
};
const deserializeAws_json1_1Evaluations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Evaluation(entry, context);
    });
};
const deserializeAws_json1_1ExcludedAccounts = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ExecutionControls = (output, context) => {
    return {
        SsmControls: output.SsmControls !== undefined && output.SsmControls !== null
            ? deserializeAws_json1_1SsmControls(output.SsmControls, context)
            : undefined,
    };
};
const deserializeAws_json1_1FailedDeleteRemediationExceptionsBatch = (output, context) => {
    return {
        FailedItems: output.FailedItems !== undefined && output.FailedItems !== null
            ? deserializeAws_json1_1RemediationExceptionResourceKeys(output.FailedItems, context)
            : undefined,
        FailureMessage: output.FailureMessage !== undefined && output.FailureMessage !== null ? output.FailureMessage : undefined,
    };
};
const deserializeAws_json1_1FailedDeleteRemediationExceptionsBatches = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FailedDeleteRemediationExceptionsBatch(entry, context);
    });
};
const deserializeAws_json1_1FailedRemediationBatch = (output, context) => {
    return {
        FailedItems: output.FailedItems !== undefined && output.FailedItems !== null
            ? deserializeAws_json1_1RemediationConfigurations(output.FailedItems, context)
            : undefined,
        FailureMessage: output.FailureMessage !== undefined && output.FailureMessage !== null ? output.FailureMessage : undefined,
    };
};
const deserializeAws_json1_1FailedRemediationBatches = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FailedRemediationBatch(entry, context);
    });
};
const deserializeAws_json1_1FailedRemediationExceptionBatch = (output, context) => {
    return {
        FailedItems: output.FailedItems !== undefined && output.FailedItems !== null
            ? deserializeAws_json1_1RemediationExceptions(output.FailedItems, context)
            : undefined,
        FailureMessage: output.FailureMessage !== undefined && output.FailureMessage !== null ? output.FailureMessage : undefined,
    };
};
const deserializeAws_json1_1FailedRemediationExceptionBatches = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FailedRemediationExceptionBatch(entry, context);
    });
};
const deserializeAws_json1_1FieldInfo = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1FieldInfoList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FieldInfo(entry, context);
    });
};
const deserializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleResponse = (output, context) => {
    return {
        AggregateEvaluationResults: output.AggregateEvaluationResults !== undefined && output.AggregateEvaluationResults !== null
            ? deserializeAws_json1_1AggregateEvaluationResultList(output.AggregateEvaluationResults, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1GetAggregateConfigRuleComplianceSummaryResponse = (output, context) => {
    return {
        AggregateComplianceCounts: output.AggregateComplianceCounts !== undefined && output.AggregateComplianceCounts !== null
            ? deserializeAws_json1_1AggregateComplianceCountList(output.AggregateComplianceCounts, context)
            : undefined,
        GroupByKey: output.GroupByKey !== undefined && output.GroupByKey !== null ? output.GroupByKey : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1GetAggregateConformancePackComplianceSummaryResponse = (output, context) => {
    return {
        AggregateConformancePackComplianceSummaries: output.AggregateConformancePackComplianceSummaries !== undefined &&
            output.AggregateConformancePackComplianceSummaries !== null
            ? deserializeAws_json1_1AggregateConformancePackComplianceSummaryList(output.AggregateConformancePackComplianceSummaries, context)
            : undefined,
        GroupByKey: output.GroupByKey !== undefined && output.GroupByKey !== null ? output.GroupByKey : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1GetAggregateDiscoveredResourceCountsResponse = (output, context) => {
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
const deserializeAws_json1_1GetAggregateResourceConfigResponse = (output, context) => {
    return {
        ConfigurationItem: output.ConfigurationItem !== undefined && output.ConfigurationItem !== null
            ? deserializeAws_json1_1ConfigurationItem(output.ConfigurationItem, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetComplianceDetailsByConfigRuleResponse = (output, context) => {
    return {
        EvaluationResults: output.EvaluationResults !== undefined && output.EvaluationResults !== null
            ? deserializeAws_json1_1EvaluationResults(output.EvaluationResults, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1GetComplianceDetailsByResourceResponse = (output, context) => {
    return {
        EvaluationResults: output.EvaluationResults !== undefined && output.EvaluationResults !== null
            ? deserializeAws_json1_1EvaluationResults(output.EvaluationResults, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1GetComplianceSummaryByConfigRuleResponse = (output, context) => {
    return {
        ComplianceSummary: output.ComplianceSummary !== undefined && output.ComplianceSummary !== null
            ? deserializeAws_json1_1ComplianceSummary(output.ComplianceSummary, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetComplianceSummaryByResourceTypeResponse = (output, context) => {
    return {
        ComplianceSummariesByResourceType: output.ComplianceSummariesByResourceType !== undefined && output.ComplianceSummariesByResourceType !== null
            ? deserializeAws_json1_1ComplianceSummariesByResourceType(output.ComplianceSummariesByResourceType, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetConformancePackComplianceDetailsResponse = (output, context) => {
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
const deserializeAws_json1_1GetConformancePackComplianceSummaryResponse = (output, context) => {
    return {
        ConformancePackComplianceSummaryList: output.ConformancePackComplianceSummaryList !== undefined && output.ConformancePackComplianceSummaryList !== null
            ? deserializeAws_json1_1ConformancePackComplianceSummaryList(output.ConformancePackComplianceSummaryList, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1GetDiscoveredResourceCountsResponse = (output, context) => {
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
const deserializeAws_json1_1GetOrganizationConfigRuleDetailedStatusResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        OrganizationConfigRuleDetailedStatus: output.OrganizationConfigRuleDetailedStatus !== undefined && output.OrganizationConfigRuleDetailedStatus !== null
            ? deserializeAws_json1_1OrganizationConfigRuleDetailedStatus(output.OrganizationConfigRuleDetailedStatus, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetOrganizationConformancePackDetailedStatusResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        OrganizationConformancePackDetailedStatuses: output.OrganizationConformancePackDetailedStatuses !== undefined &&
            output.OrganizationConformancePackDetailedStatuses !== null
            ? deserializeAws_json1_1OrganizationConformancePackDetailedStatuses(output.OrganizationConformancePackDetailedStatuses, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetResourceConfigHistoryResponse = (output, context) => {
    return {
        configurationItems: output.configurationItems !== undefined && output.configurationItems !== null
            ? deserializeAws_json1_1ConfigurationItemList(output.configurationItems, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1GetStoredQueryResponse = (output, context) => {
    return {
        StoredQuery: output.StoredQuery !== undefined && output.StoredQuery !== null
            ? deserializeAws_json1_1StoredQuery(output.StoredQuery, context)
            : undefined,
    };
};
const deserializeAws_json1_1GroupedResourceCount = (output, context) => {
    return {
        GroupName: output.GroupName !== undefined && output.GroupName !== null ? output.GroupName : undefined,
        ResourceCount: output.ResourceCount !== undefined && output.ResourceCount !== null ? output.ResourceCount : undefined,
    };
};
const deserializeAws_json1_1GroupedResourceCountList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1GroupedResourceCount(entry, context);
    });
};
const deserializeAws_json1_1InsufficientDeliveryPolicyException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InsufficientPermissionsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidConfigurationRecorderNameException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidDeliveryChannelNameException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidExpressionException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidLimitException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidNextTokenException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidParameterValueException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidRecordingGroupException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidResultTokenException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidRoleException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidS3KeyPrefixException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidS3KmsKeyArnException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidSNSTopicARNException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidTimeRangeException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1LastDeliveryChannelDeleteFailedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ListAggregateDiscoveredResourcesResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        ResourceIdentifiers: output.ResourceIdentifiers !== undefined && output.ResourceIdentifiers !== null
            ? deserializeAws_json1_1DiscoveredResourceIdentifierList(output.ResourceIdentifiers, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListDiscoveredResourcesResponse = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        resourceIdentifiers: output.resourceIdentifiers !== undefined && output.resourceIdentifiers !== null
            ? deserializeAws_json1_1ResourceIdentifierList(output.resourceIdentifiers, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListStoredQueriesResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        StoredQueryMetadata: output.StoredQueryMetadata !== undefined && output.StoredQueryMetadata !== null
            ? deserializeAws_json1_1StoredQueryMetadataList(output.StoredQueryMetadata, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagList(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1MaxActiveResourcesExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1MaxNumberOfConfigRulesExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1MaxNumberOfConfigurationRecordersExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1MaxNumberOfConformancePacksExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1MaxNumberOfDeliveryChannelsExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1MaxNumberOfOrganizationConfigRulesExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1MaxNumberOfOrganizationConformancePacksExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1MaxNumberOfRetentionConfigurationsExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1MemberAccountStatus = (output, context) => {
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
const deserializeAws_json1_1NoAvailableConfigurationRecorderException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1NoAvailableDeliveryChannelException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1NoAvailableOrganizationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1NoRunningConfigurationRecorderException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1NoSuchBucketException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1NoSuchConfigRuleException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1NoSuchConfigRuleInConformancePackException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1NoSuchConfigurationAggregatorException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1NoSuchConfigurationRecorderException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1NoSuchConformancePackException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1NoSuchDeliveryChannelException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1NoSuchOrganizationConfigRuleException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1NoSuchOrganizationConformancePackException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1NoSuchRemediationConfigurationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1NoSuchRemediationExceptionException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1NoSuchRetentionConfigurationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1OrganizationAccessDeniedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1OrganizationAggregationSource = (output, context) => {
    return {
        AllAwsRegions: output.AllAwsRegions !== undefined && output.AllAwsRegions !== null ? output.AllAwsRegions : undefined,
        AwsRegions: output.AwsRegions !== undefined && output.AwsRegions !== null
            ? deserializeAws_json1_1AggregatorRegionList(output.AwsRegions, context)
            : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
    };
};
const deserializeAws_json1_1OrganizationAllFeaturesNotEnabledException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1OrganizationConfigRule = (output, context) => {
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
const deserializeAws_json1_1OrganizationConfigRuleDetailedStatus = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MemberAccountStatus(entry, context);
    });
};
const deserializeAws_json1_1OrganizationConfigRules = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OrganizationConfigRule(entry, context);
    });
};
const deserializeAws_json1_1OrganizationConfigRuleStatus = (output, context) => {
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
const deserializeAws_json1_1OrganizationConfigRuleStatuses = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OrganizationConfigRuleStatus(entry, context);
    });
};
const deserializeAws_json1_1OrganizationConfigRuleTriggerTypes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1OrganizationConformancePack = (output, context) => {
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
const deserializeAws_json1_1OrganizationConformancePackDetailedStatus = (output, context) => {
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
const deserializeAws_json1_1OrganizationConformancePackDetailedStatuses = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OrganizationConformancePackDetailedStatus(entry, context);
    });
};
const deserializeAws_json1_1OrganizationConformancePacks = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OrganizationConformancePack(entry, context);
    });
};
const deserializeAws_json1_1OrganizationConformancePackStatus = (output, context) => {
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
const deserializeAws_json1_1OrganizationConformancePackStatuses = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OrganizationConformancePackStatus(entry, context);
    });
};
const deserializeAws_json1_1OrganizationConformancePackTemplateValidationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1OrganizationCustomRuleMetadata = (output, context) => {
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
const deserializeAws_json1_1OrganizationManagedRuleMetadata = (output, context) => {
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
const deserializeAws_json1_1OversizedConfigurationItemException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1PendingAggregationRequest = (output, context) => {
    return {
        RequesterAccountId: output.RequesterAccountId !== undefined && output.RequesterAccountId !== null
            ? output.RequesterAccountId
            : undefined,
        RequesterAwsRegion: output.RequesterAwsRegion !== undefined && output.RequesterAwsRegion !== null
            ? output.RequesterAwsRegion
            : undefined,
    };
};
const deserializeAws_json1_1PendingAggregationRequestList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PendingAggregationRequest(entry, context);
    });
};
const deserializeAws_json1_1PutAggregationAuthorizationResponse = (output, context) => {
    return {
        AggregationAuthorization: output.AggregationAuthorization !== undefined && output.AggregationAuthorization !== null
            ? deserializeAws_json1_1AggregationAuthorization(output.AggregationAuthorization, context)
            : undefined,
    };
};
const deserializeAws_json1_1PutConfigurationAggregatorResponse = (output, context) => {
    return {
        ConfigurationAggregator: output.ConfigurationAggregator !== undefined && output.ConfigurationAggregator !== null
            ? deserializeAws_json1_1ConfigurationAggregator(output.ConfigurationAggregator, context)
            : undefined,
    };
};
const deserializeAws_json1_1PutConformancePackResponse = (output, context) => {
    return {
        ConformancePackArn: output.ConformancePackArn !== undefined && output.ConformancePackArn !== null
            ? output.ConformancePackArn
            : undefined,
    };
};
const deserializeAws_json1_1PutEvaluationsResponse = (output, context) => {
    return {
        FailedEvaluations: output.FailedEvaluations !== undefined && output.FailedEvaluations !== null
            ? deserializeAws_json1_1Evaluations(output.FailedEvaluations, context)
            : undefined,
    };
};
const deserializeAws_json1_1PutExternalEvaluationResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1PutOrganizationConfigRuleResponse = (output, context) => {
    return {
        OrganizationConfigRuleArn: output.OrganizationConfigRuleArn !== undefined && output.OrganizationConfigRuleArn !== null
            ? output.OrganizationConfigRuleArn
            : undefined,
    };
};
const deserializeAws_json1_1PutOrganizationConformancePackResponse = (output, context) => {
    return {
        OrganizationConformancePackArn: output.OrganizationConformancePackArn !== undefined && output.OrganizationConformancePackArn !== null
            ? output.OrganizationConformancePackArn
            : undefined,
    };
};
const deserializeAws_json1_1PutRemediationConfigurationsResponse = (output, context) => {
    return {
        FailedBatches: output.FailedBatches !== undefined && output.FailedBatches !== null
            ? deserializeAws_json1_1FailedRemediationBatches(output.FailedBatches, context)
            : undefined,
    };
};
const deserializeAws_json1_1PutRemediationExceptionsResponse = (output, context) => {
    return {
        FailedBatches: output.FailedBatches !== undefined && output.FailedBatches !== null
            ? deserializeAws_json1_1FailedRemediationExceptionBatches(output.FailedBatches, context)
            : undefined,
    };
};
const deserializeAws_json1_1PutRetentionConfigurationResponse = (output, context) => {
    return {
        RetentionConfiguration: output.RetentionConfiguration !== undefined && output.RetentionConfiguration !== null
            ? deserializeAws_json1_1RetentionConfiguration(output.RetentionConfiguration, context)
            : undefined,
    };
};
const deserializeAws_json1_1PutStoredQueryResponse = (output, context) => {
    return {
        QueryArn: output.QueryArn !== undefined && output.QueryArn !== null ? output.QueryArn : undefined,
    };
};
const deserializeAws_json1_1QueryInfo = (output, context) => {
    return {
        SelectFields: output.SelectFields !== undefined && output.SelectFields !== null
            ? deserializeAws_json1_1FieldInfoList(output.SelectFields, context)
            : undefined,
    };
};
const deserializeAws_json1_1RecordingGroup = (output, context) => {
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
const deserializeAws_json1_1RelatedEventList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1Relationship = (output, context) => {
    return {
        relationshipName: output.relationshipName !== undefined && output.relationshipName !== null ? output.relationshipName : undefined,
        resourceId: output.resourceId !== undefined && output.resourceId !== null ? output.resourceId : undefined,
        resourceName: output.resourceName !== undefined && output.resourceName !== null ? output.resourceName : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    };
};
const deserializeAws_json1_1RelationshipList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Relationship(entry, context);
    });
};
const deserializeAws_json1_1RemediationConfiguration = (output, context) => {
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
const deserializeAws_json1_1RemediationConfigurations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RemediationConfiguration(entry, context);
    });
};
const deserializeAws_json1_1RemediationException = (output, context) => {
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
const deserializeAws_json1_1RemediationExceptionResourceKey = (output, context) => {
    return {
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    };
};
const deserializeAws_json1_1RemediationExceptionResourceKeys = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RemediationExceptionResourceKey(entry, context);
    });
};
const deserializeAws_json1_1RemediationExceptions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RemediationException(entry, context);
    });
};
const deserializeAws_json1_1RemediationExecutionStatus = (output, context) => {
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
const deserializeAws_json1_1RemediationExecutionStatuses = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RemediationExecutionStatus(entry, context);
    });
};
const deserializeAws_json1_1RemediationExecutionStep = (output, context) => {
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
const deserializeAws_json1_1RemediationExecutionSteps = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RemediationExecutionStep(entry, context);
    });
};
const deserializeAws_json1_1RemediationInProgressException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1RemediationParameters = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_1RemediationParameterValue(value, context),
        };
    }, {});
};
const deserializeAws_json1_1RemediationParameterValue = (output, context) => {
    return {
        ResourceValue: output.ResourceValue !== undefined && output.ResourceValue !== null
            ? deserializeAws_json1_1ResourceValue(output.ResourceValue, context)
            : undefined,
        StaticValue: output.StaticValue !== undefined && output.StaticValue !== null
            ? deserializeAws_json1_1StaticValue(output.StaticValue, context)
            : undefined,
    };
};
const deserializeAws_json1_1ResourceConcurrentModificationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ResourceCount = (output, context) => {
    return {
        count: output.count !== undefined && output.count !== null ? output.count : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    };
};
const deserializeAws_json1_1ResourceCounts = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResourceCount(entry, context);
    });
};
const deserializeAws_json1_1ResourceIdentifier = (output, context) => {
    return {
        resourceDeletionTime: output.resourceDeletionTime !== undefined && output.resourceDeletionTime !== null
            ? new Date(Math.round(output.resourceDeletionTime * 1000))
            : undefined,
        resourceId: output.resourceId !== undefined && output.resourceId !== null ? output.resourceId : undefined,
        resourceName: output.resourceName !== undefined && output.resourceName !== null ? output.resourceName : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    };
};
const deserializeAws_json1_1ResourceIdentifierList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResourceIdentifier(entry, context);
    });
};
const deserializeAws_json1_1ResourceInUseException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ResourceKey = (output, context) => {
    return {
        resourceId: output.resourceId !== undefined && output.resourceId !== null ? output.resourceId : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    };
};
const deserializeAws_json1_1ResourceKeys = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResourceKey(entry, context);
    });
};
const deserializeAws_json1_1ResourceNotDiscoveredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ResourceTypeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ResourceTypesScope = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ResourceValue = (output, context) => {
    return {
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1Results = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1RetentionConfiguration = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        RetentionPeriodInDays: output.RetentionPeriodInDays !== undefined && output.RetentionPeriodInDays !== null
            ? output.RetentionPeriodInDays
            : undefined,
    };
};
const deserializeAws_json1_1RetentionConfigurationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RetentionConfiguration(entry, context);
    });
};
const deserializeAws_json1_1Scope = (output, context) => {
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
const deserializeAws_json1_1SelectAggregateResourceConfigResponse = (output, context) => {
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
const deserializeAws_json1_1SelectResourceConfigResponse = (output, context) => {
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
const deserializeAws_json1_1Source = (output, context) => {
    return {
        Owner: output.Owner !== undefined && output.Owner !== null ? output.Owner : undefined,
        SourceDetails: output.SourceDetails !== undefined && output.SourceDetails !== null
            ? deserializeAws_json1_1SourceDetails(output.SourceDetails, context)
            : undefined,
        SourceIdentifier: output.SourceIdentifier !== undefined && output.SourceIdentifier !== null ? output.SourceIdentifier : undefined,
    };
};
const deserializeAws_json1_1SourceDetail = (output, context) => {
    return {
        EventSource: output.EventSource !== undefined && output.EventSource !== null ? output.EventSource : undefined,
        MaximumExecutionFrequency: output.MaximumExecutionFrequency !== undefined && output.MaximumExecutionFrequency !== null
            ? output.MaximumExecutionFrequency
            : undefined,
        MessageType: output.MessageType !== undefined && output.MessageType !== null ? output.MessageType : undefined,
    };
};
const deserializeAws_json1_1SourceDetails = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SourceDetail(entry, context);
    });
};
const deserializeAws_json1_1SsmControls = (output, context) => {
    return {
        ConcurrentExecutionRatePercentage: output.ConcurrentExecutionRatePercentage !== undefined && output.ConcurrentExecutionRatePercentage !== null
            ? output.ConcurrentExecutionRatePercentage
            : undefined,
        ErrorPercentage: output.ErrorPercentage !== undefined && output.ErrorPercentage !== null ? output.ErrorPercentage : undefined,
    };
};
const deserializeAws_json1_1StartConfigRulesEvaluationResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1StartRemediationExecutionResponse = (output, context) => {
    return {
        FailedItems: output.FailedItems !== undefined && output.FailedItems !== null
            ? deserializeAws_json1_1ResourceKeys(output.FailedItems, context)
            : undefined,
        FailureMessage: output.FailureMessage !== undefined && output.FailureMessage !== null ? output.FailureMessage : undefined,
    };
};
const deserializeAws_json1_1StaticParameterValues = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1StaticValue = (output, context) => {
    return {
        Values: output.Values !== undefined && output.Values !== null
            ? deserializeAws_json1_1StaticParameterValues(output.Values, context)
            : undefined,
    };
};
const deserializeAws_json1_1StoredQuery = (output, context) => {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Expression: output.Expression !== undefined && output.Expression !== null ? output.Expression : undefined,
        QueryArn: output.QueryArn !== undefined && output.QueryArn !== null ? output.QueryArn : undefined,
        QueryId: output.QueryId !== undefined && output.QueryId !== null ? output.QueryId : undefined,
        QueryName: output.QueryName !== undefined && output.QueryName !== null ? output.QueryName : undefined,
    };
};
const deserializeAws_json1_1StoredQueryMetadata = (output, context) => {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        QueryArn: output.QueryArn !== undefined && output.QueryArn !== null ? output.QueryArn : undefined,
        QueryId: output.QueryId !== undefined && output.QueryId !== null ? output.QueryId : undefined,
        QueryName: output.QueryName !== undefined && output.QueryName !== null ? output.QueryName : undefined,
    };
};
const deserializeAws_json1_1StoredQueryMetadataList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1StoredQueryMetadata(entry, context);
    });
};
const deserializeAws_json1_1SupplementaryConfiguration = (output, context) => {
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
const deserializeAws_json1_1Tags = (output, context) => {
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
const deserializeAws_json1_1TooManyTagsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1UnprocessedResourceIdentifierList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AggregateResourceIdentifier(entry, context);
    });
};
const deserializeAws_json1_1ValidationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
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