import { __assign, __awaiter, __generator, __read, __values } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, getArrayIfSingleItem as __getArrayIfSingleItem, getValueFromTextNode as __getValueFromTextNode, } from "@aws-sdk/smithy-client";
import { decodeHTML } from "entities";
import { parse as xmlParse } from "fast-xml-parser";
export var serializeAws_queryAddRoleToDBClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryAddRoleToDBClusterMessage(input, context)), { Action: "AddRoleToDBCluster", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryAddSourceIdentifierToSubscriptionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryAddSourceIdentifierToSubscriptionMessage(input, context)), { Action: "AddSourceIdentifierToSubscription", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryAddTagsToResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryAddTagsToResourceMessage(input, context)), { Action: "AddTagsToResource", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryApplyPendingMaintenanceActionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryApplyPendingMaintenanceActionMessage(input, context)), { Action: "ApplyPendingMaintenanceAction", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCopyDBClusterParameterGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCopyDBClusterParameterGroupMessage(input, context)), { Action: "CopyDBClusterParameterGroup", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCopyDBClusterSnapshotCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCopyDBClusterSnapshotMessage(input, context)), { Action: "CopyDBClusterSnapshot", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCopyDBParameterGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCopyDBParameterGroupMessage(input, context)), { Action: "CopyDBParameterGroup", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateDBClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateDBClusterMessage(input, context)), { Action: "CreateDBCluster", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateDBClusterEndpointCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateDBClusterEndpointMessage(input, context)), { Action: "CreateDBClusterEndpoint", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateDBClusterParameterGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateDBClusterParameterGroupMessage(input, context)), { Action: "CreateDBClusterParameterGroup", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateDBClusterSnapshotCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateDBClusterSnapshotMessage(input, context)), { Action: "CreateDBClusterSnapshot", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateDBInstanceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateDBInstanceMessage(input, context)), { Action: "CreateDBInstance", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateDBParameterGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateDBParameterGroupMessage(input, context)), { Action: "CreateDBParameterGroup", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateDBSubnetGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateDBSubnetGroupMessage(input, context)), { Action: "CreateDBSubnetGroup", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateEventSubscriptionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateEventSubscriptionMessage(input, context)), { Action: "CreateEventSubscription", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteDBClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteDBClusterMessage(input, context)), { Action: "DeleteDBCluster", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteDBClusterEndpointCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteDBClusterEndpointMessage(input, context)), { Action: "DeleteDBClusterEndpoint", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteDBClusterParameterGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteDBClusterParameterGroupMessage(input, context)), { Action: "DeleteDBClusterParameterGroup", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteDBClusterSnapshotCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteDBClusterSnapshotMessage(input, context)), { Action: "DeleteDBClusterSnapshot", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteDBInstanceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteDBInstanceMessage(input, context)), { Action: "DeleteDBInstance", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteDBParameterGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteDBParameterGroupMessage(input, context)), { Action: "DeleteDBParameterGroup", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteDBSubnetGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteDBSubnetGroupMessage(input, context)), { Action: "DeleteDBSubnetGroup", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteEventSubscriptionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteEventSubscriptionMessage(input, context)), { Action: "DeleteEventSubscription", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeDBClusterEndpointsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeDBClusterEndpointsMessage(input, context)), { Action: "DescribeDBClusterEndpoints", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeDBClusterParameterGroupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeDBClusterParameterGroupsMessage(input, context)), { Action: "DescribeDBClusterParameterGroups", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeDBClusterParametersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeDBClusterParametersMessage(input, context)), { Action: "DescribeDBClusterParameters", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeDBClustersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeDBClustersMessage(input, context)), { Action: "DescribeDBClusters", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeDBClusterSnapshotAttributesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeDBClusterSnapshotAttributesMessage(input, context)), { Action: "DescribeDBClusterSnapshotAttributes", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeDBClusterSnapshotsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeDBClusterSnapshotsMessage(input, context)), { Action: "DescribeDBClusterSnapshots", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeDBEngineVersionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeDBEngineVersionsMessage(input, context)), { Action: "DescribeDBEngineVersions", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeDBInstancesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeDBInstancesMessage(input, context)), { Action: "DescribeDBInstances", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeDBParameterGroupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeDBParameterGroupsMessage(input, context)), { Action: "DescribeDBParameterGroups", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeDBParametersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeDBParametersMessage(input, context)), { Action: "DescribeDBParameters", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeDBSubnetGroupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeDBSubnetGroupsMessage(input, context)), { Action: "DescribeDBSubnetGroups", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeEngineDefaultClusterParametersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeEngineDefaultClusterParametersMessage(input, context)), { Action: "DescribeEngineDefaultClusterParameters", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeEngineDefaultParametersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeEngineDefaultParametersMessage(input, context)), { Action: "DescribeEngineDefaultParameters", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeEventCategoriesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeEventCategoriesMessage(input, context)), { Action: "DescribeEventCategories", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeEventsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeEventsMessage(input, context)), { Action: "DescribeEvents", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeEventSubscriptionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeEventSubscriptionsMessage(input, context)), { Action: "DescribeEventSubscriptions", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeOrderableDBInstanceOptionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeOrderableDBInstanceOptionsMessage(input, context)), { Action: "DescribeOrderableDBInstanceOptions", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribePendingMaintenanceActionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribePendingMaintenanceActionsMessage(input, context)), { Action: "DescribePendingMaintenanceActions", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeValidDBInstanceModificationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeValidDBInstanceModificationsMessage(input, context)), { Action: "DescribeValidDBInstanceModifications", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryFailoverDBClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryFailoverDBClusterMessage(input, context)), { Action: "FailoverDBCluster", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListTagsForResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListTagsForResourceMessage(input, context)), { Action: "ListTagsForResource", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryModifyDBClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryModifyDBClusterMessage(input, context)), { Action: "ModifyDBCluster", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryModifyDBClusterEndpointCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryModifyDBClusterEndpointMessage(input, context)), { Action: "ModifyDBClusterEndpoint", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryModifyDBClusterParameterGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryModifyDBClusterParameterGroupMessage(input, context)), { Action: "ModifyDBClusterParameterGroup", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryModifyDBClusterSnapshotAttributeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryModifyDBClusterSnapshotAttributeMessage(input, context)), { Action: "ModifyDBClusterSnapshotAttribute", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryModifyDBInstanceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryModifyDBInstanceMessage(input, context)), { Action: "ModifyDBInstance", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryModifyDBParameterGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryModifyDBParameterGroupMessage(input, context)), { Action: "ModifyDBParameterGroup", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryModifyDBSubnetGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryModifyDBSubnetGroupMessage(input, context)), { Action: "ModifyDBSubnetGroup", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryModifyEventSubscriptionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryModifyEventSubscriptionMessage(input, context)), { Action: "ModifyEventSubscription", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryPromoteReadReplicaDBClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryPromoteReadReplicaDBClusterMessage(input, context)), { Action: "PromoteReadReplicaDBCluster", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryRebootDBInstanceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryRebootDBInstanceMessage(input, context)), { Action: "RebootDBInstance", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryRemoveRoleFromDBClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryRemoveRoleFromDBClusterMessage(input, context)), { Action: "RemoveRoleFromDBCluster", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryRemoveSourceIdentifierFromSubscriptionMessage(input, context)), { Action: "RemoveSourceIdentifierFromSubscription", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryRemoveTagsFromResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryRemoveTagsFromResourceMessage(input, context)), { Action: "RemoveTagsFromResource", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryResetDBClusterParameterGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryResetDBClusterParameterGroupMessage(input, context)), { Action: "ResetDBClusterParameterGroup", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryResetDBParameterGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryResetDBParameterGroupMessage(input, context)), { Action: "ResetDBParameterGroup", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryRestoreDBClusterFromSnapshotCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryRestoreDBClusterFromSnapshotMessage(input, context)), { Action: "RestoreDBClusterFromSnapshot", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryRestoreDBClusterToPointInTimeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryRestoreDBClusterToPointInTimeMessage(input, context)), { Action: "RestoreDBClusterToPointInTime", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryStartDBClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryStartDBClusterMessage(input, context)), { Action: "StartDBCluster", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryStopDBClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryStopDBClusterMessage(input, context)), { Action: "StopDBCluster", Version: "2014-10-31" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_queryAddRoleToDBClusterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryAddRoleToDBClusterCommandError(output, context)];
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
var deserializeAws_queryAddRoleToDBClusterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBClusterNotFoundFault": return [3 /*break*/, 2];
                    case "DBClusterRoleAlreadyExistsFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#DBClusterRoleAlreadyExistsFault": return [3 /*break*/, 4];
                    case "DBClusterRoleQuotaExceededFault": return [3 /*break*/, 6];
                    case "com.amazonaws.neptune#DBClusterRoleQuotaExceededFault": return [3 /*break*/, 6];
                    case "InvalidDBClusterStateFault": return [3 /*break*/, 8];
                    case "com.amazonaws.neptune#InvalidDBClusterStateFault": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterRoleAlreadyExistsFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterRoleQuotaExceededFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryAddSourceIdentifierToSubscriptionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryAddSourceIdentifierToSubscriptionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryAddSourceIdentifierToSubscriptionResult(data.AddSourceIdentifierToSubscriptionResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryAddSourceIdentifierToSubscriptionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "SourceNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#SourceNotFoundFault": return [3 /*break*/, 2];
                    case "SubscriptionNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#SubscriptionNotFoundFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_querySourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryAddTagsToResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryAddTagsToResourceCommandError(output, context)];
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
var deserializeAws_queryAddTagsToResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBClusterNotFoundFault": return [3 /*break*/, 2];
                    case "DBInstanceNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#DBInstanceNotFoundFault": return [3 /*break*/, 4];
                    case "DBSnapshotNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.neptune#DBSnapshotNotFoundFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryDBSnapshotNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryApplyPendingMaintenanceActionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryApplyPendingMaintenanceActionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryApplyPendingMaintenanceActionResult(data.ApplyPendingMaintenanceActionResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryApplyPendingMaintenanceActionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ResourceNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#ResourceNotFoundFault": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryCopyDBClusterParameterGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCopyDBClusterParameterGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCopyDBClusterParameterGroupResult(data.CopyDBClusterParameterGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCopyDBClusterParameterGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBParameterGroupAlreadyExistsFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBParameterGroupAlreadyExistsFault": return [3 /*break*/, 2];
                    case "DBParameterGroupNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#DBParameterGroupNotFoundFault": return [3 /*break*/, 4];
                    case "DBParameterGroupQuotaExceededFault": return [3 /*break*/, 6];
                    case "com.amazonaws.neptune#DBParameterGroupQuotaExceededFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBParameterGroupAlreadyExistsFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryDBParameterGroupQuotaExceededFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryCopyDBClusterSnapshotCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCopyDBClusterSnapshotCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCopyDBClusterSnapshotResult(data.CopyDBClusterSnapshotResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCopyDBClusterSnapshotCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBClusterSnapshotAlreadyExistsFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBClusterSnapshotAlreadyExistsFault": return [3 /*break*/, 2];
                    case "DBClusterSnapshotNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#DBClusterSnapshotNotFoundFault": return [3 /*break*/, 4];
                    case "InvalidDBClusterSnapshotStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.neptune#InvalidDBClusterSnapshotStateFault": return [3 /*break*/, 6];
                    case "InvalidDBClusterStateFault": return [3 /*break*/, 8];
                    case "com.amazonaws.neptune#InvalidDBClusterStateFault": return [3 /*break*/, 8];
                    case "KMSKeyNotAccessibleFault": return [3 /*break*/, 10];
                    case "com.amazonaws.neptune#KMSKeyNotAccessibleFault": return [3 /*break*/, 10];
                    case "SnapshotQuotaExceededFault": return [3 /*break*/, 12];
                    case "com.amazonaws.neptune#SnapshotQuotaExceededFault": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterSnapshotAlreadyExistsFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_querySnapshotQuotaExceededFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryCopyDBParameterGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCopyDBParameterGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCopyDBParameterGroupResult(data.CopyDBParameterGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCopyDBParameterGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBParameterGroupAlreadyExistsFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBParameterGroupAlreadyExistsFault": return [3 /*break*/, 2];
                    case "DBParameterGroupNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#DBParameterGroupNotFoundFault": return [3 /*break*/, 4];
                    case "DBParameterGroupQuotaExceededFault": return [3 /*break*/, 6];
                    case "com.amazonaws.neptune#DBParameterGroupQuotaExceededFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBParameterGroupAlreadyExistsFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryDBParameterGroupQuotaExceededFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryCreateDBClusterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateDBClusterCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateDBClusterResult(data.CreateDBClusterResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateDBClusterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, parsedBody, message;
    var _t;
    return __generator(this, function (_u) {
        switch (_u.label) {
            case 0:
                _a = [__assign({}, output)];
                _t = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_t.body = _u.sent(), _t)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DBClusterAlreadyExistsFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBClusterAlreadyExistsFault": return [3 /*break*/, 2];
                    case "DBClusterNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#DBClusterNotFoundFault": return [3 /*break*/, 4];
                    case "DBClusterParameterGroupNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.neptune#DBClusterParameterGroupNotFoundFault": return [3 /*break*/, 6];
                    case "DBClusterQuotaExceededFault": return [3 /*break*/, 8];
                    case "com.amazonaws.neptune#DBClusterQuotaExceededFault": return [3 /*break*/, 8];
                    case "DBInstanceNotFoundFault": return [3 /*break*/, 10];
                    case "com.amazonaws.neptune#DBInstanceNotFoundFault": return [3 /*break*/, 10];
                    case "DBSubnetGroupDoesNotCoverEnoughAZs": return [3 /*break*/, 12];
                    case "com.amazonaws.neptune#DBSubnetGroupDoesNotCoverEnoughAZs": return [3 /*break*/, 12];
                    case "DBSubnetGroupNotFoundFault": return [3 /*break*/, 14];
                    case "com.amazonaws.neptune#DBSubnetGroupNotFoundFault": return [3 /*break*/, 14];
                    case "InsufficientStorageClusterCapacityFault": return [3 /*break*/, 16];
                    case "com.amazonaws.neptune#InsufficientStorageClusterCapacityFault": return [3 /*break*/, 16];
                    case "InvalidDBClusterStateFault": return [3 /*break*/, 18];
                    case "com.amazonaws.neptune#InvalidDBClusterStateFault": return [3 /*break*/, 18];
                    case "InvalidDBInstanceStateFault": return [3 /*break*/, 20];
                    case "com.amazonaws.neptune#InvalidDBInstanceStateFault": return [3 /*break*/, 20];
                    case "InvalidDBSubnetGroupStateFault": return [3 /*break*/, 22];
                    case "com.amazonaws.neptune#InvalidDBSubnetGroupStateFault": return [3 /*break*/, 22];
                    case "InvalidSubnet": return [3 /*break*/, 24];
                    case "com.amazonaws.neptune#InvalidSubnet": return [3 /*break*/, 24];
                    case "InvalidVPCNetworkStateFault": return [3 /*break*/, 26];
                    case "com.amazonaws.neptune#InvalidVPCNetworkStateFault": return [3 /*break*/, 26];
                    case "KMSKeyNotAccessibleFault": return [3 /*break*/, 28];
                    case "com.amazonaws.neptune#KMSKeyNotAccessibleFault": return [3 /*break*/, 28];
                    case "StorageQuotaExceededFault": return [3 /*break*/, 30];
                    case "com.amazonaws.neptune#StorageQuotaExceededFault": return [3 /*break*/, 30];
                }
                return [3 /*break*/, 32];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterAlreadyExistsFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterParameterGroupNotFoundFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterQuotaExceededFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientStorageClusterCapacityFaultResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBSubnetGroupStateFaultResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidSubnetResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 26:
                _q = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)];
            case 27:
                response = __assign.apply(void 0, [__assign.apply(void 0, _q.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 28:
                _r = [{}];
                return [4 /*yield*/, deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context)];
            case 29:
                response = __assign.apply(void 0, [__assign.apply(void 0, _r.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 30:
                _s = [{}];
                return [4 /*yield*/, deserializeAws_queryStorageQuotaExceededFaultResponse(parsedOutput, context)];
            case 31:
                response = __assign.apply(void 0, [__assign.apply(void 0, _s.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 32:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _u.label = 33;
            case 33:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateDBClusterEndpointCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateDBClusterEndpointCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateDBClusterEndpointOutput(data.CreateDBClusterEndpointResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateDBClusterEndpointCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBClusterEndpointAlreadyExistsFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBClusterEndpointAlreadyExistsFault": return [3 /*break*/, 2];
                    case "DBClusterEndpointQuotaExceededFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#DBClusterEndpointQuotaExceededFault": return [3 /*break*/, 4];
                    case "DBClusterNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.neptune#DBClusterNotFoundFault": return [3 /*break*/, 6];
                    case "DBInstanceNotFoundFault": return [3 /*break*/, 8];
                    case "com.amazonaws.neptune#DBInstanceNotFoundFault": return [3 /*break*/, 8];
                    case "InvalidDBClusterStateFault": return [3 /*break*/, 10];
                    case "com.amazonaws.neptune#InvalidDBClusterStateFault": return [3 /*break*/, 10];
                    case "InvalidDBInstanceStateFault": return [3 /*break*/, 12];
                    case "com.amazonaws.neptune#InvalidDBInstanceStateFault": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterEndpointAlreadyExistsFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterEndpointQuotaExceededFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryCreateDBClusterParameterGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateDBClusterParameterGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateDBClusterParameterGroupResult(data.CreateDBClusterParameterGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateDBClusterParameterGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBParameterGroupAlreadyExistsFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBParameterGroupAlreadyExistsFault": return [3 /*break*/, 2];
                    case "DBParameterGroupQuotaExceededFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#DBParameterGroupQuotaExceededFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBParameterGroupAlreadyExistsFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryDBParameterGroupQuotaExceededFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryCreateDBClusterSnapshotCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateDBClusterSnapshotCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateDBClusterSnapshotResult(data.CreateDBClusterSnapshotResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateDBClusterSnapshotCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBClusterNotFoundFault": return [3 /*break*/, 2];
                    case "DBClusterSnapshotAlreadyExistsFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#DBClusterSnapshotAlreadyExistsFault": return [3 /*break*/, 4];
                    case "InvalidDBClusterSnapshotStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.neptune#InvalidDBClusterSnapshotStateFault": return [3 /*break*/, 6];
                    case "InvalidDBClusterStateFault": return [3 /*break*/, 8];
                    case "com.amazonaws.neptune#InvalidDBClusterStateFault": return [3 /*break*/, 8];
                    case "SnapshotQuotaExceededFault": return [3 /*break*/, 10];
                    case "com.amazonaws.neptune#SnapshotQuotaExceededFault": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterSnapshotAlreadyExistsFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_querySnapshotQuotaExceededFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryCreateDBInstanceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateDBInstanceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateDBInstanceResult(data.CreateDBInstanceResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateDBInstanceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, parsedBody, message;
    var _w;
    return __generator(this, function (_x) {
        switch (_x.label) {
            case 0:
                _a = [__assign({}, output)];
                _w = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_w.body = _x.sent(), _w)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AuthorizationNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#AuthorizationNotFoundFault": return [3 /*break*/, 2];
                    case "DBClusterNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#DBClusterNotFoundFault": return [3 /*break*/, 4];
                    case "DBInstanceAlreadyExistsFault": return [3 /*break*/, 6];
                    case "com.amazonaws.neptune#DBInstanceAlreadyExistsFault": return [3 /*break*/, 6];
                    case "DBParameterGroupNotFoundFault": return [3 /*break*/, 8];
                    case "com.amazonaws.neptune#DBParameterGroupNotFoundFault": return [3 /*break*/, 8];
                    case "DBSecurityGroupNotFoundFault": return [3 /*break*/, 10];
                    case "com.amazonaws.neptune#DBSecurityGroupNotFoundFault": return [3 /*break*/, 10];
                    case "DBSubnetGroupDoesNotCoverEnoughAZs": return [3 /*break*/, 12];
                    case "com.amazonaws.neptune#DBSubnetGroupDoesNotCoverEnoughAZs": return [3 /*break*/, 12];
                    case "DBSubnetGroupNotFoundFault": return [3 /*break*/, 14];
                    case "com.amazonaws.neptune#DBSubnetGroupNotFoundFault": return [3 /*break*/, 14];
                    case "DomainNotFoundFault": return [3 /*break*/, 16];
                    case "com.amazonaws.neptune#DomainNotFoundFault": return [3 /*break*/, 16];
                    case "InstanceQuotaExceededFault": return [3 /*break*/, 18];
                    case "com.amazonaws.neptune#InstanceQuotaExceededFault": return [3 /*break*/, 18];
                    case "InsufficientDBInstanceCapacityFault": return [3 /*break*/, 20];
                    case "com.amazonaws.neptune#InsufficientDBInstanceCapacityFault": return [3 /*break*/, 20];
                    case "InvalidDBClusterStateFault": return [3 /*break*/, 22];
                    case "com.amazonaws.neptune#InvalidDBClusterStateFault": return [3 /*break*/, 22];
                    case "InvalidSubnet": return [3 /*break*/, 24];
                    case "com.amazonaws.neptune#InvalidSubnet": return [3 /*break*/, 24];
                    case "InvalidVPCNetworkStateFault": return [3 /*break*/, 26];
                    case "com.amazonaws.neptune#InvalidVPCNetworkStateFault": return [3 /*break*/, 26];
                    case "KMSKeyNotAccessibleFault": return [3 /*break*/, 28];
                    case "com.amazonaws.neptune#KMSKeyNotAccessibleFault": return [3 /*break*/, 28];
                    case "OptionGroupNotFoundFault": return [3 /*break*/, 30];
                    case "com.amazonaws.neptune#OptionGroupNotFoundFault": return [3 /*break*/, 30];
                    case "ProvisionedIopsNotAvailableInAZFault": return [3 /*break*/, 32];
                    case "com.amazonaws.neptune#ProvisionedIopsNotAvailableInAZFault": return [3 /*break*/, 32];
                    case "StorageQuotaExceededFault": return [3 /*break*/, 34];
                    case "com.amazonaws.neptune#StorageQuotaExceededFault": return [3 /*break*/, 34];
                    case "StorageTypeNotSupportedFault": return [3 /*break*/, 36];
                    case "com.amazonaws.neptune#StorageTypeNotSupportedFault": return [3 /*break*/, 36];
                }
                return [3 /*break*/, 38];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAuthorizationNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryDBInstanceAlreadyExistsFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryDBSecurityGroupNotFoundFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_queryDomainNotFoundFaultResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_queryInstanceQuotaExceededFaultResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientDBInstanceCapacityFaultResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidSubnetResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 26:
                _q = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)];
            case 27:
                response = __assign.apply(void 0, [__assign.apply(void 0, _q.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 28:
                _r = [{}];
                return [4 /*yield*/, deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context)];
            case 29:
                response = __assign.apply(void 0, [__assign.apply(void 0, _r.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 30:
                _s = [{}];
                return [4 /*yield*/, deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context)];
            case 31:
                response = __assign.apply(void 0, [__assign.apply(void 0, _s.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 32:
                _t = [{}];
                return [4 /*yield*/, deserializeAws_queryProvisionedIopsNotAvailableInAZFaultResponse(parsedOutput, context)];
            case 33:
                response = __assign.apply(void 0, [__assign.apply(void 0, _t.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 34:
                _u = [{}];
                return [4 /*yield*/, deserializeAws_queryStorageQuotaExceededFaultResponse(parsedOutput, context)];
            case 35:
                response = __assign.apply(void 0, [__assign.apply(void 0, _u.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 36:
                _v = [{}];
                return [4 /*yield*/, deserializeAws_queryStorageTypeNotSupportedFaultResponse(parsedOutput, context)];
            case 37:
                response = __assign.apply(void 0, [__assign.apply(void 0, _v.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 38:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _x.label = 39;
            case 39:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateDBParameterGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateDBParameterGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateDBParameterGroupResult(data.CreateDBParameterGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateDBParameterGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBParameterGroupAlreadyExistsFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBParameterGroupAlreadyExistsFault": return [3 /*break*/, 2];
                    case "DBParameterGroupQuotaExceededFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#DBParameterGroupQuotaExceededFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBParameterGroupAlreadyExistsFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryDBParameterGroupQuotaExceededFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryCreateDBSubnetGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateDBSubnetGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateDBSubnetGroupResult(data.CreateDBSubnetGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateDBSubnetGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBSubnetGroupAlreadyExistsFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBSubnetGroupAlreadyExistsFault": return [3 /*break*/, 2];
                    case "DBSubnetGroupDoesNotCoverEnoughAZs": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#DBSubnetGroupDoesNotCoverEnoughAZs": return [3 /*break*/, 4];
                    case "DBSubnetGroupQuotaExceededFault": return [3 /*break*/, 6];
                    case "com.amazonaws.neptune#DBSubnetGroupQuotaExceededFault": return [3 /*break*/, 6];
                    case "DBSubnetQuotaExceededFault": return [3 /*break*/, 8];
                    case "com.amazonaws.neptune#DBSubnetQuotaExceededFault": return [3 /*break*/, 8];
                    case "InvalidSubnet": return [3 /*break*/, 10];
                    case "com.amazonaws.neptune#InvalidSubnet": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBSubnetGroupAlreadyExistsFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryDBSubnetGroupQuotaExceededFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryDBSubnetQuotaExceededFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidSubnetResponse(parsedOutput, context)];
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
                    case "EventSubscriptionQuotaExceededFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#EventSubscriptionQuotaExceededFault": return [3 /*break*/, 2];
                    case "SNSInvalidTopicFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#SNSInvalidTopicFault": return [3 /*break*/, 4];
                    case "SNSNoAuthorizationFault": return [3 /*break*/, 6];
                    case "com.amazonaws.neptune#SNSNoAuthorizationFault": return [3 /*break*/, 6];
                    case "SNSTopicArnNotFoundFault": return [3 /*break*/, 8];
                    case "com.amazonaws.neptune#SNSTopicArnNotFoundFault": return [3 /*break*/, 8];
                    case "SourceNotFoundFault": return [3 /*break*/, 10];
                    case "com.amazonaws.neptune#SourceNotFoundFault": return [3 /*break*/, 10];
                    case "SubscriptionAlreadyExistFault": return [3 /*break*/, 12];
                    case "com.amazonaws.neptune#SubscriptionAlreadyExistFault": return [3 /*break*/, 12];
                    case "SubscriptionCategoryNotFoundFault": return [3 /*break*/, 14];
                    case "com.amazonaws.neptune#SubscriptionCategoryNotFoundFault": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryEventSubscriptionQuotaExceededFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_querySNSInvalidTopicFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_querySNSNoAuthorizationFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_querySNSTopicArnNotFoundFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_querySourceNotFoundFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_querySubscriptionAlreadyExistFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_querySubscriptionCategoryNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryDeleteDBClusterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteDBClusterCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDeleteDBClusterResult(data.DeleteDBClusterResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteDBClusterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBClusterNotFoundFault": return [3 /*break*/, 2];
                    case "DBClusterSnapshotAlreadyExistsFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#DBClusterSnapshotAlreadyExistsFault": return [3 /*break*/, 4];
                    case "InvalidDBClusterSnapshotStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.neptune#InvalidDBClusterSnapshotStateFault": return [3 /*break*/, 6];
                    case "InvalidDBClusterStateFault": return [3 /*break*/, 8];
                    case "com.amazonaws.neptune#InvalidDBClusterStateFault": return [3 /*break*/, 8];
                    case "SnapshotQuotaExceededFault": return [3 /*break*/, 10];
                    case "com.amazonaws.neptune#SnapshotQuotaExceededFault": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterSnapshotAlreadyExistsFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_querySnapshotQuotaExceededFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryDeleteDBClusterEndpointCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteDBClusterEndpointCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDeleteDBClusterEndpointOutput(data.DeleteDBClusterEndpointResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteDBClusterEndpointCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBClusterEndpointNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBClusterEndpointNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidDBClusterEndpointStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#InvalidDBClusterEndpointStateFault": return [3 /*break*/, 4];
                    case "InvalidDBClusterStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.neptune#InvalidDBClusterStateFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterEndpointNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBClusterEndpointStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryDeleteDBClusterParameterGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteDBClusterParameterGroupCommandError(output, context)];
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
var deserializeAws_queryDeleteDBClusterParameterGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBParameterGroupNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBParameterGroupNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidDBParameterGroupStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#InvalidDBParameterGroupStateFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBParameterGroupStateFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryDeleteDBClusterSnapshotCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteDBClusterSnapshotCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDeleteDBClusterSnapshotResult(data.DeleteDBClusterSnapshotResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteDBClusterSnapshotCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBClusterSnapshotNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBClusterSnapshotNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidDBClusterSnapshotStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#InvalidDBClusterSnapshotStateFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryDeleteDBInstanceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteDBInstanceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDeleteDBInstanceResult(data.DeleteDBInstanceResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteDBInstanceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBInstanceNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBInstanceNotFoundFault": return [3 /*break*/, 2];
                    case "DBSnapshotAlreadyExistsFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#DBSnapshotAlreadyExistsFault": return [3 /*break*/, 4];
                    case "InvalidDBClusterStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.neptune#InvalidDBClusterStateFault": return [3 /*break*/, 6];
                    case "InvalidDBInstanceStateFault": return [3 /*break*/, 8];
                    case "com.amazonaws.neptune#InvalidDBInstanceStateFault": return [3 /*break*/, 8];
                    case "SnapshotQuotaExceededFault": return [3 /*break*/, 10];
                    case "com.amazonaws.neptune#SnapshotQuotaExceededFault": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryDBSnapshotAlreadyExistsFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_querySnapshotQuotaExceededFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryDeleteDBParameterGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteDBParameterGroupCommandError(output, context)];
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
var deserializeAws_queryDeleteDBParameterGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBParameterGroupNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBParameterGroupNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidDBParameterGroupStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#InvalidDBParameterGroupStateFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBParameterGroupStateFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryDeleteDBSubnetGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteDBSubnetGroupCommandError(output, context)];
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
var deserializeAws_queryDeleteDBSubnetGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBSubnetGroupNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBSubnetGroupNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidDBSubnetGroupStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#InvalidDBSubnetGroupStateFault": return [3 /*break*/, 4];
                    case "InvalidDBSubnetStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.neptune#InvalidDBSubnetStateFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBSubnetGroupStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBSubnetStateFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryDeleteEventSubscriptionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteEventSubscriptionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDeleteEventSubscriptionResult(data.DeleteEventSubscriptionResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
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
                    case "InvalidEventSubscriptionStateFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#InvalidEventSubscriptionStateFault": return [3 /*break*/, 2];
                    case "SubscriptionNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#SubscriptionNotFoundFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidEventSubscriptionStateFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryDescribeDBClusterEndpointsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeDBClusterEndpointsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDBClusterEndpointMessage(data.DescribeDBClusterEndpointsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeDBClusterEndpointsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBClusterNotFoundFault": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryDescribeDBClusterParameterGroupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeDBClusterParameterGroupsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDBClusterParameterGroupsMessage(data.DescribeDBClusterParameterGroupsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeDBClusterParameterGroupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBParameterGroupNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBParameterGroupNotFoundFault": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryDescribeDBClusterParametersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeDBClusterParametersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDBClusterParameterGroupDetails(data.DescribeDBClusterParametersResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeDBClusterParametersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBParameterGroupNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBParameterGroupNotFoundFault": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryDescribeDBClustersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeDBClustersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDBClusterMessage(data.DescribeDBClustersResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeDBClustersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBClusterNotFoundFault": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryDescribeDBClusterSnapshotAttributesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeDBClusterSnapshotAttributesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeDBClusterSnapshotAttributesResult(data.DescribeDBClusterSnapshotAttributesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeDBClusterSnapshotAttributesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBClusterSnapshotNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBClusterSnapshotNotFoundFault": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryDescribeDBClusterSnapshotsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeDBClusterSnapshotsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDBClusterSnapshotMessage(data.DescribeDBClusterSnapshotsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeDBClusterSnapshotsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBClusterSnapshotNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBClusterSnapshotNotFoundFault": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryDescribeDBEngineVersionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeDBEngineVersionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDBEngineVersionMessage(data.DescribeDBEngineVersionsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeDBEngineVersionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_queryDescribeDBInstancesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeDBInstancesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDBInstanceMessage(data.DescribeDBInstancesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeDBInstancesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBInstanceNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBInstanceNotFoundFault": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryDescribeDBParameterGroupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeDBParameterGroupsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDBParameterGroupsMessage(data.DescribeDBParameterGroupsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeDBParameterGroupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBParameterGroupNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBParameterGroupNotFoundFault": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryDescribeDBParametersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeDBParametersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDBParameterGroupDetails(data.DescribeDBParametersResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeDBParametersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBParameterGroupNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBParameterGroupNotFoundFault": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryDescribeDBSubnetGroupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeDBSubnetGroupsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDBSubnetGroupMessage(data.DescribeDBSubnetGroupsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeDBSubnetGroupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBSubnetGroupNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBSubnetGroupNotFoundFault": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryDescribeEngineDefaultClusterParametersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeEngineDefaultClusterParametersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeEngineDefaultClusterParametersResult(data.DescribeEngineDefaultClusterParametersResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeEngineDefaultClusterParametersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_queryDescribeEngineDefaultParametersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeEngineDefaultParametersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeEngineDefaultParametersResult(data.DescribeEngineDefaultParametersResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeEngineDefaultParametersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "SubscriptionNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#SubscriptionNotFoundFault": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_querySubscriptionNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryDescribeOrderableDBInstanceOptionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeOrderableDBInstanceOptionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryOrderableDBInstanceOptionsMessage(data.DescribeOrderableDBInstanceOptionsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeOrderableDBInstanceOptionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_queryDescribePendingMaintenanceActionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribePendingMaintenanceActionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryPendingMaintenanceActionsMessage(data.DescribePendingMaintenanceActionsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribePendingMaintenanceActionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ResourceNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#ResourceNotFoundFault": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryDescribeValidDBInstanceModificationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeValidDBInstanceModificationsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeValidDBInstanceModificationsResult(data.DescribeValidDBInstanceModificationsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeValidDBInstanceModificationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBInstanceNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBInstanceNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidDBInstanceStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#InvalidDBInstanceStateFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryFailoverDBClusterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryFailoverDBClusterCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryFailoverDBClusterResult(data.FailoverDBClusterResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryFailoverDBClusterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBClusterNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidDBClusterStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#InvalidDBClusterStateFault": return [3 /*break*/, 4];
                    case "InvalidDBInstanceStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.neptune#InvalidDBInstanceStateFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryListTagsForResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListTagsForResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryTagListMessage(data.ListTagsForResourceResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListTagsForResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBClusterNotFoundFault": return [3 /*break*/, 2];
                    case "DBInstanceNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#DBInstanceNotFoundFault": return [3 /*break*/, 4];
                    case "DBSnapshotNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.neptune#DBSnapshotNotFoundFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryDBSnapshotNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryModifyDBClusterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryModifyDBClusterCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryModifyDBClusterResult(data.ModifyDBClusterResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryModifyDBClusterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBClusterAlreadyExistsFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBClusterAlreadyExistsFault": return [3 /*break*/, 2];
                    case "DBClusterNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#DBClusterNotFoundFault": return [3 /*break*/, 4];
                    case "DBClusterParameterGroupNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.neptune#DBClusterParameterGroupNotFoundFault": return [3 /*break*/, 6];
                    case "DBSubnetGroupNotFoundFault": return [3 /*break*/, 8];
                    case "com.amazonaws.neptune#DBSubnetGroupNotFoundFault": return [3 /*break*/, 8];
                    case "InvalidDBClusterStateFault": return [3 /*break*/, 10];
                    case "com.amazonaws.neptune#InvalidDBClusterStateFault": return [3 /*break*/, 10];
                    case "InvalidDBInstanceStateFault": return [3 /*break*/, 12];
                    case "com.amazonaws.neptune#InvalidDBInstanceStateFault": return [3 /*break*/, 12];
                    case "InvalidDBSecurityGroupStateFault": return [3 /*break*/, 14];
                    case "com.amazonaws.neptune#InvalidDBSecurityGroupStateFault": return [3 /*break*/, 14];
                    case "InvalidDBSubnetGroupStateFault": return [3 /*break*/, 16];
                    case "com.amazonaws.neptune#InvalidDBSubnetGroupStateFault": return [3 /*break*/, 16];
                    case "InvalidSubnet": return [3 /*break*/, 18];
                    case "com.amazonaws.neptune#InvalidSubnet": return [3 /*break*/, 18];
                    case "InvalidVPCNetworkStateFault": return [3 /*break*/, 20];
                    case "com.amazonaws.neptune#InvalidVPCNetworkStateFault": return [3 /*break*/, 20];
                    case "StorageQuotaExceededFault": return [3 /*break*/, 22];
                    case "com.amazonaws.neptune#StorageQuotaExceededFault": return [3 /*break*/, 22];
                }
                return [3 /*break*/, 24];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterAlreadyExistsFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterParameterGroupNotFoundFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBSecurityGroupStateFaultResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBSubnetGroupStateFaultResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidSubnetResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_queryStorageQuotaExceededFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryModifyDBClusterEndpointCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryModifyDBClusterEndpointCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryModifyDBClusterEndpointOutput(data.ModifyDBClusterEndpointResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryModifyDBClusterEndpointCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBClusterEndpointNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBClusterEndpointNotFoundFault": return [3 /*break*/, 2];
                    case "DBInstanceNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#DBInstanceNotFoundFault": return [3 /*break*/, 4];
                    case "InvalidDBClusterEndpointStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.neptune#InvalidDBClusterEndpointStateFault": return [3 /*break*/, 6];
                    case "InvalidDBClusterStateFault": return [3 /*break*/, 8];
                    case "com.amazonaws.neptune#InvalidDBClusterStateFault": return [3 /*break*/, 8];
                    case "InvalidDBInstanceStateFault": return [3 /*break*/, 10];
                    case "com.amazonaws.neptune#InvalidDBInstanceStateFault": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterEndpointNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBClusterEndpointStateFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryModifyDBClusterParameterGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryModifyDBClusterParameterGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDBClusterParameterGroupNameMessage(data.ModifyDBClusterParameterGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryModifyDBClusterParameterGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBParameterGroupNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBParameterGroupNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidDBParameterGroupStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#InvalidDBParameterGroupStateFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBParameterGroupStateFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryModifyDBClusterSnapshotAttributeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryModifyDBClusterSnapshotAttributeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryModifyDBClusterSnapshotAttributeResult(data.ModifyDBClusterSnapshotAttributeResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryModifyDBClusterSnapshotAttributeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBClusterSnapshotNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBClusterSnapshotNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidDBClusterSnapshotStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#InvalidDBClusterSnapshotStateFault": return [3 /*break*/, 4];
                    case "SharedSnapshotQuotaExceededFault": return [3 /*break*/, 6];
                    case "com.amazonaws.neptune#SharedSnapshotQuotaExceededFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_querySharedSnapshotQuotaExceededFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryModifyDBInstanceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryModifyDBInstanceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryModifyDBInstanceResult(data.ModifyDBInstanceResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryModifyDBInstanceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, parsedBody, message;
    var _u;
    return __generator(this, function (_v) {
        switch (_v.label) {
            case 0:
                _a = [__assign({}, output)];
                _u = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_u.body = _v.sent(), _u)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AuthorizationNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#AuthorizationNotFoundFault": return [3 /*break*/, 2];
                    case "CertificateNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#CertificateNotFoundFault": return [3 /*break*/, 4];
                    case "DBInstanceAlreadyExistsFault": return [3 /*break*/, 6];
                    case "com.amazonaws.neptune#DBInstanceAlreadyExistsFault": return [3 /*break*/, 6];
                    case "DBInstanceNotFoundFault": return [3 /*break*/, 8];
                    case "com.amazonaws.neptune#DBInstanceNotFoundFault": return [3 /*break*/, 8];
                    case "DBParameterGroupNotFoundFault": return [3 /*break*/, 10];
                    case "com.amazonaws.neptune#DBParameterGroupNotFoundFault": return [3 /*break*/, 10];
                    case "DBSecurityGroupNotFoundFault": return [3 /*break*/, 12];
                    case "com.amazonaws.neptune#DBSecurityGroupNotFoundFault": return [3 /*break*/, 12];
                    case "DBUpgradeDependencyFailureFault": return [3 /*break*/, 14];
                    case "com.amazonaws.neptune#DBUpgradeDependencyFailureFault": return [3 /*break*/, 14];
                    case "DomainNotFoundFault": return [3 /*break*/, 16];
                    case "com.amazonaws.neptune#DomainNotFoundFault": return [3 /*break*/, 16];
                    case "InsufficientDBInstanceCapacityFault": return [3 /*break*/, 18];
                    case "com.amazonaws.neptune#InsufficientDBInstanceCapacityFault": return [3 /*break*/, 18];
                    case "InvalidDBInstanceStateFault": return [3 /*break*/, 20];
                    case "com.amazonaws.neptune#InvalidDBInstanceStateFault": return [3 /*break*/, 20];
                    case "InvalidDBSecurityGroupStateFault": return [3 /*break*/, 22];
                    case "com.amazonaws.neptune#InvalidDBSecurityGroupStateFault": return [3 /*break*/, 22];
                    case "InvalidVPCNetworkStateFault": return [3 /*break*/, 24];
                    case "com.amazonaws.neptune#InvalidVPCNetworkStateFault": return [3 /*break*/, 24];
                    case "OptionGroupNotFoundFault": return [3 /*break*/, 26];
                    case "com.amazonaws.neptune#OptionGroupNotFoundFault": return [3 /*break*/, 26];
                    case "ProvisionedIopsNotAvailableInAZFault": return [3 /*break*/, 28];
                    case "com.amazonaws.neptune#ProvisionedIopsNotAvailableInAZFault": return [3 /*break*/, 28];
                    case "StorageQuotaExceededFault": return [3 /*break*/, 30];
                    case "com.amazonaws.neptune#StorageQuotaExceededFault": return [3 /*break*/, 30];
                    case "StorageTypeNotSupportedFault": return [3 /*break*/, 32];
                    case "com.amazonaws.neptune#StorageTypeNotSupportedFault": return [3 /*break*/, 32];
                }
                return [3 /*break*/, 34];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAuthorizationNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryCertificateNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryDBInstanceAlreadyExistsFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryDBSecurityGroupNotFoundFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryDBUpgradeDependencyFailureFaultResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_queryDomainNotFoundFaultResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientDBInstanceCapacityFaultResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBSecurityGroupStateFaultResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 26:
                _q = [{}];
                return [4 /*yield*/, deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context)];
            case 27:
                response = __assign.apply(void 0, [__assign.apply(void 0, _q.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 28:
                _r = [{}];
                return [4 /*yield*/, deserializeAws_queryProvisionedIopsNotAvailableInAZFaultResponse(parsedOutput, context)];
            case 29:
                response = __assign.apply(void 0, [__assign.apply(void 0, _r.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 30:
                _s = [{}];
                return [4 /*yield*/, deserializeAws_queryStorageQuotaExceededFaultResponse(parsedOutput, context)];
            case 31:
                response = __assign.apply(void 0, [__assign.apply(void 0, _s.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 32:
                _t = [{}];
                return [4 /*yield*/, deserializeAws_queryStorageTypeNotSupportedFaultResponse(parsedOutput, context)];
            case 33:
                response = __assign.apply(void 0, [__assign.apply(void 0, _t.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 34:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _v.label = 35;
            case 35:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryModifyDBParameterGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryModifyDBParameterGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDBParameterGroupNameMessage(data.ModifyDBParameterGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryModifyDBParameterGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBParameterGroupNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBParameterGroupNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidDBParameterGroupStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#InvalidDBParameterGroupStateFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBParameterGroupStateFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryModifyDBSubnetGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryModifyDBSubnetGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryModifyDBSubnetGroupResult(data.ModifyDBSubnetGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryModifyDBSubnetGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBSubnetGroupDoesNotCoverEnoughAZs": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBSubnetGroupDoesNotCoverEnoughAZs": return [3 /*break*/, 2];
                    case "DBSubnetGroupNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#DBSubnetGroupNotFoundFault": return [3 /*break*/, 4];
                    case "DBSubnetQuotaExceededFault": return [3 /*break*/, 6];
                    case "com.amazonaws.neptune#DBSubnetQuotaExceededFault": return [3 /*break*/, 6];
                    case "InvalidSubnet": return [3 /*break*/, 8];
                    case "com.amazonaws.neptune#InvalidSubnet": return [3 /*break*/, 8];
                    case "SubnetAlreadyInUse": return [3 /*break*/, 10];
                    case "com.amazonaws.neptune#SubnetAlreadyInUse": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryDBSubnetQuotaExceededFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidSubnetResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_querySubnetAlreadyInUseResponse(parsedOutput, context)];
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
                    case "EventSubscriptionQuotaExceededFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#EventSubscriptionQuotaExceededFault": return [3 /*break*/, 2];
                    case "SNSInvalidTopicFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#SNSInvalidTopicFault": return [3 /*break*/, 4];
                    case "SNSNoAuthorizationFault": return [3 /*break*/, 6];
                    case "com.amazonaws.neptune#SNSNoAuthorizationFault": return [3 /*break*/, 6];
                    case "SNSTopicArnNotFoundFault": return [3 /*break*/, 8];
                    case "com.amazonaws.neptune#SNSTopicArnNotFoundFault": return [3 /*break*/, 8];
                    case "SubscriptionCategoryNotFoundFault": return [3 /*break*/, 10];
                    case "com.amazonaws.neptune#SubscriptionCategoryNotFoundFault": return [3 /*break*/, 10];
                    case "SubscriptionNotFoundFault": return [3 /*break*/, 12];
                    case "com.amazonaws.neptune#SubscriptionNotFoundFault": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryEventSubscriptionQuotaExceededFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_querySNSInvalidTopicFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_querySNSNoAuthorizationFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_querySNSTopicArnNotFoundFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_querySubscriptionCategoryNotFoundFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_querySubscriptionNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryPromoteReadReplicaDBClusterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryPromoteReadReplicaDBClusterCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryPromoteReadReplicaDBClusterResult(data.PromoteReadReplicaDBClusterResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryPromoteReadReplicaDBClusterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBClusterNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidDBClusterStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#InvalidDBClusterStateFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryRebootDBInstanceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryRebootDBInstanceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryRebootDBInstanceResult(data.RebootDBInstanceResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryRebootDBInstanceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBInstanceNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBInstanceNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidDBInstanceStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#InvalidDBInstanceStateFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryRemoveRoleFromDBClusterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryRemoveRoleFromDBClusterCommandError(output, context)];
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
var deserializeAws_queryRemoveRoleFromDBClusterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBClusterNotFoundFault": return [3 /*break*/, 2];
                    case "DBClusterRoleNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#DBClusterRoleNotFoundFault": return [3 /*break*/, 4];
                    case "InvalidDBClusterStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.neptune#InvalidDBClusterStateFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterRoleNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryRemoveSourceIdentifierFromSubscriptionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryRemoveSourceIdentifierFromSubscriptionResult(data.RemoveSourceIdentifierFromSubscriptionResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryRemoveSourceIdentifierFromSubscriptionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "SourceNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#SourceNotFoundFault": return [3 /*break*/, 2];
                    case "SubscriptionNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#SubscriptionNotFoundFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_querySourceNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryRemoveTagsFromResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryRemoveTagsFromResourceCommandError(output, context)];
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
var deserializeAws_queryRemoveTagsFromResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBClusterNotFoundFault": return [3 /*break*/, 2];
                    case "DBInstanceNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#DBInstanceNotFoundFault": return [3 /*break*/, 4];
                    case "DBSnapshotNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.neptune#DBSnapshotNotFoundFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryDBSnapshotNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryResetDBClusterParameterGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryResetDBClusterParameterGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDBClusterParameterGroupNameMessage(data.ResetDBClusterParameterGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryResetDBClusterParameterGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBParameterGroupNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBParameterGroupNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidDBParameterGroupStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#InvalidDBParameterGroupStateFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBParameterGroupStateFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryResetDBParameterGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryResetDBParameterGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDBParameterGroupNameMessage(data.ResetDBParameterGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryResetDBParameterGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBParameterGroupNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBParameterGroupNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidDBParameterGroupStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#InvalidDBParameterGroupStateFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBParameterGroupStateFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryRestoreDBClusterFromSnapshotCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryRestoreDBClusterFromSnapshotCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryRestoreDBClusterFromSnapshotResult(data.RestoreDBClusterFromSnapshotResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryRestoreDBClusterFromSnapshotCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, parsedBody, message;
    var _u;
    return __generator(this, function (_v) {
        switch (_v.label) {
            case 0:
                _a = [__assign({}, output)];
                _u = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_u.body = _v.sent(), _u)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DBClusterAlreadyExistsFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBClusterAlreadyExistsFault": return [3 /*break*/, 2];
                    case "DBClusterParameterGroupNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#DBClusterParameterGroupNotFoundFault": return [3 /*break*/, 4];
                    case "DBClusterQuotaExceededFault": return [3 /*break*/, 6];
                    case "com.amazonaws.neptune#DBClusterQuotaExceededFault": return [3 /*break*/, 6];
                    case "DBClusterSnapshotNotFoundFault": return [3 /*break*/, 8];
                    case "com.amazonaws.neptune#DBClusterSnapshotNotFoundFault": return [3 /*break*/, 8];
                    case "DBSnapshotNotFoundFault": return [3 /*break*/, 10];
                    case "com.amazonaws.neptune#DBSnapshotNotFoundFault": return [3 /*break*/, 10];
                    case "DBSubnetGroupNotFoundFault": return [3 /*break*/, 12];
                    case "com.amazonaws.neptune#DBSubnetGroupNotFoundFault": return [3 /*break*/, 12];
                    case "InsufficientDBClusterCapacityFault": return [3 /*break*/, 14];
                    case "com.amazonaws.neptune#InsufficientDBClusterCapacityFault": return [3 /*break*/, 14];
                    case "InsufficientStorageClusterCapacityFault": return [3 /*break*/, 16];
                    case "com.amazonaws.neptune#InsufficientStorageClusterCapacityFault": return [3 /*break*/, 16];
                    case "InvalidDBClusterSnapshotStateFault": return [3 /*break*/, 18];
                    case "com.amazonaws.neptune#InvalidDBClusterSnapshotStateFault": return [3 /*break*/, 18];
                    case "InvalidDBSnapshotStateFault": return [3 /*break*/, 20];
                    case "com.amazonaws.neptune#InvalidDBSnapshotStateFault": return [3 /*break*/, 20];
                    case "InvalidRestoreFault": return [3 /*break*/, 22];
                    case "com.amazonaws.neptune#InvalidRestoreFault": return [3 /*break*/, 22];
                    case "InvalidSubnet": return [3 /*break*/, 24];
                    case "com.amazonaws.neptune#InvalidSubnet": return [3 /*break*/, 24];
                    case "InvalidVPCNetworkStateFault": return [3 /*break*/, 26];
                    case "com.amazonaws.neptune#InvalidVPCNetworkStateFault": return [3 /*break*/, 26];
                    case "KMSKeyNotAccessibleFault": return [3 /*break*/, 28];
                    case "com.amazonaws.neptune#KMSKeyNotAccessibleFault": return [3 /*break*/, 28];
                    case "OptionGroupNotFoundFault": return [3 /*break*/, 30];
                    case "com.amazonaws.neptune#OptionGroupNotFoundFault": return [3 /*break*/, 30];
                    case "StorageQuotaExceededFault": return [3 /*break*/, 32];
                    case "com.amazonaws.neptune#StorageQuotaExceededFault": return [3 /*break*/, 32];
                }
                return [3 /*break*/, 34];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterAlreadyExistsFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterParameterGroupNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterQuotaExceededFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryDBSnapshotNotFoundFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientDBClusterCapacityFaultResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientStorageClusterCapacityFaultResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBSnapshotStateFaultResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidRestoreFaultResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidSubnetResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 26:
                _q = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)];
            case 27:
                response = __assign.apply(void 0, [__assign.apply(void 0, _q.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 28:
                _r = [{}];
                return [4 /*yield*/, deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context)];
            case 29:
                response = __assign.apply(void 0, [__assign.apply(void 0, _r.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 30:
                _s = [{}];
                return [4 /*yield*/, deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context)];
            case 31:
                response = __assign.apply(void 0, [__assign.apply(void 0, _s.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 32:
                _t = [{}];
                return [4 /*yield*/, deserializeAws_queryStorageQuotaExceededFaultResponse(parsedOutput, context)];
            case 33:
                response = __assign.apply(void 0, [__assign.apply(void 0, _t.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 34:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _v.label = 35;
            case 35:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryRestoreDBClusterToPointInTimeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryRestoreDBClusterToPointInTimeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryRestoreDBClusterToPointInTimeResult(data.RestoreDBClusterToPointInTimeResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryRestoreDBClusterToPointInTimeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, parsedBody, message;
    var _v;
    return __generator(this, function (_w) {
        switch (_w.label) {
            case 0:
                _a = [__assign({}, output)];
                _v = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_v.body = _w.sent(), _v)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DBClusterAlreadyExistsFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBClusterAlreadyExistsFault": return [3 /*break*/, 2];
                    case "DBClusterNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#DBClusterNotFoundFault": return [3 /*break*/, 4];
                    case "DBClusterParameterGroupNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.neptune#DBClusterParameterGroupNotFoundFault": return [3 /*break*/, 6];
                    case "DBClusterQuotaExceededFault": return [3 /*break*/, 8];
                    case "com.amazonaws.neptune#DBClusterQuotaExceededFault": return [3 /*break*/, 8];
                    case "DBClusterSnapshotNotFoundFault": return [3 /*break*/, 10];
                    case "com.amazonaws.neptune#DBClusterSnapshotNotFoundFault": return [3 /*break*/, 10];
                    case "DBSubnetGroupNotFoundFault": return [3 /*break*/, 12];
                    case "com.amazonaws.neptune#DBSubnetGroupNotFoundFault": return [3 /*break*/, 12];
                    case "InsufficientDBClusterCapacityFault": return [3 /*break*/, 14];
                    case "com.amazonaws.neptune#InsufficientDBClusterCapacityFault": return [3 /*break*/, 14];
                    case "InsufficientStorageClusterCapacityFault": return [3 /*break*/, 16];
                    case "com.amazonaws.neptune#InsufficientStorageClusterCapacityFault": return [3 /*break*/, 16];
                    case "InvalidDBClusterSnapshotStateFault": return [3 /*break*/, 18];
                    case "com.amazonaws.neptune#InvalidDBClusterSnapshotStateFault": return [3 /*break*/, 18];
                    case "InvalidDBClusterStateFault": return [3 /*break*/, 20];
                    case "com.amazonaws.neptune#InvalidDBClusterStateFault": return [3 /*break*/, 20];
                    case "InvalidDBSnapshotStateFault": return [3 /*break*/, 22];
                    case "com.amazonaws.neptune#InvalidDBSnapshotStateFault": return [3 /*break*/, 22];
                    case "InvalidRestoreFault": return [3 /*break*/, 24];
                    case "com.amazonaws.neptune#InvalidRestoreFault": return [3 /*break*/, 24];
                    case "InvalidSubnet": return [3 /*break*/, 26];
                    case "com.amazonaws.neptune#InvalidSubnet": return [3 /*break*/, 26];
                    case "InvalidVPCNetworkStateFault": return [3 /*break*/, 28];
                    case "com.amazonaws.neptune#InvalidVPCNetworkStateFault": return [3 /*break*/, 28];
                    case "KMSKeyNotAccessibleFault": return [3 /*break*/, 30];
                    case "com.amazonaws.neptune#KMSKeyNotAccessibleFault": return [3 /*break*/, 30];
                    case "OptionGroupNotFoundFault": return [3 /*break*/, 32];
                    case "com.amazonaws.neptune#OptionGroupNotFoundFault": return [3 /*break*/, 32];
                    case "StorageQuotaExceededFault": return [3 /*break*/, 34];
                    case "com.amazonaws.neptune#StorageQuotaExceededFault": return [3 /*break*/, 34];
                }
                return [3 /*break*/, 36];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterAlreadyExistsFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_w.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 37];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_w.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 37];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterParameterGroupNotFoundFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_w.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 37];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterQuotaExceededFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_w.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 37];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_w.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 37];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_w.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 37];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientDBClusterCapacityFaultResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_w.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 37];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientStorageClusterCapacityFaultResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_w.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 37];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_w.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 37];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_w.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 37];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBSnapshotStateFaultResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_w.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 37];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidRestoreFaultResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_w.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 37];
            case 26:
                _q = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidSubnetResponse(parsedOutput, context)];
            case 27:
                response = __assign.apply(void 0, [__assign.apply(void 0, _q.concat([(_w.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 37];
            case 28:
                _r = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)];
            case 29:
                response = __assign.apply(void 0, [__assign.apply(void 0, _r.concat([(_w.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 37];
            case 30:
                _s = [{}];
                return [4 /*yield*/, deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context)];
            case 31:
                response = __assign.apply(void 0, [__assign.apply(void 0, _s.concat([(_w.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 37];
            case 32:
                _t = [{}];
                return [4 /*yield*/, deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context)];
            case 33:
                response = __assign.apply(void 0, [__assign.apply(void 0, _t.concat([(_w.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 37];
            case 34:
                _u = [{}];
                return [4 /*yield*/, deserializeAws_queryStorageQuotaExceededFaultResponse(parsedOutput, context)];
            case 35:
                response = __assign.apply(void 0, [__assign.apply(void 0, _u.concat([(_w.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 37];
            case 36:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _w.label = 37;
            case 37:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryStartDBClusterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryStartDBClusterCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryStartDBClusterResult(data.StartDBClusterResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryStartDBClusterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBClusterNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidDBClusterStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#InvalidDBClusterStateFault": return [3 /*break*/, 4];
                    case "InvalidDBInstanceStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.neptune#InvalidDBInstanceStateFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryStopDBClusterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryStopDBClusterCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryStopDBClusterResult(data.StopDBClusterResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryStopDBClusterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DBClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.neptune#DBClusterNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidDBClusterStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.neptune#InvalidDBClusterStateFault": return [3 /*break*/, 4];
                    case "InvalidDBInstanceStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.neptune#InvalidDBInstanceStateFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context)];
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
var deserializeAws_queryAuthorizationNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryAuthorizationNotFoundFault(body.Error, context);
        contents = __assign({ name: "AuthorizationNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryCertificateNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryCertificateNotFoundFault(body.Error, context);
        contents = __assign({ name: "CertificateNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDBClusterAlreadyExistsFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDBClusterAlreadyExistsFault(body.Error, context);
        contents = __assign({ name: "DBClusterAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDBClusterEndpointAlreadyExistsFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDBClusterEndpointAlreadyExistsFault(body.Error, context);
        contents = __assign({ name: "DBClusterEndpointAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDBClusterEndpointNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDBClusterEndpointNotFoundFault(body.Error, context);
        contents = __assign({ name: "DBClusterEndpointNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDBClusterEndpointQuotaExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDBClusterEndpointQuotaExceededFault(body.Error, context);
        contents = __assign({ name: "DBClusterEndpointQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDBClusterNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDBClusterNotFoundFault(body.Error, context);
        contents = __assign({ name: "DBClusterNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDBClusterParameterGroupNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDBClusterParameterGroupNotFoundFault(body.Error, context);
        contents = __assign({ name: "DBClusterParameterGroupNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDBClusterQuotaExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDBClusterQuotaExceededFault(body.Error, context);
        contents = __assign({ name: "DBClusterQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDBClusterRoleAlreadyExistsFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDBClusterRoleAlreadyExistsFault(body.Error, context);
        contents = __assign({ name: "DBClusterRoleAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDBClusterRoleNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDBClusterRoleNotFoundFault(body.Error, context);
        contents = __assign({ name: "DBClusterRoleNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDBClusterRoleQuotaExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDBClusterRoleQuotaExceededFault(body.Error, context);
        contents = __assign({ name: "DBClusterRoleQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDBClusterSnapshotAlreadyExistsFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDBClusterSnapshotAlreadyExistsFault(body.Error, context);
        contents = __assign({ name: "DBClusterSnapshotAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDBClusterSnapshotNotFoundFault(body.Error, context);
        contents = __assign({ name: "DBClusterSnapshotNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDBInstanceAlreadyExistsFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDBInstanceAlreadyExistsFault(body.Error, context);
        contents = __assign({ name: "DBInstanceAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDBInstanceNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDBInstanceNotFoundFault(body.Error, context);
        contents = __assign({ name: "DBInstanceNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDBParameterGroupAlreadyExistsFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDBParameterGroupAlreadyExistsFault(body.Error, context);
        contents = __assign({ name: "DBParameterGroupAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDBParameterGroupNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDBParameterGroupNotFoundFault(body.Error, context);
        contents = __assign({ name: "DBParameterGroupNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDBParameterGroupQuotaExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDBParameterGroupQuotaExceededFault(body.Error, context);
        contents = __assign({ name: "DBParameterGroupQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDBSecurityGroupNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDBSecurityGroupNotFoundFault(body.Error, context);
        contents = __assign({ name: "DBSecurityGroupNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDBSnapshotAlreadyExistsFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDBSnapshotAlreadyExistsFault(body.Error, context);
        contents = __assign({ name: "DBSnapshotAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDBSnapshotNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDBSnapshotNotFoundFault(body.Error, context);
        contents = __assign({ name: "DBSnapshotNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDBSubnetGroupAlreadyExistsFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDBSubnetGroupAlreadyExistsFault(body.Error, context);
        contents = __assign({ name: "DBSubnetGroupAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZs(body.Error, context);
        contents = __assign({ name: "DBSubnetGroupDoesNotCoverEnoughAZs", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDBSubnetGroupNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDBSubnetGroupNotFoundFault(body.Error, context);
        contents = __assign({ name: "DBSubnetGroupNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDBSubnetGroupQuotaExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDBSubnetGroupQuotaExceededFault(body.Error, context);
        contents = __assign({ name: "DBSubnetGroupQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDBSubnetQuotaExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDBSubnetQuotaExceededFault(body.Error, context);
        contents = __assign({ name: "DBSubnetQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDBUpgradeDependencyFailureFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDBUpgradeDependencyFailureFault(body.Error, context);
        contents = __assign({ name: "DBUpgradeDependencyFailureFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDomainNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDomainNotFoundFault(body.Error, context);
        contents = __assign({ name: "DomainNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_queryInstanceQuotaExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInstanceQuotaExceededFault(body.Error, context);
        contents = __assign({ name: "InstanceQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInsufficientDBClusterCapacityFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInsufficientDBClusterCapacityFault(body.Error, context);
        contents = __assign({ name: "InsufficientDBClusterCapacityFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInsufficientDBInstanceCapacityFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInsufficientDBInstanceCapacityFault(body.Error, context);
        contents = __assign({ name: "InsufficientDBInstanceCapacityFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInsufficientStorageClusterCapacityFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInsufficientStorageClusterCapacityFault(body.Error, context);
        contents = __assign({ name: "InsufficientStorageClusterCapacityFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidDBClusterEndpointStateFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidDBClusterEndpointStateFault(body.Error, context);
        contents = __assign({ name: "InvalidDBClusterEndpointStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidDBClusterSnapshotStateFault(body.Error, context);
        contents = __assign({ name: "InvalidDBClusterSnapshotStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidDBClusterStateFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidDBClusterStateFault(body.Error, context);
        contents = __assign({ name: "InvalidDBClusterStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidDBInstanceStateFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidDBInstanceStateFault(body.Error, context);
        contents = __assign({ name: "InvalidDBInstanceStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidDBParameterGroupStateFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidDBParameterGroupStateFault(body.Error, context);
        contents = __assign({ name: "InvalidDBParameterGroupStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidDBSecurityGroupStateFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidDBSecurityGroupStateFault(body.Error, context);
        contents = __assign({ name: "InvalidDBSecurityGroupStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidDBSnapshotStateFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidDBSnapshotStateFault(body.Error, context);
        contents = __assign({ name: "InvalidDBSnapshotStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidDBSubnetGroupStateFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidDBSubnetGroupStateFault(body.Error, context);
        contents = __assign({ name: "InvalidDBSubnetGroupStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidDBSubnetStateFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidDBSubnetStateFault(body.Error, context);
        contents = __assign({ name: "InvalidDBSubnetStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidEventSubscriptionStateFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidEventSubscriptionStateFault(body.Error, context);
        contents = __assign({ name: "InvalidEventSubscriptionStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_queryInvalidSubnetResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidSubnet(body.Error, context);
        contents = __assign({ name: "InvalidSubnet", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_queryKMSKeyNotAccessibleFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryKMSKeyNotAccessibleFault(body.Error, context);
        contents = __assign({ name: "KMSKeyNotAccessibleFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryOptionGroupNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryOptionGroupNotFoundFault(body.Error, context);
        contents = __assign({ name: "OptionGroupNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryProvisionedIopsNotAvailableInAZFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryProvisionedIopsNotAvailableInAZFault(body.Error, context);
        contents = __assign({ name: "ProvisionedIopsNotAvailableInAZFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_querySharedSnapshotQuotaExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_querySharedSnapshotQuotaExceededFault(body.Error, context);
        contents = __assign({ name: "SharedSnapshotQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_querySnapshotQuotaExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_querySnapshotQuotaExceededFault(body.Error, context);
        contents = __assign({ name: "SnapshotQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_queryStorageQuotaExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryStorageQuotaExceededFault(body.Error, context);
        contents = __assign({ name: "StorageQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryStorageTypeNotSupportedFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryStorageTypeNotSupportedFault(body.Error, context);
        contents = __assign({ name: "StorageTypeNotSupportedFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_querySubscriptionNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_querySubscriptionNotFoundFault(body.Error, context);
        contents = __assign({ name: "SubscriptionNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_queryAddRoleToDBClusterMessage = function (input, context) {
    var entries = {};
    if (input.DBClusterIdentifier !== undefined && input.DBClusterIdentifier !== null) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    if (input.RoleArn !== undefined && input.RoleArn !== null) {
        entries["RoleArn"] = input.RoleArn;
    }
    if (input.FeatureName !== undefined && input.FeatureName !== null) {
        entries["FeatureName"] = input.FeatureName;
    }
    return entries;
};
var serializeAws_queryAddSourceIdentifierToSubscriptionMessage = function (input, context) {
    var entries = {};
    if (input.SubscriptionName !== undefined && input.SubscriptionName !== null) {
        entries["SubscriptionName"] = input.SubscriptionName;
    }
    if (input.SourceIdentifier !== undefined && input.SourceIdentifier !== null) {
        entries["SourceIdentifier"] = input.SourceIdentifier;
    }
    return entries;
};
var serializeAws_queryAddTagsToResourceMessage = function (input, context) {
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
var serializeAws_queryApplyPendingMaintenanceActionMessage = function (input, context) {
    var entries = {};
    if (input.ResourceIdentifier !== undefined && input.ResourceIdentifier !== null) {
        entries["ResourceIdentifier"] = input.ResourceIdentifier;
    }
    if (input.ApplyAction !== undefined && input.ApplyAction !== null) {
        entries["ApplyAction"] = input.ApplyAction;
    }
    if (input.OptInType !== undefined && input.OptInType !== null) {
        entries["OptInType"] = input.OptInType;
    }
    return entries;
};
var serializeAws_queryAttributeValueList = function (input, context) {
    var e_1, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_1 = __values(input), input_1_1 = input_1.next(); !input_1_1.done; input_1_1 = input_1.next()) {
            var entry = input_1_1.value;
            if (entry === null) {
                continue;
            }
            entries["AttributeValue." + counter] = entry;
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
var serializeAws_queryAvailabilityZones = function (input, context) {
    var e_2, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_2 = __values(input), input_2_1 = input_2.next(); !input_2_1.done; input_2_1 = input_2.next()) {
            var entry = input_2_1.value;
            if (entry === null) {
                continue;
            }
            entries["AvailabilityZone." + counter] = entry;
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
var serializeAws_queryCloudwatchLogsExportConfiguration = function (input, context) {
    var entries = {};
    if (input.EnableLogTypes !== undefined && input.EnableLogTypes !== null) {
        var memberEntries = serializeAws_queryLogTypeList(input.EnableLogTypes, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "EnableLogTypes." + key;
            entries[loc] = value;
        });
    }
    if (input.DisableLogTypes !== undefined && input.DisableLogTypes !== null) {
        var memberEntries = serializeAws_queryLogTypeList(input.DisableLogTypes, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "DisableLogTypes." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryCopyDBClusterParameterGroupMessage = function (input, context) {
    var entries = {};
    if (input.SourceDBClusterParameterGroupIdentifier !== undefined &&
        input.SourceDBClusterParameterGroupIdentifier !== null) {
        entries["SourceDBClusterParameterGroupIdentifier"] = input.SourceDBClusterParameterGroupIdentifier;
    }
    if (input.TargetDBClusterParameterGroupIdentifier !== undefined &&
        input.TargetDBClusterParameterGroupIdentifier !== null) {
        entries["TargetDBClusterParameterGroupIdentifier"] = input.TargetDBClusterParameterGroupIdentifier;
    }
    if (input.TargetDBClusterParameterGroupDescription !== undefined &&
        input.TargetDBClusterParameterGroupDescription !== null) {
        entries["TargetDBClusterParameterGroupDescription"] = input.TargetDBClusterParameterGroupDescription;
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
var serializeAws_queryCopyDBClusterSnapshotMessage = function (input, context) {
    var entries = {};
    if (input.SourceDBClusterSnapshotIdentifier !== undefined && input.SourceDBClusterSnapshotIdentifier !== null) {
        entries["SourceDBClusterSnapshotIdentifier"] = input.SourceDBClusterSnapshotIdentifier;
    }
    if (input.TargetDBClusterSnapshotIdentifier !== undefined && input.TargetDBClusterSnapshotIdentifier !== null) {
        entries["TargetDBClusterSnapshotIdentifier"] = input.TargetDBClusterSnapshotIdentifier;
    }
    if (input.KmsKeyId !== undefined && input.KmsKeyId !== null) {
        entries["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.PreSignedUrl !== undefined && input.PreSignedUrl !== null) {
        entries["PreSignedUrl"] = input.PreSignedUrl;
    }
    if (input.CopyTags !== undefined && input.CopyTags !== null) {
        entries["CopyTags"] = input.CopyTags;
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
var serializeAws_queryCopyDBParameterGroupMessage = function (input, context) {
    var entries = {};
    if (input.SourceDBParameterGroupIdentifier !== undefined && input.SourceDBParameterGroupIdentifier !== null) {
        entries["SourceDBParameterGroupIdentifier"] = input.SourceDBParameterGroupIdentifier;
    }
    if (input.TargetDBParameterGroupIdentifier !== undefined && input.TargetDBParameterGroupIdentifier !== null) {
        entries["TargetDBParameterGroupIdentifier"] = input.TargetDBParameterGroupIdentifier;
    }
    if (input.TargetDBParameterGroupDescription !== undefined && input.TargetDBParameterGroupDescription !== null) {
        entries["TargetDBParameterGroupDescription"] = input.TargetDBParameterGroupDescription;
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
var serializeAws_queryCreateDBClusterEndpointMessage = function (input, context) {
    var entries = {};
    if (input.DBClusterIdentifier !== undefined && input.DBClusterIdentifier !== null) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    if (input.DBClusterEndpointIdentifier !== undefined && input.DBClusterEndpointIdentifier !== null) {
        entries["DBClusterEndpointIdentifier"] = input.DBClusterEndpointIdentifier;
    }
    if (input.EndpointType !== undefined && input.EndpointType !== null) {
        entries["EndpointType"] = input.EndpointType;
    }
    if (input.StaticMembers !== undefined && input.StaticMembers !== null) {
        var memberEntries = serializeAws_queryStringList(input.StaticMembers, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "StaticMembers." + key;
            entries[loc] = value;
        });
    }
    if (input.ExcludedMembers !== undefined && input.ExcludedMembers !== null) {
        var memberEntries = serializeAws_queryStringList(input.ExcludedMembers, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ExcludedMembers." + key;
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
var serializeAws_queryCreateDBClusterMessage = function (input, context) {
    var entries = {};
    if (input.AvailabilityZones !== undefined && input.AvailabilityZones !== null) {
        var memberEntries = serializeAws_queryAvailabilityZones(input.AvailabilityZones, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "AvailabilityZones." + key;
            entries[loc] = value;
        });
    }
    if (input.BackupRetentionPeriod !== undefined && input.BackupRetentionPeriod !== null) {
        entries["BackupRetentionPeriod"] = input.BackupRetentionPeriod;
    }
    if (input.CharacterSetName !== undefined && input.CharacterSetName !== null) {
        entries["CharacterSetName"] = input.CharacterSetName;
    }
    if (input.CopyTagsToSnapshot !== undefined && input.CopyTagsToSnapshot !== null) {
        entries["CopyTagsToSnapshot"] = input.CopyTagsToSnapshot;
    }
    if (input.DatabaseName !== undefined && input.DatabaseName !== null) {
        entries["DatabaseName"] = input.DatabaseName;
    }
    if (input.DBClusterIdentifier !== undefined && input.DBClusterIdentifier !== null) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    if (input.DBClusterParameterGroupName !== undefined && input.DBClusterParameterGroupName !== null) {
        entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
    }
    if (input.VpcSecurityGroupIds !== undefined && input.VpcSecurityGroupIds !== null) {
        var memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "VpcSecurityGroupIds." + key;
            entries[loc] = value;
        });
    }
    if (input.DBSubnetGroupName !== undefined && input.DBSubnetGroupName !== null) {
        entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
    }
    if (input.Engine !== undefined && input.Engine !== null) {
        entries["Engine"] = input.Engine;
    }
    if (input.EngineVersion !== undefined && input.EngineVersion !== null) {
        entries["EngineVersion"] = input.EngineVersion;
    }
    if (input.Port !== undefined && input.Port !== null) {
        entries["Port"] = input.Port;
    }
    if (input.MasterUsername !== undefined && input.MasterUsername !== null) {
        entries["MasterUsername"] = input.MasterUsername;
    }
    if (input.MasterUserPassword !== undefined && input.MasterUserPassword !== null) {
        entries["MasterUserPassword"] = input.MasterUserPassword;
    }
    if (input.OptionGroupName !== undefined && input.OptionGroupName !== null) {
        entries["OptionGroupName"] = input.OptionGroupName;
    }
    if (input.PreferredBackupWindow !== undefined && input.PreferredBackupWindow !== null) {
        entries["PreferredBackupWindow"] = input.PreferredBackupWindow;
    }
    if (input.PreferredMaintenanceWindow !== undefined && input.PreferredMaintenanceWindow !== null) {
        entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
    }
    if (input.ReplicationSourceIdentifier !== undefined && input.ReplicationSourceIdentifier !== null) {
        entries["ReplicationSourceIdentifier"] = input.ReplicationSourceIdentifier;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    if (input.StorageEncrypted !== undefined && input.StorageEncrypted !== null) {
        entries["StorageEncrypted"] = input.StorageEncrypted;
    }
    if (input.KmsKeyId !== undefined && input.KmsKeyId !== null) {
        entries["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.PreSignedUrl !== undefined && input.PreSignedUrl !== null) {
        entries["PreSignedUrl"] = input.PreSignedUrl;
    }
    if (input.EnableIAMDatabaseAuthentication !== undefined && input.EnableIAMDatabaseAuthentication !== null) {
        entries["EnableIAMDatabaseAuthentication"] = input.EnableIAMDatabaseAuthentication;
    }
    if (input.EnableCloudwatchLogsExports !== undefined && input.EnableCloudwatchLogsExports !== null) {
        var memberEntries = serializeAws_queryLogTypeList(input.EnableCloudwatchLogsExports, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "EnableCloudwatchLogsExports." + key;
            entries[loc] = value;
        });
    }
    if (input.DeletionProtection !== undefined && input.DeletionProtection !== null) {
        entries["DeletionProtection"] = input.DeletionProtection;
    }
    return entries;
};
var serializeAws_queryCreateDBClusterParameterGroupMessage = function (input, context) {
    var entries = {};
    if (input.DBClusterParameterGroupName !== undefined && input.DBClusterParameterGroupName !== null) {
        entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
    }
    if (input.DBParameterGroupFamily !== undefined && input.DBParameterGroupFamily !== null) {
        entries["DBParameterGroupFamily"] = input.DBParameterGroupFamily;
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
var serializeAws_queryCreateDBClusterSnapshotMessage = function (input, context) {
    var entries = {};
    if (input.DBClusterSnapshotIdentifier !== undefined && input.DBClusterSnapshotIdentifier !== null) {
        entries["DBClusterSnapshotIdentifier"] = input.DBClusterSnapshotIdentifier;
    }
    if (input.DBClusterIdentifier !== undefined && input.DBClusterIdentifier !== null) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
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
var serializeAws_queryCreateDBInstanceMessage = function (input, context) {
    var entries = {};
    if (input.DBName !== undefined && input.DBName !== null) {
        entries["DBName"] = input.DBName;
    }
    if (input.DBInstanceIdentifier !== undefined && input.DBInstanceIdentifier !== null) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
    }
    if (input.AllocatedStorage !== undefined && input.AllocatedStorage !== null) {
        entries["AllocatedStorage"] = input.AllocatedStorage;
    }
    if (input.DBInstanceClass !== undefined && input.DBInstanceClass !== null) {
        entries["DBInstanceClass"] = input.DBInstanceClass;
    }
    if (input.Engine !== undefined && input.Engine !== null) {
        entries["Engine"] = input.Engine;
    }
    if (input.MasterUsername !== undefined && input.MasterUsername !== null) {
        entries["MasterUsername"] = input.MasterUsername;
    }
    if (input.MasterUserPassword !== undefined && input.MasterUserPassword !== null) {
        entries["MasterUserPassword"] = input.MasterUserPassword;
    }
    if (input.DBSecurityGroups !== undefined && input.DBSecurityGroups !== null) {
        var memberEntries = serializeAws_queryDBSecurityGroupNameList(input.DBSecurityGroups, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "DBSecurityGroups." + key;
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
    if (input.AvailabilityZone !== undefined && input.AvailabilityZone !== null) {
        entries["AvailabilityZone"] = input.AvailabilityZone;
    }
    if (input.DBSubnetGroupName !== undefined && input.DBSubnetGroupName !== null) {
        entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
    }
    if (input.PreferredMaintenanceWindow !== undefined && input.PreferredMaintenanceWindow !== null) {
        entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
    }
    if (input.DBParameterGroupName !== undefined && input.DBParameterGroupName !== null) {
        entries["DBParameterGroupName"] = input.DBParameterGroupName;
    }
    if (input.BackupRetentionPeriod !== undefined && input.BackupRetentionPeriod !== null) {
        entries["BackupRetentionPeriod"] = input.BackupRetentionPeriod;
    }
    if (input.PreferredBackupWindow !== undefined && input.PreferredBackupWindow !== null) {
        entries["PreferredBackupWindow"] = input.PreferredBackupWindow;
    }
    if (input.Port !== undefined && input.Port !== null) {
        entries["Port"] = input.Port;
    }
    if (input.MultiAZ !== undefined && input.MultiAZ !== null) {
        entries["MultiAZ"] = input.MultiAZ;
    }
    if (input.EngineVersion !== undefined && input.EngineVersion !== null) {
        entries["EngineVersion"] = input.EngineVersion;
    }
    if (input.AutoMinorVersionUpgrade !== undefined && input.AutoMinorVersionUpgrade !== null) {
        entries["AutoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
    }
    if (input.LicenseModel !== undefined && input.LicenseModel !== null) {
        entries["LicenseModel"] = input.LicenseModel;
    }
    if (input.Iops !== undefined && input.Iops !== null) {
        entries["Iops"] = input.Iops;
    }
    if (input.OptionGroupName !== undefined && input.OptionGroupName !== null) {
        entries["OptionGroupName"] = input.OptionGroupName;
    }
    if (input.CharacterSetName !== undefined && input.CharacterSetName !== null) {
        entries["CharacterSetName"] = input.CharacterSetName;
    }
    if (input.PubliclyAccessible !== undefined && input.PubliclyAccessible !== null) {
        entries["PubliclyAccessible"] = input.PubliclyAccessible;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    if (input.DBClusterIdentifier !== undefined && input.DBClusterIdentifier !== null) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    if (input.StorageType !== undefined && input.StorageType !== null) {
        entries["StorageType"] = input.StorageType;
    }
    if (input.TdeCredentialArn !== undefined && input.TdeCredentialArn !== null) {
        entries["TdeCredentialArn"] = input.TdeCredentialArn;
    }
    if (input.TdeCredentialPassword !== undefined && input.TdeCredentialPassword !== null) {
        entries["TdeCredentialPassword"] = input.TdeCredentialPassword;
    }
    if (input.StorageEncrypted !== undefined && input.StorageEncrypted !== null) {
        entries["StorageEncrypted"] = input.StorageEncrypted;
    }
    if (input.KmsKeyId !== undefined && input.KmsKeyId !== null) {
        entries["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.Domain !== undefined && input.Domain !== null) {
        entries["Domain"] = input.Domain;
    }
    if (input.CopyTagsToSnapshot !== undefined && input.CopyTagsToSnapshot !== null) {
        entries["CopyTagsToSnapshot"] = input.CopyTagsToSnapshot;
    }
    if (input.MonitoringInterval !== undefined && input.MonitoringInterval !== null) {
        entries["MonitoringInterval"] = input.MonitoringInterval;
    }
    if (input.MonitoringRoleArn !== undefined && input.MonitoringRoleArn !== null) {
        entries["MonitoringRoleArn"] = input.MonitoringRoleArn;
    }
    if (input.DomainIAMRoleName !== undefined && input.DomainIAMRoleName !== null) {
        entries["DomainIAMRoleName"] = input.DomainIAMRoleName;
    }
    if (input.PromotionTier !== undefined && input.PromotionTier !== null) {
        entries["PromotionTier"] = input.PromotionTier;
    }
    if (input.Timezone !== undefined && input.Timezone !== null) {
        entries["Timezone"] = input.Timezone;
    }
    if (input.EnableIAMDatabaseAuthentication !== undefined && input.EnableIAMDatabaseAuthentication !== null) {
        entries["EnableIAMDatabaseAuthentication"] = input.EnableIAMDatabaseAuthentication;
    }
    if (input.EnablePerformanceInsights !== undefined && input.EnablePerformanceInsights !== null) {
        entries["EnablePerformanceInsights"] = input.EnablePerformanceInsights;
    }
    if (input.PerformanceInsightsKMSKeyId !== undefined && input.PerformanceInsightsKMSKeyId !== null) {
        entries["PerformanceInsightsKMSKeyId"] = input.PerformanceInsightsKMSKeyId;
    }
    if (input.EnableCloudwatchLogsExports !== undefined && input.EnableCloudwatchLogsExports !== null) {
        var memberEntries = serializeAws_queryLogTypeList(input.EnableCloudwatchLogsExports, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "EnableCloudwatchLogsExports." + key;
            entries[loc] = value;
        });
    }
    if (input.DeletionProtection !== undefined && input.DeletionProtection !== null) {
        entries["DeletionProtection"] = input.DeletionProtection;
    }
    return entries;
};
var serializeAws_queryCreateDBParameterGroupMessage = function (input, context) {
    var entries = {};
    if (input.DBParameterGroupName !== undefined && input.DBParameterGroupName !== null) {
        entries["DBParameterGroupName"] = input.DBParameterGroupName;
    }
    if (input.DBParameterGroupFamily !== undefined && input.DBParameterGroupFamily !== null) {
        entries["DBParameterGroupFamily"] = input.DBParameterGroupFamily;
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
var serializeAws_queryCreateDBSubnetGroupMessage = function (input, context) {
    var entries = {};
    if (input.DBSubnetGroupName !== undefined && input.DBSubnetGroupName !== null) {
        entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
    }
    if (input.DBSubnetGroupDescription !== undefined && input.DBSubnetGroupDescription !== null) {
        entries["DBSubnetGroupDescription"] = input.DBSubnetGroupDescription;
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
    if (input.EventCategories !== undefined && input.EventCategories !== null) {
        var memberEntries = serializeAws_queryEventCategoriesList(input.EventCategories, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "EventCategories." + key;
            entries[loc] = value;
        });
    }
    if (input.SourceIds !== undefined && input.SourceIds !== null) {
        var memberEntries = serializeAws_querySourceIdsList(input.SourceIds, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "SourceIds." + key;
            entries[loc] = value;
        });
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
var serializeAws_queryDBSecurityGroupNameList = function (input, context) {
    var e_3, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_3 = __values(input), input_3_1 = input_3.next(); !input_3_1.done; input_3_1 = input_3.next()) {
            var entry = input_3_1.value;
            if (entry === null) {
                continue;
            }
            entries["DBSecurityGroupName." + counter] = entry;
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
var serializeAws_queryDeleteDBClusterEndpointMessage = function (input, context) {
    var entries = {};
    if (input.DBClusterEndpointIdentifier !== undefined && input.DBClusterEndpointIdentifier !== null) {
        entries["DBClusterEndpointIdentifier"] = input.DBClusterEndpointIdentifier;
    }
    return entries;
};
var serializeAws_queryDeleteDBClusterMessage = function (input, context) {
    var entries = {};
    if (input.DBClusterIdentifier !== undefined && input.DBClusterIdentifier !== null) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    if (input.SkipFinalSnapshot !== undefined && input.SkipFinalSnapshot !== null) {
        entries["SkipFinalSnapshot"] = input.SkipFinalSnapshot;
    }
    if (input.FinalDBSnapshotIdentifier !== undefined && input.FinalDBSnapshotIdentifier !== null) {
        entries["FinalDBSnapshotIdentifier"] = input.FinalDBSnapshotIdentifier;
    }
    return entries;
};
var serializeAws_queryDeleteDBClusterParameterGroupMessage = function (input, context) {
    var entries = {};
    if (input.DBClusterParameterGroupName !== undefined && input.DBClusterParameterGroupName !== null) {
        entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
    }
    return entries;
};
var serializeAws_queryDeleteDBClusterSnapshotMessage = function (input, context) {
    var entries = {};
    if (input.DBClusterSnapshotIdentifier !== undefined && input.DBClusterSnapshotIdentifier !== null) {
        entries["DBClusterSnapshotIdentifier"] = input.DBClusterSnapshotIdentifier;
    }
    return entries;
};
var serializeAws_queryDeleteDBInstanceMessage = function (input, context) {
    var entries = {};
    if (input.DBInstanceIdentifier !== undefined && input.DBInstanceIdentifier !== null) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
    }
    if (input.SkipFinalSnapshot !== undefined && input.SkipFinalSnapshot !== null) {
        entries["SkipFinalSnapshot"] = input.SkipFinalSnapshot;
    }
    if (input.FinalDBSnapshotIdentifier !== undefined && input.FinalDBSnapshotIdentifier !== null) {
        entries["FinalDBSnapshotIdentifier"] = input.FinalDBSnapshotIdentifier;
    }
    return entries;
};
var serializeAws_queryDeleteDBParameterGroupMessage = function (input, context) {
    var entries = {};
    if (input.DBParameterGroupName !== undefined && input.DBParameterGroupName !== null) {
        entries["DBParameterGroupName"] = input.DBParameterGroupName;
    }
    return entries;
};
var serializeAws_queryDeleteDBSubnetGroupMessage = function (input, context) {
    var entries = {};
    if (input.DBSubnetGroupName !== undefined && input.DBSubnetGroupName !== null) {
        entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
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
var serializeAws_queryDescribeDBClusterEndpointsMessage = function (input, context) {
    var entries = {};
    if (input.DBClusterIdentifier !== undefined && input.DBClusterIdentifier !== null) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    if (input.DBClusterEndpointIdentifier !== undefined && input.DBClusterEndpointIdentifier !== null) {
        entries["DBClusterEndpointIdentifier"] = input.DBClusterEndpointIdentifier;
    }
    if (input.Filters !== undefined && input.Filters !== null) {
        var memberEntries = serializeAws_queryFilterList(input.Filters, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Filters." + key;
            entries[loc] = value;
        });
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    return entries;
};
var serializeAws_queryDescribeDBClusterParameterGroupsMessage = function (input, context) {
    var entries = {};
    if (input.DBClusterParameterGroupName !== undefined && input.DBClusterParameterGroupName !== null) {
        entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
    }
    if (input.Filters !== undefined && input.Filters !== null) {
        var memberEntries = serializeAws_queryFilterList(input.Filters, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Filters." + key;
            entries[loc] = value;
        });
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    return entries;
};
var serializeAws_queryDescribeDBClusterParametersMessage = function (input, context) {
    var entries = {};
    if (input.DBClusterParameterGroupName !== undefined && input.DBClusterParameterGroupName !== null) {
        entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
    }
    if (input.Source !== undefined && input.Source !== null) {
        entries["Source"] = input.Source;
    }
    if (input.Filters !== undefined && input.Filters !== null) {
        var memberEntries = serializeAws_queryFilterList(input.Filters, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Filters." + key;
            entries[loc] = value;
        });
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    return entries;
};
var serializeAws_queryDescribeDBClustersMessage = function (input, context) {
    var entries = {};
    if (input.DBClusterIdentifier !== undefined && input.DBClusterIdentifier !== null) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    if (input.Filters !== undefined && input.Filters !== null) {
        var memberEntries = serializeAws_queryFilterList(input.Filters, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Filters." + key;
            entries[loc] = value;
        });
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    return entries;
};
var serializeAws_queryDescribeDBClusterSnapshotAttributesMessage = function (input, context) {
    var entries = {};
    if (input.DBClusterSnapshotIdentifier !== undefined && input.DBClusterSnapshotIdentifier !== null) {
        entries["DBClusterSnapshotIdentifier"] = input.DBClusterSnapshotIdentifier;
    }
    return entries;
};
var serializeAws_queryDescribeDBClusterSnapshotsMessage = function (input, context) {
    var entries = {};
    if (input.DBClusterIdentifier !== undefined && input.DBClusterIdentifier !== null) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    if (input.DBClusterSnapshotIdentifier !== undefined && input.DBClusterSnapshotIdentifier !== null) {
        entries["DBClusterSnapshotIdentifier"] = input.DBClusterSnapshotIdentifier;
    }
    if (input.SnapshotType !== undefined && input.SnapshotType !== null) {
        entries["SnapshotType"] = input.SnapshotType;
    }
    if (input.Filters !== undefined && input.Filters !== null) {
        var memberEntries = serializeAws_queryFilterList(input.Filters, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Filters." + key;
            entries[loc] = value;
        });
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.IncludeShared !== undefined && input.IncludeShared !== null) {
        entries["IncludeShared"] = input.IncludeShared;
    }
    if (input.IncludePublic !== undefined && input.IncludePublic !== null) {
        entries["IncludePublic"] = input.IncludePublic;
    }
    return entries;
};
var serializeAws_queryDescribeDBEngineVersionsMessage = function (input, context) {
    var entries = {};
    if (input.Engine !== undefined && input.Engine !== null) {
        entries["Engine"] = input.Engine;
    }
    if (input.EngineVersion !== undefined && input.EngineVersion !== null) {
        entries["EngineVersion"] = input.EngineVersion;
    }
    if (input.DBParameterGroupFamily !== undefined && input.DBParameterGroupFamily !== null) {
        entries["DBParameterGroupFamily"] = input.DBParameterGroupFamily;
    }
    if (input.Filters !== undefined && input.Filters !== null) {
        var memberEntries = serializeAws_queryFilterList(input.Filters, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Filters." + key;
            entries[loc] = value;
        });
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.DefaultOnly !== undefined && input.DefaultOnly !== null) {
        entries["DefaultOnly"] = input.DefaultOnly;
    }
    if (input.ListSupportedCharacterSets !== undefined && input.ListSupportedCharacterSets !== null) {
        entries["ListSupportedCharacterSets"] = input.ListSupportedCharacterSets;
    }
    if (input.ListSupportedTimezones !== undefined && input.ListSupportedTimezones !== null) {
        entries["ListSupportedTimezones"] = input.ListSupportedTimezones;
    }
    return entries;
};
var serializeAws_queryDescribeDBInstancesMessage = function (input, context) {
    var entries = {};
    if (input.DBInstanceIdentifier !== undefined && input.DBInstanceIdentifier !== null) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
    }
    if (input.Filters !== undefined && input.Filters !== null) {
        var memberEntries = serializeAws_queryFilterList(input.Filters, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Filters." + key;
            entries[loc] = value;
        });
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    return entries;
};
var serializeAws_queryDescribeDBParameterGroupsMessage = function (input, context) {
    var entries = {};
    if (input.DBParameterGroupName !== undefined && input.DBParameterGroupName !== null) {
        entries["DBParameterGroupName"] = input.DBParameterGroupName;
    }
    if (input.Filters !== undefined && input.Filters !== null) {
        var memberEntries = serializeAws_queryFilterList(input.Filters, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Filters." + key;
            entries[loc] = value;
        });
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    return entries;
};
var serializeAws_queryDescribeDBParametersMessage = function (input, context) {
    var entries = {};
    if (input.DBParameterGroupName !== undefined && input.DBParameterGroupName !== null) {
        entries["DBParameterGroupName"] = input.DBParameterGroupName;
    }
    if (input.Source !== undefined && input.Source !== null) {
        entries["Source"] = input.Source;
    }
    if (input.Filters !== undefined && input.Filters !== null) {
        var memberEntries = serializeAws_queryFilterList(input.Filters, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Filters." + key;
            entries[loc] = value;
        });
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    return entries;
};
var serializeAws_queryDescribeDBSubnetGroupsMessage = function (input, context) {
    var entries = {};
    if (input.DBSubnetGroupName !== undefined && input.DBSubnetGroupName !== null) {
        entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
    }
    if (input.Filters !== undefined && input.Filters !== null) {
        var memberEntries = serializeAws_queryFilterList(input.Filters, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Filters." + key;
            entries[loc] = value;
        });
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    return entries;
};
var serializeAws_queryDescribeEngineDefaultClusterParametersMessage = function (input, context) {
    var entries = {};
    if (input.DBParameterGroupFamily !== undefined && input.DBParameterGroupFamily !== null) {
        entries["DBParameterGroupFamily"] = input.DBParameterGroupFamily;
    }
    if (input.Filters !== undefined && input.Filters !== null) {
        var memberEntries = serializeAws_queryFilterList(input.Filters, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Filters." + key;
            entries[loc] = value;
        });
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    return entries;
};
var serializeAws_queryDescribeEngineDefaultParametersMessage = function (input, context) {
    var entries = {};
    if (input.DBParameterGroupFamily !== undefined && input.DBParameterGroupFamily !== null) {
        entries["DBParameterGroupFamily"] = input.DBParameterGroupFamily;
    }
    if (input.Filters !== undefined && input.Filters !== null) {
        var memberEntries = serializeAws_queryFilterList(input.Filters, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Filters." + key;
            entries[loc] = value;
        });
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
    if (input.Filters !== undefined && input.Filters !== null) {
        var memberEntries = serializeAws_queryFilterList(input.Filters, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Filters." + key;
            entries[loc] = value;
        });
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
    if (input.EventCategories !== undefined && input.EventCategories !== null) {
        var memberEntries = serializeAws_queryEventCategoriesList(input.EventCategories, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "EventCategories." + key;
            entries[loc] = value;
        });
    }
    if (input.Filters !== undefined && input.Filters !== null) {
        var memberEntries = serializeAws_queryFilterList(input.Filters, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Filters." + key;
            entries[loc] = value;
        });
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
    if (input.Filters !== undefined && input.Filters !== null) {
        var memberEntries = serializeAws_queryFilterList(input.Filters, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Filters." + key;
            entries[loc] = value;
        });
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    return entries;
};
var serializeAws_queryDescribeOrderableDBInstanceOptionsMessage = function (input, context) {
    var entries = {};
    if (input.Engine !== undefined && input.Engine !== null) {
        entries["Engine"] = input.Engine;
    }
    if (input.EngineVersion !== undefined && input.EngineVersion !== null) {
        entries["EngineVersion"] = input.EngineVersion;
    }
    if (input.DBInstanceClass !== undefined && input.DBInstanceClass !== null) {
        entries["DBInstanceClass"] = input.DBInstanceClass;
    }
    if (input.LicenseModel !== undefined && input.LicenseModel !== null) {
        entries["LicenseModel"] = input.LicenseModel;
    }
    if (input.Vpc !== undefined && input.Vpc !== null) {
        entries["Vpc"] = input.Vpc;
    }
    if (input.Filters !== undefined && input.Filters !== null) {
        var memberEntries = serializeAws_queryFilterList(input.Filters, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Filters." + key;
            entries[loc] = value;
        });
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    return entries;
};
var serializeAws_queryDescribePendingMaintenanceActionsMessage = function (input, context) {
    var entries = {};
    if (input.ResourceIdentifier !== undefined && input.ResourceIdentifier !== null) {
        entries["ResourceIdentifier"] = input.ResourceIdentifier;
    }
    if (input.Filters !== undefined && input.Filters !== null) {
        var memberEntries = serializeAws_queryFilterList(input.Filters, context);
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
var serializeAws_queryDescribeValidDBInstanceModificationsMessage = function (input, context) {
    var entries = {};
    if (input.DBInstanceIdentifier !== undefined && input.DBInstanceIdentifier !== null) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
    }
    return entries;
};
var serializeAws_queryEventCategoriesList = function (input, context) {
    var e_4, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_4 = __values(input), input_4_1 = input_4.next(); !input_4_1.done; input_4_1 = input_4.next()) {
            var entry = input_4_1.value;
            if (entry === null) {
                continue;
            }
            entries["EventCategory." + counter] = entry;
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
var serializeAws_queryFailoverDBClusterMessage = function (input, context) {
    var entries = {};
    if (input.DBClusterIdentifier !== undefined && input.DBClusterIdentifier !== null) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    if (input.TargetDBInstanceIdentifier !== undefined && input.TargetDBInstanceIdentifier !== null) {
        entries["TargetDBInstanceIdentifier"] = input.TargetDBInstanceIdentifier;
    }
    return entries;
};
var serializeAws_queryFilter = function (input, context) {
    var entries = {};
    if (input.Name !== undefined && input.Name !== null) {
        entries["Name"] = input.Name;
    }
    if (input.Values !== undefined && input.Values !== null) {
        var memberEntries = serializeAws_queryFilterValueList(input.Values, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Values." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryFilterList = function (input, context) {
    var e_5, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_5 = __values(input), input_5_1 = input_5.next(); !input_5_1.done; input_5_1 = input_5.next()) {
            var entry = input_5_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryFilter(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["Filter." + counter + "." + key] = value;
            });
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
var serializeAws_queryFilterValueList = function (input, context) {
    var e_6, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_6 = __values(input), input_6_1 = input_6.next(); !input_6_1.done; input_6_1 = input_6.next()) {
            var entry = input_6_1.value;
            if (entry === null) {
                continue;
            }
            entries["Value." + counter] = entry;
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
var serializeAws_queryKeyList = function (input, context) {
    var e_7, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_7 = __values(input), input_7_1 = input_7.next(); !input_7_1.done; input_7_1 = input_7.next()) {
            var entry = input_7_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
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
var serializeAws_queryListTagsForResourceMessage = function (input, context) {
    var entries = {};
    if (input.ResourceName !== undefined && input.ResourceName !== null) {
        entries["ResourceName"] = input.ResourceName;
    }
    if (input.Filters !== undefined && input.Filters !== null) {
        var memberEntries = serializeAws_queryFilterList(input.Filters, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Filters." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryLogTypeList = function (input, context) {
    var e_8, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_8 = __values(input), input_8_1 = input_8.next(); !input_8_1.done; input_8_1 = input_8.next()) {
            var entry = input_8_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
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
var serializeAws_queryModifyDBClusterEndpointMessage = function (input, context) {
    var entries = {};
    if (input.DBClusterEndpointIdentifier !== undefined && input.DBClusterEndpointIdentifier !== null) {
        entries["DBClusterEndpointIdentifier"] = input.DBClusterEndpointIdentifier;
    }
    if (input.EndpointType !== undefined && input.EndpointType !== null) {
        entries["EndpointType"] = input.EndpointType;
    }
    if (input.StaticMembers !== undefined && input.StaticMembers !== null) {
        var memberEntries = serializeAws_queryStringList(input.StaticMembers, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "StaticMembers." + key;
            entries[loc] = value;
        });
    }
    if (input.ExcludedMembers !== undefined && input.ExcludedMembers !== null) {
        var memberEntries = serializeAws_queryStringList(input.ExcludedMembers, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ExcludedMembers." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryModifyDBClusterMessage = function (input, context) {
    var entries = {};
    if (input.DBClusterIdentifier !== undefined && input.DBClusterIdentifier !== null) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    if (input.NewDBClusterIdentifier !== undefined && input.NewDBClusterIdentifier !== null) {
        entries["NewDBClusterIdentifier"] = input.NewDBClusterIdentifier;
    }
    if (input.ApplyImmediately !== undefined && input.ApplyImmediately !== null) {
        entries["ApplyImmediately"] = input.ApplyImmediately;
    }
    if (input.BackupRetentionPeriod !== undefined && input.BackupRetentionPeriod !== null) {
        entries["BackupRetentionPeriod"] = input.BackupRetentionPeriod;
    }
    if (input.DBClusterParameterGroupName !== undefined && input.DBClusterParameterGroupName !== null) {
        entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
    }
    if (input.VpcSecurityGroupIds !== undefined && input.VpcSecurityGroupIds !== null) {
        var memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "VpcSecurityGroupIds." + key;
            entries[loc] = value;
        });
    }
    if (input.Port !== undefined && input.Port !== null) {
        entries["Port"] = input.Port;
    }
    if (input.MasterUserPassword !== undefined && input.MasterUserPassword !== null) {
        entries["MasterUserPassword"] = input.MasterUserPassword;
    }
    if (input.OptionGroupName !== undefined && input.OptionGroupName !== null) {
        entries["OptionGroupName"] = input.OptionGroupName;
    }
    if (input.PreferredBackupWindow !== undefined && input.PreferredBackupWindow !== null) {
        entries["PreferredBackupWindow"] = input.PreferredBackupWindow;
    }
    if (input.PreferredMaintenanceWindow !== undefined && input.PreferredMaintenanceWindow !== null) {
        entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
    }
    if (input.EnableIAMDatabaseAuthentication !== undefined && input.EnableIAMDatabaseAuthentication !== null) {
        entries["EnableIAMDatabaseAuthentication"] = input.EnableIAMDatabaseAuthentication;
    }
    if (input.CloudwatchLogsExportConfiguration !== undefined && input.CloudwatchLogsExportConfiguration !== null) {
        var memberEntries = serializeAws_queryCloudwatchLogsExportConfiguration(input.CloudwatchLogsExportConfiguration, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "CloudwatchLogsExportConfiguration." + key;
            entries[loc] = value;
        });
    }
    if (input.EngineVersion !== undefined && input.EngineVersion !== null) {
        entries["EngineVersion"] = input.EngineVersion;
    }
    if (input.DeletionProtection !== undefined && input.DeletionProtection !== null) {
        entries["DeletionProtection"] = input.DeletionProtection;
    }
    if (input.CopyTagsToSnapshot !== undefined && input.CopyTagsToSnapshot !== null) {
        entries["CopyTagsToSnapshot"] = input.CopyTagsToSnapshot;
    }
    return entries;
};
var serializeAws_queryModifyDBClusterParameterGroupMessage = function (input, context) {
    var entries = {};
    if (input.DBClusterParameterGroupName !== undefined && input.DBClusterParameterGroupName !== null) {
        entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
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
var serializeAws_queryModifyDBClusterSnapshotAttributeMessage = function (input, context) {
    var entries = {};
    if (input.DBClusterSnapshotIdentifier !== undefined && input.DBClusterSnapshotIdentifier !== null) {
        entries["DBClusterSnapshotIdentifier"] = input.DBClusterSnapshotIdentifier;
    }
    if (input.AttributeName !== undefined && input.AttributeName !== null) {
        entries["AttributeName"] = input.AttributeName;
    }
    if (input.ValuesToAdd !== undefined && input.ValuesToAdd !== null) {
        var memberEntries = serializeAws_queryAttributeValueList(input.ValuesToAdd, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ValuesToAdd." + key;
            entries[loc] = value;
        });
    }
    if (input.ValuesToRemove !== undefined && input.ValuesToRemove !== null) {
        var memberEntries = serializeAws_queryAttributeValueList(input.ValuesToRemove, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ValuesToRemove." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryModifyDBInstanceMessage = function (input, context) {
    var entries = {};
    if (input.DBInstanceIdentifier !== undefined && input.DBInstanceIdentifier !== null) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
    }
    if (input.AllocatedStorage !== undefined && input.AllocatedStorage !== null) {
        entries["AllocatedStorage"] = input.AllocatedStorage;
    }
    if (input.DBInstanceClass !== undefined && input.DBInstanceClass !== null) {
        entries["DBInstanceClass"] = input.DBInstanceClass;
    }
    if (input.DBSubnetGroupName !== undefined && input.DBSubnetGroupName !== null) {
        entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
    }
    if (input.DBSecurityGroups !== undefined && input.DBSecurityGroups !== null) {
        var memberEntries = serializeAws_queryDBSecurityGroupNameList(input.DBSecurityGroups, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "DBSecurityGroups." + key;
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
    if (input.ApplyImmediately !== undefined && input.ApplyImmediately !== null) {
        entries["ApplyImmediately"] = input.ApplyImmediately;
    }
    if (input.MasterUserPassword !== undefined && input.MasterUserPassword !== null) {
        entries["MasterUserPassword"] = input.MasterUserPassword;
    }
    if (input.DBParameterGroupName !== undefined && input.DBParameterGroupName !== null) {
        entries["DBParameterGroupName"] = input.DBParameterGroupName;
    }
    if (input.BackupRetentionPeriod !== undefined && input.BackupRetentionPeriod !== null) {
        entries["BackupRetentionPeriod"] = input.BackupRetentionPeriod;
    }
    if (input.PreferredBackupWindow !== undefined && input.PreferredBackupWindow !== null) {
        entries["PreferredBackupWindow"] = input.PreferredBackupWindow;
    }
    if (input.PreferredMaintenanceWindow !== undefined && input.PreferredMaintenanceWindow !== null) {
        entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
    }
    if (input.MultiAZ !== undefined && input.MultiAZ !== null) {
        entries["MultiAZ"] = input.MultiAZ;
    }
    if (input.EngineVersion !== undefined && input.EngineVersion !== null) {
        entries["EngineVersion"] = input.EngineVersion;
    }
    if (input.AllowMajorVersionUpgrade !== undefined && input.AllowMajorVersionUpgrade !== null) {
        entries["AllowMajorVersionUpgrade"] = input.AllowMajorVersionUpgrade;
    }
    if (input.AutoMinorVersionUpgrade !== undefined && input.AutoMinorVersionUpgrade !== null) {
        entries["AutoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
    }
    if (input.LicenseModel !== undefined && input.LicenseModel !== null) {
        entries["LicenseModel"] = input.LicenseModel;
    }
    if (input.Iops !== undefined && input.Iops !== null) {
        entries["Iops"] = input.Iops;
    }
    if (input.OptionGroupName !== undefined && input.OptionGroupName !== null) {
        entries["OptionGroupName"] = input.OptionGroupName;
    }
    if (input.NewDBInstanceIdentifier !== undefined && input.NewDBInstanceIdentifier !== null) {
        entries["NewDBInstanceIdentifier"] = input.NewDBInstanceIdentifier;
    }
    if (input.StorageType !== undefined && input.StorageType !== null) {
        entries["StorageType"] = input.StorageType;
    }
    if (input.TdeCredentialArn !== undefined && input.TdeCredentialArn !== null) {
        entries["TdeCredentialArn"] = input.TdeCredentialArn;
    }
    if (input.TdeCredentialPassword !== undefined && input.TdeCredentialPassword !== null) {
        entries["TdeCredentialPassword"] = input.TdeCredentialPassword;
    }
    if (input.CACertificateIdentifier !== undefined && input.CACertificateIdentifier !== null) {
        entries["CACertificateIdentifier"] = input.CACertificateIdentifier;
    }
    if (input.Domain !== undefined && input.Domain !== null) {
        entries["Domain"] = input.Domain;
    }
    if (input.CopyTagsToSnapshot !== undefined && input.CopyTagsToSnapshot !== null) {
        entries["CopyTagsToSnapshot"] = input.CopyTagsToSnapshot;
    }
    if (input.MonitoringInterval !== undefined && input.MonitoringInterval !== null) {
        entries["MonitoringInterval"] = input.MonitoringInterval;
    }
    if (input.DBPortNumber !== undefined && input.DBPortNumber !== null) {
        entries["DBPortNumber"] = input.DBPortNumber;
    }
    if (input.PubliclyAccessible !== undefined && input.PubliclyAccessible !== null) {
        entries["PubliclyAccessible"] = input.PubliclyAccessible;
    }
    if (input.MonitoringRoleArn !== undefined && input.MonitoringRoleArn !== null) {
        entries["MonitoringRoleArn"] = input.MonitoringRoleArn;
    }
    if (input.DomainIAMRoleName !== undefined && input.DomainIAMRoleName !== null) {
        entries["DomainIAMRoleName"] = input.DomainIAMRoleName;
    }
    if (input.PromotionTier !== undefined && input.PromotionTier !== null) {
        entries["PromotionTier"] = input.PromotionTier;
    }
    if (input.EnableIAMDatabaseAuthentication !== undefined && input.EnableIAMDatabaseAuthentication !== null) {
        entries["EnableIAMDatabaseAuthentication"] = input.EnableIAMDatabaseAuthentication;
    }
    if (input.EnablePerformanceInsights !== undefined && input.EnablePerformanceInsights !== null) {
        entries["EnablePerformanceInsights"] = input.EnablePerformanceInsights;
    }
    if (input.PerformanceInsightsKMSKeyId !== undefined && input.PerformanceInsightsKMSKeyId !== null) {
        entries["PerformanceInsightsKMSKeyId"] = input.PerformanceInsightsKMSKeyId;
    }
    if (input.CloudwatchLogsExportConfiguration !== undefined && input.CloudwatchLogsExportConfiguration !== null) {
        var memberEntries = serializeAws_queryCloudwatchLogsExportConfiguration(input.CloudwatchLogsExportConfiguration, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "CloudwatchLogsExportConfiguration." + key;
            entries[loc] = value;
        });
    }
    if (input.DeletionProtection !== undefined && input.DeletionProtection !== null) {
        entries["DeletionProtection"] = input.DeletionProtection;
    }
    return entries;
};
var serializeAws_queryModifyDBParameterGroupMessage = function (input, context) {
    var entries = {};
    if (input.DBParameterGroupName !== undefined && input.DBParameterGroupName !== null) {
        entries["DBParameterGroupName"] = input.DBParameterGroupName;
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
var serializeAws_queryModifyDBSubnetGroupMessage = function (input, context) {
    var entries = {};
    if (input.DBSubnetGroupName !== undefined && input.DBSubnetGroupName !== null) {
        entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
    }
    if (input.DBSubnetGroupDescription !== undefined && input.DBSubnetGroupDescription !== null) {
        entries["DBSubnetGroupDescription"] = input.DBSubnetGroupDescription;
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
    if (input.EventCategories !== undefined && input.EventCategories !== null) {
        var memberEntries = serializeAws_queryEventCategoriesList(input.EventCategories, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "EventCategories." + key;
            entries[loc] = value;
        });
    }
    if (input.Enabled !== undefined && input.Enabled !== null) {
        entries["Enabled"] = input.Enabled;
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
    if (input.ApplyType !== undefined && input.ApplyType !== null) {
        entries["ApplyType"] = input.ApplyType;
    }
    if (input.DataType !== undefined && input.DataType !== null) {
        entries["DataType"] = input.DataType;
    }
    if (input.AllowedValues !== undefined && input.AllowedValues !== null) {
        entries["AllowedValues"] = input.AllowedValues;
    }
    if (input.IsModifiable !== undefined && input.IsModifiable !== null) {
        entries["IsModifiable"] = input.IsModifiable;
    }
    if (input.MinimumEngineVersion !== undefined && input.MinimumEngineVersion !== null) {
        entries["MinimumEngineVersion"] = input.MinimumEngineVersion;
    }
    if (input.ApplyMethod !== undefined && input.ApplyMethod !== null) {
        entries["ApplyMethod"] = input.ApplyMethod;
    }
    return entries;
};
var serializeAws_queryParametersList = function (input, context) {
    var e_9, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_9 = __values(input), input_9_1 = input_9.next(); !input_9_1.done; input_9_1 = input_9.next()) {
            var entry = input_9_1.value;
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
    catch (e_9_1) { e_9 = { error: e_9_1 }; }
    finally {
        try {
            if (input_9_1 && !input_9_1.done && (_a = input_9.return)) _a.call(input_9);
        }
        finally { if (e_9) throw e_9.error; }
    }
    return entries;
};
var serializeAws_queryPromoteReadReplicaDBClusterMessage = function (input, context) {
    var entries = {};
    if (input.DBClusterIdentifier !== undefined && input.DBClusterIdentifier !== null) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    return entries;
};
var serializeAws_queryRebootDBInstanceMessage = function (input, context) {
    var entries = {};
    if (input.DBInstanceIdentifier !== undefined && input.DBInstanceIdentifier !== null) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
    }
    if (input.ForceFailover !== undefined && input.ForceFailover !== null) {
        entries["ForceFailover"] = input.ForceFailover;
    }
    return entries;
};
var serializeAws_queryRemoveRoleFromDBClusterMessage = function (input, context) {
    var entries = {};
    if (input.DBClusterIdentifier !== undefined && input.DBClusterIdentifier !== null) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    if (input.RoleArn !== undefined && input.RoleArn !== null) {
        entries["RoleArn"] = input.RoleArn;
    }
    if (input.FeatureName !== undefined && input.FeatureName !== null) {
        entries["FeatureName"] = input.FeatureName;
    }
    return entries;
};
var serializeAws_queryRemoveSourceIdentifierFromSubscriptionMessage = function (input, context) {
    var entries = {};
    if (input.SubscriptionName !== undefined && input.SubscriptionName !== null) {
        entries["SubscriptionName"] = input.SubscriptionName;
    }
    if (input.SourceIdentifier !== undefined && input.SourceIdentifier !== null) {
        entries["SourceIdentifier"] = input.SourceIdentifier;
    }
    return entries;
};
var serializeAws_queryRemoveTagsFromResourceMessage = function (input, context) {
    var entries = {};
    if (input.ResourceName !== undefined && input.ResourceName !== null) {
        entries["ResourceName"] = input.ResourceName;
    }
    if (input.TagKeys !== undefined && input.TagKeys !== null) {
        var memberEntries = serializeAws_queryKeyList(input.TagKeys, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TagKeys." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryResetDBClusterParameterGroupMessage = function (input, context) {
    var entries = {};
    if (input.DBClusterParameterGroupName !== undefined && input.DBClusterParameterGroupName !== null) {
        entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
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
var serializeAws_queryResetDBParameterGroupMessage = function (input, context) {
    var entries = {};
    if (input.DBParameterGroupName !== undefined && input.DBParameterGroupName !== null) {
        entries["DBParameterGroupName"] = input.DBParameterGroupName;
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
var serializeAws_queryRestoreDBClusterFromSnapshotMessage = function (input, context) {
    var entries = {};
    if (input.AvailabilityZones !== undefined && input.AvailabilityZones !== null) {
        var memberEntries = serializeAws_queryAvailabilityZones(input.AvailabilityZones, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "AvailabilityZones." + key;
            entries[loc] = value;
        });
    }
    if (input.DBClusterIdentifier !== undefined && input.DBClusterIdentifier !== null) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    if (input.SnapshotIdentifier !== undefined && input.SnapshotIdentifier !== null) {
        entries["SnapshotIdentifier"] = input.SnapshotIdentifier;
    }
    if (input.Engine !== undefined && input.Engine !== null) {
        entries["Engine"] = input.Engine;
    }
    if (input.EngineVersion !== undefined && input.EngineVersion !== null) {
        entries["EngineVersion"] = input.EngineVersion;
    }
    if (input.Port !== undefined && input.Port !== null) {
        entries["Port"] = input.Port;
    }
    if (input.DBSubnetGroupName !== undefined && input.DBSubnetGroupName !== null) {
        entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
    }
    if (input.DatabaseName !== undefined && input.DatabaseName !== null) {
        entries["DatabaseName"] = input.DatabaseName;
    }
    if (input.OptionGroupName !== undefined && input.OptionGroupName !== null) {
        entries["OptionGroupName"] = input.OptionGroupName;
    }
    if (input.VpcSecurityGroupIds !== undefined && input.VpcSecurityGroupIds !== null) {
        var memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "VpcSecurityGroupIds." + key;
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
    if (input.KmsKeyId !== undefined && input.KmsKeyId !== null) {
        entries["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.EnableIAMDatabaseAuthentication !== undefined && input.EnableIAMDatabaseAuthentication !== null) {
        entries["EnableIAMDatabaseAuthentication"] = input.EnableIAMDatabaseAuthentication;
    }
    if (input.EnableCloudwatchLogsExports !== undefined && input.EnableCloudwatchLogsExports !== null) {
        var memberEntries = serializeAws_queryLogTypeList(input.EnableCloudwatchLogsExports, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "EnableCloudwatchLogsExports." + key;
            entries[loc] = value;
        });
    }
    if (input.DBClusterParameterGroupName !== undefined && input.DBClusterParameterGroupName !== null) {
        entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
    }
    if (input.DeletionProtection !== undefined && input.DeletionProtection !== null) {
        entries["DeletionProtection"] = input.DeletionProtection;
    }
    if (input.CopyTagsToSnapshot !== undefined && input.CopyTagsToSnapshot !== null) {
        entries["CopyTagsToSnapshot"] = input.CopyTagsToSnapshot;
    }
    return entries;
};
var serializeAws_queryRestoreDBClusterToPointInTimeMessage = function (input, context) {
    var entries = {};
    if (input.DBClusterIdentifier !== undefined && input.DBClusterIdentifier !== null) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    if (input.RestoreType !== undefined && input.RestoreType !== null) {
        entries["RestoreType"] = input.RestoreType;
    }
    if (input.SourceDBClusterIdentifier !== undefined && input.SourceDBClusterIdentifier !== null) {
        entries["SourceDBClusterIdentifier"] = input.SourceDBClusterIdentifier;
    }
    if (input.RestoreToTime !== undefined && input.RestoreToTime !== null) {
        entries["RestoreToTime"] = input.RestoreToTime.toISOString().split(".")[0] + "Z";
    }
    if (input.UseLatestRestorableTime !== undefined && input.UseLatestRestorableTime !== null) {
        entries["UseLatestRestorableTime"] = input.UseLatestRestorableTime;
    }
    if (input.Port !== undefined && input.Port !== null) {
        entries["Port"] = input.Port;
    }
    if (input.DBSubnetGroupName !== undefined && input.DBSubnetGroupName !== null) {
        entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
    }
    if (input.OptionGroupName !== undefined && input.OptionGroupName !== null) {
        entries["OptionGroupName"] = input.OptionGroupName;
    }
    if (input.VpcSecurityGroupIds !== undefined && input.VpcSecurityGroupIds !== null) {
        var memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "VpcSecurityGroupIds." + key;
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
    if (input.KmsKeyId !== undefined && input.KmsKeyId !== null) {
        entries["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.EnableIAMDatabaseAuthentication !== undefined && input.EnableIAMDatabaseAuthentication !== null) {
        entries["EnableIAMDatabaseAuthentication"] = input.EnableIAMDatabaseAuthentication;
    }
    if (input.EnableCloudwatchLogsExports !== undefined && input.EnableCloudwatchLogsExports !== null) {
        var memberEntries = serializeAws_queryLogTypeList(input.EnableCloudwatchLogsExports, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "EnableCloudwatchLogsExports." + key;
            entries[loc] = value;
        });
    }
    if (input.DBClusterParameterGroupName !== undefined && input.DBClusterParameterGroupName !== null) {
        entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
    }
    if (input.DeletionProtection !== undefined && input.DeletionProtection !== null) {
        entries["DeletionProtection"] = input.DeletionProtection;
    }
    return entries;
};
var serializeAws_querySourceIdsList = function (input, context) {
    var e_10, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_10 = __values(input), input_10_1 = input_10.next(); !input_10_1.done; input_10_1 = input_10.next()) {
            var entry = input_10_1.value;
            if (entry === null) {
                continue;
            }
            entries["SourceId." + counter] = entry;
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
var serializeAws_queryStartDBClusterMessage = function (input, context) {
    var entries = {};
    if (input.DBClusterIdentifier !== undefined && input.DBClusterIdentifier !== null) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    return entries;
};
var serializeAws_queryStopDBClusterMessage = function (input, context) {
    var entries = {};
    if (input.DBClusterIdentifier !== undefined && input.DBClusterIdentifier !== null) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    return entries;
};
var serializeAws_queryStringList = function (input, context) {
    var e_11, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_11 = __values(input), input_11_1 = input_11.next(); !input_11_1.done; input_11_1 = input_11.next()) {
            var entry = input_11_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
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
var serializeAws_querySubnetIdentifierList = function (input, context) {
    var e_12, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_12 = __values(input), input_12_1 = input_12.next(); !input_12_1.done; input_12_1 = input_12.next()) {
            var entry = input_12_1.value;
            if (entry === null) {
                continue;
            }
            entries["SubnetIdentifier." + counter] = entry;
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
var serializeAws_queryTagList = function (input, context) {
    var e_13, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_13 = __values(input), input_13_1 = input_13.next(); !input_13_1.done; input_13_1 = input_13.next()) {
            var entry = input_13_1.value;
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
    catch (e_13_1) { e_13 = { error: e_13_1 }; }
    finally {
        try {
            if (input_13_1 && !input_13_1.done && (_a = input_13.return)) _a.call(input_13);
        }
        finally { if (e_13) throw e_13.error; }
    }
    return entries;
};
var serializeAws_queryVpcSecurityGroupIdList = function (input, context) {
    var e_14, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_14 = __values(input), input_14_1 = input_14.next(); !input_14_1.done; input_14_1 = input_14.next()) {
            var entry = input_14_1.value;
            if (entry === null) {
                continue;
            }
            entries["VpcSecurityGroupId." + counter] = entry;
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
var deserializeAws_queryAddSourceIdentifierToSubscriptionResult = function (output, context) {
    var contents = {
        EventSubscription: undefined,
    };
    if (output["EventSubscription"] !== undefined) {
        contents.EventSubscription = deserializeAws_queryEventSubscription(output["EventSubscription"], context);
    }
    return contents;
};
var deserializeAws_queryApplyPendingMaintenanceActionResult = function (output, context) {
    var contents = {
        ResourcePendingMaintenanceActions: undefined,
    };
    if (output["ResourcePendingMaintenanceActions"] !== undefined) {
        contents.ResourcePendingMaintenanceActions = deserializeAws_queryResourcePendingMaintenanceActions(output["ResourcePendingMaintenanceActions"], context);
    }
    return contents;
};
var deserializeAws_queryAttributeValueList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
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
var deserializeAws_queryAvailabilityZone = function (output, context) {
    var contents = {
        Name: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
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
var deserializeAws_queryAvailabilityZones = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryCertificateNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryCharacterSet = function (output, context) {
    var contents = {
        CharacterSetName: undefined,
        CharacterSetDescription: undefined,
    };
    if (output["CharacterSetName"] !== undefined) {
        contents.CharacterSetName = output["CharacterSetName"];
    }
    if (output["CharacterSetDescription"] !== undefined) {
        contents.CharacterSetDescription = output["CharacterSetDescription"];
    }
    return contents;
};
var deserializeAws_queryCopyDBClusterParameterGroupResult = function (output, context) {
    var contents = {
        DBClusterParameterGroup: undefined,
    };
    if (output["DBClusterParameterGroup"] !== undefined) {
        contents.DBClusterParameterGroup = deserializeAws_queryDBClusterParameterGroup(output["DBClusterParameterGroup"], context);
    }
    return contents;
};
var deserializeAws_queryCopyDBClusterSnapshotResult = function (output, context) {
    var contents = {
        DBClusterSnapshot: undefined,
    };
    if (output["DBClusterSnapshot"] !== undefined) {
        contents.DBClusterSnapshot = deserializeAws_queryDBClusterSnapshot(output["DBClusterSnapshot"], context);
    }
    return contents;
};
var deserializeAws_queryCopyDBParameterGroupResult = function (output, context) {
    var contents = {
        DBParameterGroup: undefined,
    };
    if (output["DBParameterGroup"] !== undefined) {
        contents.DBParameterGroup = deserializeAws_queryDBParameterGroup(output["DBParameterGroup"], context);
    }
    return contents;
};
var deserializeAws_queryCreateDBClusterEndpointOutput = function (output, context) {
    var contents = {
        DBClusterEndpointIdentifier: undefined,
        DBClusterIdentifier: undefined,
        DBClusterEndpointResourceIdentifier: undefined,
        Endpoint: undefined,
        Status: undefined,
        EndpointType: undefined,
        CustomEndpointType: undefined,
        StaticMembers: undefined,
        ExcludedMembers: undefined,
        DBClusterEndpointArn: undefined,
    };
    if (output["DBClusterEndpointIdentifier"] !== undefined) {
        contents.DBClusterEndpointIdentifier = output["DBClusterEndpointIdentifier"];
    }
    if (output["DBClusterIdentifier"] !== undefined) {
        contents.DBClusterIdentifier = output["DBClusterIdentifier"];
    }
    if (output["DBClusterEndpointResourceIdentifier"] !== undefined) {
        contents.DBClusterEndpointResourceIdentifier = output["DBClusterEndpointResourceIdentifier"];
    }
    if (output["Endpoint"] !== undefined) {
        contents.Endpoint = output["Endpoint"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["EndpointType"] !== undefined) {
        contents.EndpointType = output["EndpointType"];
    }
    if (output["CustomEndpointType"] !== undefined) {
        contents.CustomEndpointType = output["CustomEndpointType"];
    }
    if (output.StaticMembers === "") {
        contents.StaticMembers = [];
    }
    if (output["StaticMembers"] !== undefined && output["StaticMembers"]["member"] !== undefined) {
        contents.StaticMembers = deserializeAws_queryStringList(__getArrayIfSingleItem(output["StaticMembers"]["member"]), context);
    }
    if (output.ExcludedMembers === "") {
        contents.ExcludedMembers = [];
    }
    if (output["ExcludedMembers"] !== undefined && output["ExcludedMembers"]["member"] !== undefined) {
        contents.ExcludedMembers = deserializeAws_queryStringList(__getArrayIfSingleItem(output["ExcludedMembers"]["member"]), context);
    }
    if (output["DBClusterEndpointArn"] !== undefined) {
        contents.DBClusterEndpointArn = output["DBClusterEndpointArn"];
    }
    return contents;
};
var deserializeAws_queryCreateDBClusterParameterGroupResult = function (output, context) {
    var contents = {
        DBClusterParameterGroup: undefined,
    };
    if (output["DBClusterParameterGroup"] !== undefined) {
        contents.DBClusterParameterGroup = deserializeAws_queryDBClusterParameterGroup(output["DBClusterParameterGroup"], context);
    }
    return contents;
};
var deserializeAws_queryCreateDBClusterResult = function (output, context) {
    var contents = {
        DBCluster: undefined,
    };
    if (output["DBCluster"] !== undefined) {
        contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
    }
    return contents;
};
var deserializeAws_queryCreateDBClusterSnapshotResult = function (output, context) {
    var contents = {
        DBClusterSnapshot: undefined,
    };
    if (output["DBClusterSnapshot"] !== undefined) {
        contents.DBClusterSnapshot = deserializeAws_queryDBClusterSnapshot(output["DBClusterSnapshot"], context);
    }
    return contents;
};
var deserializeAws_queryCreateDBInstanceResult = function (output, context) {
    var contents = {
        DBInstance: undefined,
    };
    if (output["DBInstance"] !== undefined) {
        contents.DBInstance = deserializeAws_queryDBInstance(output["DBInstance"], context);
    }
    return contents;
};
var deserializeAws_queryCreateDBParameterGroupResult = function (output, context) {
    var contents = {
        DBParameterGroup: undefined,
    };
    if (output["DBParameterGroup"] !== undefined) {
        contents.DBParameterGroup = deserializeAws_queryDBParameterGroup(output["DBParameterGroup"], context);
    }
    return contents;
};
var deserializeAws_queryCreateDBSubnetGroupResult = function (output, context) {
    var contents = {
        DBSubnetGroup: undefined,
    };
    if (output["DBSubnetGroup"] !== undefined) {
        contents.DBSubnetGroup = deserializeAws_queryDBSubnetGroup(output["DBSubnetGroup"], context);
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
var deserializeAws_queryDBCluster = function (output, context) {
    var contents = {
        AllocatedStorage: undefined,
        AvailabilityZones: undefined,
        BackupRetentionPeriod: undefined,
        CharacterSetName: undefined,
        DatabaseName: undefined,
        DBClusterIdentifier: undefined,
        DBClusterParameterGroup: undefined,
        DBSubnetGroup: undefined,
        Status: undefined,
        PercentProgress: undefined,
        EarliestRestorableTime: undefined,
        Endpoint: undefined,
        ReaderEndpoint: undefined,
        MultiAZ: undefined,
        Engine: undefined,
        EngineVersion: undefined,
        LatestRestorableTime: undefined,
        Port: undefined,
        MasterUsername: undefined,
        DBClusterOptionGroupMemberships: undefined,
        PreferredBackupWindow: undefined,
        PreferredMaintenanceWindow: undefined,
        ReplicationSourceIdentifier: undefined,
        ReadReplicaIdentifiers: undefined,
        DBClusterMembers: undefined,
        VpcSecurityGroups: undefined,
        HostedZoneId: undefined,
        StorageEncrypted: undefined,
        KmsKeyId: undefined,
        DbClusterResourceId: undefined,
        DBClusterArn: undefined,
        AssociatedRoles: undefined,
        IAMDatabaseAuthenticationEnabled: undefined,
        CloneGroupId: undefined,
        ClusterCreateTime: undefined,
        CopyTagsToSnapshot: undefined,
        EnabledCloudwatchLogsExports: undefined,
        DeletionProtection: undefined,
        CrossAccountClone: undefined,
        AutomaticRestartTime: undefined,
    };
    if (output["AllocatedStorage"] !== undefined) {
        contents.AllocatedStorage = parseInt(output["AllocatedStorage"]);
    }
    if (output.AvailabilityZones === "") {
        contents.AvailabilityZones = [];
    }
    if (output["AvailabilityZones"] !== undefined && output["AvailabilityZones"]["AvailabilityZone"] !== undefined) {
        contents.AvailabilityZones = deserializeAws_queryAvailabilityZones(__getArrayIfSingleItem(output["AvailabilityZones"]["AvailabilityZone"]), context);
    }
    if (output["BackupRetentionPeriod"] !== undefined) {
        contents.BackupRetentionPeriod = parseInt(output["BackupRetentionPeriod"]);
    }
    if (output["CharacterSetName"] !== undefined) {
        contents.CharacterSetName = output["CharacterSetName"];
    }
    if (output["DatabaseName"] !== undefined) {
        contents.DatabaseName = output["DatabaseName"];
    }
    if (output["DBClusterIdentifier"] !== undefined) {
        contents.DBClusterIdentifier = output["DBClusterIdentifier"];
    }
    if (output["DBClusterParameterGroup"] !== undefined) {
        contents.DBClusterParameterGroup = output["DBClusterParameterGroup"];
    }
    if (output["DBSubnetGroup"] !== undefined) {
        contents.DBSubnetGroup = output["DBSubnetGroup"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["PercentProgress"] !== undefined) {
        contents.PercentProgress = output["PercentProgress"];
    }
    if (output["EarliestRestorableTime"] !== undefined) {
        contents.EarliestRestorableTime = new Date(output["EarliestRestorableTime"]);
    }
    if (output["Endpoint"] !== undefined) {
        contents.Endpoint = output["Endpoint"];
    }
    if (output["ReaderEndpoint"] !== undefined) {
        contents.ReaderEndpoint = output["ReaderEndpoint"];
    }
    if (output["MultiAZ"] !== undefined) {
        contents.MultiAZ = output["MultiAZ"] == "true";
    }
    if (output["Engine"] !== undefined) {
        contents.Engine = output["Engine"];
    }
    if (output["EngineVersion"] !== undefined) {
        contents.EngineVersion = output["EngineVersion"];
    }
    if (output["LatestRestorableTime"] !== undefined) {
        contents.LatestRestorableTime = new Date(output["LatestRestorableTime"]);
    }
    if (output["Port"] !== undefined) {
        contents.Port = parseInt(output["Port"]);
    }
    if (output["MasterUsername"] !== undefined) {
        contents.MasterUsername = output["MasterUsername"];
    }
    if (output.DBClusterOptionGroupMemberships === "") {
        contents.DBClusterOptionGroupMemberships = [];
    }
    if (output["DBClusterOptionGroupMemberships"] !== undefined &&
        output["DBClusterOptionGroupMemberships"]["DBClusterOptionGroup"] !== undefined) {
        contents.DBClusterOptionGroupMemberships = deserializeAws_queryDBClusterOptionGroupMemberships(__getArrayIfSingleItem(output["DBClusterOptionGroupMemberships"]["DBClusterOptionGroup"]), context);
    }
    if (output["PreferredBackupWindow"] !== undefined) {
        contents.PreferredBackupWindow = output["PreferredBackupWindow"];
    }
    if (output["PreferredMaintenanceWindow"] !== undefined) {
        contents.PreferredMaintenanceWindow = output["PreferredMaintenanceWindow"];
    }
    if (output["ReplicationSourceIdentifier"] !== undefined) {
        contents.ReplicationSourceIdentifier = output["ReplicationSourceIdentifier"];
    }
    if (output.ReadReplicaIdentifiers === "") {
        contents.ReadReplicaIdentifiers = [];
    }
    if (output["ReadReplicaIdentifiers"] !== undefined &&
        output["ReadReplicaIdentifiers"]["ReadReplicaIdentifier"] !== undefined) {
        contents.ReadReplicaIdentifiers = deserializeAws_queryReadReplicaIdentifierList(__getArrayIfSingleItem(output["ReadReplicaIdentifiers"]["ReadReplicaIdentifier"]), context);
    }
    if (output.DBClusterMembers === "") {
        contents.DBClusterMembers = [];
    }
    if (output["DBClusterMembers"] !== undefined && output["DBClusterMembers"]["DBClusterMember"] !== undefined) {
        contents.DBClusterMembers = deserializeAws_queryDBClusterMemberList(__getArrayIfSingleItem(output["DBClusterMembers"]["DBClusterMember"]), context);
    }
    if (output.VpcSecurityGroups === "") {
        contents.VpcSecurityGroups = [];
    }
    if (output["VpcSecurityGroups"] !== undefined &&
        output["VpcSecurityGroups"]["VpcSecurityGroupMembership"] !== undefined) {
        contents.VpcSecurityGroups = deserializeAws_queryVpcSecurityGroupMembershipList(__getArrayIfSingleItem(output["VpcSecurityGroups"]["VpcSecurityGroupMembership"]), context);
    }
    if (output["HostedZoneId"] !== undefined) {
        contents.HostedZoneId = output["HostedZoneId"];
    }
    if (output["StorageEncrypted"] !== undefined) {
        contents.StorageEncrypted = output["StorageEncrypted"] == "true";
    }
    if (output["KmsKeyId"] !== undefined) {
        contents.KmsKeyId = output["KmsKeyId"];
    }
    if (output["DbClusterResourceId"] !== undefined) {
        contents.DbClusterResourceId = output["DbClusterResourceId"];
    }
    if (output["DBClusterArn"] !== undefined) {
        contents.DBClusterArn = output["DBClusterArn"];
    }
    if (output.AssociatedRoles === "") {
        contents.AssociatedRoles = [];
    }
    if (output["AssociatedRoles"] !== undefined && output["AssociatedRoles"]["DBClusterRole"] !== undefined) {
        contents.AssociatedRoles = deserializeAws_queryDBClusterRoles(__getArrayIfSingleItem(output["AssociatedRoles"]["DBClusterRole"]), context);
    }
    if (output["IAMDatabaseAuthenticationEnabled"] !== undefined) {
        contents.IAMDatabaseAuthenticationEnabled = output["IAMDatabaseAuthenticationEnabled"] == "true";
    }
    if (output["CloneGroupId"] !== undefined) {
        contents.CloneGroupId = output["CloneGroupId"];
    }
    if (output["ClusterCreateTime"] !== undefined) {
        contents.ClusterCreateTime = new Date(output["ClusterCreateTime"]);
    }
    if (output["CopyTagsToSnapshot"] !== undefined) {
        contents.CopyTagsToSnapshot = output["CopyTagsToSnapshot"] == "true";
    }
    if (output.EnabledCloudwatchLogsExports === "") {
        contents.EnabledCloudwatchLogsExports = [];
    }
    if (output["EnabledCloudwatchLogsExports"] !== undefined &&
        output["EnabledCloudwatchLogsExports"]["member"] !== undefined) {
        contents.EnabledCloudwatchLogsExports = deserializeAws_queryLogTypeList(__getArrayIfSingleItem(output["EnabledCloudwatchLogsExports"]["member"]), context);
    }
    if (output["DeletionProtection"] !== undefined) {
        contents.DeletionProtection = output["DeletionProtection"] == "true";
    }
    if (output["CrossAccountClone"] !== undefined) {
        contents.CrossAccountClone = output["CrossAccountClone"] == "true";
    }
    if (output["AutomaticRestartTime"] !== undefined) {
        contents.AutomaticRestartTime = new Date(output["AutomaticRestartTime"]);
    }
    return contents;
};
var deserializeAws_queryDBClusterAlreadyExistsFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryDBClusterEndpoint = function (output, context) {
    var contents = {
        DBClusterEndpointIdentifier: undefined,
        DBClusterIdentifier: undefined,
        DBClusterEndpointResourceIdentifier: undefined,
        Endpoint: undefined,
        Status: undefined,
        EndpointType: undefined,
        CustomEndpointType: undefined,
        StaticMembers: undefined,
        ExcludedMembers: undefined,
        DBClusterEndpointArn: undefined,
    };
    if (output["DBClusterEndpointIdentifier"] !== undefined) {
        contents.DBClusterEndpointIdentifier = output["DBClusterEndpointIdentifier"];
    }
    if (output["DBClusterIdentifier"] !== undefined) {
        contents.DBClusterIdentifier = output["DBClusterIdentifier"];
    }
    if (output["DBClusterEndpointResourceIdentifier"] !== undefined) {
        contents.DBClusterEndpointResourceIdentifier = output["DBClusterEndpointResourceIdentifier"];
    }
    if (output["Endpoint"] !== undefined) {
        contents.Endpoint = output["Endpoint"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["EndpointType"] !== undefined) {
        contents.EndpointType = output["EndpointType"];
    }
    if (output["CustomEndpointType"] !== undefined) {
        contents.CustomEndpointType = output["CustomEndpointType"];
    }
    if (output.StaticMembers === "") {
        contents.StaticMembers = [];
    }
    if (output["StaticMembers"] !== undefined && output["StaticMembers"]["member"] !== undefined) {
        contents.StaticMembers = deserializeAws_queryStringList(__getArrayIfSingleItem(output["StaticMembers"]["member"]), context);
    }
    if (output.ExcludedMembers === "") {
        contents.ExcludedMembers = [];
    }
    if (output["ExcludedMembers"] !== undefined && output["ExcludedMembers"]["member"] !== undefined) {
        contents.ExcludedMembers = deserializeAws_queryStringList(__getArrayIfSingleItem(output["ExcludedMembers"]["member"]), context);
    }
    if (output["DBClusterEndpointArn"] !== undefined) {
        contents.DBClusterEndpointArn = output["DBClusterEndpointArn"];
    }
    return contents;
};
var deserializeAws_queryDBClusterEndpointAlreadyExistsFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryDBClusterEndpointList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBClusterEndpoint(entry, context);
    });
};
var deserializeAws_queryDBClusterEndpointMessage = function (output, context) {
    var contents = {
        Marker: undefined,
        DBClusterEndpoints: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.DBClusterEndpoints === "") {
        contents.DBClusterEndpoints = [];
    }
    if (output["DBClusterEndpoints"] !== undefined &&
        output["DBClusterEndpoints"]["DBClusterEndpointList"] !== undefined) {
        contents.DBClusterEndpoints = deserializeAws_queryDBClusterEndpointList(__getArrayIfSingleItem(output["DBClusterEndpoints"]["DBClusterEndpointList"]), context);
    }
    return contents;
};
var deserializeAws_queryDBClusterEndpointNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryDBClusterEndpointQuotaExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryDBClusterList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBCluster(entry, context);
    });
};
var deserializeAws_queryDBClusterMember = function (output, context) {
    var contents = {
        DBInstanceIdentifier: undefined,
        IsClusterWriter: undefined,
        DBClusterParameterGroupStatus: undefined,
        PromotionTier: undefined,
    };
    if (output["DBInstanceIdentifier"] !== undefined) {
        contents.DBInstanceIdentifier = output["DBInstanceIdentifier"];
    }
    if (output["IsClusterWriter"] !== undefined) {
        contents.IsClusterWriter = output["IsClusterWriter"] == "true";
    }
    if (output["DBClusterParameterGroupStatus"] !== undefined) {
        contents.DBClusterParameterGroupStatus = output["DBClusterParameterGroupStatus"];
    }
    if (output["PromotionTier"] !== undefined) {
        contents.PromotionTier = parseInt(output["PromotionTier"]);
    }
    return contents;
};
var deserializeAws_queryDBClusterMemberList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBClusterMember(entry, context);
    });
};
var deserializeAws_queryDBClusterMessage = function (output, context) {
    var contents = {
        Marker: undefined,
        DBClusters: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.DBClusters === "") {
        contents.DBClusters = [];
    }
    if (output["DBClusters"] !== undefined && output["DBClusters"]["DBCluster"] !== undefined) {
        contents.DBClusters = deserializeAws_queryDBClusterList(__getArrayIfSingleItem(output["DBClusters"]["DBCluster"]), context);
    }
    return contents;
};
var deserializeAws_queryDBClusterNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryDBClusterOptionGroupMemberships = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBClusterOptionGroupStatus(entry, context);
    });
};
var deserializeAws_queryDBClusterOptionGroupStatus = function (output, context) {
    var contents = {
        DBClusterOptionGroupName: undefined,
        Status: undefined,
    };
    if (output["DBClusterOptionGroupName"] !== undefined) {
        contents.DBClusterOptionGroupName = output["DBClusterOptionGroupName"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
var deserializeAws_queryDBClusterParameterGroup = function (output, context) {
    var contents = {
        DBClusterParameterGroupName: undefined,
        DBParameterGroupFamily: undefined,
        Description: undefined,
        DBClusterParameterGroupArn: undefined,
    };
    if (output["DBClusterParameterGroupName"] !== undefined) {
        contents.DBClusterParameterGroupName = output["DBClusterParameterGroupName"];
    }
    if (output["DBParameterGroupFamily"] !== undefined) {
        contents.DBParameterGroupFamily = output["DBParameterGroupFamily"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["DBClusterParameterGroupArn"] !== undefined) {
        contents.DBClusterParameterGroupArn = output["DBClusterParameterGroupArn"];
    }
    return contents;
};
var deserializeAws_queryDBClusterParameterGroupDetails = function (output, context) {
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
var deserializeAws_queryDBClusterParameterGroupList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBClusterParameterGroup(entry, context);
    });
};
var deserializeAws_queryDBClusterParameterGroupNameMessage = function (output, context) {
    var contents = {
        DBClusterParameterGroupName: undefined,
    };
    if (output["DBClusterParameterGroupName"] !== undefined) {
        contents.DBClusterParameterGroupName = output["DBClusterParameterGroupName"];
    }
    return contents;
};
var deserializeAws_queryDBClusterParameterGroupNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryDBClusterParameterGroupsMessage = function (output, context) {
    var contents = {
        Marker: undefined,
        DBClusterParameterGroups: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.DBClusterParameterGroups === "") {
        contents.DBClusterParameterGroups = [];
    }
    if (output["DBClusterParameterGroups"] !== undefined &&
        output["DBClusterParameterGroups"]["DBClusterParameterGroup"] !== undefined) {
        contents.DBClusterParameterGroups = deserializeAws_queryDBClusterParameterGroupList(__getArrayIfSingleItem(output["DBClusterParameterGroups"]["DBClusterParameterGroup"]), context);
    }
    return contents;
};
var deserializeAws_queryDBClusterQuotaExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryDBClusterRole = function (output, context) {
    var contents = {
        RoleArn: undefined,
        Status: undefined,
        FeatureName: undefined,
    };
    if (output["RoleArn"] !== undefined) {
        contents.RoleArn = output["RoleArn"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["FeatureName"] !== undefined) {
        contents.FeatureName = output["FeatureName"];
    }
    return contents;
};
var deserializeAws_queryDBClusterRoleAlreadyExistsFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryDBClusterRoleNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryDBClusterRoleQuotaExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryDBClusterRoles = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBClusterRole(entry, context);
    });
};
var deserializeAws_queryDBClusterSnapshot = function (output, context) {
    var contents = {
        AvailabilityZones: undefined,
        DBClusterSnapshotIdentifier: undefined,
        DBClusterIdentifier: undefined,
        SnapshotCreateTime: undefined,
        Engine: undefined,
        AllocatedStorage: undefined,
        Status: undefined,
        Port: undefined,
        VpcId: undefined,
        ClusterCreateTime: undefined,
        MasterUsername: undefined,
        EngineVersion: undefined,
        LicenseModel: undefined,
        SnapshotType: undefined,
        PercentProgress: undefined,
        StorageEncrypted: undefined,
        KmsKeyId: undefined,
        DBClusterSnapshotArn: undefined,
        SourceDBClusterSnapshotArn: undefined,
        IAMDatabaseAuthenticationEnabled: undefined,
    };
    if (output.AvailabilityZones === "") {
        contents.AvailabilityZones = [];
    }
    if (output["AvailabilityZones"] !== undefined && output["AvailabilityZones"]["AvailabilityZone"] !== undefined) {
        contents.AvailabilityZones = deserializeAws_queryAvailabilityZones(__getArrayIfSingleItem(output["AvailabilityZones"]["AvailabilityZone"]), context);
    }
    if (output["DBClusterSnapshotIdentifier"] !== undefined) {
        contents.DBClusterSnapshotIdentifier = output["DBClusterSnapshotIdentifier"];
    }
    if (output["DBClusterIdentifier"] !== undefined) {
        contents.DBClusterIdentifier = output["DBClusterIdentifier"];
    }
    if (output["SnapshotCreateTime"] !== undefined) {
        contents.SnapshotCreateTime = new Date(output["SnapshotCreateTime"]);
    }
    if (output["Engine"] !== undefined) {
        contents.Engine = output["Engine"];
    }
    if (output["AllocatedStorage"] !== undefined) {
        contents.AllocatedStorage = parseInt(output["AllocatedStorage"]);
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["Port"] !== undefined) {
        contents.Port = parseInt(output["Port"]);
    }
    if (output["VpcId"] !== undefined) {
        contents.VpcId = output["VpcId"];
    }
    if (output["ClusterCreateTime"] !== undefined) {
        contents.ClusterCreateTime = new Date(output["ClusterCreateTime"]);
    }
    if (output["MasterUsername"] !== undefined) {
        contents.MasterUsername = output["MasterUsername"];
    }
    if (output["EngineVersion"] !== undefined) {
        contents.EngineVersion = output["EngineVersion"];
    }
    if (output["LicenseModel"] !== undefined) {
        contents.LicenseModel = output["LicenseModel"];
    }
    if (output["SnapshotType"] !== undefined) {
        contents.SnapshotType = output["SnapshotType"];
    }
    if (output["PercentProgress"] !== undefined) {
        contents.PercentProgress = parseInt(output["PercentProgress"]);
    }
    if (output["StorageEncrypted"] !== undefined) {
        contents.StorageEncrypted = output["StorageEncrypted"] == "true";
    }
    if (output["KmsKeyId"] !== undefined) {
        contents.KmsKeyId = output["KmsKeyId"];
    }
    if (output["DBClusterSnapshotArn"] !== undefined) {
        contents.DBClusterSnapshotArn = output["DBClusterSnapshotArn"];
    }
    if (output["SourceDBClusterSnapshotArn"] !== undefined) {
        contents.SourceDBClusterSnapshotArn = output["SourceDBClusterSnapshotArn"];
    }
    if (output["IAMDatabaseAuthenticationEnabled"] !== undefined) {
        contents.IAMDatabaseAuthenticationEnabled = output["IAMDatabaseAuthenticationEnabled"] == "true";
    }
    return contents;
};
var deserializeAws_queryDBClusterSnapshotAlreadyExistsFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryDBClusterSnapshotAttribute = function (output, context) {
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
    if (output["AttributeValues"] !== undefined && output["AttributeValues"]["AttributeValue"] !== undefined) {
        contents.AttributeValues = deserializeAws_queryAttributeValueList(__getArrayIfSingleItem(output["AttributeValues"]["AttributeValue"]), context);
    }
    return contents;
};
var deserializeAws_queryDBClusterSnapshotAttributeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBClusterSnapshotAttribute(entry, context);
    });
};
var deserializeAws_queryDBClusterSnapshotAttributesResult = function (output, context) {
    var contents = {
        DBClusterSnapshotIdentifier: undefined,
        DBClusterSnapshotAttributes: undefined,
    };
    if (output["DBClusterSnapshotIdentifier"] !== undefined) {
        contents.DBClusterSnapshotIdentifier = output["DBClusterSnapshotIdentifier"];
    }
    if (output.DBClusterSnapshotAttributes === "") {
        contents.DBClusterSnapshotAttributes = [];
    }
    if (output["DBClusterSnapshotAttributes"] !== undefined &&
        output["DBClusterSnapshotAttributes"]["DBClusterSnapshotAttribute"] !== undefined) {
        contents.DBClusterSnapshotAttributes = deserializeAws_queryDBClusterSnapshotAttributeList(__getArrayIfSingleItem(output["DBClusterSnapshotAttributes"]["DBClusterSnapshotAttribute"]), context);
    }
    return contents;
};
var deserializeAws_queryDBClusterSnapshotList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBClusterSnapshot(entry, context);
    });
};
var deserializeAws_queryDBClusterSnapshotMessage = function (output, context) {
    var contents = {
        Marker: undefined,
        DBClusterSnapshots: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.DBClusterSnapshots === "") {
        contents.DBClusterSnapshots = [];
    }
    if (output["DBClusterSnapshots"] !== undefined && output["DBClusterSnapshots"]["DBClusterSnapshot"] !== undefined) {
        contents.DBClusterSnapshots = deserializeAws_queryDBClusterSnapshotList(__getArrayIfSingleItem(output["DBClusterSnapshots"]["DBClusterSnapshot"]), context);
    }
    return contents;
};
var deserializeAws_queryDBClusterSnapshotNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryDBEngineVersion = function (output, context) {
    var contents = {
        Engine: undefined,
        EngineVersion: undefined,
        DBParameterGroupFamily: undefined,
        DBEngineDescription: undefined,
        DBEngineVersionDescription: undefined,
        DefaultCharacterSet: undefined,
        SupportedCharacterSets: undefined,
        ValidUpgradeTarget: undefined,
        SupportedTimezones: undefined,
        ExportableLogTypes: undefined,
        SupportsLogExportsToCloudwatchLogs: undefined,
        SupportsReadReplica: undefined,
    };
    if (output["Engine"] !== undefined) {
        contents.Engine = output["Engine"];
    }
    if (output["EngineVersion"] !== undefined) {
        contents.EngineVersion = output["EngineVersion"];
    }
    if (output["DBParameterGroupFamily"] !== undefined) {
        contents.DBParameterGroupFamily = output["DBParameterGroupFamily"];
    }
    if (output["DBEngineDescription"] !== undefined) {
        contents.DBEngineDescription = output["DBEngineDescription"];
    }
    if (output["DBEngineVersionDescription"] !== undefined) {
        contents.DBEngineVersionDescription = output["DBEngineVersionDescription"];
    }
    if (output["DefaultCharacterSet"] !== undefined) {
        contents.DefaultCharacterSet = deserializeAws_queryCharacterSet(output["DefaultCharacterSet"], context);
    }
    if (output.SupportedCharacterSets === "") {
        contents.SupportedCharacterSets = [];
    }
    if (output["SupportedCharacterSets"] !== undefined &&
        output["SupportedCharacterSets"]["CharacterSet"] !== undefined) {
        contents.SupportedCharacterSets = deserializeAws_querySupportedCharacterSetsList(__getArrayIfSingleItem(output["SupportedCharacterSets"]["CharacterSet"]), context);
    }
    if (output.ValidUpgradeTarget === "") {
        contents.ValidUpgradeTarget = [];
    }
    if (output["ValidUpgradeTarget"] !== undefined && output["ValidUpgradeTarget"]["UpgradeTarget"] !== undefined) {
        contents.ValidUpgradeTarget = deserializeAws_queryValidUpgradeTargetList(__getArrayIfSingleItem(output["ValidUpgradeTarget"]["UpgradeTarget"]), context);
    }
    if (output.SupportedTimezones === "") {
        contents.SupportedTimezones = [];
    }
    if (output["SupportedTimezones"] !== undefined && output["SupportedTimezones"]["Timezone"] !== undefined) {
        contents.SupportedTimezones = deserializeAws_querySupportedTimezonesList(__getArrayIfSingleItem(output["SupportedTimezones"]["Timezone"]), context);
    }
    if (output.ExportableLogTypes === "") {
        contents.ExportableLogTypes = [];
    }
    if (output["ExportableLogTypes"] !== undefined && output["ExportableLogTypes"]["member"] !== undefined) {
        contents.ExportableLogTypes = deserializeAws_queryLogTypeList(__getArrayIfSingleItem(output["ExportableLogTypes"]["member"]), context);
    }
    if (output["SupportsLogExportsToCloudwatchLogs"] !== undefined) {
        contents.SupportsLogExportsToCloudwatchLogs = output["SupportsLogExportsToCloudwatchLogs"] == "true";
    }
    if (output["SupportsReadReplica"] !== undefined) {
        contents.SupportsReadReplica = output["SupportsReadReplica"] == "true";
    }
    return contents;
};
var deserializeAws_queryDBEngineVersionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBEngineVersion(entry, context);
    });
};
var deserializeAws_queryDBEngineVersionMessage = function (output, context) {
    var contents = {
        Marker: undefined,
        DBEngineVersions: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.DBEngineVersions === "") {
        contents.DBEngineVersions = [];
    }
    if (output["DBEngineVersions"] !== undefined && output["DBEngineVersions"]["DBEngineVersion"] !== undefined) {
        contents.DBEngineVersions = deserializeAws_queryDBEngineVersionList(__getArrayIfSingleItem(output["DBEngineVersions"]["DBEngineVersion"]), context);
    }
    return contents;
};
var deserializeAws_queryDBInstance = function (output, context) {
    var contents = {
        DBInstanceIdentifier: undefined,
        DBInstanceClass: undefined,
        Engine: undefined,
        DBInstanceStatus: undefined,
        MasterUsername: undefined,
        DBName: undefined,
        Endpoint: undefined,
        AllocatedStorage: undefined,
        InstanceCreateTime: undefined,
        PreferredBackupWindow: undefined,
        BackupRetentionPeriod: undefined,
        DBSecurityGroups: undefined,
        VpcSecurityGroups: undefined,
        DBParameterGroups: undefined,
        AvailabilityZone: undefined,
        DBSubnetGroup: undefined,
        PreferredMaintenanceWindow: undefined,
        PendingModifiedValues: undefined,
        LatestRestorableTime: undefined,
        MultiAZ: undefined,
        EngineVersion: undefined,
        AutoMinorVersionUpgrade: undefined,
        ReadReplicaSourceDBInstanceIdentifier: undefined,
        ReadReplicaDBInstanceIdentifiers: undefined,
        ReadReplicaDBClusterIdentifiers: undefined,
        LicenseModel: undefined,
        Iops: undefined,
        OptionGroupMemberships: undefined,
        CharacterSetName: undefined,
        SecondaryAvailabilityZone: undefined,
        PubliclyAccessible: undefined,
        StatusInfos: undefined,
        StorageType: undefined,
        TdeCredentialArn: undefined,
        DbInstancePort: undefined,
        DBClusterIdentifier: undefined,
        StorageEncrypted: undefined,
        KmsKeyId: undefined,
        DbiResourceId: undefined,
        CACertificateIdentifier: undefined,
        DomainMemberships: undefined,
        CopyTagsToSnapshot: undefined,
        MonitoringInterval: undefined,
        EnhancedMonitoringResourceArn: undefined,
        MonitoringRoleArn: undefined,
        PromotionTier: undefined,
        DBInstanceArn: undefined,
        Timezone: undefined,
        IAMDatabaseAuthenticationEnabled: undefined,
        PerformanceInsightsEnabled: undefined,
        PerformanceInsightsKMSKeyId: undefined,
        EnabledCloudwatchLogsExports: undefined,
        DeletionProtection: undefined,
    };
    if (output["DBInstanceIdentifier"] !== undefined) {
        contents.DBInstanceIdentifier = output["DBInstanceIdentifier"];
    }
    if (output["DBInstanceClass"] !== undefined) {
        contents.DBInstanceClass = output["DBInstanceClass"];
    }
    if (output["Engine"] !== undefined) {
        contents.Engine = output["Engine"];
    }
    if (output["DBInstanceStatus"] !== undefined) {
        contents.DBInstanceStatus = output["DBInstanceStatus"];
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
    if (output["AllocatedStorage"] !== undefined) {
        contents.AllocatedStorage = parseInt(output["AllocatedStorage"]);
    }
    if (output["InstanceCreateTime"] !== undefined) {
        contents.InstanceCreateTime = new Date(output["InstanceCreateTime"]);
    }
    if (output["PreferredBackupWindow"] !== undefined) {
        contents.PreferredBackupWindow = output["PreferredBackupWindow"];
    }
    if (output["BackupRetentionPeriod"] !== undefined) {
        contents.BackupRetentionPeriod = parseInt(output["BackupRetentionPeriod"]);
    }
    if (output.DBSecurityGroups === "") {
        contents.DBSecurityGroups = [];
    }
    if (output["DBSecurityGroups"] !== undefined && output["DBSecurityGroups"]["DBSecurityGroup"] !== undefined) {
        contents.DBSecurityGroups = deserializeAws_queryDBSecurityGroupMembershipList(__getArrayIfSingleItem(output["DBSecurityGroups"]["DBSecurityGroup"]), context);
    }
    if (output.VpcSecurityGroups === "") {
        contents.VpcSecurityGroups = [];
    }
    if (output["VpcSecurityGroups"] !== undefined &&
        output["VpcSecurityGroups"]["VpcSecurityGroupMembership"] !== undefined) {
        contents.VpcSecurityGroups = deserializeAws_queryVpcSecurityGroupMembershipList(__getArrayIfSingleItem(output["VpcSecurityGroups"]["VpcSecurityGroupMembership"]), context);
    }
    if (output.DBParameterGroups === "") {
        contents.DBParameterGroups = [];
    }
    if (output["DBParameterGroups"] !== undefined && output["DBParameterGroups"]["DBParameterGroup"] !== undefined) {
        contents.DBParameterGroups = deserializeAws_queryDBParameterGroupStatusList(__getArrayIfSingleItem(output["DBParameterGroups"]["DBParameterGroup"]), context);
    }
    if (output["AvailabilityZone"] !== undefined) {
        contents.AvailabilityZone = output["AvailabilityZone"];
    }
    if (output["DBSubnetGroup"] !== undefined) {
        contents.DBSubnetGroup = deserializeAws_queryDBSubnetGroup(output["DBSubnetGroup"], context);
    }
    if (output["PreferredMaintenanceWindow"] !== undefined) {
        contents.PreferredMaintenanceWindow = output["PreferredMaintenanceWindow"];
    }
    if (output["PendingModifiedValues"] !== undefined) {
        contents.PendingModifiedValues = deserializeAws_queryPendingModifiedValues(output["PendingModifiedValues"], context);
    }
    if (output["LatestRestorableTime"] !== undefined) {
        contents.LatestRestorableTime = new Date(output["LatestRestorableTime"]);
    }
    if (output["MultiAZ"] !== undefined) {
        contents.MultiAZ = output["MultiAZ"] == "true";
    }
    if (output["EngineVersion"] !== undefined) {
        contents.EngineVersion = output["EngineVersion"];
    }
    if (output["AutoMinorVersionUpgrade"] !== undefined) {
        contents.AutoMinorVersionUpgrade = output["AutoMinorVersionUpgrade"] == "true";
    }
    if (output["ReadReplicaSourceDBInstanceIdentifier"] !== undefined) {
        contents.ReadReplicaSourceDBInstanceIdentifier = output["ReadReplicaSourceDBInstanceIdentifier"];
    }
    if (output.ReadReplicaDBInstanceIdentifiers === "") {
        contents.ReadReplicaDBInstanceIdentifiers = [];
    }
    if (output["ReadReplicaDBInstanceIdentifiers"] !== undefined &&
        output["ReadReplicaDBInstanceIdentifiers"]["ReadReplicaDBInstanceIdentifier"] !== undefined) {
        contents.ReadReplicaDBInstanceIdentifiers = deserializeAws_queryReadReplicaDBInstanceIdentifierList(__getArrayIfSingleItem(output["ReadReplicaDBInstanceIdentifiers"]["ReadReplicaDBInstanceIdentifier"]), context);
    }
    if (output.ReadReplicaDBClusterIdentifiers === "") {
        contents.ReadReplicaDBClusterIdentifiers = [];
    }
    if (output["ReadReplicaDBClusterIdentifiers"] !== undefined &&
        output["ReadReplicaDBClusterIdentifiers"]["ReadReplicaDBClusterIdentifier"] !== undefined) {
        contents.ReadReplicaDBClusterIdentifiers = deserializeAws_queryReadReplicaDBClusterIdentifierList(__getArrayIfSingleItem(output["ReadReplicaDBClusterIdentifiers"]["ReadReplicaDBClusterIdentifier"]), context);
    }
    if (output["LicenseModel"] !== undefined) {
        contents.LicenseModel = output["LicenseModel"];
    }
    if (output["Iops"] !== undefined) {
        contents.Iops = parseInt(output["Iops"]);
    }
    if (output.OptionGroupMemberships === "") {
        contents.OptionGroupMemberships = [];
    }
    if (output["OptionGroupMemberships"] !== undefined &&
        output["OptionGroupMemberships"]["OptionGroupMembership"] !== undefined) {
        contents.OptionGroupMemberships = deserializeAws_queryOptionGroupMembershipList(__getArrayIfSingleItem(output["OptionGroupMemberships"]["OptionGroupMembership"]), context);
    }
    if (output["CharacterSetName"] !== undefined) {
        contents.CharacterSetName = output["CharacterSetName"];
    }
    if (output["SecondaryAvailabilityZone"] !== undefined) {
        contents.SecondaryAvailabilityZone = output["SecondaryAvailabilityZone"];
    }
    if (output["PubliclyAccessible"] !== undefined) {
        contents.PubliclyAccessible = output["PubliclyAccessible"] == "true";
    }
    if (output.StatusInfos === "") {
        contents.StatusInfos = [];
    }
    if (output["StatusInfos"] !== undefined && output["StatusInfos"]["DBInstanceStatusInfo"] !== undefined) {
        contents.StatusInfos = deserializeAws_queryDBInstanceStatusInfoList(__getArrayIfSingleItem(output["StatusInfos"]["DBInstanceStatusInfo"]), context);
    }
    if (output["StorageType"] !== undefined) {
        contents.StorageType = output["StorageType"];
    }
    if (output["TdeCredentialArn"] !== undefined) {
        contents.TdeCredentialArn = output["TdeCredentialArn"];
    }
    if (output["DbInstancePort"] !== undefined) {
        contents.DbInstancePort = parseInt(output["DbInstancePort"]);
    }
    if (output["DBClusterIdentifier"] !== undefined) {
        contents.DBClusterIdentifier = output["DBClusterIdentifier"];
    }
    if (output["StorageEncrypted"] !== undefined) {
        contents.StorageEncrypted = output["StorageEncrypted"] == "true";
    }
    if (output["KmsKeyId"] !== undefined) {
        contents.KmsKeyId = output["KmsKeyId"];
    }
    if (output["DbiResourceId"] !== undefined) {
        contents.DbiResourceId = output["DbiResourceId"];
    }
    if (output["CACertificateIdentifier"] !== undefined) {
        contents.CACertificateIdentifier = output["CACertificateIdentifier"];
    }
    if (output.DomainMemberships === "") {
        contents.DomainMemberships = [];
    }
    if (output["DomainMemberships"] !== undefined && output["DomainMemberships"]["DomainMembership"] !== undefined) {
        contents.DomainMemberships = deserializeAws_queryDomainMembershipList(__getArrayIfSingleItem(output["DomainMemberships"]["DomainMembership"]), context);
    }
    if (output["CopyTagsToSnapshot"] !== undefined) {
        contents.CopyTagsToSnapshot = output["CopyTagsToSnapshot"] == "true";
    }
    if (output["MonitoringInterval"] !== undefined) {
        contents.MonitoringInterval = parseInt(output["MonitoringInterval"]);
    }
    if (output["EnhancedMonitoringResourceArn"] !== undefined) {
        contents.EnhancedMonitoringResourceArn = output["EnhancedMonitoringResourceArn"];
    }
    if (output["MonitoringRoleArn"] !== undefined) {
        contents.MonitoringRoleArn = output["MonitoringRoleArn"];
    }
    if (output["PromotionTier"] !== undefined) {
        contents.PromotionTier = parseInt(output["PromotionTier"]);
    }
    if (output["DBInstanceArn"] !== undefined) {
        contents.DBInstanceArn = output["DBInstanceArn"];
    }
    if (output["Timezone"] !== undefined) {
        contents.Timezone = output["Timezone"];
    }
    if (output["IAMDatabaseAuthenticationEnabled"] !== undefined) {
        contents.IAMDatabaseAuthenticationEnabled = output["IAMDatabaseAuthenticationEnabled"] == "true";
    }
    if (output["PerformanceInsightsEnabled"] !== undefined) {
        contents.PerformanceInsightsEnabled = output["PerformanceInsightsEnabled"] == "true";
    }
    if (output["PerformanceInsightsKMSKeyId"] !== undefined) {
        contents.PerformanceInsightsKMSKeyId = output["PerformanceInsightsKMSKeyId"];
    }
    if (output.EnabledCloudwatchLogsExports === "") {
        contents.EnabledCloudwatchLogsExports = [];
    }
    if (output["EnabledCloudwatchLogsExports"] !== undefined &&
        output["EnabledCloudwatchLogsExports"]["member"] !== undefined) {
        contents.EnabledCloudwatchLogsExports = deserializeAws_queryLogTypeList(__getArrayIfSingleItem(output["EnabledCloudwatchLogsExports"]["member"]), context);
    }
    if (output["DeletionProtection"] !== undefined) {
        contents.DeletionProtection = output["DeletionProtection"] == "true";
    }
    return contents;
};
var deserializeAws_queryDBInstanceAlreadyExistsFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryDBInstanceList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBInstance(entry, context);
    });
};
var deserializeAws_queryDBInstanceMessage = function (output, context) {
    var contents = {
        Marker: undefined,
        DBInstances: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.DBInstances === "") {
        contents.DBInstances = [];
    }
    if (output["DBInstances"] !== undefined && output["DBInstances"]["DBInstance"] !== undefined) {
        contents.DBInstances = deserializeAws_queryDBInstanceList(__getArrayIfSingleItem(output["DBInstances"]["DBInstance"]), context);
    }
    return contents;
};
var deserializeAws_queryDBInstanceNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryDBInstanceStatusInfo = function (output, context) {
    var contents = {
        StatusType: undefined,
        Normal: undefined,
        Status: undefined,
        Message: undefined,
    };
    if (output["StatusType"] !== undefined) {
        contents.StatusType = output["StatusType"];
    }
    if (output["Normal"] !== undefined) {
        contents.Normal = output["Normal"] == "true";
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryDBInstanceStatusInfoList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBInstanceStatusInfo(entry, context);
    });
};
var deserializeAws_queryDBParameterGroup = function (output, context) {
    var contents = {
        DBParameterGroupName: undefined,
        DBParameterGroupFamily: undefined,
        Description: undefined,
        DBParameterGroupArn: undefined,
    };
    if (output["DBParameterGroupName"] !== undefined) {
        contents.DBParameterGroupName = output["DBParameterGroupName"];
    }
    if (output["DBParameterGroupFamily"] !== undefined) {
        contents.DBParameterGroupFamily = output["DBParameterGroupFamily"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["DBParameterGroupArn"] !== undefined) {
        contents.DBParameterGroupArn = output["DBParameterGroupArn"];
    }
    return contents;
};
var deserializeAws_queryDBParameterGroupAlreadyExistsFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryDBParameterGroupDetails = function (output, context) {
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
var deserializeAws_queryDBParameterGroupList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBParameterGroup(entry, context);
    });
};
var deserializeAws_queryDBParameterGroupNameMessage = function (output, context) {
    var contents = {
        DBParameterGroupName: undefined,
    };
    if (output["DBParameterGroupName"] !== undefined) {
        contents.DBParameterGroupName = output["DBParameterGroupName"];
    }
    return contents;
};
var deserializeAws_queryDBParameterGroupNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryDBParameterGroupQuotaExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryDBParameterGroupsMessage = function (output, context) {
    var contents = {
        Marker: undefined,
        DBParameterGroups: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.DBParameterGroups === "") {
        contents.DBParameterGroups = [];
    }
    if (output["DBParameterGroups"] !== undefined && output["DBParameterGroups"]["DBParameterGroup"] !== undefined) {
        contents.DBParameterGroups = deserializeAws_queryDBParameterGroupList(__getArrayIfSingleItem(output["DBParameterGroups"]["DBParameterGroup"]), context);
    }
    return contents;
};
var deserializeAws_queryDBParameterGroupStatus = function (output, context) {
    var contents = {
        DBParameterGroupName: undefined,
        ParameterApplyStatus: undefined,
    };
    if (output["DBParameterGroupName"] !== undefined) {
        contents.DBParameterGroupName = output["DBParameterGroupName"];
    }
    if (output["ParameterApplyStatus"] !== undefined) {
        contents.ParameterApplyStatus = output["ParameterApplyStatus"];
    }
    return contents;
};
var deserializeAws_queryDBParameterGroupStatusList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBParameterGroupStatus(entry, context);
    });
};
var deserializeAws_queryDBSecurityGroupMembership = function (output, context) {
    var contents = {
        DBSecurityGroupName: undefined,
        Status: undefined,
    };
    if (output["DBSecurityGroupName"] !== undefined) {
        contents.DBSecurityGroupName = output["DBSecurityGroupName"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
var deserializeAws_queryDBSecurityGroupMembershipList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBSecurityGroupMembership(entry, context);
    });
};
var deserializeAws_queryDBSecurityGroupNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryDBSnapshotAlreadyExistsFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryDBSnapshotNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryDBSubnetGroup = function (output, context) {
    var contents = {
        DBSubnetGroupName: undefined,
        DBSubnetGroupDescription: undefined,
        VpcId: undefined,
        SubnetGroupStatus: undefined,
        Subnets: undefined,
        DBSubnetGroupArn: undefined,
    };
    if (output["DBSubnetGroupName"] !== undefined) {
        contents.DBSubnetGroupName = output["DBSubnetGroupName"];
    }
    if (output["DBSubnetGroupDescription"] !== undefined) {
        contents.DBSubnetGroupDescription = output["DBSubnetGroupDescription"];
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
    if (output["DBSubnetGroupArn"] !== undefined) {
        contents.DBSubnetGroupArn = output["DBSubnetGroupArn"];
    }
    return contents;
};
var deserializeAws_queryDBSubnetGroupAlreadyExistsFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZs = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryDBSubnetGroupMessage = function (output, context) {
    var contents = {
        Marker: undefined,
        DBSubnetGroups: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.DBSubnetGroups === "") {
        contents.DBSubnetGroups = [];
    }
    if (output["DBSubnetGroups"] !== undefined && output["DBSubnetGroups"]["DBSubnetGroup"] !== undefined) {
        contents.DBSubnetGroups = deserializeAws_queryDBSubnetGroups(__getArrayIfSingleItem(output["DBSubnetGroups"]["DBSubnetGroup"]), context);
    }
    return contents;
};
var deserializeAws_queryDBSubnetGroupNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryDBSubnetGroupQuotaExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryDBSubnetGroups = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBSubnetGroup(entry, context);
    });
};
var deserializeAws_queryDBSubnetQuotaExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryDBUpgradeDependencyFailureFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryDeleteDBClusterEndpointOutput = function (output, context) {
    var contents = {
        DBClusterEndpointIdentifier: undefined,
        DBClusterIdentifier: undefined,
        DBClusterEndpointResourceIdentifier: undefined,
        Endpoint: undefined,
        Status: undefined,
        EndpointType: undefined,
        CustomEndpointType: undefined,
        StaticMembers: undefined,
        ExcludedMembers: undefined,
        DBClusterEndpointArn: undefined,
    };
    if (output["DBClusterEndpointIdentifier"] !== undefined) {
        contents.DBClusterEndpointIdentifier = output["DBClusterEndpointIdentifier"];
    }
    if (output["DBClusterIdentifier"] !== undefined) {
        contents.DBClusterIdentifier = output["DBClusterIdentifier"];
    }
    if (output["DBClusterEndpointResourceIdentifier"] !== undefined) {
        contents.DBClusterEndpointResourceIdentifier = output["DBClusterEndpointResourceIdentifier"];
    }
    if (output["Endpoint"] !== undefined) {
        contents.Endpoint = output["Endpoint"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["EndpointType"] !== undefined) {
        contents.EndpointType = output["EndpointType"];
    }
    if (output["CustomEndpointType"] !== undefined) {
        contents.CustomEndpointType = output["CustomEndpointType"];
    }
    if (output.StaticMembers === "") {
        contents.StaticMembers = [];
    }
    if (output["StaticMembers"] !== undefined && output["StaticMembers"]["member"] !== undefined) {
        contents.StaticMembers = deserializeAws_queryStringList(__getArrayIfSingleItem(output["StaticMembers"]["member"]), context);
    }
    if (output.ExcludedMembers === "") {
        contents.ExcludedMembers = [];
    }
    if (output["ExcludedMembers"] !== undefined && output["ExcludedMembers"]["member"] !== undefined) {
        contents.ExcludedMembers = deserializeAws_queryStringList(__getArrayIfSingleItem(output["ExcludedMembers"]["member"]), context);
    }
    if (output["DBClusterEndpointArn"] !== undefined) {
        contents.DBClusterEndpointArn = output["DBClusterEndpointArn"];
    }
    return contents;
};
var deserializeAws_queryDeleteDBClusterResult = function (output, context) {
    var contents = {
        DBCluster: undefined,
    };
    if (output["DBCluster"] !== undefined) {
        contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
    }
    return contents;
};
var deserializeAws_queryDeleteDBClusterSnapshotResult = function (output, context) {
    var contents = {
        DBClusterSnapshot: undefined,
    };
    if (output["DBClusterSnapshot"] !== undefined) {
        contents.DBClusterSnapshot = deserializeAws_queryDBClusterSnapshot(output["DBClusterSnapshot"], context);
    }
    return contents;
};
var deserializeAws_queryDeleteDBInstanceResult = function (output, context) {
    var contents = {
        DBInstance: undefined,
    };
    if (output["DBInstance"] !== undefined) {
        contents.DBInstance = deserializeAws_queryDBInstance(output["DBInstance"], context);
    }
    return contents;
};
var deserializeAws_queryDeleteEventSubscriptionResult = function (output, context) {
    var contents = {
        EventSubscription: undefined,
    };
    if (output["EventSubscription"] !== undefined) {
        contents.EventSubscription = deserializeAws_queryEventSubscription(output["EventSubscription"], context);
    }
    return contents;
};
var deserializeAws_queryDescribeDBClusterSnapshotAttributesResult = function (output, context) {
    var contents = {
        DBClusterSnapshotAttributesResult: undefined,
    };
    if (output["DBClusterSnapshotAttributesResult"] !== undefined) {
        contents.DBClusterSnapshotAttributesResult = deserializeAws_queryDBClusterSnapshotAttributesResult(output["DBClusterSnapshotAttributesResult"], context);
    }
    return contents;
};
var deserializeAws_queryDescribeEngineDefaultClusterParametersResult = function (output, context) {
    var contents = {
        EngineDefaults: undefined,
    };
    if (output["EngineDefaults"] !== undefined) {
        contents.EngineDefaults = deserializeAws_queryEngineDefaults(output["EngineDefaults"], context);
    }
    return contents;
};
var deserializeAws_queryDescribeEngineDefaultParametersResult = function (output, context) {
    var contents = {
        EngineDefaults: undefined,
    };
    if (output["EngineDefaults"] !== undefined) {
        contents.EngineDefaults = deserializeAws_queryEngineDefaults(output["EngineDefaults"], context);
    }
    return contents;
};
var deserializeAws_queryDescribeValidDBInstanceModificationsResult = function (output, context) {
    var contents = {
        ValidDBInstanceModificationsMessage: undefined,
    };
    if (output["ValidDBInstanceModificationsMessage"] !== undefined) {
        contents.ValidDBInstanceModificationsMessage = deserializeAws_queryValidDBInstanceModificationsMessage(output["ValidDBInstanceModificationsMessage"], context);
    }
    return contents;
};
var deserializeAws_queryDomainMembership = function (output, context) {
    var contents = {
        Domain: undefined,
        Status: undefined,
        FQDN: undefined,
        IAMRoleName: undefined,
    };
    if (output["Domain"] !== undefined) {
        contents.Domain = output["Domain"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["FQDN"] !== undefined) {
        contents.FQDN = output["FQDN"];
    }
    if (output["IAMRoleName"] !== undefined) {
        contents.IAMRoleName = output["IAMRoleName"];
    }
    return contents;
};
var deserializeAws_queryDomainMembershipList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDomainMembership(entry, context);
    });
};
var deserializeAws_queryDomainNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryDoubleRange = function (output, context) {
    var contents = {
        From: undefined,
        To: undefined,
    };
    if (output["From"] !== undefined) {
        contents.From = parseFloat(output["From"]);
    }
    if (output["To"] !== undefined) {
        contents.To = parseFloat(output["To"]);
    }
    return contents;
};
var deserializeAws_queryDoubleRangeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDoubleRange(entry, context);
    });
};
var deserializeAws_queryEndpoint = function (output, context) {
    var contents = {
        Address: undefined,
        Port: undefined,
        HostedZoneId: undefined,
    };
    if (output["Address"] !== undefined) {
        contents.Address = output["Address"];
    }
    if (output["Port"] !== undefined) {
        contents.Port = parseInt(output["Port"]);
    }
    if (output["HostedZoneId"] !== undefined) {
        contents.HostedZoneId = output["HostedZoneId"];
    }
    return contents;
};
var deserializeAws_queryEngineDefaults = function (output, context) {
    var contents = {
        DBParameterGroupFamily: undefined,
        Marker: undefined,
        Parameters: undefined,
    };
    if (output["DBParameterGroupFamily"] !== undefined) {
        contents.DBParameterGroupFamily = output["DBParameterGroupFamily"];
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
var deserializeAws_queryEvent = function (output, context) {
    var contents = {
        SourceIdentifier: undefined,
        SourceType: undefined,
        Message: undefined,
        EventCategories: undefined,
        Date: undefined,
        SourceArn: undefined,
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
    if (output["Date"] !== undefined) {
        contents.Date = new Date(output["Date"]);
    }
    if (output["SourceArn"] !== undefined) {
        contents.SourceArn = output["SourceArn"];
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
        EventCategories: undefined,
    };
    if (output["SourceType"] !== undefined) {
        contents.SourceType = output["SourceType"];
    }
    if (output.EventCategories === "") {
        contents.EventCategories = [];
    }
    if (output["EventCategories"] !== undefined && output["EventCategories"]["EventCategory"] !== undefined) {
        contents.EventCategories = deserializeAws_queryEventCategoriesList(__getArrayIfSingleItem(output["EventCategories"]["EventCategory"]), context);
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
        Enabled: undefined,
        EventSubscriptionArn: undefined,
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
        contents.SubscriptionCreationTime = output["SubscriptionCreationTime"];
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
    if (output["Enabled"] !== undefined) {
        contents.Enabled = output["Enabled"] == "true";
    }
    if (output["EventSubscriptionArn"] !== undefined) {
        contents.EventSubscriptionArn = output["EventSubscriptionArn"];
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
var deserializeAws_queryFailoverDBClusterResult = function (output, context) {
    var contents = {
        DBCluster: undefined,
    };
    if (output["DBCluster"] !== undefined) {
        contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
    }
    return contents;
};
var deserializeAws_queryInstanceQuotaExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInsufficientDBClusterCapacityFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInsufficientDBInstanceCapacityFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInsufficientStorageClusterCapacityFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidDBClusterEndpointStateFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidDBClusterSnapshotStateFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidDBClusterStateFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidDBInstanceStateFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidDBParameterGroupStateFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidDBSecurityGroupStateFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidDBSnapshotStateFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidDBSubnetGroupStateFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidDBSubnetStateFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidEventSubscriptionStateFault = function (output, context) {
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
var deserializeAws_queryInvalidSubnet = function (output, context) {
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
var deserializeAws_queryKMSKeyNotAccessibleFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryLogTypeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryModifyDBClusterEndpointOutput = function (output, context) {
    var contents = {
        DBClusterEndpointIdentifier: undefined,
        DBClusterIdentifier: undefined,
        DBClusterEndpointResourceIdentifier: undefined,
        Endpoint: undefined,
        Status: undefined,
        EndpointType: undefined,
        CustomEndpointType: undefined,
        StaticMembers: undefined,
        ExcludedMembers: undefined,
        DBClusterEndpointArn: undefined,
    };
    if (output["DBClusterEndpointIdentifier"] !== undefined) {
        contents.DBClusterEndpointIdentifier = output["DBClusterEndpointIdentifier"];
    }
    if (output["DBClusterIdentifier"] !== undefined) {
        contents.DBClusterIdentifier = output["DBClusterIdentifier"];
    }
    if (output["DBClusterEndpointResourceIdentifier"] !== undefined) {
        contents.DBClusterEndpointResourceIdentifier = output["DBClusterEndpointResourceIdentifier"];
    }
    if (output["Endpoint"] !== undefined) {
        contents.Endpoint = output["Endpoint"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["EndpointType"] !== undefined) {
        contents.EndpointType = output["EndpointType"];
    }
    if (output["CustomEndpointType"] !== undefined) {
        contents.CustomEndpointType = output["CustomEndpointType"];
    }
    if (output.StaticMembers === "") {
        contents.StaticMembers = [];
    }
    if (output["StaticMembers"] !== undefined && output["StaticMembers"]["member"] !== undefined) {
        contents.StaticMembers = deserializeAws_queryStringList(__getArrayIfSingleItem(output["StaticMembers"]["member"]), context);
    }
    if (output.ExcludedMembers === "") {
        contents.ExcludedMembers = [];
    }
    if (output["ExcludedMembers"] !== undefined && output["ExcludedMembers"]["member"] !== undefined) {
        contents.ExcludedMembers = deserializeAws_queryStringList(__getArrayIfSingleItem(output["ExcludedMembers"]["member"]), context);
    }
    if (output["DBClusterEndpointArn"] !== undefined) {
        contents.DBClusterEndpointArn = output["DBClusterEndpointArn"];
    }
    return contents;
};
var deserializeAws_queryModifyDBClusterResult = function (output, context) {
    var contents = {
        DBCluster: undefined,
    };
    if (output["DBCluster"] !== undefined) {
        contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
    }
    return contents;
};
var deserializeAws_queryModifyDBClusterSnapshotAttributeResult = function (output, context) {
    var contents = {
        DBClusterSnapshotAttributesResult: undefined,
    };
    if (output["DBClusterSnapshotAttributesResult"] !== undefined) {
        contents.DBClusterSnapshotAttributesResult = deserializeAws_queryDBClusterSnapshotAttributesResult(output["DBClusterSnapshotAttributesResult"], context);
    }
    return contents;
};
var deserializeAws_queryModifyDBInstanceResult = function (output, context) {
    var contents = {
        DBInstance: undefined,
    };
    if (output["DBInstance"] !== undefined) {
        contents.DBInstance = deserializeAws_queryDBInstance(output["DBInstance"], context);
    }
    return contents;
};
var deserializeAws_queryModifyDBSubnetGroupResult = function (output, context) {
    var contents = {
        DBSubnetGroup: undefined,
    };
    if (output["DBSubnetGroup"] !== undefined) {
        contents.DBSubnetGroup = deserializeAws_queryDBSubnetGroup(output["DBSubnetGroup"], context);
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
var deserializeAws_queryOptionGroupMembership = function (output, context) {
    var contents = {
        OptionGroupName: undefined,
        Status: undefined,
    };
    if (output["OptionGroupName"] !== undefined) {
        contents.OptionGroupName = output["OptionGroupName"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
var deserializeAws_queryOptionGroupMembershipList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryOptionGroupMembership(entry, context);
    });
};
var deserializeAws_queryOptionGroupNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryOrderableDBInstanceOption = function (output, context) {
    var contents = {
        Engine: undefined,
        EngineVersion: undefined,
        DBInstanceClass: undefined,
        LicenseModel: undefined,
        AvailabilityZones: undefined,
        MultiAZCapable: undefined,
        ReadReplicaCapable: undefined,
        Vpc: undefined,
        SupportsStorageEncryption: undefined,
        StorageType: undefined,
        SupportsIops: undefined,
        SupportsEnhancedMonitoring: undefined,
        SupportsIAMDatabaseAuthentication: undefined,
        SupportsPerformanceInsights: undefined,
        MinStorageSize: undefined,
        MaxStorageSize: undefined,
        MinIopsPerDbInstance: undefined,
        MaxIopsPerDbInstance: undefined,
        MinIopsPerGib: undefined,
        MaxIopsPerGib: undefined,
    };
    if (output["Engine"] !== undefined) {
        contents.Engine = output["Engine"];
    }
    if (output["EngineVersion"] !== undefined) {
        contents.EngineVersion = output["EngineVersion"];
    }
    if (output["DBInstanceClass"] !== undefined) {
        contents.DBInstanceClass = output["DBInstanceClass"];
    }
    if (output["LicenseModel"] !== undefined) {
        contents.LicenseModel = output["LicenseModel"];
    }
    if (output.AvailabilityZones === "") {
        contents.AvailabilityZones = [];
    }
    if (output["AvailabilityZones"] !== undefined && output["AvailabilityZones"]["AvailabilityZone"] !== undefined) {
        contents.AvailabilityZones = deserializeAws_queryAvailabilityZoneList(__getArrayIfSingleItem(output["AvailabilityZones"]["AvailabilityZone"]), context);
    }
    if (output["MultiAZCapable"] !== undefined) {
        contents.MultiAZCapable = output["MultiAZCapable"] == "true";
    }
    if (output["ReadReplicaCapable"] !== undefined) {
        contents.ReadReplicaCapable = output["ReadReplicaCapable"] == "true";
    }
    if (output["Vpc"] !== undefined) {
        contents.Vpc = output["Vpc"] == "true";
    }
    if (output["SupportsStorageEncryption"] !== undefined) {
        contents.SupportsStorageEncryption = output["SupportsStorageEncryption"] == "true";
    }
    if (output["StorageType"] !== undefined) {
        contents.StorageType = output["StorageType"];
    }
    if (output["SupportsIops"] !== undefined) {
        contents.SupportsIops = output["SupportsIops"] == "true";
    }
    if (output["SupportsEnhancedMonitoring"] !== undefined) {
        contents.SupportsEnhancedMonitoring = output["SupportsEnhancedMonitoring"] == "true";
    }
    if (output["SupportsIAMDatabaseAuthentication"] !== undefined) {
        contents.SupportsIAMDatabaseAuthentication = output["SupportsIAMDatabaseAuthentication"] == "true";
    }
    if (output["SupportsPerformanceInsights"] !== undefined) {
        contents.SupportsPerformanceInsights = output["SupportsPerformanceInsights"] == "true";
    }
    if (output["MinStorageSize"] !== undefined) {
        contents.MinStorageSize = parseInt(output["MinStorageSize"]);
    }
    if (output["MaxStorageSize"] !== undefined) {
        contents.MaxStorageSize = parseInt(output["MaxStorageSize"]);
    }
    if (output["MinIopsPerDbInstance"] !== undefined) {
        contents.MinIopsPerDbInstance = parseInt(output["MinIopsPerDbInstance"]);
    }
    if (output["MaxIopsPerDbInstance"] !== undefined) {
        contents.MaxIopsPerDbInstance = parseInt(output["MaxIopsPerDbInstance"]);
    }
    if (output["MinIopsPerGib"] !== undefined) {
        contents.MinIopsPerGib = parseFloat(output["MinIopsPerGib"]);
    }
    if (output["MaxIopsPerGib"] !== undefined) {
        contents.MaxIopsPerGib = parseFloat(output["MaxIopsPerGib"]);
    }
    return contents;
};
var deserializeAws_queryOrderableDBInstanceOptionsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryOrderableDBInstanceOption(entry, context);
    });
};
var deserializeAws_queryOrderableDBInstanceOptionsMessage = function (output, context) {
    var contents = {
        OrderableDBInstanceOptions: undefined,
        Marker: undefined,
    };
    if (output.OrderableDBInstanceOptions === "") {
        contents.OrderableDBInstanceOptions = [];
    }
    if (output["OrderableDBInstanceOptions"] !== undefined &&
        output["OrderableDBInstanceOptions"]["OrderableDBInstanceOption"] !== undefined) {
        contents.OrderableDBInstanceOptions = deserializeAws_queryOrderableDBInstanceOptionsList(__getArrayIfSingleItem(output["OrderableDBInstanceOptions"]["OrderableDBInstanceOption"]), context);
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
        ApplyType: undefined,
        DataType: undefined,
        AllowedValues: undefined,
        IsModifiable: undefined,
        MinimumEngineVersion: undefined,
        ApplyMethod: undefined,
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
    if (output["ApplyType"] !== undefined) {
        contents.ApplyType = output["ApplyType"];
    }
    if (output["DataType"] !== undefined) {
        contents.DataType = output["DataType"];
    }
    if (output["AllowedValues"] !== undefined) {
        contents.AllowedValues = output["AllowedValues"];
    }
    if (output["IsModifiable"] !== undefined) {
        contents.IsModifiable = output["IsModifiable"] == "true";
    }
    if (output["MinimumEngineVersion"] !== undefined) {
        contents.MinimumEngineVersion = output["MinimumEngineVersion"];
    }
    if (output["ApplyMethod"] !== undefined) {
        contents.ApplyMethod = output["ApplyMethod"];
    }
    return contents;
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
var deserializeAws_queryPendingCloudwatchLogsExports = function (output, context) {
    var contents = {
        LogTypesToEnable: undefined,
        LogTypesToDisable: undefined,
    };
    if (output.LogTypesToEnable === "") {
        contents.LogTypesToEnable = [];
    }
    if (output["LogTypesToEnable"] !== undefined && output["LogTypesToEnable"]["member"] !== undefined) {
        contents.LogTypesToEnable = deserializeAws_queryLogTypeList(__getArrayIfSingleItem(output["LogTypesToEnable"]["member"]), context);
    }
    if (output.LogTypesToDisable === "") {
        contents.LogTypesToDisable = [];
    }
    if (output["LogTypesToDisable"] !== undefined && output["LogTypesToDisable"]["member"] !== undefined) {
        contents.LogTypesToDisable = deserializeAws_queryLogTypeList(__getArrayIfSingleItem(output["LogTypesToDisable"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryPendingMaintenanceAction = function (output, context) {
    var contents = {
        Action: undefined,
        AutoAppliedAfterDate: undefined,
        ForcedApplyDate: undefined,
        OptInStatus: undefined,
        CurrentApplyDate: undefined,
        Description: undefined,
    };
    if (output["Action"] !== undefined) {
        contents.Action = output["Action"];
    }
    if (output["AutoAppliedAfterDate"] !== undefined) {
        contents.AutoAppliedAfterDate = new Date(output["AutoAppliedAfterDate"]);
    }
    if (output["ForcedApplyDate"] !== undefined) {
        contents.ForcedApplyDate = new Date(output["ForcedApplyDate"]);
    }
    if (output["OptInStatus"] !== undefined) {
        contents.OptInStatus = output["OptInStatus"];
    }
    if (output["CurrentApplyDate"] !== undefined) {
        contents.CurrentApplyDate = new Date(output["CurrentApplyDate"]);
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    return contents;
};
var deserializeAws_queryPendingMaintenanceActionDetails = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryPendingMaintenanceAction(entry, context);
    });
};
var deserializeAws_queryPendingMaintenanceActions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryResourcePendingMaintenanceActions(entry, context);
    });
};
var deserializeAws_queryPendingMaintenanceActionsMessage = function (output, context) {
    var contents = {
        PendingMaintenanceActions: undefined,
        Marker: undefined,
    };
    if (output.PendingMaintenanceActions === "") {
        contents.PendingMaintenanceActions = [];
    }
    if (output["PendingMaintenanceActions"] !== undefined &&
        output["PendingMaintenanceActions"]["ResourcePendingMaintenanceActions"] !== undefined) {
        contents.PendingMaintenanceActions = deserializeAws_queryPendingMaintenanceActions(__getArrayIfSingleItem(output["PendingMaintenanceActions"]["ResourcePendingMaintenanceActions"]), context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryPendingModifiedValues = function (output, context) {
    var contents = {
        DBInstanceClass: undefined,
        AllocatedStorage: undefined,
        MasterUserPassword: undefined,
        Port: undefined,
        BackupRetentionPeriod: undefined,
        MultiAZ: undefined,
        EngineVersion: undefined,
        LicenseModel: undefined,
        Iops: undefined,
        DBInstanceIdentifier: undefined,
        StorageType: undefined,
        CACertificateIdentifier: undefined,
        DBSubnetGroupName: undefined,
        PendingCloudwatchLogsExports: undefined,
    };
    if (output["DBInstanceClass"] !== undefined) {
        contents.DBInstanceClass = output["DBInstanceClass"];
    }
    if (output["AllocatedStorage"] !== undefined) {
        contents.AllocatedStorage = parseInt(output["AllocatedStorage"]);
    }
    if (output["MasterUserPassword"] !== undefined) {
        contents.MasterUserPassword = output["MasterUserPassword"];
    }
    if (output["Port"] !== undefined) {
        contents.Port = parseInt(output["Port"]);
    }
    if (output["BackupRetentionPeriod"] !== undefined) {
        contents.BackupRetentionPeriod = parseInt(output["BackupRetentionPeriod"]);
    }
    if (output["MultiAZ"] !== undefined) {
        contents.MultiAZ = output["MultiAZ"] == "true";
    }
    if (output["EngineVersion"] !== undefined) {
        contents.EngineVersion = output["EngineVersion"];
    }
    if (output["LicenseModel"] !== undefined) {
        contents.LicenseModel = output["LicenseModel"];
    }
    if (output["Iops"] !== undefined) {
        contents.Iops = parseInt(output["Iops"]);
    }
    if (output["DBInstanceIdentifier"] !== undefined) {
        contents.DBInstanceIdentifier = output["DBInstanceIdentifier"];
    }
    if (output["StorageType"] !== undefined) {
        contents.StorageType = output["StorageType"];
    }
    if (output["CACertificateIdentifier"] !== undefined) {
        contents.CACertificateIdentifier = output["CACertificateIdentifier"];
    }
    if (output["DBSubnetGroupName"] !== undefined) {
        contents.DBSubnetGroupName = output["DBSubnetGroupName"];
    }
    if (output["PendingCloudwatchLogsExports"] !== undefined) {
        contents.PendingCloudwatchLogsExports = deserializeAws_queryPendingCloudwatchLogsExports(output["PendingCloudwatchLogsExports"], context);
    }
    return contents;
};
var deserializeAws_queryPromoteReadReplicaDBClusterResult = function (output, context) {
    var contents = {
        DBCluster: undefined,
    };
    if (output["DBCluster"] !== undefined) {
        contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
    }
    return contents;
};
var deserializeAws_queryProvisionedIopsNotAvailableInAZFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryRange = function (output, context) {
    var contents = {
        From: undefined,
        To: undefined,
        Step: undefined,
    };
    if (output["From"] !== undefined) {
        contents.From = parseInt(output["From"]);
    }
    if (output["To"] !== undefined) {
        contents.To = parseInt(output["To"]);
    }
    if (output["Step"] !== undefined) {
        contents.Step = parseInt(output["Step"]);
    }
    return contents;
};
var deserializeAws_queryRangeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryRange(entry, context);
    });
};
var deserializeAws_queryReadReplicaDBClusterIdentifierList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryReadReplicaDBInstanceIdentifierList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryReadReplicaIdentifierList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryRebootDBInstanceResult = function (output, context) {
    var contents = {
        DBInstance: undefined,
    };
    if (output["DBInstance"] !== undefined) {
        contents.DBInstance = deserializeAws_queryDBInstance(output["DBInstance"], context);
    }
    return contents;
};
var deserializeAws_queryRemoveSourceIdentifierFromSubscriptionResult = function (output, context) {
    var contents = {
        EventSubscription: undefined,
    };
    if (output["EventSubscription"] !== undefined) {
        contents.EventSubscription = deserializeAws_queryEventSubscription(output["EventSubscription"], context);
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
var deserializeAws_queryResourcePendingMaintenanceActions = function (output, context) {
    var contents = {
        ResourceIdentifier: undefined,
        PendingMaintenanceActionDetails: undefined,
    };
    if (output["ResourceIdentifier"] !== undefined) {
        contents.ResourceIdentifier = output["ResourceIdentifier"];
    }
    if (output.PendingMaintenanceActionDetails === "") {
        contents.PendingMaintenanceActionDetails = [];
    }
    if (output["PendingMaintenanceActionDetails"] !== undefined &&
        output["PendingMaintenanceActionDetails"]["PendingMaintenanceAction"] !== undefined) {
        contents.PendingMaintenanceActionDetails = deserializeAws_queryPendingMaintenanceActionDetails(__getArrayIfSingleItem(output["PendingMaintenanceActionDetails"]["PendingMaintenanceAction"]), context);
    }
    return contents;
};
var deserializeAws_queryRestoreDBClusterFromSnapshotResult = function (output, context) {
    var contents = {
        DBCluster: undefined,
    };
    if (output["DBCluster"] !== undefined) {
        contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
    }
    return contents;
};
var deserializeAws_queryRestoreDBClusterToPointInTimeResult = function (output, context) {
    var contents = {
        DBCluster: undefined,
    };
    if (output["DBCluster"] !== undefined) {
        contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
    }
    return contents;
};
var deserializeAws_querySharedSnapshotQuotaExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_querySnapshotQuotaExceededFault = function (output, context) {
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
var deserializeAws_queryStartDBClusterResult = function (output, context) {
    var contents = {
        DBCluster: undefined,
    };
    if (output["DBCluster"] !== undefined) {
        contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
    }
    return contents;
};
var deserializeAws_queryStopDBClusterResult = function (output, context) {
    var contents = {
        DBCluster: undefined,
    };
    if (output["DBCluster"] !== undefined) {
        contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
    }
    return contents;
};
var deserializeAws_queryStorageQuotaExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryStorageTypeNotSupportedFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryStringList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
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
var deserializeAws_querySubscriptionNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_querySupportedCharacterSetsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryCharacterSet(entry, context);
    });
};
var deserializeAws_querySupportedTimezonesList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryTimezone(entry, context);
    });
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
var deserializeAws_queryTagListMessage = function (output, context) {
    var contents = {
        TagList: undefined,
    };
    if (output.TagList === "") {
        contents.TagList = [];
    }
    if (output["TagList"] !== undefined && output["TagList"]["Tag"] !== undefined) {
        contents.TagList = deserializeAws_queryTagList(__getArrayIfSingleItem(output["TagList"]["Tag"]), context);
    }
    return contents;
};
var deserializeAws_queryTimezone = function (output, context) {
    var contents = {
        TimezoneName: undefined,
    };
    if (output["TimezoneName"] !== undefined) {
        contents.TimezoneName = output["TimezoneName"];
    }
    return contents;
};
var deserializeAws_queryUpgradeTarget = function (output, context) {
    var contents = {
        Engine: undefined,
        EngineVersion: undefined,
        Description: undefined,
        AutoUpgrade: undefined,
        IsMajorVersionUpgrade: undefined,
    };
    if (output["Engine"] !== undefined) {
        contents.Engine = output["Engine"];
    }
    if (output["EngineVersion"] !== undefined) {
        contents.EngineVersion = output["EngineVersion"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["AutoUpgrade"] !== undefined) {
        contents.AutoUpgrade = output["AutoUpgrade"] == "true";
    }
    if (output["IsMajorVersionUpgrade"] !== undefined) {
        contents.IsMajorVersionUpgrade = output["IsMajorVersionUpgrade"] == "true";
    }
    return contents;
};
var deserializeAws_queryValidDBInstanceModificationsMessage = function (output, context) {
    var contents = {
        Storage: undefined,
    };
    if (output.Storage === "") {
        contents.Storage = [];
    }
    if (output["Storage"] !== undefined && output["Storage"]["ValidStorageOptions"] !== undefined) {
        contents.Storage = deserializeAws_queryValidStorageOptionsList(__getArrayIfSingleItem(output["Storage"]["ValidStorageOptions"]), context);
    }
    return contents;
};
var deserializeAws_queryValidStorageOptions = function (output, context) {
    var contents = {
        StorageType: undefined,
        StorageSize: undefined,
        ProvisionedIops: undefined,
        IopsToStorageRatio: undefined,
    };
    if (output["StorageType"] !== undefined) {
        contents.StorageType = output["StorageType"];
    }
    if (output.StorageSize === "") {
        contents.StorageSize = [];
    }
    if (output["StorageSize"] !== undefined && output["StorageSize"]["Range"] !== undefined) {
        contents.StorageSize = deserializeAws_queryRangeList(__getArrayIfSingleItem(output["StorageSize"]["Range"]), context);
    }
    if (output.ProvisionedIops === "") {
        contents.ProvisionedIops = [];
    }
    if (output["ProvisionedIops"] !== undefined && output["ProvisionedIops"]["Range"] !== undefined) {
        contents.ProvisionedIops = deserializeAws_queryRangeList(__getArrayIfSingleItem(output["ProvisionedIops"]["Range"]), context);
    }
    if (output.IopsToStorageRatio === "") {
        contents.IopsToStorageRatio = [];
    }
    if (output["IopsToStorageRatio"] !== undefined && output["IopsToStorageRatio"]["DoubleRange"] !== undefined) {
        contents.IopsToStorageRatio = deserializeAws_queryDoubleRangeList(__getArrayIfSingleItem(output["IopsToStorageRatio"]["DoubleRange"]), context);
    }
    return contents;
};
var deserializeAws_queryValidStorageOptionsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryValidStorageOptions(entry, context);
    });
};
var deserializeAws_queryValidUpgradeTargetList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryUpgradeTarget(entry, context);
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