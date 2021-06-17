import { __assign, __awaiter, __generator, __read, __values } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, getArrayIfSingleItem as __getArrayIfSingleItem, getValueFromTextNode as __getValueFromTextNode, } from "@aws-sdk/smithy-client";
import { decodeHTML } from "entities";
import { parse as xmlParse } from "fast-xml-parser";
export var serializeAws_queryAcceptReservedNodeExchangeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryAcceptReservedNodeExchangeInputMessage(input, context)), { Action: "AcceptReservedNodeExchange", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryAddPartnerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryPartnerIntegrationInputMessage(input, context)), { Action: "AddPartner", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryAuthorizeClusterSecurityGroupIngressCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryAuthorizeClusterSecurityGroupIngressMessage(input, context)), { Action: "AuthorizeClusterSecurityGroupIngress", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryAuthorizeEndpointAccessCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryAuthorizeEndpointAccessMessage(input, context)), { Action: "AuthorizeEndpointAccess", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryAuthorizeSnapshotAccessCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryAuthorizeSnapshotAccessMessage(input, context)), { Action: "AuthorizeSnapshotAccess", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryBatchDeleteClusterSnapshotsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryBatchDeleteClusterSnapshotsRequest(input, context)), { Action: "BatchDeleteClusterSnapshots", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryBatchModifyClusterSnapshotsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryBatchModifyClusterSnapshotsMessage(input, context)), { Action: "BatchModifyClusterSnapshots", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCancelResizeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCancelResizeMessage(input, context)), { Action: "CancelResize", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCopyClusterSnapshotCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCopyClusterSnapshotMessage(input, context)), { Action: "CopyClusterSnapshot", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateClusterMessage(input, context)), { Action: "CreateCluster", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateClusterParameterGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateClusterParameterGroupMessage(input, context)), { Action: "CreateClusterParameterGroup", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateClusterSecurityGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateClusterSecurityGroupMessage(input, context)), { Action: "CreateClusterSecurityGroup", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateClusterSnapshotCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateClusterSnapshotMessage(input, context)), { Action: "CreateClusterSnapshot", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateClusterSubnetGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateClusterSubnetGroupMessage(input, context)), { Action: "CreateClusterSubnetGroup", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateEndpointAccessCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateEndpointAccessMessage(input, context)), { Action: "CreateEndpointAccess", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateEventSubscriptionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateEventSubscriptionMessage(input, context)), { Action: "CreateEventSubscription", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateHsmClientCertificateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateHsmClientCertificateMessage(input, context)), { Action: "CreateHsmClientCertificate", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateHsmConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateHsmConfigurationMessage(input, context)), { Action: "CreateHsmConfiguration", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateScheduledActionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateScheduledActionMessage(input, context)), { Action: "CreateScheduledAction", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateSnapshotCopyGrantCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateSnapshotCopyGrantMessage(input, context)), { Action: "CreateSnapshotCopyGrant", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateSnapshotScheduleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateSnapshotScheduleMessage(input, context)), { Action: "CreateSnapshotSchedule", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateTagsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateTagsMessage(input, context)), { Action: "CreateTags", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateUsageLimitCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateUsageLimitMessage(input, context)), { Action: "CreateUsageLimit", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteClusterMessage(input, context)), { Action: "DeleteCluster", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteClusterParameterGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteClusterParameterGroupMessage(input, context)), { Action: "DeleteClusterParameterGroup", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteClusterSecurityGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteClusterSecurityGroupMessage(input, context)), { Action: "DeleteClusterSecurityGroup", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteClusterSnapshotCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteClusterSnapshotMessage(input, context)), { Action: "DeleteClusterSnapshot", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteClusterSubnetGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteClusterSubnetGroupMessage(input, context)), { Action: "DeleteClusterSubnetGroup", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteEndpointAccessCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteEndpointAccessMessage(input, context)), { Action: "DeleteEndpointAccess", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteEventSubscriptionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteEventSubscriptionMessage(input, context)), { Action: "DeleteEventSubscription", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteHsmClientCertificateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteHsmClientCertificateMessage(input, context)), { Action: "DeleteHsmClientCertificate", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteHsmConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteHsmConfigurationMessage(input, context)), { Action: "DeleteHsmConfiguration", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeletePartnerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryPartnerIntegrationInputMessage(input, context)), { Action: "DeletePartner", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteScheduledActionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteScheduledActionMessage(input, context)), { Action: "DeleteScheduledAction", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteSnapshotCopyGrantCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteSnapshotCopyGrantMessage(input, context)), { Action: "DeleteSnapshotCopyGrant", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteSnapshotScheduleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteSnapshotScheduleMessage(input, context)), { Action: "DeleteSnapshotSchedule", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteTagsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteTagsMessage(input, context)), { Action: "DeleteTags", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteUsageLimitCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteUsageLimitMessage(input, context)), { Action: "DeleteUsageLimit", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeAccountAttributesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeAccountAttributesMessage(input, context)), { Action: "DescribeAccountAttributes", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeClusterDbRevisionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeClusterDbRevisionsMessage(input, context)), { Action: "DescribeClusterDbRevisions", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeClusterParameterGroupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeClusterParameterGroupsMessage(input, context)), { Action: "DescribeClusterParameterGroups", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeClusterParametersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeClusterParametersMessage(input, context)), { Action: "DescribeClusterParameters", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeClustersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeClustersMessage(input, context)), { Action: "DescribeClusters", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeClusterSecurityGroupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeClusterSecurityGroupsMessage(input, context)), { Action: "DescribeClusterSecurityGroups", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeClusterSnapshotsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeClusterSnapshotsMessage(input, context)), { Action: "DescribeClusterSnapshots", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeClusterSubnetGroupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeClusterSubnetGroupsMessage(input, context)), { Action: "DescribeClusterSubnetGroups", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeClusterTracksCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeClusterTracksMessage(input, context)), { Action: "DescribeClusterTracks", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeClusterVersionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeClusterVersionsMessage(input, context)), { Action: "DescribeClusterVersions", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeDefaultClusterParametersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeDefaultClusterParametersMessage(input, context)), { Action: "DescribeDefaultClusterParameters", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeEndpointAccessCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeEndpointAccessMessage(input, context)), { Action: "DescribeEndpointAccess", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeEndpointAuthorizationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeEndpointAuthorizationMessage(input, context)), { Action: "DescribeEndpointAuthorization", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeEventCategoriesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeEventCategoriesMessage(input, context)), { Action: "DescribeEventCategories", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeEventsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeEventsMessage(input, context)), { Action: "DescribeEvents", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeEventSubscriptionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeEventSubscriptionsMessage(input, context)), { Action: "DescribeEventSubscriptions", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeHsmClientCertificatesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeHsmClientCertificatesMessage(input, context)), { Action: "DescribeHsmClientCertificates", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeHsmConfigurationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeHsmConfigurationsMessage(input, context)), { Action: "DescribeHsmConfigurations", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeLoggingStatusCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeLoggingStatusMessage(input, context)), { Action: "DescribeLoggingStatus", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeNodeConfigurationOptionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeNodeConfigurationOptionsMessage(input, context)), { Action: "DescribeNodeConfigurationOptions", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeOrderableClusterOptionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeOrderableClusterOptionsMessage(input, context)), { Action: "DescribeOrderableClusterOptions", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribePartnersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribePartnersInputMessage(input, context)), { Action: "DescribePartners", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeReservedNodeOfferingsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeReservedNodeOfferingsMessage(input, context)), { Action: "DescribeReservedNodeOfferings", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeReservedNodesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeReservedNodesMessage(input, context)), { Action: "DescribeReservedNodes", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeResizeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeResizeMessage(input, context)), { Action: "DescribeResize", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeScheduledActionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeScheduledActionsMessage(input, context)), { Action: "DescribeScheduledActions", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeSnapshotCopyGrantsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeSnapshotCopyGrantsMessage(input, context)), { Action: "DescribeSnapshotCopyGrants", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeSnapshotSchedulesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeSnapshotSchedulesMessage(input, context)), { Action: "DescribeSnapshotSchedules", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeStorageCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString({
            Action: "DescribeStorage",
            Version: "2012-12-01",
        });
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeTableRestoreStatusCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeTableRestoreStatusMessage(input, context)), { Action: "DescribeTableRestoreStatus", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeTagsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeTagsMessage(input, context)), { Action: "DescribeTags", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeUsageLimitsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeUsageLimitsMessage(input, context)), { Action: "DescribeUsageLimits", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDisableLoggingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDisableLoggingMessage(input, context)), { Action: "DisableLogging", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDisableSnapshotCopyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDisableSnapshotCopyMessage(input, context)), { Action: "DisableSnapshotCopy", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryEnableLoggingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryEnableLoggingMessage(input, context)), { Action: "EnableLogging", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryEnableSnapshotCopyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryEnableSnapshotCopyMessage(input, context)), { Action: "EnableSnapshotCopy", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetClusterCredentialsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGetClusterCredentialsMessage(input, context)), { Action: "GetClusterCredentials", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetReservedNodeExchangeOfferingsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGetReservedNodeExchangeOfferingsInputMessage(input, context)), { Action: "GetReservedNodeExchangeOfferings", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryModifyAquaConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryModifyAquaInputMessage(input, context)), { Action: "ModifyAquaConfiguration", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryModifyClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryModifyClusterMessage(input, context)), { Action: "ModifyCluster", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryModifyClusterDbRevisionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryModifyClusterDbRevisionMessage(input, context)), { Action: "ModifyClusterDbRevision", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryModifyClusterIamRolesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryModifyClusterIamRolesMessage(input, context)), { Action: "ModifyClusterIamRoles", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryModifyClusterMaintenanceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryModifyClusterMaintenanceMessage(input, context)), { Action: "ModifyClusterMaintenance", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryModifyClusterParameterGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryModifyClusterParameterGroupMessage(input, context)), { Action: "ModifyClusterParameterGroup", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryModifyClusterSnapshotCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryModifyClusterSnapshotMessage(input, context)), { Action: "ModifyClusterSnapshot", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryModifyClusterSnapshotScheduleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryModifyClusterSnapshotScheduleMessage(input, context)), { Action: "ModifyClusterSnapshotSchedule", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryModifyClusterSubnetGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryModifyClusterSubnetGroupMessage(input, context)), { Action: "ModifyClusterSubnetGroup", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryModifyEndpointAccessCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryModifyEndpointAccessMessage(input, context)), { Action: "ModifyEndpointAccess", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryModifyEventSubscriptionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryModifyEventSubscriptionMessage(input, context)), { Action: "ModifyEventSubscription", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryModifyScheduledActionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryModifyScheduledActionMessage(input, context)), { Action: "ModifyScheduledAction", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryModifySnapshotCopyRetentionPeriodCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryModifySnapshotCopyRetentionPeriodMessage(input, context)), { Action: "ModifySnapshotCopyRetentionPeriod", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryModifySnapshotScheduleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryModifySnapshotScheduleMessage(input, context)), { Action: "ModifySnapshotSchedule", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryModifyUsageLimitCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryModifyUsageLimitMessage(input, context)), { Action: "ModifyUsageLimit", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryPauseClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryPauseClusterMessage(input, context)), { Action: "PauseCluster", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryPurchaseReservedNodeOfferingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryPurchaseReservedNodeOfferingMessage(input, context)), { Action: "PurchaseReservedNodeOffering", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryRebootClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryRebootClusterMessage(input, context)), { Action: "RebootCluster", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryResetClusterParameterGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryResetClusterParameterGroupMessage(input, context)), { Action: "ResetClusterParameterGroup", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryResizeClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryResizeClusterMessage(input, context)), { Action: "ResizeCluster", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryRestoreFromClusterSnapshotCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryRestoreFromClusterSnapshotMessage(input, context)), { Action: "RestoreFromClusterSnapshot", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryRestoreTableFromClusterSnapshotCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryRestoreTableFromClusterSnapshotMessage(input, context)), { Action: "RestoreTableFromClusterSnapshot", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryResumeClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryResumeClusterMessage(input, context)), { Action: "ResumeCluster", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryRevokeClusterSecurityGroupIngressCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryRevokeClusterSecurityGroupIngressMessage(input, context)), { Action: "RevokeClusterSecurityGroupIngress", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryRevokeEndpointAccessCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryRevokeEndpointAccessMessage(input, context)), { Action: "RevokeEndpointAccess", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryRevokeSnapshotAccessCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryRevokeSnapshotAccessMessage(input, context)), { Action: "RevokeSnapshotAccess", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryRotateEncryptionKeyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryRotateEncryptionKeyMessage(input, context)), { Action: "RotateEncryptionKey", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUpdatePartnerStatusCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUpdatePartnerStatusInputMessage(input, context)), { Action: "UpdatePartnerStatus", Version: "2012-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_queryAcceptReservedNodeExchangeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryAcceptReservedNodeExchangeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryAcceptReservedNodeExchangeOutputMessage(data.AcceptReservedNodeExchangeResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryAcceptReservedNodeExchangeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DependentServiceUnavailableFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#DependentServiceUnavailableFault": return [3 /*break*/, 2];
                    case "InvalidReservedNodeStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#InvalidReservedNodeStateFault": return [3 /*break*/, 4];
                    case "ReservedNodeAlreadyExistsFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#ReservedNodeAlreadyExistsFault": return [3 /*break*/, 6];
                    case "ReservedNodeAlreadyMigratedFault": return [3 /*break*/, 8];
                    case "com.amazonaws.redshift#ReservedNodeAlreadyMigratedFault": return [3 /*break*/, 8];
                    case "ReservedNodeNotFoundFault": return [3 /*break*/, 10];
                    case "com.amazonaws.redshift#ReservedNodeNotFoundFault": return [3 /*break*/, 10];
                    case "ReservedNodeOfferingNotFoundFault": return [3 /*break*/, 12];
                    case "com.amazonaws.redshift#ReservedNodeOfferingNotFoundFault": return [3 /*break*/, 12];
                    case "UnsupportedOperationFault": return [3 /*break*/, 14];
                    case "com.amazonaws.redshift#UnsupportedOperationFault": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDependentServiceUnavailableFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidReservedNodeStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryReservedNodeAlreadyExistsFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryReservedNodeAlreadyMigratedFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryReservedNodeNotFoundFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryReservedNodeOfferingNotFoundFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryAddPartnerCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryAddPartnerCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryPartnerIntegrationOutputMessage(data.AddPartnerResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryAddPartnerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "PartnerNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#PartnerNotFoundFault": return [3 /*break*/, 4];
                    case "UnauthorizedPartnerIntegrationFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#UnauthorizedPartnerIntegrationFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryPartnerNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryUnauthorizedPartnerIntegrationFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryAuthorizeClusterSecurityGroupIngressCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryAuthorizeClusterSecurityGroupIngressCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryAuthorizeClusterSecurityGroupIngressResult(data.AuthorizeClusterSecurityGroupIngressResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryAuthorizeClusterSecurityGroupIngressCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AuthorizationAlreadyExistsFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#AuthorizationAlreadyExistsFault": return [3 /*break*/, 2];
                    case "AuthorizationQuotaExceededFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#AuthorizationQuotaExceededFault": return [3 /*break*/, 4];
                    case "ClusterSecurityGroupNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#ClusterSecurityGroupNotFoundFault": return [3 /*break*/, 6];
                    case "InvalidClusterSecurityGroupStateFault": return [3 /*break*/, 8];
                    case "com.amazonaws.redshift#InvalidClusterSecurityGroupStateFault": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAuthorizationAlreadyExistsFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryAuthorizationQuotaExceededFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterSecurityGroupNotFoundFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterSecurityGroupStateFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryAuthorizeEndpointAccessCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryAuthorizeEndpointAccessCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryEndpointAuthorization(data.AuthorizeEndpointAccessResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryAuthorizeEndpointAccessCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "EndpointAuthorizationAlreadyExistsFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#EndpointAuthorizationAlreadyExistsFault": return [3 /*break*/, 4];
                    case "EndpointAuthorizationsPerClusterLimitExceededFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#EndpointAuthorizationsPerClusterLimitExceededFault": return [3 /*break*/, 6];
                    case "InvalidAuthorizationStateFault": return [3 /*break*/, 8];
                    case "com.amazonaws.redshift#InvalidAuthorizationStateFault": return [3 /*break*/, 8];
                    case "InvalidClusterStateFault": return [3 /*break*/, 10];
                    case "com.amazonaws.redshift#InvalidClusterStateFault": return [3 /*break*/, 10];
                    case "UnsupportedOperationFault": return [3 /*break*/, 12];
                    case "com.amazonaws.redshift#UnsupportedOperationFault": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryEndpointAuthorizationAlreadyExistsFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryEndpointAuthorizationsPerClusterLimitExceededFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidAuthorizationStateFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryAuthorizeSnapshotAccessCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryAuthorizeSnapshotAccessCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryAuthorizeSnapshotAccessResult(data.AuthorizeSnapshotAccessResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryAuthorizeSnapshotAccessCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AuthorizationAlreadyExistsFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#AuthorizationAlreadyExistsFault": return [3 /*break*/, 2];
                    case "AuthorizationQuotaExceededFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#AuthorizationQuotaExceededFault": return [3 /*break*/, 4];
                    case "ClusterSnapshotNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#ClusterSnapshotNotFoundFault": return [3 /*break*/, 6];
                    case "DependentServiceRequestThrottlingFault": return [3 /*break*/, 8];
                    case "com.amazonaws.redshift#DependentServiceRequestThrottlingFault": return [3 /*break*/, 8];
                    case "InvalidClusterSnapshotStateFault": return [3 /*break*/, 10];
                    case "com.amazonaws.redshift#InvalidClusterSnapshotStateFault": return [3 /*break*/, 10];
                    case "LimitExceededFault": return [3 /*break*/, 12];
                    case "com.amazonaws.redshift#LimitExceededFault": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAuthorizationAlreadyExistsFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryAuthorizationQuotaExceededFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterSnapshotNotFoundFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryDependentServiceRequestThrottlingFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterSnapshotStateFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryBatchDeleteClusterSnapshotsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryBatchDeleteClusterSnapshotsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryBatchDeleteClusterSnapshotsResult(data.BatchDeleteClusterSnapshotsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryBatchDeleteClusterSnapshotsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BatchDeleteRequestSizeExceededFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#BatchDeleteRequestSizeExceededFault": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryBatchDeleteRequestSizeExceededFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryBatchModifyClusterSnapshotsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryBatchModifyClusterSnapshotsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryBatchModifyClusterSnapshotsOutputMessage(data.BatchModifyClusterSnapshotsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryBatchModifyClusterSnapshotsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BatchModifyClusterSnapshotsLimitExceededFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#BatchModifyClusterSnapshotsLimitExceededFault": return [3 /*break*/, 2];
                    case "InvalidRetentionPeriodFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#InvalidRetentionPeriodFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryBatchModifyClusterSnapshotsLimitExceededFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidRetentionPeriodFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCancelResizeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCancelResizeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryResizeProgressMessage(data.CancelResizeResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCancelResizeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidClusterStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#InvalidClusterStateFault": return [3 /*break*/, 4];
                    case "ResizeNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#ResizeNotFoundFault": return [3 /*break*/, 6];
                    case "UnsupportedOperationFault": return [3 /*break*/, 8];
                    case "com.amazonaws.redshift#UnsupportedOperationFault": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryResizeNotFoundFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCopyClusterSnapshotCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCopyClusterSnapshotCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCopyClusterSnapshotResult(data.CopyClusterSnapshotResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCopyClusterSnapshotCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterSnapshotAlreadyExistsFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterSnapshotAlreadyExistsFault": return [3 /*break*/, 2];
                    case "ClusterSnapshotNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#ClusterSnapshotNotFoundFault": return [3 /*break*/, 4];
                    case "ClusterSnapshotQuotaExceededFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#ClusterSnapshotQuotaExceededFault": return [3 /*break*/, 6];
                    case "InvalidClusterSnapshotStateFault": return [3 /*break*/, 8];
                    case "com.amazonaws.redshift#InvalidClusterSnapshotStateFault": return [3 /*break*/, 8];
                    case "InvalidRetentionPeriodFault": return [3 /*break*/, 10];
                    case "com.amazonaws.redshift#InvalidRetentionPeriodFault": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterSnapshotAlreadyExistsFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterSnapshotNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterSnapshotQuotaExceededFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterSnapshotStateFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidRetentionPeriodFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateClusterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateClusterCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateClusterResult(data.CreateClusterResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateClusterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, parsedBody, message;
    var _0;
    return __generator(this, function (_1) {
        switch (_1.label) {
            case 0:
                _a = [__assign({}, output)];
                _0 = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_0.body = _1.sent(), _0)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterAlreadyExistsFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterAlreadyExistsFault": return [3 /*break*/, 2];
                    case "ClusterParameterGroupNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#ClusterParameterGroupNotFoundFault": return [3 /*break*/, 4];
                    case "ClusterQuotaExceededFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#ClusterQuotaExceededFault": return [3 /*break*/, 6];
                    case "ClusterSecurityGroupNotFoundFault": return [3 /*break*/, 8];
                    case "com.amazonaws.redshift#ClusterSecurityGroupNotFoundFault": return [3 /*break*/, 8];
                    case "ClusterSubnetGroupNotFoundFault": return [3 /*break*/, 10];
                    case "com.amazonaws.redshift#ClusterSubnetGroupNotFoundFault": return [3 /*break*/, 10];
                    case "DependentServiceRequestThrottlingFault": return [3 /*break*/, 12];
                    case "com.amazonaws.redshift#DependentServiceRequestThrottlingFault": return [3 /*break*/, 12];
                    case "HsmClientCertificateNotFoundFault": return [3 /*break*/, 14];
                    case "com.amazonaws.redshift#HsmClientCertificateNotFoundFault": return [3 /*break*/, 14];
                    case "HsmConfigurationNotFoundFault": return [3 /*break*/, 16];
                    case "com.amazonaws.redshift#HsmConfigurationNotFoundFault": return [3 /*break*/, 16];
                    case "InsufficientClusterCapacityFault": return [3 /*break*/, 18];
                    case "com.amazonaws.redshift#InsufficientClusterCapacityFault": return [3 /*break*/, 18];
                    case "InvalidClusterSubnetGroupStateFault": return [3 /*break*/, 20];
                    case "com.amazonaws.redshift#InvalidClusterSubnetGroupStateFault": return [3 /*break*/, 20];
                    case "InvalidClusterTrackFault": return [3 /*break*/, 22];
                    case "com.amazonaws.redshift#InvalidClusterTrackFault": return [3 /*break*/, 22];
                    case "InvalidElasticIpFault": return [3 /*break*/, 24];
                    case "com.amazonaws.redshift#InvalidElasticIpFault": return [3 /*break*/, 24];
                    case "InvalidRetentionPeriodFault": return [3 /*break*/, 26];
                    case "com.amazonaws.redshift#InvalidRetentionPeriodFault": return [3 /*break*/, 26];
                    case "InvalidSubnet": return [3 /*break*/, 28];
                    case "com.amazonaws.redshift#InvalidSubnet": return [3 /*break*/, 28];
                    case "InvalidTagFault": return [3 /*break*/, 30];
                    case "com.amazonaws.redshift#InvalidTagFault": return [3 /*break*/, 30];
                    case "InvalidVPCNetworkStateFault": return [3 /*break*/, 32];
                    case "com.amazonaws.redshift#InvalidVPCNetworkStateFault": return [3 /*break*/, 32];
                    case "LimitExceededFault": return [3 /*break*/, 34];
                    case "com.amazonaws.redshift#LimitExceededFault": return [3 /*break*/, 34];
                    case "NumberOfNodesPerClusterLimitExceededFault": return [3 /*break*/, 36];
                    case "com.amazonaws.redshift#NumberOfNodesPerClusterLimitExceededFault": return [3 /*break*/, 36];
                    case "NumberOfNodesQuotaExceededFault": return [3 /*break*/, 38];
                    case "com.amazonaws.redshift#NumberOfNodesQuotaExceededFault": return [3 /*break*/, 38];
                    case "SnapshotScheduleNotFoundFault": return [3 /*break*/, 40];
                    case "com.amazonaws.redshift#SnapshotScheduleNotFoundFault": return [3 /*break*/, 40];
                    case "TagLimitExceededFault": return [3 /*break*/, 42];
                    case "com.amazonaws.redshift#TagLimitExceededFault": return [3 /*break*/, 42];
                    case "UnauthorizedOperation": return [3 /*break*/, 44];
                    case "com.amazonaws.redshift#UnauthorizedOperation": return [3 /*break*/, 44];
                }
                return [3 /*break*/, 46];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterAlreadyExistsFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_1.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 47];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterParameterGroupNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_1.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 47];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterQuotaExceededFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_1.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 47];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterSecurityGroupNotFoundFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_1.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 47];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterSubnetGroupNotFoundFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_1.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 47];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryDependentServiceRequestThrottlingFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_1.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 47];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryHsmClientCertificateNotFoundFaultResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_1.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 47];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_queryHsmConfigurationNotFoundFaultResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_1.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 47];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientClusterCapacityFaultResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_1.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 47];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterSubnetGroupStateFaultResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_1.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 47];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterTrackFaultResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_1.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 47];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidElasticIpFaultResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_1.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 47];
            case 26:
                _q = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidRetentionPeriodFaultResponse(parsedOutput, context)];
            case 27:
                response = __assign.apply(void 0, [__assign.apply(void 0, _q.concat([(_1.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 47];
            case 28:
                _r = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidSubnetResponse(parsedOutput, context)];
            case 29:
                response = __assign.apply(void 0, [__assign.apply(void 0, _r.concat([(_1.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 47];
            case 30:
                _s = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)];
            case 31:
                response = __assign.apply(void 0, [__assign.apply(void 0, _s.concat([(_1.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 47];
            case 32:
                _t = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)];
            case 33:
                response = __assign.apply(void 0, [__assign.apply(void 0, _t.concat([(_1.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 47];
            case 34:
                _u = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)];
            case 35:
                response = __assign.apply(void 0, [__assign.apply(void 0, _u.concat([(_1.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 47];
            case 36:
                _v = [{}];
                return [4 /*yield*/, deserializeAws_queryNumberOfNodesPerClusterLimitExceededFaultResponse(parsedOutput, context)];
            case 37:
                response = __assign.apply(void 0, [__assign.apply(void 0, _v.concat([(_1.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 47];
            case 38:
                _w = [{}];
                return [4 /*yield*/, deserializeAws_queryNumberOfNodesQuotaExceededFaultResponse(parsedOutput, context)];
            case 39:
                response = __assign.apply(void 0, [__assign.apply(void 0, _w.concat([(_1.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 47];
            case 40:
                _x = [{}];
                return [4 /*yield*/, deserializeAws_querySnapshotScheduleNotFoundFaultResponse(parsedOutput, context)];
            case 41:
                response = __assign.apply(void 0, [__assign.apply(void 0, _x.concat([(_1.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 47];
            case 42:
                _y = [{}];
                return [4 /*yield*/, deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context)];
            case 43:
                response = __assign.apply(void 0, [__assign.apply(void 0, _y.concat([(_1.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 47];
            case 44:
                _z = [{}];
                return [4 /*yield*/, deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context)];
            case 45:
                response = __assign.apply(void 0, [__assign.apply(void 0, _z.concat([(_1.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 47];
            case 46:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _1.label = 47;
            case 47:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateClusterParameterGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateClusterParameterGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateClusterParameterGroupResult(data.CreateClusterParameterGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateClusterParameterGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterParameterGroupAlreadyExistsFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterParameterGroupAlreadyExistsFault": return [3 /*break*/, 2];
                    case "ClusterParameterGroupQuotaExceededFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#ClusterParameterGroupQuotaExceededFault": return [3 /*break*/, 4];
                    case "InvalidTagFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#InvalidTagFault": return [3 /*break*/, 6];
                    case "TagLimitExceededFault": return [3 /*break*/, 8];
                    case "com.amazonaws.redshift#TagLimitExceededFault": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterParameterGroupAlreadyExistsFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterParameterGroupQuotaExceededFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateClusterSecurityGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateClusterSecurityGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateClusterSecurityGroupResult(data.CreateClusterSecurityGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateClusterSecurityGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterSecurityGroupAlreadyExistsFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterSecurityGroupAlreadyExistsFault": return [3 /*break*/, 2];
                    case "ClusterSecurityGroupQuotaExceededFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#ClusterSecurityGroupQuotaExceededFault": return [3 /*break*/, 4];
                    case "InvalidTagFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#InvalidTagFault": return [3 /*break*/, 6];
                    case "TagLimitExceededFault": return [3 /*break*/, 8];
                    case "com.amazonaws.redshift#TagLimitExceededFault": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterSecurityGroupAlreadyExistsFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterSecurityGroupQuotaExceededFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateClusterSnapshotCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateClusterSnapshotCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateClusterSnapshotResult(data.CreateClusterSnapshotResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateClusterSnapshotCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "ClusterSnapshotAlreadyExistsFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#ClusterSnapshotAlreadyExistsFault": return [3 /*break*/, 4];
                    case "ClusterSnapshotQuotaExceededFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#ClusterSnapshotQuotaExceededFault": return [3 /*break*/, 6];
                    case "InvalidClusterStateFault": return [3 /*break*/, 8];
                    case "com.amazonaws.redshift#InvalidClusterStateFault": return [3 /*break*/, 8];
                    case "InvalidRetentionPeriodFault": return [3 /*break*/, 10];
                    case "com.amazonaws.redshift#InvalidRetentionPeriodFault": return [3 /*break*/, 10];
                    case "InvalidTagFault": return [3 /*break*/, 12];
                    case "com.amazonaws.redshift#InvalidTagFault": return [3 /*break*/, 12];
                    case "TagLimitExceededFault": return [3 /*break*/, 14];
                    case "com.amazonaws.redshift#TagLimitExceededFault": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterSnapshotAlreadyExistsFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterSnapshotQuotaExceededFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidRetentionPeriodFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateClusterSubnetGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateClusterSubnetGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateClusterSubnetGroupResult(data.CreateClusterSubnetGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateClusterSubnetGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterSubnetGroupAlreadyExistsFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterSubnetGroupAlreadyExistsFault": return [3 /*break*/, 2];
                    case "ClusterSubnetGroupQuotaExceededFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#ClusterSubnetGroupQuotaExceededFault": return [3 /*break*/, 4];
                    case "ClusterSubnetQuotaExceededFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#ClusterSubnetQuotaExceededFault": return [3 /*break*/, 6];
                    case "DependentServiceRequestThrottlingFault": return [3 /*break*/, 8];
                    case "com.amazonaws.redshift#DependentServiceRequestThrottlingFault": return [3 /*break*/, 8];
                    case "InvalidSubnet": return [3 /*break*/, 10];
                    case "com.amazonaws.redshift#InvalidSubnet": return [3 /*break*/, 10];
                    case "InvalidTagFault": return [3 /*break*/, 12];
                    case "com.amazonaws.redshift#InvalidTagFault": return [3 /*break*/, 12];
                    case "TagLimitExceededFault": return [3 /*break*/, 14];
                    case "com.amazonaws.redshift#TagLimitExceededFault": return [3 /*break*/, 14];
                    case "UnauthorizedOperation": return [3 /*break*/, 16];
                    case "com.amazonaws.redshift#UnauthorizedOperation": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterSubnetGroupAlreadyExistsFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterSubnetGroupQuotaExceededFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterSubnetQuotaExceededFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryDependentServiceRequestThrottlingFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidSubnetResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 18:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _m.label = 19;
            case 19:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateEndpointAccessCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateEndpointAccessCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryEndpointAccess(data.CreateEndpointAccessResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateEndpointAccessCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessToClusterDeniedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#AccessToClusterDeniedFault": return [3 /*break*/, 2];
                    case "ClusterNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 4];
                    case "ClusterSubnetGroupNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#ClusterSubnetGroupNotFoundFault": return [3 /*break*/, 6];
                    case "EndpointAlreadyExistsFault": return [3 /*break*/, 8];
                    case "com.amazonaws.redshift#EndpointAlreadyExistsFault": return [3 /*break*/, 8];
                    case "EndpointsPerAuthorizationLimitExceededFault": return [3 /*break*/, 10];
                    case "com.amazonaws.redshift#EndpointsPerAuthorizationLimitExceededFault": return [3 /*break*/, 10];
                    case "EndpointsPerClusterLimitExceededFault": return [3 /*break*/, 12];
                    case "com.amazonaws.redshift#EndpointsPerClusterLimitExceededFault": return [3 /*break*/, 12];
                    case "InvalidClusterSecurityGroupStateFault": return [3 /*break*/, 14];
                    case "com.amazonaws.redshift#InvalidClusterSecurityGroupStateFault": return [3 /*break*/, 14];
                    case "InvalidClusterStateFault": return [3 /*break*/, 16];
                    case "com.amazonaws.redshift#InvalidClusterStateFault": return [3 /*break*/, 16];
                    case "UnauthorizedOperation": return [3 /*break*/, 18];
                    case "com.amazonaws.redshift#UnauthorizedOperation": return [3 /*break*/, 18];
                    case "UnsupportedOperationFault": return [3 /*break*/, 20];
                    case "com.amazonaws.redshift#UnsupportedOperationFault": return [3 /*break*/, 20];
                }
                return [3 /*break*/, 22];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAccessToClusterDeniedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterSubnetGroupNotFoundFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryEndpointAlreadyExistsFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryEndpointsPerAuthorizationLimitExceededFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryEndpointsPerClusterLimitExceededFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterSecurityGroupStateFaultResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 22:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _p.label = 23;
            case 23:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateEventSubscriptionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateEventSubscriptionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateEventSubscriptionResult(data.CreateEventSubscriptionResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateEventSubscriptionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, parsedBody, message;
    var _p;
    return __generator(this, function (_q) {
        switch (_q.label) {
            case 0:
                _a = [__assign({}, output)];
                _p = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_p.body = _q.sent(), _p)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "EventSubscriptionQuotaExceededFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#EventSubscriptionQuotaExceededFault": return [3 /*break*/, 2];
                    case "InvalidTagFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#InvalidTagFault": return [3 /*break*/, 4];
                    case "SNSInvalidTopicFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#SNSInvalidTopicFault": return [3 /*break*/, 6];
                    case "SNSNoAuthorizationFault": return [3 /*break*/, 8];
                    case "com.amazonaws.redshift#SNSNoAuthorizationFault": return [3 /*break*/, 8];
                    case "SNSTopicArnNotFoundFault": return [3 /*break*/, 10];
                    case "com.amazonaws.redshift#SNSTopicArnNotFoundFault": return [3 /*break*/, 10];
                    case "SourceNotFoundFault": return [3 /*break*/, 12];
                    case "com.amazonaws.redshift#SourceNotFoundFault": return [3 /*break*/, 12];
                    case "SubscriptionAlreadyExistFault": return [3 /*break*/, 14];
                    case "com.amazonaws.redshift#SubscriptionAlreadyExistFault": return [3 /*break*/, 14];
                    case "SubscriptionCategoryNotFoundFault": return [3 /*break*/, 16];
                    case "com.amazonaws.redshift#SubscriptionCategoryNotFoundFault": return [3 /*break*/, 16];
                    case "SubscriptionEventIdNotFoundFault": return [3 /*break*/, 18];
                    case "com.amazonaws.redshift#SubscriptionEventIdNotFoundFault": return [3 /*break*/, 18];
                    case "SubscriptionSeverityNotFoundFault": return [3 /*break*/, 20];
                    case "com.amazonaws.redshift#SubscriptionSeverityNotFoundFault": return [3 /*break*/, 20];
                    case "TagLimitExceededFault": return [3 /*break*/, 22];
                    case "com.amazonaws.redshift#TagLimitExceededFault": return [3 /*break*/, 22];
                }
                return [3 /*break*/, 24];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryEventSubscriptionQuotaExceededFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_querySNSInvalidTopicFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_querySNSNoAuthorizationFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_querySNSTopicArnNotFoundFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_querySourceNotFoundFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_querySubscriptionAlreadyExistFaultResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_querySubscriptionCategoryNotFoundFaultResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_querySubscriptionEventIdNotFoundFaultResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_querySubscriptionSeverityNotFoundFaultResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 24:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _q.label = 25;
            case 25:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateHsmClientCertificateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateHsmClientCertificateCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateHsmClientCertificateResult(data.CreateHsmClientCertificateResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateHsmClientCertificateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "HsmClientCertificateAlreadyExistsFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#HsmClientCertificateAlreadyExistsFault": return [3 /*break*/, 2];
                    case "HsmClientCertificateQuotaExceededFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#HsmClientCertificateQuotaExceededFault": return [3 /*break*/, 4];
                    case "InvalidTagFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#InvalidTagFault": return [3 /*break*/, 6];
                    case "TagLimitExceededFault": return [3 /*break*/, 8];
                    case "com.amazonaws.redshift#TagLimitExceededFault": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryHsmClientCertificateAlreadyExistsFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryHsmClientCertificateQuotaExceededFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateHsmConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateHsmConfigurationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateHsmConfigurationResult(data.CreateHsmConfigurationResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateHsmConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "HsmConfigurationAlreadyExistsFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#HsmConfigurationAlreadyExistsFault": return [3 /*break*/, 2];
                    case "HsmConfigurationQuotaExceededFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#HsmConfigurationQuotaExceededFault": return [3 /*break*/, 4];
                    case "InvalidTagFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#InvalidTagFault": return [3 /*break*/, 6];
                    case "TagLimitExceededFault": return [3 /*break*/, 8];
                    case "com.amazonaws.redshift#TagLimitExceededFault": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryHsmConfigurationAlreadyExistsFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryHsmConfigurationQuotaExceededFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateScheduledActionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateScheduledActionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryScheduledAction(data.CreateScheduledActionResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateScheduledActionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidScheduledActionFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#InvalidScheduledActionFault": return [3 /*break*/, 2];
                    case "InvalidScheduleFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#InvalidScheduleFault": return [3 /*break*/, 4];
                    case "ScheduledActionAlreadyExistsFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#ScheduledActionAlreadyExistsFault": return [3 /*break*/, 6];
                    case "ScheduledActionQuotaExceededFault": return [3 /*break*/, 8];
                    case "com.amazonaws.redshift#ScheduledActionQuotaExceededFault": return [3 /*break*/, 8];
                    case "ScheduledActionTypeUnsupportedFault": return [3 /*break*/, 10];
                    case "com.amazonaws.redshift#ScheduledActionTypeUnsupportedFault": return [3 /*break*/, 10];
                    case "UnauthorizedOperation": return [3 /*break*/, 12];
                    case "com.amazonaws.redshift#UnauthorizedOperation": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidScheduledActionFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidScheduleFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryScheduledActionAlreadyExistsFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryScheduledActionQuotaExceededFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryScheduledActionTypeUnsupportedFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateSnapshotCopyGrantCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateSnapshotCopyGrantCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateSnapshotCopyGrantResult(data.CreateSnapshotCopyGrantResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateSnapshotCopyGrantCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DependentServiceRequestThrottlingFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#DependentServiceRequestThrottlingFault": return [3 /*break*/, 2];
                    case "InvalidTagFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#InvalidTagFault": return [3 /*break*/, 4];
                    case "LimitExceededFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#LimitExceededFault": return [3 /*break*/, 6];
                    case "SnapshotCopyGrantAlreadyExistsFault": return [3 /*break*/, 8];
                    case "com.amazonaws.redshift#SnapshotCopyGrantAlreadyExistsFault": return [3 /*break*/, 8];
                    case "SnapshotCopyGrantQuotaExceededFault": return [3 /*break*/, 10];
                    case "com.amazonaws.redshift#SnapshotCopyGrantQuotaExceededFault": return [3 /*break*/, 10];
                    case "TagLimitExceededFault": return [3 /*break*/, 12];
                    case "com.amazonaws.redshift#TagLimitExceededFault": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDependentServiceRequestThrottlingFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_querySnapshotCopyGrantAlreadyExistsFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_querySnapshotCopyGrantQuotaExceededFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateSnapshotScheduleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateSnapshotScheduleCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_querySnapshotSchedule(data.CreateSnapshotScheduleResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateSnapshotScheduleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidScheduleFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#InvalidScheduleFault": return [3 /*break*/, 2];
                    case "InvalidTagFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#InvalidTagFault": return [3 /*break*/, 4];
                    case "ScheduleDefinitionTypeUnsupportedFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#ScheduleDefinitionTypeUnsupportedFault": return [3 /*break*/, 6];
                    case "SnapshotScheduleAlreadyExistsFault": return [3 /*break*/, 8];
                    case "com.amazonaws.redshift#SnapshotScheduleAlreadyExistsFault": return [3 /*break*/, 8];
                    case "SnapshotScheduleQuotaExceededFault": return [3 /*break*/, 10];
                    case "com.amazonaws.redshift#SnapshotScheduleQuotaExceededFault": return [3 /*break*/, 10];
                    case "TagLimitExceededFault": return [3 /*break*/, 12];
                    case "com.amazonaws.redshift#TagLimitExceededFault": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidScheduleFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryScheduleDefinitionTypeUnsupportedFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_querySnapshotScheduleAlreadyExistsFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_querySnapshotScheduleQuotaExceededFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateTagsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateTagsCommandError(output, context)];
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
var deserializeAws_queryCreateTagsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidClusterStateFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#InvalidClusterStateFault": return [3 /*break*/, 2];
                    case "InvalidTagFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#InvalidTagFault": return [3 /*break*/, 4];
                    case "ResourceNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#ResourceNotFoundFault": return [3 /*break*/, 6];
                    case "TagLimitExceededFault": return [3 /*break*/, 8];
                    case "com.amazonaws.redshift#TagLimitExceededFault": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceNotFoundFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateUsageLimitCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateUsageLimitCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryUsageLimit(data.CreateUsageLimitResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateUsageLimitCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidClusterStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#InvalidClusterStateFault": return [3 /*break*/, 4];
                    case "InvalidUsageLimitFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#InvalidUsageLimitFault": return [3 /*break*/, 6];
                    case "LimitExceededFault": return [3 /*break*/, 8];
                    case "com.amazonaws.redshift#LimitExceededFault": return [3 /*break*/, 8];
                    case "TagLimitExceededFault": return [3 /*break*/, 10];
                    case "com.amazonaws.redshift#TagLimitExceededFault": return [3 /*break*/, 10];
                    case "UnsupportedOperationFault": return [3 /*break*/, 12];
                    case "com.amazonaws.redshift#UnsupportedOperationFault": return [3 /*break*/, 12];
                    case "UsageLimitAlreadyExistsFault": return [3 /*break*/, 14];
                    case "com.amazonaws.redshift#UsageLimitAlreadyExistsFault": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidUsageLimitFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryUsageLimitAlreadyExistsFaultResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteClusterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteClusterCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDeleteClusterResult(data.DeleteClusterResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteClusterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "ClusterSnapshotAlreadyExistsFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#ClusterSnapshotAlreadyExistsFault": return [3 /*break*/, 4];
                    case "ClusterSnapshotQuotaExceededFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#ClusterSnapshotQuotaExceededFault": return [3 /*break*/, 6];
                    case "InvalidClusterStateFault": return [3 /*break*/, 8];
                    case "com.amazonaws.redshift#InvalidClusterStateFault": return [3 /*break*/, 8];
                    case "InvalidRetentionPeriodFault": return [3 /*break*/, 10];
                    case "com.amazonaws.redshift#InvalidRetentionPeriodFault": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterSnapshotAlreadyExistsFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterSnapshotQuotaExceededFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidRetentionPeriodFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteClusterParameterGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteClusterParameterGroupCommandError(output, context)];
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
var deserializeAws_queryDeleteClusterParameterGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterParameterGroupNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterParameterGroupNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidClusterParameterGroupStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#InvalidClusterParameterGroupStateFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterParameterGroupNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterParameterGroupStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteClusterSecurityGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteClusterSecurityGroupCommandError(output, context)];
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
var deserializeAws_queryDeleteClusterSecurityGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterSecurityGroupNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterSecurityGroupNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidClusterSecurityGroupStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#InvalidClusterSecurityGroupStateFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterSecurityGroupNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterSecurityGroupStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteClusterSnapshotCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteClusterSnapshotCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDeleteClusterSnapshotResult(data.DeleteClusterSnapshotResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteClusterSnapshotCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterSnapshotNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterSnapshotNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidClusterSnapshotStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#InvalidClusterSnapshotStateFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterSnapshotNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterSnapshotStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteClusterSubnetGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteClusterSubnetGroupCommandError(output, context)];
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
var deserializeAws_queryDeleteClusterSubnetGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterSubnetGroupNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterSubnetGroupNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidClusterSubnetGroupStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#InvalidClusterSubnetGroupStateFault": return [3 /*break*/, 4];
                    case "InvalidClusterSubnetStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#InvalidClusterSubnetStateFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterSubnetGroupNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterSubnetGroupStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterSubnetStateFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteEndpointAccessCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteEndpointAccessCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryEndpointAccess(data.DeleteEndpointAccessResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteEndpointAccessCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "EndpointNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#EndpointNotFoundFault": return [3 /*break*/, 4];
                    case "InvalidClusterSecurityGroupStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#InvalidClusterSecurityGroupStateFault": return [3 /*break*/, 6];
                    case "InvalidClusterStateFault": return [3 /*break*/, 8];
                    case "com.amazonaws.redshift#InvalidClusterStateFault": return [3 /*break*/, 8];
                    case "InvalidEndpointStateFault": return [3 /*break*/, 10];
                    case "com.amazonaws.redshift#InvalidEndpointStateFault": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryEndpointNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterSecurityGroupStateFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidEndpointStateFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteEventSubscriptionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteEventSubscriptionCommandError(output, context)];
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
var deserializeAws_queryDeleteEventSubscriptionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidSubscriptionStateFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#InvalidSubscriptionStateFault": return [3 /*break*/, 2];
                    case "SubscriptionNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#SubscriptionNotFoundFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidSubscriptionStateFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_querySubscriptionNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteHsmClientCertificateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteHsmClientCertificateCommandError(output, context)];
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
var deserializeAws_queryDeleteHsmClientCertificateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "HsmClientCertificateNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#HsmClientCertificateNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidHsmClientCertificateStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#InvalidHsmClientCertificateStateFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryHsmClientCertificateNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidHsmClientCertificateStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteHsmConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteHsmConfigurationCommandError(output, context)];
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
var deserializeAws_queryDeleteHsmConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "HsmConfigurationNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#HsmConfigurationNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidHsmConfigurationStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#InvalidHsmConfigurationStateFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryHsmConfigurationNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidHsmConfigurationStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeletePartnerCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeletePartnerCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryPartnerIntegrationOutputMessage(data.DeletePartnerResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeletePartnerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "PartnerNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#PartnerNotFoundFault": return [3 /*break*/, 4];
                    case "UnauthorizedPartnerIntegrationFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#UnauthorizedPartnerIntegrationFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryPartnerNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryUnauthorizedPartnerIntegrationFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteScheduledActionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteScheduledActionCommandError(output, context)];
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
var deserializeAws_queryDeleteScheduledActionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ScheduledActionNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ScheduledActionNotFoundFault": return [3 /*break*/, 2];
                    case "UnauthorizedOperation": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#UnauthorizedOperation": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryScheduledActionNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteSnapshotCopyGrantCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteSnapshotCopyGrantCommandError(output, context)];
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
var deserializeAws_queryDeleteSnapshotCopyGrantCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidSnapshotCopyGrantStateFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#InvalidSnapshotCopyGrantStateFault": return [3 /*break*/, 2];
                    case "SnapshotCopyGrantNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#SnapshotCopyGrantNotFoundFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidSnapshotCopyGrantStateFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_querySnapshotCopyGrantNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteSnapshotScheduleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteSnapshotScheduleCommandError(output, context)];
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
var deserializeAws_queryDeleteSnapshotScheduleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidClusterSnapshotScheduleStateFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#InvalidClusterSnapshotScheduleStateFault": return [3 /*break*/, 2];
                    case "SnapshotScheduleNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#SnapshotScheduleNotFoundFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterSnapshotScheduleStateFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_querySnapshotScheduleNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteTagsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteTagsCommandError(output, context)];
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
var deserializeAws_queryDeleteTagsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidTagFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#InvalidTagFault": return [3 /*break*/, 2];
                    case "ResourceNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#ResourceNotFoundFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteUsageLimitCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteUsageLimitCommandError(output, context)];
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
var deserializeAws_queryDeleteUsageLimitCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "UnsupportedOperationFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#UnsupportedOperationFault": return [3 /*break*/, 2];
                    case "UsageLimitNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#UsageLimitNotFoundFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryUsageLimitNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeAccountAttributesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeAccountAttributesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryAccountAttributeList(data.DescribeAccountAttributesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeAccountAttributesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeClusterDbRevisionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeClusterDbRevisionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryClusterDbRevisionsMessage(data.DescribeClusterDbRevisionsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeClusterDbRevisionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidClusterStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#InvalidClusterStateFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeClusterParameterGroupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeClusterParameterGroupsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryClusterParameterGroupsMessage(data.DescribeClusterParameterGroupsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeClusterParameterGroupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterParameterGroupNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterParameterGroupNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidTagFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#InvalidTagFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterParameterGroupNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeClusterParametersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeClusterParametersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryClusterParameterGroupDetails(data.DescribeClusterParametersResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeClusterParametersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterParameterGroupNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterParameterGroupNotFoundFault": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterParameterGroupNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeClustersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeClustersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryClustersMessage(data.DescribeClustersResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeClustersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidTagFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#InvalidTagFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeClusterSecurityGroupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeClusterSecurityGroupsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryClusterSecurityGroupMessage(data.DescribeClusterSecurityGroupsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeClusterSecurityGroupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterSecurityGroupNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterSecurityGroupNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidTagFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#InvalidTagFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterSecurityGroupNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeClusterSnapshotsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeClusterSnapshotsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_querySnapshotMessage(data.DescribeClusterSnapshotsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeClusterSnapshotsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "ClusterSnapshotNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#ClusterSnapshotNotFoundFault": return [3 /*break*/, 4];
                    case "InvalidTagFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#InvalidTagFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterSnapshotNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeClusterSubnetGroupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeClusterSubnetGroupsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryClusterSubnetGroupMessage(data.DescribeClusterSubnetGroupsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeClusterSubnetGroupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterSubnetGroupNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterSubnetGroupNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidTagFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#InvalidTagFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterSubnetGroupNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeClusterTracksCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeClusterTracksCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryTrackListMessage(data.DescribeClusterTracksResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeClusterTracksCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidClusterTrackFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#InvalidClusterTrackFault": return [3 /*break*/, 2];
                    case "UnauthorizedOperation": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#UnauthorizedOperation": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterTrackFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeClusterVersionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeClusterVersionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryClusterVersionsMessage(data.DescribeClusterVersionsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeClusterVersionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeDefaultClusterParametersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeDefaultClusterParametersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeDefaultClusterParametersResult(data.DescribeDefaultClusterParametersResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeDefaultClusterParametersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeEndpointAccessCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeEndpointAccessCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryEndpointAccessList(data.DescribeEndpointAccessResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeEndpointAccessCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "EndpointNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#EndpointNotFoundFault": return [3 /*break*/, 4];
                    case "InvalidClusterStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#InvalidClusterStateFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryEndpointNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeEndpointAuthorizationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeEndpointAuthorizationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryEndpointAuthorizationList(data.DescribeEndpointAuthorizationResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeEndpointAuthorizationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "UnsupportedOperationFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#UnsupportedOperationFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeEventCategoriesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeEventCategoriesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryEventCategoriesMessage(data.DescribeEventCategoriesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeEventCategoriesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeEventsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeEventsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryEventsMessage(data.DescribeEventsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeEventsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeEventSubscriptionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeEventSubscriptionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryEventSubscriptionsMessage(data.DescribeEventSubscriptionsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeEventSubscriptionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidTagFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#InvalidTagFault": return [3 /*break*/, 2];
                    case "SubscriptionNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#SubscriptionNotFoundFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_querySubscriptionNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeHsmClientCertificatesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeHsmClientCertificatesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryHsmClientCertificateMessage(data.DescribeHsmClientCertificatesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeHsmClientCertificatesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "HsmClientCertificateNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#HsmClientCertificateNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidTagFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#InvalidTagFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryHsmClientCertificateNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeHsmConfigurationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeHsmConfigurationsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryHsmConfigurationMessage(data.DescribeHsmConfigurationsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeHsmConfigurationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "HsmConfigurationNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#HsmConfigurationNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidTagFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#InvalidTagFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryHsmConfigurationNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeLoggingStatusCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeLoggingStatusCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryLoggingStatus(data.DescribeLoggingStatusResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeLoggingStatusCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeNodeConfigurationOptionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeNodeConfigurationOptionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryNodeConfigurationOptionsMessage(data.DescribeNodeConfigurationOptionsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeNodeConfigurationOptionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessToSnapshotDeniedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#AccessToSnapshotDeniedFault": return [3 /*break*/, 2];
                    case "ClusterNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 4];
                    case "ClusterSnapshotNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#ClusterSnapshotNotFoundFault": return [3 /*break*/, 6];
                    case "InvalidClusterSnapshotStateFault": return [3 /*break*/, 8];
                    case "com.amazonaws.redshift#InvalidClusterSnapshotStateFault": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAccessToSnapshotDeniedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterSnapshotNotFoundFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterSnapshotStateFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeOrderableClusterOptionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeOrderableClusterOptionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryOrderableClusterOptionsMessage(data.DescribeOrderableClusterOptionsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeOrderableClusterOptionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribePartnersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribePartnersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribePartnersOutputMessage(data.DescribePartnersResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribePartnersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "UnauthorizedPartnerIntegrationFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#UnauthorizedPartnerIntegrationFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryUnauthorizedPartnerIntegrationFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeReservedNodeOfferingsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeReservedNodeOfferingsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryReservedNodeOfferingsMessage(data.DescribeReservedNodeOfferingsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeReservedNodeOfferingsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DependentServiceUnavailableFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#DependentServiceUnavailableFault": return [3 /*break*/, 2];
                    case "ReservedNodeOfferingNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#ReservedNodeOfferingNotFoundFault": return [3 /*break*/, 4];
                    case "UnsupportedOperationFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#UnsupportedOperationFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDependentServiceUnavailableFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryReservedNodeOfferingNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeReservedNodesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeReservedNodesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryReservedNodesMessage(data.DescribeReservedNodesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeReservedNodesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DependentServiceUnavailableFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#DependentServiceUnavailableFault": return [3 /*break*/, 2];
                    case "ReservedNodeNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#ReservedNodeNotFoundFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDependentServiceUnavailableFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryReservedNodeNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeResizeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeResizeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryResizeProgressMessage(data.DescribeResizeResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeResizeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "ResizeNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#ResizeNotFoundFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryResizeNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeScheduledActionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeScheduledActionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryScheduledActionsMessage(data.DescribeScheduledActionsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeScheduledActionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ScheduledActionNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ScheduledActionNotFoundFault": return [3 /*break*/, 2];
                    case "UnauthorizedOperation": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#UnauthorizedOperation": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryScheduledActionNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeSnapshotCopyGrantsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeSnapshotCopyGrantsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_querySnapshotCopyGrantMessage(data.DescribeSnapshotCopyGrantsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeSnapshotCopyGrantsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidTagFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#InvalidTagFault": return [3 /*break*/, 2];
                    case "SnapshotCopyGrantNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#SnapshotCopyGrantNotFoundFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_querySnapshotCopyGrantNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeSnapshotSchedulesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeSnapshotSchedulesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeSnapshotSchedulesOutputMessage(data.DescribeSnapshotSchedulesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeSnapshotSchedulesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeStorageCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeStorageCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCustomerStorageMessage(data.DescribeStorageResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeStorageCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeTableRestoreStatusCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeTableRestoreStatusCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryTableRestoreStatusMessage(data.DescribeTableRestoreStatusResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeTableRestoreStatusCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "TableRestoreNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#TableRestoreNotFoundFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryTableRestoreNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeTagsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeTagsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryTaggedResourceListMessage(data.DescribeTagsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeTagsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidTagFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#InvalidTagFault": return [3 /*break*/, 2];
                    case "ResourceNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#ResourceNotFoundFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeUsageLimitsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeUsageLimitsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryUsageLimitList(data.DescribeUsageLimitsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeUsageLimitsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "UnsupportedOperationFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#UnsupportedOperationFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDisableLoggingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDisableLoggingCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryLoggingStatus(data.DisableLoggingResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDisableLoggingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDisableSnapshotCopyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDisableSnapshotCopyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDisableSnapshotCopyResult(data.DisableSnapshotCopyResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDisableSnapshotCopyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidClusterStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#InvalidClusterStateFault": return [3 /*break*/, 4];
                    case "SnapshotCopyAlreadyDisabledFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#SnapshotCopyAlreadyDisabledFault": return [3 /*break*/, 6];
                    case "UnauthorizedOperation": return [3 /*break*/, 8];
                    case "com.amazonaws.redshift#UnauthorizedOperation": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_querySnapshotCopyAlreadyDisabledFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryEnableLoggingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryEnableLoggingCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryLoggingStatus(data.EnableLoggingResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryEnableLoggingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BucketNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#BucketNotFoundFault": return [3 /*break*/, 2];
                    case "ClusterNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 4];
                    case "InsufficientS3BucketPolicyFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#InsufficientS3BucketPolicyFault": return [3 /*break*/, 6];
                    case "InvalidClusterStateFault": return [3 /*break*/, 8];
                    case "com.amazonaws.redshift#InvalidClusterStateFault": return [3 /*break*/, 8];
                    case "InvalidS3BucketNameFault": return [3 /*break*/, 10];
                    case "com.amazonaws.redshift#InvalidS3BucketNameFault": return [3 /*break*/, 10];
                    case "InvalidS3KeyPrefixFault": return [3 /*break*/, 12];
                    case "com.amazonaws.redshift#InvalidS3KeyPrefixFault": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryBucketNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientS3BucketPolicyFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidS3BucketNameFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidS3KeyPrefixFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryEnableSnapshotCopyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryEnableSnapshotCopyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryEnableSnapshotCopyResult(data.EnableSnapshotCopyResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryEnableSnapshotCopyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, parsedBody, message;
    var _p;
    return __generator(this, function (_q) {
        switch (_q.label) {
            case 0:
                _a = [__assign({}, output)];
                _p = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_p.body = _q.sent(), _p)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "CopyToRegionDisabledFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#CopyToRegionDisabledFault": return [3 /*break*/, 4];
                    case "DependentServiceRequestThrottlingFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#DependentServiceRequestThrottlingFault": return [3 /*break*/, 6];
                    case "IncompatibleOrderableOptions": return [3 /*break*/, 8];
                    case "com.amazonaws.redshift#IncompatibleOrderableOptions": return [3 /*break*/, 8];
                    case "InvalidClusterStateFault": return [3 /*break*/, 10];
                    case "com.amazonaws.redshift#InvalidClusterStateFault": return [3 /*break*/, 10];
                    case "InvalidRetentionPeriodFault": return [3 /*break*/, 12];
                    case "com.amazonaws.redshift#InvalidRetentionPeriodFault": return [3 /*break*/, 12];
                    case "LimitExceededFault": return [3 /*break*/, 14];
                    case "com.amazonaws.redshift#LimitExceededFault": return [3 /*break*/, 14];
                    case "SnapshotCopyAlreadyEnabledFault": return [3 /*break*/, 16];
                    case "com.amazonaws.redshift#SnapshotCopyAlreadyEnabledFault": return [3 /*break*/, 16];
                    case "SnapshotCopyGrantNotFoundFault": return [3 /*break*/, 18];
                    case "com.amazonaws.redshift#SnapshotCopyGrantNotFoundFault": return [3 /*break*/, 18];
                    case "UnauthorizedOperation": return [3 /*break*/, 20];
                    case "com.amazonaws.redshift#UnauthorizedOperation": return [3 /*break*/, 20];
                    case "UnknownSnapshotCopyRegionFault": return [3 /*break*/, 22];
                    case "com.amazonaws.redshift#UnknownSnapshotCopyRegionFault": return [3 /*break*/, 22];
                }
                return [3 /*break*/, 24];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryCopyToRegionDisabledFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryDependentServiceRequestThrottlingFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryIncompatibleOrderableOptionsResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidRetentionPeriodFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_querySnapshotCopyAlreadyEnabledFaultResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_querySnapshotCopyGrantNotFoundFaultResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_queryUnknownSnapshotCopyRegionFaultResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 24:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _q.label = 25;
            case 25:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetClusterCredentialsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetClusterCredentialsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryClusterCredentials(data.GetClusterCredentialsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetClusterCredentialsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "UnsupportedOperationFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#UnsupportedOperationFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetReservedNodeExchangeOfferingsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetReservedNodeExchangeOfferingsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetReservedNodeExchangeOfferingsOutputMessage(data.GetReservedNodeExchangeOfferingsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetReservedNodeExchangeOfferingsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DependentServiceUnavailableFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#DependentServiceUnavailableFault": return [3 /*break*/, 2];
                    case "InvalidReservedNodeStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#InvalidReservedNodeStateFault": return [3 /*break*/, 4];
                    case "ReservedNodeAlreadyMigratedFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#ReservedNodeAlreadyMigratedFault": return [3 /*break*/, 6];
                    case "ReservedNodeNotFoundFault": return [3 /*break*/, 8];
                    case "com.amazonaws.redshift#ReservedNodeNotFoundFault": return [3 /*break*/, 8];
                    case "ReservedNodeOfferingNotFoundFault": return [3 /*break*/, 10];
                    case "com.amazonaws.redshift#ReservedNodeOfferingNotFoundFault": return [3 /*break*/, 10];
                    case "UnsupportedOperationFault": return [3 /*break*/, 12];
                    case "com.amazonaws.redshift#UnsupportedOperationFault": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDependentServiceUnavailableFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidReservedNodeStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryReservedNodeAlreadyMigratedFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryReservedNodeNotFoundFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryReservedNodeOfferingNotFoundFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryModifyAquaConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryModifyAquaConfigurationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryModifyAquaOutputMessage(data.ModifyAquaConfigurationResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryModifyAquaConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "UnsupportedOperationFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#UnsupportedOperationFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryModifyClusterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryModifyClusterCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryModifyClusterResult(data.ModifyClusterResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryModifyClusterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, parsedBody, message;
    var _x;
    return __generator(this, function (_y) {
        switch (_y.label) {
            case 0:
                _a = [__assign({}, output)];
                _x = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_x.body = _y.sent(), _x)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterAlreadyExistsFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterAlreadyExistsFault": return [3 /*break*/, 2];
                    case "ClusterNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 4];
                    case "ClusterParameterGroupNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#ClusterParameterGroupNotFoundFault": return [3 /*break*/, 6];
                    case "ClusterSecurityGroupNotFoundFault": return [3 /*break*/, 8];
                    case "com.amazonaws.redshift#ClusterSecurityGroupNotFoundFault": return [3 /*break*/, 8];
                    case "DependentServiceRequestThrottlingFault": return [3 /*break*/, 10];
                    case "com.amazonaws.redshift#DependentServiceRequestThrottlingFault": return [3 /*break*/, 10];
                    case "HsmClientCertificateNotFoundFault": return [3 /*break*/, 12];
                    case "com.amazonaws.redshift#HsmClientCertificateNotFoundFault": return [3 /*break*/, 12];
                    case "HsmConfigurationNotFoundFault": return [3 /*break*/, 14];
                    case "com.amazonaws.redshift#HsmConfigurationNotFoundFault": return [3 /*break*/, 14];
                    case "InsufficientClusterCapacityFault": return [3 /*break*/, 16];
                    case "com.amazonaws.redshift#InsufficientClusterCapacityFault": return [3 /*break*/, 16];
                    case "InvalidClusterSecurityGroupStateFault": return [3 /*break*/, 18];
                    case "com.amazonaws.redshift#InvalidClusterSecurityGroupStateFault": return [3 /*break*/, 18];
                    case "InvalidClusterStateFault": return [3 /*break*/, 20];
                    case "com.amazonaws.redshift#InvalidClusterStateFault": return [3 /*break*/, 20];
                    case "InvalidClusterTrackFault": return [3 /*break*/, 22];
                    case "com.amazonaws.redshift#InvalidClusterTrackFault": return [3 /*break*/, 22];
                    case "InvalidElasticIpFault": return [3 /*break*/, 24];
                    case "com.amazonaws.redshift#InvalidElasticIpFault": return [3 /*break*/, 24];
                    case "InvalidRetentionPeriodFault": return [3 /*break*/, 26];
                    case "com.amazonaws.redshift#InvalidRetentionPeriodFault": return [3 /*break*/, 26];
                    case "LimitExceededFault": return [3 /*break*/, 28];
                    case "com.amazonaws.redshift#LimitExceededFault": return [3 /*break*/, 28];
                    case "NumberOfNodesPerClusterLimitExceededFault": return [3 /*break*/, 30];
                    case "com.amazonaws.redshift#NumberOfNodesPerClusterLimitExceededFault": return [3 /*break*/, 30];
                    case "NumberOfNodesQuotaExceededFault": return [3 /*break*/, 32];
                    case "com.amazonaws.redshift#NumberOfNodesQuotaExceededFault": return [3 /*break*/, 32];
                    case "TableLimitExceededFault": return [3 /*break*/, 34];
                    case "com.amazonaws.redshift#TableLimitExceededFault": return [3 /*break*/, 34];
                    case "UnauthorizedOperation": return [3 /*break*/, 36];
                    case "com.amazonaws.redshift#UnauthorizedOperation": return [3 /*break*/, 36];
                    case "UnsupportedOptionFault": return [3 /*break*/, 38];
                    case "com.amazonaws.redshift#UnsupportedOptionFault": return [3 /*break*/, 38];
                }
                return [3 /*break*/, 40];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterAlreadyExistsFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_y.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 41];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_y.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 41];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterParameterGroupNotFoundFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_y.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 41];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterSecurityGroupNotFoundFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_y.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 41];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryDependentServiceRequestThrottlingFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_y.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 41];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryHsmClientCertificateNotFoundFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_y.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 41];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryHsmConfigurationNotFoundFaultResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_y.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 41];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientClusterCapacityFaultResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_y.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 41];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterSecurityGroupStateFaultResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_y.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 41];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_y.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 41];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterTrackFaultResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_y.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 41];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidElasticIpFaultResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_y.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 41];
            case 26:
                _q = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidRetentionPeriodFaultResponse(parsedOutput, context)];
            case 27:
                response = __assign.apply(void 0, [__assign.apply(void 0, _q.concat([(_y.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 41];
            case 28:
                _r = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)];
            case 29:
                response = __assign.apply(void 0, [__assign.apply(void 0, _r.concat([(_y.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 41];
            case 30:
                _s = [{}];
                return [4 /*yield*/, deserializeAws_queryNumberOfNodesPerClusterLimitExceededFaultResponse(parsedOutput, context)];
            case 31:
                response = __assign.apply(void 0, [__assign.apply(void 0, _s.concat([(_y.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 41];
            case 32:
                _t = [{}];
                return [4 /*yield*/, deserializeAws_queryNumberOfNodesQuotaExceededFaultResponse(parsedOutput, context)];
            case 33:
                response = __assign.apply(void 0, [__assign.apply(void 0, _t.concat([(_y.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 41];
            case 34:
                _u = [{}];
                return [4 /*yield*/, deserializeAws_queryTableLimitExceededFaultResponse(parsedOutput, context)];
            case 35:
                response = __assign.apply(void 0, [__assign.apply(void 0, _u.concat([(_y.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 41];
            case 36:
                _v = [{}];
                return [4 /*yield*/, deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context)];
            case 37:
                response = __assign.apply(void 0, [__assign.apply(void 0, _v.concat([(_y.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 41];
            case 38:
                _w = [{}];
                return [4 /*yield*/, deserializeAws_queryUnsupportedOptionFaultResponse(parsedOutput, context)];
            case 39:
                response = __assign.apply(void 0, [__assign.apply(void 0, _w.concat([(_y.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 41];
            case 40:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _y.label = 41;
            case 41:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryModifyClusterDbRevisionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryModifyClusterDbRevisionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryModifyClusterDbRevisionResult(data.ModifyClusterDbRevisionResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryModifyClusterDbRevisionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "ClusterOnLatestRevisionFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#ClusterOnLatestRevisionFault": return [3 /*break*/, 4];
                    case "InvalidClusterStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#InvalidClusterStateFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterOnLatestRevisionFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryModifyClusterIamRolesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryModifyClusterIamRolesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryModifyClusterIamRolesResult(data.ModifyClusterIamRolesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryModifyClusterIamRolesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidClusterStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#InvalidClusterStateFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryModifyClusterMaintenanceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryModifyClusterMaintenanceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryModifyClusterMaintenanceResult(data.ModifyClusterMaintenanceResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryModifyClusterMaintenanceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidClusterStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#InvalidClusterStateFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryModifyClusterParameterGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryModifyClusterParameterGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryClusterParameterGroupNameMessage(data.ModifyClusterParameterGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryModifyClusterParameterGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterParameterGroupNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterParameterGroupNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidClusterParameterGroupStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#InvalidClusterParameterGroupStateFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterParameterGroupNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterParameterGroupStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryModifyClusterSnapshotCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryModifyClusterSnapshotCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryModifyClusterSnapshotResult(data.ModifyClusterSnapshotResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryModifyClusterSnapshotCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterSnapshotNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterSnapshotNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidClusterSnapshotStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#InvalidClusterSnapshotStateFault": return [3 /*break*/, 4];
                    case "InvalidRetentionPeriodFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#InvalidRetentionPeriodFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterSnapshotNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterSnapshotStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidRetentionPeriodFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryModifyClusterSnapshotScheduleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryModifyClusterSnapshotScheduleCommandError(output, context)];
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
var deserializeAws_queryModifyClusterSnapshotScheduleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidClusterSnapshotScheduleStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#InvalidClusterSnapshotScheduleStateFault": return [3 /*break*/, 4];
                    case "SnapshotScheduleNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#SnapshotScheduleNotFoundFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterSnapshotScheduleStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_querySnapshotScheduleNotFoundFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryModifyClusterSubnetGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryModifyClusterSubnetGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryModifyClusterSubnetGroupResult(data.ModifyClusterSubnetGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryModifyClusterSubnetGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterSubnetGroupNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterSubnetGroupNotFoundFault": return [3 /*break*/, 2];
                    case "ClusterSubnetQuotaExceededFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#ClusterSubnetQuotaExceededFault": return [3 /*break*/, 4];
                    case "DependentServiceRequestThrottlingFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#DependentServiceRequestThrottlingFault": return [3 /*break*/, 6];
                    case "InvalidSubnet": return [3 /*break*/, 8];
                    case "com.amazonaws.redshift#InvalidSubnet": return [3 /*break*/, 8];
                    case "SubnetAlreadyInUse": return [3 /*break*/, 10];
                    case "com.amazonaws.redshift#SubnetAlreadyInUse": return [3 /*break*/, 10];
                    case "UnauthorizedOperation": return [3 /*break*/, 12];
                    case "com.amazonaws.redshift#UnauthorizedOperation": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterSubnetGroupNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterSubnetQuotaExceededFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryDependentServiceRequestThrottlingFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidSubnetResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_querySubnetAlreadyInUseResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryModifyEndpointAccessCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryModifyEndpointAccessCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryEndpointAccess(data.ModifyEndpointAccessResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryModifyEndpointAccessCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "EndpointNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#EndpointNotFoundFault": return [3 /*break*/, 4];
                    case "InvalidClusterSecurityGroupStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#InvalidClusterSecurityGroupStateFault": return [3 /*break*/, 6];
                    case "InvalidClusterStateFault": return [3 /*break*/, 8];
                    case "com.amazonaws.redshift#InvalidClusterStateFault": return [3 /*break*/, 8];
                    case "InvalidEndpointStateFault": return [3 /*break*/, 10];
                    case "com.amazonaws.redshift#InvalidEndpointStateFault": return [3 /*break*/, 10];
                    case "UnauthorizedOperation": return [3 /*break*/, 12];
                    case "com.amazonaws.redshift#UnauthorizedOperation": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryEndpointNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterSecurityGroupStateFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidEndpointStateFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryModifyEventSubscriptionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryModifyEventSubscriptionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryModifyEventSubscriptionResult(data.ModifyEventSubscriptionResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryModifyEventSubscriptionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidSubscriptionStateFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#InvalidSubscriptionStateFault": return [3 /*break*/, 2];
                    case "SNSInvalidTopicFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#SNSInvalidTopicFault": return [3 /*break*/, 4];
                    case "SNSNoAuthorizationFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#SNSNoAuthorizationFault": return [3 /*break*/, 6];
                    case "SNSTopicArnNotFoundFault": return [3 /*break*/, 8];
                    case "com.amazonaws.redshift#SNSTopicArnNotFoundFault": return [3 /*break*/, 8];
                    case "SourceNotFoundFault": return [3 /*break*/, 10];
                    case "com.amazonaws.redshift#SourceNotFoundFault": return [3 /*break*/, 10];
                    case "SubscriptionCategoryNotFoundFault": return [3 /*break*/, 12];
                    case "com.amazonaws.redshift#SubscriptionCategoryNotFoundFault": return [3 /*break*/, 12];
                    case "SubscriptionEventIdNotFoundFault": return [3 /*break*/, 14];
                    case "com.amazonaws.redshift#SubscriptionEventIdNotFoundFault": return [3 /*break*/, 14];
                    case "SubscriptionNotFoundFault": return [3 /*break*/, 16];
                    case "com.amazonaws.redshift#SubscriptionNotFoundFault": return [3 /*break*/, 16];
                    case "SubscriptionSeverityNotFoundFault": return [3 /*break*/, 18];
                    case "com.amazonaws.redshift#SubscriptionSeverityNotFoundFault": return [3 /*break*/, 18];
                }
                return [3 /*break*/, 20];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidSubscriptionStateFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_querySNSInvalidTopicFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_querySNSNoAuthorizationFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_querySNSTopicArnNotFoundFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_querySourceNotFoundFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_querySubscriptionCategoryNotFoundFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_querySubscriptionEventIdNotFoundFaultResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_querySubscriptionNotFoundFaultResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_querySubscriptionSeverityNotFoundFaultResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 20:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _o.label = 21;
            case 21:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryModifyScheduledActionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryModifyScheduledActionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryScheduledAction(data.ModifyScheduledActionResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryModifyScheduledActionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidScheduledActionFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#InvalidScheduledActionFault": return [3 /*break*/, 2];
                    case "InvalidScheduleFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#InvalidScheduleFault": return [3 /*break*/, 4];
                    case "ScheduledActionNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#ScheduledActionNotFoundFault": return [3 /*break*/, 6];
                    case "ScheduledActionTypeUnsupportedFault": return [3 /*break*/, 8];
                    case "com.amazonaws.redshift#ScheduledActionTypeUnsupportedFault": return [3 /*break*/, 8];
                    case "UnauthorizedOperation": return [3 /*break*/, 10];
                    case "com.amazonaws.redshift#UnauthorizedOperation": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidScheduledActionFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidScheduleFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryScheduledActionNotFoundFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryScheduledActionTypeUnsupportedFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryModifySnapshotCopyRetentionPeriodCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryModifySnapshotCopyRetentionPeriodCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryModifySnapshotCopyRetentionPeriodResult(data.ModifySnapshotCopyRetentionPeriodResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryModifySnapshotCopyRetentionPeriodCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidClusterStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#InvalidClusterStateFault": return [3 /*break*/, 4];
                    case "InvalidRetentionPeriodFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#InvalidRetentionPeriodFault": return [3 /*break*/, 6];
                    case "SnapshotCopyDisabledFault": return [3 /*break*/, 8];
                    case "com.amazonaws.redshift#SnapshotCopyDisabledFault": return [3 /*break*/, 8];
                    case "UnauthorizedOperation": return [3 /*break*/, 10];
                    case "com.amazonaws.redshift#UnauthorizedOperation": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidRetentionPeriodFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_querySnapshotCopyDisabledFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryModifySnapshotScheduleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryModifySnapshotScheduleCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_querySnapshotSchedule(data.ModifySnapshotScheduleResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryModifySnapshotScheduleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidScheduleFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#InvalidScheduleFault": return [3 /*break*/, 2];
                    case "SnapshotScheduleNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#SnapshotScheduleNotFoundFault": return [3 /*break*/, 4];
                    case "SnapshotScheduleUpdateInProgressFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#SnapshotScheduleUpdateInProgressFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidScheduleFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_querySnapshotScheduleNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_querySnapshotScheduleUpdateInProgressFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryModifyUsageLimitCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryModifyUsageLimitCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryUsageLimit(data.ModifyUsageLimitResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryModifyUsageLimitCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidUsageLimitFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#InvalidUsageLimitFault": return [3 /*break*/, 2];
                    case "UnsupportedOperationFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#UnsupportedOperationFault": return [3 /*break*/, 4];
                    case "UsageLimitNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#UsageLimitNotFoundFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidUsageLimitFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryUsageLimitNotFoundFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryPauseClusterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryPauseClusterCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryPauseClusterResult(data.PauseClusterResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryPauseClusterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidClusterStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#InvalidClusterStateFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryPurchaseReservedNodeOfferingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryPurchaseReservedNodeOfferingCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryPurchaseReservedNodeOfferingResult(data.PurchaseReservedNodeOfferingResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryPurchaseReservedNodeOfferingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ReservedNodeAlreadyExistsFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ReservedNodeAlreadyExistsFault": return [3 /*break*/, 2];
                    case "ReservedNodeOfferingNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#ReservedNodeOfferingNotFoundFault": return [3 /*break*/, 4];
                    case "ReservedNodeQuotaExceededFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#ReservedNodeQuotaExceededFault": return [3 /*break*/, 6];
                    case "UnsupportedOperationFault": return [3 /*break*/, 8];
                    case "com.amazonaws.redshift#UnsupportedOperationFault": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryReservedNodeAlreadyExistsFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryReservedNodeOfferingNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryReservedNodeQuotaExceededFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryRebootClusterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryRebootClusterCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryRebootClusterResult(data.RebootClusterResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryRebootClusterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidClusterStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#InvalidClusterStateFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryResetClusterParameterGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryResetClusterParameterGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryClusterParameterGroupNameMessage(data.ResetClusterParameterGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryResetClusterParameterGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterParameterGroupNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterParameterGroupNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidClusterParameterGroupStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#InvalidClusterParameterGroupStateFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterParameterGroupNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterParameterGroupStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryResizeClusterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryResizeClusterCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryResizeClusterResult(data.ResizeClusterResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryResizeClusterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "InsufficientClusterCapacityFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#InsufficientClusterCapacityFault": return [3 /*break*/, 4];
                    case "InvalidClusterStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#InvalidClusterStateFault": return [3 /*break*/, 6];
                    case "LimitExceededFault": return [3 /*break*/, 8];
                    case "com.amazonaws.redshift#LimitExceededFault": return [3 /*break*/, 8];
                    case "NumberOfNodesPerClusterLimitExceededFault": return [3 /*break*/, 10];
                    case "com.amazonaws.redshift#NumberOfNodesPerClusterLimitExceededFault": return [3 /*break*/, 10];
                    case "NumberOfNodesQuotaExceededFault": return [3 /*break*/, 12];
                    case "com.amazonaws.redshift#NumberOfNodesQuotaExceededFault": return [3 /*break*/, 12];
                    case "UnauthorizedOperation": return [3 /*break*/, 14];
                    case "com.amazonaws.redshift#UnauthorizedOperation": return [3 /*break*/, 14];
                    case "UnsupportedOperationFault": return [3 /*break*/, 16];
                    case "com.amazonaws.redshift#UnsupportedOperationFault": return [3 /*break*/, 16];
                    case "UnsupportedOptionFault": return [3 /*break*/, 18];
                    case "com.amazonaws.redshift#UnsupportedOptionFault": return [3 /*break*/, 18];
                }
                return [3 /*break*/, 20];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientClusterCapacityFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryNumberOfNodesPerClusterLimitExceededFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryNumberOfNodesQuotaExceededFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_queryUnsupportedOptionFaultResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 20:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _o.label = 21;
            case 21:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryRestoreFromClusterSnapshotCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryRestoreFromClusterSnapshotCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryRestoreFromClusterSnapshotResult(data.RestoreFromClusterSnapshotResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryRestoreFromClusterSnapshotCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, parsedBody, message;
    var _3;
    return __generator(this, function (_4) {
        switch (_4.label) {
            case 0:
                _a = [__assign({}, output)];
                _3 = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_3.body = _4.sent(), _3)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessToSnapshotDeniedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#AccessToSnapshotDeniedFault": return [3 /*break*/, 2];
                    case "ClusterAlreadyExistsFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#ClusterAlreadyExistsFault": return [3 /*break*/, 4];
                    case "ClusterParameterGroupNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#ClusterParameterGroupNotFoundFault": return [3 /*break*/, 6];
                    case "ClusterQuotaExceededFault": return [3 /*break*/, 8];
                    case "com.amazonaws.redshift#ClusterQuotaExceededFault": return [3 /*break*/, 8];
                    case "ClusterSecurityGroupNotFoundFault": return [3 /*break*/, 10];
                    case "com.amazonaws.redshift#ClusterSecurityGroupNotFoundFault": return [3 /*break*/, 10];
                    case "ClusterSnapshotNotFoundFault": return [3 /*break*/, 12];
                    case "com.amazonaws.redshift#ClusterSnapshotNotFoundFault": return [3 /*break*/, 12];
                    case "ClusterSubnetGroupNotFoundFault": return [3 /*break*/, 14];
                    case "com.amazonaws.redshift#ClusterSubnetGroupNotFoundFault": return [3 /*break*/, 14];
                    case "DependentServiceRequestThrottlingFault": return [3 /*break*/, 16];
                    case "com.amazonaws.redshift#DependentServiceRequestThrottlingFault": return [3 /*break*/, 16];
                    case "HsmClientCertificateNotFoundFault": return [3 /*break*/, 18];
                    case "com.amazonaws.redshift#HsmClientCertificateNotFoundFault": return [3 /*break*/, 18];
                    case "HsmConfigurationNotFoundFault": return [3 /*break*/, 20];
                    case "com.amazonaws.redshift#HsmConfigurationNotFoundFault": return [3 /*break*/, 20];
                    case "InsufficientClusterCapacityFault": return [3 /*break*/, 22];
                    case "com.amazonaws.redshift#InsufficientClusterCapacityFault": return [3 /*break*/, 22];
                    case "InvalidClusterSnapshotStateFault": return [3 /*break*/, 24];
                    case "com.amazonaws.redshift#InvalidClusterSnapshotStateFault": return [3 /*break*/, 24];
                    case "InvalidClusterSubnetGroupStateFault": return [3 /*break*/, 26];
                    case "com.amazonaws.redshift#InvalidClusterSubnetGroupStateFault": return [3 /*break*/, 26];
                    case "InvalidClusterTrackFault": return [3 /*break*/, 28];
                    case "com.amazonaws.redshift#InvalidClusterTrackFault": return [3 /*break*/, 28];
                    case "InvalidElasticIpFault": return [3 /*break*/, 30];
                    case "com.amazonaws.redshift#InvalidElasticIpFault": return [3 /*break*/, 30];
                    case "InvalidRestoreFault": return [3 /*break*/, 32];
                    case "com.amazonaws.redshift#InvalidRestoreFault": return [3 /*break*/, 32];
                    case "InvalidSubnet": return [3 /*break*/, 34];
                    case "com.amazonaws.redshift#InvalidSubnet": return [3 /*break*/, 34];
                    case "InvalidTagFault": return [3 /*break*/, 36];
                    case "com.amazonaws.redshift#InvalidTagFault": return [3 /*break*/, 36];
                    case "InvalidVPCNetworkStateFault": return [3 /*break*/, 38];
                    case "com.amazonaws.redshift#InvalidVPCNetworkStateFault": return [3 /*break*/, 38];
                    case "LimitExceededFault": return [3 /*break*/, 40];
                    case "com.amazonaws.redshift#LimitExceededFault": return [3 /*break*/, 40];
                    case "NumberOfNodesPerClusterLimitExceededFault": return [3 /*break*/, 42];
                    case "com.amazonaws.redshift#NumberOfNodesPerClusterLimitExceededFault": return [3 /*break*/, 42];
                    case "NumberOfNodesQuotaExceededFault": return [3 /*break*/, 44];
                    case "com.amazonaws.redshift#NumberOfNodesQuotaExceededFault": return [3 /*break*/, 44];
                    case "SnapshotScheduleNotFoundFault": return [3 /*break*/, 46];
                    case "com.amazonaws.redshift#SnapshotScheduleNotFoundFault": return [3 /*break*/, 46];
                    case "TagLimitExceededFault": return [3 /*break*/, 48];
                    case "com.amazonaws.redshift#TagLimitExceededFault": return [3 /*break*/, 48];
                    case "UnauthorizedOperation": return [3 /*break*/, 50];
                    case "com.amazonaws.redshift#UnauthorizedOperation": return [3 /*break*/, 50];
                }
                return [3 /*break*/, 52];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAccessToSnapshotDeniedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_4.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 53];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterAlreadyExistsFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_4.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 53];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterParameterGroupNotFoundFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_4.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 53];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterQuotaExceededFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_4.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 53];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterSecurityGroupNotFoundFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_4.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 53];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterSnapshotNotFoundFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_4.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 53];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterSubnetGroupNotFoundFaultResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_4.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 53];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_queryDependentServiceRequestThrottlingFaultResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_4.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 53];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_queryHsmClientCertificateNotFoundFaultResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_4.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 53];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_queryHsmConfigurationNotFoundFaultResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_4.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 53];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientClusterCapacityFaultResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_4.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 53];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterSnapshotStateFaultResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_4.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 53];
            case 26:
                _q = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterSubnetGroupStateFaultResponse(parsedOutput, context)];
            case 27:
                response = __assign.apply(void 0, [__assign.apply(void 0, _q.concat([(_4.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 53];
            case 28:
                _r = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterTrackFaultResponse(parsedOutput, context)];
            case 29:
                response = __assign.apply(void 0, [__assign.apply(void 0, _r.concat([(_4.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 53];
            case 30:
                _s = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidElasticIpFaultResponse(parsedOutput, context)];
            case 31:
                response = __assign.apply(void 0, [__assign.apply(void 0, _s.concat([(_4.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 53];
            case 32:
                _t = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidRestoreFaultResponse(parsedOutput, context)];
            case 33:
                response = __assign.apply(void 0, [__assign.apply(void 0, _t.concat([(_4.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 53];
            case 34:
                _u = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidSubnetResponse(parsedOutput, context)];
            case 35:
                response = __assign.apply(void 0, [__assign.apply(void 0, _u.concat([(_4.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 53];
            case 36:
                _v = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)];
            case 37:
                response = __assign.apply(void 0, [__assign.apply(void 0, _v.concat([(_4.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 53];
            case 38:
                _w = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)];
            case 39:
                response = __assign.apply(void 0, [__assign.apply(void 0, _w.concat([(_4.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 53];
            case 40:
                _x = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)];
            case 41:
                response = __assign.apply(void 0, [__assign.apply(void 0, _x.concat([(_4.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 53];
            case 42:
                _y = [{}];
                return [4 /*yield*/, deserializeAws_queryNumberOfNodesPerClusterLimitExceededFaultResponse(parsedOutput, context)];
            case 43:
                response = __assign.apply(void 0, [__assign.apply(void 0, _y.concat([(_4.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 53];
            case 44:
                _z = [{}];
                return [4 /*yield*/, deserializeAws_queryNumberOfNodesQuotaExceededFaultResponse(parsedOutput, context)];
            case 45:
                response = __assign.apply(void 0, [__assign.apply(void 0, _z.concat([(_4.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 53];
            case 46:
                _0 = [{}];
                return [4 /*yield*/, deserializeAws_querySnapshotScheduleNotFoundFaultResponse(parsedOutput, context)];
            case 47:
                response = __assign.apply(void 0, [__assign.apply(void 0, _0.concat([(_4.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 53];
            case 48:
                _1 = [{}];
                return [4 /*yield*/, deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context)];
            case 49:
                response = __assign.apply(void 0, [__assign.apply(void 0, _1.concat([(_4.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 53];
            case 50:
                _2 = [{}];
                return [4 /*yield*/, deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context)];
            case 51:
                response = __assign.apply(void 0, [__assign.apply(void 0, _2.concat([(_4.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 53];
            case 52:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _4.label = 53;
            case 53:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryRestoreTableFromClusterSnapshotCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryRestoreTableFromClusterSnapshotCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryRestoreTableFromClusterSnapshotResult(data.RestoreTableFromClusterSnapshotResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryRestoreTableFromClusterSnapshotCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "ClusterSnapshotNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#ClusterSnapshotNotFoundFault": return [3 /*break*/, 4];
                    case "InProgressTableRestoreQuotaExceededFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#InProgressTableRestoreQuotaExceededFault": return [3 /*break*/, 6];
                    case "InvalidClusterSnapshotStateFault": return [3 /*break*/, 8];
                    case "com.amazonaws.redshift#InvalidClusterSnapshotStateFault": return [3 /*break*/, 8];
                    case "InvalidClusterStateFault": return [3 /*break*/, 10];
                    case "com.amazonaws.redshift#InvalidClusterStateFault": return [3 /*break*/, 10];
                    case "InvalidTableRestoreArgumentFault": return [3 /*break*/, 12];
                    case "com.amazonaws.redshift#InvalidTableRestoreArgumentFault": return [3 /*break*/, 12];
                    case "UnsupportedOperationFault": return [3 /*break*/, 14];
                    case "com.amazonaws.redshift#UnsupportedOperationFault": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterSnapshotNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInProgressTableRestoreQuotaExceededFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterSnapshotStateFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTableRestoreArgumentFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryResumeClusterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryResumeClusterCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryResumeClusterResult(data.ResumeClusterResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryResumeClusterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "InsufficientClusterCapacityFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#InsufficientClusterCapacityFault": return [3 /*break*/, 4];
                    case "InvalidClusterStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#InvalidClusterStateFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientClusterCapacityFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryRevokeClusterSecurityGroupIngressCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryRevokeClusterSecurityGroupIngressCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryRevokeClusterSecurityGroupIngressResult(data.RevokeClusterSecurityGroupIngressResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryRevokeClusterSecurityGroupIngressCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AuthorizationNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#AuthorizationNotFoundFault": return [3 /*break*/, 2];
                    case "ClusterSecurityGroupNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#ClusterSecurityGroupNotFoundFault": return [3 /*break*/, 4];
                    case "InvalidClusterSecurityGroupStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#InvalidClusterSecurityGroupStateFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAuthorizationNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterSecurityGroupNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterSecurityGroupStateFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryRevokeEndpointAccessCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryRevokeEndpointAccessCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryEndpointAuthorization(data.RevokeEndpointAccessResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryRevokeEndpointAccessCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "EndpointAuthorizationNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#EndpointAuthorizationNotFoundFault": return [3 /*break*/, 4];
                    case "EndpointNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#EndpointNotFoundFault": return [3 /*break*/, 6];
                    case "InvalidAuthorizationStateFault": return [3 /*break*/, 8];
                    case "com.amazonaws.redshift#InvalidAuthorizationStateFault": return [3 /*break*/, 8];
                    case "InvalidClusterSecurityGroupStateFault": return [3 /*break*/, 10];
                    case "com.amazonaws.redshift#InvalidClusterSecurityGroupStateFault": return [3 /*break*/, 10];
                    case "InvalidClusterStateFault": return [3 /*break*/, 12];
                    case "com.amazonaws.redshift#InvalidClusterStateFault": return [3 /*break*/, 12];
                    case "InvalidEndpointStateFault": return [3 /*break*/, 14];
                    case "com.amazonaws.redshift#InvalidEndpointStateFault": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryEndpointAuthorizationNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryEndpointNotFoundFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidAuthorizationStateFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterSecurityGroupStateFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidEndpointStateFaultResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryRevokeSnapshotAccessCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryRevokeSnapshotAccessCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryRevokeSnapshotAccessResult(data.RevokeSnapshotAccessResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryRevokeSnapshotAccessCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessToSnapshotDeniedFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#AccessToSnapshotDeniedFault": return [3 /*break*/, 2];
                    case "AuthorizationNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#AuthorizationNotFoundFault": return [3 /*break*/, 4];
                    case "ClusterSnapshotNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#ClusterSnapshotNotFoundFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAccessToSnapshotDeniedFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryAuthorizationNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterSnapshotNotFoundFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryRotateEncryptionKeyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryRotateEncryptionKeyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryRotateEncryptionKeyResult(data.RotateEncryptionKeyResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryRotateEncryptionKeyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "DependentServiceRequestThrottlingFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#DependentServiceRequestThrottlingFault": return [3 /*break*/, 4];
                    case "InvalidClusterStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#InvalidClusterStateFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryDependentServiceRequestThrottlingFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUpdatePartnerStatusCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUpdatePartnerStatusCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryPartnerIntegrationOutputMessage(data.UpdatePartnerStatusResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryUpdatePartnerStatusCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.redshift#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "PartnerNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.redshift#PartnerNotFoundFault": return [3 /*break*/, 4];
                    case "UnauthorizedPartnerIntegrationFault": return [3 /*break*/, 6];
                    case "com.amazonaws.redshift#UnauthorizedPartnerIntegrationFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryPartnerNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryUnauthorizedPartnerIntegrationFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_queryAccessToClusterDeniedFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryAccessToClusterDeniedFault(body.Error, context);
        contents = __assign({ name: "AccessToClusterDeniedFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryAccessToSnapshotDeniedFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryAccessToSnapshotDeniedFault(body.Error, context);
        contents = __assign({ name: "AccessToSnapshotDeniedFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryAuthorizationAlreadyExistsFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryAuthorizationAlreadyExistsFault(body.Error, context);
        contents = __assign({ name: "AuthorizationAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryAuthorizationNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryAuthorizationNotFoundFault(body.Error, context);
        contents = __assign({ name: "AuthorizationNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryAuthorizationQuotaExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryAuthorizationQuotaExceededFault(body.Error, context);
        contents = __assign({ name: "AuthorizationQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryBatchDeleteRequestSizeExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryBatchDeleteRequestSizeExceededFault(body.Error, context);
        contents = __assign({ name: "BatchDeleteRequestSizeExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryBatchModifyClusterSnapshotsLimitExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryBatchModifyClusterSnapshotsLimitExceededFault(body.Error, context);
        contents = __assign({ name: "BatchModifyClusterSnapshotsLimitExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryBucketNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryBucketNotFoundFault(body.Error, context);
        contents = __assign({ name: "BucketNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryClusterAlreadyExistsFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryClusterAlreadyExistsFault(body.Error, context);
        contents = __assign({ name: "ClusterAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryClusterNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryClusterNotFoundFault(body.Error, context);
        contents = __assign({ name: "ClusterNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryClusterOnLatestRevisionFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryClusterOnLatestRevisionFault(body.Error, context);
        contents = __assign({ name: "ClusterOnLatestRevisionFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryClusterParameterGroupAlreadyExistsFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryClusterParameterGroupAlreadyExistsFault(body.Error, context);
        contents = __assign({ name: "ClusterParameterGroupAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryClusterParameterGroupNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryClusterParameterGroupNotFoundFault(body.Error, context);
        contents = __assign({ name: "ClusterParameterGroupNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryClusterParameterGroupQuotaExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryClusterParameterGroupQuotaExceededFault(body.Error, context);
        contents = __assign({ name: "ClusterParameterGroupQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryClusterQuotaExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryClusterQuotaExceededFault(body.Error, context);
        contents = __assign({ name: "ClusterQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryClusterSecurityGroupAlreadyExistsFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryClusterSecurityGroupAlreadyExistsFault(body.Error, context);
        contents = __assign({ name: "ClusterSecurityGroupAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryClusterSecurityGroupNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryClusterSecurityGroupNotFoundFault(body.Error, context);
        contents = __assign({ name: "ClusterSecurityGroupNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryClusterSecurityGroupQuotaExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryClusterSecurityGroupQuotaExceededFault(body.Error, context);
        contents = __assign({ name: "ClusterSecurityGroupQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryClusterSnapshotAlreadyExistsFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryClusterSnapshotAlreadyExistsFault(body.Error, context);
        contents = __assign({ name: "ClusterSnapshotAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryClusterSnapshotNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryClusterSnapshotNotFoundFault(body.Error, context);
        contents = __assign({ name: "ClusterSnapshotNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryClusterSnapshotQuotaExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryClusterSnapshotQuotaExceededFault(body.Error, context);
        contents = __assign({ name: "ClusterSnapshotQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryClusterSubnetGroupAlreadyExistsFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryClusterSubnetGroupAlreadyExistsFault(body.Error, context);
        contents = __assign({ name: "ClusterSubnetGroupAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryClusterSubnetGroupNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryClusterSubnetGroupNotFoundFault(body.Error, context);
        contents = __assign({ name: "ClusterSubnetGroupNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryClusterSubnetGroupQuotaExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryClusterSubnetGroupQuotaExceededFault(body.Error, context);
        contents = __assign({ name: "ClusterSubnetGroupQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryClusterSubnetQuotaExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryClusterSubnetQuotaExceededFault(body.Error, context);
        contents = __assign({ name: "ClusterSubnetQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryCopyToRegionDisabledFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryCopyToRegionDisabledFault(body.Error, context);
        contents = __assign({ name: "CopyToRegionDisabledFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDependentServiceRequestThrottlingFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDependentServiceRequestThrottlingFault(body.Error, context);
        contents = __assign({ name: "DependentServiceRequestThrottlingFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDependentServiceUnavailableFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDependentServiceUnavailableFault(body.Error, context);
        contents = __assign({ name: "DependentServiceUnavailableFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryEndpointAlreadyExistsFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryEndpointAlreadyExistsFault(body.Error, context);
        contents = __assign({ name: "EndpointAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryEndpointAuthorizationAlreadyExistsFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryEndpointAuthorizationAlreadyExistsFault(body.Error, context);
        contents = __assign({ name: "EndpointAuthorizationAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryEndpointAuthorizationNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryEndpointAuthorizationNotFoundFault(body.Error, context);
        contents = __assign({ name: "EndpointAuthorizationNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryEndpointAuthorizationsPerClusterLimitExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryEndpointAuthorizationsPerClusterLimitExceededFault(body.Error, context);
        contents = __assign({ name: "EndpointAuthorizationsPerClusterLimitExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryEndpointNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryEndpointNotFoundFault(body.Error, context);
        contents = __assign({ name: "EndpointNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryEndpointsPerAuthorizationLimitExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryEndpointsPerAuthorizationLimitExceededFault(body.Error, context);
        contents = __assign({ name: "EndpointsPerAuthorizationLimitExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryEndpointsPerClusterLimitExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryEndpointsPerClusterLimitExceededFault(body.Error, context);
        contents = __assign({ name: "EndpointsPerClusterLimitExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryEventSubscriptionQuotaExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryEventSubscriptionQuotaExceededFault(body.Error, context);
        contents = __assign({ name: "EventSubscriptionQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryHsmClientCertificateAlreadyExistsFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryHsmClientCertificateAlreadyExistsFault(body.Error, context);
        contents = __assign({ name: "HsmClientCertificateAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryHsmClientCertificateNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryHsmClientCertificateNotFoundFault(body.Error, context);
        contents = __assign({ name: "HsmClientCertificateNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryHsmClientCertificateQuotaExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryHsmClientCertificateQuotaExceededFault(body.Error, context);
        contents = __assign({ name: "HsmClientCertificateQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryHsmConfigurationAlreadyExistsFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryHsmConfigurationAlreadyExistsFault(body.Error, context);
        contents = __assign({ name: "HsmConfigurationAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryHsmConfigurationNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryHsmConfigurationNotFoundFault(body.Error, context);
        contents = __assign({ name: "HsmConfigurationNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryHsmConfigurationQuotaExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryHsmConfigurationQuotaExceededFault(body.Error, context);
        contents = __assign({ name: "HsmConfigurationQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryIncompatibleOrderableOptionsResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryIncompatibleOrderableOptions(body.Error, context);
        contents = __assign({ name: "IncompatibleOrderableOptions", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInProgressTableRestoreQuotaExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInProgressTableRestoreQuotaExceededFault(body.Error, context);
        contents = __assign({ name: "InProgressTableRestoreQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInsufficientClusterCapacityFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInsufficientClusterCapacityFault(body.Error, context);
        contents = __assign({ name: "InsufficientClusterCapacityFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInsufficientS3BucketPolicyFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInsufficientS3BucketPolicyFault(body.Error, context);
        contents = __assign({ name: "InsufficientS3BucketPolicyFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidAuthorizationStateFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidAuthorizationStateFault(body.Error, context);
        contents = __assign({ name: "InvalidAuthorizationStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidClusterParameterGroupStateFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidClusterParameterGroupStateFault(body.Error, context);
        contents = __assign({ name: "InvalidClusterParameterGroupStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidClusterSecurityGroupStateFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidClusterSecurityGroupStateFault(body.Error, context);
        contents = __assign({ name: "InvalidClusterSecurityGroupStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidClusterSnapshotScheduleStateFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidClusterSnapshotScheduleStateFault(body.Error, context);
        contents = __assign({ name: "InvalidClusterSnapshotScheduleStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidClusterSnapshotStateFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidClusterSnapshotStateFault(body.Error, context);
        contents = __assign({ name: "InvalidClusterSnapshotStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidClusterStateFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidClusterStateFault(body.Error, context);
        contents = __assign({ name: "InvalidClusterStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidClusterSubnetGroupStateFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidClusterSubnetGroupStateFault(body.Error, context);
        contents = __assign({ name: "InvalidClusterSubnetGroupStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidClusterSubnetStateFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidClusterSubnetStateFault(body.Error, context);
        contents = __assign({ name: "InvalidClusterSubnetStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidClusterTrackFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidClusterTrackFault(body.Error, context);
        contents = __assign({ name: "InvalidClusterTrackFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidElasticIpFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidElasticIpFault(body.Error, context);
        contents = __assign({ name: "InvalidElasticIpFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidEndpointStateFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidEndpointStateFault(body.Error, context);
        contents = __assign({ name: "InvalidEndpointStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidHsmClientCertificateStateFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidHsmClientCertificateStateFault(body.Error, context);
        contents = __assign({ name: "InvalidHsmClientCertificateStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidHsmConfigurationStateFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidHsmConfigurationStateFault(body.Error, context);
        contents = __assign({ name: "InvalidHsmConfigurationStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidReservedNodeStateFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidReservedNodeStateFault(body.Error, context);
        contents = __assign({ name: "InvalidReservedNodeStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidRestoreFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidRestoreFault(body.Error, context);
        contents = __assign({ name: "InvalidRestoreFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidRetentionPeriodFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidRetentionPeriodFault(body.Error, context);
        contents = __assign({ name: "InvalidRetentionPeriodFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidS3BucketNameFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidS3BucketNameFault(body.Error, context);
        contents = __assign({ name: "InvalidS3BucketNameFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidS3KeyPrefixFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidS3KeyPrefixFault(body.Error, context);
        contents = __assign({ name: "InvalidS3KeyPrefixFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidScheduledActionFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidScheduledActionFault(body.Error, context);
        contents = __assign({ name: "InvalidScheduledActionFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidScheduleFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidScheduleFault(body.Error, context);
        contents = __assign({ name: "InvalidScheduleFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidSnapshotCopyGrantStateFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidSnapshotCopyGrantStateFault(body.Error, context);
        contents = __assign({ name: "InvalidSnapshotCopyGrantStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidSubnetResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidSubnet(body.Error, context);
        contents = __assign({ name: "InvalidSubnet", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidSubscriptionStateFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidSubscriptionStateFault(body.Error, context);
        contents = __assign({ name: "InvalidSubscriptionStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidTableRestoreArgumentFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidTableRestoreArgumentFault(body.Error, context);
        contents = __assign({ name: "InvalidTableRestoreArgumentFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidTagFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidTagFault(body.Error, context);
        contents = __assign({ name: "InvalidTagFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidUsageLimitFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidUsageLimitFault(body.Error, context);
        contents = __assign({ name: "InvalidUsageLimitFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidVPCNetworkStateFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidVPCNetworkStateFault(body.Error, context);
        contents = __assign({ name: "InvalidVPCNetworkStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryLimitExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryLimitExceededFault(body.Error, context);
        contents = __assign({ name: "LimitExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryNumberOfNodesPerClusterLimitExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryNumberOfNodesPerClusterLimitExceededFault(body.Error, context);
        contents = __assign({ name: "NumberOfNodesPerClusterLimitExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryNumberOfNodesQuotaExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryNumberOfNodesQuotaExceededFault(body.Error, context);
        contents = __assign({ name: "NumberOfNodesQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryPartnerNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryPartnerNotFoundFault(body.Error, context);
        contents = __assign({ name: "PartnerNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryReservedNodeAlreadyExistsFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryReservedNodeAlreadyExistsFault(body.Error, context);
        contents = __assign({ name: "ReservedNodeAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryReservedNodeAlreadyMigratedFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryReservedNodeAlreadyMigratedFault(body.Error, context);
        contents = __assign({ name: "ReservedNodeAlreadyMigratedFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryReservedNodeNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryReservedNodeNotFoundFault(body.Error, context);
        contents = __assign({ name: "ReservedNodeNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryReservedNodeOfferingNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryReservedNodeOfferingNotFoundFault(body.Error, context);
        contents = __assign({ name: "ReservedNodeOfferingNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryReservedNodeQuotaExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryReservedNodeQuotaExceededFault(body.Error, context);
        contents = __assign({ name: "ReservedNodeQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryResizeNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryResizeNotFoundFault(body.Error, context);
        contents = __assign({ name: "ResizeNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryResourceNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryResourceNotFoundFault(body.Error, context);
        contents = __assign({ name: "ResourceNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryScheduledActionAlreadyExistsFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryScheduledActionAlreadyExistsFault(body.Error, context);
        contents = __assign({ name: "ScheduledActionAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryScheduledActionNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryScheduledActionNotFoundFault(body.Error, context);
        contents = __assign({ name: "ScheduledActionNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryScheduledActionQuotaExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryScheduledActionQuotaExceededFault(body.Error, context);
        contents = __assign({ name: "ScheduledActionQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryScheduledActionTypeUnsupportedFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryScheduledActionTypeUnsupportedFault(body.Error, context);
        contents = __assign({ name: "ScheduledActionTypeUnsupportedFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryScheduleDefinitionTypeUnsupportedFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryScheduleDefinitionTypeUnsupportedFault(body.Error, context);
        contents = __assign({ name: "ScheduleDefinitionTypeUnsupportedFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_querySnapshotCopyAlreadyDisabledFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_querySnapshotCopyAlreadyDisabledFault(body.Error, context);
        contents = __assign({ name: "SnapshotCopyAlreadyDisabledFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_querySnapshotCopyAlreadyEnabledFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_querySnapshotCopyAlreadyEnabledFault(body.Error, context);
        contents = __assign({ name: "SnapshotCopyAlreadyEnabledFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_querySnapshotCopyDisabledFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_querySnapshotCopyDisabledFault(body.Error, context);
        contents = __assign({ name: "SnapshotCopyDisabledFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_querySnapshotCopyGrantAlreadyExistsFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_querySnapshotCopyGrantAlreadyExistsFault(body.Error, context);
        contents = __assign({ name: "SnapshotCopyGrantAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_querySnapshotCopyGrantNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_querySnapshotCopyGrantNotFoundFault(body.Error, context);
        contents = __assign({ name: "SnapshotCopyGrantNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_querySnapshotCopyGrantQuotaExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_querySnapshotCopyGrantQuotaExceededFault(body.Error, context);
        contents = __assign({ name: "SnapshotCopyGrantQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_querySnapshotScheduleAlreadyExistsFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_querySnapshotScheduleAlreadyExistsFault(body.Error, context);
        contents = __assign({ name: "SnapshotScheduleAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_querySnapshotScheduleNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_querySnapshotScheduleNotFoundFault(body.Error, context);
        contents = __assign({ name: "SnapshotScheduleNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_querySnapshotScheduleQuotaExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_querySnapshotScheduleQuotaExceededFault(body.Error, context);
        contents = __assign({ name: "SnapshotScheduleQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_querySnapshotScheduleUpdateInProgressFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_querySnapshotScheduleUpdateInProgressFault(body.Error, context);
        contents = __assign({ name: "SnapshotScheduleUpdateInProgressFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_querySNSInvalidTopicFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_querySNSInvalidTopicFault(body.Error, context);
        contents = __assign({ name: "SNSInvalidTopicFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_querySNSNoAuthorizationFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_querySNSNoAuthorizationFault(body.Error, context);
        contents = __assign({ name: "SNSNoAuthorizationFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_querySNSTopicArnNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_querySNSTopicArnNotFoundFault(body.Error, context);
        contents = __assign({ name: "SNSTopicArnNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_querySourceNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_querySourceNotFoundFault(body.Error, context);
        contents = __assign({ name: "SourceNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_querySubnetAlreadyInUseResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_querySubnetAlreadyInUse(body.Error, context);
        contents = __assign({ name: "SubnetAlreadyInUse", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_querySubscriptionAlreadyExistFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_querySubscriptionAlreadyExistFault(body.Error, context);
        contents = __assign({ name: "SubscriptionAlreadyExistFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_querySubscriptionCategoryNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_querySubscriptionCategoryNotFoundFault(body.Error, context);
        contents = __assign({ name: "SubscriptionCategoryNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_querySubscriptionEventIdNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_querySubscriptionEventIdNotFoundFault(body.Error, context);
        contents = __assign({ name: "SubscriptionEventIdNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_querySubscriptionNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_querySubscriptionNotFoundFault(body.Error, context);
        contents = __assign({ name: "SubscriptionNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_querySubscriptionSeverityNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_querySubscriptionSeverityNotFoundFault(body.Error, context);
        contents = __assign({ name: "SubscriptionSeverityNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryTableLimitExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryTableLimitExceededFault(body.Error, context);
        contents = __assign({ name: "TableLimitExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryTableRestoreNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryTableRestoreNotFoundFault(body.Error, context);
        contents = __assign({ name: "TableRestoreNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryTagLimitExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryTagLimitExceededFault(body.Error, context);
        contents = __assign({ name: "TagLimitExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryUnauthorizedOperationResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryUnauthorizedOperation(body.Error, context);
        contents = __assign({ name: "UnauthorizedOperation", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryUnauthorizedPartnerIntegrationFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryUnauthorizedPartnerIntegrationFault(body.Error, context);
        contents = __assign({ name: "UnauthorizedPartnerIntegrationFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryUnknownSnapshotCopyRegionFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryUnknownSnapshotCopyRegionFault(body.Error, context);
        contents = __assign({ name: "UnknownSnapshotCopyRegionFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryUnsupportedOperationFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryUnsupportedOperationFault(body.Error, context);
        contents = __assign({ name: "UnsupportedOperationFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryUnsupportedOptionFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryUnsupportedOptionFault(body.Error, context);
        contents = __assign({ name: "UnsupportedOptionFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryUsageLimitAlreadyExistsFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryUsageLimitAlreadyExistsFault(body.Error, context);
        contents = __assign({ name: "UsageLimitAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryUsageLimitNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryUsageLimitNotFoundFault(body.Error, context);
        contents = __assign({ name: "UsageLimitNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_queryAcceptReservedNodeExchangeInputMessage = function (input, context) {
    var entries = {};
    if (input.ReservedNodeId !== undefined && input.ReservedNodeId !== null) {
        entries["ReservedNodeId"] = input.ReservedNodeId;
    }
    if (input.TargetReservedNodeOfferingId !== undefined && input.TargetReservedNodeOfferingId !== null) {
        entries["TargetReservedNodeOfferingId"] = input.TargetReservedNodeOfferingId;
    }
    return entries;
};
var serializeAws_queryAttributeNameList = function (input, context) {
    var e_1, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_1 = __values(input), input_1_1 = input_1.next(); !input_1_1.done; input_1_1 = input_1.next()) {
            var entry = input_1_1.value;
            if (entry === null) {
                continue;
            }
            entries["AttributeName." + counter] = entry;
            counter++;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (input_1_1 && !input_1_1.done && (_a = input_1.return)) _a.call(input_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return entries;
};
var serializeAws_queryAuthorizeClusterSecurityGroupIngressMessage = function (input, context) {
    var entries = {};
    if (input.ClusterSecurityGroupName !== undefined && input.ClusterSecurityGroupName !== null) {
        entries["ClusterSecurityGroupName"] = input.ClusterSecurityGroupName;
    }
    if (input.CIDRIP !== undefined && input.CIDRIP !== null) {
        entries["CIDRIP"] = input.CIDRIP;
    }
    if (input.EC2SecurityGroupName !== undefined && input.EC2SecurityGroupName !== null) {
        entries["EC2SecurityGroupName"] = input.EC2SecurityGroupName;
    }
    if (input.EC2SecurityGroupOwnerId !== undefined && input.EC2SecurityGroupOwnerId !== null) {
        entries["EC2SecurityGroupOwnerId"] = input.EC2SecurityGroupOwnerId;
    }
    return entries;
};
var serializeAws_queryAuthorizeEndpointAccessMessage = function (input, context) {
    var entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.Account !== undefined && input.Account !== null) {
        entries["Account"] = input.Account;
    }
    if (input.VpcIds !== undefined && input.VpcIds !== null) {
        var memberEntries = serializeAws_queryVpcIdentifierList(input.VpcIds, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "VpcIds." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryAuthorizeSnapshotAccessMessage = function (input, context) {
    var entries = {};
    if (input.SnapshotIdentifier !== undefined && input.SnapshotIdentifier !== null) {
        entries["SnapshotIdentifier"] = input.SnapshotIdentifier;
    }
    if (input.SnapshotClusterIdentifier !== undefined && input.SnapshotClusterIdentifier !== null) {
        entries["SnapshotClusterIdentifier"] = input.SnapshotClusterIdentifier;
    }
    if (input.AccountWithRestoreAccess !== undefined && input.AccountWithRestoreAccess !== null) {
        entries["AccountWithRestoreAccess"] = input.AccountWithRestoreAccess;
    }
    return entries;
};
var serializeAws_queryBatchDeleteClusterSnapshotsRequest = function (input, context) {
    var entries = {};
    if (input.Identifiers !== undefined && input.Identifiers !== null) {
        var memberEntries = serializeAws_queryDeleteClusterSnapshotMessageList(input.Identifiers, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Identifiers." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryBatchModifyClusterSnapshotsMessage = function (input, context) {
    var entries = {};
    if (input.SnapshotIdentifierList !== undefined && input.SnapshotIdentifierList !== null) {
        var memberEntries = serializeAws_querySnapshotIdentifierList(input.SnapshotIdentifierList, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "SnapshotIdentifierList." + key;
            entries[loc] = value;
        });
    }
    if (input.ManualSnapshotRetentionPeriod !== undefined && input.ManualSnapshotRetentionPeriod !== null) {
        entries["ManualSnapshotRetentionPeriod"] = input.ManualSnapshotRetentionPeriod;
    }
    if (input.Force !== undefined && input.Force !== null) {
        entries["Force"] = input.Force;
    }
    return entries;
};
var serializeAws_queryCancelResizeMessage = function (input, context) {
    var entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    return entries;
};
var serializeAws_queryClusterSecurityGroupNameList = function (input, context) {
    var e_2, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_2 = __values(input), input_2_1 = input_2.next(); !input_2_1.done; input_2_1 = input_2.next()) {
            var entry = input_2_1.value;
            if (entry === null) {
                continue;
            }
            entries["ClusterSecurityGroupName." + counter] = entry;
            counter++;
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (input_2_1 && !input_2_1.done && (_a = input_2.return)) _a.call(input_2);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return entries;
};
var serializeAws_queryCopyClusterSnapshotMessage = function (input, context) {
    var entries = {};
    if (input.SourceSnapshotIdentifier !== undefined && input.SourceSnapshotIdentifier !== null) {
        entries["SourceSnapshotIdentifier"] = input.SourceSnapshotIdentifier;
    }
    if (input.SourceSnapshotClusterIdentifier !== undefined && input.SourceSnapshotClusterIdentifier !== null) {
        entries["SourceSnapshotClusterIdentifier"] = input.SourceSnapshotClusterIdentifier;
    }
    if (input.TargetSnapshotIdentifier !== undefined && input.TargetSnapshotIdentifier !== null) {
        entries["TargetSnapshotIdentifier"] = input.TargetSnapshotIdentifier;
    }
    if (input.ManualSnapshotRetentionPeriod !== undefined && input.ManualSnapshotRetentionPeriod !== null) {
        entries["ManualSnapshotRetentionPeriod"] = input.ManualSnapshotRetentionPeriod;
    }
    return entries;
};
var serializeAws_queryCreateClusterMessage = function (input, context) {
    var entries = {};
    if (input.DBName !== undefined && input.DBName !== null) {
        entries["DBName"] = input.DBName;
    }
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.ClusterType !== undefined && input.ClusterType !== null) {
        entries["ClusterType"] = input.ClusterType;
    }
    if (input.NodeType !== undefined && input.NodeType !== null) {
        entries["NodeType"] = input.NodeType;
    }
    if (input.MasterUsername !== undefined && input.MasterUsername !== null) {
        entries["MasterUsername"] = input.MasterUsername;
    }
    if (input.MasterUserPassword !== undefined && input.MasterUserPassword !== null) {
        entries["MasterUserPassword"] = input.MasterUserPassword;
    }
    if (input.ClusterSecurityGroups !== undefined && input.ClusterSecurityGroups !== null) {
        var memberEntries = serializeAws_queryClusterSecurityGroupNameList(input.ClusterSecurityGroups, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ClusterSecurityGroups." + key;
            entries[loc] = value;
        });
    }
    if (input.VpcSecurityGroupIds !== undefined && input.VpcSecurityGroupIds !== null) {
        var memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "VpcSecurityGroupIds." + key;
            entries[loc] = value;
        });
    }
    if (input.ClusterSubnetGroupName !== undefined && input.ClusterSubnetGroupName !== null) {
        entries["ClusterSubnetGroupName"] = input.ClusterSubnetGroupName;
    }
    if (input.AvailabilityZone !== undefined && input.AvailabilityZone !== null) {
        entries["AvailabilityZone"] = input.AvailabilityZone;
    }
    if (input.PreferredMaintenanceWindow !== undefined && input.PreferredMaintenanceWindow !== null) {
        entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
    }
    if (input.ClusterParameterGroupName !== undefined && input.ClusterParameterGroupName !== null) {
        entries["ClusterParameterGroupName"] = input.ClusterParameterGroupName;
    }
    if (input.AutomatedSnapshotRetentionPeriod !== undefined && input.AutomatedSnapshotRetentionPeriod !== null) {
        entries["AutomatedSnapshotRetentionPeriod"] = input.AutomatedSnapshotRetentionPeriod;
    }
    if (input.ManualSnapshotRetentionPeriod !== undefined && input.ManualSnapshotRetentionPeriod !== null) {
        entries["ManualSnapshotRetentionPeriod"] = input.ManualSnapshotRetentionPeriod;
    }
    if (input.Port !== undefined && input.Port !== null) {
        entries["Port"] = input.Port;
    }
    if (input.ClusterVersion !== undefined && input.ClusterVersion !== null) {
        entries["ClusterVersion"] = input.ClusterVersion;
    }
    if (input.AllowVersionUpgrade !== undefined && input.AllowVersionUpgrade !== null) {
        entries["AllowVersionUpgrade"] = input.AllowVersionUpgrade;
    }
    if (input.NumberOfNodes !== undefined && input.NumberOfNodes !== null) {
        entries["NumberOfNodes"] = input.NumberOfNodes;
    }
    if (input.PubliclyAccessible !== undefined && input.PubliclyAccessible !== null) {
        entries["PubliclyAccessible"] = input.PubliclyAccessible;
    }
    if (input.Encrypted !== undefined && input.Encrypted !== null) {
        entries["Encrypted"] = input.Encrypted;
    }
    if (input.HsmClientCertificateIdentifier !== undefined && input.HsmClientCertificateIdentifier !== null) {
        entries["HsmClientCertificateIdentifier"] = input.HsmClientCertificateIdentifier;
    }
    if (input.HsmConfigurationIdentifier !== undefined && input.HsmConfigurationIdentifier !== null) {
        entries["HsmConfigurationIdentifier"] = input.HsmConfigurationIdentifier;
    }
    if (input.ElasticIp !== undefined && input.ElasticIp !== null) {
        entries["ElasticIp"] = input.ElasticIp;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    if (input.KmsKeyId !== undefined && input.KmsKeyId !== null) {
        entries["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.EnhancedVpcRouting !== undefined && input.EnhancedVpcRouting !== null) {
        entries["EnhancedVpcRouting"] = input.EnhancedVpcRouting;
    }
    if (input.AdditionalInfo !== undefined && input.AdditionalInfo !== null) {
        entries["AdditionalInfo"] = input.AdditionalInfo;
    }
    if (input.IamRoles !== undefined && input.IamRoles !== null) {
        var memberEntries = serializeAws_queryIamRoleArnList(input.IamRoles, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "IamRoles." + key;
            entries[loc] = value;
        });
    }
    if (input.MaintenanceTrackName !== undefined && input.MaintenanceTrackName !== null) {
        entries["MaintenanceTrackName"] = input.MaintenanceTrackName;
    }
    if (input.SnapshotScheduleIdentifier !== undefined && input.SnapshotScheduleIdentifier !== null) {
        entries["SnapshotScheduleIdentifier"] = input.SnapshotScheduleIdentifier;
    }
    if (input.AvailabilityZoneRelocation !== undefined && input.AvailabilityZoneRelocation !== null) {
        entries["AvailabilityZoneRelocation"] = input.AvailabilityZoneRelocation;
    }
    if (input.AquaConfigurationStatus !== undefined && input.AquaConfigurationStatus !== null) {
        entries["AquaConfigurationStatus"] = input.AquaConfigurationStatus;
    }
    return entries;
};
var serializeAws_queryCreateClusterParameterGroupMessage = function (input, context) {
    var entries = {};
    if (input.ParameterGroupName !== undefined && input.ParameterGroupName !== null) {
        entries["ParameterGroupName"] = input.ParameterGroupName;
    }
    if (input.ParameterGroupFamily !== undefined && input.ParameterGroupFamily !== null) {
        entries["ParameterGroupFamily"] = input.ParameterGroupFamily;
    }
    if (input.Description !== undefined && input.Description !== null) {
        entries["Description"] = input.Description;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryCreateClusterSecurityGroupMessage = function (input, context) {
    var entries = {};
    if (input.ClusterSecurityGroupName !== undefined && input.ClusterSecurityGroupName !== null) {
        entries["ClusterSecurityGroupName"] = input.ClusterSecurityGroupName;
    }
    if (input.Description !== undefined && input.Description !== null) {
        entries["Description"] = input.Description;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryCreateClusterSnapshotMessage = function (input, context) {
    var entries = {};
    if (input.SnapshotIdentifier !== undefined && input.SnapshotIdentifier !== null) {
        entries["SnapshotIdentifier"] = input.SnapshotIdentifier;
    }
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.ManualSnapshotRetentionPeriod !== undefined && input.ManualSnapshotRetentionPeriod !== null) {
        entries["ManualSnapshotRetentionPeriod"] = input.ManualSnapshotRetentionPeriod;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryCreateClusterSubnetGroupMessage = function (input, context) {
    var entries = {};
    if (input.ClusterSubnetGroupName !== undefined && input.ClusterSubnetGroupName !== null) {
        entries["ClusterSubnetGroupName"] = input.ClusterSubnetGroupName;
    }
    if (input.Description !== undefined && input.Description !== null) {
        entries["Description"] = input.Description;
    }
    if (input.SubnetIds !== undefined && input.SubnetIds !== null) {
        var memberEntries = serializeAws_querySubnetIdentifierList(input.SubnetIds, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "SubnetIds." + key;
            entries[loc] = value;
        });
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryCreateEndpointAccessMessage = function (input, context) {
    var entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.ResourceOwner !== undefined && input.ResourceOwner !== null) {
        entries["ResourceOwner"] = input.ResourceOwner;
    }
    if (input.EndpointName !== undefined && input.EndpointName !== null) {
        entries["EndpointName"] = input.EndpointName;
    }
    if (input.SubnetGroupName !== undefined && input.SubnetGroupName !== null) {
        entries["SubnetGroupName"] = input.SubnetGroupName;
    }
    if (input.VpcSecurityGroupIds !== undefined && input.VpcSecurityGroupIds !== null) {
        var memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "VpcSecurityGroupIds." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryCreateEventSubscriptionMessage = function (input, context) {
    var entries = {};
    if (input.SubscriptionName !== undefined && input.SubscriptionName !== null) {
        entries["SubscriptionName"] = input.SubscriptionName;
    }
    if (input.SnsTopicArn !== undefined && input.SnsTopicArn !== null) {
        entries["SnsTopicArn"] = input.SnsTopicArn;
    }
    if (input.SourceType !== undefined && input.SourceType !== null) {
        entries["SourceType"] = input.SourceType;
    }
    if (input.SourceIds !== undefined && input.SourceIds !== null) {
        var memberEntries = serializeAws_querySourceIdsList(input.SourceIds, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "SourceIds." + key;
            entries[loc] = value;
        });
    }
    if (input.EventCategories !== undefined && input.EventCategories !== null) {
        var memberEntries = serializeAws_queryEventCategoriesList(input.EventCategories, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "EventCategories." + key;
            entries[loc] = value;
        });
    }
    if (input.Severity !== undefined && input.Severity !== null) {
        entries["Severity"] = input.Severity;
    }
    if (input.Enabled !== undefined && input.Enabled !== null) {
        entries["Enabled"] = input.Enabled;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryCreateHsmClientCertificateMessage = function (input, context) {
    var entries = {};
    if (input.HsmClientCertificateIdentifier !== undefined && input.HsmClientCertificateIdentifier !== null) {
        entries["HsmClientCertificateIdentifier"] = input.HsmClientCertificateIdentifier;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryCreateHsmConfigurationMessage = function (input, context) {
    var entries = {};
    if (input.HsmConfigurationIdentifier !== undefined && input.HsmConfigurationIdentifier !== null) {
        entries["HsmConfigurationIdentifier"] = input.HsmConfigurationIdentifier;
    }
    if (input.Description !== undefined && input.Description !== null) {
        entries["Description"] = input.Description;
    }
    if (input.HsmIpAddress !== undefined && input.HsmIpAddress !== null) {
        entries["HsmIpAddress"] = input.HsmIpAddress;
    }
    if (input.HsmPartitionName !== undefined && input.HsmPartitionName !== null) {
        entries["HsmPartitionName"] = input.HsmPartitionName;
    }
    if (input.HsmPartitionPassword !== undefined && input.HsmPartitionPassword !== null) {
        entries["HsmPartitionPassword"] = input.HsmPartitionPassword;
    }
    if (input.HsmServerPublicCertificate !== undefined && input.HsmServerPublicCertificate !== null) {
        entries["HsmServerPublicCertificate"] = input.HsmServerPublicCertificate;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryCreateScheduledActionMessage = function (input, context) {
    var entries = {};
    if (input.ScheduledActionName !== undefined && input.ScheduledActionName !== null) {
        entries["ScheduledActionName"] = input.ScheduledActionName;
    }
    if (input.TargetAction !== undefined && input.TargetAction !== null) {
        var memberEntries = serializeAws_queryScheduledActionType(input.TargetAction, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TargetAction." + key;
            entries[loc] = value;
        });
    }
    if (input.Schedule !== undefined && input.Schedule !== null) {
        entries["Schedule"] = input.Schedule;
    }
    if (input.IamRole !== undefined && input.IamRole !== null) {
        entries["IamRole"] = input.IamRole;
    }
    if (input.ScheduledActionDescription !== undefined && input.ScheduledActionDescription !== null) {
        entries["ScheduledActionDescription"] = input.ScheduledActionDescription;
    }
    if (input.StartTime !== undefined && input.StartTime !== null) {
        entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
    }
    if (input.EndTime !== undefined && input.EndTime !== null) {
        entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
    }
    if (input.Enable !== undefined && input.Enable !== null) {
        entries["Enable"] = input.Enable;
    }
    return entries;
};
var serializeAws_queryCreateSnapshotCopyGrantMessage = function (input, context) {
    var entries = {};
    if (input.SnapshotCopyGrantName !== undefined && input.SnapshotCopyGrantName !== null) {
        entries["SnapshotCopyGrantName"] = input.SnapshotCopyGrantName;
    }
    if (input.KmsKeyId !== undefined && input.KmsKeyId !== null) {
        entries["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryCreateSnapshotScheduleMessage = function (input, context) {
    var entries = {};
    if (input.ScheduleDefinitions !== undefined && input.ScheduleDefinitions !== null) {
        var memberEntries = serializeAws_queryScheduleDefinitionList(input.ScheduleDefinitions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ScheduleDefinitions." + key;
            entries[loc] = value;
        });
    }
    if (input.ScheduleIdentifier !== undefined && input.ScheduleIdentifier !== null) {
        entries["ScheduleIdentifier"] = input.ScheduleIdentifier;
    }
    if (input.ScheduleDescription !== undefined && input.ScheduleDescription !== null) {
        entries["ScheduleDescription"] = input.ScheduleDescription;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    if (input.DryRun !== undefined && input.DryRun !== null) {
        entries["DryRun"] = input.DryRun;
    }
    if (input.NextInvocations !== undefined && input.NextInvocations !== null) {
        entries["NextInvocations"] = input.NextInvocations;
    }
    return entries;
};
var serializeAws_queryCreateTagsMessage = function (input, context) {
    var entries = {};
    if (input.ResourceName !== undefined && input.ResourceName !== null) {
        entries["ResourceName"] = input.ResourceName;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryCreateUsageLimitMessage = function (input, context) {
    var entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.FeatureType !== undefined && input.FeatureType !== null) {
        entries["FeatureType"] = input.FeatureType;
    }
    if (input.LimitType !== undefined && input.LimitType !== null) {
        entries["LimitType"] = input.LimitType;
    }
    if (input.Amount !== undefined && input.Amount !== null) {
        entries["Amount"] = input.Amount;
    }
    if (input.Period !== undefined && input.Period !== null) {
        entries["Period"] = input.Period;
    }
    if (input.BreachAction !== undefined && input.BreachAction !== null) {
        entries["BreachAction"] = input.BreachAction;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDbGroupList = function (input, context) {
    var e_3, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_3 = __values(input), input_3_1 = input_3.next(); !input_3_1.done; input_3_1 = input_3.next()) {
            var entry = input_3_1.value;
            if (entry === null) {
                continue;
            }
            entries["DbGroup." + counter] = entry;
            counter++;
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (input_3_1 && !input_3_1.done && (_a = input_3.return)) _a.call(input_3);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return entries;
};
var serializeAws_queryDeleteClusterMessage = function (input, context) {
    var entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.SkipFinalClusterSnapshot !== undefined && input.SkipFinalClusterSnapshot !== null) {
        entries["SkipFinalClusterSnapshot"] = input.SkipFinalClusterSnapshot;
    }
    if (input.FinalClusterSnapshotIdentifier !== undefined && input.FinalClusterSnapshotIdentifier !== null) {
        entries["FinalClusterSnapshotIdentifier"] = input.FinalClusterSnapshotIdentifier;
    }
    if (input.FinalClusterSnapshotRetentionPeriod !== undefined && input.FinalClusterSnapshotRetentionPeriod !== null) {
        entries["FinalClusterSnapshotRetentionPeriod"] = input.FinalClusterSnapshotRetentionPeriod;
    }
    return entries;
};
var serializeAws_queryDeleteClusterParameterGroupMessage = function (input, context) {
    var entries = {};
    if (input.ParameterGroupName !== undefined && input.ParameterGroupName !== null) {
        entries["ParameterGroupName"] = input.ParameterGroupName;
    }
    return entries;
};
var serializeAws_queryDeleteClusterSecurityGroupMessage = function (input, context) {
    var entries = {};
    if (input.ClusterSecurityGroupName !== undefined && input.ClusterSecurityGroupName !== null) {
        entries["ClusterSecurityGroupName"] = input.ClusterSecurityGroupName;
    }
    return entries;
};
var serializeAws_queryDeleteClusterSnapshotMessage = function (input, context) {
    var entries = {};
    if (input.SnapshotIdentifier !== undefined && input.SnapshotIdentifier !== null) {
        entries["SnapshotIdentifier"] = input.SnapshotIdentifier;
    }
    if (input.SnapshotClusterIdentifier !== undefined && input.SnapshotClusterIdentifier !== null) {
        entries["SnapshotClusterIdentifier"] = input.SnapshotClusterIdentifier;
    }
    return entries;
};
var serializeAws_queryDeleteClusterSnapshotMessageList = function (input, context) {
    var e_4, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_4 = __values(input), input_4_1 = input_4.next(); !input_4_1.done; input_4_1 = input_4.next()) {
            var entry = input_4_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryDeleteClusterSnapshotMessage(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["DeleteClusterSnapshotMessage." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (input_4_1 && !input_4_1.done && (_a = input_4.return)) _a.call(input_4);
        }
        finally { if (e_4) throw e_4.error; }
    }
    return entries;
};
var serializeAws_queryDeleteClusterSubnetGroupMessage = function (input, context) {
    var entries = {};
    if (input.ClusterSubnetGroupName !== undefined && input.ClusterSubnetGroupName !== null) {
        entries["ClusterSubnetGroupName"] = input.ClusterSubnetGroupName;
    }
    return entries;
};
var serializeAws_queryDeleteEndpointAccessMessage = function (input, context) {
    var entries = {};
    if (input.EndpointName !== undefined && input.EndpointName !== null) {
        entries["EndpointName"] = input.EndpointName;
    }
    return entries;
};
var serializeAws_queryDeleteEventSubscriptionMessage = function (input, context) {
    var entries = {};
    if (input.SubscriptionName !== undefined && input.SubscriptionName !== null) {
        entries["SubscriptionName"] = input.SubscriptionName;
    }
    return entries;
};
var serializeAws_queryDeleteHsmClientCertificateMessage = function (input, context) {
    var entries = {};
    if (input.HsmClientCertificateIdentifier !== undefined && input.HsmClientCertificateIdentifier !== null) {
        entries["HsmClientCertificateIdentifier"] = input.HsmClientCertificateIdentifier;
    }
    return entries;
};
var serializeAws_queryDeleteHsmConfigurationMessage = function (input, context) {
    var entries = {};
    if (input.HsmConfigurationIdentifier !== undefined && input.HsmConfigurationIdentifier !== null) {
        entries["HsmConfigurationIdentifier"] = input.HsmConfigurationIdentifier;
    }
    return entries;
};
var serializeAws_queryDeleteScheduledActionMessage = function (input, context) {
    var entries = {};
    if (input.ScheduledActionName !== undefined && input.ScheduledActionName !== null) {
        entries["ScheduledActionName"] = input.ScheduledActionName;
    }
    return entries;
};
var serializeAws_queryDeleteSnapshotCopyGrantMessage = function (input, context) {
    var entries = {};
    if (input.SnapshotCopyGrantName !== undefined && input.SnapshotCopyGrantName !== null) {
        entries["SnapshotCopyGrantName"] = input.SnapshotCopyGrantName;
    }
    return entries;
};
var serializeAws_queryDeleteSnapshotScheduleMessage = function (input, context) {
    var entries = {};
    if (input.ScheduleIdentifier !== undefined && input.ScheduleIdentifier !== null) {
        entries["ScheduleIdentifier"] = input.ScheduleIdentifier;
    }
    return entries;
};
var serializeAws_queryDeleteTagsMessage = function (input, context) {
    var entries = {};
    if (input.ResourceName !== undefined && input.ResourceName !== null) {
        entries["ResourceName"] = input.ResourceName;
    }
    if (input.TagKeys !== undefined && input.TagKeys !== null) {
        var memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TagKeys." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDeleteUsageLimitMessage = function (input, context) {
    var entries = {};
    if (input.UsageLimitId !== undefined && input.UsageLimitId !== null) {
        entries["UsageLimitId"] = input.UsageLimitId;
    }
    return entries;
};
var serializeAws_queryDescribeAccountAttributesMessage = function (input, context) {
    var entries = {};
    if (input.AttributeNames !== undefined && input.AttributeNames !== null) {
        var memberEntries = serializeAws_queryAttributeNameList(input.AttributeNames, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "AttributeNames." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDescribeClusterDbRevisionsMessage = function (input, context) {
    var entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    return entries;
};
var serializeAws_queryDescribeClusterParameterGroupsMessage = function (input, context) {
    var entries = {};
    if (input.ParameterGroupName !== undefined && input.ParameterGroupName !== null) {
        entries["ParameterGroupName"] = input.ParameterGroupName;
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.TagKeys !== undefined && input.TagKeys !== null) {
        var memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TagKeys." + key;
            entries[loc] = value;
        });
    }
    if (input.TagValues !== undefined && input.TagValues !== null) {
        var memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TagValues." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDescribeClusterParametersMessage = function (input, context) {
    var entries = {};
    if (input.ParameterGroupName !== undefined && input.ParameterGroupName !== null) {
        entries["ParameterGroupName"] = input.ParameterGroupName;
    }
    if (input.Source !== undefined && input.Source !== null) {
        entries["Source"] = input.Source;
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    return entries;
};
var serializeAws_queryDescribeClusterSecurityGroupsMessage = function (input, context) {
    var entries = {};
    if (input.ClusterSecurityGroupName !== undefined && input.ClusterSecurityGroupName !== null) {
        entries["ClusterSecurityGroupName"] = input.ClusterSecurityGroupName;
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.TagKeys !== undefined && input.TagKeys !== null) {
        var memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TagKeys." + key;
            entries[loc] = value;
        });
    }
    if (input.TagValues !== undefined && input.TagValues !== null) {
        var memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TagValues." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDescribeClustersMessage = function (input, context) {
    var entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.TagKeys !== undefined && input.TagKeys !== null) {
        var memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TagKeys." + key;
            entries[loc] = value;
        });
    }
    if (input.TagValues !== undefined && input.TagValues !== null) {
        var memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TagValues." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDescribeClusterSnapshotsMessage = function (input, context) {
    var entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.SnapshotIdentifier !== undefined && input.SnapshotIdentifier !== null) {
        entries["SnapshotIdentifier"] = input.SnapshotIdentifier;
    }
    if (input.SnapshotType !== undefined && input.SnapshotType !== null) {
        entries["SnapshotType"] = input.SnapshotType;
    }
    if (input.StartTime !== undefined && input.StartTime !== null) {
        entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
    }
    if (input.EndTime !== undefined && input.EndTime !== null) {
        entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.OwnerAccount !== undefined && input.OwnerAccount !== null) {
        entries["OwnerAccount"] = input.OwnerAccount;
    }
    if (input.TagKeys !== undefined && input.TagKeys !== null) {
        var memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TagKeys." + key;
            entries[loc] = value;
        });
    }
    if (input.TagValues !== undefined && input.TagValues !== null) {
        var memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TagValues." + key;
            entries[loc] = value;
        });
    }
    if (input.ClusterExists !== undefined && input.ClusterExists !== null) {
        entries["ClusterExists"] = input.ClusterExists;
    }
    if (input.SortingEntities !== undefined && input.SortingEntities !== null) {
        var memberEntries = serializeAws_querySnapshotSortingEntityList(input.SortingEntities, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "SortingEntities." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDescribeClusterSubnetGroupsMessage = function (input, context) {
    var entries = {};
    if (input.ClusterSubnetGroupName !== undefined && input.ClusterSubnetGroupName !== null) {
        entries["ClusterSubnetGroupName"] = input.ClusterSubnetGroupName;
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.TagKeys !== undefined && input.TagKeys !== null) {
        var memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TagKeys." + key;
            entries[loc] = value;
        });
    }
    if (input.TagValues !== undefined && input.TagValues !== null) {
        var memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TagValues." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDescribeClusterTracksMessage = function (input, context) {
    var entries = {};
    if (input.MaintenanceTrackName !== undefined && input.MaintenanceTrackName !== null) {
        entries["MaintenanceTrackName"] = input.MaintenanceTrackName;
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    return entries;
};
var serializeAws_queryDescribeClusterVersionsMessage = function (input, context) {
    var entries = {};
    if (input.ClusterVersion !== undefined && input.ClusterVersion !== null) {
        entries["ClusterVersion"] = input.ClusterVersion;
    }
    if (input.ClusterParameterGroupFamily !== undefined && input.ClusterParameterGroupFamily !== null) {
        entries["ClusterParameterGroupFamily"] = input.ClusterParameterGroupFamily;
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    return entries;
};
var serializeAws_queryDescribeDefaultClusterParametersMessage = function (input, context) {
    var entries = {};
    if (input.ParameterGroupFamily !== undefined && input.ParameterGroupFamily !== null) {
        entries["ParameterGroupFamily"] = input.ParameterGroupFamily;
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    return entries;
};
var serializeAws_queryDescribeEndpointAccessMessage = function (input, context) {
    var entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.ResourceOwner !== undefined && input.ResourceOwner !== null) {
        entries["ResourceOwner"] = input.ResourceOwner;
    }
    if (input.EndpointName !== undefined && input.EndpointName !== null) {
        entries["EndpointName"] = input.EndpointName;
    }
    if (input.VpcId !== undefined && input.VpcId !== null) {
        entries["VpcId"] = input.VpcId;
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    return entries;
};
var serializeAws_queryDescribeEndpointAuthorizationMessage = function (input, context) {
    var entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.Account !== undefined && input.Account !== null) {
        entries["Account"] = input.Account;
    }
    if (input.Grantee !== undefined && input.Grantee !== null) {
        entries["Grantee"] = input.Grantee;
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    return entries;
};
var serializeAws_queryDescribeEventCategoriesMessage = function (input, context) {
    var entries = {};
    if (input.SourceType !== undefined && input.SourceType !== null) {
        entries["SourceType"] = input.SourceType;
    }
    return entries;
};
var serializeAws_queryDescribeEventsMessage = function (input, context) {
    var entries = {};
    if (input.SourceIdentifier !== undefined && input.SourceIdentifier !== null) {
        entries["SourceIdentifier"] = input.SourceIdentifier;
    }
    if (input.SourceType !== undefined && input.SourceType !== null) {
        entries["SourceType"] = input.SourceType;
    }
    if (input.StartTime !== undefined && input.StartTime !== null) {
        entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
    }
    if (input.EndTime !== undefined && input.EndTime !== null) {
        entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
    }
    if (input.Duration !== undefined && input.Duration !== null) {
        entries["Duration"] = input.Duration;
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    return entries;
};
var serializeAws_queryDescribeEventSubscriptionsMessage = function (input, context) {
    var entries = {};
    if (input.SubscriptionName !== undefined && input.SubscriptionName !== null) {
        entries["SubscriptionName"] = input.SubscriptionName;
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.TagKeys !== undefined && input.TagKeys !== null) {
        var memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TagKeys." + key;
            entries[loc] = value;
        });
    }
    if (input.TagValues !== undefined && input.TagValues !== null) {
        var memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TagValues." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDescribeHsmClientCertificatesMessage = function (input, context) {
    var entries = {};
    if (input.HsmClientCertificateIdentifier !== undefined && input.HsmClientCertificateIdentifier !== null) {
        entries["HsmClientCertificateIdentifier"] = input.HsmClientCertificateIdentifier;
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.TagKeys !== undefined && input.TagKeys !== null) {
        var memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TagKeys." + key;
            entries[loc] = value;
        });
    }
    if (input.TagValues !== undefined && input.TagValues !== null) {
        var memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TagValues." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDescribeHsmConfigurationsMessage = function (input, context) {
    var entries = {};
    if (input.HsmConfigurationIdentifier !== undefined && input.HsmConfigurationIdentifier !== null) {
        entries["HsmConfigurationIdentifier"] = input.HsmConfigurationIdentifier;
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.TagKeys !== undefined && input.TagKeys !== null) {
        var memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TagKeys." + key;
            entries[loc] = value;
        });
    }
    if (input.TagValues !== undefined && input.TagValues !== null) {
        var memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TagValues." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDescribeLoggingStatusMessage = function (input, context) {
    var entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    return entries;
};
var serializeAws_queryDescribeNodeConfigurationOptionsMessage = function (input, context) {
    var entries = {};
    if (input.ActionType !== undefined && input.ActionType !== null) {
        entries["ActionType"] = input.ActionType;
    }
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.SnapshotIdentifier !== undefined && input.SnapshotIdentifier !== null) {
        entries["SnapshotIdentifier"] = input.SnapshotIdentifier;
    }
    if (input.OwnerAccount !== undefined && input.OwnerAccount !== null) {
        entries["OwnerAccount"] = input.OwnerAccount;
    }
    if (input.Filters !== undefined && input.Filters !== null) {
        var memberEntries = serializeAws_queryNodeConfigurationOptionsFilterList(input.Filters, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Filter." + key;
            entries[loc] = value;
        });
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    return entries;
};
var serializeAws_queryDescribeOrderableClusterOptionsMessage = function (input, context) {
    var entries = {};
    if (input.ClusterVersion !== undefined && input.ClusterVersion !== null) {
        entries["ClusterVersion"] = input.ClusterVersion;
    }
    if (input.NodeType !== undefined && input.NodeType !== null) {
        entries["NodeType"] = input.NodeType;
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    return entries;
};
var serializeAws_queryDescribePartnersInputMessage = function (input, context) {
    var entries = {};
    if (input.AccountId !== undefined && input.AccountId !== null) {
        entries["AccountId"] = input.AccountId;
    }
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.DatabaseName !== undefined && input.DatabaseName !== null) {
        entries["DatabaseName"] = input.DatabaseName;
    }
    if (input.PartnerName !== undefined && input.PartnerName !== null) {
        entries["PartnerName"] = input.PartnerName;
    }
    return entries;
};
var serializeAws_queryDescribeReservedNodeOfferingsMessage = function (input, context) {
    var entries = {};
    if (input.ReservedNodeOfferingId !== undefined && input.ReservedNodeOfferingId !== null) {
        entries["ReservedNodeOfferingId"] = input.ReservedNodeOfferingId;
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    return entries;
};
var serializeAws_queryDescribeReservedNodesMessage = function (input, context) {
    var entries = {};
    if (input.ReservedNodeId !== undefined && input.ReservedNodeId !== null) {
        entries["ReservedNodeId"] = input.ReservedNodeId;
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    return entries;
};
var serializeAws_queryDescribeResizeMessage = function (input, context) {
    var entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    return entries;
};
var serializeAws_queryDescribeScheduledActionsMessage = function (input, context) {
    var entries = {};
    if (input.ScheduledActionName !== undefined && input.ScheduledActionName !== null) {
        entries["ScheduledActionName"] = input.ScheduledActionName;
    }
    if (input.TargetActionType !== undefined && input.TargetActionType !== null) {
        entries["TargetActionType"] = input.TargetActionType;
    }
    if (input.StartTime !== undefined && input.StartTime !== null) {
        entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
    }
    if (input.EndTime !== undefined && input.EndTime !== null) {
        entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
    }
    if (input.Active !== undefined && input.Active !== null) {
        entries["Active"] = input.Active;
    }
    if (input.Filters !== undefined && input.Filters !== null) {
        var memberEntries = serializeAws_queryScheduledActionFilterList(input.Filters, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Filters." + key;
            entries[loc] = value;
        });
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    return entries;
};
var serializeAws_queryDescribeSnapshotCopyGrantsMessage = function (input, context) {
    var entries = {};
    if (input.SnapshotCopyGrantName !== undefined && input.SnapshotCopyGrantName !== null) {
        entries["SnapshotCopyGrantName"] = input.SnapshotCopyGrantName;
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.TagKeys !== undefined && input.TagKeys !== null) {
        var memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TagKeys." + key;
            entries[loc] = value;
        });
    }
    if (input.TagValues !== undefined && input.TagValues !== null) {
        var memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TagValues." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDescribeSnapshotSchedulesMessage = function (input, context) {
    var entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.ScheduleIdentifier !== undefined && input.ScheduleIdentifier !== null) {
        entries["ScheduleIdentifier"] = input.ScheduleIdentifier;
    }
    if (input.TagKeys !== undefined && input.TagKeys !== null) {
        var memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TagKeys." + key;
            entries[loc] = value;
        });
    }
    if (input.TagValues !== undefined && input.TagValues !== null) {
        var memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TagValues." + key;
            entries[loc] = value;
        });
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    return entries;
};
var serializeAws_queryDescribeTableRestoreStatusMessage = function (input, context) {
    var entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.TableRestoreRequestId !== undefined && input.TableRestoreRequestId !== null) {
        entries["TableRestoreRequestId"] = input.TableRestoreRequestId;
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    return entries;
};
var serializeAws_queryDescribeTagsMessage = function (input, context) {
    var entries = {};
    if (input.ResourceName !== undefined && input.ResourceName !== null) {
        entries["ResourceName"] = input.ResourceName;
    }
    if (input.ResourceType !== undefined && input.ResourceType !== null) {
        entries["ResourceType"] = input.ResourceType;
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.TagKeys !== undefined && input.TagKeys !== null) {
        var memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TagKeys." + key;
            entries[loc] = value;
        });
    }
    if (input.TagValues !== undefined && input.TagValues !== null) {
        var memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TagValues." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDescribeUsageLimitsMessage = function (input, context) {
    var entries = {};
    if (input.UsageLimitId !== undefined && input.UsageLimitId !== null) {
        entries["UsageLimitId"] = input.UsageLimitId;
    }
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.FeatureType !== undefined && input.FeatureType !== null) {
        entries["FeatureType"] = input.FeatureType;
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.TagKeys !== undefined && input.TagKeys !== null) {
        var memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TagKeys." + key;
            entries[loc] = value;
        });
    }
    if (input.TagValues !== undefined && input.TagValues !== null) {
        var memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TagValues." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDisableLoggingMessage = function (input, context) {
    var entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    return entries;
};
var serializeAws_queryDisableSnapshotCopyMessage = function (input, context) {
    var entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    return entries;
};
var serializeAws_queryEnableLoggingMessage = function (input, context) {
    var entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.BucketName !== undefined && input.BucketName !== null) {
        entries["BucketName"] = input.BucketName;
    }
    if (input.S3KeyPrefix !== undefined && input.S3KeyPrefix !== null) {
        entries["S3KeyPrefix"] = input.S3KeyPrefix;
    }
    return entries;
};
var serializeAws_queryEnableSnapshotCopyMessage = function (input, context) {
    var entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.DestinationRegion !== undefined && input.DestinationRegion !== null) {
        entries["DestinationRegion"] = input.DestinationRegion;
    }
    if (input.RetentionPeriod !== undefined && input.RetentionPeriod !== null) {
        entries["RetentionPeriod"] = input.RetentionPeriod;
    }
    if (input.SnapshotCopyGrantName !== undefined && input.SnapshotCopyGrantName !== null) {
        entries["SnapshotCopyGrantName"] = input.SnapshotCopyGrantName;
    }
    if (input.ManualSnapshotRetentionPeriod !== undefined && input.ManualSnapshotRetentionPeriod !== null) {
        entries["ManualSnapshotRetentionPeriod"] = input.ManualSnapshotRetentionPeriod;
    }
    return entries;
};
var serializeAws_queryEventCategoriesList = function (input, context) {
    var e_5, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_5 = __values(input), input_5_1 = input_5.next(); !input_5_1.done; input_5_1 = input_5.next()) {
            var entry = input_5_1.value;
            if (entry === null) {
                continue;
            }
            entries["EventCategory." + counter] = entry;
            counter++;
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (input_5_1 && !input_5_1.done && (_a = input_5.return)) _a.call(input_5);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return entries;
};
var serializeAws_queryGetClusterCredentialsMessage = function (input, context) {
    var entries = {};
    if (input.DbUser !== undefined && input.DbUser !== null) {
        entries["DbUser"] = input.DbUser;
    }
    if (input.DbName !== undefined && input.DbName !== null) {
        entries["DbName"] = input.DbName;
    }
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.DurationSeconds !== undefined && input.DurationSeconds !== null) {
        entries["DurationSeconds"] = input.DurationSeconds;
    }
    if (input.AutoCreate !== undefined && input.AutoCreate !== null) {
        entries["AutoCreate"] = input.AutoCreate;
    }
    if (input.DbGroups !== undefined && input.DbGroups !== null) {
        var memberEntries = serializeAws_queryDbGroupList(input.DbGroups, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "DbGroups." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryGetReservedNodeExchangeOfferingsInputMessage = function (input, context) {
    var entries = {};
    if (input.ReservedNodeId !== undefined && input.ReservedNodeId !== null) {
        entries["ReservedNodeId"] = input.ReservedNodeId;
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    return entries;
};
var serializeAws_queryIamRoleArnList = function (input, context) {
    var e_6, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_6 = __values(input), input_6_1 = input_6.next(); !input_6_1.done; input_6_1 = input_6.next()) {
            var entry = input_6_1.value;
            if (entry === null) {
                continue;
            }
            entries["IamRoleArn." + counter] = entry;
            counter++;
        }
    }
    catch (e_6_1) { e_6 = { error: e_6_1 }; }
    finally {
        try {
            if (input_6_1 && !input_6_1.done && (_a = input_6.return)) _a.call(input_6);
        }
        finally { if (e_6) throw e_6.error; }
    }
    return entries;
};
var serializeAws_queryModifyAquaInputMessage = function (input, context) {
    var entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.AquaConfigurationStatus !== undefined && input.AquaConfigurationStatus !== null) {
        entries["AquaConfigurationStatus"] = input.AquaConfigurationStatus;
    }
    return entries;
};
var serializeAws_queryModifyClusterDbRevisionMessage = function (input, context) {
    var entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.RevisionTarget !== undefined && input.RevisionTarget !== null) {
        entries["RevisionTarget"] = input.RevisionTarget;
    }
    return entries;
};
var serializeAws_queryModifyClusterIamRolesMessage = function (input, context) {
    var entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.AddIamRoles !== undefined && input.AddIamRoles !== null) {
        var memberEntries = serializeAws_queryIamRoleArnList(input.AddIamRoles, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "AddIamRoles." + key;
            entries[loc] = value;
        });
    }
    if (input.RemoveIamRoles !== undefined && input.RemoveIamRoles !== null) {
        var memberEntries = serializeAws_queryIamRoleArnList(input.RemoveIamRoles, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "RemoveIamRoles." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryModifyClusterMaintenanceMessage = function (input, context) {
    var entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.DeferMaintenance !== undefined && input.DeferMaintenance !== null) {
        entries["DeferMaintenance"] = input.DeferMaintenance;
    }
    if (input.DeferMaintenanceIdentifier !== undefined && input.DeferMaintenanceIdentifier !== null) {
        entries["DeferMaintenanceIdentifier"] = input.DeferMaintenanceIdentifier;
    }
    if (input.DeferMaintenanceStartTime !== undefined && input.DeferMaintenanceStartTime !== null) {
        entries["DeferMaintenanceStartTime"] = input.DeferMaintenanceStartTime.toISOString().split(".")[0] + "Z";
    }
    if (input.DeferMaintenanceEndTime !== undefined && input.DeferMaintenanceEndTime !== null) {
        entries["DeferMaintenanceEndTime"] = input.DeferMaintenanceEndTime.toISOString().split(".")[0] + "Z";
    }
    if (input.DeferMaintenanceDuration !== undefined && input.DeferMaintenanceDuration !== null) {
        entries["DeferMaintenanceDuration"] = input.DeferMaintenanceDuration;
    }
    return entries;
};
var serializeAws_queryModifyClusterMessage = function (input, context) {
    var entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.ClusterType !== undefined && input.ClusterType !== null) {
        entries["ClusterType"] = input.ClusterType;
    }
    if (input.NodeType !== undefined && input.NodeType !== null) {
        entries["NodeType"] = input.NodeType;
    }
    if (input.NumberOfNodes !== undefined && input.NumberOfNodes !== null) {
        entries["NumberOfNodes"] = input.NumberOfNodes;
    }
    if (input.ClusterSecurityGroups !== undefined && input.ClusterSecurityGroups !== null) {
        var memberEntries = serializeAws_queryClusterSecurityGroupNameList(input.ClusterSecurityGroups, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ClusterSecurityGroups." + key;
            entries[loc] = value;
        });
    }
    if (input.VpcSecurityGroupIds !== undefined && input.VpcSecurityGroupIds !== null) {
        var memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "VpcSecurityGroupIds." + key;
            entries[loc] = value;
        });
    }
    if (input.MasterUserPassword !== undefined && input.MasterUserPassword !== null) {
        entries["MasterUserPassword"] = input.MasterUserPassword;
    }
    if (input.ClusterParameterGroupName !== undefined && input.ClusterParameterGroupName !== null) {
        entries["ClusterParameterGroupName"] = input.ClusterParameterGroupName;
    }
    if (input.AutomatedSnapshotRetentionPeriod !== undefined && input.AutomatedSnapshotRetentionPeriod !== null) {
        entries["AutomatedSnapshotRetentionPeriod"] = input.AutomatedSnapshotRetentionPeriod;
    }
    if (input.ManualSnapshotRetentionPeriod !== undefined && input.ManualSnapshotRetentionPeriod !== null) {
        entries["ManualSnapshotRetentionPeriod"] = input.ManualSnapshotRetentionPeriod;
    }
    if (input.PreferredMaintenanceWindow !== undefined && input.PreferredMaintenanceWindow !== null) {
        entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
    }
    if (input.ClusterVersion !== undefined && input.ClusterVersion !== null) {
        entries["ClusterVersion"] = input.ClusterVersion;
    }
    if (input.AllowVersionUpgrade !== undefined && input.AllowVersionUpgrade !== null) {
        entries["AllowVersionUpgrade"] = input.AllowVersionUpgrade;
    }
    if (input.HsmClientCertificateIdentifier !== undefined && input.HsmClientCertificateIdentifier !== null) {
        entries["HsmClientCertificateIdentifier"] = input.HsmClientCertificateIdentifier;
    }
    if (input.HsmConfigurationIdentifier !== undefined && input.HsmConfigurationIdentifier !== null) {
        entries["HsmConfigurationIdentifier"] = input.HsmConfigurationIdentifier;
    }
    if (input.NewClusterIdentifier !== undefined && input.NewClusterIdentifier !== null) {
        entries["NewClusterIdentifier"] = input.NewClusterIdentifier;
    }
    if (input.PubliclyAccessible !== undefined && input.PubliclyAccessible !== null) {
        entries["PubliclyAccessible"] = input.PubliclyAccessible;
    }
    if (input.ElasticIp !== undefined && input.ElasticIp !== null) {
        entries["ElasticIp"] = input.ElasticIp;
    }
    if (input.EnhancedVpcRouting !== undefined && input.EnhancedVpcRouting !== null) {
        entries["EnhancedVpcRouting"] = input.EnhancedVpcRouting;
    }
    if (input.MaintenanceTrackName !== undefined && input.MaintenanceTrackName !== null) {
        entries["MaintenanceTrackName"] = input.MaintenanceTrackName;
    }
    if (input.Encrypted !== undefined && input.Encrypted !== null) {
        entries["Encrypted"] = input.Encrypted;
    }
    if (input.KmsKeyId !== undefined && input.KmsKeyId !== null) {
        entries["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.AvailabilityZoneRelocation !== undefined && input.AvailabilityZoneRelocation !== null) {
        entries["AvailabilityZoneRelocation"] = input.AvailabilityZoneRelocation;
    }
    if (input.AvailabilityZone !== undefined && input.AvailabilityZone !== null) {
        entries["AvailabilityZone"] = input.AvailabilityZone;
    }
    if (input.Port !== undefined && input.Port !== null) {
        entries["Port"] = input.Port;
    }
    return entries;
};
var serializeAws_queryModifyClusterParameterGroupMessage = function (input, context) {
    var entries = {};
    if (input.ParameterGroupName !== undefined && input.ParameterGroupName !== null) {
        entries["ParameterGroupName"] = input.ParameterGroupName;
    }
    if (input.Parameters !== undefined && input.Parameters !== null) {
        var memberEntries = serializeAws_queryParametersList(input.Parameters, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Parameters." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryModifyClusterSnapshotMessage = function (input, context) {
    var entries = {};
    if (input.SnapshotIdentifier !== undefined && input.SnapshotIdentifier !== null) {
        entries["SnapshotIdentifier"] = input.SnapshotIdentifier;
    }
    if (input.ManualSnapshotRetentionPeriod !== undefined && input.ManualSnapshotRetentionPeriod !== null) {
        entries["ManualSnapshotRetentionPeriod"] = input.ManualSnapshotRetentionPeriod;
    }
    if (input.Force !== undefined && input.Force !== null) {
        entries["Force"] = input.Force;
    }
    return entries;
};
var serializeAws_queryModifyClusterSnapshotScheduleMessage = function (input, context) {
    var entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.ScheduleIdentifier !== undefined && input.ScheduleIdentifier !== null) {
        entries["ScheduleIdentifier"] = input.ScheduleIdentifier;
    }
    if (input.DisassociateSchedule !== undefined && input.DisassociateSchedule !== null) {
        entries["DisassociateSchedule"] = input.DisassociateSchedule;
    }
    return entries;
};
var serializeAws_queryModifyClusterSubnetGroupMessage = function (input, context) {
    var entries = {};
    if (input.ClusterSubnetGroupName !== undefined && input.ClusterSubnetGroupName !== null) {
        entries["ClusterSubnetGroupName"] = input.ClusterSubnetGroupName;
    }
    if (input.Description !== undefined && input.Description !== null) {
        entries["Description"] = input.Description;
    }
    if (input.SubnetIds !== undefined && input.SubnetIds !== null) {
        var memberEntries = serializeAws_querySubnetIdentifierList(input.SubnetIds, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "SubnetIds." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryModifyEndpointAccessMessage = function (input, context) {
    var entries = {};
    if (input.EndpointName !== undefined && input.EndpointName !== null) {
        entries["EndpointName"] = input.EndpointName;
    }
    if (input.VpcSecurityGroupIds !== undefined && input.VpcSecurityGroupIds !== null) {
        var memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "VpcSecurityGroupIds." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryModifyEventSubscriptionMessage = function (input, context) {
    var entries = {};
    if (input.SubscriptionName !== undefined && input.SubscriptionName !== null) {
        entries["SubscriptionName"] = input.SubscriptionName;
    }
    if (input.SnsTopicArn !== undefined && input.SnsTopicArn !== null) {
        entries["SnsTopicArn"] = input.SnsTopicArn;
    }
    if (input.SourceType !== undefined && input.SourceType !== null) {
        entries["SourceType"] = input.SourceType;
    }
    if (input.SourceIds !== undefined && input.SourceIds !== null) {
        var memberEntries = serializeAws_querySourceIdsList(input.SourceIds, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "SourceIds." + key;
            entries[loc] = value;
        });
    }
    if (input.EventCategories !== undefined && input.EventCategories !== null) {
        var memberEntries = serializeAws_queryEventCategoriesList(input.EventCategories, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "EventCategories." + key;
            entries[loc] = value;
        });
    }
    if (input.Severity !== undefined && input.Severity !== null) {
        entries["Severity"] = input.Severity;
    }
    if (input.Enabled !== undefined && input.Enabled !== null) {
        entries["Enabled"] = input.Enabled;
    }
    return entries;
};
var serializeAws_queryModifyScheduledActionMessage = function (input, context) {
    var entries = {};
    if (input.ScheduledActionName !== undefined && input.ScheduledActionName !== null) {
        entries["ScheduledActionName"] = input.ScheduledActionName;
    }
    if (input.TargetAction !== undefined && input.TargetAction !== null) {
        var memberEntries = serializeAws_queryScheduledActionType(input.TargetAction, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TargetAction." + key;
            entries[loc] = value;
        });
    }
    if (input.Schedule !== undefined && input.Schedule !== null) {
        entries["Schedule"] = input.Schedule;
    }
    if (input.IamRole !== undefined && input.IamRole !== null) {
        entries["IamRole"] = input.IamRole;
    }
    if (input.ScheduledActionDescription !== undefined && input.ScheduledActionDescription !== null) {
        entries["ScheduledActionDescription"] = input.ScheduledActionDescription;
    }
    if (input.StartTime !== undefined && input.StartTime !== null) {
        entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
    }
    if (input.EndTime !== undefined && input.EndTime !== null) {
        entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
    }
    if (input.Enable !== undefined && input.Enable !== null) {
        entries["Enable"] = input.Enable;
    }
    return entries;
};
var serializeAws_queryModifySnapshotCopyRetentionPeriodMessage = function (input, context) {
    var entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.RetentionPeriod !== undefined && input.RetentionPeriod !== null) {
        entries["RetentionPeriod"] = input.RetentionPeriod;
    }
    if (input.Manual !== undefined && input.Manual !== null) {
        entries["Manual"] = input.Manual;
    }
    return entries;
};
var serializeAws_queryModifySnapshotScheduleMessage = function (input, context) {
    var entries = {};
    if (input.ScheduleIdentifier !== undefined && input.ScheduleIdentifier !== null) {
        entries["ScheduleIdentifier"] = input.ScheduleIdentifier;
    }
    if (input.ScheduleDefinitions !== undefined && input.ScheduleDefinitions !== null) {
        var memberEntries = serializeAws_queryScheduleDefinitionList(input.ScheduleDefinitions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ScheduleDefinitions." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryModifyUsageLimitMessage = function (input, context) {
    var entries = {};
    if (input.UsageLimitId !== undefined && input.UsageLimitId !== null) {
        entries["UsageLimitId"] = input.UsageLimitId;
    }
    if (input.Amount !== undefined && input.Amount !== null) {
        entries["Amount"] = input.Amount;
    }
    if (input.BreachAction !== undefined && input.BreachAction !== null) {
        entries["BreachAction"] = input.BreachAction;
    }
    return entries;
};
var serializeAws_queryNodeConfigurationOptionsFilter = function (input, context) {
    var entries = {};
    if (input.Name !== undefined && input.Name !== null) {
        entries["Name"] = input.Name;
    }
    if (input.Operator !== undefined && input.Operator !== null) {
        entries["Operator"] = input.Operator;
    }
    if (input.Values !== undefined && input.Values !== null) {
        var memberEntries = serializeAws_queryValueStringList(input.Values, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Value." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryNodeConfigurationOptionsFilterList = function (input, context) {
    var e_7, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_7 = __values(input), input_7_1 = input_7.next(); !input_7_1.done; input_7_1 = input_7.next()) {
            var entry = input_7_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryNodeConfigurationOptionsFilter(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["NodeConfigurationOptionsFilter." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_7_1) { e_7 = { error: e_7_1 }; }
    finally {
        try {
            if (input_7_1 && !input_7_1.done && (_a = input_7.return)) _a.call(input_7);
        }
        finally { if (e_7) throw e_7.error; }
    }
    return entries;
};
var serializeAws_queryParameter = function (input, context) {
    var entries = {};
    if (input.ParameterName !== undefined && input.ParameterName !== null) {
        entries["ParameterName"] = input.ParameterName;
    }
    if (input.ParameterValue !== undefined && input.ParameterValue !== null) {
        entries["ParameterValue"] = input.ParameterValue;
    }
    if (input.Description !== undefined && input.Description !== null) {
        entries["Description"] = input.Description;
    }
    if (input.Source !== undefined && input.Source !== null) {
        entries["Source"] = input.Source;
    }
    if (input.DataType !== undefined && input.DataType !== null) {
        entries["DataType"] = input.DataType;
    }
    if (input.AllowedValues !== undefined && input.AllowedValues !== null) {
        entries["AllowedValues"] = input.AllowedValues;
    }
    if (input.ApplyType !== undefined && input.ApplyType !== null) {
        entries["ApplyType"] = input.ApplyType;
    }
    if (input.IsModifiable !== undefined && input.IsModifiable !== null) {
        entries["IsModifiable"] = input.IsModifiable;
    }
    if (input.MinimumEngineVersion !== undefined && input.MinimumEngineVersion !== null) {
        entries["MinimumEngineVersion"] = input.MinimumEngineVersion;
    }
    return entries;
};
var serializeAws_queryParametersList = function (input, context) {
    var e_8, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_8 = __values(input), input_8_1 = input_8.next(); !input_8_1.done; input_8_1 = input_8.next()) {
            var entry = input_8_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryParameter(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["Parameter." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_8_1) { e_8 = { error: e_8_1 }; }
    finally {
        try {
            if (input_8_1 && !input_8_1.done && (_a = input_8.return)) _a.call(input_8);
        }
        finally { if (e_8) throw e_8.error; }
    }
    return entries;
};
var serializeAws_queryPartnerIntegrationInputMessage = function (input, context) {
    var entries = {};
    if (input.AccountId !== undefined && input.AccountId !== null) {
        entries["AccountId"] = input.AccountId;
    }
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.DatabaseName !== undefined && input.DatabaseName !== null) {
        entries["DatabaseName"] = input.DatabaseName;
    }
    if (input.PartnerName !== undefined && input.PartnerName !== null) {
        entries["PartnerName"] = input.PartnerName;
    }
    return entries;
};
var serializeAws_queryPauseClusterMessage = function (input, context) {
    var entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    return entries;
};
var serializeAws_queryPurchaseReservedNodeOfferingMessage = function (input, context) {
    var entries = {};
    if (input.ReservedNodeOfferingId !== undefined && input.ReservedNodeOfferingId !== null) {
        entries["ReservedNodeOfferingId"] = input.ReservedNodeOfferingId;
    }
    if (input.NodeCount !== undefined && input.NodeCount !== null) {
        entries["NodeCount"] = input.NodeCount;
    }
    return entries;
};
var serializeAws_queryRebootClusterMessage = function (input, context) {
    var entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    return entries;
};
var serializeAws_queryResetClusterParameterGroupMessage = function (input, context) {
    var entries = {};
    if (input.ParameterGroupName !== undefined && input.ParameterGroupName !== null) {
        entries["ParameterGroupName"] = input.ParameterGroupName;
    }
    if (input.ResetAllParameters !== undefined && input.ResetAllParameters !== null) {
        entries["ResetAllParameters"] = input.ResetAllParameters;
    }
    if (input.Parameters !== undefined && input.Parameters !== null) {
        var memberEntries = serializeAws_queryParametersList(input.Parameters, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Parameters." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryResizeClusterMessage = function (input, context) {
    var entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.ClusterType !== undefined && input.ClusterType !== null) {
        entries["ClusterType"] = input.ClusterType;
    }
    if (input.NodeType !== undefined && input.NodeType !== null) {
        entries["NodeType"] = input.NodeType;
    }
    if (input.NumberOfNodes !== undefined && input.NumberOfNodes !== null) {
        entries["NumberOfNodes"] = input.NumberOfNodes;
    }
    if (input.Classic !== undefined && input.Classic !== null) {
        entries["Classic"] = input.Classic;
    }
    return entries;
};
var serializeAws_queryRestoreFromClusterSnapshotMessage = function (input, context) {
    var entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.SnapshotIdentifier !== undefined && input.SnapshotIdentifier !== null) {
        entries["SnapshotIdentifier"] = input.SnapshotIdentifier;
    }
    if (input.SnapshotClusterIdentifier !== undefined && input.SnapshotClusterIdentifier !== null) {
        entries["SnapshotClusterIdentifier"] = input.SnapshotClusterIdentifier;
    }
    if (input.Port !== undefined && input.Port !== null) {
        entries["Port"] = input.Port;
    }
    if (input.AvailabilityZone !== undefined && input.AvailabilityZone !== null) {
        entries["AvailabilityZone"] = input.AvailabilityZone;
    }
    if (input.AllowVersionUpgrade !== undefined && input.AllowVersionUpgrade !== null) {
        entries["AllowVersionUpgrade"] = input.AllowVersionUpgrade;
    }
    if (input.ClusterSubnetGroupName !== undefined && input.ClusterSubnetGroupName !== null) {
        entries["ClusterSubnetGroupName"] = input.ClusterSubnetGroupName;
    }
    if (input.PubliclyAccessible !== undefined && input.PubliclyAccessible !== null) {
        entries["PubliclyAccessible"] = input.PubliclyAccessible;
    }
    if (input.OwnerAccount !== undefined && input.OwnerAccount !== null) {
        entries["OwnerAccount"] = input.OwnerAccount;
    }
    if (input.HsmClientCertificateIdentifier !== undefined && input.HsmClientCertificateIdentifier !== null) {
        entries["HsmClientCertificateIdentifier"] = input.HsmClientCertificateIdentifier;
    }
    if (input.HsmConfigurationIdentifier !== undefined && input.HsmConfigurationIdentifier !== null) {
        entries["HsmConfigurationIdentifier"] = input.HsmConfigurationIdentifier;
    }
    if (input.ElasticIp !== undefined && input.ElasticIp !== null) {
        entries["ElasticIp"] = input.ElasticIp;
    }
    if (input.ClusterParameterGroupName !== undefined && input.ClusterParameterGroupName !== null) {
        entries["ClusterParameterGroupName"] = input.ClusterParameterGroupName;
    }
    if (input.ClusterSecurityGroups !== undefined && input.ClusterSecurityGroups !== null) {
        var memberEntries = serializeAws_queryClusterSecurityGroupNameList(input.ClusterSecurityGroups, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ClusterSecurityGroups." + key;
            entries[loc] = value;
        });
    }
    if (input.VpcSecurityGroupIds !== undefined && input.VpcSecurityGroupIds !== null) {
        var memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "VpcSecurityGroupIds." + key;
            entries[loc] = value;
        });
    }
    if (input.PreferredMaintenanceWindow !== undefined && input.PreferredMaintenanceWindow !== null) {
        entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
    }
    if (input.AutomatedSnapshotRetentionPeriod !== undefined && input.AutomatedSnapshotRetentionPeriod !== null) {
        entries["AutomatedSnapshotRetentionPeriod"] = input.AutomatedSnapshotRetentionPeriod;
    }
    if (input.ManualSnapshotRetentionPeriod !== undefined && input.ManualSnapshotRetentionPeriod !== null) {
        entries["ManualSnapshotRetentionPeriod"] = input.ManualSnapshotRetentionPeriod;
    }
    if (input.KmsKeyId !== undefined && input.KmsKeyId !== null) {
        entries["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.NodeType !== undefined && input.NodeType !== null) {
        entries["NodeType"] = input.NodeType;
    }
    if (input.EnhancedVpcRouting !== undefined && input.EnhancedVpcRouting !== null) {
        entries["EnhancedVpcRouting"] = input.EnhancedVpcRouting;
    }
    if (input.AdditionalInfo !== undefined && input.AdditionalInfo !== null) {
        entries["AdditionalInfo"] = input.AdditionalInfo;
    }
    if (input.IamRoles !== undefined && input.IamRoles !== null) {
        var memberEntries = serializeAws_queryIamRoleArnList(input.IamRoles, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "IamRoles." + key;
            entries[loc] = value;
        });
    }
    if (input.MaintenanceTrackName !== undefined && input.MaintenanceTrackName !== null) {
        entries["MaintenanceTrackName"] = input.MaintenanceTrackName;
    }
    if (input.SnapshotScheduleIdentifier !== undefined && input.SnapshotScheduleIdentifier !== null) {
        entries["SnapshotScheduleIdentifier"] = input.SnapshotScheduleIdentifier;
    }
    if (input.NumberOfNodes !== undefined && input.NumberOfNodes !== null) {
        entries["NumberOfNodes"] = input.NumberOfNodes;
    }
    if (input.AvailabilityZoneRelocation !== undefined && input.AvailabilityZoneRelocation !== null) {
        entries["AvailabilityZoneRelocation"] = input.AvailabilityZoneRelocation;
    }
    if (input.AquaConfigurationStatus !== undefined && input.AquaConfigurationStatus !== null) {
        entries["AquaConfigurationStatus"] = input.AquaConfigurationStatus;
    }
    return entries;
};
var serializeAws_queryRestoreTableFromClusterSnapshotMessage = function (input, context) {
    var entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.SnapshotIdentifier !== undefined && input.SnapshotIdentifier !== null) {
        entries["SnapshotIdentifier"] = input.SnapshotIdentifier;
    }
    if (input.SourceDatabaseName !== undefined && input.SourceDatabaseName !== null) {
        entries["SourceDatabaseName"] = input.SourceDatabaseName;
    }
    if (input.SourceSchemaName !== undefined && input.SourceSchemaName !== null) {
        entries["SourceSchemaName"] = input.SourceSchemaName;
    }
    if (input.SourceTableName !== undefined && input.SourceTableName !== null) {
        entries["SourceTableName"] = input.SourceTableName;
    }
    if (input.TargetDatabaseName !== undefined && input.TargetDatabaseName !== null) {
        entries["TargetDatabaseName"] = input.TargetDatabaseName;
    }
    if (input.TargetSchemaName !== undefined && input.TargetSchemaName !== null) {
        entries["TargetSchemaName"] = input.TargetSchemaName;
    }
    if (input.NewTableName !== undefined && input.NewTableName !== null) {
        entries["NewTableName"] = input.NewTableName;
    }
    if (input.EnableCaseSensitiveIdentifier !== undefined && input.EnableCaseSensitiveIdentifier !== null) {
        entries["EnableCaseSensitiveIdentifier"] = input.EnableCaseSensitiveIdentifier;
    }
    return entries;
};
var serializeAws_queryResumeClusterMessage = function (input, context) {
    var entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    return entries;
};
var serializeAws_queryRevokeClusterSecurityGroupIngressMessage = function (input, context) {
    var entries = {};
    if (input.ClusterSecurityGroupName !== undefined && input.ClusterSecurityGroupName !== null) {
        entries["ClusterSecurityGroupName"] = input.ClusterSecurityGroupName;
    }
    if (input.CIDRIP !== undefined && input.CIDRIP !== null) {
        entries["CIDRIP"] = input.CIDRIP;
    }
    if (input.EC2SecurityGroupName !== undefined && input.EC2SecurityGroupName !== null) {
        entries["EC2SecurityGroupName"] = input.EC2SecurityGroupName;
    }
    if (input.EC2SecurityGroupOwnerId !== undefined && input.EC2SecurityGroupOwnerId !== null) {
        entries["EC2SecurityGroupOwnerId"] = input.EC2SecurityGroupOwnerId;
    }
    return entries;
};
var serializeAws_queryRevokeEndpointAccessMessage = function (input, context) {
    var entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.Account !== undefined && input.Account !== null) {
        entries["Account"] = input.Account;
    }
    if (input.VpcIds !== undefined && input.VpcIds !== null) {
        var memberEntries = serializeAws_queryVpcIdentifierList(input.VpcIds, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "VpcIds." + key;
            entries[loc] = value;
        });
    }
    if (input.Force !== undefined && input.Force !== null) {
        entries["Force"] = input.Force;
    }
    return entries;
};
var serializeAws_queryRevokeSnapshotAccessMessage = function (input, context) {
    var entries = {};
    if (input.SnapshotIdentifier !== undefined && input.SnapshotIdentifier !== null) {
        entries["SnapshotIdentifier"] = input.SnapshotIdentifier;
    }
    if (input.SnapshotClusterIdentifier !== undefined && input.SnapshotClusterIdentifier !== null) {
        entries["SnapshotClusterIdentifier"] = input.SnapshotClusterIdentifier;
    }
    if (input.AccountWithRestoreAccess !== undefined && input.AccountWithRestoreAccess !== null) {
        entries["AccountWithRestoreAccess"] = input.AccountWithRestoreAccess;
    }
    return entries;
};
var serializeAws_queryRotateEncryptionKeyMessage = function (input, context) {
    var entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    return entries;
};
var serializeAws_queryScheduledActionFilter = function (input, context) {
    var entries = {};
    if (input.Name !== undefined && input.Name !== null) {
        entries["Name"] = input.Name;
    }
    if (input.Values !== undefined && input.Values !== null) {
        var memberEntries = serializeAws_queryValueStringList(input.Values, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Values." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryScheduledActionFilterList = function (input, context) {
    var e_9, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_9 = __values(input), input_9_1 = input_9.next(); !input_9_1.done; input_9_1 = input_9.next()) {
            var entry = input_9_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryScheduledActionFilter(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["ScheduledActionFilter." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_9_1) { e_9 = { error: e_9_1 }; }
    finally {
        try {
            if (input_9_1 && !input_9_1.done && (_a = input_9.return)) _a.call(input_9);
        }
        finally { if (e_9) throw e_9.error; }
    }
    return entries;
};
var serializeAws_queryScheduledActionType = function (input, context) {
    var entries = {};
    if (input.ResizeCluster !== undefined && input.ResizeCluster !== null) {
        var memberEntries = serializeAws_queryResizeClusterMessage(input.ResizeCluster, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ResizeCluster." + key;
            entries[loc] = value;
        });
    }
    if (input.PauseCluster !== undefined && input.PauseCluster !== null) {
        var memberEntries = serializeAws_queryPauseClusterMessage(input.PauseCluster, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "PauseCluster." + key;
            entries[loc] = value;
        });
    }
    if (input.ResumeCluster !== undefined && input.ResumeCluster !== null) {
        var memberEntries = serializeAws_queryResumeClusterMessage(input.ResumeCluster, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ResumeCluster." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryScheduleDefinitionList = function (input, context) {
    var e_10, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_10 = __values(input), input_10_1 = input_10.next(); !input_10_1.done; input_10_1 = input_10.next()) {
            var entry = input_10_1.value;
            if (entry === null) {
                continue;
            }
            entries["ScheduleDefinition." + counter] = entry;
            counter++;
        }
    }
    catch (e_10_1) { e_10 = { error: e_10_1 }; }
    finally {
        try {
            if (input_10_1 && !input_10_1.done && (_a = input_10.return)) _a.call(input_10);
        }
        finally { if (e_10) throw e_10.error; }
    }
    return entries;
};
var serializeAws_querySnapshotIdentifierList = function (input, context) {
    var e_11, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_11 = __values(input), input_11_1 = input_11.next(); !input_11_1.done; input_11_1 = input_11.next()) {
            var entry = input_11_1.value;
            if (entry === null) {
                continue;
            }
            entries["String." + counter] = entry;
            counter++;
        }
    }
    catch (e_11_1) { e_11 = { error: e_11_1 }; }
    finally {
        try {
            if (input_11_1 && !input_11_1.done && (_a = input_11.return)) _a.call(input_11);
        }
        finally { if (e_11) throw e_11.error; }
    }
    return entries;
};
var serializeAws_querySnapshotSortingEntity = function (input, context) {
    var entries = {};
    if (input.Attribute !== undefined && input.Attribute !== null) {
        entries["Attribute"] = input.Attribute;
    }
    if (input.SortOrder !== undefined && input.SortOrder !== null) {
        entries["SortOrder"] = input.SortOrder;
    }
    return entries;
};
var serializeAws_querySnapshotSortingEntityList = function (input, context) {
    var e_12, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_12 = __values(input), input_12_1 = input_12.next(); !input_12_1.done; input_12_1 = input_12.next()) {
            var entry = input_12_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_querySnapshotSortingEntity(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["SnapshotSortingEntity." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_12_1) { e_12 = { error: e_12_1 }; }
    finally {
        try {
            if (input_12_1 && !input_12_1.done && (_a = input_12.return)) _a.call(input_12);
        }
        finally { if (e_12) throw e_12.error; }
    }
    return entries;
};
var serializeAws_querySourceIdsList = function (input, context) {
    var e_13, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_13 = __values(input), input_13_1 = input_13.next(); !input_13_1.done; input_13_1 = input_13.next()) {
            var entry = input_13_1.value;
            if (entry === null) {
                continue;
            }
            entries["SourceId." + counter] = entry;
            counter++;
        }
    }
    catch (e_13_1) { e_13 = { error: e_13_1 }; }
    finally {
        try {
            if (input_13_1 && !input_13_1.done && (_a = input_13.return)) _a.call(input_13);
        }
        finally { if (e_13) throw e_13.error; }
    }
    return entries;
};
var serializeAws_querySubnetIdentifierList = function (input, context) {
    var e_14, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_14 = __values(input), input_14_1 = input_14.next(); !input_14_1.done; input_14_1 = input_14.next()) {
            var entry = input_14_1.value;
            if (entry === null) {
                continue;
            }
            entries["SubnetIdentifier." + counter] = entry;
            counter++;
        }
    }
    catch (e_14_1) { e_14 = { error: e_14_1 }; }
    finally {
        try {
            if (input_14_1 && !input_14_1.done && (_a = input_14.return)) _a.call(input_14);
        }
        finally { if (e_14) throw e_14.error; }
    }
    return entries;
};
var serializeAws_queryTag = function (input, context) {
    var entries = {};
    if (input.Key !== undefined && input.Key !== null) {
        entries["Key"] = input.Key;
    }
    if (input.Value !== undefined && input.Value !== null) {
        entries["Value"] = input.Value;
    }
    return entries;
};
var serializeAws_queryTagKeyList = function (input, context) {
    var e_15, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_15 = __values(input), input_15_1 = input_15.next(); !input_15_1.done; input_15_1 = input_15.next()) {
            var entry = input_15_1.value;
            if (entry === null) {
                continue;
            }
            entries["TagKey." + counter] = entry;
            counter++;
        }
    }
    catch (e_15_1) { e_15 = { error: e_15_1 }; }
    finally {
        try {
            if (input_15_1 && !input_15_1.done && (_a = input_15.return)) _a.call(input_15);
        }
        finally { if (e_15) throw e_15.error; }
    }
    return entries;
};
var serializeAws_queryTagList = function (input, context) {
    var e_16, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_16 = __values(input), input_16_1 = input_16.next(); !input_16_1.done; input_16_1 = input_16.next()) {
            var entry = input_16_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryTag(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["Tag." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_16_1) { e_16 = { error: e_16_1 }; }
    finally {
        try {
            if (input_16_1 && !input_16_1.done && (_a = input_16.return)) _a.call(input_16);
        }
        finally { if (e_16) throw e_16.error; }
    }
    return entries;
};
var serializeAws_queryTagValueList = function (input, context) {
    var e_17, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_17 = __values(input), input_17_1 = input_17.next(); !input_17_1.done; input_17_1 = input_17.next()) {
            var entry = input_17_1.value;
            if (entry === null) {
                continue;
            }
            entries["TagValue." + counter] = entry;
            counter++;
        }
    }
    catch (e_17_1) { e_17 = { error: e_17_1 }; }
    finally {
        try {
            if (input_17_1 && !input_17_1.done && (_a = input_17.return)) _a.call(input_17);
        }
        finally { if (e_17) throw e_17.error; }
    }
    return entries;
};
var serializeAws_queryUpdatePartnerStatusInputMessage = function (input, context) {
    var entries = {};
    if (input.AccountId !== undefined && input.AccountId !== null) {
        entries["AccountId"] = input.AccountId;
    }
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.DatabaseName !== undefined && input.DatabaseName !== null) {
        entries["DatabaseName"] = input.DatabaseName;
    }
    if (input.PartnerName !== undefined && input.PartnerName !== null) {
        entries["PartnerName"] = input.PartnerName;
    }
    if (input.Status !== undefined && input.Status !== null) {
        entries["Status"] = input.Status;
    }
    if (input.StatusMessage !== undefined && input.StatusMessage !== null) {
        entries["StatusMessage"] = input.StatusMessage;
    }
    return entries;
};
var serializeAws_queryValueStringList = function (input, context) {
    var e_18, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_18 = __values(input), input_18_1 = input_18.next(); !input_18_1.done; input_18_1 = input_18.next()) {
            var entry = input_18_1.value;
            if (entry === null) {
                continue;
            }
            entries["item." + counter] = entry;
            counter++;
        }
    }
    catch (e_18_1) { e_18 = { error: e_18_1 }; }
    finally {
        try {
            if (input_18_1 && !input_18_1.done && (_a = input_18.return)) _a.call(input_18);
        }
        finally { if (e_18) throw e_18.error; }
    }
    return entries;
};
var serializeAws_queryVpcIdentifierList = function (input, context) {
    var e_19, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_19 = __values(input), input_19_1 = input_19.next(); !input_19_1.done; input_19_1 = input_19.next()) {
            var entry = input_19_1.value;
            if (entry === null) {
                continue;
            }
            entries["VpcIdentifier." + counter] = entry;
            counter++;
        }
    }
    catch (e_19_1) { e_19 = { error: e_19_1 }; }
    finally {
        try {
            if (input_19_1 && !input_19_1.done && (_a = input_19.return)) _a.call(input_19);
        }
        finally { if (e_19) throw e_19.error; }
    }
    return entries;
};
var serializeAws_queryVpcSecurityGroupIdList = function (input, context) {
    var e_20, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_20 = __values(input), input_20_1 = input_20.next(); !input_20_1.done; input_20_1 = input_20.next()) {
            var entry = input_20_1.value;
            if (entry === null) {
                continue;
            }
            entries["VpcSecurityGroupId." + counter] = entry;
            counter++;
        }
    }
    catch (e_20_1) { e_20 = { error: e_20_1 }; }
    finally {
        try {
            if (input_20_1 && !input_20_1.done && (_a = input_20.return)) _a.call(input_20);
        }
        finally { if (e_20) throw e_20.error; }
    }
    return entries;
};
var deserializeAws_queryAcceptReservedNodeExchangeOutputMessage = function (output, context) {
    var contents = {
        ExchangedReservedNode: undefined,
    };
    if (output["ExchangedReservedNode"] !== undefined) {
        contents.ExchangedReservedNode = deserializeAws_queryReservedNode(output["ExchangedReservedNode"], context);
    }
    return contents;
};
var deserializeAws_queryAccessToClusterDeniedFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryAccessToSnapshotDeniedFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryAccountAttribute = function (output, context) {
    var contents = {
        AttributeName: undefined,
        AttributeValues: undefined,
    };
    if (output["AttributeName"] !== undefined) {
        contents.AttributeName = output["AttributeName"];
    }
    if (output.AttributeValues === "") {
        contents.AttributeValues = [];
    }
    if (output["AttributeValues"] !== undefined && output["AttributeValues"]["AttributeValueTarget"] !== undefined) {
        contents.AttributeValues = deserializeAws_queryAttributeValueList(__getArrayIfSingleItem(output["AttributeValues"]["AttributeValueTarget"]), context);
    }
    return contents;
};
var deserializeAws_queryAccountAttributeList = function (output, context) {
    var contents = {
        AccountAttributes: undefined,
    };
    if (output.AccountAttributes === "") {
        contents.AccountAttributes = [];
    }
    if (output["AccountAttributes"] !== undefined && output["AccountAttributes"]["AccountAttribute"] !== undefined) {
        contents.AccountAttributes = deserializeAws_queryAttributeList(__getArrayIfSingleItem(output["AccountAttributes"]["AccountAttribute"]), context);
    }
    return contents;
};
var deserializeAws_queryAccountsWithRestoreAccessList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryAccountWithRestoreAccess(entry, context);
    });
};
var deserializeAws_queryAccountWithRestoreAccess = function (output, context) {
    var contents = {
        AccountId: undefined,
        AccountAlias: undefined,
    };
    if (output["AccountId"] !== undefined) {
        contents.AccountId = output["AccountId"];
    }
    if (output["AccountAlias"] !== undefined) {
        contents.AccountAlias = output["AccountAlias"];
    }
    return contents;
};
var deserializeAws_queryAquaConfiguration = function (output, context) {
    var contents = {
        AquaStatus: undefined,
        AquaConfigurationStatus: undefined,
    };
    if (output["AquaStatus"] !== undefined) {
        contents.AquaStatus = output["AquaStatus"];
    }
    if (output["AquaConfigurationStatus"] !== undefined) {
        contents.AquaConfigurationStatus = output["AquaConfigurationStatus"];
    }
    return contents;
};
var deserializeAws_queryAssociatedClusterList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryClusterAssociatedToSchedule(entry, context);
    });
};
var deserializeAws_queryAttributeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryAccountAttribute(entry, context);
    });
};
var deserializeAws_queryAttributeValueList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryAttributeValueTarget(entry, context);
    });
};
var deserializeAws_queryAttributeValueTarget = function (output, context) {
    var contents = {
        AttributeValue: undefined,
    };
    if (output["AttributeValue"] !== undefined) {
        contents.AttributeValue = output["AttributeValue"];
    }
    return contents;
};
var deserializeAws_queryAuthorizationAlreadyExistsFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryAuthorizationNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryAuthorizationQuotaExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryAuthorizeClusterSecurityGroupIngressResult = function (output, context) {
    var contents = {
        ClusterSecurityGroup: undefined,
    };
    if (output["ClusterSecurityGroup"] !== undefined) {
        contents.ClusterSecurityGroup = deserializeAws_queryClusterSecurityGroup(output["ClusterSecurityGroup"], context);
    }
    return contents;
};
var deserializeAws_queryAuthorizeSnapshotAccessResult = function (output, context) {
    var contents = {
        Snapshot: undefined,
    };
    if (output["Snapshot"] !== undefined) {
        contents.Snapshot = deserializeAws_querySnapshot(output["Snapshot"], context);
    }
    return contents;
};
var deserializeAws_queryAvailabilityZone = function (output, context) {
    var contents = {
        Name: undefined,
        SupportedPlatforms: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output.SupportedPlatforms === "") {
        contents.SupportedPlatforms = [];
    }
    if (output["SupportedPlatforms"] !== undefined && output["SupportedPlatforms"]["SupportedPlatform"] !== undefined) {
        contents.SupportedPlatforms = deserializeAws_querySupportedPlatformsList(__getArrayIfSingleItem(output["SupportedPlatforms"]["SupportedPlatform"]), context);
    }
    return contents;
};
var deserializeAws_queryAvailabilityZoneList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryAvailabilityZone(entry, context);
    });
};
var deserializeAws_queryBatchDeleteClusterSnapshotsResult = function (output, context) {
    var contents = {
        Resources: undefined,
        Errors: undefined,
    };
    if (output.Resources === "") {
        contents.Resources = [];
    }
    if (output["Resources"] !== undefined && output["Resources"]["String"] !== undefined) {
        contents.Resources = deserializeAws_querySnapshotIdentifierList(__getArrayIfSingleItem(output["Resources"]["String"]), context);
    }
    if (output.Errors === "") {
        contents.Errors = [];
    }
    if (output["Errors"] !== undefined && output["Errors"]["SnapshotErrorMessage"] !== undefined) {
        contents.Errors = deserializeAws_queryBatchSnapshotOperationErrorList(__getArrayIfSingleItem(output["Errors"]["SnapshotErrorMessage"]), context);
    }
    return contents;
};
var deserializeAws_queryBatchDeleteRequestSizeExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryBatchModifyClusterSnapshotsLimitExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryBatchModifyClusterSnapshotsOutputMessage = function (output, context) {
    var contents = {
        Resources: undefined,
        Errors: undefined,
    };
    if (output.Resources === "") {
        contents.Resources = [];
    }
    if (output["Resources"] !== undefined && output["Resources"]["String"] !== undefined) {
        contents.Resources = deserializeAws_querySnapshotIdentifierList(__getArrayIfSingleItem(output["Resources"]["String"]), context);
    }
    if (output.Errors === "") {
        contents.Errors = [];
    }
    if (output["Errors"] !== undefined && output["Errors"]["SnapshotErrorMessage"] !== undefined) {
        contents.Errors = deserializeAws_queryBatchSnapshotOperationErrors(__getArrayIfSingleItem(output["Errors"]["SnapshotErrorMessage"]), context);
    }
    return contents;
};
var deserializeAws_queryBatchSnapshotOperationErrorList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_querySnapshotErrorMessage(entry, context);
    });
};
var deserializeAws_queryBatchSnapshotOperationErrors = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_querySnapshotErrorMessage(entry, context);
    });
};
var deserializeAws_queryBucketNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryCluster = function (output, context) {
    var contents = {
        ClusterIdentifier: undefined,
        NodeType: undefined,
        ClusterStatus: undefined,
        ClusterAvailabilityStatus: undefined,
        ModifyStatus: undefined,
        MasterUsername: undefined,
        DBName: undefined,
        Endpoint: undefined,
        ClusterCreateTime: undefined,
        AutomatedSnapshotRetentionPeriod: undefined,
        ManualSnapshotRetentionPeriod: undefined,
        ClusterSecurityGroups: undefined,
        VpcSecurityGroups: undefined,
        ClusterParameterGroups: undefined,
        ClusterSubnetGroupName: undefined,
        VpcId: undefined,
        AvailabilityZone: undefined,
        PreferredMaintenanceWindow: undefined,
        PendingModifiedValues: undefined,
        ClusterVersion: undefined,
        AllowVersionUpgrade: undefined,
        NumberOfNodes: undefined,
        PubliclyAccessible: undefined,
        Encrypted: undefined,
        RestoreStatus: undefined,
        DataTransferProgress: undefined,
        HsmStatus: undefined,
        ClusterSnapshotCopyStatus: undefined,
        ClusterPublicKey: undefined,
        ClusterNodes: undefined,
        ElasticIpStatus: undefined,
        ClusterRevisionNumber: undefined,
        Tags: undefined,
        KmsKeyId: undefined,
        EnhancedVpcRouting: undefined,
        IamRoles: undefined,
        PendingActions: undefined,
        MaintenanceTrackName: undefined,
        ElasticResizeNumberOfNodeOptions: undefined,
        DeferredMaintenanceWindows: undefined,
        SnapshotScheduleIdentifier: undefined,
        SnapshotScheduleState: undefined,
        ExpectedNextSnapshotScheduleTime: undefined,
        ExpectedNextSnapshotScheduleTimeStatus: undefined,
        NextMaintenanceWindowStartTime: undefined,
        ResizeInfo: undefined,
        AvailabilityZoneRelocationStatus: undefined,
        ClusterNamespaceArn: undefined,
        TotalStorageCapacityInMegaBytes: undefined,
        AquaConfiguration: undefined,
    };
    if (output["ClusterIdentifier"] !== undefined) {
        contents.ClusterIdentifier = output["ClusterIdentifier"];
    }
    if (output["NodeType"] !== undefined) {
        contents.NodeType = output["NodeType"];
    }
    if (output["ClusterStatus"] !== undefined) {
        contents.ClusterStatus = output["ClusterStatus"];
    }
    if (output["ClusterAvailabilityStatus"] !== undefined) {
        contents.ClusterAvailabilityStatus = output["ClusterAvailabilityStatus"];
    }
    if (output["ModifyStatus"] !== undefined) {
        contents.ModifyStatus = output["ModifyStatus"];
    }
    if (output["MasterUsername"] !== undefined) {
        contents.MasterUsername = output["MasterUsername"];
    }
    if (output["DBName"] !== undefined) {
        contents.DBName = output["DBName"];
    }
    if (output["Endpoint"] !== undefined) {
        contents.Endpoint = deserializeAws_queryEndpoint(output["Endpoint"], context);
    }
    if (output["ClusterCreateTime"] !== undefined) {
        contents.ClusterCreateTime = new Date(output["ClusterCreateTime"]);
    }
    if (output["AutomatedSnapshotRetentionPeriod"] !== undefined) {
        contents.AutomatedSnapshotRetentionPeriod = parseInt(output["AutomatedSnapshotRetentionPeriod"]);
    }
    if (output["ManualSnapshotRetentionPeriod"] !== undefined) {
        contents.ManualSnapshotRetentionPeriod = parseInt(output["ManualSnapshotRetentionPeriod"]);
    }
    if (output.ClusterSecurityGroups === "") {
        contents.ClusterSecurityGroups = [];
    }
    if (output["ClusterSecurityGroups"] !== undefined &&
        output["ClusterSecurityGroups"]["ClusterSecurityGroup"] !== undefined) {
        contents.ClusterSecurityGroups = deserializeAws_queryClusterSecurityGroupMembershipList(__getArrayIfSingleItem(output["ClusterSecurityGroups"]["ClusterSecurityGroup"]), context);
    }
    if (output.VpcSecurityGroups === "") {
        contents.VpcSecurityGroups = [];
    }
    if (output["VpcSecurityGroups"] !== undefined && output["VpcSecurityGroups"]["VpcSecurityGroup"] !== undefined) {
        contents.VpcSecurityGroups = deserializeAws_queryVpcSecurityGroupMembershipList(__getArrayIfSingleItem(output["VpcSecurityGroups"]["VpcSecurityGroup"]), context);
    }
    if (output.ClusterParameterGroups === "") {
        contents.ClusterParameterGroups = [];
    }
    if (output["ClusterParameterGroups"] !== undefined &&
        output["ClusterParameterGroups"]["ClusterParameterGroup"] !== undefined) {
        contents.ClusterParameterGroups = deserializeAws_queryClusterParameterGroupStatusList(__getArrayIfSingleItem(output["ClusterParameterGroups"]["ClusterParameterGroup"]), context);
    }
    if (output["ClusterSubnetGroupName"] !== undefined) {
        contents.ClusterSubnetGroupName = output["ClusterSubnetGroupName"];
    }
    if (output["VpcId"] !== undefined) {
        contents.VpcId = output["VpcId"];
    }
    if (output["AvailabilityZone"] !== undefined) {
        contents.AvailabilityZone = output["AvailabilityZone"];
    }
    if (output["PreferredMaintenanceWindow"] !== undefined) {
        contents.PreferredMaintenanceWindow = output["PreferredMaintenanceWindow"];
    }
    if (output["PendingModifiedValues"] !== undefined) {
        contents.PendingModifiedValues = deserializeAws_queryPendingModifiedValues(output["PendingModifiedValues"], context);
    }
    if (output["ClusterVersion"] !== undefined) {
        contents.ClusterVersion = output["ClusterVersion"];
    }
    if (output["AllowVersionUpgrade"] !== undefined) {
        contents.AllowVersionUpgrade = output["AllowVersionUpgrade"] == "true";
    }
    if (output["NumberOfNodes"] !== undefined) {
        contents.NumberOfNodes = parseInt(output["NumberOfNodes"]);
    }
    if (output["PubliclyAccessible"] !== undefined) {
        contents.PubliclyAccessible = output["PubliclyAccessible"] == "true";
    }
    if (output["Encrypted"] !== undefined) {
        contents.Encrypted = output["Encrypted"] == "true";
    }
    if (output["RestoreStatus"] !== undefined) {
        contents.RestoreStatus = deserializeAws_queryRestoreStatus(output["RestoreStatus"], context);
    }
    if (output["DataTransferProgress"] !== undefined) {
        contents.DataTransferProgress = deserializeAws_queryDataTransferProgress(output["DataTransferProgress"], context);
    }
    if (output["HsmStatus"] !== undefined) {
        contents.HsmStatus = deserializeAws_queryHsmStatus(output["HsmStatus"], context);
    }
    if (output["ClusterSnapshotCopyStatus"] !== undefined) {
        contents.ClusterSnapshotCopyStatus = deserializeAws_queryClusterSnapshotCopyStatus(output["ClusterSnapshotCopyStatus"], context);
    }
    if (output["ClusterPublicKey"] !== undefined) {
        contents.ClusterPublicKey = output["ClusterPublicKey"];
    }
    if (output.ClusterNodes === "") {
        contents.ClusterNodes = [];
    }
    if (output["ClusterNodes"] !== undefined && output["ClusterNodes"]["member"] !== undefined) {
        contents.ClusterNodes = deserializeAws_queryClusterNodesList(__getArrayIfSingleItem(output["ClusterNodes"]["member"]), context);
    }
    if (output["ElasticIpStatus"] !== undefined) {
        contents.ElasticIpStatus = deserializeAws_queryElasticIpStatus(output["ElasticIpStatus"], context);
    }
    if (output["ClusterRevisionNumber"] !== undefined) {
        contents.ClusterRevisionNumber = output["ClusterRevisionNumber"];
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
        contents.Tags = deserializeAws_queryTagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
    }
    if (output["KmsKeyId"] !== undefined) {
        contents.KmsKeyId = output["KmsKeyId"];
    }
    if (output["EnhancedVpcRouting"] !== undefined) {
        contents.EnhancedVpcRouting = output["EnhancedVpcRouting"] == "true";
    }
    if (output.IamRoles === "") {
        contents.IamRoles = [];
    }
    if (output["IamRoles"] !== undefined && output["IamRoles"]["ClusterIamRole"] !== undefined) {
        contents.IamRoles = deserializeAws_queryClusterIamRoleList(__getArrayIfSingleItem(output["IamRoles"]["ClusterIamRole"]), context);
    }
    if (output.PendingActions === "") {
        contents.PendingActions = [];
    }
    if (output["PendingActions"] !== undefined && output["PendingActions"]["member"] !== undefined) {
        contents.PendingActions = deserializeAws_queryPendingActionsList(__getArrayIfSingleItem(output["PendingActions"]["member"]), context);
    }
    if (output["MaintenanceTrackName"] !== undefined) {
        contents.MaintenanceTrackName = output["MaintenanceTrackName"];
    }
    if (output["ElasticResizeNumberOfNodeOptions"] !== undefined) {
        contents.ElasticResizeNumberOfNodeOptions = output["ElasticResizeNumberOfNodeOptions"];
    }
    if (output.DeferredMaintenanceWindows === "") {
        contents.DeferredMaintenanceWindows = [];
    }
    if (output["DeferredMaintenanceWindows"] !== undefined &&
        output["DeferredMaintenanceWindows"]["DeferredMaintenanceWindow"] !== undefined) {
        contents.DeferredMaintenanceWindows = deserializeAws_queryDeferredMaintenanceWindowsList(__getArrayIfSingleItem(output["DeferredMaintenanceWindows"]["DeferredMaintenanceWindow"]), context);
    }
    if (output["SnapshotScheduleIdentifier"] !== undefined) {
        contents.SnapshotScheduleIdentifier = output["SnapshotScheduleIdentifier"];
    }
    if (output["SnapshotScheduleState"] !== undefined) {
        contents.SnapshotScheduleState = output["SnapshotScheduleState"];
    }
    if (output["ExpectedNextSnapshotScheduleTime"] !== undefined) {
        contents.ExpectedNextSnapshotScheduleTime = new Date(output["ExpectedNextSnapshotScheduleTime"]);
    }
    if (output["ExpectedNextSnapshotScheduleTimeStatus"] !== undefined) {
        contents.ExpectedNextSnapshotScheduleTimeStatus = output["ExpectedNextSnapshotScheduleTimeStatus"];
    }
    if (output["NextMaintenanceWindowStartTime"] !== undefined) {
        contents.NextMaintenanceWindowStartTime = new Date(output["NextMaintenanceWindowStartTime"]);
    }
    if (output["ResizeInfo"] !== undefined) {
        contents.ResizeInfo = deserializeAws_queryResizeInfo(output["ResizeInfo"], context);
    }
    if (output["AvailabilityZoneRelocationStatus"] !== undefined) {
        contents.AvailabilityZoneRelocationStatus = output["AvailabilityZoneRelocationStatus"];
    }
    if (output["ClusterNamespaceArn"] !== undefined) {
        contents.ClusterNamespaceArn = output["ClusterNamespaceArn"];
    }
    if (output["TotalStorageCapacityInMegaBytes"] !== undefined) {
        contents.TotalStorageCapacityInMegaBytes = parseInt(output["TotalStorageCapacityInMegaBytes"]);
    }
    if (output["AquaConfiguration"] !== undefined) {
        contents.AquaConfiguration = deserializeAws_queryAquaConfiguration(output["AquaConfiguration"], context);
    }
    return contents;
};
var deserializeAws_queryClusterAlreadyExistsFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryClusterAssociatedToSchedule = function (output, context) {
    var contents = {
        ClusterIdentifier: undefined,
        ScheduleAssociationState: undefined,
    };
    if (output["ClusterIdentifier"] !== undefined) {
        contents.ClusterIdentifier = output["ClusterIdentifier"];
    }
    if (output["ScheduleAssociationState"] !== undefined) {
        contents.ScheduleAssociationState = output["ScheduleAssociationState"];
    }
    return contents;
};
var deserializeAws_queryClusterCredentials = function (output, context) {
    var contents = {
        DbUser: undefined,
        DbPassword: undefined,
        Expiration: undefined,
    };
    if (output["DbUser"] !== undefined) {
        contents.DbUser = output["DbUser"];
    }
    if (output["DbPassword"] !== undefined) {
        contents.DbPassword = output["DbPassword"];
    }
    if (output["Expiration"] !== undefined) {
        contents.Expiration = new Date(output["Expiration"]);
    }
    return contents;
};
var deserializeAws_queryClusterDbRevision = function (output, context) {
    var contents = {
        ClusterIdentifier: undefined,
        CurrentDatabaseRevision: undefined,
        DatabaseRevisionReleaseDate: undefined,
        RevisionTargets: undefined,
    };
    if (output["ClusterIdentifier"] !== undefined) {
        contents.ClusterIdentifier = output["ClusterIdentifier"];
    }
    if (output["CurrentDatabaseRevision"] !== undefined) {
        contents.CurrentDatabaseRevision = output["CurrentDatabaseRevision"];
    }
    if (output["DatabaseRevisionReleaseDate"] !== undefined) {
        contents.DatabaseRevisionReleaseDate = new Date(output["DatabaseRevisionReleaseDate"]);
    }
    if (output.RevisionTargets === "") {
        contents.RevisionTargets = [];
    }
    if (output["RevisionTargets"] !== undefined && output["RevisionTargets"]["RevisionTarget"] !== undefined) {
        contents.RevisionTargets = deserializeAws_queryRevisionTargetsList(__getArrayIfSingleItem(output["RevisionTargets"]["RevisionTarget"]), context);
    }
    return contents;
};
var deserializeAws_queryClusterDbRevisionsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryClusterDbRevision(entry, context);
    });
};
var deserializeAws_queryClusterDbRevisionsMessage = function (output, context) {
    var contents = {
        Marker: undefined,
        ClusterDbRevisions: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.ClusterDbRevisions === "") {
        contents.ClusterDbRevisions = [];
    }
    if (output["ClusterDbRevisions"] !== undefined && output["ClusterDbRevisions"]["ClusterDbRevision"] !== undefined) {
        contents.ClusterDbRevisions = deserializeAws_queryClusterDbRevisionsList(__getArrayIfSingleItem(output["ClusterDbRevisions"]["ClusterDbRevision"]), context);
    }
    return contents;
};
var deserializeAws_queryClusterIamRole = function (output, context) {
    var contents = {
        IamRoleArn: undefined,
        ApplyStatus: undefined,
    };
    if (output["IamRoleArn"] !== undefined) {
        contents.IamRoleArn = output["IamRoleArn"];
    }
    if (output["ApplyStatus"] !== undefined) {
        contents.ApplyStatus = output["ApplyStatus"];
    }
    return contents;
};
var deserializeAws_queryClusterIamRoleList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryClusterIamRole(entry, context);
    });
};
var deserializeAws_queryClusterList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryCluster(entry, context);
    });
};
var deserializeAws_queryClusterNode = function (output, context) {
    var contents = {
        NodeRole: undefined,
        PrivateIPAddress: undefined,
        PublicIPAddress: undefined,
    };
    if (output["NodeRole"] !== undefined) {
        contents.NodeRole = output["NodeRole"];
    }
    if (output["PrivateIPAddress"] !== undefined) {
        contents.PrivateIPAddress = output["PrivateIPAddress"];
    }
    if (output["PublicIPAddress"] !== undefined) {
        contents.PublicIPAddress = output["PublicIPAddress"];
    }
    return contents;
};
var deserializeAws_queryClusterNodesList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryClusterNode(entry, context);
    });
};
var deserializeAws_queryClusterNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryClusterOnLatestRevisionFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryClusterParameterGroup = function (output, context) {
    var contents = {
        ParameterGroupName: undefined,
        ParameterGroupFamily: undefined,
        Description: undefined,
        Tags: undefined,
    };
    if (output["ParameterGroupName"] !== undefined) {
        contents.ParameterGroupName = output["ParameterGroupName"];
    }
    if (output["ParameterGroupFamily"] !== undefined) {
        contents.ParameterGroupFamily = output["ParameterGroupFamily"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
        contents.Tags = deserializeAws_queryTagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
    }
    return contents;
};
var deserializeAws_queryClusterParameterGroupAlreadyExistsFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryClusterParameterGroupDetails = function (output, context) {
    var contents = {
        Parameters: undefined,
        Marker: undefined,
    };
    if (output.Parameters === "") {
        contents.Parameters = [];
    }
    if (output["Parameters"] !== undefined && output["Parameters"]["Parameter"] !== undefined) {
        contents.Parameters = deserializeAws_queryParametersList(__getArrayIfSingleItem(output["Parameters"]["Parameter"]), context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryClusterParameterGroupNameMessage = function (output, context) {
    var contents = {
        ParameterGroupName: undefined,
        ParameterGroupStatus: undefined,
    };
    if (output["ParameterGroupName"] !== undefined) {
        contents.ParameterGroupName = output["ParameterGroupName"];
    }
    if (output["ParameterGroupStatus"] !== undefined) {
        contents.ParameterGroupStatus = output["ParameterGroupStatus"];
    }
    return contents;
};
var deserializeAws_queryClusterParameterGroupNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryClusterParameterGroupQuotaExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryClusterParameterGroupsMessage = function (output, context) {
    var contents = {
        Marker: undefined,
        ParameterGroups: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.ParameterGroups === "") {
        contents.ParameterGroups = [];
    }
    if (output["ParameterGroups"] !== undefined && output["ParameterGroups"]["ClusterParameterGroup"] !== undefined) {
        contents.ParameterGroups = deserializeAws_queryParameterGroupList(__getArrayIfSingleItem(output["ParameterGroups"]["ClusterParameterGroup"]), context);
    }
    return contents;
};
var deserializeAws_queryClusterParameterGroupStatus = function (output, context) {
    var contents = {
        ParameterGroupName: undefined,
        ParameterApplyStatus: undefined,
        ClusterParameterStatusList: undefined,
    };
    if (output["ParameterGroupName"] !== undefined) {
        contents.ParameterGroupName = output["ParameterGroupName"];
    }
    if (output["ParameterApplyStatus"] !== undefined) {
        contents.ParameterApplyStatus = output["ParameterApplyStatus"];
    }
    if (output.ClusterParameterStatusList === "") {
        contents.ClusterParameterStatusList = [];
    }
    if (output["ClusterParameterStatusList"] !== undefined &&
        output["ClusterParameterStatusList"]["member"] !== undefined) {
        contents.ClusterParameterStatusList = deserializeAws_queryClusterParameterStatusList(__getArrayIfSingleItem(output["ClusterParameterStatusList"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryClusterParameterGroupStatusList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryClusterParameterGroupStatus(entry, context);
    });
};
var deserializeAws_queryClusterParameterStatus = function (output, context) {
    var contents = {
        ParameterName: undefined,
        ParameterApplyStatus: undefined,
        ParameterApplyErrorDescription: undefined,
    };
    if (output["ParameterName"] !== undefined) {
        contents.ParameterName = output["ParameterName"];
    }
    if (output["ParameterApplyStatus"] !== undefined) {
        contents.ParameterApplyStatus = output["ParameterApplyStatus"];
    }
    if (output["ParameterApplyErrorDescription"] !== undefined) {
        contents.ParameterApplyErrorDescription = output["ParameterApplyErrorDescription"];
    }
    return contents;
};
var deserializeAws_queryClusterParameterStatusList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryClusterParameterStatus(entry, context);
    });
};
var deserializeAws_queryClusterQuotaExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryClusterSecurityGroup = function (output, context) {
    var contents = {
        ClusterSecurityGroupName: undefined,
        Description: undefined,
        EC2SecurityGroups: undefined,
        IPRanges: undefined,
        Tags: undefined,
    };
    if (output["ClusterSecurityGroupName"] !== undefined) {
        contents.ClusterSecurityGroupName = output["ClusterSecurityGroupName"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output.EC2SecurityGroups === "") {
        contents.EC2SecurityGroups = [];
    }
    if (output["EC2SecurityGroups"] !== undefined && output["EC2SecurityGroups"]["EC2SecurityGroup"] !== undefined) {
        contents.EC2SecurityGroups = deserializeAws_queryEC2SecurityGroupList(__getArrayIfSingleItem(output["EC2SecurityGroups"]["EC2SecurityGroup"]), context);
    }
    if (output.IPRanges === "") {
        contents.IPRanges = [];
    }
    if (output["IPRanges"] !== undefined && output["IPRanges"]["IPRange"] !== undefined) {
        contents.IPRanges = deserializeAws_queryIPRangeList(__getArrayIfSingleItem(output["IPRanges"]["IPRange"]), context);
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
        contents.Tags = deserializeAws_queryTagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
    }
    return contents;
};
var deserializeAws_queryClusterSecurityGroupAlreadyExistsFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryClusterSecurityGroupMembership = function (output, context) {
    var contents = {
        ClusterSecurityGroupName: undefined,
        Status: undefined,
    };
    if (output["ClusterSecurityGroupName"] !== undefined) {
        contents.ClusterSecurityGroupName = output["ClusterSecurityGroupName"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
var deserializeAws_queryClusterSecurityGroupMembershipList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryClusterSecurityGroupMembership(entry, context);
    });
};
var deserializeAws_queryClusterSecurityGroupMessage = function (output, context) {
    var contents = {
        Marker: undefined,
        ClusterSecurityGroups: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.ClusterSecurityGroups === "") {
        contents.ClusterSecurityGroups = [];
    }
    if (output["ClusterSecurityGroups"] !== undefined &&
        output["ClusterSecurityGroups"]["ClusterSecurityGroup"] !== undefined) {
        contents.ClusterSecurityGroups = deserializeAws_queryClusterSecurityGroups(__getArrayIfSingleItem(output["ClusterSecurityGroups"]["ClusterSecurityGroup"]), context);
    }
    return contents;
};
var deserializeAws_queryClusterSecurityGroupNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryClusterSecurityGroupQuotaExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryClusterSecurityGroups = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryClusterSecurityGroup(entry, context);
    });
};
var deserializeAws_queryClustersMessage = function (output, context) {
    var contents = {
        Marker: undefined,
        Clusters: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.Clusters === "") {
        contents.Clusters = [];
    }
    if (output["Clusters"] !== undefined && output["Clusters"]["Cluster"] !== undefined) {
        contents.Clusters = deserializeAws_queryClusterList(__getArrayIfSingleItem(output["Clusters"]["Cluster"]), context);
    }
    return contents;
};
var deserializeAws_queryClusterSnapshotAlreadyExistsFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryClusterSnapshotCopyStatus = function (output, context) {
    var contents = {
        DestinationRegion: undefined,
        RetentionPeriod: undefined,
        ManualSnapshotRetentionPeriod: undefined,
        SnapshotCopyGrantName: undefined,
    };
    if (output["DestinationRegion"] !== undefined) {
        contents.DestinationRegion = output["DestinationRegion"];
    }
    if (output["RetentionPeriod"] !== undefined) {
        contents.RetentionPeriod = parseInt(output["RetentionPeriod"]);
    }
    if (output["ManualSnapshotRetentionPeriod"] !== undefined) {
        contents.ManualSnapshotRetentionPeriod = parseInt(output["ManualSnapshotRetentionPeriod"]);
    }
    if (output["SnapshotCopyGrantName"] !== undefined) {
        contents.SnapshotCopyGrantName = output["SnapshotCopyGrantName"];
    }
    return contents;
};
var deserializeAws_queryClusterSnapshotNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryClusterSnapshotQuotaExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryClusterSubnetGroup = function (output, context) {
    var contents = {
        ClusterSubnetGroupName: undefined,
        Description: undefined,
        VpcId: undefined,
        SubnetGroupStatus: undefined,
        Subnets: undefined,
        Tags: undefined,
    };
    if (output["ClusterSubnetGroupName"] !== undefined) {
        contents.ClusterSubnetGroupName = output["ClusterSubnetGroupName"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["VpcId"] !== undefined) {
        contents.VpcId = output["VpcId"];
    }
    if (output["SubnetGroupStatus"] !== undefined) {
        contents.SubnetGroupStatus = output["SubnetGroupStatus"];
    }
    if (output.Subnets === "") {
        contents.Subnets = [];
    }
    if (output["Subnets"] !== undefined && output["Subnets"]["Subnet"] !== undefined) {
        contents.Subnets = deserializeAws_querySubnetList(__getArrayIfSingleItem(output["Subnets"]["Subnet"]), context);
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
        contents.Tags = deserializeAws_queryTagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
    }
    return contents;
};
var deserializeAws_queryClusterSubnetGroupAlreadyExistsFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryClusterSubnetGroupMessage = function (output, context) {
    var contents = {
        Marker: undefined,
        ClusterSubnetGroups: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.ClusterSubnetGroups === "") {
        contents.ClusterSubnetGroups = [];
    }
    if (output["ClusterSubnetGroups"] !== undefined &&
        output["ClusterSubnetGroups"]["ClusterSubnetGroup"] !== undefined) {
        contents.ClusterSubnetGroups = deserializeAws_queryClusterSubnetGroups(__getArrayIfSingleItem(output["ClusterSubnetGroups"]["ClusterSubnetGroup"]), context);
    }
    return contents;
};
var deserializeAws_queryClusterSubnetGroupNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryClusterSubnetGroupQuotaExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryClusterSubnetGroups = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryClusterSubnetGroup(entry, context);
    });
};
var deserializeAws_queryClusterSubnetQuotaExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryClusterVersion = function (output, context) {
    var contents = {
        ClusterVersion: undefined,
        ClusterParameterGroupFamily: undefined,
        Description: undefined,
    };
    if (output["ClusterVersion"] !== undefined) {
        contents.ClusterVersion = output["ClusterVersion"];
    }
    if (output["ClusterParameterGroupFamily"] !== undefined) {
        contents.ClusterParameterGroupFamily = output["ClusterParameterGroupFamily"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    return contents;
};
var deserializeAws_queryClusterVersionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryClusterVersion(entry, context);
    });
};
var deserializeAws_queryClusterVersionsMessage = function (output, context) {
    var contents = {
        Marker: undefined,
        ClusterVersions: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.ClusterVersions === "") {
        contents.ClusterVersions = [];
    }
    if (output["ClusterVersions"] !== undefined && output["ClusterVersions"]["ClusterVersion"] !== undefined) {
        contents.ClusterVersions = deserializeAws_queryClusterVersionList(__getArrayIfSingleItem(output["ClusterVersions"]["ClusterVersion"]), context);
    }
    return contents;
};
var deserializeAws_queryCopyClusterSnapshotResult = function (output, context) {
    var contents = {
        Snapshot: undefined,
    };
    if (output["Snapshot"] !== undefined) {
        contents.Snapshot = deserializeAws_querySnapshot(output["Snapshot"], context);
    }
    return contents;
};
var deserializeAws_queryCopyToRegionDisabledFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryCreateClusterParameterGroupResult = function (output, context) {
    var contents = {
        ClusterParameterGroup: undefined,
    };
    if (output["ClusterParameterGroup"] !== undefined) {
        contents.ClusterParameterGroup = deserializeAws_queryClusterParameterGroup(output["ClusterParameterGroup"], context);
    }
    return contents;
};
var deserializeAws_queryCreateClusterResult = function (output, context) {
    var contents = {
        Cluster: undefined,
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
var deserializeAws_queryCreateClusterSecurityGroupResult = function (output, context) {
    var contents = {
        ClusterSecurityGroup: undefined,
    };
    if (output["ClusterSecurityGroup"] !== undefined) {
        contents.ClusterSecurityGroup = deserializeAws_queryClusterSecurityGroup(output["ClusterSecurityGroup"], context);
    }
    return contents;
};
var deserializeAws_queryCreateClusterSnapshotResult = function (output, context) {
    var contents = {
        Snapshot: undefined,
    };
    if (output["Snapshot"] !== undefined) {
        contents.Snapshot = deserializeAws_querySnapshot(output["Snapshot"], context);
    }
    return contents;
};
var deserializeAws_queryCreateClusterSubnetGroupResult = function (output, context) {
    var contents = {
        ClusterSubnetGroup: undefined,
    };
    if (output["ClusterSubnetGroup"] !== undefined) {
        contents.ClusterSubnetGroup = deserializeAws_queryClusterSubnetGroup(output["ClusterSubnetGroup"], context);
    }
    return contents;
};
var deserializeAws_queryCreateEventSubscriptionResult = function (output, context) {
    var contents = {
        EventSubscription: undefined,
    };
    if (output["EventSubscription"] !== undefined) {
        contents.EventSubscription = deserializeAws_queryEventSubscription(output["EventSubscription"], context);
    }
    return contents;
};
var deserializeAws_queryCreateHsmClientCertificateResult = function (output, context) {
    var contents = {
        HsmClientCertificate: undefined,
    };
    if (output["HsmClientCertificate"] !== undefined) {
        contents.HsmClientCertificate = deserializeAws_queryHsmClientCertificate(output["HsmClientCertificate"], context);
    }
    return contents;
};
var deserializeAws_queryCreateHsmConfigurationResult = function (output, context) {
    var contents = {
        HsmConfiguration: undefined,
    };
    if (output["HsmConfiguration"] !== undefined) {
        contents.HsmConfiguration = deserializeAws_queryHsmConfiguration(output["HsmConfiguration"], context);
    }
    return contents;
};
var deserializeAws_queryCreateSnapshotCopyGrantResult = function (output, context) {
    var contents = {
        SnapshotCopyGrant: undefined,
    };
    if (output["SnapshotCopyGrant"] !== undefined) {
        contents.SnapshotCopyGrant = deserializeAws_querySnapshotCopyGrant(output["SnapshotCopyGrant"], context);
    }
    return contents;
};
var deserializeAws_queryCustomerStorageMessage = function (output, context) {
    var contents = {
        TotalBackupSizeInMegaBytes: undefined,
        TotalProvisionedStorageInMegaBytes: undefined,
    };
    if (output["TotalBackupSizeInMegaBytes"] !== undefined) {
        contents.TotalBackupSizeInMegaBytes = parseFloat(output["TotalBackupSizeInMegaBytes"]);
    }
    if (output["TotalProvisionedStorageInMegaBytes"] !== undefined) {
        contents.TotalProvisionedStorageInMegaBytes = parseFloat(output["TotalProvisionedStorageInMegaBytes"]);
    }
    return contents;
};
var deserializeAws_queryDataTransferProgress = function (output, context) {
    var contents = {
        Status: undefined,
        CurrentRateInMegaBytesPerSecond: undefined,
        TotalDataInMegaBytes: undefined,
        DataTransferredInMegaBytes: undefined,
        EstimatedTimeToCompletionInSeconds: undefined,
        ElapsedTimeInSeconds: undefined,
    };
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["CurrentRateInMegaBytesPerSecond"] !== undefined) {
        contents.CurrentRateInMegaBytesPerSecond = parseFloat(output["CurrentRateInMegaBytesPerSecond"]);
    }
    if (output["TotalDataInMegaBytes"] !== undefined) {
        contents.TotalDataInMegaBytes = parseInt(output["TotalDataInMegaBytes"]);
    }
    if (output["DataTransferredInMegaBytes"] !== undefined) {
        contents.DataTransferredInMegaBytes = parseInt(output["DataTransferredInMegaBytes"]);
    }
    if (output["EstimatedTimeToCompletionInSeconds"] !== undefined) {
        contents.EstimatedTimeToCompletionInSeconds = parseInt(output["EstimatedTimeToCompletionInSeconds"]);
    }
    if (output["ElapsedTimeInSeconds"] !== undefined) {
        contents.ElapsedTimeInSeconds = parseInt(output["ElapsedTimeInSeconds"]);
    }
    return contents;
};
var deserializeAws_queryDefaultClusterParameters = function (output, context) {
    var contents = {
        ParameterGroupFamily: undefined,
        Marker: undefined,
        Parameters: undefined,
    };
    if (output["ParameterGroupFamily"] !== undefined) {
        contents.ParameterGroupFamily = output["ParameterGroupFamily"];
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.Parameters === "") {
        contents.Parameters = [];
    }
    if (output["Parameters"] !== undefined && output["Parameters"]["Parameter"] !== undefined) {
        contents.Parameters = deserializeAws_queryParametersList(__getArrayIfSingleItem(output["Parameters"]["Parameter"]), context);
    }
    return contents;
};
var deserializeAws_queryDeferredMaintenanceWindow = function (output, context) {
    var contents = {
        DeferMaintenanceIdentifier: undefined,
        DeferMaintenanceStartTime: undefined,
        DeferMaintenanceEndTime: undefined,
    };
    if (output["DeferMaintenanceIdentifier"] !== undefined) {
        contents.DeferMaintenanceIdentifier = output["DeferMaintenanceIdentifier"];
    }
    if (output["DeferMaintenanceStartTime"] !== undefined) {
        contents.DeferMaintenanceStartTime = new Date(output["DeferMaintenanceStartTime"]);
    }
    if (output["DeferMaintenanceEndTime"] !== undefined) {
        contents.DeferMaintenanceEndTime = new Date(output["DeferMaintenanceEndTime"]);
    }
    return contents;
};
var deserializeAws_queryDeferredMaintenanceWindowsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDeferredMaintenanceWindow(entry, context);
    });
};
var deserializeAws_queryDeleteClusterResult = function (output, context) {
    var contents = {
        Cluster: undefined,
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
var deserializeAws_queryDeleteClusterSnapshotResult = function (output, context) {
    var contents = {
        Snapshot: undefined,
    };
    if (output["Snapshot"] !== undefined) {
        contents.Snapshot = deserializeAws_querySnapshot(output["Snapshot"], context);
    }
    return contents;
};
var deserializeAws_queryDependentServiceRequestThrottlingFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryDependentServiceUnavailableFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryDescribeDefaultClusterParametersResult = function (output, context) {
    var contents = {
        DefaultClusterParameters: undefined,
    };
    if (output["DefaultClusterParameters"] !== undefined) {
        contents.DefaultClusterParameters = deserializeAws_queryDefaultClusterParameters(output["DefaultClusterParameters"], context);
    }
    return contents;
};
var deserializeAws_queryDescribePartnersOutputMessage = function (output, context) {
    var contents = {
        PartnerIntegrationInfoList: undefined,
    };
    if (output.PartnerIntegrationInfoList === "") {
        contents.PartnerIntegrationInfoList = [];
    }
    if (output["PartnerIntegrationInfoList"] !== undefined &&
        output["PartnerIntegrationInfoList"]["PartnerIntegrationInfo"] !== undefined) {
        contents.PartnerIntegrationInfoList = deserializeAws_queryPartnerIntegrationInfoList(__getArrayIfSingleItem(output["PartnerIntegrationInfoList"]["PartnerIntegrationInfo"]), context);
    }
    return contents;
};
var deserializeAws_queryDescribeSnapshotSchedulesOutputMessage = function (output, context) {
    var contents = {
        SnapshotSchedules: undefined,
        Marker: undefined,
    };
    if (output.SnapshotSchedules === "") {
        contents.SnapshotSchedules = [];
    }
    if (output["SnapshotSchedules"] !== undefined && output["SnapshotSchedules"]["SnapshotSchedule"] !== undefined) {
        contents.SnapshotSchedules = deserializeAws_querySnapshotScheduleList(__getArrayIfSingleItem(output["SnapshotSchedules"]["SnapshotSchedule"]), context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryDisableSnapshotCopyResult = function (output, context) {
    var contents = {
        Cluster: undefined,
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
var deserializeAws_queryEC2SecurityGroup = function (output, context) {
    var contents = {
        Status: undefined,
        EC2SecurityGroupName: undefined,
        EC2SecurityGroupOwnerId: undefined,
        Tags: undefined,
    };
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["EC2SecurityGroupName"] !== undefined) {
        contents.EC2SecurityGroupName = output["EC2SecurityGroupName"];
    }
    if (output["EC2SecurityGroupOwnerId"] !== undefined) {
        contents.EC2SecurityGroupOwnerId = output["EC2SecurityGroupOwnerId"];
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
        contents.Tags = deserializeAws_queryTagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
    }
    return contents;
};
var deserializeAws_queryEC2SecurityGroupList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryEC2SecurityGroup(entry, context);
    });
};
var deserializeAws_queryElasticIpStatus = function (output, context) {
    var contents = {
        ElasticIp: undefined,
        Status: undefined,
    };
    if (output["ElasticIp"] !== undefined) {
        contents.ElasticIp = output["ElasticIp"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
var deserializeAws_queryEligibleTracksToUpdateList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryUpdateTarget(entry, context);
    });
};
var deserializeAws_queryEnableSnapshotCopyResult = function (output, context) {
    var contents = {
        Cluster: undefined,
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
var deserializeAws_queryEndpoint = function (output, context) {
    var contents = {
        Address: undefined,
        Port: undefined,
        VpcEndpoints: undefined,
    };
    if (output["Address"] !== undefined) {
        contents.Address = output["Address"];
    }
    if (output["Port"] !== undefined) {
        contents.Port = parseInt(output["Port"]);
    }
    if (output.VpcEndpoints === "") {
        contents.VpcEndpoints = [];
    }
    if (output["VpcEndpoints"] !== undefined && output["VpcEndpoints"]["VpcEndpoint"] !== undefined) {
        contents.VpcEndpoints = deserializeAws_queryVpcEndpointsList(__getArrayIfSingleItem(output["VpcEndpoints"]["VpcEndpoint"]), context);
    }
    return contents;
};
var deserializeAws_queryEndpointAccess = function (output, context) {
    var contents = {
        ClusterIdentifier: undefined,
        ResourceOwner: undefined,
        SubnetGroupName: undefined,
        EndpointStatus: undefined,
        EndpointName: undefined,
        EndpointCreateTime: undefined,
        Port: undefined,
        Address: undefined,
        VpcSecurityGroups: undefined,
        VpcEndpoint: undefined,
    };
    if (output["ClusterIdentifier"] !== undefined) {
        contents.ClusterIdentifier = output["ClusterIdentifier"];
    }
    if (output["ResourceOwner"] !== undefined) {
        contents.ResourceOwner = output["ResourceOwner"];
    }
    if (output["SubnetGroupName"] !== undefined) {
        contents.SubnetGroupName = output["SubnetGroupName"];
    }
    if (output["EndpointStatus"] !== undefined) {
        contents.EndpointStatus = output["EndpointStatus"];
    }
    if (output["EndpointName"] !== undefined) {
        contents.EndpointName = output["EndpointName"];
    }
    if (output["EndpointCreateTime"] !== undefined) {
        contents.EndpointCreateTime = new Date(output["EndpointCreateTime"]);
    }
    if (output["Port"] !== undefined) {
        contents.Port = parseInt(output["Port"]);
    }
    if (output["Address"] !== undefined) {
        contents.Address = output["Address"];
    }
    if (output.VpcSecurityGroups === "") {
        contents.VpcSecurityGroups = [];
    }
    if (output["VpcSecurityGroups"] !== undefined && output["VpcSecurityGroups"]["VpcSecurityGroup"] !== undefined) {
        contents.VpcSecurityGroups = deserializeAws_queryVpcSecurityGroupMembershipList(__getArrayIfSingleItem(output["VpcSecurityGroups"]["VpcSecurityGroup"]), context);
    }
    if (output["VpcEndpoint"] !== undefined) {
        contents.VpcEndpoint = deserializeAws_queryVpcEndpoint(output["VpcEndpoint"], context);
    }
    return contents;
};
var deserializeAws_queryEndpointAccesses = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryEndpointAccess(entry, context);
    });
};
var deserializeAws_queryEndpointAccessList = function (output, context) {
    var contents = {
        EndpointAccessList: undefined,
        Marker: undefined,
    };
    if (output.EndpointAccessList === "") {
        contents.EndpointAccessList = [];
    }
    if (output["EndpointAccessList"] !== undefined && output["EndpointAccessList"]["member"] !== undefined) {
        contents.EndpointAccessList = deserializeAws_queryEndpointAccesses(__getArrayIfSingleItem(output["EndpointAccessList"]["member"]), context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryEndpointAlreadyExistsFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryEndpointAuthorization = function (output, context) {
    var contents = {
        Grantor: undefined,
        Grantee: undefined,
        ClusterIdentifier: undefined,
        AuthorizeTime: undefined,
        ClusterStatus: undefined,
        Status: undefined,
        AllowedAllVPCs: undefined,
        AllowedVPCs: undefined,
        EndpointCount: undefined,
    };
    if (output["Grantor"] !== undefined) {
        contents.Grantor = output["Grantor"];
    }
    if (output["Grantee"] !== undefined) {
        contents.Grantee = output["Grantee"];
    }
    if (output["ClusterIdentifier"] !== undefined) {
        contents.ClusterIdentifier = output["ClusterIdentifier"];
    }
    if (output["AuthorizeTime"] !== undefined) {
        contents.AuthorizeTime = new Date(output["AuthorizeTime"]);
    }
    if (output["ClusterStatus"] !== undefined) {
        contents.ClusterStatus = output["ClusterStatus"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["AllowedAllVPCs"] !== undefined) {
        contents.AllowedAllVPCs = output["AllowedAllVPCs"] == "true";
    }
    if (output.AllowedVPCs === "") {
        contents.AllowedVPCs = [];
    }
    if (output["AllowedVPCs"] !== undefined && output["AllowedVPCs"]["VpcIdentifier"] !== undefined) {
        contents.AllowedVPCs = deserializeAws_queryVpcIdentifierList(__getArrayIfSingleItem(output["AllowedVPCs"]["VpcIdentifier"]), context);
    }
    if (output["EndpointCount"] !== undefined) {
        contents.EndpointCount = parseInt(output["EndpointCount"]);
    }
    return contents;
};
var deserializeAws_queryEndpointAuthorizationAlreadyExistsFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryEndpointAuthorizationList = function (output, context) {
    var contents = {
        EndpointAuthorizationList: undefined,
        Marker: undefined,
    };
    if (output.EndpointAuthorizationList === "") {
        contents.EndpointAuthorizationList = [];
    }
    if (output["EndpointAuthorizationList"] !== undefined &&
        output["EndpointAuthorizationList"]["member"] !== undefined) {
        contents.EndpointAuthorizationList = deserializeAws_queryEndpointAuthorizations(__getArrayIfSingleItem(output["EndpointAuthorizationList"]["member"]), context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryEndpointAuthorizationNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryEndpointAuthorizations = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryEndpointAuthorization(entry, context);
    });
};
var deserializeAws_queryEndpointAuthorizationsPerClusterLimitExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryEndpointNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryEndpointsPerAuthorizationLimitExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryEndpointsPerClusterLimitExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryEvent = function (output, context) {
    var contents = {
        SourceIdentifier: undefined,
        SourceType: undefined,
        Message: undefined,
        EventCategories: undefined,
        Severity: undefined,
        Date: undefined,
        EventId: undefined,
    };
    if (output["SourceIdentifier"] !== undefined) {
        contents.SourceIdentifier = output["SourceIdentifier"];
    }
    if (output["SourceType"] !== undefined) {
        contents.SourceType = output["SourceType"];
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    if (output.EventCategories === "") {
        contents.EventCategories = [];
    }
    if (output["EventCategories"] !== undefined && output["EventCategories"]["EventCategory"] !== undefined) {
        contents.EventCategories = deserializeAws_queryEventCategoriesList(__getArrayIfSingleItem(output["EventCategories"]["EventCategory"]), context);
    }
    if (output["Severity"] !== undefined) {
        contents.Severity = output["Severity"];
    }
    if (output["Date"] !== undefined) {
        contents.Date = new Date(output["Date"]);
    }
    if (output["EventId"] !== undefined) {
        contents.EventId = output["EventId"];
    }
    return contents;
};
var deserializeAws_queryEventCategoriesList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryEventCategoriesMap = function (output, context) {
    var contents = {
        SourceType: undefined,
        Events: undefined,
    };
    if (output["SourceType"] !== undefined) {
        contents.SourceType = output["SourceType"];
    }
    if (output.Events === "") {
        contents.Events = [];
    }
    if (output["Events"] !== undefined && output["Events"]["EventInfoMap"] !== undefined) {
        contents.Events = deserializeAws_queryEventInfoMapList(__getArrayIfSingleItem(output["Events"]["EventInfoMap"]), context);
    }
    return contents;
};
var deserializeAws_queryEventCategoriesMapList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryEventCategoriesMap(entry, context);
    });
};
var deserializeAws_queryEventCategoriesMessage = function (output, context) {
    var contents = {
        EventCategoriesMapList: undefined,
    };
    if (output.EventCategoriesMapList === "") {
        contents.EventCategoriesMapList = [];
    }
    if (output["EventCategoriesMapList"] !== undefined &&
        output["EventCategoriesMapList"]["EventCategoriesMap"] !== undefined) {
        contents.EventCategoriesMapList = deserializeAws_queryEventCategoriesMapList(__getArrayIfSingleItem(output["EventCategoriesMapList"]["EventCategoriesMap"]), context);
    }
    return contents;
};
var deserializeAws_queryEventInfoMap = function (output, context) {
    var contents = {
        EventId: undefined,
        EventCategories: undefined,
        EventDescription: undefined,
        Severity: undefined,
    };
    if (output["EventId"] !== undefined) {
        contents.EventId = output["EventId"];
    }
    if (output.EventCategories === "") {
        contents.EventCategories = [];
    }
    if (output["EventCategories"] !== undefined && output["EventCategories"]["EventCategory"] !== undefined) {
        contents.EventCategories = deserializeAws_queryEventCategoriesList(__getArrayIfSingleItem(output["EventCategories"]["EventCategory"]), context);
    }
    if (output["EventDescription"] !== undefined) {
        contents.EventDescription = output["EventDescription"];
    }
    if (output["Severity"] !== undefined) {
        contents.Severity = output["Severity"];
    }
    return contents;
};
var deserializeAws_queryEventInfoMapList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryEventInfoMap(entry, context);
    });
};
var deserializeAws_queryEventList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryEvent(entry, context);
    });
};
var deserializeAws_queryEventsMessage = function (output, context) {
    var contents = {
        Marker: undefined,
        Events: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.Events === "") {
        contents.Events = [];
    }
    if (output["Events"] !== undefined && output["Events"]["Event"] !== undefined) {
        contents.Events = deserializeAws_queryEventList(__getArrayIfSingleItem(output["Events"]["Event"]), context);
    }
    return contents;
};
var deserializeAws_queryEventSubscription = function (output, context) {
    var contents = {
        CustomerAwsId: undefined,
        CustSubscriptionId: undefined,
        SnsTopicArn: undefined,
        Status: undefined,
        SubscriptionCreationTime: undefined,
        SourceType: undefined,
        SourceIdsList: undefined,
        EventCategoriesList: undefined,
        Severity: undefined,
        Enabled: undefined,
        Tags: undefined,
    };
    if (output["CustomerAwsId"] !== undefined) {
        contents.CustomerAwsId = output["CustomerAwsId"];
    }
    if (output["CustSubscriptionId"] !== undefined) {
        contents.CustSubscriptionId = output["CustSubscriptionId"];
    }
    if (output["SnsTopicArn"] !== undefined) {
        contents.SnsTopicArn = output["SnsTopicArn"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["SubscriptionCreationTime"] !== undefined) {
        contents.SubscriptionCreationTime = new Date(output["SubscriptionCreationTime"]);
    }
    if (output["SourceType"] !== undefined) {
        contents.SourceType = output["SourceType"];
    }
    if (output.SourceIdsList === "") {
        contents.SourceIdsList = [];
    }
    if (output["SourceIdsList"] !== undefined && output["SourceIdsList"]["SourceId"] !== undefined) {
        contents.SourceIdsList = deserializeAws_querySourceIdsList(__getArrayIfSingleItem(output["SourceIdsList"]["SourceId"]), context);
    }
    if (output.EventCategoriesList === "") {
        contents.EventCategoriesList = [];
    }
    if (output["EventCategoriesList"] !== undefined && output["EventCategoriesList"]["EventCategory"] !== undefined) {
        contents.EventCategoriesList = deserializeAws_queryEventCategoriesList(__getArrayIfSingleItem(output["EventCategoriesList"]["EventCategory"]), context);
    }
    if (output["Severity"] !== undefined) {
        contents.Severity = output["Severity"];
    }
    if (output["Enabled"] !== undefined) {
        contents.Enabled = output["Enabled"] == "true";
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
        contents.Tags = deserializeAws_queryTagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
    }
    return contents;
};
var deserializeAws_queryEventSubscriptionQuotaExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryEventSubscriptionsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryEventSubscription(entry, context);
    });
};
var deserializeAws_queryEventSubscriptionsMessage = function (output, context) {
    var contents = {
        Marker: undefined,
        EventSubscriptionsList: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.EventSubscriptionsList === "") {
        contents.EventSubscriptionsList = [];
    }
    if (output["EventSubscriptionsList"] !== undefined &&
        output["EventSubscriptionsList"]["EventSubscription"] !== undefined) {
        contents.EventSubscriptionsList = deserializeAws_queryEventSubscriptionsList(__getArrayIfSingleItem(output["EventSubscriptionsList"]["EventSubscription"]), context);
    }
    return contents;
};
var deserializeAws_queryGetReservedNodeExchangeOfferingsOutputMessage = function (output, context) {
    var contents = {
        Marker: undefined,
        ReservedNodeOfferings: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.ReservedNodeOfferings === "") {
        contents.ReservedNodeOfferings = [];
    }
    if (output["ReservedNodeOfferings"] !== undefined &&
        output["ReservedNodeOfferings"]["ReservedNodeOffering"] !== undefined) {
        contents.ReservedNodeOfferings = deserializeAws_queryReservedNodeOfferingList(__getArrayIfSingleItem(output["ReservedNodeOfferings"]["ReservedNodeOffering"]), context);
    }
    return contents;
};
var deserializeAws_queryHsmClientCertificate = function (output, context) {
    var contents = {
        HsmClientCertificateIdentifier: undefined,
        HsmClientCertificatePublicKey: undefined,
        Tags: undefined,
    };
    if (output["HsmClientCertificateIdentifier"] !== undefined) {
        contents.HsmClientCertificateIdentifier = output["HsmClientCertificateIdentifier"];
    }
    if (output["HsmClientCertificatePublicKey"] !== undefined) {
        contents.HsmClientCertificatePublicKey = output["HsmClientCertificatePublicKey"];
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
        contents.Tags = deserializeAws_queryTagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
    }
    return contents;
};
var deserializeAws_queryHsmClientCertificateAlreadyExistsFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryHsmClientCertificateList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryHsmClientCertificate(entry, context);
    });
};
var deserializeAws_queryHsmClientCertificateMessage = function (output, context) {
    var contents = {
        Marker: undefined,
        HsmClientCertificates: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.HsmClientCertificates === "") {
        contents.HsmClientCertificates = [];
    }
    if (output["HsmClientCertificates"] !== undefined &&
        output["HsmClientCertificates"]["HsmClientCertificate"] !== undefined) {
        contents.HsmClientCertificates = deserializeAws_queryHsmClientCertificateList(__getArrayIfSingleItem(output["HsmClientCertificates"]["HsmClientCertificate"]), context);
    }
    return contents;
};
var deserializeAws_queryHsmClientCertificateNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryHsmClientCertificateQuotaExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryHsmConfiguration = function (output, context) {
    var contents = {
        HsmConfigurationIdentifier: undefined,
        Description: undefined,
        HsmIpAddress: undefined,
        HsmPartitionName: undefined,
        Tags: undefined,
    };
    if (output["HsmConfigurationIdentifier"] !== undefined) {
        contents.HsmConfigurationIdentifier = output["HsmConfigurationIdentifier"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["HsmIpAddress"] !== undefined) {
        contents.HsmIpAddress = output["HsmIpAddress"];
    }
    if (output["HsmPartitionName"] !== undefined) {
        contents.HsmPartitionName = output["HsmPartitionName"];
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
        contents.Tags = deserializeAws_queryTagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
    }
    return contents;
};
var deserializeAws_queryHsmConfigurationAlreadyExistsFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryHsmConfigurationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryHsmConfiguration(entry, context);
    });
};
var deserializeAws_queryHsmConfigurationMessage = function (output, context) {
    var contents = {
        Marker: undefined,
        HsmConfigurations: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.HsmConfigurations === "") {
        contents.HsmConfigurations = [];
    }
    if (output["HsmConfigurations"] !== undefined && output["HsmConfigurations"]["HsmConfiguration"] !== undefined) {
        contents.HsmConfigurations = deserializeAws_queryHsmConfigurationList(__getArrayIfSingleItem(output["HsmConfigurations"]["HsmConfiguration"]), context);
    }
    return contents;
};
var deserializeAws_queryHsmConfigurationNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryHsmConfigurationQuotaExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryHsmStatus = function (output, context) {
    var contents = {
        HsmClientCertificateIdentifier: undefined,
        HsmConfigurationIdentifier: undefined,
        Status: undefined,
    };
    if (output["HsmClientCertificateIdentifier"] !== undefined) {
        contents.HsmClientCertificateIdentifier = output["HsmClientCertificateIdentifier"];
    }
    if (output["HsmConfigurationIdentifier"] !== undefined) {
        contents.HsmConfigurationIdentifier = output["HsmConfigurationIdentifier"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
var deserializeAws_queryImportTablesCompleted = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryImportTablesInProgress = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryImportTablesNotStarted = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryIncompatibleOrderableOptions = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInProgressTableRestoreQuotaExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInsufficientClusterCapacityFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInsufficientS3BucketPolicyFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidAuthorizationStateFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidClusterParameterGroupStateFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidClusterSecurityGroupStateFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidClusterSnapshotScheduleStateFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidClusterSnapshotStateFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidClusterStateFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidClusterSubnetGroupStateFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidClusterSubnetStateFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidClusterTrackFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidElasticIpFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidEndpointStateFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidHsmClientCertificateStateFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidHsmConfigurationStateFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidReservedNodeStateFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidRestoreFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidRetentionPeriodFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidS3BucketNameFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidS3KeyPrefixFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidScheduledActionFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidScheduleFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidSnapshotCopyGrantStateFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidSubnet = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidSubscriptionStateFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidTableRestoreArgumentFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidTagFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidUsageLimitFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidVPCNetworkStateFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryIPRange = function (output, context) {
    var contents = {
        Status: undefined,
        CIDRIP: undefined,
        Tags: undefined,
    };
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["CIDRIP"] !== undefined) {
        contents.CIDRIP = output["CIDRIP"];
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
        contents.Tags = deserializeAws_queryTagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
    }
    return contents;
};
var deserializeAws_queryIPRangeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryIPRange(entry, context);
    });
};
var deserializeAws_queryLimitExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryLoggingStatus = function (output, context) {
    var contents = {
        LoggingEnabled: undefined,
        BucketName: undefined,
        S3KeyPrefix: undefined,
        LastSuccessfulDeliveryTime: undefined,
        LastFailureTime: undefined,
        LastFailureMessage: undefined,
    };
    if (output["LoggingEnabled"] !== undefined) {
        contents.LoggingEnabled = output["LoggingEnabled"] == "true";
    }
    if (output["BucketName"] !== undefined) {
        contents.BucketName = output["BucketName"];
    }
    if (output["S3KeyPrefix"] !== undefined) {
        contents.S3KeyPrefix = output["S3KeyPrefix"];
    }
    if (output["LastSuccessfulDeliveryTime"] !== undefined) {
        contents.LastSuccessfulDeliveryTime = new Date(output["LastSuccessfulDeliveryTime"]);
    }
    if (output["LastFailureTime"] !== undefined) {
        contents.LastFailureTime = new Date(output["LastFailureTime"]);
    }
    if (output["LastFailureMessage"] !== undefined) {
        contents.LastFailureMessage = output["LastFailureMessage"];
    }
    return contents;
};
var deserializeAws_queryMaintenanceTrack = function (output, context) {
    var contents = {
        MaintenanceTrackName: undefined,
        DatabaseVersion: undefined,
        UpdateTargets: undefined,
    };
    if (output["MaintenanceTrackName"] !== undefined) {
        contents.MaintenanceTrackName = output["MaintenanceTrackName"];
    }
    if (output["DatabaseVersion"] !== undefined) {
        contents.DatabaseVersion = output["DatabaseVersion"];
    }
    if (output.UpdateTargets === "") {
        contents.UpdateTargets = [];
    }
    if (output["UpdateTargets"] !== undefined && output["UpdateTargets"]["UpdateTarget"] !== undefined) {
        contents.UpdateTargets = deserializeAws_queryEligibleTracksToUpdateList(__getArrayIfSingleItem(output["UpdateTargets"]["UpdateTarget"]), context);
    }
    return contents;
};
var deserializeAws_queryModifyAquaOutputMessage = function (output, context) {
    var contents = {
        AquaConfiguration: undefined,
    };
    if (output["AquaConfiguration"] !== undefined) {
        contents.AquaConfiguration = deserializeAws_queryAquaConfiguration(output["AquaConfiguration"], context);
    }
    return contents;
};
var deserializeAws_queryModifyClusterDbRevisionResult = function (output, context) {
    var contents = {
        Cluster: undefined,
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
var deserializeAws_queryModifyClusterIamRolesResult = function (output, context) {
    var contents = {
        Cluster: undefined,
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
var deserializeAws_queryModifyClusterMaintenanceResult = function (output, context) {
    var contents = {
        Cluster: undefined,
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
var deserializeAws_queryModifyClusterResult = function (output, context) {
    var contents = {
        Cluster: undefined,
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
var deserializeAws_queryModifyClusterSnapshotResult = function (output, context) {
    var contents = {
        Snapshot: undefined,
    };
    if (output["Snapshot"] !== undefined) {
        contents.Snapshot = deserializeAws_querySnapshot(output["Snapshot"], context);
    }
    return contents;
};
var deserializeAws_queryModifyClusterSubnetGroupResult = function (output, context) {
    var contents = {
        ClusterSubnetGroup: undefined,
    };
    if (output["ClusterSubnetGroup"] !== undefined) {
        contents.ClusterSubnetGroup = deserializeAws_queryClusterSubnetGroup(output["ClusterSubnetGroup"], context);
    }
    return contents;
};
var deserializeAws_queryModifyEventSubscriptionResult = function (output, context) {
    var contents = {
        EventSubscription: undefined,
    };
    if (output["EventSubscription"] !== undefined) {
        contents.EventSubscription = deserializeAws_queryEventSubscription(output["EventSubscription"], context);
    }
    return contents;
};
var deserializeAws_queryModifySnapshotCopyRetentionPeriodResult = function (output, context) {
    var contents = {
        Cluster: undefined,
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
var deserializeAws_queryNetworkInterface = function (output, context) {
    var contents = {
        NetworkInterfaceId: undefined,
        SubnetId: undefined,
        PrivateIpAddress: undefined,
        AvailabilityZone: undefined,
    };
    if (output["NetworkInterfaceId"] !== undefined) {
        contents.NetworkInterfaceId = output["NetworkInterfaceId"];
    }
    if (output["SubnetId"] !== undefined) {
        contents.SubnetId = output["SubnetId"];
    }
    if (output["PrivateIpAddress"] !== undefined) {
        contents.PrivateIpAddress = output["PrivateIpAddress"];
    }
    if (output["AvailabilityZone"] !== undefined) {
        contents.AvailabilityZone = output["AvailabilityZone"];
    }
    return contents;
};
var deserializeAws_queryNetworkInterfaceList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryNetworkInterface(entry, context);
    });
};
var deserializeAws_queryNodeConfigurationOption = function (output, context) {
    var contents = {
        NodeType: undefined,
        NumberOfNodes: undefined,
        EstimatedDiskUtilizationPercent: undefined,
        Mode: undefined,
    };
    if (output["NodeType"] !== undefined) {
        contents.NodeType = output["NodeType"];
    }
    if (output["NumberOfNodes"] !== undefined) {
        contents.NumberOfNodes = parseInt(output["NumberOfNodes"]);
    }
    if (output["EstimatedDiskUtilizationPercent"] !== undefined) {
        contents.EstimatedDiskUtilizationPercent = parseFloat(output["EstimatedDiskUtilizationPercent"]);
    }
    if (output["Mode"] !== undefined) {
        contents.Mode = output["Mode"];
    }
    return contents;
};
var deserializeAws_queryNodeConfigurationOptionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryNodeConfigurationOption(entry, context);
    });
};
var deserializeAws_queryNodeConfigurationOptionsMessage = function (output, context) {
    var contents = {
        NodeConfigurationOptionList: undefined,
        Marker: undefined,
    };
    if (output.NodeConfigurationOptionList === "") {
        contents.NodeConfigurationOptionList = [];
    }
    if (output["NodeConfigurationOptionList"] !== undefined &&
        output["NodeConfigurationOptionList"]["NodeConfigurationOption"] !== undefined) {
        contents.NodeConfigurationOptionList = deserializeAws_queryNodeConfigurationOptionList(__getArrayIfSingleItem(output["NodeConfigurationOptionList"]["NodeConfigurationOption"]), context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryNumberOfNodesPerClusterLimitExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryNumberOfNodesQuotaExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryOrderableClusterOption = function (output, context) {
    var contents = {
        ClusterVersion: undefined,
        ClusterType: undefined,
        NodeType: undefined,
        AvailabilityZones: undefined,
    };
    if (output["ClusterVersion"] !== undefined) {
        contents.ClusterVersion = output["ClusterVersion"];
    }
    if (output["ClusterType"] !== undefined) {
        contents.ClusterType = output["ClusterType"];
    }
    if (output["NodeType"] !== undefined) {
        contents.NodeType = output["NodeType"];
    }
    if (output.AvailabilityZones === "") {
        contents.AvailabilityZones = [];
    }
    if (output["AvailabilityZones"] !== undefined && output["AvailabilityZones"]["AvailabilityZone"] !== undefined) {
        contents.AvailabilityZones = deserializeAws_queryAvailabilityZoneList(__getArrayIfSingleItem(output["AvailabilityZones"]["AvailabilityZone"]), context);
    }
    return contents;
};
var deserializeAws_queryOrderableClusterOptionsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryOrderableClusterOption(entry, context);
    });
};
var deserializeAws_queryOrderableClusterOptionsMessage = function (output, context) {
    var contents = {
        OrderableClusterOptions: undefined,
        Marker: undefined,
    };
    if (output.OrderableClusterOptions === "") {
        contents.OrderableClusterOptions = [];
    }
    if (output["OrderableClusterOptions"] !== undefined &&
        output["OrderableClusterOptions"]["OrderableClusterOption"] !== undefined) {
        contents.OrderableClusterOptions = deserializeAws_queryOrderableClusterOptionsList(__getArrayIfSingleItem(output["OrderableClusterOptions"]["OrderableClusterOption"]), context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryParameter = function (output, context) {
    var contents = {
        ParameterName: undefined,
        ParameterValue: undefined,
        Description: undefined,
        Source: undefined,
        DataType: undefined,
        AllowedValues: undefined,
        ApplyType: undefined,
        IsModifiable: undefined,
        MinimumEngineVersion: undefined,
    };
    if (output["ParameterName"] !== undefined) {
        contents.ParameterName = output["ParameterName"];
    }
    if (output["ParameterValue"] !== undefined) {
        contents.ParameterValue = output["ParameterValue"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["Source"] !== undefined) {
        contents.Source = output["Source"];
    }
    if (output["DataType"] !== undefined) {
        contents.DataType = output["DataType"];
    }
    if (output["AllowedValues"] !== undefined) {
        contents.AllowedValues = output["AllowedValues"];
    }
    if (output["ApplyType"] !== undefined) {
        contents.ApplyType = output["ApplyType"];
    }
    if (output["IsModifiable"] !== undefined) {
        contents.IsModifiable = output["IsModifiable"] == "true";
    }
    if (output["MinimumEngineVersion"] !== undefined) {
        contents.MinimumEngineVersion = output["MinimumEngineVersion"];
    }
    return contents;
};
var deserializeAws_queryParameterGroupList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryClusterParameterGroup(entry, context);
    });
};
var deserializeAws_queryParametersList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryParameter(entry, context);
    });
};
var deserializeAws_queryPartnerIntegrationInfo = function (output, context) {
    var contents = {
        DatabaseName: undefined,
        PartnerName: undefined,
        Status: undefined,
        StatusMessage: undefined,
        CreatedAt: undefined,
        UpdatedAt: undefined,
    };
    if (output["DatabaseName"] !== undefined) {
        contents.DatabaseName = output["DatabaseName"];
    }
    if (output["PartnerName"] !== undefined) {
        contents.PartnerName = output["PartnerName"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["StatusMessage"] !== undefined) {
        contents.StatusMessage = output["StatusMessage"];
    }
    if (output["CreatedAt"] !== undefined) {
        contents.CreatedAt = new Date(output["CreatedAt"]);
    }
    if (output["UpdatedAt"] !== undefined) {
        contents.UpdatedAt = new Date(output["UpdatedAt"]);
    }
    return contents;
};
var deserializeAws_queryPartnerIntegrationInfoList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryPartnerIntegrationInfo(entry, context);
    });
};
var deserializeAws_queryPartnerIntegrationOutputMessage = function (output, context) {
    var contents = {
        DatabaseName: undefined,
        PartnerName: undefined,
    };
    if (output["DatabaseName"] !== undefined) {
        contents.DatabaseName = output["DatabaseName"];
    }
    if (output["PartnerName"] !== undefined) {
        contents.PartnerName = output["PartnerName"];
    }
    return contents;
};
var deserializeAws_queryPartnerNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryPauseClusterMessage = function (output, context) {
    var contents = {
        ClusterIdentifier: undefined,
    };
    if (output["ClusterIdentifier"] !== undefined) {
        contents.ClusterIdentifier = output["ClusterIdentifier"];
    }
    return contents;
};
var deserializeAws_queryPauseClusterResult = function (output, context) {
    var contents = {
        Cluster: undefined,
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
var deserializeAws_queryPendingActionsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryPendingModifiedValues = function (output, context) {
    var contents = {
        MasterUserPassword: undefined,
        NodeType: undefined,
        NumberOfNodes: undefined,
        ClusterType: undefined,
        ClusterVersion: undefined,
        AutomatedSnapshotRetentionPeriod: undefined,
        ClusterIdentifier: undefined,
        PubliclyAccessible: undefined,
        EnhancedVpcRouting: undefined,
        MaintenanceTrackName: undefined,
        EncryptionType: undefined,
    };
    if (output["MasterUserPassword"] !== undefined) {
        contents.MasterUserPassword = output["MasterUserPassword"];
    }
    if (output["NodeType"] !== undefined) {
        contents.NodeType = output["NodeType"];
    }
    if (output["NumberOfNodes"] !== undefined) {
        contents.NumberOfNodes = parseInt(output["NumberOfNodes"]);
    }
    if (output["ClusterType"] !== undefined) {
        contents.ClusterType = output["ClusterType"];
    }
    if (output["ClusterVersion"] !== undefined) {
        contents.ClusterVersion = output["ClusterVersion"];
    }
    if (output["AutomatedSnapshotRetentionPeriod"] !== undefined) {
        contents.AutomatedSnapshotRetentionPeriod = parseInt(output["AutomatedSnapshotRetentionPeriod"]);
    }
    if (output["ClusterIdentifier"] !== undefined) {
        contents.ClusterIdentifier = output["ClusterIdentifier"];
    }
    if (output["PubliclyAccessible"] !== undefined) {
        contents.PubliclyAccessible = output["PubliclyAccessible"] == "true";
    }
    if (output["EnhancedVpcRouting"] !== undefined) {
        contents.EnhancedVpcRouting = output["EnhancedVpcRouting"] == "true";
    }
    if (output["MaintenanceTrackName"] !== undefined) {
        contents.MaintenanceTrackName = output["MaintenanceTrackName"];
    }
    if (output["EncryptionType"] !== undefined) {
        contents.EncryptionType = output["EncryptionType"];
    }
    return contents;
};
var deserializeAws_queryPurchaseReservedNodeOfferingResult = function (output, context) {
    var contents = {
        ReservedNode: undefined,
    };
    if (output["ReservedNode"] !== undefined) {
        contents.ReservedNode = deserializeAws_queryReservedNode(output["ReservedNode"], context);
    }
    return contents;
};
var deserializeAws_queryRebootClusterResult = function (output, context) {
    var contents = {
        Cluster: undefined,
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
var deserializeAws_queryRecurringCharge = function (output, context) {
    var contents = {
        RecurringChargeAmount: undefined,
        RecurringChargeFrequency: undefined,
    };
    if (output["RecurringChargeAmount"] !== undefined) {
        contents.RecurringChargeAmount = parseFloat(output["RecurringChargeAmount"]);
    }
    if (output["RecurringChargeFrequency"] !== undefined) {
        contents.RecurringChargeFrequency = output["RecurringChargeFrequency"];
    }
    return contents;
};
var deserializeAws_queryRecurringChargeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryRecurringCharge(entry, context);
    });
};
var deserializeAws_queryReservedNode = function (output, context) {
    var contents = {
        ReservedNodeId: undefined,
        ReservedNodeOfferingId: undefined,
        NodeType: undefined,
        StartTime: undefined,
        Duration: undefined,
        FixedPrice: undefined,
        UsagePrice: undefined,
        CurrencyCode: undefined,
        NodeCount: undefined,
        State: undefined,
        OfferingType: undefined,
        RecurringCharges: undefined,
        ReservedNodeOfferingType: undefined,
    };
    if (output["ReservedNodeId"] !== undefined) {
        contents.ReservedNodeId = output["ReservedNodeId"];
    }
    if (output["ReservedNodeOfferingId"] !== undefined) {
        contents.ReservedNodeOfferingId = output["ReservedNodeOfferingId"];
    }
    if (output["NodeType"] !== undefined) {
        contents.NodeType = output["NodeType"];
    }
    if (output["StartTime"] !== undefined) {
        contents.StartTime = new Date(output["StartTime"]);
    }
    if (output["Duration"] !== undefined) {
        contents.Duration = parseInt(output["Duration"]);
    }
    if (output["FixedPrice"] !== undefined) {
        contents.FixedPrice = parseFloat(output["FixedPrice"]);
    }
    if (output["UsagePrice"] !== undefined) {
        contents.UsagePrice = parseFloat(output["UsagePrice"]);
    }
    if (output["CurrencyCode"] !== undefined) {
        contents.CurrencyCode = output["CurrencyCode"];
    }
    if (output["NodeCount"] !== undefined) {
        contents.NodeCount = parseInt(output["NodeCount"]);
    }
    if (output["State"] !== undefined) {
        contents.State = output["State"];
    }
    if (output["OfferingType"] !== undefined) {
        contents.OfferingType = output["OfferingType"];
    }
    if (output.RecurringCharges === "") {
        contents.RecurringCharges = [];
    }
    if (output["RecurringCharges"] !== undefined && output["RecurringCharges"]["RecurringCharge"] !== undefined) {
        contents.RecurringCharges = deserializeAws_queryRecurringChargeList(__getArrayIfSingleItem(output["RecurringCharges"]["RecurringCharge"]), context);
    }
    if (output["ReservedNodeOfferingType"] !== undefined) {
        contents.ReservedNodeOfferingType = output["ReservedNodeOfferingType"];
    }
    return contents;
};
var deserializeAws_queryReservedNodeAlreadyExistsFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryReservedNodeAlreadyMigratedFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryReservedNodeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryReservedNode(entry, context);
    });
};
var deserializeAws_queryReservedNodeNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryReservedNodeOffering = function (output, context) {
    var contents = {
        ReservedNodeOfferingId: undefined,
        NodeType: undefined,
        Duration: undefined,
        FixedPrice: undefined,
        UsagePrice: undefined,
        CurrencyCode: undefined,
        OfferingType: undefined,
        RecurringCharges: undefined,
        ReservedNodeOfferingType: undefined,
    };
    if (output["ReservedNodeOfferingId"] !== undefined) {
        contents.ReservedNodeOfferingId = output["ReservedNodeOfferingId"];
    }
    if (output["NodeType"] !== undefined) {
        contents.NodeType = output["NodeType"];
    }
    if (output["Duration"] !== undefined) {
        contents.Duration = parseInt(output["Duration"]);
    }
    if (output["FixedPrice"] !== undefined) {
        contents.FixedPrice = parseFloat(output["FixedPrice"]);
    }
    if (output["UsagePrice"] !== undefined) {
        contents.UsagePrice = parseFloat(output["UsagePrice"]);
    }
    if (output["CurrencyCode"] !== undefined) {
        contents.CurrencyCode = output["CurrencyCode"];
    }
    if (output["OfferingType"] !== undefined) {
        contents.OfferingType = output["OfferingType"];
    }
    if (output.RecurringCharges === "") {
        contents.RecurringCharges = [];
    }
    if (output["RecurringCharges"] !== undefined && output["RecurringCharges"]["RecurringCharge"] !== undefined) {
        contents.RecurringCharges = deserializeAws_queryRecurringChargeList(__getArrayIfSingleItem(output["RecurringCharges"]["RecurringCharge"]), context);
    }
    if (output["ReservedNodeOfferingType"] !== undefined) {
        contents.ReservedNodeOfferingType = output["ReservedNodeOfferingType"];
    }
    return contents;
};
var deserializeAws_queryReservedNodeOfferingList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryReservedNodeOffering(entry, context);
    });
};
var deserializeAws_queryReservedNodeOfferingNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryReservedNodeOfferingsMessage = function (output, context) {
    var contents = {
        Marker: undefined,
        ReservedNodeOfferings: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.ReservedNodeOfferings === "") {
        contents.ReservedNodeOfferings = [];
    }
    if (output["ReservedNodeOfferings"] !== undefined &&
        output["ReservedNodeOfferings"]["ReservedNodeOffering"] !== undefined) {
        contents.ReservedNodeOfferings = deserializeAws_queryReservedNodeOfferingList(__getArrayIfSingleItem(output["ReservedNodeOfferings"]["ReservedNodeOffering"]), context);
    }
    return contents;
};
var deserializeAws_queryReservedNodeQuotaExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryReservedNodesMessage = function (output, context) {
    var contents = {
        Marker: undefined,
        ReservedNodes: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.ReservedNodes === "") {
        contents.ReservedNodes = [];
    }
    if (output["ReservedNodes"] !== undefined && output["ReservedNodes"]["ReservedNode"] !== undefined) {
        contents.ReservedNodes = deserializeAws_queryReservedNodeList(__getArrayIfSingleItem(output["ReservedNodes"]["ReservedNode"]), context);
    }
    return contents;
};
var deserializeAws_queryResizeClusterMessage = function (output, context) {
    var contents = {
        ClusterIdentifier: undefined,
        ClusterType: undefined,
        NodeType: undefined,
        NumberOfNodes: undefined,
        Classic: undefined,
    };
    if (output["ClusterIdentifier"] !== undefined) {
        contents.ClusterIdentifier = output["ClusterIdentifier"];
    }
    if (output["ClusterType"] !== undefined) {
        contents.ClusterType = output["ClusterType"];
    }
    if (output["NodeType"] !== undefined) {
        contents.NodeType = output["NodeType"];
    }
    if (output["NumberOfNodes"] !== undefined) {
        contents.NumberOfNodes = parseInt(output["NumberOfNodes"]);
    }
    if (output["Classic"] !== undefined) {
        contents.Classic = output["Classic"] == "true";
    }
    return contents;
};
var deserializeAws_queryResizeClusterResult = function (output, context) {
    var contents = {
        Cluster: undefined,
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
var deserializeAws_queryResizeInfo = function (output, context) {
    var contents = {
        ResizeType: undefined,
        AllowCancelResize: undefined,
    };
    if (output["ResizeType"] !== undefined) {
        contents.ResizeType = output["ResizeType"];
    }
    if (output["AllowCancelResize"] !== undefined) {
        contents.AllowCancelResize = output["AllowCancelResize"] == "true";
    }
    return contents;
};
var deserializeAws_queryResizeNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryResizeProgressMessage = function (output, context) {
    var contents = {
        TargetNodeType: undefined,
        TargetNumberOfNodes: undefined,
        TargetClusterType: undefined,
        Status: undefined,
        ImportTablesCompleted: undefined,
        ImportTablesInProgress: undefined,
        ImportTablesNotStarted: undefined,
        AvgResizeRateInMegaBytesPerSecond: undefined,
        TotalResizeDataInMegaBytes: undefined,
        ProgressInMegaBytes: undefined,
        ElapsedTimeInSeconds: undefined,
        EstimatedTimeToCompletionInSeconds: undefined,
        ResizeType: undefined,
        Message: undefined,
        TargetEncryptionType: undefined,
        DataTransferProgressPercent: undefined,
    };
    if (output["TargetNodeType"] !== undefined) {
        contents.TargetNodeType = output["TargetNodeType"];
    }
    if (output["TargetNumberOfNodes"] !== undefined) {
        contents.TargetNumberOfNodes = parseInt(output["TargetNumberOfNodes"]);
    }
    if (output["TargetClusterType"] !== undefined) {
        contents.TargetClusterType = output["TargetClusterType"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output.ImportTablesCompleted === "") {
        contents.ImportTablesCompleted = [];
    }
    if (output["ImportTablesCompleted"] !== undefined && output["ImportTablesCompleted"]["member"] !== undefined) {
        contents.ImportTablesCompleted = deserializeAws_queryImportTablesCompleted(__getArrayIfSingleItem(output["ImportTablesCompleted"]["member"]), context);
    }
    if (output.ImportTablesInProgress === "") {
        contents.ImportTablesInProgress = [];
    }
    if (output["ImportTablesInProgress"] !== undefined && output["ImportTablesInProgress"]["member"] !== undefined) {
        contents.ImportTablesInProgress = deserializeAws_queryImportTablesInProgress(__getArrayIfSingleItem(output["ImportTablesInProgress"]["member"]), context);
    }
    if (output.ImportTablesNotStarted === "") {
        contents.ImportTablesNotStarted = [];
    }
    if (output["ImportTablesNotStarted"] !== undefined && output["ImportTablesNotStarted"]["member"] !== undefined) {
        contents.ImportTablesNotStarted = deserializeAws_queryImportTablesNotStarted(__getArrayIfSingleItem(output["ImportTablesNotStarted"]["member"]), context);
    }
    if (output["AvgResizeRateInMegaBytesPerSecond"] !== undefined) {
        contents.AvgResizeRateInMegaBytesPerSecond = parseFloat(output["AvgResizeRateInMegaBytesPerSecond"]);
    }
    if (output["TotalResizeDataInMegaBytes"] !== undefined) {
        contents.TotalResizeDataInMegaBytes = parseInt(output["TotalResizeDataInMegaBytes"]);
    }
    if (output["ProgressInMegaBytes"] !== undefined) {
        contents.ProgressInMegaBytes = parseInt(output["ProgressInMegaBytes"]);
    }
    if (output["ElapsedTimeInSeconds"] !== undefined) {
        contents.ElapsedTimeInSeconds = parseInt(output["ElapsedTimeInSeconds"]);
    }
    if (output["EstimatedTimeToCompletionInSeconds"] !== undefined) {
        contents.EstimatedTimeToCompletionInSeconds = parseInt(output["EstimatedTimeToCompletionInSeconds"]);
    }
    if (output["ResizeType"] !== undefined) {
        contents.ResizeType = output["ResizeType"];
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    if (output["TargetEncryptionType"] !== undefined) {
        contents.TargetEncryptionType = output["TargetEncryptionType"];
    }
    if (output["DataTransferProgressPercent"] !== undefined) {
        contents.DataTransferProgressPercent = parseFloat(output["DataTransferProgressPercent"]);
    }
    return contents;
};
var deserializeAws_queryResourceNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryRestorableNodeTypeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryRestoreFromClusterSnapshotResult = function (output, context) {
    var contents = {
        Cluster: undefined,
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
var deserializeAws_queryRestoreStatus = function (output, context) {
    var contents = {
        Status: undefined,
        CurrentRestoreRateInMegaBytesPerSecond: undefined,
        SnapshotSizeInMegaBytes: undefined,
        ProgressInMegaBytes: undefined,
        ElapsedTimeInSeconds: undefined,
        EstimatedTimeToCompletionInSeconds: undefined,
    };
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["CurrentRestoreRateInMegaBytesPerSecond"] !== undefined) {
        contents.CurrentRestoreRateInMegaBytesPerSecond = parseFloat(output["CurrentRestoreRateInMegaBytesPerSecond"]);
    }
    if (output["SnapshotSizeInMegaBytes"] !== undefined) {
        contents.SnapshotSizeInMegaBytes = parseInt(output["SnapshotSizeInMegaBytes"]);
    }
    if (output["ProgressInMegaBytes"] !== undefined) {
        contents.ProgressInMegaBytes = parseInt(output["ProgressInMegaBytes"]);
    }
    if (output["ElapsedTimeInSeconds"] !== undefined) {
        contents.ElapsedTimeInSeconds = parseInt(output["ElapsedTimeInSeconds"]);
    }
    if (output["EstimatedTimeToCompletionInSeconds"] !== undefined) {
        contents.EstimatedTimeToCompletionInSeconds = parseInt(output["EstimatedTimeToCompletionInSeconds"]);
    }
    return contents;
};
var deserializeAws_queryRestoreTableFromClusterSnapshotResult = function (output, context) {
    var contents = {
        TableRestoreStatus: undefined,
    };
    if (output["TableRestoreStatus"] !== undefined) {
        contents.TableRestoreStatus = deserializeAws_queryTableRestoreStatus(output["TableRestoreStatus"], context);
    }
    return contents;
};
var deserializeAws_queryResumeClusterMessage = function (output, context) {
    var contents = {
        ClusterIdentifier: undefined,
    };
    if (output["ClusterIdentifier"] !== undefined) {
        contents.ClusterIdentifier = output["ClusterIdentifier"];
    }
    return contents;
};
var deserializeAws_queryResumeClusterResult = function (output, context) {
    var contents = {
        Cluster: undefined,
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
var deserializeAws_queryRevisionTarget = function (output, context) {
    var contents = {
        DatabaseRevision: undefined,
        Description: undefined,
        DatabaseRevisionReleaseDate: undefined,
    };
    if (output["DatabaseRevision"] !== undefined) {
        contents.DatabaseRevision = output["DatabaseRevision"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["DatabaseRevisionReleaseDate"] !== undefined) {
        contents.DatabaseRevisionReleaseDate = new Date(output["DatabaseRevisionReleaseDate"]);
    }
    return contents;
};
var deserializeAws_queryRevisionTargetsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryRevisionTarget(entry, context);
    });
};
var deserializeAws_queryRevokeClusterSecurityGroupIngressResult = function (output, context) {
    var contents = {
        ClusterSecurityGroup: undefined,
    };
    if (output["ClusterSecurityGroup"] !== undefined) {
        contents.ClusterSecurityGroup = deserializeAws_queryClusterSecurityGroup(output["ClusterSecurityGroup"], context);
    }
    return contents;
};
var deserializeAws_queryRevokeSnapshotAccessResult = function (output, context) {
    var contents = {
        Snapshot: undefined,
    };
    if (output["Snapshot"] !== undefined) {
        contents.Snapshot = deserializeAws_querySnapshot(output["Snapshot"], context);
    }
    return contents;
};
var deserializeAws_queryRotateEncryptionKeyResult = function (output, context) {
    var contents = {
        Cluster: undefined,
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
var deserializeAws_queryScheduledAction = function (output, context) {
    var contents = {
        ScheduledActionName: undefined,
        TargetAction: undefined,
        Schedule: undefined,
        IamRole: undefined,
        ScheduledActionDescription: undefined,
        State: undefined,
        NextInvocations: undefined,
        StartTime: undefined,
        EndTime: undefined,
    };
    if (output["ScheduledActionName"] !== undefined) {
        contents.ScheduledActionName = output["ScheduledActionName"];
    }
    if (output["TargetAction"] !== undefined) {
        contents.TargetAction = deserializeAws_queryScheduledActionType(output["TargetAction"], context);
    }
    if (output["Schedule"] !== undefined) {
        contents.Schedule = output["Schedule"];
    }
    if (output["IamRole"] !== undefined) {
        contents.IamRole = output["IamRole"];
    }
    if (output["ScheduledActionDescription"] !== undefined) {
        contents.ScheduledActionDescription = output["ScheduledActionDescription"];
    }
    if (output["State"] !== undefined) {
        contents.State = output["State"];
    }
    if (output.NextInvocations === "") {
        contents.NextInvocations = [];
    }
    if (output["NextInvocations"] !== undefined && output["NextInvocations"]["ScheduledActionTime"] !== undefined) {
        contents.NextInvocations = deserializeAws_queryScheduledActionTimeList(__getArrayIfSingleItem(output["NextInvocations"]["ScheduledActionTime"]), context);
    }
    if (output["StartTime"] !== undefined) {
        contents.StartTime = new Date(output["StartTime"]);
    }
    if (output["EndTime"] !== undefined) {
        contents.EndTime = new Date(output["EndTime"]);
    }
    return contents;
};
var deserializeAws_queryScheduledActionAlreadyExistsFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryScheduledActionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryScheduledAction(entry, context);
    });
};
var deserializeAws_queryScheduledActionNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryScheduledActionQuotaExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryScheduledActionsMessage = function (output, context) {
    var contents = {
        Marker: undefined,
        ScheduledActions: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.ScheduledActions === "") {
        contents.ScheduledActions = [];
    }
    if (output["ScheduledActions"] !== undefined && output["ScheduledActions"]["ScheduledAction"] !== undefined) {
        contents.ScheduledActions = deserializeAws_queryScheduledActionList(__getArrayIfSingleItem(output["ScheduledActions"]["ScheduledAction"]), context);
    }
    return contents;
};
var deserializeAws_queryScheduledActionTimeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return new Date(entry);
    });
};
var deserializeAws_queryScheduledActionType = function (output, context) {
    var contents = {
        ResizeCluster: undefined,
        PauseCluster: undefined,
        ResumeCluster: undefined,
    };
    if (output["ResizeCluster"] !== undefined) {
        contents.ResizeCluster = deserializeAws_queryResizeClusterMessage(output["ResizeCluster"], context);
    }
    if (output["PauseCluster"] !== undefined) {
        contents.PauseCluster = deserializeAws_queryPauseClusterMessage(output["PauseCluster"], context);
    }
    if (output["ResumeCluster"] !== undefined) {
        contents.ResumeCluster = deserializeAws_queryResumeClusterMessage(output["ResumeCluster"], context);
    }
    return contents;
};
var deserializeAws_queryScheduledActionTypeUnsupportedFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryScheduleDefinitionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryScheduleDefinitionTypeUnsupportedFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryScheduledSnapshotTimeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return new Date(entry);
    });
};
var deserializeAws_querySnapshot = function (output, context) {
    var contents = {
        SnapshotIdentifier: undefined,
        ClusterIdentifier: undefined,
        SnapshotCreateTime: undefined,
        Status: undefined,
        Port: undefined,
        AvailabilityZone: undefined,
        ClusterCreateTime: undefined,
        MasterUsername: undefined,
        ClusterVersion: undefined,
        EngineFullVersion: undefined,
        SnapshotType: undefined,
        NodeType: undefined,
        NumberOfNodes: undefined,
        DBName: undefined,
        VpcId: undefined,
        Encrypted: undefined,
        KmsKeyId: undefined,
        EncryptedWithHSM: undefined,
        AccountsWithRestoreAccess: undefined,
        OwnerAccount: undefined,
        TotalBackupSizeInMegaBytes: undefined,
        ActualIncrementalBackupSizeInMegaBytes: undefined,
        BackupProgressInMegaBytes: undefined,
        CurrentBackupRateInMegaBytesPerSecond: undefined,
        EstimatedSecondsToCompletion: undefined,
        ElapsedTimeInSeconds: undefined,
        SourceRegion: undefined,
        Tags: undefined,
        RestorableNodeTypes: undefined,
        EnhancedVpcRouting: undefined,
        MaintenanceTrackName: undefined,
        ManualSnapshotRetentionPeriod: undefined,
        ManualSnapshotRemainingDays: undefined,
        SnapshotRetentionStartTime: undefined,
    };
    if (output["SnapshotIdentifier"] !== undefined) {
        contents.SnapshotIdentifier = output["SnapshotIdentifier"];
    }
    if (output["ClusterIdentifier"] !== undefined) {
        contents.ClusterIdentifier = output["ClusterIdentifier"];
    }
    if (output["SnapshotCreateTime"] !== undefined) {
        contents.SnapshotCreateTime = new Date(output["SnapshotCreateTime"]);
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["Port"] !== undefined) {
        contents.Port = parseInt(output["Port"]);
    }
    if (output["AvailabilityZone"] !== undefined) {
        contents.AvailabilityZone = output["AvailabilityZone"];
    }
    if (output["ClusterCreateTime"] !== undefined) {
        contents.ClusterCreateTime = new Date(output["ClusterCreateTime"]);
    }
    if (output["MasterUsername"] !== undefined) {
        contents.MasterUsername = output["MasterUsername"];
    }
    if (output["ClusterVersion"] !== undefined) {
        contents.ClusterVersion = output["ClusterVersion"];
    }
    if (output["EngineFullVersion"] !== undefined) {
        contents.EngineFullVersion = output["EngineFullVersion"];
    }
    if (output["SnapshotType"] !== undefined) {
        contents.SnapshotType = output["SnapshotType"];
    }
    if (output["NodeType"] !== undefined) {
        contents.NodeType = output["NodeType"];
    }
    if (output["NumberOfNodes"] !== undefined) {
        contents.NumberOfNodes = parseInt(output["NumberOfNodes"]);
    }
    if (output["DBName"] !== undefined) {
        contents.DBName = output["DBName"];
    }
    if (output["VpcId"] !== undefined) {
        contents.VpcId = output["VpcId"];
    }
    if (output["Encrypted"] !== undefined) {
        contents.Encrypted = output["Encrypted"] == "true";
    }
    if (output["KmsKeyId"] !== undefined) {
        contents.KmsKeyId = output["KmsKeyId"];
    }
    if (output["EncryptedWithHSM"] !== undefined) {
        contents.EncryptedWithHSM = output["EncryptedWithHSM"] == "true";
    }
    if (output.AccountsWithRestoreAccess === "") {
        contents.AccountsWithRestoreAccess = [];
    }
    if (output["AccountsWithRestoreAccess"] !== undefined &&
        output["AccountsWithRestoreAccess"]["AccountWithRestoreAccess"] !== undefined) {
        contents.AccountsWithRestoreAccess = deserializeAws_queryAccountsWithRestoreAccessList(__getArrayIfSingleItem(output["AccountsWithRestoreAccess"]["AccountWithRestoreAccess"]), context);
    }
    if (output["OwnerAccount"] !== undefined) {
        contents.OwnerAccount = output["OwnerAccount"];
    }
    if (output["TotalBackupSizeInMegaBytes"] !== undefined) {
        contents.TotalBackupSizeInMegaBytes = parseFloat(output["TotalBackupSizeInMegaBytes"]);
    }
    if (output["ActualIncrementalBackupSizeInMegaBytes"] !== undefined) {
        contents.ActualIncrementalBackupSizeInMegaBytes = parseFloat(output["ActualIncrementalBackupSizeInMegaBytes"]);
    }
    if (output["BackupProgressInMegaBytes"] !== undefined) {
        contents.BackupProgressInMegaBytes = parseFloat(output["BackupProgressInMegaBytes"]);
    }
    if (output["CurrentBackupRateInMegaBytesPerSecond"] !== undefined) {
        contents.CurrentBackupRateInMegaBytesPerSecond = parseFloat(output["CurrentBackupRateInMegaBytesPerSecond"]);
    }
    if (output["EstimatedSecondsToCompletion"] !== undefined) {
        contents.EstimatedSecondsToCompletion = parseInt(output["EstimatedSecondsToCompletion"]);
    }
    if (output["ElapsedTimeInSeconds"] !== undefined) {
        contents.ElapsedTimeInSeconds = parseInt(output["ElapsedTimeInSeconds"]);
    }
    if (output["SourceRegion"] !== undefined) {
        contents.SourceRegion = output["SourceRegion"];
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
        contents.Tags = deserializeAws_queryTagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
    }
    if (output.RestorableNodeTypes === "") {
        contents.RestorableNodeTypes = [];
    }
    if (output["RestorableNodeTypes"] !== undefined && output["RestorableNodeTypes"]["NodeType"] !== undefined) {
        contents.RestorableNodeTypes = deserializeAws_queryRestorableNodeTypeList(__getArrayIfSingleItem(output["RestorableNodeTypes"]["NodeType"]), context);
    }
    if (output["EnhancedVpcRouting"] !== undefined) {
        contents.EnhancedVpcRouting = output["EnhancedVpcRouting"] == "true";
    }
    if (output["MaintenanceTrackName"] !== undefined) {
        contents.MaintenanceTrackName = output["MaintenanceTrackName"];
    }
    if (output["ManualSnapshotRetentionPeriod"] !== undefined) {
        contents.ManualSnapshotRetentionPeriod = parseInt(output["ManualSnapshotRetentionPeriod"]);
    }
    if (output["ManualSnapshotRemainingDays"] !== undefined) {
        contents.ManualSnapshotRemainingDays = parseInt(output["ManualSnapshotRemainingDays"]);
    }
    if (output["SnapshotRetentionStartTime"] !== undefined) {
        contents.SnapshotRetentionStartTime = new Date(output["SnapshotRetentionStartTime"]);
    }
    return contents;
};
var deserializeAws_querySnapshotCopyAlreadyDisabledFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_querySnapshotCopyAlreadyEnabledFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_querySnapshotCopyDisabledFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_querySnapshotCopyGrant = function (output, context) {
    var contents = {
        SnapshotCopyGrantName: undefined,
        KmsKeyId: undefined,
        Tags: undefined,
    };
    if (output["SnapshotCopyGrantName"] !== undefined) {
        contents.SnapshotCopyGrantName = output["SnapshotCopyGrantName"];
    }
    if (output["KmsKeyId"] !== undefined) {
        contents.KmsKeyId = output["KmsKeyId"];
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
        contents.Tags = deserializeAws_queryTagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
    }
    return contents;
};
var deserializeAws_querySnapshotCopyGrantAlreadyExistsFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_querySnapshotCopyGrantList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_querySnapshotCopyGrant(entry, context);
    });
};
var deserializeAws_querySnapshotCopyGrantMessage = function (output, context) {
    var contents = {
        Marker: undefined,
        SnapshotCopyGrants: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.SnapshotCopyGrants === "") {
        contents.SnapshotCopyGrants = [];
    }
    if (output["SnapshotCopyGrants"] !== undefined && output["SnapshotCopyGrants"]["SnapshotCopyGrant"] !== undefined) {
        contents.SnapshotCopyGrants = deserializeAws_querySnapshotCopyGrantList(__getArrayIfSingleItem(output["SnapshotCopyGrants"]["SnapshotCopyGrant"]), context);
    }
    return contents;
};
var deserializeAws_querySnapshotCopyGrantNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_querySnapshotCopyGrantQuotaExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_querySnapshotErrorMessage = function (output, context) {
    var contents = {
        SnapshotIdentifier: undefined,
        SnapshotClusterIdentifier: undefined,
        FailureCode: undefined,
        FailureReason: undefined,
    };
    if (output["SnapshotIdentifier"] !== undefined) {
        contents.SnapshotIdentifier = output["SnapshotIdentifier"];
    }
    if (output["SnapshotClusterIdentifier"] !== undefined) {
        contents.SnapshotClusterIdentifier = output["SnapshotClusterIdentifier"];
    }
    if (output["FailureCode"] !== undefined) {
        contents.FailureCode = output["FailureCode"];
    }
    if (output["FailureReason"] !== undefined) {
        contents.FailureReason = output["FailureReason"];
    }
    return contents;
};
var deserializeAws_querySnapshotIdentifierList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_querySnapshotList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_querySnapshot(entry, context);
    });
};
var deserializeAws_querySnapshotMessage = function (output, context) {
    var contents = {
        Marker: undefined,
        Snapshots: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.Snapshots === "") {
        contents.Snapshots = [];
    }
    if (output["Snapshots"] !== undefined && output["Snapshots"]["Snapshot"] !== undefined) {
        contents.Snapshots = deserializeAws_querySnapshotList(__getArrayIfSingleItem(output["Snapshots"]["Snapshot"]), context);
    }
    return contents;
};
var deserializeAws_querySnapshotSchedule = function (output, context) {
    var contents = {
        ScheduleDefinitions: undefined,
        ScheduleIdentifier: undefined,
        ScheduleDescription: undefined,
        Tags: undefined,
        NextInvocations: undefined,
        AssociatedClusterCount: undefined,
        AssociatedClusters: undefined,
    };
    if (output.ScheduleDefinitions === "") {
        contents.ScheduleDefinitions = [];
    }
    if (output["ScheduleDefinitions"] !== undefined &&
        output["ScheduleDefinitions"]["ScheduleDefinition"] !== undefined) {
        contents.ScheduleDefinitions = deserializeAws_queryScheduleDefinitionList(__getArrayIfSingleItem(output["ScheduleDefinitions"]["ScheduleDefinition"]), context);
    }
    if (output["ScheduleIdentifier"] !== undefined) {
        contents.ScheduleIdentifier = output["ScheduleIdentifier"];
    }
    if (output["ScheduleDescription"] !== undefined) {
        contents.ScheduleDescription = output["ScheduleDescription"];
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
        contents.Tags = deserializeAws_queryTagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
    }
    if (output.NextInvocations === "") {
        contents.NextInvocations = [];
    }
    if (output["NextInvocations"] !== undefined && output["NextInvocations"]["SnapshotTime"] !== undefined) {
        contents.NextInvocations = deserializeAws_queryScheduledSnapshotTimeList(__getArrayIfSingleItem(output["NextInvocations"]["SnapshotTime"]), context);
    }
    if (output["AssociatedClusterCount"] !== undefined) {
        contents.AssociatedClusterCount = parseInt(output["AssociatedClusterCount"]);
    }
    if (output.AssociatedClusters === "") {
        contents.AssociatedClusters = [];
    }
    if (output["AssociatedClusters"] !== undefined &&
        output["AssociatedClusters"]["ClusterAssociatedToSchedule"] !== undefined) {
        contents.AssociatedClusters = deserializeAws_queryAssociatedClusterList(__getArrayIfSingleItem(output["AssociatedClusters"]["ClusterAssociatedToSchedule"]), context);
    }
    return contents;
};
var deserializeAws_querySnapshotScheduleAlreadyExistsFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_querySnapshotScheduleList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_querySnapshotSchedule(entry, context);
    });
};
var deserializeAws_querySnapshotScheduleNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_querySnapshotScheduleQuotaExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_querySnapshotScheduleUpdateInProgressFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_querySNSInvalidTopicFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_querySNSNoAuthorizationFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_querySNSTopicArnNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_querySourceIdsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_querySourceNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_querySubnet = function (output, context) {
    var contents = {
        SubnetIdentifier: undefined,
        SubnetAvailabilityZone: undefined,
        SubnetStatus: undefined,
    };
    if (output["SubnetIdentifier"] !== undefined) {
        contents.SubnetIdentifier = output["SubnetIdentifier"];
    }
    if (output["SubnetAvailabilityZone"] !== undefined) {
        contents.SubnetAvailabilityZone = deserializeAws_queryAvailabilityZone(output["SubnetAvailabilityZone"], context);
    }
    if (output["SubnetStatus"] !== undefined) {
        contents.SubnetStatus = output["SubnetStatus"];
    }
    return contents;
};
var deserializeAws_querySubnetAlreadyInUse = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_querySubnetList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_querySubnet(entry, context);
    });
};
var deserializeAws_querySubscriptionAlreadyExistFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_querySubscriptionCategoryNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_querySubscriptionEventIdNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_querySubscriptionNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_querySubscriptionSeverityNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_querySupportedOperation = function (output, context) {
    var contents = {
        OperationName: undefined,
    };
    if (output["OperationName"] !== undefined) {
        contents.OperationName = output["OperationName"];
    }
    return contents;
};
var deserializeAws_querySupportedOperationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_querySupportedOperation(entry, context);
    });
};
var deserializeAws_querySupportedPlatform = function (output, context) {
    var contents = {
        Name: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    return contents;
};
var deserializeAws_querySupportedPlatformsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_querySupportedPlatform(entry, context);
    });
};
var deserializeAws_queryTableLimitExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryTableRestoreNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryTableRestoreStatus = function (output, context) {
    var contents = {
        TableRestoreRequestId: undefined,
        Status: undefined,
        Message: undefined,
        RequestTime: undefined,
        ProgressInMegaBytes: undefined,
        TotalDataInMegaBytes: undefined,
        ClusterIdentifier: undefined,
        SnapshotIdentifier: undefined,
        SourceDatabaseName: undefined,
        SourceSchemaName: undefined,
        SourceTableName: undefined,
        TargetDatabaseName: undefined,
        TargetSchemaName: undefined,
        NewTableName: undefined,
    };
    if (output["TableRestoreRequestId"] !== undefined) {
        contents.TableRestoreRequestId = output["TableRestoreRequestId"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    if (output["RequestTime"] !== undefined) {
        contents.RequestTime = new Date(output["RequestTime"]);
    }
    if (output["ProgressInMegaBytes"] !== undefined) {
        contents.ProgressInMegaBytes = parseInt(output["ProgressInMegaBytes"]);
    }
    if (output["TotalDataInMegaBytes"] !== undefined) {
        contents.TotalDataInMegaBytes = parseInt(output["TotalDataInMegaBytes"]);
    }
    if (output["ClusterIdentifier"] !== undefined) {
        contents.ClusterIdentifier = output["ClusterIdentifier"];
    }
    if (output["SnapshotIdentifier"] !== undefined) {
        contents.SnapshotIdentifier = output["SnapshotIdentifier"];
    }
    if (output["SourceDatabaseName"] !== undefined) {
        contents.SourceDatabaseName = output["SourceDatabaseName"];
    }
    if (output["SourceSchemaName"] !== undefined) {
        contents.SourceSchemaName = output["SourceSchemaName"];
    }
    if (output["SourceTableName"] !== undefined) {
        contents.SourceTableName = output["SourceTableName"];
    }
    if (output["TargetDatabaseName"] !== undefined) {
        contents.TargetDatabaseName = output["TargetDatabaseName"];
    }
    if (output["TargetSchemaName"] !== undefined) {
        contents.TargetSchemaName = output["TargetSchemaName"];
    }
    if (output["NewTableName"] !== undefined) {
        contents.NewTableName = output["NewTableName"];
    }
    return contents;
};
var deserializeAws_queryTableRestoreStatusList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryTableRestoreStatus(entry, context);
    });
};
var deserializeAws_queryTableRestoreStatusMessage = function (output, context) {
    var contents = {
        TableRestoreStatusDetails: undefined,
        Marker: undefined,
    };
    if (output.TableRestoreStatusDetails === "") {
        contents.TableRestoreStatusDetails = [];
    }
    if (output["TableRestoreStatusDetails"] !== undefined &&
        output["TableRestoreStatusDetails"]["TableRestoreStatus"] !== undefined) {
        contents.TableRestoreStatusDetails = deserializeAws_queryTableRestoreStatusList(__getArrayIfSingleItem(output["TableRestoreStatusDetails"]["TableRestoreStatus"]), context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryTag = function (output, context) {
    var contents = {
        Key: undefined,
        Value: undefined,
    };
    if (output["Key"] !== undefined) {
        contents.Key = output["Key"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = output["Value"];
    }
    return contents;
};
var deserializeAws_queryTaggedResource = function (output, context) {
    var contents = {
        Tag: undefined,
        ResourceName: undefined,
        ResourceType: undefined,
    };
    if (output["Tag"] !== undefined) {
        contents.Tag = deserializeAws_queryTag(output["Tag"], context);
    }
    if (output["ResourceName"] !== undefined) {
        contents.ResourceName = output["ResourceName"];
    }
    if (output["ResourceType"] !== undefined) {
        contents.ResourceType = output["ResourceType"];
    }
    return contents;
};
var deserializeAws_queryTaggedResourceList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryTaggedResource(entry, context);
    });
};
var deserializeAws_queryTaggedResourceListMessage = function (output, context) {
    var contents = {
        TaggedResources: undefined,
        Marker: undefined,
    };
    if (output.TaggedResources === "") {
        contents.TaggedResources = [];
    }
    if (output["TaggedResources"] !== undefined && output["TaggedResources"]["TaggedResource"] !== undefined) {
        contents.TaggedResources = deserializeAws_queryTaggedResourceList(__getArrayIfSingleItem(output["TaggedResources"]["TaggedResource"]), context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryTagLimitExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryTagList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryTag(entry, context);
    });
};
var deserializeAws_queryTrackList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryMaintenanceTrack(entry, context);
    });
};
var deserializeAws_queryTrackListMessage = function (output, context) {
    var contents = {
        MaintenanceTracks: undefined,
        Marker: undefined,
    };
    if (output.MaintenanceTracks === "") {
        contents.MaintenanceTracks = [];
    }
    if (output["MaintenanceTracks"] !== undefined && output["MaintenanceTracks"]["MaintenanceTrack"] !== undefined) {
        contents.MaintenanceTracks = deserializeAws_queryTrackList(__getArrayIfSingleItem(output["MaintenanceTracks"]["MaintenanceTrack"]), context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryUnauthorizedOperation = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryUnauthorizedPartnerIntegrationFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryUnknownSnapshotCopyRegionFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryUnsupportedOperationFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryUnsupportedOptionFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryUpdateTarget = function (output, context) {
    var contents = {
        MaintenanceTrackName: undefined,
        DatabaseVersion: undefined,
        SupportedOperations: undefined,
    };
    if (output["MaintenanceTrackName"] !== undefined) {
        contents.MaintenanceTrackName = output["MaintenanceTrackName"];
    }
    if (output["DatabaseVersion"] !== undefined) {
        contents.DatabaseVersion = output["DatabaseVersion"];
    }
    if (output.SupportedOperations === "") {
        contents.SupportedOperations = [];
    }
    if (output["SupportedOperations"] !== undefined &&
        output["SupportedOperations"]["SupportedOperation"] !== undefined) {
        contents.SupportedOperations = deserializeAws_querySupportedOperationList(__getArrayIfSingleItem(output["SupportedOperations"]["SupportedOperation"]), context);
    }
    return contents;
};
var deserializeAws_queryUsageLimit = function (output, context) {
    var contents = {
        UsageLimitId: undefined,
        ClusterIdentifier: undefined,
        FeatureType: undefined,
        LimitType: undefined,
        Amount: undefined,
        Period: undefined,
        BreachAction: undefined,
        Tags: undefined,
    };
    if (output["UsageLimitId"] !== undefined) {
        contents.UsageLimitId = output["UsageLimitId"];
    }
    if (output["ClusterIdentifier"] !== undefined) {
        contents.ClusterIdentifier = output["ClusterIdentifier"];
    }
    if (output["FeatureType"] !== undefined) {
        contents.FeatureType = output["FeatureType"];
    }
    if (output["LimitType"] !== undefined) {
        contents.LimitType = output["LimitType"];
    }
    if (output["Amount"] !== undefined) {
        contents.Amount = parseInt(output["Amount"]);
    }
    if (output["Period"] !== undefined) {
        contents.Period = output["Period"];
    }
    if (output["BreachAction"] !== undefined) {
        contents.BreachAction = output["BreachAction"];
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
        contents.Tags = deserializeAws_queryTagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
    }
    return contents;
};
var deserializeAws_queryUsageLimitAlreadyExistsFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryUsageLimitList = function (output, context) {
    var contents = {
        UsageLimits: undefined,
        Marker: undefined,
    };
    if (output.UsageLimits === "") {
        contents.UsageLimits = [];
    }
    if (output["UsageLimits"] !== undefined && output["UsageLimits"]["member"] !== undefined) {
        contents.UsageLimits = deserializeAws_queryUsageLimits(__getArrayIfSingleItem(output["UsageLimits"]["member"]), context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryUsageLimitNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryUsageLimits = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryUsageLimit(entry, context);
    });
};
var deserializeAws_queryVpcEndpoint = function (output, context) {
    var contents = {
        VpcEndpointId: undefined,
        VpcId: undefined,
        NetworkInterfaces: undefined,
    };
    if (output["VpcEndpointId"] !== undefined) {
        contents.VpcEndpointId = output["VpcEndpointId"];
    }
    if (output["VpcId"] !== undefined) {
        contents.VpcId = output["VpcId"];
    }
    if (output.NetworkInterfaces === "") {
        contents.NetworkInterfaces = [];
    }
    if (output["NetworkInterfaces"] !== undefined && output["NetworkInterfaces"]["NetworkInterface"] !== undefined) {
        contents.NetworkInterfaces = deserializeAws_queryNetworkInterfaceList(__getArrayIfSingleItem(output["NetworkInterfaces"]["NetworkInterface"]), context);
    }
    return contents;
};
var deserializeAws_queryVpcEndpointsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryVpcEndpoint(entry, context);
    });
};
var deserializeAws_queryVpcIdentifierList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryVpcSecurityGroupMembership = function (output, context) {
    var contents = {
        VpcSecurityGroupId: undefined,
        Status: undefined,
    };
    if (output["VpcSecurityGroupId"] !== undefined) {
        contents.VpcSecurityGroupId = output["VpcSecurityGroupId"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
var deserializeAws_queryVpcSecurityGroupMembershipList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryVpcSecurityGroupMembership(entry, context);
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
            var parsedObj = xmlParse(encoded, {
                attributeNamePrefix: "",
                ignoreAttributes: false,
                parseNodeValue: false,
                trimValues: false,
                tagValueProcessor: function (val, tagName) { return (val.trim() === "" ? "" : decodeHTML(val)); },
            });
            var textNodeName = "#text";
            var key = Object.keys(parsedObj)[0];
            var parsedObjToReturn = parsedObj[key];
            if (parsedObjToReturn[textNodeName]) {
                parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
                delete parsedObjToReturn[textNodeName];
            }
            return __getValueFromTextNode(parsedObjToReturn);
        }
        return {};
    });
};
var buildFormUrlencodedString = function (formEntries) {
    return Object.entries(formEntries)
        .map(function (_a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        return __extendedEncodeURIComponent(key) + "=" + __extendedEncodeURIComponent(value);
    })
        .join("&");
};
var loadQueryErrorCode = function (output, data) {
    if (data.Error.Code !== undefined) {
        return data.Error.Code;
    }
    if (output.statusCode == 404) {
        return "NotFound";
    }
    return "";
};
//# sourceMappingURL=Aws_query.js.map