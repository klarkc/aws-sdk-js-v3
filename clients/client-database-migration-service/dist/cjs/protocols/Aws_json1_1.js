"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_json1_1RemoveTagsFromResourceCommand = exports.serializeAws_json1_1ReloadTablesCommand = exports.serializeAws_json1_1RefreshSchemasCommand = exports.serializeAws_json1_1RebootReplicationInstanceCommand = exports.serializeAws_json1_1MoveReplicationTaskCommand = exports.serializeAws_json1_1ModifyReplicationTaskCommand = exports.serializeAws_json1_1ModifyReplicationSubnetGroupCommand = exports.serializeAws_json1_1ModifyReplicationInstanceCommand = exports.serializeAws_json1_1ModifyEventSubscriptionCommand = exports.serializeAws_json1_1ModifyEndpointCommand = exports.serializeAws_json1_1ListTagsForResourceCommand = exports.serializeAws_json1_1ImportCertificateCommand = exports.serializeAws_json1_1DescribeTableStatisticsCommand = exports.serializeAws_json1_1DescribeSchemasCommand = exports.serializeAws_json1_1DescribeReplicationTasksCommand = exports.serializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsCommand = exports.serializeAws_json1_1DescribeReplicationTaskAssessmentRunsCommand = exports.serializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommand = exports.serializeAws_json1_1DescribeReplicationSubnetGroupsCommand = exports.serializeAws_json1_1DescribeReplicationInstanceTaskLogsCommand = exports.serializeAws_json1_1DescribeReplicationInstancesCommand = exports.serializeAws_json1_1DescribeRefreshSchemasStatusCommand = exports.serializeAws_json1_1DescribePendingMaintenanceActionsCommand = exports.serializeAws_json1_1DescribeOrderableReplicationInstancesCommand = exports.serializeAws_json1_1DescribeEventSubscriptionsCommand = exports.serializeAws_json1_1DescribeEventsCommand = exports.serializeAws_json1_1DescribeEventCategoriesCommand = exports.serializeAws_json1_1DescribeEndpointTypesCommand = exports.serializeAws_json1_1DescribeEndpointSettingsCommand = exports.serializeAws_json1_1DescribeEndpointsCommand = exports.serializeAws_json1_1DescribeConnectionsCommand = exports.serializeAws_json1_1DescribeCertificatesCommand = exports.serializeAws_json1_1DescribeApplicableIndividualAssessmentsCommand = exports.serializeAws_json1_1DescribeAccountAttributesCommand = exports.serializeAws_json1_1DeleteReplicationTaskAssessmentRunCommand = exports.serializeAws_json1_1DeleteReplicationTaskCommand = exports.serializeAws_json1_1DeleteReplicationSubnetGroupCommand = exports.serializeAws_json1_1DeleteReplicationInstanceCommand = exports.serializeAws_json1_1DeleteEventSubscriptionCommand = exports.serializeAws_json1_1DeleteEndpointCommand = exports.serializeAws_json1_1DeleteConnectionCommand = exports.serializeAws_json1_1DeleteCertificateCommand = exports.serializeAws_json1_1CreateReplicationTaskCommand = exports.serializeAws_json1_1CreateReplicationSubnetGroupCommand = exports.serializeAws_json1_1CreateReplicationInstanceCommand = exports.serializeAws_json1_1CreateEventSubscriptionCommand = exports.serializeAws_json1_1CreateEndpointCommand = exports.serializeAws_json1_1CancelReplicationTaskAssessmentRunCommand = exports.serializeAws_json1_1ApplyPendingMaintenanceActionCommand = exports.serializeAws_json1_1AddTagsToResourceCommand = void 0;
exports.deserializeAws_json1_1ModifyReplicationTaskCommand = exports.deserializeAws_json1_1ModifyReplicationSubnetGroupCommand = exports.deserializeAws_json1_1ModifyReplicationInstanceCommand = exports.deserializeAws_json1_1ModifyEventSubscriptionCommand = exports.deserializeAws_json1_1ModifyEndpointCommand = exports.deserializeAws_json1_1ListTagsForResourceCommand = exports.deserializeAws_json1_1ImportCertificateCommand = exports.deserializeAws_json1_1DescribeTableStatisticsCommand = exports.deserializeAws_json1_1DescribeSchemasCommand = exports.deserializeAws_json1_1DescribeReplicationTasksCommand = exports.deserializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsCommand = exports.deserializeAws_json1_1DescribeReplicationTaskAssessmentRunsCommand = exports.deserializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommand = exports.deserializeAws_json1_1DescribeReplicationSubnetGroupsCommand = exports.deserializeAws_json1_1DescribeReplicationInstanceTaskLogsCommand = exports.deserializeAws_json1_1DescribeReplicationInstancesCommand = exports.deserializeAws_json1_1DescribeRefreshSchemasStatusCommand = exports.deserializeAws_json1_1DescribePendingMaintenanceActionsCommand = exports.deserializeAws_json1_1DescribeOrderableReplicationInstancesCommand = exports.deserializeAws_json1_1DescribeEventSubscriptionsCommand = exports.deserializeAws_json1_1DescribeEventsCommand = exports.deserializeAws_json1_1DescribeEventCategoriesCommand = exports.deserializeAws_json1_1DescribeEndpointTypesCommand = exports.deserializeAws_json1_1DescribeEndpointSettingsCommand = exports.deserializeAws_json1_1DescribeEndpointsCommand = exports.deserializeAws_json1_1DescribeConnectionsCommand = exports.deserializeAws_json1_1DescribeCertificatesCommand = exports.deserializeAws_json1_1DescribeApplicableIndividualAssessmentsCommand = exports.deserializeAws_json1_1DescribeAccountAttributesCommand = exports.deserializeAws_json1_1DeleteReplicationTaskAssessmentRunCommand = exports.deserializeAws_json1_1DeleteReplicationTaskCommand = exports.deserializeAws_json1_1DeleteReplicationSubnetGroupCommand = exports.deserializeAws_json1_1DeleteReplicationInstanceCommand = exports.deserializeAws_json1_1DeleteEventSubscriptionCommand = exports.deserializeAws_json1_1DeleteEndpointCommand = exports.deserializeAws_json1_1DeleteConnectionCommand = exports.deserializeAws_json1_1DeleteCertificateCommand = exports.deserializeAws_json1_1CreateReplicationTaskCommand = exports.deserializeAws_json1_1CreateReplicationSubnetGroupCommand = exports.deserializeAws_json1_1CreateReplicationInstanceCommand = exports.deserializeAws_json1_1CreateEventSubscriptionCommand = exports.deserializeAws_json1_1CreateEndpointCommand = exports.deserializeAws_json1_1CancelReplicationTaskAssessmentRunCommand = exports.deserializeAws_json1_1ApplyPendingMaintenanceActionCommand = exports.deserializeAws_json1_1AddTagsToResourceCommand = exports.serializeAws_json1_1TestConnectionCommand = exports.serializeAws_json1_1StopReplicationTaskCommand = exports.serializeAws_json1_1StartReplicationTaskAssessmentRunCommand = exports.serializeAws_json1_1StartReplicationTaskAssessmentCommand = exports.serializeAws_json1_1StartReplicationTaskCommand = void 0;
exports.deserializeAws_json1_1TestConnectionCommand = exports.deserializeAws_json1_1StopReplicationTaskCommand = exports.deserializeAws_json1_1StartReplicationTaskAssessmentRunCommand = exports.deserializeAws_json1_1StartReplicationTaskAssessmentCommand = exports.deserializeAws_json1_1StartReplicationTaskCommand = exports.deserializeAws_json1_1RemoveTagsFromResourceCommand = exports.deserializeAws_json1_1ReloadTablesCommand = exports.deserializeAws_json1_1RefreshSchemasCommand = exports.deserializeAws_json1_1RebootReplicationInstanceCommand = exports.deserializeAws_json1_1MoveReplicationTaskCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1AddTagsToResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.AddTagsToResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AddTagsToResourceMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AddTagsToResourceCommand = serializeAws_json1_1AddTagsToResourceCommand;
const serializeAws_json1_1ApplyPendingMaintenanceActionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.ApplyPendingMaintenanceAction",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ApplyPendingMaintenanceActionMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ApplyPendingMaintenanceActionCommand = serializeAws_json1_1ApplyPendingMaintenanceActionCommand;
const serializeAws_json1_1CancelReplicationTaskAssessmentRunCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.CancelReplicationTaskAssessmentRun",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CancelReplicationTaskAssessmentRunMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CancelReplicationTaskAssessmentRunCommand = serializeAws_json1_1CancelReplicationTaskAssessmentRunCommand;
const serializeAws_json1_1CreateEndpointCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.CreateEndpoint",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateEndpointMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateEndpointCommand = serializeAws_json1_1CreateEndpointCommand;
const serializeAws_json1_1CreateEventSubscriptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.CreateEventSubscription",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateEventSubscriptionMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateEventSubscriptionCommand = serializeAws_json1_1CreateEventSubscriptionCommand;
const serializeAws_json1_1CreateReplicationInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.CreateReplicationInstance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateReplicationInstanceMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateReplicationInstanceCommand = serializeAws_json1_1CreateReplicationInstanceCommand;
const serializeAws_json1_1CreateReplicationSubnetGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.CreateReplicationSubnetGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateReplicationSubnetGroupMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateReplicationSubnetGroupCommand = serializeAws_json1_1CreateReplicationSubnetGroupCommand;
const serializeAws_json1_1CreateReplicationTaskCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.CreateReplicationTask",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateReplicationTaskMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateReplicationTaskCommand = serializeAws_json1_1CreateReplicationTaskCommand;
const serializeAws_json1_1DeleteCertificateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.DeleteCertificate",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteCertificateMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteCertificateCommand = serializeAws_json1_1DeleteCertificateCommand;
const serializeAws_json1_1DeleteConnectionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.DeleteConnection",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteConnectionMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteConnectionCommand = serializeAws_json1_1DeleteConnectionCommand;
const serializeAws_json1_1DeleteEndpointCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.DeleteEndpoint",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteEndpointMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteEndpointCommand = serializeAws_json1_1DeleteEndpointCommand;
const serializeAws_json1_1DeleteEventSubscriptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.DeleteEventSubscription",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteEventSubscriptionMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteEventSubscriptionCommand = serializeAws_json1_1DeleteEventSubscriptionCommand;
const serializeAws_json1_1DeleteReplicationInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.DeleteReplicationInstance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteReplicationInstanceMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteReplicationInstanceCommand = serializeAws_json1_1DeleteReplicationInstanceCommand;
const serializeAws_json1_1DeleteReplicationSubnetGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.DeleteReplicationSubnetGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteReplicationSubnetGroupMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteReplicationSubnetGroupCommand = serializeAws_json1_1DeleteReplicationSubnetGroupCommand;
const serializeAws_json1_1DeleteReplicationTaskCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.DeleteReplicationTask",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteReplicationTaskMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteReplicationTaskCommand = serializeAws_json1_1DeleteReplicationTaskCommand;
const serializeAws_json1_1DeleteReplicationTaskAssessmentRunCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.DeleteReplicationTaskAssessmentRun",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteReplicationTaskAssessmentRunMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteReplicationTaskAssessmentRunCommand = serializeAws_json1_1DeleteReplicationTaskAssessmentRunCommand;
const serializeAws_json1_1DescribeAccountAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.DescribeAccountAttributes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAccountAttributesMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeAccountAttributesCommand = serializeAws_json1_1DescribeAccountAttributesCommand;
const serializeAws_json1_1DescribeApplicableIndividualAssessmentsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.DescribeApplicableIndividualAssessments",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeApplicableIndividualAssessmentsMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeApplicableIndividualAssessmentsCommand = serializeAws_json1_1DescribeApplicableIndividualAssessmentsCommand;
const serializeAws_json1_1DescribeCertificatesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.DescribeCertificates",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeCertificatesMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeCertificatesCommand = serializeAws_json1_1DescribeCertificatesCommand;
const serializeAws_json1_1DescribeConnectionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.DescribeConnections",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeConnectionsMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeConnectionsCommand = serializeAws_json1_1DescribeConnectionsCommand;
const serializeAws_json1_1DescribeEndpointsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.DescribeEndpoints",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEndpointsMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeEndpointsCommand = serializeAws_json1_1DescribeEndpointsCommand;
const serializeAws_json1_1DescribeEndpointSettingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.DescribeEndpointSettings",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEndpointSettingsMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeEndpointSettingsCommand = serializeAws_json1_1DescribeEndpointSettingsCommand;
const serializeAws_json1_1DescribeEndpointTypesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.DescribeEndpointTypes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEndpointTypesMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeEndpointTypesCommand = serializeAws_json1_1DescribeEndpointTypesCommand;
const serializeAws_json1_1DescribeEventCategoriesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.DescribeEventCategories",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEventCategoriesMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeEventCategoriesCommand = serializeAws_json1_1DescribeEventCategoriesCommand;
const serializeAws_json1_1DescribeEventsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.DescribeEvents",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEventsMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeEventsCommand = serializeAws_json1_1DescribeEventsCommand;
const serializeAws_json1_1DescribeEventSubscriptionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.DescribeEventSubscriptions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEventSubscriptionsMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeEventSubscriptionsCommand = serializeAws_json1_1DescribeEventSubscriptionsCommand;
const serializeAws_json1_1DescribeOrderableReplicationInstancesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.DescribeOrderableReplicationInstances",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeOrderableReplicationInstancesMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeOrderableReplicationInstancesCommand = serializeAws_json1_1DescribeOrderableReplicationInstancesCommand;
const serializeAws_json1_1DescribePendingMaintenanceActionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.DescribePendingMaintenanceActions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribePendingMaintenanceActionsMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribePendingMaintenanceActionsCommand = serializeAws_json1_1DescribePendingMaintenanceActionsCommand;
const serializeAws_json1_1DescribeRefreshSchemasStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.DescribeRefreshSchemasStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeRefreshSchemasStatusMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeRefreshSchemasStatusCommand = serializeAws_json1_1DescribeRefreshSchemasStatusCommand;
const serializeAws_json1_1DescribeReplicationInstancesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.DescribeReplicationInstances",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeReplicationInstancesMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeReplicationInstancesCommand = serializeAws_json1_1DescribeReplicationInstancesCommand;
const serializeAws_json1_1DescribeReplicationInstanceTaskLogsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeReplicationInstanceTaskLogsMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeReplicationInstanceTaskLogsCommand = serializeAws_json1_1DescribeReplicationInstanceTaskLogsCommand;
const serializeAws_json1_1DescribeReplicationSubnetGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.DescribeReplicationSubnetGroups",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeReplicationSubnetGroupsMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeReplicationSubnetGroupsCommand = serializeAws_json1_1DescribeReplicationSubnetGroupsCommand;
const serializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeReplicationTaskAssessmentResultsMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommand = serializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommand;
const serializeAws_json1_1DescribeReplicationTaskAssessmentRunsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.DescribeReplicationTaskAssessmentRuns",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeReplicationTaskAssessmentRunsMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeReplicationTaskAssessmentRunsCommand = serializeAws_json1_1DescribeReplicationTaskAssessmentRunsCommand;
const serializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.DescribeReplicationTaskIndividualAssessments",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsCommand = serializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsCommand;
const serializeAws_json1_1DescribeReplicationTasksCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.DescribeReplicationTasks",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeReplicationTasksMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeReplicationTasksCommand = serializeAws_json1_1DescribeReplicationTasksCommand;
const serializeAws_json1_1DescribeSchemasCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.DescribeSchemas",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeSchemasMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeSchemasCommand = serializeAws_json1_1DescribeSchemasCommand;
const serializeAws_json1_1DescribeTableStatisticsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.DescribeTableStatistics",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTableStatisticsMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeTableStatisticsCommand = serializeAws_json1_1DescribeTableStatisticsCommand;
const serializeAws_json1_1ImportCertificateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.ImportCertificate",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ImportCertificateMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ImportCertificateCommand = serializeAws_json1_1ImportCertificateCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1ModifyEndpointCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.ModifyEndpoint",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ModifyEndpointMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ModifyEndpointCommand = serializeAws_json1_1ModifyEndpointCommand;
const serializeAws_json1_1ModifyEventSubscriptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.ModifyEventSubscription",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ModifyEventSubscriptionMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ModifyEventSubscriptionCommand = serializeAws_json1_1ModifyEventSubscriptionCommand;
const serializeAws_json1_1ModifyReplicationInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.ModifyReplicationInstance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ModifyReplicationInstanceMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ModifyReplicationInstanceCommand = serializeAws_json1_1ModifyReplicationInstanceCommand;
const serializeAws_json1_1ModifyReplicationSubnetGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.ModifyReplicationSubnetGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ModifyReplicationSubnetGroupMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ModifyReplicationSubnetGroupCommand = serializeAws_json1_1ModifyReplicationSubnetGroupCommand;
const serializeAws_json1_1ModifyReplicationTaskCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.ModifyReplicationTask",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ModifyReplicationTaskMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ModifyReplicationTaskCommand = serializeAws_json1_1ModifyReplicationTaskCommand;
const serializeAws_json1_1MoveReplicationTaskCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.MoveReplicationTask",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1MoveReplicationTaskMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1MoveReplicationTaskCommand = serializeAws_json1_1MoveReplicationTaskCommand;
const serializeAws_json1_1RebootReplicationInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.RebootReplicationInstance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RebootReplicationInstanceMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RebootReplicationInstanceCommand = serializeAws_json1_1RebootReplicationInstanceCommand;
const serializeAws_json1_1RefreshSchemasCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.RefreshSchemas",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RefreshSchemasMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RefreshSchemasCommand = serializeAws_json1_1RefreshSchemasCommand;
const serializeAws_json1_1ReloadTablesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.ReloadTables",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ReloadTablesMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ReloadTablesCommand = serializeAws_json1_1ReloadTablesCommand;
const serializeAws_json1_1RemoveTagsFromResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.RemoveTagsFromResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RemoveTagsFromResourceMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RemoveTagsFromResourceCommand = serializeAws_json1_1RemoveTagsFromResourceCommand;
const serializeAws_json1_1StartReplicationTaskCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.StartReplicationTask",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartReplicationTaskMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartReplicationTaskCommand = serializeAws_json1_1StartReplicationTaskCommand;
const serializeAws_json1_1StartReplicationTaskAssessmentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.StartReplicationTaskAssessment",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartReplicationTaskAssessmentMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartReplicationTaskAssessmentCommand = serializeAws_json1_1StartReplicationTaskAssessmentCommand;
const serializeAws_json1_1StartReplicationTaskAssessmentRunCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.StartReplicationTaskAssessmentRun",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartReplicationTaskAssessmentRunMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartReplicationTaskAssessmentRunCommand = serializeAws_json1_1StartReplicationTaskAssessmentRunCommand;
const serializeAws_json1_1StopReplicationTaskCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.StopReplicationTask",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopReplicationTaskMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopReplicationTaskCommand = serializeAws_json1_1StopReplicationTaskCommand;
const serializeAws_json1_1TestConnectionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonDMSv20160101.TestConnection",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TestConnectionMessage(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TestConnectionCommand = serializeAws_json1_1TestConnectionCommand;
const deserializeAws_json1_1AddTagsToResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AddTagsToResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddTagsToResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AddTagsToResourceCommand = deserializeAws_json1_1AddTagsToResourceCommand;
const deserializeAws_json1_1AddTagsToResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ApplyPendingMaintenanceActionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ApplyPendingMaintenanceActionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ApplyPendingMaintenanceActionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ApplyPendingMaintenanceActionCommand = deserializeAws_json1_1ApplyPendingMaintenanceActionCommand;
const deserializeAws_json1_1ApplyPendingMaintenanceActionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CancelReplicationTaskAssessmentRunCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CancelReplicationTaskAssessmentRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CancelReplicationTaskAssessmentRunResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CancelReplicationTaskAssessmentRunCommand = deserializeAws_json1_1CancelReplicationTaskAssessmentRunCommand;
const deserializeAws_json1_1CancelReplicationTaskAssessmentRunCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedFault":
        case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceStateFault":
        case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateEndpointCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateEndpointResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateEndpointCommand = deserializeAws_json1_1CreateEndpointCommand;
const deserializeAws_json1_1CreateEndpointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedFault":
        case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceStateFault":
        case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSKeyNotAccessibleFault":
        case "com.amazonaws.databasemigrationservice#KMSKeyNotAccessibleFault":
            response = {
                ...(await deserializeAws_json1_1KMSKeyNotAccessibleFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsFault":
        case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceQuotaExceededFault":
        case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault":
            response = {
                ...(await deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "S3AccessDeniedFault":
        case "com.amazonaws.databasemigrationservice#S3AccessDeniedFault":
            response = {
                ...(await deserializeAws_json1_1S3AccessDeniedFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateEventSubscriptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateEventSubscriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateEventSubscriptionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateEventSubscriptionCommand = deserializeAws_json1_1CreateEventSubscriptionCommand;
const deserializeAws_json1_1CreateEventSubscriptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "KMSAccessDeniedFault":
        case "com.amazonaws.databasemigrationservice#KMSAccessDeniedFault":
            response = {
                ...(await deserializeAws_json1_1KMSAccessDeniedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSDisabledFault":
        case "com.amazonaws.databasemigrationservice#KMSDisabledFault":
            response = {
                ...(await deserializeAws_json1_1KMSDisabledFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInvalidStateFault":
        case "com.amazonaws.databasemigrationservice#KMSInvalidStateFault":
            response = {
                ...(await deserializeAws_json1_1KMSInvalidStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSNotFoundFault":
        case "com.amazonaws.databasemigrationservice#KMSNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1KMSNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSThrottlingFault":
        case "com.amazonaws.databasemigrationservice#KMSThrottlingFault":
            response = {
                ...(await deserializeAws_json1_1KMSThrottlingFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsFault":
        case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceQuotaExceededFault":
        case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault":
            response = {
                ...(await deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SNSInvalidTopicFault":
        case "com.amazonaws.databasemigrationservice#SNSInvalidTopicFault":
            response = {
                ...(await deserializeAws_json1_1SNSInvalidTopicFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SNSNoAuthorizationFault":
        case "com.amazonaws.databasemigrationservice#SNSNoAuthorizationFault":
            response = {
                ...(await deserializeAws_json1_1SNSNoAuthorizationFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateReplicationInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateReplicationInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateReplicationInstanceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateReplicationInstanceCommand = deserializeAws_json1_1CreateReplicationInstanceCommand;
const deserializeAws_json1_1CreateReplicationInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedFault":
        case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientResourceCapacityFault":
        case "com.amazonaws.databasemigrationservice#InsufficientResourceCapacityFault":
            response = {
                ...(await deserializeAws_json1_1InsufficientResourceCapacityFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceStateFault":
        case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSubnet":
        case "com.amazonaws.databasemigrationservice#InvalidSubnet":
            response = {
                ...(await deserializeAws_json1_1InvalidSubnetResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSKeyNotAccessibleFault":
        case "com.amazonaws.databasemigrationservice#KMSKeyNotAccessibleFault":
            response = {
                ...(await deserializeAws_json1_1KMSKeyNotAccessibleFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReplicationSubnetGroupDoesNotCoverEnoughAZs":
        case "com.amazonaws.databasemigrationservice#ReplicationSubnetGroupDoesNotCoverEnoughAZs":
            response = {
                ...(await deserializeAws_json1_1ReplicationSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsFault":
        case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceQuotaExceededFault":
        case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault":
            response = {
                ...(await deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StorageQuotaExceededFault":
        case "com.amazonaws.databasemigrationservice#StorageQuotaExceededFault":
            response = {
                ...(await deserializeAws_json1_1StorageQuotaExceededFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateReplicationSubnetGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateReplicationSubnetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateReplicationSubnetGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateReplicationSubnetGroupCommand = deserializeAws_json1_1CreateReplicationSubnetGroupCommand;
const deserializeAws_json1_1CreateReplicationSubnetGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedFault":
        case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSubnet":
        case "com.amazonaws.databasemigrationservice#InvalidSubnet":
            response = {
                ...(await deserializeAws_json1_1InvalidSubnetResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReplicationSubnetGroupDoesNotCoverEnoughAZs":
        case "com.amazonaws.databasemigrationservice#ReplicationSubnetGroupDoesNotCoverEnoughAZs":
            response = {
                ...(await deserializeAws_json1_1ReplicationSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsFault":
        case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceQuotaExceededFault":
        case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault":
            response = {
                ...(await deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateReplicationTaskCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateReplicationTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateReplicationTaskResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateReplicationTaskCommand = deserializeAws_json1_1CreateReplicationTaskCommand;
const deserializeAws_json1_1CreateReplicationTaskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedFault":
        case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceStateFault":
        case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSKeyNotAccessibleFault":
        case "com.amazonaws.databasemigrationservice#KMSKeyNotAccessibleFault":
            response = {
                ...(await deserializeAws_json1_1KMSKeyNotAccessibleFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsFault":
        case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceQuotaExceededFault":
        case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault":
            response = {
                ...(await deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteCertificateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteCertificateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteCertificateResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteCertificateCommand = deserializeAws_json1_1DeleteCertificateCommand;
const deserializeAws_json1_1DeleteCertificateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidResourceStateFault":
        case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteConnectionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteConnectionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteConnectionCommand = deserializeAws_json1_1DeleteConnectionCommand;
const deserializeAws_json1_1DeleteConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedFault":
        case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceStateFault":
        case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteEndpointCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteEndpointResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteEndpointCommand = deserializeAws_json1_1DeleteEndpointCommand;
const deserializeAws_json1_1DeleteEndpointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidResourceStateFault":
        case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteEventSubscriptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteEventSubscriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteEventSubscriptionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteEventSubscriptionCommand = deserializeAws_json1_1DeleteEventSubscriptionCommand;
const deserializeAws_json1_1DeleteEventSubscriptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidResourceStateFault":
        case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteReplicationInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteReplicationInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteReplicationInstanceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteReplicationInstanceCommand = deserializeAws_json1_1DeleteReplicationInstanceCommand;
const deserializeAws_json1_1DeleteReplicationInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidResourceStateFault":
        case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteReplicationSubnetGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteReplicationSubnetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteReplicationSubnetGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteReplicationSubnetGroupCommand = deserializeAws_json1_1DeleteReplicationSubnetGroupCommand;
const deserializeAws_json1_1DeleteReplicationSubnetGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidResourceStateFault":
        case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteReplicationTaskCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteReplicationTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteReplicationTaskResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteReplicationTaskCommand = deserializeAws_json1_1DeleteReplicationTaskCommand;
const deserializeAws_json1_1DeleteReplicationTaskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidResourceStateFault":
        case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteReplicationTaskAssessmentRunCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteReplicationTaskAssessmentRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteReplicationTaskAssessmentRunResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteReplicationTaskAssessmentRunCommand = deserializeAws_json1_1DeleteReplicationTaskAssessmentRunCommand;
const deserializeAws_json1_1DeleteReplicationTaskAssessmentRunCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedFault":
        case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceStateFault":
        case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeAccountAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeAccountAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAccountAttributesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeAccountAttributesCommand = deserializeAws_json1_1DescribeAccountAttributesCommand;
const deserializeAws_json1_1DescribeAccountAttributesCommandError = async (output, context) => {
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
const deserializeAws_json1_1DescribeApplicableIndividualAssessmentsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeApplicableIndividualAssessmentsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeApplicableIndividualAssessmentsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeApplicableIndividualAssessmentsCommand = deserializeAws_json1_1DescribeApplicableIndividualAssessmentsCommand;
const deserializeAws_json1_1DescribeApplicableIndividualAssessmentsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedFault":
        case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceStateFault":
        case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeCertificatesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeCertificatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeCertificatesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeCertificatesCommand = deserializeAws_json1_1DescribeCertificatesCommand;
const deserializeAws_json1_1DescribeCertificatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeConnectionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeConnectionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeConnectionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeConnectionsCommand = deserializeAws_json1_1DescribeConnectionsCommand;
const deserializeAws_json1_1DescribeConnectionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeEndpointsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeEndpointsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEndpointsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeEndpointsCommand = deserializeAws_json1_1DescribeEndpointsCommand;
const deserializeAws_json1_1DescribeEndpointsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeEndpointSettingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeEndpointSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEndpointSettingsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeEndpointSettingsCommand = deserializeAws_json1_1DescribeEndpointSettingsCommand;
const deserializeAws_json1_1DescribeEndpointSettingsCommandError = async (output, context) => {
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
const deserializeAws_json1_1DescribeEndpointTypesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeEndpointTypesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEndpointTypesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeEndpointTypesCommand = deserializeAws_json1_1DescribeEndpointTypesCommand;
const deserializeAws_json1_1DescribeEndpointTypesCommandError = async (output, context) => {
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
const deserializeAws_json1_1DescribeEventCategoriesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeEventCategoriesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEventCategoriesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeEventCategoriesCommand = deserializeAws_json1_1DescribeEventCategoriesCommand;
const deserializeAws_json1_1DescribeEventCategoriesCommandError = async (output, context) => {
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
const deserializeAws_json1_1DescribeEventsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeEventsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEventsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeEventsCommand = deserializeAws_json1_1DescribeEventsCommand;
const deserializeAws_json1_1DescribeEventsCommandError = async (output, context) => {
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
const deserializeAws_json1_1DescribeEventSubscriptionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeEventSubscriptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEventSubscriptionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeEventSubscriptionsCommand = deserializeAws_json1_1DescribeEventSubscriptionsCommand;
const deserializeAws_json1_1DescribeEventSubscriptionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeOrderableReplicationInstancesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeOrderableReplicationInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeOrderableReplicationInstancesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeOrderableReplicationInstancesCommand = deserializeAws_json1_1DescribeOrderableReplicationInstancesCommand;
const deserializeAws_json1_1DescribeOrderableReplicationInstancesCommandError = async (output, context) => {
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
const deserializeAws_json1_1DescribePendingMaintenanceActionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribePendingMaintenanceActionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribePendingMaintenanceActionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribePendingMaintenanceActionsCommand = deserializeAws_json1_1DescribePendingMaintenanceActionsCommand;
const deserializeAws_json1_1DescribePendingMaintenanceActionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeRefreshSchemasStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeRefreshSchemasStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeRefreshSchemasStatusResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeRefreshSchemasStatusCommand = deserializeAws_json1_1DescribeRefreshSchemasStatusCommand;
const deserializeAws_json1_1DescribeRefreshSchemasStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidResourceStateFault":
        case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeReplicationInstancesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeReplicationInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeReplicationInstancesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeReplicationInstancesCommand = deserializeAws_json1_1DescribeReplicationInstancesCommand;
const deserializeAws_json1_1DescribeReplicationInstancesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeReplicationInstanceTaskLogsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeReplicationInstanceTaskLogsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeReplicationInstanceTaskLogsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeReplicationInstanceTaskLogsCommand = deserializeAws_json1_1DescribeReplicationInstanceTaskLogsCommand;
const deserializeAws_json1_1DescribeReplicationInstanceTaskLogsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidResourceStateFault":
        case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeReplicationSubnetGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeReplicationSubnetGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeReplicationSubnetGroupsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeReplicationSubnetGroupsCommand = deserializeAws_json1_1DescribeReplicationSubnetGroupsCommand;
const deserializeAws_json1_1DescribeReplicationSubnetGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeReplicationTaskAssessmentResultsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommand = deserializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommand;
const deserializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeReplicationTaskAssessmentRunsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeReplicationTaskAssessmentRunsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeReplicationTaskAssessmentRunsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeReplicationTaskAssessmentRunsCommand = deserializeAws_json1_1DescribeReplicationTaskAssessmentRunsCommand;
const deserializeAws_json1_1DescribeReplicationTaskAssessmentRunsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsCommand = deserializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsCommand;
const deserializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeReplicationTasksCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeReplicationTasksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeReplicationTasksResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeReplicationTasksCommand = deserializeAws_json1_1DescribeReplicationTasksCommand;
const deserializeAws_json1_1DescribeReplicationTasksCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeSchemasCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeSchemasCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeSchemasResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeSchemasCommand = deserializeAws_json1_1DescribeSchemasCommand;
const deserializeAws_json1_1DescribeSchemasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidResourceStateFault":
        case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeTableStatisticsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeTableStatisticsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTableStatisticsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeTableStatisticsCommand = deserializeAws_json1_1DescribeTableStatisticsCommand;
const deserializeAws_json1_1DescribeTableStatisticsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidResourceStateFault":
        case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ImportCertificateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ImportCertificateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ImportCertificateResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ImportCertificateCommand = deserializeAws_json1_1ImportCertificateCommand;
const deserializeAws_json1_1ImportCertificateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidCertificateFault":
        case "com.amazonaws.databasemigrationservice#InvalidCertificateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidCertificateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsFault":
        case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceQuotaExceededFault":
        case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault":
            response = {
                ...(await deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context)),
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
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ModifyEndpointCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ModifyEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ModifyEndpointResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ModifyEndpointCommand = deserializeAws_json1_1ModifyEndpointCommand;
const deserializeAws_json1_1ModifyEndpointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedFault":
        case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceStateFault":
        case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSKeyNotAccessibleFault":
        case "com.amazonaws.databasemigrationservice#KMSKeyNotAccessibleFault":
            response = {
                ...(await deserializeAws_json1_1KMSKeyNotAccessibleFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsFault":
        case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ModifyEventSubscriptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ModifyEventSubscriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ModifyEventSubscriptionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ModifyEventSubscriptionCommand = deserializeAws_json1_1ModifyEventSubscriptionCommand;
const deserializeAws_json1_1ModifyEventSubscriptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "KMSAccessDeniedFault":
        case "com.amazonaws.databasemigrationservice#KMSAccessDeniedFault":
            response = {
                ...(await deserializeAws_json1_1KMSAccessDeniedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSDisabledFault":
        case "com.amazonaws.databasemigrationservice#KMSDisabledFault":
            response = {
                ...(await deserializeAws_json1_1KMSDisabledFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInvalidStateFault":
        case "com.amazonaws.databasemigrationservice#KMSInvalidStateFault":
            response = {
                ...(await deserializeAws_json1_1KMSInvalidStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSNotFoundFault":
        case "com.amazonaws.databasemigrationservice#KMSNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1KMSNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSThrottlingFault":
        case "com.amazonaws.databasemigrationservice#KMSThrottlingFault":
            response = {
                ...(await deserializeAws_json1_1KMSThrottlingFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceQuotaExceededFault":
        case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault":
            response = {
                ...(await deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SNSInvalidTopicFault":
        case "com.amazonaws.databasemigrationservice#SNSInvalidTopicFault":
            response = {
                ...(await deserializeAws_json1_1SNSInvalidTopicFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SNSNoAuthorizationFault":
        case "com.amazonaws.databasemigrationservice#SNSNoAuthorizationFault":
            response = {
                ...(await deserializeAws_json1_1SNSNoAuthorizationFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ModifyReplicationInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ModifyReplicationInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ModifyReplicationInstanceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ModifyReplicationInstanceCommand = deserializeAws_json1_1ModifyReplicationInstanceCommand;
const deserializeAws_json1_1ModifyReplicationInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedFault":
        case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientResourceCapacityFault":
        case "com.amazonaws.databasemigrationservice#InsufficientResourceCapacityFault":
            response = {
                ...(await deserializeAws_json1_1InsufficientResourceCapacityFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceStateFault":
        case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsFault":
        case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StorageQuotaExceededFault":
        case "com.amazonaws.databasemigrationservice#StorageQuotaExceededFault":
            response = {
                ...(await deserializeAws_json1_1StorageQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UpgradeDependencyFailureFault":
        case "com.amazonaws.databasemigrationservice#UpgradeDependencyFailureFault":
            response = {
                ...(await deserializeAws_json1_1UpgradeDependencyFailureFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ModifyReplicationSubnetGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ModifyReplicationSubnetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ModifyReplicationSubnetGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ModifyReplicationSubnetGroupCommand = deserializeAws_json1_1ModifyReplicationSubnetGroupCommand;
const deserializeAws_json1_1ModifyReplicationSubnetGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedFault":
        case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSubnet":
        case "com.amazonaws.databasemigrationservice#InvalidSubnet":
            response = {
                ...(await deserializeAws_json1_1InvalidSubnetResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReplicationSubnetGroupDoesNotCoverEnoughAZs":
        case "com.amazonaws.databasemigrationservice#ReplicationSubnetGroupDoesNotCoverEnoughAZs":
            response = {
                ...(await deserializeAws_json1_1ReplicationSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceQuotaExceededFault":
        case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault":
            response = {
                ...(await deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubnetAlreadyInUse":
        case "com.amazonaws.databasemigrationservice#SubnetAlreadyInUse":
            response = {
                ...(await deserializeAws_json1_1SubnetAlreadyInUseResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ModifyReplicationTaskCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ModifyReplicationTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ModifyReplicationTaskResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ModifyReplicationTaskCommand = deserializeAws_json1_1ModifyReplicationTaskCommand;
const deserializeAws_json1_1ModifyReplicationTaskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidResourceStateFault":
        case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSKeyNotAccessibleFault":
        case "com.amazonaws.databasemigrationservice#KMSKeyNotAccessibleFault":
            response = {
                ...(await deserializeAws_json1_1KMSKeyNotAccessibleFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsFault":
        case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1MoveReplicationTaskCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1MoveReplicationTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1MoveReplicationTaskResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1MoveReplicationTaskCommand = deserializeAws_json1_1MoveReplicationTaskCommand;
const deserializeAws_json1_1MoveReplicationTaskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedFault":
        case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceStateFault":
        case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSKeyNotAccessibleFault":
        case "com.amazonaws.databasemigrationservice#KMSKeyNotAccessibleFault":
            response = {
                ...(await deserializeAws_json1_1KMSKeyNotAccessibleFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RebootReplicationInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RebootReplicationInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RebootReplicationInstanceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RebootReplicationInstanceCommand = deserializeAws_json1_1RebootReplicationInstanceCommand;
const deserializeAws_json1_1RebootReplicationInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidResourceStateFault":
        case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RefreshSchemasCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RefreshSchemasCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RefreshSchemasResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RefreshSchemasCommand = deserializeAws_json1_1RefreshSchemasCommand;
const deserializeAws_json1_1RefreshSchemasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidResourceStateFault":
        case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSKeyNotAccessibleFault":
        case "com.amazonaws.databasemigrationservice#KMSKeyNotAccessibleFault":
            response = {
                ...(await deserializeAws_json1_1KMSKeyNotAccessibleFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceQuotaExceededFault":
        case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault":
            response = {
                ...(await deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ReloadTablesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ReloadTablesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ReloadTablesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ReloadTablesCommand = deserializeAws_json1_1ReloadTablesCommand;
const deserializeAws_json1_1ReloadTablesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidResourceStateFault":
        case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RemoveTagsFromResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RemoveTagsFromResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RemoveTagsFromResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RemoveTagsFromResourceCommand = deserializeAws_json1_1RemoveTagsFromResourceCommand;
const deserializeAws_json1_1RemoveTagsFromResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartReplicationTaskCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartReplicationTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartReplicationTaskResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartReplicationTaskCommand = deserializeAws_json1_1StartReplicationTaskCommand;
const deserializeAws_json1_1StartReplicationTaskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedFault":
        case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceStateFault":
        case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartReplicationTaskAssessmentCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartReplicationTaskAssessmentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartReplicationTaskAssessmentResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartReplicationTaskAssessmentCommand = deserializeAws_json1_1StartReplicationTaskAssessmentCommand;
const deserializeAws_json1_1StartReplicationTaskAssessmentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidResourceStateFault":
        case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartReplicationTaskAssessmentRunCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartReplicationTaskAssessmentRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartReplicationTaskAssessmentRunResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartReplicationTaskAssessmentRunCommand = deserializeAws_json1_1StartReplicationTaskAssessmentRunCommand;
const deserializeAws_json1_1StartReplicationTaskAssessmentRunCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedFault":
        case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceStateFault":
        case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSAccessDeniedFault":
        case "com.amazonaws.databasemigrationservice#KMSAccessDeniedFault":
            response = {
                ...(await deserializeAws_json1_1KMSAccessDeniedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSDisabledFault":
        case "com.amazonaws.databasemigrationservice#KMSDisabledFault":
            response = {
                ...(await deserializeAws_json1_1KMSDisabledFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSFault":
        case "com.amazonaws.databasemigrationservice#KMSFault":
            response = {
                ...(await deserializeAws_json1_1KMSFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInvalidStateFault":
        case "com.amazonaws.databasemigrationservice#KMSInvalidStateFault":
            response = {
                ...(await deserializeAws_json1_1KMSInvalidStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSKeyNotAccessibleFault":
        case "com.amazonaws.databasemigrationservice#KMSKeyNotAccessibleFault":
            response = {
                ...(await deserializeAws_json1_1KMSKeyNotAccessibleFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSNotFoundFault":
        case "com.amazonaws.databasemigrationservice#KMSNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1KMSNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsFault":
        case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "S3AccessDeniedFault":
        case "com.amazonaws.databasemigrationservice#S3AccessDeniedFault":
            response = {
                ...(await deserializeAws_json1_1S3AccessDeniedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "S3ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#S3ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1S3ResourceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StopReplicationTaskCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopReplicationTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopReplicationTaskResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopReplicationTaskCommand = deserializeAws_json1_1StopReplicationTaskCommand;
const deserializeAws_json1_1StopReplicationTaskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidResourceStateFault":
        case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1TestConnectionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1TestConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TestConnectionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1TestConnectionCommand = deserializeAws_json1_1TestConnectionCommand;
const deserializeAws_json1_1TestConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedFault":
        case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceStateFault":
        case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSKeyNotAccessibleFault":
        case "com.amazonaws.databasemigrationservice#KMSKeyNotAccessibleFault":
            response = {
                ...(await deserializeAws_json1_1KMSKeyNotAccessibleFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceQuotaExceededFault":
        case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault":
            response = {
                ...(await deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AccessDeniedFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AccessDeniedFault(body, context);
    const contents = {
        name: "AccessDeniedFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InsufficientResourceCapacityFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InsufficientResourceCapacityFault(body, context);
    const contents = {
        name: "InsufficientResourceCapacityFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidCertificateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidCertificateFault(body, context);
    const contents = {
        name: "InvalidCertificateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidResourceStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidResourceStateFault(body, context);
    const contents = {
        name: "InvalidResourceStateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidSubnetResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidSubnet(body, context);
    const contents = {
        name: "InvalidSubnet",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1KMSAccessDeniedFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KMSAccessDeniedFault(body, context);
    const contents = {
        name: "KMSAccessDeniedFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1KMSDisabledFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KMSDisabledFault(body, context);
    const contents = {
        name: "KMSDisabledFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1KMSFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KMSFault(body, context);
    const contents = {
        name: "KMSFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1KMSInvalidStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KMSInvalidStateFault(body, context);
    const contents = {
        name: "KMSInvalidStateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1KMSKeyNotAccessibleFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KMSKeyNotAccessibleFault(body, context);
    const contents = {
        name: "KMSKeyNotAccessibleFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1KMSNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KMSNotFoundFault(body, context);
    const contents = {
        name: "KMSNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1KMSThrottlingFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KMSThrottlingFault(body, context);
    const contents = {
        name: "KMSThrottlingFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ReplicationSubnetGroupDoesNotCoverEnoughAZsResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ReplicationSubnetGroupDoesNotCoverEnoughAZs(body, context);
    const contents = {
        name: "ReplicationSubnetGroupDoesNotCoverEnoughAZs",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceAlreadyExistsFault(body, context);
    const contents = {
        name: "ResourceAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundFault(body, context);
    const contents = {
        name: "ResourceNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceQuotaExceededFault(body, context);
    const contents = {
        name: "ResourceQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1S3AccessDeniedFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1S3AccessDeniedFault(body, context);
    const contents = {
        name: "S3AccessDeniedFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1S3ResourceNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1S3ResourceNotFoundFault(body, context);
    const contents = {
        name: "S3ResourceNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1SNSInvalidTopicFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SNSInvalidTopicFault(body, context);
    const contents = {
        name: "SNSInvalidTopicFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1SNSNoAuthorizationFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SNSNoAuthorizationFault(body, context);
    const contents = {
        name: "SNSNoAuthorizationFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1StorageQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1StorageQuotaExceededFault(body, context);
    const contents = {
        name: "StorageQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1SubnetAlreadyInUseResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SubnetAlreadyInUse(body, context);
    const contents = {
        name: "SubnetAlreadyInUse",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UpgradeDependencyFailureFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UpgradeDependencyFailureFault(body, context);
    const contents = {
        name: "UpgradeDependencyFailureFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1AddTagsToResourceMessage = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1ApplyPendingMaintenanceActionMessage = (input, context) => {
    return {
        ...(input.ApplyAction !== undefined && input.ApplyAction !== null && { ApplyAction: input.ApplyAction }),
        ...(input.OptInType !== undefined && input.OptInType !== null && { OptInType: input.OptInType }),
        ...(input.ReplicationInstanceArn !== undefined &&
            input.ReplicationInstanceArn !== null && { ReplicationInstanceArn: input.ReplicationInstanceArn }),
    };
};
const serializeAws_json1_1CancelReplicationTaskAssessmentRunMessage = (input, context) => {
    return {
        ...(input.ReplicationTaskAssessmentRunArn !== undefined &&
            input.ReplicationTaskAssessmentRunArn !== null && {
            ReplicationTaskAssessmentRunArn: input.ReplicationTaskAssessmentRunArn,
        }),
    };
};
const serializeAws_json1_1CreateEndpointMessage = (input, context) => {
    return {
        ...(input.CertificateArn !== undefined &&
            input.CertificateArn !== null && { CertificateArn: input.CertificateArn }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.DmsTransferSettings !== undefined &&
            input.DmsTransferSettings !== null && {
            DmsTransferSettings: serializeAws_json1_1DmsTransferSettings(input.DmsTransferSettings, context),
        }),
        ...(input.DocDbSettings !== undefined &&
            input.DocDbSettings !== null && {
            DocDbSettings: serializeAws_json1_1DocDbSettings(input.DocDbSettings, context),
        }),
        ...(input.DynamoDbSettings !== undefined &&
            input.DynamoDbSettings !== null && {
            DynamoDbSettings: serializeAws_json1_1DynamoDbSettings(input.DynamoDbSettings, context),
        }),
        ...(input.ElasticsearchSettings !== undefined &&
            input.ElasticsearchSettings !== null && {
            ElasticsearchSettings: serializeAws_json1_1ElasticsearchSettings(input.ElasticsearchSettings, context),
        }),
        ...(input.EndpointIdentifier !== undefined &&
            input.EndpointIdentifier !== null && { EndpointIdentifier: input.EndpointIdentifier }),
        ...(input.EndpointType !== undefined && input.EndpointType !== null && { EndpointType: input.EndpointType }),
        ...(input.EngineName !== undefined && input.EngineName !== null && { EngineName: input.EngineName }),
        ...(input.ExternalTableDefinition !== undefined &&
            input.ExternalTableDefinition !== null && { ExternalTableDefinition: input.ExternalTableDefinition }),
        ...(input.ExtraConnectionAttributes !== undefined &&
            input.ExtraConnectionAttributes !== null && { ExtraConnectionAttributes: input.ExtraConnectionAttributes }),
        ...(input.IBMDb2Settings !== undefined &&
            input.IBMDb2Settings !== null && {
            IBMDb2Settings: serializeAws_json1_1IBMDb2Settings(input.IBMDb2Settings, context),
        }),
        ...(input.KafkaSettings !== undefined &&
            input.KafkaSettings !== null && {
            KafkaSettings: serializeAws_json1_1KafkaSettings(input.KafkaSettings, context),
        }),
        ...(input.KinesisSettings !== undefined &&
            input.KinesisSettings !== null && {
            KinesisSettings: serializeAws_json1_1KinesisSettings(input.KinesisSettings, context),
        }),
        ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
        ...(input.MicrosoftSQLServerSettings !== undefined &&
            input.MicrosoftSQLServerSettings !== null && {
            MicrosoftSQLServerSettings: serializeAws_json1_1MicrosoftSQLServerSettings(input.MicrosoftSQLServerSettings, context),
        }),
        ...(input.MongoDbSettings !== undefined &&
            input.MongoDbSettings !== null && {
            MongoDbSettings: serializeAws_json1_1MongoDbSettings(input.MongoDbSettings, context),
        }),
        ...(input.MySQLSettings !== undefined &&
            input.MySQLSettings !== null && {
            MySQLSettings: serializeAws_json1_1MySQLSettings(input.MySQLSettings, context),
        }),
        ...(input.NeptuneSettings !== undefined &&
            input.NeptuneSettings !== null && {
            NeptuneSettings: serializeAws_json1_1NeptuneSettings(input.NeptuneSettings, context),
        }),
        ...(input.OracleSettings !== undefined &&
            input.OracleSettings !== null && {
            OracleSettings: serializeAws_json1_1OracleSettings(input.OracleSettings, context),
        }),
        ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
        ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
        ...(input.PostgreSQLSettings !== undefined &&
            input.PostgreSQLSettings !== null && {
            PostgreSQLSettings: serializeAws_json1_1PostgreSQLSettings(input.PostgreSQLSettings, context),
        }),
        ...(input.RedshiftSettings !== undefined &&
            input.RedshiftSettings !== null && {
            RedshiftSettings: serializeAws_json1_1RedshiftSettings(input.RedshiftSettings, context),
        }),
        ...(input.ResourceIdentifier !== undefined &&
            input.ResourceIdentifier !== null && { ResourceIdentifier: input.ResourceIdentifier }),
        ...(input.S3Settings !== undefined &&
            input.S3Settings !== null && { S3Settings: serializeAws_json1_1S3Settings(input.S3Settings, context) }),
        ...(input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName }),
        ...(input.ServiceAccessRoleArn !== undefined &&
            input.ServiceAccessRoleArn !== null && { ServiceAccessRoleArn: input.ServiceAccessRoleArn }),
        ...(input.SslMode !== undefined && input.SslMode !== null && { SslMode: input.SslMode }),
        ...(input.SybaseSettings !== undefined &&
            input.SybaseSettings !== null && {
            SybaseSettings: serializeAws_json1_1SybaseSettings(input.SybaseSettings, context),
        }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1CreateEventSubscriptionMessage = (input, context) => {
    return {
        ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
        ...(input.EventCategories !== undefined &&
            input.EventCategories !== null && {
            EventCategories: serializeAws_json1_1EventCategoriesList(input.EventCategories, context),
        }),
        ...(input.SnsTopicArn !== undefined && input.SnsTopicArn !== null && { SnsTopicArn: input.SnsTopicArn }),
        ...(input.SourceIds !== undefined &&
            input.SourceIds !== null && { SourceIds: serializeAws_json1_1SourceIdsList(input.SourceIds, context) }),
        ...(input.SourceType !== undefined && input.SourceType !== null && { SourceType: input.SourceType }),
        ...(input.SubscriptionName !== undefined &&
            input.SubscriptionName !== null && { SubscriptionName: input.SubscriptionName }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateReplicationInstanceMessage = (input, context) => {
    return {
        ...(input.AllocatedStorage !== undefined &&
            input.AllocatedStorage !== null && { AllocatedStorage: input.AllocatedStorage }),
        ...(input.AutoMinorVersionUpgrade !== undefined &&
            input.AutoMinorVersionUpgrade !== null && { AutoMinorVersionUpgrade: input.AutoMinorVersionUpgrade }),
        ...(input.AvailabilityZone !== undefined &&
            input.AvailabilityZone !== null && { AvailabilityZone: input.AvailabilityZone }),
        ...(input.DnsNameServers !== undefined &&
            input.DnsNameServers !== null && { DnsNameServers: input.DnsNameServers }),
        ...(input.EngineVersion !== undefined && input.EngineVersion !== null && { EngineVersion: input.EngineVersion }),
        ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
        ...(input.MultiAZ !== undefined && input.MultiAZ !== null && { MultiAZ: input.MultiAZ }),
        ...(input.PreferredMaintenanceWindow !== undefined &&
            input.PreferredMaintenanceWindow !== null && { PreferredMaintenanceWindow: input.PreferredMaintenanceWindow }),
        ...(input.PubliclyAccessible !== undefined &&
            input.PubliclyAccessible !== null && { PubliclyAccessible: input.PubliclyAccessible }),
        ...(input.ReplicationInstanceClass !== undefined &&
            input.ReplicationInstanceClass !== null && { ReplicationInstanceClass: input.ReplicationInstanceClass }),
        ...(input.ReplicationInstanceIdentifier !== undefined &&
            input.ReplicationInstanceIdentifier !== null && {
            ReplicationInstanceIdentifier: input.ReplicationInstanceIdentifier,
        }),
        ...(input.ReplicationSubnetGroupIdentifier !== undefined &&
            input.ReplicationSubnetGroupIdentifier !== null && {
            ReplicationSubnetGroupIdentifier: input.ReplicationSubnetGroupIdentifier,
        }),
        ...(input.ResourceIdentifier !== undefined &&
            input.ResourceIdentifier !== null && { ResourceIdentifier: input.ResourceIdentifier }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
        ...(input.VpcSecurityGroupIds !== undefined &&
            input.VpcSecurityGroupIds !== null && {
            VpcSecurityGroupIds: serializeAws_json1_1VpcSecurityGroupIdList(input.VpcSecurityGroupIds, context),
        }),
    };
};
const serializeAws_json1_1CreateReplicationSubnetGroupMessage = (input, context) => {
    return {
        ...(input.ReplicationSubnetGroupDescription !== undefined &&
            input.ReplicationSubnetGroupDescription !== null && {
            ReplicationSubnetGroupDescription: input.ReplicationSubnetGroupDescription,
        }),
        ...(input.ReplicationSubnetGroupIdentifier !== undefined &&
            input.ReplicationSubnetGroupIdentifier !== null && {
            ReplicationSubnetGroupIdentifier: input.ReplicationSubnetGroupIdentifier,
        }),
        ...(input.SubnetIds !== undefined &&
            input.SubnetIds !== null && { SubnetIds: serializeAws_json1_1SubnetIdentifierList(input.SubnetIds, context) }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateReplicationTaskMessage = (input, context) => {
    return {
        ...(input.CdcStartPosition !== undefined &&
            input.CdcStartPosition !== null && { CdcStartPosition: input.CdcStartPosition }),
        ...(input.CdcStartTime !== undefined &&
            input.CdcStartTime !== null && { CdcStartTime: Math.round(input.CdcStartTime.getTime() / 1000) }),
        ...(input.CdcStopPosition !== undefined &&
            input.CdcStopPosition !== null && { CdcStopPosition: input.CdcStopPosition }),
        ...(input.MigrationType !== undefined && input.MigrationType !== null && { MigrationType: input.MigrationType }),
        ...(input.ReplicationInstanceArn !== undefined &&
            input.ReplicationInstanceArn !== null && { ReplicationInstanceArn: input.ReplicationInstanceArn }),
        ...(input.ReplicationTaskIdentifier !== undefined &&
            input.ReplicationTaskIdentifier !== null && { ReplicationTaskIdentifier: input.ReplicationTaskIdentifier }),
        ...(input.ReplicationTaskSettings !== undefined &&
            input.ReplicationTaskSettings !== null && { ReplicationTaskSettings: input.ReplicationTaskSettings }),
        ...(input.ResourceIdentifier !== undefined &&
            input.ResourceIdentifier !== null && { ResourceIdentifier: input.ResourceIdentifier }),
        ...(input.SourceEndpointArn !== undefined &&
            input.SourceEndpointArn !== null && { SourceEndpointArn: input.SourceEndpointArn }),
        ...(input.TableMappings !== undefined && input.TableMappings !== null && { TableMappings: input.TableMappings }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
        ...(input.TargetEndpointArn !== undefined &&
            input.TargetEndpointArn !== null && { TargetEndpointArn: input.TargetEndpointArn }),
        ...(input.TaskData !== undefined && input.TaskData !== null && { TaskData: input.TaskData }),
    };
};
const serializeAws_json1_1DeleteCertificateMessage = (input, context) => {
    return {
        ...(input.CertificateArn !== undefined &&
            input.CertificateArn !== null && { CertificateArn: input.CertificateArn }),
    };
};
const serializeAws_json1_1DeleteConnectionMessage = (input, context) => {
    return {
        ...(input.EndpointArn !== undefined && input.EndpointArn !== null && { EndpointArn: input.EndpointArn }),
        ...(input.ReplicationInstanceArn !== undefined &&
            input.ReplicationInstanceArn !== null && { ReplicationInstanceArn: input.ReplicationInstanceArn }),
    };
};
const serializeAws_json1_1DeleteEndpointMessage = (input, context) => {
    return {
        ...(input.EndpointArn !== undefined && input.EndpointArn !== null && { EndpointArn: input.EndpointArn }),
    };
};
const serializeAws_json1_1DeleteEventSubscriptionMessage = (input, context) => {
    return {
        ...(input.SubscriptionName !== undefined &&
            input.SubscriptionName !== null && { SubscriptionName: input.SubscriptionName }),
    };
};
const serializeAws_json1_1DeleteReplicationInstanceMessage = (input, context) => {
    return {
        ...(input.ReplicationInstanceArn !== undefined &&
            input.ReplicationInstanceArn !== null && { ReplicationInstanceArn: input.ReplicationInstanceArn }),
    };
};
const serializeAws_json1_1DeleteReplicationSubnetGroupMessage = (input, context) => {
    return {
        ...(input.ReplicationSubnetGroupIdentifier !== undefined &&
            input.ReplicationSubnetGroupIdentifier !== null && {
            ReplicationSubnetGroupIdentifier: input.ReplicationSubnetGroupIdentifier,
        }),
    };
};
const serializeAws_json1_1DeleteReplicationTaskAssessmentRunMessage = (input, context) => {
    return {
        ...(input.ReplicationTaskAssessmentRunArn !== undefined &&
            input.ReplicationTaskAssessmentRunArn !== null && {
            ReplicationTaskAssessmentRunArn: input.ReplicationTaskAssessmentRunArn,
        }),
    };
};
const serializeAws_json1_1DeleteReplicationTaskMessage = (input, context) => {
    return {
        ...(input.ReplicationTaskArn !== undefined &&
            input.ReplicationTaskArn !== null && { ReplicationTaskArn: input.ReplicationTaskArn }),
    };
};
const serializeAws_json1_1DescribeAccountAttributesMessage = (input, context) => {
    return {};
};
const serializeAws_json1_1DescribeApplicableIndividualAssessmentsMessage = (input, context) => {
    return {
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
        ...(input.MaxRecords !== undefined && input.MaxRecords !== null && { MaxRecords: input.MaxRecords }),
        ...(input.MigrationType !== undefined && input.MigrationType !== null && { MigrationType: input.MigrationType }),
        ...(input.ReplicationInstanceArn !== undefined &&
            input.ReplicationInstanceArn !== null && { ReplicationInstanceArn: input.ReplicationInstanceArn }),
        ...(input.ReplicationTaskArn !== undefined &&
            input.ReplicationTaskArn !== null && { ReplicationTaskArn: input.ReplicationTaskArn }),
        ...(input.SourceEngineName !== undefined &&
            input.SourceEngineName !== null && { SourceEngineName: input.SourceEngineName }),
        ...(input.TargetEngineName !== undefined &&
            input.TargetEngineName !== null && { TargetEngineName: input.TargetEngineName }),
    };
};
const serializeAws_json1_1DescribeCertificatesMessage = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
        ...(input.MaxRecords !== undefined && input.MaxRecords !== null && { MaxRecords: input.MaxRecords }),
    };
};
const serializeAws_json1_1DescribeConnectionsMessage = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
        ...(input.MaxRecords !== undefined && input.MaxRecords !== null && { MaxRecords: input.MaxRecords }),
    };
};
const serializeAws_json1_1DescribeEndpointSettingsMessage = (input, context) => {
    return {
        ...(input.EngineName !== undefined && input.EngineName !== null && { EngineName: input.EngineName }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
        ...(input.MaxRecords !== undefined && input.MaxRecords !== null && { MaxRecords: input.MaxRecords }),
    };
};
const serializeAws_json1_1DescribeEndpointsMessage = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
        ...(input.MaxRecords !== undefined && input.MaxRecords !== null && { MaxRecords: input.MaxRecords }),
    };
};
const serializeAws_json1_1DescribeEndpointTypesMessage = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
        ...(input.MaxRecords !== undefined && input.MaxRecords !== null && { MaxRecords: input.MaxRecords }),
    };
};
const serializeAws_json1_1DescribeEventCategoriesMessage = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
        ...(input.SourceType !== undefined && input.SourceType !== null && { SourceType: input.SourceType }),
    };
};
const serializeAws_json1_1DescribeEventsMessage = (input, context) => {
    return {
        ...(input.Duration !== undefined && input.Duration !== null && { Duration: input.Duration }),
        ...(input.EndTime !== undefined &&
            input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
        ...(input.EventCategories !== undefined &&
            input.EventCategories !== null && {
            EventCategories: serializeAws_json1_1EventCategoriesList(input.EventCategories, context),
        }),
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
        ...(input.MaxRecords !== undefined && input.MaxRecords !== null && { MaxRecords: input.MaxRecords }),
        ...(input.SourceIdentifier !== undefined &&
            input.SourceIdentifier !== null && { SourceIdentifier: input.SourceIdentifier }),
        ...(input.SourceType !== undefined && input.SourceType !== null && { SourceType: input.SourceType }),
        ...(input.StartTime !== undefined &&
            input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
    };
};
const serializeAws_json1_1DescribeEventSubscriptionsMessage = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
        ...(input.MaxRecords !== undefined && input.MaxRecords !== null && { MaxRecords: input.MaxRecords }),
        ...(input.SubscriptionName !== undefined &&
            input.SubscriptionName !== null && { SubscriptionName: input.SubscriptionName }),
    };
};
const serializeAws_json1_1DescribeOrderableReplicationInstancesMessage = (input, context) => {
    return {
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
        ...(input.MaxRecords !== undefined && input.MaxRecords !== null && { MaxRecords: input.MaxRecords }),
    };
};
const serializeAws_json1_1DescribePendingMaintenanceActionsMessage = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
        ...(input.MaxRecords !== undefined && input.MaxRecords !== null && { MaxRecords: input.MaxRecords }),
        ...(input.ReplicationInstanceArn !== undefined &&
            input.ReplicationInstanceArn !== null && { ReplicationInstanceArn: input.ReplicationInstanceArn }),
    };
};
const serializeAws_json1_1DescribeRefreshSchemasStatusMessage = (input, context) => {
    return {
        ...(input.EndpointArn !== undefined && input.EndpointArn !== null && { EndpointArn: input.EndpointArn }),
    };
};
const serializeAws_json1_1DescribeReplicationInstancesMessage = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
        ...(input.MaxRecords !== undefined && input.MaxRecords !== null && { MaxRecords: input.MaxRecords }),
    };
};
const serializeAws_json1_1DescribeReplicationInstanceTaskLogsMessage = (input, context) => {
    return {
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
        ...(input.MaxRecords !== undefined && input.MaxRecords !== null && { MaxRecords: input.MaxRecords }),
        ...(input.ReplicationInstanceArn !== undefined &&
            input.ReplicationInstanceArn !== null && { ReplicationInstanceArn: input.ReplicationInstanceArn }),
    };
};
const serializeAws_json1_1DescribeReplicationSubnetGroupsMessage = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
        ...(input.MaxRecords !== undefined && input.MaxRecords !== null && { MaxRecords: input.MaxRecords }),
    };
};
const serializeAws_json1_1DescribeReplicationTaskAssessmentResultsMessage = (input, context) => {
    return {
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
        ...(input.MaxRecords !== undefined && input.MaxRecords !== null && { MaxRecords: input.MaxRecords }),
        ...(input.ReplicationTaskArn !== undefined &&
            input.ReplicationTaskArn !== null && { ReplicationTaskArn: input.ReplicationTaskArn }),
    };
};
const serializeAws_json1_1DescribeReplicationTaskAssessmentRunsMessage = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
        ...(input.MaxRecords !== undefined && input.MaxRecords !== null && { MaxRecords: input.MaxRecords }),
    };
};
const serializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsMessage = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
        ...(input.MaxRecords !== undefined && input.MaxRecords !== null && { MaxRecords: input.MaxRecords }),
    };
};
const serializeAws_json1_1DescribeReplicationTasksMessage = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
        ...(input.MaxRecords !== undefined && input.MaxRecords !== null && { MaxRecords: input.MaxRecords }),
        ...(input.WithoutSettings !== undefined &&
            input.WithoutSettings !== null && { WithoutSettings: input.WithoutSettings }),
    };
};
const serializeAws_json1_1DescribeSchemasMessage = (input, context) => {
    return {
        ...(input.EndpointArn !== undefined && input.EndpointArn !== null && { EndpointArn: input.EndpointArn }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
        ...(input.MaxRecords !== undefined && input.MaxRecords !== null && { MaxRecords: input.MaxRecords }),
    };
};
const serializeAws_json1_1DescribeTableStatisticsMessage = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
        ...(input.MaxRecords !== undefined && input.MaxRecords !== null && { MaxRecords: input.MaxRecords }),
        ...(input.ReplicationTaskArn !== undefined &&
            input.ReplicationTaskArn !== null && { ReplicationTaskArn: input.ReplicationTaskArn }),
    };
};
const serializeAws_json1_1DmsTransferSettings = (input, context) => {
    return {
        ...(input.BucketName !== undefined && input.BucketName !== null && { BucketName: input.BucketName }),
        ...(input.ServiceAccessRoleArn !== undefined &&
            input.ServiceAccessRoleArn !== null && { ServiceAccessRoleArn: input.ServiceAccessRoleArn }),
    };
};
const serializeAws_json1_1DocDbSettings = (input, context) => {
    return {
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.DocsToInvestigate !== undefined &&
            input.DocsToInvestigate !== null && { DocsToInvestigate: input.DocsToInvestigate }),
        ...(input.ExtractDocId !== undefined && input.ExtractDocId !== null && { ExtractDocId: input.ExtractDocId }),
        ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
        ...(input.NestingLevel !== undefined && input.NestingLevel !== null && { NestingLevel: input.NestingLevel }),
        ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
        ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
        ...(input.SecretsManagerAccessRoleArn !== undefined &&
            input.SecretsManagerAccessRoleArn !== null && { SecretsManagerAccessRoleArn: input.SecretsManagerAccessRoleArn }),
        ...(input.SecretsManagerSecretId !== undefined &&
            input.SecretsManagerSecretId !== null && { SecretsManagerSecretId: input.SecretsManagerSecretId }),
        ...(input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1DynamoDbSettings = (input, context) => {
    return {
        ...(input.ServiceAccessRoleArn !== undefined &&
            input.ServiceAccessRoleArn !== null && { ServiceAccessRoleArn: input.ServiceAccessRoleArn }),
    };
};
const serializeAws_json1_1ElasticsearchSettings = (input, context) => {
    return {
        ...(input.EndpointUri !== undefined && input.EndpointUri !== null && { EndpointUri: input.EndpointUri }),
        ...(input.ErrorRetryDuration !== undefined &&
            input.ErrorRetryDuration !== null && { ErrorRetryDuration: input.ErrorRetryDuration }),
        ...(input.FullLoadErrorPercentage !== undefined &&
            input.FullLoadErrorPercentage !== null && { FullLoadErrorPercentage: input.FullLoadErrorPercentage }),
        ...(input.ServiceAccessRoleArn !== undefined &&
            input.ServiceAccessRoleArn !== null && { ServiceAccessRoleArn: input.ServiceAccessRoleArn }),
    };
};
const serializeAws_json1_1EventCategoriesList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ExcludeTestList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1Filter = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1FilterValueList(input.Values, context) }),
    };
};
const serializeAws_json1_1FilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Filter(entry, context);
    });
};
const serializeAws_json1_1FilterValueList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1IBMDb2Settings = (input, context) => {
    return {
        ...(input.CurrentLsn !== undefined && input.CurrentLsn !== null && { CurrentLsn: input.CurrentLsn }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.MaxKBytesPerRead !== undefined &&
            input.MaxKBytesPerRead !== null && { MaxKBytesPerRead: input.MaxKBytesPerRead }),
        ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
        ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
        ...(input.SecretsManagerAccessRoleArn !== undefined &&
            input.SecretsManagerAccessRoleArn !== null && { SecretsManagerAccessRoleArn: input.SecretsManagerAccessRoleArn }),
        ...(input.SecretsManagerSecretId !== undefined &&
            input.SecretsManagerSecretId !== null && { SecretsManagerSecretId: input.SecretsManagerSecretId }),
        ...(input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName }),
        ...(input.SetDataCaptureChanges !== undefined &&
            input.SetDataCaptureChanges !== null && { SetDataCaptureChanges: input.SetDataCaptureChanges }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1ImportCertificateMessage = (input, context) => {
    return {
        ...(input.CertificateIdentifier !== undefined &&
            input.CertificateIdentifier !== null && { CertificateIdentifier: input.CertificateIdentifier }),
        ...(input.CertificatePem !== undefined &&
            input.CertificatePem !== null && { CertificatePem: input.CertificatePem }),
        ...(input.CertificateWallet !== undefined &&
            input.CertificateWallet !== null && { CertificateWallet: context.base64Encoder(input.CertificateWallet) }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1IncludeTestList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1KafkaSettings = (input, context) => {
    return {
        ...(input.Broker !== undefined && input.Broker !== null && { Broker: input.Broker }),
        ...(input.IncludeControlDetails !== undefined &&
            input.IncludeControlDetails !== null && { IncludeControlDetails: input.IncludeControlDetails }),
        ...(input.IncludeNullAndEmpty !== undefined &&
            input.IncludeNullAndEmpty !== null && { IncludeNullAndEmpty: input.IncludeNullAndEmpty }),
        ...(input.IncludePartitionValue !== undefined &&
            input.IncludePartitionValue !== null && { IncludePartitionValue: input.IncludePartitionValue }),
        ...(input.IncludeTableAlterOperations !== undefined &&
            input.IncludeTableAlterOperations !== null && { IncludeTableAlterOperations: input.IncludeTableAlterOperations }),
        ...(input.IncludeTransactionDetails !== undefined &&
            input.IncludeTransactionDetails !== null && { IncludeTransactionDetails: input.IncludeTransactionDetails }),
        ...(input.MessageFormat !== undefined && input.MessageFormat !== null && { MessageFormat: input.MessageFormat }),
        ...(input.MessageMaxBytes !== undefined &&
            input.MessageMaxBytes !== null && { MessageMaxBytes: input.MessageMaxBytes }),
        ...(input.PartitionIncludeSchemaTable !== undefined &&
            input.PartitionIncludeSchemaTable !== null && { PartitionIncludeSchemaTable: input.PartitionIncludeSchemaTable }),
        ...(input.SaslPassword !== undefined && input.SaslPassword !== null && { SaslPassword: input.SaslPassword }),
        ...(input.SaslUsername !== undefined && input.SaslUsername !== null && { SaslUsername: input.SaslUsername }),
        ...(input.SecurityProtocol !== undefined &&
            input.SecurityProtocol !== null && { SecurityProtocol: input.SecurityProtocol }),
        ...(input.SslCaCertificateArn !== undefined &&
            input.SslCaCertificateArn !== null && { SslCaCertificateArn: input.SslCaCertificateArn }),
        ...(input.SslClientCertificateArn !== undefined &&
            input.SslClientCertificateArn !== null && { SslClientCertificateArn: input.SslClientCertificateArn }),
        ...(input.SslClientKeyArn !== undefined &&
            input.SslClientKeyArn !== null && { SslClientKeyArn: input.SslClientKeyArn }),
        ...(input.SslClientKeyPassword !== undefined &&
            input.SslClientKeyPassword !== null && { SslClientKeyPassword: input.SslClientKeyPassword }),
        ...(input.Topic !== undefined && input.Topic !== null && { Topic: input.Topic }),
    };
};
const serializeAws_json1_1KeyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1KinesisSettings = (input, context) => {
    return {
        ...(input.IncludeControlDetails !== undefined &&
            input.IncludeControlDetails !== null && { IncludeControlDetails: input.IncludeControlDetails }),
        ...(input.IncludeNullAndEmpty !== undefined &&
            input.IncludeNullAndEmpty !== null && { IncludeNullAndEmpty: input.IncludeNullAndEmpty }),
        ...(input.IncludePartitionValue !== undefined &&
            input.IncludePartitionValue !== null && { IncludePartitionValue: input.IncludePartitionValue }),
        ...(input.IncludeTableAlterOperations !== undefined &&
            input.IncludeTableAlterOperations !== null && { IncludeTableAlterOperations: input.IncludeTableAlterOperations }),
        ...(input.IncludeTransactionDetails !== undefined &&
            input.IncludeTransactionDetails !== null && { IncludeTransactionDetails: input.IncludeTransactionDetails }),
        ...(input.MessageFormat !== undefined && input.MessageFormat !== null && { MessageFormat: input.MessageFormat }),
        ...(input.PartitionIncludeSchemaTable !== undefined &&
            input.PartitionIncludeSchemaTable !== null && { PartitionIncludeSchemaTable: input.PartitionIncludeSchemaTable }),
        ...(input.ServiceAccessRoleArn !== undefined &&
            input.ServiceAccessRoleArn !== null && { ServiceAccessRoleArn: input.ServiceAccessRoleArn }),
        ...(input.StreamArn !== undefined && input.StreamArn !== null && { StreamArn: input.StreamArn }),
    };
};
const serializeAws_json1_1ListTagsForResourceMessage = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_1MicrosoftSQLServerSettings = (input, context) => {
    return {
        ...(input.BcpPacketSize !== undefined && input.BcpPacketSize !== null && { BcpPacketSize: input.BcpPacketSize }),
        ...(input.ControlTablesFileGroup !== undefined &&
            input.ControlTablesFileGroup !== null && { ControlTablesFileGroup: input.ControlTablesFileGroup }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
        ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
        ...(input.QuerySingleAlwaysOnNode !== undefined &&
            input.QuerySingleAlwaysOnNode !== null && { QuerySingleAlwaysOnNode: input.QuerySingleAlwaysOnNode }),
        ...(input.ReadBackupOnly !== undefined &&
            input.ReadBackupOnly !== null && { ReadBackupOnly: input.ReadBackupOnly }),
        ...(input.SafeguardPolicy !== undefined &&
            input.SafeguardPolicy !== null && { SafeguardPolicy: input.SafeguardPolicy }),
        ...(input.SecretsManagerAccessRoleArn !== undefined &&
            input.SecretsManagerAccessRoleArn !== null && { SecretsManagerAccessRoleArn: input.SecretsManagerAccessRoleArn }),
        ...(input.SecretsManagerSecretId !== undefined &&
            input.SecretsManagerSecretId !== null && { SecretsManagerSecretId: input.SecretsManagerSecretId }),
        ...(input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName }),
        ...(input.UseBcpFullLoad !== undefined &&
            input.UseBcpFullLoad !== null && { UseBcpFullLoad: input.UseBcpFullLoad }),
        ...(input.UseThirdPartyBackupDevice !== undefined &&
            input.UseThirdPartyBackupDevice !== null && { UseThirdPartyBackupDevice: input.UseThirdPartyBackupDevice }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1ModifyEndpointMessage = (input, context) => {
    return {
        ...(input.CertificateArn !== undefined &&
            input.CertificateArn !== null && { CertificateArn: input.CertificateArn }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.DmsTransferSettings !== undefined &&
            input.DmsTransferSettings !== null && {
            DmsTransferSettings: serializeAws_json1_1DmsTransferSettings(input.DmsTransferSettings, context),
        }),
        ...(input.DocDbSettings !== undefined &&
            input.DocDbSettings !== null && {
            DocDbSettings: serializeAws_json1_1DocDbSettings(input.DocDbSettings, context),
        }),
        ...(input.DynamoDbSettings !== undefined &&
            input.DynamoDbSettings !== null && {
            DynamoDbSettings: serializeAws_json1_1DynamoDbSettings(input.DynamoDbSettings, context),
        }),
        ...(input.ElasticsearchSettings !== undefined &&
            input.ElasticsearchSettings !== null && {
            ElasticsearchSettings: serializeAws_json1_1ElasticsearchSettings(input.ElasticsearchSettings, context),
        }),
        ...(input.EndpointArn !== undefined && input.EndpointArn !== null && { EndpointArn: input.EndpointArn }),
        ...(input.EndpointIdentifier !== undefined &&
            input.EndpointIdentifier !== null && { EndpointIdentifier: input.EndpointIdentifier }),
        ...(input.EndpointType !== undefined && input.EndpointType !== null && { EndpointType: input.EndpointType }),
        ...(input.EngineName !== undefined && input.EngineName !== null && { EngineName: input.EngineName }),
        ...(input.ExternalTableDefinition !== undefined &&
            input.ExternalTableDefinition !== null && { ExternalTableDefinition: input.ExternalTableDefinition }),
        ...(input.ExtraConnectionAttributes !== undefined &&
            input.ExtraConnectionAttributes !== null && { ExtraConnectionAttributes: input.ExtraConnectionAttributes }),
        ...(input.IBMDb2Settings !== undefined &&
            input.IBMDb2Settings !== null && {
            IBMDb2Settings: serializeAws_json1_1IBMDb2Settings(input.IBMDb2Settings, context),
        }),
        ...(input.KafkaSettings !== undefined &&
            input.KafkaSettings !== null && {
            KafkaSettings: serializeAws_json1_1KafkaSettings(input.KafkaSettings, context),
        }),
        ...(input.KinesisSettings !== undefined &&
            input.KinesisSettings !== null && {
            KinesisSettings: serializeAws_json1_1KinesisSettings(input.KinesisSettings, context),
        }),
        ...(input.MicrosoftSQLServerSettings !== undefined &&
            input.MicrosoftSQLServerSettings !== null && {
            MicrosoftSQLServerSettings: serializeAws_json1_1MicrosoftSQLServerSettings(input.MicrosoftSQLServerSettings, context),
        }),
        ...(input.MongoDbSettings !== undefined &&
            input.MongoDbSettings !== null && {
            MongoDbSettings: serializeAws_json1_1MongoDbSettings(input.MongoDbSettings, context),
        }),
        ...(input.MySQLSettings !== undefined &&
            input.MySQLSettings !== null && {
            MySQLSettings: serializeAws_json1_1MySQLSettings(input.MySQLSettings, context),
        }),
        ...(input.NeptuneSettings !== undefined &&
            input.NeptuneSettings !== null && {
            NeptuneSettings: serializeAws_json1_1NeptuneSettings(input.NeptuneSettings, context),
        }),
        ...(input.OracleSettings !== undefined &&
            input.OracleSettings !== null && {
            OracleSettings: serializeAws_json1_1OracleSettings(input.OracleSettings, context),
        }),
        ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
        ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
        ...(input.PostgreSQLSettings !== undefined &&
            input.PostgreSQLSettings !== null && {
            PostgreSQLSettings: serializeAws_json1_1PostgreSQLSettings(input.PostgreSQLSettings, context),
        }),
        ...(input.RedshiftSettings !== undefined &&
            input.RedshiftSettings !== null && {
            RedshiftSettings: serializeAws_json1_1RedshiftSettings(input.RedshiftSettings, context),
        }),
        ...(input.S3Settings !== undefined &&
            input.S3Settings !== null && { S3Settings: serializeAws_json1_1S3Settings(input.S3Settings, context) }),
        ...(input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName }),
        ...(input.ServiceAccessRoleArn !== undefined &&
            input.ServiceAccessRoleArn !== null && { ServiceAccessRoleArn: input.ServiceAccessRoleArn }),
        ...(input.SslMode !== undefined && input.SslMode !== null && { SslMode: input.SslMode }),
        ...(input.SybaseSettings !== undefined &&
            input.SybaseSettings !== null && {
            SybaseSettings: serializeAws_json1_1SybaseSettings(input.SybaseSettings, context),
        }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1ModifyEventSubscriptionMessage = (input, context) => {
    return {
        ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
        ...(input.EventCategories !== undefined &&
            input.EventCategories !== null && {
            EventCategories: serializeAws_json1_1EventCategoriesList(input.EventCategories, context),
        }),
        ...(input.SnsTopicArn !== undefined && input.SnsTopicArn !== null && { SnsTopicArn: input.SnsTopicArn }),
        ...(input.SourceType !== undefined && input.SourceType !== null && { SourceType: input.SourceType }),
        ...(input.SubscriptionName !== undefined &&
            input.SubscriptionName !== null && { SubscriptionName: input.SubscriptionName }),
    };
};
const serializeAws_json1_1ModifyReplicationInstanceMessage = (input, context) => {
    return {
        ...(input.AllocatedStorage !== undefined &&
            input.AllocatedStorage !== null && { AllocatedStorage: input.AllocatedStorage }),
        ...(input.AllowMajorVersionUpgrade !== undefined &&
            input.AllowMajorVersionUpgrade !== null && { AllowMajorVersionUpgrade: input.AllowMajorVersionUpgrade }),
        ...(input.ApplyImmediately !== undefined &&
            input.ApplyImmediately !== null && { ApplyImmediately: input.ApplyImmediately }),
        ...(input.AutoMinorVersionUpgrade !== undefined &&
            input.AutoMinorVersionUpgrade !== null && { AutoMinorVersionUpgrade: input.AutoMinorVersionUpgrade }),
        ...(input.EngineVersion !== undefined && input.EngineVersion !== null && { EngineVersion: input.EngineVersion }),
        ...(input.MultiAZ !== undefined && input.MultiAZ !== null && { MultiAZ: input.MultiAZ }),
        ...(input.PreferredMaintenanceWindow !== undefined &&
            input.PreferredMaintenanceWindow !== null && { PreferredMaintenanceWindow: input.PreferredMaintenanceWindow }),
        ...(input.ReplicationInstanceArn !== undefined &&
            input.ReplicationInstanceArn !== null && { ReplicationInstanceArn: input.ReplicationInstanceArn }),
        ...(input.ReplicationInstanceClass !== undefined &&
            input.ReplicationInstanceClass !== null && { ReplicationInstanceClass: input.ReplicationInstanceClass }),
        ...(input.ReplicationInstanceIdentifier !== undefined &&
            input.ReplicationInstanceIdentifier !== null && {
            ReplicationInstanceIdentifier: input.ReplicationInstanceIdentifier,
        }),
        ...(input.VpcSecurityGroupIds !== undefined &&
            input.VpcSecurityGroupIds !== null && {
            VpcSecurityGroupIds: serializeAws_json1_1VpcSecurityGroupIdList(input.VpcSecurityGroupIds, context),
        }),
    };
};
const serializeAws_json1_1ModifyReplicationSubnetGroupMessage = (input, context) => {
    return {
        ...(input.ReplicationSubnetGroupDescription !== undefined &&
            input.ReplicationSubnetGroupDescription !== null && {
            ReplicationSubnetGroupDescription: input.ReplicationSubnetGroupDescription,
        }),
        ...(input.ReplicationSubnetGroupIdentifier !== undefined &&
            input.ReplicationSubnetGroupIdentifier !== null && {
            ReplicationSubnetGroupIdentifier: input.ReplicationSubnetGroupIdentifier,
        }),
        ...(input.SubnetIds !== undefined &&
            input.SubnetIds !== null && { SubnetIds: serializeAws_json1_1SubnetIdentifierList(input.SubnetIds, context) }),
    };
};
const serializeAws_json1_1ModifyReplicationTaskMessage = (input, context) => {
    return {
        ...(input.CdcStartPosition !== undefined &&
            input.CdcStartPosition !== null && { CdcStartPosition: input.CdcStartPosition }),
        ...(input.CdcStartTime !== undefined &&
            input.CdcStartTime !== null && { CdcStartTime: Math.round(input.CdcStartTime.getTime() / 1000) }),
        ...(input.CdcStopPosition !== undefined &&
            input.CdcStopPosition !== null && { CdcStopPosition: input.CdcStopPosition }),
        ...(input.MigrationType !== undefined && input.MigrationType !== null && { MigrationType: input.MigrationType }),
        ...(input.ReplicationTaskArn !== undefined &&
            input.ReplicationTaskArn !== null && { ReplicationTaskArn: input.ReplicationTaskArn }),
        ...(input.ReplicationTaskIdentifier !== undefined &&
            input.ReplicationTaskIdentifier !== null && { ReplicationTaskIdentifier: input.ReplicationTaskIdentifier }),
        ...(input.ReplicationTaskSettings !== undefined &&
            input.ReplicationTaskSettings !== null && { ReplicationTaskSettings: input.ReplicationTaskSettings }),
        ...(input.TableMappings !== undefined && input.TableMappings !== null && { TableMappings: input.TableMappings }),
        ...(input.TaskData !== undefined && input.TaskData !== null && { TaskData: input.TaskData }),
    };
};
const serializeAws_json1_1MongoDbSettings = (input, context) => {
    return {
        ...(input.AuthMechanism !== undefined && input.AuthMechanism !== null && { AuthMechanism: input.AuthMechanism }),
        ...(input.AuthSource !== undefined && input.AuthSource !== null && { AuthSource: input.AuthSource }),
        ...(input.AuthType !== undefined && input.AuthType !== null && { AuthType: input.AuthType }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.DocsToInvestigate !== undefined &&
            input.DocsToInvestigate !== null && { DocsToInvestigate: input.DocsToInvestigate }),
        ...(input.ExtractDocId !== undefined && input.ExtractDocId !== null && { ExtractDocId: input.ExtractDocId }),
        ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
        ...(input.NestingLevel !== undefined && input.NestingLevel !== null && { NestingLevel: input.NestingLevel }),
        ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
        ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
        ...(input.SecretsManagerAccessRoleArn !== undefined &&
            input.SecretsManagerAccessRoleArn !== null && { SecretsManagerAccessRoleArn: input.SecretsManagerAccessRoleArn }),
        ...(input.SecretsManagerSecretId !== undefined &&
            input.SecretsManagerSecretId !== null && { SecretsManagerSecretId: input.SecretsManagerSecretId }),
        ...(input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1MoveReplicationTaskMessage = (input, context) => {
    return {
        ...(input.ReplicationTaskArn !== undefined &&
            input.ReplicationTaskArn !== null && { ReplicationTaskArn: input.ReplicationTaskArn }),
        ...(input.TargetReplicationInstanceArn !== undefined &&
            input.TargetReplicationInstanceArn !== null && {
            TargetReplicationInstanceArn: input.TargetReplicationInstanceArn,
        }),
    };
};
const serializeAws_json1_1MySQLSettings = (input, context) => {
    return {
        ...(input.AfterConnectScript !== undefined &&
            input.AfterConnectScript !== null && { AfterConnectScript: input.AfterConnectScript }),
        ...(input.CleanSourceMetadataOnMismatch !== undefined &&
            input.CleanSourceMetadataOnMismatch !== null && {
            CleanSourceMetadataOnMismatch: input.CleanSourceMetadataOnMismatch,
        }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.EventsPollInterval !== undefined &&
            input.EventsPollInterval !== null && { EventsPollInterval: input.EventsPollInterval }),
        ...(input.MaxFileSize !== undefined && input.MaxFileSize !== null && { MaxFileSize: input.MaxFileSize }),
        ...(input.ParallelLoadThreads !== undefined &&
            input.ParallelLoadThreads !== null && { ParallelLoadThreads: input.ParallelLoadThreads }),
        ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
        ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
        ...(input.SecretsManagerAccessRoleArn !== undefined &&
            input.SecretsManagerAccessRoleArn !== null && { SecretsManagerAccessRoleArn: input.SecretsManagerAccessRoleArn }),
        ...(input.SecretsManagerSecretId !== undefined &&
            input.SecretsManagerSecretId !== null && { SecretsManagerSecretId: input.SecretsManagerSecretId }),
        ...(input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName }),
        ...(input.ServerTimezone !== undefined &&
            input.ServerTimezone !== null && { ServerTimezone: input.ServerTimezone }),
        ...(input.TargetDbType !== undefined && input.TargetDbType !== null && { TargetDbType: input.TargetDbType }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1NeptuneSettings = (input, context) => {
    return {
        ...(input.ErrorRetryDuration !== undefined &&
            input.ErrorRetryDuration !== null && { ErrorRetryDuration: input.ErrorRetryDuration }),
        ...(input.IamAuthEnabled !== undefined &&
            input.IamAuthEnabled !== null && { IamAuthEnabled: input.IamAuthEnabled }),
        ...(input.MaxFileSize !== undefined && input.MaxFileSize !== null && { MaxFileSize: input.MaxFileSize }),
        ...(input.MaxRetryCount !== undefined && input.MaxRetryCount !== null && { MaxRetryCount: input.MaxRetryCount }),
        ...(input.S3BucketFolder !== undefined &&
            input.S3BucketFolder !== null && { S3BucketFolder: input.S3BucketFolder }),
        ...(input.S3BucketName !== undefined && input.S3BucketName !== null && { S3BucketName: input.S3BucketName }),
        ...(input.ServiceAccessRoleArn !== undefined &&
            input.ServiceAccessRoleArn !== null && { ServiceAccessRoleArn: input.ServiceAccessRoleArn }),
    };
};
const serializeAws_json1_1OracleSettings = (input, context) => {
    return {
        ...(input.AccessAlternateDirectly !== undefined &&
            input.AccessAlternateDirectly !== null && { AccessAlternateDirectly: input.AccessAlternateDirectly }),
        ...(input.AddSupplementalLogging !== undefined &&
            input.AddSupplementalLogging !== null && { AddSupplementalLogging: input.AddSupplementalLogging }),
        ...(input.AdditionalArchivedLogDestId !== undefined &&
            input.AdditionalArchivedLogDestId !== null && { AdditionalArchivedLogDestId: input.AdditionalArchivedLogDestId }),
        ...(input.AllowSelectNestedTables !== undefined &&
            input.AllowSelectNestedTables !== null && { AllowSelectNestedTables: input.AllowSelectNestedTables }),
        ...(input.ArchivedLogDestId !== undefined &&
            input.ArchivedLogDestId !== null && { ArchivedLogDestId: input.ArchivedLogDestId }),
        ...(input.ArchivedLogsOnly !== undefined &&
            input.ArchivedLogsOnly !== null && { ArchivedLogsOnly: input.ArchivedLogsOnly }),
        ...(input.AsmPassword !== undefined && input.AsmPassword !== null && { AsmPassword: input.AsmPassword }),
        ...(input.AsmServer !== undefined && input.AsmServer !== null && { AsmServer: input.AsmServer }),
        ...(input.AsmUser !== undefined && input.AsmUser !== null && { AsmUser: input.AsmUser }),
        ...(input.CharLengthSemantics !== undefined &&
            input.CharLengthSemantics !== null && { CharLengthSemantics: input.CharLengthSemantics }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.DirectPathNoLog !== undefined &&
            input.DirectPathNoLog !== null && { DirectPathNoLog: input.DirectPathNoLog }),
        ...(input.DirectPathParallelLoad !== undefined &&
            input.DirectPathParallelLoad !== null && { DirectPathParallelLoad: input.DirectPathParallelLoad }),
        ...(input.EnableHomogenousTablespace !== undefined &&
            input.EnableHomogenousTablespace !== null && { EnableHomogenousTablespace: input.EnableHomogenousTablespace }),
        ...(input.FailTasksOnLobTruncation !== undefined &&
            input.FailTasksOnLobTruncation !== null && { FailTasksOnLobTruncation: input.FailTasksOnLobTruncation }),
        ...(input.NumberDatatypeScale !== undefined &&
            input.NumberDatatypeScale !== null && { NumberDatatypeScale: input.NumberDatatypeScale }),
        ...(input.OraclePathPrefix !== undefined &&
            input.OraclePathPrefix !== null && { OraclePathPrefix: input.OraclePathPrefix }),
        ...(input.ParallelAsmReadThreads !== undefined &&
            input.ParallelAsmReadThreads !== null && { ParallelAsmReadThreads: input.ParallelAsmReadThreads }),
        ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
        ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
        ...(input.ReadAheadBlocks !== undefined &&
            input.ReadAheadBlocks !== null && { ReadAheadBlocks: input.ReadAheadBlocks }),
        ...(input.ReadTableSpaceName !== undefined &&
            input.ReadTableSpaceName !== null && { ReadTableSpaceName: input.ReadTableSpaceName }),
        ...(input.ReplacePathPrefix !== undefined &&
            input.ReplacePathPrefix !== null && { ReplacePathPrefix: input.ReplacePathPrefix }),
        ...(input.RetryInterval !== undefined && input.RetryInterval !== null && { RetryInterval: input.RetryInterval }),
        ...(input.SecretsManagerAccessRoleArn !== undefined &&
            input.SecretsManagerAccessRoleArn !== null && { SecretsManagerAccessRoleArn: input.SecretsManagerAccessRoleArn }),
        ...(input.SecretsManagerOracleAsmAccessRoleArn !== undefined &&
            input.SecretsManagerOracleAsmAccessRoleArn !== null && {
            SecretsManagerOracleAsmAccessRoleArn: input.SecretsManagerOracleAsmAccessRoleArn,
        }),
        ...(input.SecretsManagerOracleAsmSecretId !== undefined &&
            input.SecretsManagerOracleAsmSecretId !== null && {
            SecretsManagerOracleAsmSecretId: input.SecretsManagerOracleAsmSecretId,
        }),
        ...(input.SecretsManagerSecretId !== undefined &&
            input.SecretsManagerSecretId !== null && { SecretsManagerSecretId: input.SecretsManagerSecretId }),
        ...(input.SecurityDbEncryption !== undefined &&
            input.SecurityDbEncryption !== null && { SecurityDbEncryption: input.SecurityDbEncryption }),
        ...(input.SecurityDbEncryptionName !== undefined &&
            input.SecurityDbEncryptionName !== null && { SecurityDbEncryptionName: input.SecurityDbEncryptionName }),
        ...(input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName }),
        ...(input.SpatialDataOptionToGeoJsonFunctionName !== undefined &&
            input.SpatialDataOptionToGeoJsonFunctionName !== null && {
            SpatialDataOptionToGeoJsonFunctionName: input.SpatialDataOptionToGeoJsonFunctionName,
        }),
        ...(input.UseAlternateFolderForOnline !== undefined &&
            input.UseAlternateFolderForOnline !== null && { UseAlternateFolderForOnline: input.UseAlternateFolderForOnline }),
        ...(input.UsePathPrefix !== undefined && input.UsePathPrefix !== null && { UsePathPrefix: input.UsePathPrefix }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1PostgreSQLSettings = (input, context) => {
    return {
        ...(input.AfterConnectScript !== undefined &&
            input.AfterConnectScript !== null && { AfterConnectScript: input.AfterConnectScript }),
        ...(input.CaptureDdls !== undefined && input.CaptureDdls !== null && { CaptureDdls: input.CaptureDdls }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.DdlArtifactsSchema !== undefined &&
            input.DdlArtifactsSchema !== null && { DdlArtifactsSchema: input.DdlArtifactsSchema }),
        ...(input.ExecuteTimeout !== undefined &&
            input.ExecuteTimeout !== null && { ExecuteTimeout: input.ExecuteTimeout }),
        ...(input.FailTasksOnLobTruncation !== undefined &&
            input.FailTasksOnLobTruncation !== null && { FailTasksOnLobTruncation: input.FailTasksOnLobTruncation }),
        ...(input.MaxFileSize !== undefined && input.MaxFileSize !== null && { MaxFileSize: input.MaxFileSize }),
        ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
        ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
        ...(input.SecretsManagerAccessRoleArn !== undefined &&
            input.SecretsManagerAccessRoleArn !== null && { SecretsManagerAccessRoleArn: input.SecretsManagerAccessRoleArn }),
        ...(input.SecretsManagerSecretId !== undefined &&
            input.SecretsManagerSecretId !== null && { SecretsManagerSecretId: input.SecretsManagerSecretId }),
        ...(input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName }),
        ...(input.SlotName !== undefined && input.SlotName !== null && { SlotName: input.SlotName }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1RebootReplicationInstanceMessage = (input, context) => {
    return {
        ...(input.ForceFailover !== undefined && input.ForceFailover !== null && { ForceFailover: input.ForceFailover }),
        ...(input.ReplicationInstanceArn !== undefined &&
            input.ReplicationInstanceArn !== null && { ReplicationInstanceArn: input.ReplicationInstanceArn }),
    };
};
const serializeAws_json1_1RedshiftSettings = (input, context) => {
    return {
        ...(input.AcceptAnyDate !== undefined && input.AcceptAnyDate !== null && { AcceptAnyDate: input.AcceptAnyDate }),
        ...(input.AfterConnectScript !== undefined &&
            input.AfterConnectScript !== null && { AfterConnectScript: input.AfterConnectScript }),
        ...(input.BucketFolder !== undefined && input.BucketFolder !== null && { BucketFolder: input.BucketFolder }),
        ...(input.BucketName !== undefined && input.BucketName !== null && { BucketName: input.BucketName }),
        ...(input.CaseSensitiveNames !== undefined &&
            input.CaseSensitiveNames !== null && { CaseSensitiveNames: input.CaseSensitiveNames }),
        ...(input.CompUpdate !== undefined && input.CompUpdate !== null && { CompUpdate: input.CompUpdate }),
        ...(input.ConnectionTimeout !== undefined &&
            input.ConnectionTimeout !== null && { ConnectionTimeout: input.ConnectionTimeout }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.DateFormat !== undefined && input.DateFormat !== null && { DateFormat: input.DateFormat }),
        ...(input.EmptyAsNull !== undefined && input.EmptyAsNull !== null && { EmptyAsNull: input.EmptyAsNull }),
        ...(input.EncryptionMode !== undefined &&
            input.EncryptionMode !== null && { EncryptionMode: input.EncryptionMode }),
        ...(input.ExplicitIds !== undefined && input.ExplicitIds !== null && { ExplicitIds: input.ExplicitIds }),
        ...(input.FileTransferUploadStreams !== undefined &&
            input.FileTransferUploadStreams !== null && { FileTransferUploadStreams: input.FileTransferUploadStreams }),
        ...(input.LoadTimeout !== undefined && input.LoadTimeout !== null && { LoadTimeout: input.LoadTimeout }),
        ...(input.MaxFileSize !== undefined && input.MaxFileSize !== null && { MaxFileSize: input.MaxFileSize }),
        ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
        ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
        ...(input.RemoveQuotes !== undefined && input.RemoveQuotes !== null && { RemoveQuotes: input.RemoveQuotes }),
        ...(input.ReplaceChars !== undefined && input.ReplaceChars !== null && { ReplaceChars: input.ReplaceChars }),
        ...(input.ReplaceInvalidChars !== undefined &&
            input.ReplaceInvalidChars !== null && { ReplaceInvalidChars: input.ReplaceInvalidChars }),
        ...(input.SecretsManagerAccessRoleArn !== undefined &&
            input.SecretsManagerAccessRoleArn !== null && { SecretsManagerAccessRoleArn: input.SecretsManagerAccessRoleArn }),
        ...(input.SecretsManagerSecretId !== undefined &&
            input.SecretsManagerSecretId !== null && { SecretsManagerSecretId: input.SecretsManagerSecretId }),
        ...(input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName }),
        ...(input.ServerSideEncryptionKmsKeyId !== undefined &&
            input.ServerSideEncryptionKmsKeyId !== null && {
            ServerSideEncryptionKmsKeyId: input.ServerSideEncryptionKmsKeyId,
        }),
        ...(input.ServiceAccessRoleArn !== undefined &&
            input.ServiceAccessRoleArn !== null && { ServiceAccessRoleArn: input.ServiceAccessRoleArn }),
        ...(input.TimeFormat !== undefined && input.TimeFormat !== null && { TimeFormat: input.TimeFormat }),
        ...(input.TrimBlanks !== undefined && input.TrimBlanks !== null && { TrimBlanks: input.TrimBlanks }),
        ...(input.TruncateColumns !== undefined &&
            input.TruncateColumns !== null && { TruncateColumns: input.TruncateColumns }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
        ...(input.WriteBufferSize !== undefined &&
            input.WriteBufferSize !== null && { WriteBufferSize: input.WriteBufferSize }),
    };
};
const serializeAws_json1_1RefreshSchemasMessage = (input, context) => {
    return {
        ...(input.EndpointArn !== undefined && input.EndpointArn !== null && { EndpointArn: input.EndpointArn }),
        ...(input.ReplicationInstanceArn !== undefined &&
            input.ReplicationInstanceArn !== null && { ReplicationInstanceArn: input.ReplicationInstanceArn }),
    };
};
const serializeAws_json1_1ReloadTablesMessage = (input, context) => {
    return {
        ...(input.ReloadOption !== undefined && input.ReloadOption !== null && { ReloadOption: input.ReloadOption }),
        ...(input.ReplicationTaskArn !== undefined &&
            input.ReplicationTaskArn !== null && { ReplicationTaskArn: input.ReplicationTaskArn }),
        ...(input.TablesToReload !== undefined &&
            input.TablesToReload !== null && {
            TablesToReload: serializeAws_json1_1TableListToReload(input.TablesToReload, context),
        }),
    };
};
const serializeAws_json1_1RemoveTagsFromResourceMessage = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_1KeyList(input.TagKeys, context) }),
    };
};
const serializeAws_json1_1S3Settings = (input, context) => {
    return {
        ...(input.BucketFolder !== undefined && input.BucketFolder !== null && { BucketFolder: input.BucketFolder }),
        ...(input.BucketName !== undefined && input.BucketName !== null && { BucketName: input.BucketName }),
        ...(input.CdcInsertsAndUpdates !== undefined &&
            input.CdcInsertsAndUpdates !== null && { CdcInsertsAndUpdates: input.CdcInsertsAndUpdates }),
        ...(input.CdcInsertsOnly !== undefined &&
            input.CdcInsertsOnly !== null && { CdcInsertsOnly: input.CdcInsertsOnly }),
        ...(input.CdcPath !== undefined && input.CdcPath !== null && { CdcPath: input.CdcPath }),
        ...(input.CompressionType !== undefined &&
            input.CompressionType !== null && { CompressionType: input.CompressionType }),
        ...(input.CsvDelimiter !== undefined && input.CsvDelimiter !== null && { CsvDelimiter: input.CsvDelimiter }),
        ...(input.CsvNoSupValue !== undefined && input.CsvNoSupValue !== null && { CsvNoSupValue: input.CsvNoSupValue }),
        ...(input.CsvRowDelimiter !== undefined &&
            input.CsvRowDelimiter !== null && { CsvRowDelimiter: input.CsvRowDelimiter }),
        ...(input.DataFormat !== undefined && input.DataFormat !== null && { DataFormat: input.DataFormat }),
        ...(input.DataPageSize !== undefined && input.DataPageSize !== null && { DataPageSize: input.DataPageSize }),
        ...(input.DatePartitionDelimiter !== undefined &&
            input.DatePartitionDelimiter !== null && { DatePartitionDelimiter: input.DatePartitionDelimiter }),
        ...(input.DatePartitionEnabled !== undefined &&
            input.DatePartitionEnabled !== null && { DatePartitionEnabled: input.DatePartitionEnabled }),
        ...(input.DatePartitionSequence !== undefined &&
            input.DatePartitionSequence !== null && { DatePartitionSequence: input.DatePartitionSequence }),
        ...(input.DictPageSizeLimit !== undefined &&
            input.DictPageSizeLimit !== null && { DictPageSizeLimit: input.DictPageSizeLimit }),
        ...(input.EnableStatistics !== undefined &&
            input.EnableStatistics !== null && { EnableStatistics: input.EnableStatistics }),
        ...(input.EncodingType !== undefined && input.EncodingType !== null && { EncodingType: input.EncodingType }),
        ...(input.EncryptionMode !== undefined &&
            input.EncryptionMode !== null && { EncryptionMode: input.EncryptionMode }),
        ...(input.ExternalTableDefinition !== undefined &&
            input.ExternalTableDefinition !== null && { ExternalTableDefinition: input.ExternalTableDefinition }),
        ...(input.IncludeOpForFullLoad !== undefined &&
            input.IncludeOpForFullLoad !== null && { IncludeOpForFullLoad: input.IncludeOpForFullLoad }),
        ...(input.ParquetTimestampInMillisecond !== undefined &&
            input.ParquetTimestampInMillisecond !== null && {
            ParquetTimestampInMillisecond: input.ParquetTimestampInMillisecond,
        }),
        ...(input.ParquetVersion !== undefined &&
            input.ParquetVersion !== null && { ParquetVersion: input.ParquetVersion }),
        ...(input.PreserveTransactions !== undefined &&
            input.PreserveTransactions !== null && { PreserveTransactions: input.PreserveTransactions }),
        ...(input.RowGroupLength !== undefined &&
            input.RowGroupLength !== null && { RowGroupLength: input.RowGroupLength }),
        ...(input.ServerSideEncryptionKmsKeyId !== undefined &&
            input.ServerSideEncryptionKmsKeyId !== null && {
            ServerSideEncryptionKmsKeyId: input.ServerSideEncryptionKmsKeyId,
        }),
        ...(input.ServiceAccessRoleArn !== undefined &&
            input.ServiceAccessRoleArn !== null && { ServiceAccessRoleArn: input.ServiceAccessRoleArn }),
        ...(input.TimestampColumnName !== undefined &&
            input.TimestampColumnName !== null && { TimestampColumnName: input.TimestampColumnName }),
        ...(input.UseCsvNoSupValue !== undefined &&
            input.UseCsvNoSupValue !== null && { UseCsvNoSupValue: input.UseCsvNoSupValue }),
    };
};
const serializeAws_json1_1SourceIdsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1StartReplicationTaskAssessmentMessage = (input, context) => {
    return {
        ...(input.ReplicationTaskArn !== undefined &&
            input.ReplicationTaskArn !== null && { ReplicationTaskArn: input.ReplicationTaskArn }),
    };
};
const serializeAws_json1_1StartReplicationTaskAssessmentRunMessage = (input, context) => {
    return {
        ...(input.AssessmentRunName !== undefined &&
            input.AssessmentRunName !== null && { AssessmentRunName: input.AssessmentRunName }),
        ...(input.Exclude !== undefined &&
            input.Exclude !== null && { Exclude: serializeAws_json1_1ExcludeTestList(input.Exclude, context) }),
        ...(input.IncludeOnly !== undefined &&
            input.IncludeOnly !== null && { IncludeOnly: serializeAws_json1_1IncludeTestList(input.IncludeOnly, context) }),
        ...(input.ReplicationTaskArn !== undefined &&
            input.ReplicationTaskArn !== null && { ReplicationTaskArn: input.ReplicationTaskArn }),
        ...(input.ResultEncryptionMode !== undefined &&
            input.ResultEncryptionMode !== null && { ResultEncryptionMode: input.ResultEncryptionMode }),
        ...(input.ResultKmsKeyArn !== undefined &&
            input.ResultKmsKeyArn !== null && { ResultKmsKeyArn: input.ResultKmsKeyArn }),
        ...(input.ResultLocationBucket !== undefined &&
            input.ResultLocationBucket !== null && { ResultLocationBucket: input.ResultLocationBucket }),
        ...(input.ResultLocationFolder !== undefined &&
            input.ResultLocationFolder !== null && { ResultLocationFolder: input.ResultLocationFolder }),
        ...(input.ServiceAccessRoleArn !== undefined &&
            input.ServiceAccessRoleArn !== null && { ServiceAccessRoleArn: input.ServiceAccessRoleArn }),
    };
};
const serializeAws_json1_1StartReplicationTaskMessage = (input, context) => {
    return {
        ...(input.CdcStartPosition !== undefined &&
            input.CdcStartPosition !== null && { CdcStartPosition: input.CdcStartPosition }),
        ...(input.CdcStartTime !== undefined &&
            input.CdcStartTime !== null && { CdcStartTime: Math.round(input.CdcStartTime.getTime() / 1000) }),
        ...(input.CdcStopPosition !== undefined &&
            input.CdcStopPosition !== null && { CdcStopPosition: input.CdcStopPosition }),
        ...(input.ReplicationTaskArn !== undefined &&
            input.ReplicationTaskArn !== null && { ReplicationTaskArn: input.ReplicationTaskArn }),
        ...(input.StartReplicationTaskType !== undefined &&
            input.StartReplicationTaskType !== null && { StartReplicationTaskType: input.StartReplicationTaskType }),
    };
};
const serializeAws_json1_1StopReplicationTaskMessage = (input, context) => {
    return {
        ...(input.ReplicationTaskArn !== undefined &&
            input.ReplicationTaskArn !== null && { ReplicationTaskArn: input.ReplicationTaskArn }),
    };
};
const serializeAws_json1_1SubnetIdentifierList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1SybaseSettings = (input, context) => {
    return {
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
        ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
        ...(input.SecretsManagerAccessRoleArn !== undefined &&
            input.SecretsManagerAccessRoleArn !== null && { SecretsManagerAccessRoleArn: input.SecretsManagerAccessRoleArn }),
        ...(input.SecretsManagerSecretId !== undefined &&
            input.SecretsManagerSecretId !== null && { SecretsManagerSecretId: input.SecretsManagerSecretId }),
        ...(input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1TableListToReload = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1TableToReload(entry, context);
    });
};
const serializeAws_json1_1TableToReload = (input, context) => {
    return {
        ...(input.SchemaName !== undefined && input.SchemaName !== null && { SchemaName: input.SchemaName }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const serializeAws_json1_1Tag = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
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
const serializeAws_json1_1TestConnectionMessage = (input, context) => {
    return {
        ...(input.EndpointArn !== undefined && input.EndpointArn !== null && { EndpointArn: input.EndpointArn }),
        ...(input.ReplicationInstanceArn !== undefined &&
            input.ReplicationInstanceArn !== null && { ReplicationInstanceArn: input.ReplicationInstanceArn }),
    };
};
const serializeAws_json1_1VpcSecurityGroupIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1AccessDeniedFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1AccountQuota = (output, context) => {
    return {
        AccountQuotaName: output.AccountQuotaName !== undefined && output.AccountQuotaName !== null ? output.AccountQuotaName : undefined,
        Max: output.Max !== undefined && output.Max !== null ? output.Max : undefined,
        Used: output.Used !== undefined && output.Used !== null ? output.Used : undefined,
    };
};
const deserializeAws_json1_1AccountQuotaList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AccountQuota(entry, context);
    });
};
const deserializeAws_json1_1AddTagsToResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1ApplyPendingMaintenanceActionResponse = (output, context) => {
    return {
        ResourcePendingMaintenanceActions: output.ResourcePendingMaintenanceActions !== undefined && output.ResourcePendingMaintenanceActions !== null
            ? deserializeAws_json1_1ResourcePendingMaintenanceActions(output.ResourcePendingMaintenanceActions, context)
            : undefined,
    };
};
const deserializeAws_json1_1AvailabilityZone = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1AvailabilityZonesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1CancelReplicationTaskAssessmentRunResponse = (output, context) => {
    return {
        ReplicationTaskAssessmentRun: output.ReplicationTaskAssessmentRun !== undefined && output.ReplicationTaskAssessmentRun !== null
            ? deserializeAws_json1_1ReplicationTaskAssessmentRun(output.ReplicationTaskAssessmentRun, context)
            : undefined,
    };
};
const deserializeAws_json1_1Certificate = (output, context) => {
    return {
        CertificateArn: output.CertificateArn !== undefined && output.CertificateArn !== null ? output.CertificateArn : undefined,
        CertificateCreationDate: output.CertificateCreationDate !== undefined && output.CertificateCreationDate !== null
            ? new Date(Math.round(output.CertificateCreationDate * 1000))
            : undefined,
        CertificateIdentifier: output.CertificateIdentifier !== undefined && output.CertificateIdentifier !== null
            ? output.CertificateIdentifier
            : undefined,
        CertificateOwner: output.CertificateOwner !== undefined && output.CertificateOwner !== null ? output.CertificateOwner : undefined,
        CertificatePem: output.CertificatePem !== undefined && output.CertificatePem !== null ? output.CertificatePem : undefined,
        CertificateWallet: output.CertificateWallet !== undefined && output.CertificateWallet !== null
            ? context.base64Decoder(output.CertificateWallet)
            : undefined,
        KeyLength: output.KeyLength !== undefined && output.KeyLength !== null ? output.KeyLength : undefined,
        SigningAlgorithm: output.SigningAlgorithm !== undefined && output.SigningAlgorithm !== null ? output.SigningAlgorithm : undefined,
        ValidFromDate: output.ValidFromDate !== undefined && output.ValidFromDate !== null
            ? new Date(Math.round(output.ValidFromDate * 1000))
            : undefined,
        ValidToDate: output.ValidToDate !== undefined && output.ValidToDate !== null
            ? new Date(Math.round(output.ValidToDate * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1CertificateList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Certificate(entry, context);
    });
};
const deserializeAws_json1_1Connection = (output, context) => {
    return {
        EndpointArn: output.EndpointArn !== undefined && output.EndpointArn !== null ? output.EndpointArn : undefined,
        EndpointIdentifier: output.EndpointIdentifier !== undefined && output.EndpointIdentifier !== null
            ? output.EndpointIdentifier
            : undefined,
        LastFailureMessage: output.LastFailureMessage !== undefined && output.LastFailureMessage !== null
            ? output.LastFailureMessage
            : undefined,
        ReplicationInstanceArn: output.ReplicationInstanceArn !== undefined && output.ReplicationInstanceArn !== null
            ? output.ReplicationInstanceArn
            : undefined,
        ReplicationInstanceIdentifier: output.ReplicationInstanceIdentifier !== undefined && output.ReplicationInstanceIdentifier !== null
            ? output.ReplicationInstanceIdentifier
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1ConnectionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Connection(entry, context);
    });
};
const deserializeAws_json1_1CreateEndpointResponse = (output, context) => {
    return {
        Endpoint: output.Endpoint !== undefined && output.Endpoint !== null
            ? deserializeAws_json1_1Endpoint(output.Endpoint, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateEventSubscriptionResponse = (output, context) => {
    return {
        EventSubscription: output.EventSubscription !== undefined && output.EventSubscription !== null
            ? deserializeAws_json1_1EventSubscription(output.EventSubscription, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateReplicationInstanceResponse = (output, context) => {
    return {
        ReplicationInstance: output.ReplicationInstance !== undefined && output.ReplicationInstance !== null
            ? deserializeAws_json1_1ReplicationInstance(output.ReplicationInstance, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateReplicationSubnetGroupResponse = (output, context) => {
    return {
        ReplicationSubnetGroup: output.ReplicationSubnetGroup !== undefined && output.ReplicationSubnetGroup !== null
            ? deserializeAws_json1_1ReplicationSubnetGroup(output.ReplicationSubnetGroup, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateReplicationTaskResponse = (output, context) => {
    return {
        ReplicationTask: output.ReplicationTask !== undefined && output.ReplicationTask !== null
            ? deserializeAws_json1_1ReplicationTask(output.ReplicationTask, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteCertificateResponse = (output, context) => {
    return {
        Certificate: output.Certificate !== undefined && output.Certificate !== null
            ? deserializeAws_json1_1Certificate(output.Certificate, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteConnectionResponse = (output, context) => {
    return {
        Connection: output.Connection !== undefined && output.Connection !== null
            ? deserializeAws_json1_1Connection(output.Connection, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteEndpointResponse = (output, context) => {
    return {
        Endpoint: output.Endpoint !== undefined && output.Endpoint !== null
            ? deserializeAws_json1_1Endpoint(output.Endpoint, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteEventSubscriptionResponse = (output, context) => {
    return {
        EventSubscription: output.EventSubscription !== undefined && output.EventSubscription !== null
            ? deserializeAws_json1_1EventSubscription(output.EventSubscription, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteReplicationInstanceResponse = (output, context) => {
    return {
        ReplicationInstance: output.ReplicationInstance !== undefined && output.ReplicationInstance !== null
            ? deserializeAws_json1_1ReplicationInstance(output.ReplicationInstance, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteReplicationSubnetGroupResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteReplicationTaskAssessmentRunResponse = (output, context) => {
    return {
        ReplicationTaskAssessmentRun: output.ReplicationTaskAssessmentRun !== undefined && output.ReplicationTaskAssessmentRun !== null
            ? deserializeAws_json1_1ReplicationTaskAssessmentRun(output.ReplicationTaskAssessmentRun, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteReplicationTaskResponse = (output, context) => {
    return {
        ReplicationTask: output.ReplicationTask !== undefined && output.ReplicationTask !== null
            ? deserializeAws_json1_1ReplicationTask(output.ReplicationTask, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeAccountAttributesResponse = (output, context) => {
    return {
        AccountQuotas: output.AccountQuotas !== undefined && output.AccountQuotas !== null
            ? deserializeAws_json1_1AccountQuotaList(output.AccountQuotas, context)
            : undefined,
        UniqueAccountIdentifier: output.UniqueAccountIdentifier !== undefined && output.UniqueAccountIdentifier !== null
            ? output.UniqueAccountIdentifier
            : undefined,
    };
};
const deserializeAws_json1_1DescribeApplicableIndividualAssessmentsResponse = (output, context) => {
    return {
        IndividualAssessmentNames: output.IndividualAssessmentNames !== undefined && output.IndividualAssessmentNames !== null
            ? deserializeAws_json1_1IndividualAssessmentNameList(output.IndividualAssessmentNames, context)
            : undefined,
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
    };
};
const deserializeAws_json1_1DescribeCertificatesResponse = (output, context) => {
    return {
        Certificates: output.Certificates !== undefined && output.Certificates !== null
            ? deserializeAws_json1_1CertificateList(output.Certificates, context)
            : undefined,
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
    };
};
const deserializeAws_json1_1DescribeConnectionsResponse = (output, context) => {
    return {
        Connections: output.Connections !== undefined && output.Connections !== null
            ? deserializeAws_json1_1ConnectionList(output.Connections, context)
            : undefined,
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
    };
};
const deserializeAws_json1_1DescribeEndpointSettingsResponse = (output, context) => {
    return {
        EndpointSettings: output.EndpointSettings !== undefined && output.EndpointSettings !== null
            ? deserializeAws_json1_1EndpointSettingsList(output.EndpointSettings, context)
            : undefined,
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
    };
};
const deserializeAws_json1_1DescribeEndpointsResponse = (output, context) => {
    return {
        Endpoints: output.Endpoints !== undefined && output.Endpoints !== null
            ? deserializeAws_json1_1EndpointList(output.Endpoints, context)
            : undefined,
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
    };
};
const deserializeAws_json1_1DescribeEndpointTypesResponse = (output, context) => {
    return {
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        SupportedEndpointTypes: output.SupportedEndpointTypes !== undefined && output.SupportedEndpointTypes !== null
            ? deserializeAws_json1_1SupportedEndpointTypeList(output.SupportedEndpointTypes, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeEventCategoriesResponse = (output, context) => {
    return {
        EventCategoryGroupList: output.EventCategoryGroupList !== undefined && output.EventCategoryGroupList !== null
            ? deserializeAws_json1_1EventCategoryGroupList(output.EventCategoryGroupList, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeEventsResponse = (output, context) => {
    return {
        Events: output.Events !== undefined && output.Events !== null
            ? deserializeAws_json1_1EventList(output.Events, context)
            : undefined,
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
    };
};
const deserializeAws_json1_1DescribeEventSubscriptionsResponse = (output, context) => {
    return {
        EventSubscriptionsList: output.EventSubscriptionsList !== undefined && output.EventSubscriptionsList !== null
            ? deserializeAws_json1_1EventSubscriptionsList(output.EventSubscriptionsList, context)
            : undefined,
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
    };
};
const deserializeAws_json1_1DescribeOrderableReplicationInstancesResponse = (output, context) => {
    return {
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        OrderableReplicationInstances: output.OrderableReplicationInstances !== undefined && output.OrderableReplicationInstances !== null
            ? deserializeAws_json1_1OrderableReplicationInstanceList(output.OrderableReplicationInstances, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribePendingMaintenanceActionsResponse = (output, context) => {
    return {
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        PendingMaintenanceActions: output.PendingMaintenanceActions !== undefined && output.PendingMaintenanceActions !== null
            ? deserializeAws_json1_1PendingMaintenanceActions(output.PendingMaintenanceActions, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeRefreshSchemasStatusResponse = (output, context) => {
    return {
        RefreshSchemasStatus: output.RefreshSchemasStatus !== undefined && output.RefreshSchemasStatus !== null
            ? deserializeAws_json1_1RefreshSchemasStatus(output.RefreshSchemasStatus, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeReplicationInstancesResponse = (output, context) => {
    return {
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        ReplicationInstances: output.ReplicationInstances !== undefined && output.ReplicationInstances !== null
            ? deserializeAws_json1_1ReplicationInstanceList(output.ReplicationInstances, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeReplicationInstanceTaskLogsResponse = (output, context) => {
    return {
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        ReplicationInstanceArn: output.ReplicationInstanceArn !== undefined && output.ReplicationInstanceArn !== null
            ? output.ReplicationInstanceArn
            : undefined,
        ReplicationInstanceTaskLogs: output.ReplicationInstanceTaskLogs !== undefined && output.ReplicationInstanceTaskLogs !== null
            ? deserializeAws_json1_1ReplicationInstanceTaskLogsList(output.ReplicationInstanceTaskLogs, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeReplicationSubnetGroupsResponse = (output, context) => {
    return {
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        ReplicationSubnetGroups: output.ReplicationSubnetGroups !== undefined && output.ReplicationSubnetGroups !== null
            ? deserializeAws_json1_1ReplicationSubnetGroups(output.ReplicationSubnetGroups, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeReplicationTaskAssessmentResultsResponse = (output, context) => {
    return {
        BucketName: output.BucketName !== undefined && output.BucketName !== null ? output.BucketName : undefined,
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        ReplicationTaskAssessmentResults: output.ReplicationTaskAssessmentResults !== undefined && output.ReplicationTaskAssessmentResults !== null
            ? deserializeAws_json1_1ReplicationTaskAssessmentResultList(output.ReplicationTaskAssessmentResults, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeReplicationTaskAssessmentRunsResponse = (output, context) => {
    return {
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        ReplicationTaskAssessmentRuns: output.ReplicationTaskAssessmentRuns !== undefined && output.ReplicationTaskAssessmentRuns !== null
            ? deserializeAws_json1_1ReplicationTaskAssessmentRunList(output.ReplicationTaskAssessmentRuns, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsResponse = (output, context) => {
    return {
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        ReplicationTaskIndividualAssessments: output.ReplicationTaskIndividualAssessments !== undefined && output.ReplicationTaskIndividualAssessments !== null
            ? deserializeAws_json1_1ReplicationTaskIndividualAssessmentList(output.ReplicationTaskIndividualAssessments, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeReplicationTasksResponse = (output, context) => {
    return {
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        ReplicationTasks: output.ReplicationTasks !== undefined && output.ReplicationTasks !== null
            ? deserializeAws_json1_1ReplicationTaskList(output.ReplicationTasks, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeSchemasResponse = (output, context) => {
    return {
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        Schemas: output.Schemas !== undefined && output.Schemas !== null
            ? deserializeAws_json1_1SchemaList(output.Schemas, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeTableStatisticsResponse = (output, context) => {
    return {
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        ReplicationTaskArn: output.ReplicationTaskArn !== undefined && output.ReplicationTaskArn !== null
            ? output.ReplicationTaskArn
            : undefined,
        TableStatistics: output.TableStatistics !== undefined && output.TableStatistics !== null
            ? deserializeAws_json1_1TableStatisticsList(output.TableStatistics, context)
            : undefined,
    };
};
const deserializeAws_json1_1DmsTransferSettings = (output, context) => {
    return {
        BucketName: output.BucketName !== undefined && output.BucketName !== null ? output.BucketName : undefined,
        ServiceAccessRoleArn: output.ServiceAccessRoleArn !== undefined && output.ServiceAccessRoleArn !== null
            ? output.ServiceAccessRoleArn
            : undefined,
    };
};
const deserializeAws_json1_1DocDbSettings = (output, context) => {
    return {
        DatabaseName: output.DatabaseName !== undefined && output.DatabaseName !== null ? output.DatabaseName : undefined,
        DocsToInvestigate: output.DocsToInvestigate !== undefined && output.DocsToInvestigate !== null
            ? output.DocsToInvestigate
            : undefined,
        ExtractDocId: output.ExtractDocId !== undefined && output.ExtractDocId !== null ? output.ExtractDocId : undefined,
        KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
        NestingLevel: output.NestingLevel !== undefined && output.NestingLevel !== null ? output.NestingLevel : undefined,
        Password: output.Password !== undefined && output.Password !== null ? output.Password : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
        SecretsManagerAccessRoleArn: output.SecretsManagerAccessRoleArn !== undefined && output.SecretsManagerAccessRoleArn !== null
            ? output.SecretsManagerAccessRoleArn
            : undefined,
        SecretsManagerSecretId: output.SecretsManagerSecretId !== undefined && output.SecretsManagerSecretId !== null
            ? output.SecretsManagerSecretId
            : undefined,
        ServerName: output.ServerName !== undefined && output.ServerName !== null ? output.ServerName : undefined,
        Username: output.Username !== undefined && output.Username !== null ? output.Username : undefined,
    };
};
const deserializeAws_json1_1DynamoDbSettings = (output, context) => {
    return {
        ServiceAccessRoleArn: output.ServiceAccessRoleArn !== undefined && output.ServiceAccessRoleArn !== null
            ? output.ServiceAccessRoleArn
            : undefined,
    };
};
const deserializeAws_json1_1ElasticsearchSettings = (output, context) => {
    return {
        EndpointUri: output.EndpointUri !== undefined && output.EndpointUri !== null ? output.EndpointUri : undefined,
        ErrorRetryDuration: output.ErrorRetryDuration !== undefined && output.ErrorRetryDuration !== null
            ? output.ErrorRetryDuration
            : undefined,
        FullLoadErrorPercentage: output.FullLoadErrorPercentage !== undefined && output.FullLoadErrorPercentage !== null
            ? output.FullLoadErrorPercentage
            : undefined,
        ServiceAccessRoleArn: output.ServiceAccessRoleArn !== undefined && output.ServiceAccessRoleArn !== null
            ? output.ServiceAccessRoleArn
            : undefined,
    };
};
const deserializeAws_json1_1Endpoint = (output, context) => {
    return {
        CertificateArn: output.CertificateArn !== undefined && output.CertificateArn !== null ? output.CertificateArn : undefined,
        DatabaseName: output.DatabaseName !== undefined && output.DatabaseName !== null ? output.DatabaseName : undefined,
        DmsTransferSettings: output.DmsTransferSettings !== undefined && output.DmsTransferSettings !== null
            ? deserializeAws_json1_1DmsTransferSettings(output.DmsTransferSettings, context)
            : undefined,
        DocDbSettings: output.DocDbSettings !== undefined && output.DocDbSettings !== null
            ? deserializeAws_json1_1DocDbSettings(output.DocDbSettings, context)
            : undefined,
        DynamoDbSettings: output.DynamoDbSettings !== undefined && output.DynamoDbSettings !== null
            ? deserializeAws_json1_1DynamoDbSettings(output.DynamoDbSettings, context)
            : undefined,
        ElasticsearchSettings: output.ElasticsearchSettings !== undefined && output.ElasticsearchSettings !== null
            ? deserializeAws_json1_1ElasticsearchSettings(output.ElasticsearchSettings, context)
            : undefined,
        EndpointArn: output.EndpointArn !== undefined && output.EndpointArn !== null ? output.EndpointArn : undefined,
        EndpointIdentifier: output.EndpointIdentifier !== undefined && output.EndpointIdentifier !== null
            ? output.EndpointIdentifier
            : undefined,
        EndpointType: output.EndpointType !== undefined && output.EndpointType !== null ? output.EndpointType : undefined,
        EngineDisplayName: output.EngineDisplayName !== undefined && output.EngineDisplayName !== null
            ? output.EngineDisplayName
            : undefined,
        EngineName: output.EngineName !== undefined && output.EngineName !== null ? output.EngineName : undefined,
        ExternalId: output.ExternalId !== undefined && output.ExternalId !== null ? output.ExternalId : undefined,
        ExternalTableDefinition: output.ExternalTableDefinition !== undefined && output.ExternalTableDefinition !== null
            ? output.ExternalTableDefinition
            : undefined,
        ExtraConnectionAttributes: output.ExtraConnectionAttributes !== undefined && output.ExtraConnectionAttributes !== null
            ? output.ExtraConnectionAttributes
            : undefined,
        IBMDb2Settings: output.IBMDb2Settings !== undefined && output.IBMDb2Settings !== null
            ? deserializeAws_json1_1IBMDb2Settings(output.IBMDb2Settings, context)
            : undefined,
        KafkaSettings: output.KafkaSettings !== undefined && output.KafkaSettings !== null
            ? deserializeAws_json1_1KafkaSettings(output.KafkaSettings, context)
            : undefined,
        KinesisSettings: output.KinesisSettings !== undefined && output.KinesisSettings !== null
            ? deserializeAws_json1_1KinesisSettings(output.KinesisSettings, context)
            : undefined,
        KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
        MicrosoftSQLServerSettings: output.MicrosoftSQLServerSettings !== undefined && output.MicrosoftSQLServerSettings !== null
            ? deserializeAws_json1_1MicrosoftSQLServerSettings(output.MicrosoftSQLServerSettings, context)
            : undefined,
        MongoDbSettings: output.MongoDbSettings !== undefined && output.MongoDbSettings !== null
            ? deserializeAws_json1_1MongoDbSettings(output.MongoDbSettings, context)
            : undefined,
        MySQLSettings: output.MySQLSettings !== undefined && output.MySQLSettings !== null
            ? deserializeAws_json1_1MySQLSettings(output.MySQLSettings, context)
            : undefined,
        NeptuneSettings: output.NeptuneSettings !== undefined && output.NeptuneSettings !== null
            ? deserializeAws_json1_1NeptuneSettings(output.NeptuneSettings, context)
            : undefined,
        OracleSettings: output.OracleSettings !== undefined && output.OracleSettings !== null
            ? deserializeAws_json1_1OracleSettings(output.OracleSettings, context)
            : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
        PostgreSQLSettings: output.PostgreSQLSettings !== undefined && output.PostgreSQLSettings !== null
            ? deserializeAws_json1_1PostgreSQLSettings(output.PostgreSQLSettings, context)
            : undefined,
        RedshiftSettings: output.RedshiftSettings !== undefined && output.RedshiftSettings !== null
            ? deserializeAws_json1_1RedshiftSettings(output.RedshiftSettings, context)
            : undefined,
        S3Settings: output.S3Settings !== undefined && output.S3Settings !== null
            ? deserializeAws_json1_1S3Settings(output.S3Settings, context)
            : undefined,
        ServerName: output.ServerName !== undefined && output.ServerName !== null ? output.ServerName : undefined,
        ServiceAccessRoleArn: output.ServiceAccessRoleArn !== undefined && output.ServiceAccessRoleArn !== null
            ? output.ServiceAccessRoleArn
            : undefined,
        SslMode: output.SslMode !== undefined && output.SslMode !== null ? output.SslMode : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        SybaseSettings: output.SybaseSettings !== undefined && output.SybaseSettings !== null
            ? deserializeAws_json1_1SybaseSettings(output.SybaseSettings, context)
            : undefined,
        Username: output.Username !== undefined && output.Username !== null ? output.Username : undefined,
    };
};
const deserializeAws_json1_1EndpointList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Endpoint(entry, context);
    });
};
const deserializeAws_json1_1EndpointSetting = (output, context) => {
    return {
        Applicability: output.Applicability !== undefined && output.Applicability !== null ? output.Applicability : undefined,
        EnumValues: output.EnumValues !== undefined && output.EnumValues !== null
            ? deserializeAws_json1_1EndpointSettingEnumValues(output.EnumValues, context)
            : undefined,
        IntValueMax: output.IntValueMax !== undefined && output.IntValueMax !== null ? output.IntValueMax : undefined,
        IntValueMin: output.IntValueMin !== undefined && output.IntValueMin !== null ? output.IntValueMin : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Sensitive: output.Sensitive !== undefined && output.Sensitive !== null ? output.Sensitive : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        Units: output.Units !== undefined && output.Units !== null ? output.Units : undefined,
    };
};
const deserializeAws_json1_1EndpointSettingEnumValues = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1EndpointSettingsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EndpointSetting(entry, context);
    });
};
const deserializeAws_json1_1Event = (output, context) => {
    return {
        Date: output.Date !== undefined && output.Date !== null ? new Date(Math.round(output.Date * 1000)) : undefined,
        EventCategories: output.EventCategories !== undefined && output.EventCategories !== null
            ? deserializeAws_json1_1EventCategoriesList(output.EventCategories, context)
            : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        SourceIdentifier: output.SourceIdentifier !== undefined && output.SourceIdentifier !== null ? output.SourceIdentifier : undefined,
        SourceType: output.SourceType !== undefined && output.SourceType !== null ? output.SourceType : undefined,
    };
};
const deserializeAws_json1_1EventCategoriesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1EventCategoryGroup = (output, context) => {
    return {
        EventCategories: output.EventCategories !== undefined && output.EventCategories !== null
            ? deserializeAws_json1_1EventCategoriesList(output.EventCategories, context)
            : undefined,
        SourceType: output.SourceType !== undefined && output.SourceType !== null ? output.SourceType : undefined,
    };
};
const deserializeAws_json1_1EventCategoryGroupList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EventCategoryGroup(entry, context);
    });
};
const deserializeAws_json1_1EventList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Event(entry, context);
    });
};
const deserializeAws_json1_1EventSubscription = (output, context) => {
    return {
        CustSubscriptionId: output.CustSubscriptionId !== undefined && output.CustSubscriptionId !== null
            ? output.CustSubscriptionId
            : undefined,
        CustomerAwsId: output.CustomerAwsId !== undefined && output.CustomerAwsId !== null ? output.CustomerAwsId : undefined,
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
        EventCategoriesList: output.EventCategoriesList !== undefined && output.EventCategoriesList !== null
            ? deserializeAws_json1_1EventCategoriesList(output.EventCategoriesList, context)
            : undefined,
        SnsTopicArn: output.SnsTopicArn !== undefined && output.SnsTopicArn !== null ? output.SnsTopicArn : undefined,
        SourceIdsList: output.SourceIdsList !== undefined && output.SourceIdsList !== null
            ? deserializeAws_json1_1SourceIdsList(output.SourceIdsList, context)
            : undefined,
        SourceType: output.SourceType !== undefined && output.SourceType !== null ? output.SourceType : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        SubscriptionCreationTime: output.SubscriptionCreationTime !== undefined && output.SubscriptionCreationTime !== null
            ? output.SubscriptionCreationTime
            : undefined,
    };
};
const deserializeAws_json1_1EventSubscriptionsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EventSubscription(entry, context);
    });
};
const deserializeAws_json1_1IBMDb2Settings = (output, context) => {
    return {
        CurrentLsn: output.CurrentLsn !== undefined && output.CurrentLsn !== null ? output.CurrentLsn : undefined,
        DatabaseName: output.DatabaseName !== undefined && output.DatabaseName !== null ? output.DatabaseName : undefined,
        MaxKBytesPerRead: output.MaxKBytesPerRead !== undefined && output.MaxKBytesPerRead !== null ? output.MaxKBytesPerRead : undefined,
        Password: output.Password !== undefined && output.Password !== null ? output.Password : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
        SecretsManagerAccessRoleArn: output.SecretsManagerAccessRoleArn !== undefined && output.SecretsManagerAccessRoleArn !== null
            ? output.SecretsManagerAccessRoleArn
            : undefined,
        SecretsManagerSecretId: output.SecretsManagerSecretId !== undefined && output.SecretsManagerSecretId !== null
            ? output.SecretsManagerSecretId
            : undefined,
        ServerName: output.ServerName !== undefined && output.ServerName !== null ? output.ServerName : undefined,
        SetDataCaptureChanges: output.SetDataCaptureChanges !== undefined && output.SetDataCaptureChanges !== null
            ? output.SetDataCaptureChanges
            : undefined,
        Username: output.Username !== undefined && output.Username !== null ? output.Username : undefined,
    };
};
const deserializeAws_json1_1ImportCertificateResponse = (output, context) => {
    return {
        Certificate: output.Certificate !== undefined && output.Certificate !== null
            ? deserializeAws_json1_1Certificate(output.Certificate, context)
            : undefined,
    };
};
const deserializeAws_json1_1IndividualAssessmentNameList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1InsufficientResourceCapacityFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidCertificateFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidResourceStateFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidSubnet = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1KafkaSettings = (output, context) => {
    return {
        Broker: output.Broker !== undefined && output.Broker !== null ? output.Broker : undefined,
        IncludeControlDetails: output.IncludeControlDetails !== undefined && output.IncludeControlDetails !== null
            ? output.IncludeControlDetails
            : undefined,
        IncludeNullAndEmpty: output.IncludeNullAndEmpty !== undefined && output.IncludeNullAndEmpty !== null
            ? output.IncludeNullAndEmpty
            : undefined,
        IncludePartitionValue: output.IncludePartitionValue !== undefined && output.IncludePartitionValue !== null
            ? output.IncludePartitionValue
            : undefined,
        IncludeTableAlterOperations: output.IncludeTableAlterOperations !== undefined && output.IncludeTableAlterOperations !== null
            ? output.IncludeTableAlterOperations
            : undefined,
        IncludeTransactionDetails: output.IncludeTransactionDetails !== undefined && output.IncludeTransactionDetails !== null
            ? output.IncludeTransactionDetails
            : undefined,
        MessageFormat: output.MessageFormat !== undefined && output.MessageFormat !== null ? output.MessageFormat : undefined,
        MessageMaxBytes: output.MessageMaxBytes !== undefined && output.MessageMaxBytes !== null ? output.MessageMaxBytes : undefined,
        PartitionIncludeSchemaTable: output.PartitionIncludeSchemaTable !== undefined && output.PartitionIncludeSchemaTable !== null
            ? output.PartitionIncludeSchemaTable
            : undefined,
        SaslPassword: output.SaslPassword !== undefined && output.SaslPassword !== null ? output.SaslPassword : undefined,
        SaslUsername: output.SaslUsername !== undefined && output.SaslUsername !== null ? output.SaslUsername : undefined,
        SecurityProtocol: output.SecurityProtocol !== undefined && output.SecurityProtocol !== null ? output.SecurityProtocol : undefined,
        SslCaCertificateArn: output.SslCaCertificateArn !== undefined && output.SslCaCertificateArn !== null
            ? output.SslCaCertificateArn
            : undefined,
        SslClientCertificateArn: output.SslClientCertificateArn !== undefined && output.SslClientCertificateArn !== null
            ? output.SslClientCertificateArn
            : undefined,
        SslClientKeyArn: output.SslClientKeyArn !== undefined && output.SslClientKeyArn !== null ? output.SslClientKeyArn : undefined,
        SslClientKeyPassword: output.SslClientKeyPassword !== undefined && output.SslClientKeyPassword !== null
            ? output.SslClientKeyPassword
            : undefined,
        Topic: output.Topic !== undefined && output.Topic !== null ? output.Topic : undefined,
    };
};
const deserializeAws_json1_1KinesisSettings = (output, context) => {
    return {
        IncludeControlDetails: output.IncludeControlDetails !== undefined && output.IncludeControlDetails !== null
            ? output.IncludeControlDetails
            : undefined,
        IncludeNullAndEmpty: output.IncludeNullAndEmpty !== undefined && output.IncludeNullAndEmpty !== null
            ? output.IncludeNullAndEmpty
            : undefined,
        IncludePartitionValue: output.IncludePartitionValue !== undefined && output.IncludePartitionValue !== null
            ? output.IncludePartitionValue
            : undefined,
        IncludeTableAlterOperations: output.IncludeTableAlterOperations !== undefined && output.IncludeTableAlterOperations !== null
            ? output.IncludeTableAlterOperations
            : undefined,
        IncludeTransactionDetails: output.IncludeTransactionDetails !== undefined && output.IncludeTransactionDetails !== null
            ? output.IncludeTransactionDetails
            : undefined,
        MessageFormat: output.MessageFormat !== undefined && output.MessageFormat !== null ? output.MessageFormat : undefined,
        PartitionIncludeSchemaTable: output.PartitionIncludeSchemaTable !== undefined && output.PartitionIncludeSchemaTable !== null
            ? output.PartitionIncludeSchemaTable
            : undefined,
        ServiceAccessRoleArn: output.ServiceAccessRoleArn !== undefined && output.ServiceAccessRoleArn !== null
            ? output.ServiceAccessRoleArn
            : undefined,
        StreamArn: output.StreamArn !== undefined && output.StreamArn !== null ? output.StreamArn : undefined,
    };
};
const deserializeAws_json1_1KMSAccessDeniedFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1KMSDisabledFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1KMSFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1KMSInvalidStateFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1KMSKeyNotAccessibleFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1KMSNotFoundFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1KMSThrottlingFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    return {
        TagList: output.TagList !== undefined && output.TagList !== null
            ? deserializeAws_json1_1TagList(output.TagList, context)
            : undefined,
    };
};
const deserializeAws_json1_1MicrosoftSQLServerSettings = (output, context) => {
    return {
        BcpPacketSize: output.BcpPacketSize !== undefined && output.BcpPacketSize !== null ? output.BcpPacketSize : undefined,
        ControlTablesFileGroup: output.ControlTablesFileGroup !== undefined && output.ControlTablesFileGroup !== null
            ? output.ControlTablesFileGroup
            : undefined,
        DatabaseName: output.DatabaseName !== undefined && output.DatabaseName !== null ? output.DatabaseName : undefined,
        Password: output.Password !== undefined && output.Password !== null ? output.Password : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
        QuerySingleAlwaysOnNode: output.QuerySingleAlwaysOnNode !== undefined && output.QuerySingleAlwaysOnNode !== null
            ? output.QuerySingleAlwaysOnNode
            : undefined,
        ReadBackupOnly: output.ReadBackupOnly !== undefined && output.ReadBackupOnly !== null ? output.ReadBackupOnly : undefined,
        SafeguardPolicy: output.SafeguardPolicy !== undefined && output.SafeguardPolicy !== null ? output.SafeguardPolicy : undefined,
        SecretsManagerAccessRoleArn: output.SecretsManagerAccessRoleArn !== undefined && output.SecretsManagerAccessRoleArn !== null
            ? output.SecretsManagerAccessRoleArn
            : undefined,
        SecretsManagerSecretId: output.SecretsManagerSecretId !== undefined && output.SecretsManagerSecretId !== null
            ? output.SecretsManagerSecretId
            : undefined,
        ServerName: output.ServerName !== undefined && output.ServerName !== null ? output.ServerName : undefined,
        UseBcpFullLoad: output.UseBcpFullLoad !== undefined && output.UseBcpFullLoad !== null ? output.UseBcpFullLoad : undefined,
        UseThirdPartyBackupDevice: output.UseThirdPartyBackupDevice !== undefined && output.UseThirdPartyBackupDevice !== null
            ? output.UseThirdPartyBackupDevice
            : undefined,
        Username: output.Username !== undefined && output.Username !== null ? output.Username : undefined,
    };
};
const deserializeAws_json1_1ModifyEndpointResponse = (output, context) => {
    return {
        Endpoint: output.Endpoint !== undefined && output.Endpoint !== null
            ? deserializeAws_json1_1Endpoint(output.Endpoint, context)
            : undefined,
    };
};
const deserializeAws_json1_1ModifyEventSubscriptionResponse = (output, context) => {
    return {
        EventSubscription: output.EventSubscription !== undefined && output.EventSubscription !== null
            ? deserializeAws_json1_1EventSubscription(output.EventSubscription, context)
            : undefined,
    };
};
const deserializeAws_json1_1ModifyReplicationInstanceResponse = (output, context) => {
    return {
        ReplicationInstance: output.ReplicationInstance !== undefined && output.ReplicationInstance !== null
            ? deserializeAws_json1_1ReplicationInstance(output.ReplicationInstance, context)
            : undefined,
    };
};
const deserializeAws_json1_1ModifyReplicationSubnetGroupResponse = (output, context) => {
    return {
        ReplicationSubnetGroup: output.ReplicationSubnetGroup !== undefined && output.ReplicationSubnetGroup !== null
            ? deserializeAws_json1_1ReplicationSubnetGroup(output.ReplicationSubnetGroup, context)
            : undefined,
    };
};
const deserializeAws_json1_1ModifyReplicationTaskResponse = (output, context) => {
    return {
        ReplicationTask: output.ReplicationTask !== undefined && output.ReplicationTask !== null
            ? deserializeAws_json1_1ReplicationTask(output.ReplicationTask, context)
            : undefined,
    };
};
const deserializeAws_json1_1MongoDbSettings = (output, context) => {
    return {
        AuthMechanism: output.AuthMechanism !== undefined && output.AuthMechanism !== null ? output.AuthMechanism : undefined,
        AuthSource: output.AuthSource !== undefined && output.AuthSource !== null ? output.AuthSource : undefined,
        AuthType: output.AuthType !== undefined && output.AuthType !== null ? output.AuthType : undefined,
        DatabaseName: output.DatabaseName !== undefined && output.DatabaseName !== null ? output.DatabaseName : undefined,
        DocsToInvestigate: output.DocsToInvestigate !== undefined && output.DocsToInvestigate !== null
            ? output.DocsToInvestigate
            : undefined,
        ExtractDocId: output.ExtractDocId !== undefined && output.ExtractDocId !== null ? output.ExtractDocId : undefined,
        KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
        NestingLevel: output.NestingLevel !== undefined && output.NestingLevel !== null ? output.NestingLevel : undefined,
        Password: output.Password !== undefined && output.Password !== null ? output.Password : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
        SecretsManagerAccessRoleArn: output.SecretsManagerAccessRoleArn !== undefined && output.SecretsManagerAccessRoleArn !== null
            ? output.SecretsManagerAccessRoleArn
            : undefined,
        SecretsManagerSecretId: output.SecretsManagerSecretId !== undefined && output.SecretsManagerSecretId !== null
            ? output.SecretsManagerSecretId
            : undefined,
        ServerName: output.ServerName !== undefined && output.ServerName !== null ? output.ServerName : undefined,
        Username: output.Username !== undefined && output.Username !== null ? output.Username : undefined,
    };
};
const deserializeAws_json1_1MoveReplicationTaskResponse = (output, context) => {
    return {
        ReplicationTask: output.ReplicationTask !== undefined && output.ReplicationTask !== null
            ? deserializeAws_json1_1ReplicationTask(output.ReplicationTask, context)
            : undefined,
    };
};
const deserializeAws_json1_1MySQLSettings = (output, context) => {
    return {
        AfterConnectScript: output.AfterConnectScript !== undefined && output.AfterConnectScript !== null
            ? output.AfterConnectScript
            : undefined,
        CleanSourceMetadataOnMismatch: output.CleanSourceMetadataOnMismatch !== undefined && output.CleanSourceMetadataOnMismatch !== null
            ? output.CleanSourceMetadataOnMismatch
            : undefined,
        DatabaseName: output.DatabaseName !== undefined && output.DatabaseName !== null ? output.DatabaseName : undefined,
        EventsPollInterval: output.EventsPollInterval !== undefined && output.EventsPollInterval !== null
            ? output.EventsPollInterval
            : undefined,
        MaxFileSize: output.MaxFileSize !== undefined && output.MaxFileSize !== null ? output.MaxFileSize : undefined,
        ParallelLoadThreads: output.ParallelLoadThreads !== undefined && output.ParallelLoadThreads !== null
            ? output.ParallelLoadThreads
            : undefined,
        Password: output.Password !== undefined && output.Password !== null ? output.Password : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
        SecretsManagerAccessRoleArn: output.SecretsManagerAccessRoleArn !== undefined && output.SecretsManagerAccessRoleArn !== null
            ? output.SecretsManagerAccessRoleArn
            : undefined,
        SecretsManagerSecretId: output.SecretsManagerSecretId !== undefined && output.SecretsManagerSecretId !== null
            ? output.SecretsManagerSecretId
            : undefined,
        ServerName: output.ServerName !== undefined && output.ServerName !== null ? output.ServerName : undefined,
        ServerTimezone: output.ServerTimezone !== undefined && output.ServerTimezone !== null ? output.ServerTimezone : undefined,
        TargetDbType: output.TargetDbType !== undefined && output.TargetDbType !== null ? output.TargetDbType : undefined,
        Username: output.Username !== undefined && output.Username !== null ? output.Username : undefined,
    };
};
const deserializeAws_json1_1NeptuneSettings = (output, context) => {
    return {
        ErrorRetryDuration: output.ErrorRetryDuration !== undefined && output.ErrorRetryDuration !== null
            ? output.ErrorRetryDuration
            : undefined,
        IamAuthEnabled: output.IamAuthEnabled !== undefined && output.IamAuthEnabled !== null ? output.IamAuthEnabled : undefined,
        MaxFileSize: output.MaxFileSize !== undefined && output.MaxFileSize !== null ? output.MaxFileSize : undefined,
        MaxRetryCount: output.MaxRetryCount !== undefined && output.MaxRetryCount !== null ? output.MaxRetryCount : undefined,
        S3BucketFolder: output.S3BucketFolder !== undefined && output.S3BucketFolder !== null ? output.S3BucketFolder : undefined,
        S3BucketName: output.S3BucketName !== undefined && output.S3BucketName !== null ? output.S3BucketName : undefined,
        ServiceAccessRoleArn: output.ServiceAccessRoleArn !== undefined && output.ServiceAccessRoleArn !== null
            ? output.ServiceAccessRoleArn
            : undefined,
    };
};
const deserializeAws_json1_1OracleSettings = (output, context) => {
    return {
        AccessAlternateDirectly: output.AccessAlternateDirectly !== undefined && output.AccessAlternateDirectly !== null
            ? output.AccessAlternateDirectly
            : undefined,
        AddSupplementalLogging: output.AddSupplementalLogging !== undefined && output.AddSupplementalLogging !== null
            ? output.AddSupplementalLogging
            : undefined,
        AdditionalArchivedLogDestId: output.AdditionalArchivedLogDestId !== undefined && output.AdditionalArchivedLogDestId !== null
            ? output.AdditionalArchivedLogDestId
            : undefined,
        AllowSelectNestedTables: output.AllowSelectNestedTables !== undefined && output.AllowSelectNestedTables !== null
            ? output.AllowSelectNestedTables
            : undefined,
        ArchivedLogDestId: output.ArchivedLogDestId !== undefined && output.ArchivedLogDestId !== null
            ? output.ArchivedLogDestId
            : undefined,
        ArchivedLogsOnly: output.ArchivedLogsOnly !== undefined && output.ArchivedLogsOnly !== null ? output.ArchivedLogsOnly : undefined,
        AsmPassword: output.AsmPassword !== undefined && output.AsmPassword !== null ? output.AsmPassword : undefined,
        AsmServer: output.AsmServer !== undefined && output.AsmServer !== null ? output.AsmServer : undefined,
        AsmUser: output.AsmUser !== undefined && output.AsmUser !== null ? output.AsmUser : undefined,
        CharLengthSemantics: output.CharLengthSemantics !== undefined && output.CharLengthSemantics !== null
            ? output.CharLengthSemantics
            : undefined,
        DatabaseName: output.DatabaseName !== undefined && output.DatabaseName !== null ? output.DatabaseName : undefined,
        DirectPathNoLog: output.DirectPathNoLog !== undefined && output.DirectPathNoLog !== null ? output.DirectPathNoLog : undefined,
        DirectPathParallelLoad: output.DirectPathParallelLoad !== undefined && output.DirectPathParallelLoad !== null
            ? output.DirectPathParallelLoad
            : undefined,
        EnableHomogenousTablespace: output.EnableHomogenousTablespace !== undefined && output.EnableHomogenousTablespace !== null
            ? output.EnableHomogenousTablespace
            : undefined,
        FailTasksOnLobTruncation: output.FailTasksOnLobTruncation !== undefined && output.FailTasksOnLobTruncation !== null
            ? output.FailTasksOnLobTruncation
            : undefined,
        NumberDatatypeScale: output.NumberDatatypeScale !== undefined && output.NumberDatatypeScale !== null
            ? output.NumberDatatypeScale
            : undefined,
        OraclePathPrefix: output.OraclePathPrefix !== undefined && output.OraclePathPrefix !== null ? output.OraclePathPrefix : undefined,
        ParallelAsmReadThreads: output.ParallelAsmReadThreads !== undefined && output.ParallelAsmReadThreads !== null
            ? output.ParallelAsmReadThreads
            : undefined,
        Password: output.Password !== undefined && output.Password !== null ? output.Password : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
        ReadAheadBlocks: output.ReadAheadBlocks !== undefined && output.ReadAheadBlocks !== null ? output.ReadAheadBlocks : undefined,
        ReadTableSpaceName: output.ReadTableSpaceName !== undefined && output.ReadTableSpaceName !== null
            ? output.ReadTableSpaceName
            : undefined,
        ReplacePathPrefix: output.ReplacePathPrefix !== undefined && output.ReplacePathPrefix !== null
            ? output.ReplacePathPrefix
            : undefined,
        RetryInterval: output.RetryInterval !== undefined && output.RetryInterval !== null ? output.RetryInterval : undefined,
        SecretsManagerAccessRoleArn: output.SecretsManagerAccessRoleArn !== undefined && output.SecretsManagerAccessRoleArn !== null
            ? output.SecretsManagerAccessRoleArn
            : undefined,
        SecretsManagerOracleAsmAccessRoleArn: output.SecretsManagerOracleAsmAccessRoleArn !== undefined && output.SecretsManagerOracleAsmAccessRoleArn !== null
            ? output.SecretsManagerOracleAsmAccessRoleArn
            : undefined,
        SecretsManagerOracleAsmSecretId: output.SecretsManagerOracleAsmSecretId !== undefined && output.SecretsManagerOracleAsmSecretId !== null
            ? output.SecretsManagerOracleAsmSecretId
            : undefined,
        SecretsManagerSecretId: output.SecretsManagerSecretId !== undefined && output.SecretsManagerSecretId !== null
            ? output.SecretsManagerSecretId
            : undefined,
        SecurityDbEncryption: output.SecurityDbEncryption !== undefined && output.SecurityDbEncryption !== null
            ? output.SecurityDbEncryption
            : undefined,
        SecurityDbEncryptionName: output.SecurityDbEncryptionName !== undefined && output.SecurityDbEncryptionName !== null
            ? output.SecurityDbEncryptionName
            : undefined,
        ServerName: output.ServerName !== undefined && output.ServerName !== null ? output.ServerName : undefined,
        SpatialDataOptionToGeoJsonFunctionName: output.SpatialDataOptionToGeoJsonFunctionName !== undefined &&
            output.SpatialDataOptionToGeoJsonFunctionName !== null
            ? output.SpatialDataOptionToGeoJsonFunctionName
            : undefined,
        UseAlternateFolderForOnline: output.UseAlternateFolderForOnline !== undefined && output.UseAlternateFolderForOnline !== null
            ? output.UseAlternateFolderForOnline
            : undefined,
        UsePathPrefix: output.UsePathPrefix !== undefined && output.UsePathPrefix !== null ? output.UsePathPrefix : undefined,
        Username: output.Username !== undefined && output.Username !== null ? output.Username : undefined,
    };
};
const deserializeAws_json1_1OrderableReplicationInstance = (output, context) => {
    return {
        AvailabilityZones: output.AvailabilityZones !== undefined && output.AvailabilityZones !== null
            ? deserializeAws_json1_1AvailabilityZonesList(output.AvailabilityZones, context)
            : undefined,
        DefaultAllocatedStorage: output.DefaultAllocatedStorage !== undefined && output.DefaultAllocatedStorage !== null
            ? output.DefaultAllocatedStorage
            : undefined,
        EngineVersion: output.EngineVersion !== undefined && output.EngineVersion !== null ? output.EngineVersion : undefined,
        IncludedAllocatedStorage: output.IncludedAllocatedStorage !== undefined && output.IncludedAllocatedStorage !== null
            ? output.IncludedAllocatedStorage
            : undefined,
        MaxAllocatedStorage: output.MaxAllocatedStorage !== undefined && output.MaxAllocatedStorage !== null
            ? output.MaxAllocatedStorage
            : undefined,
        MinAllocatedStorage: output.MinAllocatedStorage !== undefined && output.MinAllocatedStorage !== null
            ? output.MinAllocatedStorage
            : undefined,
        ReleaseStatus: output.ReleaseStatus !== undefined && output.ReleaseStatus !== null ? output.ReleaseStatus : undefined,
        ReplicationInstanceClass: output.ReplicationInstanceClass !== undefined && output.ReplicationInstanceClass !== null
            ? output.ReplicationInstanceClass
            : undefined,
        StorageType: output.StorageType !== undefined && output.StorageType !== null ? output.StorageType : undefined,
    };
};
const deserializeAws_json1_1OrderableReplicationInstanceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OrderableReplicationInstance(entry, context);
    });
};
const deserializeAws_json1_1PendingMaintenanceAction = (output, context) => {
    return {
        Action: output.Action !== undefined && output.Action !== null ? output.Action : undefined,
        AutoAppliedAfterDate: output.AutoAppliedAfterDate !== undefined && output.AutoAppliedAfterDate !== null
            ? new Date(Math.round(output.AutoAppliedAfterDate * 1000))
            : undefined,
        CurrentApplyDate: output.CurrentApplyDate !== undefined && output.CurrentApplyDate !== null
            ? new Date(Math.round(output.CurrentApplyDate * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        ForcedApplyDate: output.ForcedApplyDate !== undefined && output.ForcedApplyDate !== null
            ? new Date(Math.round(output.ForcedApplyDate * 1000))
            : undefined,
        OptInStatus: output.OptInStatus !== undefined && output.OptInStatus !== null ? output.OptInStatus : undefined,
    };
};
const deserializeAws_json1_1PendingMaintenanceActionDetails = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PendingMaintenanceAction(entry, context);
    });
};
const deserializeAws_json1_1PendingMaintenanceActions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResourcePendingMaintenanceActions(entry, context);
    });
};
const deserializeAws_json1_1PostgreSQLSettings = (output, context) => {
    return {
        AfterConnectScript: output.AfterConnectScript !== undefined && output.AfterConnectScript !== null
            ? output.AfterConnectScript
            : undefined,
        CaptureDdls: output.CaptureDdls !== undefined && output.CaptureDdls !== null ? output.CaptureDdls : undefined,
        DatabaseName: output.DatabaseName !== undefined && output.DatabaseName !== null ? output.DatabaseName : undefined,
        DdlArtifactsSchema: output.DdlArtifactsSchema !== undefined && output.DdlArtifactsSchema !== null
            ? output.DdlArtifactsSchema
            : undefined,
        ExecuteTimeout: output.ExecuteTimeout !== undefined && output.ExecuteTimeout !== null ? output.ExecuteTimeout : undefined,
        FailTasksOnLobTruncation: output.FailTasksOnLobTruncation !== undefined && output.FailTasksOnLobTruncation !== null
            ? output.FailTasksOnLobTruncation
            : undefined,
        MaxFileSize: output.MaxFileSize !== undefined && output.MaxFileSize !== null ? output.MaxFileSize : undefined,
        Password: output.Password !== undefined && output.Password !== null ? output.Password : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
        SecretsManagerAccessRoleArn: output.SecretsManagerAccessRoleArn !== undefined && output.SecretsManagerAccessRoleArn !== null
            ? output.SecretsManagerAccessRoleArn
            : undefined,
        SecretsManagerSecretId: output.SecretsManagerSecretId !== undefined && output.SecretsManagerSecretId !== null
            ? output.SecretsManagerSecretId
            : undefined,
        ServerName: output.ServerName !== undefined && output.ServerName !== null ? output.ServerName : undefined,
        SlotName: output.SlotName !== undefined && output.SlotName !== null ? output.SlotName : undefined,
        Username: output.Username !== undefined && output.Username !== null ? output.Username : undefined,
    };
};
const deserializeAws_json1_1RebootReplicationInstanceResponse = (output, context) => {
    return {
        ReplicationInstance: output.ReplicationInstance !== undefined && output.ReplicationInstance !== null
            ? deserializeAws_json1_1ReplicationInstance(output.ReplicationInstance, context)
            : undefined,
    };
};
const deserializeAws_json1_1RedshiftSettings = (output, context) => {
    return {
        AcceptAnyDate: output.AcceptAnyDate !== undefined && output.AcceptAnyDate !== null ? output.AcceptAnyDate : undefined,
        AfterConnectScript: output.AfterConnectScript !== undefined && output.AfterConnectScript !== null
            ? output.AfterConnectScript
            : undefined,
        BucketFolder: output.BucketFolder !== undefined && output.BucketFolder !== null ? output.BucketFolder : undefined,
        BucketName: output.BucketName !== undefined && output.BucketName !== null ? output.BucketName : undefined,
        CaseSensitiveNames: output.CaseSensitiveNames !== undefined && output.CaseSensitiveNames !== null
            ? output.CaseSensitiveNames
            : undefined,
        CompUpdate: output.CompUpdate !== undefined && output.CompUpdate !== null ? output.CompUpdate : undefined,
        ConnectionTimeout: output.ConnectionTimeout !== undefined && output.ConnectionTimeout !== null
            ? output.ConnectionTimeout
            : undefined,
        DatabaseName: output.DatabaseName !== undefined && output.DatabaseName !== null ? output.DatabaseName : undefined,
        DateFormat: output.DateFormat !== undefined && output.DateFormat !== null ? output.DateFormat : undefined,
        EmptyAsNull: output.EmptyAsNull !== undefined && output.EmptyAsNull !== null ? output.EmptyAsNull : undefined,
        EncryptionMode: output.EncryptionMode !== undefined && output.EncryptionMode !== null ? output.EncryptionMode : undefined,
        ExplicitIds: output.ExplicitIds !== undefined && output.ExplicitIds !== null ? output.ExplicitIds : undefined,
        FileTransferUploadStreams: output.FileTransferUploadStreams !== undefined && output.FileTransferUploadStreams !== null
            ? output.FileTransferUploadStreams
            : undefined,
        LoadTimeout: output.LoadTimeout !== undefined && output.LoadTimeout !== null ? output.LoadTimeout : undefined,
        MaxFileSize: output.MaxFileSize !== undefined && output.MaxFileSize !== null ? output.MaxFileSize : undefined,
        Password: output.Password !== undefined && output.Password !== null ? output.Password : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
        RemoveQuotes: output.RemoveQuotes !== undefined && output.RemoveQuotes !== null ? output.RemoveQuotes : undefined,
        ReplaceChars: output.ReplaceChars !== undefined && output.ReplaceChars !== null ? output.ReplaceChars : undefined,
        ReplaceInvalidChars: output.ReplaceInvalidChars !== undefined && output.ReplaceInvalidChars !== null
            ? output.ReplaceInvalidChars
            : undefined,
        SecretsManagerAccessRoleArn: output.SecretsManagerAccessRoleArn !== undefined && output.SecretsManagerAccessRoleArn !== null
            ? output.SecretsManagerAccessRoleArn
            : undefined,
        SecretsManagerSecretId: output.SecretsManagerSecretId !== undefined && output.SecretsManagerSecretId !== null
            ? output.SecretsManagerSecretId
            : undefined,
        ServerName: output.ServerName !== undefined && output.ServerName !== null ? output.ServerName : undefined,
        ServerSideEncryptionKmsKeyId: output.ServerSideEncryptionKmsKeyId !== undefined && output.ServerSideEncryptionKmsKeyId !== null
            ? output.ServerSideEncryptionKmsKeyId
            : undefined,
        ServiceAccessRoleArn: output.ServiceAccessRoleArn !== undefined && output.ServiceAccessRoleArn !== null
            ? output.ServiceAccessRoleArn
            : undefined,
        TimeFormat: output.TimeFormat !== undefined && output.TimeFormat !== null ? output.TimeFormat : undefined,
        TrimBlanks: output.TrimBlanks !== undefined && output.TrimBlanks !== null ? output.TrimBlanks : undefined,
        TruncateColumns: output.TruncateColumns !== undefined && output.TruncateColumns !== null ? output.TruncateColumns : undefined,
        Username: output.Username !== undefined && output.Username !== null ? output.Username : undefined,
        WriteBufferSize: output.WriteBufferSize !== undefined && output.WriteBufferSize !== null ? output.WriteBufferSize : undefined,
    };
};
const deserializeAws_json1_1RefreshSchemasResponse = (output, context) => {
    return {
        RefreshSchemasStatus: output.RefreshSchemasStatus !== undefined && output.RefreshSchemasStatus !== null
            ? deserializeAws_json1_1RefreshSchemasStatus(output.RefreshSchemasStatus, context)
            : undefined,
    };
};
const deserializeAws_json1_1RefreshSchemasStatus = (output, context) => {
    return {
        EndpointArn: output.EndpointArn !== undefined && output.EndpointArn !== null ? output.EndpointArn : undefined,
        LastFailureMessage: output.LastFailureMessage !== undefined && output.LastFailureMessage !== null
            ? output.LastFailureMessage
            : undefined,
        LastRefreshDate: output.LastRefreshDate !== undefined && output.LastRefreshDate !== null
            ? new Date(Math.round(output.LastRefreshDate * 1000))
            : undefined,
        ReplicationInstanceArn: output.ReplicationInstanceArn !== undefined && output.ReplicationInstanceArn !== null
            ? output.ReplicationInstanceArn
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1ReloadTablesResponse = (output, context) => {
    return {
        ReplicationTaskArn: output.ReplicationTaskArn !== undefined && output.ReplicationTaskArn !== null
            ? output.ReplicationTaskArn
            : undefined,
    };
};
const deserializeAws_json1_1RemoveTagsFromResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1ReplicationInstance = (output, context) => {
    return {
        AllocatedStorage: output.AllocatedStorage !== undefined && output.AllocatedStorage !== null ? output.AllocatedStorage : undefined,
        AutoMinorVersionUpgrade: output.AutoMinorVersionUpgrade !== undefined && output.AutoMinorVersionUpgrade !== null
            ? output.AutoMinorVersionUpgrade
            : undefined,
        AvailabilityZone: output.AvailabilityZone !== undefined && output.AvailabilityZone !== null ? output.AvailabilityZone : undefined,
        DnsNameServers: output.DnsNameServers !== undefined && output.DnsNameServers !== null ? output.DnsNameServers : undefined,
        EngineVersion: output.EngineVersion !== undefined && output.EngineVersion !== null ? output.EngineVersion : undefined,
        FreeUntil: output.FreeUntil !== undefined && output.FreeUntil !== null
            ? new Date(Math.round(output.FreeUntil * 1000))
            : undefined,
        InstanceCreateTime: output.InstanceCreateTime !== undefined && output.InstanceCreateTime !== null
            ? new Date(Math.round(output.InstanceCreateTime * 1000))
            : undefined,
        KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
        MultiAZ: output.MultiAZ !== undefined && output.MultiAZ !== null ? output.MultiAZ : undefined,
        PendingModifiedValues: output.PendingModifiedValues !== undefined && output.PendingModifiedValues !== null
            ? deserializeAws_json1_1ReplicationPendingModifiedValues(output.PendingModifiedValues, context)
            : undefined,
        PreferredMaintenanceWindow: output.PreferredMaintenanceWindow !== undefined && output.PreferredMaintenanceWindow !== null
            ? output.PreferredMaintenanceWindow
            : undefined,
        PubliclyAccessible: output.PubliclyAccessible !== undefined && output.PubliclyAccessible !== null
            ? output.PubliclyAccessible
            : undefined,
        ReplicationInstanceArn: output.ReplicationInstanceArn !== undefined && output.ReplicationInstanceArn !== null
            ? output.ReplicationInstanceArn
            : undefined,
        ReplicationInstanceClass: output.ReplicationInstanceClass !== undefined && output.ReplicationInstanceClass !== null
            ? output.ReplicationInstanceClass
            : undefined,
        ReplicationInstanceIdentifier: output.ReplicationInstanceIdentifier !== undefined && output.ReplicationInstanceIdentifier !== null
            ? output.ReplicationInstanceIdentifier
            : undefined,
        ReplicationInstancePrivateIpAddress: output.ReplicationInstancePrivateIpAddress !== undefined && output.ReplicationInstancePrivateIpAddress !== null
            ? output.ReplicationInstancePrivateIpAddress
            : undefined,
        ReplicationInstancePrivateIpAddresses: output.ReplicationInstancePrivateIpAddresses !== undefined &&
            output.ReplicationInstancePrivateIpAddresses !== null
            ? deserializeAws_json1_1ReplicationInstancePrivateIpAddressList(output.ReplicationInstancePrivateIpAddresses, context)
            : undefined,
        ReplicationInstancePublicIpAddress: output.ReplicationInstancePublicIpAddress !== undefined && output.ReplicationInstancePublicIpAddress !== null
            ? output.ReplicationInstancePublicIpAddress
            : undefined,
        ReplicationInstancePublicIpAddresses: output.ReplicationInstancePublicIpAddresses !== undefined && output.ReplicationInstancePublicIpAddresses !== null
            ? deserializeAws_json1_1ReplicationInstancePublicIpAddressList(output.ReplicationInstancePublicIpAddresses, context)
            : undefined,
        ReplicationInstanceStatus: output.ReplicationInstanceStatus !== undefined && output.ReplicationInstanceStatus !== null
            ? output.ReplicationInstanceStatus
            : undefined,
        ReplicationSubnetGroup: output.ReplicationSubnetGroup !== undefined && output.ReplicationSubnetGroup !== null
            ? deserializeAws_json1_1ReplicationSubnetGroup(output.ReplicationSubnetGroup, context)
            : undefined,
        SecondaryAvailabilityZone: output.SecondaryAvailabilityZone !== undefined && output.SecondaryAvailabilityZone !== null
            ? output.SecondaryAvailabilityZone
            : undefined,
        VpcSecurityGroups: output.VpcSecurityGroups !== undefined && output.VpcSecurityGroups !== null
            ? deserializeAws_json1_1VpcSecurityGroupMembershipList(output.VpcSecurityGroups, context)
            : undefined,
    };
};
const deserializeAws_json1_1ReplicationInstanceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReplicationInstance(entry, context);
    });
};
const deserializeAws_json1_1ReplicationInstancePrivateIpAddressList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ReplicationInstancePublicIpAddressList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ReplicationInstanceTaskLog = (output, context) => {
    return {
        ReplicationInstanceTaskLogSize: output.ReplicationInstanceTaskLogSize !== undefined && output.ReplicationInstanceTaskLogSize !== null
            ? output.ReplicationInstanceTaskLogSize
            : undefined,
        ReplicationTaskArn: output.ReplicationTaskArn !== undefined && output.ReplicationTaskArn !== null
            ? output.ReplicationTaskArn
            : undefined,
        ReplicationTaskName: output.ReplicationTaskName !== undefined && output.ReplicationTaskName !== null
            ? output.ReplicationTaskName
            : undefined,
    };
};
const deserializeAws_json1_1ReplicationInstanceTaskLogsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReplicationInstanceTaskLog(entry, context);
    });
};
const deserializeAws_json1_1ReplicationPendingModifiedValues = (output, context) => {
    return {
        AllocatedStorage: output.AllocatedStorage !== undefined && output.AllocatedStorage !== null ? output.AllocatedStorage : undefined,
        EngineVersion: output.EngineVersion !== undefined && output.EngineVersion !== null ? output.EngineVersion : undefined,
        MultiAZ: output.MultiAZ !== undefined && output.MultiAZ !== null ? output.MultiAZ : undefined,
        ReplicationInstanceClass: output.ReplicationInstanceClass !== undefined && output.ReplicationInstanceClass !== null
            ? output.ReplicationInstanceClass
            : undefined,
    };
};
const deserializeAws_json1_1ReplicationSubnetGroup = (output, context) => {
    return {
        ReplicationSubnetGroupDescription: output.ReplicationSubnetGroupDescription !== undefined && output.ReplicationSubnetGroupDescription !== null
            ? output.ReplicationSubnetGroupDescription
            : undefined,
        ReplicationSubnetGroupIdentifier: output.ReplicationSubnetGroupIdentifier !== undefined && output.ReplicationSubnetGroupIdentifier !== null
            ? output.ReplicationSubnetGroupIdentifier
            : undefined,
        SubnetGroupStatus: output.SubnetGroupStatus !== undefined && output.SubnetGroupStatus !== null
            ? output.SubnetGroupStatus
            : undefined,
        Subnets: output.Subnets !== undefined && output.Subnets !== null
            ? deserializeAws_json1_1SubnetList(output.Subnets, context)
            : undefined,
        VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
    };
};
const deserializeAws_json1_1ReplicationSubnetGroupDoesNotCoverEnoughAZs = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ReplicationSubnetGroups = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReplicationSubnetGroup(entry, context);
    });
};
const deserializeAws_json1_1ReplicationTask = (output, context) => {
    return {
        CdcStartPosition: output.CdcStartPosition !== undefined && output.CdcStartPosition !== null ? output.CdcStartPosition : undefined,
        CdcStopPosition: output.CdcStopPosition !== undefined && output.CdcStopPosition !== null ? output.CdcStopPosition : undefined,
        LastFailureMessage: output.LastFailureMessage !== undefined && output.LastFailureMessage !== null
            ? output.LastFailureMessage
            : undefined,
        MigrationType: output.MigrationType !== undefined && output.MigrationType !== null ? output.MigrationType : undefined,
        RecoveryCheckpoint: output.RecoveryCheckpoint !== undefined && output.RecoveryCheckpoint !== null
            ? output.RecoveryCheckpoint
            : undefined,
        ReplicationInstanceArn: output.ReplicationInstanceArn !== undefined && output.ReplicationInstanceArn !== null
            ? output.ReplicationInstanceArn
            : undefined,
        ReplicationTaskArn: output.ReplicationTaskArn !== undefined && output.ReplicationTaskArn !== null
            ? output.ReplicationTaskArn
            : undefined,
        ReplicationTaskCreationDate: output.ReplicationTaskCreationDate !== undefined && output.ReplicationTaskCreationDate !== null
            ? new Date(Math.round(output.ReplicationTaskCreationDate * 1000))
            : undefined,
        ReplicationTaskIdentifier: output.ReplicationTaskIdentifier !== undefined && output.ReplicationTaskIdentifier !== null
            ? output.ReplicationTaskIdentifier
            : undefined,
        ReplicationTaskSettings: output.ReplicationTaskSettings !== undefined && output.ReplicationTaskSettings !== null
            ? output.ReplicationTaskSettings
            : undefined,
        ReplicationTaskStartDate: output.ReplicationTaskStartDate !== undefined && output.ReplicationTaskStartDate !== null
            ? new Date(Math.round(output.ReplicationTaskStartDate * 1000))
            : undefined,
        ReplicationTaskStats: output.ReplicationTaskStats !== undefined && output.ReplicationTaskStats !== null
            ? deserializeAws_json1_1ReplicationTaskStats(output.ReplicationTaskStats, context)
            : undefined,
        SourceEndpointArn: output.SourceEndpointArn !== undefined && output.SourceEndpointArn !== null
            ? output.SourceEndpointArn
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StopReason: output.StopReason !== undefined && output.StopReason !== null ? output.StopReason : undefined,
        TableMappings: output.TableMappings !== undefined && output.TableMappings !== null ? output.TableMappings : undefined,
        TargetEndpointArn: output.TargetEndpointArn !== undefined && output.TargetEndpointArn !== null
            ? output.TargetEndpointArn
            : undefined,
        TargetReplicationInstanceArn: output.TargetReplicationInstanceArn !== undefined && output.TargetReplicationInstanceArn !== null
            ? output.TargetReplicationInstanceArn
            : undefined,
        TaskData: output.TaskData !== undefined && output.TaskData !== null ? output.TaskData : undefined,
    };
};
const deserializeAws_json1_1ReplicationTaskAssessmentResult = (output, context) => {
    return {
        AssessmentResults: output.AssessmentResults !== undefined && output.AssessmentResults !== null
            ? output.AssessmentResults
            : undefined,
        AssessmentResultsFile: output.AssessmentResultsFile !== undefined && output.AssessmentResultsFile !== null
            ? output.AssessmentResultsFile
            : undefined,
        AssessmentStatus: output.AssessmentStatus !== undefined && output.AssessmentStatus !== null ? output.AssessmentStatus : undefined,
        ReplicationTaskArn: output.ReplicationTaskArn !== undefined && output.ReplicationTaskArn !== null
            ? output.ReplicationTaskArn
            : undefined,
        ReplicationTaskIdentifier: output.ReplicationTaskIdentifier !== undefined && output.ReplicationTaskIdentifier !== null
            ? output.ReplicationTaskIdentifier
            : undefined,
        ReplicationTaskLastAssessmentDate: output.ReplicationTaskLastAssessmentDate !== undefined && output.ReplicationTaskLastAssessmentDate !== null
            ? new Date(Math.round(output.ReplicationTaskLastAssessmentDate * 1000))
            : undefined,
        S3ObjectUrl: output.S3ObjectUrl !== undefined && output.S3ObjectUrl !== null ? output.S3ObjectUrl : undefined,
    };
};
const deserializeAws_json1_1ReplicationTaskAssessmentResultList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReplicationTaskAssessmentResult(entry, context);
    });
};
const deserializeAws_json1_1ReplicationTaskAssessmentRun = (output, context) => {
    return {
        AssessmentProgress: output.AssessmentProgress !== undefined && output.AssessmentProgress !== null
            ? deserializeAws_json1_1ReplicationTaskAssessmentRunProgress(output.AssessmentProgress, context)
            : undefined,
        AssessmentRunName: output.AssessmentRunName !== undefined && output.AssessmentRunName !== null
            ? output.AssessmentRunName
            : undefined,
        LastFailureMessage: output.LastFailureMessage !== undefined && output.LastFailureMessage !== null
            ? output.LastFailureMessage
            : undefined,
        ReplicationTaskArn: output.ReplicationTaskArn !== undefined && output.ReplicationTaskArn !== null
            ? output.ReplicationTaskArn
            : undefined,
        ReplicationTaskAssessmentRunArn: output.ReplicationTaskAssessmentRunArn !== undefined && output.ReplicationTaskAssessmentRunArn !== null
            ? output.ReplicationTaskAssessmentRunArn
            : undefined,
        ReplicationTaskAssessmentRunCreationDate: output.ReplicationTaskAssessmentRunCreationDate !== undefined &&
            output.ReplicationTaskAssessmentRunCreationDate !== null
            ? new Date(Math.round(output.ReplicationTaskAssessmentRunCreationDate * 1000))
            : undefined,
        ResultEncryptionMode: output.ResultEncryptionMode !== undefined && output.ResultEncryptionMode !== null
            ? output.ResultEncryptionMode
            : undefined,
        ResultKmsKeyArn: output.ResultKmsKeyArn !== undefined && output.ResultKmsKeyArn !== null ? output.ResultKmsKeyArn : undefined,
        ResultLocationBucket: output.ResultLocationBucket !== undefined && output.ResultLocationBucket !== null
            ? output.ResultLocationBucket
            : undefined,
        ResultLocationFolder: output.ResultLocationFolder !== undefined && output.ResultLocationFolder !== null
            ? output.ResultLocationFolder
            : undefined,
        ServiceAccessRoleArn: output.ServiceAccessRoleArn !== undefined && output.ServiceAccessRoleArn !== null
            ? output.ServiceAccessRoleArn
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1ReplicationTaskAssessmentRunList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReplicationTaskAssessmentRun(entry, context);
    });
};
const deserializeAws_json1_1ReplicationTaskAssessmentRunProgress = (output, context) => {
    return {
        IndividualAssessmentCompletedCount: output.IndividualAssessmentCompletedCount !== undefined && output.IndividualAssessmentCompletedCount !== null
            ? output.IndividualAssessmentCompletedCount
            : undefined,
        IndividualAssessmentCount: output.IndividualAssessmentCount !== undefined && output.IndividualAssessmentCount !== null
            ? output.IndividualAssessmentCount
            : undefined,
    };
};
const deserializeAws_json1_1ReplicationTaskIndividualAssessment = (output, context) => {
    return {
        IndividualAssessmentName: output.IndividualAssessmentName !== undefined && output.IndividualAssessmentName !== null
            ? output.IndividualAssessmentName
            : undefined,
        ReplicationTaskAssessmentRunArn: output.ReplicationTaskAssessmentRunArn !== undefined && output.ReplicationTaskAssessmentRunArn !== null
            ? output.ReplicationTaskAssessmentRunArn
            : undefined,
        ReplicationTaskIndividualAssessmentArn: output.ReplicationTaskIndividualAssessmentArn !== undefined &&
            output.ReplicationTaskIndividualAssessmentArn !== null
            ? output.ReplicationTaskIndividualAssessmentArn
            : undefined,
        ReplicationTaskIndividualAssessmentStartDate: output.ReplicationTaskIndividualAssessmentStartDate !== undefined &&
            output.ReplicationTaskIndividualAssessmentStartDate !== null
            ? new Date(Math.round(output.ReplicationTaskIndividualAssessmentStartDate * 1000))
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1ReplicationTaskIndividualAssessmentList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReplicationTaskIndividualAssessment(entry, context);
    });
};
const deserializeAws_json1_1ReplicationTaskList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReplicationTask(entry, context);
    });
};
const deserializeAws_json1_1ReplicationTaskStats = (output, context) => {
    return {
        ElapsedTimeMillis: output.ElapsedTimeMillis !== undefined && output.ElapsedTimeMillis !== null
            ? output.ElapsedTimeMillis
            : undefined,
        FreshStartDate: output.FreshStartDate !== undefined && output.FreshStartDate !== null
            ? new Date(Math.round(output.FreshStartDate * 1000))
            : undefined,
        FullLoadFinishDate: output.FullLoadFinishDate !== undefined && output.FullLoadFinishDate !== null
            ? new Date(Math.round(output.FullLoadFinishDate * 1000))
            : undefined,
        FullLoadProgressPercent: output.FullLoadProgressPercent !== undefined && output.FullLoadProgressPercent !== null
            ? output.FullLoadProgressPercent
            : undefined,
        FullLoadStartDate: output.FullLoadStartDate !== undefined && output.FullLoadStartDate !== null
            ? new Date(Math.round(output.FullLoadStartDate * 1000))
            : undefined,
        StartDate: output.StartDate !== undefined && output.StartDate !== null
            ? new Date(Math.round(output.StartDate * 1000))
            : undefined,
        StopDate: output.StopDate !== undefined && output.StopDate !== null
            ? new Date(Math.round(output.StopDate * 1000))
            : undefined,
        TablesErrored: output.TablesErrored !== undefined && output.TablesErrored !== null ? output.TablesErrored : undefined,
        TablesLoaded: output.TablesLoaded !== undefined && output.TablesLoaded !== null ? output.TablesLoaded : undefined,
        TablesLoading: output.TablesLoading !== undefined && output.TablesLoading !== null ? output.TablesLoading : undefined,
        TablesQueued: output.TablesQueued !== undefined && output.TablesQueued !== null ? output.TablesQueued : undefined,
    };
};
const deserializeAws_json1_1ResourceAlreadyExistsFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        resourceArn: output.resourceArn !== undefined && output.resourceArn !== null ? output.resourceArn : undefined,
    };
};
const deserializeAws_json1_1ResourceNotFoundFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ResourcePendingMaintenanceActions = (output, context) => {
    return {
        PendingMaintenanceActionDetails: output.PendingMaintenanceActionDetails !== undefined && output.PendingMaintenanceActionDetails !== null
            ? deserializeAws_json1_1PendingMaintenanceActionDetails(output.PendingMaintenanceActionDetails, context)
            : undefined,
        ResourceIdentifier: output.ResourceIdentifier !== undefined && output.ResourceIdentifier !== null
            ? output.ResourceIdentifier
            : undefined,
    };
};
const deserializeAws_json1_1ResourceQuotaExceededFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1S3AccessDeniedFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1S3ResourceNotFoundFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1S3Settings = (output, context) => {
    return {
        BucketFolder: output.BucketFolder !== undefined && output.BucketFolder !== null ? output.BucketFolder : undefined,
        BucketName: output.BucketName !== undefined && output.BucketName !== null ? output.BucketName : undefined,
        CdcInsertsAndUpdates: output.CdcInsertsAndUpdates !== undefined && output.CdcInsertsAndUpdates !== null
            ? output.CdcInsertsAndUpdates
            : undefined,
        CdcInsertsOnly: output.CdcInsertsOnly !== undefined && output.CdcInsertsOnly !== null ? output.CdcInsertsOnly : undefined,
        CdcPath: output.CdcPath !== undefined && output.CdcPath !== null ? output.CdcPath : undefined,
        CompressionType: output.CompressionType !== undefined && output.CompressionType !== null ? output.CompressionType : undefined,
        CsvDelimiter: output.CsvDelimiter !== undefined && output.CsvDelimiter !== null ? output.CsvDelimiter : undefined,
        CsvNoSupValue: output.CsvNoSupValue !== undefined && output.CsvNoSupValue !== null ? output.CsvNoSupValue : undefined,
        CsvRowDelimiter: output.CsvRowDelimiter !== undefined && output.CsvRowDelimiter !== null ? output.CsvRowDelimiter : undefined,
        DataFormat: output.DataFormat !== undefined && output.DataFormat !== null ? output.DataFormat : undefined,
        DataPageSize: output.DataPageSize !== undefined && output.DataPageSize !== null ? output.DataPageSize : undefined,
        DatePartitionDelimiter: output.DatePartitionDelimiter !== undefined && output.DatePartitionDelimiter !== null
            ? output.DatePartitionDelimiter
            : undefined,
        DatePartitionEnabled: output.DatePartitionEnabled !== undefined && output.DatePartitionEnabled !== null
            ? output.DatePartitionEnabled
            : undefined,
        DatePartitionSequence: output.DatePartitionSequence !== undefined && output.DatePartitionSequence !== null
            ? output.DatePartitionSequence
            : undefined,
        DictPageSizeLimit: output.DictPageSizeLimit !== undefined && output.DictPageSizeLimit !== null
            ? output.DictPageSizeLimit
            : undefined,
        EnableStatistics: output.EnableStatistics !== undefined && output.EnableStatistics !== null ? output.EnableStatistics : undefined,
        EncodingType: output.EncodingType !== undefined && output.EncodingType !== null ? output.EncodingType : undefined,
        EncryptionMode: output.EncryptionMode !== undefined && output.EncryptionMode !== null ? output.EncryptionMode : undefined,
        ExternalTableDefinition: output.ExternalTableDefinition !== undefined && output.ExternalTableDefinition !== null
            ? output.ExternalTableDefinition
            : undefined,
        IncludeOpForFullLoad: output.IncludeOpForFullLoad !== undefined && output.IncludeOpForFullLoad !== null
            ? output.IncludeOpForFullLoad
            : undefined,
        ParquetTimestampInMillisecond: output.ParquetTimestampInMillisecond !== undefined && output.ParquetTimestampInMillisecond !== null
            ? output.ParquetTimestampInMillisecond
            : undefined,
        ParquetVersion: output.ParquetVersion !== undefined && output.ParquetVersion !== null ? output.ParquetVersion : undefined,
        PreserveTransactions: output.PreserveTransactions !== undefined && output.PreserveTransactions !== null
            ? output.PreserveTransactions
            : undefined,
        RowGroupLength: output.RowGroupLength !== undefined && output.RowGroupLength !== null ? output.RowGroupLength : undefined,
        ServerSideEncryptionKmsKeyId: output.ServerSideEncryptionKmsKeyId !== undefined && output.ServerSideEncryptionKmsKeyId !== null
            ? output.ServerSideEncryptionKmsKeyId
            : undefined,
        ServiceAccessRoleArn: output.ServiceAccessRoleArn !== undefined && output.ServiceAccessRoleArn !== null
            ? output.ServiceAccessRoleArn
            : undefined,
        TimestampColumnName: output.TimestampColumnName !== undefined && output.TimestampColumnName !== null
            ? output.TimestampColumnName
            : undefined,
        UseCsvNoSupValue: output.UseCsvNoSupValue !== undefined && output.UseCsvNoSupValue !== null ? output.UseCsvNoSupValue : undefined,
    };
};
const deserializeAws_json1_1SchemaList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1SNSInvalidTopicFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1SNSNoAuthorizationFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1SourceIdsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1StartReplicationTaskAssessmentResponse = (output, context) => {
    return {
        ReplicationTask: output.ReplicationTask !== undefined && output.ReplicationTask !== null
            ? deserializeAws_json1_1ReplicationTask(output.ReplicationTask, context)
            : undefined,
    };
};
const deserializeAws_json1_1StartReplicationTaskAssessmentRunResponse = (output, context) => {
    return {
        ReplicationTaskAssessmentRun: output.ReplicationTaskAssessmentRun !== undefined && output.ReplicationTaskAssessmentRun !== null
            ? deserializeAws_json1_1ReplicationTaskAssessmentRun(output.ReplicationTaskAssessmentRun, context)
            : undefined,
    };
};
const deserializeAws_json1_1StartReplicationTaskResponse = (output, context) => {
    return {
        ReplicationTask: output.ReplicationTask !== undefined && output.ReplicationTask !== null
            ? deserializeAws_json1_1ReplicationTask(output.ReplicationTask, context)
            : undefined,
    };
};
const deserializeAws_json1_1StopReplicationTaskResponse = (output, context) => {
    return {
        ReplicationTask: output.ReplicationTask !== undefined && output.ReplicationTask !== null
            ? deserializeAws_json1_1ReplicationTask(output.ReplicationTask, context)
            : undefined,
    };
};
const deserializeAws_json1_1StorageQuotaExceededFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1Subnet = (output, context) => {
    return {
        SubnetAvailabilityZone: output.SubnetAvailabilityZone !== undefined && output.SubnetAvailabilityZone !== null
            ? deserializeAws_json1_1AvailabilityZone(output.SubnetAvailabilityZone, context)
            : undefined,
        SubnetIdentifier: output.SubnetIdentifier !== undefined && output.SubnetIdentifier !== null ? output.SubnetIdentifier : undefined,
        SubnetStatus: output.SubnetStatus !== undefined && output.SubnetStatus !== null ? output.SubnetStatus : undefined,
    };
};
const deserializeAws_json1_1SubnetAlreadyInUse = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1SubnetList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Subnet(entry, context);
    });
};
const deserializeAws_json1_1SupportedEndpointType = (output, context) => {
    return {
        EndpointType: output.EndpointType !== undefined && output.EndpointType !== null ? output.EndpointType : undefined,
        EngineDisplayName: output.EngineDisplayName !== undefined && output.EngineDisplayName !== null
            ? output.EngineDisplayName
            : undefined,
        EngineName: output.EngineName !== undefined && output.EngineName !== null ? output.EngineName : undefined,
        ReplicationInstanceEngineMinimumVersion: output.ReplicationInstanceEngineMinimumVersion !== undefined &&
            output.ReplicationInstanceEngineMinimumVersion !== null
            ? output.ReplicationInstanceEngineMinimumVersion
            : undefined,
        SupportsCDC: output.SupportsCDC !== undefined && output.SupportsCDC !== null ? output.SupportsCDC : undefined,
    };
};
const deserializeAws_json1_1SupportedEndpointTypeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SupportedEndpointType(entry, context);
    });
};
const deserializeAws_json1_1SybaseSettings = (output, context) => {
    return {
        DatabaseName: output.DatabaseName !== undefined && output.DatabaseName !== null ? output.DatabaseName : undefined,
        Password: output.Password !== undefined && output.Password !== null ? output.Password : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
        SecretsManagerAccessRoleArn: output.SecretsManagerAccessRoleArn !== undefined && output.SecretsManagerAccessRoleArn !== null
            ? output.SecretsManagerAccessRoleArn
            : undefined,
        SecretsManagerSecretId: output.SecretsManagerSecretId !== undefined && output.SecretsManagerSecretId !== null
            ? output.SecretsManagerSecretId
            : undefined,
        ServerName: output.ServerName !== undefined && output.ServerName !== null ? output.ServerName : undefined,
        Username: output.Username !== undefined && output.Username !== null ? output.Username : undefined,
    };
};
const deserializeAws_json1_1TableStatistics = (output, context) => {
    return {
        Ddls: output.Ddls !== undefined && output.Ddls !== null ? output.Ddls : undefined,
        Deletes: output.Deletes !== undefined && output.Deletes !== null ? output.Deletes : undefined,
        FullLoadCondtnlChkFailedRows: output.FullLoadCondtnlChkFailedRows !== undefined && output.FullLoadCondtnlChkFailedRows !== null
            ? output.FullLoadCondtnlChkFailedRows
            : undefined,
        FullLoadEndTime: output.FullLoadEndTime !== undefined && output.FullLoadEndTime !== null
            ? new Date(Math.round(output.FullLoadEndTime * 1000))
            : undefined,
        FullLoadErrorRows: output.FullLoadErrorRows !== undefined && output.FullLoadErrorRows !== null
            ? output.FullLoadErrorRows
            : undefined,
        FullLoadReloaded: output.FullLoadReloaded !== undefined && output.FullLoadReloaded !== null ? output.FullLoadReloaded : undefined,
        FullLoadRows: output.FullLoadRows !== undefined && output.FullLoadRows !== null ? output.FullLoadRows : undefined,
        FullLoadStartTime: output.FullLoadStartTime !== undefined && output.FullLoadStartTime !== null
            ? new Date(Math.round(output.FullLoadStartTime * 1000))
            : undefined,
        Inserts: output.Inserts !== undefined && output.Inserts !== null ? output.Inserts : undefined,
        LastUpdateTime: output.LastUpdateTime !== undefined && output.LastUpdateTime !== null
            ? new Date(Math.round(output.LastUpdateTime * 1000))
            : undefined,
        SchemaName: output.SchemaName !== undefined && output.SchemaName !== null ? output.SchemaName : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
        TableState: output.TableState !== undefined && output.TableState !== null ? output.TableState : undefined,
        Updates: output.Updates !== undefined && output.Updates !== null ? output.Updates : undefined,
        ValidationFailedRecords: output.ValidationFailedRecords !== undefined && output.ValidationFailedRecords !== null
            ? output.ValidationFailedRecords
            : undefined,
        ValidationPendingRecords: output.ValidationPendingRecords !== undefined && output.ValidationPendingRecords !== null
            ? output.ValidationPendingRecords
            : undefined,
        ValidationState: output.ValidationState !== undefined && output.ValidationState !== null ? output.ValidationState : undefined,
        ValidationStateDetails: output.ValidationStateDetails !== undefined && output.ValidationStateDetails !== null
            ? output.ValidationStateDetails
            : undefined,
        ValidationSuspendedRecords: output.ValidationSuspendedRecords !== undefined && output.ValidationSuspendedRecords !== null
            ? output.ValidationSuspendedRecords
            : undefined,
    };
};
const deserializeAws_json1_1TableStatisticsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TableStatistics(entry, context);
    });
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
const deserializeAws_json1_1TestConnectionResponse = (output, context) => {
    return {
        Connection: output.Connection !== undefined && output.Connection !== null
            ? deserializeAws_json1_1Connection(output.Connection, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpgradeDependencyFailureFault = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1VpcSecurityGroupMembership = (output, context) => {
    return {
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        VpcSecurityGroupId: output.VpcSecurityGroupId !== undefined && output.VpcSecurityGroupId !== null
            ? output.VpcSecurityGroupId
            : undefined,
    };
};
const deserializeAws_json1_1VpcSecurityGroupMembershipList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1VpcSecurityGroupMembership(entry, context);
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