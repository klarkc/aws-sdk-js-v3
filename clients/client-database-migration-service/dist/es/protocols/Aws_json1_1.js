import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_json1_1AddTagsToResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.AddTagsToResource",
        };
        body = JSON.stringify(serializeAws_json1_1AddTagsToResourceMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ApplyPendingMaintenanceActionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.ApplyPendingMaintenanceAction",
        };
        body = JSON.stringify(serializeAws_json1_1ApplyPendingMaintenanceActionMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CancelReplicationTaskAssessmentRunCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.CancelReplicationTaskAssessmentRun",
        };
        body = JSON.stringify(serializeAws_json1_1CancelReplicationTaskAssessmentRunMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateEndpointCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.CreateEndpoint",
        };
        body = JSON.stringify(serializeAws_json1_1CreateEndpointMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateEventSubscriptionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.CreateEventSubscription",
        };
        body = JSON.stringify(serializeAws_json1_1CreateEventSubscriptionMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateReplicationInstanceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.CreateReplicationInstance",
        };
        body = JSON.stringify(serializeAws_json1_1CreateReplicationInstanceMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateReplicationSubnetGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.CreateReplicationSubnetGroup",
        };
        body = JSON.stringify(serializeAws_json1_1CreateReplicationSubnetGroupMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateReplicationTaskCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.CreateReplicationTask",
        };
        body = JSON.stringify(serializeAws_json1_1CreateReplicationTaskMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteCertificateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.DeleteCertificate",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteCertificateMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteConnectionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.DeleteConnection",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteConnectionMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteEndpointCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.DeleteEndpoint",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteEndpointMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteEventSubscriptionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.DeleteEventSubscription",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteEventSubscriptionMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteReplicationInstanceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.DeleteReplicationInstance",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteReplicationInstanceMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteReplicationSubnetGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.DeleteReplicationSubnetGroup",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteReplicationSubnetGroupMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteReplicationTaskCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.DeleteReplicationTask",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteReplicationTaskMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteReplicationTaskAssessmentRunCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.DeleteReplicationTaskAssessmentRun",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteReplicationTaskAssessmentRunMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeAccountAttributesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.DescribeAccountAttributes",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeAccountAttributesMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeApplicableIndividualAssessmentsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.DescribeApplicableIndividualAssessments",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeApplicableIndividualAssessmentsMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeCertificatesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.DescribeCertificates",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeCertificatesMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeConnectionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.DescribeConnections",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeConnectionsMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeEndpointsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.DescribeEndpoints",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeEndpointsMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeEndpointSettingsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.DescribeEndpointSettings",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeEndpointSettingsMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeEndpointTypesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.DescribeEndpointTypes",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeEndpointTypesMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeEventCategoriesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.DescribeEventCategories",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeEventCategoriesMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeEventsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.DescribeEvents",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeEventsMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeEventSubscriptionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.DescribeEventSubscriptions",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeEventSubscriptionsMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeOrderableReplicationInstancesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.DescribeOrderableReplicationInstances",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeOrderableReplicationInstancesMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribePendingMaintenanceActionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.DescribePendingMaintenanceActions",
        };
        body = JSON.stringify(serializeAws_json1_1DescribePendingMaintenanceActionsMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeRefreshSchemasStatusCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.DescribeRefreshSchemasStatus",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeRefreshSchemasStatusMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeReplicationInstancesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.DescribeReplicationInstances",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeReplicationInstancesMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeReplicationInstanceTaskLogsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeReplicationInstanceTaskLogsMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeReplicationSubnetGroupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.DescribeReplicationSubnetGroups",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeReplicationSubnetGroupsMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeReplicationTaskAssessmentResultsMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeReplicationTaskAssessmentRunsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.DescribeReplicationTaskAssessmentRuns",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeReplicationTaskAssessmentRunsMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.DescribeReplicationTaskIndividualAssessments",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeReplicationTasksCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.DescribeReplicationTasks",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeReplicationTasksMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeSchemasCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.DescribeSchemas",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeSchemasMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeTableStatisticsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.DescribeTableStatistics",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeTableStatisticsMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ImportCertificateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.ImportCertificate",
        };
        body = JSON.stringify(serializeAws_json1_1ImportCertificateMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListTagsForResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.ListTagsForResource",
        };
        body = JSON.stringify(serializeAws_json1_1ListTagsForResourceMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ModifyEndpointCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.ModifyEndpoint",
        };
        body = JSON.stringify(serializeAws_json1_1ModifyEndpointMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ModifyEventSubscriptionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.ModifyEventSubscription",
        };
        body = JSON.stringify(serializeAws_json1_1ModifyEventSubscriptionMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ModifyReplicationInstanceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.ModifyReplicationInstance",
        };
        body = JSON.stringify(serializeAws_json1_1ModifyReplicationInstanceMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ModifyReplicationSubnetGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.ModifyReplicationSubnetGroup",
        };
        body = JSON.stringify(serializeAws_json1_1ModifyReplicationSubnetGroupMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ModifyReplicationTaskCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.ModifyReplicationTask",
        };
        body = JSON.stringify(serializeAws_json1_1ModifyReplicationTaskMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1MoveReplicationTaskCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.MoveReplicationTask",
        };
        body = JSON.stringify(serializeAws_json1_1MoveReplicationTaskMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1RebootReplicationInstanceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.RebootReplicationInstance",
        };
        body = JSON.stringify(serializeAws_json1_1RebootReplicationInstanceMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1RefreshSchemasCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.RefreshSchemas",
        };
        body = JSON.stringify(serializeAws_json1_1RefreshSchemasMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ReloadTablesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.ReloadTables",
        };
        body = JSON.stringify(serializeAws_json1_1ReloadTablesMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1RemoveTagsFromResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.RemoveTagsFromResource",
        };
        body = JSON.stringify(serializeAws_json1_1RemoveTagsFromResourceMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StartReplicationTaskCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.StartReplicationTask",
        };
        body = JSON.stringify(serializeAws_json1_1StartReplicationTaskMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StartReplicationTaskAssessmentCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.StartReplicationTaskAssessment",
        };
        body = JSON.stringify(serializeAws_json1_1StartReplicationTaskAssessmentMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StartReplicationTaskAssessmentRunCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.StartReplicationTaskAssessmentRun",
        };
        body = JSON.stringify(serializeAws_json1_1StartReplicationTaskAssessmentRunMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StopReplicationTaskCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.StopReplicationTask",
        };
        body = JSON.stringify(serializeAws_json1_1StopReplicationTaskMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1TestConnectionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDMSv20160101.TestConnection",
        };
        body = JSON.stringify(serializeAws_json1_1TestConnectionMessage(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_json1_1AddTagsToResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AddTagsToResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AddTagsToResourceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AddTagsToResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ResourceNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ApplyPendingMaintenanceActionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ApplyPendingMaintenanceActionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ApplyPendingMaintenanceActionResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ApplyPendingMaintenanceActionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ResourceNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CancelReplicationTaskAssessmentRunCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CancelReplicationTaskAssessmentRunCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CancelReplicationTaskAssessmentRunResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CancelReplicationTaskAssessmentRunCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#AccessDeniedFault": return [3 /*break*/, 2];
                    case "InvalidResourceStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault": return [3 /*break*/, 4];
                    case "ResourceNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateEndpointCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateEndpointCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateEndpointResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateEndpointCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#AccessDeniedFault": return [3 /*break*/, 2];
                    case "InvalidResourceStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault": return [3 /*break*/, 4];
                    case "KMSKeyNotAccessibleFault": return [3 /*break*/, 6];
                    case "com.amazonaws.databasemigrationservice#KMSKeyNotAccessibleFault": return [3 /*break*/, 6];
                    case "ResourceAlreadyExistsFault": return [3 /*break*/, 8];
                    case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault": return [3 /*break*/, 8];
                    case "ResourceNotFoundFault": return [3 /*break*/, 10];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 10];
                    case "ResourceQuotaExceededFault": return [3 /*break*/, 12];
                    case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault": return [3 /*break*/, 12];
                    case "S3AccessDeniedFault": return [3 /*break*/, 14];
                    case "com.amazonaws.databasemigrationservice#S3AccessDeniedFault": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSKeyNotAccessibleFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceAlreadyExistsFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1S3AccessDeniedFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateEventSubscriptionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateEventSubscriptionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateEventSubscriptionResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateEventSubscriptionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, parsedBody, message;
    var _o;
    return __generator(this, function (_p) {
        switch (_p.label) {
            case 0:
                _a = [__assign({}, output)];
                _o = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_o.body = _p.sent(), _o)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "KMSAccessDeniedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#KMSAccessDeniedFault": return [3 /*break*/, 2];
                    case "KMSDisabledFault": return [3 /*break*/, 4];
                    case "com.amazonaws.databasemigrationservice#KMSDisabledFault": return [3 /*break*/, 4];
                    case "KMSInvalidStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.databasemigrationservice#KMSInvalidStateFault": return [3 /*break*/, 6];
                    case "KMSNotFoundFault": return [3 /*break*/, 8];
                    case "com.amazonaws.databasemigrationservice#KMSNotFoundFault": return [3 /*break*/, 8];
                    case "KMSThrottlingFault": return [3 /*break*/, 10];
                    case "com.amazonaws.databasemigrationservice#KMSThrottlingFault": return [3 /*break*/, 10];
                    case "ResourceAlreadyExistsFault": return [3 /*break*/, 12];
                    case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault": return [3 /*break*/, 12];
                    case "ResourceNotFoundFault": return [3 /*break*/, 14];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 14];
                    case "ResourceQuotaExceededFault": return [3 /*break*/, 16];
                    case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault": return [3 /*break*/, 16];
                    case "SNSInvalidTopicFault": return [3 /*break*/, 18];
                    case "com.amazonaws.databasemigrationservice#SNSInvalidTopicFault": return [3 /*break*/, 18];
                    case "SNSNoAuthorizationFault": return [3 /*break*/, 20];
                    case "com.amazonaws.databasemigrationservice#SNSNoAuthorizationFault": return [3 /*break*/, 20];
                }
                return [3 /*break*/, 22];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSAccessDeniedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSDisabledFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInvalidStateFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSNotFoundFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSThrottlingFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceAlreadyExistsFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1SNSInvalidTopicFaultResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1SNSNoAuthorizationFaultResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 22:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _p.label = 23;
            case 23:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateReplicationInstanceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateReplicationInstanceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateReplicationInstanceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateReplicationInstanceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, parsedBody, message;
    var _o;
    return __generator(this, function (_p) {
        switch (_p.label) {
            case 0:
                _a = [__assign({}, output)];
                _o = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_o.body = _p.sent(), _o)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#AccessDeniedFault": return [3 /*break*/, 2];
                    case "InsufficientResourceCapacityFault": return [3 /*break*/, 4];
                    case "com.amazonaws.databasemigrationservice#InsufficientResourceCapacityFault": return [3 /*break*/, 4];
                    case "InvalidResourceStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault": return [3 /*break*/, 6];
                    case "InvalidSubnet": return [3 /*break*/, 8];
                    case "com.amazonaws.databasemigrationservice#InvalidSubnet": return [3 /*break*/, 8];
                    case "KMSKeyNotAccessibleFault": return [3 /*break*/, 10];
                    case "com.amazonaws.databasemigrationservice#KMSKeyNotAccessibleFault": return [3 /*break*/, 10];
                    case "ReplicationSubnetGroupDoesNotCoverEnoughAZs": return [3 /*break*/, 12];
                    case "com.amazonaws.databasemigrationservice#ReplicationSubnetGroupDoesNotCoverEnoughAZs": return [3 /*break*/, 12];
                    case "ResourceAlreadyExistsFault": return [3 /*break*/, 14];
                    case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault": return [3 /*break*/, 14];
                    case "ResourceNotFoundFault": return [3 /*break*/, 16];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 16];
                    case "ResourceQuotaExceededFault": return [3 /*break*/, 18];
                    case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault": return [3 /*break*/, 18];
                    case "StorageQuotaExceededFault": return [3 /*break*/, 20];
                    case "com.amazonaws.databasemigrationservice#StorageQuotaExceededFault": return [3 /*break*/, 20];
                }
                return [3 /*break*/, 22];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InsufficientResourceCapacityFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSubnetResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSKeyNotAccessibleFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ReplicationSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceAlreadyExistsFaultResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1StorageQuotaExceededFaultResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 22:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _p.label = 23;
            case 23:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateReplicationSubnetGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateReplicationSubnetGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateReplicationSubnetGroupResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateReplicationSubnetGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#AccessDeniedFault": return [3 /*break*/, 2];
                    case "InvalidSubnet": return [3 /*break*/, 4];
                    case "com.amazonaws.databasemigrationservice#InvalidSubnet": return [3 /*break*/, 4];
                    case "ReplicationSubnetGroupDoesNotCoverEnoughAZs": return [3 /*break*/, 6];
                    case "com.amazonaws.databasemigrationservice#ReplicationSubnetGroupDoesNotCoverEnoughAZs": return [3 /*break*/, 6];
                    case "ResourceAlreadyExistsFault": return [3 /*break*/, 8];
                    case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault": return [3 /*break*/, 8];
                    case "ResourceNotFoundFault": return [3 /*break*/, 10];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 10];
                    case "ResourceQuotaExceededFault": return [3 /*break*/, 12];
                    case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSubnetResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ReplicationSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceAlreadyExistsFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateReplicationTaskCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateReplicationTaskCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateReplicationTaskResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateReplicationTaskCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#AccessDeniedFault": return [3 /*break*/, 2];
                    case "InvalidResourceStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault": return [3 /*break*/, 4];
                    case "KMSKeyNotAccessibleFault": return [3 /*break*/, 6];
                    case "com.amazonaws.databasemigrationservice#KMSKeyNotAccessibleFault": return [3 /*break*/, 6];
                    case "ResourceAlreadyExistsFault": return [3 /*break*/, 8];
                    case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault": return [3 /*break*/, 8];
                    case "ResourceNotFoundFault": return [3 /*break*/, 10];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 10];
                    case "ResourceQuotaExceededFault": return [3 /*break*/, 12];
                    case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSKeyNotAccessibleFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceAlreadyExistsFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteCertificateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteCertificateCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteCertificateResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteCertificateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidResourceStateFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault": return [3 /*break*/, 2];
                    case "ResourceNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteConnectionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteConnectionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteConnectionResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteConnectionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#AccessDeniedFault": return [3 /*break*/, 2];
                    case "InvalidResourceStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault": return [3 /*break*/, 4];
                    case "ResourceNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteEndpointCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteEndpointCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteEndpointResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteEndpointCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidResourceStateFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault": return [3 /*break*/, 2];
                    case "ResourceNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteEventSubscriptionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteEventSubscriptionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteEventSubscriptionResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteEventSubscriptionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidResourceStateFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault": return [3 /*break*/, 2];
                    case "ResourceNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteReplicationInstanceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteReplicationInstanceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteReplicationInstanceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteReplicationInstanceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidResourceStateFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault": return [3 /*break*/, 2];
                    case "ResourceNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteReplicationSubnetGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteReplicationSubnetGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteReplicationSubnetGroupResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteReplicationSubnetGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidResourceStateFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault": return [3 /*break*/, 2];
                    case "ResourceNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteReplicationTaskCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteReplicationTaskCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteReplicationTaskResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteReplicationTaskCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidResourceStateFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault": return [3 /*break*/, 2];
                    case "ResourceNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteReplicationTaskAssessmentRunCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteReplicationTaskAssessmentRunCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteReplicationTaskAssessmentRunResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteReplicationTaskAssessmentRunCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#AccessDeniedFault": return [3 /*break*/, 2];
                    case "InvalidResourceStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault": return [3 /*break*/, 4];
                    case "ResourceNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeAccountAttributesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeAccountAttributesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeAccountAttributesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeAccountAttributesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_json1_1DescribeApplicableIndividualAssessmentsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeApplicableIndividualAssessmentsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeApplicableIndividualAssessmentsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeApplicableIndividualAssessmentsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#AccessDeniedFault": return [3 /*break*/, 2];
                    case "InvalidResourceStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault": return [3 /*break*/, 4];
                    case "ResourceNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeCertificatesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeCertificatesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeCertificatesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeCertificatesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ResourceNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeConnectionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeConnectionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeConnectionsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeConnectionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ResourceNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeEndpointsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeEndpointsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeEndpointsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeEndpointsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ResourceNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeEndpointSettingsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeEndpointSettingsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeEndpointSettingsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeEndpointSettingsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_json1_1DescribeEndpointTypesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeEndpointTypesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeEndpointTypesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeEndpointTypesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_json1_1DescribeEventCategoriesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeEventCategoriesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeEventCategoriesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeEventCategoriesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_json1_1DescribeEventsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeEventsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeEventsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeEventsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_json1_1DescribeEventSubscriptionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeEventSubscriptionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeEventSubscriptionsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeEventSubscriptionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ResourceNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeOrderableReplicationInstancesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeOrderableReplicationInstancesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeOrderableReplicationInstancesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeOrderableReplicationInstancesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_json1_1DescribePendingMaintenanceActionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribePendingMaintenanceActionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribePendingMaintenanceActionsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribePendingMaintenanceActionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ResourceNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeRefreshSchemasStatusCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeRefreshSchemasStatusCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeRefreshSchemasStatusResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeRefreshSchemasStatusCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidResourceStateFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault": return [3 /*break*/, 2];
                    case "ResourceNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeReplicationInstancesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeReplicationInstancesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeReplicationInstancesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeReplicationInstancesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ResourceNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeReplicationInstanceTaskLogsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeReplicationInstanceTaskLogsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeReplicationInstanceTaskLogsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeReplicationInstanceTaskLogsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidResourceStateFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault": return [3 /*break*/, 2];
                    case "ResourceNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeReplicationSubnetGroupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeReplicationSubnetGroupsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeReplicationSubnetGroupsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeReplicationSubnetGroupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ResourceNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeReplicationTaskAssessmentResultsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ResourceNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeReplicationTaskAssessmentRunsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeReplicationTaskAssessmentRunsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeReplicationTaskAssessmentRunsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeReplicationTaskAssessmentRunsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ResourceNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ResourceNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeReplicationTasksCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeReplicationTasksCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeReplicationTasksResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeReplicationTasksCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ResourceNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeSchemasCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeSchemasCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeSchemasResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeSchemasCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidResourceStateFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault": return [3 /*break*/, 2];
                    case "ResourceNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeTableStatisticsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeTableStatisticsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeTableStatisticsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeTableStatisticsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidResourceStateFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault": return [3 /*break*/, 2];
                    case "ResourceNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ImportCertificateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ImportCertificateCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ImportCertificateResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ImportCertificateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidCertificateFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#InvalidCertificateFault": return [3 /*break*/, 2];
                    case "ResourceAlreadyExistsFault": return [3 /*break*/, 4];
                    case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault": return [3 /*break*/, 4];
                    case "ResourceQuotaExceededFault": return [3 /*break*/, 6];
                    case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidCertificateFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceAlreadyExistsFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context)];
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
                    case "ResourceNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ModifyEndpointCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ModifyEndpointCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ModifyEndpointResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ModifyEndpointCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#AccessDeniedFault": return [3 /*break*/, 2];
                    case "InvalidResourceStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault": return [3 /*break*/, 4];
                    case "KMSKeyNotAccessibleFault": return [3 /*break*/, 6];
                    case "com.amazonaws.databasemigrationservice#KMSKeyNotAccessibleFault": return [3 /*break*/, 6];
                    case "ResourceAlreadyExistsFault": return [3 /*break*/, 8];
                    case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault": return [3 /*break*/, 8];
                    case "ResourceNotFoundFault": return [3 /*break*/, 10];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSKeyNotAccessibleFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceAlreadyExistsFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ModifyEventSubscriptionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ModifyEventSubscriptionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ModifyEventSubscriptionResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ModifyEventSubscriptionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator(this, function (_o) {
        switch (_o.label) {
            case 0:
                _a = [__assign({}, output)];
                _m = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_m.body = _o.sent(), _m)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "KMSAccessDeniedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#KMSAccessDeniedFault": return [3 /*break*/, 2];
                    case "KMSDisabledFault": return [3 /*break*/, 4];
                    case "com.amazonaws.databasemigrationservice#KMSDisabledFault": return [3 /*break*/, 4];
                    case "KMSInvalidStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.databasemigrationservice#KMSInvalidStateFault": return [3 /*break*/, 6];
                    case "KMSNotFoundFault": return [3 /*break*/, 8];
                    case "com.amazonaws.databasemigrationservice#KMSNotFoundFault": return [3 /*break*/, 8];
                    case "KMSThrottlingFault": return [3 /*break*/, 10];
                    case "com.amazonaws.databasemigrationservice#KMSThrottlingFault": return [3 /*break*/, 10];
                    case "ResourceNotFoundFault": return [3 /*break*/, 12];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 12];
                    case "ResourceQuotaExceededFault": return [3 /*break*/, 14];
                    case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault": return [3 /*break*/, 14];
                    case "SNSInvalidTopicFault": return [3 /*break*/, 16];
                    case "com.amazonaws.databasemigrationservice#SNSInvalidTopicFault": return [3 /*break*/, 16];
                    case "SNSNoAuthorizationFault": return [3 /*break*/, 18];
                    case "com.amazonaws.databasemigrationservice#SNSNoAuthorizationFault": return [3 /*break*/, 18];
                }
                return [3 /*break*/, 20];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSAccessDeniedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSDisabledFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInvalidStateFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSNotFoundFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSThrottlingFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1SNSInvalidTopicFaultResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1SNSNoAuthorizationFaultResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 20:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _o.label = 21;
            case 21:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ModifyReplicationInstanceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ModifyReplicationInstanceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ModifyReplicationInstanceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ModifyReplicationInstanceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#AccessDeniedFault": return [3 /*break*/, 2];
                    case "InsufficientResourceCapacityFault": return [3 /*break*/, 4];
                    case "com.amazonaws.databasemigrationservice#InsufficientResourceCapacityFault": return [3 /*break*/, 4];
                    case "InvalidResourceStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault": return [3 /*break*/, 6];
                    case "ResourceAlreadyExistsFault": return [3 /*break*/, 8];
                    case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault": return [3 /*break*/, 8];
                    case "ResourceNotFoundFault": return [3 /*break*/, 10];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 10];
                    case "StorageQuotaExceededFault": return [3 /*break*/, 12];
                    case "com.amazonaws.databasemigrationservice#StorageQuotaExceededFault": return [3 /*break*/, 12];
                    case "UpgradeDependencyFailureFault": return [3 /*break*/, 14];
                    case "com.amazonaws.databasemigrationservice#UpgradeDependencyFailureFault": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InsufficientResourceCapacityFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceAlreadyExistsFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1StorageQuotaExceededFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UpgradeDependencyFailureFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ModifyReplicationSubnetGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ModifyReplicationSubnetGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ModifyReplicationSubnetGroupResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ModifyReplicationSubnetGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#AccessDeniedFault": return [3 /*break*/, 2];
                    case "InvalidSubnet": return [3 /*break*/, 4];
                    case "com.amazonaws.databasemigrationservice#InvalidSubnet": return [3 /*break*/, 4];
                    case "ReplicationSubnetGroupDoesNotCoverEnoughAZs": return [3 /*break*/, 6];
                    case "com.amazonaws.databasemigrationservice#ReplicationSubnetGroupDoesNotCoverEnoughAZs": return [3 /*break*/, 6];
                    case "ResourceNotFoundFault": return [3 /*break*/, 8];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 8];
                    case "ResourceQuotaExceededFault": return [3 /*break*/, 10];
                    case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault": return [3 /*break*/, 10];
                    case "SubnetAlreadyInUse": return [3 /*break*/, 12];
                    case "com.amazonaws.databasemigrationservice#SubnetAlreadyInUse": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSubnetResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ReplicationSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1SubnetAlreadyInUseResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ModifyReplicationTaskCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ModifyReplicationTaskCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ModifyReplicationTaskResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ModifyReplicationTaskCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidResourceStateFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault": return [3 /*break*/, 2];
                    case "KMSKeyNotAccessibleFault": return [3 /*break*/, 4];
                    case "com.amazonaws.databasemigrationservice#KMSKeyNotAccessibleFault": return [3 /*break*/, 4];
                    case "ResourceAlreadyExistsFault": return [3 /*break*/, 6];
                    case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault": return [3 /*break*/, 6];
                    case "ResourceNotFoundFault": return [3 /*break*/, 8];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSKeyNotAccessibleFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceAlreadyExistsFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1MoveReplicationTaskCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1MoveReplicationTaskCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1MoveReplicationTaskResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1MoveReplicationTaskCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#AccessDeniedFault": return [3 /*break*/, 2];
                    case "InvalidResourceStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault": return [3 /*break*/, 4];
                    case "KMSKeyNotAccessibleFault": return [3 /*break*/, 6];
                    case "com.amazonaws.databasemigrationservice#KMSKeyNotAccessibleFault": return [3 /*break*/, 6];
                    case "ResourceNotFoundFault": return [3 /*break*/, 8];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSKeyNotAccessibleFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1RebootReplicationInstanceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1RebootReplicationInstanceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1RebootReplicationInstanceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1RebootReplicationInstanceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidResourceStateFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault": return [3 /*break*/, 2];
                    case "ResourceNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1RefreshSchemasCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1RefreshSchemasCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1RefreshSchemasResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1RefreshSchemasCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidResourceStateFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault": return [3 /*break*/, 2];
                    case "KMSKeyNotAccessibleFault": return [3 /*break*/, 4];
                    case "com.amazonaws.databasemigrationservice#KMSKeyNotAccessibleFault": return [3 /*break*/, 4];
                    case "ResourceNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 6];
                    case "ResourceQuotaExceededFault": return [3 /*break*/, 8];
                    case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSKeyNotAccessibleFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ReloadTablesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ReloadTablesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ReloadTablesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ReloadTablesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidResourceStateFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault": return [3 /*break*/, 2];
                    case "ResourceNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1RemoveTagsFromResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1RemoveTagsFromResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1RemoveTagsFromResourceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1RemoveTagsFromResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ResourceNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1StartReplicationTaskCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StartReplicationTaskCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1StartReplicationTaskResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1StartReplicationTaskCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#AccessDeniedFault": return [3 /*break*/, 2];
                    case "InvalidResourceStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault": return [3 /*break*/, 4];
                    case "ResourceNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1StartReplicationTaskAssessmentCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StartReplicationTaskAssessmentCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1StartReplicationTaskAssessmentResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1StartReplicationTaskAssessmentCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidResourceStateFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault": return [3 /*break*/, 2];
                    case "ResourceNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1StartReplicationTaskAssessmentRunCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StartReplicationTaskAssessmentRunCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1StartReplicationTaskAssessmentRunResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1StartReplicationTaskAssessmentRunCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, parsedBody, message;
    var _q;
    return __generator(this, function (_r) {
        switch (_r.label) {
            case 0:
                _a = [__assign({}, output)];
                _q = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_q.body = _r.sent(), _q)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#AccessDeniedFault": return [3 /*break*/, 2];
                    case "InvalidResourceStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault": return [3 /*break*/, 4];
                    case "KMSAccessDeniedFault": return [3 /*break*/, 6];
                    case "com.amazonaws.databasemigrationservice#KMSAccessDeniedFault": return [3 /*break*/, 6];
                    case "KMSDisabledFault": return [3 /*break*/, 8];
                    case "com.amazonaws.databasemigrationservice#KMSDisabledFault": return [3 /*break*/, 8];
                    case "KMSFault": return [3 /*break*/, 10];
                    case "com.amazonaws.databasemigrationservice#KMSFault": return [3 /*break*/, 10];
                    case "KMSInvalidStateFault": return [3 /*break*/, 12];
                    case "com.amazonaws.databasemigrationservice#KMSInvalidStateFault": return [3 /*break*/, 12];
                    case "KMSKeyNotAccessibleFault": return [3 /*break*/, 14];
                    case "com.amazonaws.databasemigrationservice#KMSKeyNotAccessibleFault": return [3 /*break*/, 14];
                    case "KMSNotFoundFault": return [3 /*break*/, 16];
                    case "com.amazonaws.databasemigrationservice#KMSNotFoundFault": return [3 /*break*/, 16];
                    case "ResourceAlreadyExistsFault": return [3 /*break*/, 18];
                    case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault": return [3 /*break*/, 18];
                    case "ResourceNotFoundFault": return [3 /*break*/, 20];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 20];
                    case "S3AccessDeniedFault": return [3 /*break*/, 22];
                    case "com.amazonaws.databasemigrationservice#S3AccessDeniedFault": return [3 /*break*/, 22];
                    case "S3ResourceNotFoundFault": return [3 /*break*/, 24];
                    case "com.amazonaws.databasemigrationservice#S3ResourceNotFoundFault": return [3 /*break*/, 24];
                }
                return [3 /*break*/, 26];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSAccessDeniedFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSDisabledFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInvalidStateFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSKeyNotAccessibleFaultResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSNotFoundFaultResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceAlreadyExistsFaultResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_json1_1S3AccessDeniedFaultResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_json1_1S3ResourceNotFoundFaultResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 26:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _r.label = 27;
            case 27:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1StopReplicationTaskCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StopReplicationTaskCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1StopReplicationTaskResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1StopReplicationTaskCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidResourceStateFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault": return [3 /*break*/, 2];
                    case "ResourceNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1TestConnectionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1TestConnectionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1TestConnectionResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1TestConnectionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.databasemigrationservice#AccessDeniedFault": return [3 /*break*/, 2];
                    case "InvalidResourceStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault": return [3 /*break*/, 4];
                    case "KMSKeyNotAccessibleFault": return [3 /*break*/, 6];
                    case "com.amazonaws.databasemigrationservice#KMSKeyNotAccessibleFault": return [3 /*break*/, 6];
                    case "ResourceNotFoundFault": return [3 /*break*/, 8];
                    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault": return [3 /*break*/, 8];
                    case "ResourceQuotaExceededFault": return [3 /*break*/, 10];
                    case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSKeyNotAccessibleFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context)];
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
var deserializeAws_json1_1AccessDeniedFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1AccessDeniedFault(body, context);
        contents = __assign({ name: "AccessDeniedFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InsufficientResourceCapacityFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InsufficientResourceCapacityFault(body, context);
        contents = __assign({ name: "InsufficientResourceCapacityFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidCertificateFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidCertificateFault(body, context);
        contents = __assign({ name: "InvalidCertificateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidResourceStateFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidResourceStateFault(body, context);
        contents = __assign({ name: "InvalidResourceStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidSubnetResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidSubnet(body, context);
        contents = __assign({ name: "InvalidSubnet", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1KMSAccessDeniedFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1KMSAccessDeniedFault(body, context);
        contents = __assign({ name: "KMSAccessDeniedFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1KMSDisabledFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1KMSDisabledFault(body, context);
        contents = __assign({ name: "KMSDisabledFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1KMSFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1KMSFault(body, context);
        contents = __assign({ name: "KMSFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1KMSInvalidStateFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1KMSInvalidStateFault(body, context);
        contents = __assign({ name: "KMSInvalidStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1KMSKeyNotAccessibleFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1KMSKeyNotAccessibleFault(body, context);
        contents = __assign({ name: "KMSKeyNotAccessibleFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1KMSNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1KMSNotFoundFault(body, context);
        contents = __assign({ name: "KMSNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1KMSThrottlingFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1KMSThrottlingFault(body, context);
        contents = __assign({ name: "KMSThrottlingFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ReplicationSubnetGroupDoesNotCoverEnoughAZsResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ReplicationSubnetGroupDoesNotCoverEnoughAZs(body, context);
        contents = __assign({ name: "ReplicationSubnetGroupDoesNotCoverEnoughAZs", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ResourceAlreadyExistsFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ResourceAlreadyExistsFault(body, context);
        contents = __assign({ name: "ResourceAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ResourceNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ResourceNotFoundFault(body, context);
        contents = __assign({ name: "ResourceNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ResourceQuotaExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ResourceQuotaExceededFault(body, context);
        contents = __assign({ name: "ResourceQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1S3AccessDeniedFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1S3AccessDeniedFault(body, context);
        contents = __assign({ name: "S3AccessDeniedFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1S3ResourceNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1S3ResourceNotFoundFault(body, context);
        contents = __assign({ name: "S3ResourceNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1SNSInvalidTopicFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1SNSInvalidTopicFault(body, context);
        contents = __assign({ name: "SNSInvalidTopicFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1SNSNoAuthorizationFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1SNSNoAuthorizationFault(body, context);
        contents = __assign({ name: "SNSNoAuthorizationFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1StorageQuotaExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1StorageQuotaExceededFault(body, context);
        contents = __assign({ name: "StorageQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1SubnetAlreadyInUseResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1SubnetAlreadyInUse(body, context);
        contents = __assign({ name: "SubnetAlreadyInUse", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1UpgradeDependencyFailureFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1UpgradeDependencyFailureFault(body, context);
        contents = __assign({ name: "UpgradeDependencyFailureFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_json1_1AddTagsToResourceMessage = function (input, context) {
    return __assign(__assign({}, (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }));
};
var serializeAws_json1_1ApplyPendingMaintenanceActionMessage = function (input, context) {
    return __assign(__assign(__assign({}, (input.ApplyAction !== undefined && input.ApplyAction !== null && { ApplyAction: input.ApplyAction })), (input.OptInType !== undefined && input.OptInType !== null && { OptInType: input.OptInType })), (input.ReplicationInstanceArn !== undefined &&
        input.ReplicationInstanceArn !== null && { ReplicationInstanceArn: input.ReplicationInstanceArn }));
};
var serializeAws_json1_1CancelReplicationTaskAssessmentRunMessage = function (input, context) {
    return __assign({}, (input.ReplicationTaskAssessmentRunArn !== undefined &&
        input.ReplicationTaskAssessmentRunArn !== null && {
        ReplicationTaskAssessmentRunArn: input.ReplicationTaskAssessmentRunArn,
    }));
};
var serializeAws_json1_1CreateEndpointMessage = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.CertificateArn !== undefined &&
        input.CertificateArn !== null && { CertificateArn: input.CertificateArn })), (input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName })), (input.DmsTransferSettings !== undefined &&
        input.DmsTransferSettings !== null && {
        DmsTransferSettings: serializeAws_json1_1DmsTransferSettings(input.DmsTransferSettings, context),
    })), (input.DocDbSettings !== undefined &&
        input.DocDbSettings !== null && {
        DocDbSettings: serializeAws_json1_1DocDbSettings(input.DocDbSettings, context),
    })), (input.DynamoDbSettings !== undefined &&
        input.DynamoDbSettings !== null && {
        DynamoDbSettings: serializeAws_json1_1DynamoDbSettings(input.DynamoDbSettings, context),
    })), (input.ElasticsearchSettings !== undefined &&
        input.ElasticsearchSettings !== null && {
        ElasticsearchSettings: serializeAws_json1_1ElasticsearchSettings(input.ElasticsearchSettings, context),
    })), (input.EndpointIdentifier !== undefined &&
        input.EndpointIdentifier !== null && { EndpointIdentifier: input.EndpointIdentifier })), (input.EndpointType !== undefined && input.EndpointType !== null && { EndpointType: input.EndpointType })), (input.EngineName !== undefined && input.EngineName !== null && { EngineName: input.EngineName })), (input.ExternalTableDefinition !== undefined &&
        input.ExternalTableDefinition !== null && { ExternalTableDefinition: input.ExternalTableDefinition })), (input.ExtraConnectionAttributes !== undefined &&
        input.ExtraConnectionAttributes !== null && { ExtraConnectionAttributes: input.ExtraConnectionAttributes })), (input.IBMDb2Settings !== undefined &&
        input.IBMDb2Settings !== null && {
        IBMDb2Settings: serializeAws_json1_1IBMDb2Settings(input.IBMDb2Settings, context),
    })), (input.KafkaSettings !== undefined &&
        input.KafkaSettings !== null && {
        KafkaSettings: serializeAws_json1_1KafkaSettings(input.KafkaSettings, context),
    })), (input.KinesisSettings !== undefined &&
        input.KinesisSettings !== null && {
        KinesisSettings: serializeAws_json1_1KinesisSettings(input.KinesisSettings, context),
    })), (input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId })), (input.MicrosoftSQLServerSettings !== undefined &&
        input.MicrosoftSQLServerSettings !== null && {
        MicrosoftSQLServerSettings: serializeAws_json1_1MicrosoftSQLServerSettings(input.MicrosoftSQLServerSettings, context),
    })), (input.MongoDbSettings !== undefined &&
        input.MongoDbSettings !== null && {
        MongoDbSettings: serializeAws_json1_1MongoDbSettings(input.MongoDbSettings, context),
    })), (input.MySQLSettings !== undefined &&
        input.MySQLSettings !== null && {
        MySQLSettings: serializeAws_json1_1MySQLSettings(input.MySQLSettings, context),
    })), (input.NeptuneSettings !== undefined &&
        input.NeptuneSettings !== null && {
        NeptuneSettings: serializeAws_json1_1NeptuneSettings(input.NeptuneSettings, context),
    })), (input.OracleSettings !== undefined &&
        input.OracleSettings !== null && {
        OracleSettings: serializeAws_json1_1OracleSettings(input.OracleSettings, context),
    })), (input.Password !== undefined && input.Password !== null && { Password: input.Password })), (input.Port !== undefined && input.Port !== null && { Port: input.Port })), (input.PostgreSQLSettings !== undefined &&
        input.PostgreSQLSettings !== null && {
        PostgreSQLSettings: serializeAws_json1_1PostgreSQLSettings(input.PostgreSQLSettings, context),
    })), (input.RedshiftSettings !== undefined &&
        input.RedshiftSettings !== null && {
        RedshiftSettings: serializeAws_json1_1RedshiftSettings(input.RedshiftSettings, context),
    })), (input.ResourceIdentifier !== undefined &&
        input.ResourceIdentifier !== null && { ResourceIdentifier: input.ResourceIdentifier })), (input.S3Settings !== undefined &&
        input.S3Settings !== null && { S3Settings: serializeAws_json1_1S3Settings(input.S3Settings, context) })), (input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName })), (input.ServiceAccessRoleArn !== undefined &&
        input.ServiceAccessRoleArn !== null && { ServiceAccessRoleArn: input.ServiceAccessRoleArn })), (input.SslMode !== undefined && input.SslMode !== null && { SslMode: input.SslMode })), (input.SybaseSettings !== undefined &&
        input.SybaseSettings !== null && {
        SybaseSettings: serializeAws_json1_1SybaseSettings(input.SybaseSettings, context),
    })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) })), (input.Username !== undefined && input.Username !== null && { Username: input.Username }));
};
var serializeAws_json1_1CreateEventSubscriptionMessage = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled })), (input.EventCategories !== undefined &&
        input.EventCategories !== null && {
        EventCategories: serializeAws_json1_1EventCategoriesList(input.EventCategories, context),
    })), (input.SnsTopicArn !== undefined && input.SnsTopicArn !== null && { SnsTopicArn: input.SnsTopicArn })), (input.SourceIds !== undefined &&
        input.SourceIds !== null && { SourceIds: serializeAws_json1_1SourceIdsList(input.SourceIds, context) })), (input.SourceType !== undefined && input.SourceType !== null && { SourceType: input.SourceType })), (input.SubscriptionName !== undefined &&
        input.SubscriptionName !== null && { SubscriptionName: input.SubscriptionName })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }));
};
var serializeAws_json1_1CreateReplicationInstanceMessage = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AllocatedStorage !== undefined &&
        input.AllocatedStorage !== null && { AllocatedStorage: input.AllocatedStorage })), (input.AutoMinorVersionUpgrade !== undefined &&
        input.AutoMinorVersionUpgrade !== null && { AutoMinorVersionUpgrade: input.AutoMinorVersionUpgrade })), (input.AvailabilityZone !== undefined &&
        input.AvailabilityZone !== null && { AvailabilityZone: input.AvailabilityZone })), (input.DnsNameServers !== undefined &&
        input.DnsNameServers !== null && { DnsNameServers: input.DnsNameServers })), (input.EngineVersion !== undefined && input.EngineVersion !== null && { EngineVersion: input.EngineVersion })), (input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId })), (input.MultiAZ !== undefined && input.MultiAZ !== null && { MultiAZ: input.MultiAZ })), (input.PreferredMaintenanceWindow !== undefined &&
        input.PreferredMaintenanceWindow !== null && { PreferredMaintenanceWindow: input.PreferredMaintenanceWindow })), (input.PubliclyAccessible !== undefined &&
        input.PubliclyAccessible !== null && { PubliclyAccessible: input.PubliclyAccessible })), (input.ReplicationInstanceClass !== undefined &&
        input.ReplicationInstanceClass !== null && { ReplicationInstanceClass: input.ReplicationInstanceClass })), (input.ReplicationInstanceIdentifier !== undefined &&
        input.ReplicationInstanceIdentifier !== null && {
        ReplicationInstanceIdentifier: input.ReplicationInstanceIdentifier,
    })), (input.ReplicationSubnetGroupIdentifier !== undefined &&
        input.ReplicationSubnetGroupIdentifier !== null && {
        ReplicationSubnetGroupIdentifier: input.ReplicationSubnetGroupIdentifier,
    })), (input.ResourceIdentifier !== undefined &&
        input.ResourceIdentifier !== null && { ResourceIdentifier: input.ResourceIdentifier })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) })), (input.VpcSecurityGroupIds !== undefined &&
        input.VpcSecurityGroupIds !== null && {
        VpcSecurityGroupIds: serializeAws_json1_1VpcSecurityGroupIdList(input.VpcSecurityGroupIds, context),
    }));
};
var serializeAws_json1_1CreateReplicationSubnetGroupMessage = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.ReplicationSubnetGroupDescription !== undefined &&
        input.ReplicationSubnetGroupDescription !== null && {
        ReplicationSubnetGroupDescription: input.ReplicationSubnetGroupDescription,
    })), (input.ReplicationSubnetGroupIdentifier !== undefined &&
        input.ReplicationSubnetGroupIdentifier !== null && {
        ReplicationSubnetGroupIdentifier: input.ReplicationSubnetGroupIdentifier,
    })), (input.SubnetIds !== undefined &&
        input.SubnetIds !== null && { SubnetIds: serializeAws_json1_1SubnetIdentifierList(input.SubnetIds, context) })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }));
};
var serializeAws_json1_1CreateReplicationTaskMessage = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.CdcStartPosition !== undefined &&
        input.CdcStartPosition !== null && { CdcStartPosition: input.CdcStartPosition })), (input.CdcStartTime !== undefined &&
        input.CdcStartTime !== null && { CdcStartTime: Math.round(input.CdcStartTime.getTime() / 1000) })), (input.CdcStopPosition !== undefined &&
        input.CdcStopPosition !== null && { CdcStopPosition: input.CdcStopPosition })), (input.MigrationType !== undefined && input.MigrationType !== null && { MigrationType: input.MigrationType })), (input.ReplicationInstanceArn !== undefined &&
        input.ReplicationInstanceArn !== null && { ReplicationInstanceArn: input.ReplicationInstanceArn })), (input.ReplicationTaskIdentifier !== undefined &&
        input.ReplicationTaskIdentifier !== null && { ReplicationTaskIdentifier: input.ReplicationTaskIdentifier })), (input.ReplicationTaskSettings !== undefined &&
        input.ReplicationTaskSettings !== null && { ReplicationTaskSettings: input.ReplicationTaskSettings })), (input.ResourceIdentifier !== undefined &&
        input.ResourceIdentifier !== null && { ResourceIdentifier: input.ResourceIdentifier })), (input.SourceEndpointArn !== undefined &&
        input.SourceEndpointArn !== null && { SourceEndpointArn: input.SourceEndpointArn })), (input.TableMappings !== undefined && input.TableMappings !== null && { TableMappings: input.TableMappings })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) })), (input.TargetEndpointArn !== undefined &&
        input.TargetEndpointArn !== null && { TargetEndpointArn: input.TargetEndpointArn })), (input.TaskData !== undefined && input.TaskData !== null && { TaskData: input.TaskData }));
};
var serializeAws_json1_1DeleteCertificateMessage = function (input, context) {
    return __assign({}, (input.CertificateArn !== undefined &&
        input.CertificateArn !== null && { CertificateArn: input.CertificateArn }));
};
var serializeAws_json1_1DeleteConnectionMessage = function (input, context) {
    return __assign(__assign({}, (input.EndpointArn !== undefined && input.EndpointArn !== null && { EndpointArn: input.EndpointArn })), (input.ReplicationInstanceArn !== undefined &&
        input.ReplicationInstanceArn !== null && { ReplicationInstanceArn: input.ReplicationInstanceArn }));
};
var serializeAws_json1_1DeleteEndpointMessage = function (input, context) {
    return __assign({}, (input.EndpointArn !== undefined && input.EndpointArn !== null && { EndpointArn: input.EndpointArn }));
};
var serializeAws_json1_1DeleteEventSubscriptionMessage = function (input, context) {
    return __assign({}, (input.SubscriptionName !== undefined &&
        input.SubscriptionName !== null && { SubscriptionName: input.SubscriptionName }));
};
var serializeAws_json1_1DeleteReplicationInstanceMessage = function (input, context) {
    return __assign({}, (input.ReplicationInstanceArn !== undefined &&
        input.ReplicationInstanceArn !== null && { ReplicationInstanceArn: input.ReplicationInstanceArn }));
};
var serializeAws_json1_1DeleteReplicationSubnetGroupMessage = function (input, context) {
    return __assign({}, (input.ReplicationSubnetGroupIdentifier !== undefined &&
        input.ReplicationSubnetGroupIdentifier !== null && {
        ReplicationSubnetGroupIdentifier: input.ReplicationSubnetGroupIdentifier,
    }));
};
var serializeAws_json1_1DeleteReplicationTaskAssessmentRunMessage = function (input, context) {
    return __assign({}, (input.ReplicationTaskAssessmentRunArn !== undefined &&
        input.ReplicationTaskAssessmentRunArn !== null && {
        ReplicationTaskAssessmentRunArn: input.ReplicationTaskAssessmentRunArn,
    }));
};
var serializeAws_json1_1DeleteReplicationTaskMessage = function (input, context) {
    return __assign({}, (input.ReplicationTaskArn !== undefined &&
        input.ReplicationTaskArn !== null && { ReplicationTaskArn: input.ReplicationTaskArn }));
};
var serializeAws_json1_1DescribeAccountAttributesMessage = function (input, context) {
    return {};
};
var serializeAws_json1_1DescribeApplicableIndividualAssessmentsMessage = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker })), (input.MaxRecords !== undefined && input.MaxRecords !== null && { MaxRecords: input.MaxRecords })), (input.MigrationType !== undefined && input.MigrationType !== null && { MigrationType: input.MigrationType })), (input.ReplicationInstanceArn !== undefined &&
        input.ReplicationInstanceArn !== null && { ReplicationInstanceArn: input.ReplicationInstanceArn })), (input.ReplicationTaskArn !== undefined &&
        input.ReplicationTaskArn !== null && { ReplicationTaskArn: input.ReplicationTaskArn })), (input.SourceEngineName !== undefined &&
        input.SourceEngineName !== null && { SourceEngineName: input.SourceEngineName })), (input.TargetEngineName !== undefined &&
        input.TargetEngineName !== null && { TargetEngineName: input.TargetEngineName }));
};
var serializeAws_json1_1DescribeCertificatesMessage = function (input, context) {
    return __assign(__assign(__assign({}, (input.Filters !== undefined &&
        input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker })), (input.MaxRecords !== undefined && input.MaxRecords !== null && { MaxRecords: input.MaxRecords }));
};
var serializeAws_json1_1DescribeConnectionsMessage = function (input, context) {
    return __assign(__assign(__assign({}, (input.Filters !== undefined &&
        input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker })), (input.MaxRecords !== undefined && input.MaxRecords !== null && { MaxRecords: input.MaxRecords }));
};
var serializeAws_json1_1DescribeEndpointSettingsMessage = function (input, context) {
    return __assign(__assign(__assign({}, (input.EngineName !== undefined && input.EngineName !== null && { EngineName: input.EngineName })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker })), (input.MaxRecords !== undefined && input.MaxRecords !== null && { MaxRecords: input.MaxRecords }));
};
var serializeAws_json1_1DescribeEndpointsMessage = function (input, context) {
    return __assign(__assign(__assign({}, (input.Filters !== undefined &&
        input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker })), (input.MaxRecords !== undefined && input.MaxRecords !== null && { MaxRecords: input.MaxRecords }));
};
var serializeAws_json1_1DescribeEndpointTypesMessage = function (input, context) {
    return __assign(__assign(__assign({}, (input.Filters !== undefined &&
        input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker })), (input.MaxRecords !== undefined && input.MaxRecords !== null && { MaxRecords: input.MaxRecords }));
};
var serializeAws_json1_1DescribeEventCategoriesMessage = function (input, context) {
    return __assign(__assign({}, (input.Filters !== undefined &&
        input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) })), (input.SourceType !== undefined && input.SourceType !== null && { SourceType: input.SourceType }));
};
var serializeAws_json1_1DescribeEventsMessage = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Duration !== undefined && input.Duration !== null && { Duration: input.Duration })), (input.EndTime !== undefined &&
        input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) })), (input.EventCategories !== undefined &&
        input.EventCategories !== null && {
        EventCategories: serializeAws_json1_1EventCategoriesList(input.EventCategories, context),
    })), (input.Filters !== undefined &&
        input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker })), (input.MaxRecords !== undefined && input.MaxRecords !== null && { MaxRecords: input.MaxRecords })), (input.SourceIdentifier !== undefined &&
        input.SourceIdentifier !== null && { SourceIdentifier: input.SourceIdentifier })), (input.SourceType !== undefined && input.SourceType !== null && { SourceType: input.SourceType })), (input.StartTime !== undefined &&
        input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }));
};
var serializeAws_json1_1DescribeEventSubscriptionsMessage = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Filters !== undefined &&
        input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker })), (input.MaxRecords !== undefined && input.MaxRecords !== null && { MaxRecords: input.MaxRecords })), (input.SubscriptionName !== undefined &&
        input.SubscriptionName !== null && { SubscriptionName: input.SubscriptionName }));
};
var serializeAws_json1_1DescribeOrderableReplicationInstancesMessage = function (input, context) {
    return __assign(__assign({}, (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker })), (input.MaxRecords !== undefined && input.MaxRecords !== null && { MaxRecords: input.MaxRecords }));
};
var serializeAws_json1_1DescribePendingMaintenanceActionsMessage = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Filters !== undefined &&
        input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker })), (input.MaxRecords !== undefined && input.MaxRecords !== null && { MaxRecords: input.MaxRecords })), (input.ReplicationInstanceArn !== undefined &&
        input.ReplicationInstanceArn !== null && { ReplicationInstanceArn: input.ReplicationInstanceArn }));
};
var serializeAws_json1_1DescribeRefreshSchemasStatusMessage = function (input, context) {
    return __assign({}, (input.EndpointArn !== undefined && input.EndpointArn !== null && { EndpointArn: input.EndpointArn }));
};
var serializeAws_json1_1DescribeReplicationInstancesMessage = function (input, context) {
    return __assign(__assign(__assign({}, (input.Filters !== undefined &&
        input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker })), (input.MaxRecords !== undefined && input.MaxRecords !== null && { MaxRecords: input.MaxRecords }));
};
var serializeAws_json1_1DescribeReplicationInstanceTaskLogsMessage = function (input, context) {
    return __assign(__assign(__assign({}, (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker })), (input.MaxRecords !== undefined && input.MaxRecords !== null && { MaxRecords: input.MaxRecords })), (input.ReplicationInstanceArn !== undefined &&
        input.ReplicationInstanceArn !== null && { ReplicationInstanceArn: input.ReplicationInstanceArn }));
};
var serializeAws_json1_1DescribeReplicationSubnetGroupsMessage = function (input, context) {
    return __assign(__assign(__assign({}, (input.Filters !== undefined &&
        input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker })), (input.MaxRecords !== undefined && input.MaxRecords !== null && { MaxRecords: input.MaxRecords }));
};
var serializeAws_json1_1DescribeReplicationTaskAssessmentResultsMessage = function (input, context) {
    return __assign(__assign(__assign({}, (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker })), (input.MaxRecords !== undefined && input.MaxRecords !== null && { MaxRecords: input.MaxRecords })), (input.ReplicationTaskArn !== undefined &&
        input.ReplicationTaskArn !== null && { ReplicationTaskArn: input.ReplicationTaskArn }));
};
var serializeAws_json1_1DescribeReplicationTaskAssessmentRunsMessage = function (input, context) {
    return __assign(__assign(__assign({}, (input.Filters !== undefined &&
        input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker })), (input.MaxRecords !== undefined && input.MaxRecords !== null && { MaxRecords: input.MaxRecords }));
};
var serializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsMessage = function (input, context) {
    return __assign(__assign(__assign({}, (input.Filters !== undefined &&
        input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker })), (input.MaxRecords !== undefined && input.MaxRecords !== null && { MaxRecords: input.MaxRecords }));
};
var serializeAws_json1_1DescribeReplicationTasksMessage = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Filters !== undefined &&
        input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker })), (input.MaxRecords !== undefined && input.MaxRecords !== null && { MaxRecords: input.MaxRecords })), (input.WithoutSettings !== undefined &&
        input.WithoutSettings !== null && { WithoutSettings: input.WithoutSettings }));
};
var serializeAws_json1_1DescribeSchemasMessage = function (input, context) {
    return __assign(__assign(__assign({}, (input.EndpointArn !== undefined && input.EndpointArn !== null && { EndpointArn: input.EndpointArn })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker })), (input.MaxRecords !== undefined && input.MaxRecords !== null && { MaxRecords: input.MaxRecords }));
};
var serializeAws_json1_1DescribeTableStatisticsMessage = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Filters !== undefined &&
        input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker })), (input.MaxRecords !== undefined && input.MaxRecords !== null && { MaxRecords: input.MaxRecords })), (input.ReplicationTaskArn !== undefined &&
        input.ReplicationTaskArn !== null && { ReplicationTaskArn: input.ReplicationTaskArn }));
};
var serializeAws_json1_1DmsTransferSettings = function (input, context) {
    return __assign(__assign({}, (input.BucketName !== undefined && input.BucketName !== null && { BucketName: input.BucketName })), (input.ServiceAccessRoleArn !== undefined &&
        input.ServiceAccessRoleArn !== null && { ServiceAccessRoleArn: input.ServiceAccessRoleArn }));
};
var serializeAws_json1_1DocDbSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName })), (input.DocsToInvestigate !== undefined &&
        input.DocsToInvestigate !== null && { DocsToInvestigate: input.DocsToInvestigate })), (input.ExtractDocId !== undefined && input.ExtractDocId !== null && { ExtractDocId: input.ExtractDocId })), (input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId })), (input.NestingLevel !== undefined && input.NestingLevel !== null && { NestingLevel: input.NestingLevel })), (input.Password !== undefined && input.Password !== null && { Password: input.Password })), (input.Port !== undefined && input.Port !== null && { Port: input.Port })), (input.SecretsManagerAccessRoleArn !== undefined &&
        input.SecretsManagerAccessRoleArn !== null && { SecretsManagerAccessRoleArn: input.SecretsManagerAccessRoleArn })), (input.SecretsManagerSecretId !== undefined &&
        input.SecretsManagerSecretId !== null && { SecretsManagerSecretId: input.SecretsManagerSecretId })), (input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName })), (input.Username !== undefined && input.Username !== null && { Username: input.Username }));
};
var serializeAws_json1_1DynamoDbSettings = function (input, context) {
    return __assign({}, (input.ServiceAccessRoleArn !== undefined &&
        input.ServiceAccessRoleArn !== null && { ServiceAccessRoleArn: input.ServiceAccessRoleArn }));
};
var serializeAws_json1_1ElasticsearchSettings = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.EndpointUri !== undefined && input.EndpointUri !== null && { EndpointUri: input.EndpointUri })), (input.ErrorRetryDuration !== undefined &&
        input.ErrorRetryDuration !== null && { ErrorRetryDuration: input.ErrorRetryDuration })), (input.FullLoadErrorPercentage !== undefined &&
        input.FullLoadErrorPercentage !== null && { FullLoadErrorPercentage: input.FullLoadErrorPercentage })), (input.ServiceAccessRoleArn !== undefined &&
        input.ServiceAccessRoleArn !== null && { ServiceAccessRoleArn: input.ServiceAccessRoleArn }));
};
var serializeAws_json1_1EventCategoriesList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ExcludeTestList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1Filter = function (input, context) {
    return __assign(__assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Values !== undefined &&
        input.Values !== null && { Values: serializeAws_json1_1FilterValueList(input.Values, context) }));
};
var serializeAws_json1_1FilterList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Filter(entry, context);
    });
};
var serializeAws_json1_1FilterValueList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1IBMDb2Settings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.CurrentLsn !== undefined && input.CurrentLsn !== null && { CurrentLsn: input.CurrentLsn })), (input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName })), (input.MaxKBytesPerRead !== undefined &&
        input.MaxKBytesPerRead !== null && { MaxKBytesPerRead: input.MaxKBytesPerRead })), (input.Password !== undefined && input.Password !== null && { Password: input.Password })), (input.Port !== undefined && input.Port !== null && { Port: input.Port })), (input.SecretsManagerAccessRoleArn !== undefined &&
        input.SecretsManagerAccessRoleArn !== null && { SecretsManagerAccessRoleArn: input.SecretsManagerAccessRoleArn })), (input.SecretsManagerSecretId !== undefined &&
        input.SecretsManagerSecretId !== null && { SecretsManagerSecretId: input.SecretsManagerSecretId })), (input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName })), (input.SetDataCaptureChanges !== undefined &&
        input.SetDataCaptureChanges !== null && { SetDataCaptureChanges: input.SetDataCaptureChanges })), (input.Username !== undefined && input.Username !== null && { Username: input.Username }));
};
var serializeAws_json1_1ImportCertificateMessage = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.CertificateIdentifier !== undefined &&
        input.CertificateIdentifier !== null && { CertificateIdentifier: input.CertificateIdentifier })), (input.CertificatePem !== undefined &&
        input.CertificatePem !== null && { CertificatePem: input.CertificatePem })), (input.CertificateWallet !== undefined &&
        input.CertificateWallet !== null && { CertificateWallet: context.base64Encoder(input.CertificateWallet) })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }));
};
var serializeAws_json1_1IncludeTestList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1KafkaSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Broker !== undefined && input.Broker !== null && { Broker: input.Broker })), (input.IncludeControlDetails !== undefined &&
        input.IncludeControlDetails !== null && { IncludeControlDetails: input.IncludeControlDetails })), (input.IncludeNullAndEmpty !== undefined &&
        input.IncludeNullAndEmpty !== null && { IncludeNullAndEmpty: input.IncludeNullAndEmpty })), (input.IncludePartitionValue !== undefined &&
        input.IncludePartitionValue !== null && { IncludePartitionValue: input.IncludePartitionValue })), (input.IncludeTableAlterOperations !== undefined &&
        input.IncludeTableAlterOperations !== null && { IncludeTableAlterOperations: input.IncludeTableAlterOperations })), (input.IncludeTransactionDetails !== undefined &&
        input.IncludeTransactionDetails !== null && { IncludeTransactionDetails: input.IncludeTransactionDetails })), (input.MessageFormat !== undefined && input.MessageFormat !== null && { MessageFormat: input.MessageFormat })), (input.MessageMaxBytes !== undefined &&
        input.MessageMaxBytes !== null && { MessageMaxBytes: input.MessageMaxBytes })), (input.PartitionIncludeSchemaTable !== undefined &&
        input.PartitionIncludeSchemaTable !== null && { PartitionIncludeSchemaTable: input.PartitionIncludeSchemaTable })), (input.SaslPassword !== undefined && input.SaslPassword !== null && { SaslPassword: input.SaslPassword })), (input.SaslUsername !== undefined && input.SaslUsername !== null && { SaslUsername: input.SaslUsername })), (input.SecurityProtocol !== undefined &&
        input.SecurityProtocol !== null && { SecurityProtocol: input.SecurityProtocol })), (input.SslCaCertificateArn !== undefined &&
        input.SslCaCertificateArn !== null && { SslCaCertificateArn: input.SslCaCertificateArn })), (input.SslClientCertificateArn !== undefined &&
        input.SslClientCertificateArn !== null && { SslClientCertificateArn: input.SslClientCertificateArn })), (input.SslClientKeyArn !== undefined &&
        input.SslClientKeyArn !== null && { SslClientKeyArn: input.SslClientKeyArn })), (input.SslClientKeyPassword !== undefined &&
        input.SslClientKeyPassword !== null && { SslClientKeyPassword: input.SslClientKeyPassword })), (input.Topic !== undefined && input.Topic !== null && { Topic: input.Topic }));
};
var serializeAws_json1_1KeyList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1KinesisSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.IncludeControlDetails !== undefined &&
        input.IncludeControlDetails !== null && { IncludeControlDetails: input.IncludeControlDetails })), (input.IncludeNullAndEmpty !== undefined &&
        input.IncludeNullAndEmpty !== null && { IncludeNullAndEmpty: input.IncludeNullAndEmpty })), (input.IncludePartitionValue !== undefined &&
        input.IncludePartitionValue !== null && { IncludePartitionValue: input.IncludePartitionValue })), (input.IncludeTableAlterOperations !== undefined &&
        input.IncludeTableAlterOperations !== null && { IncludeTableAlterOperations: input.IncludeTableAlterOperations })), (input.IncludeTransactionDetails !== undefined &&
        input.IncludeTransactionDetails !== null && { IncludeTransactionDetails: input.IncludeTransactionDetails })), (input.MessageFormat !== undefined && input.MessageFormat !== null && { MessageFormat: input.MessageFormat })), (input.PartitionIncludeSchemaTable !== undefined &&
        input.PartitionIncludeSchemaTable !== null && { PartitionIncludeSchemaTable: input.PartitionIncludeSchemaTable })), (input.ServiceAccessRoleArn !== undefined &&
        input.ServiceAccessRoleArn !== null && { ServiceAccessRoleArn: input.ServiceAccessRoleArn })), (input.StreamArn !== undefined && input.StreamArn !== null && { StreamArn: input.StreamArn }));
};
var serializeAws_json1_1ListTagsForResourceMessage = function (input, context) {
    return __assign({}, (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }));
};
var serializeAws_json1_1MicrosoftSQLServerSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.BcpPacketSize !== undefined && input.BcpPacketSize !== null && { BcpPacketSize: input.BcpPacketSize })), (input.ControlTablesFileGroup !== undefined &&
        input.ControlTablesFileGroup !== null && { ControlTablesFileGroup: input.ControlTablesFileGroup })), (input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName })), (input.Password !== undefined && input.Password !== null && { Password: input.Password })), (input.Port !== undefined && input.Port !== null && { Port: input.Port })), (input.QuerySingleAlwaysOnNode !== undefined &&
        input.QuerySingleAlwaysOnNode !== null && { QuerySingleAlwaysOnNode: input.QuerySingleAlwaysOnNode })), (input.ReadBackupOnly !== undefined &&
        input.ReadBackupOnly !== null && { ReadBackupOnly: input.ReadBackupOnly })), (input.SafeguardPolicy !== undefined &&
        input.SafeguardPolicy !== null && { SafeguardPolicy: input.SafeguardPolicy })), (input.SecretsManagerAccessRoleArn !== undefined &&
        input.SecretsManagerAccessRoleArn !== null && { SecretsManagerAccessRoleArn: input.SecretsManagerAccessRoleArn })), (input.SecretsManagerSecretId !== undefined &&
        input.SecretsManagerSecretId !== null && { SecretsManagerSecretId: input.SecretsManagerSecretId })), (input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName })), (input.UseBcpFullLoad !== undefined &&
        input.UseBcpFullLoad !== null && { UseBcpFullLoad: input.UseBcpFullLoad })), (input.UseThirdPartyBackupDevice !== undefined &&
        input.UseThirdPartyBackupDevice !== null && { UseThirdPartyBackupDevice: input.UseThirdPartyBackupDevice })), (input.Username !== undefined && input.Username !== null && { Username: input.Username }));
};
var serializeAws_json1_1ModifyEndpointMessage = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.CertificateArn !== undefined &&
        input.CertificateArn !== null && { CertificateArn: input.CertificateArn })), (input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName })), (input.DmsTransferSettings !== undefined &&
        input.DmsTransferSettings !== null && {
        DmsTransferSettings: serializeAws_json1_1DmsTransferSettings(input.DmsTransferSettings, context),
    })), (input.DocDbSettings !== undefined &&
        input.DocDbSettings !== null && {
        DocDbSettings: serializeAws_json1_1DocDbSettings(input.DocDbSettings, context),
    })), (input.DynamoDbSettings !== undefined &&
        input.DynamoDbSettings !== null && {
        DynamoDbSettings: serializeAws_json1_1DynamoDbSettings(input.DynamoDbSettings, context),
    })), (input.ElasticsearchSettings !== undefined &&
        input.ElasticsearchSettings !== null && {
        ElasticsearchSettings: serializeAws_json1_1ElasticsearchSettings(input.ElasticsearchSettings, context),
    })), (input.EndpointArn !== undefined && input.EndpointArn !== null && { EndpointArn: input.EndpointArn })), (input.EndpointIdentifier !== undefined &&
        input.EndpointIdentifier !== null && { EndpointIdentifier: input.EndpointIdentifier })), (input.EndpointType !== undefined && input.EndpointType !== null && { EndpointType: input.EndpointType })), (input.EngineName !== undefined && input.EngineName !== null && { EngineName: input.EngineName })), (input.ExternalTableDefinition !== undefined &&
        input.ExternalTableDefinition !== null && { ExternalTableDefinition: input.ExternalTableDefinition })), (input.ExtraConnectionAttributes !== undefined &&
        input.ExtraConnectionAttributes !== null && { ExtraConnectionAttributes: input.ExtraConnectionAttributes })), (input.IBMDb2Settings !== undefined &&
        input.IBMDb2Settings !== null && {
        IBMDb2Settings: serializeAws_json1_1IBMDb2Settings(input.IBMDb2Settings, context),
    })), (input.KafkaSettings !== undefined &&
        input.KafkaSettings !== null && {
        KafkaSettings: serializeAws_json1_1KafkaSettings(input.KafkaSettings, context),
    })), (input.KinesisSettings !== undefined &&
        input.KinesisSettings !== null && {
        KinesisSettings: serializeAws_json1_1KinesisSettings(input.KinesisSettings, context),
    })), (input.MicrosoftSQLServerSettings !== undefined &&
        input.MicrosoftSQLServerSettings !== null && {
        MicrosoftSQLServerSettings: serializeAws_json1_1MicrosoftSQLServerSettings(input.MicrosoftSQLServerSettings, context),
    })), (input.MongoDbSettings !== undefined &&
        input.MongoDbSettings !== null && {
        MongoDbSettings: serializeAws_json1_1MongoDbSettings(input.MongoDbSettings, context),
    })), (input.MySQLSettings !== undefined &&
        input.MySQLSettings !== null && {
        MySQLSettings: serializeAws_json1_1MySQLSettings(input.MySQLSettings, context),
    })), (input.NeptuneSettings !== undefined &&
        input.NeptuneSettings !== null && {
        NeptuneSettings: serializeAws_json1_1NeptuneSettings(input.NeptuneSettings, context),
    })), (input.OracleSettings !== undefined &&
        input.OracleSettings !== null && {
        OracleSettings: serializeAws_json1_1OracleSettings(input.OracleSettings, context),
    })), (input.Password !== undefined && input.Password !== null && { Password: input.Password })), (input.Port !== undefined && input.Port !== null && { Port: input.Port })), (input.PostgreSQLSettings !== undefined &&
        input.PostgreSQLSettings !== null && {
        PostgreSQLSettings: serializeAws_json1_1PostgreSQLSettings(input.PostgreSQLSettings, context),
    })), (input.RedshiftSettings !== undefined &&
        input.RedshiftSettings !== null && {
        RedshiftSettings: serializeAws_json1_1RedshiftSettings(input.RedshiftSettings, context),
    })), (input.S3Settings !== undefined &&
        input.S3Settings !== null && { S3Settings: serializeAws_json1_1S3Settings(input.S3Settings, context) })), (input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName })), (input.ServiceAccessRoleArn !== undefined &&
        input.ServiceAccessRoleArn !== null && { ServiceAccessRoleArn: input.ServiceAccessRoleArn })), (input.SslMode !== undefined && input.SslMode !== null && { SslMode: input.SslMode })), (input.SybaseSettings !== undefined &&
        input.SybaseSettings !== null && {
        SybaseSettings: serializeAws_json1_1SybaseSettings(input.SybaseSettings, context),
    })), (input.Username !== undefined && input.Username !== null && { Username: input.Username }));
};
var serializeAws_json1_1ModifyEventSubscriptionMessage = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled })), (input.EventCategories !== undefined &&
        input.EventCategories !== null && {
        EventCategories: serializeAws_json1_1EventCategoriesList(input.EventCategories, context),
    })), (input.SnsTopicArn !== undefined && input.SnsTopicArn !== null && { SnsTopicArn: input.SnsTopicArn })), (input.SourceType !== undefined && input.SourceType !== null && { SourceType: input.SourceType })), (input.SubscriptionName !== undefined &&
        input.SubscriptionName !== null && { SubscriptionName: input.SubscriptionName }));
};
var serializeAws_json1_1ModifyReplicationInstanceMessage = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AllocatedStorage !== undefined &&
        input.AllocatedStorage !== null && { AllocatedStorage: input.AllocatedStorage })), (input.AllowMajorVersionUpgrade !== undefined &&
        input.AllowMajorVersionUpgrade !== null && { AllowMajorVersionUpgrade: input.AllowMajorVersionUpgrade })), (input.ApplyImmediately !== undefined &&
        input.ApplyImmediately !== null && { ApplyImmediately: input.ApplyImmediately })), (input.AutoMinorVersionUpgrade !== undefined &&
        input.AutoMinorVersionUpgrade !== null && { AutoMinorVersionUpgrade: input.AutoMinorVersionUpgrade })), (input.EngineVersion !== undefined && input.EngineVersion !== null && { EngineVersion: input.EngineVersion })), (input.MultiAZ !== undefined && input.MultiAZ !== null && { MultiAZ: input.MultiAZ })), (input.PreferredMaintenanceWindow !== undefined &&
        input.PreferredMaintenanceWindow !== null && { PreferredMaintenanceWindow: input.PreferredMaintenanceWindow })), (input.ReplicationInstanceArn !== undefined &&
        input.ReplicationInstanceArn !== null && { ReplicationInstanceArn: input.ReplicationInstanceArn })), (input.ReplicationInstanceClass !== undefined &&
        input.ReplicationInstanceClass !== null && { ReplicationInstanceClass: input.ReplicationInstanceClass })), (input.ReplicationInstanceIdentifier !== undefined &&
        input.ReplicationInstanceIdentifier !== null && {
        ReplicationInstanceIdentifier: input.ReplicationInstanceIdentifier,
    })), (input.VpcSecurityGroupIds !== undefined &&
        input.VpcSecurityGroupIds !== null && {
        VpcSecurityGroupIds: serializeAws_json1_1VpcSecurityGroupIdList(input.VpcSecurityGroupIds, context),
    }));
};
var serializeAws_json1_1ModifyReplicationSubnetGroupMessage = function (input, context) {
    return __assign(__assign(__assign({}, (input.ReplicationSubnetGroupDescription !== undefined &&
        input.ReplicationSubnetGroupDescription !== null && {
        ReplicationSubnetGroupDescription: input.ReplicationSubnetGroupDescription,
    })), (input.ReplicationSubnetGroupIdentifier !== undefined &&
        input.ReplicationSubnetGroupIdentifier !== null && {
        ReplicationSubnetGroupIdentifier: input.ReplicationSubnetGroupIdentifier,
    })), (input.SubnetIds !== undefined &&
        input.SubnetIds !== null && { SubnetIds: serializeAws_json1_1SubnetIdentifierList(input.SubnetIds, context) }));
};
var serializeAws_json1_1ModifyReplicationTaskMessage = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.CdcStartPosition !== undefined &&
        input.CdcStartPosition !== null && { CdcStartPosition: input.CdcStartPosition })), (input.CdcStartTime !== undefined &&
        input.CdcStartTime !== null && { CdcStartTime: Math.round(input.CdcStartTime.getTime() / 1000) })), (input.CdcStopPosition !== undefined &&
        input.CdcStopPosition !== null && { CdcStopPosition: input.CdcStopPosition })), (input.MigrationType !== undefined && input.MigrationType !== null && { MigrationType: input.MigrationType })), (input.ReplicationTaskArn !== undefined &&
        input.ReplicationTaskArn !== null && { ReplicationTaskArn: input.ReplicationTaskArn })), (input.ReplicationTaskIdentifier !== undefined &&
        input.ReplicationTaskIdentifier !== null && { ReplicationTaskIdentifier: input.ReplicationTaskIdentifier })), (input.ReplicationTaskSettings !== undefined &&
        input.ReplicationTaskSettings !== null && { ReplicationTaskSettings: input.ReplicationTaskSettings })), (input.TableMappings !== undefined && input.TableMappings !== null && { TableMappings: input.TableMappings })), (input.TaskData !== undefined && input.TaskData !== null && { TaskData: input.TaskData }));
};
var serializeAws_json1_1MongoDbSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AuthMechanism !== undefined && input.AuthMechanism !== null && { AuthMechanism: input.AuthMechanism })), (input.AuthSource !== undefined && input.AuthSource !== null && { AuthSource: input.AuthSource })), (input.AuthType !== undefined && input.AuthType !== null && { AuthType: input.AuthType })), (input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName })), (input.DocsToInvestigate !== undefined &&
        input.DocsToInvestigate !== null && { DocsToInvestigate: input.DocsToInvestigate })), (input.ExtractDocId !== undefined && input.ExtractDocId !== null && { ExtractDocId: input.ExtractDocId })), (input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId })), (input.NestingLevel !== undefined && input.NestingLevel !== null && { NestingLevel: input.NestingLevel })), (input.Password !== undefined && input.Password !== null && { Password: input.Password })), (input.Port !== undefined && input.Port !== null && { Port: input.Port })), (input.SecretsManagerAccessRoleArn !== undefined &&
        input.SecretsManagerAccessRoleArn !== null && { SecretsManagerAccessRoleArn: input.SecretsManagerAccessRoleArn })), (input.SecretsManagerSecretId !== undefined &&
        input.SecretsManagerSecretId !== null && { SecretsManagerSecretId: input.SecretsManagerSecretId })), (input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName })), (input.Username !== undefined && input.Username !== null && { Username: input.Username }));
};
var serializeAws_json1_1MoveReplicationTaskMessage = function (input, context) {
    return __assign(__assign({}, (input.ReplicationTaskArn !== undefined &&
        input.ReplicationTaskArn !== null && { ReplicationTaskArn: input.ReplicationTaskArn })), (input.TargetReplicationInstanceArn !== undefined &&
        input.TargetReplicationInstanceArn !== null && {
        TargetReplicationInstanceArn: input.TargetReplicationInstanceArn,
    }));
};
var serializeAws_json1_1MySQLSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AfterConnectScript !== undefined &&
        input.AfterConnectScript !== null && { AfterConnectScript: input.AfterConnectScript })), (input.CleanSourceMetadataOnMismatch !== undefined &&
        input.CleanSourceMetadataOnMismatch !== null && {
        CleanSourceMetadataOnMismatch: input.CleanSourceMetadataOnMismatch,
    })), (input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName })), (input.EventsPollInterval !== undefined &&
        input.EventsPollInterval !== null && { EventsPollInterval: input.EventsPollInterval })), (input.MaxFileSize !== undefined && input.MaxFileSize !== null && { MaxFileSize: input.MaxFileSize })), (input.ParallelLoadThreads !== undefined &&
        input.ParallelLoadThreads !== null && { ParallelLoadThreads: input.ParallelLoadThreads })), (input.Password !== undefined && input.Password !== null && { Password: input.Password })), (input.Port !== undefined && input.Port !== null && { Port: input.Port })), (input.SecretsManagerAccessRoleArn !== undefined &&
        input.SecretsManagerAccessRoleArn !== null && { SecretsManagerAccessRoleArn: input.SecretsManagerAccessRoleArn })), (input.SecretsManagerSecretId !== undefined &&
        input.SecretsManagerSecretId !== null && { SecretsManagerSecretId: input.SecretsManagerSecretId })), (input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName })), (input.ServerTimezone !== undefined &&
        input.ServerTimezone !== null && { ServerTimezone: input.ServerTimezone })), (input.TargetDbType !== undefined && input.TargetDbType !== null && { TargetDbType: input.TargetDbType })), (input.Username !== undefined && input.Username !== null && { Username: input.Username }));
};
var serializeAws_json1_1NeptuneSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.ErrorRetryDuration !== undefined &&
        input.ErrorRetryDuration !== null && { ErrorRetryDuration: input.ErrorRetryDuration })), (input.IamAuthEnabled !== undefined &&
        input.IamAuthEnabled !== null && { IamAuthEnabled: input.IamAuthEnabled })), (input.MaxFileSize !== undefined && input.MaxFileSize !== null && { MaxFileSize: input.MaxFileSize })), (input.MaxRetryCount !== undefined && input.MaxRetryCount !== null && { MaxRetryCount: input.MaxRetryCount })), (input.S3BucketFolder !== undefined &&
        input.S3BucketFolder !== null && { S3BucketFolder: input.S3BucketFolder })), (input.S3BucketName !== undefined && input.S3BucketName !== null && { S3BucketName: input.S3BucketName })), (input.ServiceAccessRoleArn !== undefined &&
        input.ServiceAccessRoleArn !== null && { ServiceAccessRoleArn: input.ServiceAccessRoleArn }));
};
var serializeAws_json1_1OracleSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AccessAlternateDirectly !== undefined &&
        input.AccessAlternateDirectly !== null && { AccessAlternateDirectly: input.AccessAlternateDirectly })), (input.AddSupplementalLogging !== undefined &&
        input.AddSupplementalLogging !== null && { AddSupplementalLogging: input.AddSupplementalLogging })), (input.AdditionalArchivedLogDestId !== undefined &&
        input.AdditionalArchivedLogDestId !== null && { AdditionalArchivedLogDestId: input.AdditionalArchivedLogDestId })), (input.AllowSelectNestedTables !== undefined &&
        input.AllowSelectNestedTables !== null && { AllowSelectNestedTables: input.AllowSelectNestedTables })), (input.ArchivedLogDestId !== undefined &&
        input.ArchivedLogDestId !== null && { ArchivedLogDestId: input.ArchivedLogDestId })), (input.ArchivedLogsOnly !== undefined &&
        input.ArchivedLogsOnly !== null && { ArchivedLogsOnly: input.ArchivedLogsOnly })), (input.AsmPassword !== undefined && input.AsmPassword !== null && { AsmPassword: input.AsmPassword })), (input.AsmServer !== undefined && input.AsmServer !== null && { AsmServer: input.AsmServer })), (input.AsmUser !== undefined && input.AsmUser !== null && { AsmUser: input.AsmUser })), (input.CharLengthSemantics !== undefined &&
        input.CharLengthSemantics !== null && { CharLengthSemantics: input.CharLengthSemantics })), (input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName })), (input.DirectPathNoLog !== undefined &&
        input.DirectPathNoLog !== null && { DirectPathNoLog: input.DirectPathNoLog })), (input.DirectPathParallelLoad !== undefined &&
        input.DirectPathParallelLoad !== null && { DirectPathParallelLoad: input.DirectPathParallelLoad })), (input.EnableHomogenousTablespace !== undefined &&
        input.EnableHomogenousTablespace !== null && { EnableHomogenousTablespace: input.EnableHomogenousTablespace })), (input.FailTasksOnLobTruncation !== undefined &&
        input.FailTasksOnLobTruncation !== null && { FailTasksOnLobTruncation: input.FailTasksOnLobTruncation })), (input.NumberDatatypeScale !== undefined &&
        input.NumberDatatypeScale !== null && { NumberDatatypeScale: input.NumberDatatypeScale })), (input.OraclePathPrefix !== undefined &&
        input.OraclePathPrefix !== null && { OraclePathPrefix: input.OraclePathPrefix })), (input.ParallelAsmReadThreads !== undefined &&
        input.ParallelAsmReadThreads !== null && { ParallelAsmReadThreads: input.ParallelAsmReadThreads })), (input.Password !== undefined && input.Password !== null && { Password: input.Password })), (input.Port !== undefined && input.Port !== null && { Port: input.Port })), (input.ReadAheadBlocks !== undefined &&
        input.ReadAheadBlocks !== null && { ReadAheadBlocks: input.ReadAheadBlocks })), (input.ReadTableSpaceName !== undefined &&
        input.ReadTableSpaceName !== null && { ReadTableSpaceName: input.ReadTableSpaceName })), (input.ReplacePathPrefix !== undefined &&
        input.ReplacePathPrefix !== null && { ReplacePathPrefix: input.ReplacePathPrefix })), (input.RetryInterval !== undefined && input.RetryInterval !== null && { RetryInterval: input.RetryInterval })), (input.SecretsManagerAccessRoleArn !== undefined &&
        input.SecretsManagerAccessRoleArn !== null && { SecretsManagerAccessRoleArn: input.SecretsManagerAccessRoleArn })), (input.SecretsManagerOracleAsmAccessRoleArn !== undefined &&
        input.SecretsManagerOracleAsmAccessRoleArn !== null && {
        SecretsManagerOracleAsmAccessRoleArn: input.SecretsManagerOracleAsmAccessRoleArn,
    })), (input.SecretsManagerOracleAsmSecretId !== undefined &&
        input.SecretsManagerOracleAsmSecretId !== null && {
        SecretsManagerOracleAsmSecretId: input.SecretsManagerOracleAsmSecretId,
    })), (input.SecretsManagerSecretId !== undefined &&
        input.SecretsManagerSecretId !== null && { SecretsManagerSecretId: input.SecretsManagerSecretId })), (input.SecurityDbEncryption !== undefined &&
        input.SecurityDbEncryption !== null && { SecurityDbEncryption: input.SecurityDbEncryption })), (input.SecurityDbEncryptionName !== undefined &&
        input.SecurityDbEncryptionName !== null && { SecurityDbEncryptionName: input.SecurityDbEncryptionName })), (input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName })), (input.SpatialDataOptionToGeoJsonFunctionName !== undefined &&
        input.SpatialDataOptionToGeoJsonFunctionName !== null && {
        SpatialDataOptionToGeoJsonFunctionName: input.SpatialDataOptionToGeoJsonFunctionName,
    })), (input.UseAlternateFolderForOnline !== undefined &&
        input.UseAlternateFolderForOnline !== null && { UseAlternateFolderForOnline: input.UseAlternateFolderForOnline })), (input.UsePathPrefix !== undefined && input.UsePathPrefix !== null && { UsePathPrefix: input.UsePathPrefix })), (input.Username !== undefined && input.Username !== null && { Username: input.Username }));
};
var serializeAws_json1_1PostgreSQLSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AfterConnectScript !== undefined &&
        input.AfterConnectScript !== null && { AfterConnectScript: input.AfterConnectScript })), (input.CaptureDdls !== undefined && input.CaptureDdls !== null && { CaptureDdls: input.CaptureDdls })), (input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName })), (input.DdlArtifactsSchema !== undefined &&
        input.DdlArtifactsSchema !== null && { DdlArtifactsSchema: input.DdlArtifactsSchema })), (input.ExecuteTimeout !== undefined &&
        input.ExecuteTimeout !== null && { ExecuteTimeout: input.ExecuteTimeout })), (input.FailTasksOnLobTruncation !== undefined &&
        input.FailTasksOnLobTruncation !== null && { FailTasksOnLobTruncation: input.FailTasksOnLobTruncation })), (input.MaxFileSize !== undefined && input.MaxFileSize !== null && { MaxFileSize: input.MaxFileSize })), (input.Password !== undefined && input.Password !== null && { Password: input.Password })), (input.Port !== undefined && input.Port !== null && { Port: input.Port })), (input.SecretsManagerAccessRoleArn !== undefined &&
        input.SecretsManagerAccessRoleArn !== null && { SecretsManagerAccessRoleArn: input.SecretsManagerAccessRoleArn })), (input.SecretsManagerSecretId !== undefined &&
        input.SecretsManagerSecretId !== null && { SecretsManagerSecretId: input.SecretsManagerSecretId })), (input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName })), (input.SlotName !== undefined && input.SlotName !== null && { SlotName: input.SlotName })), (input.Username !== undefined && input.Username !== null && { Username: input.Username }));
};
var serializeAws_json1_1RebootReplicationInstanceMessage = function (input, context) {
    return __assign(__assign({}, (input.ForceFailover !== undefined && input.ForceFailover !== null && { ForceFailover: input.ForceFailover })), (input.ReplicationInstanceArn !== undefined &&
        input.ReplicationInstanceArn !== null && { ReplicationInstanceArn: input.ReplicationInstanceArn }));
};
var serializeAws_json1_1RedshiftSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AcceptAnyDate !== undefined && input.AcceptAnyDate !== null && { AcceptAnyDate: input.AcceptAnyDate })), (input.AfterConnectScript !== undefined &&
        input.AfterConnectScript !== null && { AfterConnectScript: input.AfterConnectScript })), (input.BucketFolder !== undefined && input.BucketFolder !== null && { BucketFolder: input.BucketFolder })), (input.BucketName !== undefined && input.BucketName !== null && { BucketName: input.BucketName })), (input.CaseSensitiveNames !== undefined &&
        input.CaseSensitiveNames !== null && { CaseSensitiveNames: input.CaseSensitiveNames })), (input.CompUpdate !== undefined && input.CompUpdate !== null && { CompUpdate: input.CompUpdate })), (input.ConnectionTimeout !== undefined &&
        input.ConnectionTimeout !== null && { ConnectionTimeout: input.ConnectionTimeout })), (input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName })), (input.DateFormat !== undefined && input.DateFormat !== null && { DateFormat: input.DateFormat })), (input.EmptyAsNull !== undefined && input.EmptyAsNull !== null && { EmptyAsNull: input.EmptyAsNull })), (input.EncryptionMode !== undefined &&
        input.EncryptionMode !== null && { EncryptionMode: input.EncryptionMode })), (input.ExplicitIds !== undefined && input.ExplicitIds !== null && { ExplicitIds: input.ExplicitIds })), (input.FileTransferUploadStreams !== undefined &&
        input.FileTransferUploadStreams !== null && { FileTransferUploadStreams: input.FileTransferUploadStreams })), (input.LoadTimeout !== undefined && input.LoadTimeout !== null && { LoadTimeout: input.LoadTimeout })), (input.MaxFileSize !== undefined && input.MaxFileSize !== null && { MaxFileSize: input.MaxFileSize })), (input.Password !== undefined && input.Password !== null && { Password: input.Password })), (input.Port !== undefined && input.Port !== null && { Port: input.Port })), (input.RemoveQuotes !== undefined && input.RemoveQuotes !== null && { RemoveQuotes: input.RemoveQuotes })), (input.ReplaceChars !== undefined && input.ReplaceChars !== null && { ReplaceChars: input.ReplaceChars })), (input.ReplaceInvalidChars !== undefined &&
        input.ReplaceInvalidChars !== null && { ReplaceInvalidChars: input.ReplaceInvalidChars })), (input.SecretsManagerAccessRoleArn !== undefined &&
        input.SecretsManagerAccessRoleArn !== null && { SecretsManagerAccessRoleArn: input.SecretsManagerAccessRoleArn })), (input.SecretsManagerSecretId !== undefined &&
        input.SecretsManagerSecretId !== null && { SecretsManagerSecretId: input.SecretsManagerSecretId })), (input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName })), (input.ServerSideEncryptionKmsKeyId !== undefined &&
        input.ServerSideEncryptionKmsKeyId !== null && {
        ServerSideEncryptionKmsKeyId: input.ServerSideEncryptionKmsKeyId,
    })), (input.ServiceAccessRoleArn !== undefined &&
        input.ServiceAccessRoleArn !== null && { ServiceAccessRoleArn: input.ServiceAccessRoleArn })), (input.TimeFormat !== undefined && input.TimeFormat !== null && { TimeFormat: input.TimeFormat })), (input.TrimBlanks !== undefined && input.TrimBlanks !== null && { TrimBlanks: input.TrimBlanks })), (input.TruncateColumns !== undefined &&
        input.TruncateColumns !== null && { TruncateColumns: input.TruncateColumns })), (input.Username !== undefined && input.Username !== null && { Username: input.Username })), (input.WriteBufferSize !== undefined &&
        input.WriteBufferSize !== null && { WriteBufferSize: input.WriteBufferSize }));
};
var serializeAws_json1_1RefreshSchemasMessage = function (input, context) {
    return __assign(__assign({}, (input.EndpointArn !== undefined && input.EndpointArn !== null && { EndpointArn: input.EndpointArn })), (input.ReplicationInstanceArn !== undefined &&
        input.ReplicationInstanceArn !== null && { ReplicationInstanceArn: input.ReplicationInstanceArn }));
};
var serializeAws_json1_1ReloadTablesMessage = function (input, context) {
    return __assign(__assign(__assign({}, (input.ReloadOption !== undefined && input.ReloadOption !== null && { ReloadOption: input.ReloadOption })), (input.ReplicationTaskArn !== undefined &&
        input.ReplicationTaskArn !== null && { ReplicationTaskArn: input.ReplicationTaskArn })), (input.TablesToReload !== undefined &&
        input.TablesToReload !== null && {
        TablesToReload: serializeAws_json1_1TableListToReload(input.TablesToReload, context),
    }));
};
var serializeAws_json1_1RemoveTagsFromResourceMessage = function (input, context) {
    return __assign(__assign({}, (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn })), (input.TagKeys !== undefined &&
        input.TagKeys !== null && { TagKeys: serializeAws_json1_1KeyList(input.TagKeys, context) }));
};
var serializeAws_json1_1S3Settings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.BucketFolder !== undefined && input.BucketFolder !== null && { BucketFolder: input.BucketFolder })), (input.BucketName !== undefined && input.BucketName !== null && { BucketName: input.BucketName })), (input.CdcInsertsAndUpdates !== undefined &&
        input.CdcInsertsAndUpdates !== null && { CdcInsertsAndUpdates: input.CdcInsertsAndUpdates })), (input.CdcInsertsOnly !== undefined &&
        input.CdcInsertsOnly !== null && { CdcInsertsOnly: input.CdcInsertsOnly })), (input.CdcPath !== undefined && input.CdcPath !== null && { CdcPath: input.CdcPath })), (input.CompressionType !== undefined &&
        input.CompressionType !== null && { CompressionType: input.CompressionType })), (input.CsvDelimiter !== undefined && input.CsvDelimiter !== null && { CsvDelimiter: input.CsvDelimiter })), (input.CsvNoSupValue !== undefined && input.CsvNoSupValue !== null && { CsvNoSupValue: input.CsvNoSupValue })), (input.CsvRowDelimiter !== undefined &&
        input.CsvRowDelimiter !== null && { CsvRowDelimiter: input.CsvRowDelimiter })), (input.DataFormat !== undefined && input.DataFormat !== null && { DataFormat: input.DataFormat })), (input.DataPageSize !== undefined && input.DataPageSize !== null && { DataPageSize: input.DataPageSize })), (input.DatePartitionDelimiter !== undefined &&
        input.DatePartitionDelimiter !== null && { DatePartitionDelimiter: input.DatePartitionDelimiter })), (input.DatePartitionEnabled !== undefined &&
        input.DatePartitionEnabled !== null && { DatePartitionEnabled: input.DatePartitionEnabled })), (input.DatePartitionSequence !== undefined &&
        input.DatePartitionSequence !== null && { DatePartitionSequence: input.DatePartitionSequence })), (input.DictPageSizeLimit !== undefined &&
        input.DictPageSizeLimit !== null && { DictPageSizeLimit: input.DictPageSizeLimit })), (input.EnableStatistics !== undefined &&
        input.EnableStatistics !== null && { EnableStatistics: input.EnableStatistics })), (input.EncodingType !== undefined && input.EncodingType !== null && { EncodingType: input.EncodingType })), (input.EncryptionMode !== undefined &&
        input.EncryptionMode !== null && { EncryptionMode: input.EncryptionMode })), (input.ExternalTableDefinition !== undefined &&
        input.ExternalTableDefinition !== null && { ExternalTableDefinition: input.ExternalTableDefinition })), (input.IncludeOpForFullLoad !== undefined &&
        input.IncludeOpForFullLoad !== null && { IncludeOpForFullLoad: input.IncludeOpForFullLoad })), (input.ParquetTimestampInMillisecond !== undefined &&
        input.ParquetTimestampInMillisecond !== null && {
        ParquetTimestampInMillisecond: input.ParquetTimestampInMillisecond,
    })), (input.ParquetVersion !== undefined &&
        input.ParquetVersion !== null && { ParquetVersion: input.ParquetVersion })), (input.PreserveTransactions !== undefined &&
        input.PreserveTransactions !== null && { PreserveTransactions: input.PreserveTransactions })), (input.RowGroupLength !== undefined &&
        input.RowGroupLength !== null && { RowGroupLength: input.RowGroupLength })), (input.ServerSideEncryptionKmsKeyId !== undefined &&
        input.ServerSideEncryptionKmsKeyId !== null && {
        ServerSideEncryptionKmsKeyId: input.ServerSideEncryptionKmsKeyId,
    })), (input.ServiceAccessRoleArn !== undefined &&
        input.ServiceAccessRoleArn !== null && { ServiceAccessRoleArn: input.ServiceAccessRoleArn })), (input.TimestampColumnName !== undefined &&
        input.TimestampColumnName !== null && { TimestampColumnName: input.TimestampColumnName })), (input.UseCsvNoSupValue !== undefined &&
        input.UseCsvNoSupValue !== null && { UseCsvNoSupValue: input.UseCsvNoSupValue }));
};
var serializeAws_json1_1SourceIdsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1StartReplicationTaskAssessmentMessage = function (input, context) {
    return __assign({}, (input.ReplicationTaskArn !== undefined &&
        input.ReplicationTaskArn !== null && { ReplicationTaskArn: input.ReplicationTaskArn }));
};
var serializeAws_json1_1StartReplicationTaskAssessmentRunMessage = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AssessmentRunName !== undefined &&
        input.AssessmentRunName !== null && { AssessmentRunName: input.AssessmentRunName })), (input.Exclude !== undefined &&
        input.Exclude !== null && { Exclude: serializeAws_json1_1ExcludeTestList(input.Exclude, context) })), (input.IncludeOnly !== undefined &&
        input.IncludeOnly !== null && { IncludeOnly: serializeAws_json1_1IncludeTestList(input.IncludeOnly, context) })), (input.ReplicationTaskArn !== undefined &&
        input.ReplicationTaskArn !== null && { ReplicationTaskArn: input.ReplicationTaskArn })), (input.ResultEncryptionMode !== undefined &&
        input.ResultEncryptionMode !== null && { ResultEncryptionMode: input.ResultEncryptionMode })), (input.ResultKmsKeyArn !== undefined &&
        input.ResultKmsKeyArn !== null && { ResultKmsKeyArn: input.ResultKmsKeyArn })), (input.ResultLocationBucket !== undefined &&
        input.ResultLocationBucket !== null && { ResultLocationBucket: input.ResultLocationBucket })), (input.ResultLocationFolder !== undefined &&
        input.ResultLocationFolder !== null && { ResultLocationFolder: input.ResultLocationFolder })), (input.ServiceAccessRoleArn !== undefined &&
        input.ServiceAccessRoleArn !== null && { ServiceAccessRoleArn: input.ServiceAccessRoleArn }));
};
var serializeAws_json1_1StartReplicationTaskMessage = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.CdcStartPosition !== undefined &&
        input.CdcStartPosition !== null && { CdcStartPosition: input.CdcStartPosition })), (input.CdcStartTime !== undefined &&
        input.CdcStartTime !== null && { CdcStartTime: Math.round(input.CdcStartTime.getTime() / 1000) })), (input.CdcStopPosition !== undefined &&
        input.CdcStopPosition !== null && { CdcStopPosition: input.CdcStopPosition })), (input.ReplicationTaskArn !== undefined &&
        input.ReplicationTaskArn !== null && { ReplicationTaskArn: input.ReplicationTaskArn })), (input.StartReplicationTaskType !== undefined &&
        input.StartReplicationTaskType !== null && { StartReplicationTaskType: input.StartReplicationTaskType }));
};
var serializeAws_json1_1StopReplicationTaskMessage = function (input, context) {
    return __assign({}, (input.ReplicationTaskArn !== undefined &&
        input.ReplicationTaskArn !== null && { ReplicationTaskArn: input.ReplicationTaskArn }));
};
var serializeAws_json1_1SubnetIdentifierList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1SybaseSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName })), (input.Password !== undefined && input.Password !== null && { Password: input.Password })), (input.Port !== undefined && input.Port !== null && { Port: input.Port })), (input.SecretsManagerAccessRoleArn !== undefined &&
        input.SecretsManagerAccessRoleArn !== null && { SecretsManagerAccessRoleArn: input.SecretsManagerAccessRoleArn })), (input.SecretsManagerSecretId !== undefined &&
        input.SecretsManagerSecretId !== null && { SecretsManagerSecretId: input.SecretsManagerSecretId })), (input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName })), (input.Username !== undefined && input.Username !== null && { Username: input.Username }));
};
var serializeAws_json1_1TableListToReload = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1TableToReload(entry, context);
    });
};
var serializeAws_json1_1TableToReload = function (input, context) {
    return __assign(__assign({}, (input.SchemaName !== undefined && input.SchemaName !== null && { SchemaName: input.SchemaName })), (input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }));
};
var serializeAws_json1_1Tag = function (input, context) {
    return __assign(__assign({}, (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
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
var serializeAws_json1_1TestConnectionMessage = function (input, context) {
    return __assign(__assign({}, (input.EndpointArn !== undefined && input.EndpointArn !== null && { EndpointArn: input.EndpointArn })), (input.ReplicationInstanceArn !== undefined &&
        input.ReplicationInstanceArn !== null && { ReplicationInstanceArn: input.ReplicationInstanceArn }));
};
var serializeAws_json1_1VpcSecurityGroupIdList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1AccessDeniedFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1AccountQuota = function (output, context) {
    return {
        AccountQuotaName: output.AccountQuotaName !== undefined && output.AccountQuotaName !== null ? output.AccountQuotaName : undefined,
        Max: output.Max !== undefined && output.Max !== null ? output.Max : undefined,
        Used: output.Used !== undefined && output.Used !== null ? output.Used : undefined,
    };
};
var deserializeAws_json1_1AccountQuotaList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AccountQuota(entry, context);
    });
};
var deserializeAws_json1_1AddTagsToResourceResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1ApplyPendingMaintenanceActionResponse = function (output, context) {
    return {
        ResourcePendingMaintenanceActions: output.ResourcePendingMaintenanceActions !== undefined && output.ResourcePendingMaintenanceActions !== null
            ? deserializeAws_json1_1ResourcePendingMaintenanceActions(output.ResourcePendingMaintenanceActions, context)
            : undefined,
    };
};
var deserializeAws_json1_1AvailabilityZone = function (output, context) {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_json1_1AvailabilityZonesList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1CancelReplicationTaskAssessmentRunResponse = function (output, context) {
    return {
        ReplicationTaskAssessmentRun: output.ReplicationTaskAssessmentRun !== undefined && output.ReplicationTaskAssessmentRun !== null
            ? deserializeAws_json1_1ReplicationTaskAssessmentRun(output.ReplicationTaskAssessmentRun, context)
            : undefined,
    };
};
var deserializeAws_json1_1Certificate = function (output, context) {
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
var deserializeAws_json1_1CertificateList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Certificate(entry, context);
    });
};
var deserializeAws_json1_1Connection = function (output, context) {
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
var deserializeAws_json1_1ConnectionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Connection(entry, context);
    });
};
var deserializeAws_json1_1CreateEndpointResponse = function (output, context) {
    return {
        Endpoint: output.Endpoint !== undefined && output.Endpoint !== null
            ? deserializeAws_json1_1Endpoint(output.Endpoint, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateEventSubscriptionResponse = function (output, context) {
    return {
        EventSubscription: output.EventSubscription !== undefined && output.EventSubscription !== null
            ? deserializeAws_json1_1EventSubscription(output.EventSubscription, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateReplicationInstanceResponse = function (output, context) {
    return {
        ReplicationInstance: output.ReplicationInstance !== undefined && output.ReplicationInstance !== null
            ? deserializeAws_json1_1ReplicationInstance(output.ReplicationInstance, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateReplicationSubnetGroupResponse = function (output, context) {
    return {
        ReplicationSubnetGroup: output.ReplicationSubnetGroup !== undefined && output.ReplicationSubnetGroup !== null
            ? deserializeAws_json1_1ReplicationSubnetGroup(output.ReplicationSubnetGroup, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateReplicationTaskResponse = function (output, context) {
    return {
        ReplicationTask: output.ReplicationTask !== undefined && output.ReplicationTask !== null
            ? deserializeAws_json1_1ReplicationTask(output.ReplicationTask, context)
            : undefined,
    };
};
var deserializeAws_json1_1DeleteCertificateResponse = function (output, context) {
    return {
        Certificate: output.Certificate !== undefined && output.Certificate !== null
            ? deserializeAws_json1_1Certificate(output.Certificate, context)
            : undefined,
    };
};
var deserializeAws_json1_1DeleteConnectionResponse = function (output, context) {
    return {
        Connection: output.Connection !== undefined && output.Connection !== null
            ? deserializeAws_json1_1Connection(output.Connection, context)
            : undefined,
    };
};
var deserializeAws_json1_1DeleteEndpointResponse = function (output, context) {
    return {
        Endpoint: output.Endpoint !== undefined && output.Endpoint !== null
            ? deserializeAws_json1_1Endpoint(output.Endpoint, context)
            : undefined,
    };
};
var deserializeAws_json1_1DeleteEventSubscriptionResponse = function (output, context) {
    return {
        EventSubscription: output.EventSubscription !== undefined && output.EventSubscription !== null
            ? deserializeAws_json1_1EventSubscription(output.EventSubscription, context)
            : undefined,
    };
};
var deserializeAws_json1_1DeleteReplicationInstanceResponse = function (output, context) {
    return {
        ReplicationInstance: output.ReplicationInstance !== undefined && output.ReplicationInstance !== null
            ? deserializeAws_json1_1ReplicationInstance(output.ReplicationInstance, context)
            : undefined,
    };
};
var deserializeAws_json1_1DeleteReplicationSubnetGroupResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeleteReplicationTaskAssessmentRunResponse = function (output, context) {
    return {
        ReplicationTaskAssessmentRun: output.ReplicationTaskAssessmentRun !== undefined && output.ReplicationTaskAssessmentRun !== null
            ? deserializeAws_json1_1ReplicationTaskAssessmentRun(output.ReplicationTaskAssessmentRun, context)
            : undefined,
    };
};
var deserializeAws_json1_1DeleteReplicationTaskResponse = function (output, context) {
    return {
        ReplicationTask: output.ReplicationTask !== undefined && output.ReplicationTask !== null
            ? deserializeAws_json1_1ReplicationTask(output.ReplicationTask, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeAccountAttributesResponse = function (output, context) {
    return {
        AccountQuotas: output.AccountQuotas !== undefined && output.AccountQuotas !== null
            ? deserializeAws_json1_1AccountQuotaList(output.AccountQuotas, context)
            : undefined,
        UniqueAccountIdentifier: output.UniqueAccountIdentifier !== undefined && output.UniqueAccountIdentifier !== null
            ? output.UniqueAccountIdentifier
            : undefined,
    };
};
var deserializeAws_json1_1DescribeApplicableIndividualAssessmentsResponse = function (output, context) {
    return {
        IndividualAssessmentNames: output.IndividualAssessmentNames !== undefined && output.IndividualAssessmentNames !== null
            ? deserializeAws_json1_1IndividualAssessmentNameList(output.IndividualAssessmentNames, context)
            : undefined,
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
    };
};
var deserializeAws_json1_1DescribeCertificatesResponse = function (output, context) {
    return {
        Certificates: output.Certificates !== undefined && output.Certificates !== null
            ? deserializeAws_json1_1CertificateList(output.Certificates, context)
            : undefined,
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
    };
};
var deserializeAws_json1_1DescribeConnectionsResponse = function (output, context) {
    return {
        Connections: output.Connections !== undefined && output.Connections !== null
            ? deserializeAws_json1_1ConnectionList(output.Connections, context)
            : undefined,
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
    };
};
var deserializeAws_json1_1DescribeEndpointSettingsResponse = function (output, context) {
    return {
        EndpointSettings: output.EndpointSettings !== undefined && output.EndpointSettings !== null
            ? deserializeAws_json1_1EndpointSettingsList(output.EndpointSettings, context)
            : undefined,
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
    };
};
var deserializeAws_json1_1DescribeEndpointsResponse = function (output, context) {
    return {
        Endpoints: output.Endpoints !== undefined && output.Endpoints !== null
            ? deserializeAws_json1_1EndpointList(output.Endpoints, context)
            : undefined,
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
    };
};
var deserializeAws_json1_1DescribeEndpointTypesResponse = function (output, context) {
    return {
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        SupportedEndpointTypes: output.SupportedEndpointTypes !== undefined && output.SupportedEndpointTypes !== null
            ? deserializeAws_json1_1SupportedEndpointTypeList(output.SupportedEndpointTypes, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeEventCategoriesResponse = function (output, context) {
    return {
        EventCategoryGroupList: output.EventCategoryGroupList !== undefined && output.EventCategoryGroupList !== null
            ? deserializeAws_json1_1EventCategoryGroupList(output.EventCategoryGroupList, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeEventsResponse = function (output, context) {
    return {
        Events: output.Events !== undefined && output.Events !== null
            ? deserializeAws_json1_1EventList(output.Events, context)
            : undefined,
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
    };
};
var deserializeAws_json1_1DescribeEventSubscriptionsResponse = function (output, context) {
    return {
        EventSubscriptionsList: output.EventSubscriptionsList !== undefined && output.EventSubscriptionsList !== null
            ? deserializeAws_json1_1EventSubscriptionsList(output.EventSubscriptionsList, context)
            : undefined,
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
    };
};
var deserializeAws_json1_1DescribeOrderableReplicationInstancesResponse = function (output, context) {
    return {
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        OrderableReplicationInstances: output.OrderableReplicationInstances !== undefined && output.OrderableReplicationInstances !== null
            ? deserializeAws_json1_1OrderableReplicationInstanceList(output.OrderableReplicationInstances, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribePendingMaintenanceActionsResponse = function (output, context) {
    return {
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        PendingMaintenanceActions: output.PendingMaintenanceActions !== undefined && output.PendingMaintenanceActions !== null
            ? deserializeAws_json1_1PendingMaintenanceActions(output.PendingMaintenanceActions, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeRefreshSchemasStatusResponse = function (output, context) {
    return {
        RefreshSchemasStatus: output.RefreshSchemasStatus !== undefined && output.RefreshSchemasStatus !== null
            ? deserializeAws_json1_1RefreshSchemasStatus(output.RefreshSchemasStatus, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeReplicationInstancesResponse = function (output, context) {
    return {
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        ReplicationInstances: output.ReplicationInstances !== undefined && output.ReplicationInstances !== null
            ? deserializeAws_json1_1ReplicationInstanceList(output.ReplicationInstances, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeReplicationInstanceTaskLogsResponse = function (output, context) {
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
var deserializeAws_json1_1DescribeReplicationSubnetGroupsResponse = function (output, context) {
    return {
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        ReplicationSubnetGroups: output.ReplicationSubnetGroups !== undefined && output.ReplicationSubnetGroups !== null
            ? deserializeAws_json1_1ReplicationSubnetGroups(output.ReplicationSubnetGroups, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeReplicationTaskAssessmentResultsResponse = function (output, context) {
    return {
        BucketName: output.BucketName !== undefined && output.BucketName !== null ? output.BucketName : undefined,
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        ReplicationTaskAssessmentResults: output.ReplicationTaskAssessmentResults !== undefined && output.ReplicationTaskAssessmentResults !== null
            ? deserializeAws_json1_1ReplicationTaskAssessmentResultList(output.ReplicationTaskAssessmentResults, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeReplicationTaskAssessmentRunsResponse = function (output, context) {
    return {
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        ReplicationTaskAssessmentRuns: output.ReplicationTaskAssessmentRuns !== undefined && output.ReplicationTaskAssessmentRuns !== null
            ? deserializeAws_json1_1ReplicationTaskAssessmentRunList(output.ReplicationTaskAssessmentRuns, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsResponse = function (output, context) {
    return {
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        ReplicationTaskIndividualAssessments: output.ReplicationTaskIndividualAssessments !== undefined && output.ReplicationTaskIndividualAssessments !== null
            ? deserializeAws_json1_1ReplicationTaskIndividualAssessmentList(output.ReplicationTaskIndividualAssessments, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeReplicationTasksResponse = function (output, context) {
    return {
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        ReplicationTasks: output.ReplicationTasks !== undefined && output.ReplicationTasks !== null
            ? deserializeAws_json1_1ReplicationTaskList(output.ReplicationTasks, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeSchemasResponse = function (output, context) {
    return {
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        Schemas: output.Schemas !== undefined && output.Schemas !== null
            ? deserializeAws_json1_1SchemaList(output.Schemas, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeTableStatisticsResponse = function (output, context) {
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
var deserializeAws_json1_1DmsTransferSettings = function (output, context) {
    return {
        BucketName: output.BucketName !== undefined && output.BucketName !== null ? output.BucketName : undefined,
        ServiceAccessRoleArn: output.ServiceAccessRoleArn !== undefined && output.ServiceAccessRoleArn !== null
            ? output.ServiceAccessRoleArn
            : undefined,
    };
};
var deserializeAws_json1_1DocDbSettings = function (output, context) {
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
var deserializeAws_json1_1DynamoDbSettings = function (output, context) {
    return {
        ServiceAccessRoleArn: output.ServiceAccessRoleArn !== undefined && output.ServiceAccessRoleArn !== null
            ? output.ServiceAccessRoleArn
            : undefined,
    };
};
var deserializeAws_json1_1ElasticsearchSettings = function (output, context) {
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
var deserializeAws_json1_1Endpoint = function (output, context) {
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
var deserializeAws_json1_1EndpointList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Endpoint(entry, context);
    });
};
var deserializeAws_json1_1EndpointSetting = function (output, context) {
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
var deserializeAws_json1_1EndpointSettingEnumValues = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1EndpointSettingsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EndpointSetting(entry, context);
    });
};
var deserializeAws_json1_1Event = function (output, context) {
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
var deserializeAws_json1_1EventCategoriesList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1EventCategoryGroup = function (output, context) {
    return {
        EventCategories: output.EventCategories !== undefined && output.EventCategories !== null
            ? deserializeAws_json1_1EventCategoriesList(output.EventCategories, context)
            : undefined,
        SourceType: output.SourceType !== undefined && output.SourceType !== null ? output.SourceType : undefined,
    };
};
var deserializeAws_json1_1EventCategoryGroupList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EventCategoryGroup(entry, context);
    });
};
var deserializeAws_json1_1EventList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Event(entry, context);
    });
};
var deserializeAws_json1_1EventSubscription = function (output, context) {
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
var deserializeAws_json1_1EventSubscriptionsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EventSubscription(entry, context);
    });
};
var deserializeAws_json1_1IBMDb2Settings = function (output, context) {
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
var deserializeAws_json1_1ImportCertificateResponse = function (output, context) {
    return {
        Certificate: output.Certificate !== undefined && output.Certificate !== null
            ? deserializeAws_json1_1Certificate(output.Certificate, context)
            : undefined,
    };
};
var deserializeAws_json1_1IndividualAssessmentNameList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1InsufficientResourceCapacityFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidCertificateFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidResourceStateFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidSubnet = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1KafkaSettings = function (output, context) {
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
var deserializeAws_json1_1KinesisSettings = function (output, context) {
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
var deserializeAws_json1_1KMSAccessDeniedFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1KMSDisabledFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1KMSFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1KMSInvalidStateFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1KMSKeyNotAccessibleFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1KMSNotFoundFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1KMSThrottlingFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ListTagsForResourceResponse = function (output, context) {
    return {
        TagList: output.TagList !== undefined && output.TagList !== null
            ? deserializeAws_json1_1TagList(output.TagList, context)
            : undefined,
    };
};
var deserializeAws_json1_1MicrosoftSQLServerSettings = function (output, context) {
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
var deserializeAws_json1_1ModifyEndpointResponse = function (output, context) {
    return {
        Endpoint: output.Endpoint !== undefined && output.Endpoint !== null
            ? deserializeAws_json1_1Endpoint(output.Endpoint, context)
            : undefined,
    };
};
var deserializeAws_json1_1ModifyEventSubscriptionResponse = function (output, context) {
    return {
        EventSubscription: output.EventSubscription !== undefined && output.EventSubscription !== null
            ? deserializeAws_json1_1EventSubscription(output.EventSubscription, context)
            : undefined,
    };
};
var deserializeAws_json1_1ModifyReplicationInstanceResponse = function (output, context) {
    return {
        ReplicationInstance: output.ReplicationInstance !== undefined && output.ReplicationInstance !== null
            ? deserializeAws_json1_1ReplicationInstance(output.ReplicationInstance, context)
            : undefined,
    };
};
var deserializeAws_json1_1ModifyReplicationSubnetGroupResponse = function (output, context) {
    return {
        ReplicationSubnetGroup: output.ReplicationSubnetGroup !== undefined && output.ReplicationSubnetGroup !== null
            ? deserializeAws_json1_1ReplicationSubnetGroup(output.ReplicationSubnetGroup, context)
            : undefined,
    };
};
var deserializeAws_json1_1ModifyReplicationTaskResponse = function (output, context) {
    return {
        ReplicationTask: output.ReplicationTask !== undefined && output.ReplicationTask !== null
            ? deserializeAws_json1_1ReplicationTask(output.ReplicationTask, context)
            : undefined,
    };
};
var deserializeAws_json1_1MongoDbSettings = function (output, context) {
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
var deserializeAws_json1_1MoveReplicationTaskResponse = function (output, context) {
    return {
        ReplicationTask: output.ReplicationTask !== undefined && output.ReplicationTask !== null
            ? deserializeAws_json1_1ReplicationTask(output.ReplicationTask, context)
            : undefined,
    };
};
var deserializeAws_json1_1MySQLSettings = function (output, context) {
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
var deserializeAws_json1_1NeptuneSettings = function (output, context) {
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
var deserializeAws_json1_1OracleSettings = function (output, context) {
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
var deserializeAws_json1_1OrderableReplicationInstance = function (output, context) {
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
var deserializeAws_json1_1OrderableReplicationInstanceList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OrderableReplicationInstance(entry, context);
    });
};
var deserializeAws_json1_1PendingMaintenanceAction = function (output, context) {
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
var deserializeAws_json1_1PendingMaintenanceActionDetails = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PendingMaintenanceAction(entry, context);
    });
};
var deserializeAws_json1_1PendingMaintenanceActions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResourcePendingMaintenanceActions(entry, context);
    });
};
var deserializeAws_json1_1PostgreSQLSettings = function (output, context) {
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
var deserializeAws_json1_1RebootReplicationInstanceResponse = function (output, context) {
    return {
        ReplicationInstance: output.ReplicationInstance !== undefined && output.ReplicationInstance !== null
            ? deserializeAws_json1_1ReplicationInstance(output.ReplicationInstance, context)
            : undefined,
    };
};
var deserializeAws_json1_1RedshiftSettings = function (output, context) {
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
var deserializeAws_json1_1RefreshSchemasResponse = function (output, context) {
    return {
        RefreshSchemasStatus: output.RefreshSchemasStatus !== undefined && output.RefreshSchemasStatus !== null
            ? deserializeAws_json1_1RefreshSchemasStatus(output.RefreshSchemasStatus, context)
            : undefined,
    };
};
var deserializeAws_json1_1RefreshSchemasStatus = function (output, context) {
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
var deserializeAws_json1_1ReloadTablesResponse = function (output, context) {
    return {
        ReplicationTaskArn: output.ReplicationTaskArn !== undefined && output.ReplicationTaskArn !== null
            ? output.ReplicationTaskArn
            : undefined,
    };
};
var deserializeAws_json1_1RemoveTagsFromResourceResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1ReplicationInstance = function (output, context) {
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
var deserializeAws_json1_1ReplicationInstanceList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReplicationInstance(entry, context);
    });
};
var deserializeAws_json1_1ReplicationInstancePrivateIpAddressList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1ReplicationInstancePublicIpAddressList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1ReplicationInstanceTaskLog = function (output, context) {
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
var deserializeAws_json1_1ReplicationInstanceTaskLogsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReplicationInstanceTaskLog(entry, context);
    });
};
var deserializeAws_json1_1ReplicationPendingModifiedValues = function (output, context) {
    return {
        AllocatedStorage: output.AllocatedStorage !== undefined && output.AllocatedStorage !== null ? output.AllocatedStorage : undefined,
        EngineVersion: output.EngineVersion !== undefined && output.EngineVersion !== null ? output.EngineVersion : undefined,
        MultiAZ: output.MultiAZ !== undefined && output.MultiAZ !== null ? output.MultiAZ : undefined,
        ReplicationInstanceClass: output.ReplicationInstanceClass !== undefined && output.ReplicationInstanceClass !== null
            ? output.ReplicationInstanceClass
            : undefined,
    };
};
var deserializeAws_json1_1ReplicationSubnetGroup = function (output, context) {
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
var deserializeAws_json1_1ReplicationSubnetGroupDoesNotCoverEnoughAZs = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ReplicationSubnetGroups = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReplicationSubnetGroup(entry, context);
    });
};
var deserializeAws_json1_1ReplicationTask = function (output, context) {
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
var deserializeAws_json1_1ReplicationTaskAssessmentResult = function (output, context) {
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
var deserializeAws_json1_1ReplicationTaskAssessmentResultList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReplicationTaskAssessmentResult(entry, context);
    });
};
var deserializeAws_json1_1ReplicationTaskAssessmentRun = function (output, context) {
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
var deserializeAws_json1_1ReplicationTaskAssessmentRunList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReplicationTaskAssessmentRun(entry, context);
    });
};
var deserializeAws_json1_1ReplicationTaskAssessmentRunProgress = function (output, context) {
    return {
        IndividualAssessmentCompletedCount: output.IndividualAssessmentCompletedCount !== undefined && output.IndividualAssessmentCompletedCount !== null
            ? output.IndividualAssessmentCompletedCount
            : undefined,
        IndividualAssessmentCount: output.IndividualAssessmentCount !== undefined && output.IndividualAssessmentCount !== null
            ? output.IndividualAssessmentCount
            : undefined,
    };
};
var deserializeAws_json1_1ReplicationTaskIndividualAssessment = function (output, context) {
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
var deserializeAws_json1_1ReplicationTaskIndividualAssessmentList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReplicationTaskIndividualAssessment(entry, context);
    });
};
var deserializeAws_json1_1ReplicationTaskList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReplicationTask(entry, context);
    });
};
var deserializeAws_json1_1ReplicationTaskStats = function (output, context) {
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
var deserializeAws_json1_1ResourceAlreadyExistsFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        resourceArn: output.resourceArn !== undefined && output.resourceArn !== null ? output.resourceArn : undefined,
    };
};
var deserializeAws_json1_1ResourceNotFoundFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ResourcePendingMaintenanceActions = function (output, context) {
    return {
        PendingMaintenanceActionDetails: output.PendingMaintenanceActionDetails !== undefined && output.PendingMaintenanceActionDetails !== null
            ? deserializeAws_json1_1PendingMaintenanceActionDetails(output.PendingMaintenanceActionDetails, context)
            : undefined,
        ResourceIdentifier: output.ResourceIdentifier !== undefined && output.ResourceIdentifier !== null
            ? output.ResourceIdentifier
            : undefined,
    };
};
var deserializeAws_json1_1ResourceQuotaExceededFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1S3AccessDeniedFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1S3ResourceNotFoundFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1S3Settings = function (output, context) {
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
var deserializeAws_json1_1SchemaList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1SNSInvalidTopicFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1SNSNoAuthorizationFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1SourceIdsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1StartReplicationTaskAssessmentResponse = function (output, context) {
    return {
        ReplicationTask: output.ReplicationTask !== undefined && output.ReplicationTask !== null
            ? deserializeAws_json1_1ReplicationTask(output.ReplicationTask, context)
            : undefined,
    };
};
var deserializeAws_json1_1StartReplicationTaskAssessmentRunResponse = function (output, context) {
    return {
        ReplicationTaskAssessmentRun: output.ReplicationTaskAssessmentRun !== undefined && output.ReplicationTaskAssessmentRun !== null
            ? deserializeAws_json1_1ReplicationTaskAssessmentRun(output.ReplicationTaskAssessmentRun, context)
            : undefined,
    };
};
var deserializeAws_json1_1StartReplicationTaskResponse = function (output, context) {
    return {
        ReplicationTask: output.ReplicationTask !== undefined && output.ReplicationTask !== null
            ? deserializeAws_json1_1ReplicationTask(output.ReplicationTask, context)
            : undefined,
    };
};
var deserializeAws_json1_1StopReplicationTaskResponse = function (output, context) {
    return {
        ReplicationTask: output.ReplicationTask !== undefined && output.ReplicationTask !== null
            ? deserializeAws_json1_1ReplicationTask(output.ReplicationTask, context)
            : undefined,
    };
};
var deserializeAws_json1_1StorageQuotaExceededFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1Subnet = function (output, context) {
    return {
        SubnetAvailabilityZone: output.SubnetAvailabilityZone !== undefined && output.SubnetAvailabilityZone !== null
            ? deserializeAws_json1_1AvailabilityZone(output.SubnetAvailabilityZone, context)
            : undefined,
        SubnetIdentifier: output.SubnetIdentifier !== undefined && output.SubnetIdentifier !== null ? output.SubnetIdentifier : undefined,
        SubnetStatus: output.SubnetStatus !== undefined && output.SubnetStatus !== null ? output.SubnetStatus : undefined,
    };
};
var deserializeAws_json1_1SubnetAlreadyInUse = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1SubnetList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Subnet(entry, context);
    });
};
var deserializeAws_json1_1SupportedEndpointType = function (output, context) {
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
var deserializeAws_json1_1SupportedEndpointTypeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SupportedEndpointType(entry, context);
    });
};
var deserializeAws_json1_1SybaseSettings = function (output, context) {
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
var deserializeAws_json1_1TableStatistics = function (output, context) {
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
var deserializeAws_json1_1TableStatisticsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TableStatistics(entry, context);
    });
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
var deserializeAws_json1_1TestConnectionResponse = function (output, context) {
    return {
        Connection: output.Connection !== undefined && output.Connection !== null
            ? deserializeAws_json1_1Connection(output.Connection, context)
            : undefined,
    };
};
var deserializeAws_json1_1UpgradeDependencyFailureFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1VpcSecurityGroupMembership = function (output, context) {
    return {
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        VpcSecurityGroupId: output.VpcSecurityGroupId !== undefined && output.VpcSecurityGroupId !== null
            ? output.VpcSecurityGroupId
            : undefined,
    };
};
var deserializeAws_json1_1VpcSecurityGroupMembershipList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1VpcSecurityGroupMembership(entry, context);
    });
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